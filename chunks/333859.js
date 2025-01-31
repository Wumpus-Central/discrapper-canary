n.d(t, { c: () => T });
var i = n(200651);
n(192379);
var s = n(442837),
    r = n(481060),
    l = n(37234),
    a = n(493773),
    o = n(100527),
    c = n(906732),
    d = n(94795),
    u = n(327943),
    m = n(539873),
    h = n(311476),
    g = n(197115),
    _ = n(626135),
    x = n(981631),
    p = n(474936),
    E = n(388032),
    C = n(352545);
let f = () => {
        (0, d.nJ)(), (0, l.xf)();
    },
    T = () => {
        let { analyticsLocations: e } = (0, c.ZP)(o.Z.USER_SETTINGS),
            t = (0, s.e7)([u.Z], () => u.Z.isUpsellPreview),
            { enabled: n } = h.Z.getCurrentConfig(
                { location: 'UserSettingsAppearanceInAppIcon' },
                {
                    autoTrackExposure: t,
                    disable: !t
                }
            );
        return (
            (0, a.Z)(() => {
                t &&
                    _.default.track(x.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: p.cd.APP_ICON_UPSELL,
                        location_stack: e
                    });
            }),
            (0, i.jsxs)('div', {
                className: C.selectionGroup,
                children: [
                    (0, i.jsx)(m.Z, {
                        disabled: t && !n,
                        renderCTAButtons: () =>
                            (0, i.jsxs)('div', {
                                className: C.tryItOutButtons,
                                children: [
                                    (0, i.jsx)(r.zxk, {
                                        size: r.zxk.Sizes.MEDIUM,
                                        color: !n && t ? r.zxk.Colors.PRIMARY : r.zxk.Colors.BRAND,
                                        onClick: () => f(),
                                        children: n ? E.intl.string(E.t.SKNnqq) : E.intl.string(E.t['hb/wEx'])
                                    }),
                                    t
                                        ? (0, i.jsx)(g.Z, {
                                              className: C.tryItOutButton,
                                              showGradient: n,
                                              subscriptionTier: p.Si.TIER_2,
                                              buttonText: n ? E.intl.string(E.t.pj0XBA) : E.intl.string(E.t.mr4K7O)
                                          })
                                        : null
                                ]
                            })
                    }),
                    (0, i.jsx)(r.$i$, { className: C.divider })
                ]
            })
        );
    };
