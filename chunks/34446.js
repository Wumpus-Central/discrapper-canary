"use strict";
r.d(t, { N: () => i, l2: () => l, zL: () => s });
var n = r(447978),
    o = r(582128);
let i = {
    CollectionRoot: ({ collection: e, renderDropIndicator: t }) => a(e, null, t),
    CollectionBranch: ({ collection: e, parent: t, renderDropIndicator: r }) => a(e, t, r),
};
function a(e, t, r) {
    return (0, n.p)({
        items: t ? e.getChildren(t.key) : e,
        dependencies: [r],
        children(t) {
            let n = t.render(t);
            return r && "item" === t.type
                ? o.createElement(
                      o.Fragment,
                      null,
                      r({ type: "item", key: t.key, dropPosition: "before" }),
                      n,
                      (function (e, t, r) {
                          let n = t.key,
                              i = e.getKeyAfter(n),
                              a = null != i ? e.getItem(i) : null;
                          for (; null != a && "item" !== a.type; )
                              a = null != (i = e.getKeyAfter(a.key)) ? e.getItem(i) : null;
                          let s = null != t.nextKey ? e.getItem(t.nextKey) : null;
                          for (; null != s && "item" !== s.type; ) s = null != s.nextKey ? e.getItem(s.nextKey) : null;
                          let l = [];
                          if (null == s) {
                              let n = t;
                              for (; n && (!a || (n.parentKey !== a.parentKey && a.level < n.level)); ) {
                                  let t = r({ type: "item", key: n.key, dropPosition: "after" });
                                  (0, o.isValidElement)(t) && l.push((0, o.cloneElement)(t, { key: `${n.key}-after` })),
                                      (n = null != n.parentKey ? e.getItem(n.parentKey) : null);
                              }
                          }
                          return l;
                      })(e, t, r),
                  )
                : n;
        },
    });
}
let s = (0, o.createContext)(i);
function l(e) {
    return (0, o.useMemo)(() => (null != e ? new Set([e]) : null), [e]);
}
