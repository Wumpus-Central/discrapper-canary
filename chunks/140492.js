n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120),
    n(733860);
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
    g = n(475468),
    h = n(981631),
    p = n(176505);
let x = () => {
    let e = s.Z.getMessageRequestsCount() > 0 || a.Z.getSpamChannelsCount() > 0;
    return [h.Z5c.FRIENDS, c.Z.hasLibraryApplication() && !o.bm.getSetting() ? h.Z5c.APPLICATION_LIBRARY : null, h.Z5c.APPLICATION_STORE, e ? h.Z5c.MESSAGE_REQUESTS : null, h.Z5c.COLLECTIBLES_SHOP, o.Ex.getSetting() ? h.Z5c.FAMILY_CENTER : null].filter(m.lm);
};
function f(e, t) {
    (0, g.K)(e, t);
}
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = l.Z.getState().guildId;
    null == t
        ? !(function (e) {
              var t, n, i;
              let { channelId: r, path: s, basePath: a } = l.Z.getState(),
                  o = u.Z.getPrivateChannelIds(),
                  c = __OVERLAY__ ? o : [...x(), ...o];
              let m = (null == r ? ((t = null != s ? s : a), x().findIndex((e) => t.startsWith(e))) : null != r ? c.indexOf(r) : 0) + e;
              m >= c.length ? (m = 0) : m < 0 && (m = c.length - 1);
              let p = c[m];
              if (x().includes(p))
                  !(function (e) {
                      let t = d.Z.getCurrentRoute();
                      e === h.Z5c.APPLICATION_STORE && null != t ? (0, g.z)(t) : (0, g.z)(e);
                  })(p);
              else {
                  (n = h.ME), (i = p), (0, g.K)(n, i);
              }
          })(e)
        : !(function (e, t) {
              var n, s, a, o;
              let c = l.Z.getState().channelId,
                  d = (0, i.Z)(t, { withCurrentVoiceChannel: !0 }).map((e) => e.id);
              (0, r.s)(t) && d.unshift(p.oC.GUILD_HOME);
              let u = ((n = (null != c ? d.indexOf(c) : -1) + e), (s = d.length), n < 0 ? s - 1 : n >= s ? 0 : n);
              (a = t), (o = d[u]), (0, g.K)(a, o);
          })(e, t);
}
