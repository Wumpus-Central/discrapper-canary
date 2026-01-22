var r = n(257943),
    i = n(860511),
    a = n(410323),
    s = n(521351),
    o = n(486724),
    l = n(706938),
    c = n(482779),
    u = n(855835).f,
    d = n(524152),
    f = n(432663),
    p = n(304880),
    _ = n(565079),
    h = n(603526),
    m = n(878765),
    g = n(693655),
    E = n(503628),
    b = n(210140),
    y = n(883972).enforce,
    O = n(274574),
    A = n(380744),
    v = n(614886),
    S = n(919971),
    I = A("match"),
    T = i.RegExp,
    C = T.prototype,
    N = i.SyntaxError,
    R = a(C.exec),
    w = a("".charAt),
    P = a("".replace),
    D = a("".indexOf),
    x = a("".slice),
    L = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
    j = /a/g,
    M = /a/g,
    k = new T(j) !== j,
    U = h.MISSED_STICKY,
    G = h.UNSUPPORTED_Y,
    V =
        r &&
        (!k ||
            U ||
            v ||
            S ||
            E(function () {
                return (M[I] = !1), T(j) !== j || T(M) === M || "/a/i" !== String(T(j, "i"));
            })),
    F = function (e) {
        for (var t, n = e.length, r = 0, i = "", a = !1; r <= n; r++) {
            if ("\\" === (t = w(e, r))) {
                i += t + w(e, ++r);
                continue;
            }
            a || "." !== t ? ("[" === t ? (a = !0) : "]" === t && (a = !1), (i += t)) : (i += "[\\s\\S]");
        }
        return i;
    },
    B = function (e) {
        for (var t, n = e.length, r = 0, i = "", a = [], s = c(null), o = !1, l = !1, u = 0, d = ""; r <= n; r++) {
            if ("\\" === (t = w(e, r))) t += w(e, ++r);
            else if ("]" === t) o = !1;
            else if (!o)
                switch (!0) {
                    case "[" === t:
                        o = !0;
                        break;
                    case "(" === t:
                        if (((i += t), "?:" === x(e, r + 1, r + 3))) continue;
                        R(L, x(e, r + 1)) && ((r += 2), (l = !0)), u++;
                        continue;
                    case ">" === t && l:
                        if ("" === d || b(s, d)) throw new N("Invalid capture group name");
                        (s[d] = !0), (a[a.length] = [d, u]), (l = !1), (d = "");
                        continue;
                }
            l ? (d += t) : (i += t);
        }
        return [i, a];
    };
if (s("RegExp", V)) {
    for (
        var H = function (e, t) {
                var n,
                    r,
                    i,
                    a,
                    s,
                    c,
                    u = d(C, this),
                    h = f(e),
                    m = void 0 === t,
                    g = [],
                    E = e;
                if (!u && h && m && e.constructor === H) return e;
                if (
                    ((h || d(C, e)) && ((e = e.source), m && (t = _(E))),
                    (e = void 0 === e ? "" : p(e)),
                    (t = void 0 === t ? "" : p(t)),
                    (E = e),
                    v && "dotAll" in j && (r = !!t && D(t, "s") > -1) && (t = P(t, /s/g, "")),
                    (n = t),
                    U && "sticky" in j && (i = !!t && D(t, "y") > -1) && G && (t = P(t, /y/g, "")),
                    S && ((e = (a = B(e))[0]), (g = a[1])),
                    (s = o(T(e, t), u ? this : C, H)),
                    (r || i || g.length) &&
                        ((c = y(s)),
                        r && ((c.dotAll = !0), (c.raw = H(F(e), n))),
                        i && (c.sticky = !0),
                        g.length && (c.groups = g)),
                    e !== E)
                )
                    try {
                        l(s, "source", "" === E ? "(?:)" : E);
                    } catch (e) {}
                return s;
            },
            Y = u(T),
            W = 0;
        Y.length > W;
    )
        m(H, T, Y[W++]);
    (C.constructor = H), (H.prototype = C), g(i, "RegExp", H, { constructor: !0 });
}
O("RegExp");
