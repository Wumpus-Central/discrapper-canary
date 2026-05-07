"use strict";
n.d(t, { A: () => _ });
var i = n(636537),
    r = n(228366),
    s = n(95561),
    a = n(451909),
    o = n(734057),
    l = n(308528),
    u = n(720149),
    c = n(652215),
    d = n(381941);
let _ = {
    updateActivity(e) {
        let {
            applicationId: t,
            distributor: n,
            shareActivity: s,
            token: a = null,
            duration: o = 0,
            closed: l = !1,
            exePath: u = null,
            voiceChannelId: d = null,
            sessionId: _ = null,
            mediaSessionId: f = null,
        } = e;
        r.h.wait(() => r.h.dispatch({ type: "ACTIVITY_UPDATE_START", applicationId: t, duration: o, distributor: n })),
            i.Bo.post({
                url: c.Rsh.ACTIVITIES,
                body: {
                    application_id: t,
                    token: a,
                    duration: o,
                    share_activity: s,
                    distributor: n,
                    closed: l,
                    exePath: u,
                    voice_channel_id: d,
                    session_id: _,
                    media_session_id: f,
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
                        duration: o,
                        distributor: n,
                    });
                })
                .catch(() => {
                    r.h.dispatch({ type: "ACTIVITY_UPDATE_FAIL", applicationId: t });
                });
    },
    sendActivityInvite(e) {
        let { channelId: t, type: n, activity: i, content: r, targetUserId: l, location: _ } = e,
            f = o.A.getChannel(t);
        if (null == f) return Promise.resolve(null);
        let h = a.Ay.parse(f, r ?? "");
        return u.A.sendMessage(f.id, h, !1, {
            activityAction: { type: n, activity: i, targetUserId: l },
            location: d.Hx.ACTIVITY_SHARE,
        }).then(
            (e) => (
                s.Ay.trackWithMetadata(c.HAw.INVITE_SENT, {
                    location: _,
                    invite_type: i.type === c.$pd.LISTENING ? c.G2g.SPOTIFY : c.G2g.APPLICATION,
                    application_id: i.application_id,
                    guild_id: f.getGuildId(),
                    channel_id: f.id,
                    message_id: null != e ? e.body.id : null,
                }),
                Promise.resolve(f)
            ),
            (e) => Promise.reject(e),
        );
    },
    sendActivityInviteUser(e) {
        let { userId: t, type: n, activity: i, content: r, location: s } = e;
        return l.A.ensurePrivateChannel(t).then((e) =>
            this.sendActivityInvite({ channelId: e, type: n, activity: i, content: r, location: s }),
        );
    },
    async getJoinSecret(e, t, n, r, s) {
        let a = {};
        null != r && (a.channel_id = r), null != s && (a.message_id = s);
        let o = await i.Bo.get({ url: c.Rsh.USER_ACTIVITY_JOIN(e, t, n), retries: 3, query: a, rejectWithError: !1 });
        return { secret: o.body.secret, joinUrl: o.body.join_url };
    },
    async subscribeActivities(e) {
        let t = e.map((e) => {
            let { userId: t, applicationId: n, partyId: i, messageId: r, channelId: s } = e;
            return { user_id: t, application_id: n, party_id: i, message_id: r, channel_id: s };
        });
        return (
            await i.Bo.post({
                url: c.Rsh.USER_ACTIVITY_SUBSCRIBE,
                body: { subscriptions: t },
                retries: 1,
                rejectWithError: !1,
            })
        ).body;
    },
};
