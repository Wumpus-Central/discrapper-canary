r.d(n, {
    H: function () {
        return l;
    },
    x: function () {
        return c;
    },
    y: function () {
        return s;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379);
function s(e) {
    let { component: n, children: r, forceLevel: i } = e,
        s = o.useContext(u),
        [l, c] = o.useState(null != n),
        d = 1,
        f = 1;
    null != i ? (null != n ? ((d = i), (f = i + 1)) : (f = i)) : null != n ? ((d = s.level), (f = s.level + 1)) : (f = s.level + (l ? 1 : 0));
    let p = o.useCallback(() => (c(!0), d), [d]),
        h = o.useCallback(() => (c(!0), f), [f]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != n
                ? (0, a.jsx)(u.Provider, {
                      value: {
                          level: d,
                          getLevelAndMarkUsed: p
                      },
                      children: n
                  })
                : null,
            (0, a.jsx)(u.Provider, {
                value: {
                    level: f,
                    getLevelAndMarkUsed: h
                },
                children: r
            })
        ]
    });
}
function l(e) {
    let n = c(),
        r = 'h'.concat(Math.min(n, 6));
    return (0, a.jsx)(r, {
        ...(n > 6 ? { 'data-excessive-heading-level': n } : {}),
        ...e
    });
}
let u = o.createContext({
    getLevelAndMarkUsed: () => 2,
    level: 2
});
function c() {
    let { getLevelAndMarkUsed: e } = o.useContext(u);
    return e();
}
u.displayName = 'HeadingLevelContext';
