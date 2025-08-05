n.d(t, { Z: () => r });
var l = n(812236),
    i = n(989573);
function r(e) {
    let { context: t, application: n, botUserId: r } = e,
        a = (0, l.ms)({
            context: t,
            applicationId: n.id,
            botUserId: r
        }),
        o = (0, i.Z)('channel' === t.type ? t.channel : void 0);
    return a && null != r && !o;
}
