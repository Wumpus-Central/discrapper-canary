r.d(t, { Z: () => b }), r(47120), r(653041);
var n = r(200651),
    a = r(192379),
    o = r(120356),
    i = r.n(o),
    s = r(758713),
    l = r(657707),
    c = r(481060),
    u = r(388032),
    d = r(384370);
function p(e) {
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
}
let m = [s.z.DESKTOP, s.z.XBOX, s.z.PLAYSTATION, s.z.NINTENDO];
function f(e) {
    var { platform: t } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++) (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
            }
            return a;
        })(e, ['platform']);
    switch (t) {
        case s.z.DESKTOP:
            return (0, n.jsx)(l.pzj, p({ size: 'xs' }, r));
        case s.z.XBOX:
            return (0, n.jsx)(l.Mko, p({ size: 'xs' }, r));
        case s.z.PLAYSTATION:
            return (0, n.jsx)(l.Tsp, p({ size: 'xs' }, r));
        case s.z.NINTENDO:
            return (0, n.jsx)(l.aPH, p({ size: 'xs' }, r));
        default:
            return null;
    }
}
function g(e) {
    let { platforms: t } = e;
    return (0, n.jsx)('div', {
        className: i()(d.row, d.gapSm),
        style: { alignItems: 'center' },
        children: t.map((e) =>
            (0, n.jsx)(
                c.ua7,
                {
                    text: (function (e) {
                        switch (e) {
                            case s.z.DESKTOP:
                                return u.NW.string(u.t.KT6uCA);
                            case s.z.XBOX:
                                return u.NW.string(u.t.DDWUJi);
                            case s.z.PLAYSTATION:
                                return u.NW.string(u.t.fzMz2t);
                            case s.z.NINTENDO:
                                return u.NW.string(u.t.AMW8jY);
                            default:
                                return null;
                        }
                    })(e),
                    children: (t) => {
                        var r, a;
                        return (0, n.jsx)(
                            f,
                            ((r = p({}, t)),
                            (a = a = { platform: e }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
                                : (function (e, t) {
                                      var r = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          r.push.apply(r, n);
                                      }
                                      return r;
                                  })(Object(a)).forEach(function (e) {
                                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e));
                                  }),
                            r)
                        );
                    }
                },
                e
            )
        )
    });
}
function b(e) {
    let { detectedGame: t, className: r } = e,
        o = a.useMemo(() => {
            let e = new Set(t.platforms),
                r = [...e];
            return !e.has(s.z.DESKTOP) && (e.has(s.z.MACOS) || e.has(s.z.LINUX)) && r.push(s.z.DESKTOP), r.filter((e) => m.includes(e));
        }, [t.platforms]);
    return 0 === o.length
        ? null
        : (0, n.jsx)('div', {
              className: i()(d.column, d.gapLg, r),
              children: o.length > 0 && (0, n.jsx)(g, { platforms: o })
          });
}
