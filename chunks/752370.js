n.d(t, {
    g: () => y,
    k: () => v,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(118952),
    l = n(129844),
    c = n(426333),
    u = n(452027),
    d = n(331322),
    f = n(834730),
    p = n(314288);
function _(e, t, n) {
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
                _(e, t, n[t]);
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = b(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function y(e) {
    let { disabled: t, isSelected: n } = e,
        [a, o] = (0, i.useState)(void 0),
        l = (0, i.useRef)(!1);
    return (
        (0, i.useEffect)(() => {
            if (!l.current) {
                l.current = !0;
                return;
            }
            o(n ? "animateIn" : "animateOut");
        }, [n]),
        (0, r.jsx)("div", {
            className: s()([p.standaloneRadioIndicator, "string" == typeof a && p[a]]),
            "data-selected": n,
            "data-disabled": t,
            children: (0, r.jsx)(O, {}),
        })
    );
}
function O() {
    return (0, r.jsxs)("svg", {
        className: p.radioIndicator,
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
                className: p.outerRadioBase,
            }),
            (0, r.jsx)("circle", {
                cx: 20,
                cy: 20,
                r: 20,
                className: p.outerRadioFill,
            }),
            (0, r.jsx)("circle", {
                cx: 20,
                cy: 20,
                r: 8,
                className: p.innerDotRadio,
            }),
        ],
    });
}
function A(e) {
    let { desc: t, disabled: n, leadingIcon: a, name: u, value: _, isSelected: h } = e,
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
        (0, r.jsx)(c.vN, {
            focusTarget: m,
            ringTarget: m,
            within: !0,
            children: (0, r.jsxs)(o.sx, {
                className: s()([p.radioGroupOption, "string" == typeof E && p[E]]),
                value: _,
                isDisabled: n,
                inputRef: g,
                ref: m,
                children: [
                    (0, r.jsx)(O, {}),
                    (0, r.jsxs)(d.B, {
                        gap: 4,
                        children: [
                            (0, r.jsxs)(l.J, {
                                className: p.label,
                                children: [
                                    null != a &&
                                        (0, r.jsx)(a, {
                                            className: p.radioItemIcon,
                                            size: "sm",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                            focusable: !1,
                                        }),
                                    (0, r.jsx)(f.E, {
                                        variant: "text-md/normal",
                                        children: u,
                                    }),
                                ],
                            }),
                            null != t && "" !== t
                                ? (0, r.jsx)(f.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
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
function v(e) {
    let { onChange: t, options: n, value: i, disabled: a = !1, "aria-labelledby": s } = e,
        l = E(e, ["onChange", "options", "value", "disabled", "aria-labelledby"]),
        c =
            null != t
                ? (e) => {
                      let r = n.find((t) => String(t.value) === e);
                      null != r && t(r.value);
                  }
                : void 0;
    return (0, r.jsx)(
        u.D,
        g(h({}, l), {
            children: (e) =>
                (0, r.jsx)(o.z6, {
                    id: e.controlId,
                    className: p.group,
                    isDisabled: a,
                    onChange: c,
                    "aria-labelledby": null != s ? s : e.labelId,
                    "aria-describedby": e.describedById,
                    "aria-errormessage": e.errorMessageId,
                    "data-mana-component": "BaseRadioGroup",
                    value: null != i ? String(i) : void 0,
                    children: n.map((e, t) =>
                        (0, r.jsx)(
                            A,
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
