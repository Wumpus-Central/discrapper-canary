n.d(t, { Z: () => b });
var r,
    s = n(200651);
n(192379);
var i = n(481060),
    c = n(600164),
    o = n(390668),
    a = (((r = a || {}).UPGRADE = 'UPGRADE'), (r.CANCEL = 'CANCEL'), (r.UNVERIFIED = 'UNVERIFIED'), (r.UNCLAIMED = 'UNCLAIMED'), (r.GRANDFATHERED = 'GRANDFATHERED'), r);
let l = {
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
            c = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    s = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            s = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                        return s;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
                }
                return s;
            })(e, ['children']);
        return (0, s.jsx)(
            i.Y0X,
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
            })({}, c)),
            (n = n = { children: r }),
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
    return (0, s.jsxs)(i.xBx, {
        justify: c.Z.Justify.BETWEEN,
        separator: !1,
        children: [
            (0, s.jsx)(i.vwX, {
                tag: i.RB0.H4,
                children: t
            }),
            null != n
                ? (0, s.jsx)(i.olH, {
                      className: o.__invalid_closeIcon,
                      onClick: n
                  })
                : null
        ]
    });
}),
    (u.Content = (e) => {
        let { children: t, type: n } = e;
        return (0, s.jsxs)(i.hzk, {
            children: [
                (0, s.jsx)('div', { className: o[l[n]] }),
                (0, s.jsx)('div', {
                    className: o.message,
                    children: t
                })
            ]
        });
    }),
    (u.Footer = (e) => {
        let { primary: t, primaryRenderer: n, secondary: r } = e;
        return (0, s.jsx)(i.mzw, {
            children: (0, s.jsxs)(c.Z, {
                justify: c.Z.Justify.END,
                children: [
                    null != r
                        ? (0, s.jsx)(i.zxk, {
                              onClick: r.onClick,
                              look: i.zxk.Looks.LINK,
                              innerClassName: o.secondaryButton,
                              children: r.label
                          })
                        : null,
                    null != t
                        ? (0, s.jsx)(i.zxk, {
                              onClick: t.onClick,
                              color: i.zxk.Colors.BRAND,
                              children: t.label
                          })
                        : n
                ]
            })
        });
    }),
    (u.Types = a);
let b = u;
