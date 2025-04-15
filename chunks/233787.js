r.d(t, { Z: () => d });
var n,
    s = r(200651);
r(192379);
var i = r(481060),
    a = r(600164),
    o = r(390668),
    l = (((n = l || {}).UPGRADE = 'UPGRADE'), (n.CANCEL = 'CANCEL'), (n.UNVERIFIED = 'UNVERIFIED'), (n.UNCLAIMED = 'UNCLAIMED'), (n.GRANDFATHERED = 'GRANDFATHERED'), n);
let c = {
        UPGRADE: 'imageUpgrade',
        CANCEL: 'imageCancel',
        UNVERIFIED: 'imageUnverified',
        UNCLAIMED: 'imageUnclaimed',
        GRANDFATHERED: 'imageCancel'
    },
    u = (e) => {
        var t,
            r,
            { children: n } = e,
            a = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    s = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            s = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (s[r] = e[r]);
                        return s;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
                }
                return s;
            })(e, ['children']);
        return (0, s.jsx)(
            i.Y0X,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = n);
                        });
                }
                return e;
            })({}, a)),
            (r = r = { children: n }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            t)
        );
    };
(u.Header = (e) => {
    let { children: t, onClose: r } = e;
    return (0, s.jsxs)(i.xBx, {
        justify: a.Z.Justify.BETWEEN,
        separator: !1,
        children: [
            (0, s.jsx)(i.vwX, {
                tag: i.RB0.H4,
                children: t
            }),
            null != r
                ? (0, s.jsx)(i.olH, {
                      className: o.__invalid_closeIcon,
                      onClick: r
                  })
                : null
        ]
    });
}),
    (u.Content = (e) => {
        let { children: t, type: r } = e;
        return (0, s.jsxs)(i.hzk, {
            children: [
                (0, s.jsx)('div', { className: o[c[r]] }),
                (0, s.jsx)('div', {
                    className: o.message,
                    children: t
                })
            ]
        });
    }),
    (u.Footer = (e) => {
        let { primary: t, primaryRenderer: r, secondary: n } = e;
        return (0, s.jsx)(i.mzw, {
            children: (0, s.jsxs)(a.Z, {
                justify: a.Z.Justify.END,
                children: [
                    null != n
                        ? (0, s.jsx)(i.zxk, {
                              onClick: n.onClick,
                              look: i.zxk.Looks.LINK,
                              innerClassName: o.secondaryButton,
                              children: n.label
                          })
                        : null,
                    null != t
                        ? (0, s.jsx)(i.zxk, {
                              onClick: t.onClick,
                              color: i.zxk.Colors.BRAND,
                              children: t.label
                          })
                        : r
                ]
            })
        });
    }),
    (u.Types = l);
let d = u;
