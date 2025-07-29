n.d(t, { Z: () => O });
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(841784),
    s = n(503438),
    l = n(812206),
    c = n(835473),
    u = n(741570),
    d = n(592125),
    _ = n(430824),
    f = n(979651),
    p = n(626135),
    h = n(81570),
    m = n(409057),
    g = n(443375),
    E = n(128277),
    b = n(263059),
    y = n(981631);
function O(e) {
    let { user: t, currentUser: n, activity: O, className: v, onClose: I, profileGuildId: T } = e,
        S = (0, h.T)({ location: 'UserProfileActivityCardWrapper' }),
        A = t.id === n.id,
        N = S && !A && !t.bot,
        { voiceGuild: C, voiceChannel: R } = (0, a.cj)([_.Z, f.Z, d.Z], () => {
            var e, n;
            let r = (0, o.Z)(O);
            if (!r && (null == O ? void 0 : O.type) !== y.IIU.HANG_STATUS) return {};
            let i = r ? (null == (e = f.Z.getVoiceStateForSession(t.id, null == O ? void 0 : O.session_id)) ? void 0 : e.channelId) : null == (n = f.Z.getVoiceStateForUser(t.id)) ? void 0 : n.channelId,
                a = d.Z.getChannel(i);
            return {
                voiceGuild: _.Z.getGuild(null == a ? void 0 : a.getGuildId()),
                voiceChannel: a
            };
        }),
        P = (0, u.E)('UserProfileActivityCardWrapper', R),
        w = (null == O ? void 0 : O.type) === y.IIU.HANG_STATUS && P ? R : null;
    (0, c.q)(null == O ? void 0 : O.application_id);
    let D = (0, a.e7)([l.Z], () => ((null == O ? void 0 : O.application_id) != null ? l.Z.getApplication(O.application_id) : (null == O ? void 0 : O.name) != null ? l.Z.getApplicationByName(O.name) : null));
    return (i.useEffect(() => {
        (null == O ? void 0 : O.type) === y.IIU.HANG_STATUS &&
            P &&
            p.default.track(y.rMx.VIEW_HANG_STATUS, {
                source: 'UserProfilePopout',
                guild_id: null == w ? void 0 : w.guild_id,
                channel_id: null == w ? void 0 : w.id
            });
    }, [null == O ? void 0 : O.type, P, null == w ? void 0 : w.id, null == w ? void 0 : w.guild_id]),
    (null == O ? void 0 : O.type) !== y.IIU.CUSTOM_STATUS && ((null == O ? void 0 : O.type) !== y.IIU.HANG_STATUS || P))
        ? (0, s.Z)(O)
            ? N
                ? (0, r.jsx)(b.Z, {
                      user: t,
                      currentUser: n,
                      activity: O,
                      profileGuildId: T,
                      className: v,
                      onClose: I
                  })
                : (0, r.jsx)(E.Z, {
                      user: t,
                      currentUser: n,
                      activity: O,
                      className: v,
                      onClose: I
                  })
            : N
              ? (0, r.jsx)(g.Z, {
                    user: t,
                    currentUser: n,
                    activity: O,
                    application: D,
                    voiceGuild: C,
                    voiceChannel: R,
                    profileGuildId: T,
                    className: v,
                    onClose: I
                })
              : (0, r.jsx)(m.Z, {
                    user: t,
                    currentUser: n,
                    activity: O,
                    application: D,
                    voiceGuild: C,
                    voiceChannel: R,
                    className: v,
                    onClose: I
                })
        : null;
}
