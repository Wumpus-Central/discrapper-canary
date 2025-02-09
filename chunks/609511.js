var i = n(939793),
    r = n(861960),
    a = n(777994),
    s = n(326048),
    o = n(688709),
    l = '[object Boolean]',
    u = '[object Date]',
    c = '[object Map]',
    d = '[object Number]',
    f = '[object RegExp]',
    _ = '[object Set]',
    p = '[object String]',
    h = '[object Symbol]',
    m = '[object ArrayBuffer]',
    g = '[object DataView]',
    E = '[object Float32Array]',
    v = '[object Float64Array]',
    y = '[object Int8Array]',
    I = '[object Int16Array]',
    T = '[object Int32Array]',
    b = '[object Uint8Array]',
    S = '[object Uint8ClampedArray]',
    A = '[object Uint16Array]',
    N = '[object Uint32Array]';
function C(e, t, n) {
    var C = e.constructor;
    switch (t) {
        case m:
            return i(e);
        case l:
        case u:
            return new C(+e);
        case g:
            return r(e, n);
        case E:
        case v:
        case y:
        case I:
        case T:
        case b:
        case S:
        case A:
        case N:
            return o(e, n);
        case c:
            return new C();
        case d:
        case p:
            return new C(e);
        case f:
            return a(e);
        case _:
            return new C();
        case h:
            return s(e);
    }
}
e.exports = C;
