n.d(t, {
    Z: () => m,
    g: () => p
});
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(600164),
    o = n(563132),
    s = n(612853),
    l = n(388032),
    c = n(240150);
function u(e, t, n) {
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
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var p = (function (e) {
    return (e[(e.CONTINUE = 0)] = 'CONTINUE'), (e[(e.UPGRADE = 1)] = 'UPGRADE'), (e[(e.PURCHASE = 2)] = 'PURCHASE'), e;
})({});
let h = (e) => {
    let { onBack: t, backText: n, primaryIcon: u, primaryCTA: _, primaryType: p, primaryText: h, primaryTooltip: m, primaryDisabled: g, primarySubmitting: E, onPrimary: b, secondaryText: y, onSecondary: O } = e,
        { premiumRebrandBackgroundClassName: v } = (0, o.JL)(),
        I = () => {
            if (null == _ || null == h) return null;
            let e = 2 === _ ? i.gtL : i.zxk,
                t = {
                    innerClassName: c.button,
                    type: p,
                    disabled: g,
                    submitting: E,
                    color: 0 === _ ? i.zxk.Colors.BRAND : i.zxk.Colors.GREEN,
                    onClick: b
                };
            return null != m
                ? (0, r.jsx)(i.ua7, {
                      text: m,
                      children: (n) =>
                          (0, r.jsxs)(
                              e,
                              f(d({}, n, t), {
                                  children: [
                                      null == u
                                          ? null
                                          : (0, r.jsx)(u, {
                                                color: 'currentColor',
                                                className: c.primaryIcon
                                            }),
                                      h
                                  ]
                              })
                          )
                  })
                : (0, r.jsxs)(
                      e,
                      f(d({}, t), {
                          children: [
                              null == u
                                  ? null
                                  : (0, r.jsx)(u, {
                                        color: 'currentColor',
                                        className: c.primaryIcon
                                    }),
                              h
                          ]
                      })
                  );
        },
        T = () =>
            null == y
                ? null
                : (0, r.jsx)(i.zxk, {
                      color: i.zxk.Colors.PRIMARY,
                      look: i.zxk.Looks.LINK,
                      onClick: O,
                      children: y
                  }),
        S = () =>
            null == t
                ? null
                : (0, r.jsx)(i.zxk, {
                      className: c.back,
                      color: i.zxk.Colors.PRIMARY,
                      look: i.zxk.Looks.LINK,
                      onClick: t,
                      children: null != n ? n : l.intl.string(l.t['13/7kZ'])
                  });
    return (0, r.jsxs)(i.mzw, {
        justify: a.Z.Justify.BETWEEN,
        align: a.Z.Align.CENTER,
        className: v,
        children: [I(), T(), (0, r.jsx)(s.Z, {}), S()]
    });
};
h.CTAType = p;
let m = h;
