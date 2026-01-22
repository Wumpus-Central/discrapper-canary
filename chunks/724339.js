n.d(t, { W: () => o });
var r = n(353640),
    i = n(121894),
    l = n(943849),
    a = n(654487),
    s = n(818348);
let o = (0, r.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5000,
    logger: null,
    registerAssetLoad: () => {
        var n;
        let r = null != (n = t().logger) ? n : (0, l.L)({ location: a.rE.QUEST_HOME_DESKTOP });
        if (r.info === s.tE || t().elapsed >= 60000) return;
        let o = performance.now() - t().startTime;
        o > 60000 && (o = 60000);
        let c = { elapsed: o };
        o - t().lastOutputLogTime > 1000 &&
            (r.info("QuestHome asset loading duration so far: ".concat(o, "ms")), (c.lastOutputLogTime = o)),
            null == t().logger && (c.logger = r),
            (0, i.r)(() => e(c));
    },
}));
