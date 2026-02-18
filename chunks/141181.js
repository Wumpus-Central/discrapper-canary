var r = n(292528),
    i = n(822452),
    s = n(111898),
    a = n(984982),
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
    E = n(788640),
    g = n(926226),
    A = n(758513),
    I = n(232405),
    T = n(646344),
    S = n(641315),
    y = n(750615),
    v = 1,
    N = 2,
    C = 4,
    b = "[object Arguments]",
    R = "[object Array]",
    O = "[object Boolean]",
    D = "[object Date]",
    L = "[object Error]",
    w = "[object Function]",
    x = "[object GeneratorFunction]",
    M = "[object Map]",
    P = "[object Number]",
    k = "[object Object]",
    U = "[object RegExp]",
    G = "[object Set]",
    F = "[object String]",
    V = "[object Symbol]",
    B = "[object WeakMap]",
    H = "[object ArrayBuffer]",
    j = "[object DataView]",
    Y = "[object Float32Array]",
    W = "[object Float64Array]",
    K = "[object Int8Array]",
    z = "[object Int16Array]",
    $ = "[object Int32Array]",
    q = "[object Uint8Array]",
    Z = "[object Uint8ClampedArray]",
    X = "[object Uint16Array]",
    Q = "[object Uint32Array]",
    J = {};
function ee(e, t, n, R, O, D) {
    var L,
        M = t & v,
        P = t & N,
        U = t & C;
    if ((n && (L = O ? n(e, R, O, D) : n(e)), void 0 !== L)) return L;
    if (!T(e)) return e;
    var G = g(e);
    if (G) {
        if (((L = h(e)), !M)) return u(e, L);
    } else {
        var F = p(e),
            V = F == w || F == x;
        if (A(e)) return l(e, M);
        if (F == k || F == b || (V && !O)) {
            if (((L = P || V ? {} : E(e)), !M)) return P ? d(e, o(L, e)) : c(e, a(L, e));
        } else {
            if (!J[F]) return O ? e : {};
            L = m(e, F, M);
        }
    }
    D || (D = new r());
    var B = D.get(e);
    if (B) return B;
    D.set(e, L),
        S(e)
            ? e.forEach(function (r) {
                  L.add(ee(r, t, n, r, e, D));
              })
            : I(e) &&
              e.forEach(function (r, i) {
                  L.set(i, ee(r, t, n, i, e, D));
              });
    var H = U ? (P ? f : _) : P ? keysIn : y,
        j = G ? void 0 : H(e);
    return (
        i(j || e, function (r, i) {
            j && (r = e[(i = r)]), s(L, i, ee(r, t, n, i, e, D));
        }),
        L
    );
}
(J[b] =
    J[R] =
    J[H] =
    J[j] =
    J[O] =
    J[D] =
    J[Y] =
    J[W] =
    J[K] =
    J[z] =
    J[$] =
    J[M] =
    J[P] =
    J[k] =
    J[U] =
    J[G] =
    J[F] =
    J[V] =
    J[q] =
    J[Z] =
    J[X] =
    J[Q] =
        !0),
    (J[L] = J[w] = J[B] = !1),
    (e.exports = ee);
