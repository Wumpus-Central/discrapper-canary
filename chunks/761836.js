n.d(t, {
    kh: () => s,
    pW: () => a,
}),
    n(896048),
    n(321073);
var l = n(311907),
    r = n(931991);
n(446600);
var i = n(808728);
function s(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.Ay];
    if (null == t) return [];
    let l = n.getChannels(e)[i.vM],
        s = [];
    for (let { channel: e } of l) {
        let { canCreateGuildEvent: n, canManageAllEvents: l } = (0, r.ie)(e),
            i = n || l;
        e.type === t && (e.isGuildVoice() && i ? s.push(e) : e.isGuildStageVoice() && i && s.push(e));
    }
    return s;
}
function a(e, t) {
    return (0, l.yK)([i.Ay], () => s(e, t, [i.Ay]), [e, t]);
}
n(576705), n(219935);
