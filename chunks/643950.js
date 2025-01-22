var i = r(47120);
function a(e, n, r) {
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
class o {
    getConsoleArgs(e, n) {
        return [''.concat(o.getDateTimeString(), ' ').concat(this.name, ': ').concat(e), ...n];
    }
    log(e) {
        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        console.log.apply(console, this.getConsoleArgs(e, r));
    }
    info(e) {
        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        console.info.apply(console, this.getConsoleArgs(e, r));
    }
    warn(e) {
        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        console.warn.apply(console, this.getConsoleArgs(e, r));
    }
    error(e) {
        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        console.error.apply(console, this.getConsoleArgs(e, r));
    }
    static getDateTimeString() {
        return new Date().toISOString();
    }
    constructor(e) {
        a(this, 'name', void 0), (this.name = e);
    }
}
