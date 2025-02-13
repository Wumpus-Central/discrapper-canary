n.d(t, { Z: () => b }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(622535),
    s = n(481060),
    o = n(425493),
    l = n(211266),
    u = n(906732),
    c = n(626135),
    d = n(724884),
    f = n(355045),
    _ = n(290799),
    p = n(394769),
    h = n(555932),
    m = n(808189),
    g = n(362948),
    E = n(245004),
    v = n(383881),
    y = n(981631),
    I = n(388032),
    T = n(965637);
let b = function (e) {
    let { analyticsLocation: t, guild: n, onClose: b } = e,
        [S, A] = r.useState(!0),
        N = r.useRef(!1),
        C = (0, l.Z)(() => Date.now()),
        { analyticsLocations: R } = (0, u.ZP)(),
        O = r.useCallback(() => {
            b(),
                c.default.track(y.rMx.MODAL_DISMISSED, {
                    type: y.ZY5.PREMIUM_GUILD_USER_MODAL,
                    location_stack: R,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: n.id,
                    duration_open_ms: Date.now() - C
                });
        }, [b, t, R, C, n.id]),
        D = r.useCallback(
            (e) => {
                e &&
                    !N.current &&
                    (c.default.track(y.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: y.ZY5.PREMIUM_GUILD_USER_MODAL,
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
        r.useEffect(() => {
            c.default.track(y.rMx.OPEN_MODAL, {
                type: y.ZY5.PREMIUM_GUILD_USER_MODAL,
                location_stack: R,
                location_section: t.section,
                location_object: t.object,
                guild_id: n.id
            });
        }, [n.id, t, R]),
        r.useEffect(() => {
            function e(e) {
                'Escape' === e.key && O();
            }
            return (
                window.addEventListener('keydown', e),
                () => {
                    window.removeEventListener('keydown', e);
                }
            );
        }, [O]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: T.closeIconWrapper,
                    children: (0, i.jsx)(o.Z, {
                        className: T.closeIcon,
                        closeAction: O,
                        keybind: 'ESC',
                        variant: o.Z.Variants.SOLID
                    })
                }),
                (0, i.jsxs)(s.yWw, {
                    className: T.scroller,
                    children: [
                        (0, i.jsxs)('div', {
                            className: T.header,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: T.headerContentWrapper,
                                    children: [
                                        (0, i.jsx)(s.X6q, {
                                            className: T.heading,
                                            color: 'always-white',
                                            variant: 'display-lg',
                                            children: I.intl.string(I.t.N4sqzM)
                                        }),
                                        (0, i.jsx)(f.Z, {
                                            guild: n,
                                            closeLayer: O,
                                            onCtaVisibilityChange: A
                                        }),
                                        (0, i.jsx)(h.Z, { guild: n }),
                                        (0, i.jsx)(m.Z, { guild: n })
                                    ]
                                }),
                                (0, i.jsx)(v.O, {})
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: T.middleBodyContentWrapper,
                            children: (0, i.jsx)(E.Z, {})
                        }),
                        (0, i.jsxs)('div', {
                            className: T.lowerBody,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: T.lowerBodyContentWrapper,
                                    children: [
                                        (0, i.jsx)(g.Z, {
                                            className: T.tierComparisonTable,
                                            guild: n
                                        }),
                                        (0, i.jsx)(d.Z, {}),
                                        (0, i.jsx)(_.Z, {})
                                    ]
                                }),
                                (0, i.jsx)(v.A, {}),
                                (0, i.jsx)('div', { className: T.lowerBodyBackgroundImage })
                            ]
                        }),
                        (0, i.jsx)(a.$, {
                            onChange: D,
                            children: (0, i.jsx)('div', { className: T.persistentCtaSpacer })
                        })
                    ]
                }),
                (0, i.jsx)(p.Z, {
                    guild: n,
                    isVisible: !S,
                    closeLayer: O
                })
            ]
        })
    );
};
