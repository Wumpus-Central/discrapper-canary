"use strict";
n.d(t, { Cc: () => l, wR: () => f });
var r = n(582128);
let i = { prefix: String(Math.round(1e10 * Math.random())), current: 0 },
    a = r.createContext(i),
    o = r.createContext(!1),
    s = ("u" > typeof window && window.document && window.document.createElement, new WeakMap()),
    l =
        "function" == typeof r.useId
            ? function (e) {
                  let t = r.useId(),
                      [n] = (0, r.useState)(f()),
                      a = n ? "react-aria" : `react-aria${i.prefix}`;
                  return e || `${a}-${t}`;
              }
            : function (e) {
                  let t = (0, r.useContext)(a),
                      n = (function (e = !1) {
                          let t = (0, r.useContext)(a),
                              n = (0, r.useRef)(null);
                          if (null === n.current && !e) {
                              var i, o;
                              let e =
                                  null == (o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) ||
                                  null == (i = o.ReactCurrentOwner)
                                      ? void 0
                                      : i.current;
                              if (e) {
                                  let n = s.get(e);
                                  null == n
                                      ? s.set(e, { id: t.current, state: e.memoizedState })
                                      : e.memoizedState !== n.state && ((t.current = n.id), s.delete(e));
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
function c() {
    return !0;
}
function d(e) {
    return () => {};
}
function f() {
    return "function" == typeof r.useSyncExternalStore ? r.useSyncExternalStore(d, u, c) : (0, r.useContext)(o);
}
