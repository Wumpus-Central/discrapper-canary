var r = n(288106),
    l = n(604913);
n.d(
    e,
    {},
    {
        $: function (t) {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case l.hE.COLLECT_AND_CLAIM:
                    return t.rewardStatus === r.GM.IN_PROGRESS;
                case l.hE.TARGETED_OFFER:
                    return !0;
                default:
                    return !1;
            }
        },
    },
);
