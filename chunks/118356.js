n.d(t, { $o: () => s, Vy: () => c, gZ: () => d, si: () => o });
var i = n(631159);
let a = `
font-weight: bold;
color: purple;
`,
    r = () => {};
function s(e) {
    r = e;
}
let l = () => {};
function o(e) {
    l = e;
}
function d(e, t, n) {
    for (var i = arguments.length, r = Array(i > 3 ? i - 3 : 0), s = 3; s < i; s++) r[s - 3] = arguments[s];
    "file-only" !== t && console[t](`%c[${e}]`, a, n, ...r);
}
class c {
    name;
    nativeLoggerEnabled;
    constructor(e = "default") {
        (this.name = e), (this.nativeLoggerEnabled = !1);
    }
    enableNativeLogger(e) {
        this.nativeLoggerEnabled = e;
    }
    logDangerously = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
            r(e.name, "log", t, ...i), e.nativeLoggerEnabled && l?.(e.name, "log", t, ...i);
        };
    })();
    log = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) a[s - 1] = arguments[s];
            (0, i.G)(t, ...a), r(e.name, "log", t, ...a), e.nativeLoggerEnabled && l?.(e.name, "log", t, ...a);
        };
    })();
    verboseDangerously = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
            r(e.name, "debug", t, ...i), e.nativeLoggerEnabled && l?.(e.name, "debug", t, ...i);
        };
    })();
    verbose = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) a[s - 1] = arguments[s];
            (0, i.G)(t, ...a), r(e.name, "debug", t, ...a), e.nativeLoggerEnabled && l?.(e.name, "debug", t, ...a);
        };
    })();
    info = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) a[s - 1] = arguments[s];
            (0, i.G)(t, ...a), r(e.name, "info", t, ...a), e.nativeLoggerEnabled && l?.(e.name, "info", t, ...a);
        };
    })();
    warn = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) a[s - 1] = arguments[s];
            (0, i.G)(t, ...a), r(e.name, "warn", t, ...a), e.nativeLoggerEnabled && l?.(e.name, "warn", t, ...a);
        };
    })();
    error = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) a[s - 1] = arguments[s];
            (0, i.G)(t, ...a), r(e.name, "error", t, ...a), e.nativeLoggerEnabled && l?.(e.name, "error", t, ...a);
        };
    })();
    trace = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
            r(e.name, "trace", t, ...i), e.nativeLoggerEnabled && l?.(e.name, "trace", t, ...i);
        };
    })();
    time = (e, t) => {
        let n = Date.now(),
            i = t();
        return this.log(e, Date.now() - n), i;
    };
    timeAsync = async (e, t) => {
        let n = Date.now(),
            i = await t();
        return this.log(e, `${Date.now() - n}ms`), i;
    };
    fileOnly = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
            r(e.name, "file-only", t, ...i), e.nativeLoggerEnabled && l?.(e.name, "file-only", t, ...i);
        };
    })();
}
