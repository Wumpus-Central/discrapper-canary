n.d(t, { c: () => v });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(493773),
    s = n(100527),
    l = n(906732),
    c = n(737604),
    u = n(539873),
    d = n(803038),
    f = n(550385),
    _ = n(638212),
    p = n(767714),
    h = n(626135),
    m = n(342386),
    g = n(981631),
    E = n(474936),
    b = n(388032),
    y = n(77247);
let O = () => {
        (0, f.XO)(f.wh.APP_ICON), (0, m.default)();
    },
    v = () => {
        let { analyticsLocations: e } = (0, l.ZP)(s.Z.USER_SETTINGS),
            t = (0, i.e7)([c.Z], () => c.Z.isUpsellPreview);
        (0, o.ZP)(() => {
            t &&
                h.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: E.cd.APP_ICON_UPSELL,
                    location_stack: e,
                });
        });
        let { v2EditorEnabled: n } = d.Mc.useExperiment({ location: "UserSettingsAppearanceInAppIcon" }),
            f = () => {
                let e = n ? y.tryItOutButtonsV2 : y.tryItOutButtons;
                return (0, r.jsxs)("div", {
                    className: e,
                    children: [
                        (0, r.jsx)(a.zxk, {
                            variant: t ? "secondary" : "primary",
                            text: b.intl.string(b.t["hb/wEx"]),
                            onClick: () => O(),
                        }),
                        t
                            ? n
                                ? (0, r.jsx)(_.Z, {
                                      subscriptionTier: E.Si.TIER_2,
                                      defaultTextOverride: b.intl.string(b.t.mr4K7O),
                                      premiumModalAnalyticsLocation: {
                                          object: g.qAy.BUTTON_CTA,
                                          objectType: g.Qqv.BUY,
                                      },
                                      fullWidth: !0,
                                  })
                                : (0, r.jsx)(p.Z, {
                                      className: y.tryItOutButton,
                                      showGradient: !1,
                                      subscriptionTier: E.Si.TIER_2,
                                      textOptions: { textOverride: b.intl.string(b.t.mr4K7O) },
                                  })
                            : null,
                    ],
                });
            };
        return (0, r.jsxs)("div", {
            className: y.selectionGroup,
            children: [
                (0, r.jsx)(u.Z, {
                    disabled: t,
                    renderCTAButtons: f,
                }),
                (0, r.jsx)(a.$i$, { className: y.divider }),
            ],
        });
    };
