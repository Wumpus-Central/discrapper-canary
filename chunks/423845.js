var r = n(620014),
    i = n(580755),
    a = n(805100),
    o = n(224760),
    s = n(915212),
    l = n(228057),
    c = n(161984),
    u = n(388456),
    d = n(325512),
    f = n(990393),
    _ = n(890179),
    p = n(65064),
    h = n(207635),
    m = n(354199),
    g = n(671660),
    E = n(402428),
    b = n(207757),
    y = n(397985),
    O = n(706627),
    v = n(822480),
    I = n(58834),
    T = n(453342),
    S = 1,
    A = 2,
    N = 4,
    C = '[object Arguments]',
    w = '[object Array]',
    R = '[object Boolean]',
    P = '[object Date]',
    D = '[object Error]',
    L = '[object Function]',
    x = '[object GeneratorFunction]',
    k = '[object Map]',
    j = '[object Number]',
    M = '[object Object]',
    U = '[object RegExp]',
    G = '[object Set]',
    B = '[object String]',
    Z = '[object Symbol]',
    F = '[object WeakMap]',
    V = '[object ArrayBuffer]',
    H = '[object DataView]',
    Y = '[object Float32Array]',
    W = '[object Float64Array]',
    K = '[object Int8Array]',
    z = '[object Int16Array]',
    q = '[object Int32Array]',
    $ = '[object Uint8Array]',
    X = '[object Uint8ClampedArray]',
    Q = '[object Uint16Array]',
    J = '[object Uint32Array]',
    ee = {};
function et(e, t, n, w, R, P) {
    var D,
        k = t & S,
        j = t & A,
        U = t & N;
    if ((n && (D = R ? n(e, w, R, P) : n(e)), void 0 !== D)) return D;
    if (!O(e)) return e;
    var G = E(e);
    if (G) {
        if (((D = h(e)), !k)) return c(e, D);
    } else {
        var B = p(e),
            Z = B == L || B == x;
        if (b(e)) return l(e, k);
        if (B == M || B == C || (Z && !R)) {
            if (((D = j || Z ? {} : g(e)), !k)) return j ? d(e, s(D, e)) : u(e, o(D, e));
        } else {
            if (!ee[B]) return R ? e : {};
            D = m(e, B, k);
        }
    }
    P || (P = new r());
    var F = P.get(e);
    if (F) return F;
    (P.set(e, D),
        v(e)
            ? e.forEach(function (r) {
                  D.add(et(r, t, n, r, e, P));
              })
            : y(e) &&
              e.forEach(function (r, i) {
                  D.set(i, et(r, t, n, i, e, P));
              }));
    var V = U ? (j ? _ : f) : j ? T : I,
        H = G ? void 0 : V(e);
    return (
        i(H || e, function (r, i) {
            (H && (r = e[(i = r)]), a(D, i, et(r, t, n, i, e, P)));
        }),
        D
    );
}
((ee[C] = ee[w] = ee[V] = ee[H] = ee[R] = ee[P] = ee[Y] = ee[W] = ee[K] = ee[z] = ee[q] = ee[k] = ee[j] = ee[M] = ee[U] = ee[G] = ee[B] = ee[Z] = ee[$] = ee[X] = ee[Q] = ee[J] = !0), (ee[D] = ee[L] = ee[F] = !1), (e.exports = et));
