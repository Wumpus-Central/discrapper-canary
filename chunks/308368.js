n.d(t, {
    A: () => f,
});
var r = n(562465),
    i = n(73153),
    a = n(58149),
    s = n(451909),
    o = n(734057),
    l = n(308528),
    c = n(843472),
    u = n(652215),
    d = n(381941);
let f = {
    updateActivity(e) {
        let {
            applicationId: t,
            distributor: n,
            shareActivity: a,
            token: s = null,
            duration: o = 0,
            closed: l = !1,
            exePath: c = null,
            voiceChannelId: d = null,
            sessionId: f = null,
            mediaSessionId: p = null,
        } = e;
        i.h.wait(() =>
            i.h.dispatch({
                type: "ACTIVITY_UPDATE_START",
                applicationId: t,
                duration: o,
                distributor: n,
            }),
        ),
            r.Bo.post({
                url: u.Rsh.ACTIVITIES,
                body: {
                    application_id: t,
                    token: s,
                    duration: o,
                    share_activity: a,
                    distributor: n,
                    closed: l,
                    exePath: c,
                    voice_channel_id: d,
                    session_id: f,
                    media_session_id: p,
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
                    i.h.dispatch({
                        type: "ACTIVITY_UPDATE_FAIL",
                        applicationId: t,
                    });
                });
    },
    sendActivityInvite(e) {
        let { channelId: t, type: n, activity: r, content: i, targetUserId: l, location: f } = e,
            p = o.A.getChannel(t);
        if (null == p) return Promise.resolve(null);
        let _ = s.Ay.parse(p, null != i ? i : "");
        return c.A.sendMessage(p.id, _, !1, {
            activityAction: {
                type: n,
                activity: r,
                targetUserId: l,
            },
            location: d.Hx.ACTIVITY_SHARE,
        }).then(
            (e) => (
                a.Ay.trackWithMetadata(u.HAw.INVITE_SENT, {
                    location: f,
                    invite_type: r.type === u.$pd.LISTENING ? u.G2g.SPOTIFY : u.G2g.APPLICATION,
                    application_id: r.application_id,
                    guild_id: p.getGuildId(),
                    channel_id: p.id,
                    message_id: null != e ? e.body.id : null,
                }),
                Promise.resolve(p)
            ),
            (e) => Promise.reject(e),
        );
    },
    sendActivityInviteUser(e) {
        let { userId: t, type: n, activity: r, content: i, location: a } = e;
        return l.A.ensurePrivateChannel(t).then((e) =>
            this.sendActivityInvite({
                channelId: e,
                type: n,
                activity: r,
                content: i,
                location: a,
            }),
        );
    },
    async getJoinSecret(e, t, n, i, a) {
        let s = {};
        return (
            null != i && (s.channel_id = i),
            null != a && (s.message_id = a),
            (
                await r.Bo.get({
                    url: u.Rsh.USER_ACTIVITY_JOIN(e, t, n),
                    retries: 3,
                    query: s,
                    rejectWithError: !1,
                })
            ).body.secret
        );
    },
    async subscribeActivities(e) {
        let t = e.map((e) => {
            let { userId: t, applicationId: n, partyId: r, messageId: i, channelId: a } = e;
            return {
                user_id: t,
                application_id: n,
                party_id: r,
                message_id: i,
                channel_id: a,
            };
        });
        return (
            await r.Bo.post({
                url: u.Rsh.USER_ACTIVITY_SUBSCRIBE,
                body: {
                    subscriptions: t,
                },
                retries: 1,
                rejectWithError: !1,
            })
        ).body;
    },
};
