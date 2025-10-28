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
    _ = l("native-string-replace", String.prototype.replace),
    p = RegExp.prototype.exec,
    h = p,
    m = i("".charAt),
    g = i("".indexOf),
    E = i("".replace),
    b = i("".slice),
    y = (function () {
        var e = /a/,
            t = /b*/g;
        return r(p, e, "a"), r(p, t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex;
    })(),
    O = s.BROKEN_CARET,
    v = void 0 !== /()??/.exec("")[1];
(y || v || O || d || f) &&
    (h = function (e) {
        var t,
            n,
            i,
            s,
            l,
            d,
            f,
            I = this,
            T = u(I),
            S = a(e),
            A = T.raw;
        if (A) return (A.lastIndex = I.lastIndex), (t = r(h, A, S)), (I.lastIndex = A.lastIndex), t;
        var C = T.groups,
            N = O && I.sticky,
            R = r(o, I),
            P = I.source,
            w = 0,
            D = S;
        if (
            (N &&
                (-1 === g((R = E(R, "y", "")), "g") && (R += "g"),
                (D = b(S, I.lastIndex)),
                I.lastIndex > 0 &&
                    (!I.multiline || (I.multiline && "\n" !== m(S, I.lastIndex - 1))) &&
                    ((P = "(?: " + P + ")"), (D = " " + D), w++),
                (n = RegExp("^(?:" + P + ")", R))),
            v && (n = RegExp("^" + P + "$(?!\\s)", R)),
            y && (i = I.lastIndex),
            (s = r(p, N ? n : I, D)),
            N
                ? s
                    ? ((s.input = b(s.input, w)),
                      (s[0] = b(s[0], w)),
                      (s.index = I.lastIndex),
                      (I.lastIndex += s[0].length))
                    : (I.lastIndex = 0)
                : y && s && (I.lastIndex = I.global ? s.index + s[0].length : i),
            v &&
                s &&
                s.length > 1 &&
                r(_, s[0], n, function () {
                    for (l = 1; l < arguments.length - 2; l++) void 0 === arguments[l] && (s[l] = void 0);
                }),
            s && C)
        )
            for (l = 0, s.groups = d = c(null); l < C.length; l++) d[(f = C[l])[0]] = s[f[1]];
        return s;
    }),
    (e.exports = h);
