n.d(t, { A: () => s }), n(896048);
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(994500),
    o = n(985018);
function s(e) {
    let { user: t, onAction: s, appContext: d } = e,
        u = t.id,
        [c, A] = (0, i.yK)([a.A], () => {
            var e;
            return [a.A.isFriend(u), null != (e = a.A.getNickname(u)) ? e : null];
        }, [u]);
    if (!c) return null;
    let b = null == A ? o.intl.string(o.t.BGYkaH) : o.intl.string(o.t["8pOYUE"]);
    return (0, l.jsx)(r.Drp, {
        id: null == A ? "add-friend-nickname" : "edit-friend-nickname",
        label: b,
        action: () => {
            null == s || s(),
                (0, r.mMO)(
                    async () => {
                        let { default: e } = await n.e("59139").then(n.bind(n, 609422));
                        return (n) =>
                            (0, l.jsx)(
                                e,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            l = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (l = l.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            l.forEach(function (t) {
                                                var l;
                                                (l = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: l,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = l);
                                            });
                                    }
                                    return e;
                                })(
                                    {
                                        user: t,
                                        nickname: A,
                                    },
                                    n,
                                ),
                            );
                    },
                    { contextKey: null != d ? (0, r.TId)(d) : void 0 },
                );
        },
    });
}
