"use strict";
r.d(t, { N: () => o, l2: () => l, zL: () => s });
var n = r(447978),
    i = r(582128);
let o = {
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
                ? i.createElement(
                      i.Fragment,
                      null,
                      r({ type: "item", key: t.key, dropPosition: "before" }),
                      n,
                      (function (e, t, r) {
                          let n = t.key,
                              o = e.getKeyAfter(n),
                              a = null != o ? e.getItem(o) : null;
                          for (; null != a && "item" !== a.type; )
                              a = null != (o = e.getKeyAfter(a.key)) ? e.getItem(o) : null;
                          let s = null != t.nextKey ? e.getItem(t.nextKey) : null;
                          for (; null != s && "item" !== s.type; ) s = null != s.nextKey ? e.getItem(s.nextKey) : null;
                          let l = [];
                          if (null == s) {
                              let n = t;
                              for (; n && (!a || (n.parentKey !== a.parentKey && a.level < n.level)); ) {
                                  let t = r({ type: "item", key: n.key, dropPosition: "after" });
                                  (0, i.isValidElement)(t) && l.push((0, i.cloneElement)(t, { key: `${n.key}-after` })),
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
let s = (0, i.createContext)(o);
function l(e) {
    return (0, i.useMemo)(() => (null != e ? new Set([e]) : null), [e]);
}
