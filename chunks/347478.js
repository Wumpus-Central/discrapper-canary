var n = e(288106),
    i = e(604913);
e.d(
    r,
    {},
    {
        $: function (t) {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case i.hE.COLLECT_AND_CLAIM:
                    return t.rewardStatus === n.GM.IN_PROGRESS;
                case i.hE.TARGETED_OFFER:
                    return !0;
                default:
                    return !1;
            }
        },
    },
);
