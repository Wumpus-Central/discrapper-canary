n.d(t, { K: () => o });
var r = n(17042),
    i = n(929767),
    a = n(624641);
function o(e, t, n) {
    var o, s;
    let { node: l, isVirtualized: c, shouldSelectOnPressUp: u, onAction: d } = e,
        { actions: f, shouldSelectOnPressUp: _ } = r.B.get(t),
        p = f.onRowAction
            ? () => {
                  var e;
                  return null == (e = f.onRowAction) ? void 0 : e.call(f, l.key);
              }
            : d,
        { itemProps: h, ...m } = (0, a.C)({
            selectionManager: t.selectionManager,
            key: l.key,
            ref: n,
            isVirtualized: c,
            shouldSelectOnPressUp: _ || u,
            onAction:
                p || (null == l || null == (o = l.props) ? void 0 : o.onAction)
                    ? (0, i.t)(null == l || null == (s = l.props) ? void 0 : s.onAction, p)
                    : void 0,
            isDisabled: 0 === t.collection.size,
        }),
        g = t.selectionManager.isSelected(l.key),
        E = {
            role: "row",
            "aria-selected": "none" !== t.selectionManager.selectionMode ? g : void 0,
            "aria-disabled": m.isDisabled || void 0,
            ...h,
        };
    return (
        c && (E["aria-rowindex"] = l.index + 1),
        {
            rowProps: E,
            ...m,
        }
    );
}
