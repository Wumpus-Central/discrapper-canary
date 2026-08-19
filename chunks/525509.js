n.r(e), n.d(e, { default: () => K });
var l = n(324029),
    i = n(31048);
n(321073);
var r = n(132500),
    s = n(260549),
    a = n(106983),
    u = n(696016),
    o = n(711918),
    d = n(375708);
let p = new Set(["warmup", "paused", "timeout_ct", "timeout_t", "intermission", "gameover"]),
    m = new Set(["menu", "textinput"]);
function h(t, e) {
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
function C(t) {
    return null != t && Object.values(t).some((t) => b(t)?.type === "C4");
}
function y(t, e, n, l) {
    return !(!t || null == e || null == n || p.has(e) || m.has(n)) && 0 !== l;
}
function I(t, e, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
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
        hiddenFromTimeline: l,
        additionalData: n,
    };
}
class g {
    bombPlanterIsMe = !1;
    announcedFirstRound = !1;
    roundKillIds = [];
    multiKillChain = [];
    lastKillMs = null;
    wasPlaying = !1;
    processPayload(t, e) {
        let n,
            l,
            i = [];
        if (!f(t))
            return (
                this.wasPlaying &&
                    ((this.wasPlaying = !1),
                    i.push(I(a.C.PlayStateChange, u.rb.UNCLASSIFIED, { id: (0, r.A)(), playing: !1 }, !0))),
                i.map(s.n)
            );
        if (
            (null == t.map &&
                ((this.bombPlanterIsMe = !1),
                (this.announcedFirstRound = !1),
                (this.roundKillIds = []),
                (this.multiKillChain = []),
                (this.lastKillMs = null)),
            t.provider?.timestamp == null)
        )
            return i;
        let o = b(t.previously?.player),
            d = b(t.previously?.map),
            p = f(t) && o?.steamid === void 0 && t.map?.phase !== "warmup",
            m = o?.state?.round_kills,
            g = t.player?.state?.round_kills;
        if (p && "number" == typeof m && "number" == typeof g && g > m) {
            let l = c(t.player),
                s = l?.type ?? "",
                o = l?.name ?? "";
            for (let t = 0; t < g - m; t++) {
                let t = (0, r.A)();
                this.roundKillIds.push(t),
                    (n = t),
                    i.push(I(a.C.Kill, u.rb.KILL, { id: t, weaponType: s, weaponName: o })),
                    null != this.lastKillMs && e - this.lastKillMs <= 5e3
                        ? this.multiKillChain.push(t)
                        : (this.multiKillChain = [t]),
                    (this.lastKillMs = e),
                    this.multiKillChain.length >= 2 &&
                        i.push(I(a.C.MultiKill, u.rb.MULTIKILL, { id: (0, r.A)(), killIds: [...this.multiKillChain] }));
            }
        }
        p &&
            t.map?.mode === "competitive" &&
            "number" == typeof m &&
            m < 5 &&
            5 === g &&
            i.push(I(a.C.Ace, u.rb.MULTIKILL, { id: (0, r.A)(), killIds: [...this.roundKillIds] }));
        let K = o?.match_stats?.deaths,
            v = t.player?.match_stats?.deaths;
        if (p && "number" == typeof K && "number" == typeof v && v > K) {
            for (let t = 0; t < v - K; t++) i.push(I(a.C.Death, u.rb.DEATH, { id: (0, r.A)() }));
            (this.multiKillChain = []), (this.lastKillMs = null);
        }
        let A = o?.match_stats?.assists,
            S = t.player?.match_stats?.assists;
        if (p && "number" == typeof A && "number" == typeof S && S > A)
            for (let t = 0; t < S - A; t++) i.push(I(a.C.Assist, u.rb.ASSIST, { id: (0, r.A)() }));
        let M = t.map?.mode === "casual" || t.map?.mode === "competitive";
        if (M && h(t, ["round", "win_team"]) && t.round?.win_team != null) {
            let e = (h(t, ["map", "round"]) ? d?.round : t.map?.round) ?? 0,
                s = t.round.win_team === t.player?.team;
            (l = (0, r.A)()),
                i.push(I(a.C.RoundEnd, u.rb.UNCLASSIFIED, { id: l, round: e, win: s }, !0)),
                null != n &&
                    s &&
                    i.push(I(a.C.RoundWinningKill, u.rb.KILL, { id: (0, r.A)(), killId: n, roundEndId: l }));
        }
        t.map?.phase === "gameover" &&
            null != n &&
            t.round?.win_team != null &&
            t.round.win_team === t.player?.team &&
            i.push(
                I(a.C.GameWinningKill, u.rb.KILL, {
                    id: (0, r.A)(),
                    killId: n,
                    ...(null != l ? { roundEndId: l } : {}),
                }),
            );
        let w = !this.announcedFirstRound && t.map?.phase === "live" && "number" == typeof t.map.round,
            L = h(t, ["map", "round"]) && "number" == typeof t.map?.round;
        if (M && (w || L) && t.map?.phase !== "gameover") {
            let e = t.map.round ?? 0;
            i.push(I(a.C.RoundStart, u.rb.UNCLASSIFIED, { id: (0, r.A)(), round: e }, !0)),
                (this.bombPlanterIsMe = !1),
                (this.roundKillIds = []);
        }
        if (h(t, ["round", "bomb"]) && t.round?.bomb === "planting") {
            let e = c(t.player);
            e?.type === "C4" && (this.bombPlanterIsMe = !0);
        }
        f(t) && C(b(t.previously?.player)?.weapons) && !C(t.player?.weapons) && (this.bombPlanterIsMe = !0),
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
        let P = f(t),
            _ = t.map?.phase,
            E = t.player?.activity,
            D = t.player?.state?.health,
            F = o?.steamid ?? t.player?.steamid,
            U = null != F && t.provider?.steamid != null && F === t.provider.steamid,
            k = d?.phase ?? _,
            N = o?.activity ?? E,
            R = o?.state?.health ?? D,
            x = y(P, _, E, D);
        return (
            x !== y(U, k, N, R) &&
                i.push(I(a.C.PlayStateChange, u.rb.UNCLASSIFIED, { id: (0, r.A)(), playing: x }, !0)),
            (this.wasPlaying = x),
            t.map?.phase === "live" && (this.announcedFirstRound = !0),
            i.map(s.n)
        );
    }
}
function K(t) {
    let e = !1,
        n = new g();
    function r(e) {
        let l = (0, i.l)();
        for (let i of n.processPayload(e, l))
            u.nx.info(`[CS2] emit event: ${i.eventName} score=${i.score} importance=${i.importance}`), t(i, l);
    }
    return {
        start() {
            e || ((e = !0), u.nx.info("[CS2] starting GSI listener"), (0, l.v_)(r));
        },
        stop() {
            e && ((e = !1), u.nx.info("[CS2] stopping GSI listener"), (0, l.yR)(), (n = new g()));
        },
        getState: () => null,
    };
}
