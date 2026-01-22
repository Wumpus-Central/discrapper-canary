n.d(t, {
    N: () => a,
    l2: () => c,
    zL: () => l,
});
var r = n(183590),
    i = n(64700);
let a = {
    CollectionRoot: ({ collection: e, renderDropIndicator: t }) => s(e, null, t),
    CollectionBranch: ({ collection: e, parent: t, renderDropIndicator: n }) => s(e, t, n),
};

function s(e, t, n) {
    return (0, r.p)({
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
                      o(e, t, n),
                  )
                : r;
        },
    });
}

function o(e, t, n) {
    let r = t.key,
        a = e.getKeyAfter(r),
        s = null != a ? e.getItem(a) : null;
    for (; null != s && "item" !== s.type; ) s = null != (a = e.getKeyAfter(s.key)) ? e.getItem(a) : null;
    let o = null != t.nextKey ? e.getItem(t.nextKey) : null;
    for (; null != o && "item" !== o.type; ) o = null != o.nextKey ? e.getItem(o.nextKey) : null;
    let l = [];
    if (null == o) {
        let r = t;
        for (; r && (!s || (r.parentKey !== s.parentKey && s.level < r.level)); ) {
            let t = n({
                type: "item",
                key: r.key,
                dropPosition: "after",
            });
            (0, i.isValidElement)(t) &&
                l.push(
                    (0, i.cloneElement)(t, {
                        key: `${r.key}-after`,
                    }),
                ),
                (r = null != r.parentKey ? e.getItem(r.parentKey) : null);
        }
    }
    return l;
}
let l = (0, i.createContext)(a);

function c(e) {
    return (0, i.useMemo)(() => (null != e ? new Set([e]) : null), [e]);
}
