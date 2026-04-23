"use strict";
n.d(t, { A: () => N });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(876230),
    l = n(990078),
    u = n(176781),
    c = n(834730),
    d = n(939249),
    _ = n(429913),
    f = n(409626),
    p = n(692969),
    h = n(454908),
    E = n(287809),
    m = n(405269),
    g = n(403362),
    A = n(963135),
    I = n(331446),
    T = n(985018),
    S = n(895054);
function y(e) {
    let { applicationId: t, separator: n } = e,
        i = (0, _.h)(t),
        { data: s } = (0, h.I)(t),
        a = (0, p.A)({ applicationId: t, location: "ClipEmbed", source: f.Ob.ClipEmbed }),
        o = s?.name ?? i?.name;
    return null == o
        ? null
        : null != a
          ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(d.D, { tag: "span", className: S.On, onClick: a, children: o }), n],
            })
          : (0, r.jsxs)(r.Fragment, { children: [o, n] });
}
let N = function (e) {
    let {
            createdAt: t,
            participantIds: n,
            applicationId: i,
            title: d,
            guildId: _,
            shareCTA: f,
            playerState: p = o.Q6.PAUSED,
            isControlBarExpanded: h = !0,
            isFullScreen: N = !1,
            showTextContent: v = !0,
        } = e,
        C = (0, a.yK)([E.default], () => n.map((e) => E.default.getUser(e)).filter(g.Vq) ?? []),
        O = null != t ? (0, m.Fe)(new Date(t)) : null;
    return (0, r.jsxs)("div", {
        className: s()(S.oK, { [S.pd]: p === o.Q6.PLAYING && !h, [S.aS]: N }),
        children: [
            (0, r.jsx)("div", { className: S.Lu }),
            (0, r.jsxs)("div", {
                className: S.s$,
                children: [
                    (0, r.jsxs)("div", {
                        className: S.yR,
                        children: [
                            (0, r.jsxs)("div", {
                                className: S.$,
                                children: [
                                    (0, r.jsx)(l.m, {
                                        asContainer: !0,
                                        text: T.intl.string(T.t["/fgfWh"]),
                                        children: (0, r.jsx)(u.x, { className: S.gr, size: "xs", color: "white" }),
                                    }),
                                    v &&
                                        (0, r.jsx)(c.E, {
                                            className: S.DD,
                                            variant: "text-md/semibold",
                                            color: "always-white",
                                            children: null != d && d.length > 0 ? d : T.intl.string(T.t.Cyxddp),
                                        }),
                                ],
                            }),
                            v &&
                                (null != i || null != O) &&
                                (0, r.jsxs)(c.E, {
                                    className: S.yu,
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: [
                                        (0, r.jsx)(y, { applicationId: i, separator: null != O ? " \xb7 " : void 0 }),
                                        O,
                                        f,
                                    ],
                                }),
                        ],
                    }),
                    C.length > 0 &&
                        (0, r.jsxs)("div", {
                            className: S.HD,
                            role: "group",
                            "aria-label": T.intl.string(T.t.WTozwe),
                            children: [
                                C.slice(0, 4).map((e) => (0, r.jsx)(A.A, { user: e, guildId: _ }, e.id)),
                                C.length > 4 &&
                                    (0, r.jsx)(I.w, { participants: C, maxVisibleParticipants: 4, guildId: _ }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
