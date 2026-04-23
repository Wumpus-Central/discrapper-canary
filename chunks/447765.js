i.r(t), i.d(t, { default: () => c });
var s = i(626584),
    a = i(824082),
    n = i(723702),
    r = i(372684);
let l = new s.A("SteamSignalHandler");
function c(e) {
    let t = !1,
        i = (i) => {
            var s;
            let a, n, c;
            if (!t) return;
            let o =
                    ((s = i),
                    (a = s.title?.toLowerCase() ?? ""),
                    (n = s.description?.toLowerCase() ?? ""),
                    (c = `${a} ${n}`),
                    "death" === s.icon || c.includes("death") || c.includes("died") || c.includes("eliminated")
                        ? r.rb.DEATH
                        : "killstreak" === s.icon
                          ? r.rb.MULTIKILL
                          : c.includes("kill") || c.includes("defeat") || c.includes("eliminated")
                            ? r.rb.KILL
                            : c.includes("victory") || c.includes("win") || c.includes("champion")
                              ? r.rb.VICTORY
                              : c.includes("level") || c.includes("upgrade")
                                ? r.rb.LEVEL_UP
                                : c.includes("item") || c.includes("equipment") || c.includes("loot")
                                  ? r.rb.ITEM
                                  : c.includes("treasure") || c.includes("reward") || c.includes("chest")
                                    ? r.rb.TREASURE
                                    : c.includes("objective") || c.includes("boss") || c.includes("target")
                                      ? r.rb.OBJECTIVE_KILL
                                      : r.rb.ITEM),
                d = (function (e) {
                    let t = e.possibleClipPriority ?? 0;
                    if (1 === e.isUserMarker) return 1;
                    switch (t) {
                        case 3:
                            return 1;
                        case 2:
                            return 0.5;
                        default:
                            return 0;
                    }
                })(i),
                h = { type: r.Gy.GAME_EVENT, eventType: o, title: i.title, description: i.description, importance: d };
            l.info("Converting Steam timeline event to clip signal", {
                gameId: i.gameId?.toString(),
                title: i.title,
                eventType: o,
                importance: d,
            }),
                e(h);
        };
    return {
        start() {
            t || ((0, n.isWindows)() && ((t = !0), a.t.initialize(), a.t.addTimelineEventCallback(i)));
        },
        stop() {
            t && (l.info("Stopping Steam signal handler"), (t = !1), a.t.removeTimelineEventCallback(i));
        },
        getState() {
            let e = (0, n.isWindows)();
            return { isActive: t, processesTracked: a.t.getTrackedProcesses().length, isAvailableForUser: e };
        },
    };
}
