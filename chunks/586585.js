n.d(t, {
    Z: () => h,
    g: () => _
});
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(600164),
    a = n(612853),
    s = n(388032),
    l = n(240150);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var _ = (function (e) {
    return (e[(e.CONTINUE = 0)] = 'CONTINUE'), (e[(e.UPGRADE = 1)] = 'UPGRADE'), (e[(e.PURCHASE = 2)] = 'PURCHASE'), e;
})({});
let p = (e) => {
    let { onBack: t, backText: n, primaryIcon: c, primaryCTA: d, primaryType: _, primaryText: p, primaryTooltip: h, primaryDisabled: m, primarySubmitting: g, onPrimary: E, secondaryText: b, onSecondary: y } = e,
        v = () => {
            if (null == d || null == p) return null;
            let e = 2 === d ? i.gtL : i.zxk,
                t = {
                    innerClassName: l.button,
                    type: _,
                    disabled: m,
                    submitting: g,
                    color: 0 === d ? i.zxk.Colors.BRAND : i.zxk.Colors.GREEN,
                    onClick: E
                };
            return null != h
                ? (0, r.jsx)(i.ua7, {
                      text: h,
                      children: (n) =>
                          (0, r.jsxs)(
                              e,
                              f(u({}, n, t), {
                                  children: [
                                      null == c
                                          ? null
                                          : (0, r.jsx)(c, {
                                                color: 'currentColor',
                                                className: l.primaryIcon
                                            }),
                                      p
                                  ]
                              })
                          )
                  })
                : (0, r.jsxs)(
                      e,
                      f(u({}, t), {
                          children: [
                              null == c
                                  ? null
                                  : (0, r.jsx)(c, {
                                        color: 'currentColor',
                                        className: l.primaryIcon
                                    }),
                              p
                          ]
                      })
                  );
        },
        O = () =>
            null == b
                ? null
                : (0, r.jsx)(i.zxk, {
                      color: i.zxk.Colors.PRIMARY,
                      look: i.zxk.Looks.LINK,
                      onClick: y,
                      children: b
                  }),
        I = () =>
            null == t
                ? null
                : (0, r.jsx)(i.zxk, {
                      className: l.back,
                      color: i.zxk.Colors.PRIMARY,
                      look: i.zxk.Looks.LINK,
                      onClick: t,
                      children: null != n ? n : s.NW.string(s.t['13/7kZ'])
                  });
    return (0, r.jsxs)(i.mzw, {
        justify: o.Z.Justify.BETWEEN,
        align: o.Z.Align.CENTER,
        children: [v(), O(), (0, r.jsx)(a.Z, {}), I()]
    });
};
p.CTAType = _;
let h = p;
