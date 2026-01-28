var r = n(446474),
    i = n(410323),
    a = n(304880),
    o = n(693510),
    s = n(603526),
    l = n(635896),
    c = n(482779),
    u = n(883972).get,
    d = n(614886),
    f = n(919971),
    p = l("native-string-replace", String.prototype.replace),
    _ = RegExp.prototype.exec,
    h = _,
    m = i("".charAt),
    g = i("".indexOf),
    E = i("".replace),
    y = i("".slice),
    b = (function () {
        var e = /a/,
            t = /b*/g;
        return r(_, e, "a"), r(_, t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex;
    })(),
    O = s.BROKEN_CARET,
    v = void 0 !== /()??/.exec("")[1];
(b || v || O || d || f) &&
    (h = function (e) {
        var t,
            n,
            i,
            s,
            l,
            d,
            f,
            A = this,
            I = u(A),
            S = a(e),
            T = I.raw;
        if (T) return (T.lastIndex = A.lastIndex), (t = r(h, T, S)), (A.lastIndex = T.lastIndex), t;
        var C = I.groups,
            N = O && A.sticky,
            w = r(o, A),
            R = A.source,
            P = 0,
            D = S;
        if (
            (N &&
                (-1 === g((w = E(w, "y", "")), "g") && (w += "g"),
                (D = y(S, A.lastIndex)),
                A.lastIndex > 0 &&
                    (!A.multiline || (A.multiline && "\n" !== m(S, A.lastIndex - 1))) &&
                    ((R = "(?: " + R + ")"), (D = " " + D), P++),
                (n = RegExp("^(?:" + R + ")", w))),
            v && (n = RegExp("^" + R + "$(?!\\s)", w)),
            b && (i = A.lastIndex),
            (s = r(_, N ? n : A, D)),
            N
                ? s
                    ? ((s.input = y(s.input, P)),
                      (s[0] = y(s[0], P)),
                      (s.index = A.lastIndex),
                      (A.lastIndex += s[0].length))
                    : (A.lastIndex = 0)
                : b && s && (A.lastIndex = A.global ? s.index + s[0].length : i),
            v &&
                s &&
                s.length > 1 &&
                r(p, s[0], n, function () {
                    for (l = 1; l < arguments.length - 2; l++) void 0 === arguments[l] && (s[l] = void 0);
                }),
            s && C)
        )
            for (l = 0, s.groups = d = c(null); l < C.length; l++) d[(f = C[l])[0]] = s[f[1]];
        return s;
    }),
    (e.exports = h);
