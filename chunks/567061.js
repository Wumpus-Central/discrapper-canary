n.d(t, { E: () => l });
var a = n(64700),
    i = n(4106),
    s = n(105971);
function l(e) {
    return a.useCallback(async () => {
        s.k.trackFeedShown({ variant: e ? "DotShown" : "NoDotShown", homeSessionId: "gravity_refresh" }),
            await i.A.fetchDehydrated({ isReloading: !0 }),
            await i.A.reloadICYMITab(),
            await i.A.getGuildChannelScores(),
            i.A.getRecommendedGuilds();
    }, [e]);
}
