n.d(t, { Z: () => E });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(841784),
    a = n(503438),
    s = n(812206),
    l = n(835473),
    c = n(592125),
    u = n(430824),
    d = n(979651),
    f = n(81570),
    _ = n(409057),
    p = n(443375),
    h = n(128277),
    m = n(263059),
    g = n(981631);
function E(e) {
    let { user: t, currentUser: n, activity: E, className: b, onClose: y, profileGuildId: v } = e,
        O = (0, f.T)({ location: 'UserProfileActivityCardWrapper' }),
        I = t.id === n.id,
        S = O && !I && !t.bot,
        { voiceGuild: T, voiceChannel: N } = (0, i.cj)([u.Z, d.Z, c.Z], () => {
            var e;
            if (!(0, o.Z)(E)) return {};
            let n = null == (e = d.Z.getVoiceStateForSession(t.id, null == E ? void 0 : E.session_id)) ? void 0 : e.channelId,
                r = c.Z.getChannel(n);
            return {
                voiceGuild: u.Z.getGuild(null == r ? void 0 : r.getGuildId()),
                voiceChannel: r
            };
        });
    (0, l.q)(null == E ? void 0 : E.application_id);
    let A = (0, i.e7)([s.Z], () => ((null == E ? void 0 : E.application_id) != null ? s.Z.getApplication(E.application_id) : (null == E ? void 0 : E.name) != null ? s.Z.getApplicationByName(E.name) : null));
    return (null == E ? void 0 : E.type) === g.IIU.CUSTOM_STATUS || (null == E ? void 0 : E.type) === g.IIU.HANG_STATUS
        ? null
        : (0, a.Z)(E)
          ? S
              ? (0, r.jsx)(m.Z, {
                    user: t,
                    currentUser: n,
                    activity: E,
                    profileGuildId: v,
                    className: b,
                    onClose: y
                })
              : (0, r.jsx)(h.Z, {
                    user: t,
                    currentUser: n,
                    activity: E,
                    className: b,
                    onClose: y
                })
          : S
            ? (0, r.jsx)(p.Z, {
                  user: t,
                  currentUser: n,
                  activity: E,
                  application: A,
                  voiceGuild: T,
                  voiceChannel: N,
                  profileGuildId: v,
                  className: b,
                  onClose: y
              })
            : (0, r.jsx)(_.Z, {
                  user: t,
                  currentUser: n,
                  activity: E,
                  application: A,
                  voiceGuild: T,
                  voiceChannel: N,
                  className: b,
                  onClose: y
              });
}
