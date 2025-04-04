n.d(t, { Z: () => N }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(622535),
    a = n(481060),
    s = n(425493),
    l = n(211266),
    c = n(906732),
    u = n(50101),
    d = n(174604),
    f = n(302175),
    _ = n(626135),
    p = n(724884),
    h = n(355045),
    m = n(290799),
    g = n(394769),
    E = n(555932),
    b = n(808189),
    y = n(362948),
    v = n(245004),
    O = n(383881),
    I = n(981631),
    S = n(388032),
    T = n(871146);
let N = function (e) {
    let { analyticsLocation: t, guild: n, onClose: N } = e,
        [A, C] = i.useState(!0),
        R = i.useRef(!1),
        P = (0, l.Z)(() => Date.now()),
        { analyticsLocations: w } = (0, c.ZP)(),
        D = i.useRef(null),
        L = i.useRef(null),
        x = i.useRef(null),
        M = i.useCallback(() => {
            null != x.current &&
                null != L.current &&
                L.current.scrollTo({
                    to: x.current.offsetTop,
                    animate: !0
                });
        }, []),
        k = (0, u.Ek)(n.id, 'GuildBoostingMarketing'),
        j = i.useCallback(() => {
            null == N || N(),
                _.default.track(I.rMx.MODAL_DISMISSED, {
                    type: I.ZY5.PREMIUM_GUILD_USER_MODAL,
                    location_stack: w,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: n.id,
                    duration_open_ms: Date.now() - P
                });
        }, [N, t, w, P, n.id]),
        U = i.useCallback(
            (e) => {
                e &&
                    !R.current &&
                    (_.default.track(I.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: I.ZY5.PREMIUM_GUILD_USER_MODAL,
                        location_stack: w,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id
                    }),
                    (R.current = !0));
            },
            [t, w, n.id]
        );
    return (
        i.useEffect(() => {
            _.default.track(I.rMx.OPEN_MODAL, {
                type: I.ZY5.PREMIUM_GUILD_USER_MODAL,
                location_stack: w,
                location_section: t.section,
                location_object: t.object,
                guild_id: n.id
            });
        }, [n.id, t, w]),
        i.useEffect(() => {
            function e(e) {
                'Escape' === e.key && j();
            }
            return (
                window.addEventListener('keydown', e),
                () => {
                    window.removeEventListener('keydown', e);
                }
            );
        }, [j]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != N &&
                    (0, r.jsx)(a.P3F, {
                        'aria-label': S.NW.string(S.t.cpT0Cg),
                        onClick: j,
                        className: T.closeIconWrapper,
                        children: (0, r.jsx)(s.Z, {
                            className: T.closeIcon,
                            closeAction: j,
                            keybind: 'ESC',
                            variant: s.Z.Variants.SOLID
                        })
                    }),
                (0, r.jsxs)(a.yWw, {
                    ref: L,
                    className: T.scroller,
                    children: [
                        (0, r.jsxs)('div', {
                            className: T.header,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: T.headerContentWrapper,
                                    children: [
                                        k &&
                                            (0, r.jsx)(d.Z, {
                                                guild: e.guild,
                                                themeResponsive: !1,
                                                onButtonClick: M
                                            }),
                                        (0, r.jsx)(a.X6q, {
                                            className: T.heading,
                                            color: 'always-white',
                                            variant: 'display-lg',
                                            children: S.NW.string(S.t.N4sqzM)
                                        }),
                                        (0, r.jsx)(h.Z, {
                                            guild: n,
                                            closeLayer: j,
                                            onCtaVisibilityChange: C
                                        }),
                                        (0, r.jsx)(E.Z, { guild: n }),
                                        (0, r.jsx)(b.Z, { guild: n })
                                    ]
                                }),
                                (0, r.jsx)(O.O, {})
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: T.middleBodyContentWrapper,
                            children: [
                                (0, r.jsx)(v.ZP, { guild: e.guild }),
                                k &&
                                    (0, r.jsx)(f.Z, {
                                        ref: x,
                                        guild: e.guild,
                                        onClose: j
                                    })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: T.lowerBody,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: T.lowerBodyContentWrapper,
                                    children: [
                                        (0, r.jsx)(y.Z, {
                                            className: T.tierComparisonTable,
                                            guild: n
                                        }),
                                        (0, r.jsx)(p.Z, {}),
                                        (0, r.jsx)(m.Z, {})
                                    ]
                                }),
                                (0, r.jsx)(O.A, {}),
                                (0, r.jsx)('div', { className: T.lowerBodyBackgroundImage })
                            ]
                        }),
                        (0, r.jsx)(o.$, {
                            innerRef: D,
                            onChange: U,
                            children: (0, r.jsx)('div', {
                                ref: D,
                                className: T.persistentCtaSpacer
                            })
                        })
                    ]
                }),
                (0, r.jsx)(g.Z, {
                    guild: n,
                    isVisible: !A,
                    closeLayer: j
                })
            ]
        })
    );
};
