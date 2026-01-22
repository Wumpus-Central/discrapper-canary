n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(148719),
    o = n(576705),
    l = n(818348);
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
    if (((a = f(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function p(e) {
    let { channel: t } = e,
        n = d(e, ["channel"]),
        c = (0, i.bG)([o.A], () => t.isPrivate() || o.A.can(l.xB.CONNECT, t));
    if (t.isDM() || t.isGroupDM()) return (0, r.jsx)(a._jp, u({}, n));
    let f = t.isGuildStageVoice(),
        p = !c || (0, s.A)(t);
    return f && p
        ? (0, r.jsx)(a.DC, u({}, n))
        : f
          ? (0, r.jsx)(a.qux, u({}, n))
          : t.isNSFW()
            ? (0, r.jsx)(a.Ob$, u({}, n))
            : p
              ? (0, r.jsx)(a.trU, u({}, n))
              : (0, r.jsx)(a.HKD, u({}, n));
}
