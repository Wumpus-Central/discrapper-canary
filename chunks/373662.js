n.d(t, {
    ZP: () => O,
    fO: () => y,
    sF: () => b,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(28664),
    l = n(481060),
    c = n(377171),
    u = n(951394),
    d = n(388032),
    f = n(261334);
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
function p(e) {
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
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let b = i.forwardRef(function (e, t) {
    var {
            label: n,
            ariaLabel: i,
            tooltipText: a,
            icon: _,
            iconProps: h,
            onClick: E,
            onTooltipShow: b,
            onTooltipHide: y,
            disabled: O,
            dangerous: v,
            separator: I,
            showNewBadge: T,
            buttonClassName: S,
            children: A,
        } = e,
        C = g(e, [
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
            "showNewBadge",
            "buttonClassName",
            "children",
        ]);
    return (0, r.jsx)(s.u, {
        asContainer: !0,
        __unsupportedReactNodeAsText: null != a ? a : n,
        "aria-label": n,
        onTooltipShow: b,
        onTooltipHide: y,
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(
                    u.zx,
                    m(
                        p(
                            {
                                ref: t,
                                className: o()(f.hoverBarButton, S),
                                onClick: (e) => {
                                    E(e);
                                },
                                "aria-label": null != i ? i : n,
                                disabled: O,
                                dangerous: v,
                            },
                            C,
                        ),
                        {
                            children: [
                                null != _
                                    ? (0, r.jsx)(
                                          _,
                                          p(
                                              {
                                                  className: f.icon,
                                                  color: "currentColor",
                                              },
                                              h,
                                          ),
                                      )
                                    : null,
                                null != A
                                    ? (0, r.jsx)("div", {
                                          className: o()(f.icon, f.buttonContent),
                                          children: A,
                                      })
                                    : null,
                                T &&
                                    (0, r.jsx)(l.IGR, {
                                        text: d.intl.string(d.t.y2b7CA),
                                        color: c.Z.BG_BRAND,
                                        className: f.newBadge,
                                    }),
                            ],
                        },
                    ),
                ),
                I && (0, r.jsx)(u.Z0, {}),
            ],
        }),
    });
});
function y(e) {
    let { className: t } = e;
    return (0, r.jsx)("div", { className: o()(f.separator, t) });
}
function O(e) {
    var { children: t } = e,
        n = g(e, ["children"]);
    return (0, r.jsx)(u.ZP, {
        className: o()(n.className, f.popover),
        children: t,
    });
}
