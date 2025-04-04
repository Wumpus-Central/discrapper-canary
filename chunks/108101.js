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
    _ = n(993106),
    p = n(53919),
    h = n(247323),
    m = n(609511),
    g = n(292548),
    E = n(290677),
    b = n(551023),
    y = n(118788),
    v = n(661233),
    O = n(357361),
    I = n(438330),
    S = 1,
    T = 2,
    N = 4,
    A = '[object Arguments]',
    C = '[object Array]',
    R = '[object Boolean]',
    P = '[object Date]',
    w = '[object Error]',
    D = '[object Function]',
    L = '[object GeneratorFunction]',
    x = '[object Map]',
    M = '[object Number]',
    k = '[object Object]',
    j = '[object RegExp]',
    U = '[object Set]',
    G = '[object String]',
    B = '[object Symbol]',
    F = '[object WeakMap]',
    V = '[object ArrayBuffer]',
    Z = '[object DataView]',
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
        x = t & S,
        M = t & T,
        j = t & N;
    if ((n && (w = R ? n(e, C, R, P) : n(e)), void 0 !== w)) return w;
    if (!v(e)) return e;
    var U = E(e);
    if (U) {
        if (((w = h(e)), !x)) return c(e, w);
    } else {
        var G = p(e),
            B = G == D || G == L;
        if (b(e)) return l(e, x);
        if (G == k || G == A || (B && !R)) {
            if (((w = M || B ? {} : g(e)), !x)) return M ? d(e, s(w, e)) : u(e, a(w, e));
        } else {
            if (!$[G]) return R ? e : {};
            w = m(e, G, x);
        }
    }
    P || (P = new r());
    var F = P.get(e);
    if (F) return F;
    P.set(e, w),
        O(e)
            ? e.forEach(function (r) {
                  w.add(ee(r, t, n, r, e, P));
              })
            : y(e) &&
              e.forEach(function (r, i) {
                  w.set(i, ee(r, t, n, i, e, P));
              });
    var V = j ? (M ? _ : f) : M ? keysIn : I,
        Z = U ? void 0 : V(e);
    return (
        i(Z || e, function (r, i) {
            Z && (r = e[(i = r)]), o(w, i, ee(r, t, n, i, e, P));
        }),
        w
    );
}
($[A] = $[C] = $[V] = $[Z] = $[R] = $[P] = $[H] = $[W] = $[Y] = $[K] = $[z] = $[x] = $[M] = $[k] = $[j] = $[U] = $[G] = $[B] = $[q] = $[Q] = $[X] = $[J] = !0), ($[w] = $[D] = $[F] = !1), (e.exports = ee);
