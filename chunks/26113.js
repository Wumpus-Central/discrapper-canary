"use strict";
n.d(t, { A: () => S });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(770178),
    d = n(313961),
    c = n(47167),
    u = n(28390),
    _ = n(461782),
    E = n(447404),
    A = n(271195),
    h = n(994500),
    I = n(287809),
    f = n(732777),
    p = n(709382),
    T = n(749719),
    m = n(359348),
    g = n(997213);
let S = function (e) {
    let { channel: t, width: n } = e,
        a = (0, l.bG)([d.A], () => d.A.getFilteredParticipants(t.id)),
        S = (0, f.A)(t.id),
        N = r.useMemo(() => (0, c.m1)(t, I.default, h.A), [t]),
        C = (0, u.A)(t),
        O = n * (p.i.height / p.i.width),
        [R, L] = r.useState(0.65),
        [y, D] = r.useState({ x: 0, y: 0 }),
        v = (0, o.w)((e) => {
            let { contentRect: t } = e,
                n = Math.max((t.width / p.i.width) * 1.5, (t.height / p.i.height) * 1.5),
                i = t.width / 2 - 1156 * n,
                r = t.height / 2 - 1050 * n;
            L(n), D({ x: i, y: r });
        });
    return (0, i.jsx)(_.Ay, {
        timeout: 2e3,
        children: (e) =>
            (0, i.jsx)(A.A, {
                title: N,
                backgroundKey: t.id,
                screenMessage: null,
                onJumpToChannel: C,
                preventIdleComponent: E.A,
                width: n,
                className: g.a8,
                ...e,
                children: (0, i.jsx)("div", {
                    ref: v,
                    className: m.n,
                    style: { width: n, height: O },
                    children: (0, i.jsx)("div", {
                        className: s()(T.VT, T.rh),
                        style: { transform: `translate(${y.x}px, ${y.y}px) scale(${R})` },
                        children: (0, i.jsx)(p.A, {
                            roomSeats: S.seats,
                            roomParticipants: S.participants,
                            participants: a,
                            channel: t,
                            idle: e.idle,
                            showAmbientEffects: !1,
                            enableAnimations: !1,
                            skipNewUserEducation: !0,
                            disableInteractions: !0,
                        }),
                    }),
                }),
            }),
    });
};
