n.d(t, {
    A0: () => g,
    BF: () => m,
    Hj: () => h,
    Ve: () => _,
    XI: () => E,
    nA: () => p,
});
var r = n(627968);
n(64700);
var i = n(439626),
    a = n(834730),
    s = n(364309);
function o(e, t, n) {
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
function l(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
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
    return (0, r.jsx)(i.fh, u(l({}, e), { className: s.Hn }));
}
function _(e) {
    let { children: t } = e,
        n = d(e, ["children"]);
    return (0, r.jsx)(
        i.VP,
        u(l({}, n), {
            className: s.fi,
            children: (0, r.jsx)(a.E, {
                variant: "eyebrow",
                className: s.QP,
                children: t,
            }),
        }),
    );
}
function h(e) {
    return (0, r.jsx)(i.fI, u(l({}, e), { className: s.nM }));
}
function m(e) {
    return (0, r.jsx)(i.BF, u(l({}, e), { className: s.rf }));
}
function g(e) {
    return (0, r.jsx)(i.A0, u(l({}, e), { className: s.wx }));
}
function E(e) {
    let { header: t, footer: n, children: a } = e,
        o = d(e, ["header", "footer", "children"]);
    return (0, r.jsx)("div", {
        className: s.kL,
        children: (0, r.jsxs)(
            i.XI,
            u(l({}, o), {
                className: s.tp,
                children: [
                    null != t &&
                        (0, r.jsx)("div", {
                            className: s.wx,
                            children: t,
                        }),
                    a,
                    null != n &&
                        (0, r.jsx)("div", {
                            className: s.qr,
                            children: n,
                        }),
                ],
            }),
        ),
    });
}
