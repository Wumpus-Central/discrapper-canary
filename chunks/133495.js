var i = n(531478).codes.ERR_STREAM_PREMATURE_CLOSE;
function r(e) {
    var t = !1;
    return function () {
        if (!t) {
            t = !0;
            for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
            e.apply(this, i);
        }
    };
}
function a() {}
function s(e) {
    return e.setHeader && 'function' == typeof e.abort;
}
function o(e, t, n) {
    if ('function' == typeof t) return o(e, null, t);
    t || (t = {}), (n = r(n || a));
    var l = t.readable || (!1 !== t.readable && e.readable),
        u = t.writable || (!1 !== t.writable && e.writable),
        c = function () {
            e.writable || f();
        },
        d = e._writableState && e._writableState.finished,
        f = function () {
            (u = !1), (d = !0), l || n.call(e);
        },
        _ = e._readableState && e._readableState.endEmitted,
        p = function () {
            (l = !1), (_ = !0), u || n.call(e);
        },
        h = function (t) {
            n.call(e, t);
        },
        m = function () {
            var t;
            return l && !_ ? ((e._readableState && e._readableState.ended) || (t = new i()), n.call(e, t)) : u && !d ? ((e._writableState && e._writableState.ended) || (t = new i()), n.call(e, t)) : void 0;
        },
        g = function () {
            e.req.on('finish', f);
        };
    return (
        s(e) ? (e.on('complete', f), e.on('abort', m), e.req ? g() : e.on('request', g)) : u && !e._writableState && (e.on('end', c), e.on('close', c)),
        e.on('end', p),
        e.on('finish', f),
        !1 !== t.error && e.on('error', h),
        e.on('close', m),
        function () {
            e.removeListener('complete', f), e.removeListener('abort', m), e.removeListener('request', g), e.req && e.req.removeListener('finish', f), e.removeListener('end', c), e.removeListener('close', c), e.removeListener('finish', f), e.removeListener('end', p), e.removeListener('error', h), e.removeListener('close', m);
        }
    );
}
e.exports = o;
