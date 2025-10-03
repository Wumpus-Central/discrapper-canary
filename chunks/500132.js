n.d(t, { C: () => b });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(168545),
    l = n(499339),
    c = n(793030),
    u = n(841321);
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
function g() {
    return (0, r.jsxs)("svg", {
        className: u.radioIndicator,
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        shapeRendering: "geometricPrecision",
        children: [
            (0, r.jsx)("circle", {
                cx: 10,
                cy: 10,
                r: 10,
                className: u.outerRadioBase,
            }),
            (0, r.jsx)("circle", {
                cx: 10,
                cy: 10,
                r: 9.5,
                className: u.outerRadioFill,
            }),
            (0, r.jsx)("circle", {
                cx: 10,
                cy: 10,
                r: 4,
                className: u.innerDotRadio,
            }),
            (0, r.jsx)("circle", {
                cx: 10,
                cy: 10,
                r: 10,
                fill: "none",
                strokeWidth: 1,
                vectorEffect: "non-scaling-stroke",
                className: u.outerRadioBorderStroke,
            }),
        ],
    });
}
function E(e) {
    let { desc: t, disabled: n, leadingIcon: a, name: d, value: f, shouldAnimateOut: _ } = e,
        p = (0, i.useRef)(null),
        h = (0, i.useRef)(null);
    return (0, r.jsx)(c.tEY, {
        focusTarget: p,
        ringTarget: p,
        within: !0,
        children: (0, r.jsxs)(s.Y8, {
            className: o()([u.item, _ && u.animateOut]),
            value: f,
            isDisabled: n,
            inputRef: h,
            ref: p,
            children: [
                (0, r.jsx)(g, {}),
                (0, r.jsxs)(c.Kqy, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(l._, {
                            className: u.label,
                            children: (0, r.jsxs)("div", {
                                className: u.labelContent,
                                children: [
                                    null != a &&
                                        (0, r.jsx)(a, {
                                            className: u.radioItemIcon,
                                            size: "sm",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                            focusable: !1,
                                        }),
                                    (0, r.jsx)(c.xvT, {
                                        variant: "text-md/normal",
                                        children: d,
                                    }),
                                ],
                            }),
                        }),
                        null != t && "" !== t
                            ? (0, r.jsx)(c.xvT, {
                                  variant: "text-sm/normal",
                                  color: "text-secondary",
                                  children: t,
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function b(e) {
    var { onChange: t, options: n, value: a, disabled: o = !1, "aria-labelledby": l } = e,
        d = h(e, ["onChange", "options", "value", "disabled", "aria-labelledby"]);
    let _ = (0, i.useRef)(void 0),
        m = _.current;
    (0, i.useEffect)(() => {
        _.current = a;
    }, [a]);
    let g = null != t ? (e) => t(e) : void 0;
    return (0, r.jsx)(
        c.NIc,
        p(f({}, d), {
            children: (e) =>
                (0, r.jsx)(s.Ee, {
                    id: e.controlId,
                    className: u.group,
                    isDisabled: o,
                    onChange: g,
                    "aria-labelledby": null != l ? l : e.labelId,
                    "aria-describedby": e.describedById,
                    "aria-errormessage": e.errorMessageId,
                    "data-mana-component": "BaseRadioGroup",
                    value: a,
                    children: n.map((e, t) =>
                        (0, r.jsx)(E, p(f({ index: t }, e), { shouldAnimateOut: m === e.value }), e.value),
                    ),
                }),
        }),
    );
}
