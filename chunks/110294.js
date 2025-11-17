n.d(t, {
    Qk: () => l,
    Uu: () => a,
    pd: () => c,
});
var r = n(632765),
    i = n(473749);
let a = {
    CollectionRoot: ({ collection: e, renderDropIndicator: t }) => o(e, null, t),
    CollectionBranch: ({ collection: e, parent: t, renderDropIndicator: n }) => o(e, t, n),
};
function o(e, t, n) {
    return (0, r.H)({
        items: t ? e.getChildren(t.key) : e,
        dependencies: [n],
        children(t) {
            let r = t.render(t);
            return n && "item" === t.type
                ? i.createElement(
                      i.Fragment,
                      null,
                      n({
                          type: "item",
                          key: t.key,
                          dropPosition: "before",
                      }),
                      r,
                      s(e, t, n),
                  )
                : r;
        },
    });
}
function s(e, t, n) {
    let r = t.key,
        a = e.getKeyAfter(r),
        o = null != a ? e.getItem(a) : null;
    for (; null != o && "item" !== o.type; ) o = null != (a = e.getKeyAfter(o.key)) ? e.getItem(a) : null;
    let s = null != t.nextKey ? e.getItem(t.nextKey) : null;
    for (; null != s && "item" !== s.type; ) s = null != s.nextKey ? e.getItem(s.nextKey) : null;
    let l = [];
    if (null == s) {
        let r = t;
        for (; r && (!o || (r.parentKey !== o.parentKey && o.level < r.level)); ) {
            let t = n({
                type: "item",
                key: r.key,
                dropPosition: "after",
            });
            (0, i.isValidElement)(t) && l.push((0, i.cloneElement)(t, { key: `${r.key}-after` })),
                (r = null != r.parentKey ? e.getItem(r.parentKey) : null);
        }
    }
    return l;
}
let l = (0, i.createContext)(a);
function c(e) {
    return (0, i.useMemo)(() => (null != e ? new Set([e]) : null), [e]);
}
