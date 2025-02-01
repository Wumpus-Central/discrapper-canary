var i = n(620014),
    r = n(580755),
    a = n(805100),
    s = n(224760),
    o = n(915212),
    l = n(228057),
    u = n(161984),
    c = n(388456),
    d = n(325512),
    f = n(990393),
    _ = n(890179),
    p = n(65064),
    h = n(207635),
    m = n(354199),
    g = n(671660),
    E = n(402428),
    v = n(207757),
    y = n(397985),
    I = n(706627),
    T = n(822480),
    b = n(58834),
    S = n(453342),
    A = 1,
    N = 2,
    C = 4,
    R = '[object Arguments]',
    O = '[object Array]',
    D = '[object Boolean]',
    x = '[object Date]',
    L = '[object Error]',
    P = '[object Function]',
    w = '[object GeneratorFunction]',
    M = '[object Map]',
    k = '[object Number]',
    U = '[object Object]',
    G = '[object RegExp]',
    B = '[object Set]',
    Z = '[object String]',
    F = '[object Symbol]',
    V = '[object WeakMap]',
    j = '[object ArrayBuffer]',
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
function et(e, t, n, O, D, x) {
    var L,
        M = t & A,
        k = t & N,
        G = t & C;
    if ((n && (L = D ? n(e, O, D, x) : n(e)), void 0 !== L)) return L;
    if (!I(e)) return e;
    var B = E(e);
    if (B) {
        if (((L = h(e)), !M)) return u(e, L);
    } else {
        var Z = p(e),
            F = Z == P || Z == w;
        if (v(e)) return l(e, M);
        if (Z == U || Z == R || (F && !D)) {
            if (((L = k || F ? {} : g(e)), !M)) return k ? d(e, o(L, e)) : c(e, s(L, e));
        } else {
            if (!ee[Z]) return D ? e : {};
            L = m(e, Z, M);
        }
    }
    x || (x = new i());
    var V = x.get(e);
    if (V) return V;
    x.set(e, L),
        T(e)
            ? e.forEach(function (i) {
                  L.add(et(i, t, n, i, e, x));
              })
            : y(e) &&
              e.forEach(function (i, r) {
                  L.set(r, et(i, t, n, r, e, x));
              });
    var j = G ? (k ? _ : f) : k ? S : b,
        H = B ? void 0 : j(e);
    return (
        r(H || e, function (i, r) {
            H && (i = e[(r = i)]), a(L, r, et(i, t, n, r, e, x));
        }),
        L
    );
}
(ee[R] = ee[O] = ee[j] = ee[H] = ee[D] = ee[x] = ee[Y] = ee[W] = ee[K] = ee[z] = ee[q] = ee[M] = ee[k] = ee[U] = ee[G] = ee[B] = ee[Z] = ee[F] = ee[Q] = ee[X] = ee[J] = ee[$] = !0), (ee[L] = ee[P] = ee[V] = !1), (e.exports = et);
