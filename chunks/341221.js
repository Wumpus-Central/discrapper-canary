"use strict";
n.d(t, { Cc: () => l, wR: () => _ });
var r = n(64700);
let i = { prefix: String(Math.round(1e10 * Math.random())), current: 0 },
    s = r.createContext(i),
    a = r.createContext(!1),
    o = ("u" > typeof window && window.document && window.document.createElement, new WeakMap()),
    l =
        "function" == typeof r.useId
            ? function (e) {
                  let t = r.useId(),
                      [n] = (0, r.useState)(_()),
                      s = n ? "react-aria" : `react-aria${i.prefix}`;
                  return e || `${s}-${t}`;
              }
            : function (e) {
                  let t = (0, r.useContext)(s),
                      n = (function (e = !1) {
                          let t = (0, r.useContext)(s),
                              n = (0, r.useRef)(null);
                          if (null === n.current && !e) {
                              var i, a;
                              let e =
                                  null == (a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) ||
                                  null == (i = a.ReactCurrentOwner)
                                      ? void 0
                                      : i.current;
                              if (e) {
                                  let n = o.get(e);
                                  null == n
                                      ? o.set(e, { id: t.current, state: e.memoizedState })
                                      : e.memoizedState !== n.state && ((t.current = n.id), o.delete(e));
                              }
                              n.current = ++t.current;
                          }
                          return n.current;
                      })(!!e),
                      i = `react-aria${t.prefix}`;
                  return e || `${i}-${n}`;
              };
function u() {
    return !1;
}
function d() {
    return !0;
}
function c(e) {
    return () => {};
}
function _() {
    return "function" == typeof r.useSyncExternalStore ? r.useSyncExternalStore(c, u, d) : (0, r.useContext)(a);
}
