var i = r(657398),
    a = r(708187),
    o = r(389109),
    s = '[object Object]',
    l = Object.prototype,
    u = Function.prototype.toString,
    c = l.hasOwnProperty,
    d = u.call(Object);
function f(e) {
    if (!o(e) || i(e) != s) return !1;
    var n = a(e);
    if (null === n) return !0;
    var r = c.call(n, 'constructor') && n.constructor;
    return 'function' == typeof r && r instanceof r && u.call(r) == d;
}
e.exports = f;
