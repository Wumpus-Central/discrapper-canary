n.d(t, {
    A: () => f,
});
var r = n(224507),
    i = n(371926),
    a = n(332761),
    s = n(132716),
    o = n(803082),
    l = n(790637),
    c = n(853590);
let u = {
        ltr: "ArrowRight",
        rtl: "ArrowLeft",
    },
    d = {
        ltr: "ArrowLeft",
        rtl: "ArrowRight",
    };

function f(e, t, n) {
    let { node: f, isVirtualized: p } = e,
        { rowProps: _, ...h } = (0, a.s)(e, t, n),
        { direction: m } = (0, c.Y)();
    p && !((0, l.D5)() && "expandedKeys" in t)
        ? (_["aria-rowindex"] = f.index + 1 + t.collection.headerRows.length)
        : delete _["aria-rowindex"];
    let g = {};
    if ((0, l.D5)() && "expandedKeys" in t) {
        let e = t.keyMap.get(f.key);
        if (null != e) {
            var E, b, y, O, A, v, S, I, T, C;
            let n =
                (null == (E = e.props) ? void 0 : E.UNSTABLE_childItems) ||
                (null == (y = e.props) || null == (b = y.children) ? void 0 : b.length) > t.userColumnCount;
            g = {
                onKeyDown: (r) => {
                    r.key === u[m] &&
                    t.selectionManager.focusedKey === e.key &&
                    n &&
                    "all" !== t.expandedKeys &&
                    !t.expandedKeys.has(e.key)
                        ? (t.toggleKey(e.key), r.stopPropagation())
                        : r.key === d[m] &&
                          t.selectionManager.focusedKey === e.key &&
                          n &&
                          ("all" === t.expandedKeys || t.expandedKeys.has(e.key)) &&
                          (t.toggleKey(e.key), r.stopPropagation());
                },
                "aria-expanded": n ? "all" === t.expandedKeys || t.expandedKeys.has(f.key) : void 0,
                "aria-level": e.level,
                "aria-posinset": (null != (S = e.indexOfType) ? S : 0) + 1,
                "aria-setsize":
                    e.level > 1
                        ? (null !=
                          (T =
                              null ==
                              (O = (0, i.W)(
                                  null != (I = null == (A = t.keyMap.get(e.parentKey)) ? void 0 : A.childNodes)
                                      ? I
                                      : [],
                              ))
                                  ? void 0
                                  : O.indexOfType)
                              ? T
                              : 0) + 1
                        : (null != (C = null == (v = (0, i.W)(t.collection.body.childNodes)) ? void 0 : v.indexOfType)
                              ? C
                              : 0) + 1,
            };
        }
    }
    let N = (0, s.HI)(f.props),
        R = h.hasAction ? N : {};
    return {
        rowProps: {
            ...(0, o.v)(_, g, R),
            "aria-labelledby": (0, r.VJ)(t, f.key),
        },
        ...h,
    };
}
