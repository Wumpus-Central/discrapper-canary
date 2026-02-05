"use strict";
n.d(t, { T: () => o }), n(321073);
var r = n(143236),
    i = n(118356),
    a = n(547830);
let s = new i.Vy("Flux");
class o extends r.EventEmitter {
    logs = [];
    persist;
    constructor({ persist: e = !1 } = {}) {
        super(), (this.persist = e);
    }
    log(e, t) {
        let n = new u(e),
            r = (t, r) => {
                let i,
                    s = { name: t, time: -1 },
                    o = a.FO.now();
                try {
                    i = r();
                } finally {
                    (s.time = a.FO.now() - o), this.persist && n.traces.push(s), this.emit("trace", e.type, t, s.time);
                }
                return i;
            };
        n.startTime = a.FO.now();
        try {
            t(r);
        } catch (e) {
            throw ((n.error = e), e);
        } finally {
            (n.totalTime = a.FO.now() - n.startTime),
                this.persist && n.totalTime > 0 && this.logs.push(n),
                this.logs.length > 1e3 && this.logs.shift(),
                this.emit("log", e);
        }
        return n;
    }
    getSlowestActions(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
            r = [];
        for (let t of this.logs)
            if (null == e || t.name === e) for (let e of t.traces) r.push([e.name, t.name, e.time]);
        r.sort((e, t) => t[2] - e[2]), r.length > t && (r.length = t);
        let i = 0,
            a = 0,
            o = r
                .map((t) => {
                    let [n, r, a] = t,
                        s = `${n}`;
                    return null == e && (s += `<${r}>`), (i = Math.max(s.length, i)), [s, a];
                })
                .map((e) => {
                    let [t, n] = e;
                    return (a += n), `${t.padEnd(i + 1, " ")} - ${n}ms`;
                })
                .join("\n");
        return (
            0 === r.length ||
                r[0][2] < 10 ||
                a < 20 ||
                (s.log("Using Hermes:", void 0 !== n.g?.HermesInternal),
                s.log(`${
                    null != e
                        ? `

=== ${e} ===`
                        : ""
                }
${o}
`),
                s.log(`Total Time: ${a}ms`)),
            r
        );
    }
    getLastActionMetrics(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
            r = {};
        for (let e of this.logs) for (let t of e.traces) r[t.name] = [t.name, e.name, t.time];
        let i = Object.values(r);
        i.sort((e, t) => t[2] - e[2]), i.length > t && (i.length = t);
        let a = 0,
            o = 0,
            l = i
                .map((e) => {
                    let [t, n, r] = e;
                    return (a = Math.max(t.length, a)), [t, r];
                })
                .map((e) => {
                    let [t, n] = e;
                    return (o += n), `${t.padEnd(a + 1, " ")} - ${n}ms`;
                })
                .join("\n");
        return (
            0 === i.length ||
                o < 8 ||
                s.log(
                    `
Using Hermes: ${void 0 !== n.g?.HermesInternal}`,
                    `

=== ${e} ===
${l}`,
                    `
Total Time: ${o}ms

`,
                ),
            i
        );
    }
}
let l = 0;
class u {
    id;
    action;
    createdAt;
    startTime = 0;
    totalTime = 0;
    traces = [];
    error;
    constructor(e) {
        (this.id = l++), (this.action = e), (this.createdAt = new Date());
    }
    get name() {
        return this.action.type;
    }
    toJSON() {
        if (null == this.createdAt)
            throw Error("ActionLog.toJSON: You must complete your logging before calling toJSON");
        return {
            actionType: this.action.type,
            created_at: this.createdAt,
            totalTime: this.totalTime,
            traces: this.traces,
        };
    }
}
