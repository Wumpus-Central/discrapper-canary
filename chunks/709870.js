var l = e(477900);
e(582128);
var r = e(192308);
e.d(
    t,
    {},
    {
        $: function (n) {
            let { orbsAmount: t, openGiftingBadgePostPurchaseModal: u } = n;
            (0, r.mM)(async () => {
                let { NitroOrbsBonusDefaultModal: n, NitroOrbsBonusGiftingModal: r } = await Promise.all([
                    e.e(393137),
                    e.e(789428),
                ]).then(e.bind(e, 717983));
                return null != u
                    ? (n) => (0, l.jsx)(r, { orbsAmount: t, openGiftingBadgePostPurchaseModal: u, ...n })
                    : (e) => (0, l.jsx)(n, { orbsAmount: t, ...e });
            });
        },
    },
);
