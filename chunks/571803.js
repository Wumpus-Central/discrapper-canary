var r = n(655405),
    i = n(140893),
    s = n(300823),
    a = n(911521),
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
    E = n(762629),
    g = n(467957),
    A = n(154164),
    I = n(693454),
    T = n(509185),
    S = n(31244),
    y = n(335186),
    v = n(925269),
    N = 1,
    C = 2,
    b = 4,
    R = "[object Arguments]",
    O = "[object Array]",
    D = "[object Boolean]",
    L = "[object Date]",
    w = "[object Error]",
    x = "[object Function]",
    M = "[object GeneratorFunction]",
    P = "[object Map]",
    k = "[object Number]",
    U = "[object Object]",
    G = "[object RegExp]",
    F = "[object Set]",
    V = "[object String]",
    B = "[object Symbol]",
    H = "[object WeakMap]",
    j = "[object ArrayBuffer]",
    Y = "[object DataView]",
    W = "[object Float32Array]",
    K = "[object Float64Array]",
    z = "[object Int8Array]",
    $ = "[object Int16Array]",
    q = "[object Int32Array]",
    Z = "[object Uint8Array]",
    X = "[object Uint8ClampedArray]",
    Q = "[object Uint16Array]",
    J = "[object Uint32Array]",
    ee = {};
function et(e, t, n, O, D, L) {
    var w,
        P = t & N,
        k = t & C,
        G = t & b;
    if ((n && (w = D ? n(e, O, D, L) : n(e)), void 0 !== w)) return w;
    if (!T(e)) return e;
    var F = g(e);
    if (F) {
        if (((w = h(e)), !P)) return u(e, w);
    } else {
        var V = p(e),
            B = V == x || V == M;
        if (A(e)) return l(e, P);
        if (V == U || V == R || (B && !D)) {
            if (((w = k || B ? {} : E(e)), !P)) return k ? d(e, o(w, e)) : c(e, a(w, e));
        } else {
            if (!ee[V]) return D ? e : {};
            w = m(e, V, P);
        }
    }
    L || (L = new r());
    var H = L.get(e);
    if (H) return H;
    L.set(e, w),
        S(e)
            ? e.forEach(function (r) {
                  w.add(et(r, t, n, r, e, L));
              })
            : I(e) &&
              e.forEach(function (r, i) {
                  w.set(i, et(r, t, n, i, e, L));
              });
    var j = G ? (k ? f : _) : k ? v : y,
        Y = F ? void 0 : j(e);
    return (
        i(Y || e, function (r, i) {
            Y && (r = e[(i = r)]), s(w, i, et(r, t, n, i, e, L));
        }),
        w
    );
}
(ee[R] =
    ee[O] =
    ee[j] =
    ee[Y] =
    ee[D] =
    ee[L] =
    ee[W] =
    ee[K] =
    ee[z] =
    ee[$] =
    ee[q] =
    ee[P] =
    ee[k] =
    ee[U] =
    ee[G] =
    ee[F] =
    ee[V] =
    ee[B] =
    ee[Z] =
    ee[X] =
    ee[Q] =
    ee[J] =
        !0),
    (ee[w] = ee[x] = ee[H] = !1),
    (e.exports = et);
