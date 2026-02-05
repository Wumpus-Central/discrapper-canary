"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(770178),
    u = n(313961),
    c = n(47167),
    d = n(28390),
    _ = n(461782),
    f = n(447404),
    p = n(271195),
    h = n(994500),
    m = n(287809),
    g = n(732777),
    E = n(709382),
    A = n(185014),
    I = n(204137),
    T = n(976092);
let y = (e) => {
    let { channel: t, width: n } = e,
        a = (0, o.bG)([u.A], () => u.A.getFilteredParticipants(t.id)),
        y = (0, g.A)(t.id),
        S = i.useMemo(() => (0, c.m1)(t, m.default, h.A), [t]),
        v = (0, d.A)(t),
        C = n * (E.i.height / E.i.width),
        b = 1156,
        N = 1050,
        [R, O] = i.useState(0.65),
        [D, L] = i.useState({ x: 0, y: 0 }),
        w = (0, l.w)((e) => {
            let { contentRect: t } = e,
                n = Math.max((t.width / E.i.width) * 1.5, (t.height / E.i.height) * 1.5),
                r = t.width / 2 - b * n,
                i = t.height / 2 - N * n;
            O(n), L({ x: r, y: i });
        });
    return (0, r.jsx)(_.Ay, {
        timeout: 2e3,
        children: (e) =>
            (0, r.jsx)(p.A, {
                title: S,
                backgroundKey: t.id,
                screenMessage: null,
                onJumpToChannel: v,
                preventIdleComponent: f.A,
                width: n,
                className: T.a8,
                ...e,
                children: (0, r.jsx)("div", {
                    ref: w,
                    className: I.n,
                    style: { width: n, height: C },
                    children: (0, r.jsx)("div", {
                        className: s()(A.VT, A.rh),
                        style: { transform: `translate(${D.x}px, ${D.y}px) scale(${R})` },
                        children: (0, r.jsx)(E.A, {
                            roomSeats: y.seats,
                            roomParticipants: y.participants,
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
