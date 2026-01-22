var r = n(446474),
    i = n(410323),
    a = n(304880),
    s = n(693510),
    o = n(603526),
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
    b = i("".slice),
    y = (function () {
        var e = /a/,
            t = /b*/g;
        return r(_, e, "a"), r(_, t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex;
    })(),
    O = o.BROKEN_CARET,
    A = void 0 !== /()??/.exec("")[1];
(y || A || O || d || f) &&
    (h = function (e) {
        var t,
            n,
            i,
            o,
            l,
            d,
            f,
            v = this,
            S = u(v),
            I = a(e),
            T = S.raw;
        if (T) return (T.lastIndex = v.lastIndex), (t = r(h, T, I)), (v.lastIndex = T.lastIndex), t;
        var C = S.groups,
            N = O && v.sticky,
            R = r(s, v),
            w = v.source,
            P = 0,
            D = I;
        if (
            (N &&
                (-1 === g((R = E(R, "y", "")), "g") && (R += "g"),
                (D = b(I, v.lastIndex)),
                v.lastIndex > 0 &&
                    (!v.multiline || (v.multiline && "\n" !== m(I, v.lastIndex - 1))) &&
                    ((w = "(?: " + w + ")"), (D = " " + D), P++),
                (n = RegExp("^(?:" + w + ")", R))),
            A && (n = RegExp("^" + w + "$(?!\\s)", R)),
            y && (i = v.lastIndex),
            (o = r(_, N ? n : v, D)),
            N
                ? o
                    ? ((o.input = b(o.input, P)),
                      (o[0] = b(o[0], P)),
                      (o.index = v.lastIndex),
                      (v.lastIndex += o[0].length))
                    : (v.lastIndex = 0)
                : y && o && (v.lastIndex = v.global ? o.index + o[0].length : i),
            A &&
                o &&
                o.length > 1 &&
                r(p, o[0], n, function () {
                    for (l = 1; l < arguments.length - 2; l++) void 0 === arguments[l] && (o[l] = void 0);
                }),
            o && C)
        )
            for (l = 0, o.groups = d = c(null); l < C.length; l++) d[(f = C[l])[0]] = o[f[1]];
        return o;
    }),
    (e.exports = h);
