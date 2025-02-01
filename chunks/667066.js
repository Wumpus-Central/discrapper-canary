var i = n(657398),
    r = n(708187),
    a = n(389109),
    s = '[object Object]',
    o = Object.prototype,
    l = Function.prototype.toString,
    u = o.hasOwnProperty,
    c = l.call(Object);
function d(e) {
    if (!a(e) || i(e) != s) return !1;
    var t = r(e);
    if (null === t) return !0;
    var n = u.call(t, 'constructor') && t.constructor;
    return 'function' == typeof n && n instanceof n && l.call(n) == c;
}
e.exports = d;
