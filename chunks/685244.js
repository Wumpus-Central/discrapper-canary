n.d(t, { Z: () => f }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(498607),
    o = n.n(i),
    a = n(358458),
    s = n(748780),
    c = n(692547),
    u = n(481060),
    d = n(110924);
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
let b = {
        duration: 100,
        easing: s.Z.Easing.inOut(s.Z.Easing.back()),
        clamp: !0,
    },
    p = {
        duration: 2000,
        easing: s.Z.Easing.quad,
        clamp: !0,
    };
function f(e) {
    var { value: t, children: n, equalityFn: i = o(), style: s } = e,
        f = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["value", "children", "equalityFn", "style"]);
    let h = (0, d.Z)(t),
        [{ spring: g }, j] = (0, u.q_F)(() => ({ spring: 0 }), "animate-always"),
        x = (0, u.dQu)(c.Z.colors.BACKGROUND_BASE_LOW).hex(),
        v = (0, u.dQu)(c.Z.colors.CONTROL_BRAND_FOREGROUND).hex(),
        y = l.useCallback(() => {
            j({
                spring: 1,
                config: b,
            }),
                j({
                    spring: 0,
                    config: p,
                    delay: 300,
                });
        }, [j]);
    l.useEffect(() => {
        null != t && null != h && (i(t, h) || y());
    }, [y, t, h, i]);
    let O =
            null == g
                ? void 0
                : g.to({
                      range: [0, 1],
                      output: ["".concat(x, "00"), "".concat(v, "27")],
                  }),
        H = null != s ? m(C({}, s), { backgroundColor: O }) : { backgroundColor: O };
    return (0, r.jsx)(
        a.animated.tr,
        m(C({}, f), {
            style: H,
            children: n,
        }),
    );
}
