t.d(s, { A: () => a });
var l = t(17928),
    n = t(228366);
let i = {};
class o extends l.Ay.Store {
    static displayName = "ChannelFollowerStatsStore";
    getFollowerStatsForChannel(e) {
        return i[e];
    }
}
let a = new o(n.h, {
    CONNECTION_OPEN: function () {
        i = {};
    },
    CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function (e) {
        let { channelId: s, stats: t } = e;
        (t = null != t ? t : {}),
            (i[s] = {
                loadingStatus: "succeeded",
                lastFetched: Date.now(),
                channelsFollowing: t.channels_following,
                guildMembers: t.guild_members,
                guildsFollowing: t.guilds_following,
                usersSeenEver: t.users_seen_ever,
                subscribersGainedSinceLastPost: t.subscribers_gained_since_last_post,
                subscribersLostSinceLastPost: t.subscribers_lost_since_last_post,
            });
    },
    CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function (e) {
        let { channelId: s } = e;
        i[s] = {
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
