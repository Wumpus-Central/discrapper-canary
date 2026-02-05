"use strict";
n.d(t, { CQ: () => m, CT: () => h, eo: () => g, vz: () => p, zP: () => E }), n(321073);
var r = n(311907),
    i = n(323073),
    a = n(890615),
    s = n(643501),
    o = n(95701);
n(808728);
var l = n(71393),
    u = n(576705),
    c = n(977997),
    d = n(147036),
    _ = n(652215),
    f = n(985018);
function p(e, t, n) {
    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (e.isPrivate()) return !0;
    let i = t.getGuild(e.getGuildId()),
        s = i?.maxStageVideoChannelUsers ?? 0;
    return (
        (!e.isGuildStageVoice() || !(s <= 0)) &&
        (!r || !!(0, a.A)(e, n)) &&
        !!n.can(_.xBc.STREAM, e) &&
        null != i &&
        i.afkChannelId !== e.id
    );
}
function h(e) {
    switch (e) {
        case 0:
            return f.intl.string(f.t["1i3tSY"]);
        case 1:
            return f.intl.string(f.t.elyVbv);
        case 2:
            return f.intl.string(f.t.pgUTZC);
        case 3:
            return f.intl.string(f.t.b5FqhF);
        default:
            return f.intl.string(f.t["7Xq/nV"]);
    }
}
function m(e) {
    switch (e) {
        case 0:
            return `${f.intl.string(f.t["7Xq/nV"])}: ${f.intl.string(f.t["1i3tSY"])}`;
        case 1:
            return `${f.intl.string(f.t["7Xq/nV"])}: ${f.intl.string(f.t.elyVbv)}`;
        case 2:
            return `${f.intl.string(f.t["7Xq/nV"])}: ${f.intl.string(f.t.pgUTZC)}`;
        case 3:
            return `${f.intl.string(f.t["7Xq/nV"])}: ${f.intl.string(f.t.b5FqhF)}`;
        default:
            return `${f.intl.string(f.t["7Xq/nV"])}: ${f.intl.string(f.t["9C444m"])}`;
    }
}
function g(e, t, n, r, s) {
    let l;
    if (null == e) return [!1, 2];
    let u = t.isInChannel(e.id),
        c = e instanceof o.YB && (0, d.Pd)(e, t, n),
        _ = (0, a.A)(e, r),
        f = null != s.getAwaitingRemoteSessionInfo() || null != s.getRemoteSessionId(),
        p = (0, i.r9)() && (0, i.UK)(e.id);
    f ? (l = 0) : p ? (l = 3) : _ || u ? c && !u && (l = 1) : (l = 2);
    let h = _ && !c;
    return [!__OVERLAY__ && !f && !p && (u || h), l];
}
function E(e) {
    return (0, r.yK)([c.A, l.A, u.A, s.default], () => g(e, c.A, l.A, u.A, s.default));
}
