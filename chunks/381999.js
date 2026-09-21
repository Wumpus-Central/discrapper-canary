if ((l.d(t, { Rj: () => i, SS: () => c, qZ: () => d }), 588245 != l.j)) var s = l(196765);
var n = l(882035);
let i = (0, l(976245).y)()((e, t) => ({
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
            let i = new Set(n);
            (s ? i.add(l) : i.delete(l), e(() => ({ selectedIds: i })));
        },
    },
}));
function d(e) {
    return (0, s.P)(i, e);
}
function c(e, t) {
    let { disabled: l = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return (0, n.n)(
        i,
        (s) => {
            let n = !l && null !== s.config && s.config.applicationId === t,
                i = s.selectedIds.has(e);
            return {
                isSelectionActive: n,
                selected: i,
                setSelected: (t) => s.actions.setSkuSelected(e, t),
                disabled: n && !i && s.config?.maxSelections != null && s.selectedIds.size >= s.config.maxSelections,
            };
        },
        (e, t) => e.isSelectionActive === t.isSelectionActive && e.selected === t.selected && e.disabled === t.disabled,
    );
}
