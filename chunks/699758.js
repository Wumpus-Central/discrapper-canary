n.d(t, {
    KN: () => l,
    ZP: () => s,
    mo: () => a,
}),
    n(388685),
    n(539854);
var r,
    i = n(647438),
    l = (((r = {})[(r.Trick = 0)] = "Trick"), (r[(r.Treat = 1)] = "Treat"), r);
let a = 2;
function s(e, t, n) {
    let r = i.useRef(Math.random());
    return i.useMemo(() => {
        if (null == e || 0 === e.length) return null;
        if (null == t || 0 === t.length) {
            let t = null != n && e.some((e) => e.skuId === n.skuId) ? n : e[0];
            return {
                defaultCategory: Math.floor(r.current * a),
                defaultHighlightedReward: t,
            };
        }
        let i = [],
            l = new Map(),
            s = new Map();
        for (let n of t)
            if (n.variants.length >= a)
                for (let t = 0; t < a; t++) {
                    let r = t,
                        a = n.variants[t];
                    e.some((e) => e.skuId === a.skuId) &&
                        (s.set(a.skuId, r),
                        l.has(r) ||
                            (i.push(r),
                            l.set(
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
                                    })({}, a),
                                    { name: n.name },
                                ),
                            )));
                }
        if (0 === i.length) return null;
        if (null != n) {
            let e = s.get(n.skuId);
            if (null != e)
                return {
                    defaultCategory: e,
                    defaultHighlightedReward: n,
                };
        }
        let o = i[Math.floor(r.current * i.length)];
        return {
            defaultCategory: o,
            defaultHighlightedReward: l.get(o),
        };
    }, [e, t, n]);
}
