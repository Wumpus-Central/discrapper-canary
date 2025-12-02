n.d(e, { Z: () => c }), n(388685);
var i = n(473749),
    r = n(991346),
    l = n(839469),
    s = n(509613),
    u = n(904849),
    a = n(87432),
    o = n(178520);
function c(t, e) {
    let n = i.useMemo(() => (0, s.Ql)(t), [t]),
        c = (0, r.Pt)(),
        { searchResults: d } = (0, l.F)(),
        E = new Set();
    for (let t of d) {
        let e = t;
        for (; null != e; ) {
            var S;
            let t = null == (S = c[e]) ? void 0 : S.parent;
            if (null == t) {
                E.add(e);
                break;
            }
            e = t;
        }
    }
    let T = (0, o.Z)(n, null != e ? e : "", E),
        [I, g] = i.useState(T),
        O = (function (t, e) {
            if (t.size !== e.size) return !0;
            for (let n of t) if (!e.has(n)) return !0;
            return !1;
        })(I, T);
    return (
        i.useEffect(() => {
            O && g(T);
        }, [O, T]),
        i.useMemo(() => {
            var t, e, i;
            let r = new u.Z();
            return {
                node:
                    null != (t = (0, a.Z)(n, I, r))
                        ? t
                        : ((e = (function (t) {
                              for (var e = 1; e < arguments.length; e++) {
                                  var n = null != arguments[e] ? arguments[e] : {},
                                      i = Object.keys(n);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (i = i.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (t) {
                                              return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                          }),
                                      )),
                                      i.forEach(function (e) {
                                          var i;
                                          (i = n[e]),
                                              e in t
                                                  ? Object.defineProperty(t, e, {
                                                        value: i,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (t[e] = i);
                                      });
                              }
                              return t;
                          })({}, n)),
                          (i = i = { layout: [] }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
                              : (function (t, e) {
                                    var n = Object.keys(t);
                                    if (Object.getOwnPropertySymbols) {
                                        var i = Object.getOwnPropertySymbols(t);
                                        n.push.apply(n, i);
                                    }
                                    return n;
                                })(Object(i)).forEach(function (t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                                }),
                          e),
                directory: r,
            };
        }, [I, n])
    );
}
