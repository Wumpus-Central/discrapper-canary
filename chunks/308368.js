"use strict";
n.d(t, { A: () => _ });
var i = n(636537),
    r = n(228366),
    a = n(95561),
    s = n(451909),
    l = n(734057),
    o = n(308528),
    d = n(493336),
    c = n(652215),
    u = n(381941);
let _ = {
    updateActivity(e) {
        let {
            applicationId: t,
            distributor: n,
            shareActivity: a,
            token: s = null,
            duration: l = 0,
            closed: o = !1,
            exePath: d = null,
            voiceChannelId: u = null,
            sessionId: _ = null,
            mediaSessionId: E = null,
        } = e;
        r.h.wait(() => r.h.dispatch({ type: "ACTIVITY_UPDATE_START", applicationId: t, duration: l, distributor: n })),
            i.Bo.post({
                url: c.Rsh.ACTIVITIES,
                body: {
                    application_id: t,
                    token: s,
                    duration: l,
                    share_activity: a,
                    distributor: n,
                    closed: o,
                    exePath: d,
                    voice_channel_id: u,
                    session_id: _,
                    media_session_id: E,
                },
                retries: 1,
                oldFormErrors: !0,
                rejectWithError: !0,
            })
                .then((e) => {
                    let {
                        body: { token: i },
                    } = e;
                    r.h.dispatch({
                        type: "ACTIVITY_UPDATE_SUCCESS",
                        applicationId: t,
                        token: i,
                        duration: l,
                        distributor: n,
                    });
                })
                .catch(() => {
                    r.h.dispatch({ type: "ACTIVITY_UPDATE_FAIL", applicationId: t });
                });
    },
    sendActivityInvite(e) {
        let { channelId: t, type: n, activity: i, content: r, targetUserId: o, location: _ } = e,
            E = l.A.getChannel(t);
        if (null == E) return Promise.resolve(null);
        let A = s.Ay.parse(E, r ?? "");
        return d.A.sendMessage(E.id, A, !1, {
            activityAction: { type: n, activity: i, targetUserId: o },
            location: u.Hx.ACTIVITY_SHARE,
        }).then(
            (e) => (
                a.Ay.trackWithMetadata(c.HAw.INVITE_SENT, {
                    location: _,
                    invite_type: i.type === c.$pd.LISTENING ? c.G2g.SPOTIFY : c.G2g.APPLICATION,
                    application_id: i.application_id,
                    guild_id: E.getGuildId(),
                    channel_id: E.id,
                    message_id: null != e ? e.body.id : null,
                }),
                Promise.resolve(E)
            ),
            (e) => Promise.reject(e),
        );
    },
    sendActivityInviteUser(e) {
        let { userId: t, type: n, activity: i, content: r, location: a } = e;
        return o.A.ensurePrivateChannel(t).then((e) =>
            this.sendActivityInvite({ channelId: e, type: n, activity: i, content: r, location: a }),
        );
    },
    async getJoinSecret(e, t, n, r, a) {
        let s = {};
        null != r && (s.channel_id = r), null != a && (s.message_id = a);
        let l = await i.Bo.get({
            url: c.Rsh.USER_ACTIVITY_JOIN(e, t, n),
            retries: 3,
            query: s,
            rejectWithError: (0, i.fT)(),
        });
        return { secret: l.body.secret, joinUrl: l.body.join_url };
    },
    async subscribeActivities(e) {
        let t = e.map((e) => {
            let { userId: t, applicationId: n, partyId: i, messageId: r, channelId: a } = e;
            return { user_id: t, application_id: n, party_id: i, message_id: r, channel_id: a };
        });
        return (
            await i.Bo.post({
                url: c.Rsh.USER_ACTIVITY_SUBSCRIBE,
                body: { subscriptions: t },
                retries: 1,
                rejectWithError: (0, i.fT)(),
            })
        ).body;
    },
};
