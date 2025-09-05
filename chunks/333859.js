n.d(t, { c: () => I });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(755721),
    o = n(481060),
    s = n(37234),
    l = n(493773),
    c = n(100527),
    u = n(906732),
    d = n(737604),
    f = n(539873),
    _ = n(803038),
    p = n(550385),
    h = n(638212),
    m = n(767714),
    g = n(626135),
    E = n(981631),
    b = n(474936),
    y = n(388032),
    O = n(980676);
let v = () => {
        (0, p.XO)(p.wh.APP_ICON), (0, s.xf)();
    },
    I = () => {
        let { analyticsLocations: e } = (0, u.ZP)(c.Z.USER_SETTINGS),
            t = (0, i.e7)([d.Z], () => d.Z.isUpsellPreview);
        (0, l.ZP)(() => {
            t &&
                g.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: b.cd.APP_ICON_UPSELL,
                    location_stack: e,
                });
        });
        let { v2EditorEnabled: n } = _.Mc.useExperiment({ location: "UserSettingsAppearanceInAppIcon" }),
            s = () => {
                let e = n ? O.tryItOutButtonsV2 : O.tryItOutButtons;
                return (0, r.jsxs)("div", {
                    className: e,
                    children: [
                        (0, r.jsx)(a.zx, {
                            size: a.zx.Sizes.MEDIUM,
                            color: t ? a.zx.Colors.PRIMARY : a.zx.Colors.BRAND,
                            onClick: () => v(),
                            children: y.intl.string(y.t["hb/wEx"]),
                        }),
                        t
                            ? n
                                ? (0, r.jsx)(h.Z, {
                                      subscriptionTier: b.Si.TIER_2,
                                      defaultTextOverride: y.intl.string(y.t.mr4K7O),
                                      premiumModalAnalyticsLocation: {
                                          object: E.qAy.BUTTON_CTA,
                                          objectType: E.Qqv.BUY,
                                      },
                                      fullWidth: !0,
                                  })
                                : (0, r.jsx)(m.Z, {
                                      className: O.tryItOutButton,
                                      showGradient: !1,
                                      subscriptionTier: b.Si.TIER_2,
                                      textOptions: { textOverride: y.intl.string(y.t.mr4K7O) },
                                  })
                            : null,
                    ],
                });
            };
        return (0, r.jsxs)("div", {
            className: O.selectionGroup,
            children: [
                (0, r.jsx)(f.Z, {
                    disabled: t,
                    renderCTAButtons: s,
                }),
                (0, r.jsx)(o.$i$, { className: O.divider }),
            ],
        });
    };
