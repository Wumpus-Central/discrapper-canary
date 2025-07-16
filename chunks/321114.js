n.d(t, { c: () => o });
var r = n(544891),
    i = n(570140),
    s = n(594174),
    l = n(981631);
async function o(e, t) {
    try {
        let n = await r.tn.put({
            url: l.ANM.USER_SET_GUILD_IDENTITY,
            body: {
                identity_guild_id: e,
                identity_enabled: t
            },
            rejectWithError: !1
        });
        return (
            n.ok &&
                i.Z.dispatch({
                    type: 'CURRENT_USER_UPDATE',
                    user: (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    ((r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r));
                                }));
                        }
                        return e;
                    })({}, s.default.getCurrentUser(), n.body)
                }),
            n
        );
    } catch (e) {
        return e;
    }
}
