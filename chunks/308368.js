n.d(t, { A: () => E });
var i = n(350835),
    r = n(636537),
    a = n(73153),
    s = n(666860),
    l = n(451909),
    o = n(734057),
    d = n(308528),
    c = n(148494),
    u = n(652215),
    _ = n(381941);
let E = {
    updateActivity(e) {
        let {
            applicationId: t,
            distributor: n,
            shareActivity: i,
            token: s = null,
            duration: l = 0,
            closed: o = !1,
            exePath: d = null,
            voiceChannelId: c = null,
            sessionId: _ = null,
            mediaSessionId: E = null,
        } = e;
        (a.h.dispatch({ type: "ACTIVITY_UPDATE_START", applicationId: t, duration: l, distributor: n }),
            r.Bo.post({
                url: u.Rsh.ACTIVITIES,
                body: {
                    application_id: t,
                    token: s,
                    duration: l,
                    share_activity: i,
                    distributor: n,
                    closed: o,
                    exePath: d,
                    voice_channel_id: c,
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
                    a.h.dispatch({
                        type: "ACTIVITY_UPDATE_SUCCESS",
                        applicationId: t,
                        token: i,
                        duration: l,
                        distributor: n,
                    });
                })
                .catch(() => {
                    a.h.dispatch({ type: "ACTIVITY_UPDATE_FAIL", applicationId: t });
                }));
    },
    sendActivityInvite(e) {
        let { channelId: t, type: n, activity: r, content: a, targetUserId: d, location: E } = e,
            A = o.A.getChannel(t);
        if (null == A) return Promise.resolve(null);
        let h = l.Ay.parse(A, a ?? "");
        return c.A.sendMessage(A.id, h, !1, {
            activityAction: { type: n, activity: r, targetUserId: d },
            location: _.Hx.ACTIVITY_SHARE,
        }).then(
            (e) => (
                s.Ay.trackWithMetadata(u.HAw.INVITE_SENT, {
                    location: E,
                    invite_type: r?.type === i.$.LISTENING ? u.G2g.SPOTIFY : u.G2g.APPLICATION,
                    application_id: r?.application_id,
                    guild_id: A.getGuildId(),
                    channel_id: A.id,
                    message_id: null != e ? e.body.id : null,
                }),
                Promise.resolve(A)
            ),
            (e) => Promise.reject(e),
        );
    },
    sendActivityInviteUser(e) {
        let { userId: t, type: n, activity: i, content: r, location: a } = e;
        return d.A.ensurePrivateChannel(t).then((e) =>
            this.sendActivityInvite({ channelId: e, type: n, activity: i, content: r, location: a }),
        );
    },
    async getJoinSecret(e, t, n, i, a) {
        let s = {};
        (null != i && (s.channel_id = i), null != a && (s.message_id = a));
        let l = await r.Bo.get({
            url: u.Rsh.USER_ACTIVITY_JOIN(e, t, n),
            retries: 3,
            query: s,
            rejectWithError: (0, r.fT)(),
        });
        return { secret: l.body.secret, joinUrl: l.body.join_url };
    },
    async subscribeActivities(e) {
        let t = e.map((e) => {
            let { userId: t, applicationId: n, partyId: i, messageId: r, channelId: a } = e;
            return { user_id: t, application_id: n, party_id: i, message_id: r, channel_id: a };
        });
        return (
            await r.Bo.post({
                url: u.Rsh.USER_ACTIVITY_SUBSCRIBE,
                body: { subscriptions: t },
                retries: 1,
                rejectWithError: (0, r.fT)(),
            })
        ).body;
    },
};
