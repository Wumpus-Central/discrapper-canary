if ((l.d(t, { Rj: () => c, SS: () => d, qZ: () => i }), 588245 != l.j)) var s = l(196765);
var n = l(882035);
let c = (0, l(976245).y)()((e, t) => ({
    config: null,
    selectedIds: new Set(),
    actions: {
        startMultiselect: (l) =>
            null == t().config &&
            (e(() => ({
                config: l,
                selectedIds: null != l.initialSelectedIds ? new Set(l.initialSelectedIds) : new Set(),
            })),
            !0),
        endMultiselect(l) {
            let s = t();
            return (
                (null == s.config || s.config.key === l) && (e(() => ({ config: null, selectedIds: new Set() })), !0)
            );
        },
        setSelectedSkus(t) {
            e(() => ({ selectedIds: new Set(t) }));
        },
        setSkuSelected(l, s) {
            let { selectedIds: n } = t();
            if (n.has(l) === s) return;
            let c = new Set(n);
            (s ? c.add(l) : c.delete(l), e(() => ({ selectedIds: c })));
        },
    },
}));
function i(e) {
    return (0, s.P)(c, e);
}
function d(e, t) {
    return (0, n.n)(
        c,
        (l) => {
            let s = null !== l.config && l.config.applicationId === t,
                n = l.selectedIds.has(e);
            return {
                isSelectionActive: s,
                selected: n,
                setSelected: (t) => l.actions.setSkuSelected(e, t),
                disabled: s && !n && l.config?.maxSelections != null && l.selectedIds.size >= l.config.maxSelections,
            };
        },
        (e, t) => e.isSelectionActive === t.isSelectionActive && e.selected === t.selected && e.disabled === t.disabled,
    );
}
