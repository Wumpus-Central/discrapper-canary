n.d(t, { Z: () => d });
var r = n(951288),
    i = n(481060),
    a = n(266198),
    o = n(740594),
    s = n(474936),
    l = n(388032),
    c = n(871797),
    u = n(154545);
let d = (e) => {
    let { cohort: t } = e,
        n = t === a.TO.COHORT_1 ? l.intl.string(l.t.GVrMQE) : l.intl.string(l.t.JKWTSk);
    return (0, r.jsxs)(i.$1m, {
        className: c.container,
        color: "nitro-pink",
        children: [
            (0, r.jsxs)("div", {
                className: c.topSection,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: "display-md",
                        color: "header-primary",
                        className: c.wordmark,
                        children: l.intl.string(l.t.Ipxkoq),
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: l.intl.format(l.t["4mljX1"], { days: (0, a.h3)() }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: c.contentContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: c.content,
                        children: [
                            (0, r.jsx)(i.X6q, {
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: n,
                            }),
                            (0, r.jsx)(i.Text, {
                                variant: "text-md/medium",
                                color: "text-primary",
                                children: l.intl.format(l.t.hZt7UV, { helpCenterLink: a.lB }),
                            }),
                            (0, r.jsx)(o.Z, {
                                subscriptionTier: s.Si.TIER_2,
                                buttonTextOverride: l.intl.string(l.t.J61px8),
                            }),
                        ],
                    }),
                    (0, r.jsx)("img", {
                        src: u.Z,
                        alt: "",
                        className: c.image,
                    }),
                ],
            }),
        ],
    });
};
