(i.r(e), i.d(e, { default: () => f }), i(321073));
var l = i(132500),
    a = i(19575),
    s = i(31048),
    n = i(612638);
function r(t, e) {
    return t.startTimeS - e.startTimeS;
}
class m {
    startTimeS;
    lastKillTimeS;
    participants = new Set();
    participantsByTeam = { BLUE: new Set(), RED: new Set() };
    deadParticipants = new Set();
    deathsByTeam = { BLUE: 0, RED: 0 };
    kills = 0;
    constructor(t) {
        ((this.startTimeS = t), (this.lastKillTimeS = t));
    }
    isExpiredAt(t) {
        return t - this.lastKillTimeS > 12;
    }
    exceedsMaxDurationAt(t) {
        return t - this.startTimeS > 50;
    }
    sharesParticipantsWith(t) {
        for (let e of t.keys()) if (this.participants.has(e) && !this.deadParticipants.has(e)) return !0;
        return !1;
    }
    recordKill(t, e, i) {
        for (let [t, i] of e)
            this.deadParticipants.has(t) || (this.participants.add(t), this.participantsByTeam[i].add(t));
        (this.deadParticipants.add(t.victimName),
            (this.deathsByTeam[i] += 1),
            (this.kills += 1),
            (this.lastKillTimeS = t.eventTimeS));
    }
    mergeWith(t) {
        for (let e of t.participants) this.participants.add(e);
        for (let e of t.participantsByTeam.BLUE) this.participantsByTeam.BLUE.add(e);
        for (let e of t.participantsByTeam.RED) this.participantsByTeam.RED.add(e);
        for (let e of t.deadParticipants) this.deadParticipants.add(e);
        ((this.deathsByTeam.BLUE += t.deathsByTeam.BLUE),
            (this.deathsByTeam.RED += t.deathsByTeam.RED),
            (this.kills += t.kills),
            (this.startTimeS = Math.min(this.startTimeS, t.startTimeS)),
            (this.lastKillTimeS = Math.max(this.lastKillTimeS, t.lastKillTimeS)));
    }
    finalize(t) {
        let e =
            this.kills >= 3 &&
            this.participants.size >= 6 &&
            this.participantsByTeam.BLUE.size >= 2 &&
            this.participantsByTeam.RED.size >= 2;
        return {
            startTimeS: this.startTimeS,
            lastKillTimeS: this.lastKillTimeS,
            endTimeS: this.lastKillTimeS + 1,
            kills: this.kills,
            deathsByTeam: { BLUE: this.deathsByTeam.BLUE, RED: this.deathsByTeam.RED },
            participants: new Set(this.participants),
            participantsByTeam: {
                BLUE: new Set(this.participantsByTeam.BLUE),
                RED: new Set(this.participantsByTeam.RED),
            },
            qualified: e,
            endedBy: t,
        };
    }
}
class o {
    activeFights = [];
    onChampionKill(t, e) {
        let i = (function (t, e) {
                let i = new Map(),
                    l = e.get(t.killerName);
                null != l && i.set(t.killerName, l);
                let a = e.get(t.victimName);
                for (let l of (null != a && i.set(t.victimName, a), t.assisters)) {
                    let t = e.get(l);
                    null != t && i.set(l, t);
                }
                return i;
            })(t, e),
            l = i.get(t.victimName);
        null == l || this.claimFightForKill(t.eventTimeS, i).recordKill(t, i, l);
    }
    onAce(t) {
        return this.closeAll("ace");
    }
    onTick(t) {
        let e = [],
            i = [];
        for (let l of this.activeFights)
            l.isExpiredAt(t)
                ? e.push(l.finalize("timeout"))
                : l.exceedsMaxDurationAt(t)
                  ? e.push(l.finalize("max_duration"))
                  : i.push(l);
        return ((this.activeFights = i), e.sort(r));
    }
    onGameEnd() {
        return this.closeAll("game_end");
    }
    reset() {
        this.activeFights = [];
    }
    closeAll(t) {
        if (0 === this.activeFights.length) return [];
        let e = this.activeFights.map((e) => e.finalize(t));
        return ((this.activeFights = []), e.sort(r));
    }
    claimFightForKill(t, e) {
        let i = null,
            l = new Set();
        for (let a of this.activeFights)
            !(a.isExpiredAt(t) || a.exceedsMaxDurationAt(t)) &&
                a.sharesParticipantsWith(e) &&
                (null == i ? (i = a) : (i.mergeWith(a), l.add(a)));
        return (
            null == i
                ? ((i = new m(t)), this.activeFights.push(i))
                : l.size > 0 && (this.activeFights = this.activeFights.filter((t) => !l.has(t))),
            i
        );
    }
}
var h = i(696016),
    c = i(801344),
    d = i(660183);
