var r = n(754675),
    i = n(39493),
    a = n(855543),
    o = n(143866),
    s = n(142670),
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
    O = '[object Int16Array]',
    v = '[object Int32Array]',
    I = '[object Uint8Array]',
    S = '[object Uint8ClampedArray]',
    T = '[object Uint16Array]',
    A = '[object Uint32Array]';
e.exports = function (e, t, n) {
    var N = e.constructor;
    switch (t) {
        case m:
            return r(e);
        case l:
        case c:
            return new N(+e);
        case g:
            return i(e, n);
        case E:
        case b:
        case y:
        case O:
        case v:
        case I:
        case S:
        case T:
        case A:
            return s(e, n);
        case u:
            return new N();
        case d:
        case p:
            return new N(e);
        case f:
            return a(e);
        case _:
            return new N();
        case h:
            return o(e);
    }
};
