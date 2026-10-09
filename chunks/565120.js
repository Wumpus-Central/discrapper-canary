(n.d(t, { S: () => _ }), n(321073), n(775443));
var i = n(284009),
    r = n.n(i),
    a = n(612638),
    s = n(801344);
let l = new Set(Object.values(s.n_));
var o = n(861343),
    d = n(876474);
let c = new Set([
    s.n_.ChampionKill,
    s.n_.ChampionDeath,
    s.n_.DoubleKill,
    s.n_.TripleKill,
    s.n_.QuadraKill,
    s.n_.PentaKill,
    s.n_.DragonSteal,
    s.n_.BaronSteal,
]);
class u {
    gameEvents;
    gameAxisScoreThreshold = 0.17;
    gameStateTimeline = [];
    constructor(e) {
        ((this.gameEvents = e),
            (this.gameStateTimeline = (function (e) {
                let t = { in_game: !1, is_dead: !1 },
                    n = [{ ...t, timestamp_ms: 0 }];
                function i(e, i) {
                    let r = { ...t, ...e };
                    (r.in_game !== t.in_game || r.is_dead !== t.is_dead) &&
                        (Object.assign(t, r), n.push({ ...r, timestamp_ms: i }));
                }
                for (let t of [...e].sort((e, t) => e.timestamp_ms - t.timestamp_ms))
                    switch (
                        (function (e) {
                            switch (e) {
                                case s.n_.GameStart:
                                    return "game_start";
                                case s.n_.GameEnd:
                                    return "game_end";
                                case s.n_.ChampionDeath:
                                    return "death";
                                case s.n_.Respawn:
                                    return "respawn";
                                default:
                                    return "gameplay";
                            }
                        })(t.eventName)
                    ) {
                        case "game_start":
                        case "respawn":
                            i({ in_game: !0, is_dead: !1 }, t.timestamp_ms);
                            break;
                        case "game_end":
                            i({ in_game: !1, is_dead: !1 }, t.timestamp_ms);
                            break;
                        case "death":
                            i({ in_game: !0, is_dead: !0 }, t.timestamp_ms);
                            break;
                        case "gameplay":
                            i({ in_game: !0 }, t.timestamp_ms);
                    }
                return n;
            })(this.gameEvents)));
    }
    calculateModifiers(e, t) {
        let n = this.gameStateTimeline,
            i = [],
            r = (t - e) / 1e3 + 1;
        for (let t = 0; t < r; t++) {
            let r = e + 1e3 * t,
                a = E(n, r),
                l = 1;
            (a.in_game ? a.is_dead && (l *= s.pw) : (l *= 0.25), i.push({ timestamp_ms: r, modifier: l }));
        }
        return i;
    }
    eventScoreMultiplier(e) {
        if (e.eventName !== s.n_.ChampionKill) return 1;
        let t = e.additionalData?.health;
        return "number" != typeof t ? 1 : (0, s.nS)(t);
    }
    getInGameState(e, t) {
        return (0, o.r)(this.gameStateTimeline, e, t, (e) => e.in_game);
    }
    rescoreEvent(e) {
        return null != e.eventName && l.has(e.eventName) ? (0, a.b)(e).score : void 0;
    }
    isInGame(e) {
        return E(this.gameStateTimeline, e).in_game;
    }
    canAnchorReaction(e) {
        return null != e.eventName && c.has(e.eventName);
    }
}
let _ = { applicationIds: [d.m], create: (e) => new u(e) };
function E(e, t) {
    let n = e.findLast((e) => e.timestamp_ms <= t);
    return (r()(null != n, "bad timeline!"), n);
}
