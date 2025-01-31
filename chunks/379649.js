n.d(t, {
    A3: () => p,
    CI: () => g,
    G9: () => c,
    J6: () => _,
    Z_: () => l,
    _v: () => f,
    jU: () => m,
    zO: () => o
}),
    n(411104),
    n(149182);
var i = n(627698),
    r = n.n(i),
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
let o = () => Math.floor(a.v0 + a.Sv.now()),
    l = new (class {
        now() {
            return o();
        }
    })();
class u {
    isGreaterThan(e) {
        return this.milliseconds > e.milliseconds;
    }
    isGreaterOrEqualTo(e) {
        return this.milliseconds >= e.milliseconds;
    }
    constructor(e, t, n, i) {
        s(this, 'milliseconds', 0), s(this, 'asMilliseconds', () => this.milliseconds), s(this, 'asSeconds', () => this.milliseconds / 1000), s(this, 'asMinutes', () => this.milliseconds / 1000 / 60), s(this, 'asHours', () => this.milliseconds / 1000 / 60 / 60), s(this, 'add', (e) => u.fromMilliseconds(this.milliseconds + e.milliseconds)), s(this, 'subtract', (e) => u.fromMilliseconds(this.milliseconds - e.milliseconds)), s(this, 'subtractOrZero', (e) => u.fromMilliseconds(Math.max(this.milliseconds - e.milliseconds, 0))), (this.milliseconds += i || 0), (this.milliseconds += 1000 * (n || 0)), (this.milliseconds += 60000 * (t || 0)), (this.milliseconds += 3600000 * (e || 0));
    }
}
s(u, 'fromMilliseconds', (e) => new u(0, 0, 0, e)), s(u, 'fromSeconds', (e) => new u(0, 0, e)), s(u, 'fromMinutes', (e) => new u(0, e)), s(u, 'fromHours', (e) => new u(e));
class c {
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
        if (null == this.startTime) return u.fromMilliseconds(this.timePassed);
        let e = this.timestampProducer.now() - this.startTime;
        return u.fromMilliseconds(this.timePassed + e);
    }
    isRunning() {
        return null != this.startTime;
    }
    static startNew() {
        let e = new c();
        return e.start(), e;
    }
    constructor(e = l) {
        s(this, 'timestampProducer', void 0), s(this, 'startTime', void 0), s(this, 'timePassed', void 0), (this.timestampProducer = e), (this.startTime = void 0), (this.timePassed = 0);
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
        let n;
        let i = u.fromMilliseconds(100);
        e instanceof u ? (n = e) : ((n = e.timeout), null != e.sleep && (i = e.sleep));
        let r = d.startNew(n);
        do {
            if ((await t()) === !0) return !0;
            await f(i);
        } while (!r.hasTimedOut());
        return !1;
    }
    constructor(e) {
        s(this, 'timeout', void 0), s(this, 'watch', void 0), (this.timeout = e), (this.watch = new c());
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
            let { max: n, unit: i } = t;
            return ('NONE' === i && e === n) || e < n;
        }),
        i = r()(
            h,
            (e) => {
                let { unit: n } = e;
                return t(n);
            },
            n
        );
    if (null != i) return i.unit;
    let a = h.find((e) => {
        let { unit: n } = e;
        return t(n);
    });
    return null != a ? a.unit : null;
}
function g(e, t) {
    if (null == e)
        return {
            unit: 'NONE',
            time: 0
        };
    let n = m(e, (e) => t.includes(e)),
        i = null != n ? p(e, n) : null;
    return {
        unit: n,
        time: null != i ? Math.floor(i) : null
    };
}
