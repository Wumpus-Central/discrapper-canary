var r = e(477900);
e(582128);
var u = e(192308);
e.d(
    t,
    {},
    {
        $: function (n) {
            let { orbsAmount: t, openGiftingBadgePostPurchaseModal: l } = n;
            (0, u.mM)(async () => {
                let { NitroOrbsBonusDefaultModal: n, NitroOrbsBonusGiftingModal: u } = await Promise.all([
                    e.e(393137),
                    e.e(789428),
                ]).then(e.bind(e, 717983));
                return null != l
                    ? (n) => (0, r.jsx)(u, { orbsAmount: t, openGiftingBadgePostPurchaseModal: l, ...n })
                    : (e) => (0, r.jsx)(n, { orbsAmount: t, ...e });
            });
        },
    },
);