async function p(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = await a.Ay.fetchRiotGamesLiveClientData(t, e);
    if (i.status >= 200 && i.status < 300) return JSON.parse(i.body);
    throw Error(`HTTP ${i.status}: ${i.body}`);
}
function u(t) {
    return "ORDER" === t ? "BLUE" : "CHAOS" === t ? "RED" : null;
}
function v(t, e) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return (0, n.b)({
        type: h.Gy.GAME_EVENT,
        eventType: e,
        eventName: t,
        score: 0,
        importance: 0,
        title: i.title,
        description: i.description,
        hiddenFromTimeline: i.hiddenFromTimeline,
        clipWindow: i.clipWindow,
        additionalData: i.additionalData,
    });
}
function T(t) {
    return Math.max(2, Math.min(5, t));
}
class y {
    activePlayerRiotId = null;
    activePlayerName = null;
    nextEventId = 0;
    eventWindow = [];
    EVENT_WINDOW_SIZE = 100;
    previousPlayerState = null;
    gameTime = 0;
    isFirstPoll = !0;
    isInGame = !1;
    isDead = !1;
    currentHealthFraction = 1;
    activePlayerKillIds = [];
    consecutiveFailures = 0;
    teamFightTracker = new o();
    playerTeamByName = new Map();
    activePlayerTeam = null;
    lastEventGameTimeS = null;
    lastEventWallMs = 0;
    emitSignal;
    constructor(t) {
        this.emitSignal = t;
    }
    async poll() {
        let t = await this.fetchActivePlayerData();
        if (null == t && !this.isInGame) return !0;
        (null != t && (this.handleInGame(t), await this.pollPlayerState(t)), await this.pollEvents());
        let e = this.estimateGameTimeS();
        if (null != e) for (let t of this.teamFightTracker.onTick(e)) this.emitTeamFightResult(t);
        return (null == t && this.handlePollFailure(), !0);
    }
    estimateGameTimeS() {
        return null == this.lastEventGameTimeS
            ? null
            : this.lastEventGameTimeS + (Date.now() - this.lastEventWallMs) / 1e3;
    }
    gameTimeToClipTs(t) {
        return null == this.lastEventGameTimeS
            ? null
            : this.lastEventWallMs - (this.lastEventGameTimeS - t) * 1e3 - (0, s.p)();
    }
    async fetchActivePlayerData() {
        try {
            let t = await p("activeplayer");
            if (null == t.riotId) return null;
            return t;
        } catch (t) {
            return null;
        }
    }
    handleInGame(t) {
        ((this.consecutiveFailures = 0),
            null == this.activePlayerRiotId &&
                ((this.activePlayerRiotId = t.riotId ?? null), (this.activePlayerName = t.riotIdGameName ?? "")),
            this.isInGame ||
                ((this.isInGame = !0),
                h.nx.info(
                    `[LoL] connected to Live Client API \u{2014} game started (player=${this.activePlayerName ?? "?"})`,
                ),
                this.emitLifecycleEvent(c.n_.GameStart, d.intl.string(d.t["94Kji7"]), d.intl.string(d.t.fyCsox))),
            (this.currentHealthFraction = (function (t) {
                let { currentHealth: e, maxHealth: i } = t.championStats;
                return i <= 0 ? 1 : Math.max(0, Math.min(1, e / i));
            })(t)));
    }
    handlePollFailure() {
        if (
            this.isInGame &&
            ((this.consecutiveFailures += 1),
            h.nx.info(`[LoL] active-player poll failed (${this.consecutiveFailures}/10)`),
            this.consecutiveFailures >= 10)
        ) {
            for (let t of (h.nx.info("[LoL] game ended (no API response)"), this.teamFightTracker.onGameEnd()))
                this.emitTeamFightResult(t);
            (this.emitLifecycleEvent(c.n_.GameEnd, d.intl.string(d.t.hlOYoA), d.intl.string(d.t.NxavgD)),
                this.resetGameState());
        }
    }
    async pollPlayerState(t) {
        let e;
        if (null == this.activePlayerRiotId) return;
        try {
            e = await p("playerlist");
        } catch (t) {
            return;
        }
        if (!Array.isArray(e)) return;
        let i = e.find((t) => t.riotId === this.activePlayerRiotId || t.riotIdGameName === this.activePlayerName);
        if (null == i) return;
        (this.updateTeamRoster(e, i), this.updateDeadState(i.isDead));
        let l = new Map();
        for (let t of i.items) l.set(t.itemID, t);
        let a = { level: t.level ?? 1, currentGold: t.currentGold ?? 0, items: l };
        ((this.gameTime += 1),
            null != this.previousPlayerState && this.detectStateChanges(this.previousPlayerState, a),
            (this.previousPlayerState = a));
    }
    updateTeamRoster(t, e) {
        for (let e of t) {
            let t = u(e.team);
            null != t &&
                null != e.riotIdGameName &&
                "" !== e.riotIdGameName &&
                this.playerTeamByName.set(e.riotIdGameName, t);
        }
        this.activePlayerTeam = u(e.team);
    }
    updateDeadState(t) {
        t !== this.isDead &&
            ((this.isDead = t),
            t || this.emitLifecycleEvent(c.n_.Respawn, d.intl.string(d.t.ebbBDl), d.intl.string(d.t.CCiFY7)));
    }
    emitLifecycleEvent(t, e, i) {
        (h.nx.info(`[LoL] lifecycle marker: ${t}`),
            this.emitSignal({
                type: h.Gy.GAME_EVENT,
                eventType: h.rb.UNCLASSIFIED,
                eventName: t,
                title: e,
                description: i,
                score: 0,
                importance: 0,
            }));
    }
    async pollEvents() {
        try {
            let t = await p("eventdata", { eventID: this.nextEventId });
            if (t.Events?.length > 0) {
                h.nx.info(`[LoL] eventdata received: ${t.Events.map((t) => t.EventName).join(", ")}`);
                let e = null;
                for (let i of t.Events)
                    "number" == typeof i.EventTime && (null == e || i.EventTime > e) && (e = i.EventTime);
                if (
                    (null != e &&
                        (null == this.lastEventGameTimeS || e > this.lastEventGameTimeS) &&
                        ((this.lastEventGameTimeS = e), (this.lastEventWallMs = Date.now())),
                    this.isFirstPoll)
                )
                    (h.nx.info(`[LoL] first poll \u{2014} skipping ${t.Events.length} historical events`),
                        (this.isFirstPoll = !1));
                else
                    for (let e of t.Events) {
                        let t;
                        if ("ChampionKill" === e.EventName) {
                            let i = (e.KillerName ?? "") === this.activePlayerName,
                                l = (e.Assisters ?? []).some((t) => t === this.activePlayerName);
                            ((t = {
                                type: "ChampionKill",
                                timestamp: this.gameTime,
                                killerName: e.KillerName,
                                victimName: e.VictimName,
                                playerIsKiller: i,
                                playerIsAssister: l,
                                victimIsActivePlayer: e.VictimName === this.activePlayerName,
                            }),
                                "number" == typeof e.EventTime &&
                                    Number.isFinite(e.EventTime) &&
                                    this.teamFightTracker.onChampionKill(
                                        {
                                            eventTimeS: e.EventTime,
                                            killerName: e.KillerName ?? "",
                                            victimName: e.VictimName ?? "",
                                            assisters: e.Assisters ?? [],
                                        },
                                        this.playerTeamByName,
                                    ));
                        } else if ("Ace" === e.EventName)
                            for (let t of this.teamFightTracker.onAce(e.EventTime)) this.emitTeamFightResult(t);
                        else if ("Multikill" === e.EventName)
                            t = {
                                type: "Multikill",
                                timestamp: this.gameTime,
                                killStreak: e.KillStreak || 1,
                                killerName: e.KillerName ?? "",
                                killerIsActivePlayer: e.KillerName === this.activePlayerName,
                            };
                        else if ("TurretKilled" === e.EventName) {
                            let i = (e.KillerName ?? "") === this.activePlayerName,
                                l = (e.Assisters ?? []).some((t) => t === this.activePlayerName);
                            t = { type: "TurretKill", timestamp: this.gameTime, playerHelpedKill: i || l };
                        } else if ("InhibKilled" === e.EventName) {
                            let i = (e.KillerName ?? "") === this.activePlayerName,
                                l = (e.Assisters ?? []).some((t) => t === this.activePlayerName);
                            t = { type: "InhibitorKill", timestamp: this.gameTime, playerHelpedKill: i || l };
                        } else if ("DragonKill" === e.EventName) {
                            let i = (e.KillerName ?? "") === this.activePlayerName,
                                l = (e.Assisters ?? []).some((t) => t === this.activePlayerName);
                            t = {
                                type: "DragonKill",
                                timestamp: this.gameTime,
                                playerHelpedKill: i || l,
                                killerName: e.KillerName ?? "",
                                drakeName: e.DragonType,
                                stolen: (e.Stolen ?? "") === "True",
                            };
                        } else if ("BaronKill" === e.EventName) {
                            let i = (e.KillerName ?? "") === this.activePlayerName,
                                l = (e.Assisters ?? []).some((t) => t === this.activePlayerName);
                            t = {
                                type: "BaronKill",
                                timestamp: this.gameTime,
                                playerHelpedKill: i || l,
                                stolen: (e.Stolen ?? "") === "True",
                                killerName: e.KillerName ?? "",
                            };
                        } else if ("GameEnd" === e.EventName) {
                            for (let t of this.teamFightTracker.onGameEnd()) this.emitTeamFightResult(t);
                            t = { type: "GameEnd", timestamp: this.gameTime, win: (e.Result ?? "") === "Win" };
                        }
                        null != t && this.addEventToWindow(t);
                    }
                let i = t.Events[t.Events.length - 1];
                this.nextEventId = i.EventID + 1;
            }
        } catch (t) {}
    }
    addEventToWindow(t) {
        (this.eventWindow.push(t), this.eventWindow.length > this.EVENT_WINDOW_SIZE && this.eventWindow.shift());
        let e = (function (t) {
            switch (t.type) {
                case "ChampionKill":
                    if (t.playerIsKiller)
                        return v(c.n_.ChampionKill, h.rb.KILL, {
                            title: d.intl.string(d.t.ky6syM),
                            description: d.intl.formatToPlainString(d.t["2sxvfW"], { name: t.victimName }),
                        });
                    if (t.playerIsAssister)
                        return v(c.n_.ChampionAssist, h.rb.ASSIST, {
                            title: d.intl.string(d.t["3CK6jo"]),
                            description: d.intl.formatToPlainString(d.t.NyJvKf, { name: t.victimName }),
                        });
                    if (t.victimIsActivePlayer)
                        return v(c.n_.ChampionDeath, h.rb.DEATH, {
                            title: d.intl.string(d.t["C/WqTT"]),
                            description: d.intl.formatToPlainString(d.t["wZ/IFO"], { name: t.killerName }),
                        });
                    return null;
                case "Multikill":
                    if (t.killerIsActivePlayer) {
                        let e = T(t.killStreak),
                            i = c.Br[e],
                            { title: l, description: a } = (() => {
                                switch (e) {
                                    case 2:
                                        return {
                                            title: d.intl.string(d.t["+K7bbR"]),
                                            description: d.intl.string(d.t["+zq0aZ"]),
                                        };
                                    case 3:
                                        return {
                                            title: d.intl.string(d.t.fzI1wr),
                                            description: d.intl.string(d.t.brXPUX),
                                        };
                                    case 4:
                                        return {
                                            title: d.intl.string(d.t.ntn0Eu),
                                            description: d.intl.string(d.t.GcWpwl),
                                        };
                                    case 5:
                                        return {
                                            title: d.intl.string(d.t.JMxzCr),
                                            description: d.intl.string(d.t["9yXGOS"]),
                                        };
                                    default:
                                        return { title: void 0, description: void 0 };
                                }
                            })();
                        return v(i, h.rb.MULTIKILL, { title: l, description: a });
                    }
                    return null;
                case "LevelUp":
                    return v(c.n_.LevelUp, h.rb.LEVEL_UP, {
                        title: d.intl.string(d.t["cp+kpc"]),
                        description: d.intl.formatToPlainString(d.t["le5/P1"], { level: t.newLevel }),
                    });
                case "ItemPurchase":
                    return v(c.n_.ItemPurchase, h.rb.ITEM, {
                        title: d.intl.string(d.t["89CDAj"]),
                        description: d.intl.formatToPlainString(d.t.cpRNkD, { itemName: t.itemName }),
                        hiddenFromTimeline: !0,
                    });
                case "TurretKill":
                    if (t.playerHelpedKill)
                        return v(c.n_.TurretKill, h.rb.OBJECTIVE_KILL, {
                            title: d.intl.string(d.t["SoivN/"]),
                            description: d.intl.string(d.t.eZ1OSn),
                        });
                    return null;
                case "InhibitorKill":
                    if (t.playerHelpedKill)
                        return v(c.n_.InhibitorKill, h.rb.OBJECTIVE_KILL, {
                            title: d.intl.string(d.t["0Ttct6"]),
                            description: d.intl.string(d.t.Pewjjq),
                        });
                    return null;
                case "DragonKill":
                    if (t.playerHelpedKill) {
                        if (t.stolen)
                            return v(c.n_.DragonSteal, h.rb.OBJECTIVE_KILL, {
                                title: d.intl.formatToPlainString(d.t.DUQK8U, { drakeName: t.drakeName }),
                                description: d.intl.formatToPlainString(d.t["8qsedd"], { killerName: t.killerName }),
                            });
                        return v(c.n_.DragonKill, h.rb.OBJECTIVE_KILL, {
                            title: d.intl.formatToPlainString(d.t["AjNN1/"], { drakeName: t.drakeName }),
                            description: d.intl.formatToPlainString(d.t.HlopAO, { killerName: t.killerName }),
                        });
                    }
                    return null;
                case "BaronKill":
                    if (t.playerHelpedKill) {
                        if (t.stolen)
                            return v(c.n_.BaronSteal, h.rb.OBJECTIVE_KILL, {
                                title: d.intl.string(d.t["+WhzbK"]),
                                description: d.intl.formatToPlainString(d.t.FUBbYu, { killerName: t.killerName }),
                            });
                        return v(c.n_.BaronKill, h.rb.OBJECTIVE_KILL, {
                            title: d.intl.string(d.t.KohKss),
                            description: d.intl.formatToPlainString(d.t["4yYLUi"], { killerName: t.killerName }),
                        });
                    }
                    return null;
                case "GameEnd":
                    if (t.win)
                        return v(c.n_.Victory, h.rb.VICTORY, {
                            title: d.intl.string(d.t.vS7yZW),
                            description: d.intl.string(d.t.qkARs9),
                        });
                    return v(c.n_.Defeat, h.rb.DEFEAT, {
                        title: d.intl.string(d.t["+sdglm"]),
                        description: d.intl.string(d.t.xdsqBt),
                    });
                default:
                    return null;
            }
        })(t);
        if (null != e) {
            if (e.type === h.Gy.GAME_EVENT) {
                if (e.eventName === c.n_.ChampionKill) {
                    let t = (0, l.A)();
                    (this.activePlayerKillIds.push(t),
                        (e.additionalData = { [h.gy]: t, health: this.currentHealthFraction }));
                } else
                    "Multikill" === t.type &&
                        (e.additionalData = {
                            [h.gy]: (0, l.A)(),
                            [h.A_]: this.activePlayerKillIds.slice(-T(t.killStreak)),
                        });
                h.nx.info(`[LoL] emit event: ${e.eventName} score=${e.score?.toFixed(2)} importance=${e.importance}`);
            }
            this.emitSignal(e);
        }
    }
    activePlayerInFight(t) {
        return null != this.activePlayerName && t.has(this.activePlayerName);
    }
    emitTeamFightResult(t) {
        if (!t.qualified || null == this.activePlayerTeam || !this.activePlayerInFight(t.participants)) return;
        let e = "BLUE" === this.activePlayerTeam ? "RED" : "BLUE",
            i = t.deathsByTeam[e],
            l = t.deathsByTeam[this.activePlayerTeam],
            a = (0, c.VX)(t, this.activePlayerTeam),
            s = i >= l && a >= 0,
            n = s ? a + 0.25 : a,
            r = (0, c.VD)(n);
        h.nx.info(
            `[LoL] team fight ended (${t.endedBy}): ally ${i} - ${l} enemy, participants=${t.participants.size} (${t.participantsByTeam[this.activePlayerTeam].size}v${t.participantsByTeam[e].size}), score=${n} (event ${r.toFixed(3)}), lasted ${(t.endTimeS - t.startTimeS).toFixed(1)}s, winning=${s}`,
        );
        let m = this.gameTimeToClipTs(t.endTimeS),
            o = this.gameTimeToClipTs(t.startTimeS),
            p = null != o && null != m ? { startMs: o - 5e3, endMs: m + 3e3 } : void 0,
            u = { [c.nn]: n, ...(null != o ? { [c.zS]: o } : {}), ...(null != m ? { [c.QL]: m } : {}) },
            T = s
                ? v(c.n_.TeamFightWin, h.rb.UNCLASSIFIED, {
                      title: d.intl.string(d.t["+1CM/5"]),
                      description: d.intl.formatToPlainString(d.t["2bu+0V"], { allyKills: i, enemyKills: l }),
                      clipWindow: p,
                      additionalData: u,
                  })
                : v(c.n_.TeamFight, h.rb.UNCLASSIFIED, {
                      title: d.intl.string(d.t.zi28x1),
                      description: d.intl.formatToPlainString(d.t.HTJgep, { allyKills: i, enemyKills: l }),
                      clipWindow: p,
                      additionalData: u,
                  });
        null == m ? this.emitSignal(T) : this.emitSignal(T, m);
    }
    detectStateChanges(t, e) {
        if (e.level > t.level) {
            let t = { type: "LevelUp", timestamp: this.gameTime, newLevel: e.level };
            this.addEventToWindow(t);
        }
        if (e.currentGold < t.currentGold) {
            for (let [, i] of e.items)
                if (null == t.items.get(i.itemID)) {
                    let t = {
                        type: "ItemPurchase",
                        timestamp: this.gameTime,
                        itemId: i.itemID,
                        itemName: i.displayName,
                        itemCount: i.count,
                    };
                    this.addEventToWindow(t);
                }
        }
    }
    resetGameState() {
        ((this.activePlayerRiotId = null),
            (this.activePlayerName = null),
            (this.nextEventId = 0),
            (this.eventWindow = []),
            (this.previousPlayerState = null),
            (this.gameTime = 0),
            (this.isFirstPoll = !0),
            (this.isInGame = !1),
            (this.isDead = !1),
            (this.currentHealthFraction = 1),
            (this.activePlayerKillIds = []),
            (this.consecutiveFailures = 0),
            this.teamFightTracker.reset(),
            this.playerTeamByName.clear(),
            (this.activePlayerTeam = null),
            (this.lastEventGameTimeS = null),
            (this.lastEventWallMs = 0));
    }
    reset() {
        this.resetGameState();
    }
    getEventWindow() {
        return this.eventWindow;
    }
}
i(876474);
class g {
    pollIntervalId = null;
    isPolling = !1;
    eventPoller;
    constructor(t) {
        this.eventPoller = new y(t);
    }
    start() {
        this.isPolling ||
            ((this.isPolling = !0),
            (this.pollIntervalId = setInterval(() => {
                this.poll();
            }, 1e3)));
    }
    stop() {
        this.isPolling &&
            ((this.isPolling = !1),
            null != this.pollIntervalId && (clearInterval(this.pollIntervalId), (this.pollIntervalId = null)),
            this.eventPoller.reset());
    }
    getState() {
        return { isPolling: this.isPolling };
    }
    async poll() {
        await this.eventPoller.poll();
    }
}
let f = (t) => new g(t);
