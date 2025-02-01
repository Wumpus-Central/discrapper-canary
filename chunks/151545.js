n.d(t, { Z: () => v });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(841784),
    s = n(503438),
    o = n(812206),
    l = n(835473),
    u = n(592125),
    c = n(430824),
    d = n(979651),
    f = n(9161),
    _ = n(456644),
    p = n(409057),
    h = n(443375),
    m = n(128277),
    g = n(263059),
    E = n(981631);
function v(e) {
    let { user: t, currentUser: n, activity: v, className: y, onClose: I, profileGuildId: T } = e,
        { recentActivityTabEnabled: b } = (0, f.O)({ location: 'UserProfileActivityCardWrapper' }),
        { recentActivityEnabled: S } = (0, _.i)({ location: 'UserProfileActivityCardWrapper' }),
        A = t.id === n.id,
        N = (b || S) && !A && !t.bot,
        { voiceGuild: C, voiceChannel: R } = (0, r.cj)([c.Z, d.Z, u.Z], () => {
            var e;
            if (!(0, a.Z)(v)) return {};
            let n = null === (e = d.Z.getVoiceStateForSession(t.id, null == v ? void 0 : v.session_id)) || void 0 === e ? void 0 : e.channelId,
                i = u.Z.getChannel(n);
            return {
                voiceGuild: c.Z.getGuild(null == i ? void 0 : i.getGuildId()),
                voiceChannel: i
            };
        });
    (0, l.q)(null == v ? void 0 : v.application_id);
    let O = (0, r.e7)([o.Z], () => ((null == v ? void 0 : v.application_id) != null ? o.Z.getApplication(v.application_id) : (null == v ? void 0 : v.name) != null ? o.Z.getApplicationByName(v.name) : null));
    return (null == v ? void 0 : v.type) === E.IIU.CUSTOM_STATUS || (null == v ? void 0 : v.type) === E.IIU.HANG_STATUS
        ? null
        : (0, s.Z)(v)
          ? N
              ? (0, i.jsx)(g.Z, {
                    user: t,
                    currentUser: n,
                    activity: v,
                    profileGuildId: T,
                    className: y,
                    onClose: I
                })
              : (0, i.jsx)(m.Z, {
                    user: t,
                    currentUser: n,
                    activity: v,
                    className: y,
                    onClose: I
                })
          : N
            ? (0, i.jsx)(h.Z, {
                  user: t,
                  currentUser: n,
                  activity: v,
                  application: O,
                  voiceGuild: C,
                  voiceChannel: R,
                  profileGuildId: T,
                  className: y,
                  onClose: I
              })
            : (0, i.jsx)(p.Z, {
                  user: t,
                  currentUser: n,
                  activity: v,
                  application: O,
                  voiceGuild: C,
                  voiceChannel: R,
                  className: y,
                  onClose: I
              });
}
