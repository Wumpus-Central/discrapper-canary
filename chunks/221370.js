r.d(t, { Z: () => O }), r(388685), r(539854);
var n = r(200651),
    a = r(192379),
    i = r(120356),
    l = r.n(i),
    s = r(758713),
    o = r(657707),
    c = r(481060),
    u = r(388032),
    d = r(206218);
function m(e) {
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
let g = [s.z.DESKTOP, s.z.XBOX, s.z.PLAYSTATION, s.z.NINTENDO];
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
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
            }
            return a;
        })(e, ['platform']);
    switch (t) {
        case s.z.DESKTOP:
            return (0, n.jsx)(o.pzj, m({ size: 'xs' }, r));
        case s.z.XBOX:
            return (0, n.jsx)(o.Mko, m({ size: 'xs' }, r));
        case s.z.PLAYSTATION:
            return (0, n.jsx)(o.Tsp, m({ size: 'xs' }, r));
        case s.z.NINTENDO:
            return (0, n.jsx)(o.aPH, m({ size: 'xs' }, r));
        default:
            return null;
    }
}
function p(e) {
    let { platforms: t } = e;
    return (0, n.jsx)('div', {
        className: l()(d.row, d.gapSm),
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
                            ((r = m({}, t)),
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
function O(e) {
    let { detectedGame: t, className: r } = e,
        i = a.useMemo(() => {
            let e = new Set(t.platforms),
                r = [...e];
            return !e.has(s.z.DESKTOP) && (e.has(s.z.MACOS) || e.has(s.z.LINUX)) && r.push(s.z.DESKTOP), r.filter((e) => g.includes(e));
        }, [t.platforms]);
    return 0 === i.length
        ? null
        : (0, n.jsx)('div', {
              className: l()(d.column, d.gapLg, r),
              children: i.length > 0 && (0, n.jsx)(p, { platforms: i })
          });
}
