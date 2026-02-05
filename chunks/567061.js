n.d(t, { E: () => l });
var i = n(64700),
    r = n(4106),
    a = n(105971);
function l(e) {
    return i.useCallback(async () => {
        a.k.trackFeedShown({ variant: e ? "DotShown" : "NoDotShown", homeSessionId: "gravity_refresh" }),
            await r.A.fetchDehydrated({ isReloading: !0 }),
            await r.A.reloadICYMITab(),
            await r.A.getGuildChannelScores(),
            r.A.getRecommendedGuilds();
    }, [e]);
}
