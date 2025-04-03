n.d(t, {
    Z: () => d,
    s: () => c
});
var i = n(200651),
    r = n(704215),
    a = n(481060),
    l = n(570140),
    o = n(605236),
    u = n(592125),
    s = n(305587);
function c(e) {
    let { channelId: t, location: n } = e,
        i = u.Z.getChannel(t),
        a = (0, o.un)(r.z.USER_DM_MUTE_FEEDBACK);
    null != i &&
        i.isDM() &&
        !a &&
        (0, s.Xs)(n) &&
        l.Z.dispatch({
            type: 'USER_DM_MUTE_SHOW_FEEDBACK',
            channel: i
        });
}
function d() {
    (0, a.ZDy)(async () => {
        let { default: e } = await n.e('87995').then(n.bind(n, 180970));
        return (t) =>
            (0, i.jsx)(
                e,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, t)
            );
    });
}
