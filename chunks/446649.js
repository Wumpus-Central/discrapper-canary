"use strict";
r.d(t, { Cc: () => l, wR: () => p });
var n = r(582128);
let o = { prefix: String(Math.round(1e10 * Math.random())), current: 0 },
    i = n.createContext(o),
    a = n.createContext(!1),
    s = ("u" > typeof window && window.document && window.document.createElement, new WeakMap()),
    l =
        "function" == typeof n.useId
            ? function (e) {
                  let t = n.useId(),
                      [r] = (0, n.useState)(p()),
                      i = r ? "react-aria" : `react-aria${o.prefix}`;
                  return e || `${i}-${t}`;
              }
            : function (e) {
                  let t = (0, n.useContext)(i),
                      r = (function (e = !1) {
                          let t = (0, n.useContext)(i),
                              r = (0, n.useRef)(null);
                          if (null === r.current && !e) {
                              var o, a;
                              let e =
                                  null == (a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) ||
                                  null == (o = a.ReactCurrentOwner)
                                      ? void 0
                                      : o.current;
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
                      o = `react-aria${t.prefix}`;
                  return e || `${o}-${r}`;
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
function p() {
    return "function" == typeof n.useSyncExternalStore ? n.useSyncExternalStore(f, u, c) : (0, n.useContext)(a);
}
