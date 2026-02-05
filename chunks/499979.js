"use strict";
n.d(t, {
    $l: () => g,
    TF: () => o,
    Ul: () => m,
    W0: () => u,
    eZ: () => p,
    pJ: () => f,
    tB: () => s,
    w6: () => c,
    yy: () => _,
}),
    n(140667);
var r = n(682572),
    i = n.n(r),
    a = n(547830);
let s = () => Math.floor(a.u5 + a.FO.now()),
    o = new (class {
        now() {
            return s();
        }
    })();
class l {
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
    add = (e) => l.fromMilliseconds(this.milliseconds + e.milliseconds);
    subtract = (e) => l.fromMilliseconds(this.milliseconds - e.milliseconds);
    subtractOrZero = (e) => l.fromMilliseconds(Math.max(this.milliseconds - e.milliseconds, 0));
    static fromMilliseconds = (e) => new l(0, 0, 0, e);
    static fromSeconds = (e) => new l(0, 0, e);
    static fromMinutes = (e) => new l(0, e);
    static fromHours = (e) => new l(e);
}
class u {
    timestampProducer;
    startTime = void 0;
    timePassed = 0;
    constructor(e = o) {
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
        if (null == this.startTime) return l.fromMilliseconds(this.timePassed);
        let e = this.timestampProducer.now() - this.startTime;
        return l.fromMilliseconds(this.timePassed + e);
    }
    isRunning() {
        return null != this.startTime;
    }
    static startNew() {
        let e = new u();
        return e.start(), e;
    }
}
class c {
    stopwatch;
    state;
    constructor(e, t = o) {
        (this.stopwatch = new u(t)), (this.state = e), this.stopwatch.toggle(e);
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
class d {
    timeout;
    watch = new u();
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
        let t = new d(e);
        return t.start(), t;
    }
    static async waitFor(e, t) {
        let n,
            r = l.fromMilliseconds(100);
        e instanceof l ? (n = e) : ((n = e.timeout), null != e.sleep && (r = e.sleep));
        let i = d.startNew(n);
        do {
            if ((await t()) === !0) return !0;
            await _(r);
        } while (!i.hasTimedOut());
        return !1;
    }
}
function _(e) {
    let t = "number" == typeof e ? e : e.asMilliseconds();
    return new Promise((e) => {
        setTimeout(() => e(), t);
    });
}
var f = (function (e) {
    return (
        (e.NONE = "NONE"),
        (e.SECONDS = "SECONDS"),
        (e.MINUTES = "MINUTES"),
        (e.HOURS = "HOURS"),
        (e.DAYS = "DAYS"),
        (e.WEEKS = "WEEKS"),
        (e.MONTHS = "MONTHS"),
        (e.YEARS = "YEARS"),
        e
    );
})({});
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
let h = [
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
    let n = h.findIndex((t) => {
            let { max: n, unit: r } = t;
            return ("NONE" === r && e === n) || e < n;
        }),
        r = i()(
            h,
            (e) => {
                let { unit: n } = e;
                return t(n);
            },
            n,
        );
    if (null != r) return r.unit;
    let a = h.find((e) => {
        let { unit: n } = e;
        return t(n);
    });
    return null != a ? a.unit : null;
}
function g(e, t) {
    if (null == e) return { unit: "NONE", time: 0 };
    let n = m(e, (e) => t.includes(e)),
        r = null != n ? p(e, n) : null;
    return { unit: n, time: null != r ? Math.floor(r) : null };
}
