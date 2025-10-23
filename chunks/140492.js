n.d(t, { Z: () => A }), n(388685), n(290780);
var r = n(358230),
    i = n(931261),
    a = n(518929),
    o = n(355298),
    s = n(333984),
    l = n(937797),
    c = n(905423),
    u = n(695346),
    d = n(283595),
    f = n(923834),
    _ = n(55589),
    p = n(823379),
    h = n(475468),
    m = n(981631),
    g = n(176505),
    E = n(46140);
let b = () => {
    let e = o.Z.getMessageRequestsCount() > 0 || s.Z.getSpamChannelsCount() > 0;
    return [
        m.Z5c.FRIENDS,
        (0, a.VZ)("navigateToChannel") ? m.Z5c.ICYMI : null,
        e ? m.Z5c.MESSAGE_REQUESTS : null,
        d.Z.hasLibraryApplication() && !u.bm.getSetting() ? m.Z5c.APPLICATION_LIBRARY : null,
        m.Z5c.APPLICATION_STORE,
        m.Z5c.COLLECTIBLES_SHOP,
        u.Ex.getSetting() ? m.Z5c.FAMILY_CENTER : null,
        l.m8.getConfig({ location: E.dr.IN_APP_NAVIGATION }).enabled ? m.Z5c.QUEST_HOME_V2 : null,
    ].filter(p.lm);
};
function y(e, t) {
    return e < 0 ? t - 1 : e >= t ? 0 : e;
}
function O(e) {
    return b().findIndex((t) => e.startsWith(t));
}
function v(e, t) {
    (0, h.K)(e, t);
}
function I(e) {
    let t = f.Z.getCurrentRoute();
    e === m.Z5c.APPLICATION_STORE && null != t ? (0, h.z)(t) : (0, h.z)(e);
}
function T(e) {
    let { channelId: t, path: n, basePath: r } = c.Z.getState(),
        i = _.Z.getPrivateChannelIds(),
        a = __OVERLAY__ ? i : [...b(), ...i],
        o = (null == t ? O(null != n ? n : r) : null != t ? a.indexOf(t) : 0) + e;
    o >= a.length ? (o = 0) : o < 0 && (o = a.length - 1);
    let s = a[o];
    b().includes(s) ? I(s) : v(m.ME, s);
}
function S(e, t) {
    let n = c.Z.getState().channelId,
        a = (0, r.Z)(t, { withCurrentVoiceChannel: !0 }).map((e) => e.id);
    (0, i.s)(t) && a.unshift(g.oC.GUILD_HOME);
    let o = y((null != n ? a.indexOf(n) : -1) + e, a.length);
    v(t, a[o]);
}
function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = c.Z.getState().guildId;
    null == t ? T(e) : S(e, t);
}
