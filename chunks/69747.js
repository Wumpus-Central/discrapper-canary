i.d(t, {
    A: () => o,
}),
    i(65821),
    i(228524),
    i(896048),
    i(321073);
var l = i(837921),
    r = i(372684),
    n = i(985018);

function a(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = i),
        e
    );
}
async function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = await l.Ay.fetchRiotGamesLiveClientData(e, t);
    if (i.status >= 200 && i.status < 300) return JSON.parse(i.body);
    throw Error("HTTP ".concat(i.status, ": ").concat(i.body));
}
class o {
    async poll() {
        return (
            !(null != this.activePlayerRiotId || (await this.fetchActivePlayer())) ||
            (await this.pollEvents(), await this.pollPlayerState(), !0)
        );
    }
    async pollEvents() {
        try {
            var e, t, i, l, r, n, a, o, m, p, c, y, v, u, h, d;
            let E = await s("eventdata", {
                eventID: this.nextEventId,
            });
            if ((null == (e = E.Events) ? void 0 : e.length) > 0) {
                if (this.isFirstPoll) this.isFirstPoll = !1;
                else
                    for (let e of E.Events) {
                        let s;
                        if ("ChampionKill" === e.EventName) {
                            let l = (null != (t = e.KillerName) ? t : "") === this.activePlayerName,
                                r = (null != (i = e.Assisters) ? i : []).some((e) => e === this.activePlayerName);
                            s = {
                                type: "ChampionKill",
                                timestamp: this.gameTime,
                                killerName: e.KillerName,
                                victimName: e.VictimName,
                                playerIsKiller: l,
                                playerIsAssister: r,
                                victimIsActivePlayer: e.VictimName === this.activePlayerName,
                            };
                        } else if ("Multikill" === e.EventName)
                            s = {
                                type: "Multikill",
                                timestamp: this.gameTime,
                                killStreak: e.KillStreak || 1,
                                killerName: null != (l = e.KillerName) ? l : "",
                                killerIsActivePlayer: e.KillerName === this.activePlayerName,
                            };
                        else if ("TurretKilled" === e.EventName) {
                            let t = (null != (r = e.KillerName) ? r : "") === this.activePlayerName,
                                i = (null != (n = e.Assisters) ? n : []).some((e) => e === this.activePlayerName);
                            s = {
                                type: "TurretKill",
                                timestamp: this.gameTime,
                                playerHelpedKill: t || i,
                            };
                        } else if ("InhibKilled" === e.EventName) {
                            let t = (null != (a = e.KillerName) ? a : "") === this.activePlayerName,
                                i = (null != (o = e.Assisters) ? o : []).some((e) => e === this.activePlayerName);
                            s = {
                                type: "InhibitorKill",
                                timestamp: this.gameTime,
                                playerHelpedKill: t || i,
                            };
                        } else if ("DragonKill" === e.EventName) {
                            let t = (null != (m = e.KillerName) ? m : "") === this.activePlayerName,
                                i = (null != (p = e.Assisters) ? p : []).some((e) => e === this.activePlayerName);
                            s = {
                                type: "DragonKill",
                                timestamp: this.gameTime,
                                playerHelpedKill: t || i,
                                killerName: null != (c = e.KillerName) ? c : "",
                                drakeName: e.DragonType,
                                stolen: (null != (y = e.Stolen) ? y : "") === "True",
                            };
                        } else if ("BaronKill" === e.EventName) {
                            let t = (null != (v = e.KillerName) ? v : "") === this.activePlayerName,
                                i = (null != (u = e.Assisters) ? u : []).some((e) => e === this.activePlayerName);
                            s = {
                                type: "BaronKill",
                                timestamp: this.gameTime,
                                playerHelpedKill: t || i,
                                stolen: (null != (h = e.Stolen) ? h : "") === "True",
                                killerName: null != (d = e.KillerName) ? d : "",
                            };
                        }
                        null != s && this.addEventToWindow(s);
                    }
                let e = E.Events[E.Events.length - 1];
                this.nextEventId = e.EventID + 1;
            }
        } catch (e) {}
    }
    addEventToWindow(e) {
        this.eventWindow.push(e), this.eventWindow.length > this.EVENT_WINDOW_SIZE && this.eventWindow.shift();
        let t = (function (e) {
            switch (e.type) {
                case "ChampionKill":
                    if (e.playerIsKiller)
                        return {
                            type: r.Gy.GAME_EVENT,
                            eventType: r.rb.KILL,
                            importance: 0.5,
                            title: n.intl.string(n.t.ky6syM),
                            description: n.intl.formatToPlainString(n.t["2sxvfW"], {
                                name: e.victimName,
                            }),
                        };
                    if (e.playerIsAssister)
                        return {
                            type: r.Gy.GAME_EVENT,
                            eventType: r.rb.ASSIST,
                            importance: 0.5,
                            title: n.intl.string(n.t.ky6syM),
                            description: n.intl.formatToPlainString(n.t.NyJvKf, {
                                name: e.victimName,
                            }),
                        };
                    if (e.victimIsActivePlayer)
                        return {
                            type: r.Gy.GAME_EVENT,
                            eventType: r.rb.DEATH,
                            importance: 0.5,
                            title: n.intl.string(n.t.ky6syM),
                            description: n.intl.formatToPlainString(n.t["wZ/IFO"], {
                                name: e.killerName,
                            }),
                        };
                    return null;
                case "Multikill":
                    if (e.killerIsActivePlayer) {
                        let { title: t, description: i } = (() => {
                            switch (e.killStreak) {
                                case 2:
                                    return {
                                        title: n.intl.string(n.t["+K7bbR"]),
                                        description: n.intl.string(n.t["+zq0aZ"]),
                                    };
                                case 3:
                                    return {
                                        title: n.intl.string(n.t.fzI1wr),
                                        description: n.intl.string(n.t.brXPUX),
                                    };
                                case 4:
                                    return {
                                        title: n.intl.string(n.t.ntn0Eu),
                                        description: n.intl.string(n.t.GcWpwl),
                                    };
                                case 5:
                                    return {
                                        title: n.intl.string(n.t.JMxzCr),
                                        description: n.intl.string(n.t["9yXGOS"]),
                                    };
                                default:
                                    return {
                                        title: void 0,
                                        description: void 0,
                                    };
                            }
                        })();
                        return {
                            type: r.Gy.GAME_EVENT,
                            eventType: r.rb.MULTIKILL,
                            importance: e.killStreak >= 4 && e.killerIsActivePlayer ? 1 : 0.5,
                            title: t,
                            description: i,
                        };
                    }
                    return null;
                case "LevelUp":
                    return {
                        type: r.Gy.GAME_EVENT,
                        eventType: r.rb.LEVEL_UP,
                        importance: 0,
                        title: n.intl.string(n.t["cp+kpc"]),
                        description: n.intl.formatToPlainString(n.t["le5/P1"], {
                            level: e.newLevel,
                        }),
                    };
                case "ItemPurchase":
                    return {
                        type: r.Gy.GAME_EVENT,
                        eventType: r.rb.ITEM,
                        importance: 0,
                        title: n.intl.string(n.t["89CDAj"]),
                        description: n.intl.formatToPlainString(n.t.cpRNkD, {
                            itemName: e.itemName,
                        }),
                    };
                case "TurretKill":
                    if (e.playerHelpedKill)
                        return {
                            type: r.Gy.GAME_EVENT,
                            eventType: r.rb.OBJECTIVE_KILL,
                            importance: 0.5,
                            title: n.intl.string(n.t["SoivN/"]),
                        };
                    return null;
                case "InhibitorKill":
                    if (e.playerHelpedKill)
                        return {
                            type: r.Gy.GAME_EVENT,
                            eventType: r.rb.OBJECTIVE_KILL,
                            importance: 0.5,
                            title: n.intl.string(n.t["0Ttct6"]),
                        };
                    return null;
                case "DragonKill":
                    if (e.stolen)
                        return {
                            type: r.Gy.GAME_EVENT,
                            eventType: r.rb.OBJECTIVE_KILL,
                            importance: 1,
                            title: n.intl.formatToPlainString(n.t.DUQK8U, {
                                drakeName: e.drakeName,
                            }),
                            description: n.intl.formatToPlainString(n.t["8qsedd"], {
                                killerName: e.killerName,
                            }),
                        };
                    if (e.playerHelpedKill)
                        return {
                            type: r.Gy.GAME_EVENT,
                            eventType: r.rb.OBJECTIVE_KILL,
                            importance: 0.5,
                            title: n.intl.formatToPlainString(n.t["AjNN1/"], {
                                drakeName: e.drakeName,
                            }),
                            description: n.intl.formatToPlainString(n.t.HlopAO, {
                                killerName: e.killerName,
                            }),
                        };
                    return null;
                case "BaronKill":
                    if (e.stolen)
                        return {
                            type: r.Gy.GAME_EVENT,
                            eventType: r.rb.OBJECTIVE_KILL,
                            importance: e.playerHelpedKill ? 1 : 0.8,
                            title: n.intl.string(n.t["+WhzbK"]),
                            description: n.intl.formatToPlainString(n.t.FUBbYu, {
                                killerName: e.killerName,
                            }),
                        };
                    if (e.playerHelpedKill)
                        return {
                            type: r.Gy.GAME_EVENT,
                            eventType: r.rb.OBJECTIVE_KILL,
                            importance: e.playerHelpedKill ? 0.8 : 0.5,
                            title: n.intl.string(n.t.KohKss),
                            description: n.intl.formatToPlainString(n.t["4yYLUi"], {
                                killerName: e.killerName,
                            }),
                        };
                    return null;
                default:
                    return null;
            }
        })(e);
        null != t && this.emitSignal(t);
    }
    async pollPlayerState() {
        if (null != this.activePlayerRiotId)
            try {
                var e, t;
                let [i, l] = await Promise.all([
                        s("activeplayer"),
                        s("playeritems", {
                            riotId: this.activePlayerRiotId,
                        }),
                    ]),
                    r = new Map();
                if (Array.isArray(l)) for (let e of l) r.set(e.itemID, e);
                let n = {
                    level: null != (e = i.level) ? e : 1,
                    currentGold: null != (t = i.currentGold) ? t : 0,
                    items: r,
                };
                (this.gameTime += 1),
                    null != this.previousPlayerState && this.detectStateChanges(this.previousPlayerState, n),
                    (this.previousPlayerState = n);
            } catch (e) {}
    }
    detectStateChanges(e, t) {
        if (t.level > e.level) {
            let e = {
                type: "LevelUp",
                timestamp: this.gameTime,
                newLevel: t.level,
            };
            this.addEventToWindow(e);
        }
        for (let [i, l] of t.items)
            if (null == e.items.get(i)) {
                let e = {
                    type: "ItemPurchase",
                    timestamp: this.gameTime,
                    itemId: l.itemID,
                    itemName: l.displayName,
                    itemCount: l.count,
                };
                this.addEventToWindow(e);
            }
    }
    async fetchActivePlayer() {
        try {
            let t = await s("activeplayer");
            if (null != t.riotId) {
                var e;
                return (
                    (this.activePlayerRiotId = t.riotId),
                    (this.activePlayerName = null != (e = t.riotIdGameName) ? e : ""),
                    !0
                );
            }
            return !1;
        } catch (e) {
            return !1;
        }
    }
    reset() {
        (this.activePlayerRiotId = null),
            (this.nextEventId = 0),
            (this.eventWindow = []),
            (this.previousPlayerState = null),
            (this.gameTime = 0),
            (this.isFirstPoll = !0);
    }
    getEventWindow() {
        return this.eventWindow;
    }
    constructor(e) {
        a(this, "activePlayerRiotId", null),
            a(this, "activePlayerName", null),
            a(this, "nextEventId", 0),
            a(this, "eventWindow", []),
            a(this, "EVENT_WINDOW_SIZE", 100),
            a(this, "previousPlayerState", null),
            a(this, "gameTime", 0),
            a(this, "isFirstPoll", !0),
            a(this, "emitSignal", void 0),
            (this.emitSignal = e);
    }
}
