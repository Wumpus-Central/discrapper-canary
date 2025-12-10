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
    D = "[object Date]",
    w = "[object Error]",
    x = "[object Function]",
    L = "[object GeneratorFunction]",
    j = "[object Map]",
    M = "[object Number]",
    k = "[object Object]",
    U = "[object RegExp]",
    G = "[object Set]",
    Z = "[object String]",
    B = "[object Symbol]",
    F = "[object WeakMap]",
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
function et(e, t, n, P, R, D) {
    var w,
        j = t & T,
        M = t & C,
        U = t & A;
    if ((n && (w = R ? n(e, P, R, D) : n(e)), void 0 !== w)) return w;
    if (!O(e)) return e;
    var G = E(e);
    if (G) {
        if (((w = m(e)), !j)) return c(e, w);
    } else {
        var Z = _(e),
            B = Z == x || Z == L;
        if (b(e)) return l(e, j);
        if (Z == k || Z == N || (B && !R)) {
            if (((w = M || B ? {} : g(e)), !j)) return M ? d(e, s(w, e)) : u(e, o(w, e));
        } else {
            if (!ee[Z]) return R ? e : {};
            w = h(e, Z, j);
        }
    }
    D || (D = new r());
    var F = D.get(e);
    if (F) return F;
    D.set(e, w),
        v(e)
            ? e.forEach(function (r) {
                  w.add(et(r, t, n, r, e, D));
              })
            : y(e) &&
              e.forEach(function (r, i) {
                  w.set(i, et(r, t, n, i, e, D));
              });
    var V = U ? (M ? p : f) : M ? I : S,
        H = G ? void 0 : V(e);
    return (
        i(H || e, function (r, i) {
            H && (r = e[(i = r)]), a(w, i, et(r, t, n, i, e, D));
        }),
        w
    );
}
(ee[N] =
    ee[P] =
    ee[V] =
    ee[H] =
    ee[R] =
    ee[D] =
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
    ee[B] =
    ee[Q] =
    ee[X] =
    ee[J] =
    ee[$] =
        !0),
    (ee[w] = ee[x] = ee[F] = !1),
    (e.exports = et);
