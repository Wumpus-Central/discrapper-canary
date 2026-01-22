r.d(t, { A: () => y });
var n = r(627968),
    l = r(64700),
    a = r(503698),
    i = r.n(a),
    s = r(311907),
    o = r(287809),
    c = r(927578),
    u = r(202639),
    f = r(688796),
    d = r(652215),
    p = r(339984),
    g = r(985018),
    b = r(719154);
function y(e) {
    let { uploadType: t, analyticsSource: r, className: a } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l,
                a = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                return a;
            }
            if (
                ((a = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        a = Object.getOwnPropertyNames(e);
                    for (n = 0; n < a.length; n++)
                        (r = a[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            return a;
        })(e, ["uploadType", "analyticsSource", "className"]),
        A = l.useCallback(() => {
            (0, f.G)({
                uploadType: t,
                analyticsSource: r,
            });
        }, [t, r]),
        h = (0, s.bG)([o.default], () => o.default.getCurrentUser()),
        m = c.Ay.canUseAnimatedAvatar(h),
        j = l.useMemo(() => {
            switch (t) {
                case p.HL.AVATAR:
                    return g.intl.format(g.t["pvw/HH"], { onClick: A });
                case p.HL.BANNER:
                    return g.intl.format(g.t.aCrz1e, { onClick: A });
                default:
                    return "";
            }
        }, [t, A]);
    return (t !== p.HL.AVATAR && t !== p.HL.BANNER) || (t === p.HL.AVATAR && m)
        ? null
        : (0, n.jsx)(
              u.d,
              (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {},
                          n = Object.keys(r);
                      "function" == typeof Object.getOwnPropertySymbols &&
                          (n = n.concat(
                              Object.getOwnPropertySymbols(r).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                              }),
                          )),
                          n.forEach(function (t) {
                              var n;
                              (n = r[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (e[t] = n);
                          });
                  }
                  return e;
              })(
                  {
                      text: j,
                      button: g.intl.string(g.t.BmJkbd),
                      buttonAnalyticsObject: { section: d.JJy.USER_PROFILE },
                      className: i()(b.k, a),
                  },
                  y,
              ),
          );
}
