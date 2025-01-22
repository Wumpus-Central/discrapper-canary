r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(653041);
var a = r(47120);
var o = r(411104);
var s = r(836560);
var l = r(259443),
    u = r(643191);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let d = new l.Yd('Flux');
class f extends s.EventEmitter {
    log(e, n) {
        let r = new h(e),
            i = (n, i) => {
                let a;
                let o = {
                        name: n,
                        time: -1
                    },
                    s = u.Sv.now();
                try {
                    a = i();
                } finally {
                    (o.time = u.Sv.now() - s), this.persist && r.traces.push(o), this.emit('trace', e.type, n, o.time);
                }
                return a;
            };
        r.startTime = u.Sv.now();
        try {
            n(i);
        } catch (e) {
            throw ((r.error = e), e);
        } finally {
            (r.totalTime = u.Sv.now() - r.startTime), this.persist && r.totalTime > 0 && this.logs.push(r), this.logs.length > 1000 && this.logs.shift(), this.emit('log', e);
        }
        return r;
    }
    getSlowestActions(e) {
        var n;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
            a = [];
        for (let n of this.logs) {
            if (null == e || n.name === e) for (let e of n.traces) a.push([e.name, n.name, e.time]);
        }
        a.sort((e, n) => n[2] - e[2]), a.length > i && (a.length = i);
        let o = 0,
            s = 0,
            l = a
                .map((n) => {
                    let [r, i, a] = n,
                        s = ''.concat(r);
                    return null == e && (s += '<'.concat(i, '>')), (o = Math.max(s.length, o)), [s, a];
                })
                .map((e) => {
                    let [n, r] = e;
                    return (s += r), ''.concat(n.padEnd(o + 1, ' '), ' - ').concat(r, 'ms');
                })
                .join('\n');
        return 0 === a.length || a[0][2] < 10 || s < 20 ? a : (d.log('Using Hermes:', void 0 !== (null === (n = r.g) || void 0 === n ? void 0 : n.HermesInternal)), d.log(''.concat(null != e ? '\n\n=== '.concat(e, ' ===') : '', '\n').concat(l, '\n')), d.log('Total Time: '.concat(s, 'ms')), a);
    }
    getLastActionMetrics(e) {
        var n;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
            a = {};
        for (let e of this.logs) for (let n of e.traces) a[n.name] = [n.name, e.name, n.time];
        let o = Object.values(a);
        o.sort((e, n) => n[2] - e[2]), o.length > i && (o.length = i);
        let s = 0,
            l = 0,
            u = o
                .map((e) => {
                    let [n, r, i] = e;
                    return (s = Math.max(n.length, s)), [n, i];
                })
                .map((e) => {
                    let [n, r] = e;
                    return (l += r), ''.concat(n.padEnd(s + 1, ' '), ' - ').concat(r, 'ms');
                })
                .join('\n');
        return 0 === o.length || l < 8 ? o : (d.log('\nUsing Hermes: '.concat(void 0 !== (null === (n = r.g) || void 0 === n ? void 0 : n.HermesInternal)), '\n\n=== '.concat(e, ' ===\n').concat(u), '\nTotal Time: '.concat(l, 'ms\n\n')), o);
    }
    constructor({ persist: e = !1 } = {}) {
        super(), c(this, 'logs', []), c(this, 'persist', void 0), (this.persist = e);
    }
}
let p = 0;
class h {
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
        c(this, 'id', void 0), c(this, 'action', void 0), c(this, 'createdAt', void 0), c(this, 'startTime', 0), c(this, 'totalTime', 0), c(this, 'traces', []), c(this, 'error', void 0), (this.id = p++), (this.action = e), (this.createdAt = new Date());
    }
}
