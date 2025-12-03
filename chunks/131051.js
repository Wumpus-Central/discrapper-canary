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
        i = g(),
        d = (0, a.Pt)(),
        { searchResults: p } = (0, o.F)(),
        m = new Set();
    for (let e of p) {
        let t = e;
        for (; null != t; ) {
            var h;
            let e = null == (h = d[t]) ? void 0 : h.parent;
            if (null == e) {
                m.add(t);
                break;
            }
            t = e;
        }
    }
    let E = (0, u.Z)(n, null != t ? t : "", {
            legacyMatches: m,
            bypassPredicates: i,
        }),
        [y, O] = r.useState(E),
        v = b(y, E);
    return (
        r.useEffect(() => {
            v && O(E);
        }, [v, E]),
        r.useMemo(() => {
            var e;
            let t = new l.Z();
            return {
                node: null != (e = (0, c.Z)(n, y, t)) ? e : _(f({}, n), { layout: [] }),
                directory: t,
            };
        }, [y, n])
    );
}
function b(e, t) {
    if (e.size !== t.size) return !0;
    for (let n of e) if (!t.has(n)) return !0;
    return !1;
}
