t.d(e, { $: () => a });
var r = t(477900);
t(582128);
var l = t(192308);
function a(n) {
    let { orbsAmount: e, openGiftingBadgePostPurchaseModal: a } = n;
    (0, l.openModalLazy)(async () => {
        let { NitroOrbsBonusDefaultModal: n, NitroOrbsBonusGiftingModal: l } = await Promise.all([
            t.e("393137"),
            t.e("720094"),
        ]).then(t.bind(t, 743597));
        return null != a
            ? (n) => (0, r.jsx)(l, { orbsAmount: e, openGiftingBadgePostPurchaseModal: a, ...n })
            : (t) => (0, r.jsx)(n, { orbsAmount: e, ...t });
    });
}
