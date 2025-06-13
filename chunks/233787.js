n.d(t, { Z: () => d });
var r,
    i = n(255367);
n(73800);
var s = n(481060),
    l = n(600164),
    a = n(390668),
    o = (((r = o || {}).UPGRADE = 'UPGRADE'), (r.CANCEL = 'CANCEL'), (r.UNVERIFIED = 'UNVERIFIED'), (r.UNCLAIMED = 'UNCLAIMED'), (r.GRANDFATHERED = 'GRANDFATHERED'), r);
let c = {
        UPGRADE: 'imageUpgrade',
        CANCEL: 'imageCancel',
        UNVERIFIED: 'imageUnverified',
        UNCLAIMED: 'imageUnclaimed',
        GRANDFATHERED: 'imageCancel'
    },
    u = (e) => {
        var t,
            n,
            { children: r } = e,
            l = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            s = Object.keys(e);
                        for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ['children']);
        return (0, i.jsx)(
            s.Y0X,
            ((t = (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, l)),
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
(u.Header = (e) => {
    let { children: t, onClose: n } = e;
    return (0, i.jsxs)(s.xBx, {
        justify: l.Z.Justify.BETWEEN,
        separator: !1,
        children: [
            (0, i.jsx)(s.vwX, {
                tag: s.RB0.H4,
                children: t
            }),
            null != n
                ? (0, i.jsx)(s.olH, {
                      className: a.__invalid_closeIcon,
                      onClick: n
                  })
                : null
        ]
    });
}),
    (u.Content = (e) => {
        let { children: t, type: n } = e;
        return (0, i.jsxs)(s.hzk, {
            children: [
                (0, i.jsx)('div', { className: a[c[n]] }),
                (0, i.jsx)('div', {
                    className: a.message,
                    children: t
                })
            ]
        });
    }),
    (u.Footer = (e) => {
        let { primary: t, primaryRenderer: n, secondary: r } = e;
        return (0, i.jsx)(s.mzw, {
            children: (0, i.jsxs)(l.Z, {
                justify: l.Z.Justify.END,
                children: [
                    null != r
                        ? (0, i.jsx)(s.zxk, {
                              onClick: r.onClick,
                              look: s.zxk.Looks.LINK,
                              innerClassName: a.secondaryButton,
                              children: r.label
                          })
                        : null,
                    null != t
                        ? (0, i.jsx)(s.zxk, {
                              onClick: t.onClick,
                              color: s.zxk.Colors.BRAND,
                              children: t.label
                          })
                        : n
                ]
            })
        });
    }),
    (u.Types = o);
let d = u;
