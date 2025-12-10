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
    p = n(993106),
    _ = n(53919),
    m = n(247323),
    h = n(609511),
    g = n(292548),
    E = n(290677),
    b = n(551023),
    y = n(118788),
    O = n(661233),
    v = n(357361),
    S = n(438330),
    I = 1,
    T = 2,
    C = 4,
    A = "[object Arguments]",
    N = "[object Array]",
    P = "[object Boolean]",
    R = "[object Date]",
    D = "[object Error]",
    w = "[object Function]",
    x = "[object GeneratorFunction]",
    L = "[object Map]",
    j = "[object Number]",
    M = "[object Object]",
    k = "[object RegExp]",
    U = "[object Set]",
    G = "[object String]",
    Z = "[object Symbol]",
    B = "[object WeakMap]",
    F = "[object ArrayBuffer]",
    V = "[object DataView]",
    H = "[object Float32Array]",
    Y = "[object Float64Array]",
    W = "[object Int8Array]",
    K = "[object Int16Array]",
    z = "[object Int32Array]",
    q = "[object Uint8Array]",
    Q = "[object Uint8ClampedArray]",
    X = "[object Uint16Array]",
    J = "[object Uint32Array]",
    $ = {};
function ee(e, t, n, N, P, R) {
    var D,
        L = t & I,
        j = t & T,
        k = t & C;
    if ((n && (D = P ? n(e, N, P, R) : n(e)), void 0 !== D)) return D;
    if (!O(e)) return e;
    var U = E(e);
    if (U) {
        if (((D = m(e)), !L)) return c(e, D);
    } else {
        var G = _(e),
            Z = G == w || G == x;
        if (b(e)) return l(e, L);
        if (G == M || G == A || (Z && !P)) {
            if (((D = j || Z ? {} : g(e)), !L)) return j ? d(e, s(D, e)) : u(e, o(D, e));
        } else {
            if (!$[G]) return P ? e : {};
            D = h(e, G, L);
        }
    }
    R || (R = new r());
    var B = R.get(e);
    if (B) return B;
    R.set(e, D),
        v(e)
            ? e.forEach(function (r) {
                  D.add(ee(r, t, n, r, e, R));
              })
            : y(e) &&
              e.forEach(function (r, i) {
                  D.set(i, ee(r, t, n, i, e, R));
              });
    var F = k ? (j ? p : f) : j ? keysIn : S,
        V = U ? void 0 : F(e);
    return (
        i(V || e, function (r, i) {
            V && (r = e[(i = r)]), a(D, i, ee(r, t, n, i, e, R));
        }),
        D
    );
}
($[A] =
    $[N] =
    $[F] =
    $[V] =
    $[P] =
    $[R] =
    $[H] =
    $[Y] =
    $[W] =
    $[K] =
    $[z] =
    $[L] =
    $[j] =
    $[M] =
    $[k] =
    $[U] =
    $[G] =
    $[Z] =
    $[q] =
    $[Q] =
    $[X] =
    $[J] =
        !0),
    ($[D] = $[w] = $[B] = !1),
    (e.exports = ee);
