n.d(t, {
    ZP: () => E,
    fO: () => g,
    sF: () => m,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(28664),
    l = n(951394),
    c = n(261334);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let m = i.forwardRef(function (e, t) {
    var {
            label: n,
            ariaLabel: i,
            tooltipText: a,
            icon: u,
            iconProps: f,
            onClick: h,
            onTooltipShow: m,
            onTooltipHide: g,
            disabled: E,
            dangerous: b,
            separator: y,
            buttonClassName: O,
            children: v,
        } = e,
        I = p(e, [
            "label",
            "ariaLabel",
            "tooltipText",
            "icon",
            "iconProps",
            "onClick",
            "onTooltipShow",
            "onTooltipHide",
            "disabled",
            "dangerous",
            "separator",
            "buttonClassName",
            "children",
        ]);
    return (0, r.jsx)(s.u, {
        asContainer: !0,
        __unsupportedReactNodeAsText: null != a ? a : n,
        "aria-label": n,
        onTooltipShow: m,
        onTooltipHide: g,
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(
                    l.zx,
                    _(
                        d(
                            {
                                ref: t,
                                className: o()(c.hoverBarButton, O),
                                onClick: (e) => {
                                    h(e);
                                },
                                "aria-label": null != i ? i : n,
                                disabled: E,
                                dangerous: b,
                            },
                            I,
                        ),
                        {
                            children: [
                                null != u
                                    ? (0, r.jsx)(
                                          u,
                                          d(
                                              {
                                                  className: c.icon,
                                                  color: "currentColor",
                                              },
                                              f,
                                          ),
                                      )
                                    : null,
                                null != v
                                    ? (0, r.jsx)("div", {
                                          className: o()(c.icon, c.buttonContent),
                                          children: v,
                                      })
                                    : null,
                            ],
                        },
                    ),
                ),
                y && (0, r.jsx)(l.Z0, {}),
            ],
        }),
    });
});
function g(e) {
    let { className: t } = e;
    return (0, r.jsx)("div", { className: o()(c.separator, t) });
}
function E(e) {
    var { children: t } = e,
        n = p(e, ["children"]);
    return (0, r.jsx)(l.ZP, {
        className: o()(n.className, c.popover),
        children: t,
    });
}
