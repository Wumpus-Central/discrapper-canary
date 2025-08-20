n.d(t, {
    ZP: () => O,
    fO: () => y,
    sF: () => b,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(377171),
    c = n(951394),
    u = n(407477),
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
            tooltipColor: _,
            icon: h,
            iconProps: E,
            onClick: b,
            onTooltipShow: y,
            onTooltipHide: O,
            disabled: v,
            dangerous: I,
            separator: T,
            sparkle: S,
            showNewBadge: A,
            buttonClassName: C,
            children: N,
        } = e,
        R = g(e, [
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
    let { canShowReactionsOnMessageHover: P } = u.ZP.useExperiment(
        { location: "HoverBarButton" },
        { autoTrackExposure: !0 },
    );
    return (
        u.Xb.useExperiment({ location: "HoverBarButton" }, { autoTrackExposure: !0 }),
        (0, r.jsx)(s.ua7, {
            text: null != a ? a : n,
            color: null != _ ? _ : s.FGA.PRIMARY,
            "aria-label": n,
            onTooltipShow: y,
            onTooltipHide: O,
            hideOnClick: !0,
            tooltipClassName: f.tooltip,
            children: (e) => {
                let { onMouseEnter: a, onMouseLeave: u, onFocus: _, onBlur: g, onClick: y } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(
                            c.zx,
                            m(
                                p(
                                    {
                                        ref: t,
                                        className: o()(C, { [f.hoverBarButton]: P }),
                                        onMouseEnter: a,
                                        onMouseLeave: u,
                                        onFocus: _,
                                        onBlur: g,
                                        onClick: (e) => {
                                            null == y || y(), b(e);
                                        },
                                        "aria-label": null != i ? i : n,
                                        disabled: v,
                                        dangerous: I,
                                    },
                                    R,
                                ),
                                {
                                    children: [
                                        null != h
                                            ? (0, r.jsx)(
                                                  h,
                                                  p(
                                                      {
                                                          className: f.icon,
                                                          color: "currentColor",
                                                      },
                                                      E,
                                                  ),
                                              )
                                            : null,
                                        null != N
                                            ? (0, r.jsx)("div", {
                                                  className: o()(f.icon, f.buttonContent),
                                                  children: N,
                                              })
                                            : null,
                                        S && (0, r.jsx)(s.K1N, {}),
                                        A &&
                                            (0, r.jsx)(s.IGR, {
                                                text: d.intl.string(d.t.y2b7CA),
                                                color: l.Z.BG_BRAND,
                                                className: f.newBadge,
                                            }),
                                    ],
                                },
                            ),
                        ),
                        T && (0, r.jsx)(c.Z0, {}),
                    ],
                });
            },
        })
    );
});
function y(e) {
    let { className: t } = e;
    return (0, r.jsx)("div", { className: o()(f.separator, t) });
}
function O(e) {
    var { children: t } = e,
        n = g(e, ["children"]);
    let { canShowReactionsOnMessageHover: i } = u.ZP.useExperiment({ location: "HoverBar" }, { autoTrackExposure: !0 });
    return (
        u.Xb.useExperiment({ location: "HoverBar" }, { autoTrackExposure: !0 }),
        (0, r.jsx)(c.ZP, {
            className: o()(n.className, f.popover, { [f.popoverReactionHoverBar]: i }),
            children: t,
        })
    );
}
