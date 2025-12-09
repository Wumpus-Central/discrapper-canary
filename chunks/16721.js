var r = n(580983),
    i = n(46015),
    a = n(382698),
    o = n(503463),
    s = n(751954),
    l = n(571078),
    c = n(713411),
    u = n(199838).get,
    d = n(923646),
    f = n(204954),
    p = l("native-string-replace", String.prototype.replace),
    _ = RegExp.prototype.exec,
    m = _,
    h = i("".charAt),
    g = i("".indexOf),
    E = i("".replace),
    b = i("".slice),
    y = (function () {
        var e = /a/,
            t = /b*/g;
        return r(_, e, "a"), r(_, t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex;
    })(),
    O = s.BROKEN_CARET,
    v = void 0 !== /()??/.exec("")[1];
(y || v || O || d || f) &&
    (m = function (e) {
        var t,
            n,
            i,
            s,
            l,
            d,
            f,
            S = this,
            I = u(S),
            T = a(e),
            A = I.raw;
        if (A) return (A.lastIndex = S.lastIndex), (t = r(m, A, T)), (S.lastIndex = A.lastIndex), t;
        var C = I.groups,
            N = O && S.sticky,
            P = r(o, S),
            R = S.source,
            D = 0,
            w = T;
        if (
            (N &&
                (-1 === g((P = E(P, "y", "")), "g") && (P += "g"),
                (w = b(T, S.lastIndex)),
                S.lastIndex > 0 &&
                    (!S.multiline || (S.multiline && "\n" !== h(T, S.lastIndex - 1))) &&
                    ((R = "(?: " + R + ")"), (w = " " + w), D++),
                (n = RegExp("^(?:" + R + ")", P))),
            v && (n = RegExp("^" + R + "$(?!\\s)", P)),
            y && (i = S.lastIndex),
            (s = r(_, N ? n : S, w)),
            N
                ? s
                    ? ((s.input = b(s.input, D)),
                      (s[0] = b(s[0], D)),
                      (s.index = S.lastIndex),
                      (S.lastIndex += s[0].length))
                    : (S.lastIndex = 0)
                : y && s && (S.lastIndex = S.global ? s.index + s[0].length : i),
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
    (e.exports = m);
