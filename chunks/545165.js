l.d(n, {
    SU: () => r,
    sR: () => s
}),
    l(47120),
    l(653041);
var t = l(442837),
    i = l(357156);
l(427679);
var a = l(984933);
function r(e, n) {
    let [l] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.ZP];
    if (null == n) return [];
    let t = l.getChannels(e)[a.Zb],
        r = [];
    for (let { channel: e } of t) {
        let { canCreateGuildEvent: l, canManageAllEvents: t } = (0, i.Gw)(e),
            a = l || t;
        e.type === n && (e.isGuildVoice() && a ? r.push(e) : e.isGuildStageVoice() && a && r.push(e));
    }
    return r;
}
function s(e, n) {
    return (0, t.Wu)([a.ZP], () => r(e, n, [a.ZP]), [e, n]);
}
l(496675), l(85243);
