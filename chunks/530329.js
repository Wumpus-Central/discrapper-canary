n.d(t, { Z: () => p });
var r = n(255367),
    a = n(73800),
    l = n(120356),
    i = n.n(l),
    s = n(53691),
    o = n(378879),
    c = n(981631),
    u = n(486324),
    d = n(388032),
    f = n(826756);
function p(e) {
    var { uploadType: t, analyticsSource: n, className: l } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
            }
            return a;
        })(e, ['uploadType', 'analyticsSource', 'className']);
    let g = a.useCallback(() => {
            (0, o.s)({
                uploadType: t,
                analyticsSource: n
            });
        }, [t, n]),
        m = a.useMemo(() => {
            switch (t) {
                case u.pC.AVATAR:
                    return d.intl.format(d.t['pvw/HB'], { onClick: g });
                case u.pC.BANNER:
                    return d.intl.format(d.t.aCrz1d, { onClick: g });
                default:
                    return '';
            }
        }, [t, g]);
    return t !== u.pC.AVATAR && t !== u.pC.BANNER
        ? null
        : (0, r.jsx)(
              s.p,
              (function (e) {
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
              })(
                  {
                      text: m,
                      button: d.intl.string(d.t.BmJkbW),
                      buttonAnalyticsObject: { section: c.jXE.USER_PROFILE },
                      className: i()(f.container, l)
                  },
                  p
              )
          );
}
