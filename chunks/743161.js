t.d(n, { default: () => b });
var o = t(200651),
    r = t(192379),
    c = t(442837),
    a = t(481060),
    i = t(541099),
    l = t(827498),
    _ = t(421591),
    d = t(314734),
    s = t(388032),
    p = t(461149);
let b = r.memo(function (e) {
    var n,
        t,
        { context: b } = e,
        u = (function (e, n) {
            if (null == e) return {};
            var t,
                o,
                r = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        o,
                        r = {},
                        c = Object.keys(e);
                    for (o = 0; o < c.length; o++) (t = c[o]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                    return r;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (o = 0; o < c.length; o++) (t = c[o]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
            }
            return r;
        })(e, ['context']);
    let f = (0, c.e7)([i.Z], () => i.Z.shouldShowModal());
    return (
        r.useEffect(() => {
            f || (0, a.Fvk)(d.e9);
        }),
        (0, o.jsx)('span', {
            style: d.u$,
            children: (0, o.jsx)(
                a.Y0X,
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
                        'aria-label': s.NW.string(s.t.shUONj),
                        size: a.CgR.DYNAMIC
                    },
                    u
                )),
                (t = t =
                    {
                        children: (0, o.jsx)(_.Z, {
                            context: b,
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
