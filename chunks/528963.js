n.d(t, { Z: () => r });
var i = n(544891),
    l = n(570140),
    a = n(981631);
let r = {
    createChannelFollower: (e, t) =>
        i.tn.post({
            url: a.ANM.CHANNEL_FOLLOWERS(t),
            body: { webhook_channel_id: e },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    async fetchChannelFollowerStats(e) {
        l.Z.dispatch({ type: 'CHANNEL_FOLLOWER_STATS_FETCH_START' });
        try {
            let t = await i.tn.get({
                url: a.ANM.CHANNEL_FOLLOWER_STATS(e),
                body: { channel_id: e },
                oldFormErrors: !0,
                rejectWithError: !0
            });
            l.Z.dispatch({
                type: 'CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS',
                stats: t.body,
                channelId: e
            });
        } catch (t) {
            l.Z.dispatch({
                type: 'CHANNEL_FOLLOWER_STATS_FETCH_FAILURE',
                channelId: e
            });
        }
    },
    dismissPublishBump(e) {
        l.Z.dispatch({
            type: 'CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED',
            messageId: e
        });
    },
    permanentlyHidePublishBump(e) {
        l.Z.dispatch({
            type: 'CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY',
            channelId: e
        });
    }
};
