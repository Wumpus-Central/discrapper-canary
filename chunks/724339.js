n.d(t, { W: () => o });
var i = n(353640),
    r = n(121894),
    a = n(943849),
    l = n(654487),
    s = n(818348);
let o = (0, i.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let n = t().logger ?? (0, a.L)({ location: l.rE.QUEST_HOME_DESKTOP });
        if (n.info === s.tE || t().elapsed >= 6e4) return;
        let i = performance.now() - t().startTime;
        i > 6e4 && (i = 6e4);
        let o = { elapsed: i };
        i - t().lastOutputLogTime > 1e3 &&
            (n.info(`QuestHome asset loading duration so far: ${i}ms`), (o.lastOutputLogTime = i)),
            null == t().logger && (o.logger = n),
            (0, r.r)(() => e(o));
    },
}));
