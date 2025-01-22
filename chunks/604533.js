var i = r(176338),
    a = r(754401),
    o = r(370873),
    s = '[object Object]',
    l = Object.prototype,
    u = Function.prototype.toString,
    c = l.hasOwnProperty,
    d = u.call(Object);
function f(e) {
    if (!(0, o.Z)(e) || (0, i.Z)(e) != s) return !1;
    var n = (0, a.Z)(e);
    if (null === n) return !0;
    var r = c.call(n, 'constructor') && n.constructor;
    return 'function' == typeof r && r instanceof r && u.call(r) == d;
}
n.Z = f;
