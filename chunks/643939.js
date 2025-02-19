n.d(t, {
    L: () => h,
    T: () => f
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
    c = n(580680),
    u = n(196839),
    p = n(680674),
    x = n(74316);
let f = { NITRO_BASIC: c.nitroBasic },
    h = i.memo(function (e) {
        var t, n;
        let { message: s, handleClick: h, handleClose: _, buttonText: j, useInitialGlow: m, useGlowOnHover: L, handleImageClick: g, className: E, analyticsLocations: S, upsellType: N, themeOverride: y = f.NITRO_BASIC } = e,
            [I, O] = i.useState(m),
            [v, P] = i.useState(p);
        return (
            i.useEffect(() => {
                P(u);
            }, [y]),
            i.useEffect(() => {
                setTimeout(() => O(!1), 3000);
            }, []),
            i.useEffect(() => {
                o.default.track(C.rMx.POST_ACTION_UPSELL_SHOWN, {
                    type: N,
                    location: S
                });
            }, [N, S]),
            (0, l.jsx)('div', {
                className: r()(c.wrapper, y),
                children: (0, l.jsxs)('div', {
                    className: r()(c.content, I ? c.initialGlowUp : c.initialGlowDown, L ? c.contentGlow : null, E),
                    children: [
                        (0, l.jsxs)('div', {
                            className: c.innerContent,
                            children: [
                                (0, l.jsx)(
                                    'div',
                                    ((t = (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                l = Object.keys(n);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (l = l.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                l.forEach(function (t) {
                                                    var l;
                                                    (l = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: l,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = l);
                                                });
                                        }
                                        return e;
                                    })(
                                        { className: r()(c.imageWrapper, void 0 !== g ? c.imageHover : null) },
                                        void 0 !== g
                                            ? {
                                                  onClick: () => {
                                                      o.default.track(C.rMx.POST_ACTION_UPSELL_SECONDARY_ACTION_CLICKED, {
                                                          type: N,
                                                          location: S
                                                      }),
                                                          g();
                                                  }
                                              }
                                            : {}
                                    )),
                                    (n = n =
                                        {
                                            children: (0, l.jsx)('img', {
                                                alt: '',
                                                className: c.image,
                                                src: v
                                            })
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var l = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, l);
                                              }
                                              return n;
                                          })(Object(n)).forEach(function (e) {
                                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                          }),
                                    t)
                                ),
                                (0, l.jsx)('div', {
                                    className: c.heading,
                                    children: (0, l.jsx)(a.X6q, {
                                        variant: 'heading-sm/medium',
                                        children: s
                                    })
                                })
                            ]
                        }),
                        (0, l.jsx)('div', {
                            className: c.buttonWrapper,
                            children: (0, l.jsxs)(a.gtL, {
                                className: c.button,
                                innerClassName: c.buttonInner,
                                size: a.zxk.Sizes.SMALL,
                                color: a.Ttl.CUSTOM,
                                onlyShineOnHover: !0,
                                onClick: () => {
                                    o.default.track(C.rMx.POST_ACTION_UPSELL_PRIMARY_ACTION_CLICKED, {
                                        type: N,
                                        location: S
                                    }),
                                        h();
                                },
                                children: [
                                    (0, l.jsx)('img', {
                                        alt: '',
                                        className: c.buttonNitroIcon,
                                        src: x
                                    }),
                                    j
                                ]
                            })
                        }),
                        (0, l.jsx)('div', {
                            className: c.closeButtonWrapper,
                            children: (0, l.jsx)(a.P3F, {
                                onClick: () => {
                                    o.default.track(C.rMx.POST_ACTION_UPSELL_DISMISSED, {
                                        type: N,
                                        location: S
                                    }),
                                        _();
                                },
                                className: c.closeButton,
                                'aria-label': d.NW.string(d.t.cpT0Cg),
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
