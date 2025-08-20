n.d(t, { Q: () => g });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(84735),
    l = n(780605),
    c = n(214785),
    u = n(974257);
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
function g(e) {
    var {
            role: t = "button",
            type: n = "button",
            size: a = "md",
            variant: d = "secondary",
            icon: _,
            iconOpticalOffsetMargin: m = 0,
            focusProps: g,
            pressed: E = !1,
            "aria-label": b,
            buttonRef: y,
            disabled: O,
            className: v,
            style: I,
        } = e,
        T = h(e, [
            "role",
            "type",
            "size",
            "variant",
            "icon",
            "iconOpticalOffsetMargin",
            "focusProps",
            "pressed",
            "aria-label",
            "buttonRef",
            "disabled",
            "className",
            "style",
        ]);
    let S = i.useRef(null),
        A = null != y ? y : S,
        C = (0, r.jsx)(l.E, {
            icon: _,
            iconOpticalOffsetMargin: m,
            iconPosition: "start",
            size: a,
            ref: A,
            disabled: O,
        });
    return (0, r.jsx)(
        s.t,
        p(f({}, g), {
            children: (0, r.jsx)(
                "button",
                p(
                    f(
                        {
                            role: t,
                            type: n,
                            "aria-pressed": E,
                            className: o()(c.button, u.button, c[a], u[d], { [u.pressed]: E }),
                            "aria-label": b,
                            disabled: O,
                            ref: A,
                        },
                        T,
                    ),
                    {
                        children: (0, r.jsx)("div", {
                            className: c.buttonChildrenWrapper,
                            children: C,
                        }),
                    },
                ),
            ),
        }),
    );
}
