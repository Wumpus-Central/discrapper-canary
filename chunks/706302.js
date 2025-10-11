n.d(t, { Z: () => r });
var i = n(812236),
    l = n(989573);
function r(e) {
    let { context: t, application: n, botUserId: r } = e,
        a = (0, i.ms)({
            context: t,
            applicationId: n.id,
            botUserId: r,
        }),
        o = (0, l.Z)("channel" === t.type ? t.channel : void 0);
    return a && null != r && !o;
}
