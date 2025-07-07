(n.d(t, { Z: () => N }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(622535),
    o = n(481060),
    s = n(425493),
    l = n(211266),
    c = n(906732),
    u = n(50101),
    d = n(365710),
    f = n(174604),
    _ = n(302175),
    p = n(626135),
    h = n(724884),
    m = n(355045),
    g = n(290799),
    E = n(394769),
    b = n(555932),
    y = n(808189),
    O = n(362948),
    v = n(245004),
    I = n(383881),
    T = n(981631),
    S = n(388032),
    A = n(871146);
let N = function (e) {
    let { analyticsLocation: t, guild: n, onClose: N } = e,
        [C, R] = i.useState(!0),
        P = i.useRef(!1),
        w = (0, l.Z)(() => Date.now()),
        { analyticsLocations: D } = (0, c.ZP)(),
        L = i.useRef(null),
        x = i.useRef(null),
        k = i.useRef(null),
        M = i.useCallback(() => {
            null != k.current &&
                null != x.current &&
                x.current.scrollTo({
                    to: k.current.offsetTop,
                    animate: !0
                });
        }, []),
        j = (0, u.Ek)(n.id, 'GuildBoostingMarketing'),
        U = i.useCallback(() => {
            (null == N || N(),
                p.default.track(T.rMx.MODAL_DISMISSED, {
                    type: T.ZY5.PREMIUM_GUILD_USER_MODAL,
                    location_stack: D,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: n.id,
                    duration_open_ms: Date.now() - w
                }));
        }, [N, t, D, w, n.id]),
        G = i.useCallback(
            (e) => {
                e &&
                    !P.current &&
                    (p.default.track(T.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: T.ZY5.PREMIUM_GUILD_USER_MODAL,
                        location_stack: D,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id
                    }),
                    (P.current = !0));
            },
            [t, D, n.id]
        );
    (i.useEffect(() => {
        p.default.track(T.rMx.OPEN_MODAL, {
            type: T.ZY5.PREMIUM_GUILD_USER_MODAL,
            location_stack: D,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id
        });
    }, [n.id, t, D]),
        i.useEffect(() => {
            function e(e) {
                'Escape' === e.key && U();
            }
            return (
                window.addEventListener('keydown', e),
                () => {
                    window.removeEventListener('keydown', e);
                }
            );
        }, [U]));
    let B = (0, d.U)('GuildBoostingMarketing');
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != N &&
                (0, r.jsx)('div', {
                    className: A.closeIconWrapper,
                    children: (0, r.jsx)(s.Z, {
                        className: A.closeIcon,
                        closeAction: U,
                        keybind: 'ESC',
                        variant: s.Z.Variants.BOLD
                    })
                }),
            (0, r.jsxs)(o.yWw, {
                ref: x,
                className: A.scroller,
                children: [
                    (0, r.jsxs)('div', {
                        className: A.header,
                        children: [
                            (0, r.jsxs)('div', {
                                className: A.headerContentWrapper,
                                children: [
                                    j &&
                                        (0, r.jsx)(f.Z, {
                                            guild: e.guild,
                                            themeResponsive: !1,
                                            onButtonClick: M
                                        }),
                                    (0, r.jsx)(o.X6q, {
                                        className: A.heading,
                                        color: 'always-white',
                                        variant: 'display-lg',
                                        children: S.intl.string(S.t.N4sqzM)
                                    }),
                                    (0, r.jsx)(m.Z, {
                                        guild: n,
                                        closeLayer: U,
                                        onCtaVisibilityChange: R
                                    }),
                                    (0, r.jsx)(b.Z, { guild: n }),
                                    (0, r.jsx)(y.Z, { guild: n })
                                ]
                            }),
                            (0, r.jsx)(I.O, {})
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: A.middleBodyContentWrapper,
                        children: [
                            !B && (0, r.jsx)(v.ZP, { guild: e.guild }),
                            j &&
                                (0, r.jsx)(_.Z, {
                                    ref: k,
                                    guild: e.guild,
                                    onClose: U
                                })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: A.lowerBody,
                        children: [
                            (0, r.jsxs)('div', {
                                className: A.lowerBodyContentWrapper,
                                children: [
                                    (0, r.jsx)(O.Z, {
                                        className: A.tierComparisonTable,
                                        guild: n
                                    }),
                                    (0, r.jsx)(h.Z, {}),
                                    (0, r.jsx)(g.Z, { isGuildPowerupsExperimentEnabled: j })
                                ]
                            }),
                            (0, r.jsx)(I.A, {}),
                            (0, r.jsx)('div', { className: A.lowerBodyBackgroundImage })
                        ]
                    }),
                    (0, r.jsx)(a.$, {
                        innerRef: L,
                        onChange: G,
                        children: (0, r.jsx)('div', {
                            ref: L,
                            className: A.persistentCtaSpacer
                        })
                    })
                ]
            }),
            (0, r.jsx)(E.Z, {
                guild: n,
                isVisible: !C,
                closeLayer: U
            })
        ]
    });
};
