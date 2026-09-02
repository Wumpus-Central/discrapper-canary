l.r(e), l.d(e, { default: () => v });
var n = l(324029),
    i = l(31048);
l(321073);
var r = l(132500),
    s = l(260549),
    a = l(106983),
    u = l(696016),
    o = l(268378),
    d = l(375708);
let m = new Set(["warmup", "paused", "timeout_ct", "timeout_t", "intermission", "gameover"]),
    p = new Set(["menu", "textinput"]);
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
function f(t) {
    return t.player?.steamid != null && t.provider?.steamid != null && t.player.steamid === t.provider.steamid;
}
function c(t) {
    let e = t?.weapons;
    if (null == e) return null;
    for (let t in e) if (e[t]?.state === "active") return e[t];
    return null;
}
function y(t) {
    return null != t && Object.values(t).some((t) => b(t)?.type === "C4");
}
function C(t, e, l, n) {
    return !(!t || null == e || null == l || m.has(e) || p.has(l)) && 0 !== n;
}
function I(t, e, l) {
    let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return {
        type: u.Gy.GAME_EVENT,
        title: (function (t) {
            switch (t) {
                case a.C.Kill:
                    return d.intl.string(o.default["3U5H62"]);
                case a.C.MultiKill:
                    return d.intl.string(o.default.mnZiTO);
                case a.C.Ace:
                    return d.intl.string(o.default.CWgKMS);
                case a.C.Assist:
                    return d.intl.string(o.default.qhZmhU);
                case a.C.Death:
                    return d.intl.string(o.default.ejnmIP);
                case a.C.BombPlant:
                    return d.intl.string(o.default.bdMG43);
                case a.C.BombDefused:
                    return d.intl.string(o.default.IptBJr);
                case a.C.BombExploded:
                    return d.intl.string(o.default.tAXn5v);
                case a.C.RoundWinningKill:
                    return d.intl.string(o.default.Ce0ZBI);
                case a.C.GameWinningKill:
                    return d.intl.string(o.default.b0i6PM);
                default:
                    return;
            }
        })(t),
        eventType: e,
        eventName: t,
        score: 0,
        importance: 0,
        hiddenFromTimeline: n,
        additionalData: l,
    };
}
class K {
    bombPlanterIsMe = !1;
    announcedFirstRound = !1;
    roundKillIds = [];
    multiKillChain = [];
    lastKillMs = null;
    myTeam = null;
    processPayload(t, e) {
        let l,
            n,
            i = [];
        if (
            (null == t.map &&
                ((this.bombPlanterIsMe = !1),
                (this.announcedFirstRound = !1),
                (this.roundKillIds = []),
                (this.multiKillChain = []),
                (this.lastKillMs = null),
                (this.myTeam = null)),
            t.provider?.timestamp == null)
        )
            return i;
        f(t) && t.player?.team != null && (this.myTeam = t.player.team);
        let o = b(t.previously?.player),
            d = b(t.previously?.map),
            m = f(t) && o?.steamid === void 0 && t.map?.phase !== "warmup",
            p = o?.state?.round_kills,
            K = t.player?.state?.round_kills;
        if (m && "number" == typeof p && "number" == typeof K && K > p) {
            let n = c(t.player),
                s = n?.type ?? "",
                o = n?.name ?? "";
            for (let t = 0; t < K - p; t++) {
                let t = (0, r.A)();
                this.roundKillIds.push(t),
                    (l = t),
                    i.push(I(a.C.Kill, u.rb.KILL, { id: t, weaponType: s, weaponName: o })),
                    null != this.lastKillMs && e - this.lastKillMs <= 5e3
                        ? this.multiKillChain.push(t)
                        : (this.multiKillChain = [t]),
                    (this.lastKillMs = e),
                    this.multiKillChain.length >= 2 &&
                        i.push(I(a.C.MultiKill, u.rb.MULTIKILL, { id: (0, r.A)(), killIds: [...this.multiKillChain] }));
            }
        }
        m &&
            t.map?.mode === "competitive" &&
            "number" == typeof p &&
            p < 5 &&
            5 === K &&
            i.push(I(a.C.Ace, u.rb.MULTIKILL, { id: (0, r.A)(), killIds: [...this.roundKillIds] }));
        let v = o?.match_stats?.deaths,
            A = t.player?.match_stats?.deaths;
        if (m && "number" == typeof v && "number" == typeof A && A > v) {
            for (let t = 0; t < A - v; t++) i.push(I(a.C.Death, u.rb.DEATH, { id: (0, r.A)() }));
            (this.multiKillChain = []), (this.lastKillMs = null);
        }
        let g = o?.match_stats?.assists,
            S = t.player?.match_stats?.assists;
        if (m && "number" == typeof g && "number" == typeof S && S > g)
            for (let t = 0; t < S - g; t++) i.push(I(a.C.Assist, u.rb.ASSIST, { id: (0, r.A)() }));
        let M = t.map?.mode === "casual" || t.map?.mode === "competitive";
        if (M && h(t, ["round", "win_team"]) && t.round?.win_team != null) {
            let e = (h(t, ["map", "round"]) ? d?.round : t.map?.round) ?? 0,
                s = t.round.win_team === this.myTeam;
            (n = (0, r.A)()),
                i.push(I(a.C.RoundEnd, u.rb.UNCLASSIFIED, { id: n, round: e, win: s }, !0)),
                null != l &&
                    s &&
                    i.push(I(a.C.RoundWinningKill, u.rb.KILL, { id: (0, r.A)(), killId: l, roundEndId: n }));
        }
        t.map?.phase === "gameover" &&
            null != l &&
            t.round?.win_team != null &&
            t.round.win_team === this.myTeam &&
            i.push(
                I(a.C.GameWinningKill, u.rb.KILL, {
                    id: (0, r.A)(),
                    killId: l,
                    ...(null != n ? { roundEndId: n } : {}),
                }),
            );
        let L = !this.announcedFirstRound && t.map?.phase === "live" && "number" == typeof t.map.round,
            w = h(t, ["map", "round"]) && "number" == typeof t.map?.round;
        if (M && (L || w) && t.map?.phase !== "gameover") {
            let e = t.map.round ?? 0;
            i.push(I(a.C.RoundStart, u.rb.UNCLASSIFIED, { id: (0, r.A)(), round: e }, !0)),
                (this.bombPlanterIsMe = !1),
                (this.roundKillIds = []);
        }
        if (f(t) && h(t, ["round", "bomb"]) && t.round?.bomb === "planting") {
            let e = c(t.player);
            e?.type === "C4" && (this.bombPlanterIsMe = !0);
        }
        f(t) && y(b(t.previously?.player)?.weapons) && !y(t.player?.weapons) && (this.bombPlanterIsMe = !0),
            h(t, ["round", "bomb"]) &&
                (t.round?.bomb === "planted"
                    ? i.push(I(a.C.BombPlant, u.rb.UNCLASSIFIED, { id: (0, r.A)(), byMe: this.bombPlanterIsMe }))
                    : t.round?.bomb === "defused"
                      ? i.push(I(a.C.BombDefused, u.rb.UNCLASSIFIED, { id: (0, r.A)() }))
                      : t.round?.bomb === "exploded" &&
                        i.push(I(a.C.BombExploded, u.rb.UNCLASSIFIED, { id: (0, r.A)() })),
                (t.round?.bomb === "defused" ||
                    t.round?.bomb === "exploded" ||
                    t.round?.bomb === "dropped" ||
                    t.round?.bomb === "carried") &&
                    (this.bombPlanterIsMe = !1));
        let _ = f(t),
            P = t.map?.phase,
            E = t.player?.activity,
            D = t.player?.state?.health,
            T = o?.steamid ?? t.player?.steamid,
            k = null != T && t.provider?.steamid != null && T === t.provider.steamid,
            F = d?.phase ?? P,
            U = o?.activity ?? E,
            R = o?.state?.health ?? D,
            x = C(_, P, E, D);
        return (
            x !== C(k, F, U, R) &&
                i.push(I(a.C.PlayStateChange, u.rb.UNCLASSIFIED, { id: (0, r.A)(), playing: x }, !0)),
            t.map?.phase === "live" && (this.announcedFirstRound = !0),
            i.map(s.n)
        );
    }
}
function v(t) {
    let e = !1,
        l = new K();
    function r(e) {
        let n = (0, i.l)();
        for (let i of l.processPayload(e, n))
            u.nx.info(`[CS2] emit event: ${i.eventName} score=${i.score} importance=${i.importance}`), t(i, n);
    }
    return {
        start() {
            e || ((e = !0), u.nx.info("[CS2] starting GSI listener"), (0, n.v_)(r));
        },
        stop() {
            e && ((e = !1), u.nx.info("[CS2] stopping GSI listener"), (0, n.yR)(), (l = new K()));
        },
        getState: () => null,
    };
}
