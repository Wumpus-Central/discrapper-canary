n.d(t, {
    Cc: () => d,
    wR: () => h,
});
var r = n(64700);
let i = {
        prefix: String(Math.round(1e10 * Math.random())),
        current: 0,
    },
    a = r.createContext(i),
    s = r.createContext(!1);
"u" > typeof window && window.document && window.document.createElement;
let o = new WeakMap();

function l(e = !1) {
    let t = (0, r.useContext)(a),
        n = (0, r.useRef)(null);
    if (null === n.current && !e) {
        var i, s;
        let e =
            null == (s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || null == (i = s.ReactCurrentOwner)
                ? void 0
                : i.current;
        if (e) {
            let n = o.get(e);
            null == n
                ? o.set(e, {
                      id: t.current,
                      state: e.memoizedState,
                  })
                : e.memoizedState !== n.state && ((t.current = n.id), o.delete(e));
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
        [n] = (0, r.useState)(h()),
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

function h() {
    return "function" == typeof r.useSyncExternalStore ? r.useSyncExternalStore(_, f, p) : (0, r.useContext)(s);
}
