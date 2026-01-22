n.d(t, { s: () => s });
var r = n(966209),
    i = n(260431),
    a = n(404108);
function s(e, t, n) {
    var s, o;
    let { node: l, isVirtualized: c, shouldSelectOnPressUp: u, onAction: d } = e,
        { actions: f, shouldSelectOnPressUp: p } = r.B.get(t),
        _ = f.onRowAction
            ? () => {
                  var e;
                  return null == (e = f.onRowAction) ? void 0 : e.call(f, l.key);
              }
            : d,
        { itemProps: h, ...m } = (0, a.p)({
            selectionManager: t.selectionManager,
            key: l.key,
            ref: n,
            isVirtualized: c,
            shouldSelectOnPressUp: p || u,
            onAction:
                _ || (null == l || null == (s = l.props) ? void 0 : s.onAction)
                    ? (0, i.c)(null == l || null == (o = l.props) ? void 0 : o.onAction, _)
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
