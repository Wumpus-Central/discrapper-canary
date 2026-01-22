var r = n(655405),
    i = n(140893),
    a = n(300823),
    s = n(911521),
    o = n(377706),
    l = n(960798),
    c = n(672587),
    u = n(974115),
    d = n(819152),
    f = n(220350),
    p = n(820809),
    _ = n(189577),
    h = n(506825),
    m = n(889067),
    g = n(762629),
    E = n(467957),
    b = n(154164),
    y = n(693454),
    O = n(509185),
    A = n(31244),
    v = n(335186),
    S = n(925269),
    I = 1,
    T = 2,
    C = 4,
    N = "[object Arguments]",
    R = "[object Array]",
    w = "[object Boolean]",
    P = "[object Date]",
    D = "[object Error]",
    x = "[object Function]",
    L = "[object GeneratorFunction]",
    j = "[object Map]",
    M = "[object Number]",
    k = "[object Object]",
    U = "[object RegExp]",
    G = "[object Set]",
    V = "[object String]",
    F = "[object Symbol]",
    B = "[object WeakMap]",
    H = "[object ArrayBuffer]",
    Y = "[object DataView]",
    W = "[object Float32Array]",
    K = "[object Float64Array]",
    z = "[object Int8Array]",
    q = "[object Int16Array]",
    X = "[object Int32Array]",
    Z = "[object Uint8Array]",
    Q = "[object Uint8ClampedArray]",
    $ = "[object Uint16Array]",
    J = "[object Uint32Array]",
    ee = {};
function et(e, t, n, R, w, P) {
    var D,
        j = t & I,
        M = t & T,
        U = t & C;
    if ((n && (D = w ? n(e, R, w, P) : n(e)), void 0 !== D)) return D;
    if (!O(e)) return e;
    var G = E(e);
    if (G) {
        if (((D = h(e)), !j)) return c(e, D);
    } else {
        var V = _(e),
            F = V == x || V == L;
        if (b(e)) return l(e, j);
        if (V == k || V == N || (F && !w)) {
            if (((D = M || F ? {} : g(e)), !j)) return M ? d(e, o(D, e)) : u(e, s(D, e));
        } else {
            if (!ee[V]) return w ? e : {};
            D = m(e, V, j);
        }
    }
    P || (P = new r());
    var B = P.get(e);
    if (B) return B;
    P.set(e, D),
        A(e)
            ? e.forEach(function (r) {
                  D.add(et(r, t, n, r, e, P));
              })
            : y(e) &&
              e.forEach(function (r, i) {
                  D.set(i, et(r, t, n, i, e, P));
              });
    var H = U ? (M ? p : f) : M ? S : v,
        Y = G ? void 0 : H(e);
    return (
        i(Y || e, function (r, i) {
            Y && (r = e[(i = r)]), a(D, i, et(r, t, n, i, e, P));
        }),
        D
    );
}
(ee[N] =
    ee[R] =
    ee[H] =
    ee[Y] =
    ee[w] =
    ee[P] =
    ee[W] =
    ee[K] =
    ee[z] =
    ee[q] =
    ee[X] =
    ee[j] =
    ee[M] =
    ee[k] =
    ee[U] =
    ee[G] =
    ee[V] =
    ee[F] =
    ee[Z] =
    ee[Q] =
    ee[$] =
    ee[J] =
        !0),
    (ee[D] = ee[x] = ee[B] = !1),
    (e.exports = et);
