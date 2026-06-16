"use strict";
n.d(t, {
    $l: () => g,
    TF: () => l,
    Ul: () => m,
    W0: () => c,
    eZ: () => p,
    pJ: () => f,
    tB: () => o,
    w6: () => d,
    yy: () => h,
}),
    n(140667);
var i,
    r = n(682572),
    s = n.n(r),
    a = n(179689);
let o = () => Math.floor(a.u5 + a.FO.now()),
    l = new (class {
        now() {
            return o();
        }
    })();
class u {
    milliseconds = 0;
    constructor(e, t, n, i) {
        (this.milliseconds += i || 0),
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
class c {
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
        let e = new c();
        return e.start(), e;
    }
}
class d {
    stopwatch;
    state;
    constructor(e, t = l) {
        (this.stopwatch = new c(t)), (this.state = e), this.stopwatch.toggle(e);
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
    watch = new c();
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
            i = u.fromMilliseconds(100);
        e instanceof u ? (n = e) : ((n = e.timeout), null != e.sleep && (i = e.sleep));
        let r = _.startNew(n);
        do {
            if ((await t()) === !0) return !0;
            await h(i);
        } while (!r.hasTimedOut());
        return !1;
    }
}
function h(e) {
    let t = "number" == typeof e ? e : e.asMilliseconds();
    return new Promise((e) => {
        setTimeout(() => e(), t);
    });
}
var f =
    (((i = {}).NONE = "NONE"),
    (i.SECONDS = "SECONDS"),
    (i.MINUTES = "MINUTES"),
    (i.HOURS = "HOURS"),
    (i.DAYS = "DAYS"),
    (i.WEEKS = "WEEKS"),
    (i.MONTHS = "MONTHS"),
    (i.YEARS = "YEARS"),
    i);
function p(e, t) {
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
let E = [
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
    let n = E.findIndex((t) => {
            let { max: n, unit: i } = t;
            return ("NONE" === i && e === n) || e < n;
        }),
        i = s()(
            E,
            (e) => {
                let { unit: n } = e;
                return t(n);
            },
            n,
        );
    if (null != i) return i.unit;
    let r = E.find((e) => {
        let { unit: n } = e;
        return t(n);
    });
    return null != r ? r.unit : null;
}
function g(e, t) {
    if (null == e) return { unit: "NONE", time: 0 };
    let n = m(e, (e) => t.includes(e)),
        i = null != n ? p(e, n) : null;
    return { unit: n, time: null != i ? Math.floor(i) : null };
}
