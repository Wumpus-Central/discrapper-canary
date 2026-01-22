n.d(t, { v: () => g });
var r = n(627968),
    i = n(868903),
    a = n(650682),
    s = n(827734),
    o = n(789645),
    l = n(834730),
    c = n(444806),
    u = n(46751);
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
function g(e) {
    let { label: t, layout: n, isDisabled: d, icon: p, accessibilityHint: m } = e,
        g = h(e, ["label", "layout", "isDisabled", "icon", "accessibilityHint"]),
        E = [t, m].filter(Boolean).join(", ");
    return (0, r.jsx)(
        i.vw,
        _(f({}, g), {
            className: u.Tc,
            textValue: E,
            isDisabled: d,
            children: (e) => {
                let { allowsRemoving: i } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != p &&
                            (0, r.jsx)(c.P, {
                                graphic: p,
                                layout: n,
                            }),
                        (0, r.jsx)(l.E, {
                            variant: "inline" === n ? "text-sm/normal" : "text-md/normal",
                            children: t,
                        }),
                        i &&
                            (0, r.jsx)(a.$, {
                                slot: "remove",
                                children: (0, r.jsx)(o.P, {
                                    size: "inline" === n ? "xs" : "sm",
                                    color: s.A.colors.ICON_DEFAULT,
                                }),
                            }),
                    ],
                });
            },
        }),
    );
}
