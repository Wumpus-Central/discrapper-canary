n.d(t, {
    JL: () => p,
    P9: () => h,
    h_: () => E,
    p9: () => m,
    wq: () => g
}),
    n(653041),
    n(47120);
var i = n(442837),
    r = n(387343),
    a = n(258609),
    s = n(131704),
    o = n(984933),
    l = n(430824),
    u = n(496675),
    c = n(979651),
    d = n(934415),
    f = n(981631),
    _ = n(388032);
function p(e, t, n) {
    var i;
    let a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (e.isPrivate()) return !0;
    let s = t.getGuild(e.getGuildId()),
        o = null !== (i = null == s ? void 0 : s.maxStageVideoChannelUsers) && void 0 !== i ? i : 0;
    return (!e.isGuildStageVoice() || !(o <= 0)) && (!a || !!(0, r.Z)(e, n)) && !!n.can(f.Plq.STREAM, e) && null != s && s.afkChannelId !== e.id;
}
function h(e) {
    switch (e) {
        case 0:
            return _.intl.string(_.t['1i3tSU']);
        case 1:
            return _.intl.string(_.t.elyVbm);
        case 2:
            return _.intl.string(_.t.pgUTZG);
        default:
            return _.intl.string(_.t['7Xq/nZ']);
    }
}
function m(e, t, n, i, a) {
    let o;
    if (null == e) return [!1, 2];
    let l = t.isInChannel(e.id),
        u = e instanceof s.Sf && (0, d.rY)(e, t, n),
        c = (0, r.Z)(e, i),
        f = null != a.getAwaitingRemoteSessionInfo() || null != a.getRemoteSessionId();
    f ? (o = 0) : c || l ? u && !l && (o = 1) : (o = 2);
    let _ = c && !u;
    return [!__OVERLAY__ && !f && (l || _), o];
}
function g(e) {
    return (0, i.Wu)([c.Z, l.Z, u.Z, a.Z], () => m(e, c.Z, l.Z, u.Z, a.Z));
}
function E(e, t, n) {
    let i = [];
    for (let { channel: r } of e[o.Zb]) p(r, t, n) && i.push(r);
    return i;
}
