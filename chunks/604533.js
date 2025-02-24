r.d(t, { Z: () => c });
var n = r(176338),
    o = r(754401),
    a = r(370873),
    i = Object.prototype,
    l = Function.prototype.toString,
    s = i.hasOwnProperty,
    u = l.call(Object);
let c = function (e) {
    if (!(0, a.Z)(e) || '[object Object]' != (0, n.Z)(e)) return !1;
    var t = (0, o.Z)(e);
    if (null === t) return !0;
    var r = s.call(t, 'constructor') && t.constructor;
    return 'function' == typeof r && r instanceof r && l.call(r) == u;
};
