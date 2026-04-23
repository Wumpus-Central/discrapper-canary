"use strict";
n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(770178),
    u = n(313961),
    c = n(47167),
    d = n(28390),
    _ = n(461782),
    f = n(447404),
    p = n(271195),
    h = n(994500),
    E = n(287809),
    m = n(732777),
    g = n(709382),
    A = n(683807),
    I = n(938767),
    T = n(604949);
let S = (e) => {
    let { channel: t, width: n } = e,
        s = (0, o.bG)([u.A], () => u.A.getFilteredParticipants(t.id)),
        S = (0, m.A)(t.id),
        y = i.useMemo(() => (0, c.m1)(t, E.default, h.A), [t]),
        N = (0, d.A)(t),
        v = n * (g.i.height / g.i.width),
        [C, O] = i.useState(0.65),
        [R, b] = i.useState({ x: 0, y: 0 }),
        D = (0, l.w)((e) => {
            let { contentRect: t } = e,
                n = Math.max((t.width / g.i.width) * 1.5, (t.height / g.i.height) * 1.5),
                r = t.width / 2 - 1156 * n,
                i = t.height / 2 - 1050 * n;
            O(n), b({ x: r, y: i });
        });
    return (0, r.jsx)(_.Ay, {
        timeout: 2e3,
        children: (e) =>
            (0, r.jsx)(p.A, {
                title: y,
                backgroundKey: t.id,
                screenMessage: null,
                onJumpToChannel: N,
                preventIdleComponent: f.A,
                width: n,
                className: T.a8,
                ...e,
                children: (0, r.jsx)("div", {
                    ref: D,
                    className: I.n,
                    style: { width: n, height: v },
                    children: (0, r.jsx)("div", {
                        className: a()(A.VT, A.rh),
                        style: { transform: `translate(${R.x}px, ${R.y}px) scale(${C})` },
                        children: (0, r.jsx)(g.A, {
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
