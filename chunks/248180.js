var r = e(288106);
e.d(
    t,
    {},
    {
        S: function (n) {
            let t = n?.rewardConfig?.discount;
            return t?.type === r.RP.PERCENT ? t.amount : null;
        },
    },
);
