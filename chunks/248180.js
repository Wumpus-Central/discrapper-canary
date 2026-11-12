var e = r(288106);
r.d(
    t,
    {},
    {
        S: function (n) {
            let t = n?.rewardConfig?.discount;
            return t?.type === e.RP.PERCENT ? t.amount : null;
        },
    },
);
