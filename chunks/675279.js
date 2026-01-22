var n = r(338036),
    o = r(853531),
    a = r(422750),
    i = Object.prototype,
    l = Function.prototype.toString,
    s = i.hasOwnProperty,
    u = l.call(Object);
e.exports = function (e) {
    if (!a(e) || "[object Object]" != n(e)) return !1;
    var t = o(e);
    if (null === t) return !0;
    var r = s.call(t, "constructor") && t.constructor;
    return "function" == typeof r && r instanceof r && l.call(r) == u;
};
