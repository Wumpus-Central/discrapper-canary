n.d(t, {
    U5: () => a,
    Ux: () => i,
    XW: () => l,
    oC: () => o,
});
var r = n(64700);
let i = (0, r.createContext)({}),
    a = (0, r.createContext)(null),
    s = (0, r.forwardRef)(function (e, t) {
        let { render: n } = (0, r.useContext)(a);
        return r.createElement(r.Fragment, null, n(e, t));
    });
function o(e, t) {
    var n;
    let i = null == e ? void 0 : e.renderDropIndicator,
        a = null == e || null == (n = e.isVirtualDragging) ? void 0 : n.call(e),
        o = (0, r.useCallback)(
            (e) => {
                if (a || (null == t ? void 0 : t.isDropTarget(e))) return i ? i(e) : r.createElement(s, { target: e });
            },
            [null == t ? void 0 : t.target, a, i],
        );
    return (null == e ? void 0 : e.useDropIndicator) ? o : void 0;
}
function l(e, t, n) {
    var i, a, s, o, l, c;
    let u = e.focusedKey,
        d = null;
    if (
        (null == t || null == (i = t.isVirtualDragging) ? void 0 : i.call(t)) &&
        (null == n || null == (a = n.target) ? void 0 : a.type) === "item" &&
        ((d = n.target.key), "after" === n.target.dropPosition)
    ) {
        let e = n.collection.getKeyAfter(d),
            t = null;
        if (null != e) {
            let r = null != (o = null == (s = n.collection.getItem(d)) ? void 0 : s.level) ? o : 0;
            for (; e; ) {
                let i = n.collection.getItem(e);
                if (!i) break;
                if ("item" !== i.type) {
                    e = n.collection.getKeyAfter(e);
                    continue;
                }
                if ((null != (l = i.level) ? l : 0) <= r) break;
                (t = e), (e = n.collection.getKeyAfter(e));
            }
        }
        d = null != (c = null != e ? e : t) ? c : d;
    }
    return (0, r.useMemo)(() => new Set([u, d].filter((e) => null != e)), [u, d]);
}
