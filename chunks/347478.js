r.d(e, { $: () => a });
var n = r(288106),
    i = r(604913);
function a(t) {
    switch (t?.tenantMetadata?.collectibles?.type) {
        case i.hE.COLLECT_AND_CLAIM:
            return t.rewardStatus === n.GM.IN_PROGRESS;
        case i.hE.TARGETED_OFFER:
            return !0;
        default:
            return !1;
    }
}
