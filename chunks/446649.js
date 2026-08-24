"use strict";
r.d(t, { Cc: () => l, wR: () => d });
var n = r(582128);
let i = { prefix: String(Math.round(1e10 * Math.random())), current: 0 },
    o = n.createContext(i),
    a = n.createContext(!1),
    s = ("u" > typeof window && window.document && window.document.createElement, new WeakMap()),
    l =
        "function" == typeof n.useId
            ? function (e) {
                  let t = n.useId(),
                      [r] = (0, n.useState)(d()),
                      o = r ? "react-aria" : `react-aria${i.prefix}`;
                  return e || `${o}-${t}`;
              }
            : function (e) {
                  let t = (0, n.useContext)(o),
                      r = (function (e = !1) {
                          let t = (0, n.useContext)(o),
                              r = (0, n.useRef)(null);
                          if (null === r.current && !e) {
                              var i, a;
                              let e =
                                  null == (a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) ||
                                  null == (i = a.ReactCurrentOwner)
                                      ? void 0
                                      : i.current;
                              if (e) {
                                  let r = s.get(e);
                                  null == r
                                      ? s.set(e, { id: t.current, state: e.memoizedState })
                                      : e.memoizedState !== r.state && ((t.current = r.id), s.delete(e));
                              }
                              r.current = ++t.current;
                          }
                          return r.current;
                      })(!!e),
                      i = `react-aria${t.prefix}`;
                  return e || `${i}-${r}`;
              };
function u() {
    return !1;
}
function c() {
    return !0;
}
function f(e) {
    return () => {};
}
function d() {
    return "function" == typeof n.useSyncExternalStore ? n.useSyncExternalStore(f, u, c) : (0, n.useContext)(a);
}
