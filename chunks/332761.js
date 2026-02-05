"use strict";
n.d(t, { s: () => s });
var r = n(966209),
    i = n(260431),
    a = n(404108);
function s(e, t, n) {
    var s, o;
    let { node: l, isVirtualized: u, shouldSelectOnPressUp: c, onAction: d } = e,
        { actions: _, shouldSelectOnPressUp: f } = r.B.get(t),
        p = _.onRowAction
            ? () => {
                  var e;
                  return null == (e = _.onRowAction) ? void 0 : e.call(_, l.key);
              }
            : d,
        { itemProps: h, ...m } = (0, a.p)({
            selectionManager: t.selectionManager,
            key: l.key,
            ref: n,
            isVirtualized: u,
            shouldSelectOnPressUp: f || c,
            onAction:
                p || (null == l || null == (s = l.props) ? void 0 : s.onAction)
                    ? (0, i.c)(null == l || null == (o = l.props) ? void 0 : o.onAction, p)
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
    return u && (E["aria-rowindex"] = l.index + 1), { rowProps: E, ...m };
}
