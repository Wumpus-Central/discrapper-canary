n.d(t, { Z: () => l });
var i = n(812236),
    r = n(989573);
function l(e) {
    let { context: t, applicationId: n, botUserId: l } = e,
        a = (0, i.ms)({
            context: t,
            applicationId: n,
            botUserId: l
        }),
        o = (0, r.Z)({ context: t }),
        c = 'contextless' === t.type;
    return a && null != l && !o && !c;
}
