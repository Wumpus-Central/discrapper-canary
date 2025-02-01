var i = n(444675),
    r = 65536,
    a = 4294967295;
function s() {
    throw Error('Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11');
}
var o = n(957578).Buffer,
    l = n.g.crypto || n.g.msCrypto;
function u(e, t) {
    if (e > a) throw RangeError('requested too many random bytes');
    var n = o.allocUnsafe(e);
    if (e > 0) {
        if (e > r) for (var s = 0; s < e; s += r) l.getRandomValues(n.slice(s, s + r));
        else l.getRandomValues(n);
    }
    return 'function' == typeof t
        ? i.nextTick(function () {
              t(null, n);
          })
        : n;
}
l && l.getRandomValues ? (e.exports = u) : (e.exports = s);
