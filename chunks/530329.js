n.d(t, { Z: () => p });
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    s = n(53691),
    o = n(378879),
    c = n(981631),
    u = n(486324),
    f = n(388032),
    d = n(826756);
function p(e) {
    var { uploadType: t, className: n } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(e, ['uploadType', 'className']);
    let p = a.useCallback(() => {
            (0, o.s)(t, void 0);
        }, [t]),
        m = a.useMemo(() => {
            switch (t) {
                case u.pC.AVATAR:
                    return f.NW.format(f.t['pvw/HB'], { onClick: p });
                case u.pC.BANNER:
                    return f.NW.format(f.t.aCrz1d, { onClick: p });
                default:
                    return '';
            }
        }, [t, p]);
    return t !== u.pC.AVATAR && t !== u.pC.BANNER
        ? null
        : (0, r.jsx)(
              s.p,
              (function (e) {
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
              })(
                  {
                      text: m,
                      button: f.NW.string(f.t.BmJkbW),
                      buttonAnalyticsObject: { section: c.jXE.USER_PROFILE },
                      className: i()(d.container, n)
                  },
                  l
              )
          );
}
