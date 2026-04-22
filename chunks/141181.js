var r = n(292528),
    i = n(822452),
    s = n(111898),
    a = n(984982),
    o = n(356769),
    l = n(208007),
    u = n(968294),
    d = n(885606),
    c = n(801777),
    _ = n(765405),
    f = n(790318),
    E = n(261010),
    h = n(405706),
    p = n(720492),
    m = n(788640),
    g = n(926226),
    A = n(758513),
    I = n(232405),
    T = n(646344),
    S = n(641315),
    y = n(750615),
    N = "[object Arguments]",
    O = "[object Function]",
    R = "[object Object]",
    v = {};
(v[N] =
    v["[object Array]"] =
    v["[object ArrayBuffer]"] =
    v["[object DataView]"] =
    v["[object Boolean]"] =
    v["[object Date]"] =
    v["[object Float32Array]"] =
    v["[object Float64Array]"] =
    v["[object Int8Array]"] =
    v["[object Int16Array]"] =
    v["[object Int32Array]"] =
    v["[object Map]"] =
    v["[object Number]"] =
    v[R] =
    v["[object RegExp]"] =
    v["[object Set]"] =
    v["[object String]"] =
    v["[object Symbol]"] =
    v["[object Uint8Array]"] =
    v["[object Uint8ClampedArray]"] =
    v["[object Uint16Array]"] =
    v["[object Uint32Array]"] =
        !0),
    (v["[object Error]"] = v[O] = v["[object WeakMap]"] = !1),
    (e.exports = function e(t, n, C, b, D, L) {
        var w,
            M = 1 & n,
            P = 2 & n,
            U = 4 & n;
        if ((C && (w = D ? C(t, b, D, L) : C(t)), void 0 !== w)) return w;
        if (!T(t)) return t;
        var k = g(t);
        if (k) {
            if (((w = h(t)), !M)) return u(t, w);
        } else {
            var x = E(t),
                G = x == O || "[object GeneratorFunction]" == x;
            if (A(t)) return l(t, M);
            if (x == R || x == N || (G && !D)) {
                if (((w = P || G ? {} : m(t)), !M)) return P ? c(t, o(w, t)) : d(t, a(w, t));
            } else {
                if (!v[x]) return D ? t : {};
                w = p(t, x, M);
            }
        }
        L || (L = new r());
        var V = L.get(t);
        if (V) return V;
        L.set(t, w),
            S(t)
                ? t.forEach(function (r) {
                      w.add(e(r, n, C, r, t, L));
                  })
                : I(t) &&
                  t.forEach(function (r, i) {
                      w.set(i, e(r, n, C, i, t, L));
                  });
        var F = U ? (P ? f : _) : P ? keysIn : y,
            B = k ? void 0 : F(t);
        return (
            i(B || t, function (r, i) {
                B && (r = t[(i = r)]), s(w, i, e(r, n, C, i, t, L));
            }),
            w
        );
    });
