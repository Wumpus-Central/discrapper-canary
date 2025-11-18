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
    _ = n(626135),
    p = n(342386),
    h = n(981631),
    m = n(474936),
    g = n(388032),
    E = n(77247);
let b = () => {
        (0, d.XO)(d.wh.APP_ICON), (0, p.default)();
    },
    y = () => {
        let { analyticsLocations: e } = (0, l.ZP)(s.Z.USER_SETTINGS),
            t = (0, i.e7)([c.Z], () => c.Z.isUpsellPreview);
        (0, o.ZP)(() => {
            t &&
                _.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: m.cd.APP_ICON_UPSELL,
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
                              subscriptionTier: m.Si.TIER_2,
                              defaultTextOverride: g.intl.string(g.t.mr4K7D),
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
