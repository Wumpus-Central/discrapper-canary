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
    I = n(152206);
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
            shareCTA: m,
            playerState: p = a.Q6.PAUSED,
            isControlBarExpanded: f = !0,
            isFullScreen: y = !1,
            showTextContent: S = !0,
        } = e,
        b = (0, r.yK)([g.default], () => n.map((e) => g.default.getUser(e)).filter(x.Vq) ?? []),
        N = null != t ? (0, _.Fe)(new Date(t)) : null;
    return (0, i.jsxs)("div", {
        className: s()(I.oK, { [I.pd]: p === a.Q6.PLAYING && !f, [I.aS]: y }),
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
                                    S &&
                                        (0, i.jsx)(u.E, {
                                            className: I.DD,
                                            variant: "text-md/semibold",
                                            color: "always-white",
                                            children: null != d && d.length > 0 ? d : E.intl.string(E.t.Cyxddp),
                                        }),
                                ],
                            }),
                            S &&
                                (null != l || null != N) &&
                                (0, i.jsxs)(u.E, {
                                    className: I.yu,
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: [
                                        (0, i.jsx)(v, { applicationId: l, separator: null != N ? " \xb7 " : void 0 }),
                                        N,
                                        m,
                                    ],
                                }),
                        ],
                    }),
                    b.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: I.HD,
                            role: "group",
                            "aria-label": E.intl.string(E.t.WTozwe),
                            children: [
                                b.slice(0, 4).map((e) => (0, i.jsx)(A.A, { user: e, guildId: h }, e.id)),
                                b.length > 4 &&
                                    (0, i.jsx)(C.w, { participants: b, maxVisibleParticipants: 4, guildId: h }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
