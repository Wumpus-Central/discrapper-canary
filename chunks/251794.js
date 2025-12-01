n.d(t, {
    q: () => a,
    z: () => o,
});
var l = n(54381);
n(473749);
var r = n(481060);
function i(e) {
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
}
function o(e) {
    let { guildId: t, userId: o, anaylticsLocations: a, modReportId: u } = e;
    (0, r.ZDy)(async () => {
        let { default: e } = await n.e("72920").then(n.bind(n, 109730));
        return (n) =>
            (0, l.jsx)(
                e,
                i(
                    {
                        guildId: t,
                        userId: o,
                        anaylticsLocations: a,
                        modReportId: u,
                    },
                    n,
                ),
            );
    });
}
function a(e) {
    let { guildId: t, userId: o, anaylticsLocations: a } = e;
    (0, r.ZDy)(async () => {
        let { default: e } = await n.e("76233").then(n.bind(n, 171494));
        return (n) =>
            (0, l.jsx)(
                e,
                i(
                    {
                        guildId: t,
                        userId: o,
                        anaylticsLocations: a,
                    },
                    n,
                ),
            );
    });
}
