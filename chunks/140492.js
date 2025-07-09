(n.d(t, { Z: () => b }), n(388685), n(290780));
var i = n(358230),
    r = n(931261),
    s = n(355298),
    a = n(333984),
    l = n(905423),
    o = n(695346),
    c = n(283595),
    d = n(923834),
    u = n(55589),
    m = n(823379),
    p = n(475468),
    g = n(981631),
    h = n(176505);
let f = () => {
    let e = s.Z.getMessageRequestsCount() > 0 || a.Z.getSpamChannelsCount() > 0;
    return [g.Z5c.FRIENDS, e ? g.Z5c.MESSAGE_REQUESTS : null, c.Z.hasLibraryApplication() && !o.bm.getSetting() ? g.Z5c.APPLICATION_LIBRARY : null, g.Z5c.APPLICATION_STORE, g.Z5c.COLLECTIBLES_SHOP, o.Ex.getSetting() ? g.Z5c.FAMILY_CENTER : null].filter(m.lm);
};
function b() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = l.Z.getState().guildId;
    null == t
        ? (function (e) {
              let { channelId: t, path: n, basePath: i } = l.Z.getState(),
                  r = u.Z.getPrivateChannelIds(),
                  s = __OVERLAY__ ? r : [...f(), ...r],
                  a = (null == t ? ((c = null != n ? n : i), f().findIndex((e) => c.startsWith(e))) : null != t ? s.indexOf(t) : 0) + e;
              a >= s.length ? (a = 0) : a < 0 && (a = s.length - 1);
              let o = s[a];
              if (f().includes(o)) {
                  var c, m;
                  let e = d.Z.getCurrentRoute();
                  o === g.Z5c.APPLICATION_STORE && null != e ? (0, p.z)(e) : (0, p.z)(o);
              } else ((m = g.ME), (0, p.K)(m, o));
          })(e)
        : (function (e, t) {
              var n, s, a;
              let o = l.Z.getState().channelId,
                  c = (0, i.Z)(t, { withCurrentVoiceChannel: !0 }).map((e) => e.id);
              (0, r.s)(t) && c.unshift(h.oC.GUILD_HOME);
              let d = ((n = (null != o ? c.indexOf(o) : -1) + e), (s = c.length), n < 0 ? s - 1 : n >= s ? 0 : n);
              ((a = c[d]), (0, p.K)(t, a));
          })(e, t);
}
