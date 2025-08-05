(r.d(t, { Z: () => x }), r(388685), r(539854));
var n = r(255367),
    a = r(73800),
    i = r(120356),
    l = r.n(i),
    o = r(758713),
    s = r(657707),
    c = r(481060),
    d = r(388032),
    u = r(263930);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
let g = [o.z.DESKTOP, o.z.XBOX, o.z.PLAYSTATION, o.z.NINTENDO];
function p(e) {
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
                    for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) ((r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
            }
            return a;
        })(e, ['platform']);
    switch (t) {
        case o.z.DESKTOP:
            return (0, n.jsx)(s.pzj, m({ size: 'xs' }, r));
        case o.z.XBOX:
            return (0, n.jsx)(s.Mko, m({ size: 'xs' }, r));
        case o.z.PLAYSTATION:
            return (0, n.jsx)(s.Tsp, m({ size: 'xs' }, r));
        case o.z.NINTENDO:
            return (0, n.jsx)(s.aPH, m({ size: 'xs' }, r));
        default:
            return null;
    }
}
function f(e) {
    let { platforms: t } = e;
    return (0, n.jsx)('div', {
        className: l()(u.row, u.gapSm),
        style: { alignItems: 'center' },
        children: t.map((e) =>
            (0, n.jsx)(
                c.ua7,
                {
                    text: (function (e) {
                        switch (e) {
                            case o.z.DESKTOP:
                                return d.intl.string(d.t.KT6uCA);
                            case o.z.XBOX:
                                return d.intl.string(d.t.DDWUJi);
                            case o.z.PLAYSTATION:
                                return d.intl.string(d.t.fzMz2t);
                            case o.z.NINTENDO:
                                return d.intl.string(d.t.AMW8jY);
                            default:
                                return null;
                        }
                    })(e),
                    children: (t) => {
                        var r, a;
                        return (0, n.jsx)(
                            p,
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
function x(e) {
    let { detectedGame: t, className: r } = e,
        i = a.useMemo(() => {
            let e = new Set(t.platforms),
                r = [...e];
            return (!e.has(o.z.DESKTOP) && (e.has(o.z.MACOS) || e.has(o.z.LINUX)) && r.push(o.z.DESKTOP), r.filter((e) => g.includes(e)));
        }, [t.platforms]);
    return 0 === i.length
        ? null
        : (0, n.jsx)('div', {
              className: l()(u.column, u.gapLg, r),
              children: i.length > 0 && (0, n.jsx)(f, { platforms: i })
          });
}
