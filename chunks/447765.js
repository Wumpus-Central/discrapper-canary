i.r(t), i.d(t, { default: () => c }), i(228524);
var n = i(626584),
    s = i(824082),
    a = i(723702),
    r = i(372684);
let l = new n.A("SteamSignalHandler");
function c(e) {
    let t = !1,
        i = (i) => {
            var n, s, a, c, o, d;
            let h, m, u;
            if (!t) return;
            let v =
                    ((h = null != (a = null == (o = (s = i).title) ? void 0 : o.toLowerCase()) ? a : ""),
                    (m = null != (c = null == (d = s.description) ? void 0 : d.toLowerCase()) ? c : ""),
                    (u = "".concat(h, " ").concat(m)),
                    "death" === s.icon || u.includes("death") || u.includes("died") || u.includes("eliminated")
                        ? r.rb.DEATH
                        : "killstreak" === s.icon
                          ? r.rb.MULTIKILL
                          : u.includes("kill") || u.includes("defeat") || u.includes("eliminated")
                            ? r.rb.KILL
                            : u.includes("victory") || u.includes("win") || u.includes("champion")
                              ? r.rb.VICTORY
                              : u.includes("level") || u.includes("upgrade")
                                ? r.rb.LEVEL_UP
                                : u.includes("item") || u.includes("equipment") || u.includes("loot")
                                  ? r.rb.ITEM
                                  : u.includes("treasure") || u.includes("reward") || u.includes("chest")
                                    ? r.rb.TREASURE
                                    : u.includes("objective") || u.includes("boss") || u.includes("target")
                                      ? r.rb.OBJECTIVE_KILL
                                      : r.rb.ITEM),
                g = (function (e) {
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
                p = {
                    type: r.Gy.GAME_EVENT,
                    eventType: v,
                    title: i.title,
                    description: i.description,
                    importance: g,
                };
            l.info("Converting Steam timeline event to clip signal", {
                gameId: null == (n = i.gameId) ? void 0 : n.toString(),
                title: i.title,
                eventType: v,
                importance: g,
            }),
                e(p);
        };
    return {
        start() {
            t || ((0, a.isWindows)() && ((t = !0), s.t.initialize(), s.t.addTimelineEventCallback(i)));
        },
        stop() {
            t && (l.info("Stopping Steam signal handler"), (t = !1), s.t.removeTimelineEventCallback(i));
        },
        getState() {
            let e = (0, a.isWindows)();
            return {
                isActive: t,
                processesTracked: s.t.getTrackedProcesses().length,
                isAvailableForUser: e,
            };
        },
    };
}
