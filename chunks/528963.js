n.d(t, { Z: () => l });
var r = n(544891),
    i = n(570140),
    a = n(981631);
let l = {
    createChannelFollower: (e, t) =>
        r.tn.post({
            url: a.ANM.CHANNEL_FOLLOWERS(t),
            body: { webhook_channel_id: e },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    async fetchChannelFollowerStats(e) {
        i.Z.dispatch({ type: 'CHANNEL_FOLLOWER_STATS_FETCH_START' });
        try {
            let t = await r.tn.get({
                url: a.ANM.CHANNEL_FOLLOWER_STATS(e),
                body: { channel_id: e },
                oldFormErrors: !0,
                rejectWithError: !0
            });
            i.Z.dispatch({
                type: 'CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS',
                stats: t.body,
                channelId: e
            });
        } catch (t) {
            i.Z.dispatch({
                type: 'CHANNEL_FOLLOWER_STATS_FETCH_FAILURE',
                channelId: e
            });
        }
    },
    dismissPublishBump(e) {
        i.Z.dispatch({
            type: 'CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED',
            messageId: e
        });
    },
    permanentlyHidePublishBump(e) {
        i.Z.dispatch({
            type: 'CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY',
            channelId: e
        });
    }
};
