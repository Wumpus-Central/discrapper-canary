"use strict";
n.d(t, { A: () => _ });
var r = n(562465),
    i = n(73153),
    a = n(58149),
    s = n(451909),
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
            shareActivity: a,
            token: s = null,
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
                    token: s,
                    duration: o,
                    share_activity: a,
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
        let p = s.Ay.parse(f, i ?? "");
        return u.A.sendMessage(f.id, p, !1, {
            activityAction: { type: n, activity: r, targetUserId: l },
            location: d.Hx.ACTIVITY_SHARE,
        }).then(
            (e) => (
                a.Ay.trackWithMetadata(c.HAw.INVITE_SENT, {
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
        let { userId: t, type: n, activity: r, content: i, location: a } = e;
        return l.A.ensurePrivateChannel(t).then((e) =>
            this.sendActivityInvite({ channelId: e, type: n, activity: r, content: i, location: a }),
        );
    },
    async getJoinSecret(e, t, n, i, a) {
        let s = {};
        return (
            null != i && (s.channel_id = i),
            null != a && (s.message_id = a),
            (await r.Bo.get({ url: c.Rsh.USER_ACTIVITY_JOIN(e, t, n), retries: 3, query: s, rejectWithError: !1 })).body
                .secret
        );
    },
    async subscribeActivities(e) {
        let t = e.map((e) => {
            let { userId: t, applicationId: n, partyId: r, messageId: i, channelId: a } = e;
            return { user_id: t, application_id: n, party_id: r, message_id: i, channel_id: a };
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
