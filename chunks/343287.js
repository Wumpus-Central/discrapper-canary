n.d(t, { A: () => f });
var r = n(951288),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(638212),
    l = n(951570),
    c = n(388032),
    u = n(756246),
    d = n(598323);
let f = (e) => {
    let { className: t, subscriptionTier: n, cohort: i } = e,
        f = i === l.TO.COHORT_1 ? c.intl.string(c.t.N4RqcX) : c.intl.string(c.t["1C7LQk"]);
    return (0, r.jsxs)("div", {
        className: a()(u.container, t),
        children: [
            (0, r.jsx)("img", {
                src: d.Z,
                alt: "",
                className: u.image,
            }),
            (0, r.jsxs)("div", {
                className: u.body,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: f,
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-secondary",
                        children: c.intl.format(c.t.WNDJPD, { helpCenterLink: l.lB }),
                    }),
                ],
            }),
            (0, r.jsx)(s.Z, { subscriptionTier: n }),
        ],
    });
};
