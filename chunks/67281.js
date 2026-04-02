a.d(t, { A: () => I });
var n = a(627968);
a(64700);
var o = a(503698),
    r = a.n(o),
    i = a(311907),
    c = a(876230),
    _ = a(342952),
    l = a(397927),
    s = a(429913),
    d = a(885151),
    p = a(409626),
    m = a(692969),
    u = a(287809),
    b = a(405269),
    f = a(403362),
    C = a(985018),
    g = a(2398);
function h(e) {
    let { applicationId: t, separator: a } = e,
        o = (0, s.h)(t),
        { data: r } = (0, d.k)(t),
        i = (0, m.A)({ applicationId: t, location: "ClipEmbed", source: p.Ob.ClipEmbed }),
        c = r?.supplementalData?.name ?? o?.name;
    return null == c
        ? null
        : null != i
          ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(l.DUT, { tag: "span", className: g.On, onClick: i, children: c }), a],
            })
          : (0, n.jsxs)(n.Fragment, { children: [c, a] });
}
let I = function (e) {
    let {
            createdAt: t,
            participantIds: a,
            applicationId: o,
            title: s,
            guildId: d,
            playerState: p = c.Q6.PAUSED,
            isControlBarExpanded: m = !0,
        } = e,
        I = (0, i.yK)([u.default], () => a.map((e) => u.default.getUser(e)).filter(f.Vq) ?? []),
        v = null != t ? (0, b.Fe)(new Date(t)) : null;
    return (0, n.jsxs)("div", {
        className: r()(g.oK, { [g.pd]: p === c.Q6.PLAYING && !m }),
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
                                        children: null != s && s.length > 0 ? s : C.intl.string(C.t.Cyxddp),
                                    }),
                                ],
                            }),
                            (null != o || null != v) &&
                                (0, n.jsxs)(l.Text, {
                                    className: g.yu,
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: [
                                        (0, n.jsx)(h, { applicationId: o, separator: null != v ? " \xb7 " : void 0 }),
                                        v,
                                    ],
                                }),
                        ],
                    }),
                    I.length > 0 &&
                        (0, n.jsx)("div", {
                            className: g.HD,
                            children: (0, n.jsx)(_.A, {
                                maxUsers: 4,
                                users: I,
                                guildId: d,
                                size: l._3J.SIZE_24,
                                "aria-label": C.intl.string(C.t.WTozwe),
                            }),
                        }),
                ],
            }),
        ],
    });
};
