var r = n(507604),
    i = n(127849),
    a = n(46015),
    o = n(275717),
    s = n(176682),
    l = n(436207),
    c = n(713411),
    u = n(264750).f,
    d = n(568033),
    f = n(933009),
    p = n(382698),
    _ = n(817282),
    m = n(751954),
    h = n(316096),
    g = n(556585),
    E = n(621523),
    b = n(77025),
    y = n(199838).enforce,
    O = n(108015),
    v = n(751736),
    S = n(923646),
    I = n(204954),
    T = v("match"),
    A = i.RegExp,
    C = A.prototype,
    N = i.SyntaxError,
    P = a(C.exec),
    R = a("".charAt),
    D = a("".replace),
    w = a("".indexOf),
    x = a("".slice),
    L = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
    j = /a/g,
    M = /a/g,
    k = new A(j) !== j,
    U = m.MISSED_STICKY,
    G = m.UNSUPPORTED_Y,
    Z =
        r &&
        (!k ||
            U ||
            S ||
            I ||
            E(function () {
                return (M[T] = !1), A(j) !== j || A(M) === M || "/a/i" !== String(A(j, "i"));
            })),
    B = function (e) {
        for (var t, n = e.length, r = 0, i = "", a = !1; r <= n; r++) {
            if ("\\" === (t = R(e, r))) {
                i += t + R(e, ++r);
                continue;
            }
            a || "." !== t ? ("[" === t ? (a = !0) : "]" === t && (a = !1), (i += t)) : (i += "[\\s\\S]");
        }
        return i;
    },
    F = function (e) {
        for (var t, n = e.length, r = 0, i = "", a = [], o = c(null), s = !1, l = !1, u = 0, d = ""; r <= n; r++) {
            if ("\\" === (t = R(e, r))) t += R(e, ++r);
            else if ("]" === t) s = !1;
            else if (!s)
                switch (!0) {
                    case "[" === t:
                        s = !0;
                        break;
                    case "(" === t:
                        if (((i += t), "?:" === x(e, r + 1, r + 3))) continue;
                        P(L, x(e, r + 1)) && ((r += 2), (l = !0)), u++;
                        continue;
                    case ">" === t && l:
                        if ("" === d || b(o, d)) throw new N("Invalid capture group name");
                        (o[d] = !0), (a[a.length] = [d, u]), (l = !1), (d = "");
                        continue;
                }
            l ? (d += t) : (i += t);
        }
        return [i, a];
    };
if (o("RegExp", Z)) {
    for (
        var V = function (e, t) {
                var n,
                    r,
                    i,
                    a,
                    o,
                    c,
                    u = d(C, this),
                    m = f(e),
                    h = void 0 === t,
                    g = [],
                    E = e;
                if (!u && m && h && e.constructor === V) return e;
                if (
                    ((m || d(C, e)) && ((e = e.source), h && (t = _(E))),
                    (e = void 0 === e ? "" : p(e)),
                    (t = void 0 === t ? "" : p(t)),
                    (E = e),
                    S && "dotAll" in j && (r = !!t && w(t, "s") > -1) && (t = D(t, /s/g, "")),
                    (n = t),
                    U && "sticky" in j && (i = !!t && w(t, "y") > -1) && G && (t = D(t, /y/g, "")),
                    I && ((e = (a = F(e))[0]), (g = a[1])),
                    (o = s(A(e, t), u ? this : C, V)),
                    (r || i || g.length) &&
                        ((c = y(o)),
                        r && ((c.dotAll = !0), (c.raw = V(B(e), n))),
                        i && (c.sticky = !0),
                        g.length && (c.groups = g)),
                    e !== E)
                )
                    try {
                        l(o, "source", "" === E ? "(?:)" : E);
                    } catch (e) {}
                return o;
            },
            H = u(A),
            Y = 0;
        H.length > Y;
    )
        h(V, A, H[Y++]);
    (C.constructor = V), (V.prototype = C), g(i, "RegExp", V, { constructor: !0 });
}
O("RegExp");
