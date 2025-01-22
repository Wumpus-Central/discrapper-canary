r.d(n, {
    A3: function () {
        return g;
    },
    CI: function () {
        return y;
    },
    G9: function () {
        return h;
    },
    J6: function () {
        return i;
    },
    Z_: function () {
        return f;
    },
    _v: function () {
        return m;
    },
    jU: function () {
        return v;
    },
    zO: function () {
        return d;
    }
});
var i,
    a = r(411104);
var o = r(149182);
var s = r(627698),
    l = r.n(s),
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
let d = () => Math.floor(u.v0 + u.Sv.now()),
    f = new (class {
        now() {
            return d();
        }
    })();
class p {
    isGreaterThan(e) {
        return this.milliseconds > e.milliseconds;
    }
    isGreaterOrEqualTo(e) {
        return this.milliseconds >= e.milliseconds;
    }
    constructor(e, n, r, i) {
        c(this, 'milliseconds', 0), c(this, 'asMilliseconds', () => this.milliseconds), c(this, 'asSeconds', () => this.milliseconds / 1000), c(this, 'asMinutes', () => this.milliseconds / 1000 / 60), c(this, 'asHours', () => this.milliseconds / 1000 / 60 / 60), c(this, 'add', (e) => p.fromMilliseconds(this.milliseconds + e.milliseconds)), c(this, 'subtract', (e) => p.fromMilliseconds(this.milliseconds - e.milliseconds)), c(this, 'subtractOrZero', (e) => p.fromMilliseconds(Math.max(this.milliseconds - e.milliseconds, 0))), (this.milliseconds += i || 0), (this.milliseconds += 1000 * (r || 0)), (this.milliseconds += 60000 * (n || 0)), (this.milliseconds += 3600000 * (e || 0));
    }
}
c(p, 'fromMilliseconds', (e) => new p(0, 0, 0, e)), c(p, 'fromSeconds', (e) => new p(0, 0, e)), c(p, 'fromMinutes', (e) => new p(0, e)), c(p, 'fromHours', (e) => new p(e));
class h {
    start() {
        if (null == this.startTime) this.startTime = this.timestampProducer.now();
    }
    restart() {
        this.startTime = this.timestampProducer.now();
    }
    reset() {
        (this.startTime = void 0), (this.timePassed = 0);
    }
    stop() {
        if (null != this.startTime) (this.timePassed += this.timestampProducer.now() - this.startTime), (this.startTime = void 0);
    }
    toggle(e) {
        e !== this.isRunning() && (e ? this.start() : this.stop());
    }
    elapsed() {
        if (null == this.startTime) return p.fromMilliseconds(this.timePassed);
        let e = this.timestampProducer.now() - this.startTime;
        return p.fromMilliseconds(this.timePassed + e);
    }
    isRunning() {
        return null != this.startTime;
    }
    static startNew() {
        let e = new h();
        return e.start(), e;
    }
    constructor(e = f) {
        c(this, 'timestampProducer', void 0), c(this, 'startTime', void 0), c(this, 'timePassed', void 0), (this.timestampProducer = e), (this.startTime = void 0), (this.timePassed = 0);
    }
}
class _ {
    hasTimedOut() {
        if (!this.watch.isRunning()) throw Error('`start` must be called before `hasTimedOut`');
        return this.watch.elapsed().isGreaterOrEqualTo(this.timeout);
    }
    start() {
        this.watch.start();
    }
    static startNew(e) {
        let n = new _(e);
        return n.start(), n;
    }
    static async waitFor(e, n) {
        let r;
        let i = p.fromMilliseconds(100);
        e instanceof p ? (r = e) : ((r = e.timeout), null != e.sleep && (i = e.sleep));
        let a = _.startNew(r);
        do {
            if ((await n()) === !0) return !0;
            await m(i);
        } while (!a.hasTimedOut());
        return !1;
    }
    constructor(e) {
        c(this, 'timeout', void 0), c(this, 'watch', void 0), (this.timeout = e), (this.watch = new h());
    }
}
function m(e) {
    let n = 'number' == typeof e ? e : e.asMilliseconds();
    return new Promise((e) => {
        setTimeout(() => e(), n);
    });
}
function g(e, n) {
    switch (n) {
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
!(function (e) {
    (e.NONE = 'NONE'), (e.SECONDS = 'SECONDS'), (e.MINUTES = 'MINUTES'), (e.HOURS = 'HOURS'), (e.DAYS = 'DAYS'), (e.WEEKS = 'WEEKS'), (e.MONTHS = 'MONTHS'), (e.YEARS = 'YEARS');
})(i || (i = {}));
let E = [
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
function v(e, n) {
    let r = E.findIndex((n) => {
            let { max: r, unit: i } = n;
            return ('NONE' === i && e === r) || e < r;
        }),
        i = l()(
            E,
            (e) => {
                let { unit: r } = e;
                return n(r);
            },
            r
        );
    if (null != i) return i.unit;
    let a = E.find((e) => {
        let { unit: r } = e;
        return n(r);
    });
    return null != a ? a.unit : null;
}
function y(e, n) {
    if (null == e)
        return {
            unit: 'NONE',
            time: 0
        };
    let r = v(e, (e) => n.includes(e)),
        i = null != r ? g(e, r) : null;
    return {
        unit: r,
        time: null != i ? Math.floor(i) : null
    };
}
