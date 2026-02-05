"use strict";
n.d(t, { A: () => _ });
var r = n(224507),
    i = n(371926),
    a = n(332761),
    s = n(132716),
    o = n(803082),
    l = n(790637),
    u = n(853590);
let c = { ltr: "ArrowRight", rtl: "ArrowLeft" },
    d = { ltr: "ArrowLeft", rtl: "ArrowRight" };
function _(e, t, n) {
    let { node: _, isVirtualized: f } = e,
        { rowProps: p, ...h } = (0, a.s)(e, t, n),
        { direction: m } = (0, u.Y)();
    f && !((0, l.D5)() && "expandedKeys" in t)
        ? (p["aria-rowindex"] = _.index + 1 + t.collection.headerRows.length)
        : delete p["aria-rowindex"];
    let g = {};
    if ((0, l.D5)() && "expandedKeys" in t) {
        let e = t.keyMap.get(_.key);
        if (null != e) {
            var E, A, I, T, y, S, v, C, b, N;
            let n =
                (null == (E = e.props) ? void 0 : E.UNSTABLE_childItems) ||
                (null == (I = e.props) || null == (A = I.children) ? void 0 : A.length) > t.userColumnCount;
            g = {
                onKeyDown: (r) => {
                    r.key === c[m] &&
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
                "aria-expanded": n ? "all" === t.expandedKeys || t.expandedKeys.has(_.key) : void 0,
                "aria-level": e.level,
                "aria-posinset": (null != (v = e.indexOfType) ? v : 0) + 1,
                "aria-setsize":
                    e.level > 1
                        ? (null !=
                          (b =
                              null ==
                              (T = (0, i.W)(
                                  null != (C = null == (y = t.keyMap.get(e.parentKey)) ? void 0 : y.childNodes)
                                      ? C
                                      : [],
                              ))
                                  ? void 0
                                  : T.indexOfType)
                              ? b
                              : 0) + 1
                        : (null != (N = null == (S = (0, i.W)(t.collection.body.childNodes)) ? void 0 : S.indexOfType)
                              ? N
                              : 0) + 1,
            };
        }
    }
    let R = (0, s.HI)(_.props),
        O = h.hasAction ? R : {};
    return { rowProps: { ...(0, o.v)(p, g, O), "aria-labelledby": (0, r.VJ)(t, _.key) }, ...h };
}
