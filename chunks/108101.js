var r = n(687249),
    i = n(48889),
    a = n(11537),
    o = n(806867),
    s = n(542334),
    l = n(829815),
    c = n(566131),
    u = n(773151),
    d = n(893741),
    _ = n(821164),
    f = n(993106),
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
    R = '[object Boolean]',
    P = '[object Date]',
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
    V = '[object WeakMap]',
    F = '[object ArrayBuffer]',
    Z = '[object DataView]',
    H = '[object Float32Array]',
    Y = '[object Float64Array]',
    W = '[object Int8Array]',
    K = '[object Int16Array]',
    z = '[object Int32Array]',
    q = '[object Uint8Array]',
    X = '[object Uint8ClampedArray]',
    Q = '[object Uint16Array]',
    J = '[object Uint32Array]',
    $ = {};
function ee(e, t, n, C, R, P) {
    var w,
        x = t & T,
        k = t & S,
        j = t & A;
    if ((n && (w = R ? n(e, C, R, P) : n(e)), void 0 !== w)) return w;
    if (!O(e)) return e;
    var U = E(e);
    if (U) {
        if (((w = h(e)), !x)) return c(e, w);
    } else {
        var G = p(e),
            B = G == D || G == L;
        if (b(e)) return l(e, x);
        if (G == M || G == N || (B && !R)) {
            if (((w = k || B ? {} : g(e)), !x)) return k ? d(e, s(w, e)) : u(e, o(w, e));
        } else {
            if (!$[G]) return R ? e : {};
            w = m(e, G, x);
        }
    }
    P || (P = new r());
    var V = P.get(e);
    if (V) return V;
    (P.set(e, w),
        v(e)
            ? e.forEach(function (r) {
                  w.add(ee(r, t, n, r, e, P));
              })
            : y(e) &&
              e.forEach(function (r, i) {
                  w.set(i, ee(r, t, n, i, e, P));
              }));
    var F = j ? (k ? f : _) : k ? keysIn : I,
        Z = U ? void 0 : F(e);
    return (
        i(Z || e, function (r, i) {
            (Z && (r = e[(i = r)]), a(w, i, ee(r, t, n, i, e, P)));
        }),
        w
    );
}
(($[N] = $[C] = $[F] = $[Z] = $[R] = $[P] = $[H] = $[Y] = $[W] = $[K] = $[z] = $[x] = $[k] = $[M] = $[j] = $[U] = $[G] = $[B] = $[q] = $[X] = $[Q] = $[J] = !0), ($[w] = $[D] = $[V] = !1), (e.exports = ee));
