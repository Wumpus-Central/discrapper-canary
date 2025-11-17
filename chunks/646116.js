n.d(t, {
    C: () => I,
    M: () => y,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(841362),
    l = n(937397),
    c = n(155127),
    u = n(483566),
    d = n(821541),
    f = n(777207),
    _ = n(884259);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function y(e) {
    let { disabled: t, isSelected: n } = e,
        [a, s] = (0, i.useState)(void 0),
        l = (0, i.useRef)(!1);
    return (
        (0, i.useEffect)(() => {
            if (!l.current) {
                l.current = !0;
                return;
            }
            s(n ? "animateIn" : "animateOut");
        }, [n]),
        (0, r.jsx)("div", {
            className: o()([_.standaloneRadioIndicator, "string" == typeof a && _[a]]),
            "data-selected": n,
            "data-disabled": t,
            children: (0, r.jsx)(O, {}),
        })
    );
}
function O() {
    return (0, r.jsxs)("svg", {
        className: _.radioIndicator,
        width: 20,
        height: 20,
        viewBox: "0 0 40 40",
        fill: "none",
        shapeRendering: "geometricPrecision",
        children: [
            (0, r.jsx)("circle", {
                cx: 20,
                cy: 20,
                r: 20,
                className: _.outerRadioBase,
            }),
            (0, r.jsx)("circle", {
                cx: 20,
                cy: 20,
                r: 20,
                className: _.outerRadioFill,
            }),
            (0, r.jsx)("circle", {
                cx: 20,
                cy: 20,
                r: 8,
                className: _.innerDotRadio,
            }),
        ],
    });
}
function v(e) {
    let { desc: t, disabled: n, leadingIcon: a, name: u, value: p, isSelected: h } = e,
        m = (0, i.useRef)(null),
        g = (0, i.useRef)(null),
        [E, b] = (0, i.useState)(void 0),
        y = (0, i.useRef)(!1);
    return (
        (0, i.useEffect)(() => {
            if (!y.current) {
                y.current = !0;
                return;
            }
            b(h ? "animateIn" : "animateOut");
        }, [h]),
        (0, r.jsx)(c.tE, {
            focusTarget: m,
            ringTarget: m,
            within: !0,
            children: (0, r.jsxs)(s.Y8, {
                className: o()([_.radioGroupOption, "string" == typeof E && _[E]]),
                value: p,
                isDisabled: n,
                inputRef: g,
                ref: m,
                children: [
                    (0, r.jsx)(O, {}),
                    (0, r.jsxs)(d.K, {
                        gap: 4,
                        children: [
                            (0, r.jsxs)(l._, {
                                className: _.label,
                                children: [
                                    null != a &&
                                        (0, r.jsx)(a, {
                                            className: _.radioItemIcon,
                                            size: "sm",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                            focusable: !1,
                                        }),
                                    (0, r.jsx)(f.x, {
                                        variant: "text-md/normal",
                                        children: u,
                                    }),
                                ],
                            }),
                            null != t && "" !== t
                                ? (0, r.jsx)(f.x, {
                                      variant: "text-sm/normal",
                                      color: "text-secondary",
                                      children: t,
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
        })
    );
}
function I(e) {
    var { onChange: t, options: n, value: i, disabled: a = !1, "aria-labelledby": o } = e,
        l = E(e, ["onChange", "options", "value", "disabled", "aria-labelledby"]);
    let c =
        null != t
            ? (e) => {
                  let r = n.find((t) => String(t.value) === e);
                  null != r && t(r.value);
              }
            : void 0;
    return (0, r.jsx)(
        u.g,
        g(h({}, l), {
            children: (e) =>
                (0, r.jsx)(s.Ee, {
                    id: e.controlId,
                    className: _.group,
                    isDisabled: a,
                    onChange: c,
                    "aria-labelledby": null != o ? o : e.labelId,
                    "aria-describedby": e.describedById,
                    "aria-errormessage": e.errorMessageId,
                    "data-mana-component": "BaseRadioGroup",
                    value: null != i ? String(i) : void 0,
                    children: n.map((e, t) =>
                        (0, r.jsx)(
                            v,
                            g(h({ index: t }, e), {
                                value: String(e.value),
                                isSelected: i === e.value,
                            }),
                            String(e.value),
                        ),
                    ),
                }),
        }),
    );
}
