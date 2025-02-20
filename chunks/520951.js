n.d(t, { Z: () => u }), n(47120);
var r = n(192379),
    i = n(442837),
    l = n(162461),
    o = n(71585),
    a = n(146282),
    s = n(561308);
let c = new Set();
function u(e) {
    let t = (0, i.e7)(
        [o.Z, a.Z],
        () => {
            let e = a.Z.getDebugImpressionCappingDisabled();
            return !(0, l.wm)('useFilterImpressionCappedContent') || e ? c : o.Z.getImpressionCappedItemIds();
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
