var t,
    n,
    r,
    i = (e.exports = {});
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
    d = -1;
function c() {
    u && r && ((u = !1), r.length ? (l = r.concat(l)) : (d = -1), l.length && _());
}
function _() {
    if (!u) {
        var e = o(c);
        u = !0;
        for (var t = l.length; t; ) {
            for (r = l, l = []; ++d < t; ) r && r[d].run();
            (d = -1), (t = l.length);
        }
        (r = null),
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
function E() {}
(i.nextTick = function (e) {
    var t = Array(arguments.length - 1);
    if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    l.push(new f(e, t)), 1 !== l.length || u || o(_);
}),
    (f.prototype.run = function () {
        this.fun.apply(null, this.array);
    }),
    (i.title = "browser"),
    (i.browser = !0),
    (i.env = {}),
    (i.argv = []),
    (i.version = ""),
    (i.versions = {}),
    (i.on = E),
    (i.addListener = E),
    (i.once = E),
    (i.off = E),
    (i.removeListener = E),
    (i.removeAllListeners = E),
    (i.emit = E),
    (i.prependListener = E),
    (i.prependOnceListener = E),
    (i.listeners = function (e) {
        return [];
    }),
    (i.binding = function (e) {
        throw Error("process.binding is not supported");
    }),
    (i.cwd = function () {
        return "/";
    }),
    (i.chdir = function (e) {
        throw Error("process.chdir is not supported");
    }),
    (i.umask = function () {
        return 0;
    });
