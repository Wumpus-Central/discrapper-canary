n.d(t, {
    Ay: () => a,
    PN: () => s,
    Sm: () => i,
}),
    n(896048),
    n(321073);
var l,
    r = n(64700),
    i = (((l = {})[(l.Trick = 0)] = "Trick"), (l[(l.Treat = 1)] = "Treat"), l);
let s = 2;

function a(e, t, n) {
    let l = r.useRef(Math.random());
    return r.useMemo(() => {
        if (null == e || 0 === e.length) return null;
        if (null == t || 0 === t.length) {
            let t = null != n && e.some((e) => e.skuId === n.skuId) ? n : e[0];
            return {
                defaultCategory: Math.floor(l.current * s),
                defaultHighlightedReward: t,
            };
        }
        let r = [],
            i = new Map(),
            a = new Map();
        for (let n of t)
            if (n.variants.length >= s)
                for (let t = 0; t < s; t++) {
                    let l = t,
                        s = n.variants[t];
                    e.some((e) => e.skuId === s.skuId) &&
                        (a.set(s.skuId, l),
                        i.has(l) ||
                            (r.push(l),
                            i.set(
                                l,
                                (function (e, t) {
                                    return (
                                        (t = null != t ? t : {}),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var l = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, l);
                                                  }
                                                  return n;
                                              })(Object(t)).forEach(function (n) {
                                                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                              }),
                                        e
                                    );
                                })(
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                l = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (l = l.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    }),
                                                )),
                                                l.forEach(function (t) {
                                                    var l;
                                                    (l = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: l,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0,
                                                              })
                                                            : (e[t] = l);
                                                });
                                        }
                                        return e;
                                    })({}, s),
                                    {
                                        name: n.name,
                                    },
                                ),
                            )));
                }
        if (0 === r.length) return null;
        if (null != n) {
            let e = a.get(n.skuId);
            if (null != e)
                return {
                    defaultCategory: e,
                    defaultHighlightedReward: n,
                };
        }
        let o = r[Math.floor(l.current * r.length)];
        return {
            defaultCategory: o,
            defaultHighlightedReward: i.get(o),
        };
    }, [e, t, n]);
}
