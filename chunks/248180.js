var l = e(288106);
e.d(
    t,
    {},
    {
        G: function (n) {
            let t = n?.rewardConfig?.discount;
            return t?.type === l.RP.PERCENT && !0 === t.fiatEnabled ? t.amount : null;
        },
    },
);
