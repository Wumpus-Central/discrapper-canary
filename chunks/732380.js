n.d(t, {
    O1: () => E,
    Q1: () => g,
    f6: () => y,
    pt: () => b,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(28664),
    s = n(159691),
    l = n(481060),
    c = n(785717),
    u = n(321301);
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
function g(e) {
    let { action: t, onClick: n } = e,
        { trackUserProfileAction: r } = (0, c.KZ)();
    return (e) => {
        null != t && r({ action: t }), null == n || n(e);
    };
}
function E(e) {
    var { action: t, onClick: n, variant: i = "secondary", size: a = "sm" } = e,
        o = m(e, ["action", "onClick", "variant", "size"]);
    let s = g({
        action: t,
        onClick: n,
    });
    return (0, r.jsx)(
        l.Button,
        f(
            {
                onClick: s,
                variant: i,
                size: a,
            },
            o,
        ),
    );
}
function b(e) {
    var {
            action: t,
            onClick: n,
            variant: i = "secondary",
            size: a = "sm",
            "aria-label": s,
            tooltipText: c,
            __unsupportedReactNodeAsText: u,
            tooltipPosition: d,
            tooltipAlign: p,
            buttonRef: _,
        } = e,
        h = m(e, [
            "action",
            "onClick",
            "variant",
            "size",
            "aria-label",
            "tooltipText",
            "__unsupportedReactNodeAsText",
            "tooltipPosition",
            "tooltipAlign",
            "buttonRef",
        ]);
    let E = g({
        action: t,
        onClick: n,
    });
    return (0, r.jsx)(o.u, {
        asContainer: !0,
        targetElementRef: _,
        text: c,
        __unsupportedReactNodeAsText: u,
        position: d,
        align: p,
        children: (0, r.jsx)(
            l.hU,
            f(
                {
                    onClick: E,
                    variant: i,
                    size: a,
                    "aria-label": null != s ? s : c,
                },
                h,
            ),
        ),
    });
}
function y(e) {
    var {
            icon: t,
            tooltipText: n,
            __unsupportedReactNodeAsText: i,
            tooltipPosition: l,
            tooltipAlign: c,
            "aria-label": d,
            action: p,
            onClick: h,
            buttonRef: E,
            disabled: b = !1,
            onMouseEnter: y,
            onMouseLeave: O,
        } = e,
        v = m(e, [
            "icon",
            "tooltipText",
            "__unsupportedReactNodeAsText",
            "tooltipPosition",
            "tooltipAlign",
            "aria-label",
            "action",
            "onClick",
            "buttonRef",
            "disabled",
            "onMouseEnter",
            "onMouseLeave",
        ]);
    let S = g({
        action: p,
        onClick: h,
    });
    return (0, r.jsx)(o.u, {
        asContainer: !0,
        text: n,
        __unsupportedReactNodeAsText: i,
        position: l,
        align: c,
        children: (0, r.jsx)(
            s.P3F,
            _(
                f(
                    {
                        innerRef: E,
                        className: a()(u.bannerButton, { [u.disabled]: b }),
                        onClick: S,
                        "aria-label": null != d ? d : n,
                        "aria-disabled": b,
                        onMouseEnter: y,
                        onMouseLeave: O,
                    },
                    v,
                ),
                {
                    children: (0, r.jsx)(t, {
                        size: "xs",
                        color: "currentColor",
                    }),
                },
            ),
        ),
    });
}
