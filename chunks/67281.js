a.d(t, { A: () => v });
var n = a(627968);
a(64700);
var r = a(503698),
    o = a.n(r),
    i = a(311907),
    c = a(876230),
    l = a(397927),
    _ = a(429913),
    s = a(885151),
    d = a(409626),
    u = a(692969),
    p = a(287809),
    m = a(405269),
    b = a(403362),
    f = a(963135),
    C = a(985018),
    g = a(2398);
function h(e) {
    let { applicationId: t, separator: a } = e,
        r = (0, _.h)(t),
        { data: o } = (0, s.k)(t),
        i = (0, u.A)({ applicationId: t, location: "ClipEmbed", source: d.Ob.ClipEmbed }),
        c = o?.supplementalData?.name ?? r?.name;
    return null == c
        ? null
        : null != i
          ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(l.DUT, { tag: "span", className: g.On, onClick: i, children: c }), a],
            })
          : (0, n.jsxs)(n.Fragment, { children: [c, a] });
}
let v = function (e) {
    let {
            createdAt: t,
            participantIds: a,
            applicationId: r,
            title: _,
            guildId: s,
            playerState: d = c.Q6.PAUSED,
            isControlBarExpanded: u = !0,
        } = e,
        v = (0, i.yK)([p.default], () => a.map((e) => p.default.getUser(e)).filter(b.Vq) ?? []),
        I = null != t ? (0, m.Fe)(new Date(t)) : null;
    return (0, n.jsxs)("div", {
        className: o()(g.oK, { [g.pd]: d === c.Q6.PLAYING && !u }),
        children: [
            (0, n.jsx)("div", { className: g.Lu }),
            (0, n.jsxs)("div", {
                className: g.s$,
                children: [
                    (0, n.jsxs)("div", {
                        className: g.yR,
                        children: [
                            (0, n.jsxs)("div", {
                                className: g.$,
                                children: [
                                    (0, n.jsx)(l.xgA, { className: g.gr, size: "xs", color: "white" }),
                                    (0, n.jsx)(l.Text, {
                                        className: g.DD,
                                        variant: "text-md/semibold",
                                        color: "always-white",
                                        children: null != _ && _.length > 0 ? _ : C.intl.string(C.t.Cyxddp),
                                    }),
                                ],
                            }),
                            (null != r || null != I) &&
                                (0, n.jsxs)(l.Text, {
                                    className: g.yu,
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: [
                                        (0, n.jsx)(h, { applicationId: r, separator: null != I ? " \xb7 " : void 0 }),
                                        I,
                                    ],
                                }),
                        ],
                    }),
                    v.length > 0 &&
                        (0, n.jsxs)("div", {
                            className: g.HD,
                            role: "group",
                            "aria-label": C.intl.string(C.t.WTozwe),
                            children: [
                                v.slice(0, 4).map((e) => (0, n.jsx)(f.A, { user: e, guildId: s }, e.id)),
                                v.length > 4 &&
                                    (0, n.jsxs)(l.Text, {
                                        className: g.sZ,
                                        variant: "text-xs/medium",
                                        color: "interactive-text-default",
                                        children: ["+", v.length - 4],
                                    }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
