var e,
    a,
    r,
    n = (t.exports = {});
function _() {
    throw Error('setTimeout has not been defined');
}
function o() {
    throw Error('clearTimeout has not been defined');
}
try {
    e = 'function' == typeof setTimeout ? setTimeout : _;
} catch (t) {
    e = _;
}
try {
    a = 'function' == typeof clearTimeout ? clearTimeout : o;
} catch (t) {
    a = o;
}
function i(t) {
    if (e === setTimeout) return setTimeout(t, 0);
    if ((e === _ || !e) && setTimeout) return (e = setTimeout), setTimeout(t, 0);
    try {
        return e(t, 0);
    } catch (a) {
        try {
            return e.call(null, t, 0);
        } catch (a) {
            return e.call(this, t, 0);
        }
    }
}
var c = [],
    s = !1,
    E = -1;
function l() {
    s && r && ((s = !1), r.length ? (c = r.concat(c)) : (E = -1), c.length && u());
}
function u() {
    if (!s) {
        var t = i(l);
        s = !0;
        for (var e = c.length; e; ) {
            for (r = c, c = []; ++E < e; ) r && r[E].run();
            (E = -1), (e = c.length);
        }
        (r = null),
            (s = !1),
            (function (t) {
                if (a === clearTimeout) return clearTimeout(t);
                if ((a === o || !a) && clearTimeout) return (a = clearTimeout), clearTimeout(t);
                try {
                    a(t);
                } catch (e) {
                    try {
                        return a.call(null, t);
                    } catch (e) {
                        return a.call(this, t);
                    }
                }
            })(t);
    }
}
function I(t, e) {
    (this.fun = t), (this.array = e);
}
function R() {}
(n.nextTick = function (t) {
    var e = Array(arguments.length - 1);
    if (arguments.length > 1) for (var a = 1; a < arguments.length; a++) e[a - 1] = arguments[a];
    c.push(new I(t, e)), 1 !== c.length || s || i(u);
}),
    (I.prototype.run = function () {
        this.fun.apply(null, this.array);
    }),
    (n.title = 'browser'),
    (n.browser = !0),
    (n.env = {}),
    (n.argv = []),
    (n.version = ''),
    (n.versions = {}),
    (n.on = R),
    (n.addListener = R),
    (n.once = R),
    (n.off = R),
    (n.removeListener = R),
    (n.removeAllListeners = R),
    (n.emit = R),
    (n.prependListener = R),
    (n.prependOnceListener = R),
    (n.listeners = function (t) {
        return [];
    }),
    (n.binding = function (t) {
        throw Error('process.binding is not supported');
    }),
    (n.cwd = function () {
        return '/';
    }),
    (n.chdir = function (t) {
        throw Error('process.chdir is not supported');
    }),
    (n.umask = function () {
        return 0;
    });
