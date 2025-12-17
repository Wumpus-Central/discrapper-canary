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
    p = n(890179),
    _ = n(65064),
    m = n(207635),
    h = n(354199),
    g = n(671660),
    E = n(402428),
    b = n(207757),
    y = n(397985),
    O = n(706627),
    v = n(822480),
    S = n(58834),
    I = n(453342),
    T = 1,
    C = 2,
    A = 4,
    N = "[object Arguments]",
    P = "[object Array]",
    R = "[object Boolean]",
    w = "[object Date]",
    D = "[object Error]",
    x = "[object Function]",
    L = "[object GeneratorFunction]",
    j = "[object Map]",
    M = "[object Number]",
    k = "[object Object]",
    U = "[object RegExp]",
    G = "[object Set]",
    Z = "[object String]",
    F = "[object Symbol]",
    B = "[object WeakMap]",
    V = "[object ArrayBuffer]",
    H = "[object DataView]",
    Y = "[object Float32Array]",
    W = "[object Float64Array]",
    K = "[object Int8Array]",
    z = "[object Int16Array]",
    q = "[object Int32Array]",
    Q = "[object Uint8Array]",
    X = "[object Uint8ClampedArray]",
    J = "[object Uint16Array]",
    $ = "[object Uint32Array]",
    ee = {};
function et(e, t, n, P, R, w) {
    var D,
        j = t & T,
        M = t & C,
        U = t & A;
    if ((n && (D = R ? n(e, P, R, w) : n(e)), void 0 !== D)) return D;
    if (!O(e)) return e;
    var G = E(e);
    if (G) {
        if (((D = m(e)), !j)) return c(e, D);
    } else {
        var Z = _(e),
            F = Z == x || Z == L;
        if (b(e)) return l(e, j);
        if (Z == k || Z == N || (F && !R)) {
            if (((D = M || F ? {} : g(e)), !j)) return M ? d(e, s(D, e)) : u(e, o(D, e));
        } else {
            if (!ee[Z]) return R ? e : {};
            D = h(e, Z, j);
        }
    }
    w || (w = new r());
    var B = w.get(e);
    if (B) return B;
    w.set(e, D),
        v(e)
            ? e.forEach(function (r) {
                  D.add(et(r, t, n, r, e, w));
              })
            : y(e) &&
              e.forEach(function (r, i) {
                  D.set(i, et(r, t, n, i, e, w));
              });
    var V = U ? (M ? p : f) : M ? I : S,
        H = G ? void 0 : V(e);
    return (
        i(H || e, function (r, i) {
            H && (r = e[(i = r)]), a(D, i, et(r, t, n, i, e, w));
        }),
        D
    );
}
(ee[N] =
    ee[P] =
    ee[V] =
    ee[H] =
    ee[R] =
    ee[w] =
    ee[Y] =
    ee[W] =
    ee[K] =
    ee[z] =
    ee[q] =
    ee[j] =
    ee[M] =
    ee[k] =
    ee[U] =
    ee[G] =
    ee[Z] =
    ee[F] =
    ee[Q] =
    ee[X] =
    ee[J] =
    ee[$] =
        !0),
    (ee[D] = ee[x] = ee[B] = !1),
    (e.exports = et);
