var i = n(292528),
    r = n(822452),
    s = n(111898),
    a = n(984982),
    o = n(356769),
    l = n(208007),
    u = n(968294),
    c = n(885606),
    d = n(801777),
    _ = n(765405),
    h = n(790318),
    f = n(261010),
    p = n(405706),
    E = n(720492),
    m = n(788640),
    g = n(926226),
    A = n(758513),
    I = n(232405),
    T = n(646344),
    S = n(641315),
    y = n(750615),
    N = "[object Arguments]",
    v = "[object Function]",
    C = "[object Object]",
    R = {};
(R[N] =
    R["[object Array]"] =
    R["[object ArrayBuffer]"] =
    R["[object DataView]"] =
    R["[object Boolean]"] =
    R["[object Date]"] =
    R["[object Float32Array]"] =
    R["[object Float64Array]"] =
    R["[object Int8Array]"] =
    R["[object Int16Array]"] =
    R["[object Int32Array]"] =
    R["[object Map]"] =
    R["[object Number]"] =
    R[C] =
    R["[object RegExp]"] =
    R["[object Set]"] =
    R["[object String]"] =
    R["[object Symbol]"] =
    R["[object Uint8Array]"] =
    R["[object Uint8ClampedArray]"] =
    R["[object Uint16Array]"] =
    R["[object Uint32Array]"] =
        !0),
    (R["[object Error]"] = R[v] = R["[object WeakMap]"] = !1),
    (e.exports = function e(t, n, O, b, D, L) {
        var w,
            M = 1 & n,
            P = 2 & n,
            x = 4 & n;
        if ((O && (w = D ? O(t, b, D, L) : O(t)), void 0 !== w)) return w;
        if (!T(t)) return t;
        var k = g(t);
        if (k) {
            if (((w = p(t)), !M)) return u(t, w);
        } else {
            var U = f(t),
                G = U == v || "[object GeneratorFunction]" == U;
            if (A(t)) return l(t, M);
            if (U == C || U == N || (G && !D)) {
                if (((w = P || G ? {} : m(t)), !M)) return P ? d(t, o(w, t)) : c(t, a(w, t));
            } else {
                if (!R[U]) return D ? t : {};
                w = E(t, U, M);
            }
        }
        L || (L = new i());
        var F = L.get(t);
        if (F) return F;
        L.set(t, w),
            S(t)
                ? t.forEach(function (i) {
                      w.add(e(i, n, O, i, t, L));
                  })
                : I(t) &&
                  t.forEach(function (i, r) {
                      w.set(r, e(i, n, O, r, t, L));
                  });
        var V = x ? (P ? h : _) : P ? keysIn : y,
            B = k ? void 0 : V(t);
        return (
            r(B || t, function (i, r) {
                B && (i = t[(r = i)]), s(w, r, e(i, n, O, r, t, L));
            }),
            w
        );
    });
