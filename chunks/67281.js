n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var a = n(791282),
    r = n.n(a),
    l = n(943854),
    s = n.n(l),
    o = n(311907),
    d = n(342952),
    c = n(397927),
    u = n(429913),
    _ = n(287809),
    m = n(405269),
    h = n(403362),
    p = n(985018),
    g = n(811081);
let A = function (e) {
    let { createdAt: t, participantIds: n, applicationId: a, title: l, guildId: A } = e,
        x = (0, u.h)(a),
        f = (0, o.yK)([_.default], () => n.map((e) => _.default.getUser(e)).filter(h.Vq) ?? []),
        C = null != t ? (0, m.Fe)(new Date(t)) : null,
        I = r()([x?.name, C]);
    return (0, i.jsxs)("div", {
        className: g.oK,
        children: [
            (0, i.jsx)("div", { className: g.Lu }),
            (0, i.jsxs)("div", {
                className: g.s$,
                children: [
                    (0, i.jsxs)("div", {
                        className: g.yR,
                        children: [
                            (0, i.jsxs)("div", {
                                className: g.$,
                                children: [
                                    (0, i.jsx)(c.xgA, { className: g.gr, size: "xs", color: "currentColor" }),
                                    !s()(l) &&
                                        (0, i.jsx)(c.Text, {
                                            className: g.DD,
                                            variant: "text-md/semibold",
                                            color: "always-white",
                                            children: l,
                                        }),
                                ],
                            }),
                            I.length > 0 &&
                                (0, i.jsx)(c.Text, {
                                    className: g.yu,
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: I.join(" \xb7 "),
                                }),
                        ],
                    }),
                    f.length > 0 &&
                        (0, i.jsx)("div", {
                            className: g.HD,
                            children: (0, i.jsx)(d.A, {
                                maxUsers: 4,
                                users: f,
                                guildId: A,
                                size: c._3J.SIZE_24,
                                "aria-label": p.intl.string(p.t.WTozwe),
                            }),
                        }),
                ],
            }),
        ],
    });
};
