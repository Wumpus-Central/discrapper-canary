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
    v = n(108015),
    O = n(751736),
    I = n(923646),
    S = n(204954),
    T = O('match'),
    N = i.RegExp,
    A = N.prototype,
    C = i.SyntaxError,
    R = o(A.exec),
    P = o(''.charAt),
    w = o(''.replace),
    D = o(''.indexOf),
    L = o(''.slice),
    x = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
    M = /a/g,
    k = /a/g,
    j = new N(M) !== M,
    U = h.MISSED_STICKY,
    G = h.UNSUPPORTED_Y,
    B =
        r &&
        (!j ||
            U ||
            I ||
            S ||
            E(function () {
                return (k[T] = !1), N(M) !== M || N(k) === k || '/a/i' !== String(N(M, 'i'));
            })),
    V = function (e) {
        for (var t, n = e.length, r = 0, i = '', o = !1; r <= n; r++) {
            if ('\\' === (t = P(e, r))) {
                i += t + P(e, ++r);
                continue;
            }
            o || '.' !== t ? ('[' === t ? (o = !0) : ']' === t && (o = !1), (i += t)) : (i += '[\\s\\S]');
        }
        return i;
    },
    F = function (e) {
        for (var t, n = e.length, r = 0, i = '', o = [], a = c(null), s = !1, l = !1, u = 0, d = ''; r <= n; r++) {
            if ('\\' === (t = P(e, r))) t += P(e, ++r);
            else if (']' === t) s = !1;
            else if (!s)
                switch (!0) {
                    case '[' === t:
                        s = !0;
                        break;
                    case '(' === t:
                        if (((i += t), '?:' === L(e, r + 1, r + 3))) continue;
                        R(x, L(e, r + 1)) && ((r += 2), (l = !0)), u++;
                        continue;
                    case '>' === t && l:
                        if ('' === d || b(a, d)) throw new C('Invalid capture group name');
                        (a[d] = !0), (o[o.length] = [d, u]), (l = !1), (d = '');
                        continue;
                }
            l ? (d += t) : (i += t);
        }
        return [i, o];
    };
if (a('RegExp', B)) {
    for (
        var Z = function (e, t) {
                var n,
                    r,
                    i,
                    o,
                    a,
                    c,
                    u = d(A, this),
                    h = f(e),
                    m = void 0 === t,
                    g = [],
                    E = e;
                if (!u && h && m && e.constructor === Z) return e;
                if (((h || d(A, e)) && ((e = e.source), m && (t = p(E))), (e = void 0 === e ? '' : _(e)), (t = void 0 === t ? '' : _(t)), (E = e), I && ('dotAll' in M) && (r = !!t && D(t, 's') > -1) && (t = w(t, /s/g, '')), (n = t), U && ('sticky' in M) && (i = !!t && D(t, 'y') > -1) && G && (t = w(t, /y/g, '')), S && ((e = (o = F(e))[0]), (g = o[1])), (a = s(N(e, t), u ? this : A, Z)), (r || i || g.length) && ((c = y(a)), r && ((c.dotAll = !0), (c.raw = Z(V(e), n))), i && (c.sticky = !0), g.length && (c.groups = g)), e !== E))
                    try {
                        l(a, 'source', '' === E ? '(?:)' : E);
                    } catch (e) {}
                return a;
            },
            H = u(N),
            W = 0;
        H.length > W;

    )
        m(Z, N, H[W++]);
    (A.constructor = Z), (Z.prototype = A), g(i, 'RegExp', Z, { constructor: !0 });
}
v('RegExp');
