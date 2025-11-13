n.d(t, { Z: () => a });
var r = n(812236),
    i = n(989573);
function a(e) {
    let { context: t, application: n, botUserId: a } = e,
        o = (0, r.ms)({
            context: t,
            applicationId: n.id,
            botUserId: a,
        }),
        s = (0, i.Z)("channel" === t.type ? t.channel : void 0);
    return o && null != a && !s;
}
