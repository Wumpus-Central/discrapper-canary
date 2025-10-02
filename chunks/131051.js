n.d(t, { Z: () => c }), n(388685);
var i = n(647438),
    r = n(991346),
    l = n(839469),
    u = n(509613),
    s = n(904849),
    a = n(87432),
    o = n(178520);
function c(e, t) {
    let n = i.useMemo(() => (0, u.Ql)(e), [e]),
        c = (0, r.Pt)(),
        { searchResults: d } = (0, l.F)(),
        E = new Set();
    for (let e of d) {
        let t = e;
        for (; null != t; ) {
            var O;
            let e = null == (O = c[t]) ? void 0 : O.parent;
            if (null == e) {
                E.add(t);
                break;
            }
            t = e;
        }
    }
    let T = (0, o.Z)(n, null != t ? t : "", E),
        [f, y] = i.useState(T),
        g = (function (e, t) {
            if (e.size !== t.size) return !0;
            for (let n of e) if (!t.has(n)) return !0;
            return !1;
        })(f, T);
    return (
        i.useEffect(() => {
            g && y(T);
        }, [g, T]),
        i.useMemo(() => {
            var e, t, i;
            let r = new s.Z();
            return {
                node:
                    null != (e = (0, a.Z)(n, f, r))
                        ? e
                        : ((t = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      i = Object.keys(n);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (i = i.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          }),
                                      )),
                                      i.forEach(function (t) {
                                          var i;
                                          (i = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: i,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[t] = i);
                                      });
                              }
                              return e;
                          })({}, n)),
                          (i = i = { layout: [] }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var i = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, i);
                                    }
                                    return n;
                                })(Object(i)).forEach(function (e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                                }),
                          t),
                directory: r,
            };
        }, [f, n])
    );
}
