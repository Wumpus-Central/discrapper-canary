n.d(t, {
    k: () => a,
});
var r = n(492313),
    i = n(64700);

function a(e) {
    let { selectionMode: t = "single", disallowEmptySelection: n, isDisabled: a = !1 } = e,
        [s, o] = (0, r.P)(
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
        selectedKeys: s,
        setSelectedKeys: o,
        toggleKey(e) {
            let r;
            "multiple" === t
                ? (r = new Set(s)).has(e) && (!n || r.size > 1)
                    ? r.delete(e)
                    : r.add(e)
                : (r = new Set(s.has(e) && !n ? [] : [e])),
                o(r);
        },
        setSelected(e, t) {
            t !== s.has(e) && this.toggleKey(e);
        },
    };
}
