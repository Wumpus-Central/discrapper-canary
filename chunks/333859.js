n.d(t, { c: () => I });
var i = n(200651);
n(192379);
var s = n(442837),
    l = n(481060),
    r = n(37234),
    a = n(493773),
    o = n(100527),
    c = n(906732),
    d = n(94795),
    u = n(327943),
    h = n(539873),
    m = n(311476),
    g = n(197115),
    x = n(626135),
    _ = n(981631),
    p = n(474936),
    E = n(388032),
    C = n(491654);
let N = () => {
        (0, d.nJ)(), (0, r.xf)();
    },
    I = () => {
        let { analyticsLocations: e } = (0, c.ZP)(o.Z.USER_SETTINGS),
            t = (0, s.e7)([u.Z], () => u.Z.isUpsellPreview),
            { enabled: n } = m.Z.getCurrentConfig(
                { location: 'UserSettingsAppearanceInAppIcon' },
                {
                    autoTrackExposure: t,
                    disable: !t
                }
            );
        return (
            (0, a.ZP)(() => {
                t &&
                    x.default.track(_.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: p.cd.APP_ICON_UPSELL,
                        location_stack: e
                    });
            }),
            (0, i.jsxs)('div', {
                className: C.selectionGroup,
                children: [
                    (0, i.jsx)(h.Z, {
                        disabled: t && !n,
                        renderCTAButtons: () =>
                            (0, i.jsxs)('div', {
                                className: C.tryItOutButtons,
                                children: [
                                    (0, i.jsx)(l.zxk, {
                                        size: l.zxk.Sizes.MEDIUM,
                                        color: !n && t ? l.zxk.Colors.PRIMARY : l.zxk.Colors.BRAND,
                                        onClick: () => N(),
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
                    (0, i.jsx)(l.$i$, { className: C.divider })
                ]
            })
        );
    };
