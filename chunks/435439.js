n.d(t, { Z: () => b });
var r = n(54381),
    i = n(481060),
    a = n(374129),
    o = n(639351),
    s = n(908841),
    l = n(410441),
    c = n(206583),
    u = n(388032);
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
function _(e, t) {
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
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let g = {
        [c.kG.SPOTIFY]: s.Z,
        [c.kG.CRUNCHYROLL]: i.omf,
        [c.kG.XBOX]: o.Z,
        [c.kG.PLAYSTATION]: a.Z,
    },
    E = {
        [c.kG.SPOTIFY]: () => u.intl.string(u.t["0ZB/XE"]),
        [c.kG.CRUNCHYROLL]: () => u.intl.string(u.t.jdJYXw),
        [c.kG.XBOX]: () => u.intl.string(u.t.Nfvo72),
        [c.kG.PLAYSTATION]: () => u.intl.string(u.t.fFl4jo),
    };
function b(e) {
    var t,
        { type: n, "aria-label": i } = e,
        a = h(e, ["type", "aria-label"]);
    let o = g[n];
    if (null == o) return null;
    let s = null != i ? i : null == (t = E[n]) ? void 0 : t.call(E);
    return (0, r.jsx)(l.Z, p(f({ Icon: o }, a), { "aria-label": s }));
}
