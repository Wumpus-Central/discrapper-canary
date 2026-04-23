l.d(t, { s: () => i });
var n = l(966209),
    o = l(260431),
    r = l(404108);
function i(e, t, l) {
    var i, s;
    let { node: u, isVirtualized: a, shouldSelectOnPressUp: c, onAction: d } = e,
        { actions: g, shouldSelectOnPressUp: p } = n.B.get(t),
        m = g.onRowAction
            ? () => {
                  var e;
                  return null == (e = g.onRowAction) ? void 0 : e.call(g, u.key);
              }
            : d,
        { itemProps: h, ...y } = (0, r.p)({
            selectionManager: t.selectionManager,
            key: u.key,
            ref: l,
            isVirtualized: a,
            shouldSelectOnPressUp: p || c,
            onAction:
                m || (null == u || null == (i = u.props) ? void 0 : i.onAction)
                    ? (0, o.c)(null == u || null == (s = u.props) ? void 0 : s.onAction, m)
                    : void 0,
            isDisabled: 0 === t.collection.size,
        }),
        v = t.selectionManager.isSelected(u.key),
        f = {
            role: "row",
            "aria-selected": "none" !== t.selectionManager.selectionMode ? v : void 0,
            "aria-disabled": y.isDisabled || void 0,
            ...h,
        };
    return a && (f["aria-rowindex"] = u.index + 1), { rowProps: f, ...y };
}
