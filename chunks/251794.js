n.d(t, {
    q: () => o,
    z: () => a
});
var r = n(200651);
n(192379);
var l = n(481060);
function i(e) {
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
}
function a(e) {
    let { guildId: t, userId: a, anaylticsLocations: o } = e;
    (0, l.ZDy)(async () => {
        let { default: e } = await n.e('72920').then(n.bind(n, 109730));
        return (n) =>
            (0, r.jsx)(
                e,
                i(
                    {
                        guildId: t,
                        userId: a,
                        anaylticsLocations: o
                    },
                    n
                )
            );
    });
}
function o(e) {
    let { guildId: t, userId: a, anaylticsLocations: o } = e;
    (0, l.ZDy)(async () => {
        let { default: e } = await n.e('76233').then(n.bind(n, 171494));
        return (n) =>
            (0, r.jsx)(
                e,
                i(
                    {
                        guildId: t,
                        userId: a,
                        anaylticsLocations: o
                    },
                    n
                )
            );
    });
}
