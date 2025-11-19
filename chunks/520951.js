n.d(t, { Z: () => d }), n(388685);
var r = n(473749),
    i = n(442837),
    l = n(162461),
    a = n(71585),
    s = n(146282),
    o = n(561308);
let c = new Set();
function d(e) {
    let t = (0, i.e7)([a.Z, s.Z], () => {
        let e = s.Z.getDebugImpressionCappingDisabled();
        return !(0, l.wm)("useFilterImpressionCappedContent") || e ? c : a.Z.getImpressionCappedItemIds();
    }, [e]);
    return r.useMemo(() => {
        if (null == e)
            return {
                entries: e,
                filteredIds: c,
            };
        let n = new Set();
        return {
            entries: e.filter((e) => !!(0, o.kr)(e) || !t.has(e.id) || (n.add(e.id), !1)),
            filteredIds: n,
        };
    }, [e, t]);
}
