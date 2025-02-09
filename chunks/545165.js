t.d(n, {
    SU: () => s,
    sR: () => a
}),
    t(47120),
    t(653041);
var l = t(442837),
    i = t(357156);
t(427679);
var r = t(984933);
function s(e, n) {
    let [t] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.ZP];
    if (null == n) return [];
    let l = t.getChannels(e)[r.Zb],
        s = [];
    for (let { channel: e } of l) {
        let { canCreateGuildEvent: t, canManageAllEvents: l } = (0, i.Gw)(e),
            r = t || l;
        e.type === n && (e.isGuildVoice() && r ? s.push(e) : e.isGuildStageVoice() && r && s.push(e));
    }
    return s;
}
function a(e, n) {
    return (0, l.Wu)([r.ZP], () => s(e, n, [r.ZP]), [e, n]);
}
t(496675), t(85243);
