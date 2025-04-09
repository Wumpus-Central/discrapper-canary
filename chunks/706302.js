n.d(t, { Z: () => o });
var i = n(774226),
    r = n(783097),
    l = n(812236),
    a = n(989573);
function o(e) {
    let { context: t, application: n, botUserId: o } = e,
        c = (0, l.ms)({
            context: t,
            applicationId: n.id,
            botUserId: o
        }),
        s = (0, r.BQ)(n) && (0, i.Kb)(n),
        u = (0, a.Z)({ context: t }),
        d = 'contextless' === t.type;
    return c && null != o && !u && !d && !s;
}
