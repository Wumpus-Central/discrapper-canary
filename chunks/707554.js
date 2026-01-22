n.d(t, {
    $: () => d,
    F: () => c,
    H: () => u,
});
var r = n(627968),
    i = n(64700);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function o(e, t) {
    return {
        getLevelAndMarkUsed: () => ((t.current = !0), e),
        consumed: t,
        level: e,
    };
}
let l = i.createContext(o(2, { current: !1 }));
function c(e) {
    let { component: t, children: n, forceLevel: a } = e,
        s = i.useContext(l),
        c = null != a ? a : s.level,
        u = c;
    (null != t || (null == a && s.consumed.current)) && u++;
    let d = i.useRef(!1),
        f = i.useRef(!1),
        p = i.useMemo(() => o(c, d), [c]),
        _ = i.useMemo(() => o(u, f), [u]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != t
                ? (0, r.jsx)(l.Provider, {
                      value: p,
                      children: t,
                  })
                : null,
            (0, r.jsx)(l.Provider, {
                value: _,
                children: n,
            }),
        ],
    });
}
function u(e) {
    let t = d(),
        n = "h".concat(Math.min(t, 6));
    return (0, r.jsx)(n, s({}, t > 6 ? { "data-excessive-heading-level": t } : {}, e));
}
function d() {
    let { getLevelAndMarkUsed: e } = i.useContext(l);
    return e();
}
l.displayName = "HeadingLevelContext";
