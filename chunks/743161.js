t.d(n, { default: () => _ });
var r = t(951288),
    o = t(647438),
    i = t(442837),
    a = t(481060),
    c = t(541099),
    l = t(827498),
    d = t(421591),
    s = t(496977),
    u = t(314734),
    p = t(388032),
    b = t(604590);
let _ = o.memo(function (e) {
    var n,
        t,
        { context: _ } = e,
        f = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                o = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (t = i[r]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        })(e, ["context"]);
    let m = (0, i.e7)([c.Z], () => c.Z.shouldShowModal());
    o.useEffect(() => {
        m || (0, a.Fvk)(u.e9);
    });
    let C = (0, s.Z)();
    return (0, r.jsx)("span", {
        style: u.u$,
        children: (0, r.jsx)(
            a.Y0X,
            ((n = (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            }),
                        )),
                        r.forEach(function (n) {
                            var r;
                            (r = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[n] = r);
                        });
                }
                return e;
            })(
                {
                    className: b.root,
                    "aria-label": p.intl.string(p.t.shUONj),
                    size: a.CgR.DYNAMIC,
                },
                f,
            )),
            (t = t =
                {
                    parentComponent: "AppLauncherModal",
                    "data-migration-pending": !0,
                    children: (0, r.jsx)(d.Z, {
                        context: _,
                        entrypoint: l._b.VOICE,
                        initHistory: C,
                    }),
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                : (function (e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, r);
                      }
                      return t;
                  })(Object(t)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                  }),
            n),
        ),
    });
});
