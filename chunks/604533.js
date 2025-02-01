n.d(t, { Z: () => d });
var i = n(176338),
    r = n(754401),
    a = n(370873),
    s = '[object Object]',
    o = Object.prototype,
    l = Function.prototype.toString,
    u = o.hasOwnProperty,
    c = l.call(Object);
let d = function (e) {
    if (!(0, a.Z)(e) || (0, i.Z)(e) != s) return !1;
    var t = (0, r.Z)(e);
    if (null === t) return !0;
    var n = u.call(t, 'constructor') && t.constructor;
    return 'function' == typeof n && n instanceof n && l.call(n) == c;
};
