s.d(n, { Z: () => u });
var t,
    l,
    i,
    o = s(442837),
    a = s(570140);
let r = {};
class c extends (i = o.ZP.Store) {
    getFollowerStatsForChannel(e) {
        return r[e];
    }
}
(l = 'ChannelFollowerStatsStore'),
    (t = 'displayName') in c
        ? Object.defineProperty(c, t, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[t] = l);
let u = new c(a.Z, {
    CONNECTION_OPEN: function () {
        r = {};
    },
    CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function (e) {
        let { channelId: n, stats: s } = e;
        (s = null != s ? s : {}),
            (r[n] = {
                loadingStatus: 'succeeded',
                lastFetched: Date.now(),
                channelsFollowing: s.channels_following,
                guildMembers: s.guild_members,
                guildsFollowing: s.guilds_following,
                usersSeenEver: s.users_seen_ever,
                subscribersGainedSinceLastPost: s.subscribers_gained_since_last_post,
                subscribersLostSinceLastPost: s.subscribers_lost_since_last_post
            });
    },
    CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function (e) {
        let { channelId: n } = e;
        r[n] = {
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
