(a.r(t), a.d(t, { default: () => h }));
var l,
    n = a(158390),
    r = (a(19575), a(31048));
a(321073);
var i = a(626333),
    o =
        (((l = {}).GoalScored = "GoalScored"),
        (l.StatfeedEvent = "StatfeedEvent"),
        (l.MatchCreated = "MatchCreated"),
        (l.MatchEnded = "MatchEnded"),
        (l.MatchDestroyed = "MatchDestroyed"),
        (l.UpdateState = "UpdateState"),
        l),
    s = a(696016),
    c = a(979563),
    m = a(268378),
    d = a(660183);
let u = {
    Save: { eventName: c.d.Save, eventType: s.rb.OBJECTIVE_KILL, getTitle: () => d.intl.string(m.default.Rt7Y2b) },
    EpicSave: {
        eventName: c.d.EpicSave,
        eventType: s.rb.OBJECTIVE_KILL,
        getTitle: () => d.intl.string(m.default.OPgONO),
    },
    BicycleHit: { eventName: c.d.BicycleHit, eventType: s.rb.UNCLASSIFIED },
    FlipReset: {
        eventName: c.d.FlipReset,
        eventType: s.rb.UNCLASSIFIED,
        getTitle: () => d.intl.string(m.default.QOC6N4),
    },
    AerialGoal: { eventName: c.d.AerialGoal, eventType: s.rb.UNCLASSIFIED },
    BackwardsGoal: { eventName: c.d.BackwardsGoal, eventType: s.rb.UNCLASSIFIED },
    BicycleGoal: { eventName: c.d.BicycleGoal, eventType: s.rb.UNCLASSIFIED },
    LongGoal: { eventName: c.d.LongGoal, eventType: s.rb.UNCLASSIFIED },
    TurtleGoal: {
        eventName: c.d.TurtleGoal,
        eventType: s.rb.UNCLASSIFIED,
        getTitle: () => d.intl.string(m.default.JjrRc2),
    },
    PoolShot: {
        eventName: c.d.PoolShot,
        eventType: s.rb.UNCLASSIFIED,
        getTitle: () => d.intl.string(m.default["4cFeIa"]),
    },
    OvertimeGoal: { eventName: c.d.OvertimeGoal, eventType: s.rb.UNCLASSIFIED },
    HoopsSwishGoal: { eventName: c.d.SwishGoal, eventType: s.rb.UNCLASSIFIED },
    HatTrick: { eventName: c.d.HatTrick, eventType: s.rb.UNCLASSIFIED },
    Playmaker: { eventName: c.d.Playmaker, eventType: s.rb.UNCLASSIFIED },
    Savior: { eventName: c.d.Savior, eventType: s.rb.UNCLASSIFIED },
    Demolition: { eventName: c.d.Extermination, eventType: s.rb.UNCLASSIFIED },
    HighFive: { eventName: c.d.HighFive, eventType: s.rb.UNCLASSIFIED, matchEitherTarget: !0 },
    LowFive: { eventName: c.d.LowFive, eventType: s.rb.UNCLASSIFIED, matchEitherTarget: !0 },
    BreakoutDamage: { eventName: c.d.BreakoutDamage, eventType: s.rb.UNCLASSIFIED },
    BreakoutDamageLarge: { eventName: c.d.BreakoutDamageLarge, eventType: s.rb.UNCLASSIFIED },
    Shot: { eventName: c.d.Shot, eventType: s.rb.UNCLASSIFIED, getTitle: () => d.intl.string(m.default.ELmvIk) },
    Center: { eventName: c.d.Center, eventType: s.rb.UNCLASSIFIED },
    Clear: { eventName: c.d.Clear, eventType: s.rb.UNCLASSIFIED },
    FirstTouch: { eventName: c.d.FirstTouch, eventType: s.rb.UNCLASSIFIED },
};
function S(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return (0, i.K)({
        type: s.Gy.GAME_EVENT,
        eventType: t,
        eventName: e,
        score: 0,
        importance: 0,
        title: a.title,
        additionalData: a.additionalData,
        hiddenFromTimeline: a.hiddenFromTimeline,
    });
}
class T {
    localPlayerName = null;
    localTeamNum = null;
    teamScores = null;
    pendingGoal = null;
    processMessage(e) {
        switch (e.Event) {
            case o.UpdateState: {
                let t = e.Data?.Game,
                    a = [],
                    l = this.updateTeamScores(t?.Teams);
                return (
                    null != l &&
                        null != this.pendingGoal &&
                        (a.push(...this.resolveGoal(this.pendingGoal, l)), (this.pendingGoal = null)),
                    t?.bReplay !== !0 &&
                        t?.bHasTarget === !0 &&
                        t.Target?.Name != null &&
                        "" !== t.Target.Name &&
                        (this.localPlayerName !== t.Target.Name &&
                            s.nx.info(`[RL] local player identified: ${t.Target.Name} (team ${t.Target.TeamNum})`),
                        (this.localPlayerName = t.Target.Name),
                        (this.localTeamNum =
                            null != t.Target.TeamNum && 255 !== t.Target.TeamNum
                                ? t.Target.TeamNum
                                : this.localTeamNum)),
                    a
                );
            }
            case o.MatchCreated:
                return (this.resetGoalTracking(), [S(c.d.MatchStart, s.rb.UNCLASSIFIED, { hiddenFromTimeline: !0 })]);
            case o.MatchEnded: {
                let t = [];
                if (null != this.localTeamNum && e.Data?.WinnerTeamNum != null) {
                    let a = e.Data.WinnerTeamNum === this.localTeamNum;
                    t.push(
                        S(a ? c.d.Victory : c.d.Defeat, a ? s.rb.VICTORY : s.rb.DEFEAT, {
                            title: d.intl.string(a ? m.default.p65UF0 : m.default.saS9BW),
                        }),
                    );
                }
                return (t.push(S(c.d.MatchEnd, s.rb.UNCLASSIFIED, { hiddenFromTimeline: !0 })), t);
            }
            case o.MatchDestroyed:
                return (this.resetGoalTracking(), [S(c.d.MatchEnd, s.rb.UNCLASSIFIED, { hiddenFromTimeline: !0 })]);
            case o.GoalScored: {
                let t = e.Data;
                if (t?.Scorer?.Name == null || "" === t.Scorer.Name) return [];
                return ((this.pendingGoal = t), []);
            }
            case o.StatfeedEvent: {
                let t = e.Data,
                    a = t?.EventName;
                if (null == a) return [];
                if ("Demolish" === a) {
                    if (this.isLocal(t?.MainTarget))
                        return [S(c.d.Demolition, s.rb.KILL, { title: d.intl.string(m.default.IJqCEW) })];
                    if (this.isLocal(t?.SecondaryTarget))
                        return [S(c.d.Demolished, s.rb.DEATH, { title: d.intl.string(m.default.GdVA11) })];
                }
                let l = u[a];
                if (
                    null != l &&
                    (this.isLocal(t?.MainTarget) || (!0 === l.matchEitherTarget && this.isLocal(t?.SecondaryTarget)))
                )
                    return [
                        S(l.eventName, l.eventType, { title: l.getTitle?.(), hiddenFromTimeline: null == l.getTitle }),
                    ];
                return (
                    s.nx.info(
                        `[RL] statfeed ${a} by ${t?.MainTarget?.Name} ignored (localPlayer=${this.localPlayerName})`,
                    ),
                    []
                );
            }
            default:
                return [];
        }
    }
    resetGoalTracking() {
        ((this.teamScores = null), (this.pendingGoal = null));
    }
    updateTeamScores(e) {
        if (null == e) return null;
        let t = this.teamScores,
            a = new Map();
        for (let t of e) null != t.TeamNum && null != t.Score && a.set(t.TeamNum, t.Score);
        if (((this.teamScores = a), null == t)) return null;
        for (let [e, l] of a) if (l > (t.get(e) ?? l)) return e;
        return null;
    }
    resolveGoal(e, t) {
        return e.Scorer?.TeamNum !== t
            ? this.isLocal(e.Scorer)
                ? [S(c.d.OwnGoal, s.rb.UNCLASSIFIED, { title: d.intl.string(m.default.n9QpdG) })]
                : (s.nx.info(`[RL] own goal by ${e.Scorer?.Name} ignored (localPlayer=${this.localPlayerName})`), [])
            : this.isLocal(e.Scorer)
              ? ((this.localTeamNum = e.Scorer?.TeamNum ?? this.localTeamNum),
                [
                    S(c.d.Goal, s.rb.OBJECTIVE_KILL, {
                        title: d.intl.string(m.default.cOToac),
                        additionalData: { goalSpeed: e.GoalSpeed, goalTime: e.GoalTime },
                    }),
                ])
              : this.isLocal(e.Assister)
                ? [S(c.d.Assist, s.rb.ASSIST, { title: d.intl.string(m.default.qlCPiQ) })]
                : (s.nx.info(`[RL] goal by ${e.Scorer?.Name} ignored (localPlayer=${this.localPlayerName})`), []);
    }
    isLocal(e) {
        return null != this.localPlayerName && e?.Name === this.localPlayerName;
    }
}
var N = a(775363);
function h(e) {
    let t = !1,
        a = null,
        l = new T(),
        i = new n.A(5e3, 2e4);
    function o(t) {
        let a = (function (e) {
            try {
                let t = JSON.parse(e);
                return ("string" == typeof t?.Data && (t.Data = JSON.parse(t.Data)), t);
            } catch (e) {
                return null;
            }
        })(String(t.data));
        if (null == a) return;
        let n = (0, r.l)();
        for (let t of l.processMessage(a))
            (s.nx.info(`[RL] emit event: ${t.eventName} score=${t.score} importance=${t.importance}`), e(t, n));
    }
    return {
        start() {
            t ||
                ((t = !0),
                i.succeed(),
                s.nx.info("[RL] starting stats API listener"),
                (function e() {
                    if (!t) return;
                    let l = new WebSocket((0, N.S)());
                    ((a = l),
                        (l.onopen = () => {
                            (i.succeed(), s.nx.info("[RL] stats API connected"));
                        }),
                        (l.onmessage = o),
                        (l.onclose = () => {
                            a === l &&
                                ((a = null),
                                (function () {
                                    if (t && !i.pending) {
                                        if (i.fails >= 5)
                                            return s.nx.info(
                                                "[RL] stats API unreachable, giving up for this game session",
                                            );
                                        i.fail(e);
                                    }
                                })());
                        }));
                })());
        },
        stop() {
            if (!t) return;
            ((t = !1), s.nx.info("[RL] stopping stats API listener"), i.cancel());
            let e = a;
            ((a = null), e?.close(), (l = new T()));
        },
        getState: () => null,
    };
}
a(190443);
