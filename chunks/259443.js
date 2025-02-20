n.d(t, {
    Bl: () => l,
    Yd: () => c,
    _n: () => a
}),
    n(47120);
var r = n(247071);
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
let o = () => {};
function a(e) {
    o = e;
}
let s = () => {};
function l(e) {
    s = e;
}
class c {
    enableNativeLogger(e) {
        this.nativeLoggerEnabled = e;
    }
    constructor(e = 'default') {
        var t = this;
        i(this, 'name', void 0),
            i(this, 'nativeLoggerEnabled', void 0),
            i(this, 'logDangerously', function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                o(t.name, 'log', e, ...r), t.nativeLoggerEnabled && (null == s || s(t.name, 'log', e, ...r));
            }),
            i(this, 'log', function (e) {
                for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                (0, r.c)(e, ...i), o(t.name, 'log', e, ...i), t.nativeLoggerEnabled && (null == s || s(t.name, 'log', e, ...i));
            }),
            i(this, 'verboseDangerously', function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                o(t.name, 'debug', e, ...r), t.nativeLoggerEnabled && (null == s || s(t.name, 'debug', e, ...r));
            }),
            i(this, 'verbose', function (e) {
                for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                (0, r.c)(e, ...i), o(t.name, 'debug', e, ...i), t.nativeLoggerEnabled && (null == s || s(t.name, 'debug', e, ...i));
            }),
            i(this, 'info', function (e) {
                for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                (0, r.c)(e, ...i), o(t.name, 'info', e, ...i), t.nativeLoggerEnabled && (null == s || s(t.name, 'info', e, ...i));
            }),
            i(this, 'warn', function (e) {
                for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                (0, r.c)(e, ...i), o(t.name, 'warn', e, ...i), t.nativeLoggerEnabled && (null == s || s(t.name, 'warn', e, ...i));
            }),
            i(this, 'error', function (e) {
                for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                (0, r.c)(e, ...i), o(t.name, 'error', e, ...i), t.nativeLoggerEnabled && (null == s || s(t.name, 'error', e, ...i));
            }),
            i(this, 'trace', function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                o(t.name, 'trace', e, ...r), t.nativeLoggerEnabled && (null == s || s(t.name, 'trace', e, ...r));
            }),
            i(this, 'time', (e, t) => {
                let n = Date.now(),
                    r = t();
                return this.log(e, Date.now() - n), r;
            }),
            i(this, 'fileOnly', function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                o(t.name, 'file-only', e, ...r), t.nativeLoggerEnabled && (null == s || s(t.name, 'file-only', e, ...r));
            }),
            (this.name = e),
            (this.nativeLoggerEnabled = !1);
    }
}
