n.d(t, { Z: () => l }), n(653041), n(47120), n(411104);
var i = n(836560),
    r = n(259443),
    a = n(643191);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let o = new r.Yd('Flux');
class l extends i.EventEmitter {
    log(e, t) {
        let n = new c(e),
            i = (t, i) => {
                let r;
                let s = {
                        name: t,
                        time: -1
                    },
                    o = a.Sv.now();
                try {
                    r = i();
                } finally {
                    (s.time = a.Sv.now() - o), this.persist && n.traces.push(s), this.emit('trace', e.type, t, s.time);
                }
                return r;
            };
        n.startTime = a.Sv.now();
        try {
            t(i);
        } catch (e) {
            throw ((n.error = e), e);
        } finally {
            (n.totalTime = a.Sv.now() - n.startTime), this.persist && n.totalTime > 0 && this.logs.push(n), this.logs.length > 1000 && this.logs.shift(), this.emit('log', e);
        }
        return n;
    }
    getSlowestActions(e) {
        var t;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
            r = [];
        for (let t of this.logs) if (null == e || t.name === e) for (let e of t.traces) r.push([e.name, t.name, e.time]);
        r.sort((e, t) => t[2] - e[2]), r.length > i && (r.length = i);
        let a = 0,
            s = 0,
            l = r
                .map((t) => {
                    let [n, i, r] = t,
                        s = ''.concat(n);
                    return null == e && (s += '<'.concat(i, '>')), (a = Math.max(s.length, a)), [s, r];
                })
                .map((e) => {
                    let [t, n] = e;
                    return (s += n), ''.concat(t.padEnd(a + 1, ' '), ' - ').concat(n, 'ms');
                })
                .join('\n');
        return 0 === r.length || r[0][2] < 10 || s < 20 || (o.log('Using Hermes:', void 0 !== (null === (t = n.g) || void 0 === t ? void 0 : t.HermesInternal)), o.log(''.concat(null != e ? '\n\n=== '.concat(e, ' ===') : '', '\n').concat(l, '\n')), o.log('Total Time: '.concat(s, 'ms'))), r;
    }
    getLastActionMetrics(e) {
        var t;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
            r = {};
        for (let e of this.logs) for (let t of e.traces) r[t.name] = [t.name, e.name, t.time];
        let a = Object.values(r);
        a.sort((e, t) => t[2] - e[2]), a.length > i && (a.length = i);
        let s = 0,
            l = 0,
            u = a
                .map((e) => {
                    let [t, n, i] = e;
                    return (s = Math.max(t.length, s)), [t, i];
                })
                .map((e) => {
                    let [t, n] = e;
                    return (l += n), ''.concat(t.padEnd(s + 1, ' '), ' - ').concat(n, 'ms');
                })
                .join('\n');
        return 0 === a.length || l < 8 || o.log('\nUsing Hermes: '.concat(void 0 !== (null === (t = n.g) || void 0 === t ? void 0 : t.HermesInternal)), '\n\n=== '.concat(e, ' ===\n').concat(u), '\nTotal Time: '.concat(l, 'ms\n\n')), a;
    }
    constructor({ persist: e = !1 } = {}) {
        super(), s(this, 'logs', []), s(this, 'persist', void 0), (this.persist = e);
    }
}
let u = 0;
class c {
    get name() {
        return this.action.type;
    }
    toJSON() {
        if (null == this.createdAt) throw Error('ActionLog.toJSON: You must complete your logging before calling toJSON');
        return {
            actionType: this.action.type,
            created_at: this.createdAt,
            totalTime: this.totalTime,
            traces: this.traces
        };
    }
    constructor(e) {
        s(this, 'id', void 0), s(this, 'action', void 0), s(this, 'createdAt', void 0), s(this, 'startTime', 0), s(this, 'totalTime', 0), s(this, 'traces', []), s(this, 'error', void 0), (this.id = u++), (this.action = e), (this.createdAt = new Date());
    }
}
