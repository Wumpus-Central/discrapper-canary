"use strict";
n.d(t, { k: () => s });
var r = n(492313),
    i = n(64700);
function s(e) {
    let { selectionMode: t = "single", disallowEmptySelection: n, isDisabled: s = !1 } = e,
        [a, o] = (0, r.P)(
            (0, i.useMemo)(() => (e.selectedKeys ? new Set(e.selectedKeys) : void 0), [e.selectedKeys]),
            (0, i.useMemo)(
                () => (e.defaultSelectedKeys ? new Set(e.defaultSelectedKeys) : new Set()),
                [e.defaultSelectedKeys],
            ),
            e.onSelectionChange,
        );
    return {
        selectionMode: t,
        isDisabled: s,
        selectedKeys: a,
        setSelectedKeys: o,
        toggleKey(e) {
            let r;
            "multiple" === t
                ? (r = new Set(a)).has(e) && (!n || r.size > 1)
                    ? r.delete(e)
                    : r.add(e)
                : (r = new Set(a.has(e) && !n ? [] : [e])),
                o(r);
        },
        setSelected(e, t) {
            t !== a.has(e) && this.toggleKey(e);
        },
    };
}
