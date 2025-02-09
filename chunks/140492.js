t.d(n, { Z: () => g }), t(47120), t(733860);
var i = t(358230),
    r = t(931261),
    s = t(355298),
    l = t(333984),
    o = t(905423),
    a = t(695346),
    d = t(283595),
    c = t(923834),
    u = t(55589),
    E = t(823379),
    p = t(475468),
    b = t(981631),
    C = t(176505);
let h = () => {
    let e = s.Z.getMessageRequestsCount() > 0 || l.Z.getSpamChannelsCount() > 0;
    return [b.Z5c.FRIENDS, d.Z.hasLibraryApplication() && !a.bm.getSetting() ? b.Z5c.APPLICATION_LIBRARY : null, b.Z5c.APPLICATION_STORE, e ? b.Z5c.MESSAGE_REQUESTS : null, b.Z5c.COLLECTIBLES_SHOP, a.Ex.getSetting() ? b.Z5c.FAMILY_CENTER : null].filter(E.lm);
};
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        n = o.Z.getState().guildId;
    null == n
        ? (function (e) {
              var n, t;
              let { channelId: i, path: r, basePath: s } = o.Z.getState(),
                  l = u.Z.getPrivateChannelIds(),
                  a = __OVERLAY__ ? l : [...h(), ...l],
                  d = (null == i ? ((n = null != r ? r : s), h().findIndex((e) => n.startsWith(e))) : null != i ? a.indexOf(i) : 0) + e;
              d >= a.length ? (d = 0) : d < 0 && (d = a.length - 1);
              let E = a[d];
              h().includes(E)
                  ? !(function (e) {
                        let n = c.Z.getCurrentRoute();
                        e === b.Z5c.APPLICATION_STORE && null != n ? (0, p.z)(n) : (0, p.z)(e);
                    })(E)
                  : ((t = b.ME), (0, p.K)(t, E));
          })(e)
        : (function (e, n) {
              var t, s, l;
              let a = o.Z.getState().channelId,
                  d = (0, i.Z)(n, { withCurrentVoiceChannel: !0 }).map((e) => e.id);
              (0, r.s)(n) && d.unshift(C.oC.GUILD_HOME);
              let c = ((t = (null != a ? d.indexOf(a) : -1) + e), (s = d.length), t < 0 ? s - 1 : t >= s ? 0 : t);
              (l = d[c]), (0, p.K)(n, l);
          })(e, n);
}
