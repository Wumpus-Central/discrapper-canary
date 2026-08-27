a.r(t), a.d(t, { default: () => N });
var l,
    i = a(158390),
    n = a(31048);
a(321073);
var r =
        (((l = {}).GoalScored = "GoalScored"),
        (l.StatfeedEvent = "StatfeedEvent"),
        (l.MatchCreated = "MatchCreated"),
        (l.MatchEnded = "MatchEnded"),
        (l.MatchDestroyed = "MatchDestroyed"),
        (l.UpdateState = "UpdateState"),
        l),
    o = a(696016),
    s = a(979563),
    d = a(711918),
    c = a(375708);
let m = {
    Save: { eventName: s.d.Save, getTitle: () => c.intl.string(d.default.Rt7Y2b) },
    EpicSave: { eventName: s.d.EpicSave, getTitle: () => c.intl.string(d.default.OPgONO) },
    BicycleHit: { eventName: s.d.BicycleHit },
    FlipReset: { eventName: s.d.FlipReset, getTitle: () => c.intl.string(d.default.QOC6N4) },
    AerialGoal: { eventName: s.d.AerialGoal },
    BackwardsGoal: { eventName: s.d.BackwardsGoal },
    BicycleGoal: { eventName: s.d.BicycleGoal },
    LongGoal: { eventName: s.d.LongGoal },
    TurtleGoal: { eventName: s.d.TurtleGoal, getTitle: () => c.intl.string(d.default.JjrRc2) },
    PoolShot: { eventName: s.d.PoolShot, getTitle: () => c.intl.string(d.default["4cFeIa"]) },
    OvertimeGoal: { eventName: s.d.OvertimeGoal },
    HoopsSwishGoal: { eventName: s.d.SwishGoal },
    HatTrick: { eventName: s.d.HatTrick },
    Playmaker: { eventName: s.d.Playmaker },
    Savior: { eventName: s.d.Savior },
    Demolition: { eventName: s.d.Extermination },
    HighFive: { eventName: s.d.HighFive, matchEitherTarget: !0 },
    LowFive: { eventName: s.d.LowFive, matchEitherTarget: !0 },
    BreakoutDamage: { eventName: s.d.BreakoutDamage },
    BreakoutDamageLarge: { eventName: s.d.BreakoutDamageLarge },
    Shot: { eventName: s.d.Shot, getTitle: () => c.intl.string(d.default.ELmvIk) },
    Center: { eventName: s.d.Center },
    Clear: { eventName: s.d.Clear },
    FirstTouch: { eventName: s.d.FirstTouch },
    OwnGoal: { eventName: s.d.OwnGoal },
};
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = s._[e];
    return {
        type: o.Gy.GAME_EVENT,
        eventType: a.eventType,
        eventName: e,
        score: a.scoreBoost,
        importance: +!!a.triggerClipCandidate,
        title: t.title,
        additionalData: t.additionalData,
        hiddenFromTimeline: t.hiddenFromTimeline,
    };
}
class g {
    localPlayerName = null;
    localTeamNum = null;
    processMessage(e) {
        switch (e.Event) {
            case r.UpdateState: {
                let t = e.Data?.Game;
                return (
                    t?.bReplay !== !0 &&
                        t?.bHasTarget === !0 &&
                        t.Target?.Name != null &&
                        "" !== t.Target.Name &&
                        (this.localPlayerName !== t.Target.Name &&
                            o.nx.info(`[RL] local player identified: ${t.Target.Name} (team ${t.Target.TeamNum})`),
                        (this.localPlayerName = t.Target.Name),
                        (this.localTeamNum =
                            null != t.Target.TeamNum && 255 !== t.Target.TeamNum
                                ? t.Target.TeamNum
                                : this.localTeamNum)),
                    []
                );
            }
            case r.MatchCreated:
                return [u(s.d.MatchStart, { hiddenFromTimeline: !0 })];
            case r.MatchEnded: {
                let t = [];
                if (null != this.localTeamNum && e.Data?.WinnerTeamNum != null) {
                    let a = e.Data.WinnerTeamNum === this.localTeamNum;
                    t.push(
                        u(a ? s.d.Victory : s.d.Defeat, {
                            title: c.intl.string(a ? d.default.p65UF0 : d.default.saS9BW),
                        }),
                    );
                }
                return t.push(u(s.d.MatchEnd, { hiddenFromTimeline: !0 })), t;
            }
            case r.MatchDestroyed:
                return [u(s.d.MatchEnd, { hiddenFromTimeline: !0 })];
            case r.GoalScored: {
                let t = e.Data;
                if (this.isLocal(t?.Scorer))
                    return (
                        (this.localTeamNum = t?.Scorer?.TeamNum ?? this.localTeamNum),
                        [
                            u(s.d.Goal, {
                                title: c.intl.string(d.default.cOToac),
                                additionalData: { goalSpeed: t?.GoalSpeed, goalTime: t?.GoalTime },
                            }),
                        ]
                    );
                if (this.isLocal(t?.Assister)) return [u(s.d.Assist, { title: c.intl.string(d.default.qlCPiQ) })];
                return o.nx.info(`[RL] goal by ${t?.Scorer?.Name} ignored (localPlayer=${this.localPlayerName})`), [];
            }
            case r.StatfeedEvent: {
                let t = e.Data,
                    a = t?.EventName;
                if (null == a) return [];
                if ("Demolish" === a) {
                    if (this.isLocal(t?.MainTarget))
                        return [u(s.d.Demolition, { title: c.intl.string(d.default.IJqCEW) })];
                    if (this.isLocal(t?.SecondaryTarget))
                        return [u(s.d.Demolished, { title: c.intl.string(d.default.GdVA11) })];
                }
                let l = m[a];
                if (
                    null != l &&
                    (this.isLocal(t?.MainTarget) || (!0 === l.matchEitherTarget && this.isLocal(t?.SecondaryTarget)))
                )
                    return [u(l.eventName, { title: l.getTitle?.(), hiddenFromTimeline: null == l.getTitle })];
                return (
                    o.nx.info(
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
var h = a(190443);
function N(e) {
    let t = !1,
        a = null,
        l = new g(),
        r = new i.A(5e3, 2e4);
    function s(t) {
        let a = (function (e) {
            try {
                let t = JSON.parse(e);
                return "string" == typeof t?.Data && (t.Data = JSON.parse(t.Data)), t;
            } catch (e) {
                return null;
            }
        })(String(t.data));
        if (null == a) return;
        let i = (0, n.l)();
        for (let t of l.processMessage(a))
            o.nx.info(`[RL] emit event: ${t.eventName} score=${t.score} importance=${t.importance}`), e(t, i);
    }
    return {
        start() {
            t ||
                ((t = !0),
                r.succeed(),
                o.nx.info("[RL] starting stats API listener"),
                (function e() {
                    if (!t) return;
                    let l = new WebSocket(h.Q);
                    (a = l),
                        (l.onopen = () => {
                            r.succeed(), o.nx.info("[RL] stats API connected");
                        }),
                        (l.onmessage = s),
                        (l.onclose = () => {
                            a === l &&
                                ((a = null),
                                (function () {
                                    if (t && !r.pending) {
                                        if (r.fails >= 5)
                                            return o.nx.info(
                                                "[RL] stats API unreachable, giving up for this game session",
                                            );
                                        r.fail(e);
                                    }
                                })());
                        });
                })());
        },
        stop() {
            if (!t) return;
            (t = !1), o.nx.info("[RL] stopping stats API listener"), r.cancel();
            let e = a;
            (a = null), e?.close(), (l = new g());
        },
        getState: () => null,
    };
}
