n.d(e, { Z: () => g });
var i = n(200651),
    o = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(53691),
    c = n(378879),
    s = n(981631),
    u = n(486324),
    d = n(388032),
    _ = n(826756);
function g(t) {
    var { uploadType: e, analyticsSource: n, className: r } = t,
        g = (function (t, e) {
            if (null == t) return {};
            var n,
                i,
                o = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        i,
                        o = {},
                        r = Object.keys(t);
                    for (i = 0; i < r.length; i++) (n = r[i]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                for (i = 0; i < r.length; i++) (n = r[i]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
            }
            return o;
        })(t, ['uploadType', 'analyticsSource', 'className']);
    let h = o.useCallback(() => {
            (0, c.s)({
                uploadType: e,
                analyticsSource: n
            });
        }, [e, n]),
        m = o.useMemo(() => {
            switch (e) {
                case u.pC.AVATAR:
                    return d.intl.format(d.t['pvw/HB'], { onClick: h });
                case u.pC.BANNER:
                    return d.intl.format(d.t.aCrz1d, { onClick: h });
                default:
                    return '';
            }
        }, [e, h]);
    return e !== u.pC.AVATAR && e !== u.pC.BANNER
        ? null
        : (0, i.jsx)(
              l.p,
              (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {},
                          i = Object.keys(n);
                      'function' == typeof Object.getOwnPropertySymbols &&
                          (i = i.concat(
                              Object.getOwnPropertySymbols(n).filter(function (t) {
                                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                              })
                          )),
                          i.forEach(function (e) {
                              var i;
                              (i = n[e]),
                                  e in t
                                      ? Object.defineProperty(t, e, {
                                            value: i,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        })
                                      : (t[e] = i);
                          });
                  }
                  return t;
              })(
                  {
                      text: m,
                      button: d.intl.string(d.t.BmJkbW),
                      buttonAnalyticsObject: { section: s.jXE.USER_PROFILE },
                      className: a()(_.container, r)
                  },
                  g
              )
          );
}
