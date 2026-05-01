var t,
    n,
    i,
    r = (e.exports = {});
function s() {
    throw Error("setTimeout has not been defined");
}
function a() {
    throw Error("clearTimeout has not been defined");
}
try {
    t = "function" == typeof setTimeout ? setTimeout : s;
} catch (e) {
    t = s;
}
try {
    n = "function" == typeof clearTimeout ? clearTimeout : a;
} catch (e) {
    n = a;
}
function o(e) {
    if (t === setTimeout) return setTimeout(e, 0);
    if ((t === s || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0);
    try {
        return t(e, 0);
    } catch (n) {
        try {
            return t.call(null, e, 0);
        } catch (n) {
            return t.call(this, e, 0);
        }
    }
}
var l = [],
    u = !1,
    c = -1;
function d() {
    u && i && ((u = !1), i.length ? (l = i.concat(l)) : (c = -1), l.length && _());
}
function _() {
    if (!u) {
        var e = o(d);
        u = !0;
        for (var t = l.length; t; ) {
            for (i = l, l = []; ++c < t; ) i && i[c].run();
            (c = -1), (t = l.length);
        }
        (i = null),
            (u = !1),
            (function (e) {
                if (n === clearTimeout) return clearTimeout(e);
                if ((n === a || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(e);
                try {
                    n(e);
                } catch (t) {
                    try {
                        return n.call(null, e);
                    } catch (t) {
                        return n.call(this, e);
                    }
                }
            })(e);
    }
}
function f(e, t) {
    (this.fun = e), (this.array = t);
}
function h() {}
(r.nextTick = function (e) {
    var t = Array(arguments.length - 1);
    if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    l.push(new f(e, t)), 1 !== l.length || u || o(_);
}),
    (f.prototype.run = function () {
        this.fun.apply(null, this.array);
    }),
    (r.title = "browser"),
    (r.browser = !0),
    (r.env = {}),
    (r.argv = []),
    (r.version = ""),
    (r.versions = {}),
    (r.on = h),
    (r.addListener = h),
    (r.once = h),
    (r.off = h),
    (r.removeListener = h),
    (r.removeAllListeners = h),
    (r.emit = h),
    (r.prependListener = h),
    (r.prependOnceListener = h),
    (r.listeners = function (e) {
        return [];
    }),
    (r.binding = function (e) {
        throw Error("process.binding is not supported");
    }),
    (r.cwd = function () {
        return "/";
    }),
    (r.chdir = function (e) {
        throw Error("process.chdir is not supported");
    }),
    (r.umask = function () {
        return 0;
    });
