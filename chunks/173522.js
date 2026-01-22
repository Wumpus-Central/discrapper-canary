n.d(t, {
    F: () => p,
    T: () => d,
});
var r = n(627968),
    i = n(64700),
    l = n(990078),
    a = n(397927),
    s = n(344904),
    o = n(622037),
    c = n(985018),
    u = n(542780);
let d = (e) => {
        let { children: t } = e,
            n = (0, r.jsxs)("div", {
                className: u.IL,
                children: [
                    (0, r.jsx)("div", {
                        className: u.zc,
                        children: (0, r.jsx)(s.Ay, {
                            staticPercentage: 100,
                            iconClassName: u.Kk,
                            showAnimations: !0,
                            progressCircleVariation: s.BN.NITRO_LOGO,
                            ellipseOpacity: 1,
                            customAnimationClassName: u.Qd,
                            circleColor: "url(#purple-gradient)",
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: u.XE,
                        children: [
                            (0, r.jsx)(a.Heading, {
                                variant: "heading-sm/bold",
                                children: c.intl.string(c.t.USo4s7),
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                children: c.intl.format(c.t.AGKQq6, {
                                    numReferrals: 3,
                                }),
                            }),
                        ],
                    }),
                ],
            });
        return (0, r.jsx)(l.m, {
            __unsupportedReactNodeAsText: n,
            position: "right",
            "aria-label": c.intl.string(c.t.USo4s7),
            asContainer: !0,
            children: (0, r.jsx)("div", {
                children: t,
            }),
        });
    },
    p = (e) => {
        let { isSelected: t, onSelect: n } = e;
        return (
            i.useEffect(() => {
                t && n();
            }, [t, n]),
            (0, r.jsx)(o.A, {
                copy: c.intl.string(c.t.y2b7CA),
            })
        );
    };
