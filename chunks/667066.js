var r = n(657398),
    i = n(708187),
    o = n(389109),
    a = '[object Object]',
    s = Object.prototype,
    l = Function.prototype.toString,
    c = s.hasOwnProperty,
    u = l.call(Object);
function d(e) {
    if (!o(e) || r(e) != a) return !1;
    var t = i(e);
    if (null === t) return !0;
    var n = c.call(t, 'constructor') && t.constructor;
    return 'function' == typeof n && n instanceof n && l.call(n) == u;
}
e.exports = d;
