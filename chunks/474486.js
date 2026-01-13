n.d(t, {
    C: () => d,
    l: () => p,
});
var r = n(54381),
    i = n(473749),
    l = n(28664),
    a = n(481060),
    o = n(119269),
    s = n(227140),
    c = n(388032),
    u = n(630942);
let d = (e) => {
        let { children: t } = e,
            n = (0, r.jsxs)("div", {
                className: u.nitroTabCoachtipContainer,
                children: [
                    (0, r.jsx)("div", {
                        className: u.iconContainer,
                        children: (0, r.jsx)(o.ZP, {
                            staticPercentage: 100,
                            iconClassName: u.icon,
                            showAnimations: !0,
                            progressCircleVariation: o.Qo.NITRO_LOGO,
                            ellipseOpacity: 1,
                            customAnimationClassName: u.customCircleAnimation,
                            circleColor: "url(#purple-gradient)",
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: u.coachtipContent,
                        children: [
                            (0, r.jsx)(a.Heading, {
                                variant: "heading-sm/bold",
                                children: c.intl.string(c.t.USo4s7),
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                children: c.intl.format(c.t.AGKQq6, { numReferrals: 3 }),
                            }),
                        ],
                    }),
                ],
            });
        return (0, r.jsx)(l.u, {
            __unsupportedReactNodeAsText: n,
            position: "right",
            "aria-label": c.intl.string(c.t.USo4s7),
            asContainer: !0,
            children: (0, r.jsx)("div", { children: t }),
        });
    },
    p = (e) => {
        let { isSelected: t, onSelect: n } = e;
        return (
            i.useEffect(() => {
                t && n();
            }, [t, n]),
            (0, r.jsx)(s.Z, { copy: c.intl.string(c.t.y2b7CA) })
        );
    };
