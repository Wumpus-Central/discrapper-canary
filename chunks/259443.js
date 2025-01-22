r.d(n, {
    Bl: function () {
        return c;
    },
    Yd: function () {
        return d;
    },
    _n: function () {
        return l;
    }
});
var i = r(47120);
var a = r(247071);
function o(e, n, r) {
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
let s = () => {};
function l(e) {
    s = e;
}
let u = () => {};
function c(e) {
    u = e;
}
class d {
    enableNativeLogger(e) {
        this.nativeLoggerEnabled = e;
    }
    constructor(e = 'default') {
        var n = this;
        o(this, 'name', void 0),
            o(this, 'nativeLoggerEnabled', void 0),
            o(this, 'logDangerously', function (e) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
                s(n.name, 'log', e, ...i), n.nativeLoggerEnabled && (null == u || u(n.name, 'log', e, ...i));
            }),
            o(this, 'log', function (e) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                (0, a.c)(e, ...i), s(n.name, 'log', e, ...i), n.nativeLoggerEnabled && (null == u || u(n.name, 'log', e, ...i));
            }),
            o(this, 'verboseDangerously', function (e) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
                s(n.name, 'debug', e, ...i), n.nativeLoggerEnabled && (null == u || u(n.name, 'debug', e, ...i));
            }),
            o(this, 'verbose', function (e) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                (0, a.c)(e, ...i), s(n.name, 'debug', e, ...i), n.nativeLoggerEnabled && (null == u || u(n.name, 'debug', e, ...i));
            }),
            o(this, 'info', function (e) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                (0, a.c)(e, ...i), s(n.name, 'info', e, ...i), n.nativeLoggerEnabled && (null == u || u(n.name, 'info', e, ...i));
            }),
            o(this, 'warn', function (e) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                (0, a.c)(e, ...i), s(n.name, 'warn', e, ...i), n.nativeLoggerEnabled && (null == u || u(n.name, 'warn', e, ...i));
            }),
            o(this, 'error', function (e) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                (0, a.c)(e, ...i), s(n.name, 'error', e, ...i), n.nativeLoggerEnabled && (null == u || u(n.name, 'error', e, ...i));
            }),
            o(this, 'trace', function (e) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
                s(n.name, 'trace', e, ...i), n.nativeLoggerEnabled && (null == u || u(n.name, 'trace', e, ...i));
            }),
            o(this, 'time', (e, n) => {
                let r = Date.now(),
                    i = n();
                return this.log(e, Date.now() - r), i;
            }),
            o(this, 'fileOnly', function (e) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
                s(n.name, 'file-only', e, ...i), n.nativeLoggerEnabled && (null == u || u(n.name, 'file-only', e, ...i));
            }),
            (this.name = e),
            (this.nativeLoggerEnabled = !1);
    }
}
