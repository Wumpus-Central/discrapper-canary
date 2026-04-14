a.d(t, { A: () => v });
var n = a(627968);
a(64700);
var i = a(503698),
    r = a.n(i),
    o = a(311907),
    c = a(876230),
    l = a(990078),
    s = a(397927),
    _ = a(429913),
    d = a(409626),
    u = a(692969),
    m = a(454908),
    p = a(287809),
    b = a(405269),
    C = a(403362),
    h = a(963135),
    g = a(331446),
    f = a(985018),
    I = a(2398);
function A(e) {
    let { applicationId: t, separator: a } = e,
        i = (0, _.h)(t),
        { data: r } = (0, m.I)(t),
        o = (0, u.A)({ applicationId: t, location: "ClipEmbed", source: d.Ob.ClipEmbed }),
        c = r?.name ?? i?.name;
    return null == c
        ? null
        : null != o
          ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(s.DUT, { tag: "span", className: I.On, onClick: o, children: c }), a],
            })
          : (0, n.jsxs)(n.Fragment, { children: [c, a] });
}
let v = function (e) {
    let {
            createdAt: t,
            participantIds: a,
            applicationId: i,
            title: _,
            guildId: d,
            playerState: u = c.Q6.PAUSED,
            isControlBarExpanded: m = !0,
            isFullScreen: v = !1,
        } = e,
        x = (0, o.yK)([p.default], () => a.map((e) => p.default.getUser(e)).filter(C.Vq) ?? []),
        T = null != t ? (0, b.Fe)(new Date(t)) : null;
    return (0, n.jsxs)("div", {
        className: r()(I.oK, { [I.pd]: u === c.Q6.PLAYING && !m, [I.aS]: v }),
        children: [
            (0, n.jsx)("div", { className: I.Lu }),
            (0, n.jsxs)("div", {
                className: I.s$,
                children: [
                    (0, n.jsxs)("div", {
                        className: I.yR,
                        children: [
                            (0, n.jsxs)("div", {
                                className: I.$,
                                children: [
                                    (0, n.jsx)(l.m, {
                                        asContainer: !0,
                                        text: f.intl.string(f.t["/fgfWh"]),
                                        children: (0, n.jsx)(s.xgA, { className: I.gr, size: "xs", color: "white" }),
                                    }),
                                    (0, n.jsx)(s.Text, {
                                        className: I.DD,
                                        variant: "text-md/semibold",
                                        color: "always-white",
                                        children: null != _ && _.length > 0 ? _ : f.intl.string(f.t.Cyxddp),
                                    }),
                                ],
                            }),
                            (null != i || null != T) &&
                                (0, n.jsxs)(s.Text, {
                                    className: I.yu,
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: [
                                        (0, n.jsx)(A, { applicationId: i, separator: null != T ? " \xb7 " : void 0 }),
                                        T,
                                    ],
                                }),
                        ],
                    }),
                    x.length > 0 &&
                        (0, n.jsxs)("div", {
                            className: I.HD,
                            role: "group",
                            "aria-label": f.intl.string(f.t.WTozwe),
                            children: [
                                x.slice(0, 4).map((e) => (0, n.jsx)(h.A, { user: e, guildId: d }, e.id)),
                                x.length > 4 &&
                                    (0, n.jsx)(g.w, { participants: x, maxVisibleParticipants: 4, guildId: d }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
