n.d(t, { Z: () => d }), n(47120);
var i = n(192379),
    l = n(442837),
    a = n(162461),
    r = n(71585),
    s = n(146282),
    o = n(561308);
let c = new Set();
function d(e) {
    let t = (0, l.e7)(
        [r.Z, s.Z],
        () => {
            let e = s.Z.getDebugImpressionCappingDisabled();
            return !(0, a.wm)('useFilterImpressionCappedContent') || e ? c : r.Z.getImpressionCappedItemIds();
        },
        [e]
    );
    return i.useMemo(() => {
        if (null == e)
            return {
                entries: e,
                filteredIds: c
            };
        let n = new Set();
        return {
            entries: e.filter((e) => !!(0, o.kr)(e) || !t.has(e.id) || (n.add(e.id), !1)),
            filteredIds: n
        };
    }, [e, t]);
}
