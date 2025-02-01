function i(e, t, n) {
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
n(47120);
class r {
    getConsoleArgs(e, t) {
        return [''.concat(r.getDateTimeString(), ' ').concat(this.name, ': ').concat(e), ...t];
    }
    log(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        console.log.apply(console, this.getConsoleArgs(e, n));
    }
    info(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        console.info.apply(console, this.getConsoleArgs(e, n));
    }
    warn(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        console.warn.apply(console, this.getConsoleArgs(e, n));
    }
    error(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        console.error.apply(console, this.getConsoleArgs(e, n));
    }
    static getDateTimeString() {
        return new Date().toISOString();
    }
    constructor(e) {
        i(this, 'name', void 0), (this.name = e);
    }
}
