r.d(t, { default: () => O });
var n = r(627968),
    o = r(64700),
    c = r(311907),
    p = r(397927),
    l = r(989837),
    i = r(500049),
    s = r(7691),
    a = r(699803),
    u = r(60809),
    b = r(985018),
    f = r(996330);
let O = o.memo(function (e) {
    var t, r;
    let { context: O } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o,
                c = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
                return c;
            }
            if (
                ((c = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        c = Object.getOwnPropertyNames(e);
                    for (n = 0; n < c.length; n++)
                        (r = c[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
            return c;
        })(e, ["context"]),
        j = (0, c.bG)([l.A], () => l.A.shouldShowModal());
    o.useEffect(() => {
        j || (0, p.CT7)(u.gS);
    });
    let g = (0, a.A)();
    return (0, n.jsx)("span", {
        style: u.sK,
        children: (0, n.jsx)(
            p.EOs,
            ((t = (function (e) {
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
                    className: f.z,
                    "aria-label": b.intl.string(b.t.shUONg),
                    size: p.rIJ.DYNAMIC,
                },
                y,
            )),
            (r = r =
                {
                    parentComponent: "AppLauncherModal",
                    "data-migration-pending": !0,
                    children: (0, n.jsx)(s.A, {
                        context: O,
                        entrypoint: i.s4.VOICE,
                        initHistory: g,
                    }),
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            t),
        ),
    });
});
