n.d(e, { Z: () => c }), n(388685);
var i = n(473749),
    l = n(991346),
    u = n(839469),
    r = n(509613),
    s = n(904849),
    a = n(87432),
    o = n(178520);
function c(t, e) {
    let n = i.useMemo(() => (0, r.Ql)(t), [t]),
        c = (0, l.Pt)(),
        { searchResults: E } = (0, u.F)(),
        S = new Set();
    for (let t of E) {
        let e = t;
        for (; null != e; ) {
            var T;
            let t = null == (T = c[e]) ? void 0 : T.parent;
            if (null == t) {
                S.add(e);
                break;
            }
            e = t;
        }
    }
    let d = (0, o.Z)(n, null != e ? e : "", S),
        [I, O] = i.useState(d),
        g = (function (t, e) {
            if (t.size !== e.size) return !0;
            for (let n of t) if (!e.has(n)) return !0;
            return !1;
        })(I, d);
    return (
        i.useEffect(() => {
            g && O(d);
        }, [g, d]),
        i.useMemo(() => {
            var t, e, i;
            let l = new s.Z();
            return {
                node:
                    null != (t = (0, a.Z)(n, I, l))
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
                directory: l,
            };
        }, [I, n])
    );
}
