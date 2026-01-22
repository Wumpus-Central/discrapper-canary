n.d(t, {
    Ay: () => E,
    KA: () => g,
    jL: () => m,
}),
    n(896048);
var r = n(64700),
    i = n(839214),
    a = n(360619),
    s = n(987281),
    o = n(419954),
    l = n(236077),
    c = n(478686),
    u = n(124059);
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
let h = (0, i.D)(() => ({ enabled: !1 }));
function m(e) {
    h.setState({ enabled: e });
}
function g() {
    return h.useField("enabled");
}
function E(e, t) {
    let n = r.useMemo(() => (0, o.hl)(e), [e]),
        i = (0, a.PH)(),
        { searchResults: u } = (0, s.V)(),
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
    let h = b(n, null != t ? t : "", d),
        m = b(n, "", d);
    return r.useMemo(() => {
        var e;
        let t = new l.A(),
            r = new l.A();
        return (
            (0, c.A)(n, m, r),
            {
                node: null != (e = (0, c.A)(n, h, t)) ? e : _(f({}, n), { layout: [] }),
                visibleDirectory: t,
                accessibleDirectory: r,
            }
        );
    }, [h, m, n]);
}
function b(e, t, n) {
    let i = g(),
        a = (0, u.A)(e, t, {
            legacyMatches: n,
            bypassPredicates: i,
        }),
        [s, o] = r.useState(a),
        l = y(s, a);
    return (
        r.useEffect(() => {
            l && o(a);
        }, [l, a]),
        s
    );
}
function y(e, t) {
    if (e.size !== t.size) return !0;
    for (let n of e) if (!t.has(n)) return !0;
    return !1;
}
