r.d(n, {
    Av: function () {
        return v;
    },
    gP: function () {
        return _;
    }
});
var i = r(192379);
let a = {
        prefix: String(Math.round(10000000000 * Math.random())),
        current: 0
    },
    o = i.createContext(a),
    s = i.createContext(!1);
function l(e) {
    let n = $73SJx$useContext(o),
        r = f(n === a),
        [i, l] = $73SJx$useState(!0),
        u = $73SJx$useMemo(
            () => ({
                prefix: n === a ? '' : `${n.prefix}-${r}`,
                current: 0
            }),
            [n, r]
        );
    return (
        'undefined' != typeof document &&
            $73SJx$useLayoutEffect(() => {
                l(!1);
            }, []),
        $73SJx$react.createElement(o.Provider, { value: u }, $73SJx$react.createElement(s.Provider, { value: i }, e.children))
    );
}
let u = !1,
    c = !!('undefined' != typeof window && window.document && window.document.createElement),
    d = new WeakMap();
function f(e = !1) {
    let n = (0, i.useContext)(o),
        r = (0, i.useRef)(null);
    if (null === r.current && !e) {
        var a, s;
        let e = null === (s = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === s ? void 0 : null === (a = s.ReactCurrentOwner) || void 0 === a ? void 0 : a.current;
        if (e) {
            let r = d.get(e);
            null == r
                ? d.set(e, {
                      id: n.current,
                      state: e.memoizedState
                  })
                : e.memoizedState !== r.state && ((n.current = r.id), d.delete(e));
        }
        r.current = ++n.current;
    }
    return r.current;
}
function p(e) {
    let n = (0, i.useContext)(o);
    n === a && !c && console.warn('When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.');
    let r = f(!!e),
        s = `react-aria${n.prefix}`;
    return e || `${s}-${r}`;
}
function h(e) {
    let n = i.useId(),
        [r] = (0, i.useState)(v()),
        o = r ? 'react-aria' : `react-aria${a.prefix}`;
    return e || `${o}-${n}`;
}
let _ = 'function' == typeof i.useId ? h : p;
function m() {
    return !1;
}
function g() {
    return !0;
}
function E(e) {
    return () => {};
}
function v() {
    return 'function' == typeof i.useSyncExternalStore ? i.useSyncExternalStore(E, m, g) : (0, i.useContext)(s);
}
