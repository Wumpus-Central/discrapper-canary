var i = r(687249),
    a = r(48889),
    s = r(11537),
    o = r(806867),
    l = r(542334),
    u = r(829815),
    c = r(566131),
    d = r(773151),
    f = r(893741),
    _ = r(821164),
    h = r(993106),
    p = r(53919),
    m = r(247323),
    g = r(609511),
    E = r(292548),
    v = r(290677),
    I = r(551023),
    T = r(118788),
    b = r(661233),
    y = r(357361),
    S = r(438330),
    A = 1,
    N = 2,
    C = 4,
    R = '[object Arguments]',
    O = '[object Array]',
    D = '[object Boolean]',
    L = '[object Date]',
    x = '[object Error]',
    w = '[object Function]',
    P = '[object GeneratorFunction]',
    M = '[object Map]',
    k = '[object Number]',
    U = '[object Object]',
    B = '[object RegExp]',
    G = '[object Set]',
    Z = '[object String]',
    F = '[object Symbol]',
    V = '[object WeakMap]',
    j = '[object ArrayBuffer]',
    H = '[object DataView]',
    Y = '[object Float32Array]',
    W = '[object Float64Array]',
    K = '[object Int8Array]',
    z = '[object Int16Array]',
    q = '[object Int32Array]',
    Q = '[object Uint8Array]',
    X = '[object Uint8ClampedArray]',
    J = '[object Uint16Array]',
    $ = '[object Uint32Array]',
    ee = {};
function et(e, n, r, O, D, L) {
    var x,
        M = n & A,
        k = n & N,
        B = n & C;
    if ((r && (x = D ? r(e, O, D, L) : r(e)), void 0 !== x)) return x;
    if (!b(e)) return e;
    var G = v(e);
    if (G) {
        if (((x = m(e)), !M)) return c(e, x);
    } else {
        var Z = p(e),
            F = Z == w || Z == P;
        if (I(e)) return u(e, M);
        if (Z == U || Z == R || (F && !D)) {
            if (((x = k || F ? {} : E(e)), !M)) return k ? f(e, l(x, e)) : d(e, o(x, e));
        } else {
            if (!ee[Z]) return D ? e : {};
            x = g(e, Z, M);
        }
    }
    L || (L = new i());
    var V = L.get(e);
    if (V) return V;
    L.set(e, x),
        y(e)
            ? e.forEach(function (i) {
                  x.add(et(i, n, r, i, e, L));
              })
            : T(e) &&
              e.forEach(function (i, a) {
                  x.set(a, et(i, n, r, a, e, L));
              });
    var j = B ? (k ? h : _) : k ? keysIn : S,
        H = G ? void 0 : j(e);
    return (
        a(H || e, function (i, a) {
            H && (i = e[(a = i)]), s(x, a, et(i, n, r, a, e, L));
        }),
        x
    );
}
(ee[R] = ee[O] = ee[j] = ee[H] = ee[D] = ee[L] = ee[Y] = ee[W] = ee[K] = ee[z] = ee[q] = ee[M] = ee[k] = ee[U] = ee[B] = ee[G] = ee[Z] = ee[F] = ee[Q] = ee[X] = ee[J] = ee[$] = !0), (ee[x] = ee[w] = ee[V] = !1), (e.exports = et);
