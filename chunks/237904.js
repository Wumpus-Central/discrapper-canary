n.d(t, { Z: () => d });
var i,
    l,
    a,
    r = n(442837),
    s = n(570140);
let o = {};
class c extends (a = r.ZP.Store) {
    getFollowerStatsForChannel(e) {
        return o[e];
    }
}
(l = 'ChannelFollowerStatsStore'),
    (i = 'displayName') in c
        ? Object.defineProperty(c, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[i] = l);
let d = new c(s.Z, {
    CONNECTION_OPEN: function () {
        o = {};
    },
    CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function (e) {
        let { channelId: t, stats: n } = e;
        (n = null != n ? n : {}),
            (o[t] = {
                loadingStatus: 'succeeded',
                lastFetched: Date.now(),
                channelsFollowing: n.channels_following,
                guildMembers: n.guild_members,
                guildsFollowing: n.guilds_following,
                usersSeenEver: n.users_seen_ever,
                subscribersGainedSinceLastPost: n.subscribers_gained_since_last_post,
                subscribersLostSinceLastPost: n.subscribers_lost_since_last_post
            });
    },
    CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function (e) {
        let { channelId: t } = e;
        o[t] = {
            loadingStatus: 'failed',
            lastFetched: Date.now(),
            channelsFollowing: 0,
            guildMembers: 0,
            guildsFollowing: 0,
            usersSeenEver: 0,
            subscribersGainedSinceLastPost: 0,
            subscribersLostSinceLastPost: 0
        };
    }
});
