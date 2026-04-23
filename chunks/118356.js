n.d(t, { $o: () => s, Vy: () => E, gZ: () => o, si: () => l });
var i = n(631159);
let r = `
font-weight: bold;
color: purple;
`,
    a = () => {};
function s(e) {
    a = e;
}
let _ = () => {};
function l(e) {
    _ = e;
}
function o(e, t, n) {
    for (var i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3; s < i; s++) a[s - 3] = arguments[s];
    "file-only" !== t && console[t](`%c[${e}]`, r, n, ...a);
}
class E {
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
            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
            a(e.name, "log", t, ...i), e.nativeLoggerEnabled && _?.(e.name, "log", t, ...i);
        };
    })();
    log = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) r[s - 1] = arguments[s];
            (0, i.G)(t, ...r), a(e.name, "log", t, ...r), e.nativeLoggerEnabled && _?.(e.name, "log", t, ...r);
        };
    })();
    verboseDangerously = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
            a(e.name, "debug", t, ...i), e.nativeLoggerEnabled && _?.(e.name, "debug", t, ...i);
        };
    })();
    verbose = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) r[s - 1] = arguments[s];
            (0, i.G)(t, ...r), a(e.name, "debug", t, ...r), e.nativeLoggerEnabled && _?.(e.name, "debug", t, ...r);
        };
    })();
    info = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) r[s - 1] = arguments[s];
            (0, i.G)(t, ...r), a(e.name, "info", t, ...r), e.nativeLoggerEnabled && _?.(e.name, "info", t, ...r);
        };
    })();
    warn = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) r[s - 1] = arguments[s];
            (0, i.G)(t, ...r), a(e.name, "warn", t, ...r), e.nativeLoggerEnabled && _?.(e.name, "warn", t, ...r);
        };
    })();
    error = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) r[s - 1] = arguments[s];
            (0, i.G)(t, ...r), a(e.name, "error", t, ...r), e.nativeLoggerEnabled && _?.(e.name, "error", t, ...r);
        };
    })();
    trace = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
            a(e.name, "trace", t, ...i), e.nativeLoggerEnabled && _?.(e.name, "trace", t, ...i);
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
            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
            a(e.name, "file-only", t, ...i), e.nativeLoggerEnabled && _?.(e.name, "file-only", t, ...i);
        };
    })();
}
