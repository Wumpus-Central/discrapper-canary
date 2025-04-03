n.d(e, { Z: () => f });
var o = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    l = n(53691),
    c = n(378879),
    s = n(981631),
    u = n(486324),
    _ = n(388032),
    d = n(826756);
function f(t) {
    var { uploadType: e, className: n } = t,
        i = (function (t, e) {
            if (null == t) return {};
            var n,
                o,
                r = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        o,
                        r = {},
                        i = Object.keys(t);
                    for (o = 0; o < i.length; o++) (n = i[o]), e.indexOf(n) >= 0 || (r[n] = t[n]);
                    return r;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (o = 0; o < i.length; o++) (n = i[o]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
            }
            return r;
        })(t, ['uploadType', 'className']);
    let f = r.useCallback(() => {
            (0, c.s)(e, void 0);
        }, [e]),
        m = r.useMemo(() => {
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
                  i
              )
          );
}
