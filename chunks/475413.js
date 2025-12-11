n.d(t, { oY: () => y });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(693789),
    l = n(481060),
    c = n(785717),
    u = n(471561);
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
function _(e, t) {
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
let g = {
        primary: o()(u.themeColor, u.primary),
        secondary: o()(u.themeColor, u.secondary),
        none: "",
    },
    E = (e) => {
        var {
                action: t,
                color: n = s.zx.Colors.PRIMARY,
                themeColor: i = "primary",
                className: a,
                innerClassName: l,
                onClick: d,
                ref: p,
            } = e,
            h = m(e, ["action", "color", "themeColor", "className", "innerClassName", "onClick", "ref"]);
        let { trackUserProfileAction: E } = (0, c.KZ)(),
            b = (e) => {
                null != t && E({ action: t }), null == d || d(e);
            };
        return (0, r.jsx)(
            s.zx,
            _(
                f(
                    {
                        buttonRef: p,
                        className: o()(u.button, a),
                        innerClassName: o()(u.buttonInner, l),
                        color: o()(n, g[i]),
                        look: s.zx.Looks.FILLED,
                        size: s.zx.Sizes.SMALL,
                        onClick: b,
                    },
                    h,
                ),
                { "data-migration-pending": !0 },
            ),
        );
    },
    b = i.forwardRef(function (e, t) {
        var {
                icon: n,
                tooltipText: i,
                tooltipPosition: a,
                tooltipAlign: c,
                tooltipDelay: d,
                tooltipClassName: p,
                tooltipContainerClassName: h,
                ariaLabel: g,
                className: b,
                innerClassName: y,
                shouldShowTooltip: O = !0,
            } = e,
            v = m(e, [
                "icon",
                "tooltipText",
                "tooltipPosition",
                "tooltipAlign",
                "tooltipDelay",
                "tooltipClassName",
                "tooltipContainerClassName",
                "ariaLabel",
                "className",
                "innerClassName",
                "shouldShowTooltip",
            ]);
        return (0, r.jsx)(l.jSM, {
            text: i,
            position: a,
            align: c,
            "aria-label": !1,
            delay: d,
            shouldShow: O,
            className: h,
            tooltipClassName: p,
            children: (0, r.jsx)(
                E,
                _(
                    f(
                        {
                            buttonRef: t,
                            className: o()(u.icon, b),
                            innerClassName: o()(u.icon, y),
                            look: s.zx.Looks.FILLED,
                            size: s.zx.Sizes.NONE,
                            grow: !1,
                            "aria-label": "string" == typeof i && null == g ? i : g,
                        },
                        v,
                    ),
                    {
                        children: (0, r.jsx)(n, {
                            size: "xs",
                            color: "currentColor",
                        }),
                    },
                ),
            ),
        });
    }),
    y = i.forwardRef(function (e, t) {
        var { className: n, innerClassName: i } = e,
            a = m(e, ["className", "innerClassName"]);
        return (0, r.jsx)(
            b,
            f(
                {
                    ref: t,
                    className: o()(u.banner, n),
                    innerClassName: o()(u.banner, i),
                    color: u.bannerColor,
                    themeColor: "none",
                },
                a,
            ),
        );
    });
