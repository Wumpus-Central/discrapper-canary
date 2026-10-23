c.d(a, { default: () => A });
var E = c(477900);
c(582128);
var e = c(83790),
    i = c(964486),
    n = c(793574),
    o = c(688810),
    s = c(976860),
    _ = c(174459),
    S = c(927578),
    r = c(10392),
    d = c(82498),
    M = c(831318),
    l = c(202541),
    L = c(652215);
c(853297);
var p = c(105292);
function A(t) {
    let { onClose: a, analyticsLocations: c = [], ...A } = t,
        { analyticsLocations: P } = (0, o.Ay)(c, n.A.PREMIUM_UPSELL_MODAL);
    return (
        (0, i.Ay)(() => {
            (_.default.track(L.HAw.PREMIUM_UPSELL_VIEWED, {
                type: e.w.SCHEDULED_MESSAGES,
                location_section: L.JJy.PREMIUM_SCHEDULED_MESSAGES_UPSELL_MODAL,
                location_stack: P,
                sku_id: (0, S.mH)(l.pe.TIER_2),
            }),
                (0, r.sq)(L.U7l.PREMIUM_UPSELL_VIEWED, P, () => (0, d.uq)(e.w.SCHEDULED_MESSAGES)));
        }),
        (0, E.jsx)(o.f5, {
            value: P,
            children: (0, E.jsx)(M.A, {
                title: p.intl.formatToPlainString(p.t.GNoaxo, { premiumMax: 25 }),
                subtitle: p.intl.formatToPlainString(p.t.YnsakI, { premiumMax: 25 }),
                graphic: {
                    src: "https://cdn.discordapp.com/assets/content/b8a8fb7e259ff2d910efca1e5ad38dd31166db4c3670c93bcb481eec74d99fc4.svg",
                    type: "image",
                },
                badgeType: "beta",
                secondaryCTA: p.intl.string(p.t.PcTCB7),
                onSecondaryClick: function () {
                    (_.default.track(L.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_section: L.JJy.PREMIUM_SCHEDULED_MESSAGES_UPSELL_MODAL,
                        location_object: L.ZSU.NAVIGATION_LINK,
                    }),
                        a(),
                        (0, s.pX)(L.BVt.APPLICATION_STORE));
                },
                onClose: a,
                ...A,
            }),
        })
    );
}
