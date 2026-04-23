l.d(t, { kh: () => a, pW: () => r }), l(321073);
var n = l(311907),
    i = l(931991);
l(446600);
var s = l(808728);
function a(e, t) {
    let [l] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.Ay];
    if (null == t) return [];
    let n = l.getChannels(e)[s.vM],
        a = [];
    for (let { channel: e } of n) {
        let { canCreateGuildEvent: l, canManageAllEvents: n } = (0, i.ie)(e),
            s = l || n;
        e.type === t && (e.isGuildVoice() && s ? a.push(e) : e.isGuildStageVoice() && s && a.push(e));
    }
    return a;
}
function r(e, t) {
    return (0, n.yK)([s.Ay], () => a(e, t, [s.Ay]), [e, t]);
}
l(576705), l(219935);
