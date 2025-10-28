n.d(t, { Z: () => c }), n(388685);
var r = n(647438),
    i = n(544891),
    l = n(598077),
    a = n(611480),
    s = n(981631);
let o = async (e, t) => {
    let { body: n } = await i.tn.get({
            url: s.ANM.GUILD_STICKER_PACKS(e),
            rejectWithError: !1,
            signal: t,
        }),
        r = n.map((e) => {
            if (null != e.user) {
                var t, n;
                return (
                    (t = (function (e) {
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
                    })({}, e)),
                    (n = n = { user: new l.Z(e.user) }),
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
                    t
                );
            }
            return e;
        });
    return 0 === r.length ? a.jO : r;
};
function c(e) {
    let [t, n] = r.useState({ status: "loading" });
    return (
        r.useEffect(() => {
            let t = new AbortController(),
                r = t.signal;
            return (
                (async () => {
                    try {
                        let i = await o(e, r);
                        n({
                            status: "success",
                            stickers: i,
                        }),
                            (t = null);
                    } catch (e) {
                        n({ status: "error" }), (t = null);
                    }
                })(),
                () => {
                    n({ status: "loading" }), null == t || t.abort();
                }
            );
        }, [e]),
        t
    );
}
