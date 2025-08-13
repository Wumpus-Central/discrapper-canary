var r = n(507604),
    i = n(127849),
    o = n(46015),
    a = n(275717),
    s = n(176682),
    l = n(436207),
    c = n(713411),
    u = n(264750).f,
    d = n(568033),
    f = n(933009),
    _ = n(382698),
    p = n(817282),
    h = n(751954),
    m = n(316096),
    g = n(556585),
    E = n(621523),
    b = n(77025),
    y = n(199838).enforce,
    O = n(108015),
    v = n(751736),
    I = n(923646),
    T = n(204954),
    S = v("match"),
    A = i.RegExp,
    N = A.prototype,
    C = i.SyntaxError,
    R = o(N.exec),
    P = o("".charAt),
    w = o("".replace),
    D = o("".indexOf),
    L = o("".slice),
    x = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
    M = /a/g,
    j = /a/g,
    k = new A(M) !== M,
    U = h.MISSED_STICKY,
    G = h.UNSUPPORTED_Y,
    B =
        r &&
        (!k ||
            U ||
            I ||
            T ||
            E(function () {
                return (j[S] = !1), A(M) !== M || A(j) === j || "/a/i" !== String(A(M, "i"));
            })),
    Z = function (e) {
        for (var t, n = e.length, r = 0, i = "", o = !1; r <= n; r++) {
            if ("\\" === (t = P(e, r))) {
                i += t + P(e, ++r);
                continue;
            }
            o || "." !== t ? ("[" === t ? (o = !0) : "]" === t && (o = !1), (i += t)) : (i += "[\\s\\S]");
        }
        return i;
    },
    F = function (e) {
        for (var t, n = e.length, r = 0, i = "", o = [], a = c(null), s = !1, l = !1, u = 0, d = ""; r <= n; r++) {
            if ("\\" === (t = P(e, r))) t += P(e, ++r);
            else if ("]" === t) s = !1;
            else if (!s)
                switch (!0) {
                    case "[" === t:
                        s = !0;
                        break;
                    case "(" === t:
                        if (((i += t), "?:" === L(e, r + 1, r + 3))) continue;
                        R(x, L(e, r + 1)) && ((r += 2), (l = !0)), u++;
                        continue;
                    case ">" === t && l:
                        if ("" === d || b(a, d)) throw new C("Invalid capture group name");
                        (a[d] = !0), (o[o.length] = [d, u]), (l = !1), (d = "");
                        continue;
                }
            l ? (d += t) : (i += t);
        }
        return [i, o];
    };
if (a("RegExp", B)) {
    for (
        var V = function (e, t) {
                var n,
                    r,
                    i,
                    o,
                    a,
                    c,
                    u = d(N, this),
                    h = f(e),
                    m = void 0 === t,
                    g = [],
                    E = e;
                if (!u && h && m && e.constructor === V) return e;
                if (
                    ((h || d(N, e)) && ((e = e.source), m && (t = p(E))),
                    (e = void 0 === e ? "" : _(e)),
                    (t = void 0 === t ? "" : _(t)),
                    (E = e),
                    I && "dotAll" in M && (r = !!t && D(t, "s") > -1) && (t = w(t, /s/g, "")),
                    (n = t),
                    U && "sticky" in M && (i = !!t && D(t, "y") > -1) && G && (t = w(t, /y/g, "")),
                    T && ((e = (o = F(e))[0]), (g = o[1])),
                    (a = s(A(e, t), u ? this : N, V)),
                    (r || i || g.length) &&
                        ((c = y(a)),
                        r && ((c.dotAll = !0), (c.raw = V(Z(e), n))),
                        i && (c.sticky = !0),
                        g.length && (c.groups = g)),
                    e !== E)
                )
                    try {
                        l(a, "source", "" === E ? "(?:)" : E);
                    } catch (e) {}
                return a;
            },
            H = u(A),
            Y = 0;
        H.length > Y;
    )
        m(V, A, H[Y++]);
    (N.constructor = V), (V.prototype = N), g(i, "RegExp", V, { constructor: !0 });
}
O("RegExp");
