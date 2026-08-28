E.d(a, { default: () => u });
var i = E(477900);
E(582128);
var n = E(83790),
    o = E(964486),
    _ = E(793574),
    e = E(688810),
    c = E(976860),
    S = E(174459),
    r = E(158045),
    s = E(10392),
    M = E(82498),
    l = E(831318),
    L = E(202541),
    A = E(652215);
E(853297);
var P = E(375708),
    U = E(632946);
function u(t) {
    let { onClose: a, analyticsLocations: E = [], ...u } = t,
        { analyticsLocations: I } = (0, e.Ay)(E, _.A.PREMIUM_UPSELL_MODAL);
    return (
        (0, o.Ay)(() => {
            S.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                type: n.w.SCHEDULED_MESSAGES,
                location_section: A.JJy.PREMIUM_SCHEDULED_MESSAGES_UPSELL_MODAL,
                location_stack: I,
                sku_id: (0, r.mH)(L.pe.TIER_2),
            }),
                (0, s.sq)(A.U7l.PREMIUM_UPSELL_VIEWED, I, () => (0, M.uq)(n.w.SCHEDULED_MESSAGES));
        }),
        (0, i.jsx)(e.f5, {
            value: I,
            children: (0, i.jsx)(l.A, {
                title: P.intl.formatToPlainString(P.t.GNoaxo, { premiumMax: 25 }),
                subtitle: P.intl.formatToPlainString(P.t.YnsakI, { premiumMax: 25 }),
                graphic: { src: U, type: "image" },
                badgeType: "beta",
                secondaryCTA: P.intl.string(P.t.PcTCB7),
                onSecondaryClick: function () {
                    S.default.track(A.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_section: A.JJy.PREMIUM_SCHEDULED_MESSAGES_UPSELL_MODAL,
                        location_object: A.ZSU.NAVIGATION_LINK,
                    }),
                        a(),
                        (0, c.pX)(A.BVt.APPLICATION_STORE);
                },
                onClose: a,
                ...u,
            }),
        })
    );
}
