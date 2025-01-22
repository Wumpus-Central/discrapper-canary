var i = r(939793),
    a = r(861960),
    o = r(777994),
    s = r(326048),
    l = r(688709),
    u = '[object Boolean]',
    c = '[object Date]',
    d = '[object Map]',
    f = '[object Number]',
    p = '[object RegExp]',
    h = '[object Set]',
    _ = '[object String]',
    m = '[object Symbol]',
    g = '[object ArrayBuffer]',
    E = '[object DataView]',
    v = '[object Float32Array]',
    y = '[object Float64Array]',
    b = '[object Int8Array]',
    I = '[object Int16Array]',
    T = '[object Int32Array]',
    S = '[object Uint8Array]',
    A = '[object Uint8ClampedArray]',
    C = '[object Uint16Array]',
    N = '[object Uint32Array]';
function R(e, n, r) {
    var R = e.constructor;
    switch (n) {
        case g:
            return i(e);
        case u:
        case c:
            return new R(+e);
        case E:
            return a(e, r);
        case v:
        case y:
        case b:
        case I:
        case T:
        case S:
        case A:
        case C:
        case N:
            return l(e, r);
        case d:
            return new R();
        case f:
        case _:
            return new R(e);
        case p:
            return o(e);
        case h:
            return new R();
        case m:
            return s(e);
    }
}
e.exports = R;
