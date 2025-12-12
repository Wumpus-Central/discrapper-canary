n.d(t, { Z: () => I }), n(388685), n(290780);
var r = n(358230),
    i = n(931261),
    a = n(518929),
    o = n(355298),
    s = n(333984),
    l = n(905423),
    c = n(695346),
    u = n(283595),
    d = n(923834),
    f = n(55589),
    p = n(823379),
    _ = n(475468),
    m = n(981631),
    h = n(176505);
let g = () => {
    let e = o.Z.getMessageRequestsCount() > 0 || s.Z.getSpamChannelsCount() > 0;
    return [
        m.Z5c.FRIENDS,
        (0, a.VZ)("navigateToChannel") ? m.Z5c.ICYMI : null,
        u.Z.hasLibraryApplication() && !c.bm.getSetting() ? m.Z5c.APPLICATION_LIBRARY : null,
        e ? m.Z5c.MESSAGE_REQUESTS : null,
        m.Z5c.APPLICATION_STORE,
        m.Z5c.COLLECTIBLES_SHOP,
        c.Ex.getSetting() ? m.Z5c.FAMILY_CENTER : null,
        m.Z5c.QUEST_HOME_V2,
    ].filter(p.lm);
};
function E(e, t) {
    return e < 0 ? t - 1 : e >= t ? 0 : e;
}
function b(e) {
    return g().findIndex((t) => e.startsWith(t));
}
function y(e, t) {
    (0, _.K)(e, t);
}
function O(e) {
    let t = d.Z.getCurrentRoute();
    e === m.Z5c.APPLICATION_STORE && null != t ? (0, _.z)(t) : (0, _.z)(e);
}
function v(e) {
    let { channelId: t, path: n, basePath: r } = l.Z.getState(),
        i = f.Z.getPrivateChannelIds(),
        a = __OVERLAY__ ? i : [...g(), ...i],
        o = (null == t ? b(null != n ? n : r) : null != t ? a.indexOf(t) : 0) + e;
    o >= a.length ? (o = 0) : o < 0 && (o = a.length - 1);
    let s = a[o];
    g().includes(s) ? O(s) : y(m.ME, s);
}
function S(e, t) {
    let n = l.Z.getState().channelId,
        a = (0, r.Z)(t, { withCurrentVoiceChannel: !0 }).map((e) => e.id);
    (0, i.s)(t) && a.unshift(h.oC.GUILD_HOME);
    let o = E((null != n ? a.indexOf(n) : -1) + e, a.length);
    y(t, a[o]);
}
function I() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = l.Z.getState().guildId;
    null == t ? v(e) : S(e, t);
}
