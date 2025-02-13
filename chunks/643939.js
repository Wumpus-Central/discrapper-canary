n.d(t, {
    L: () => _,
    T: () => h
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    s = n(120356),
    r = n.n(s),
    a = n(481060),
    o = n(626135),
    C = n(981631),
    d = n(388032),
    u = n(13950),
    c = n(196839),
    p = n(680674),
    x = n(74316);
let h = { NITRO_BASIC: u.nitroBasic },
    _ = i.memo(function (e) {
        let { message: t, handleClick: n, handleClose: s, buttonText: _, useInitialGlow: f, useGlowOnHover: j, handleImageClick: m, className: L, analyticsLocations: E, upsellType: g, themeOverride: S = h.NITRO_BASIC } = e,
            [I, N] = i.useState(f),
            [T, M] = i.useState(p);
        return (
            i.useEffect(() => {
                M(c);
            }, [S]),
            i.useEffect(() => {
                setTimeout(() => N(!1), 3000);
            }, []),
            i.useEffect(() => {
                o.default.track(C.rMx.POST_ACTION_UPSELL_SHOWN, {
                    type: g,
                    location: E
                });
            }, [g, E]),
            (0, l.jsx)('div', {
                className: r()(u.wrapper, S),
                children: (0, l.jsxs)('div', {
                    className: r()(u.content, I ? u.initialGlowUp : u.initialGlowDown, j ? u.contentGlow : null, L),
                    children: [
                        (0, l.jsxs)('div', {
                            className: u.innerContent,
                            children: [
                                (0, l.jsx)('div', {
                                    className: r()(u.imageWrapper, void 0 !== m ? u.imageHover : null),
                                    ...(void 0 !== m
                                        ? {
                                              onClick: () => {
                                                  o.default.track(C.rMx.POST_ACTION_UPSELL_SECONDARY_ACTION_CLICKED, {
                                                      type: g,
                                                      location: E
                                                  }),
                                                      m();
                                              }
                                          }
                                        : {}),
                                    children: (0, l.jsx)('img', {
                                        alt: '',
                                        className: u.image,
                                        src: T
                                    })
                                }),
                                (0, l.jsx)('div', {
                                    className: u.heading,
                                    children: (0, l.jsx)(a.X6q, {
                                        variant: 'heading-sm/medium',
                                        children: t
                                    })
                                })
                            ]
                        }),
                        (0, l.jsx)('div', {
                            className: u.buttonWrapper,
                            children: (0, l.jsxs)(a.gtL, {
                                className: u.button,
                                innerClassName: u.buttonInner,
                                size: a.zxk.Sizes.SMALL,
                                color: a.Ttl.CUSTOM,
                                onlyShineOnHover: !0,
                                onClick: () => {
                                    o.default.track(C.rMx.POST_ACTION_UPSELL_PRIMARY_ACTION_CLICKED, {
                                        type: g,
                                        location: E
                                    }),
                                        n();
                                },
                                children: [
                                    (0, l.jsx)('img', {
                                        alt: '',
                                        className: u.buttonNitroIcon,
                                        src: x
                                    }),
                                    _
                                ]
                            })
                        }),
                        (0, l.jsx)('div', {
                            className: u.closeButtonWrapper,
                            children: (0, l.jsx)(a.P3F, {
                                onClick: () => {
                                    o.default.track(C.rMx.POST_ACTION_UPSELL_DISMISSED, {
                                        type: g,
                                        location: E
                                    }),
                                        s();
                                },
                                className: u.closeButton,
                                'aria-label': d.intl.string(d.t.cpT0Cg),
                                children: (0, l.jsx)(a.Dio, {
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
