var r = n(655405),
    i = n(140893),
    s = n(300823),
    a = n(911521),
    o = n(377706),
    l = n(960798),
    u = n(672587),
    d = n(974115),
    c = n(819152),
    _ = n(220350),
    f = n(820809),
    E = n(189577),
    h = n(506825),
    p = n(889067),
    m = n(762629),
    g = n(467957),
    A = n(154164),
    I = n(693454),
    T = n(509185),
    S = n(31244),
    y = n(335186),
    N = n(925269),
    O = "[object Arguments]",
    R = "[object Function]",
    v = "[object Object]",
    C = {};
(C[O] =
    C["[object Array]"] =
    C["[object ArrayBuffer]"] =
    C["[object DataView]"] =
    C["[object Boolean]"] =
    C["[object Date]"] =
    C["[object Float32Array]"] =
    C["[object Float64Array]"] =
    C["[object Int8Array]"] =
    C["[object Int16Array]"] =
    C["[object Int32Array]"] =
    C["[object Map]"] =
    C["[object Number]"] =
    C[v] =
    C["[object RegExp]"] =
    C["[object Set]"] =
    C["[object String]"] =
    C["[object Symbol]"] =
    C["[object Uint8Array]"] =
    C["[object Uint8ClampedArray]"] =
    C["[object Uint16Array]"] =
    C["[object Uint32Array]"] =
        !0),
    (C["[object Error]"] = C[R] = C["[object WeakMap]"] = !1),
    (e.exports = function e(t, n, b, D, L, w) {
        var M,
            P = 1 & n,
            U = 2 & n,
            k = 4 & n;
        if ((b && (M = L ? b(t, D, L, w) : b(t)), void 0 !== M)) return M;
        if (!T(t)) return t;
        var x = g(t);
        if (x) {
            if (((M = h(t)), !P)) return u(t, M);
        } else {
            var G = E(t),
                V = G == R || "[object GeneratorFunction]" == G;
            if (A(t)) return l(t, P);
            if (G == v || G == O || (V && !L)) {
                if (((M = U || V ? {} : m(t)), !P)) return U ? c(t, o(M, t)) : d(t, a(M, t));
            } else {
                if (!C[G]) return L ? t : {};
                M = p(t, G, P);
            }
        }
        w || (w = new r());
        var F = w.get(t);
        if (F) return F;
        w.set(t, M),
            S(t)
                ? t.forEach(function (r) {
                      M.add(e(r, n, b, r, t, w));
                  })
                : I(t) &&
                  t.forEach(function (r, i) {
                      M.set(i, e(r, n, b, i, t, w));
                  });
        var B = k ? (U ? f : _) : U ? N : y,
            H = x ? void 0 : B(t);
        return (
            i(H || t, function (r, i) {
                H && (r = t[(i = r)]), s(M, i, e(r, n, b, i, t, w));
            }),
            M
        );
    });
