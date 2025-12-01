n.d(t, {
    Av: () => m,
    gP: () => d,
});
var r = n(473749);
let i = {
        prefix: String(Math.round(10000000000 * Math.random())),
        current: 0,
    },
    a = r.createContext(i),
    o = r.createContext(!1);
"undefined" != typeof window && window.document && window.document.createElement;
let s = new WeakMap();
function l(e = !1) {
    let t = (0, r.useContext)(a),
        n = (0, r.useRef)(null);
    if (null === n.current && !e) {
        var i, o;
        let e =
            null == (o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || null == (i = o.ReactCurrentOwner)
                ? void 0
                : i.current;
        if (e) {
            let n = s.get(e);
            null == n
                ? s.set(e, {
                      id: t.current,
                      state: e.memoizedState,
                  })
                : e.memoizedState !== n.state && ((t.current = n.id), s.delete(e));
        }
        n.current = ++t.current;
    }
    return n.current;
}
function c(e) {
    let t = (0, r.useContext)(a),
        n = l(!!e),
        i = `react-aria${t.prefix}`;
    return e || `${i}-${n}`;
}
function u(e) {
    let t = r.useId(),
        [n] = (0, r.useState)(m()),
        a = n ? "react-aria" : `react-aria${i.prefix}`;
    return e || `${a}-${t}`;
}
let d = "function" == typeof r.useId ? u : c;
function f() {
    return !1;
}
function p() {
    return !0;
}
function _(e) {
    return () => {};
}
function m() {
    return "function" == typeof r.useSyncExternalStore ? r.useSyncExternalStore(_, f, p) : (0, r.useContext)(o);
}
