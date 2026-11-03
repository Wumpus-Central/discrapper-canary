(n.d(t, { Vp: () => o, WF: () => h, jG: () => u, k_: () => f, oy: () => c, vd: () => r, y: () => a }),
    n(134528),
    n(947204));
let r = { past: [], present: [], future: [] };
function l(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function i(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function a(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => i(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: i(e.from, t, n), to: i(e.to, t, n) };
        case "text":
            return { ...e, at: i(e.at, t, n) };
    }
}
function o(e, t) {
    switch (t.type) {
        case "commit":
            return l(e, [...e.present, t.shape]);
        case "move":
            if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
            return l(
                e,
                e.present.map((e) => (e.id === t.id ? a(e, t.dx, t.dy) : e)),
            );
        case "remove": {
            let n = e.present.filter((e) => e.id !== t.id);
            return n.length === e.present.length ? e : l(e, n);
        }
        case "clear":
            return 0 === e.present.length ? e : l(e, []);
        case "undo": {
            let t = e.past.at(-1);
            if (null == t) return e;
            return { past: e.past.slice(0, -1), present: t, future: [e.present, ...e.future] };
        }
        case "redo": {
            let [t, ...n] = e.future;
            if (null == t) return e;
            return { past: [...e.past, e.present], present: t, future: n };
        }
    }
}
function u(e) {
    return e.some((e) => "erase" !== e.kind);
}
function c(e, t) {
    switch (e.kind) {
        case "marker":
            return e.points.length > 1;
        case "erase":
            return e.points.length > 0;
        case "circle":
        case "square": {
            let n = e.width * t.width;
            return Math.abs(e.to.x - e.from.x) * t.width >= n && Math.abs(e.to.y - e.from.y) * t.height >= n;
        }
        case "text":
            return "" !== e.text.trim();
    }
}
function s(e, t, n) {
    let r = n.x - t.x,
        l = n.y - t.y,
        i = r * r + l * l,
        a = 0 === i ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * r + (e.y - t.y) * l) / i));
    return Math.hypot(e.x - (t.x + a * r), e.y - (t.y + a * l));
}
function d(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function f(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => d(e, t)),
                r = (e.width * t.width) / 2,
                l = n.map((e) => e.x),
                i = n.map((e) => e.y),
                a = Math.min(...l) - r,
                o = Math.min(...i) - r;
            return { x: a, y: o, width: Math.max(...l) + r - a, height: Math.max(...i) + r - o };
        }
        case "circle":
        case "square": {
            let n = d(e.from, t),
                r = d(e.to, t),
                l = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, r.x) - l,
                y: Math.min(n.y, r.y) - l,
                width: Math.abs(r.x - n.x) + 2 * l,
                height: Math.abs(r.y - n.y) + 2 * l,
            };
        }
        case "text": {
            let n = d(e.at, t),
                r = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * r * 0.6, height: r };
        }
    }
}
function h(e, t, n, r) {
    for (let l = e.length - 1; l >= 0; l--)
        if (
            (function (e, t, n, r) {
                let l = d(t, n);
                switch (e.kind) {
                    case "erase":
                        return !1;
                    case "marker": {
                        let t = r + (e.width * n.width) / 2,
                            i = e.points.map((e) => d(e, n));
                        if (1 === i.length) return Math.hypot(l.x - i[0].x, l.y - i[0].y) <= t;
                        for (let e = 1; e < i.length; e++) if (s(l, i[e - 1], i[e]) <= t) return !0;
                        return !1;
                    }
                    case "square": {
                        let t = d(e.from, n),
                            i = d(e.to, n),
                            a = r + (e.width * n.width) / 2,
                            o = [t, { x: i.x, y: t.y }, i, { x: t.x, y: i.y }];
                        return o.some((e, t) => s(l, e, o[(t + 1) % 4]) <= a);
                    }
                    case "circle": {
                        let t = d(e.from, n),
                            i = d(e.to, n),
                            a = Math.abs(i.x - t.x) / 2,
                            o = Math.abs(i.y - t.y) / 2;
                        if (0 === a || 0 === o) return !1;
                        let u = (t.x + i.x) / 2,
                            c = (t.y + i.y) / 2;
                        return (
                            Math.abs(Math.hypot((l.x - u) / a, (l.y - c) / o) - 1) <=
                            (r + (e.width * n.width) / 2) / Math.min(a, o)
                        );
                    }
                    case "text": {
                        let t = f(e, n);
                        return (
                            l.x >= t.x - r && l.x <= t.x + t.width + r && l.y >= t.y - r && l.y <= t.y + t.height + r
                        );
                    }
                }
            })(e[l], t, n, r)
        )
            return e[l];
    return null;
}
