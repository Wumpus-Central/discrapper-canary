(n.d(t, {
    JL: () => h,
    P9: () => m,
    gR: () => g,
    h_: () => y,
    p9: () => E,
    wq: () => b
}),
    n(539854),
    n(388685));
var r = n(442837),
    i = n(622822),
    a = n(387343),
    o = n(258609),
    s = n(131704),
    l = n(984933),
    c = n(430824),
    u = n(496675),
    d = n(979651),
    _ = n(934415),
    f = n(981631),
    p = n(388032);
function h(e, t, n) {
    var r;
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (e.isPrivate()) return !0;
    let o = t.getGuild(e.getGuildId()),
        s = null != (r = null == o ? void 0 : o.maxStageVideoChannelUsers) ? r : 0;
    return (!e.isGuildStageVoice() || !(s <= 0)) && (!i || !!(0, a.Z)(e, n)) && !!n.can(f.Plq.STREAM, e) && null != o && o.afkChannelId !== e.id;
}
function m(e) {
    switch (e) {
        case 0:
            return p.intl.string(p.t['1i3tSU']);
        case 1:
            return p.intl.string(p.t.elyVbm);
        case 2:
            return p.intl.string(p.t.pgUTZG);
        case 3:
            return p.intl.string(p.t.b5FqhI);
        default:
            return p.intl.string(p.t['7Xq/nZ']);
    }
}
function g(e) {
    switch (e) {
        case 0:
            return ''.concat(p.intl.string(p.t['7Xq/nZ']), ': ').concat(p.intl.string(p.t['1i3tSU']));
        case 1:
            return ''.concat(p.intl.string(p.t['7Xq/nZ']), ': ').concat(p.intl.string(p.t.elyVbm));
        case 2:
            return ''.concat(p.intl.string(p.t['7Xq/nZ']), ': ').concat(p.intl.string(p.t.pgUTZG));
        case 3:
            return ''.concat(p.intl.string(p.t['7Xq/nZ']), ': ').concat(p.intl.string(p.t.b5FqhI));
        default:
            return ''.concat(p.intl.string(p.t['7Xq/nZ']), ': ').concat(p.intl.string(p.t['9C444u']));
    }
}
function E(e, t, n, r, o) {
    let l;
    if (null == e) return [!1, 2];
    let c = t.isInChannel(e.id),
        u = e instanceof s.Sf && (0, _.rY)(e, t, n),
        d = (0, a.Z)(e, r),
        f = null != o.getAwaitingRemoteSessionInfo() || null != o.getRemoteSessionId(),
        p = (0, i.dl)() && (0, i.zd)(e.id);
    f ? (l = 0) : p ? (l = 3) : d || c ? u && !c && (l = 1) : (l = 2);
    let h = d && !u;
    return [!__OVERLAY__ && !f && !p && (c || h), l];
}
function b(e) {
    return (0, r.Wu)([d.Z, c.Z, u.Z, o.Z], () => E(e, d.Z, c.Z, u.Z, o.Z));
}
function y(e, t, n) {
    let r = [];
    for (let { channel: i } of e[l.Zb]) h(i, t, n) && r.push(i);
    return r;
}
