n.d(r, {
    $o: () => i,
    Vy: () => u,
    gZ: () => s,
}),
    n(896048);
var t = n(631159);
function a(e, r, n) {
    return (
        r in e
            ? Object.defineProperty(e, r, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[r] = n),
        e
    );
}
let o = () => {};
function i(e) {
    o = e;
}
let l = () => {};
function s(e, r, n) {
    for (var t = arguments.length, a = Array(t > 3 ? t - 3 : 0), o = 3; o < t; o++) a[o - 3] = arguments[o];
    "file-only" !== r && console[r]("%c[".concat(e, "]"), "\nfont-weight: bold;\ncolor: purple;\n", n, ...a);
}
class u {
    enableNativeLogger(e) {
        this.nativeLoggerEnabled = e;
    }
    constructor(e = "default") {
        var r = this;
        a(this, "name", void 0),
            a(this, "nativeLoggerEnabled", void 0),
            a(this, "logDangerously", function (e) {
                for (var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) t[a - 1] = arguments[a];
                o(r.name, "log", e, ...t), r.nativeLoggerEnabled && (null == l || l(r.name, "log", e, ...t));
            }),
            a(this, "log", function (e) {
                for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                (0, t.G)(e, ...a),
                    o(r.name, "log", e, ...a),
                    r.nativeLoggerEnabled && (null == l || l(r.name, "log", e, ...a));
            }),
            a(this, "verboseDangerously", function (e) {
                for (var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) t[a - 1] = arguments[a];
                o(r.name, "debug", e, ...t), r.nativeLoggerEnabled && (null == l || l(r.name, "debug", e, ...t));
            }),
            a(this, "verbose", function (e) {
                for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                (0, t.G)(e, ...a),
                    o(r.name, "debug", e, ...a),
                    r.nativeLoggerEnabled && (null == l || l(r.name, "debug", e, ...a));
            }),
            a(this, "info", function (e) {
                for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                (0, t.G)(e, ...a),
                    o(r.name, "info", e, ...a),
                    r.nativeLoggerEnabled && (null == l || l(r.name, "info", e, ...a));
            }),
            a(this, "warn", function (e) {
                for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                (0, t.G)(e, ...a),
                    o(r.name, "warn", e, ...a),
                    r.nativeLoggerEnabled && (null == l || l(r.name, "warn", e, ...a));
            }),
            a(this, "error", function (e) {
                for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                (0, t.G)(e, ...a),
                    o(r.name, "error", e, ...a),
                    r.nativeLoggerEnabled && (null == l || l(r.name, "error", e, ...a));
            }),
            a(this, "trace", function (e) {
                for (var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) t[a - 1] = arguments[a];
                o(r.name, "trace", e, ...t), r.nativeLoggerEnabled && (null == l || l(r.name, "trace", e, ...t));
            }),
            a(this, "time", (e, r) => {
                let n = Date.now(),
                    t = r();
                return this.log(e, Date.now() - n), t;
            }),
            a(this, "fileOnly", function (e) {
                for (var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) t[a - 1] = arguments[a];
                o(r.name, "file-only", e, ...t),
                    r.nativeLoggerEnabled && (null == l || l(r.name, "file-only", e, ...t));
            }),
            (this.name = e),
            (this.nativeLoggerEnabled = !1);
    }
}
