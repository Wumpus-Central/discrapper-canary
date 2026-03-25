n.d(t, { w: () => o });
var i = n(311907),
    s = n(926919),
    l = n(419954),
    a = n(111162),
    r = n(780964);
let o = (0, l.zD)(r.X.QUEST_LOGGING, {
    useTitle: () => "Enable Quests Debug Logging",
    useSubtitle: () => "Logs quest lifecycle events to the developer console.",
    useValue: () => (0, i.bG)([a.default], () => a.default.isLoggingQuestEvents),
    setValue: (e) => (0, s.x)({ logQuestEvents: e }),
});
