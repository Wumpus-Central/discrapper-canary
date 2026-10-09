(a.r(t), a.d(t, { default: () => v }));
var n,
    l = a(158390),
    r = a(31048);
a(321073);
var i = a(626333),
    o =
        (((n = {}).GoalScored = "GoalScored"),
        (n.StatfeedEvent = "StatfeedEvent"),
        (n.MatchCreated = "MatchCreated"),
        (n.MatchEnded = "MatchEnded"),
        (n.MatchDestroyed = "MatchDestroyed"),
        (n.UpdateState = "UpdateState"),
        n),
    s = a(696016),
    d = a(979563),
    m = a(268378),
    c = a(660183);
let u = {
    Save: { eventName: d.d.Save, eventType: s.rb.OBJECTIVE_KILL, getTitle: () => c.intl.string(m.default.Rt7Y2b) },
    EpicSave: {
        eventName: d.d.EpicSave,
        eventType: s.rb.OBJECTIVE_KILL,
        getTitle: () => c.intl.string(m.default.OPgONO),
    },
    BicycleHit: { eventName: d.d.BicycleHit, eventType: s.rb.UNCLASSIFIED },
    FlipReset: {
        eventName: d.d.FlipReset,
        eventType: s.rb.UNCLASSIFIED,
        getTitle: () => c.intl.string(m.default.QOC6N4),
    },
    AerialGoal: { eventName: d.d.AerialGoal, eventType: s.rb.UNCLASSIFIED },
    BackwardsGoal: { eventName: d.d.BackwardsGoal, eventType: s.rb.UNCLASSIFIED },
    BicycleGoal: { eventName: d.d.BicycleGoal, eventType: s.rb.UNCLASSIFIED },
    LongGoal: { eventName: d.d.LongGoal, eventType: s.rb.UNCLASSIFIED },
    TurtleGoal: {
        eventName: d.d.TurtleGoal,
        eventType: s.rb.UNCLASSIFIED,
        getTitle: () => c.intl.string(m.default.JjrRc2),
    },
    PoolShot: {
        eventName: d.d.PoolShot,
        eventType: s.rb.UNCLASSIFIED,
        getTitle: () => c.intl.string(m.default["4cFeIa"]),
    },
    OvertimeGoal: { eventName: d.d.OvertimeGoal, eventType: s.rb.UNCLASSIFIED },
    HoopsSwishGoal: { eventName: d.d.SwishGoal, eventType: s.rb.UNCLASSIFIED },
    HatTrick: { eventName: d.d.HatTrick, eventType: s.rb.UNCLASSIFIED },
    Playmaker: { eventName: d.d.Playmaker, eventType: s.rb.UNCLASSIFIED },
    Savior: { eventName: d.d.Savior, eventType: s.rb.UNCLASSIFIED },
    Demolition: { eventName: d.d.Extermination, eventType: s.rb.UNCLASSIFIED },
    HighFive: { eventName: d.d.HighFive, eventType: s.rb.UNCLASSIFIED, matchEitherTarget: !0 },
    LowFive: { eventName: d.d.LowFive, eventType: s.rb.UNCLASSIFIED, matchEitherTarget: !0 },
    BreakoutDamage: { eventName: d.d.BreakoutDamage, eventType: s.rb.UNCLASSIFIED },
    BreakoutDamageLarge: { eventName: d.d.BreakoutDamageLarge, eventType: s.rb.UNCLASSIFIED },
    Shot: { eventName: d.d.Shot, eventType: s.rb.UNCLASSIFIED, getTitle: () => c.intl.string(m.default.ELmvIk) },
    Center: { eventName: d.d.Center, eventType: s.rb.UNCLASSIFIED },
    Clear: { eventName: d.d.Clear, eventType: s.rb.UNCLASSIFIED },
    FirstTouch: { eventName: d.d.FirstTouch, eventType: s.rb.UNCLASSIFIED },
    OwnGoal: { eventName: d.d.OwnGoal, eventType: s.rb.UNCLASSIFIED },
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
    processMessage(e) {
        switch (e.Event) {
            case o.UpdateState: {
                let t = e.Data?.Game;
                return (
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
                    []
                );
            }
            case o.MatchCreated:
                return [S(d.d.MatchStart, s.rb.UNCLASSIFIED, { hiddenFromTimeline: !0 })];
            case o.MatchEnded: {
                let t = [];
                if (null != this.localTeamNum && e.Data?.WinnerTeamNum != null) {
                    let a = e.Data.WinnerTeamNum === this.localTeamNum;
                    t.push(
                        S(a ? d.d.Victory : d.d.Defeat, a ? s.rb.VICTORY : s.rb.DEFEAT, {
                            title: c.intl.string(a ? m.default.p65UF0 : m.default.saS9BW),
                        }),
                    );
                }
                return (t.push(S(d.d.MatchEnd, s.rb.UNCLASSIFIED, { hiddenFromTimeline: !0 })), t);
            }
            case o.MatchDestroyed:
                return [S(d.d.MatchEnd, s.rb.UNCLASSIFIED, { hiddenFromTimeline: !0 })];
            case o.GoalScored: {
                let t = e.Data;
                if (this.isLocal(t?.Scorer))
                    return (
                        (this.localTeamNum = t?.Scorer?.TeamNum ?? this.localTeamNum),
                        [
                            S(d.d.Goal, s.rb.OBJECTIVE_KILL, {
                                title: c.intl.string(m.default.cOToac),
                                additionalData: { goalSpeed: t?.GoalSpeed, goalTime: t?.GoalTime },
                            }),
                        ]
                    );
                if (this.isLocal(t?.Assister))
                    return [S(d.d.Assist, s.rb.ASSIST, { title: c.intl.string(m.default.qlCPiQ) })];
                return (s.nx.info(`[RL] goal by ${t?.Scorer?.Name} ignored (localPlayer=${this.localPlayerName})`), []);
            }
            case o.StatfeedEvent: {
                let t = e.Data,
                    a = t?.EventName;
                if (null == a) return [];
                if ("Demolish" === a) {
                    if (this.isLocal(t?.MainTarget))
                        return [S(d.d.Demolition, s.rb.KILL, { title: c.intl.string(m.default.IJqCEW) })];
                    if (this.isLocal(t?.SecondaryTarget))
                        return [S(d.d.Demolished, s.rb.DEATH, { title: c.intl.string(m.default.GdVA11) })];
                }
                let n = u[a];
                if (
                    null != n &&
                    (this.isLocal(t?.MainTarget) || (!0 === n.matchEitherTarget && this.isLocal(t?.SecondaryTarget)))
                )
                    return [
                        S(n.eventName, n.eventType, { title: n.getTitle?.(), hiddenFromTimeline: null == n.getTitle }),
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
    isLocal(e) {
        return null != this.localPlayerName && e?.Name === this.localPlayerName;
    }
}
var N = a(190443);
function v(e) {
    let t = !1,
        a = null,
        n = new T(),
        i = new l.A(5e3, 2e4);
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
        let l = (0, r.l)();
        for (let t of n.processMessage(a))
            (s.nx.info(`[RL] emit event: ${t.eventName} score=${t.score} importance=${t.importance}`), e(t, l));
    }
    return {
        start() {
            t ||
                ((t = !0),
                i.succeed(),
                s.nx.info("[RL] starting stats API listener"),
                (function e() {
                    if (!t) return;
                    let n = new WebSocket(N.Q);
                    ((a = n),
                        (n.onopen = () => {
                            (i.succeed(), s.nx.info("[RL] stats API connected"));
                        }),
                        (n.onmessage = o),
                        (n.onclose = () => {
                            a === n &&
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
            ((a = null), e?.close(), (n = new T()));
        },
        getState: () => null,
    };
}
