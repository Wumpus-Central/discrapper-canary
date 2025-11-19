n.d(t, { G: () => a });
var r = n(473749),
    i = n(948053),
    l = n(944596);
function a(e) {
    return r.useCallback(async () => {
        l.m.trackFeedShown({
            variant: null != e && e ? "DotShown" : "NoDotShown",
            homeSessionId: "gravity_refresh",
        }),
            await i.Z.fetchDehydrated({ isReloading: !0 }),
            await i.Z.reloadICYMITab(),
            await i.Z.getGuildChannelScores(),
            i.Z.getRecommendedGuilds();
    }, [e]);
}
