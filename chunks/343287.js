n.d(t, { A: () => _ });
var r = n(951288),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(266198),
    l = n(638212),
    c = n(474936),
    u = n(388032),
    d = n(781261),
    f = n(598323);
let _ = (e) => {
    let { className: t, cohort: n } = e,
        i = n === s.TO.COHORT_1 ? u.intl.string(u.t.N4RqcX) : u.intl.string(u.t["1C7LQk"]);
    return (0, r.jsxs)("div", {
        className: a()(d.container, t),
        children: [
            (0, r.jsx)("img", {
                src: f.Z,
                alt: "",
                className: d.image,
            }),
            (0, r.jsxs)("div", {
                className: d.body,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: i,
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-secondary",
                        children: u.intl.format(u.t["Ee+ram"], {
                            helpCenterLink: s.lB,
                            date: (0, s.WP)(),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(l.Z, { subscriptionTier: c.Si.TIER_2 }),
        ],
    });
};
