"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(770178),
    u = n(313961),
    c = n(47167),
    d = n(28390),
    _ = n(461782),
    f = n(447404),
    h = n(271195),
    p = n(994500),
    E = n(287809),
    m = n(732777),
    g = n(709382),
    A = n(683807),
    I = n(161148),
    T = n(604949);
let S = (e) => {
    let { channel: t, width: n } = e,
        s = (0, o.bG)([u.A], () => u.A.getFilteredParticipants(t.id)),
        S = (0, m.A)(t.id),
        N = r.useMemo(() => (0, c.m1)(t, E.default, p.A), [t]),
        y = (0, d.A)(t),
        C = n * (g.i.height / g.i.width),
        [v, O] = r.useState(0.65),
        [R, b] = r.useState({ x: 0, y: 0 }),
        D = (0, l.w)((e) => {
            let { contentRect: t } = e,
                n = Math.max((t.width / g.i.width) * 1.5, (t.height / g.i.height) * 1.5),
                i = t.width / 2 - 1156 * n,
                r = t.height / 2 - 1050 * n;
            O(n), b({ x: i, y: r });
        });
    return (0, i.jsx)(_.Ay, {
        timeout: 2e3,
        children: (e) =>
            (0, i.jsx)(h.A, {
                title: N,
                backgroundKey: t.id,
                screenMessage: null,
                onJumpToChannel: y,
                preventIdleComponent: f.A,
                width: n,
                className: T.a8,
                ...e,
                children: (0, i.jsx)("div", {
                    ref: D,
                    className: I.n,
                    style: { width: n, height: C },
                    children: (0, i.jsx)("div", {
                        className: a()(A.VT, A.rh),
                        style: { transform: `translate(${R.x}px, ${R.y}px) scale(${v})` },
                        children: (0, i.jsx)(g.A, {
                            roomSeats: S.seats,
                            roomParticipants: S.participants,
                            participants: s,
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
