t.d(r, { h: () => i });
var n = t(582128),
    l = t(288106),
    u = t(871123);
function i(e) {
    let r = e?.rewardRequirements,
        t = e?.rewardStatus;
    return n.useMemo(() => {
        if (t === l.GM.EARNED || t === l.GM.CONSUMED) return null;
        let e = (r ?? []).filter(u.Ww);
        return 1 !== e.length || 1 !== e[0].skuIds.length
            ? null
            : { applicationId: e[0].applicationId, skuId: e[0].skuIds[0] };
    }, [r, t]);
}
