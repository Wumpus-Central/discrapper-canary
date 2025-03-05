n.d(t, { Z: () => T }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(622535),
    a = n(481060),
    s = n(425493),
    l = n(211266),
    c = n(906732),
    u = n(174604),
    d = n(302175),
    f = n(626135),
    _ = n(724884),
    p = n(355045),
    h = n(290799),
    g = n(394769),
    m = n(555932),
    E = n(808189),
    v = n(362948),
    b = n(245004),
    y = n(383881),
    O = n(981631),
    S = n(388032),
    I = n(37325);
let T = function (e) {
    let { analyticsLocation: t, guild: n, onClose: T } = e,
        [N, A] = i.useState(!0),
        C = i.useRef(!1),
        R = (0, l.Z)(() => Date.now()),
        { analyticsLocations: P } = (0, c.ZP)(),
        D = i.useCallback(() => {
            null == T || T(),
                f.default.track(O.rMx.MODAL_DISMISSED, {
                    type: O.ZY5.PREMIUM_GUILD_USER_MODAL,
                    location_stack: P,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: n.id,
                    duration_open_ms: Date.now() - R
                });
        }, [T, t, P, R, n.id]),
        w = i.useCallback(
            (e) => {
                e &&
                    !C.current &&
                    (f.default.track(O.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: O.ZY5.PREMIUM_GUILD_USER_MODAL,
                        location_stack: P,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id
                    }),
                    (C.current = !0));
            },
            [t, P, n.id]
        );
    return (
        i.useEffect(() => {
            f.default.track(O.rMx.OPEN_MODAL, {
                type: O.ZY5.PREMIUM_GUILD_USER_MODAL,
                location_stack: P,
                location_section: t.section,
                location_object: t.object,
                guild_id: n.id
            });
        }, [n.id, t, P]),
        i.useEffect(() => {
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
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != T &&
                    (0, r.jsx)('div', {
                        className: I.closeIconWrapper,
                        children: (0, r.jsx)(s.Z, {
                            className: I.closeIcon,
                            closeAction: D,
                            keybind: 'ESC',
                            variant: s.Z.Variants.SOLID
                        })
                    }),
                (0, r.jsxs)(a.yWw, {
                    className: I.scroller,
                    children: [
                        (0, r.jsxs)('div', {
                            className: I.header,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: I.headerContentWrapper,
                                    children: [
                                        (0, r.jsx)(u.Z, { guild: e.guild }),
                                        (0, r.jsx)(a.X6q, {
                                            className: I.heading,
                                            color: 'always-white',
                                            variant: 'display-lg',
                                            children: S.NW.string(S.t.N4sqzM)
                                        }),
                                        (0, r.jsx)(p.Z, {
                                            guild: n,
                                            closeLayer: D,
                                            onCtaVisibilityChange: A
                                        }),
                                        (0, r.jsx)(m.Z, { guild: n }),
                                        (0, r.jsx)(E.Z, { guild: n })
                                    ]
                                }),
                                (0, r.jsx)(y.O, {})
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: I.middleBodyContentWrapper,
                            children: [(0, r.jsx)(b.Z, { guild: e.guild }), (0, r.jsx)(d.Z, { guild: e.guild })]
                        }),
                        (0, r.jsxs)('div', {
                            className: I.lowerBody,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: I.lowerBodyContentWrapper,
                                    children: [
                                        (0, r.jsx)(v.Z, {
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
                        (0, r.jsx)(o.$, {
                            onChange: w,
                            children: (0, r.jsx)('div', { className: I.persistentCtaSpacer })
                        })
                    ]
                }),
                (0, r.jsx)(g.Z, {
                    guild: n,
                    isVisible: !N,
                    closeLayer: D
                })
            ]
        })
    );
};
