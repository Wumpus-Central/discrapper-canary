n.r(e), n.d(e, { default: () => S });
var l = n(324029),
    i = n(779559),
    r = n(31048);
n(321073);
var s = n(132500),
    a = n(260549),
    u = n(106983),
    o = n(696016),
    d = n(704796),
    m = n(375708);
let p = new Set(["warmup", "paused", "timeout_ct", "timeout_t", "intermission", "gameover"]),
    h = "menu",
    c = new Set([h, "textinput"]);
function b(t, e) {
    return (
        (function (t, e) {
            let n = t.previously;
            for (let t of e) {
                if (null == n) return !1;
                n = n[t];
            }
            return null != n;
        })(t, e) ||
        (function (t, e) {
            let n = t.added;
            for (let t of e) {
                if (!0 === n) return !0;
                if (null == n) return !1;
                n = n[t];
            }
            return !0 === n;
        })(t, e)
    );
}
function f(t) {
    return !0 === t ? void 0 : t;
}
function C(t) {
    return t.player?.steamid != null && t.provider?.steamid != null && t.player.steamid === t.provider.steamid;
}
function y(t) {
    let e = t?.weapons;
    if (null == e) return null;
    for (let t in e) if (e[t]?.state === "active") return e[t];
    return null;
}
function I(t) {
    return null != t && Object.values(t).some((t) => f(t)?.type === "C4");
}
function g(t, e, n, l) {
    return !(!t || null == e || null == n || p.has(e) || c.has(n)) && 0 !== l;
}
function K(t, e, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return {
        type: o.Gy.GAME_EVENT,
        title: (function (t) {
            switch (t) {
                case u.C.Kill:
                    return m.intl.string(d.default["3U5H62"]);
                case u.C.MultiKill:
                    return m.intl.string(d.default.mnZiTO);
                case u.C.Ace:
                    return m.intl.string(d.default.CWgKMS);
                case u.C.Assist:
                    return m.intl.string(d.default.qhZmhU);
                case u.C.Death:
                    return m.intl.string(d.default.ejnmIP);
                case u.C.BombPlant:
                    return m.intl.string(d.default.bdMG43);
                case u.C.BombDefused:
                    return m.intl.string(d.default.IptBJr);
                case u.C.BombExploded:
                    return m.intl.string(d.default.tAXn5v);
                case u.C.RoundWinningKill:
                    return m.intl.string(d.default.Ce0ZBI);
                case u.C.GameWinningKill:
                    return m.intl.string(d.default.b0i6PM);
                default:
                    return;
            }
        })(t),
        eventType: e,
        eventName: t,
        score: 0,
        importance: 0,
        hiddenFromTimeline: l,
        additionalData: n,
    };
}
class A {
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
        let n,
            l,
            i = [],
            r = null != t.map && t.player?.activity !== h;
        if (
            (r !== this.wasInMatch &&
                ((this.wasInMatch = r),
                i.push(K(u.C.InMatchChange, o.rb.UNCLASSIFIED, { id: (0, s.A)(), inMatch: r }, !0))),
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
        C(t) && t.player?.team != null && (this.myTeam = t.player.team);
        let a = f(t.previously?.player),
            d = f(t.previously?.map),
            m = C(t) && a?.steamid === void 0 && t.map?.phase !== "warmup",
            p = a?.state?.round_kills,
            c = t.player?.state?.round_kills;
        if (m && "number" == typeof p && "number" == typeof c && c > p) {
            let l = y(t.player),
                r = l?.type ?? "",
                a = l?.name ?? "";
            for (let t = 0; t < c - p; t++) {
                let t = (0, s.A)();
                this.roundKillIds.push(t),
                    (n = t),
                    i.push(K(u.C.Kill, o.rb.KILL, { id: t, weaponType: r, weaponName: a })),
                    null != this.lastKillMs && e - this.lastKillMs <= 5e3
                        ? this.multiKillChain.push(t)
                        : (this.multiKillChain = [t]),
                    (this.lastKillMs = e),
                    this.multiKillChain.length >= 2 &&
                        i.push(K(u.C.MultiKill, o.rb.MULTIKILL, { id: (0, s.A)(), killIds: [...this.multiKillChain] }));
            }
        }
        m &&
            t.map?.mode === "competitive" &&
            "number" == typeof p &&
            p < 5 &&
            5 === c &&
            i.push(K(u.C.Ace, o.rb.MULTIKILL, { id: (0, s.A)(), killIds: [...this.roundKillIds] }));
        let A = a?.match_stats?.deaths,
            S = t.player?.match_stats?.deaths;
        if (m && "number" == typeof A && "number" == typeof S && S > A) {
            for (let t = 0; t < S - A; t++) i.push(K(u.C.Death, o.rb.DEATH, { id: (0, s.A)() }));
            (this.multiKillChain = []), (this.lastKillMs = null);
        }
        let v = a?.match_stats?.assists,
            M = t.player?.match_stats?.assists;
        if (m && "number" == typeof v && "number" == typeof M && M > v)
            for (let t = 0; t < M - v; t++) i.push(K(u.C.Assist, o.rb.ASSIST, { id: (0, s.A)() }));
        let w = t.map?.mode === "casual" || t.map?.mode === "competitive";
        if (w && b(t, ["round", "win_team"]) && t.round?.win_team != null) {
            let e = (b(t, ["map", "round"]) ? d?.round : t.map?.round) ?? 0,
                r = t.round.win_team === this.myTeam;
            (l = (0, s.A)()),
                i.push(K(u.C.RoundEnd, o.rb.UNCLASSIFIED, { id: l, round: e, win: r }, !0)),
                null != n &&
                    r &&
                    i.push(K(u.C.RoundWinningKill, o.rb.KILL, { id: (0, s.A)(), killId: n, roundEndId: l }));
        }
        t.map?.phase === "gameover" &&
            null != n &&
            t.round?.win_team != null &&
            t.round.win_team === this.myTeam &&
            i.push(
                K(u.C.GameWinningKill, o.rb.KILL, {
                    id: (0, s.A)(),
                    killId: n,
                    ...(null != l ? { roundEndId: l } : {}),
                }),
            );
        let L = !this.announcedFirstRound && t.map?.phase === "live" && "number" == typeof t.map.round,
            _ = b(t, ["map", "round"]) && "number" == typeof t.map?.round;
        if (w && (L || _) && t.map?.phase !== "gameover") {
            let e = t.map.round ?? 0;
            i.push(K(u.C.RoundStart, o.rb.UNCLASSIFIED, { id: (0, s.A)(), round: e }, !0)),
                (this.bombPlanterIsMe = !1),
                (this.roundKillIds = []);
        }
        if (C(t) && b(t, ["round", "bomb"]) && t.round?.bomb === "planting") {
            let e = y(t.player);
            e?.type === "C4" && (this.bombPlanterIsMe = !0);
        }
        C(t) && I(f(t.previously?.player)?.weapons) && !I(t.player?.weapons) && (this.bombPlanterIsMe = !0),
            b(t, ["round", "bomb"]) &&
                (t.round?.bomb === "planted"
                    ? i.push(K(u.C.BombPlant, o.rb.UNCLASSIFIED, { id: (0, s.A)(), byMe: this.bombPlanterIsMe }))
                    : t.round?.bomb === "defused"
                      ? i.push(K(u.C.BombDefused, o.rb.UNCLASSIFIED, { id: (0, s.A)() }))
                      : t.round?.bomb === "exploded" &&
                        i.push(K(u.C.BombExploded, o.rb.UNCLASSIFIED, { id: (0, s.A)() })),
                (t.round?.bomb === "defused" ||
                    t.round?.bomb === "exploded" ||
                    t.round?.bomb === "dropped" ||
                    t.round?.bomb === "carried") &&
                    (this.bombPlanterIsMe = !1));
        let E = C(t),
            P = t.map?.phase,
            D = t.player?.activity,
            F = t.player?.state?.health,
            T = a?.steamid ?? t.player?.steamid,
            U = null != T && t.provider?.steamid != null && T === t.provider.steamid,
            k = d?.phase ?? P,
            R = a?.activity ?? D,
            N = a?.state?.health ?? F,
            x = g(E, P, D, F);
        return (
            x !== g(U, k, R, N) &&
                i.push(K(u.C.PlayStateChange, o.rb.UNCLASSIFIED, { id: (0, s.A)(), playing: x }, !0)),
            t.map?.phase === "live" && (this.announcedFirstRound = !0),
            this.score(i)
        );
    }
}
function S(t) {
    let e = !1,
        n = new A();
    function s(e) {
        let l = (0, r.l)();
        for (let i of n.processPayload(e, l))
            o.nx.info(`[CS2] emit event: ${i.eventName} score=${i.score} importance=${i.importance}`), t(i, l);
    }
    return {
        start() {
            e ||
                ((e = !0),
                (n = new A({
                    clipRoundSummaryFootage: i.A.getConfig({ location: "cs2SignalHandlerStart" }).enableAutomontage,
                })),
                o.nx.info("[CS2] starting GSI listener"),
                (0, l.v_)(s));
        },
        stop() {
            e && ((e = !1), o.nx.info("[CS2] stopping GSI listener"), (0, l.yR)(), (n = new A()));
        },
        getState: () => null,
    };
}
