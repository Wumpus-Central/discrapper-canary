var r = n(939793),
    i = n(861960),
    o = n(777994),
    a = n(326048),
    s = n(688709),
    l = '[object Boolean]',
    c = '[object Date]',
    u = '[object Map]',
    d = '[object Number]',
    f = '[object RegExp]',
    _ = '[object Set]',
    p = '[object String]',
    h = '[object Symbol]',
    m = '[object ArrayBuffer]',
    g = '[object DataView]',
    E = '[object Float32Array]',
    b = '[object Float64Array]',
    y = '[object Int8Array]',
    v = '[object Int16Array]',
    O = '[object Int32Array]',
    I = '[object Uint8Array]',
    S = '[object Uint8ClampedArray]',
    T = '[object Uint16Array]',
    N = '[object Uint32Array]';
e.exports = function (e, t, n) {
    var A = e.constructor;
    switch (t) {
        case m:
            return r(e);
        case l:
        case c:
            return new A(+e);
        case g:
            return i(e, n);
        case E:
        case b:
        case y:
        case v:
        case O:
        case I:
        case S:
        case T:
        case N:
            return s(e, n);
        case u:
            return new A();
        case d:
        case p:
            return new A(e);
        case f:
            return o(e);
        case _:
            return new A();
        case h:
            return a(e);
    }
};
