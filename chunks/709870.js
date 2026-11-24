var l = e(477900);
e(582128);
var u = e(192308);
e.d(
    t,
    {},
    {
        $: function (n) {
            let { orbsAmount: t, openGiftingBadgePostPurchaseModal: r } = n;
            (0, u.mM)(async () => {
                let { NitroOrbsBonusDefaultModal: n, NitroOrbsBonusGiftingModal: u } = await Promise.all([
                    e.e(393137),
                    e.e(789428),
                ]).then(e.bind(e, 717983));
                return null != r
                    ? (n) => (0, l.jsx)(u, { orbsAmount: t, openGiftingBadgePostPurchaseModal: r, ...n })
                    : (e) => (0, l.jsx)(n, { orbsAmount: t, ...e });
            });
        },
    },
);
