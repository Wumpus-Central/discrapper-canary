"use strict";
n.d(t, { $o: () => a, Vy: () => c, gZ: () => u, si: () => l });
var r = n(631159);
let i = `
font-weight: bold;
color: purple;
`,
    s = () => {};
function a(e) {
    s = e;
}
let o = () => {};
function l(e) {
    o = e;
}
function u(e, t, n) {
    for (var r = arguments.length, s = Array(r > 3 ? r - 3 : 0), a = 3; a < r; a++) s[a - 3] = arguments[a];
    "file-only" !== t && console[t](`%c[${e}]`, i, n, ...s);
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
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
            s(e.name, "log", t, ...r), e.nativeLoggerEnabled && o?.(e.name, "log", t, ...r);
        };
    })();
    log = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
            (0, r.G)(t, ...i), s(e.name, "log", t, ...i), e.nativeLoggerEnabled && o?.(e.name, "log", t, ...i);
        };
    })();
    verboseDangerously = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
            s(e.name, "debug", t, ...r), e.nativeLoggerEnabled && o?.(e.name, "debug", t, ...r);
        };
    })();
    verbose = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
            (0, r.G)(t, ...i), s(e.name, "debug", t, ...i), e.nativeLoggerEnabled && o?.(e.name, "debug", t, ...i);
        };
    })();
    info = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
            (0, r.G)(t, ...i), s(e.name, "info", t, ...i), e.nativeLoggerEnabled && o?.(e.name, "info", t, ...i);
        };
    })();
    warn = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
            (0, r.G)(t, ...i), s(e.name, "warn", t, ...i), e.nativeLoggerEnabled && o?.(e.name, "warn", t, ...i);
        };
    })();
    error = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
            (0, r.G)(t, ...i), s(e.name, "error", t, ...i), e.nativeLoggerEnabled && o?.(e.name, "error", t, ...i);
        };
    })();
    trace = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
            s(e.name, "trace", t, ...r), e.nativeLoggerEnabled && o?.(e.name, "trace", t, ...r);
        };
    })();
    time = (e, t) => {
        let n = Date.now(),
            r = t();
        return this.log(e, Date.now() - n), r;
    };
    timeAsync = async (e, t) => {
        let n = Date.now(),
            r = await t();
        return this.log(e, `${Date.now() - n}ms`), r;
    };
    fileOnly = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
            s(e.name, "file-only", t, ...r), e.nativeLoggerEnabled && o?.(e.name, "file-only", t, ...r);
        };
    })();
}
