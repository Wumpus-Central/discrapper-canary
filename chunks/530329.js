n.d(t, { Z: () => h });
var r = n(54381),
    a = n(473749),
    l = n(120356),
    i = n.n(l),
    s = n(442837),
    o = n(594174),
    c = n(74538),
    u = n(53691),
    d = n(378879),
    f = n(981631),
    p = n(486324),
    g = n(388032),
    m = n(463339);
function h(e) {
    var { uploadType: t, analyticsSource: n, className: l } = e,
        h = (function (e, t) {
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
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(e, ["uploadType", "analyticsSource", "className"]);
    let b = a.useCallback(() => {
            (0, d.s)({
                uploadType: t,
                analyticsSource: n,
            });
        }, [t, n]),
        A = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
        j = c.ZP.canUseAnimatedAvatar(A),
        y = a.useMemo(() => {
            switch (t) {
                case p.pC.AVATAR:
                    return g.intl.format(g.t["pvw/HH"], { onClick: b });
                case p.pC.BANNER:
                    return g.intl.format(g.t.aCrz1e, { onClick: b });
                default:
                    return "";
            }
        }, [t, b]);
    return (t !== p.pC.AVATAR && t !== p.pC.BANNER) || (t === p.pC.AVATAR && j)
        ? null
        : (0, r.jsx)(
              u.p,
              (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                          r = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                              }),
                          )),
                          r.forEach(function (t) {
                              var r;
                              (r = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (e[t] = r);
                          });
                  }
                  return e;
              })(
                  {
                      text: y,
                      button: g.intl.string(g.t.BmJkbd),
                      buttonAnalyticsObject: { section: f.jXE.USER_PROFILE },
                      className: i()(m.container, l),
                  },
                  h,
              ),
          );
}
