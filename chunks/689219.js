i.d(a, { default: () => P });
var n = i(477900);
i(582128);
var o = i(83790),
    e = i(964486),
    E = i(793574),
    c = i(688810),
    _ = i(976860),
    r = i(174459),
    s = i(158045),
    S = i(831318),
    l = i(202541),
    M = i(652215);
i(853297);
var A = i(375708),
    L = i(936037);
function P(t) {
    let { onClose: a, analyticsLocations: i = [], ...P } = t,
        { analyticsLocations: p } = (0, c.Ay)(i, E.A.PREMIUM_UPSELL_MODAL);
    return (
        (0, e.Ay)(() => {
            r.default.track(M.HAw.PREMIUM_UPSELL_VIEWED, {
                type: o.w.SCHEDULED_MESSAGES,
                location_section: M.JJy.PREMIUM_SCHEDULED_MESSAGES_UPSELL_MODAL,
                location_stack: p,
                sku_id: (0, s.mH)(l.pe.TIER_2),
            });
        }),
        (0, n.jsx)(c.f5, {
            value: p,
            children: (0, n.jsx)(S.A, {
                title: A.intl.formatToPlainString(A.t.GNoaxo, { premiumMax: 25 }),
                subtitle: A.intl.formatToPlainString(A.t.YnsakI, { premiumMax: 25 }),
                graphic: { src: L, type: "image" },
                badgeType: "beta",
                secondaryCTA: A.intl.string(A.t.PcTCB7),
                onSecondaryClick: function () {
                    r.default.track(M.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_section: M.JJy.PREMIUM_SCHEDULED_MESSAGES_UPSELL_MODAL,
                        location_object: M.ZSU.NAVIGATION_LINK,
                    }),
                        a(),
                        (0, _.pX)(M.BVt.APPLICATION_STORE);
                },
                onClose: a,
                ...P,
            }),
        })
    );
}
