n.d(t, { Z: () => d });
var r,
    i = n(255367);
n(73800);
var s = n(755721),
    a = n(481060),
    o = n(600164),
    c = n(390668),
    l = (((r = l || {}).UPGRADE = 'UPGRADE'), (r.CANCEL = 'CANCEL'), (r.UNVERIFIED = 'UNVERIFIED'), (r.UNCLAIMED = 'UNCLAIMED'), (r.GRANDFATHERED = 'GRANDFATHERED'), r);
let u = {
        UPGRADE: 'imageUpgrade',
        CANCEL: 'imageCancel',
        UNVERIFIED: 'imageUnverified',
        UNCLAIMED: 'imageUnclaimed',
        GRANDFATHERED: 'imageCancel'
    },
    b = (e) => {
        var t,
            n,
            { children: r } = e,
            s = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            s = Object.keys(e);
                        for (r = 0; r < s.length; r++) ((n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) ((n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            })(e, ['children']);
        return (0, i.jsx)(
            a.Y0X,
            ((t = (function (e) {
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
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })({}, s)),
            (n = n =
                {
                    parentComponent: 'PremiumModal',
                    children: r
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        );
    };
((b.Header = (e) => {
    let { children: t, onClose: n } = e;
    return (0, i.jsxs)(a.xBx, {
        justify: o.Z.Justify.BETWEEN,
        separator: !1,
        children: [
            (0, i.jsx)(a.vwX, {
                tag: a.RB0.H4,
                children: t
            }),
            null != n
                ? (0, i.jsx)(a.olH, {
                      className: c.__invalid_closeIcon,
                      onClick: n
                  })
                : null
        ]
    });
}),
    (b.Content = (e) => {
        let { children: t, type: n } = e;
        return (0, i.jsxs)(a.hzk, {
            children: [
                (0, i.jsx)('div', { className: c[u[n]] }),
                (0, i.jsx)('div', {
                    className: c.message,
                    children: t
                })
            ]
        });
    }),
    (b.Footer = (e) => {
        let { primary: t, primaryRenderer: n, secondary: r } = e;
        return (0, i.jsx)(a.mzw, {
            children: (0, i.jsxs)(o.Z, {
                justify: o.Z.Justify.END,
                children: [
                    null != r
                        ? (0, i.jsx)(s.zx, {
                              onClick: r.onClick,
                              look: s.zx.Looks.LINK,
                              innerClassName: c.secondaryButton,
                              children: r.label
                          })
                        : null,
                    null != t
                        ? (0, i.jsx)(a.zxk, {
                              variant: 'primary',
                              text: t.label,
                              onClick: t.onClick
                          })
                        : n
                ]
            })
        });
    }),
    (b.Types = l));
let d = b;
