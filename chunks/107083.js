var r = n(444675);
function i() {
    throw Error('secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11');
}
var o = n(957578),
    a = n(706178),
    s = o.Buffer,
    l = o.kMaxLength,
    c = n.g.crypto || n.g.msCrypto,
    u = 4294967295;
function d(e, t) {
    if ('number' != typeof e || e != e) throw TypeError('offset must be a number');
    if (e > u || e < 0) throw TypeError('offset must be a uint32');
    if (e > l || e > t) throw RangeError('offset out of range');
}
function f(e, t, n) {
    if ('number' != typeof e || e != e) throw TypeError('size must be a number');
    if (e > u || e < 0) throw TypeError('size must be a uint32');
    if (e + t > n || e > l) throw RangeError('buffer too small');
}
function p(e, t, r, i) {
    if (!s.isBuffer(e) && !(e instanceof n.g.Uint8Array)) throw TypeError('"buf" argument must be a Buffer or Uint8Array');
    if ('function' == typeof t) (i = t), (t = 0), (r = e.length);
    else if ('function' == typeof r) (i = r), (r = e.length - t);
    else if ('function' != typeof i) throw TypeError('"cb" argument must be a function');
    return d(t, e.length), f(r, t, e.length), _(e, t, r, i);
}
function _(e, t, n, i) {
    if (r.browser) {
        var o = new Uint8Array(e.buffer, t, n);
        if ((c.getRandomValues(o), i)) {
            r.nextTick(function () {
                i(null, e);
            });
            return;
        }
        return e;
    }
    if (i) {
        a(n, function (n, r) {
            if (n) return i(n);
            r.copy(e, t), i(null, e);
        });
        return;
    }
    return a(n).copy(e, t), e;
}
function h(e, t, r) {
    if ((void 0 === t && (t = 0), !s.isBuffer(e) && !(e instanceof n.g.Uint8Array))) throw TypeError('"buf" argument must be a Buffer or Uint8Array');
    return d(t, e.length), void 0 === r && (r = e.length - t), f(r, t, e.length), _(e, t, r);
}
(c && c.getRandomValues) || !r.browser ? ((t.randomFill = p), (t.randomFillSync = h)) : ((t.randomFill = i), (t.randomFillSync = i));
