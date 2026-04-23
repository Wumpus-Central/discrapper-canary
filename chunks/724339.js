s.d(t, { W: () => o });
var n = s(353640),
    l = s(121894),
    a = s(851936),
    r = s(654487),
    i = s(818348);
let o = (0, n.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, a.L)({ location: r.rE.QUEST_HOME_DESKTOP });
        if (s.info === i.tE || t().elapsed >= 6e4) return;
        let n = performance.now() - t().startTime;
        n > 6e4 && (n = 6e4);
        let o = { elapsed: n };
        n - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${n}ms`), (o.lastOutputLogTime = n)),
            null == t().logger && (o.logger = s),
            (0, l.r)(() => e(o));
    },
}));
