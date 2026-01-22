n.d(t, { E: () => a });
var r = n(64700),
    i = n(4106),
    l = n(105971);
function a(e) {
    return r.useCallback(async () => {
        l.k.trackFeedShown({
            variant: null != e && e ? "DotShown" : "NoDotShown",
            homeSessionId: "gravity_refresh",
        }),
            await i.A.fetchDehydrated({ isReloading: !0 }),
            await i.A.reloadICYMITab(),
            await i.A.getGuildChannelScores(),
            i.A.getRecommendedGuilds();
    }, [e]);
}
