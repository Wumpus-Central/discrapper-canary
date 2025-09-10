n.d(t, { c: () => I });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(755721),
    o = n(481060),
    s = n(493773),
    l = n(100527),
    c = n(906732),
    u = n(737604),
    d = n(539873),
    f = n(803038),
    _ = n(550385),
    p = n(638212),
    h = n(767714),
    m = n(626135),
    g = n(342386),
    E = n(981631),
    b = n(474936),
    y = n(388032),
    O = n(980676);
let v = () => {
        (0, _.XO)(_.wh.APP_ICON), (0, g.Z)();
    },
    I = () => {
        let { analyticsLocations: e } = (0, c.ZP)(l.Z.USER_SETTINGS),
            t = (0, i.e7)([u.Z], () => u.Z.isUpsellPreview);
        (0, s.ZP)(() => {
            t &&
                m.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: b.cd.APP_ICON_UPSELL,
                    location_stack: e,
                });
        });
        let { v2EditorEnabled: n } = f.Mc.useExperiment({ location: "UserSettingsAppearanceInAppIcon" }),
            _ = () => {
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
                                ? (0, r.jsx)(p.Z, {
                                      subscriptionTier: b.Si.TIER_2,
                                      defaultTextOverride: y.intl.string(y.t.mr4K7O),
                                      premiumModalAnalyticsLocation: {
                                          object: E.qAy.BUTTON_CTA,
                                          objectType: E.Qqv.BUY,
                                      },
                                      fullWidth: !0,
                                  })
                                : (0, r.jsx)(h.Z, {
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
                (0, r.jsx)(d.Z, {
                    disabled: t,
                    renderCTAButtons: _,
                }),
                (0, r.jsx)(o.$i$, { className: O.divider }),
            ],
        });
    };
