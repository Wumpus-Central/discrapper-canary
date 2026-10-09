(n.d(t, { Ay: () => u, Jo: () => l, PW: () => r, VD: () => s, zp: () => a }), n(321073));
let i = ["LEFT", "RIGHT"];
function r(e) {
    return "LEFT" === e ? "RIGHT" : "LEFT";
}
let a = "teamFightScore";
function s(e, t) {
    return Math.max(0, e * t.scorePerPoint);
}
function l(e, t, n, i) {
    let s,
        l,
        o,
        d = e.deathsByTeam[r(t)],
        c = e.deathsByTeam[t],
        u =
            ((s = r(t)),
            (l = e.participantsByTeam[t].size),
            (o = e.participantsByTeam[s].size),
            e.deathsByTeam[s] - e.deathsByTeam[t] + (o - l) * 0.5),
        _ = d >= c && u >= 0,
        E = _ ? u + 0.25 : u;
    return {
        allyKills: d,
        enemyKills: c,
        winning: _,
        fightScore: E,
        clipWindow: null != n && null != i ? { startMs: n - 5e3, endMs: i + 3e3 } : void 0,
        additionalData: {
            [a]: E,
            ...(null != n ? { teamFightStartMs: n } : {}),
            ...(null != i ? { teamFightEndMs: i } : {}),
        },
    };
}
function o(e) {
    return { LEFT: e("LEFT"), RIGHT: e("RIGHT") };
}
function d(e, t) {
    return e.startTimeS - t.startTimeS;
}
class c {
    config;
    startTimeS;
    lastKillTimeS;
    participants = new Set();
    participantsByTeam = o(() => new Set());
    deadParticipants = new Set();
    deathsByTeam = o(() => 0);
    kills = 0;
    constructor(e, t) {
        ((this.config = e), (this.startTimeS = t), (this.lastKillTimeS = t));
    }
    isExpiredAt(e) {
        return e - this.lastKillTimeS > this.config.joinWindowS;
    }
    exceedsMaxDurationAt(e) {
        return e - this.startTimeS > this.config.maxDurationS;
    }
    sharesParticipantsWith(e) {
        for (let t of e.keys()) if (this.participants.has(t) && !this.deadParticipants.has(t)) return !0;
        return !1;
    }
    recordKill(e, t, n) {
        for (let [e, n] of t)
            this.deadParticipants.has(e) || (this.participants.add(e), this.participantsByTeam[n].add(e));
        (this.deadParticipants.add(e.victimName),
            (this.deathsByTeam[n] += 1),
            (this.kills += 1),
            (this.lastKillTimeS = e.eventTimeS));
    }
    mergeWith(e) {
        for (let t of e.participants) this.participants.add(t);
        for (let t of i) {
            for (let n of e.participantsByTeam[t]) this.participantsByTeam[t].add(n);
            this.deathsByTeam[t] += e.deathsByTeam[t];
        }
        for (let t of e.deadParticipants) this.deadParticipants.add(t);
        ((this.kills += e.kills),
            (this.startTimeS = Math.min(this.startTimeS, e.startTimeS)),
            (this.lastKillTimeS = Math.max(this.lastKillTimeS, e.lastKillTimeS)));
    }
    finalize(e) {
        let t =
            this.kills >= this.config.minKills &&
            this.participants.size >= this.config.minParticipants &&
            i.every((e) => this.participantsByTeam[e].size >= this.config.minParticipantsPerTeam);
        return {
            startTimeS: this.startTimeS,
            lastKillTimeS: this.lastKillTimeS,
            endTimeS: this.lastKillTimeS + 1,
            kills: this.kills,
            deathsByTeam: { ...this.deathsByTeam },
            participants: new Set(this.participants),
            participantsByTeam: o((e) => new Set(this.participantsByTeam[e])),
            qualified: t,
            endedBy: e,
        };
    }
}
class u {
    config;
    activeFights = [];
    constructor(e) {
        this.config = e;
    }
    onKill(e, t) {
        let n = (function (e, t) {
                let n = new Map(),
                    i = t.get(e.killerName);
                null != i && n.set(e.killerName, i);
                let r = t.get(e.victimName);
                for (let i of (null != r && n.set(e.victimName, r), e.assisters)) {
                    let e = t.get(i);
                    null != e && n.set(i, e);
                }
                return n;
            })(e, t),
            i = n.get(e.victimName);
        null == i || this.claimFightForKill(e.eventTimeS, n).recordKill(e, n, i);
    }
    onAce(e) {
        return this.closeAll("ace");
    }
    onTick(e) {
        let t = [],
            n = [];
        for (let i of this.activeFights)
            i.isExpiredAt(e)
                ? t.push(i.finalize("timeout"))
                : i.exceedsMaxDurationAt(e)
                  ? t.push(i.finalize("max_duration"))
                  : n.push(i);
        return ((this.activeFights = n), t.sort(d));
    }
    onGameEnd() {
        return this.closeAll("game_end");
    }
    reset() {
        this.activeFights = [];
    }
    closeAll(e) {
        if (0 === this.activeFights.length) return [];
        let t = this.activeFights.map((t) => t.finalize(e));
        return ((this.activeFights = []), t.sort(d));
    }
    claimFightForKill(e, t) {
        let n = null,
            i = new Set();
        for (let r of this.activeFights)
            !(r.isExpiredAt(e) || r.exceedsMaxDurationAt(e)) &&
                r.sharesParticipantsWith(t) &&
                (null == n ? (n = r) : (n.mergeWith(r), i.add(r)));
        return (
            null == n
                ? ((n = new c(this.config, e)), this.activeFights.push(n))
                : i.size > 0 && (this.activeFights = this.activeFights.filter((e) => !i.has(e))),
            n
        );
    }
}
