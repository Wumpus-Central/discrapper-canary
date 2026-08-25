n.d(i, { default: () => p });
var a = n(477900);
n(582128);
var c = n(83790),
    o = n(964486),
    l = n(793574),
    e = n(688810),
    _ = n(976860),
    s = n(174459),
    r = n(158045),
    E = n(831318),
    A = n(202541),
    u = n(652215);
n(811233);
var L = n(375708),
    P = n(936037),
    M = n(407511);
function p(t) {
    let { onClose: i, isReminder: n = !1, limit: p, analyticsLocations: I = [], ...O } = t,
        R = n ? 50 : 200,
        { analyticsLocations: S } = (0, e.Ay)(I, l.A.PREMIUM_UPSELL_MODAL);
    return (
        (0, o.Ay)(() => {
            s.default.track(u.HAw.PREMIUM_UPSELL_VIEWED, {
                type: c.w.SAVED_MESSAGES,
                location_section: u.JJy.PREMIUM_FOR_LATER_UPSELL_MODAL,
                location_stack: S,
                sku_id: (0, r.mH)(A.pe.TIER_2),
            });
        }),
        (0, a.jsx)(e.f5, {
            value: S,
            children: (0, a.jsx)(E.A, {
                title:
                    null == p
                        ? L.intl.string(L.t.w4DRbZ)
                        : L.intl.formatToPlainString(n ? L.t["cpj9o/"] : L.t.Oxm3Sq, { premiumMax: R }),
                subtitle:
                    null == p
                        ? L.intl.string(L.t.F6u3E3)
                        : L.intl.formatToPlainString(n ? L.t.IwWQgO : L.t.sgXqR1, { max: p, premiumMax: R }),
                graphic: { src: n ? M : P, type: "image" },
                badgeType: "beta",
                secondaryCTA: L.intl.string(L.t.PcTCB7),
                onSecondaryClick: function () {
                    s.default.track(u.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_section: u.JJy.PREMIUM_FOR_LATER_UPSELL_MODAL,
                        location_object: u.ZSU.NAVIGATION_LINK,
                    }),
                        i(),
                        (0, _.pX)(u.BVt.APPLICATION_STORE);
                },
                onClose: i,
                ...O,
            }),
        })
    );
}
