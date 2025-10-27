n.d(t, { Z: () => T }), n(388685), n(290780);
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
    _ = n(823379),
    p = n(475468),
    h = n(981631),
    m = n(176505);
let g = () => {
    let e = o.Z.getMessageRequestsCount() > 0 || s.Z.getSpamChannelsCount() > 0;
    return [
        h.Z5c.FRIENDS,
        (0, a.VZ)("navigateToChannel") ? h.Z5c.ICYMI : null,
        e ? h.Z5c.MESSAGE_REQUESTS : null,
        u.Z.hasLibraryApplication() && !c.bm.getSetting() ? h.Z5c.APPLICATION_LIBRARY : null,
        h.Z5c.APPLICATION_STORE,
        h.Z5c.COLLECTIBLES_SHOP,
        c.Ex.getSetting() ? h.Z5c.FAMILY_CENTER : null,
        h.Z5c.QUEST_HOME_V2,
    ].filter(_.lm);
};
function E(e, t) {
    return e < 0 ? t - 1 : e >= t ? 0 : e;
}
function b(e) {
    return g().findIndex((t) => e.startsWith(t));
}
function y(e, t) {
    (0, p.K)(e, t);
}
function O(e) {
    let t = d.Z.getCurrentRoute();
    e === h.Z5c.APPLICATION_STORE && null != t ? (0, p.z)(t) : (0, p.z)(e);
}
function v(e) {
    let { channelId: t, path: n, basePath: r } = l.Z.getState(),
        i = f.Z.getPrivateChannelIds(),
        a = __OVERLAY__ ? i : [...g(), ...i],
        o = (null == t ? b(null != n ? n : r) : null != t ? a.indexOf(t) : 0) + e;
    o >= a.length ? (o = 0) : o < 0 && (o = a.length - 1);
    let s = a[o];
    g().includes(s) ? O(s) : y(h.ME, s);
}
function I(e, t) {
    let n = l.Z.getState().channelId,
        a = (0, r.Z)(t, { withCurrentVoiceChannel: !0 }).map((e) => e.id);
    (0, i.s)(t) && a.unshift(m.oC.GUILD_HOME);
    let o = E((null != n ? a.indexOf(n) : -1) + e, a.length);
    y(t, a[o]);
}
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = l.Z.getState().guildId;
    null == t ? v(e) : I(e, t);
}
