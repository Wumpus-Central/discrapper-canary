i.r(t), i.d(t, { default: () => c }), i(953529);
var n = i(710845),
    s = i(357112),
    a = i(358085),
    l = i(894694);
let r = new n.Z("SteamSignalHandler");
function c(e) {
    let t = !1,
        i = (i) => {
            var n;
            if (!t) return;
            let s = (function (e) {
                    var t, i, n, s;
                    let a = null != (n = null == (t = e.title) ? void 0 : t.toLowerCase()) ? n : "",
                        r = null != (s = null == (i = e.description) ? void 0 : i.toLowerCase()) ? s : "",
                        c = "".concat(a, " ").concat(r);
                    return "death" === e.icon || c.includes("death") || c.includes("died") || c.includes("eliminated")
                        ? l.x0.DEATH
                        : "killstreak" === e.icon
                          ? l.x0.MULTIKILL
                          : c.includes("kill") || c.includes("defeat") || c.includes("eliminated")
                            ? l.x0.KILL
                            : c.includes("victory") || c.includes("win") || c.includes("champion")
                              ? l.x0.VICTORY
                              : c.includes("level") || c.includes("upgrade")
                                ? l.x0.LEVEL_UP
                                : c.includes("item") || c.includes("equipment") || c.includes("loot")
                                  ? l.x0.ITEM
                                  : c.includes("treasure") || c.includes("reward") || c.includes("chest")
                                    ? l.x0.TREASURE
                                    : c.includes("objective") || c.includes("boss") || c.includes("target")
                                      ? l.x0.OBJECTIVE_KILL
                                      : l.x0.ITEM;
                })(i),
                a = (function (e) {
                    var t;
                    let i = null != (t = e.possibleClipPriority) ? t : 0;
                    if (1 === e.isUserMarker) return 1;
                    switch (i) {
                        case 3:
                            return 1;
                        case 2:
                            return 0.5;
                        default:
                            return 0;
                    }
                })(i),
                c = {
                    type: l.Bs.GAME_EVENT,
                    eventType: s,
                    title: i.title,
                    description: i.description,
                    importance: a,
                };
            r.info("Converting Steam timeline event to clip signal", {
                gameId: null == (n = i.gameId) ? void 0 : n.toString(),
                title: i.title,
                eventType: s,
                importance: a,
            }),
                e(c);
        };
    return {
        start() {
            !t && (0, a.isWindows)() && ((t = !0), s.j.initialize(), s.j.addTimelineEventCallback(i));
        },
        stop() {
            t && (r.info("Stopping Steam signal handler"), (t = !1), s.j.removeTimelineEventCallback(i));
        },
        getState() {
            let e = (0, a.isWindows)();
            return {
                isActive: t,
                processesTracked: s.j.getTrackedProcesses().length,
                isAvailableForUser: e,
            };
        },
    };
}
