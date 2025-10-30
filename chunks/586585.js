n.d(t, {
    Z: () => y,
    g: () => g,
});
var r = n(951288);
n(647438);
var i = n(793030),
    a = n(28664),
    o = n(159691),
    s = n(481060),
    l = n(600164),
    c = n(563132),
    u = n(612853),
    d = n(388032),
    f = n(461019);
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
var g = (function (e) {
    return (e[(e.CONTINUE = 0)] = "CONTINUE"), (e[(e.UPGRADE = 1)] = "UPGRADE"), (e[(e.PURCHASE = 2)] = "PURCHASE"), e;
})({});
let E = (e) => {
        let {
                primaryIcon: t,
                primaryCTA: n,
                primaryType: i,
                primaryText: a,
                primaryDisabled: s,
                primarySubmitting: l,
                onPrimary: c,
            } = e,
            u = {
                type: i,
                disabled: s,
                onClick: c,
                icon:
                    null == t
                        ? void 0
                        : () =>
                              (0, r.jsx)(t, {
                                  color: "currentColor",
                                  className: f.primaryIcon,
                              }),
                loading: l,
                text: a,
            };
        return 2 === n
            ? (0, r.jsx)(o.zxk, p({ variant: "expressive" }, u))
            : (0, r.jsx)(o.zxk, m(p({}, u), { variant: 0 === n ? "primary" : "active" }));
    },
    b = (e) => {
        let {
                onBack: t,
                backText: n,
                primaryIcon: f,
                primaryCTA: _,
                primaryType: h,
                primaryText: g,
                primaryTooltip: b,
                primaryDisabled: y,
                primarySubmitting: O,
                onPrimary: v,
            } = e,
            { premiumBrandRefreshBackgroundClassName: I } = (0, c.JL)(),
            T = () => {
                if (null == _ || null == g) return null;
                let e = {
                    primaryIcon: f,
                    primaryCTA: _,
                    primaryType: h,
                    primaryText: g,
                    primaryDisabled: y,
                    primarySubmitting: O,
                    onPrimary: v,
                };
                return null != b
                    ? (0, r.jsx)(a.u, {
                          text: b,
                          asContainer: !0,
                          children: (0, r.jsx)(E, p({}, e)),
                      })
                    : (0, r.jsx)(E, m(p({}, e), { onPrimary: v }));
            },
            S = () =>
                null == t
                    ? null
                    : (0, r.jsx)(o.Avr, {
                          text: null != n ? n : d.intl.string(d.t["13/7kX"]),
                          onClick: t,
                          variant: "secondary",
                      });
        return (0, r.jsxs)(s.mzw, {
            "data-migration-pending": !0,
            justify: l.Z.Justify.BETWEEN,
            align: l.Z.Align.CENTER,
            className: I,
            children: [
                (0, r.jsxs)(i.Kqy, {
                    direction: "horizontal-reverse",
                    align: "center",
                    gap: 0,
                    padding: 0,
                    children: [T(), (0, r.jsx)(u.Z, {})],
                }),
                S(),
            ],
        });
    };
b.CTAType = g;
let y = b;
