n.d(t, { Z: () => f });
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let s = {};
function l() {
    s = {};
}
function c(e) {
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
}
function u(e) {
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
}
class d extends (r = i.ZP.Store) {
    getFollowerStatsForChannel(e) {
        return s[e];
    }
}
a(d, "displayName", "ChannelFollowerStatsStore");
let f = new d(o.Z, {
    CONNECTION_OPEN: l,
    CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: c,
    CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: u,
});
