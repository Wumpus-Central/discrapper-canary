(n.d(t, { P: () => A }), n(321073), n(775443));
var i = n(284009),
    r = n.n(i),
    a = n(626333),
    s = n(979563);
let l = new Set(Object.values(s.d));
function o(e) {
    return null != e.eventName && l.has(e.eventName);
}
var d = n(861343),
    c = n(190443);
let u = 1 / 4,
    _ = new Set([s.d.Goal, s.d.Save, s.d.EpicSave, s.d.Demolition, s.d.Demolished, s.d.BicycleHit, s.d.FlipReset]);
class E {
    gameAxisScoreThreshold = 0.25;
    gameStateTimeline = [];
    constructor(e) {
        this.gameStateTimeline = (function (e) {
            let t = !1,
                n = [{ inMatch: !1, timestamp_ms: 0 }];
            function i(e, i) {
                e !== t && ((t = e), n.push({ inMatch: t, timestamp_ms: i }));
            }
            for (let t of [...e].sort((e, t) => e.timestamp_ms - t.timestamp_ms))
                switch (t.eventName) {
                    case s.d.MatchStart:
                        i(!0, t.timestamp_ms);
                        break;
                    case s.d.MatchEnd:
                        i(!1, t.timestamp_ms);
                        break;
                    default:
                        o(t) && i(!0, t.timestamp_ms);
                }
            return n;
        })(e);
    }
    calculateModifiers(e, t) {
        let n = [],
            i = (t - e) / 1e3 + 1;
        for (let t = 0; t < i; t++) {
            let i = e + 1e3 * t,
                r = h(this.gameStateTimeline, i);
            n.push({ timestamp_ms: i, modifier: r.inMatch ? 1 : u });
        }
        return n;
    }
    getInGameState(e, t) {
        return (0, d.r)(this.gameStateTimeline, e, t, (e) => e.inMatch);
    }
    rescoreEvent(e) {
        return o(e) ? (0, a.K)(e).score : void 0;
    }
    isInGame(e) {
        return h(this.gameStateTimeline, e).inMatch;
    }
    canAnchorReaction(e) {
        return null != e.eventName && _.has(e.eventName);
    }
}
let A = { applicationIds: [c.e], create: (e) => new E(e) };
function h(e, t) {
    let n = e.findLast((e) => e.timestamp_ms <= t);
    return (r()(null != n, "bad timeline!"), n);
}
