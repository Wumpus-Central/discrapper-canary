(l.r(e), l.d(e, { default: () => v }));
var n = l(324029),
    i = l(779559),
    s = l(31048);
l(321073);
var r = l(115560),
    a = l(260549),
    o = l(106983),
    u = l(696016);
let p = new Set(["warmup", "paused", "timeout_ct", "timeout_t", "intermission", "gameover"]),
    d = "menu",
    m = new Set([d, "textinput"]);
function h(t, e) {
    return (
        (function (t, e) {
            let l = t.previously;
            for (let t of e) {
                if (null == l) return !1;
                l = l[t];
            }
            return null != l;
        })(t, e) ||
        (function (t, e) {
            let l = t.added;
            for (let t of e) {
                if (!0 === l) return !0;
                if (null == l) return !1;
                l = l[t];
            }
            return !0 === l;
        })(t, e)
    );
}
function b(t) {
    return !0 === t ? void 0 : t;
}
function c(t) {
    return t.player?.steamid != null && t.provider?.steamid != null && t.player.steamid === t.provider.steamid;
}
function f(t) {
    let e = t?.weapons;
    if (null == e) return null;
    for (let t in e) if (e[t]?.state === "active") return e[t];
    return null;
}
function y(t) {
    return null != t && Object.values(t).some((t) => b(t)?.type === "C4");
}
function I(t, e, l, n) {
    return !(!t || null == e || null == l || p.has(e) || m.has(l)) && 0 !== n;
}
function C(t, e, l) {
    let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return {
        type: u.Gy.GAME_EVENT,
        eventType: e,
        eventName: t,
        score: 0,
        importance: 0,
        hiddenFromTimeline: n,
        additionalData: l,
    };
}
class S {
    scoringOptions;
    bombPlanterIsMe = !1;
    announcedFirstRound = !1;
    roundKillIds = [];
    multiKillChain = [];
    lastKillMs = null;
    myTeam = null;
    wasInMatch = !0;
    constructor(t = {}) {
        this.scoringOptions = t;
    }
    score(t) {
        return t.map((t) => (0, a.n)(t, this.scoringOptions));
    }
    processPayload(t, e) {
        let l,
            n,
            i = [],
            s = null != t.map && t.player?.activity !== d;
        if (
            (s !== this.wasInMatch &&
                ((this.wasInMatch = s),
                i.push(C(o.C.InMatchChange, u.rb.UNCLASSIFIED, { id: (0, r.A)(), inMatch: s }, !0))),
            null == t.map &&
                ((this.bombPlanterIsMe = !1),
                (this.announcedFirstRound = !1),
                (this.roundKillIds = []),
                (this.multiKillChain = []),
                (this.lastKillMs = null),
                (this.myTeam = null)),
            t.provider?.timestamp == null)
        )
            return i;
        c(t) && t.player?.team != null && (this.myTeam = t.player.team);
        let a = b(t.previously?.player),
            p = b(t.previously?.map),
            m = c(t) && a?.steamid === void 0 && t.map?.phase !== "warmup",
            S = a?.state?.round_kills,
            v = t.player?.state?.round_kills;
        if (m && "number" == typeof S && "number" == typeof v && v > S) {
            let n = f(t.player),
                s = n?.type ?? "",
                a = n?.name ?? "";
            for (let t = 0; t < v - S; t++) {
                let t = (0, r.A)();
                (this.roundKillIds.push(t),
                    (l = t),
                    i.push(C(o.C.Kill, u.rb.KILL, { id: t, weaponType: s, weaponName: a })),
                    null != this.lastKillMs && e - this.lastKillMs <= 5e3
                        ? this.multiKillChain.push(t)
                        : (this.multiKillChain = [t]),
                    (this.lastKillMs = e),
                    this.multiKillChain.length >= 2 &&
                        i.push(
                            C(o.C.MultiKill, u.rb.MULTIKILL, { id: (0, r.A)(), killIds: [...this.multiKillChain] }),
                        ));
            }
        }
        m &&
            t.map?.mode === "competitive" &&
            "number" == typeof S &&
            S < 5 &&
            5 === v &&
            i.push(C(o.C.Ace, u.rb.MULTIKILL, { id: (0, r.A)(), killIds: [...this.roundKillIds] }));
        let A = a?.match_stats?.deaths,
            K = t.player?.match_stats?.deaths;
        if (m && "number" == typeof A && "number" == typeof K && K > A) {
            for (let t = 0; t < K - A; t++) i.push(C(o.C.Death, u.rb.DEATH, { id: (0, r.A)() }));
            ((this.multiKillChain = []), (this.lastKillMs = null));
        }
        let g = a?.match_stats?.assists,
            M = t.player?.match_stats?.assists;
        if (m && "number" == typeof g && "number" == typeof M && M > g)
            for (let t = 0; t < M - g; t++) i.push(C(o.C.Assist, u.rb.ASSIST, { id: (0, r.A)() }));
        let w = t.map?.mode === "casual" || t.map?.mode === "competitive";
        if (w && h(t, ["round", "win_team"]) && t.round?.win_team != null) {
            let e = (h(t, ["map", "round"]) ? p?.round : t.map?.round) ?? 0,
                s = t.round.win_team === this.myTeam;
            ((n = (0, r.A)()),
                i.push(C(o.C.RoundEnd, u.rb.UNCLASSIFIED, { id: n, round: e, win: s }, !0)),
                null != l &&
                    s &&
                    i.push(C(o.C.RoundWinningKill, u.rb.KILL, { id: (0, r.A)(), killId: l, roundEndId: n })));
        }
        t.map?.phase === "gameover" &&
            null != l &&
            t.round?.win_team != null &&
            t.round.win_team === this.myTeam &&
            i.push(
                C(o.C.GameWinningKill, u.rb.KILL, {
                    id: (0, r.A)(),
                    killId: l,
                    ...(null != n ? { roundEndId: n } : {}),
                }),
            );
        let L = !this.announcedFirstRound && t.map?.phase === "live" && "number" == typeof t.map.round,
            _ = h(t, ["map", "round"]) && "number" == typeof t.map?.round;
        if (w && (L || _) && t.map?.phase !== "gameover") {
            let e = t.map.round ?? 0;
            (i.push(C(o.C.RoundStart, u.rb.UNCLASSIFIED, { id: (0, r.A)(), round: e }, !0)),
                (this.bombPlanterIsMe = !1),
                (this.roundKillIds = []));
        }
        if (c(t) && h(t, ["round", "bomb"]) && t.round?.bomb === "planting") {
            let e = f(t.player);
            e?.type === "C4" && (this.bombPlanterIsMe = !0);
        }
        (c(t) && y(b(t.previously?.player)?.weapons) && !y(t.player?.weapons) && (this.bombPlanterIsMe = !0),
            h(t, ["round", "bomb"]) &&
                (t.round?.bomb === "planted"
                    ? i.push(C(o.C.BombPlant, u.rb.UNCLASSIFIED, { id: (0, r.A)(), byMe: this.bombPlanterIsMe }))
                    : t.round?.bomb === "defused"
                      ? i.push(C(o.C.BombDefused, u.rb.UNCLASSIFIED, { id: (0, r.A)() }))
                      : t.round?.bomb === "exploded" &&
                        i.push(C(o.C.BombExploded, u.rb.UNCLASSIFIED, { id: (0, r.A)() })),
                (t.round?.bomb === "defused" ||
                    t.round?.bomb === "exploded" ||
                    t.round?.bomb === "dropped" ||
                    t.round?.bomb === "carried") &&
                    (this.bombPlanterIsMe = !1)));
        let E = c(t),
            F = t.map?.phase,
            U = t.player?.activity,
            P = t.player?.state?.health,
            k = a?.steamid ?? t.player?.steamid,
            D = null != k && t.provider?.steamid != null && k === t.provider.steamid,
            T = p?.phase ?? F,
            N = a?.activity ?? U,
            R = a?.state?.health ?? P,
            G = I(E, F, U, P);
        return (
            G !== I(D, T, N, R) &&
                i.push(C(o.C.PlayStateChange, u.rb.UNCLASSIFIED, { id: (0, r.A)(), playing: G }, !0)),
            t.map?.phase === "live" && (this.announcedFirstRound = !0),
            this.score(i)
        );
    }
}
function v(t) {
    let e = !1,
        l = new S();
    function r(e) {
        let n = (0, s.l)();
        for (let i of l.processPayload(e, n))
            (u.GU.info(`[CS2] emit event: ${i.eventName} score=${i.score} importance=${i.importance}`), t(i, n));
    }
    return {
        start() {
            e ||
                ((e = !0),
                (l = new S({
                    clipRoundSummaryFootage: i.A.getConfig({ location: "cs2SignalHandlerStart" }).enableAutomontage,
                })),
                u.GU.info("[CS2] starting GSI listener"),
                (0, n.v_)(r));
        },
        stop() {
            e && ((e = !1), u.GU.info("[CS2] stopping GSI listener"), (0, n.yR)(), (l = new S()));
        },
        getState: () => null,
    };
}
