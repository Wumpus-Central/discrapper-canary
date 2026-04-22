"use strict";
n.d(t, { N: () => s, l2: () => l, zL: () => o });
var r = n(183590),
    i = n(64700);
let s = {
    CollectionRoot: ({ collection: e, renderDropIndicator: t }) => a(e, null, t),
    CollectionBranch: ({ collection: e, parent: t, renderDropIndicator: n }) => a(e, t, n),
};
function a(e, t, n) {
    return (0, r.p)({
        items: t ? e.getChildren(t.key) : e,
        dependencies: [n],
        children(t) {
            let r = t.render(t);
            return n && "item" === t.type
                ? i.createElement(
                      i.Fragment,
                      null,
                      n({ type: "item", key: t.key, dropPosition: "before" }),
                      r,
                      (function (e, t, n) {
                          let r = t.key,
                              s = e.getKeyAfter(r),
                              a = null != s ? e.getItem(s) : null;
                          for (; null != a && "item" !== a.type; )
                              a = null != (s = e.getKeyAfter(a.key)) ? e.getItem(s) : null;
                          let o = null != t.nextKey ? e.getItem(t.nextKey) : null;
                          for (; null != o && "item" !== o.type; ) o = null != o.nextKey ? e.getItem(o.nextKey) : null;
                          let l = [];
                          if (null == o) {
                              let r = t;
                              for (; r && (!a || (r.parentKey !== a.parentKey && a.level < r.level)); ) {
                                  let t = n({ type: "item", key: r.key, dropPosition: "after" });
                                  (0, i.isValidElement)(t) && l.push((0, i.cloneElement)(t, { key: `${r.key}-after` })),
                                      (r = null != r.parentKey ? e.getItem(r.parentKey) : null);
                              }
                          }
                          return l;
                      })(e, t, n),
                  )
                : r;
        },
    });
}
let o = (0, i.createContext)(s);
function l(e) {
    return (0, i.useMemo)(() => (null != e ? new Set([e]) : null), [e]);
}
