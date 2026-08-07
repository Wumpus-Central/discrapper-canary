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
    f = n(660443);
let x = 16 / 9;
function g(e) {
    let { channelId: t, corners: n, roomWidth: a } = e,
        {
            screenBounds: g,
            screenClipPath: y,
            center: C,
            boundingBoxCorners: j,
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
        { ref: v, width: E, height: N } = (0, r.Ay)(),
        I = l.useMemo(() => (null == E || null == N ? null : (0, h.t)(j, E, N, x)), [j, E, N]),
        b = Math.min(48, Math.max(20, 0.025 * a)),
        { previewStream: T, liveCount: _ } = (0, o.cf)([d.A, u.default], () => {
            if ((0, c.F2)(t)) return { previewStream: null, liveCount: 0 };
            let e = u.default.getId(),
                n = d.A.getAllApplicationStreamsForChannel(t);
            return { previewStream: n.find((t) => t.ownerId !== e) ?? n[0] ?? null, liveCount: n.length };
        }),
        R = l.useMemo(() => (null == N ? 0 : -(((j.topLeft.y + j.topRight.y) / 2 / 100) * N)), [j, N]);
    return (0, i.jsxs)("div", {
        ref: v,
        className: f.nj,
        style: { left: `${g.left}%`, top: `${g.top}%`, width: `${g.width}%`, height: `${g.height}%`, clipPath: y },
        children: [
            null != T && null != I && null != E
                ? (0, i.jsx)(A.A, { stream: T, fit: I, tooltipSpacing: R, liveCount: _, containerWidthPx: E })
                : (0, i.jsx)(m.A, { channelId: t, center: C, iconSize: b }),
            (0, i.jsx)(p.A, { className: s()(f.MQ, f.zq) }),
        ],
    });
}
