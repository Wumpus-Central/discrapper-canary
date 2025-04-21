n.d(t, { c: () => j });
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    l = n(37234),
    a = n(493773),
    o = n(100527),
    c = n(906732),
    d = n(94795),
    u = n(327943),
    m = n(539873),
    g = n(311476),
    p = n(197115),
    h = n(626135),
    f = n(981631),
    b = n(474936),
    _ = n(388032),
    x = n(614467);
let E = () => {
        (0, d.nJ)(), (0, l.xf)();
    },
    j = () => {
        let { analyticsLocations: e } = (0, c.ZP)(o.Z.USER_SETTINGS),
            t = (0, r.e7)([u.Z], () => u.Z.isUpsellPreview),
            { enabled: n } = g.Z.getCurrentConfig(
                { location: 'UserSettingsAppearanceInAppIcon' },
                {
                    autoTrackExposure: t,
                    disable: !t
                }
            );
        return (
            (0, a.ZP)(() => {
                t &&
                    h.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: b.cd.APP_ICON_UPSELL,
                        location_stack: e
                    });
            }),
            (0, i.jsxs)('div', {
                className: x.selectionGroup,
                children: [
                    (0, i.jsx)(m.Z, {
                        disabled: t && !n,
                        renderCTAButtons: () =>
                            (0, i.jsxs)('div', {
                                className: x.tryItOutButtons,
                                children: [
                                    (0, i.jsx)(s.zxk, {
                                        size: s.zxk.Sizes.MEDIUM,
                                        color: !n && t ? s.zxk.Colors.PRIMARY : s.zxk.Colors.BRAND,
                                        onClick: () => E(),
                                        children: n ? _.intl.string(_.t.SKNnqq) : _.intl.string(_.t['hb/wEx'])
                                    }),
                                    t
                                        ? (0, i.jsx)(p.Z, {
                                              className: x.tryItOutButton,
                                              showGradient: n,
                                              subscriptionTier: b.Si.TIER_2,
                                              buttonText: n ? _.intl.string(_.t.pj0XBA) : _.intl.string(_.t.mr4K7O)
                                          })
                                        : null
                                ]
                            })
                    }),
                    (0, i.jsx)(s.$i$, { className: x.divider })
                ]
            })
        );
    };
