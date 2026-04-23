l.d(t, { U5: () => r, Ux: () => o, XW: () => u, oC: () => s });
var n = l(64700);
let o = (0, n.createContext)({}),
    r = (0, n.createContext)(null),
    i = (0, n.forwardRef)(function (e, t) {
        let { render: l } = (0, n.useContext)(r);
        return n.createElement(n.Fragment, null, l(e, t));
    });
function s(e, t) {
    var l;
    let o = null == e ? void 0 : e.renderDropIndicator,
        r = null == e || null == (l = e.isVirtualDragging) ? void 0 : l.call(e),
        s = (0, n.useCallback)(
            (e) => {
                if (r || (null == t ? void 0 : t.isDropTarget(e))) return o ? o(e) : n.createElement(i, { target: e });
            },
            [null == t ? void 0 : t.target, r, o],
        );
    return (null == e ? void 0 : e.useDropIndicator) ? s : void 0;
}
function u(e, t, l) {
    var o, r, i, s, u, a;
    let c = e.focusedKey,
        d = null;
    if (
        (null == t || null == (o = t.isVirtualDragging) ? void 0 : o.call(t)) &&
        (null == l || null == (r = l.target) ? void 0 : r.type) === "item" &&
        ((d = l.target.key), "after" === l.target.dropPosition)
    ) {
        let e = l.collection.getKeyAfter(d),
            t = null;
        if (null != e) {
            let n = null != (s = null == (i = l.collection.getItem(d)) ? void 0 : i.level) ? s : 0;
            for (; e; ) {
                let o = l.collection.getItem(e);
                if (!o) break;
                if ("item" !== o.type) {
                    e = l.collection.getKeyAfter(e);
                    continue;
                }
                if ((null != (u = o.level) ? u : 0) <= n) break;
                (t = e), (e = l.collection.getKeyAfter(e));
            }
        }
        d = null != (a = null != e ? e : t) ? a : d;
    }
    return (0, n.useMemo)(() => new Set([c, d].filter((e) => null != e)), [c, d]);
}
