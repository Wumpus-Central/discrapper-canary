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
    S = n(453342),
    T = 1,
    A = 2,
    N = 4,
    C = '[object Arguments]',
    R = '[object Array]',
    P = '[object Boolean]',
    w = '[object Date]',
    D = '[object Error]',
    L = '[object Function]',
    x = '[object GeneratorFunction]',
    M = '[object Map]',
    k = '[object Number]',
    j = '[object Object]',
    U = '[object RegExp]',
    G = '[object Set]',
    B = '[object String]',
    V = '[object Symbol]',
    F = '[object WeakMap]',
    Z = '[object ArrayBuffer]',
    H = '[object DataView]',
    Y = '[object Float32Array]',
    W = '[object Float64Array]',
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
        k = t & A,
        U = t & N;
    if ((n && (D = P ? n(e, R, P, w) : n(e)), void 0 !== D)) return D;
    if (!O(e)) return e;
    var G = E(e);
    if (G) {
        if (((D = h(e)), !M)) return c(e, D);
    } else {
        var B = p(e),
            V = B == L || B == x;
        if (b(e)) return l(e, M);
        if (B == j || B == C || (V && !P)) {
            if (((D = k || V ? {} : g(e)), !M)) return k ? d(e, s(D, e)) : u(e, o(D, e));
        } else {
            if (!ee[B]) return P ? e : {};
            D = m(e, B, M);
        }
    }
    w || (w = new r());
    var F = w.get(e);
    if (F) return F;
    w.set(e, D),
        v(e)
            ? e.forEach(function (r) {
                  D.add(et(r, t, n, r, e, w));
              })
            : y(e) &&
              e.forEach(function (r, i) {
                  D.set(i, et(r, t, n, i, e, w));
              });
    var Z = U ? (k ? _ : f) : k ? S : I,
        H = G ? void 0 : Z(e);
    return (
        i(H || e, function (r, i) {
            H && (r = e[(i = r)]), a(D, i, et(r, t, n, i, e, w));
        }),
        D
    );
}
(ee[C] = ee[R] = ee[Z] = ee[H] = ee[P] = ee[w] = ee[Y] = ee[W] = ee[K] = ee[z] = ee[q] = ee[M] = ee[k] = ee[j] = ee[U] = ee[G] = ee[B] = ee[V] = ee[Q] = ee[X] = ee[J] = ee[$] = !0), (ee[D] = ee[L] = ee[F] = !1), (e.exports = et);
