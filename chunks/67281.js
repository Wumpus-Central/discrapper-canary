a.d(t, { A: () => I });
var n = a(627968);
a(64700);
var r = a(503698),
    o = a.n(r),
    i = a(311907),
    l = a(876230),
    c = a(990078),
    s = a(397927),
    _ = a(429913),
    d = a(409626),
    u = a(692969),
    p = a(454908),
    m = a(287809),
    b = a(405269),
    f = a(403362),
    C = a(963135),
    g = a(331446),
    h = a(985018),
    v = a(653455);
function x(e) {
    let { applicationId: t, separator: a } = e,
        r = (0, _.h)(t),
        { data: o } = (0, p.I)(t),
        i = (0, u.A)({ applicationId: t, location: "ClipEmbed", source: d.Ob.ClipEmbed }),
        l = o?.name ?? r?.name;
    return null == l
        ? null
        : null != i
          ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(s.DUT, { tag: "span", className: v.On, onClick: i, children: l }), a],
            })
          : (0, n.jsxs)(n.Fragment, { children: [l, a] });
}
let I = function (e) {
    let {
            createdAt: t,
            participantIds: a,
            applicationId: r,
            title: _,
            guildId: d,
            playerState: u = l.Q6.PAUSED,
            isControlBarExpanded: p = !0,
            isFullScreen: I = !1,
        } = e,
        y = (0, i.yK)([m.default], () => a.map((e) => m.default.getUser(e)).filter(f.Vq) ?? []),
        S = null != t ? (0, b.Fe)(new Date(t)) : null;
    return (0, n.jsxs)("div", {
        className: o()(v.oK, { [v.pd]: u === l.Q6.PLAYING && !p, [v.aS]: I }),
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
                                    (0, n.jsx)(c.m, {
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
                            (null != r || null != S) &&
                                (0, n.jsxs)(s.Text, {
                                    className: v.yu,
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: [
                                        (0, n.jsx)(x, { applicationId: r, separator: null != S ? " \xb7 " : void 0 }),
                                        S,
                                    ],
                                }),
                        ],
                    }),
                    y.length > 0 &&
                        (0, n.jsxs)("div", {
                            className: v.HD,
                            role: "group",
                            "aria-label": h.intl.string(h.t.WTozwe),
                            children: [
                                y.slice(0, 4).map((e) => (0, n.jsx)(C.A, { user: e, guildId: d }, e.id)),
                                y.length > 4 &&
                                    (0, n.jsx)(g.w, { participants: y, maxVisibleParticipants: 4, guildId: d }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
