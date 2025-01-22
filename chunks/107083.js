var i = r(444675);
function a() {
    throw Error('secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11');
}
var o = r(957578),
    s = r(706178),
    l = o.Buffer,
    u = o.kMaxLength,
    c = r.g.crypto || r.g.msCrypto,
    d = 4294967295;
function f(e, n) {
    if ('number' != typeof e || e != e) throw TypeError('offset must be a number');
    if (e > d || e < 0) throw TypeError('offset must be a uint32');
    if (e > u || e > n) throw RangeError('offset out of range');
}
function p(e, n, r) {
    if ('number' != typeof e || e != e) throw TypeError('size must be a number');
    if (e > d || e < 0) throw TypeError('size must be a uint32');
    if (e + n > r || e > u) throw RangeError('buffer too small');
}
function h(e, n, i, a) {
    if (!l.isBuffer(e) && !(e instanceof r.g.Uint8Array)) throw TypeError('"buf" argument must be a Buffer or Uint8Array');
    if ('function' == typeof n) (a = n), (n = 0), (i = e.length);
    else if ('function' == typeof i) (a = i), (i = e.length - n);
    else if ('function' != typeof a) throw TypeError('"cb" argument must be a function');
    return f(n, e.length), p(i, n, e.length), _(e, n, i, a);
}
function _(e, n, r, a) {
    if (i.browser) {
        var o = new Uint8Array(e.buffer, n, r);
        if ((c.getRandomValues(o), a)) {
            i.nextTick(function () {
                a(null, e);
            });
            return;
        }
        return e;
    }
    if (a) {
        s(r, function (r, i) {
            if (r) return a(r);
            i.copy(e, n), a(null, e);
        });
        return;
    }
    return s(r).copy(e, n), e;
}
function m(e, n, i) {
    if ((void 0 === n && (n = 0), !l.isBuffer(e) && !(e instanceof r.g.Uint8Array))) throw TypeError('"buf" argument must be a Buffer or Uint8Array');
    return f(n, e.length), void 0 === i && (i = e.length - n), p(i, n, e.length), _(e, n, i);
}
(c && c.getRandomValues) || !i.browser ? ((n.randomFill = h), (n.randomFillSync = m)) : ((n.randomFill = a), (n.randomFillSync = a));
