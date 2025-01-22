var i = r(444675),
    a = 65536,
    o = 4294967295;
function s() {
    throw Error('Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11');
}
var l = r(957578).Buffer,
    u = r.g.crypto || r.g.msCrypto;
function c(e, n) {
    if (e > o) throw RangeError('requested too many random bytes');
    var r = l.allocUnsafe(e);
    if (e > 0) {
        if (e > a) for (var s = 0; s < e; s += a) u.getRandomValues(r.slice(s, s + a));
        else u.getRandomValues(r);
    }
    return 'function' == typeof n
        ? i.nextTick(function () {
              n(null, r);
          })
        : r;
}
u && u.getRandomValues ? (e.exports = c) : (e.exports = s);
