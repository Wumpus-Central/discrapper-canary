(n.d(t, { OT: () => f, eo: () => I, vz: () => h, zP: () => p }), n(321073));
var i,
    r = n(17928),
    a = n(323073),
    s = n(597306),
    l = n(890615),
    o = n(643501),
    d = n(95701);
n(808728);
var c = n(71393),
    u = n(576705),
    _ = n(977997),
    E = n(147036),
    A = n(652215);
function h(e, t, n) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (e.isPrivate()) return !0;
    let r = t.getGuild(e.getGuildId()),
        a = r?.maxStageVideoChannelUsers ?? 0;
    return (
        (!e.isGuildStageVoice() || !(a <= 0)) &&
        (!i || !!(0, l.A)(e, n)) &&
        !!n.can(A.xBc.STREAM, e) &&
        null != r &&
        r.afkChannelId !== e.id
    );
}
var f =
    (((i = {})[(i.REMOTE_MODE = 0)] = "REMOTE_MODE"),
    (i[(i.CHANNEL_FULL = 1)] = "CHANNEL_FULL"),
    (i[(i.NO_PERMISSION = 2)] = "NO_PERMISSION"),
    (i[(i.AGE_RESTRICTED = 3)] = "AGE_RESTRICTED"),
    i);
function I(e, t, n, i, r) {
    let o;
    if (null == e) return [!1, 2];
    let c = t.isInChannel(e.id),
        u = e instanceof d.YB && (0, E.Pd)(e, t, n),
        _ = (0, l.A)(e, i),
        A = null != r.getAwaitingRemoteSessionInfo() || null != r.getRemoteSessionId(),
        h = (0, s.r)() && (0, a.UK)(e.id);
    return (
        A ? (o = 0) : h ? (o = 3) : _ || c ? u && !c && (o = 1) : (o = 2),
        [!__OVERLAY__ && !A && !h && (c || (_ && !u)), o]
    );
}
function p(e) {
    return (0, r.yK)([_.A, c.A, u.A, o.default], () => I(e, _.A, c.A, u.A, o.default));
}
