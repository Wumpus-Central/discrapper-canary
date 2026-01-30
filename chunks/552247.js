function r(e, t, n) {
    let r = [...n].sort().join(",");
    return "".concat(e, ":").concat(t, ":").concat(r);
}
n.d(t, {
    _k: () => o,
    nA: () => i,
}),
    n(896048),
    n(638769);
let l = (0, n(353640).v)((e) => ({
    entries: {},
    setPreview(t, n, l, i) {
        let o = r(t, n, l);
        e((e) => {
            var t, n;
            let r =
                    ((t = (function (e) {
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
                    })({}, e.entries)),
                    (n = n =
                        {
                            [o]: {
                                count: i,
                                cachedAt: Date.now(),
                            },
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t),
                l = Date.now(),
                a = {};
            for (let [e, t] of Object.entries(r)) l - t.cachedAt < 864e5 && (a[e] = t);
            return {
                entries: a,
            };
        });
    },
    clear() {
        e({
            entries: {},
        });
    },
}));

function i(e, t, n, r) {
    l.getState().setPreview(e, t, n, r);
}

function o(e, t, n) {
    return l((l) => {
        let i = r(e, t, n),
            o = l.entries[i];
        return null != o && Date.now() - o.cachedAt < 864e5 ? o.count : null;
    });
}
