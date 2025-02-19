t.d(n, {
    q: () => a,
    z: () => u
});
var i = t(200651);
t(192379);
var l = t(481060);
function r(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            i.forEach(function (n) {
                var i;
                (i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = i);
            });
    }
    return e;
}
function u(e) {
    let { guildId: n, userId: u, anaylticsLocations: a } = e;
    (0, l.ZDy)(async () => {
        let { default: e } = await t.e('72920').then(t.bind(t, 109730));
        return (t) =>
            (0, i.jsx)(
                e,
                r(
                    {
                        guildId: n,
                        userId: u,
                        anaylticsLocations: a
                    },
                    t
                )
            );
    });
}
function a(e) {
    let { guildId: n, userId: u, anaylticsLocations: a } = e;
    (0, l.ZDy)(async () => {
        let { default: e } = await t.e('76233').then(t.bind(t, 171494));
        return (t) =>
            (0, i.jsx)(
                e,
                r(
                    {
                        guildId: n,
                        userId: u,
                        anaylticsLocations: a
                    },
                    t
                )
            );
    });
}
