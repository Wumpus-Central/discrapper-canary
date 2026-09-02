n.d(t, { A: () => C });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(494012),
    o = n(17928),
    c = n(323073),
    d = n(616356),
    u = n(280450),
    h = n(544299),
    p = n(861094),
    m = n(170865),
    A = n(948822),
    f = n(321486),
    x = n(989952);
let g = 16 / 9;
function C(e) {
    let { channelId: t, corners: n, roomWidth: a } = e,
        {
            screenBounds: C,
            screenClipPath: y,
            center: j,
            boundingBoxCorners: I,
        } = l.useMemo(() => {
            let e = (function (e) {
                    let { topLeft: t, topRight: n, bottomRight: i, bottomLeft: l } = e,
                        a = [t.x, n.x, i.x, l.x],
                        s = [t.y, n.y, i.y, l.y],
                        r = Math.min(...a),
                        o = Math.min(...s);
                    return { left: r, top: o, width: Math.max(...a) - r, height: Math.max(...s) - o };
                })(n),
                t = (function (e, t) {
                    function n(e) {
                        let { x: n, y: i } = e;
                        return { x: ((n - t.left) / t.width) * 100, y: ((i - t.top) / t.height) * 100 };
                    }
                    return {
                        topLeft: n(e.topLeft),
                        topRight: n(e.topRight),
                        bottomRight: n(e.bottomRight),
                        bottomLeft: n(e.bottomLeft),
                    };
                })(n, e);
            return {
                screenBounds: e,
                screenClipPath: (function (e) {
                    let { topLeft: t, topRight: n, bottomRight: i, bottomLeft: l } = e;
                    return `polygon(${[t, n, i, l]
                        .map((e) => {
                            let { x: t, y: n } = e;
                            return `${t}% ${n}%`;
                        })
                        .join(", ")})`;
                })(t),
                center: (function (e) {
                    let { topLeft: t, topRight: n, bottomRight: i, bottomLeft: l } = e;
                    return { x: (t.x + n.x + i.x + l.x) / 4, y: (t.y + n.y + i.y + l.y) / 4 };
                })(t),
                boundingBoxCorners: t,
            };
        }, [n]),
        { ref: N, width: v, height: E } = (0, r.Ay)(),
        b = l.useMemo(() => (null == v || null == E ? null : (0, p.t)(I, v, E, g)), [I, v, E]),
        _ = Math.min(48, Math.max(20, 0.025 * a)),
        T = (0, o.yK)([d.A, u.default], () => {
            if ((0, c.F2)(t)) return [];
            let e = u.default.getId();
            return d.A.getAllApplicationStreamsForChannel(t).sort(
                (t, n) => Number(t.ownerId === e) - Number(n.ownerId === e),
            );
        }),
        S = (0, h.Y1)(t),
        R = l.useMemo(() => (null == E ? 0 : -(((I.topLeft.y + I.topRight.y) / 2 / 100) * E)), [I, E]);
    return (0, i.jsxs)("div", {
        ref: N,
        className: x.nj,
        inert: S,
        style: { left: `${C.left}%`, top: `${C.top}%`, width: `${C.width}%`, height: `${C.height}%`, clipPath: y },
        children: [
            T.length > 0 && null != b && null != v
                ? (0, i.jsx)(f.A, { streams: T, fit: b, tooltipSpacing: R, containerWidthPx: v })
                : (0, i.jsx)(A.A, { channelId: t, center: j, iconSize: _ }),
            (0, i.jsx)(m.A, { className: s()(x.MQ, x.zq) }),
        ],
    });
}
