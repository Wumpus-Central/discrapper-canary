var i = r(687249),
    a = r(48889),
    o = r(11537),
    s = r(806867),
    l = r(542334),
    u = r(829815),
    c = r(566131),
    d = r(773151),
    f = r(893741),
    p = r(821164),
    h = r(993106),
    _ = r(53919),
    m = r(247323),
    g = r(609511),
    E = r(292548),
    v = r(290677),
    y = r(551023),
    b = r(118788),
    I = r(661233),
    T = r(357361),
    S = r(438330),
    A = 1,
    C = 2,
    N = 4,
    R = '[object Arguments]',
    O = '[object Array]',
    D = '[object Boolean]',
    x = '[object Date]',
    L = '[object Error]',
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
function et(e, n, r, O, D, x) {
    var L,
        M = n & A,
        k = n & C,
        B = n & N;
    if ((r && (L = D ? r(e, O, D, x) : r(e)), void 0 !== L)) return L;
    if (!I(e)) return e;
    var G = v(e);
    if (G) {
        if (((L = m(e)), !M)) return c(e, L);
    } else {
        var Z = _(e),
            F = Z == w || Z == P;
        if (y(e)) return u(e, M);
        if (Z == U || Z == R || (F && !D)) {
            if (((L = k || F ? {} : E(e)), !M)) return k ? f(e, l(L, e)) : d(e, s(L, e));
        } else {
            if (!ee[Z]) return D ? e : {};
            L = g(e, Z, M);
        }
    }
    x || (x = new i());
    var V = x.get(e);
    if (V) return V;
    x.set(e, L),
        T(e)
            ? e.forEach(function (i) {
                  L.add(et(i, n, r, i, e, x));
              })
            : b(e) &&
              e.forEach(function (i, a) {
                  L.set(a, et(i, n, r, a, e, x));
              });
    var j = B ? (k ? h : p) : k ? keysIn : S,
        H = G ? void 0 : j(e);
    return (
        a(H || e, function (i, a) {
            H && (i = e[(a = i)]), o(L, a, et(i, n, r, a, e, x));
        }),
        L
    );
}
(ee[R] = ee[O] = ee[j] = ee[H] = ee[D] = ee[x] = ee[Y] = ee[W] = ee[K] = ee[z] = ee[q] = ee[M] = ee[k] = ee[U] = ee[B] = ee[G] = ee[Z] = ee[F] = ee[Q] = ee[X] = ee[J] = ee[$] = !0), (ee[L] = ee[w] = ee[V] = !1), (e.exports = et);
