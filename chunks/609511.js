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
    p = '[object Set]',
    _ = '[object String]',
    h = '[object Symbol]',
    m = '[object ArrayBuffer]',
    g = '[object DataView]',
    E = '[object Float32Array]',
    v = '[object Float64Array]',
    b = '[object Int8Array]',
    y = '[object Int16Array]',
    O = '[object Int32Array]',
    S = '[object Uint8Array]',
    I = '[object Uint8ClampedArray]',
    T = '[object Uint16Array]',
    N = '[object Uint32Array]';
function A(e, t, n) {
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
        case v:
        case b:
        case y:
        case O:
        case S:
        case I:
        case T:
        case N:
            return s(e, n);
        case u:
            return new A();
        case d:
        case _:
            return new A(e);
        case f:
            return o(e);
        case p:
            return new A();
        case h:
            return a(e);
    }
}
e.exports = A;
