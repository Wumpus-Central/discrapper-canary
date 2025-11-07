r.d(e, {
    Sm: () => l,
    Yd: () => c,
    _n: () => o,
}),
    r(388685);
var n = r(351527);
function i(t, e, r) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = r),
        t
    );
}
let a = () => {};
function o(t) {
    a = t;
}
let s = () => {};
function l(t, e, r) {
    for (var n = arguments.length, i = Array(n > 3 ? n - 3 : 0), a = 3; a < n; a++) i[a - 3] = arguments[a];
    "file-only" !== e && console[e]("%c[".concat(t, "]"), "\nfont-weight: bold;\ncolor: purple;\n", r, ...i);
}
class c {
    enableNativeLogger(t) {
        this.nativeLoggerEnabled = t;
    }
    constructor(t = "default") {
        var e = this;
        i(this, "name", void 0),
            i(this, "nativeLoggerEnabled", void 0),
            i(this, "logDangerously", function (t) {
                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                a(e.name, "log", t, ...n), e.nativeLoggerEnabled && (null == s || s(e.name, "log", t, ...n));
            }),
            i(this, "log", function (t) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                (0, n.c)(t, ...i),
                    a(e.name, "log", t, ...i),
                    e.nativeLoggerEnabled && (null == s || s(e.name, "log", t, ...i));
            }),
            i(this, "verboseDangerously", function (t) {
                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                a(e.name, "debug", t, ...n), e.nativeLoggerEnabled && (null == s || s(e.name, "debug", t, ...n));
            }),
            i(this, "verbose", function (t) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                (0, n.c)(t, ...i),
                    a(e.name, "debug", t, ...i),
                    e.nativeLoggerEnabled && (null == s || s(e.name, "debug", t, ...i));
            }),
            i(this, "info", function (t) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                (0, n.c)(t, ...i),
                    a(e.name, "info", t, ...i),
                    e.nativeLoggerEnabled && (null == s || s(e.name, "info", t, ...i));
            }),
            i(this, "warn", function (t) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                (0, n.c)(t, ...i),
                    a(e.name, "warn", t, ...i),
                    e.nativeLoggerEnabled && (null == s || s(e.name, "warn", t, ...i));
            }),
            i(this, "error", function (t) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                (0, n.c)(t, ...i),
                    a(e.name, "error", t, ...i),
                    e.nativeLoggerEnabled && (null == s || s(e.name, "error", t, ...i));
            }),
            i(this, "trace", function (t) {
                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                a(e.name, "trace", t, ...n), e.nativeLoggerEnabled && (null == s || s(e.name, "trace", t, ...n));
            }),
            i(this, "time", (t, e) => {
                let r = Date.now(),
                    n = e();
                return this.log(t, Date.now() - r), n;
            }),
            i(this, "fileOnly", function (t) {
                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                a(e.name, "file-only", t, ...n),
                    e.nativeLoggerEnabled && (null == s || s(e.name, "file-only", t, ...n));
            }),
            (this.name = t),
            (this.nativeLoggerEnabled = !1);
    }
}
