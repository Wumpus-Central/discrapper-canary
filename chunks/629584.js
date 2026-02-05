"use strict";
n.d(t, { I: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(397927),
    u = n(802514);
function c(e) {
    switch (e) {
        case "tab":
        default:
            return u.v_;
        case "pill":
            return u.V_;
    }
}
function d(e) {
    switch (e) {
        case "tab":
        default:
            return u.V3;
        case "pill":
            return u.RW;
    }
}
function _(e) {
    switch (e) {
        case "tab":
        default:
            return u.u7;
        case "pill":
            return u.EN;
    }
}
function f(e) {
    return "pill" === e ? u.up : void 0;
}
function p(e) {
    let {
            option: t,
            selected: n,
            onClick: a,
            look: c,
            className: p,
            disabled: h = !1,
            tooltip: m,
            tooltipAriaLabel: g,
        } = e,
        E = i.useCallback((e) => a(t, e), [a, t]),
        A = () =>
            (0, r.jsx)(l.DUT, {
                className: s()(d(c), p, { [_(c)]: n, [u.r9]: h }),
                "aria-disabled": h,
                "aria-label": null != m ? g : void 0,
                onClick: h ? void 0 : E,
                children: (0, r.jsxs)(l.Text, {
                    className: s()(u.JU, f(c)),
                    variant: "text-sm/medium",
                    color: "none",
                    children: [null != t.icon ? (0, r.jsx)(t.icon, { className: u.Kk }) : null, t.name],
                }),
            });
    return null == m ? A() : (0, r.jsx)(o.m, { shouldShow: !h, __unsupportedReactNodeAsText: m, children: A() });
}
function h(e) {
    let { options: t, value: n, onChange: a, look: o = "tab", className: l, optionClassName: d, disabled: _ = !1 } = e,
        f = i.useCallback(
            (e) => {
                let t = n === e.value;
                return (0, r.jsx)(
                    p,
                    {
                        selected: t,
                        option: e,
                        look: o,
                        onClick: a,
                        disabled: _,
                        className: s()(d, e.className),
                        tooltip: e.tooltip,
                        tooltipAriaLabel: e.tooltipAriaLabel,
                    },
                    e.key ?? String(e.value),
                );
            },
            [n, o, a, d, _],
        );
    return (0, r.jsx)("div", { className: s()(c(o), l, { [u.ii]: _ }), children: t.map(f) });
}
