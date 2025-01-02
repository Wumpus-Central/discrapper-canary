n.d(t, {
    L: function () {
        return _;
    },
    T: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    s = n(120356),
    r = n.n(s),
    a = n(481060),
    o = n(626135),
    C = n(981631),
    d = n(388032),
    u = n(304562),
    c = n(196839),
    p = n(680674),
    x = n(74316);
let h = { NITRO_BASIC: u.nitroBasic },
    _ = l.memo(function (e) {
        let { message: t, handleClick: n, handleClose: s, buttonText: _, useInitialGlow: f, useGlowOnHover: j, handleImageClick: m, className: L, analyticsLocations: S, upsellType: g, themeOverride: E = h.NITRO_BASIC } = e,
            [I, M] = l.useState(f),
            [v, y] = l.useState(p);
        return (
            l.useEffect(() => {
                y(c);
            }, [E]),
            l.useEffect(() => {
                setTimeout(() => M(!1), 3000);
            }, []),
            l.useEffect(() => {
                o.default.track(C.rMx.POST_ACTION_UPSELL_SHOWN, {
                    type: g,
                    location: S
                });
            }, [g, S]),
            (0, i.jsx)('div', {
                className: r()(u.wrapper, E),
                children: (0, i.jsxs)('div', {
                    className: r()(u.content, I ? u.initialGlowUp : u.initialGlowDown, j ? u.contentGlow : null, L),
                    children: [
                        (0, i.jsxs)('div', {
                            className: u.innerContent,
                            children: [
                                (0, i.jsx)('div', {
                                    className: r()(u.imageWrapper, void 0 !== m ? u.imageHover : null),
                                    ...(void 0 !== m
                                        ? {
                                              onClick: () => {
                                                  o.default.track(C.rMx.POST_ACTION_UPSELL_SECONDARY_ACTION_CLICKED, {
                                                      type: g,
                                                      location: S
                                                  }),
                                                      m();
                                              }
                                          }
                                        : {}),
                                    children: (0, i.jsx)('img', {
                                        alt: '',
                                        className: u.image,
                                        src: v
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: u.heading,
                                    children: (0, i.jsx)(a.Heading, {
                                        variant: 'heading-sm/medium',
                                        children: t
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: u.buttonWrapper,
                            children: (0, i.jsxs)(a.ShinyButton, {
                                className: u.button,
                                innerClassName: u.buttonInner,
                                size: a.Button.Sizes.SMALL,
                                color: a.ButtonColors.CUSTOM,
                                onlyShineOnHover: !0,
                                onClick: () => {
                                    o.default.track(C.rMx.POST_ACTION_UPSELL_PRIMARY_ACTION_CLICKED, {
                                        type: g,
                                        location: S
                                    }),
                                        n();
                                },
                                children: [
                                    (0, i.jsx)('img', {
                                        alt: '',
                                        className: u.buttonNitroIcon,
                                        src: x
                                    }),
                                    _
                                ]
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: u.closeButtonWrapper,
                            children: (0, i.jsx)(a.Clickable, {
                                onClick: () => {
                                    o.default.track(C.rMx.POST_ACTION_UPSELL_DISMISSED, {
                                        type: g,
                                        location: S
                                    }),
                                        s();
                                },
                                className: u.closeButton,
                                'aria-label': d.intl.string(d.t.cpT0Cg),
                                children: (0, i.jsx)(a.XSmallIcon, {
                                    size: 'md',
                                    color: 'currentColor'
                                })
                            })
                        })
                    ]
                })
            })
        );
    });
