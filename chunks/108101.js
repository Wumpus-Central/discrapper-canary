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
    O = n(661233),
    v = n(357361),
    I = n(438330),
    S = 1,
    T = 2,
    A = 4,
    N = '[object Arguments]',
    C = '[object Array]',
    P = '[object Boolean]',
    R = '[object Date]',
    w = '[object Error]',
    D = '[object Function]',
    L = '[object GeneratorFunction]',
    x = '[object Map]',
    k = '[object Number]',
    M = '[object Object]',
    j = '[object RegExp]',
    U = '[object Set]',
    G = '[object String]',
    B = '[object Symbol]',
    F = '[object WeakMap]',
    V = '[object ArrayBuffer]',
    Z = '[object DataView]',
    H = '[object Float32Array]',
    Y = '[object Float64Array]',
    W = '[object Int8Array]',
    K = '[object Int16Array]',
    z = '[object Int32Array]',
    q = '[object Uint8Array]',
    Q = '[object Uint8ClampedArray]',
    X = '[object Uint16Array]',
    J = '[object Uint32Array]',
    $ = {};
function ee(e, t, n, C, P, R) {
    var w,
        x = t & S,
        k = t & T,
        j = t & A;
    if ((n && (w = P ? n(e, C, P, R) : n(e)), void 0 !== w)) return w;
    if (!O(e)) return e;
    var U = E(e);
    if (U) {
        if (((w = h(e)), !x)) return c(e, w);
    } else {
        var G = p(e),
            B = G == D || G == L;
        if (b(e)) return l(e, x);
        if (G == M || G == N || (B && !P)) {
            if (((w = k || B ? {} : g(e)), !x)) return k ? d(e, s(w, e)) : u(e, a(w, e));
        } else {
            if (!$[G]) return P ? e : {};
            w = m(e, G, x);
        }
    }
    R || (R = new r());
    var F = R.get(e);
    if (F) return F;
    R.set(e, w),
        v(e)
            ? e.forEach(function (r) {
                  w.add(ee(r, t, n, r, e, R));
              })
            : y(e) &&
              e.forEach(function (r, i) {
                  w.set(i, ee(r, t, n, i, e, R));
              });
    var V = j ? (k ? _ : f) : k ? keysIn : I,
        Z = U ? void 0 : V(e);
    return (
        i(Z || e, function (r, i) {
            Z && (r = e[(i = r)]), o(w, i, ee(r, t, n, i, e, R));
        }),
        w
    );
}
($[N] = $[C] = $[V] = $[Z] = $[P] = $[R] = $[H] = $[Y] = $[W] = $[K] = $[z] = $[x] = $[k] = $[M] = $[j] = $[U] = $[G] = $[B] = $[q] = $[Q] = $[X] = $[J] = !0), ($[w] = $[D] = $[F] = !1), (e.exports = ee);
