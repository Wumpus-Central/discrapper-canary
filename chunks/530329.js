n.d(e, { Z: () => f });
var o = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(53691),
    c = n(378879),
    s = n(981631),
    u = n(486324),
    _ = n(388032),
    d = n(746364);
function f(t) {
    var { uploadType: e, className: n } = t,
        r = (function (t, e) {
            if (null == t) return {};
            var n,
                o,
                i = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        o,
                        i = {},
                        r = Object.keys(t);
                    for (o = 0; o < r.length; o++) (n = r[o]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                    return i;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                for (o = 0; o < r.length; o++) (n = r[o]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]);
            }
            return i;
        })(t, ['uploadType', 'className']);
    let f = i.useCallback(() => {
            (0, c.s)(e, void 0);
        }, [e]),
        m = i.useMemo(() => {
            switch (e) {
                case u.pC.AVATAR:
                    return _.NW.format(_.t['pvw/HB'], { onClick: f });
                case u.pC.BANNER:
                    return _.NW.format(_.t.aCrz1d, { onClick: f });
                default:
                    return '';
            }
        }, [e, f]);
    return e !== u.pC.AVATAR && e !== u.pC.BANNER
        ? null
        : (0, o.jsx)(
              l.p,
              (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {},
                          o = Object.keys(n);
                      'function' == typeof Object.getOwnPropertySymbols &&
                          (o = o.concat(
                              Object.getOwnPropertySymbols(n).filter(function (t) {
                                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                              })
                          )),
                          o.forEach(function (e) {
                              var o;
                              (o = n[e]),
                                  e in t
                                      ? Object.defineProperty(t, e, {
                                            value: o,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        })
                                      : (t[e] = o);
                          });
                  }
                  return t;
              })(
                  {
                      text: m,
                      button: _.NW.string(_.t.BmJkbW),
                      buttonAnalyticsObject: { section: s.jXE.USER_PROFILE },
                      className: a()(d.container, n)
                  },
                  r
              )
          );
}
