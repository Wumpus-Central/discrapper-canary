"use strict";
n.d(t, { CQ: () => E, CT: () => p, eo: () => m, vz: () => f, zP: () => g }), n(321073);
var i = n(17928),
    r = n(323073),
    s = n(890615),
    a = n(643501),
    o = n(95701);
n(808728);
var l = n(71393),
    u = n(576705),
    c = n(977997),
    d = n(871237),
    _ = n(652215),
    h = n(375708);
function f(e, t, n) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (e.isPrivate()) return !0;
    let r = t.getGuild(e.getGuildId()),
        a = r?.maxStageVideoChannelUsers ?? 0;
    return (
        (!e.isGuildStageVoice() || !(a <= 0)) &&
        (!i || !!(0, s.A)(e, n)) &&
        !!n.can(_.xBc.STREAM, e) &&
        null != r &&
        r.afkChannelId !== e.id
    );
}
function p(e) {
    switch (e) {
        case 0:
            return h.intl.string(h.t["1i3tSY"]);
        case 1:
            return h.intl.string(h.t.elyVbv);
        case 2:
            return h.intl.string(h.t.pgUTZC);
        case 3:
            return h.intl.string(h.t.b5FqhF);
        default:
            return h.intl.string(h.t["7Xq/nV"]);
    }
}
function E(e) {
    switch (e) {
        case 0:
            return `${h.intl.string(h.t["7Xq/nV"])}: ${h.intl.string(h.t["1i3tSY"])}`;
        case 1:
            return `${h.intl.string(h.t["7Xq/nV"])}: ${h.intl.string(h.t.elyVbv)}`;
        case 2:
            return `${h.intl.string(h.t["7Xq/nV"])}: ${h.intl.string(h.t.pgUTZC)}`;
        case 3:
            return `${h.intl.string(h.t["7Xq/nV"])}: ${h.intl.string(h.t.b5FqhF)}`;
        default:
            return `${h.intl.string(h.t["7Xq/nV"])}: ${h.intl.string(h.t["9C444m"])}`;
    }
}
function m(e, t, n, i, a) {
    let l;
    if (null == e) return [!1, 2];
    let u = t.isInChannel(e.id),
        c = e instanceof o.YB && (0, d.Pd)(e, t, n),
        _ = (0, s.A)(e, i),
        h = null != a.getAwaitingRemoteSessionInfo() || null != a.getRemoteSessionId(),
        f = (0, r.r9)() && (0, r.UK)(e.id);
    return (
        h ? (l = 0) : f ? (l = 3) : _ || u ? c && !u && (l = 1) : (l = 2),
        [!__OVERLAY__ && !h && !f && (u || (_ && !c)), l]
    );
}
function g(e) {
    return (0, i.yK)([c.A, l.A, u.A, a.default], () => m(e, c.A, l.A, u.A, a.default));
}
