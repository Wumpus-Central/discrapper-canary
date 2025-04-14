n.d(t, {
    SU: () => a,
    sR: () => s
}),
    n(388685),
    n(539854);
var r = n(442837),
    l = n(357156);
n(427679);
var i = n(984933);
function a(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.ZP];
    if (null == t) return [];
    let r = n.getChannels(e)[i.Zb],
        a = [];
    for (let { channel: e } of r) {
        let { canCreateGuildEvent: n, canManageAllEvents: r } = (0, l.Gw)(e),
            i = n || r;
        e.type === t && (e.isGuildVoice() && i ? a.push(e) : e.isGuildStageVoice() && i && a.push(e));
    }
    return a;
}
function s(e, t) {
    return (0, r.Wu)([i.ZP], () => a(e, t, [i.ZP]), [e, t]);
}
n(496675), n(85243);
