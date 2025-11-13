n.d(t, {
    KN: () => a,
    ZP: () => o,
    mo: () => i,
}),
    n(388685),
    n(539854);
var r,
    l = n(647438),
    a = (((r = {})[(r.Trick = 0)] = "Trick"), (r[(r.Treat = 1)] = "Treat"), r);
let i = 2;
function o(e, t, n) {
    let r = l.useRef(Math.random());
    return l.useMemo(() => {
        if (null == e || 0 === e.length) return null;
        if (null == t || 0 === t.length) {
            let t = null != n && e.some((e) => e.skuId === n.skuId) ? n : e[0];
            return {
                defaultCategory: Math.floor(r.current * i),
                defaultHighlightedReward: t,
            };
        }
        let l = [],
            a = new Map(),
            o = new Map();
        for (let n of t)
            if (n.variants.length >= i)
                for (let t = 0; t < i; t++) {
                    let r = t,
                        i = n.variants[t];
                    e.some((e) => e.skuId === i.skuId) &&
                        (o.set(i.skuId, r),
                        a.has(r) ||
                            (l.push(r),
                            a.set(
                                r,
                                (function (e, t) {
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
                                })(
                                    (function (e) {
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
                                    })({}, i),
                                    { name: n.name },
                                ),
                            )));
                }
        if (0 === l.length) return null;
        if (null != n) {
            let e = o.get(n.skuId);
            if (null != e)
                return {
                    defaultCategory: e,
                    defaultHighlightedReward: n,
                };
        }
        let s = l[Math.floor(r.current * l.length)];
        return {
            defaultCategory: s,
            defaultHighlightedReward: a.get(s),
        };
    }, [e, t, n]);
}
