function r(e) {
    var t = !1;
    return function () {
        t || ((t = !0), e.apply(void 0, arguments));
    };
}
var i,
    o = n(531478).codes,
    a = o.ERR_MISSING_ARGS,
    s = o.ERR_STREAM_DESTROYED;
function l(e) {
    if (e) throw e;
}
function c(e) {
    return e.setHeader && 'function' == typeof e.abort;
}
function u(e, t, o, a) {
    a = r(a);
    var l = !1;
    e.on('close', function () {
        l = !0;
    }),
        void 0 === i && (i = n(133495)),
        i(
            e,
            {
                readable: t,
                writable: o
            },
            function (e) {
                if (e) return a(e);
                (l = !0), a();
            }
        );
    var u = !1;
    return function (t) {
        if (!l && !u) {
            if (((u = !0), c(e))) return e.abort();
            if ('function' == typeof e.destroy) return e.destroy();
            a(t || new s('pipe'));
        }
    };
}
function d(e) {
    e();
}
function f(e, t) {
    return e.pipe(t);
}
function p(e) {
    return e.length && 'function' == typeof e[e.length - 1] ? e.pop() : l;
}
function _() {
    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    var i = p(n);
    if ((Array.isArray(n[0]) && (n = n[0]), n.length < 2)) throw new a('streams');
    var o = n.map(function (t, r) {
        var a = r < n.length - 1;
        return u(t, a, r > 0, function (t) {
            e || (e = t), t && o.forEach(d), a || (o.forEach(d), i(e));
        });
    });
    return n.reduce(f);
}
e.exports = _;
