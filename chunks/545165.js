n.d(t, {
    SU: () => i,
    sR: () => s
}),
    n(47120),
    n(653041);
var r = n(442837),
    l = n(357156);
n(427679);
var a = n(984933);
function i(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.ZP];
    if (null == t) return [];
    let r = n.getChannels(e)[a.Zb],
        i = [];
    for (let { channel: e } of r) {
        let { canCreateGuildEvent: n, canManageAllEvents: r } = (0, l.Gw)(e),
            a = n || r;
        e.type === t && (e.isGuildVoice() && a ? i.push(e) : e.isGuildStageVoice() && a && i.push(e));
    }
    return i;
}
function s(e, t) {
    return (0, r.Wu)([a.ZP], () => i(e, t, [a.ZP]), [e, t]);
}
n(496675), n(85243);
