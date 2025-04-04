n.d(t, {
    H: () => l,
    x: () => u,
    y: () => s
}),
    n(47120);
var r = n(200651),
    i = n(192379);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function s(e) {
    let { component: t, children: n, forceLevel: o } = e,
        a = i.useContext(c),
        [s, l] = i.useState(null != t),
        u = 1,
        d = 1;
    null != o ? (null != t ? ((u = o), (d = o + 1)) : (d = o)) : null != t ? ((u = a.level), (d = a.level + 1)) : (d = a.level + +!!s);
    let f = i.useMemo(
            () => ({
                level: u,
                getLevelAndMarkUsed: () => (l(!0), u)
            }),
            [u]
        ),
        _ = i.useMemo(
            () => ({
                level: d,
                getLevelAndMarkUsed: () => (l(!0), d)
            }),
            [d]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != t
                ? (0, r.jsx)(c.Provider, {
                      value: f,
                      children: t
                  })
                : null,
            (0, r.jsx)(c.Provider, {
                value: _,
                children: n
            })
        ]
    });
}
function l(e) {
    let t = u(),
        n = 'h'.concat(Math.min(t, 6));
    return (0, r.jsx)(n, a({}, t > 6 ? { 'data-excessive-heading-level': t } : {}, e));
}
let c = i.createContext({
    getLevelAndMarkUsed: () => 2,
    level: 2
});
function u() {
    let { getLevelAndMarkUsed: e } = i.useContext(c);
    return e();
}
c.displayName = 'HeadingLevelContext';
