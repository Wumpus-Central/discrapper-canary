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
    h = n(261010),
    p = n(405706),
    g = n(720492),
    E = n(788640),
    A = n(926226),
    I = n(758513),
    T = n(232405),
    y = n(646344),
    S = n(641315),
    v = n(750615),
    C = 1,
    b = 2,
    N = 4,
    R = "[object Arguments]",
    O = "[object Array]",
    D = "[object Boolean]",
    L = "[object Date]",
    w = "[object Error]",
    x = "[object Function]",
    P = "[object GeneratorFunction]",
    M = "[object Map]",
    k = "[object Number]",
    U = "[object Object]",
    G = "[object RegExp]",
    F = "[object Set]",
    V = "[object String]",
    B = "[object Symbol]",
    j = "[object WeakMap]",
    H = "[object ArrayBuffer]",
    Y = "[object DataView]",
    W = "[object Float32Array]",
    K = "[object Float64Array]",
    $ = "[object Int8Array]",
    z = "[object Int16Array]",
    q = "[object Int32Array]",
    X = "[object Uint8Array]",
    Z = "[object Uint8ClampedArray]",
    Q = "[object Uint16Array]",
    J = "[object Uint32Array]",
    ee = {};
function et(e, t, n, O, D, L) {
    var w,
        M = t & C,
        k = t & b,
        G = t & N;
    if ((n && (w = D ? n(e, O, D, L) : n(e)), void 0 !== w)) return w;
    if (!y(e)) return e;
    var F = A(e);
    if (F) {
        if (((w = p(e)), !M)) return u(e, w);
    } else {
        var V = h(e),
            B = V == x || V == P;
        if (I(e)) return l(e, M);
        if (V == U || V == R || (B && !D)) {
            if (((w = k || B ? {} : E(e)), !M)) return k ? d(e, o(w, e)) : c(e, s(w, e));
        } else {
            if (!ee[V]) return D ? e : {};
            w = g(e, V, M);
        }
    }
    L || (L = new r());
    var j = L.get(e);
    if (j) return j;
    L.set(e, w),
        S(e)
            ? e.forEach(function (r) {
                  w.add(et(r, t, n, r, e, L));
              })
            : T(e) &&
              e.forEach(function (r, i) {
                  w.set(i, et(r, t, n, i, e, L));
              });
    var H = G ? (k ? f : _) : k ? keysIn : v,
        Y = F ? void 0 : H(e);
    return (
        i(Y || e, function (r, i) {
            Y && (r = e[(i = r)]), a(w, i, et(r, t, n, i, e, L));
        }),
        w
    );
}
(ee[R] =
    ee[O] =
    ee[H] =
    ee[Y] =
    ee[D] =
    ee[L] =
    ee[W] =
    ee[K] =
    ee[$] =
    ee[z] =
    ee[q] =
    ee[M] =
    ee[k] =
    ee[U] =
    ee[G] =
    ee[F] =
    ee[V] =
    ee[B] =
    ee[X] =
    ee[Z] =
    ee[Q] =
    ee[J] =
        !0),
    (ee[w] = ee[x] = ee[j] = !1),
    (e.exports = et);
