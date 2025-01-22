r.d(n, {
    JL: function () {
        return E;
    },
    P9: function () {
        return v;
    },
    h_: function () {
        return I;
    },
    p9: function () {
        return y;
    },
    wq: function () {
        return b;
    }
});
var i,
    a = r(653041);
var o = r(47120);
var s = r(442837),
    l = r(387343),
    u = r(258609),
    c = r(131704),
    d = r(984933),
    f = r(430824),
    p = r(496675),
    h = r(979651),
    _ = r(934415),
    m = r(981631),
    g = r(388032);
function E(e, n, r) {
    var i;
    let a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (e.isPrivate()) return !0;
    let o = n.getGuild(e.getGuildId()),
        s = null !== (i = null == o ? void 0 : o.maxStageVideoChannelUsers) && void 0 !== i ? i : 0;
    return (!e.isGuildStageVoice() || !(s <= 0)) && (!a || !!(0, l.Z)(e, r)) && !!r.can(m.Plq.STREAM, e) && null != o && o.afkChannelId !== e.id && !0;
}
function v(e) {
    switch (e) {
        case 0:
            return g.intl.string(g.t['1i3tSU']);
        case 1:
            return g.intl.string(g.t.elyVbm);
        case 2:
            return g.intl.string(g.t.pgUTZG);
        default:
            return g.intl.string(g.t['7Xq/nZ']);
    }
}
function y(e, n, r, i, a) {
    let o;
    if (null == e) return [!1, 2];
    let s = n.isInChannel(e.id),
        u = e instanceof c.Sf && (0, _.rY)(e, n, r),
        d = (0, l.Z)(e, i),
        f = null != a.getAwaitingRemoteSessionInfo() || null != a.getRemoteSessionId();
    f ? (o = 0) : d || s ? u && !s && (o = 1) : (o = 2);
    let p = d && !u;
    return [!__OVERLAY__ && !f && (s || p), o];
}
function b(e) {
    return (0, s.Wu)([h.Z, f.Z, p.Z, u.Z], () => y(e, h.Z, f.Z, p.Z, u.Z));
}
function I(e, n, r) {
    let i = [];
    for (let { channel: a } of e[d.Zb]) E(a, n, r) && i.push(a);
    return i;
}
!(function (e) {
    (e[(e.REMOTE_MODE = 0)] = 'REMOTE_MODE'), (e[(e.CHANNEL_FULL = 1)] = 'CHANNEL_FULL'), (e[(e.NO_PERMISSION = 2)] = 'NO_PERMISSION');
})(i || (i = {}));
