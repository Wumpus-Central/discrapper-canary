n.d(t, { F: () => A, T: () => u });
var i = n(627968),
    r = n(64700),
    a = n(990078),
    l = n(397927),
    s = n(344904),
    o = n(622037),
    d = n(985018),
    c = n(542780);
let u = (e) => {
        let { children: t } = e,
            n = (0, i.jsxs)("div", {
                className: c.IL,
                children: [
                    (0, i.jsx)("div", {
                        className: c.zc,
                        children: (0, i.jsx)(s.Ay, {
                            staticPercentage: 100,
                            iconClassName: c.Kk,
                            showAnimations: !0,
                            progressCircleVariation: s.BN.NITRO_LOGO,
                            ellipseOpacity: 1,
                            customAnimationClassName: c.Qd,
                            circleColor: "url(#purple-gradient)",
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: c.XE,
                        children: [
                            (0, i.jsx)(l.Heading, { variant: "heading-sm/bold", children: d.intl.string(d.t.USo4s7) }),
                            (0, i.jsx)(l.Text, {
                                variant: "text-xs/normal",
                                children: d.intl.format(d.t.AGKQq6, { numReferrals: 3 }),
                            }),
                        ],
                    }),
                ],
            });
        return (0, i.jsx)(a.m, {
            __unsupportedReactNodeAsText: n,
            position: "right",
            "aria-label": d.intl.string(d.t.USo4s7),
            asContainer: !0,
            children: (0, i.jsx)("div", { children: t }),
        });
    },
    A = (e) => {
        let { isSelected: t, onSelect: n } = e;
        return (
            r.useEffect(() => {
                t && n();
            }, [t, n]),
            (0, i.jsx)(o.A, { copy: d.intl.string(d.t.y2b7CA) })
        );
    };
