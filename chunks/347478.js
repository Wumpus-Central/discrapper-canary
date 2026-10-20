e.d(r, { $: () => i });
var n = e(288106),
    a = e(604913);
function i(t) {
    switch (t?.tenantMetadata?.collectibles?.type) {
        case a.hE.COLLECT_AND_CLAIM:
            return t.rewardStatus === n.GM.IN_PROGRESS;
        case a.hE.TARGETED_OFFER:
            return !0;
        default:
            return !1;
    }
}
