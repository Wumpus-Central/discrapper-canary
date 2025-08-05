var r = n(687249),
    i = n(48889),
    a = n(11537),
    o = n(806867),
    s = n(542334),
    l = n(829815),
    c = n(566131),
    u = n(773151),
    d = n(893741),
    f = n(821164),
    _ = n(993106),
    p = n(53919),
    h = n(247323),
    m = n(609511),
    g = n(292548),
    E = n(290677),
    b = n(551023),
    y = n(118788),
    O = n(661233),
    v = n(357361),
    I = n(438330),
    T = 1,
    S = 2,
    A = 4,
    N = '[object Arguments]',
    C = '[object Array]',
    w = '[object Boolean]',
    R = '[object Date]',
    P = '[object Error]',
    D = '[object Function]',
    L = '[object GeneratorFunction]',
    x = '[object Map]',
    k = '[object Number]',
    j = '[object Object]',
    M = '[object RegExp]',
    U = '[object Set]',
    G = '[object String]',
    B = '[object Symbol]',
    Z = '[object WeakMap]',
    F = '[object ArrayBuffer]',
    V = '[object DataView]',
    H = '[object Float32Array]',
    Y = '[object Float64Array]',
    W = '[object Int8Array]',
    K = '[object Int16Array]',
    z = '[object Int32Array]',
    q = '[object Uint8Array]',
    $ = '[object Uint8ClampedArray]',
    X = '[object Uint16Array]',
    Q = '[object Uint32Array]',
    J = {};
function ee(e, t, n, C, w, R) {
    var P,
        x = t & T,
        k = t & S,
        M = t & A;
    if ((n && (P = w ? n(e, C, w, R) : n(e)), void 0 !== P)) return P;
    if (!O(e)) return e;
    var U = E(e);
    if (U) {
        if (((P = h(e)), !x)) return c(e, P);
    } else {
        var G = p(e),
            B = G == D || G == L;
        if (b(e)) return l(e, x);
        if (G == j || G == N || (B && !w)) {
            if (((P = k || B ? {} : g(e)), !x)) return k ? d(e, s(P, e)) : u(e, o(P, e));
        } else {
            if (!J[G]) return w ? e : {};
            P = m(e, G, x);
        }
    }
    R || (R = new r());
    var Z = R.get(e);
    if (Z) return Z;
    (R.set(e, P),
        v(e)
            ? e.forEach(function (r) {
                  P.add(ee(r, t, n, r, e, R));
              })
            : y(e) &&
              e.forEach(function (r, i) {
                  P.set(i, ee(r, t, n, i, e, R));
              }));
    var F = M ? (k ? _ : f) : k ? keysIn : I,
        V = U ? void 0 : F(e);
    return (
        i(V || e, function (r, i) {
            (V && (r = e[(i = r)]), a(P, i, ee(r, t, n, i, e, R)));
        }),
        P
    );
}
((J[N] = J[C] = J[F] = J[V] = J[w] = J[R] = J[H] = J[Y] = J[W] = J[K] = J[z] = J[x] = J[k] = J[j] = J[M] = J[U] = J[G] = J[B] = J[q] = J[$] = J[X] = J[Q] = !0), (J[P] = J[D] = J[Z] = !1), (e.exports = ee));
