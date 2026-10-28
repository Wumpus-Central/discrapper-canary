n.d(t, { h: () => a });
var l = n(582128),
    r = n(288106),
    i = n(871123);
function a(e) {
    let t = e?.rewardRequirements,
        n = e?.rewardStatus;
    return l.useMemo(() => {
        if (n === r.GM.EARNED || n === r.GM.CONSUMED) return null;
        let e = (t ?? []).filter(i.Ww);
        return 1 !== e.length || 1 !== e[0].skuIds.length
            ? null
            : { applicationId: e[0].applicationId, skuId: e[0].skuIds[0] };
    }, [t, n]);
}
