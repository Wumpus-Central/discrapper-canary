"use strict";
n.d(t, { A: () => _ });
var r = n(562465),
    i = n(73153),
    s = n(58149),
    a = n(451909),
    o = n(734057),
    l = n(308528),
    u = n(843472),
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
        i.h.wait(() => i.h.dispatch({ type: "ACTIVITY_UPDATE_START", applicationId: t, duration: o, distributor: n })),
            r.Bo.post({
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
                        body: { token: r },
                    } = e;
                    i.h.dispatch({
                        type: "ACTIVITY_UPDATE_SUCCESS",
                        applicationId: t,
                        token: r,
                        duration: o,
                        distributor: n,
                    });
                })
                .catch(() => {
                    i.h.dispatch({ type: "ACTIVITY_UPDATE_FAIL", applicationId: t });
                });
    },
    sendActivityInvite(e) {
        let { channelId: t, type: n, activity: r, content: i, targetUserId: l, location: _ } = e,
            f = o.A.getChannel(t);
        if (null == f) return Promise.resolve(null);
        let p = a.Ay.parse(f, i ?? "");
        return u.A.sendMessage(f.id, p, !1, {
            activityAction: { type: n, activity: r, targetUserId: l },
            location: d.Hx.ACTIVITY_SHARE,
        }).then(
            (e) => (
                s.Ay.trackWithMetadata(c.HAw.INVITE_SENT, {
                    location: _,
                    invite_type: r.type === c.$pd.LISTENING ? c.G2g.SPOTIFY : c.G2g.APPLICATION,
                    application_id: r.application_id,
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
        let { userId: t, type: n, activity: r, content: i, location: s } = e;
        return l.A.ensurePrivateChannel(t).then((e) =>
            this.sendActivityInvite({ channelId: e, type: n, activity: r, content: i, location: s }),
        );
    },
    async getJoinSecret(e, t, n, i, s) {
        let a = {};
        return (
            null != i && (a.channel_id = i),
            null != s && (a.message_id = s),
            (await r.Bo.get({ url: c.Rsh.USER_ACTIVITY_JOIN(e, t, n), retries: 3, query: a, rejectWithError: !1 })).body
                .secret
        );
    },
    async subscribeActivities(e) {
        let t = e.map((e) => {
            let { userId: t, applicationId: n, partyId: r, messageId: i, channelId: s } = e;
            return { user_id: t, application_id: n, party_id: r, message_id: i, channel_id: s };
        });
        return (
            await r.Bo.post({
                url: c.Rsh.USER_ACTIVITY_SUBSCRIBE,
                body: { subscriptions: t },
                retries: 1,
                rejectWithError: !1,
            })
        ).body;
    },
};
