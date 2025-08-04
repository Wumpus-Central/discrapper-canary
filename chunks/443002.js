(n.d(t, { Z: () => T }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(622535),
    o = n(481060),
    s = n(425493),
    l = n(211266),
    c = n(906732),
    u = n(174604),
    d = n(302175),
    f = n(626135),
    _ = n(724884),
    p = n(355045),
    h = n(290799),
    m = n(394769),
    g = n(555932),
    E = n(808189),
    b = n(362948),
    y = n(383881),
    O = n(981631),
    v = n(388032),
    I = n(871146);
let T = function (e) {
    let { analyticsLocation: t, guild: n, onClose: T } = e,
        [S, A] = i.useState(!0),
        N = i.useRef(!1),
        C = (0, l.Z)(() => Date.now()),
        { analyticsLocations: R } = (0, c.ZP)(),
        P = i.useRef(null),
        w = i.useRef(null),
        D = i.useRef(null),
        L = i.useCallback(() => {
            null != D.current &&
                null != w.current &&
                w.current.scrollTo({
                    to: D.current.offsetTop,
                    animate: !0
                });
        }, []),
        x = i.useCallback(() => {
            (null == T || T(),
                f.default.track(O.rMx.MODAL_DISMISSED, {
                    type: O.ZY5.PREMIUM_GUILD_USER_MODAL,
                    location_stack: R,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: n.id,
                    duration_open_ms: Date.now() - C
                }));
        }, [T, t, R, C, n.id]),
        k = i.useCallback(
            (e) => {
                e &&
                    !N.current &&
                    (f.default.track(O.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: O.ZY5.PREMIUM_GUILD_USER_MODAL,
                        location_stack: R,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id
                    }),
                    (N.current = !0));
            },
            [t, R, n.id]
        );
    return (
        i.useEffect(() => {
            f.default.track(O.rMx.OPEN_MODAL, {
                type: O.ZY5.PREMIUM_GUILD_USER_MODAL,
                location_stack: R,
                location_section: t.section,
                location_object: t.object,
                guild_id: n.id
            });
        }, [n.id, t, R]),
        i.useEffect(() => {
            function e(e) {
                'Escape' === e.key && x();
            }
            return (
                window.addEventListener('keydown', e),
                () => {
                    window.removeEventListener('keydown', e);
                }
            );
        }, [x]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != T &&
                    (0, r.jsx)('div', {
                        className: I.closeIconWrapper,
                        children: (0, r.jsx)(s.Z, {
                            className: I.closeIcon,
                            closeAction: x,
                            keybind: 'ESC',
                            variant: s.Z.Variants.BOLD
                        })
                    }),
                (0, r.jsxs)(o.yWw, {
                    ref: w,
                    className: I.scroller,
                    children: [
                        (0, r.jsxs)('div', {
                            className: I.header,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: I.headerContentWrapper,
                                    children: [
                                        (0, r.jsx)(u.Z, {
                                            guild: e.guild,
                                            themeResponsive: !1,
                                            onButtonClick: L
                                        }),
                                        (0, r.jsx)(o.X6q, {
                                            className: I.heading,
                                            color: 'always-white',
                                            variant: 'display-lg',
                                            children: v.intl.string(v.t.N4sqzM)
                                        }),
                                        (0, r.jsx)(p.Z, {
                                            guild: n,
                                            closeLayer: x,
                                            onCtaVisibilityChange: A
                                        }),
                                        (0, r.jsx)(g.Z, { guild: n }),
                                        (0, r.jsx)(E.Z, { guild: n })
                                    ]
                                }),
                                (0, r.jsx)(y.O, {})
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: I.middleBodyContentWrapper,
                            children: (0, r.jsx)(d.Z, {
                                ref: D,
                                guild: e.guild,
                                onClose: x
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: I.lowerBody,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: I.lowerBodyContentWrapper,
                                    children: [
                                        (0, r.jsx)(b.Z, {
                                            className: I.tierComparisonTable,
                                            guild: n
                                        }),
                                        (0, r.jsx)(_.Z, {}),
                                        (0, r.jsx)(h.Z, {})
                                    ]
                                }),
                                (0, r.jsx)(y.A, {}),
                                (0, r.jsx)('div', { className: I.lowerBodyBackgroundImage })
                            ]
                        }),
                        (0, r.jsx)(a.$, {
                            innerRef: P,
                            onChange: k,
                            children: (0, r.jsx)('div', {
                                ref: P,
                                className: I.persistentCtaSpacer
                            })
                        })
                    ]
                }),
                (0, r.jsx)(m.Z, {
                    guild: n,
                    isVisible: !S,
                    closeLayer: x
                })
            ]
        })
    );
};
