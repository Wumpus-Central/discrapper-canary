n.d(t, { c: () => y });
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
    _ = n(342386),
    m = n(981631),
    h = n(474936),
    g = n(388032),
    E = n(980676);
let b = () => {
        (0, d.XO)(d.wh.APP_ICON), (0, _.default)();
    },
    y = () => {
        let { analyticsLocations: e } = (0, l.ZP)(s.Z.USER_SETTINGS),
            t = (0, i.e7)([c.Z], () => c.Z.isUpsellPreview);
        (0, o.ZP)(() => {
            t &&
                p.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: h.cd.APP_ICON_UPSELL,
                    location_stack: e,
                });
        });
        let n = () =>
            (0, r.jsxs)("div", {
                className: E.tryItOutButtons,
                children: [
                    (0, r.jsx)(a.Button, {
                        variant: t ? "secondary" : "primary",
                        text: g.intl.string(g.t["hb/wE0"]),
                        onClick: () => b(),
                    }),
                    t
                        ? (0, r.jsx)(f.Z, {
                              subscriptionTier: h.Si.TIER_2,
                              defaultTextOverride: g.intl.string(g.t.mr4K7D),
                              premiumModalAnalyticsLocation: {
                                  object: m.qAy.BUTTON_CTA,
                                  objectType: m.AnalyticsObjectTypes.BUY,
                              },
                              fullWidth: !0,
                          })
                        : null,
                ],
            });
        return (0, r.jsxs)("div", {
            className: E.selectionGroup,
            children: [
                (0, r.jsx)(u.Z, {
                    disabled: t,
                    renderCTAButtons: n,
                }),
                (0, r.jsx)(a.izJ, { className: E.divider }),
            ],
        });
    };
