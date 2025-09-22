n.d(t, {
    Av: () => m,
    gP: () => f,
});
var r = n(647438);
let i = {
        prefix: String(Math.round(10000000000 * Math.random())),
        current: 0,
    },
    a = r.createContext(i),
    o = r.createContext(!1),
    s = !!("undefined" != typeof window && window.document && window.document.createElement),
    l = new WeakMap();
function c(e = !1) {
    let t = (0, r.useContext)(a),
        n = (0, r.useRef)(null);
    if (null === n.current && !e) {
        var i, o;
        let e =
            null == (o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || null == (i = o.ReactCurrentOwner)
                ? void 0
                : i.current;
        if (e) {
            let n = l.get(e);
            null == n
                ? l.set(e, {
                      id: t.current,
                      state: e.memoizedState,
                  })
                : e.memoizedState !== n.state && ((t.current = n.id), l.delete(e));
        }
        n.current = ++t.current;
    }
    return n.current;
}
function u(e) {
    let t = (0, r.useContext)(a);
    t !== i ||
        s ||
        console.warn(
            "When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.",
        );
    let n = c(!!e),
        o = `react-aria${t.prefix}`;
    return e || `${o}-${n}`;
}
function d(e) {
    let t = r.useId(),
        [n] = (0, r.useState)(m()),
        a = n ? "react-aria" : `react-aria${i.prefix}`;
    return e || `${a}-${t}`;
}
let f = "function" == typeof r.useId ? d : u;
function _() {
    return !1;
}
function p() {
    return !0;
}
function h(e) {
    return () => {};
}
function m() {
    return "function" == typeof r.useSyncExternalStore ? r.useSyncExternalStore(h, _, p) : (0, r.useContext)(o);
}
