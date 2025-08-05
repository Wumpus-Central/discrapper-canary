n.d(t, { c: () => C });
var i = n(255367);
n(73800);
var r = n(442837),
    s = n(755721),
    a = n(481060),
    l = n(37234),
    o = n(493773),
    c = n(100527),
    d = n(906732),
    u = n(737604),
    m = n(539873),
    p = n(550385),
    g = n(767714),
    h = n(626135),
    f = n(981631),
    b = n(474936),
    x = n(388032),
    _ = n(614467);
let j = () => {
        ((0, p.XO)(p.wh.APP_ICON), (0, l.xf)());
    },
    C = () => {
        let { analyticsLocations: e } = (0, d.ZP)(c.Z.USER_SETTINGS),
            t = (0, r.e7)([u.Z], () => u.Z.isUpsellPreview);
        return (
            (0, o.ZP)(() => {
                t &&
                    h.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: b.cd.APP_ICON_UPSELL,
                        location_stack: e
                    });
            }),
            (0, i.jsxs)('div', {
                className: _.selectionGroup,
                children: [
                    (0, i.jsx)(m.Z, {
                        disabled: t,
                        renderCTAButtons: () =>
                            (0, i.jsxs)('div', {
                                className: _.tryItOutButtons,
                                children: [
                                    (0, i.jsx)(s.zx, {
                                        size: s.zx.Sizes.MEDIUM,
                                        color: t ? s.zx.Colors.PRIMARY : s.zx.Colors.BRAND,
                                        onClick: () => j(),
                                        children: x.intl.string(x.t['hb/wEx'])
                                    }),
                                    t
                                        ? (0, i.jsx)(g.Z, {
                                              className: _.tryItOutButton,
                                              showGradient: !1,
                                              subscriptionTier: b.Si.TIER_2,
                                              textOptions: { textOverride: x.intl.string(x.t.mr4K7O) }
                                          })
                                        : null
                                ]
                            })
                    }),
                    (0, i.jsx)(a.$i$, { className: _.divider })
                ]
            })
        );
    };
