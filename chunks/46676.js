(n.d(t, { Vp: () => s, WF: () => h, jG: () => u, k_: () => f, oy: () => o, vd: () => l, y: () => i }),
    n(134528),
    n(947204));
let l = { past: [], present: [], future: [] };
function r(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function a(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function i(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => a(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: a(e.from, t, n), to: a(e.to, t, n) };
        case "text":
            return { ...e, at: a(e.at, t, n) };
    }
}
function s(e, t) {
    switch (t.type) {
        case "commit":
            return r(e, [...e.present, t.shape]);
        case "move":
            if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
            return r(
                e,
                e.present.map((e) => (e.id === t.id ? i(e, t.dx, t.dy) : e)),
            );
        case "remove": {
            let n = e.present.filter((e) => e.id !== t.id);
            return n.length === e.present.length ? e : r(e, n);
        }
        case "clear":
            return 0 === e.present.length ? e : r(e, []);
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
function o(e, t) {
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
function c(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        a = l * l + r * r,
        i = 0 === a ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / a));
    return Math.hypot(e.x - (t.x + i * l), e.y - (t.y + i * r));
}
function d(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function f(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => d(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                a = n.map((e) => e.y),
                i = Math.min(...r) - l,
                s = Math.min(...a) - l;
            return { x: i, y: s, width: Math.max(...r) + l - i, height: Math.max(...a) + l - s };
        }
        case "circle":
        case "square": {
            let n = d(e.from, t),
                l = d(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = d(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function h(e, t, n, l) {
    for (let r = e.length - 1; r >= 0; r--)
        if (
            (function (e, t, n, l) {
                let r = d(t, n);
                switch (e.kind) {
                    case "erase":
                        return !1;
                    case "marker": {
                        let t = l + (e.width * n.width) / 2,
                            a = e.points.map((e) => d(e, n));
                        if (1 === a.length) return Math.hypot(r.x - a[0].x, r.y - a[0].y) <= t;
                        for (let e = 1; e < a.length; e++) if (c(r, a[e - 1], a[e]) <= t) return !0;
                        return !1;
                    }
                    case "square": {
                        let t = d(e.from, n),
                            a = d(e.to, n),
                            i = l + (e.width * n.width) / 2,
                            s = [t, { x: a.x, y: t.y }, a, { x: t.x, y: a.y }];
                        return s.some((e, t) => c(r, e, s[(t + 1) % 4]) <= i);
                    }
                    case "circle": {
                        let t = d(e.from, n),
                            a = d(e.to, n),
                            i = Math.abs(a.x - t.x) / 2,
                            s = Math.abs(a.y - t.y) / 2;
                        if (0 === i || 0 === s) return !1;
                        let u = (t.x + a.x) / 2,
                            o = (t.y + a.y) / 2;
                        return (
                            Math.abs(Math.hypot((r.x - u) / i, (r.y - o) / s) - 1) <=
                            (l + (e.width * n.width) / 2) / Math.min(i, s)
                        );
                    }
                    case "text": {
                        let t = f(e, n);
                        return (
                            r.x >= t.x - l && r.x <= t.x + t.width + l && r.y >= t.y - l && r.y <= t.y + t.height + l
                        );
                    }
                }
            })(e[r], t, n, l)
        )
            return e[r];
    return null;
}
