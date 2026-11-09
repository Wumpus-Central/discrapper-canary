function r(t, e) {
    return { past: [...t.past, t.present], present: e, future: [] };
}
function l(t, e, n) {
    return { x: t.x + e, y: t.y + n };
}
function i(t, e, n) {
    switch (t.kind) {
        case "marker":
        case "erase":
            return { ...t, points: t.points.map((t) => l(t, e, n)) };
        case "circle":
        case "square":
            return { ...t, from: l(t.from, e, n), to: l(t.to, e, n) };
        case "text":
            return { ...t, at: l(t.at, e, n) };
    }
}
function a(t, e, n) {
    let r = n.x - e.x,
        l = n.y - e.y,
        i = r * r + l * l,
        a = 0 === i ? 0 : Math.max(0, Math.min(1, ((t.x - e.x) * r + (t.y - e.y) * l) / i));
    return Math.hypot(t.x - (e.x + a * r), t.y - (e.y + a * l));
}
function o(t, e) {
    return { x: t.x * e.width, y: t.y * e.height };
}
function u(t, e) {
    switch (t.kind) {
        case "marker":
        case "erase": {
            let n = t.points.map((t) => o(t, e)),
                r = (t.width * e.width) / 2,
                l = n.map((t) => t.x),
                i = n.map((t) => t.y),
                a = Math.min(...l) - r,
                u = Math.min(...i) - r;
            return { x: a, y: u, width: Math.max(...l) + r - a, height: Math.max(...i) + r - u };
        }
        case "circle":
        case "square": {
            let n = o(t.from, e),
                r = o(t.to, e),
                l = (t.width * e.width) / 2;
            return {
                x: Math.min(n.x, r.x) - l,
                y: Math.min(n.y, r.y) - l,
                width: Math.abs(r.x - n.x) + 2 * l,
                height: Math.abs(r.y - n.y) + 2 * l,
            };
        }
        case "text": {
            let n = o(t.at, e),
                r = t.size * e.width;
            return { x: n.x, y: n.y, width: t.text.length * r * 0.6, height: r };
        }
    }
}
(n(134528),
    n(947204),
    n.d(
        e,
        {},
        {
            Vp: function (t, e) {
                switch (e.type) {
                    case "commit":
                        return r(t, [...t.present, e.shape]);
                    case "move":
                        if ((0 === e.dx && 0 === e.dy) || !t.present.some((t) => t.id === e.id)) return t;
                        return r(
                            t,
                            t.present.map((t) => (t.id === e.id ? i(t, e.dx, e.dy) : t)),
                        );
                    case "remove": {
                        let n = t.present.filter((t) => t.id !== e.id);
                        return n.length === t.present.length ? t : r(t, n);
                    }
                    case "clear":
                        return 0 === t.present.length ? t : r(t, []);
                    case "undo": {
                        let e = t.past.at(-1);
                        if (null == e) return t;
                        return { past: t.past.slice(0, -1), present: e, future: [t.present, ...t.future] };
                    }
                    case "redo": {
                        let [e, ...n] = t.future;
                        if (null == e) return t;
                        return { past: [...t.past, t.present], present: e, future: n };
                    }
                }
            },
            WF: function (t, e, n, r) {
                for (let l = t.length - 1; l >= 0; l--)
                    if (
                        (function (t, e, n, r) {
                            let l = o(e, n);
                            switch (t.kind) {
                                case "erase":
                                    return !1;
                                case "marker": {
                                    let e = r + (t.width * n.width) / 2,
                                        i = t.points.map((t) => o(t, n));
                                    if (1 === i.length) return Math.hypot(l.x - i[0].x, l.y - i[0].y) <= e;
                                    for (let t = 1; t < i.length; t++) if (a(l, i[t - 1], i[t]) <= e) return !0;
                                    return !1;
                                }
                                case "square": {
                                    let e = o(t.from, n),
                                        i = o(t.to, n),
                                        u = r + (t.width * n.width) / 2,
                                        s = [e, { x: i.x, y: e.y }, i, { x: e.x, y: i.y }];
                                    return s.some((t, e) => a(l, t, s[(e + 1) % 4]) <= u);
                                }
                                case "circle": {
                                    let e = o(t.from, n),
                                        i = o(t.to, n),
                                        a = Math.abs(i.x - e.x) / 2,
                                        u = Math.abs(i.y - e.y) / 2;
                                    if (0 === a || 0 === u) return !1;
                                    let s = (e.x + i.x) / 2,
                                        c = (e.y + i.y) / 2;
                                    return (
                                        Math.abs(Math.hypot((l.x - s) / a, (l.y - c) / u) - 1) <=
                                        (r + (t.width * n.width) / 2) / Math.min(a, u)
                                    );
                                }
                                case "text": {
                                    let e = u(t, n);
                                    return (
                                        l.x >= e.x - r &&
                                        l.x <= e.x + e.width + r &&
                                        l.y >= e.y - r &&
                                        l.y <= e.y + e.height + r
                                    );
                                }
                            }
                        })(t[l], e, n, r)
                    )
                        return t[l];
                return null;
            },
            jG: function (t) {
                return t.some((t) => "erase" !== t.kind);
            },
            k_: u,
            oy: function (t, e) {
                switch (t.kind) {
                    case "marker":
                        return t.points.length > 1;
                    case "erase":
                        return t.points.length > 0;
                    case "circle":
                    case "square": {
                        let n = t.width * e.width;
                        return (
                            Math.abs(t.to.x - t.from.x) * e.width >= n && Math.abs(t.to.y - t.from.y) * e.height >= n
                        );
                    }
                    case "text":
                        return "" !== t.text.trim();
                }
            },
            vd: { past: [], present: [], future: [] },
            y: i,
        },
    ));
