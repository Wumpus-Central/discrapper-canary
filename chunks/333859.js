n.d(t, { c: () => O });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(493773),
    s = n(100527),
    l = n(906732),
    c = n(737604),
    u = n(539873),
    d = n(550385),
    f = n(638212),
    p = n(626135),
    _ = n(526665),
    m = n(342386),
    h = n(981631),
    g = n(474936),
    E = n(388032),
    b = n(813671);
let y = () => {
        (0, d.XO)(d.wh.APP_ICON), (0, m.default)();
    },
    O = () => {
        let { analyticsLocations: e } = (0, l.ZP)(s.Z.USER_SETTINGS),
            t = (0, i.e7)([c.Z], () => c.Z.isUpsellPreview),
            n = (0, _.gN)("UserSettingsAppearanceInAppIcon");
        (0, o.ZP)(() => {
            t &&
                p.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: g.cd.APP_ICON_UPSELL,
                    location_stack: e,
                });
        });
        let d = () =>
            (0, r.jsxs)("div", {
                className: b.tryItOutButtons,
                children: [
                    (0, r.jsx)(a.Button, {
                        variant: t ? "secondary" : "primary",
                        text: E.intl.string(E.t["hb/wE0"]),
                        onClick: () => y(),
                    }),
                    t
                        ? (0, r.jsx)(f.Z, {
                              subscriptionTier: g.Si.TIER_2,
                              defaultTextOverride: E.intl.string(E.t.mr4K7D),
                              premiumModalAnalyticsLocation: {
                                  object: h.qAy.BUTTON_CTA,
                                  objectType: h.AnalyticsObjectTypes.BUY,
                              },
                              fullWidth: !0,
                          })
                        : null,
                ],
            });
        return (0, r.jsxs)("div", {
            className: b.selectionGroup,
            children: [
                (0, r.jsx)(u.Z, {
                    disabled: t,
                    renderCTAButtons: d,
                }),
                !n && (0, r.jsx)(a.izJ, { className: b.divider }),
            ],
        });
    };
