"use strict";
n.d(t, {
    $l: () => g,
    TF: () => l,
    Ul: () => m,
    W0: () => d,
    eZ: () => h,
    pJ: () => E,
    tB: () => o,
    w6: () => c,
    yy: () => f,
}),
    n(140667);
var r,
    i = n(682572),
    s = n.n(i),
    a = n(547830);
let o = () => Math.floor(a.u5 + a.FO.now()),
    l = new (class {
        now() {
            return o();
        }
    })();
class u {
    milliseconds = 0;
    constructor(e, t, n, r) {
        (this.milliseconds += r || 0),
            (this.milliseconds += 1e3 * (n || 0)),
            (this.milliseconds += 1e3 * (t || 0) * 60),
            (this.milliseconds += 1e3 * (e || 0) * 3600);
    }
    asMilliseconds = () => this.milliseconds;
    asSeconds = () => this.milliseconds / 1e3;
    asMinutes = () => this.milliseconds / 1e3 / 60;
    asHours = () => this.milliseconds / 1e3 / 60 / 60;
    isGreaterThan(e) {
        return this.milliseconds > e.milliseconds;
    }
    isGreaterOrEqualTo(e) {
        return this.milliseconds >= e.milliseconds;
    }
    add = (e) => u.fromMilliseconds(this.milliseconds + e.milliseconds);
    subtract = (e) => u.fromMilliseconds(this.milliseconds - e.milliseconds);
    subtractOrZero = (e) => u.fromMilliseconds(Math.max(this.milliseconds - e.milliseconds, 0));
    static fromMilliseconds = (e) => new u(0, 0, 0, e);
    static fromSeconds = (e) => new u(0, 0, e);
    static fromMinutes = (e) => new u(0, e);
    static fromHours = (e) => new u(e);
}
class d {
    timestampProducer;
    startTime = void 0;
    timePassed = 0;
    constructor(e = l) {
        this.timestampProducer = e;
    }
    get lastElapsed() {
        return this.timePassed;
    }
    get lastStartTime() {
        return this.startTime;
    }
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
        null != this.startTime &&
            ((this.timePassed += this.timestampProducer.now() - this.startTime), (this.startTime = void 0));
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
        let e = new d();
        return e.start(), e;
    }
}
class c {
    stopwatch;
    state;
    constructor(e, t = l) {
        (this.stopwatch = new d(t)), (this.state = e), this.stopwatch.toggle(e);
    }
    set value(e) {
        this.stopwatch.toggle(e), (this.state = e);
    }
    get value() {
        return this.state;
    }
    reset() {
        this.stopwatch.reset(), this.stopwatch.toggle(this.state);
    }
    totalDuration() {
        return this.stopwatch.elapsed().asMilliseconds();
    }
    totalDurationSeconds() {
        return this.stopwatch.elapsed().asSeconds();
    }
}
class _ {
    timeout;
    watch = new d();
    constructor(e) {
        this.timeout = e;
    }
    hasTimedOut() {
        if (!this.watch.isRunning()) throw Error("`start` must be called before `hasTimedOut`");
        return this.watch.elapsed().isGreaterOrEqualTo(this.timeout);
    }
    start() {
        this.watch.start();
    }
    static startNew(e) {
        let t = new _(e);
        return t.start(), t;
    }
    static async waitFor(e, t) {
        let n,
            r = u.fromMilliseconds(100);
        e instanceof u ? (n = e) : ((n = e.timeout), null != e.sleep && (r = e.sleep));
        let i = _.startNew(n);
        do {
            if ((await t()) === !0) return !0;
            await f(r);
        } while (!i.hasTimedOut());
        return !1;
    }
}
function f(e) {
    let t = "number" == typeof e ? e : e.asMilliseconds();
    return new Promise((e) => {
        setTimeout(() => e(), t);
    });
}
var E =
    (((r = {}).NONE = "NONE"),
    (r.SECONDS = "SECONDS"),
    (r.MINUTES = "MINUTES"),
    (r.HOURS = "HOURS"),
    (r.DAYS = "DAYS"),
    (r.WEEKS = "WEEKS"),
    (r.MONTHS = "MONTHS"),
    (r.YEARS = "YEARS"),
    r);
function h(e, t) {
    switch (t) {
        case "NONE":
            return 0;
        case "SECONDS":
            return 60 * e;
        case "MINUTES":
            return e;
        case "HOURS":
            return e / 60;
        case "DAYS":
            return e / 60 / 24;
        case "WEEKS":
            return e / 60 / 24 / 7;
        case "MONTHS":
            return e / 60 / 24 / 31;
        case "YEARS":
            return e / 60 / 24 / 365;
    }
}
let p = [
    { unit: "NONE", max: 0 },
    { unit: "SECONDS", max: 1 },
    { unit: "MINUTES", max: 60 },
    { unit: "HOURS", max: 1440 },
    { unit: "DAYS", max: 44640 },
    { unit: "WEEKS", max: 40320 },
    { unit: "MONTHS", max: 525600 },
    { unit: "YEARS", max: 1 / 0 },
];
function m(e, t) {
    let n = p.findIndex((t) => {
            let { max: n, unit: r } = t;
            return ("NONE" === r && e === n) || e < n;
        }),
        r = s()(
            p,
            (e) => {
                let { unit: n } = e;
                return t(n);
            },
            n,
        );
    if (null != r) return r.unit;
    let i = p.find((e) => {
        let { unit: n } = e;
        return t(n);
    });
    return null != i ? i.unit : null;
}
function g(e, t) {
    if (null == e) return { unit: "NONE", time: 0 };
    let n = m(e, (e) => t.includes(e)),
        r = null != n ? h(e, n) : null;
    return { unit: n, time: null != r ? Math.floor(r) : null };
}
