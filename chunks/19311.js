n.d(t, {
    A: () => y,
    t: () => g,
});
var r = n(627968);
n(64700);
var i = n(158954),
    a = n(990078),
    s = n(732955),
    o = n(397927),
    l = n(235986),
    c = n(156312),
    u = n(999784),
    d = n(985018),
    f = n(208555);

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
                primaryDisabled: o,
                primarySubmitting: l,
                onPrimary: c,
            } = e,
            u = {
                type: i,
                disabled: o,
                onClick: c,
                icon:
                    null == t
                        ? void 0
                        : () =>
                              (0, r.jsx)(t, {
                                  color: "currentColor",
                                  className: f.C,
                              }),
                loading: l,
                text: a,
            };
        return 2 === n
            ? (0, r.jsx)(
                  s.$nd,
                  _(
                      {
                          variant: "expressive",
                      },
                      u,
                  ),
              )
            : (0, r.jsx)(
                  s.$nd,
                  m(_({}, u), {
                      variant: 0 === n ? "primary" : "active",
                  }),
              );
    },
    b = (e) => {
        let {
                onBack: t,
                backText: n,
                primaryIcon: f,
                primaryCTA: p,
                primaryType: h,
                primaryText: g,
                primaryTooltip: b,
                primaryDisabled: y,
                primarySubmitting: O,
                onPrimary: A,
            } = e,
            { premiumBrandRefreshBackgroundClassName: v } = (0, c.P5)(),
            S = () => {
                if (null == p || null == g) return null;
                let e = {
                    primaryIcon: f,
                    primaryCTA: p,
                    primaryType: h,
                    primaryText: g,
                    primaryDisabled: y,
                    primarySubmitting: O,
                    onPrimary: A,
                };
                return null != b
                    ? (0, r.jsx)(a.m, {
                          text: b,
                          asContainer: !0,
                          children: (0, r.jsx)(E, _({}, e)),
                      })
                    : (0, r.jsx)(
                          E,
                          m(_({}, e), {
                              onPrimary: A,
                          }),
                      );
            },
            I = () =>
                null == t
                    ? null
                    : (0, r.jsx)(s.QWc, {
                          text: null != n ? n : d.intl.string(d.t["13/7kX"]),
                          onClick: t,
                          variant: "secondary",
                      });
        return (0, r.jsxs)(o.jlY, {
            "data-migration-pending": !0,
            justify: l.A.Justify.BETWEEN,
            align: l.A.Align.CENTER,
            className: v,
            children: [
                (0, r.jsxs)(i.BJc, {
                    direction: "horizontal-reverse",
                    align: "center",
                    gap: 0,
                    padding: 0,
                    children: [S(), (0, r.jsx)(u.A, {})],
                }),
                I(),
            ],
        });
    };
b.CTAType = g;
let y = b;
