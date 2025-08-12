r.d(t, { default: () => O });
var n = r(255367),
    o = r(73800),
    c = r(442837),
    i = r(481060),
    l = r(541099),
    p = r(827498),
    s = r(421591),
    u = r(496977),
    a = r(314734),
    b = r(388032),
    f = r(596570);
let O = o.memo(function (e) {
    var t,
        r,
        { context: O } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) (r = c[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (n = 0; n < c.length; n++)
                    (r = c[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ["context"]);
    let j = (0, c.e7)([l.Z], () => l.Z.shouldShowModal());
    o.useEffect(() => {
        j || (0, i.Fvk)(a.e9);
    });
    let h = (0, u.Z)();
    return (0, n.jsx)("span", {
        style: a.u$,
        children: (0, n.jsx)(
            i.Y0X,
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
                    className: f.root,
                    "aria-label": b.intl.string(b.t.shUONj),
                    size: i.CgR.DYNAMIC,
                },
                y,
            )),
            (r = r =
                {
                    parentComponent: "AppLauncherModal",
                    children: (0, n.jsx)(s.Z, {
                        context: O,
                        entrypoint: p._b.VOICE,
                        initHistory: h,
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
