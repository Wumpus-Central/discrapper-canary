function i(e) {
    var n = !1;
    return function () {
        !n && ((n = !0), e.apply(void 0, arguments));
    };
}
var a,
    o = r(531478).codes,
    s = o.ERR_MISSING_ARGS,
    l = o.ERR_STREAM_DESTROYED;
function u(e) {
    if (e) throw e;
}
function c(e) {
    return e.setHeader && 'function' == typeof e.abort;
}
function d(e, n, o, s) {
    s = i(s);
    var u = !1;
    e.on('close', function () {
        u = !0;
    }),
        void 0 === a && (a = r(133495)),
        a(
            e,
            {
                readable: n,
                writable: o
            },
            function (e) {
                if (e) return s(e);
                (u = !0), s();
            }
        );
    var d = !1;
    return function (n) {
        if (!u) {
            if (!d) {
                if (((d = !0), c(e))) return e.abort();
                if ('function' == typeof e.destroy) return e.destroy();
                s(n || new l('pipe'));
            }
        }
    };
}
function f(e) {
    e();
}
function p(e, n) {
    return e.pipe(n);
}
function h(e) {
    return e.length && 'function' == typeof e[e.length - 1] ? e.pop() : u;
}
function _() {
    for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
    var a = h(r);
    if ((Array.isArray(r[0]) && (r = r[0]), r.length < 2)) throw new s('streams');
    var o = r.map(function (n, i) {
        var s = i < r.length - 1;
        return d(n, s, i > 0, function (n) {
            !e && (e = n), n && o.forEach(f), !s && (o.forEach(f), a(e));
        });
    });
    return r.reduce(p);
}
e.exports = _;
