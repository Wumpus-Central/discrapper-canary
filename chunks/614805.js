function i(e) {
    var t = !1;
    return function () {
        t || ((t = !0), e.apply(void 0, arguments));
    };
}
var r,
    a = n(531478).codes,
    s = a.ERR_MISSING_ARGS,
    o = a.ERR_STREAM_DESTROYED;
function l(e) {
    if (e) throw e;
}
function u(e) {
    return e.setHeader && 'function' == typeof e.abort;
}
function c(e, t, a, s) {
    s = i(s);
    var l = !1;
    e.on('close', function () {
        l = !0;
    }),
        void 0 === r && (r = n(133495)),
        r(
            e,
            {
                readable: t,
                writable: a
            },
            function (e) {
                if (e) return s(e);
                (l = !0), s();
            }
        );
    var c = !1;
    return function (t) {
        if (!l && !c) {
            if (((c = !0), u(e))) return e.abort();
            if ('function' == typeof e.destroy) return e.destroy();
            s(t || new o('pipe'));
        }
    };
}
function d(e) {
    e();
}
function f(e, t) {
    return e.pipe(t);
}
function _(e) {
    return e.length && 'function' == typeof e[e.length - 1] ? e.pop() : l;
}
function p() {
    for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
    var r = _(n);
    if ((Array.isArray(n[0]) && (n = n[0]), n.length < 2)) throw new s('streams');
    var a = n.map(function (t, i) {
        var s = i < n.length - 1;
        return c(t, s, i > 0, function (t) {
            e || (e = t), t && a.forEach(d), s || (a.forEach(d), r(e));
        });
    });
    return n.reduce(f);
}
e.exports = p;
