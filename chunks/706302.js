n.d(t, { Z: () => o });
var r = n(812236),
    i = n(686440),
    a = n(989573);
function o(e) {
    let { context: t, application: n, botUserId: o } = e,
        s = (0, i.A)(n),
        l = (0, r.ms)({
            context: t,
            applicationId: n.id,
            botUserId: o,
        }),
        c = (0, a.Z)("channel" === t.type ? t.channel : void 0);
    return !s && l && null != o && !c;
}
