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
    C = "[object Arguments]",
    N = "[object Array]",
    R = "[object Boolean]",
    P = "[object Date]",
    D = "[object Error]",
    w = "[object Function]",
    L = "[object GeneratorFunction]",
    x = "[object Map]",
    M = "[object Number]",
    k = "[object Object]",
    j = "[object RegExp]",
    U = "[object Set]",
    G = "[object String]",
    B = "[object Symbol]",
    Z = "[object WeakMap]",
    F = "[object ArrayBuffer]",
    V = "[object DataView]",
    H = "[object Float32Array]",
    Y = "[object Float64Array]",
    W = "[object Int8Array]",
    K = "[object Int16Array]",
    z = "[object Int32Array]",
    q = "[object Uint8Array]",
    X = "[object Uint8ClampedArray]",
    Q = "[object Uint16Array]",
    J = "[object Uint32Array]",
    $ = {};
function ee(e, t, n, N, R, P) {
    var D,
        x = t & T,
        M = t & S,
        j = t & A;
    if ((n && (D = R ? n(e, N, R, P) : n(e)), void 0 !== D)) return D;
    if (!O(e)) return e;
    var U = E(e);
    if (U) {
        if (((D = h(e)), !x)) return c(e, D);
    } else {
        var G = p(e),
            B = G == w || G == L;
        if (b(e)) return l(e, x);
        if (G == k || G == C || (B && !R)) {
            if (((D = M || B ? {} : g(e)), !x)) return M ? d(e, s(D, e)) : u(e, o(D, e));
        } else {
            if (!$[G]) return R ? e : {};
            D = m(e, G, x);
        }
    }
    P || (P = new r());
    var Z = P.get(e);
    if (Z) return Z;
    P.set(e, D),
        v(e)
            ? e.forEach(function (r) {
                  D.add(ee(r, t, n, r, e, P));
              })
            : y(e) &&
              e.forEach(function (r, i) {
                  D.set(i, ee(r, t, n, i, e, P));
              });
    var F = j ? (M ? _ : f) : M ? keysIn : I,
        V = U ? void 0 : F(e);
    return (
        i(V || e, function (r, i) {
            V && (r = e[(i = r)]), a(D, i, ee(r, t, n, i, e, P));
        }),
        D
    );
}
($[C] =
    $[N] =
    $[F] =
    $[V] =
    $[R] =
    $[P] =
    $[H] =
    $[Y] =
    $[W] =
    $[K] =
    $[z] =
    $[x] =
    $[M] =
    $[k] =
    $[j] =
    $[U] =
    $[G] =
    $[B] =
    $[q] =
    $[X] =
    $[Q] =
    $[J] =
        !0),
    ($[D] = $[w] = $[Z] = !1),
    (e.exports = ee);
