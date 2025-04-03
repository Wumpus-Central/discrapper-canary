n.d(t, { Z: () => f }), n(47120);
var r = n(200651),
    l = n(192379),
    o = n(498607),
    a = n.n(o),
    i = n(642128),
    s = n(748780),
    c = n(692547),
    u = n(481060),
    d = n(110924);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
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
        clamp: !0
    },
    p = {
        duration: 2000,
        easing: s.Z.Easing.quad,
        clamp: !0
    };
function f(e) {
    var { value: t, children: n, equalityFn: o = a(), style: s } = e,
        f = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['value', 'children', 'equalityFn', 'style']);
    let h = (0, d.Z)(t),
        [{ spring: j }, g] = (0, u.q_F)(() => ({ spring: 0 }), 'animate-always'),
        x = (0, u.dQu)(c.Z.colors.BACKGROUND_PRIMARY).hex(),
        y = (0, u.dQu)(c.Z.colors.CONTROL_BRAND_FOREGROUND).hex(),
        v = l.useCallback(() => {
            g({
                spring: 1,
                config: b
            }),
                g({
                    spring: 0,
                    config: p,
                    delay: 300
                });
        }, [g]);
    l.useEffect(() => {
        null != t && null != h && (o(t, h) || v());
    }, [v, t, h, o]);
    let O =
            null == j
                ? void 0
                : j.to({
                      range: [0, 1],
                      output: [''.concat(x, '00'), ''.concat(y, '27')]
                  }),
        N = null != s ? m(C({}, s), { backgroundColor: O }) : { backgroundColor: O };
    return (0, r.jsx)(
        i.animated.tr,
        m(C({}, f), {
            style: N,
            children: n
        })
    );
}
