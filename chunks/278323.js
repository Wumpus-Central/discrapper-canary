n.d(t, { Z: () => d });
var i = n(544891),
    r = n(570140),
    a = n(367907),
    s = n(957730),
    o = n(592125),
    l = n(493683),
    u = n(904245),
    c = n(981631);
let d = {
    updateActivity(e) {
        let { applicationId: t, distributor: n, shareActivity: a, token: s = null, duration: o = 0, closed: l = !1, exePath: u = null, voiceChannelId: d = null, sessionId: f = null, mediaSessionId: _ = null } = e;
        r.Z.wait(() =>
            r.Z.dispatch({
                type: 'ACTIVITY_UPDATE_START',
                applicationId: t,
                duration: o,
                distributor: n
            })
        ),
            i.tn
                .post({
                    url: c.ANM.ACTIVITIES,
                    body: {
                        application_id: t,
                        token: s,
                        duration: o,
                        share_activity: a,
                        distributor: n,
                        closed: l,
                        exePath: u,
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
                        body: { token: i }
                    } = e;
                    r.Z.dispatch({
                        type: 'ACTIVITY_UPDATE_SUCCESS',
                        applicationId: t,
                        token: i,
                        duration: o,
                        distributor: n
                    });
                })
                .catch(() => {
                    r.Z.dispatch({
                        type: 'ACTIVITY_UPDATE_FAIL',
                        applicationId: t
                    });
                });
    },
    sendActivityInvite(e) {
        let { channelId: t, type: n, activity: i, content: r, location: l } = e,
            d = o.Z.getChannel(t);
        if (null == d) return Promise.resolve(null);
        let f = s.ZP.parse(d, null != r ? r : '');
        return u.Z.sendMessage(d.id, f, !1, {
            activityAction: {
                type: n,
                activity: i
            }
        }).then(
            (e) => (
                a.ZP.trackWithMetadata(c.rMx.INVITE_SENT, {
                    location: l,
                    invite_type: i.type === c.IIU.LISTENING ? c.dAT.SPOTIFY : c.dAT.APPLICATION,
                    application_id: i.application_id,
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
        let { userId: t, type: n, activity: i, content: r, location: a } = e;
        return l.Z.ensurePrivateChannel(t).then((e) =>
            this.sendActivityInvite({
                channelId: e,
                type: n,
                activity: i,
                content: r,
                location: a
            })
        );
    },
    async getJoinSecret(e, t, n, r, a) {
        let s = {};
        return (
            null != r && (s.channel_id = r),
            null != a && (s.message_id = a),
            (
                await i.tn.get({
                    url: c.ANM.USER_ACTIVITY_JOIN(e, t, n),
                    retries: 3,
                    query: s,
                    rejectWithError: !1
                })
            ).body.secret
        );
    },
    async subscribeActivities(e) {
        let t = e.map((e) => {
            let { userId: t, applicationId: n, partyId: i, messageId: r, channelId: a } = e;
            return {
                user_id: t,
                application_id: n,
                party_id: i,
                message_id: r,
                channel_id: a
            };
        });
        return (
            await i.tn.post({
                url: c.ANM.USER_ACTIVITY_SUBSCRIBE,
                body: { subscriptions: t },
                retries: 1,
                rejectWithError: !1
            })
        ).body;
    }
};
