l.d(t, { A: () => g });
var n = l(224507),
    o = l(371926),
    r = l(332761),
    i = l(132716),
    s = l(803082),
    u = l(790637),
    a = l(853590);
let c = { ltr: "ArrowRight", rtl: "ArrowLeft" },
    d = { ltr: "ArrowLeft", rtl: "ArrowRight" };
function g(e, t, l) {
    let { node: g, isVirtualized: p } = e,
        { rowProps: m, ...h } = (0, r.s)(e, t, l),
        { direction: y } = (0, a.Y)();
    p && !((0, u.D5)() && "expandedKeys" in t)
        ? (m["aria-rowindex"] = g.index + 1 + t.collection.headerRows.length)
        : delete m["aria-rowindex"];
    let v = {};
    if ((0, u.D5)() && "expandedKeys" in t) {
        let e = t.keyMap.get(g.key);
        if (null != e) {
            var f, k, b, S, C, D, x, A, w, E;
            let l =
                (null == (f = e.props) ? void 0 : f.UNSTABLE_childItems) ||
                (null == (b = e.props) || null == (k = b.children) ? void 0 : k.length) > t.userColumnCount;
            v = {
                onKeyDown: (n) => {
                    n.key === c[y] &&
                    t.selectionManager.focusedKey === e.key &&
                    l &&
                    "all" !== t.expandedKeys &&
                    !t.expandedKeys.has(e.key)
                        ? (t.toggleKey(e.key), n.stopPropagation())
                        : n.key === d[y] &&
                          t.selectionManager.focusedKey === e.key &&
                          l &&
                          ("all" === t.expandedKeys || t.expandedKeys.has(e.key)) &&
                          (t.toggleKey(e.key), n.stopPropagation());
                },
                "aria-expanded": l ? "all" === t.expandedKeys || t.expandedKeys.has(g.key) : void 0,
                "aria-level": e.level,
                "aria-posinset": (null != (x = e.indexOfType) ? x : 0) + 1,
                "aria-setsize":
                    e.level > 1
                        ? (null !=
                          (w =
                              null ==
                              (S = (0, o.W)(
                                  null != (A = null == (C = t.keyMap.get(e.parentKey)) ? void 0 : C.childNodes)
                                      ? A
                                      : [],
                              ))
                                  ? void 0
                                  : S.indexOfType)
                              ? w
                              : 0) + 1
                        : (null != (E = null == (D = (0, o.W)(t.collection.body.childNodes)) ? void 0 : D.indexOfType)
                              ? E
                              : 0) + 1,
            };
        }
    }
    let K = (0, i.HI)(g.props),
        z = h.hasAction ? K : {};
    return { rowProps: { ...(0, s.v)(m, v, z), "aria-labelledby": (0, n.VJ)(t, g.key) }, ...h };
}
