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
    h = n(189577),
    p = n(506825),
    g = n(889067),
    E = n(762629),
    A = n(467957),
    I = n(154164),
    T = n(693454),
    y = n(509185),
    S = n(31244),
    v = n(335186),
    C = n(925269),
    b = 1,
    N = 2,
    R = 4,
    O = "[object Arguments]",
    D = "[object Array]",
    L = "[object Boolean]",
    w = "[object Date]",
    x = "[object Error]",
    P = "[object Function]",
    M = "[object GeneratorFunction]",
    k = "[object Map]",
    U = "[object Number]",
    G = "[object Object]",
    F = "[object RegExp]",
    V = "[object Set]",
    B = "[object String]",
    j = "[object Symbol]",
    H = "[object WeakMap]",
    Y = "[object ArrayBuffer]",
    W = "[object DataView]",
    K = "[object Float32Array]",
    $ = "[object Float64Array]",
    z = "[object Int8Array]",
    q = "[object Int16Array]",
    X = "[object Int32Array]",
    Z = "[object Uint8Array]",
    Q = "[object Uint8ClampedArray]",
    J = "[object Uint16Array]",
    ee = "[object Uint32Array]",
    et = {};
function en(e, t, n, D, L, w) {
    var x,
        k = t & b,
        U = t & N,
        F = t & R;
    if ((n && (x = L ? n(e, D, L, w) : n(e)), void 0 !== x)) return x;
    if (!y(e)) return e;
    var V = A(e);
    if (V) {
        if (((x = p(e)), !k)) return u(e, x);
    } else {
        var B = h(e),
            j = B == P || B == M;
        if (I(e)) return l(e, k);
        if (B == G || B == O || (j && !L)) {
            if (((x = U || j ? {} : E(e)), !k)) return U ? d(e, o(x, e)) : c(e, s(x, e));
        } else {
            if (!et[B]) return L ? e : {};
            x = g(e, B, k);
        }
    }
    w || (w = new r());
    var H = w.get(e);
    if (H) return H;
    w.set(e, x),
        S(e)
            ? e.forEach(function (r) {
                  x.add(en(r, t, n, r, e, w));
              })
            : T(e) &&
              e.forEach(function (r, i) {
                  x.set(i, en(r, t, n, i, e, w));
              });
    var Y = F ? (U ? f : _) : U ? C : v,
        W = V ? void 0 : Y(e);
    return (
        i(W || e, function (r, i) {
            W && (r = e[(i = r)]), a(x, i, en(r, t, n, i, e, w));
        }),
        x
    );
}
(et[O] =
    et[D] =
    et[Y] =
    et[W] =
    et[L] =
    et[w] =
    et[K] =
    et[$] =
    et[z] =
    et[q] =
    et[X] =
    et[k] =
    et[U] =
    et[G] =
    et[F] =
    et[V] =
    et[B] =
    et[j] =
    et[Z] =
    et[Q] =
    et[J] =
    et[ee] =
        !0),
    (et[x] = et[P] = et[H] = !1),
    (e.exports = en);
