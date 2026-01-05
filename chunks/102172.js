n.d(t, {
    JL: () => _,
    P9: () => m,
    gR: () => h,
    p9: () => g,
    wq: () => E,
}),
    n(539854),
    n(388685);
var r = n(442837),
    i = n(622822),
    a = n(387343),
    o = n(258609),
    s = n(131704);
n(984933);
var l = n(430824),
    c = n(496675),
    u = n(979651),
    d = n(934415),
    f = n(981631),
    p = n(388032);
function _(e, t, n) {
    var r;
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (e.isPrivate()) return !0;
    let o = t.getGuild(e.getGuildId()),
        s = null != (r = null == o ? void 0 : o.maxStageVideoChannelUsers) ? r : 0;
    return (
        (!e.isGuildStageVoice() || !(s <= 0)) &&
        (!i || !!(0, a.Z)(e, n)) &&
        !!n.can(f.Plq.STREAM, e) &&
        null != o &&
        o.afkChannelId !== e.id
    );
}
function m(e) {
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
function h(e) {
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
function g(e, t, n, r, o) {
    let l;
    if (null == e) return [!1, 2];
    let c = t.isInChannel(e.id),
        u = e instanceof s.Sf && (0, d.rY)(e, t, n),
        f = (0, a.Z)(e, r),
        p = null != o.getAwaitingRemoteSessionInfo() || null != o.getRemoteSessionId(),
        _ = (0, i.dl)() && (0, i.zd)(e.id);
    p ? (l = 0) : _ ? (l = 3) : f || c ? u && !c && (l = 1) : (l = 2);
    let m = f && !u;
    return [!__OVERLAY__ && !p && !_ && (c || m), l];
}
function E(e) {
    return (0, r.Wu)([u.Z, l.Z, c.Z, o.default], () => g(e, u.Z, l.Z, c.Z, o.default));
}
