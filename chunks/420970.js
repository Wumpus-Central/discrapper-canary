n.d(t, { Z: () => l }), n(653041), n(47120), n(230036), n(411104);
var r = n(836560),
    i = n(259443),
    o = n(643191);
function a(e, t, n) {
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
                    a = {
                        name: t,
                        time: -1
                    },
                    s = o.Sv.now();
                try {
                    i = r();
                } finally {
                    (a.time = o.Sv.now() - s), this.persist && n.traces.push(a), this.emit('trace', e.type, t, a.time);
                }
                return i;
            };
        n.startTime = o.Sv.now();
        try {
            t(r);
        } catch (e) {
            throw ((n.error = e), e);
        } finally {
            (n.totalTime = o.Sv.now() - n.startTime), this.persist && n.totalTime > 0 && this.logs.push(n), this.logs.length > 1000 && this.logs.shift(), this.emit('log', e);
        }
        return n;
    }
    getSlowestActions(e) {
        var t;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
            i = [];
        for (let t of this.logs) if (null == e || t.name === e) for (let e of t.traces) i.push([e.name, t.name, e.time]);
        i.sort((e, t) => t[2] - e[2]), i.length > r && (i.length = r);
        let o = 0,
            a = 0,
            l = i
                .map((t) => {
                    let [n, r, i] = t,
                        a = ''.concat(n);
                    return null == e && (a += '<'.concat(r, '>')), (o = Math.max(a.length, o)), [a, i];
                })
                .map((e) => {
                    let [t, n] = e;
                    return (a += n), ''.concat(t.padEnd(o + 1, ' '), ' - ').concat(n, 'ms');
                })
                .join('\n');
        return 0 === i.length || i[0][2] < 10 || a < 20 || (s.log('Using Hermes:', void 0 !== (null == (t = n.g) ? void 0 : t.HermesInternal)), s.log(''.concat(null != e ? '\n\n=== '.concat(e, ' ===') : '', '\n').concat(l, '\n')), s.log('Total Time: '.concat(a, 'ms'))), i;
    }
    getLastActionMetrics(e) {
        var t;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
            i = {};
        for (let e of this.logs) for (let t of e.traces) i[t.name] = [t.name, e.name, t.time];
        let o = Object.values(i);
        o.sort((e, t) => t[2] - e[2]), o.length > r && (o.length = r);
        let a = 0,
            l = 0,
            c = o
                .map((e) => {
                    let [t, n, r] = e;
                    return (a = Math.max(t.length, a)), [t, r];
                })
                .map((e) => {
                    let [t, n] = e;
                    return (l += n), ''.concat(t.padEnd(a + 1, ' '), ' - ').concat(n, 'ms');
                })
                .join('\n');
        return 0 === o.length || l < 8 || s.log('\nUsing Hermes: '.concat(void 0 !== (null == (t = n.g) ? void 0 : t.HermesInternal)), '\n\n=== '.concat(e, ' ===\n').concat(c), '\nTotal Time: '.concat(l, 'ms\n\n')), o;
    }
    constructor({ persist: e = !1 } = {}) {
        super(), a(this, 'logs', []), a(this, 'persist', void 0), (this.persist = e);
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
        a(this, 'id', void 0), a(this, 'action', void 0), a(this, 'createdAt', void 0), a(this, 'startTime', 0), a(this, 'totalTime', 0), a(this, 'traces', []), a(this, 'error', void 0), (this.id = c++), (this.action = e), (this.createdAt = new Date());
    }
}
