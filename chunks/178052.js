n.d(t, {
    A: () => b,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(33851),
    o = n.n(i),
    a = n(92674),
    s = n(615300),
    c = n(827734),
    u = n(397927),
    d = n(475743);

function C(e) {
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

function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = {
        duration: 100,
        easing: s.A.Easing.inOut(s.A.Easing.back()),
        clamp: !0,
    },
    f = {
        duration: 2e3,
        easing: s.A.Easing.quad,
        clamp: !0,
    };

function b(e) {
    let { value: t, children: n, equalityFn: i = o(), style: s } = e,
        b = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(e, ["value", "children", "equalityFn", "style"]),
        j = (0, d.A)(t),
        [{ spring: g }, h] = (0, u.zhh)(
            () => ({
                spring: 0,
            }),
            "animate-always",
        ),
        x = (0, u.rdh)(c.A.colors.BACKGROUND_BASE_LOW).hex(),
        y = (0, u.rdh)(c.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
        O = l.useCallback(() => {
            h({
                spring: 1,
                config: p,
            }),
                h({
                    spring: 0,
                    config: f,
                    delay: 300,
                });
        }, [h]);
    l.useEffect(() => {
        null == t || null == j || i(t, j) || O();
    }, [O, t, j, i]);
    let v =
            null == g
                ? void 0
                : g.to({
                      range: [0, 1],
                      output: ["".concat(x, "00"), "".concat(y, "27")],
                  }),
        _ =
            null != s
                ? m(C({}, s), {
                      backgroundColor: v,
                  })
                : {
                      backgroundColor: v,
                  };
    return (0, r.jsx)(
        a.animated.tr,
        m(C({}, b), {
            style: _,
            children: n,
        }),
    );
}
