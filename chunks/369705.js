var r = n(574366),
    i = n(910867),
    a = n(31289),
    s = n(381138),
    o = n(118322),
    l = n(762760),
    c = 1,
    u = 2,
    d = "[object Boolean]",
    f = "[object Date]",
    p = "[object Error]",
    _ = "[object Map]",
    h = "[object Number]",
    m = "[object RegExp]",
    g = "[object Set]",
    E = "[object String]",
    b = "[object Symbol]",
    y = "[object ArrayBuffer]",
    O = "[object DataView]",
    A = r ? r.prototype : void 0,
    v = A ? A.valueOf : void 0;
e.exports = function (e, t, n, r, A, S, I) {
    switch (n) {
        case O:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
            (e = e.buffer), (t = t.buffer);
        case y:
            if (e.byteLength != t.byteLength || !S(new i(e), new i(t))) break;
            return !0;
        case d:
        case f:
        case h:
            return a(+e, +t);
        case p:
            return e.name == t.name && e.message == t.message;
        case m:
        case E:
            return e == t + "";
        case _:
            var T = o;
        case g:
            var C = r & c;
            if ((T || (T = l), e.size != t.size && !C)) break;
            var N = I.get(e);
            if (N) return N == t;
            (r |= u), I.set(e, t);
            var R = s(T(e), T(t), r, A, S, I);
            return I.delete(e), R;
        case b:
            if (v) return v.call(e) == v.call(t);
    }
    return !1;
};
