n.d(t, { Z: () => a });
var r = n(192379),
    i = n(584825),
    s = n(14263);
function a(e, t) {
    let n = (0, i.qi)(e),
        a = (0, s.Z)(e);
    return r.useMemo(
        () =>
            n.map((e) => {
                var n, r, i;
                let s = null == e ? void 0 : e.role_id;
                return (
                    (r = (function (e) {
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
                    })({}, null != (n = null == t ? void 0 : t.ppgs[e.id]) ? n : {})),
                    (i = i =
                        {
                            key: e.id,
                            subscriptionListing: e,
                            roleMemberCount: null == s || null == a ? void 0 : a[s]
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    r
                );
            }),
        [n, null == t ? void 0 : t.ppgs, a]
    );
}
