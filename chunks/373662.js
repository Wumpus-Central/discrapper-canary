n.d(t, {
    ZP: () => y,
    fO: () => b,
    sF: () => E,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(377171),
    c = n(951394),
    u = n(388032),
    d = n(261334);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
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
function h(e, t) {
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
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let E = i.forwardRef(function (e, t) {
    var {
            label: n,
            ariaLabel: i,
            tooltipText: a,
            tooltipColor: f,
            icon: p,
            iconProps: g,
            onClick: E,
            onTooltipShow: b,
            onTooltipHide: y,
            disabled: O,
            dangerous: v,
            separator: I,
            sparkle: T,
            showNewBadge: S,
            buttonClassName: A,
            children: C,
        } = e,
        N = m(e, [
            "label",
            "ariaLabel",
            "tooltipText",
            "tooltipColor",
            "icon",
            "iconProps",
            "onClick",
            "onTooltipShow",
            "onTooltipHide",
            "disabled",
            "dangerous",
            "separator",
            "sparkle",
            "showNewBadge",
            "buttonClassName",
            "children",
        ]);
    return (0, r.jsx)(s.ua7, {
        text: null != a ? a : n,
        color: null != f ? f : s.FGA.PRIMARY,
        "aria-label": n,
        onTooltipShow: b,
        onTooltipHide: y,
        hideOnClick: !0,
        tooltipClassName: d.tooltip,
        children: (e) => {
            let { onMouseEnter: a, onMouseLeave: f, onFocus: m, onBlur: b, onClick: y } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(
                        c.zx,
                        h(
                            _(
                                {
                                    ref: t,
                                    className: o()(d.hoverBarButton, A),
                                    onMouseEnter: a,
                                    onMouseLeave: f,
                                    onFocus: m,
                                    onBlur: b,
                                    onClick: (e) => {
                                        null == y || y(), E(e);
                                    },
                                    "aria-label": null != i ? i : n,
                                    disabled: O,
                                    dangerous: v,
                                },
                                N,
                            ),
                            {
                                children: [
                                    null != p
                                        ? (0, r.jsx)(
                                              p,
                                              _(
                                                  {
                                                      className: d.icon,
                                                      color: "currentColor",
                                                  },
                                                  g,
                                              ),
                                          )
                                        : null,
                                    null != C
                                        ? (0, r.jsx)("div", {
                                              className: o()(d.icon, d.buttonContent),
                                              children: C,
                                          })
                                        : null,
                                    T && (0, r.jsx)(s.K1N, {}),
                                    S &&
                                        (0, r.jsx)(s.IGR, {
                                            text: u.intl.string(u.t.y2b7CA),
                                            color: l.Z.BG_BRAND,
                                            className: d.newBadge,
                                        }),
                                ],
                            },
                        ),
                    ),
                    I && (0, r.jsx)(c.Z0, {}),
                ],
            });
        },
    });
});
function b(e) {
    let { className: t } = e;
    return (0, r.jsx)("div", { className: o()(d.separator, t) });
}
function y(e) {
    var { children: t } = e,
        n = m(e, ["children"]);
    return (0, r.jsx)(c.ZP, {
        className: o()(n.className, d.popover),
        children: t,
    });
}
