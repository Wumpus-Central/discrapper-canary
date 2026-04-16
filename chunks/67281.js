"use strict";
n.d(t, { A: () => y });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(876230),
    l = n(990078),
    u = n(397927),
    c = n(429913),
    d = n(409626),
    _ = n(692969),
    f = n(454908),
    p = n(287809),
    h = n(405269),
    m = n(403362),
    E = n(963135),
    g = n(331446),
    A = n(985018),
    I = n(895054);
let T = 4;
function S(e) {
    let { applicationId: t, separator: n } = e,
        i = (0, c.h)(t),
        { data: s } = (0, f.I)(t),
        a = (0, _.A)({ applicationId: t, location: "ClipEmbed", source: d.Ob.ClipEmbed }),
        o = s?.name ?? i?.name;
    return null == o
        ? null
        : null != a
          ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(u.DUT, { tag: "span", className: I.On, onClick: a, children: o }), n],
            })
          : (0, r.jsxs)(r.Fragment, { children: [o, n] });
}
let y = function (e) {
    let {
            createdAt: t,
            participantIds: n,
            applicationId: i,
            title: c,
            guildId: d,
            playerState: _ = o.Q6.PAUSED,
            isControlBarExpanded: f = !0,
            isFullScreen: y = !1,
            showTextContent: v = !0,
        } = e,
        N = (0, a.yK)([p.default], () => n.map((e) => p.default.getUser(e)).filter(m.Vq) ?? []),
        C = null != t ? (0, h.Fe)(new Date(t)) : null,
        R = null != i || null != C;
    return (0, r.jsxs)("div", {
        className: s()(I.oK, { [I.pd]: _ === o.Q6.PLAYING && !f, [I.aS]: y }),
        children: [
            (0, r.jsx)("div", { className: I.Lu }),
            (0, r.jsxs)("div", {
                className: I.s$,
                children: [
                    (0, r.jsxs)("div", {
                        className: I.yR,
                        children: [
                            (0, r.jsxs)("div", {
                                className: I.$,
                                children: [
                                    (0, r.jsx)(l.m, {
                                        asContainer: !0,
                                        text: A.intl.string(A.t["/fgfWh"]),
                                        children: (0, r.jsx)(u.xgA, { className: I.gr, size: "xs", color: "white" }),
                                    }),
                                    v &&
                                        (0, r.jsx)(u.Text, {
                                            className: I.DD,
                                            variant: "text-md/semibold",
                                            color: "always-white",
                                            children: null != c && c.length > 0 ? c : A.intl.string(A.t.Cyxddp),
                                        }),
                                ],
                            }),
                            v &&
                                R &&
                                (0, r.jsxs)(u.Text, {
                                    className: I.yu,
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: [
                                        (0, r.jsx)(S, { applicationId: i, separator: null != C ? " \xb7 " : void 0 }),
                                        C,
                                    ],
                                }),
                        ],
                    }),
                    N.length > 0 &&
                        (0, r.jsxs)("div", {
                            className: I.HD,
                            role: "group",
                            "aria-label": A.intl.string(A.t.WTozwe),
                            children: [
                                N.slice(0, T).map((e) => (0, r.jsx)(E.A, { user: e, guildId: d }, e.id)),
                                N.length > T &&
                                    (0, r.jsx)(g.w, { participants: N, maxVisibleParticipants: T, guildId: d }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
