n.d(t, { X: () => f });
var r = n(951288);
n(647438);
var i = n(402453),
    a = n(777207),
    o = n(982125),
    s = n(910989);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    if ((0, i.A)("Checkbox")) return (0, r.jsx)(o.C, c({}, e));
    let { label: t, checked: n, onChange: l, labelType: u = "primary" } = e,
        f =
            null != t && "" !== t
                ? (0, r.jsx)(a.x, {
                      variant: "text-md/medium",
                      color: "primary" === u ? "text-primary" : "text-secondary",
                      children: t,
                  })
                : null;
    return (0, r.jsx)(
        s.$q,
        d(c({}, e), {
            value: n,
            onChange: (e, t) => (null == l ? void 0 : l(t)),
            children: f,
        }),
    );
}
