n.d(t, {
    q: () => a,
    z: () => s,
});
var r = n(951288);
n(647438);
var l = n(481060);
function i(e) {
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
}
function s(e) {
    let { guildId: t, userId: s, anaylticsLocations: a, modReportId: o } = e;
    (0, l.ZDy)(async () => {
        let { default: e } = await n.e("72920").then(n.bind(n, 109730));
        return (n) =>
            (0, r.jsx)(
                e,
                i(
                    {
                        guildId: t,
                        userId: s,
                        anaylticsLocations: a,
                        modReportId: o,
                    },
                    n,
                ),
            );
    });
}
function a(e) {
    let { guildId: t, userId: s, anaylticsLocations: a } = e;
    (0, l.ZDy)(async () => {
        let { default: e } = await n.e("76233").then(n.bind(n, 171494));
        return (n) =>
            (0, r.jsx)(
                e,
                i(
                    {
                        guildId: t,
                        userId: s,
                        anaylticsLocations: a,
                    },
                    n,
                ),
            );
    });
}
