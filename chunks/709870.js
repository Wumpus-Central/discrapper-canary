var e = r(477900);
r(582128);
var u = r(192308);
r.d(
    t,
    {},
    {
        $: function (n) {
            let { orbsAmount: t, openGiftingBadgePostPurchaseModal: i } = n;
            (0, u.mM)(async () => {
                let { NitroOrbsBonusDefaultModal: n, NitroOrbsBonusGiftingModal: u } = await Promise.all([
                    r.e(393137),
                    r.e(789428),
                ]).then(r.bind(r, 717983));
                return null != i
                    ? (n) => (0, e.jsx)(u, { orbsAmount: t, openGiftingBadgePostPurchaseModal: i, ...n })
                    : (r) => (0, e.jsx)(n, { orbsAmount: t, ...r });
            });
        },
    },
);
