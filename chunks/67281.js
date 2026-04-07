a.d(t, { A: () => I });
var n = a(627968);
a(64700);
var r = a(503698),
    o = a.n(r),
    i = a(311907),
    c = a(876230),
    l = a(990078),
    s = a(397927),
    _ = a(429913),
    d = a(885151),
    u = a(409626),
    p = a(692969),
    m = a(287809),
    b = a(405269),
    f = a(403362),
    C = a(963135),
    g = a(331446),
    h = a(985018),
    v = a(2398);
function x(e) {
    let { applicationId: t, separator: a } = e,
        r = (0, _.h)(t),
        { data: o } = (0, d.k)(t),
        i = (0, p.A)({ applicationId: t, location: "ClipEmbed", source: u.Ob.ClipEmbed }),
        c = o?.name ?? r?.name;
    return null == c
        ? null
        : null != i
          ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(s.DUT, { tag: "span", className: v.On, onClick: i, children: c }), a],
            })
          : (0, n.jsxs)(n.Fragment, { children: [c, a] });
}
let I = function (e) {
    let {
            createdAt: t,
            participantIds: a,
            applicationId: r,
            title: _,
            guildId: d,
            playerState: u = c.Q6.PAUSED,
            isControlBarExpanded: p = !0,
        } = e,
        I = (0, i.yK)([m.default], () => a.map((e) => m.default.getUser(e)).filter(f.Vq) ?? []),
        y = null != t ? (0, b.Fe)(new Date(t)) : null;
    return (0, n.jsxs)("div", {
        className: o()(v.oK, { [v.pd]: u === c.Q6.PLAYING && !p }),
        children: [
            (0, n.jsx)("div", { className: v.Lu }),
            (0, n.jsxs)("div", {
                className: v.s$,
                children: [
                    (0, n.jsxs)("div", {
                        className: v.yR,
                        children: [
                            (0, n.jsxs)("div", {
                                className: v.$,
                                children: [
                                    (0, n.jsx)(l.m, {
                                        asContainer: !0,
                                        text: h.intl.string(h.t["/fgfWh"]),
                                        children: (0, n.jsx)(s.xgA, { className: v.gr, size: "xs", color: "white" }),
                                    }),
                                    (0, n.jsx)(s.Text, {
                                        className: v.DD,
                                        variant: "text-md/semibold",
                                        color: "always-white",
                                        children: null != _ && _.length > 0 ? _ : h.intl.string(h.t.Cyxddp),
                                    }),
                                ],
                            }),
                            (null != r || null != y) &&
                                (0, n.jsxs)(s.Text, {
                                    className: v.yu,
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: [
                                        (0, n.jsx)(x, { applicationId: r, separator: null != y ? " \xb7 " : void 0 }),
                                        y,
                                    ],
                                }),
                        ],
                    }),
                    I.length > 0 &&
                        (0, n.jsxs)("div", {
                            className: v.HD,
                            role: "group",
                            "aria-label": h.intl.string(h.t.WTozwe),
                            children: [
                                I.slice(0, 4).map((e) => (0, n.jsx)(C.A, { user: e, guildId: d }, e.id)),
                                I.length > 4 &&
                                    (0, n.jsx)(g.w, { participants: I, maxVisibleParticipants: 4, guildId: d }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
