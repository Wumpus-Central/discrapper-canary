n.d(t, { Z: () => f });
var r = n(951288),
    i = n(304789),
    a = n(481060),
    o = n(266198),
    s = n(740594),
    l = n(474936),
    c = n(388032),
    u = n(871797),
    d = n(154545);
let f = (e) => {
    let { cohort: t } = e,
        n = t === o.TO.COHORT_1 ? c.intl.string(c.t.GVrMQE) : c.intl.string(c.t.JKWTSk);
    return (0, r.jsxs)(i.$, {
        className: u.container,
        color: "nitro-pink",
        children: [
            (0, r.jsxs)("div", {
                className: u.topSection,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: "display-md",
                        color: "header-primary",
                        className: u.wordmark,
                        children: c.intl.string(c.t.Ipxkoq),
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: c.intl.format(c.t["4mljX1"], { days: (0, o.h3)() }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: u.contentContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: u.content,
                        children: [
                            (0, r.jsx)(a.X6q, {
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: n,
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-md/medium",
                                color: "text-primary",
                                children: c.intl.format(c.t.hZt7UV, { helpCenterLink: o.lB }),
                            }),
                            (0, r.jsx)(s.Z, {
                                subscriptionTier: l.Si.TIER_2,
                                buttonTextOverride: c.intl.string(c.t.J61px8),
                            }),
                        ],
                    }),
                    (0, r.jsx)("img", {
                        src: d.Z,
                        alt: "",
                        className: u.image,
                    }),
                ],
            }),
        ],
    });
};
