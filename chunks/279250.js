"use strict";
n.d(t, { CQ: () => f, CT: () => m, eo: () => g, vz: () => h, zP: () => p }), n(321073);
var i = n(17928),
    r = n(323073),
    s = n(890615),
    a = n(643501),
    o = n(95701);
n(808728);
var l = n(71393),
    d = n(576705),
    _ = n(977997),
    u = n(147036),
    c = n(652215),
    E = n(985018);
function h(e, t, n) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (e.isPrivate()) return !0;
    let r = t.getGuild(e.getGuildId()),
        a = r?.maxStageVideoChannelUsers ?? 0;
    return (
        (!e.isGuildStageVoice() || !(a <= 0)) &&
        (!i || !!(0, s.A)(e, n)) &&
        !!n.can(c.xBc.STREAM, e) &&
        null != r &&
        r.afkChannelId !== e.id
    );
}
function m(e) {
    switch (e) {
        case 0:
            return E.intl.string(E.t["1i3tSY"]);
        case 1:
            return E.intl.string(E.t.elyVbv);
        case 2:
            return E.intl.string(E.t.pgUTZC);
        case 3:
            return E.intl.string(E.t.b5FqhF);
        default:
            return E.intl.string(E.t["7Xq/nV"]);
    }
}
function f(e) {
    switch (e) {
        case 0:
            return `${E.intl.string(E.t["7Xq/nV"])}: ${E.intl.string(E.t["1i3tSY"])}`;
        case 1:
            return `${E.intl.string(E.t["7Xq/nV"])}: ${E.intl.string(E.t.elyVbv)}`;
        case 2:
            return `${E.intl.string(E.t["7Xq/nV"])}: ${E.intl.string(E.t.pgUTZC)}`;
        case 3:
            return `${E.intl.string(E.t["7Xq/nV"])}: ${E.intl.string(E.t.b5FqhF)}`;
        default:
            return `${E.intl.string(E.t["7Xq/nV"])}: ${E.intl.string(E.t["9C444m"])}`;
    }
}
function g(e, t, n, i, a) {
    let l;
    if (null == e) return [!1, 2];
    let d = t.isInChannel(e.id),
        _ = e instanceof o.YB && (0, u.Pd)(e, t, n),
        c = (0, s.A)(e, i),
        E = null != a.getAwaitingRemoteSessionInfo() || null != a.getRemoteSessionId(),
        h = (0, r.r9)() && (0, r.UK)(e.id);
    return (
        E ? (l = 0) : h ? (l = 3) : c || d ? _ && !d && (l = 1) : (l = 2),
        [!__OVERLAY__ && !E && !h && (d || (c && !_)), l]
    );
}
function p(e) {
    return (0, i.yK)([_.A, l.A, d.A, a.default], () => g(e, _.A, l.A, d.A, a.default));
}
