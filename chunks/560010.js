"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let s = {};
class a extends i.Ay.Store {
    static displayName = "ChannelFollowerStatsStore";
    getFollowerStatsForChannel(e) {
        return s[e];
    }
}
let o = new a(r.h, {
    CONNECTION_OPEN: function () {
        s = {};
    },
    CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function (e) {
        let { channelId: t, stats: n } = e;
        (n = null != n ? n : {}),
            (s[t] = {
                loadingStatus: "succeeded",
                lastFetched: Date.now(),
                channelsFollowing: n.channels_following,
                guildMembers: n.guild_members,
                guildsFollowing: n.guilds_following,
                usersSeenEver: n.users_seen_ever,
                subscribersGainedSinceLastPost: n.subscribers_gained_since_last_post,
                subscribersLostSinceLastPost: n.subscribers_lost_since_last_post,
            });
    },
    CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function (e) {
        let { channelId: t } = e;
        s[t] = {
            loadingStatus: "failed",
            lastFetched: Date.now(),
            channelsFollowing: 0,
            guildMembers: 0,
            guildsFollowing: 0,
            usersSeenEver: 0,
            subscribersGainedSinceLastPost: 0,
            subscribersLostSinceLastPost: 0,
        };
    },
});
