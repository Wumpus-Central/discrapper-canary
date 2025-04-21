n.d(t, { Z: () => b }), n(388685), n(290780);
var i = n(358230),
    r = n(931261),
    s = n(355298),
    l = n(333984),
    a = n(905423),
    o = n(695346),
    c = n(283595),
    d = n(923834),
    u = n(55589),
    m = n(823379),
    g = n(475468),
    p = n(981631),
    h = n(176505);
let f = () => {
    let e = s.Z.getMessageRequestsCount() > 0 || l.Z.getSpamChannelsCount() > 0;
    return [p.Z5c.FRIENDS, e ? p.Z5c.MESSAGE_REQUESTS : null, c.Z.hasLibraryApplication() && !o.bm.getSetting() ? p.Z5c.APPLICATION_LIBRARY : null, p.Z5c.APPLICATION_STORE, p.Z5c.COLLECTIBLES_SHOP, o.Ex.getSetting() ? p.Z5c.FAMILY_CENTER : null].filter(m.lm);
};
function b() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = a.Z.getState().guildId;
    null == t
        ? (function (e) {
              let { channelId: t, path: n, basePath: i } = a.Z.getState(),
                  r = u.Z.getPrivateChannelIds(),
                  s = __OVERLAY__ ? r : [...f(), ...r],
                  l = (null == t ? ((c = null != n ? n : i), f().findIndex((e) => c.startsWith(e))) : null != t ? s.indexOf(t) : 0) + e;
              l >= s.length ? (l = 0) : l < 0 && (l = s.length - 1);
              let o = s[l];
              if (f().includes(o)) {
                  var c, m;
                  let e = d.Z.getCurrentRoute();
                  o === p.Z5c.APPLICATION_STORE && null != e ? (0, g.z)(e) : (0, g.z)(o);
              } else (m = p.ME), (0, g.K)(m, o);
          })(e)
        : (function (e, t) {
              var n, s, l;
              let o = a.Z.getState().channelId,
                  c = (0, i.Z)(t, { withCurrentVoiceChannel: !0 }).map((e) => e.id);
              (0, r.s)(t) && c.unshift(h.oC.GUILD_HOME);
              let d = ((n = (null != o ? c.indexOf(o) : -1) + e), (s = c.length), n < 0 ? s - 1 : n >= s ? 0 : n);
              (l = c[d]), (0, g.K)(t, l);
          })(e, t);
}
