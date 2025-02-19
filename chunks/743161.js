t.d(n, { default: () => u });
var o = t(200651),
    r = t(192379),
    a = t(442837),
    i = t(481060),
    c = t(541099),
    l = t(827498),
    s = t(421591),
    d = t(314734),
    _ = t(388032),
    p = t(461149);
let u = r.memo(function (e) {
    var n,
        t,
        { context: u } = e,
        b = (function (e, n) {
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
                for (o = 0; o < a.length; o++) (t = a[o]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
            }
            return r;
        })(e, ['context']);
    let f = (0, a.e7)([c.Z], () => c.Z.shouldShowModal());
    return (
        r.useEffect(() => {
            f || (0, i.Fvk)(d.e9);
        }),
        (0, o.jsx)('span', {
            style: d.u$,
            children: (0, o.jsx)(
                i.Y0X,
                ((n = (function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            o = Object.keys(t);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (o = o.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                })
                            )),
                            o.forEach(function (n) {
                                var o;
                                (o = t[n]),
                                    n in e
                                        ? Object.defineProperty(e, n, {
                                              value: o,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[n] = o);
                            });
                    }
                    return e;
                })(
                    {
                        className: p.root,
                        'aria-label': _.NW.string(_.t.shUONj),
                        size: i.CgR.DYNAMIC
                    },
                    b
                )),
                (t = t =
                    {
                        children: (0, o.jsx)(s.Z, {
                            context: u,
                            entrypoint: l._b.VOICE
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
        })
    );
});
