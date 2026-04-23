"use strict";
n.d(t, { A: () => c });
var i = n(636537),
    r = n(228366),
    s = n(58149),
    a = n(451909),
    o = n(734057),
    l = n(308528),
    d = n(720149),
    _ = n(652215),
    u = n(381941);
let c = {
    updateActivity(e) {
        let {
            applicationId: t,
            distributor: n,
            shareActivity: s,
            token: a = null,
            duration: o = 0,
            closed: l = !1,
            exePath: d = null,
            voiceChannelId: u = null,
            sessionId: c = null,
            mediaSessionId: E = null,
        } = e;
        r.h.wait(() => r.h.dispatch({ type: "ACTIVITY_UPDATE_START", applicationId: t, duration: o, distributor: n })),
            i.Bo.post({
                url: _.Rsh.ACTIVITIES,
                body: {
                    application_id: t,
                    token: a,
                    duration: o,
                    share_activity: s,
                    distributor: n,
                    closed: l,
                    exePath: d,
                    voice_channel_id: u,
                    session_id: c,
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
                        duration: o,
                        distributor: n,
                    });
                })
                .catch(() => {
                    r.h.dispatch({ type: "ACTIVITY_UPDATE_FAIL", applicationId: t });
                });
    },
    sendActivityInvite(e) {
        let { channelId: t, type: n, activity: i, content: r, targetUserId: l, location: c } = e,
            E = o.A.getChannel(t);
        if (null == E) return Promise.resolve(null);
        let h = a.Ay.parse(E, r ?? "");
        return d.A.sendMessage(E.id, h, !1, {
            activityAction: { type: n, activity: i, targetUserId: l },
            location: u.Hx.ACTIVITY_SHARE,
        }).then(
            (e) => (
                s.Ay.trackWithMetadata(_.HAw.INVITE_SENT, {
                    location: c,
                    invite_type: i.type === _.$pd.LISTENING ? _.G2g.SPOTIFY : _.G2g.APPLICATION,
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
        let { userId: t, type: n, activity: i, content: r, location: s } = e;
        return l.A.ensurePrivateChannel(t).then((e) =>
            this.sendActivityInvite({ channelId: e, type: n, activity: i, content: r, location: s }),
        );
    },
    async getJoinSecret(e, t, n, r, s) {
        let a = {};
        return (
            null != r && (a.channel_id = r),
            null != s && (a.message_id = s),
            (await i.Bo.get({ url: _.Rsh.USER_ACTIVITY_JOIN(e, t, n), retries: 3, query: a, rejectWithError: !1 })).body
                .secret
        );
    },
    async subscribeActivities(e) {
        let t = e.map((e) => {
            let { userId: t, applicationId: n, partyId: i, messageId: r, channelId: s } = e;
            return { user_id: t, application_id: n, party_id: i, message_id: r, channel_id: s };
        });
        return (
            await i.Bo.post({
                url: _.Rsh.USER_ACTIVITY_SUBSCRIBE,
                body: { subscriptions: t },
                retries: 1,
                rejectWithError: !1,
            })
        ).body;
    },
};
