(l.r(e), l.d(e, { default: () => I }));
var i = l(72611),
    a = l(31048);
l(321073);
var s = l(132500),
    n = l(115171),
    r = l(144705),
    h = l(696016),
    u = l(268378),
    o = l(375708);
function p(t) {
    return !0 === t ? void 0 : t;
}
function d(t, e) {
    return ("DOTA_GAMERULES_STATE_GAME_IN_PROGRESS" === t || "DOTA_GAMERULES_STATE_PRE_GAME" === t) && !1 !== e;
}
function m(t, e, l) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = {
            type: h.Gy.GAME_EVENT,
            eventType: e,
            eventName: t,
            score: 0,
            importance: 0,
            hiddenFromTimeline: i,
            additionalData: l,
        };
    return {
        ...a,
        title: (function (t) {
            switch (t.eventName) {
                case r.I.Kill:
                    return o.intl.string(u.default.gQErX1);
                case r.I.MultiKill:
                    return o.intl.string(u.default.Y7CAoY);
                case r.I.Assist:
                    return o.intl.string(u.default.CuzcRY);
                case r.I.Death:
                    return o.intl.string(u.default.NEFeB0);
                case r.I.RoshanKill:
                    return o.intl.string(u.default.bzNi8X);
                case r.I.GameEnd:
                    return o.intl.string(t.additionalData.win ? u.default.fyRdwo : u.default.TcGz5R);
                case r.I.InMatchChange:
                case r.I.PlayStateChange:
                    return;
            }
        })(a),
    };
}
class c {
    multiKillChain = [];
    lastKillMs = null;
    wasInMatch = !0;
    handledRoshanKillTimes = new Set();
    score(t) {
        return t.map((t) => (0, n.d)(t));
    }
    processPayload(t, e) {
        let l = [],
            i = null != t.map;
        (i !== this.wasInMatch &&
            ((this.wasInMatch = i),
            l.push(m(r.I.InMatchChange, h.rb.UNCLASSIFIED, { id: (0, s.A)(), inMatch: i }, !0))),
            null == t.map &&
                ((this.handledRoshanKillTimes = new Set()), (this.multiKillChain = []), (this.lastKillMs = null)));
        let a = p(t.previously?.player),
            n = p(t.previously?.map),
            u = p(t.previously?.hero),
            o = a?.kills,
            c = t.player?.kills;
        if ("number" == typeof o && "number" == typeof c && c > o)
            for (let t = 0; t < c - o; t++) {
                let t = (0, s.A)();
                (l.push(m(r.I.Kill, h.rb.KILL, { id: t })),
                    null != this.lastKillMs && e - this.lastKillMs <= 18e3
                        ? this.multiKillChain.push(t)
                        : (this.multiKillChain = [t]),
                    (this.lastKillMs = e),
                    this.multiKillChain.length >= 2 &&
                        l.push(
                            m(r.I.MultiKill, h.rb.MULTIKILL, { id: (0, s.A)(), killIds: [...this.multiKillChain] }),
                        ));
            }
        let I = a?.assists,
            f = t.player?.assists;
        if ("number" == typeof I && "number" == typeof f && f > I)
            for (let t = 0; t < f - I; t++) l.push(m(r.I.Assist, h.rb.ASSIST, { id: (0, s.A)() }));
        let _ = a?.deaths,
            A = t.player?.deaths;
        if ("number" == typeof _ && "number" == typeof A && A > _) {
            for (let t = 0; t < A - _; t++) l.push(m(r.I.Death, h.rb.DEATH, { id: (0, s.A)() }));
            ((this.multiKillChain = []), (this.lastKillMs = null));
        }
        for (let e of t.events ?? [])
            "roshan_killed" === e.event_type &&
                e.killer_player_id === t.player?.player_slot &&
                (null == e.game_time ||
                    this.handledRoshanKillTimes.has(e.game_time) ||
                    (this.handledRoshanKillTimes.add(e.game_time),
                    l.push(m(r.I.RoshanKill, h.rb.OBJECTIVE_KILL, { id: (0, s.A)() }))));
        let E = t.map?.game_state,
            S = n?.game_state ?? E;
        if ("DOTA_GAMERULES_STATE_POST_GAME" === E && "DOTA_GAMERULES_STATE_POST_GAME" !== S) {
            let e = t.map?.win_team != null && t.map.win_team === t.player?.team_name;
            l.push(m(r.I.GameEnd, h.rb.UNCLASSIFIED, { id: (0, s.A)(), win: e }));
        }
        let y = t.hero?.alive,
            K = u?.alive ?? y,
            T = d(E, y);
        return (
            T !== d(S, K) && l.push(m(r.I.PlayStateChange, h.rb.UNCLASSIFIED, { id: (0, s.A)(), playing: T }, !0)),
            this.score(l)
        );
    }
}
function I(t) {
    let e = !1,
        l = new c();
    function s(e) {
        let i = (0, a.l)();
        for (let a of l.processPayload(e, i))
            (h.nx.info(`[Dota2] emit event: ${a.eventName} score=${a.score} importance=${a.importance}`), t(a, i));
    }
    return {
        start() {
            e || ((e = !0), (l = new c()), h.nx.info("[Dota2] starting GSI listener"), (0, i.$D)(s));
        },
        stop() {
            e && ((e = !1), h.nx.info("[Dota2] stopping GSI listener"), (0, i.US)());
        },
        getState: () => null,
    };
}
