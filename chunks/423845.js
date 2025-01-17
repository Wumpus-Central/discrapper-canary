var i = r(620014),
    a = r(580755),
    s = r(805100),
    o = r(224760),
    l = r(915212),
    u = r(228057),
    c = r(161984),
    d = r(388456),
    f = r(325512),
    _ = r(990393),
    h = r(890179),
    p = r(65064),
    m = r(207635),
    g = r(354199),
    E = r(671660),
    v = r(402428),
    I = r(207757),
    T = r(397985),
    b = r(706627),
    y = r(822480),
    S = r(58834),
    A = r(453342),
    N = 1,
    C = 2,
    R = 4,
    O = '[object Arguments]',
    D = '[object Array]',
    L = '[object Boolean]',
    x = '[object Date]',
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
function en(e, n, r, D, L, x) {
    var w,
        k = n & N,
        U = n & C,
        G = n & R;
    if ((r && (w = L ? r(e, D, L, x) : r(e)), void 0 !== w)) return w;
    if (!b(e)) return e;
    var Z = v(e);
    if (Z) {
        if (((w = m(e)), !k)) return c(e, w);
    } else {
        var F = p(e),
            V = F == P || F == M;
        if (I(e)) return u(e, k);
        if (F == B || F == O || (V && !L)) {
            if (((w = U || V ? {} : E(e)), !k)) return U ? f(e, l(w, e)) : d(e, o(w, e));
        } else {
            if (!et[F]) return L ? e : {};
            w = g(e, F, k);
        }
    }
    x || (x = new i());
    var j = x.get(e);
    if (j) return j;
    x.set(e, w),
        y(e)
            ? e.forEach(function (i) {
                  w.add(en(i, n, r, i, e, x));
              })
            : T(e) &&
              e.forEach(function (i, a) {
                  w.set(a, en(i, n, r, a, e, x));
              });
    var H = G ? (U ? h : _) : U ? A : S,
        Y = Z ? void 0 : H(e);
    return (
        a(Y || e, function (i, a) {
            Y && (i = e[(a = i)]), s(w, a, en(i, n, r, a, e, x));
        }),
        w
    );
}
(et[O] = et[D] = et[H] = et[Y] = et[L] = et[x] = et[W] = et[K] = et[z] = et[q] = et[Q] = et[k] = et[U] = et[B] = et[G] = et[Z] = et[F] = et[V] = et[X] = et[J] = et[$] = et[ee] = !0), (et[w] = et[P] = et[j] = !1), (e.exports = en);
