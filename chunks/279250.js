"use strict";
n.d(t, { OT: () => h, eo: () => I, vz: () => A, zP: () => f }), n(321073);
var i,
    r = n(17928),
    a = n(323073),
    s = n(890615),
    l = n(643501),
    o = n(95701);
n(808728);
var d = n(71393),
    c = n(576705),
    u = n(977997),
    _ = n(871237),
    E = n(652215);
function A(e, t, n) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (e.isPrivate()) return !0;
    let r = t.getGuild(e.getGuildId()),
        a = r?.maxStageVideoChannelUsers ?? 0;
    return (
        (!e.isGuildStageVoice() || !(a <= 0)) &&
        (!i || !!(0, s.A)(e, n)) &&
        !!n.can(E.xBc.STREAM, e) &&
        null != r &&
        r.afkChannelId !== e.id
    );
}
var h =
    (((i = {})[(i.REMOTE_MODE = 0)] = "REMOTE_MODE"),
    (i[(i.CHANNEL_FULL = 1)] = "CHANNEL_FULL"),
    (i[(i.NO_PERMISSION = 2)] = "NO_PERMISSION"),
    (i[(i.AGE_RESTRICTED = 3)] = "AGE_RESTRICTED"),
    i);
function I(e, t, n, i, r) {
    let l;
    if (null == e) return [!1, 2];
    let d = t.isInChannel(e.id),
        c = e instanceof o.YB && (0, _.Pd)(e, t, n),
        u = (0, s.A)(e, i),
        E = null != r.getAwaitingRemoteSessionInfo() || null != r.getRemoteSessionId(),
        A = (0, a.r9)() && (0, a.UK)(e.id);
    return (
        E ? (l = 0) : A ? (l = 3) : u || d ? c && !d && (l = 1) : (l = 2),
        [!__OVERLAY__ && !E && !A && (d || (u && !c)), l]
    );
}
function f(e) {
    return (0, r.yK)([u.A, d.A, c.A, l.default], () => I(e, u.A, d.A, c.A, l.default));
}
