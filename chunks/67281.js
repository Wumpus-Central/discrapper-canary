"use strict";
n.d(t, { A: () => y });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(311907),
    a = n(876230),
    o = n(990078),
    c = n(176781),
    u = n(834730),
    d = n(939249),
    h = n(429913),
    m = n(409626),
    p = n(692969),
    f = n(454908),
    g = n(287809),
    _ = n(405269),
    x = n(403362),
    A = n(963135),
    C = n(331446),
    E = n(985018),
    I = n(895054);
function v(e) {
    let { applicationId: t, separator: n } = e,
        l = (0, h.h)(t),
        { data: s } = (0, f.I)(t),
        r = (0, p.A)({ applicationId: t, location: "ClipEmbed", source: m.Ob.ClipEmbed }),
        a = s?.name ?? l?.name;
    return null == a
        ? null
        : null != r
          ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(d.D, { tag: "span", className: I.On, onClick: r, children: a }), n],
            })
          : (0, i.jsxs)(i.Fragment, { children: [a, n] });
}
let y = function (e) {
    let {
            createdAt: t,
            participantIds: n,
            applicationId: l,
            title: d,
            guildId: h,
            playerState: m = a.Q6.PAUSED,
            isControlBarExpanded: p = !0,
            isFullScreen: f = !1,
            showTextContent: y = !0,
        } = e,
        S = (0, r.yK)([g.default], () => n.map((e) => g.default.getUser(e)).filter(x.Vq) ?? []),
        b = null != t ? (0, _.Fe)(new Date(t)) : null;
    return (0, i.jsxs)("div", {
        className: s()(I.oK, { [I.pd]: m === a.Q6.PLAYING && !p, [I.aS]: f }),
        children: [
            (0, i.jsx)("div", { className: I.Lu }),
            (0, i.jsxs)("div", {
                className: I.s$,
                children: [
                    (0, i.jsxs)("div", {
                        className: I.yR,
                        children: [
                            (0, i.jsxs)("div", {
                                className: I.$,
                                children: [
                                    (0, i.jsx)(o.m, {
                                        asContainer: !0,
                                        text: E.intl.string(E.t["/fgfWh"]),
                                        children: (0, i.jsx)(c.x, { className: I.gr, size: "xs", color: "white" }),
                                    }),
                                    y &&
                                        (0, i.jsx)(u.E, {
                                            className: I.DD,
                                            variant: "text-md/semibold",
                                            color: "always-white",
                                            children: null != d && d.length > 0 ? d : E.intl.string(E.t.Cyxddp),
                                        }),
                                ],
                            }),
                            y &&
                                (null != l || null != b) &&
                                (0, i.jsxs)(u.E, {
                                    className: I.yu,
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: [
                                        (0, i.jsx)(v, { applicationId: l, separator: null != b ? " \xb7 " : void 0 }),
                                        b,
                                    ],
                                }),
                        ],
                    }),
                    S.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: I.HD,
                            role: "group",
                            "aria-label": E.intl.string(E.t.WTozwe),
                            children: [
                                S.slice(0, 4).map((e) => (0, i.jsx)(A.A, { user: e, guildId: h }, e.id)),
                                S.length > 4 &&
                                    (0, i.jsx)(C.w, { participants: S, maxVisibleParticipants: 4, guildId: h }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
