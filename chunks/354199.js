var r = n(754675),
    i = n(39493),
    a = n(855543),
    o = n(143866),
    s = n(142670),
    l = "[object Boolean]",
    c = "[object Date]",
    u = "[object Map]",
    d = "[object Number]",
    f = "[object RegExp]",
    p = "[object Set]",
    _ = "[object String]",
    m = "[object Symbol]",
    h = "[object ArrayBuffer]",
    g = "[object DataView]",
    E = "[object Float32Array]",
    b = "[object Float64Array]",
    y = "[object Int8Array]",
    O = "[object Int16Array]",
    v = "[object Int32Array]",
    S = "[object Uint8Array]",
    I = "[object Uint8ClampedArray]",
    T = "[object Uint16Array]",
    A = "[object Uint32Array]";
e.exports = function (e, t, n) {
    var C = e.constructor;
    switch (t) {
        case h:
            return r(e);
        case l:
        case c:
            return new C(+e);
        case g:
            return i(e, n);
        case E:
        case b:
        case y:
        case O:
        case v:
        case S:
        case I:
        case T:
        case A:
            return s(e, n);
        case u:
            return new C();
        case d:
        case _:
            return new C(e);
        case f:
            return a(e);
        case p:
            return new C();
        case m:
            return o(e);
    }
};
