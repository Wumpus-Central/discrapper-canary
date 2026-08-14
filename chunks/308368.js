"use strict";
n.d(t, { A: () => A });
var i = n(636537),
    r = n(228366),
    a = n(643747),
    s = n(361310),
    l = n(95561),
    o = n(451909),
    d = n(734057),
    c = n(308528),
    u = n(148494),
    _ = n(652215),
    E = n(381941);
let A = {
    updateActivity(e) {
        let {
            applicationId: t,
            distributor: n,
            shareActivity: a,
            token: s = null,
            duration: l = 0,
            closed: o = !1,
            exePath: d = null,
            voiceChannelId: c = null,
            sessionId: u = null,
            mediaSessionId: E = null,
        } = e;
        r.h.wait(() => r.h.dispatch({ type: "ACTIVITY_UPDATE_START", applicationId: t, duration: l, distributor: n })),
            i.Bo.post({
                url: _.Rsh.ACTIVITIES,
                body: {
                    application_id: t,
                    token: s,
                    duration: l,
                    share_activity: a,
                    distributor: n,
                    closed: o,
                    exePath: d,
                    voice_channel_id: c,
                    session_id: u,
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
        let { channelId: t, type: n, activity: i, content: r, targetUserId: c, location: A } = e,
            h = d.A.getChannel(t);
        if (null == h) return Promise.resolve(null);
        let I = o.Ay.parse(h, r ?? "");
        return u.A.sendMessage(h.id, I, !1, {
            activityAction: { type: n, activity: i, targetUserId: c },
            location: E.Hx.ACTIVITY_SHARE,
        }).then(
            (e) => {
                l.Ay.trackWithMetadata(_.HAw.INVITE_SENT, {
                    location: A,
                    invite_type: i.type === _.$pd.LISTENING ? _.G2g.SPOTIFY : _.G2g.APPLICATION,
                    application_id: i.application_id,
                    guild_id: h.getGuildId(),
                    channel_id: h.id,
                    message_id: null != e ? e.body.id : null,
                });
                let t = (0, s.N)(i);
                return null != t && (0, a.y)(t, h.id), Promise.resolve(h);
            },
            (e) => Promise.reject(e),
        );
    },
    sendActivityInviteUser(e) {
        let { userId: t, type: n, activity: i, content: r, location: a } = e;
        return c.A.ensurePrivateChannel(t).then((e) =>
            this.sendActivityInvite({ channelId: e, type: n, activity: i, content: r, location: a }),
        );
    },
    async getJoinSecret(e, t, n, r, a) {
        let s = {};
        null != r && (s.channel_id = r), null != a && (s.message_id = a);
        let l = await i.Bo.get({
            url: _.Rsh.USER_ACTIVITY_JOIN(e, t, n),
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
                url: _.Rsh.USER_ACTIVITY_SUBSCRIBE,
                body: { subscriptions: t },
                retries: 1,
                rejectWithError: (0, i.fT)(),
            })
        ).body;
    },
};
