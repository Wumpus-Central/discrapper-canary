e.d(n, { $: () => l });
var r = e(477900);
e(582128);
var u = e(192308);
function l(t) {
    let { orbsAmount: n, openGiftingBadgePostPurchaseModal: l } = t;
    (0, u.openModalLazy)(async () => {
        let { NitroOrbsBonusDefaultModal: t, NitroOrbsBonusGiftingModal: u } = await Promise.all([
            e.e("393137"),
            e.e("720094"),
        ]).then(e.bind(e, 743597));
        return null != l
            ? (t) => (0, r.jsx)(u, { orbsAmount: n, openGiftingBadgePostPurchaseModal: l, ...t })
            : (e) => (0, r.jsx)(t, { orbsAmount: n, ...e });
    });
}
