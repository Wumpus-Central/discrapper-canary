n.d(i, { default: () => R });
var a = n(477900);
n(582128);
var E = n(83790),
    _ = n(964486),
    c = n(793574),
    l = n(688810),
    o = n(976860),
    e = n(174459),
    s = n(158045),
    r = n(10392),
    A = n(82498),
    S = n(831318),
    L = n(202541),
    M = n(652215);
n(811233);
var P = n(375708),
    u = n(936037),
    I = n(407511);
function R(t) {
    let { onClose: i, isReminder: n = !1, limit: R, analyticsLocations: p = [], ...O } = t,
        d = n ? 50 : 200,
        { analyticsLocations: U } = (0, l.Ay)(p, c.A.PREMIUM_UPSELL_MODAL);
    return (
        (0, _.Ay)(() => {
            e.default.track(M.HAw.PREMIUM_UPSELL_VIEWED, {
                type: E.w.SAVED_MESSAGES,
                location_section: M.JJy.PREMIUM_FOR_LATER_UPSELL_MODAL,
                location_stack: U,
                sku_id: (0, s.mH)(L.pe.TIER_2),
            }),
                (0, r.sq)(M.U7l.PREMIUM_UPSELL_VIEWED, U, () => (0, A.uq)(E.w.SAVED_MESSAGES));
        }),
        (0, a.jsx)(l.f5, {
            value: U,
            children: (0, a.jsx)(S.A, {
                title:
                    null == R
                        ? P.intl.string(P.t.w4DRbZ)
                        : P.intl.formatToPlainString(n ? P.t["cpj9o/"] : P.t.Oxm3Sq, { premiumMax: d }),
                subtitle:
                    null == R
                        ? P.intl.string(P.t.F6u3E3)
                        : P.intl.formatToPlainString(n ? P.t.IwWQgO : P.t.sgXqR1, { max: R, premiumMax: d }),
                graphic: { src: n ? I : u, type: "image" },
                badgeType: "beta",
                secondaryCTA: P.intl.string(P.t.PcTCB7),
                onSecondaryClick: function () {
                    e.default.track(M.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_section: M.JJy.PREMIUM_FOR_LATER_UPSELL_MODAL,
                        location_object: M.ZSU.NAVIGATION_LINK,
                    }),
                        i(),
                        (0, o.pX)(M.BVt.APPLICATION_STORE);
                },
                onClose: i,
                ...O,
            }),
        })
    );
}
