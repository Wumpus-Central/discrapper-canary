var r = n(292528),
    i = n(822452),
    a = n(111898),
    s = n(984982),
    o = n(356769),
    l = n(208007),
    u = n(968294),
    c = n(885606),
    d = n(801777),
    _ = n(765405),
    f = n(790318),
    p = n(261010),
    h = n(405706),
    m = n(720492),
    g = n(788640),
    E = n(926226),
    A = n(758513),
    I = n(232405),
    T = n(646344),
    y = n(641315),
    S = n(750615),
    v = 1,
    C = 2,
    b = 4,
    N = "[object Arguments]",
    R = "[object Array]",
    O = "[object Boolean]",
    D = "[object Date]",
    L = "[object Error]",
    w = "[object Function]",
    x = "[object GeneratorFunction]",
    P = "[object Map]",
    M = "[object Number]",
    k = "[object Object]",
    U = "[object RegExp]",
    G = "[object Set]",
    V = "[object String]",
    F = "[object Symbol]",
    B = "[object WeakMap]",
    j = "[object ArrayBuffer]",
    H = "[object DataView]",
    Y = "[object Float32Array]",
    W = "[object Float64Array]",
    K = "[object Int8Array]",
    z = "[object Int16Array]",
    $ = "[object Int32Array]",
    q = "[object Uint8Array]",
    Z = "[object Uint8ClampedArray]",
    Q = "[object Uint16Array]",
    X = "[object Uint32Array]",
    J = {};
function ee(e, t, n, R, O, D) {
    var L,
        P = t & v,
        M = t & C,
        U = t & b;
    if ((n && (L = O ? n(e, R, O, D) : n(e)), void 0 !== L)) return L;
    if (!T(e)) return e;
    var G = E(e);
    if (G) {
        if (((L = h(e)), !P)) return u(e, L);
    } else {
        var V = p(e),
            F = V == w || V == x;
        if (A(e)) return l(e, P);
        if (V == k || V == N || (F && !O)) {
            if (((L = M || F ? {} : g(e)), !P)) return M ? d(e, o(L, e)) : c(e, s(L, e));
        } else {
            if (!J[V]) return O ? e : {};
            L = m(e, V, P);
        }
    }
    D || (D = new r());
    var B = D.get(e);
    if (B) return B;
    D.set(e, L),
        y(e)
            ? e.forEach(function (r) {
                  L.add(ee(r, t, n, r, e, D));
              })
            : I(e) &&
              e.forEach(function (r, i) {
                  L.set(i, ee(r, t, n, i, e, D));
              });
    var j = U ? (M ? f : _) : M ? keysIn : S,
        H = G ? void 0 : j(e);
    return (
        i(H || e, function (r, i) {
            H && (r = e[(i = r)]), a(L, i, ee(r, t, n, i, e, D));
        }),
        L
    );
}
(J[N] =
    J[R] =
    J[j] =
    J[H] =
    J[O] =
    J[D] =
    J[Y] =
    J[W] =
    J[K] =
    J[z] =
    J[$] =
    J[P] =
    J[M] =
    J[k] =
    J[U] =
    J[G] =
    J[V] =
    J[F] =
    J[q] =
    J[Z] =
    J[Q] =
    J[X] =
        !0),
    (J[L] = J[w] = J[B] = !1),
    (e.exports = ee);
