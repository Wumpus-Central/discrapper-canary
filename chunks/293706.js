n.d(t, { A: () => m });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(155127),
    s = n(777207),
    l = n(936928);
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
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function m(e) {
    var {
            focusProps: t,
            lineClamp: n = 1,
            role: i = "button",
            text: c,
            textVariant: d = "text-md/medium",
            type: _ = "button",
            variant: m = "primary",
            buttonRef: h,
            className: g,
            style: E,
        } = e,
        b = p(e, [
            "focusProps",
            "lineClamp",
            "role",
            "text",
            "textVariant",
            "type",
            "variant",
            "buttonRef",
            "className",
            "style",
        ]);
    return (0, r.jsx)(
        o.tE,
        f(u({}, t), {
            children: (0, r.jsx)(
                "button",
                f(
                    u(
                        {
                            className: a()(l.textButton, l[m]),
                            "data-mana-component": "text-button",
                            role: i,
                            type: _,
                            ref: h,
                        },
                        b,
                    ),
                    {
                        children: (0, r.jsx)(s.x, {
                            tag: "span",
                            variant: d,
                            color: "none",
                            lineClamp: n,
                            className: l.text,
                            children: c,
                        }),
                    },
                ),
            ),
        }),
    );
}
