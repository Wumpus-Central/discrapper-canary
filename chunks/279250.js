n.d(t, {
    CQ: () => m,
    CT: () => h,
    eo: () => g,
    vz: () => _,
    zP: () => E,
}),
    n(321073),
    n(896048);
var r = n(311907),
    i = n(323073),
    a = n(890615),
    s = n(643501),
    o = n(95701);
n(808728);
var l = n(71393),
    c = n(576705),
    u = n(977997),
    d = n(147036),
    f = n(652215),
    p = n(985018);
function _(e, t, n) {
    var r;
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (e.isPrivate()) return !0;
    let s = t.getGuild(e.getGuildId()),
        o = null != (r = null == s ? void 0 : s.maxStageVideoChannelUsers) ? r : 0;
    return (
        (!e.isGuildStageVoice() || !(o <= 0)) &&
        (!i || !!(0, a.A)(e, n)) &&
        !!n.can(f.xBc.STREAM, e) &&
        null != s &&
        s.afkChannelId !== e.id
    );
}
function h(e) {
    switch (e) {
        case 0:
            return p.intl.string(p.t["1i3tSY"]);
        case 1:
            return p.intl.string(p.t.elyVbv);
        case 2:
            return p.intl.string(p.t.pgUTZC);
        case 3:
            return p.intl.string(p.t.b5FqhF);
        default:
            return p.intl.string(p.t["7Xq/nV"]);
    }
}
function m(e) {
    switch (e) {
        case 0:
            return "".concat(p.intl.string(p.t["7Xq/nV"]), ": ").concat(p.intl.string(p.t["1i3tSY"]));
        case 1:
            return "".concat(p.intl.string(p.t["7Xq/nV"]), ": ").concat(p.intl.string(p.t.elyVbv));
        case 2:
            return "".concat(p.intl.string(p.t["7Xq/nV"]), ": ").concat(p.intl.string(p.t.pgUTZC));
        case 3:
            return "".concat(p.intl.string(p.t["7Xq/nV"]), ": ").concat(p.intl.string(p.t.b5FqhF));
        default:
            return "".concat(p.intl.string(p.t["7Xq/nV"]), ": ").concat(p.intl.string(p.t["9C444m"]));
    }
}
function g(e, t, n, r, s) {
    let l;
    if (null == e) return [!1, 2];
    let c = t.isInChannel(e.id),
        u = e instanceof o.YB && (0, d.Pd)(e, t, n),
        f = (0, a.A)(e, r),
        p = null != s.getAwaitingRemoteSessionInfo() || null != s.getRemoteSessionId(),
        _ = (0, i.r9)() && (0, i.UK)(e.id);
    p ? (l = 0) : _ ? (l = 3) : f || c ? u && !c && (l = 1) : (l = 2);
    let h = f && !u;
    return [!__OVERLAY__ && !p && !_ && (c || h), l];
}
function E(e) {
    return (0, r.yK)([u.A, l.A, c.A, s.default], () => g(e, u.A, l.A, c.A, s.default));
}
