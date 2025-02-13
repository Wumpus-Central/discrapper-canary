n.d(t, { Z: () => E });
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
    f = n(456644),
    _ = n(409057),
    p = n(443375),
    h = n(128277),
    m = n(263059),
    g = n(981631);
function E(e) {
    let { user: t, currentUser: n, activity: E, className: v, onClose: y, profileGuildId: I } = e,
        { recentActivityEnabled: T } = (0, f.i)({ location: 'UserProfileActivityCardWrapper' }),
        b = t.id === n.id,
        S = T && !b && !t.bot,
        { voiceGuild: A, voiceChannel: N } = (0, r.cj)([c.Z, d.Z, u.Z], () => {
            var e;
            if (!(0, a.Z)(E)) return {};
            let n = null === (e = d.Z.getVoiceStateForSession(t.id, null == E ? void 0 : E.session_id)) || void 0 === e ? void 0 : e.channelId,
                i = u.Z.getChannel(n);
            return {
                voiceGuild: c.Z.getGuild(null == i ? void 0 : i.getGuildId()),
                voiceChannel: i
            };
        });
    (0, l.q)(null == E ? void 0 : E.application_id);
    let C = (0, r.e7)([o.Z], () => ((null == E ? void 0 : E.application_id) != null ? o.Z.getApplication(E.application_id) : (null == E ? void 0 : E.name) != null ? o.Z.getApplicationByName(E.name) : null));
    return (null == E ? void 0 : E.type) === g.IIU.CUSTOM_STATUS || (null == E ? void 0 : E.type) === g.IIU.HANG_STATUS
        ? null
        : (0, s.Z)(E)
          ? S
              ? (0, i.jsx)(m.Z, {
                    user: t,
                    currentUser: n,
                    activity: E,
                    profileGuildId: I,
                    className: v,
                    onClose: y
                })
              : (0, i.jsx)(h.Z, {
                    user: t,
                    currentUser: n,
                    activity: E,
                    className: v,
                    onClose: y
                })
          : S
            ? (0, i.jsx)(p.Z, {
                  user: t,
                  currentUser: n,
                  activity: E,
                  application: C,
                  voiceGuild: A,
                  voiceChannel: N,
                  profileGuildId: I,
                  className: v,
                  onClose: y
              })
            : (0, i.jsx)(_.Z, {
                  user: t,
                  currentUser: n,
                  activity: E,
                  application: C,
                  voiceGuild: A,
                  voiceChannel: N,
                  className: v,
                  onClose: y
              });
}
