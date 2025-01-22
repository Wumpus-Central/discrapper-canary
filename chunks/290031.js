r.d(n, {
    Hd: function () {
        return l;
    },
    OW: function () {
        return a;
    },
    fR: function () {
        return s;
    },
    sg: function () {
        return o;
    }
});
var i = r(818083);
let a = (0, i.B)({
        kind: 'user',
        id: '2024-03_nitro_tenure_reward_card',
        label: 'Nitro Tenure Reward Card',
        defaultConfig: { enableNitroTenureRewardCard: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enables the nitro tenure reward card for users',
                config: { enableNitroTenureRewardCard: !0 }
            }
        ]
    }),
    o = (0, i.B)({
        kind: 'user',
        id: '2024-02_nitro_tenure_rewards',
        label: 'Nitro Tenure Reward Experiment',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enables the nitro tenure reward UI for the user',
                config: { enabled: !0 }
            }
        ]
    }),
    s = (0, i.B)({
        kind: 'user',
        id: '2024-08_nitro_tenure_rewards_backfill',
        label: 'Nitro Tenure Reward Backfill',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enables the nitro tenure reward backfill for the user',
                config: { enabled: !0 }
            }
        ]
    }),
    l = (0, i.B)({
        kind: 'user',
        id: '2024-11_nitro_tenure_rewards_collectible',
        label: 'Nitro Tenure Reward Collectible',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enables nitro tenure reward collectible for the user',
                config: { enabled: !0 }
            }
        ]
    });
