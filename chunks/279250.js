"use strict";
n.d(t, { CQ: () => I, CT: () => h, eo: () => f, vz: () => A, zP: () => p }), n(321073);
var i = n(17928),
    r = n(323073),
    a = n(890615),
    s = n(643501),
    l = n(95701);
n(808728);
var o = n(71393),
    d = n(576705),
    c = n(977997),
    u = n(871237),
    _ = n(652215),
    E = n(375708);
function A(e, t, n) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (e.isPrivate()) return !0;
    let r = t.getGuild(e.getGuildId()),
        s = r?.maxStageVideoChannelUsers ?? 0;
    return (
        (!e.isGuildStageVoice() || !(s <= 0)) &&
        (!i || !!(0, a.A)(e, n)) &&
        !!n.can(_.xBc.STREAM, e) &&
        null != r &&
        r.afkChannelId !== e.id
    );
}
function h(e) {
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
function I(e) {
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
function f(e, t, n, i, s) {
    let o;
    if (null == e) return [!1, 2];
    let d = t.isInChannel(e.id),
        c = e instanceof l.YB && (0, u.Pd)(e, t, n),
        _ = (0, a.A)(e, i),
        E = null != s.getAwaitingRemoteSessionInfo() || null != s.getRemoteSessionId(),
        A = (0, r.r9)() && (0, r.UK)(e.id);
    return (
        E ? (o = 0) : A ? (o = 3) : _ || d ? c && !d && (o = 1) : (o = 2),
        [!__OVERLAY__ && !E && !A && (d || (_ && !c)), o]
    );
}
function p(e) {
    return (0, i.yK)([c.A, o.A, d.A, s.default], () => f(e, c.A, o.A, d.A, s.default));
}
