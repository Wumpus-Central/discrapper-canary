n.d(t, { Z: () => E });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(841784),
    s = n(503438),
    l = n(812206),
    c = n(835473),
    u = n(741570),
    d = n(592125),
    f = n(430824),
    _ = n(979651),
    p = n(626135),
    h = n(409057),
    m = n(128277),
    g = n(981631);
function E(e) {
    let { user: t, currentUser: n, activity: E, className: b, onClose: y } = e,
        { voiceGuild: O, voiceChannel: v } = (0, a.cj)([f.Z, _.Z, d.Z], () => {
            var e, n;
            let r = (0, o.Z)(E);
            if (!r && (null == E ? void 0 : E.type) !== g.IIU.HANG_STATUS) return {};
            let i = r
                    ? null == (e = _.Z.getVoiceStateForSession(t.id, null == E ? void 0 : E.session_id))
                        ? void 0
                        : e.channelId
                    : null == (n = _.Z.getVoiceStateForUser(t.id))
                      ? void 0
                      : n.channelId,
                a = d.Z.getChannel(i);
            return {
                voiceGuild: f.Z.getGuild(null == a ? void 0 : a.getGuildId()),
                voiceChannel: a,
            };
        }),
        I = (0, u.E)("UserProfileActivityCardWrapper", v),
        T = (null == E ? void 0 : E.type) === g.IIU.HANG_STATUS && I ? v : null;
    (0, c.q)(null == E ? void 0 : E.application_id);
    let S = (0, a.e7)([l.Z], () =>
        (null == E ? void 0 : E.application_id) != null
            ? l.Z.getApplication(E.application_id)
            : (null == E ? void 0 : E.name) != null
              ? l.Z.getApplicationByName(E.name)
              : null,
    );
    return (i.useEffect(() => {
        (null == E ? void 0 : E.type) === g.IIU.HANG_STATUS &&
            I &&
            p.default.track(g.rMx.VIEW_HANG_STATUS, {
                source: "UserProfilePopout",
                guild_id: null == T ? void 0 : T.guild_id,
                channel_id: null == T ? void 0 : T.id,
            });
    }, [null == E ? void 0 : E.type, I, null == T ? void 0 : T.id, null == T ? void 0 : T.guild_id]),
    (null == E ? void 0 : E.type) !== g.IIU.CUSTOM_STATUS && ((null == E ? void 0 : E.type) !== g.IIU.HANG_STATUS || I))
        ? (0, s.Z)(E)
            ? (0, r.jsx)(m.Z, {
                  user: t,
                  currentUser: n,
                  activity: E,
                  className: b,
                  onClose: y,
              })
            : (0, r.jsx)(h.Z, {
                  user: t,
                  currentUser: n,
                  activity: E,
                  application: S,
                  voiceGuild: O,
                  voiceChannel: v,
                  className: b,
                  onClose: y,
              })
        : null;
}
