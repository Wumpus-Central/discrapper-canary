n.d(t, {
    H: () => s,
    x: () => l,
    y: () => a
}),
    n(47120);
var i = n(200651),
    r = n(192379);
function a(e) {
    let { component: t, children: n, forceLevel: a } = e,
        s = r.useContext(o),
        [l, u] = r.useState(null != t),
        c = 1,
        d = 1;
    null != a ? (null != t ? ((c = a), (d = a + 1)) : (d = a)) : null != t ? ((c = s.level), (d = s.level + 1)) : (d = s.level + (l ? 1 : 0));
    let f = r.useCallback(() => (u(!0), c), [c]),
        _ = r.useCallback(() => (u(!0), d), [d]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != t
                ? (0, i.jsx)(o.Provider, {
                      value: {
                          level: c,
                          getLevelAndMarkUsed: f
                      },
                      children: t
                  })
                : null,
            (0, i.jsx)(o.Provider, {
                value: {
                    level: d,
                    getLevelAndMarkUsed: _
                },
                children: n
            })
        ]
    });
}
function s(e) {
    let t = l(),
        n = 'h'.concat(Math.min(t, 6));
    return (0, i.jsx)(n, {
        ...(t > 6 ? { 'data-excessive-heading-level': t } : {}),
        ...e
    });
}
let o = r.createContext({
    getLevelAndMarkUsed: () => 2,
    level: 2
});
function l() {
    let { getLevelAndMarkUsed: e } = r.useContext(o);
    return e();
}
o.displayName = 'HeadingLevelContext';
