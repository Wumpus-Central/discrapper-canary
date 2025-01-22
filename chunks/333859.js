n.d(t, {
    c: function () {
        return S;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    a = n(37234),
    l = n(493773),
    o = n(100527),
    c = n(906732),
    d = n(94795),
    u = n(327943),
    m = n(539873),
    g = n(311476),
    h = n(197115),
    p = n(626135),
    x = n(981631),
    f = n(474936),
    E = n(388032),
    _ = n(352545),
    C = n(232186);
let T = () => {
        (0, d.nJ)(), (0, a.xf)();
    },
    S = () => {
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
            (0, l.Z)(() => {
                t &&
                    p.default.track(x.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: f.cd.APP_ICON_UPSELL,
                        location_stack: e
                    });
            }),
            (0, i.jsxs)('div', {
                className: _.selectionGroup,
                children: [
                    (0, i.jsx)(m.Z, {
                        disabled: t && !n,
                        renderCTAButtons: () =>
                            (0, i.jsxs)('div', {
                                className: _.tryItOutButtons,
                                children: [
                                    (0, i.jsx)(s.Button, {
                                        color: !n && t ? s.Button.Colors.PRIMARY : s.Button.Colors.BRAND,
                                        onClick: () => T(),
                                        children: n ? E.intl.string(E.t.SKNnqq) : E.intl.string(E.t['hb/wEx'])
                                    }),
                                    t
                                        ? (0, i.jsx)(h.Z, {
                                              showGradient: n,
                                              subscriptionTier: f.Si.TIER_2,
                                              buttonText: n ? E.intl.string(E.t.pj0XBA) : E.intl.string(E.t.mr4K7O)
                                          })
                                        : null
                                ]
                            })
                    }),
                    (0, i.jsx)(s.FormDivider, { className: C.marginTop20 })
                ]
            })
        );
    };
