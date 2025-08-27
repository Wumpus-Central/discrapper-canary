n.d(t, { U: () => p });
var r = n(951288);
n(647438);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(353394);
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
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function p(e) {
    var {
            as: t,
            readOnly: n,
            disabled: i,
            fullWidth: l = !1,
            children: u,
            validation: _,
            className: p,
            helperText: h,
            characterCount: m,
            characterCountMaxLength: g,
            successMessage: E,
            ref: b,
            containerClassName: y,
        } = e,
        O = f(e, [
            "as",
            "readOnly",
            "disabled",
            "fullWidth",
            "children",
            "validation",
            "className",
            "helperText",
            "characterCount",
            "characterCountMaxLength",
            "successMessage",
            "ref",
            "containerClassName",
        ]);
    let v = null != t ? t : "div",
        I = null == _ ? void 0 : _.hasError,
        T = (0, r.jsx)("div", {}),
        S = null != m;
    return (
        null != E && "" !== E
            ? ((S = !0),
              (T = (0, r.jsxs)("div", {
                  className: s.statusMessageContainer,
                  children: [
                      (0, r.jsx)(a.owK, {
                          size: "xs",
                          color: a.TVs.colors.TEXT_FEEDBACK_POSITIVE,
                      }),
                      (0, r.jsx)(a.Text, {
                          variant: "text-xs/normal",
                          color: "text-feedback-positive",
                          children: E,
                      }),
                  ],
              })))
            : I
              ? ((S = !0),
                (T = (0, r.jsxs)("div", {
                    className: s.statusMessageContainer,
                    children: [
                        (0, r.jsx)(a.Mgn, {
                            size: "xs",
                            color: a.TVs.colors.TEXT_FEEDBACK_CRITICAL,
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-feedback-critical",
                            children: null == _ ? void 0 : _.errorMessage,
                        }),
                    ],
                })))
              : null != h &&
                ((S = !0),
                (T = (0, r.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    color: "text-secondary",
                    children: h,
                }))),
        (0, r.jsxs)(
            v,
            d(
                c(
                    {
                        ref: b,
                        className: o()(s.container, y),
                        "data-full-width": l,
                    },
                    O,
                ),
                {
                    children: [
                        (0, r.jsx)("div", {
                            className: o()(s.wrapper, p),
                            "data-error": I,
                            "data-read-only": n,
                            "data-disabled": i,
                            children: u,
                        }),
                        S &&
                            (0, r.jsxs)("div", {
                                className: s.helperTextContainer,
                                children: [
                                    T,
                                    null != m &&
                                        (0, r.jsxs)(a.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-secondary",
                                            tabularNumbers: !0,
                                            children: [m, null != g && " / ".concat(g)],
                                        }),
                                ],
                            }),
                    ],
                },
            ),
        )
    );
}
