function l(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function r(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function i(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => r(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: r(e.from, t, n), to: r(e.to, t, n) };
        case "text":
            return { ...e, at: r(e.at, t, n) };
    }
}
function a(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        i = l * l + r * r,
        a = 0 === i ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / i));
    return Math.hypot(e.x - (t.x + a * l), e.y - (t.y + a * r));
}
function o(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function u(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => o(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                i = n.map((e) => e.y),
                a = Math.min(...r) - l,
                u = Math.min(...i) - l;
            return { x: a, y: u, width: Math.max(...r) + l - a, height: Math.max(...i) + l - u };
        }
        case "circle":
        case "square": {
            let n = o(e.from, t),
                l = o(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = o(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
(n(134528),
    n(947204),
    n.d(
        t,
        {},
        {
            Vp: function (e, t) {
                switch (t.type) {
                    case "commit":
                        return l(e, [...e.present, t.shape]);
                    case "move":
                        if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                        return l(
                            e,
                            e.present.map((e) => (e.id === t.id ? i(e, t.dx, t.dy) : e)),
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
            },
            WF: function (e, t, n, l) {
                for (let r = e.length - 1; r >= 0; r--)
                    if (
                        (function (e, t, n, l) {
                            let r = o(t, n);
                            switch (e.kind) {
                                case "erase":
                                    return !1;
                                case "marker": {
                                    let t = l + (e.width * n.width) / 2,
                                        i = e.points.map((e) => o(e, n));
                                    if (1 === i.length) return Math.hypot(r.x - i[0].x, r.y - i[0].y) <= t;
                                    for (let e = 1; e < i.length; e++) if (a(r, i[e - 1], i[e]) <= t) return !0;
                                    return !1;
                                }
                                case "square": {
                                    let t = o(e.from, n),
                                        i = o(e.to, n),
                                        u = l + (e.width * n.width) / 2,
                                        s = [t, { x: i.x, y: t.y }, i, { x: t.x, y: i.y }];
                                    return s.some((e, t) => a(r, e, s[(t + 1) % 4]) <= u);
                                }
                                case "circle": {
                                    let t = o(e.from, n),
                                        i = o(e.to, n),
                                        a = Math.abs(i.x - t.x) / 2,
                                        u = Math.abs(i.y - t.y) / 2;
                                    if (0 === a || 0 === u) return !1;
                                    let s = (t.x + i.x) / 2,
                                        c = (t.y + i.y) / 2;
                                    return (
                                        Math.abs(Math.hypot((r.x - s) / a, (r.y - c) / u) - 1) <=
                                        (l + (e.width * n.width) / 2) / Math.min(a, u)
                                    );
                                }
                                case "text": {
                                    let t = u(e, n);
                                    return (
                                        r.x >= t.x - l &&
                                        r.x <= t.x + t.width + l &&
                                        r.y >= t.y - l &&
                                        r.y <= t.y + t.height + l
                                    );
                                }
                            }
                        })(e[r], t, n, l)
                    )
                        return e[r];
                return null;
            },
            jG: function (e) {
                return e.some((e) => "erase" !== e.kind);
            },
            k_: u,
            oy: function (e, t) {
                switch (e.kind) {
                    case "marker":
                        return e.points.length > 1;
                    case "erase":
                        return e.points.length > 0;
                    case "circle":
                    case "square": {
                        let n = e.width * t.width;
                        return (
                            Math.abs(e.to.x - e.from.x) * t.width >= n && Math.abs(e.to.y - e.from.y) * t.height >= n
                        );
                    }
                    case "text":
                        return "" !== e.text.trim();
                }
            },
            vd: { past: [], present: [], future: [] },
            y: i,
        },
    ));
