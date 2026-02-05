var r = n(655405),
    i = n(140893),
    a = n(300823),
    s = n(911521),
    o = n(377706),
    l = n(960798),
    u = n(672587),
    c = n(974115),
    d = n(819152),
    _ = n(220350),
    f = n(820809),
    p = n(189577),
    h = n(506825),
    m = n(889067),
    g = n(762629),
    E = n(467957),
    A = n(154164),
    I = n(693454),
    T = n(509185),
    y = n(31244),
    S = n(335186),
    v = n(925269),
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
    V = "[object Set]",
    F = "[object String]",
    B = "[object Symbol]",
    j = "[object WeakMap]",
    H = "[object ArrayBuffer]",
    Y = "[object DataView]",
    W = "[object Float32Array]",
    K = "[object Float64Array]",
    z = "[object Int8Array]",
    $ = "[object Int16Array]",
    q = "[object Int32Array]",
    Z = "[object Uint8Array]",
    Q = "[object Uint8ClampedArray]",
    X = "[object Uint16Array]",
    J = "[object Uint32Array]",
    ee = {};
function et(e, t, n, O, D, L) {
    var w,
        M = t & C,
        k = t & b,
        G = t & N;
    if ((n && (w = D ? n(e, O, D, L) : n(e)), void 0 !== w)) return w;
    if (!T(e)) return e;
    var V = E(e);
    if (V) {
        if (((w = h(e)), !M)) return u(e, w);
    } else {
        var F = p(e),
            B = F == x || F == P;
        if (A(e)) return l(e, M);
        if (F == U || F == R || (B && !D)) {
            if (((w = k || B ? {} : g(e)), !M)) return k ? d(e, o(w, e)) : c(e, s(w, e));
        } else {
            if (!ee[F]) return D ? e : {};
            w = m(e, F, M);
        }
    }
    L || (L = new r());
    var j = L.get(e);
    if (j) return j;
    L.set(e, w),
        y(e)
            ? e.forEach(function (r) {
                  w.add(et(r, t, n, r, e, L));
              })
            : I(e) &&
              e.forEach(function (r, i) {
                  w.set(i, et(r, t, n, i, e, L));
              });
    var H = G ? (k ? f : _) : k ? v : S,
        Y = V ? void 0 : H(e);
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
    ee[z] =
    ee[$] =
    ee[q] =
    ee[M] =
    ee[k] =
    ee[U] =
    ee[G] =
    ee[V] =
    ee[F] =
    ee[B] =
    ee[Z] =
    ee[Q] =
    ee[X] =
    ee[J] =
        !0),
    (ee[w] = ee[x] = ee[j] = !1),
    (e.exports = et);
