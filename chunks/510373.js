(n.d(t, { e: () => d }), n(321073), n(775443));
var i = n(284009),
    r = n.n(i),
    a = n(115171),
    s = n(144705),
    l = n(861343);
class o {
    gameAxisScoreThreshold = 0.35;
    gameStateTimeline = [];
    constructor(e) {
        this.gameStateTimeline = (function (e) {
            let t = { playing: !1, inMatch: !1 },
                n = [{ ...t, timestamp_ms: 0 }];
            function i(e, i) {
                let r = { ...t, ...e };
                (r.playing !== t.playing || r.inMatch !== t.inMatch) &&
                    (Object.assign(t, r), n.push({ ...r, timestamp_ms: i }));
            }
            for (let t of e)
                switch (t.eventName) {
                    case s.I.PlayStateChange:
                        i({ playing: t.additionalData?.playing === !0 }, t.timestamp_ms);
                        break;
                    case s.I.InMatchChange: {
                        let e = t.additionalData?.inMatch === !0;
                        i(e ? { inMatch: e } : { inMatch: e, playing: !1 }, t.timestamp_ms);
                    }
                }
            return n;
        })(e);
    }
    calculateModifiers(e, t) {
        let n = this.gameStateTimeline,
            i = [],
            r = (t - e) / 1e3 + 1;
        for (let t = 0; t < r; t++) {
            let r = e + 1e3 * t,
                a = c(n, r).playing ? 1 : 1 / 4;
            i.push({ timestamp_ms: r, modifier: a });
        }
        return i;
    }
    getInGameState(e, t) {
        return (0, l.r)(this.gameStateTimeline, e, t, (e) => e.playing);
    }
    rescoreEvent(e) {
        return (0, s.j)(e) ? (0, a.d)(e).score : void 0;
    }
    isInGame(e) {
        return c(this.gameStateTimeline, e).playing;
    }
    isInMatch(e) {
        return c(this.gameStateTimeline, e).inMatch;
    }
    canAnchorReaction(e) {
        let t = e.eventName;
        return t === s.I.Kill || t === s.I.MultiKill || t === s.I.Death || t === s.I.RoshanKill;
    }
}
let d = { applicationIds: ["356875988589740042"], create: (e) => new o(e) };
function c(e, t) {
    let n = e.findLast((e) => e.timestamp_ms <= t);
    return (r()(null != n, "bad timeline!"), n);
}
