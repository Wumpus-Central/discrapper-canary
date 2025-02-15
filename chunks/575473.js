var r = a(466293),
    n = a(139069),
    _ = a(703284),
    o = a(501979),
    i = a(98368),
    c = a(433005),
    s = r ? r.prototype : void 0,
    E = s ? s.valueOf : void 0;
t.exports = function (t, e, a, r, s, l, u) {
    switch (a) {
        case '[object DataView]':
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) break;
            (t = t.buffer), (e = e.buffer);
        case '[object ArrayBuffer]':
            if (t.byteLength != e.byteLength || !l(new n(t), new n(e))) break;
            return !0;
        case '[object Boolean]':
        case '[object Date]':
        case '[object Number]':
            return _(+t, +e);
        case '[object Error]':
            return t.name == e.name && t.message == e.message;
        case '[object RegExp]':
        case '[object String]':
            return t == e + '';
        case '[object Map]':
            var I = i;
        case '[object Set]':
            var R = 1 & r;
            if ((I || (I = c), t.size != e.size && !R)) break;
            var d = u.get(t);
            if (d) return d == e;
            (r |= 2), u.set(t, e);
            var A = o(I(t), I(e), r, s, l, u);
            return u.delete(t), A;
        case '[object Symbol]':
            if (E) return E.call(t) == E.call(e);
    }
    return !1;
};
