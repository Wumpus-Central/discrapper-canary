n.d(t, {
    JL: () => p,
    P9: () => h,
    h_: () => E,
    p9: () => m,
    wq: () => g
}),
    n(653041),
    n(47120);
var r = n(442837),
    i = n(387343),
    o = n(258609),
    a = n(131704),
    s = n(984933),
    l = n(430824),
    c = n(496675),
    u = n(979651),
    d = n(934415),
    f = n(981631),
    _ = n(388032);
function p(e, t, n) {
    var r;
    let o = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (e.isPrivate()) return !0;
    let a = t.getGuild(e.getGuildId()),
        s = null != (r = null == a ? void 0 : a.maxStageVideoChannelUsers) ? r : 0;
    return (!e.isGuildStageVoice() || !(s <= 0)) && (!o || !!(0, i.Z)(e, n)) && !!n.can(f.Plq.STREAM, e) && null != a && a.afkChannelId !== e.id;
}
function h(e) {
    switch (e) {
        case 0:
            return _.NW.string(_.t['1i3tSU']);
        case 1:
            return _.NW.string(_.t.elyVbm);
        case 2:
            return _.NW.string(_.t.pgUTZG);
        default:
            return _.NW.string(_.t['7Xq/nZ']);
    }
}
function m(e, t, n, r, o) {
    let s;
    if (null == e) return [!1, 2];
    let l = t.isInChannel(e.id),
        c = e instanceof a.Sf && (0, d.rY)(e, t, n),
        u = (0, i.Z)(e, r),
        f = null != o.getAwaitingRemoteSessionInfo() || null != o.getRemoteSessionId();
    f ? (s = 0) : u || l ? c && !l && (s = 1) : (s = 2);
    let _ = u && !c;
    return [!__OVERLAY__ && !f && (l || _), s];
}
function g(e) {
    return (0, r.Wu)([u.Z, l.Z, c.Z, o.Z], () => m(e, u.Z, l.Z, c.Z, o.Z));
}
function E(e, t, n) {
    let r = [];
    for (let { channel: i } of e[s.Zb]) p(i, t, n) && r.push(i);
    return r;
}
