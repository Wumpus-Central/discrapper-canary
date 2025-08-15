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
    R = a(N.exec),
    P = a("".charAt),
    w = a("".replace),
    D = a("".indexOf),
    L = a("".slice),
    x = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
    M = /a/g,
    k = /a/g,
    j = new A(M) !== M,
    U = h.MISSED_STICKY,
    G = h.UNSUPPORTED_Y,
    B =
        r &&
        (!j ||
            U ||
            I ||
            T ||
            E(function () {
                return (k[S] = !1), A(M) !== M || A(k) === k || "/a/i" !== String(A(M, "i"));
            })),
    V = function (e) {
        for (var t, n = e.length, r = 0, i = "", a = !1; r <= n; r++) {
            if ("\\" === (t = P(e, r))) {
                i += t + P(e, ++r);
                continue;
            }
            a || "." !== t ? ("[" === t ? (a = !0) : "]" === t && (a = !1), (i += t)) : (i += "[\\s\\S]");
        }
        return i;
    },
    F = function (e) {
        for (var t, n = e.length, r = 0, i = "", a = [], o = c(null), s = !1, l = !1, u = 0, d = ""; r <= n; r++) {
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
                        if ("" === d || b(o, d)) throw new C("Invalid capture group name");
                        (o[d] = !0), (a[a.length] = [d, u]), (l = !1), (d = "");
                        continue;
                }
            l ? (d += t) : (i += t);
        }
        return [i, a];
    };
if (o("RegExp", B)) {
    for (
        var Z = function (e, t) {
                var n,
                    r,
                    i,
                    a,
                    o,
                    c,
                    u = d(N, this),
                    h = f(e),
                    m = void 0 === t,
                    g = [],
                    E = e;
                if (!u && h && m && e.constructor === Z) return e;
                if (
                    ((h || d(N, e)) && ((e = e.source), m && (t = p(E))),
                    (e = void 0 === e ? "" : _(e)),
                    (t = void 0 === t ? "" : _(t)),
                    (E = e),
                    I && "dotAll" in M && (r = !!t && D(t, "s") > -1) && (t = w(t, /s/g, "")),
                    (n = t),
                    U && "sticky" in M && (i = !!t && D(t, "y") > -1) && G && (t = w(t, /y/g, "")),
                    T && ((e = (a = F(e))[0]), (g = a[1])),
                    (o = s(A(e, t), u ? this : N, Z)),
                    (r || i || g.length) &&
                        ((c = y(o)),
                        r && ((c.dotAll = !0), (c.raw = Z(V(e), n))),
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
        m(Z, A, H[Y++]);
    (N.constructor = Z), (Z.prototype = N), g(i, "RegExp", Z, { constructor: !0 });
}
O("RegExp");
