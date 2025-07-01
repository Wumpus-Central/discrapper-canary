t.d(n, { default: () => _ });
var o = t(255367),
    r = t(73800),
    a = t(442837),
    i = t(481060),
    c = t(541099),
    l = t(827498),
    d = t(421591),
    s = t(496977),
    p = t(314734),
    u = t(388032),
    b = t(472088);
let _ = r.memo(function (e) {
    var n,
        t,
        { context: _ } = e,
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
                    for (o = 0; o < a.length; o++) ((t = a[o]), n.indexOf(t) >= 0 || (r[t] = e[t]));
                    return r;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (o = 0; o < a.length; o++) ((t = a[o]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
            }
            return r;
        })(e, ['context']);
    let m = (0, a.e7)([c.Z], () => c.Z.shouldShowModal());
    r.useEffect(() => {
        m || (0, i.Fvk)(p.e9);
    });
    let C = (0, s.Z)();
    return (0, o.jsx)('span', {
        style: p.u$,
        children: (0, o.jsx)(
            i.Y0X,
            ((n = (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        o = Object.keys(t);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (o = o.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            })
                        )),
                        o.forEach(function (n) {
                            var o;
                            ((o = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: o,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[n] = o));
                        }));
                }
                return e;
            })(
                {
                    className: b.root,
                    'aria-label': u.intl.string(u.t.shUONj),
                    size: i.CgR.DYNAMIC
                },
                f
            )),
            (t = t =
                {
                    parentComponent: 'AppLauncherModal',
                    children: (0, o.jsx)(d.Z, {
                        context: _,
                        entrypoint: l._b.VOICE,
                        initHistory: C
                    })
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
            n)
        )
    });
});
