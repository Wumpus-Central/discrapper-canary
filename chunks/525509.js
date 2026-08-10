l.r(t), l.d(t, { default: () => C });
var n = l(324029),
    i = l(31048);
l(321073);
var r = l(132500),
    a = l(260549),
    s = l(106983),
    u = l(696016);
let o = new Set(["warmup", "paused", "timeout_ct", "timeout_t", "intermission", "gameover"]),
    d = new Set(["menu", "textinput"]);
function p(e, t) {
    return (
        (function (e, t) {
            let l = e.previously;
            for (let e of t) {
                if (null == l) return !1;
                l = l[e];
            }
            return null != l;
        })(e, t) ||
        (function (e, t) {
            let l = e.added;
            for (let e of t) {
                if (!0 === l) return !0;
                if (null == l) return !1;
                l = l[e];
            }
            return !0 === l;
        })(e, t)
    );
}
function m(e) {
    return !0 === e ? void 0 : e;
}
function h(e) {
    return e.player?.steamid != null && e.provider?.steamid != null && e.player.steamid === e.provider.steamid;
}
function b(e) {
    let t = e?.weapons;
    if (null == t) return null;
    for (let e in t) if (t[e]?.state === "active") return t[e];
    return null;
}
function f(e) {
    return null != e && Object.values(e).some((e) => m(e)?.type === "C4");
}
function y(e, t, l, n) {
    return !(!e || null == t || null == l || o.has(t) || d.has(l)) && 0 !== n;
}
function c(e, t, l) {
    let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return {
        type: u.Gy.GAME_EVENT,
        eventType: t,
        eventName: e,
        score: 0,
        importance: 0,
        hiddenFromTimeline: n,
        additionalData: l,
    };
}
class I {
    bombPlanterIsMe = !1;
    announcedFirstRound = !1;
    roundKillIds = [];
    multiKillChain = [];
    lastKillMs = null;
    wasPlaying = !1;
    processPayload(e, t) {
        let l,
            n,
            i = [];
        if (!h(e))
            return (
                this.wasPlaying &&
                    ((this.wasPlaying = !1),
                    i.push(c(s.C.PlayStateChange, u.rb.UNCLASSIFIED, { id: (0, r.A)(), playing: !1 }, !0))),
                i.map(a.n)
            );
        if (
            (null == e.map &&
                ((this.bombPlanterIsMe = !1),
                (this.announcedFirstRound = !1),
                (this.roundKillIds = []),
                (this.multiKillChain = []),
                (this.lastKillMs = null)),
            e.provider?.timestamp == null)
        )
            return i;
        let o = m(e.previously?.player),
            d = m(e.previously?.map),
            I = h(e) && o?.steamid === void 0 && e.map?.phase !== "warmup",
            C = o?.state?.round_kills,
            v = e.player?.state?.round_kills;
        if (I && "number" == typeof C && "number" == typeof v && v > C) {
            let n = b(e.player),
                a = n?.type ?? "",
                o = n?.name ?? "";
            for (let e = 0; e < v - C; e++) {
                let e = (0, r.A)();
                this.roundKillIds.push(e),
                    (l = e),
                    i.push(c(s.C.Kill, u.rb.KILL, { id: e, weaponType: a, weaponName: o })),
                    null != this.lastKillMs && t - this.lastKillMs <= 5e3
                        ? this.multiKillChain.push(e)
                        : (this.multiKillChain = [e]),
                    (this.lastKillMs = t),
                    this.multiKillChain.length >= 2 &&
                        i.push(c(s.C.MultiKill, u.rb.MULTIKILL, { id: (0, r.A)(), killIds: [...this.multiKillChain] }));
            }
        }
        I &&
            e.map?.mode === "competitive" &&
            "number" == typeof C &&
            C < 5 &&
            5 === v &&
            i.push(c(s.C.Ace, u.rb.MULTIKILL, { id: (0, r.A)(), killIds: [...this.roundKillIds] }));
        let S = o?.match_stats?.deaths,
            K = e.player?.match_stats?.deaths;
        if (I && "number" == typeof S && "number" == typeof K && K > S) {
            for (let e = 0; e < K - S; e++) i.push(c(s.C.Death, u.rb.DEATH, { id: (0, r.A)() }));
            (this.multiKillChain = []), (this.lastKillMs = null);
        }
        let A = o?.match_stats?.assists,
            w = e.player?.match_stats?.assists;
        if (I && "number" == typeof A && "number" == typeof w && w > A)
            for (let e = 0; e < w - A; e++) i.push(c(s.C.Assist, u.rb.ASSIST, { id: (0, r.A)() }));
        let g = e.map?.mode === "casual" || e.map?.mode === "competitive";
        if (g && p(e, ["round", "win_team"]) && e.round?.win_team != null) {
            let t = (p(e, ["map", "round"]) ? d?.round : e.map?.round) ?? 0,
                a = e.round.win_team === e.player?.team;
            (n = (0, r.A)()),
                i.push(c(s.C.RoundEnd, u.rb.UNCLASSIFIED, { id: n, round: t, win: a }, !0)),
                null != l &&
                    a &&
                    i.push(c(s.C.RoundWinningKill, u.rb.KILL, { id: (0, r.A)(), killId: l, roundEndId: n }));
        }
        e.map?.phase === "gameover" &&
            null != l &&
            e.round?.win_team != null &&
            e.round.win_team === e.player?.team &&
            i.push(
                c(s.C.GameWinningKill, u.rb.KILL, {
                    id: (0, r.A)(),
                    killId: l,
                    ...(null != n ? { roundEndId: n } : {}),
                }),
            );
        let L = !this.announcedFirstRound && e.map?.phase === "live" && "number" == typeof e.map.round,
            M = p(e, ["map", "round"]) && "number" == typeof e.map?.round;
        if (g && (L || M) && e.map?.phase !== "gameover") {
            let t = e.map.round ?? 0;
            i.push(c(s.C.RoundStart, u.rb.UNCLASSIFIED, { id: (0, r.A)(), round: t }, !0)),
                (this.bombPlanterIsMe = !1),
                (this.roundKillIds = []);
        }
        if (p(e, ["round", "bomb"]) && e.round?.bomb === "planting") {
            let t = b(e.player);
            t?.type === "C4" && (this.bombPlanterIsMe = !0);
        }
        h(e) && f(m(e.previously?.player)?.weapons) && !f(e.player?.weapons) && (this.bombPlanterIsMe = !0),
            p(e, ["round", "bomb"]) &&
                (e.round?.bomb === "planted"
                    ? i.push(c(s.C.BombPlant, u.rb.UNCLASSIFIED, { id: (0, r.A)(), byMe: this.bombPlanterIsMe }))
                    : e.round?.bomb === "defused"
                      ? i.push(c(s.C.BombDefused, u.rb.UNCLASSIFIED, { id: (0, r.A)() }))
                      : e.round?.bomb === "exploded" &&
                        i.push(c(s.C.BombExploded, u.rb.UNCLASSIFIED, { id: (0, r.A)() })),
                (e.round?.bomb === "defused" ||
                    e.round?.bomb === "exploded" ||
                    e.round?.bomb === "dropped" ||
                    e.round?.bomb === "carried") &&
                    (this.bombPlanterIsMe = !1));
        let _ = h(e),
            P = e.map?.phase,
            E = e.player?.activity,
            F = e.player?.state?.health,
            k = o?.steamid ?? e.player?.steamid,
            D = null != k && e.provider?.steamid != null && k === e.provider.steamid,
            N = d?.phase ?? P,
            U = o?.activity ?? E,
            R = o?.state?.health ?? F,
            x = y(_, P, E, F);
        return (
            x !== y(D, N, U, R) &&
                i.push(c(s.C.PlayStateChange, u.rb.UNCLASSIFIED, { id: (0, r.A)(), playing: x }, !0)),
            (this.wasPlaying = x),
            e.map?.phase === "live" && (this.announcedFirstRound = !0),
            i.map(a.n)
        );
    }
}
function C(e) {
    let t = !1,
        l = new I();
    function r(t) {
        let n = (0, i.l)();
        for (let i of l.processPayload(t, n))
            u.nx.info(`[CS2] emit event: ${i.eventName} score=${i.score} importance=${i.importance}`), e(i, n);
    }
    return {
        start() {
            t || ((t = !0), u.nx.info("[CS2] starting GSI listener"), (0, n.v_)(r));
        },
        stop() {
            t && ((t = !1), u.nx.info("[CS2] stopping GSI listener"), (0, n.yR)(), (l = new I()));
        },
        getState: () => null,
    };
}
