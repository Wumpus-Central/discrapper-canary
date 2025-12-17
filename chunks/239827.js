n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(388032),
    s = n(818547);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
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
let _ = i.forwardRef(function (e, t) {
    var { currentPageIndex: n, numPages: i, onChangePage: l, children: u, showPageCount: p = !0 } = e,
        _ = f(e, ["currentPageIndex", "numPages", "onChangePage", "children", "showPageCount"]);
    let m = n <= 0,
        h = n >= i - 1,
        g = p
            ? o.intl.format(o.t.MtpIwg, {
                  currentPage: n + 1,
                  numPages: i,
              })
            : o.intl.format(o.t.bKI77c, { currentPage: n + 1 });
    return (0, r.jsxs)(
        "div",
        d(c({ ref: t }, _), {
            children: [
                u,
                (0, r.jsx)("div", {
                    className: s.pageActions,
                    children: (0, r.jsxs)("div", {
                        className: s.buttons,
                        children: [
                            (0, r.jsx)(a.hU, {
                                variant: "icon-only",
                                icon: a.V7D,
                                disabled: m,
                                onClick: () => l(n - 1),
                                "aria-label": o.intl.string(o.t.vgfxaA),
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                children: g,
                            }),
                            (0, r.jsx)(a.hU, {
                                variant: "icon-only",
                                icon: a.Fbu,
                                disabled: h,
                                onClick: () => l(n + 1),
                                "aria-label": o.intl.string(o.t.XiOHRX),
                            }),
                        ],
                    }),
                }),
            ],
        }),
    );
});
