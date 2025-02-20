var r = n(531478).codes.ERR_STREAM_PREMATURE_CLOSE;
function i(e) {
    var t = !1;
    return function () {
        if (!t) {
            t = !0;
            for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            e.apply(this, r);
        }
    };
}
function o() {}
function a(e) {
    return e.setHeader && 'function' == typeof e.abort;
}
function s(e, t, n) {
    if ('function' == typeof t) return s(e, null, t);
    t || (t = {}), (n = i(n || o));
    var l = t.readable || (!1 !== t.readable && e.readable),
        c = t.writable || (!1 !== t.writable && e.writable),
        u = function () {
            e.writable || f();
        },
        d = e._writableState && e._writableState.finished,
        f = function () {
            (c = !1), (d = !0), l || n.call(e);
        },
        p = e._readableState && e._readableState.endEmitted,
        _ = function () {
            (l = !1), (p = !0), c || n.call(e);
        },
        h = function (t) {
            n.call(e, t);
        },
        m = function () {
            var t;
            return l && !p ? ((e._readableState && e._readableState.ended) || (t = new r()), n.call(e, t)) : c && !d ? ((e._writableState && e._writableState.ended) || (t = new r()), n.call(e, t)) : void 0;
        },
        g = function () {
            e.req.on('finish', f);
        };
    return (
        a(e) ? (e.on('complete', f), e.on('abort', m), e.req ? g() : e.on('request', g)) : c && !e._writableState && (e.on('end', u), e.on('close', u)),
        e.on('end', _),
        e.on('finish', f),
        !1 !== t.error && e.on('error', h),
        e.on('close', m),
        function () {
            e.removeListener('complete', f), e.removeListener('abort', m), e.removeListener('request', g), e.req && e.req.removeListener('finish', f), e.removeListener('end', u), e.removeListener('close', u), e.removeListener('finish', f), e.removeListener('end', _), e.removeListener('error', h), e.removeListener('close', m);
        }
    );
}
e.exports = s;
