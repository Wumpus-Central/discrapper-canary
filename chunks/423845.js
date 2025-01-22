var i = r(620014),
    a = r(580755),
    o = r(805100),
    s = r(224760),
    l = r(915212),
    u = r(228057),
    c = r(161984),
    d = r(388456),
    f = r(325512),
    p = r(990393),
    h = r(890179),
    _ = r(65064),
    m = r(207635),
    g = r(354199),
    E = r(671660),
    v = r(402428),
    y = r(207757),
    b = r(397985),
    I = r(706627),
    T = r(822480),
    S = r(58834),
    A = r(453342),
    C = 1,
    N = 2,
    R = 4,
    O = '[object Arguments]',
    D = '[object Array]',
    x = '[object Boolean]',
    L = '[object Date]',
    w = '[object Error]',
    P = '[object Function]',
    M = '[object GeneratorFunction]',
    k = '[object Map]',
    U = '[object Number]',
    B = '[object Object]',
    G = '[object RegExp]',
    Z = '[object Set]',
    F = '[object String]',
    V = '[object Symbol]',
    j = '[object WeakMap]',
    H = '[object ArrayBuffer]',
    Y = '[object DataView]',
    W = '[object Float32Array]',
    K = '[object Float64Array]',
    z = '[object Int8Array]',
    q = '[object Int16Array]',
    Q = '[object Int32Array]',
    X = '[object Uint8Array]',
    J = '[object Uint8ClampedArray]',
    $ = '[object Uint16Array]',
    ee = '[object Uint32Array]',
    et = {};
function en(e, n, r, D, x, L) {
    var w,
        k = n & C,
        U = n & N,
        G = n & R;
    if ((r && (w = x ? r(e, D, x, L) : r(e)), void 0 !== w)) return w;
    if (!I(e)) return e;
    var Z = v(e);
    if (Z) {
        if (((w = m(e)), !k)) return c(e, w);
    } else {
        var F = _(e),
            V = F == P || F == M;
        if (y(e)) return u(e, k);
        if (F == B || F == O || (V && !x)) {
            if (((w = U || V ? {} : E(e)), !k)) return U ? f(e, l(w, e)) : d(e, s(w, e));
        } else {
            if (!et[F]) return x ? e : {};
            w = g(e, F, k);
        }
    }
    L || (L = new i());
    var j = L.get(e);
    if (j) return j;
    L.set(e, w),
        T(e)
            ? e.forEach(function (i) {
                  w.add(en(i, n, r, i, e, L));
              })
            : b(e) &&
              e.forEach(function (i, a) {
                  w.set(a, en(i, n, r, a, e, L));
              });
    var H = G ? (U ? h : p) : U ? A : S,
        Y = Z ? void 0 : H(e);
    return (
        a(Y || e, function (i, a) {
            Y && (i = e[(a = i)]), o(w, a, en(i, n, r, a, e, L));
        }),
        w
    );
}
(et[O] = et[D] = et[H] = et[Y] = et[x] = et[L] = et[W] = et[K] = et[z] = et[q] = et[Q] = et[k] = et[U] = et[B] = et[G] = et[Z] = et[F] = et[V] = et[X] = et[J] = et[$] = et[ee] = !0), (et[w] = et[P] = et[j] = !1), (e.exports = en);
