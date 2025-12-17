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
    C = i.RegExp,
    A = C.prototype,
    N = i.SyntaxError,
    P = a(A.exec),
    R = a("".charAt),
    w = a("".replace),
    D = a("".indexOf),
    x = a("".slice),
    L = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
    j = /a/g,
    M = /a/g,
    k = new C(j) !== j,
    U = m.MISSED_STICKY,
    G = m.UNSUPPORTED_Y,
    Z =
        r &&
        (!k ||
            U ||
            S ||
            I ||
            E(function () {
                return (M[T] = !1), C(j) !== j || C(M) === M || "/a/i" !== String(C(j, "i"));
            })),
    F = function (e) {
        for (var t, n = e.length, r = 0, i = "", a = !1; r <= n; r++) {
            if ("\\" === (t = R(e, r))) {
                i += t + R(e, ++r);
                continue;
            }
            a || "." !== t ? ("[" === t ? (a = !0) : "]" === t && (a = !1), (i += t)) : (i += "[\\s\\S]");
        }
        return i;
    },
    B = function (e) {
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
                    u = d(A, this),
                    m = f(e),
                    h = void 0 === t,
                    g = [],
                    E = e;
                if (!u && m && h && e.constructor === V) return e;
                if (
                    ((m || d(A, e)) && ((e = e.source), h && (t = _(E))),
                    (e = void 0 === e ? "" : p(e)),
                    (t = void 0 === t ? "" : p(t)),
                    (E = e),
                    S && "dotAll" in j && (r = !!t && D(t, "s") > -1) && (t = w(t, /s/g, "")),
                    (n = t),
                    U && "sticky" in j && (i = !!t && D(t, "y") > -1) && G && (t = w(t, /y/g, "")),
                    I && ((e = (a = B(e))[0]), (g = a[1])),
                    (o = s(C(e, t), u ? this : A, V)),
                    (r || i || g.length) &&
                        ((c = y(o)),
                        r && ((c.dotAll = !0), (c.raw = V(F(e), n))),
                        i && (c.sticky = !0),
                        g.length && (c.groups = g)),
                    e !== E)
                )
                    try {
                        l(o, "source", "" === E ? "(?:)" : E);
                    } catch (e) {}
                return o;
            },
            H = u(C),
            Y = 0;
        H.length > Y;
    )
        h(V, C, H[Y++]);
    (A.constructor = V), (V.prototype = A), g(i, "RegExp", V, { constructor: !0 });
}
O("RegExp");
