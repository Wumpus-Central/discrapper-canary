n.d(t, {
    Bl: () => l,
    Yd: () => u,
    _n: () => s
}),
    n(47120);
var i = n(247071);
function r(e, t, n) {
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
let a = () => {};
function s(e) {
    a = e;
}
let o = () => {};
function l(e) {
    o = e;
}
class u {
    enableNativeLogger(e) {
        this.nativeLoggerEnabled = e;
    }
    constructor(e = 'default') {
        var t = this;
        r(this, 'name', void 0),
            r(this, 'nativeLoggerEnabled', void 0),
            r(this, 'logDangerously', function (e) {
                for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                a(t.name, 'log', e, ...i), t.nativeLoggerEnabled && (null == o || o(t.name, 'log', e, ...i));
            }),
            r(this, 'log', function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) r[s - 1] = arguments[s];
                (0, i.c)(e, ...r), a(t.name, 'log', e, ...r), t.nativeLoggerEnabled && (null == o || o(t.name, 'log', e, ...r));
            }),
            r(this, 'verboseDangerously', function (e) {
                for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                a(t.name, 'debug', e, ...i), t.nativeLoggerEnabled && (null == o || o(t.name, 'debug', e, ...i));
            }),
            r(this, 'verbose', function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) r[s - 1] = arguments[s];
                (0, i.c)(e, ...r), a(t.name, 'debug', e, ...r), t.nativeLoggerEnabled && (null == o || o(t.name, 'debug', e, ...r));
            }),
            r(this, 'info', function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) r[s - 1] = arguments[s];
                (0, i.c)(e, ...r), a(t.name, 'info', e, ...r), t.nativeLoggerEnabled && (null == o || o(t.name, 'info', e, ...r));
            }),
            r(this, 'warn', function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) r[s - 1] = arguments[s];
                (0, i.c)(e, ...r), a(t.name, 'warn', e, ...r), t.nativeLoggerEnabled && (null == o || o(t.name, 'warn', e, ...r));
            }),
            r(this, 'error', function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) r[s - 1] = arguments[s];
                (0, i.c)(e, ...r), a(t.name, 'error', e, ...r), t.nativeLoggerEnabled && (null == o || o(t.name, 'error', e, ...r));
            }),
            r(this, 'trace', function (e) {
                for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                a(t.name, 'trace', e, ...i), t.nativeLoggerEnabled && (null == o || o(t.name, 'trace', e, ...i));
            }),
            r(this, 'time', (e, t) => {
                let n = Date.now(),
                    i = t();
                return this.log(e, Date.now() - n), i;
            }),
            r(this, 'fileOnly', function (e) {
                for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                a(t.name, 'file-only', e, ...i), t.nativeLoggerEnabled && (null == o || o(t.name, 'file-only', e, ...i));
            }),
            (this.name = e),
            (this.nativeLoggerEnabled = !1);
    }
}
