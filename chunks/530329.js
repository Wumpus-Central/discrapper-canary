n.d(e, { Z: () => f });
var o = n(255367),
    r = n(73800),
    i = n(120356),
    a = n.n(i),
    l = n(53691),
    c = n(378879),
    s = n(981631),
    u = n(486324),
    _ = n(388032),
    d = n(826756);
function f(t) {
    var { uploadType: e, analyticsSource: n, className: i } = t,
        f = (function (t, e) {
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
                for (o = 0; o < i.length; o++)
                    (n = i[o]),
                        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
            }
            return r;
        })(t, ["uploadType", "analyticsSource", "className"]);
    let m = r.useCallback(() => {
            (0, c.s)({
                uploadType: e,
                analyticsSource: n,
            });
        }, [e, n]),
        p = r.useMemo(() => {
            switch (e) {
                case u.pC.AVATAR:
                    return _.intl.format(_.t["pvw/HB"], { onClick: m });
                case u.pC.BANNER:
                    return _.intl.format(_.t.aCrz1d, { onClick: m });
                default:
                    return "";
            }
        }, [e, m]);
    return e !== u.pC.AVATAR && e !== u.pC.BANNER
        ? null
        : (0, o.jsx)(
              l.p,
              (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {},
                          o = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols &&
                          (o = o.concat(
                              Object.getOwnPropertySymbols(n).filter(function (t) {
                                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                              }),
                          )),
                          o.forEach(function (e) {
                              var o;
                              (o = n[e]),
                                  e in t
                                      ? Object.defineProperty(t, e, {
                                            value: o,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (t[e] = o);
                          });
                  }
                  return t;
              })(
                  {
                      text: p,
                      button: _.intl.string(_.t.BmJkbW),
                      buttonAnalyticsObject: { section: s.jXE.USER_PROFILE },
                      className: a()(d.container, i),
                  },
                  f,
              ),
          );
}
