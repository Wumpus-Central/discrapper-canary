n.d(t, { E: () => a });
var r = n(386239),
    i = n(473749);
function a(e) {
    let { selectionMode: t = "single", disallowEmptySelection: n, isDisabled: a = !1 } = e,
        [o, s] = (0, r.z)(
            (0, i.useMemo)(() => (e.selectedKeys ? new Set(e.selectedKeys) : void 0), [e.selectedKeys]),
            (0, i.useMemo)(
                () => (e.defaultSelectedKeys ? new Set(e.defaultSelectedKeys) : new Set()),
                [e.defaultSelectedKeys],
            ),
            e.onSelectionChange,
        );
    return {
        selectionMode: t,
        isDisabled: a,
        selectedKeys: o,
        setSelectedKeys: s,
        toggleKey(e) {
            let r;
            "multiple" === t
                ? (r = new Set(o)).has(e) && (!n || r.size > 1)
                    ? r.delete(e)
                    : r.add(e)
                : (r = new Set(o.has(e) && !n ? [] : [e])),
                s(r);
        },
        setSelected(e, t) {
            t !== o.has(e) && this.toggleKey(e);
        },
    };
}
