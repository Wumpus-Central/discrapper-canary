n.d(t, {
    A: () => f,
});
var r = n(627968),
    l = n(397927),
    a = n(790381),
    i = n(266080),
    s = n(121090),
    o = n(18282),
    c = n(424994),
    u = n(985018);
let d = {
        [c.a4.SPOTIFY]: s.A,
        [c.a4.CRUNCHYROLL]: l.kwD,
        [c.a4.XBOX]: i.A,
        [c.a4.PLAYSTATION]: a.A,
    },
    m = {
        [c.a4.SPOTIFY]: () => u.intl.string(u.t["0ZB/XE"]),
        [c.a4.CRUNCHYROLL]: () => u.intl.string(u.t.jdJYXw),
        [c.a4.XBOX]: () => u.intl.string(u.t.Nfvo72),
        [c.a4.PLAYSTATION]: () => u.intl.string(u.t.fFl4jo),
    };

function f(e) {
    var t, n, l;
    let { type: a, "aria-label": i } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                a = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                return a;
            }
            if (
                ((a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        a = Object.getOwnPropertyNames(e);
                    for (r = 0; r < a.length; r++)
                        (n = a[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
            return a;
        })(e, ["type", "aria-label"]),
        c = d[a];
    if (null == c) return null;
    let u = null != i ? i : null == (t = m[a]) ? void 0 : t.call(m);
    return (0, r.jsx)(
        o.A,
        ((n = (function (e) {
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
        })(
            {
                Icon: c,
            },
            s,
        )),
        (l = l =
            {
                "aria-label": u,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(l)).forEach(function (e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
              }),
        n),
    );
}
