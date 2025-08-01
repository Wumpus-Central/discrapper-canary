(n.d(t, { C: () => p }), n(539854));
var r,
    i = n(255367),
    a = n(73800),
    s = n(82659),
    c = n(390668),
    o = (((r = o || {}).UPGRADE = 'UPGRADE'), (r.CANCEL = 'CANCEL'), (r.UNVERIFIED = 'UNVERIFIED'), (r.UNCLAIMED = 'UNCLAIMED'), (r.GRANDFATHERED = 'GRANDFATHERED'), r);
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
            { children: r, premiumModalType: o, primary: u, secondary: p } = e,
            b = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            a = Object.keys(e);
                        for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            })(e, ['children', 'premiumModalType', 'primary', 'secondary']);
        let d = a.useMemo(() => {
            let e = [];
            return (
                null != p &&
                    e.push({
                        variant: 'secondary',
                        text: p.label,
                        onClick: p.onClick
                    }),
                null != u &&
                    e.push({
                        variant: 'primary',
                        text: u.label,
                        onClick: u.onClick
                    }),
                e
            );
        }, [u, p]);
        return (0, i.jsxs)(
            s.Modal,
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
            })({}, b)),
            (n = n =
                {
                    actions: d,
                    children: [
                        (0, i.jsx)('div', { className: c[l[o]] }),
                        (0, i.jsx)('div', {
                            className: c.message,
                            children: r
                        })
                    ]
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
u.Types = o;
let p = u;
