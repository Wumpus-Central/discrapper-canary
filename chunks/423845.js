var r = n(620014),
    i = n(580755),
    o = n(805100),
    a = n(224760),
    s = n(915212),
    l = n(228057),
    c = n(161984),
    u = n(388456),
    d = n(325512),
    f = n(990393),
    p = n(890179),
    _ = n(65064),
    h = n(207635),
    m = n(354199),
    g = n(671660),
    E = n(402428),
    v = n(207757),
    b = n(397985),
    y = n(706627),
    O = n(822480),
    S = n(58834),
    I = n(453342),
    T = 1,
    N = 2,
    A = 4,
    C = '[object Arguments]',
    R = '[object Array]',
    P = '[object Boolean]',
    w = '[object Date]',
    D = '[object Error]',
    x = '[object Function]',
    L = '[object GeneratorFunction]',
    M = '[object Map]',
    k = '[object Number]',
    j = '[object Object]',
    U = '[object RegExp]',
    G = '[object Set]',
    B = '[object String]',
    Z = '[object Symbol]',
    F = '[object WeakMap]',
    V = '[object ArrayBuffer]',
    H = '[object DataView]',
    W = '[object Float32Array]',
    Y = '[object Float64Array]',
    K = '[object Int8Array]',
    z = '[object Int16Array]',
    q = '[object Int32Array]',
    Q = '[object Uint8Array]',
    X = '[object Uint8ClampedArray]',
    J = '[object Uint16Array]',
    $ = '[object Uint32Array]',
    ee = {};
function et(e, t, n, R, P, w) {
    var D,
        M = t & T,
        k = t & N,
        U = t & A;
    if ((n && (D = P ? n(e, R, P, w) : n(e)), void 0 !== D)) return D;
    if (!y(e)) return e;
    var G = E(e);
    if (G) {
        if (((D = h(e)), !M)) return c(e, D);
    } else {
        var B = _(e),
            Z = B == x || B == L;
        if (v(e)) return l(e, M);
        if (B == j || B == C || (Z && !P)) {
            if (((D = k || Z ? {} : g(e)), !M)) return k ? d(e, s(D, e)) : u(e, a(D, e));
        } else {
            if (!ee[B]) return P ? e : {};
            D = m(e, B, M);
        }
    }
    w || (w = new r());
    var F = w.get(e);
    if (F) return F;
    w.set(e, D),
        O(e)
            ? e.forEach(function (r) {
                  D.add(et(r, t, n, r, e, w));
              })
            : b(e) &&
              e.forEach(function (r, i) {
                  D.set(i, et(r, t, n, i, e, w));
              });
    var V = U ? (k ? p : f) : k ? I : S,
        H = G ? void 0 : V(e);
    return (
        i(H || e, function (r, i) {
            H && (r = e[(i = r)]), o(D, i, et(r, t, n, i, e, w));
        }),
        D
    );
}
(ee[C] = ee[R] = ee[V] = ee[H] = ee[P] = ee[w] = ee[W] = ee[Y] = ee[K] = ee[z] = ee[q] = ee[M] = ee[k] = ee[j] = ee[U] = ee[G] = ee[B] = ee[Z] = ee[Q] = ee[X] = ee[J] = ee[$] = !0), (ee[D] = ee[x] = ee[F] = !1), (e.exports = et);
