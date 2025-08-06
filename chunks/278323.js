n.d(t, { Z: () => d });
var r = n(544891),
    i = n(570140),
    o = n(367907),
    a = n(957730),
    s = n(592125),
    l = n(493683),
    c = n(904245),
    u = n(981631);
let d = {
    updateActivity(e) {
        let {
            applicationId: t,
            distributor: n,
            shareActivity: o,
            token: a = null,
            duration: s = 0,
            closed: l = !1,
            exePath: c = null,
            voiceChannelId: d = null,
            sessionId: f = null,
            mediaSessionId: _ = null,
        } = e;
        i.Z.wait(() =>
            i.Z.dispatch({
                type: "ACTIVITY_UPDATE_START",
                applicationId: t,
                duration: s,
                distributor: n,
            }),
        ),
            r.tn
                .post({
                    url: u.ANM.ACTIVITIES,
                    body: {
                        application_id: t,
                        token: a,
                        duration: s,
                        share_activity: o,
                        distributor: n,
                        closed: l,
                        exePath: c,
                        voice_channel_id: d,
                        session_id: f,
                        media_session_id: _,
                    },
                    retries: 1,
                    oldFormErrors: !0,
                    rejectWithError: !0,
                })
                .then((e) => {
                    let {
                        body: { token: r },
                    } = e;
                    i.Z.dispatch({
                        type: "ACTIVITY_UPDATE_SUCCESS",
                        applicationId: t,
                        token: r,
                        duration: s,
                        distributor: n,
                    });
                })
                .catch(() => {
                    i.Z.dispatch({
                        type: "ACTIVITY_UPDATE_FAIL",
                        applicationId: t,
                    });
                });
    },
    sendActivityInvite(e) {
        let { channelId: t, type: n, activity: r, content: i, targetUserId: l, location: d } = e,
            f = s.Z.getChannel(t);
        if (null == f) return Promise.resolve(null);
        let _ = a.ZP.parse(f, null != i ? i : "");
        return c.Z.sendMessage(f.id, _, !1, {
            activityAction: {
                type: n,
                activity: r,
                targetUserId: l,
            },
        }).then(
            (e) => (
                o.ZP.trackWithMetadata(u.rMx.INVITE_SENT, {
                    location: d,
                    invite_type: r.type === u.IIU.LISTENING ? u.dAT.SPOTIFY : u.dAT.APPLICATION,
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
        let { userId: t, type: n, activity: r, content: i, location: o } = e;
        return l.Z.ensurePrivateChannel(t).then((e) =>
            this.sendActivityInvite({
                channelId: e,
                type: n,
                activity: r,
                content: i,
                location: o,
            }),
        );
    },
    async getJoinSecret(e, t, n, i, o) {
        let a = {};
        return (
            null != i && (a.channel_id = i),
            null != o && (a.message_id = o),
            (
                await r.tn.get({
                    url: u.ANM.USER_ACTIVITY_JOIN(e, t, n),
                    retries: 3,
                    query: a,
                    rejectWithError: !1,
                })
            ).body.secret
        );
    },
    async subscribeActivities(e) {
        let t = e.map((e) => {
            let { userId: t, applicationId: n, partyId: r, messageId: i, channelId: o } = e;
            return {
                user_id: t,
                application_id: n,
                party_id: r,
                message_id: i,
                channel_id: o,
            };
        });
        return (
            await r.tn.post({
                url: u.ANM.USER_ACTIVITY_SUBSCRIBE,
                body: { subscriptions: t },
                retries: 1,
                rejectWithError: !1,
            })
        ).body;
    },
};
