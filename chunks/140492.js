n.d(t, { Z: () => I }), n(388685), n(290780);
var r = n(358230),
    i = n(931261),
    a = n(355298),
    o = n(333984),
    s = n(905423),
    l = n(695346),
    c = n(283595),
    u = n(923834),
    d = n(55589),
    f = n(823379),
    _ = n(475468),
    p = n(981631),
    h = n(176505);
let m = () => {
    let e = a.Z.getMessageRequestsCount() > 0 || o.Z.getSpamChannelsCount() > 0;
    return [
        p.Z5c.FRIENDS,
        e ? p.Z5c.MESSAGE_REQUESTS : null,
        c.Z.hasLibraryApplication() && !l.bm.getSetting() ? p.Z5c.APPLICATION_LIBRARY : null,
        p.Z5c.APPLICATION_STORE,
        p.Z5c.COLLECTIBLES_SHOP,
        l.Ex.getSetting() ? p.Z5c.FAMILY_CENTER : null,
    ].filter(f.lm);
};
function g(e, t) {
    return e < 0 ? t - 1 : e >= t ? 0 : e;
}
function E(e) {
    return m().findIndex((t) => e.startsWith(t));
}
function b(e, t) {
    (0, _.K)(e, t);
}
function y(e) {
    let t = u.Z.getCurrentRoute();
    e === p.Z5c.APPLICATION_STORE && null != t ? (0, _.z)(t) : (0, _.z)(e);
}
function O(e) {
    let { channelId: t, path: n, basePath: r } = s.Z.getState(),
        i = d.Z.getPrivateChannelIds(),
        a = __OVERLAY__ ? i : [...m(), ...i],
        o = (null == t ? E(null != n ? n : r) : null != t ? a.indexOf(t) : 0) + e;
    o >= a.length ? (o = 0) : o < 0 && (o = a.length - 1);
    let l = a[o];
    m().includes(l) ? y(l) : b(p.ME, l);
}
function v(e, t) {
    let n = s.Z.getState().channelId,
        a = (0, r.Z)(t, { withCurrentVoiceChannel: !0 }).map((e) => e.id);
    (0, i.s)(t) && a.unshift(h.oC.GUILD_HOME);
    let o = g((null != n ? a.indexOf(n) : -1) + e, a.length);
    b(t, a[o]);
}
function I() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = s.Z.getState().guildId;
    null == t ? O(e) : v(e, t);
}
