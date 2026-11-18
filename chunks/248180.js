var u = e(288106);
e.d(
    t,
    {},
    {
        S: function (n) {
            let t = n?.rewardConfig?.discount;
            return t?.type === u.RP.PERCENT ? t.amount : null;
        },
    },
);
