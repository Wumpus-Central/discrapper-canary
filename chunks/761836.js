n.d(t, { kh: () => a, pW: () => r }), n(321073);
var l = n(311907),
    i = n(931991);
n(446600);
var s = n(808728);
function a(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.Ay];
    if (null == t) return [];
    let l = n.getChannels(e)[s.vM],
        a = [];
    for (let { channel: e } of l) {
        let { canCreateGuildEvent: n, canManageAllEvents: l } = (0, i.ie)(e),
            s = n || l;
        e.type === t && (e.isGuildVoice() && s ? a.push(e) : e.isGuildStageVoice() && s && a.push(e));
    }
    return a;
}
function r(e, t) {
    return (0, l.yK)([s.Ay], () => a(e, t, [s.Ay]), [e, t]);
}
n(576705), n(219935);
