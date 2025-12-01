n.d(t, { r: () => p });
var r = n(54381),
    i = n(473749),
    a = n(213305),
    o = n(402453),
    s = n(325780),
    l = n(305945);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e) {
    var t, n;
    let c = i.useContext(o.KJ),
        d =
            null == c || null == (n = c.experiments) || null == (t = n.enabledExperiments)
                ? void 0
                : t.includes("mana-toggle-inputs"),
        { switchIconsEnabled: p } = i.useContext(a.S);
    if (d) {
        let t = void 0 !== e.hasIcon ? e.hasIcon : p;
        return (0, r.jsx)(s.k, f(u({}, e), { hasIcon: t }));
    }
    return (0, r.jsx)(l.T, u({}, e));
}
