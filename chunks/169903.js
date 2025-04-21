n.d(t, { Z: () => s });
var r = n(192379),
    i = n(584825),
    l = n(14263);
function s(e, t) {
    let n = (0, i.qi)(e),
        s = (0, l.Z)(e);
    return r.useMemo(
        () =>
            n.map((e) => {
                var n, r, i;
                let l = null == e ? void 0 : e.role_id;
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
                            roleMemberCount: null == l || null == s ? void 0 : s[l]
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
        [n, null == t ? void 0 : t.ppgs, s]
    );
}
