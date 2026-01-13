n.d(t, { Q: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(937615),
    s = n(126484),
    l = n(475338),
    c = n(388032),
    u = n(375460);
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
    let { className: t, label: n, lineItems: a, currency: o, defaultExpanded: l = !1 } = e,
        [c, d] = i.useState(l),
        p = a.length > 0,
        h = i.useMemo(() => a.reduce((e, t) => e + t.amount, 0), [a]),
        g = i.useMemo(() => a.reduce((e, t) => (t.amount < 0 ? e + Math.abs(t.amount) : e), 0), [a]);
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsx)("div", { className: u.divider }),
            (0, r.jsxs)(s.UQ, {
                defaultExpanded: l,
                isDisabled: !p,
                onExpandedChange: d,
                children: [
                    (0, r.jsxs)("div", {
                        className: u.header,
                        children: [
                            (0, r.jsx)(s.o4, {
                                variant: "text-md/medium",
                                color: c ? "text-strong" : "text-muted",
                                children: n,
                            }),
                            !c &&
                                (0, r.jsx)(E, {
                                    amount: g,
                                    currency: o,
                                }),
                        ],
                    }),
                    (0, r.jsx)(s.Hk, {
                        children: (0, r.jsx)("div", {
                            className: u.lineItemsContainer,
                            children: a.map((e) => {
                                var { id: t } = e,
                                    n = m(e, ["id"]);
                                return (0, r.jsx)(b, _(f({}, n), { currency: o }), t);
                            }),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(y, {
                amount: h,
                currency: o,
            }),
        ],
    });
}
function E(e) {
    let { amount: t, currency: n } = e;
    if (0 === t) return null;
    let i = (0, o.T4)(t, n);
    return (0, r.jsx)("div", {
        className: u.totalSavings,
        children: (0, r.jsx)(a.Text, {
            variant: "text-md/medium",
            color: "text-feedback-positive",
            children: c.intl.format(l.default.pDVleg, { amount: i }),
        }),
    });
}
function b(e) {
    let { label: t, amount: n, currency: i } = e,
        s = (0, o.T4)(n, i);
    return (0, r.jsxs)("div", {
        className: u.lineItem,
        children: [
            (0, r.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: t,
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-md/normal",
                color: n < 0 ? "text-feedback-positive" : "text-muted",
                children: s,
            }),
        ],
    });
}
function y(e) {
    let { amount: t, currency: n } = e,
        i = (0, o.T4)(t, n);
    return (0, r.jsxs)(a.Text, {
        variant: "text-lg/semibold",
        color: "text-strong",
        className: u.totalDue,
        children: [
            (0, r.jsx)("span", { children: c.intl.string(l.default.Zxav97) }),
            (0, r.jsx)("span", { children: i }),
        ],
    });
}
