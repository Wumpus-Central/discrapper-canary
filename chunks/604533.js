n.d(t, { Z: () => d });
var r = n(176338),
    i = n(754401),
    o = n(370873),
    a = '[object Object]',
    s = Object.prototype,
    l = Function.prototype.toString,
    c = s.hasOwnProperty,
    u = l.call(Object);
let d = function (e) {
    if (!(0, o.Z)(e) || (0, r.Z)(e) != a) return !1;
    var t = (0, i.Z)(e);
    if (null === t) return !0;
    var n = c.call(t, 'constructor') && t.constructor;
    return 'function' == typeof n && n instanceof n && l.call(n) == u;
};
