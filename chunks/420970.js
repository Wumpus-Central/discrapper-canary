n.d(t, { Z: () => l }), n(539854), n(388685), n(642613), n(415506);
var r = n(836560),
    i = n(259443),
    a = n(643191);
function o(e, t, n) {
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
let s = new i.Yd('Flux');
class l extends r.EventEmitter {
    log(e, t) {
        let n = new u(e),
            r = (t, r) => {
                let i,
                    o = {
                        name: t,
                        time: -1
                    },
                    s = a.Sv.now();
                try {
                    i = r();
                } finally {
                    (o.time = a.Sv.now() - s), this.persist && n.traces.push(o), this.emit('trace', e.type, t, o.time);
                }
                return i;
            };
        n.startTime = a.Sv.now();
        try {
            t(r);
        } catch (e) {
            throw ((n.error = e), e);
        } finally {
            (n.totalTime = a.Sv.now() - n.startTime), this.persist && n.totalTime > 0 && this.logs.push(n), this.logs.length > 1000 && this.logs.shift(), this.emit('log', e);
        }
        return n;
    }
    getSlowestActions(e) {
        var t;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
            i = [];
        for (let t of this.logs) if (null == e || t.name === e) for (let e of t.traces) i.push([e.name, t.name, e.time]);
        i.sort((e, t) => t[2] - e[2]), i.length > r && (i.length = r);
        let a = 0,
            o = 0,
            l = i
                .map((t) => {
                    let [n, r, i] = t,
                        o = ''.concat(n);
                    return null == e && (o += '<'.concat(r, '>')), (a = Math.max(o.length, a)), [o, i];
                })
                .map((e) => {
                    let [t, n] = e;
                    return (o += n), ''.concat(t.padEnd(a + 1, ' '), ' - ').concat(n, 'ms');
                })
                .join('\n');
        return 0 === i.length || i[0][2] < 10 || o < 20 || (s.log('Using Hermes:', void 0 !== (null == (t = n.g) ? void 0 : t.HermesInternal)), s.log(''.concat(null != e ? '\n\n=== '.concat(e, ' ===') : '', '\n').concat(l, '\n')), s.log('Total Time: '.concat(o, 'ms'))), i;
    }
    getLastActionMetrics(e) {
        var t;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
            i = {};
        for (let e of this.logs) for (let t of e.traces) i[t.name] = [t.name, e.name, t.time];
        let a = Object.values(i);
        a.sort((e, t) => t[2] - e[2]), a.length > r && (a.length = r);
        let o = 0,
            l = 0,
            c = a
                .map((e) => {
                    let [t, n, r] = e;
                    return (o = Math.max(t.length, o)), [t, r];
                })
                .map((e) => {
                    let [t, n] = e;
                    return (l += n), ''.concat(t.padEnd(o + 1, ' '), ' - ').concat(n, 'ms');
                })
                .join('\n');
        return 0 === a.length || l < 8 || s.log('\nUsing Hermes: '.concat(void 0 !== (null == (t = n.g) ? void 0 : t.HermesInternal)), '\n\n=== '.concat(e, ' ===\n').concat(c), '\nTotal Time: '.concat(l, 'ms\n\n')), a;
    }
    constructor({ persist: e = !1 } = {}) {
        super(), o(this, 'logs', []), o(this, 'persist', void 0), (this.persist = e);
    }
}
let c = 0;
class u {
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
        o(this, 'id', void 0), o(this, 'action', void 0), o(this, 'createdAt', void 0), o(this, 'startTime', 0), o(this, 'totalTime', 0), o(this, 'traces', []), o(this, 'error', void 0), (this.id = c++), (this.action = e), (this.createdAt = new Date());
    }
}
