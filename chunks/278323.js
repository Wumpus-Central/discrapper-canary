n.d(t, { Z: () => d });
var r = n(544891),
    i = n(570140),
    a = n(367907),
    o = n(957730),
    s = n(592125),
    l = n(493683),
    c = n(904245),
    u = n(981631);
let d = {
    updateActivity(e) {
        let { applicationId: t, distributor: n, shareActivity: a, token: o = null, duration: s = 0, closed: l = !1, exePath: c = null, voiceChannelId: d = null, sessionId: f = null, mediaSessionId: _ = null } = e;
        i.Z.wait(() =>
            i.Z.dispatch({
                type: 'ACTIVITY_UPDATE_START',
                applicationId: t,
                duration: s,
                distributor: n
            })
        ),
            r.tn
                .post({
                    url: u.ANM.ACTIVITIES,
                    body: {
                        application_id: t,
                        token: o,
                        duration: s,
                        share_activity: a,
                        distributor: n,
                        closed: l,
                        exePath: c,
                        voice_channel_id: d,
                        session_id: f,
                        media_session_id: _
                    },
                    retries: 1,
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then((e) => {
                    let {
                        body: { token: r }
                    } = e;
                    i.Z.dispatch({
                        type: 'ACTIVITY_UPDATE_SUCCESS',
                        applicationId: t,
                        token: r,
                        duration: s,
                        distributor: n
                    });
                })
                .catch(() => {
                    i.Z.dispatch({
                        type: 'ACTIVITY_UPDATE_FAIL',
                        applicationId: t
                    });
                });
    },
    sendActivityInvite(e) {
        let { channelId: t, type: n, activity: r, content: i, location: l } = e,
            d = s.Z.getChannel(t);
        if (null == d) return Promise.resolve(null);
        let f = o.ZP.parse(d, null != i ? i : '');
        return c.Z.sendMessage(d.id, f, !1, {
            activityAction: {
                type: n,
                activity: r
            }
        }).then(
            (e) => (
                a.ZP.trackWithMetadata(u.rMx.INVITE_SENT, {
                    location: l,
                    invite_type: r.type === u.IIU.LISTENING ? u.dAT.SPOTIFY : u.dAT.APPLICATION,
                    application_id: r.application_id,
                    guild_id: d.getGuildId(),
                    channel_id: d.id,
                    message_id: null != e ? e.body.id : null
                }),
                Promise.resolve(d)
            ),
            (e) => Promise.reject(e)
        );
    },
    sendActivityInviteUser(e) {
        let { userId: t, type: n, activity: r, content: i, location: a } = e;
        return l.Z.ensurePrivateChannel(t).then((e) =>
            this.sendActivityInvite({
                channelId: e,
                type: n,
                activity: r,
                content: i,
                location: a
            })
        );
    },
    async getJoinSecret(e, t, n, i, a) {
        let o = {};
        return (
            null != i && (o.channel_id = i),
            null != a && (o.message_id = a),
            (
                await r.tn.get({
                    url: u.ANM.USER_ACTIVITY_JOIN(e, t, n),
                    retries: 3,
                    query: o,
                    rejectWithError: !1
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
                channel_id: a
            };
        });
        return (
            await r.tn.post({
                url: u.ANM.USER_ACTIVITY_SUBSCRIBE,
                body: { subscriptions: t },
                retries: 1,
                rejectWithError: !1
            })
        ).body;
    }
};
