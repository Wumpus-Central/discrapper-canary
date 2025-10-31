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
    w = "[object Error]",
    D = "[object Function]",
    x = "[object GeneratorFunction]",
    L = "[object Map]",
    M = "[object Number]",
    j = "[object Object]",
    k = "[object RegExp]",
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
    var w,
        L = t & T,
        M = t & S,
        k = t & A;
    if ((n && (w = R ? n(e, N, R, P) : n(e)), void 0 !== w)) return w;
    if (!O(e)) return e;
    var U = E(e);
    if (U) {
        if (((w = h(e)), !L)) return c(e, w);
    } else {
        var G = p(e),
            B = G == D || G == x;
        if (b(e)) return l(e, L);
        if (G == j || G == C || (B && !R)) {
            if (((w = M || B ? {} : g(e)), !L)) return M ? d(e, s(w, e)) : u(e, o(w, e));
        } else {
            if (!$[G]) return R ? e : {};
            w = m(e, G, L);
        }
    }
    P || (P = new r());
    var Z = P.get(e);
    if (Z) return Z;
    P.set(e, w),
        v(e)
            ? e.forEach(function (r) {
                  w.add(ee(r, t, n, r, e, P));
              })
            : y(e) &&
              e.forEach(function (r, i) {
                  w.set(i, ee(r, t, n, i, e, P));
              });
    var F = k ? (M ? _ : f) : M ? keysIn : I,
        V = U ? void 0 : F(e);
    return (
        i(V || e, function (r, i) {
            V && (r = e[(i = r)]), a(w, i, ee(r, t, n, i, e, P));
        }),
        w
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
    $[L] =
    $[M] =
    $[j] =
    $[k] =
    $[U] =
    $[G] =
    $[B] =
    $[q] =
    $[X] =
    $[Q] =
    $[J] =
        !0),
    ($[w] = $[D] = $[Z] = !1),
    (e.exports = ee);
