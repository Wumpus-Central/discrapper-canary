var i = n(687249),
    r = n(48889),
    a = n(11537),
    s = n(806867),
    o = n(542334),
    l = n(829815),
    u = n(566131),
    c = n(773151),
    d = n(893741),
    f = n(821164),
    _ = n(993106),
    p = n(53919),
    h = n(247323),
    m = n(609511),
    g = n(292548),
    E = n(290677),
    v = n(551023),
    y = n(118788),
    I = n(661233),
    T = n(357361),
    b = n(438330),
    S = 1,
    A = 2,
    N = 4,
    C = '[object Arguments]',
    R = '[object Array]',
    O = '[object Boolean]',
    D = '[object Date]',
    L = '[object Error]',
    x = '[object Function]',
    w = '[object GeneratorFunction]',
    P = '[object Map]',
    M = '[object Number]',
    k = '[object Object]',
    U = '[object RegExp]',
    G = '[object Set]',
    B = '[object String]',
    Z = '[object Symbol]',
    F = '[object WeakMap]',
    V = '[object ArrayBuffer]',
    j = '[object DataView]',
    H = '[object Float32Array]',
    Y = '[object Float64Array]',
    W = '[object Int8Array]',
    K = '[object Int16Array]',
    z = '[object Int32Array]',
    q = '[object Uint8Array]',
    Q = '[object Uint8ClampedArray]',
    X = '[object Uint16Array]',
    J = '[object Uint32Array]',
    $ = {};
function ee(e, t, n, R, O, D) {
    var L,
        P = t & S,
        M = t & A,
        U = t & N;
    if ((n && (L = O ? n(e, R, O, D) : n(e)), void 0 !== L)) return L;
    if (!I(e)) return e;
    var G = E(e);
    if (G) {
        if (((L = h(e)), !P)) return u(e, L);
    } else {
        var B = p(e),
            Z = B == x || B == w;
        if (v(e)) return l(e, P);
        if (B == k || B == C || (Z && !O)) {
            if (((L = M || Z ? {} : g(e)), !P)) return M ? d(e, o(L, e)) : c(e, s(L, e));
        } else {
            if (!$[B]) return O ? e : {};
            L = m(e, B, P);
        }
    }
    D || (D = new i());
    var F = D.get(e);
    if (F) return F;
    D.set(e, L),
        T(e)
            ? e.forEach(function (i) {
                  L.add(ee(i, t, n, i, e, D));
              })
            : y(e) &&
              e.forEach(function (i, r) {
                  L.set(r, ee(i, t, n, r, e, D));
              });
    var V = U ? (M ? _ : f) : M ? keysIn : b,
        j = G ? void 0 : V(e);
    return (
        r(j || e, function (i, r) {
            j && (i = e[(r = i)]), a(L, r, ee(i, t, n, r, e, D));
        }),
        L
    );
}
($[C] = $[R] = $[V] = $[j] = $[O] = $[D] = $[H] = $[Y] = $[W] = $[K] = $[z] = $[P] = $[M] = $[k] = $[U] = $[G] = $[B] = $[Z] = $[q] = $[Q] = $[X] = $[J] = !0), ($[L] = $[x] = $[F] = !1), (e.exports = ee);
