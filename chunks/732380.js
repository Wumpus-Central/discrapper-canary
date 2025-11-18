n.d(t, {
    O1: () => m,
    Q1: () => h,
    f6: () => E,
    pt: () => g,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(28664),
    s = n(159691),
    l = n(481060),
    c = n(785717),
    u = n(298033);
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
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function h(e) {
    let { action: t, onClick: n } = e,
        { trackUserProfileAction: r } = (0, c.KZ)();
    return (e) => {
        null != t && r({ action: t }), null == n || n(e);
    };
}
function m(e) {
    var { action: t, onClick: n, variant: i = "secondary", size: a = "sm" } = e,
        o = _(e, ["action", "onClick", "variant", "size"]);
    let s = h({
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
function g(e) {
    var {
            action: t,
            onClick: n,
            variant: i = "secondary",
            size: a = "sm",
            tooltipText: s,
            "aria-label": c,
            buttonRef: u,
        } = e,
        d = _(e, ["action", "onClick", "variant", "size", "tooltipText", "aria-label", "buttonRef"]);
    let p = h({
        action: t,
        onClick: n,
    });
    return (0, r.jsx)(o.u, {
        asContainer: !0,
        targetElementRef: u,
        text: s,
        children: (0, r.jsx)(
            l.hU,
            f(
                {
                    onClick: p,
                    variant: i,
                    size: a,
                    "aria-label": null != c ? c : s,
                },
                d,
            ),
        ),
    });
}
function E(e) {
    let { icon: t, tooltipText: n, action: i, onClick: l, buttonRef: c, disabled: d = !1 } = e,
        f = h({
            action: i,
            onClick: l,
        });
    return (0, r.jsx)(o.u, {
        asContainer: !0,
        text: n,
        children: (0, r.jsx)(s.P3F, {
            innerRef: c,
            className: a()(u.bannerButton, { [u.disabled]: d }),
            onClick: f,
            "aria-label": n,
            "aria-disabled": d,
            children: (0, r.jsx)(t, {
                size: "xs",
                color: "currentColor",
            }),
        }),
    });
}
