n.d(t, {
    c: function () {
        return f;
    }
});
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
    p = n(626135),
    x = n(981631),
    S = n(474936),
    T = n(388032),
    E = n(352545),
    C = n(232186);
let _ = () => {
        (0, d.nJ)(), (0, l.xf)();
    },
    f = () => {
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
                    p.default.track(x.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: S.cd.APP_ICON_UPSELL,
                        location_stack: e
                    });
            }),
            (0, i.jsxs)('div', {
                className: E.selectionGroup,
                children: [
                    (0, i.jsx)(m.Z, {
                        disabled: t && !n,
                        renderCTAButtons: () =>
                            (0, i.jsxs)('div', {
                                className: E.tryItOutButtons,
                                children: [
                                    (0, i.jsx)(r.Button, {
                                        color: !n && t ? r.Button.Colors.PRIMARY : r.Button.Colors.BRAND,
                                        onClick: () => _(),
                                        children: n ? T.intl.string(T.t.SKNnqq) : T.intl.string(T.t['hb/wEx'])
                                    }),
                                    t
                                        ? (0, i.jsx)(g.Z, {
                                              showGradient: n,
                                              subscriptionTier: S.Si.TIER_2,
                                              buttonText: n ? T.intl.string(T.t.pj0XBA) : T.intl.string(T.t.mr4K7O)
                                          })
                                        : null
                                ]
                            })
                    }),
                    (0, i.jsx)(r.FormDivider, { className: C.marginTop20 })
                ]
            })
        );
    };
