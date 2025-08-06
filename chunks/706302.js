n.d(t, { Z: () => o });
var r = n(812236),
    i = n(989573);
function o(e) {
    let { context: t, application: n, botUserId: o } = e,
        a = (0, r.ms)({
            context: t,
            applicationId: n.id,
            botUserId: o,
        }),
        s = (0, i.Z)("channel" === t.type ? t.channel : void 0);
    return a && null != o && !s;
}
