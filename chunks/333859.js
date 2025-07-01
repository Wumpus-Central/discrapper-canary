n.d(t, { c: () => E });
var i = n(255367);
n(73800);
var r = n(442837),
    s = n(481060),
    l = n(37234),
    a = n(493773),
    o = n(100527),
    c = n(906732),
    d = n(737604),
    u = n(539873),
    m = n(550385),
    g = n(767714),
    p = n(626135),
    h = n(981631),
    f = n(474936),
    b = n(388032),
    _ = n(614467);
let x = () => {
        ((0, m.XO)(m.wh.APP_ICON), (0, l.xf)());
    },
    E = () => {
        let { analyticsLocations: e } = (0, c.ZP)(o.Z.USER_SETTINGS),
            t = (0, r.e7)([d.Z], () => d.Z.isUpsellPreview);
        return (
            (0, a.ZP)(() => {
                t &&
                    p.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: f.cd.APP_ICON_UPSELL,
                        location_stack: e
                    });
            }),
            (0, i.jsxs)('div', {
                className: _.selectionGroup,
                children: [
                    (0, i.jsx)(u.Z, {
                        disabled: t,
                        renderCTAButtons: () =>
                            (0, i.jsxs)('div', {
                                className: _.tryItOutButtons,
                                children: [
                                    (0, i.jsx)(s.zxk, {
                                        size: s.zxk.Sizes.MEDIUM,
                                        color: t ? s.zxk.Colors.PRIMARY : s.zxk.Colors.BRAND,
                                        onClick: () => x(),
                                        children: b.intl.string(b.t['hb/wEx'])
                                    }),
                                    t
                                        ? (0, i.jsx)(g.Z, {
                                              className: _.tryItOutButton,
                                              showGradient: !1,
                                              subscriptionTier: f.Si.TIER_2,
                                              textOptions: { textOverride: b.intl.string(b.t.mr4K7O) }
                                          })
                                        : null
                                ]
                            })
                    }),
                    (0, i.jsx)(s.$i$, { className: _.divider })
                ]
            })
        );
    };
