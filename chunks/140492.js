n.d(t, { Z: () => p }), n(47120), n(733860);
var i = n(358230),
    s = n(931261),
    r = n(355298),
    l = n(333984),
    a = n(905423),
    o = n(695346),
    c = n(283595),
    d = n(923834),
    u = n(55589),
    m = n(823379),
    g = n(475468),
    h = n(981631),
    x = n(176505);
let _ = () => {
    let e = r.Z.getMessageRequestsCount() > 0 || l.Z.getSpamChannelsCount() > 0;
    return [h.Z5c.FRIENDS, c.Z.hasLibraryApplication() && !o.bm.getSetting() ? h.Z5c.APPLICATION_LIBRARY : null, h.Z5c.APPLICATION_STORE, e ? h.Z5c.MESSAGE_REQUESTS : null, h.Z5c.COLLECTIBLES_SHOP, o.Ex.getSetting() ? h.Z5c.FAMILY_CENTER : null].filter(m.lm);
};
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = a.Z.getState().guildId;
    null == t
        ? (function (e) {
              var t, n;
              let { channelId: i, path: s, basePath: r } = a.Z.getState(),
                  l = u.Z.getPrivateChannelIds(),
                  o = __OVERLAY__ ? l : [..._(), ...l],
                  c = (null == i ? ((t = null != s ? s : r), _().findIndex((e) => t.startsWith(e))) : null != i ? o.indexOf(i) : 0) + e;
              c >= o.length ? (c = 0) : c < 0 && (c = o.length - 1);
              let m = o[c];
              _().includes(m)
                  ? !(function (e) {
                        let t = d.Z.getCurrentRoute();
                        e === h.Z5c.APPLICATION_STORE && null != t ? (0, g.z)(t) : (0, g.z)(e);
                    })(m)
                  : ((n = h.ME), (0, g.K)(n, m));
          })(e)
        : (function (e, t) {
              var n, r, l;
              let o = a.Z.getState().channelId,
                  c = (0, i.Z)(t, { withCurrentVoiceChannel: !0 }).map((e) => e.id);
              (0, s.s)(t) && c.unshift(x.oC.GUILD_HOME);
              let d = ((n = (null != o ? c.indexOf(o) : -1) + e), (r = c.length), n < 0 ? r - 1 : n >= r ? 0 : n);
              (l = c[d]), (0, g.K)(t, l);
          })(e, t);
}
