n.d(e, { $: () => s });
var r = n(288106),
    i = n(604913);
function s(t) {
    switch (t?.tenantMetadata?.collectibles?.type) {
        case i.hE.COLLECT_AND_CLAIM:
            return t.rewardStatus === r.GM.IN_PROGRESS;
        case i.hE.TARGETED_OFFER:
            return !0;
        default:
            return !1;
    }
}
