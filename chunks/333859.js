n.d(t, { c: () => C });
var i = n(951288);
n(647438);
var r = n(442837),
    s = n(755721),
    a = n(481060),
    l = n(37234),
    o = n(493773),
    c = n(100527),
    d = n(906732),
    u = n(737604),
    m = n(539873),
    p = n(803038),
    g = n(550385),
    h = n(638212),
    f = n(767714),
    b = n(626135),
    x = n(981631),
    _ = n(474936),
    j = n(388032),
    E = n(980676);
let C = () => {
    let { analyticsLocations: e } = (0, d.ZP)(c.Z.USER_SETTINGS),
        t = (0, r.e7)([u.Z], () => u.Z.isUpsellPreview);
    (0, o.ZP)(() => {
        t &&
            b.default.track(x.rMx.PREMIUM_UPSELL_VIEWED, {
                type: _.cd.APP_ICON_UPSELL,
                location_stack: e,
            });
    });
    let { v2EditorEnabled: n } = p.Mc.useExperiment({ location: "UserSettingsAppearanceInAppIcon" });
    return (0, i.jsxs)("div", {
        className: E.selectionGroup,
        children: [
            (0, i.jsx)(m.Z, {
                disabled: t,
                renderCTAButtons: () => {
                    let e = n ? E.tryItOutButtonsV2 : E.tryItOutButtons;
                    return (0, i.jsxs)("div", {
                        className: e,
                        children: [
                            (0, i.jsx)(s.zx, {
                                size: s.zx.Sizes.MEDIUM,
                                color: t ? s.zx.Colors.PRIMARY : s.zx.Colors.BRAND,
                                onClick: () => void ((0, g.XO)(g.wh.APP_ICON), (0, l.xf)()),
                                children: j.intl.string(j.t["hb/wEx"]),
                            }),
                            t
                                ? n
                                    ? (0, i.jsx)(h.Z, {
                                          subscriptionTier: _.Si.TIER_2,
                                          defaultTextOverride: j.intl.string(j.t.mr4K7O),
                                          premiumModalAnalyticsLocation: {
                                              object: x.qAy.BUTTON_CTA,
                                              objectType: x.Qqv.BUY,
                                          },
                                          fullWidth: !0,
                                      })
                                    : (0, i.jsx)(f.Z, {
                                          className: E.tryItOutButton,
                                          showGradient: !1,
                                          subscriptionTier: _.Si.TIER_2,
                                          textOptions: { textOverride: j.intl.string(j.t.mr4K7O) },
                                      })
                                : null,
                        ],
                    });
                },
            }),
            (0, i.jsx)(a.$i$, { className: E.divider }),
        ],
    });
};
