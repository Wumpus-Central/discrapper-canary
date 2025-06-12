n.d(t, {
    JL: () => p,
    P9: () => h,
    gR: () => m,
    h_: () => b,
    p9: () => g,
    wq: () => E
}),
    n(539854),
    n(388685);
var r = n(442837),
    i = n(387343),
    a = n(258609),
    o = n(131704),
    s = n(984933),
    l = n(430824),
    c = n(496675),
    u = n(979651),
    d = n(934415),
    _ = n(981631),
    f = n(388032);
function p(e, t, n) {
    var r;
    let a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (e.isPrivate()) return !0;
    let o = t.getGuild(e.getGuildId()),
        s = null != (r = null == o ? void 0 : o.maxStageVideoChannelUsers) ? r : 0;
    return (!e.isGuildStageVoice() || !(s <= 0)) && (!a || !!(0, i.Z)(e, n)) && !!n.can(_.Plq.STREAM, e) && null != o && o.afkChannelId !== e.id;
}
function h(e) {
    switch (e) {
        case 0:
            return f.intl.string(f.t['1i3tSU']);
        case 1:
            return f.intl.string(f.t.elyVbm);
        case 2:
            return f.intl.string(f.t.pgUTZG);
        default:
            return f.intl.string(f.t['7Xq/nZ']);
    }
}
function m(e) {
    switch (e) {
        case 0:
            return ''.concat(f.intl.string(f.t['7Xq/nZ']), ': ').concat(f.intl.string(f.t['1i3tSU']));
        case 1:
            return ''.concat(f.intl.string(f.t['7Xq/nZ']), ': ').concat(f.intl.string(f.t.elyVbm));
        case 2:
            return ''.concat(f.intl.string(f.t['7Xq/nZ']), ': ').concat(f.intl.string(f.t.pgUTZG));
        default:
            return ''.concat(f.intl.string(f.t['7Xq/nZ']), ': ').concat(f.intl.string(f.t['9C444u']));
    }
}
function g(e, t, n, r, a) {
    let s;
    if (null == e) return [!1, 2];
    let l = t.isInChannel(e.id),
        c = e instanceof o.Sf && (0, d.rY)(e, t, n),
        u = (0, i.Z)(e, r),
        _ = null != a.getAwaitingRemoteSessionInfo() || null != a.getRemoteSessionId();
    _ ? (s = 0) : u || l ? c && !l && (s = 1) : (s = 2);
    let f = u && !c;
    return [!__OVERLAY__ && !_ && (l || f), s];
}
function E(e) {
    return (0, r.Wu)([u.Z, l.Z, c.Z, a.Z], () => g(e, u.Z, l.Z, c.Z, a.Z));
}
function b(e, t, n) {
    let r = [];
    for (let { channel: i } of e[s.Zb]) p(i, t, n) && r.push(i);
    return r;
}
