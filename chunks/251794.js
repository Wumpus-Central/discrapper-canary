t.d(e, {
    q: () => s,
    z: () => i
});
var n = t(255367);
t(73800);
var r = t(481060);
function l(A) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(t, A).enumerable;
                })
            )),
            n.forEach(function (e) {
                var n;
                ((n = t[e]),
                    e in A
                        ? Object.defineProperty(A, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (A[e] = n));
            }));
    }
    return A;
}
function i(A) {
    let { guildId: e, userId: i, anaylticsLocations: s, modReportId: a } = A;
    (0, r.ZDy)(async () => {
        let { default: A } = await t.e('72920').then(t.bind(t, 109730));
        return (t) =>
            (0, n.jsx)(
                A,
                l(
                    {
                        guildId: e,
                        userId: i,
                        anaylticsLocations: s,
                        modReportId: a
                    },
                    t
                )
            );
    });
}
function s(A) {
    let { guildId: e, userId: i, anaylticsLocations: s } = A;
    (0, r.ZDy)(async () => {
        let { default: A } = await t.e('76233').then(t.bind(t, 171494));
        return (t) =>
            (0, n.jsx)(
                A,
                l(
                    {
                        guildId: e,
                        userId: i,
                        anaylticsLocations: s
                    },
                    t
                )
            );
    });
}
