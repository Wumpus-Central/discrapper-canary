n.d(t, { A: () => b });
var r = n(627968),
    i = n(397927),
    a = n(790381),
    s = n(266080),
    o = n(121090),
    l = n(18282),
    c = n(424994),
    u = n(985018);
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
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = m(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let g = {
        [c.a4.SPOTIFY]: o.A,
        [c.a4.CRUNCHYROLL]: i.kwD,
        [c.a4.XBOX]: s.A,
        [c.a4.PLAYSTATION]: a.A,
    },
    E = {
        [c.a4.SPOTIFY]: () => u.intl.string(u.t["0ZB/XE"]),
        [c.a4.CRUNCHYROLL]: () => u.intl.string(u.t.jdJYXw),
        [c.a4.XBOX]: () => u.intl.string(u.t.Nfvo72),
        [c.a4.PLAYSTATION]: () => u.intl.string(u.t.fFl4jo),
    };
function b(e) {
    var t;
    let { type: n, "aria-label": i } = e,
        a = h(e, ["type", "aria-label"]),
        s = g[n];
    if (null == s) return null;
    let o = null != i ? i : null == (t = E[n]) ? void 0 : t.call(E);
    return (0, r.jsx)(l.A, _(f({ Icon: s }, a), { "aria-label": o }));
}
