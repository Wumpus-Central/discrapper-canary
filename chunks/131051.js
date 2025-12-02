n.d(t, { Z: () => _ }), n(388685);
var r = n(473749),
    i = n(991346),
    a = n(839469),
    o = n(509613),
    s = n(904849),
    l = n(87432),
    c = n(178520);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    let n = r.useMemo(() => (0, o.Ql)(e), [e]),
        u = (0, i.Pt)(),
        { searchResults: f } = (0, a.F)(),
        _ = new Set();
    for (let e of f) {
        let t = e;
        for (; null != t; ) {
            var h;
            let e = null == (h = u[t]) ? void 0 : h.parent;
            if (null == e) {
                _.add(t);
                break;
            }
            t = e;
        }
    }
    let g = (0, c.Z)(n, null != t ? t : "", _),
        [E, b] = r.useState(g),
        y = m(E, g);
    return (
        r.useEffect(() => {
            y && b(g);
        }, [y, g]),
        r.useMemo(() => {
            var e;
            let t = new s.Z();
            return {
                node: null != (e = (0, l.Z)(n, E, t)) ? e : p(d({}, n), { layout: [] }),
                directory: t,
            };
        }, [E, n])
    );
}
function m(e, t) {
    if (e.size !== t.size) return !0;
    for (let n of e) if (!t.has(n)) return !0;
    return !1;
}
