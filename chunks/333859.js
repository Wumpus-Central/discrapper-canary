n.d(t, { c: () => E });
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(37234),
    l = n(493773),
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
    N = n(388032),
    x = n(614467);
let _ = () => {
        (0, d.nJ)(), (0, a.xf)();
    },
    E = () => {
        let { analyticsLocations: e } = (0, c.ZP)(o.Z.USER_SETTINGS),
            t = (0, i.e7)([u.Z], () => u.Z.isUpsellPreview),
            { enabled: n } = g.Z.getCurrentConfig(
                { location: 'UserSettingsAppearanceInAppIcon' },
                {
                    autoTrackExposure: t,
                    disable: !t
                }
            );
        return (
            (0, l.ZP)(() => {
                t &&
                    h.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: b.cd.APP_ICON_UPSELL,
                        location_stack: e
                    });
            }),
            (0, r.jsxs)('div', {
                className: x.selectionGroup,
                children: [
                    (0, r.jsx)(m.Z, {
                        disabled: t && !n,
                        renderCTAButtons: () =>
                            (0, r.jsxs)('div', {
                                className: x.tryItOutButtons,
                                children: [
                                    (0, r.jsx)(s.zxk, {
                                        size: s.zxk.Sizes.MEDIUM,
                                        color: !n && t ? s.zxk.Colors.PRIMARY : s.zxk.Colors.BRAND,
                                        onClick: () => _(),
                                        children: n ? N.NW.string(N.t.SKNnqq) : N.NW.string(N.t['hb/wEx'])
                                    }),
                                    t
                                        ? (0, r.jsx)(p.Z, {
                                              className: x.tryItOutButton,
                                              showGradient: n,
                                              subscriptionTier: b.Si.TIER_2,
                                              buttonText: n ? N.NW.string(N.t.pj0XBA) : N.NW.string(N.t.mr4K7O)
                                          })
                                        : null
                                ]
                            })
                    }),
                    (0, r.jsx)(s.$i$, { className: x.divider })
                ]
            })
        );
    };
