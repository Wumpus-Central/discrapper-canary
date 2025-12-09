n.d(t, {
    ZA: () => g,
    ZP: () => E,
    go: () => h,
}),
    n(388685);
var r = n(473749),
    i = n(972959),
    a = n(991346),
    o = n(839469),
    s = n(509613),
    l = n(904849),
    c = n(87432),
    u = n(178520);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = (0, i.H)(() => ({ enabled: !1 }));
function h(e) {
    m.setState({ enabled: e });
}
function g() {
    return m.useField("enabled");
}
function E(e, t) {
    let n = r.useMemo(() => (0, s.Ql)(e), [e]),
        i = (0, a.Pt)(),
        { searchResults: u } = (0, o.F)(),
        d = new Set();
    for (let e of u) {
        let t = e;
        for (; null != t; ) {
            var p;
            let e = null == (p = i[t]) ? void 0 : p.parent;
            if (null == e) {
                d.add(t);
                break;
            }
            t = e;
        }
    }
    let m = b(n, null != t ? t : "", d),
        h = b(n, "", d);
    return r.useMemo(() => {
        var e;
        let t = new l.Z(),
            r = new l.Z();
        return (
            (0, c.Z)(n, h, r),
            {
                node: null != (e = (0, c.Z)(n, m, t)) ? e : _(f({}, n), { layout: [] }),
                visibleDirectory: t,
                accessibleDirectory: r,
            }
        );
    }, [m, h, n]);
}
function b(e, t, n) {
    let i = g(),
        a = (0, u.Z)(e, t, {
            legacyMatches: n,
            bypassPredicates: i,
        }),
        [o, s] = r.useState(a),
        l = y(o, a);
    return (
        r.useEffect(() => {
            l && s(a);
        }, [l, a]),
        o
    );
}
function y(e, t) {
    if (e.size !== t.size) return !0;
    for (let n of e) if (!t.has(n)) return !0;
    return !1;
}
