(n.d(t, { Z: () => u }), n(388685));
var r = n(73800),
    i = n(442837),
    l = n(162461),
    a = n(71585),
    o = n(146282),
    s = n(561308);
let c = new Set();
function u(e) {
    let t = (0, i.e7)(
        [a.Z, o.Z],
        () => {
            let e = o.Z.getDebugImpressionCappingDisabled();
            return !(0, l.wm)('useFilterImpressionCappedContent') || e ? c : a.Z.getImpressionCappedItemIds();
        },
        [e]
    );
    return r.useMemo(() => {
        if (null == e)
            return {
                entries: e,
                filteredIds: c
            };
        let n = new Set();
        return {
            entries: e.filter((e) => !!(0, s.kr)(e) || !t.has(e.id) || (n.add(e.id), !1)),
            filteredIds: n
        };
    }, [e, t]);
}
