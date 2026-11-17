function l(t, e) {
    return { past: [...t.past, t.present], present: e, future: [] };
}
function r(t, e, n) {
    return { x: t.x + e, y: t.y + n };
}
function i(t, e, n) {
    switch (t.kind) {
        case "marker":
        case "erase":
            return { ...t, points: t.points.map((t) => r(t, e, n)) };
        case "circle":
        case "square":
            return { ...t, from: r(t.from, e, n), to: r(t.to, e, n) };
        case "text":
            return { ...t, at: r(t.at, e, n) };
    }
}
function a(t, e, n) {
    let l = n.x - e.x,
        r = n.y - e.y,
        i = l * l + r * r,
        a = 0 === i ? 0 : Math.max(0, Math.min(1, ((t.x - e.x) * l + (t.y - e.y) * r) / i));
    return Math.hypot(t.x - (e.x + a * l), t.y - (e.y + a * r));
}
function o(t, e) {
    return { x: t.x * e.width, y: t.y * e.height };
}
function u(t, e) {
    switch (t.kind) {
        case "marker":
        case "erase": {
            let n = t.points.map((t) => o(t, e)),
                l = (t.width * e.width) / 2,
                r = n.map((t) => t.x),
                i = n.map((t) => t.y),
                a = Math.min(...r) - l,
                u = Math.min(...i) - l;
            return { x: a, y: u, width: Math.max(...r) + l - a, height: Math.max(...i) + l - u };
        }
        case "circle":
        case "square": {
            let n = o(t.from, e),
                l = o(t.to, e),
                r = (t.width * e.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = o(t.at, e),
                l = t.size * e.width;
            return { x: n.x, y: n.y, width: t.text.length * l * 0.6, height: l };
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
                        return l(t, [...t.present, e.shape]);
                    case "move":
                        if ((0 === e.dx && 0 === e.dy) || !t.present.some((t) => t.id === e.id)) return t;
                        return l(
                            t,
                            t.present.map((t) => (t.id === e.id ? i(t, e.dx, e.dy) : t)),
                        );
                    case "remove": {
                        let n = t.present.filter((t) => t.id !== e.id);
                        return n.length === t.present.length ? t : l(t, n);
                    }
                    case "clear":
                        return 0 === t.present.length ? t : l(t, []);
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
            WF: function (t, e, n, l) {
                for (let r = t.length - 1; r >= 0; r--)
                    if (
                        (function (t, e, n, l) {
                            let r = o(e, n);
                            switch (t.kind) {
                                case "erase":
                                    return !1;
                                case "marker": {
                                    let e = l + (t.width * n.width) / 2,
                                        i = t.points.map((t) => o(t, n));
                                    if (1 === i.length) return Math.hypot(r.x - i[0].x, r.y - i[0].y) <= e;
                                    for (let t = 1; t < i.length; t++) if (a(r, i[t - 1], i[t]) <= e) return !0;
                                    return !1;
                                }
                                case "square": {
                                    let e = o(t.from, n),
                                        i = o(t.to, n),
                                        u = l + (t.width * n.width) / 2,
                                        s = [e, { x: i.x, y: e.y }, i, { x: e.x, y: i.y }];
                                    return s.some((t, e) => a(r, t, s[(e + 1) % 4]) <= u);
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
                                        Math.abs(Math.hypot((r.x - s) / a, (r.y - c) / u) - 1) <=
                                        (l + (t.width * n.width) / 2) / Math.min(a, u)
                                    );
                                }
                                case "text": {
                                    let e = u(t, n);
                                    return (
                                        r.x >= e.x - l &&
                                        r.x <= e.x + e.width + l &&
                                        r.y >= e.y - l &&
                                        r.y <= e.y + e.height + l
                                    );
                                }
                            }
                        })(t[r], e, n, l)
                    )
                        return t[r];
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
