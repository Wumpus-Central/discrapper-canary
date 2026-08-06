n.d(t, { A: () => g });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(494012),
    o = n(17928),
    c = n(323073),
    d = n(616356),
    u = n(280450),
    h = n(861094),
    p = n(170865),
    m = n(948822),
    A = n(321486),
    x = n(660443);
let f = 16 / 9;
function g(e) {
    let { channelId: t, corners: n, roomWidth: a, roomHeight: g, aspectRatio: y } = e,
        {
            screenBounds: C,
            screenClipPath: j,
            center: v,
            boundingBoxCorners: E,
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
        { ref: N, width: I, height: b } = (0, r.Ay)(),
        T = l.useMemo(() => (null == I || null == b ? null : (0, h.t)(E, I, b, f)), [E, I, b]),
        _ = l.useMemo(() => Math.min(48, Math.max(20, (a / g > y ? g * y : a) * 0.025)), [a, g, y]),
        { previewStream: R, liveCount: S } = (0, o.cf)([d.A, u.default], () => {
            if ((0, c.F2)(t)) return { previewStream: null, liveCount: 0 };
            let e = u.default.getId(),
                n = d.A.getAllApplicationStreamsForChannel(t);
            return { previewStream: n.find((t) => t.ownerId !== e) ?? n[0] ?? null, liveCount: n.length };
        }),
        L = l.useMemo(() => (null == b ? 0 : -(((E.topLeft.y + E.topRight.y) / 2 / 100) * b)), [E, b]);
    return (0, i.jsxs)("div", {
        ref: N,
        className: x.nj,
        style: { left: `${C.left}%`, top: `${C.top}%`, width: `${C.width}%`, height: `${C.height}%`, clipPath: j },
        children: [
            null != R && null != T && null != I
                ? (0, i.jsx)(A.A, { stream: R, fit: T, tooltipSpacing: L, liveCount: S, containerWidthPx: I })
                : (0, i.jsx)(m.A, { channelId: t, center: v, iconSize: _ }),
            (0, i.jsx)(p.A, { className: s()(x.MQ, x.zq) }),
        ],
    });
}
