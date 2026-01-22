var r = n(292528),
    i = n(822452),
    a = n(111898),
    s = n(984982),
    o = n(356769),
    l = n(208007),
    c = n(968294),
    u = n(885606),
    d = n(801777),
    f = n(765405),
    p = n(790318),
    _ = n(261010),
    h = n(405706),
    m = n(720492),
    g = n(788640),
    E = n(926226),
    b = n(758513),
    y = n(232405),
    O = n(646344),
    A = n(641315),
    v = n(750615),
    S = 1,
    I = 2,
    T = 4,
    C = "[object Arguments]",
    N = "[object Array]",
    R = "[object Boolean]",
    w = "[object Date]",
    P = "[object Error]",
    D = "[object Function]",
    x = "[object GeneratorFunction]",
    L = "[object Map]",
    j = "[object Number]",
    M = "[object Object]",
    k = "[object RegExp]",
    U = "[object Set]",
    G = "[object String]",
    V = "[object Symbol]",
    F = "[object WeakMap]",
    B = "[object ArrayBuffer]",
    H = "[object DataView]",
    Y = "[object Float32Array]",
    W = "[object Float64Array]",
    K = "[object Int8Array]",
    z = "[object Int16Array]",
    q = "[object Int32Array]",
    X = "[object Uint8Array]",
    Z = "[object Uint8ClampedArray]",
    Q = "[object Uint16Array]",
    $ = "[object Uint32Array]",
    J = {};
function ee(e, t, n, N, R, w) {
    var P,
        L = t & S,
        j = t & I,
        k = t & T;
    if ((n && (P = R ? n(e, N, R, w) : n(e)), void 0 !== P)) return P;
    if (!O(e)) return e;
    var U = E(e);
    if (U) {
        if (((P = h(e)), !L)) return c(e, P);
    } else {
        var G = _(e),
            V = G == D || G == x;
        if (b(e)) return l(e, L);
        if (G == M || G == C || (V && !R)) {
            if (((P = j || V ? {} : g(e)), !L)) return j ? d(e, o(P, e)) : u(e, s(P, e));
        } else {
            if (!J[G]) return R ? e : {};
            P = m(e, G, L);
        }
    }
    w || (w = new r());
    var F = w.get(e);
    if (F) return F;
    w.set(e, P),
        A(e)
            ? e.forEach(function (r) {
                  P.add(ee(r, t, n, r, e, w));
              })
            : y(e) &&
              e.forEach(function (r, i) {
                  P.set(i, ee(r, t, n, i, e, w));
              });
    var B = k ? (j ? p : f) : j ? keysIn : v,
        H = U ? void 0 : B(e);
    return (
        i(H || e, function (r, i) {
            H && (r = e[(i = r)]), a(P, i, ee(r, t, n, i, e, w));
        }),
        P
    );
}
(J[C] =
    J[N] =
    J[B] =
    J[H] =
    J[R] =
    J[w] =
    J[Y] =
    J[W] =
    J[K] =
    J[z] =
    J[q] =
    J[L] =
    J[j] =
    J[M] =
    J[k] =
    J[U] =
    J[G] =
    J[V] =
    J[X] =
    J[Z] =
    J[Q] =
    J[$] =
        !0),
    (J[P] = J[D] = J[F] = !1),
    (e.exports = ee);
