var r = n(50613),
    i = n(742904),
    s = n(416412),
    a = n(822339),
    o = n(109665),
    l = n(514035),
    u = r ? r.prototype : void 0,
    d = u ? u.valueOf : void 0;
e.exports = function (e, t, n, r, u, c, _) {
    switch (n) {
        case "[object DataView]":
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
            (e = e.buffer), (t = t.buffer);
        case "[object ArrayBuffer]":
            if (e.byteLength != t.byteLength || !c(new i(e), new i(t))) break;
            return !0;
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
            return s(+e, +t);
        case "[object Error]":
            return e.name == t.name && e.message == t.message;
        case "[object RegExp]":
        case "[object String]":
            return e == t + "";
        case "[object Map]":
            var f = o;
        case "[object Set]":
            var E = 1 & r;
            if ((f || (f = l), e.size != t.size && !E)) break;
            var h = _.get(e);
            if (h) return h == t;
            (r |= 2), _.set(e, t);
            var p = a(f(e), f(t), r, u, c, _);
            return _.delete(e), p;
        case "[object Symbol]":
            if (d) return d.call(e) == d.call(t);
    }
    return !1;
};
