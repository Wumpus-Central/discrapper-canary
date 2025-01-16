var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(622535),
    l = r(481060),
    u = r(425493),
    c = r(211266),
    d = r(906732),
    f = r(626135),
    _ = r(724884),
    h = r(355045),
    p = r(290799),
    m = r(394769),
    g = r(555932),
    E = r(808189),
    v = r(362948),
    I = r(245004),
    T = r(383881),
    b = r(981631),
    y = r(388032),
    S = r(483843);
function A(e) {
    let { analyticsLocation: n, guild: r, onClose: i } = e,
        [A, N] = s.useState(!0),
        C = s.useRef(!1),
        R = (0, c.Z)(() => Date.now()),
        { analyticsLocations: O } = (0, d.ZP)(),
        D = s.useCallback(() => {
            i(),
                f.default.track(b.rMx.MODAL_DISMISSED, {
                    type: b.ZY5.PREMIUM_GUILD_USER_MODAL,
                    location_stack: O,
                    location_section: n.section,
                    location_object: n.object,
                    guild_id: r.id,
                    duration_open_ms: Date.now() - R
                });
        }, [i, n, O, R, r.id]),
        L = s.useCallback(
            (e) => {
                e &&
                    !C.current &&
                    (f.default.track(b.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: b.ZY5.PREMIUM_GUILD_USER_MODAL,
                        location_stack: O,
                        location_section: n.section,
                        location_object: n.object,
                        guild_id: r.id
                    }),
                    (C.current = !0));
            },
            [n, O, r.id]
        );
    return (
        s.useEffect(() => {
            f.default.track(b.rMx.OPEN_MODAL, {
                type: b.ZY5.PREMIUM_GUILD_USER_MODAL,
                location_stack: O,
                location_section: n.section,
                location_object: n.object,
                guild_id: r.id
            });
        }, [r.id, n, O]),
        s.useEffect(() => {
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
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)('div', {
                    className: S.closeIconWrapper,
                    children: (0, a.jsx)(u.Z, {
                        className: S.closeIcon,
                        closeAction: D,
                        keybind: 'ESC',
                        variant: u.Z.Variants.SOLID
                    })
                }),
                (0, a.jsxs)(l.AdvancedScrollerAuto, {
                    className: S.scroller,
                    children: [
                        (0, a.jsxs)('div', {
                            className: S.header,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: S.headerContentWrapper,
                                    children: [
                                        (0, a.jsx)(l.Heading, {
                                            className: S.heading,
                                            color: 'always-white',
                                            variant: 'display-lg',
                                            children: y.intl.string(y.t.N4sqzM)
                                        }),
                                        (0, a.jsx)(h.Z, {
                                            guild: r,
                                            closeLayer: D,
                                            onCtaVisibilityChange: N
                                        }),
                                        (0, a.jsx)(g.Z, { guild: r }),
                                        (0, a.jsx)(E.Z, { guild: r })
                                    ]
                                }),
                                (0, a.jsx)(T.O, {})
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: S.middleBodyContentWrapper,
                            children: (0, a.jsx)(I.Z, {})
                        }),
                        (0, a.jsxs)('div', {
                            className: S.lowerBody,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: S.lowerBodyContentWrapper,
                                    children: [
                                        (0, a.jsx)(v.Z, {
                                            className: S.tierComparisonTable,
                                            guild: r
                                        }),
                                        (0, a.jsx)(_.Z, {}),
                                        (0, a.jsx)(p.Z, {})
                                    ]
                                }),
                                (0, a.jsx)(T.A, {}),
                                (0, a.jsx)('div', { className: S.lowerBodyBackgroundImage })
                            ]
                        }),
                        (0, a.jsx)(o.$, {
                            onChange: L,
                            children: (0, a.jsx)('div', { className: S.persistentCtaSpacer })
                        })
                    ]
                }),
                (0, a.jsx)(m.Z, {
                    guild: r,
                    isVisible: !A,
                    closeLayer: D
                })
            ]
        })
    );
}
n.Z = A;
