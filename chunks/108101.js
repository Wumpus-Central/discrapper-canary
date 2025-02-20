var r = n(687249),
    i = n(48889),
    o = n(11537),
    a = n(806867),
    s = n(542334),
    l = n(829815),
    c = n(566131),
    u = n(773151),
    d = n(893741),
    f = n(821164),
    p = n(993106),
    _ = n(53919),
    h = n(247323),
    m = n(609511),
    g = n(292548),
    E = n(290677),
    v = n(551023),
    b = n(118788),
    y = n(661233),
    O = n(357361),
    S = n(438330),
    I = 1,
    T = 2,
    N = 4,
    A = '[object Arguments]',
    C = '[object Array]',
    R = '[object Boolean]',
    P = '[object Date]',
    w = '[object Error]',
    D = '[object Function]',
    x = '[object GeneratorFunction]',
    L = '[object Map]',
    M = '[object Number]',
    k = '[object Object]',
    j = '[object RegExp]',
    U = '[object Set]',
    G = '[object String]',
    B = '[object Symbol]',
    Z = '[object WeakMap]',
    F = '[object ArrayBuffer]',
    V = '[object DataView]',
    H = '[object Float32Array]',
    W = '[object Float64Array]',
    Y = '[object Int8Array]',
    K = '[object Int16Array]',
    z = '[object Int32Array]',
    q = '[object Uint8Array]',
    Q = '[object Uint8ClampedArray]',
    X = '[object Uint16Array]',
    J = '[object Uint32Array]',
    $ = {};
function ee(e, t, n, C, R, P) {
    var w,
        L = t & I,
        M = t & T,
        j = t & N;
    if ((n && (w = R ? n(e, C, R, P) : n(e)), void 0 !== w)) return w;
    if (!y(e)) return e;
    var U = E(e);
    if (U) {
        if (((w = h(e)), !L)) return c(e, w);
    } else {
        var G = _(e),
            B = G == D || G == x;
        if (v(e)) return l(e, L);
        if (G == k || G == A || (B && !R)) {
            if (((w = M || B ? {} : g(e)), !L)) return M ? d(e, s(w, e)) : u(e, a(w, e));
        } else {
            if (!$[G]) return R ? e : {};
            w = m(e, G, L);
        }
    }
    P || (P = new r());
    var Z = P.get(e);
    if (Z) return Z;
    P.set(e, w),
        O(e)
            ? e.forEach(function (r) {
                  w.add(ee(r, t, n, r, e, P));
              })
            : b(e) &&
              e.forEach(function (r, i) {
                  w.set(i, ee(r, t, n, i, e, P));
              });
    var F = j ? (M ? p : f) : M ? keysIn : S,
        V = U ? void 0 : F(e);
    return (
        i(V || e, function (r, i) {
            V && (r = e[(i = r)]), o(w, i, ee(r, t, n, i, e, P));
        }),
        w
    );
}
($[A] = $[C] = $[F] = $[V] = $[R] = $[P] = $[H] = $[W] = $[Y] = $[K] = $[z] = $[L] = $[M] = $[k] = $[j] = $[U] = $[G] = $[B] = $[q] = $[Q] = $[X] = $[J] = !0), ($[w] = $[D] = $[Z] = !1), (e.exports = ee);
