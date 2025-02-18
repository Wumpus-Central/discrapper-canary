n.d(t, { Z: () => b }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(622535),
    s = n(481060),
    o = n(425493),
    l = n(211266),
    u = n(906732),
    c = n(302175),
    d = n(626135),
    f = n(724884),
    _ = n(355045),
    p = n(290799),
    h = n(394769),
    m = n(555932),
    g = n(808189),
    E = n(362948),
    v = n(245004),
    y = n(383881),
    I = n(981631),
    T = n(388032),
    S = n(965637);
let b = function (e) {
    let { analyticsLocation: t, guild: n, onClose: b } = e,
        [A, N] = r.useState(!0),
        C = r.useRef(!1),
        R = (0, l.Z)(() => Date.now()),
        { analyticsLocations: O } = (0, u.ZP)(),
        D = r.useCallback(() => {
            b(),
                d.default.track(I.rMx.MODAL_DISMISSED, {
                    type: I.ZY5.PREMIUM_GUILD_USER_MODAL,
                    location_stack: O,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: n.id,
                    duration_open_ms: Date.now() - R
                });
        }, [b, t, O, R, n.id]),
        L = r.useCallback(
            (e) => {
                e &&
                    !C.current &&
                    (d.default.track(I.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: I.ZY5.PREMIUM_GUILD_USER_MODAL,
                        location_stack: O,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id
                    }),
                    (C.current = !0));
            },
            [t, O, n.id]
        );
    return (
        r.useEffect(() => {
            d.default.track(I.rMx.OPEN_MODAL, {
                type: I.ZY5.PREMIUM_GUILD_USER_MODAL,
                location_stack: O,
                location_section: t.section,
                location_object: t.object,
                guild_id: n.id
            });
        }, [n.id, t, O]),
        r.useEffect(() => {
            function e(e) {
                'Escape' === e.key && D();
            }
            return (
                window.addEventListener('keydown', e),
                () => {
                    window.removeEventListener('keydown', e);
                }
            );
        }, [D]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: S.closeIconWrapper,
                    children: (0, i.jsx)(o.Z, {
                        className: S.closeIcon,
                        closeAction: D,
                        keybind: 'ESC',
                        variant: o.Z.Variants.SOLID
                    })
                }),
                (0, i.jsxs)(s.yWw, {
                    className: S.scroller,
                    children: [
                        (0, i.jsxs)('div', {
                            className: S.header,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: S.headerContentWrapper,
                                    children: [
                                        (0, i.jsx)(s.X6q, {
                                            className: S.heading,
                                            color: 'always-white',
                                            variant: 'display-lg',
                                            children: T.intl.string(T.t.N4sqzM)
                                        }),
                                        (0, i.jsx)(_.Z, {
                                            guild: n,
                                            closeLayer: D,
                                            onCtaVisibilityChange: N
                                        }),
                                        (0, i.jsx)(m.Z, { guild: n }),
                                        (0, i.jsx)(g.Z, { guild: n })
                                    ]
                                }),
                                (0, i.jsx)(y.O, {})
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: S.middleBodyContentWrapper,
                            children: [(0, i.jsx)(v.Z, { guild: e.guild }), (0, i.jsx)(c.Z, { guild: e.guild })]
                        }),
                        (0, i.jsxs)('div', {
                            className: S.lowerBody,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: S.lowerBodyContentWrapper,
                                    children: [
                                        (0, i.jsx)(E.Z, {
                                            className: S.tierComparisonTable,
                                            guild: n
                                        }),
                                        (0, i.jsx)(f.Z, {}),
                                        (0, i.jsx)(p.Z, {})
                                    ]
                                }),
                                (0, i.jsx)(y.A, {}),
                                (0, i.jsx)('div', { className: S.lowerBodyBackgroundImage })
                            ]
                        }),
                        (0, i.jsx)(a.$, {
                            onChange: L,
                            children: (0, i.jsx)('div', { className: S.persistentCtaSpacer })
                        })
                    ]
                }),
                (0, i.jsx)(h.Z, {
                    guild: n,
                    isVisible: !A,
                    closeLayer: D
                })
            ]
        })
    );
};
