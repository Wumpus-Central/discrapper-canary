"use strict";
n.d(t, { N: () => s, l2: () => l, zL: () => o });
var i = n(183590),
    r = n(64700);
let s = {
    CollectionRoot: ({ collection: e, renderDropIndicator: t }) => a(e, null, t),
    CollectionBranch: ({ collection: e, parent: t, renderDropIndicator: n }) => a(e, t, n),
};
function a(e, t, n) {
    return (0, i.p)({
        items: t ? e.getChildren(t.key) : e,
        dependencies: [n],
        children(t) {
            let i = t.render(t);
            return n && "item" === t.type
                ? r.createElement(
                      r.Fragment,
                      null,
                      n({ type: "item", key: t.key, dropPosition: "before" }),
                      i,
                      (function (e, t, n) {
                          let i = t.key,
                              s = e.getKeyAfter(i),
                              a = null != s ? e.getItem(s) : null;
                          for (; null != a && "item" !== a.type; )
                              a = null != (s = e.getKeyAfter(a.key)) ? e.getItem(s) : null;
                          let o = null != t.nextKey ? e.getItem(t.nextKey) : null;
                          for (; null != o && "item" !== o.type; ) o = null != o.nextKey ? e.getItem(o.nextKey) : null;
                          let l = [];
                          if (null == o) {
                              let i = t;
                              for (; i && (!a || (i.parentKey !== a.parentKey && a.level < i.level)); ) {
                                  let t = n({ type: "item", key: i.key, dropPosition: "after" });
                                  (0, r.isValidElement)(t) && l.push((0, r.cloneElement)(t, { key: `${i.key}-after` })),
                                      (i = null != i.parentKey ? e.getItem(i.parentKey) : null);
                              }
                          }
                          return l;
                      })(e, t, n),
                  )
                : i;
        },
    });
}
let o = (0, r.createContext)(s);
function l(e) {
    return (0, r.useMemo)(() => (null != e ? new Set([e]) : null), [e]);
}
