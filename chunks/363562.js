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
    f = n(790318),
    h = n(261010),
    p = n(405706),
    E = n(720492),
    m = n(788640),
    g = n(926226),
    A = n(758513),
    I = n(232405),
    T = n(646344),
    S = n(641315),
    N = n(750615),
    y = "[object Arguments]",
    C = "[object Function]",
    v = "[object Object]",
    O = {};
(O[y] =
    O["[object Array]"] =
    O["[object ArrayBuffer]"] =
    O["[object DataView]"] =
    O["[object Boolean]"] =
    O["[object Date]"] =
    O["[object Float32Array]"] =
    O["[object Float64Array]"] =
    O["[object Int8Array]"] =
    O["[object Int16Array]"] =
    O["[object Int32Array]"] =
    O["[object Map]"] =
    O["[object Number]"] =
    O[v] =
    O["[object RegExp]"] =
    O["[object Set]"] =
    O["[object String]"] =
    O["[object Symbol]"] =
    O["[object Uint8Array]"] =
    O["[object Uint8ClampedArray]"] =
    O["[object Uint16Array]"] =
    O["[object Uint32Array]"] =
        !0),
    (O["[object Error]"] = O[C] = O["[object WeakMap]"] = !1),
    (e.exports = function e(t, n, R, b, D, L) {
        var w,
            M = 1 & n,
            P = 2 & n,
            x = 4 & n;
        if ((R && (w = D ? R(t, b, D, L) : R(t)), void 0 !== w)) return w;
        if (!T(t)) return t;
        var U = g(t);
        if (U) {
            if (((w = p(t)), !M)) return u(t, w);
        } else {
            var k = h(t),
                G = k == C || "[object GeneratorFunction]" == k;
            if (A(t)) return l(t, M);
            if (k == v || k == y || (G && !D)) {
                if (((w = P || G ? {} : m(t)), !M)) return P ? d(t, o(w, t)) : c(t, a(w, t));
            } else {
                if (!O[k]) return D ? t : {};
                w = E(t, k, M);
            }
        }
        L || (L = new i());
        var F = L.get(t);
        if (F) return F;
        L.set(t, w),
            S(t)
                ? t.forEach(function (i) {
                      w.add(e(i, n, R, i, t, L));
                  })
                : I(t) &&
                  t.forEach(function (i, r) {
                      w.set(r, e(i, n, R, r, t, L));
                  });
        var V = x ? (P ? f : _) : P ? keysIn : N,
            B = U ? void 0 : V(t);
        return (
            r(B || t, function (i, r) {
                B && (i = t[(r = i)]), s(w, r, e(i, n, R, r, t, L));
            }),
            w
        );
    });
