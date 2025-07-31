n.d(t, {
    Z: () => O,
    g: () => E
});
var r = n(255367);
n(73800);
var i = n(793030),
    a = n(179538),
    o = n(159691),
    s = n(755721),
    l = n(481060),
    c = n(600164),
    u = n(563132),
    d = n(612853),
    _ = n(388032),
    f = n(240150);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
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
var E = (function (e) {
    return ((e[(e.CONTINUE = 0)] = 'CONTINUE'), (e[(e.UPGRADE = 1)] = 'UPGRADE'), (e[(e.PURCHASE = 2)] = 'PURCHASE'), e);
})({});
let b = (e) => {
        let { primaryIcon: t, primaryCTA: n, primaryType: i, primaryText: a, primaryDisabled: c, primarySubmitting: u, onPrimary: d, tooltipProps: _ } = e,
            p = {
                type: i,
                disabled: c,
                onClick: d
            };
        return 2 === n
            ? (0, r.jsx)(
                  l.gtL,
                  g(
                      h(
                          g(h({}, p), {
                              submitting: u,
                              color: s.zx.Colors.GREEN
                          }),
                          _
                      ),
                      {
                          children:
                              null == t
                                  ? null
                                  : (0, r.jsx)(t, {
                                        color: 'currentColor',
                                        className: f.primaryIcon
                                    })
                      }
                  )
              )
            : (0, r.jsx)(
                  o.zx,
                  h(
                      g(h({}, p), {
                          text: a,
                          loading: u,
                          variant: 0 === n ? 'primary' : 'active',
                          icon:
                              null == t
                                  ? void 0
                                  : () =>
                                        (0, r.jsx)(t, {
                                            color: 'currentColor',
                                            className: f.primaryIcon
                                        })
                      }),
                      _
                  )
              );
    },
    y = (e) => {
        let { onBack: t, backText: n, primaryIcon: o, primaryCTA: s, primaryType: f, primaryText: p, primaryTooltip: m, primaryDisabled: E, primarySubmitting: y, onPrimary: O } = e,
            { premiumBrandRefreshBackgroundClassName: v } = (0, u.JL)(),
            I = () => {
                if (null == s || null == p) return null;
                let e = {
                    primaryIcon: o,
                    primaryCTA: s,
                    primaryType: f,
                    primaryText: p,
                    primaryDisabled: E,
                    primarySubmitting: y,
                    onPrimary: O
                };
                return null != m
                    ? (0, r.jsx)(l.ua7, {
                          text: m,
                          children: (t) => (0, r.jsx)(b, g(h({}, e), { tooltipProps: t }))
                      })
                    : (0, r.jsx)(b, g(h({}, e), { onPrimary: O }));
            },
            T = () =>
                null == t
                    ? null
                    : (0, r.jsx)(a.A, {
                          text: null != n ? n : _.intl.string(_.t['13/7kZ']),
                          onClick: t,
                          variant: 'secondary'
                      });
        return (0, r.jsxs)(l.mzw, {
            justify: c.Z.Justify.BETWEEN,
            align: c.Z.Align.CENTER,
            className: v,
            children: [
                (0, r.jsxs)(i.Kq, {
                    direction: 'horizontal-reverse',
                    align: 'center',
                    gap: 0,
                    padding: 0,
                    children: [I(), (0, r.jsx)(d.Z, {})]
                }),
                T()
            ]
        });
    };
y.CTAType = E;
let O = y;
