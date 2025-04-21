n.d(t, {
    SU: () => a,
    sR: () => s
}),
    n(388685),
    n(539854);
var l = n(442837),
    r = n(357156);
n(427679);
var i = n(984933);
function a(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.ZP];
    if (null == t) return [];
    let l = n.getChannels(e)[i.Zb],
        a = [];
    for (let { channel: e } of l) {
        let { canCreateGuildEvent: n, canManageAllEvents: l } = (0, r.Gw)(e),
            i = n || l;
        e.type === t && (e.isGuildVoice() && i ? a.push(e) : e.isGuildStageVoice() && i && a.push(e));
    }
    return a;
}
function s(e, t) {
    return (0, l.Wu)([i.ZP], () => a(e, t, [i.ZP]), [e, t]);
}
n(496675), n(85243);
