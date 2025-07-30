n.d(t, { Z: () => g });
var r,
    s = n(255367);
n(73800);
var i = n(755721),
    a = n(481060),
    o = n(600164),
    l = n(390668),
    c = (((r = c || {}).UPGRADE = 'UPGRADE'), (r.CANCEL = 'CANCEL'), (r.UNVERIFIED = 'UNVERIFIED'), (r.UNCLAIMED = 'UNCLAIMED'), (r.GRANDFATHERED = 'GRANDFATHERED'), r);
let u = {
        UPGRADE: 'imageUpgrade',
        CANCEL: 'imageCancel',
        UNVERIFIED: 'imageUnverified',
        UNCLAIMED: 'imageUnclaimed',
        GRANDFATHERED: 'imageCancel'
    },
    d = (e) => {
        var t,
            n,
            { children: r } = e,
            i = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    s = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            s = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                        return s;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) ((n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]));
                }
                return s;
            })(e, ['children']);
        return (0, s.jsx)(
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
            })({}, i)),
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
((d.Header = (e) => {
    let { children: t, onClose: n } = e;
    return (0, s.jsxs)(a.xBx, {
        justify: o.Z.Justify.BETWEEN,
        separator: !1,
        children: [
            (0, s.jsx)(a.vwX, {
                tag: a.RB0.H4,
                children: t
            }),
            null != n
                ? (0, s.jsx)(a.olH, {
                      className: l.__invalid_closeIcon,
                      onClick: n
                  })
                : null
        ]
    });
}),
    (d.Content = (e) => {
        let { children: t, type: n } = e;
        return (0, s.jsxs)(a.hzk, {
            children: [
                (0, s.jsx)('div', { className: l[u[n]] }),
                (0, s.jsx)('div', {
                    className: l.message,
                    children: t
                })
            ]
        });
    }),
    (d.Footer = (e) => {
        let { primary: t, primaryRenderer: n, secondary: r } = e;
        return (0, s.jsx)(a.mzw, {
            children: (0, s.jsxs)(o.Z, {
                justify: o.Z.Justify.END,
                children: [
                    null != r
                        ? (0, s.jsx)(i.zx, {
                              onClick: r.onClick,
                              look: i.zx.Looks.LINK,
                              innerClassName: l.secondaryButton,
                              children: r.label
                          })
                        : null,
                    null != t
                        ? (0, s.jsx)(a.zxk, {
                              variant: 'primary',
                              text: t.label,
                              onClick: t.onClick
                          })
                        : n
                ]
            })
        });
    }),
    (d.Types = c));
let g = d;
