r.d(t, { $: () => i });
var e = r(477900);
r(582128);
var u = r(192308);
function i(n) {
    let { orbsAmount: t, openGiftingBadgePostPurchaseModal: i } = n;
    (0, u.openModalLazy)(async () => {
        let { NitroOrbsBonusDefaultModal: n, NitroOrbsBonusGiftingModal: u } = await Promise.all([
            r.e("393137"),
            r.e("720094"),
        ]).then(r.bind(r, 743597));
        return null != i
            ? (n) => (0, e.jsx)(u, { orbsAmount: t, openGiftingBadgePostPurchaseModal: i, ...n })
            : (r) => (0, e.jsx)(n, { orbsAmount: t, ...r });
    });
}
