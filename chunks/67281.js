a.d(t, { A: () => I });
var n = a(627968);
a(64700);
var r = a(503698),
    o = a.n(r),
    i = a(311907),
    c = a(876230),
    l = a(990078),
    _ = a(397927),
    s = a(429913),
    d = a(885151),
    u = a(409626),
    p = a(692969),
    m = a(287809),
    b = a(405269),
    f = a(403362),
    C = a(963135),
    g = a(985018),
    h = a(2398);
function v(e) {
    let { applicationId: t, separator: a } = e,
        r = (0, s.h)(t),
        { data: o } = (0, d.k)(t),
        i = (0, p.A)({ applicationId: t, location: "ClipEmbed", source: u.Ob.ClipEmbed }),
        c = o?.supplementalData?.name ?? r?.name;
    return null == c
        ? null
        : null != i
          ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(_.DUT, { tag: "span", className: h.On, onClick: i, children: c }), a],
            })
          : (0, n.jsxs)(n.Fragment, { children: [c, a] });
}
let I = function (e) {
    let {
            createdAt: t,
            participantIds: a,
            applicationId: r,
            title: s,
            guildId: d,
            playerState: u = c.Q6.PAUSED,
            isControlBarExpanded: p = !0,
        } = e,
        I = (0, i.yK)([m.default], () => a.map((e) => m.default.getUser(e)).filter(f.Vq) ?? []),
        x = null != t ? (0, b.Fe)(new Date(t)) : null;
    return (0, n.jsxs)("div", {
        className: o()(h.oK, { [h.pd]: u === c.Q6.PLAYING && !p }),
        children: [
            (0, n.jsx)("div", { className: h.Lu }),
            (0, n.jsxs)("div", {
                className: h.s$,
                children: [
                    (0, n.jsxs)("div", {
                        className: h.yR,
                        children: [
                            (0, n.jsxs)("div", {
                                className: h.$,
                                children: [
                                    (0, n.jsx)(l.m, {
                                        asContainer: !0,
                                        text: g.intl.string(g.t["/fgfWh"]),
                                        children: (0, n.jsx)(_.xgA, { className: h.gr, size: "xs", color: "white" }),
                                    }),
                                    (0, n.jsx)(_.Text, {
                                        className: h.DD,
                                        variant: "text-md/semibold",
                                        color: "always-white",
                                        children: null != s && s.length > 0 ? s : g.intl.string(g.t.Cyxddp),
                                    }),
                                ],
                            }),
                            (null != r || null != x) &&
                                (0, n.jsxs)(_.Text, {
                                    className: h.yu,
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: [
                                        (0, n.jsx)(v, { applicationId: r, separator: null != x ? " \xb7 " : void 0 }),
                                        x,
                                    ],
                                }),
                        ],
                    }),
                    I.length > 0 &&
                        (0, n.jsxs)("div", {
                            className: h.HD,
                            role: "group",
                            "aria-label": g.intl.string(g.t.WTozwe),
                            children: [
                                I.slice(0, 4).map((e) => (0, n.jsx)(C.A, { user: e, guildId: d }, e.id)),
                                I.length > 4 &&
                                    (0, n.jsxs)(_.Text, {
                                        className: h.sZ,
                                        variant: "text-xs/medium",
                                        color: "interactive-text-default",
                                        children: ["+", I.length - 4],
                                    }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
