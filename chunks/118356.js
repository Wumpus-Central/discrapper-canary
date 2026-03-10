r.d(e, { $o: () => o, Vy: () => h, gZ: () => l });
var n = r(631159);
let a = `
font-weight: bold;
color: purple;
`,
    i = () => {};
function o(t) {
    i = t;
}
let s = () => {};
function l(t, e, r) {
    for (var n = arguments.length, i = Array(n > 3 ? n - 3 : 0), o = 3; o < n; o++) i[o - 3] = arguments[o];
    "file-only" !== e && console[e](`%c[${t}]`, a, r, ...i);
}
class h {
    name;
    nativeLoggerEnabled;
    constructor(t = "default") {
        (this.name = t), (this.nativeLoggerEnabled = !1);
    }
    enableNativeLogger(t) {
        this.nativeLoggerEnabled = t;
    }
    logDangerously = (() => {
        var t = this;
        return function (e) {
            for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
            i(t.name, "log", e, ...n), t.nativeLoggerEnabled && s?.(t.name, "log", e, ...n);
        };
    })();
    log = (() => {
        var t = this;
        return function (e) {
            for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) a[o - 1] = arguments[o];
            (0, n.G)(e, ...a), i(t.name, "log", e, ...a), t.nativeLoggerEnabled && s?.(t.name, "log", e, ...a);
        };
    })();
    verboseDangerously = (() => {
        var t = this;
        return function (e) {
            for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
            i(t.name, "debug", e, ...n), t.nativeLoggerEnabled && s?.(t.name, "debug", e, ...n);
        };
    })();
    verbose = (() => {
        var t = this;
        return function (e) {
            for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) a[o - 1] = arguments[o];
            (0, n.G)(e, ...a), i(t.name, "debug", e, ...a), t.nativeLoggerEnabled && s?.(t.name, "debug", e, ...a);
        };
    })();
    info = (() => {
        var t = this;
        return function (e) {
            for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) a[o - 1] = arguments[o];
            (0, n.G)(e, ...a), i(t.name, "info", e, ...a), t.nativeLoggerEnabled && s?.(t.name, "info", e, ...a);
        };
    })();
    warn = (() => {
        var t = this;
        return function (e) {
            for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) a[o - 1] = arguments[o];
            (0, n.G)(e, ...a), i(t.name, "warn", e, ...a), t.nativeLoggerEnabled && s?.(t.name, "warn", e, ...a);
        };
    })();
    error = (() => {
        var t = this;
        return function (e) {
            for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) a[o - 1] = arguments[o];
            (0, n.G)(e, ...a), i(t.name, "error", e, ...a), t.nativeLoggerEnabled && s?.(t.name, "error", e, ...a);
        };
    })();
    trace = (() => {
        var t = this;
        return function (e) {
            for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
            i(t.name, "trace", e, ...n), t.nativeLoggerEnabled && s?.(t.name, "trace", e, ...n);
        };
    })();
    time = (t, e) => {
        let r = Date.now(),
            n = e();
        return this.log(t, Date.now() - r), n;
    };
    timeAsync = async (t, e) => {
        let r = Date.now(),
            n = await e();
        return this.log(t, `${Date.now() - r}ms`), n;
    };
    fileOnly = (() => {
        var t = this;
        return function (e) {
            for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
            i(t.name, "file-only", e, ...n), t.nativeLoggerEnabled && s?.(t.name, "file-only", e, ...n);
        };
    })();
}
