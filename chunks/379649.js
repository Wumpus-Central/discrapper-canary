n.d(t, {
    A3: () => p,
    CI: () => g,
    G9: () => u,
    J6: () => _,
    Z_: () => l,
    _v: () => f,
    jU: () => m,
    zO: () => s
}),
    n(411104),
    n(149182);
var r = n(627698),
    i = n.n(r),
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
let s = () => Math.floor(o.v0 + o.Sv.now()),
    l = new (class {
        now() {
            return s();
        }
    })();
class c {
    isGreaterThan(e) {
        return this.milliseconds > e.milliseconds;
    }
    isGreaterOrEqualTo(e) {
        return this.milliseconds >= e.milliseconds;
    }
    constructor(e, t, n, r) {
        a(this, 'milliseconds', 0), a(this, 'asMilliseconds', () => this.milliseconds), a(this, 'asSeconds', () => this.milliseconds / 1000), a(this, 'asMinutes', () => this.milliseconds / 1000 / 60), a(this, 'asHours', () => this.milliseconds / 1000 / 60 / 60), a(this, 'add', (e) => c.fromMilliseconds(this.milliseconds + e.milliseconds)), a(this, 'subtract', (e) => c.fromMilliseconds(this.milliseconds - e.milliseconds)), a(this, 'subtractOrZero', (e) => c.fromMilliseconds(Math.max(this.milliseconds - e.milliseconds, 0))), (this.milliseconds += r || 0), (this.milliseconds += 1000 * (n || 0)), (this.milliseconds += 1000 * (t || 0) * 60), (this.milliseconds += 1000 * (e || 0) * 3600);
    }
}
a(c, 'fromMilliseconds', (e) => new c(0, 0, 0, e)), a(c, 'fromSeconds', (e) => new c(0, 0, e)), a(c, 'fromMinutes', (e) => new c(0, e)), a(c, 'fromHours', (e) => new c(e));
class u {
    start() {
        null == this.startTime && (this.startTime = this.timestampProducer.now());
    }
    restart() {
        this.startTime = this.timestampProducer.now();
    }
    reset() {
        (this.startTime = void 0), (this.timePassed = 0);
    }
    stop() {
        null != this.startTime && ((this.timePassed += this.timestampProducer.now() - this.startTime), (this.startTime = void 0));
    }
    toggle(e) {
        e !== this.isRunning() && (e ? this.start() : this.stop());
    }
    elapsed() {
        if (null == this.startTime) return c.fromMilliseconds(this.timePassed);
        let e = this.timestampProducer.now() - this.startTime;
        return c.fromMilliseconds(this.timePassed + e);
    }
    isRunning() {
        return null != this.startTime;
    }
    static startNew() {
        let e = new u();
        return e.start(), e;
    }
    constructor(e = l) {
        a(this, 'timestampProducer', void 0), a(this, 'startTime', void 0), a(this, 'timePassed', void 0), (this.timestampProducer = e), (this.startTime = void 0), (this.timePassed = 0);
    }
}
class d {
    hasTimedOut() {
        if (!this.watch.isRunning()) throw Error('`start` must be called before `hasTimedOut`');
        return this.watch.elapsed().isGreaterOrEqualTo(this.timeout);
    }
    start() {
        this.watch.start();
    }
    static startNew(e) {
        let t = new d(e);
        return t.start(), t;
    }
    static async waitFor(e, t) {
        let n,
            r = c.fromMilliseconds(100);
        e instanceof c ? (n = e) : ((n = e.timeout), null != e.sleep && (r = e.sleep));
        let i = d.startNew(n);
        do {
            if ((await t()) === !0) return !0;
            await f(r);
        } while (!i.hasTimedOut());
        return !1;
    }
    constructor(e) {
        a(this, 'timeout', void 0), a(this, 'watch', void 0), (this.timeout = e), (this.watch = new u());
    }
}
function f(e) {
    let t = 'number' == typeof e ? e : e.asMilliseconds();
    return new Promise((e) => {
        setTimeout(() => e(), t);
    });
}
var _ = (function (e) {
    return (e.NONE = 'NONE'), (e.SECONDS = 'SECONDS'), (e.MINUTES = 'MINUTES'), (e.HOURS = 'HOURS'), (e.DAYS = 'DAYS'), (e.WEEKS = 'WEEKS'), (e.MONTHS = 'MONTHS'), (e.YEARS = 'YEARS'), e;
})({});
function p(e, t) {
    switch (t) {
        case 'NONE':
            return 0;
        case 'SECONDS':
            return 60 * e;
        case 'MINUTES':
            return e;
        case 'HOURS':
            return e / 60;
        case 'DAYS':
            return e / 60 / 24;
        case 'WEEKS':
            return e / 60 / 24 / 7;
        case 'MONTHS':
            return e / 60 / 24 / 31;
        case 'YEARS':
            return e / 60 / 24 / 365;
    }
}
let h = [
    {
        unit: 'NONE',
        max: 0
    },
    {
        unit: 'SECONDS',
        max: 1
    },
    {
        unit: 'MINUTES',
        max: 60
    },
    {
        unit: 'HOURS',
        max: 1440
    },
    {
        unit: 'DAYS',
        max: 44640
    },
    {
        unit: 'WEEKS',
        max: 40320
    },
    {
        unit: 'MONTHS',
        max: 525600
    },
    {
        unit: 'YEARS',
        max: 1 / 0
    }
];
function m(e, t) {
    let n = h.findIndex((t) => {
            let { max: n, unit: r } = t;
            return ('NONE' === r && e === n) || e < n;
        }),
        r = i()(
            h,
            (e) => {
                let { unit: n } = e;
                return t(n);
            },
            n
        );
    if (null != r) return r.unit;
    let o = h.find((e) => {
        let { unit: n } = e;
        return t(n);
    });
    return null != o ? o.unit : null;
}
function g(e, t) {
    if (null == e)
        return {
            unit: 'NONE',
            time: 0
        };
    let n = m(e, (e) => t.includes(e)),
        r = null != n ? p(e, n) : null;
    return {
        unit: n,
        time: null != r ? Math.floor(r) : null
    };
}
