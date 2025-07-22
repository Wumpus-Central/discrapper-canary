n.d(t, {
    Z: () => g,
    g: () => h
});
var r = n(255367);
n(73800);
var i = n(755721),
    a = n(481060),
    o = n(600164),
    s = n(563132),
    l = n(612853),
    c = n(388032),
    u = n(240150);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            }));
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var h = (function (e) {
    return ((e[(e.CONTINUE = 0)] = 'CONTINUE'), (e[(e.UPGRADE = 1)] = 'UPGRADE'), (e[(e.PURCHASE = 2)] = 'PURCHASE'), e);
})({});
let m = (e) => {
    let { onBack: t, backText: n, primaryIcon: d, primaryCTA: f, primaryType: h, primaryText: m, primaryTooltip: g, primaryDisabled: E, primarySubmitting: b, onPrimary: y, secondaryText: O, onSecondary: v } = e,
        { premiumBrandRefreshBackgroundClassName: I } = (0, s.JL)(),
        T = () => {
            if (null == f || null == m) return null;
            let e = 2 === f ? a.gtL : i.zx,
                t = {
                    innerClassName: u.button,
                    type: h,
                    disabled: E,
                    submitting: b,
                    color: 0 === f ? i.zx.Colors.BRAND : i.zx.Colors.GREEN,
                    onClick: y
                };
            return null != g
                ? (0, r.jsx)(a.ua7, {
                      text: g,
                      children: (n) =>
                          (0, r.jsxs)(
                              e,
                              p(_({}, n, t), {
                                  children: [
                                      null == d
                                          ? null
                                          : (0, r.jsx)(d, {
                                                color: 'currentColor',
                                                className: u.primaryIcon
                                            }),
                                      m
                                  ]
                              })
                          )
                  })
                : (0, r.jsxs)(
                      e,
                      p(_({}, t), {
                          children: [
                              null == d
                                  ? null
                                  : (0, r.jsx)(d, {
                                        color: 'currentColor',
                                        className: u.primaryIcon
                                    }),
                              m
                          ]
                      })
                  );
        },
        S = () =>
            null == O
                ? null
                : (0, r.jsx)(i.zx, {
                      color: i.zx.Colors.PRIMARY,
                      look: i.zx.Looks.LINK,
                      onClick: v,
                      children: O
                  }),
        A = () =>
            null == t
                ? null
                : (0, r.jsx)(i.zx, {
                      className: u.back,
                      color: i.zx.Colors.PRIMARY,
                      look: i.zx.Looks.LINK,
                      onClick: t,
                      children: null != n ? n : c.intl.string(c.t['13/7kZ'])
                  });
    return (0, r.jsxs)(a.mzw, {
        justify: o.Z.Justify.BETWEEN,
        align: o.Z.Align.CENTER,
        className: I,
        children: [T(), S(), (0, r.jsx)(l.Z, {}), A()]
    });
};
m.CTAType = h;
let g = m;
