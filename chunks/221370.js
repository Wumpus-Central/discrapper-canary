n.d(t, { Z: () => x }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(758713),
    o = n(657707),
    c = n(481060),
    u = n(388032),
    d = n(226788);
function m(e) {
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
}
let f = [s.z.DESKTOP, s.z.XBOX, s.z.PLAYSTATION, s.z.NINTENDO];
function p(e) {
    var { platform: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["platform"]);
    switch (t) {
        case s.z.DESKTOP:
            return (0, r.jsx)(o.pzj, m({ size: "xs" }, n));
        case s.z.XBOX:
            return (0, r.jsx)(o.Mko, m({ size: "xs" }, n));
        case s.z.PLAYSTATION:
            return (0, r.jsx)(o.Tsp, m({ size: "xs" }, n));
        case s.z.NINTENDO:
            return (0, r.jsx)(o.aPH, m({ size: "xs" }, n));
        default:
            return null;
    }
}
function g(e) {
    let { platforms: t } = e;
    return (0, r.jsx)("div", {
        className: a()(d.row, d.gapSm),
        style: { alignItems: "center" },
        children: t.map((e) =>
            (0, r.jsx)(
                c.ua7,
                {
                    text: (function (e) {
                        switch (e) {
                            case s.z.DESKTOP:
                                return u.intl.string(u.t.KT6uCA);
                            case s.z.XBOX:
                                return u.intl.string(u.t.DDWUJi);
                            case s.z.PLAYSTATION:
                                return u.intl.string(u.t.fzMz2t);
                            case s.z.NINTENDO:
                                return u.intl.string(u.t.AMW8jY);
                            default:
                                return null;
                        }
                    })(e),
                    children: (t) => {
                        var n, i;
                        return (0, r.jsx)(
                            p,
                            ((n = m({}, t)),
                            (i = i = { platform: e }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            n),
                        );
                    },
                },
                e,
            ),
        ),
    });
}
function x(e) {
    let { detectedGame: t, className: n } = e,
        l = i.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return (
                !e.has(s.z.DESKTOP) && (e.has(s.z.MACOS) || e.has(s.z.LINUX)) && n.push(s.z.DESKTOP),
                n.filter((e) => f.includes(e))
            );
        }, [t.platforms]);
    return 0 === l.length
        ? null
        : (0, r.jsx)("div", {
              className: a()(d.column, d.gapLg, n),
              children: l.length > 0 && (0, r.jsx)(g, { platforms: l }),
          });
}
