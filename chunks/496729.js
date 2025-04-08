n.d(t, {
    Z: () => u,
    s: () => d
});
var r = n(200651),
    a = n(704215),
    l = n(481060),
    i = n(570140),
    o = n(605236),
    s = n(592125),
    c = n(305587);
function d(e) {
    let { channelId: t, location: n } = e,
        r = s.Z.getChannel(t),
        l = (0, o.un)(a.z.USER_DM_MUTE_FEEDBACK);
    null != r &&
        r.isDM() &&
        !l &&
        (0, c.Xs)(n) &&
        i.Z.dispatch({
            type: 'USER_DM_MUTE_SHOW_FEEDBACK',
            channel: r
        });
}
function u() {
    (0, l.ZDy)(async () => {
        let { default: e } = await n.e('87995').then(n.bind(n, 180970));
        return (t) =>
            (0, r.jsx)(
                e,
                (function (e) {
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
                })({}, t)
            );
    });
}
