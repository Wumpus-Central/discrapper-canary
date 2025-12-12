n.d(t, {
    Z: () => y,
    g: () => g,
});
var r = n(54381);
n(473749);
var i = n(793030),
    a = n(28664),
    o = n(159691),
    s = n(481060),
    l = n(600164),
    c = n(563132),
    u = n(612853),
    d = n(388032),
    f = n(849195);
function p(e, t, n) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
            : m(Object(t)).forEach(function (n) {
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
            ? (0, r.jsx)(o.zxk, _({ variant: "expressive" }, u))
            : (0, r.jsx)(o.zxk, h(_({}, u), { variant: 0 === n ? "primary" : "active" }));
    },
    b = (e) => {
        let {
                onBack: t,
                backText: n,
                primaryIcon: f,
                primaryCTA: p,
                primaryType: m,
                primaryText: g,
                primaryTooltip: b,
                primaryDisabled: y,
                primarySubmitting: O,
                onPrimary: v,
            } = e,
            { premiumBrandRefreshBackgroundClassName: S } = (0, c.JL)(),
            I = () => {
                if (null == p || null == g) return null;
                let e = {
                    primaryIcon: f,
                    primaryCTA: p,
                    primaryType: m,
                    primaryText: g,
                    primaryDisabled: y,
                    primarySubmitting: O,
                    onPrimary: v,
                };
                return null != b
                    ? (0, r.jsx)(a.u, {
                          text: b,
                          asContainer: !0,
                          children: (0, r.jsx)(E, _({}, e)),
                      })
                    : (0, r.jsx)(E, h(_({}, e), { onPrimary: v }));
            },
            T = () =>
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
            className: S,
            children: [
                (0, r.jsxs)(i.Kqy, {
                    direction: "horizontal-reverse",
                    align: "center",
                    gap: 0,
                    padding: 0,
                    children: [I(), (0, r.jsx)(u.Z, {})],
                }),
                T(),
            ],
        });
    };
b.CTAType = g;
let y = b;
