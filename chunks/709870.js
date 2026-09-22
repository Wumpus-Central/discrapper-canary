n.d(t, { $: () => a });
var r = n(477900);
n(582128);
var l = n(192308);
function a(e) {
    let { orbsAmount: t, openGiftingBadgePostPurchaseModal: a } = e;
    (0, l.openModalLazy)(async () => {
        let { NitroOrbsBonusDefaultModal: e, NitroOrbsBonusGiftingModal: l } = await Promise.all([
            n.e("393137"),
            n.e("720094"),
        ]).then(n.bind(n, 743597));
        return null != a
            ? (e) => (0, r.jsx)(l, { orbsAmount: t, openGiftingBadgePostPurchaseModal: a, ...e })
            : (n) => (0, r.jsx)(e, { orbsAmount: t, ...n });
    });
}
