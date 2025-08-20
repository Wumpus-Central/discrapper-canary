t.d(n, { default: () => C });
var o = t(951288),
    r = t(647438),
    a = t(442837),
    i = t(481060),
    c = t(541099),
    _ = t(827498),
    d = t(421591),
    b = t(496977),
    l = t(314734),
    p = t(388032),
    s = t(604590);
let C = r.memo(function (e) {
    var n,
        t,
        { context: C } = e,
        f = (function (e, n) {
            if (null == e) return {};
            var t,
                o,
                r = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        o,
                        r = {},
                        a = Object.keys(e);
                    for (o = 0; o < a.length; o++) (t = a[o]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                    return r;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (o = 0; o < a.length; o++)
                    (t = a[o]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
            }
            return r;
        })(e, ["context"]);
    let u = (0, a.e7)([c.Z], () => c.Z.shouldShowModal());
    r.useEffect(() => {
        u || (0, i.Fvk)(l.e9);
    });
    let m = (0, b.Z)();
    return (0, o.jsx)("span", {
        style: l.u$,
        children: (0, o.jsx)(
            i.Y0X,
            ((n = (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        o = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (o = o.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            }),
                        )),
                        o.forEach(function (n) {
                            var o;
                            (o = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: o,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[n] = o);
                        });
                }
                return e;
            })(
                {
                    className: s.root,
                    "aria-label": p.intl.string(p.t.shUONj),
                    size: i.CgR.DYNAMIC,
                },
                f,
            )),
            (t = t =
                {
                    parentComponent: "AppLauncherModal",
                    "data-migration-pending": !0,
                    children: (0, o.jsx)(d.Z, {
                        context: C,
                        entrypoint: _._b.VOICE,
                        initHistory: m,
                    }),
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                : (function (e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var o = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, o);
                      }
                      return t;
                  })(Object(t)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                  }),
            n),
        ),
    });
});
