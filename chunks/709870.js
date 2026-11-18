var u = e(477900);
e(582128);
var r = e(192308);
e.d(
    t,
    {},
    {
        $: function (n) {
            let { orbsAmount: t, openGiftingBadgePostPurchaseModal: l } = n;
            (0, r.mM)(async () => {
                let { NitroOrbsBonusDefaultModal: n, NitroOrbsBonusGiftingModal: r } = await Promise.all([
                    e.e(393137),
                    e.e(789428),
                ]).then(e.bind(e, 717983));
                return null != l
                    ? (n) => (0, u.jsx)(r, { orbsAmount: t, openGiftingBadgePostPurchaseModal: l, ...n })
                    : (e) => (0, u.jsx)(n, { orbsAmount: t, ...e });
            });
        },
    },
);
