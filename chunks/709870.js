r.d(n, { $: () => o });
var t = r(477900);
r(582128);
var a = r(192308);
function o(e) {
    let { orbsAmount: n, openGiftingBadgePostPurchaseModal: o } = e;
    (0, a.openModalLazy)(async () => {
        let { NitroOrbsBonusDefaultModal: e, NitroOrbsBonusGiftingModal: a } = await Promise.all([
            r.e("393137"),
            r.e("720094"),
        ]).then(r.bind(r, 743597));
        return null != o
            ? (e) => (0, t.jsx)(a, { orbsAmount: n, openGiftingBadgePostPurchaseModal: o, ...e })
            : (r) => (0, t.jsx)(e, { orbsAmount: n, ...r });
    });
}
