var i = n(444675);
function r() {
    throw Error('secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11');
}
var a = n(957578),
    s = n(706178),
    o = a.Buffer,
    l = a.kMaxLength,
    u = n.g.crypto || n.g.msCrypto,
    c = 4294967295;
function d(e, t) {
    if ('number' != typeof e || e != e) throw TypeError('offset must be a number');
    if (e > c || e < 0) throw TypeError('offset must be a uint32');
    if (e > l || e > t) throw RangeError('offset out of range');
}
function f(e, t, n) {
    if ('number' != typeof e || e != e) throw TypeError('size must be a number');
    if (e > c || e < 0) throw TypeError('size must be a uint32');
    if (e + t > n || e > l) throw RangeError('buffer too small');
}
function _(e, t, i, r) {
    if (!o.isBuffer(e) && !(e instanceof n.g.Uint8Array)) throw TypeError('"buf" argument must be a Buffer or Uint8Array');
    if ('function' == typeof t) (r = t), (t = 0), (i = e.length);
    else if ('function' == typeof i) (r = i), (i = e.length - t);
    else if ('function' != typeof r) throw TypeError('"cb" argument must be a function');
    return d(t, e.length), f(i, t, e.length), p(e, t, i, r);
}
function p(e, t, n, r) {
    if (i.browser) {
        var a = new Uint8Array(e.buffer, t, n);
        if ((u.getRandomValues(a), r)) {
            i.nextTick(function () {
                r(null, e);
            });
            return;
        }
        return e;
    }
    if (r) {
        s(n, function (n, i) {
            if (n) return r(n);
            i.copy(e, t), r(null, e);
        });
        return;
    }
    return s(n).copy(e, t), e;
}
function h(e, t, i) {
    if ((void 0 === t && (t = 0), !o.isBuffer(e) && !(e instanceof n.g.Uint8Array))) throw TypeError('"buf" argument must be a Buffer or Uint8Array');
    return d(t, e.length), void 0 === i && (i = e.length - t), f(i, t, e.length), p(e, t, i);
}
(u && u.getRandomValues) || !i.browser ? ((t.randomFill = _), (t.randomFillSync = h)) : ((t.randomFill = r), (t.randomFillSync = r));
