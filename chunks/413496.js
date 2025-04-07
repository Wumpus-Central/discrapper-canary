var n = r(507604),
    i = r(127849),
    o = r(46015),
    a = r(275717),
    c = r(176682),
    u = r(436207),
    s = r(713411),
    l = r(264750).f,
    f = r(568033),
    p = r(933009),
    v = r(382698),
    g = r(817282),
    d = r(751954),
    x = r(316096),
    h = r(556585),
    E = r(621523),
    y = r(77025),
    I = r(199838).enforce,
    R = r(108015),
    b = r(751736),
    A = r(923646),
    w = r(204954),
    S = b('match'),
    $ = i.RegExp,
    m = $.prototype,
    k = i.SyntaxError,
    C = o(m.exec),
    T = o(''.charAt),
    _ = o(''.replace),
    O = o(''.indexOf),
    M = o(''.slice),
    D = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
    K = /a/g,
    N = /a/g,
    P = new $(K) !== K,
    U = d.MISSED_STICKY,
    Y = d.UNSUPPORTED_Y,
    B =
        n &&
        (!P ||
            U ||
            A ||
            w ||
            E(function () {
                return (N[S] = !1), $(K) !== K || $(N) === N || '/a/i' !== String($(K, 'i'));
            })),
    q = function (t) {
        for (var e, r = t.length, n = 0, i = '', o = !1; n <= r; n++) {
            if ('\\' === (e = T(t, n))) {
                i += e + T(t, ++n);
                continue;
            }
            o || '.' !== e ? ('[' === e ? (o = !0) : ']' === e && (o = !1), (i += e)) : (i += '[\\s\\S]');
        }
        return i;
    },
    j = function (t) {
        for (var e, r = t.length, n = 0, i = '', o = [], a = s(null), c = !1, u = !1, l = 0, f = ''; n <= r; n++) {
            if ('\\' === (e = T(t, n))) e += T(t, ++n);
            else if (']' === e) c = !1;
            else if (!c)
                switch (!0) {
                    case '[' === e:
                        c = !0;
                        break;
                    case '(' === e:
                        if (((i += e), '?:' === M(t, n + 1, n + 3))) continue;
                        C(D, M(t, n + 1)) && ((n += 2), (u = !0)), l++;
                        continue;
                    case '>' === e && u:
                        if ('' === f || y(a, f)) throw new k('Invalid capture group name');
                        (a[f] = !0), (o[o.length] = [f, l]), (u = !1), (f = '');
                        continue;
                }
            u ? (f += e) : (i += e);
        }
        return [i, o];
    };
if (a('RegExp', B)) {
    for (
        var z = function (t, e) {
                var r,
                    n,
                    i,
                    o,
                    a,
                    s,
                    l = f(m, this),
                    d = p(t),
                    x = void 0 === e,
                    h = [],
                    E = t;
                if (!l && d && x && t.constructor === z) return t;
                if (((d || f(m, t)) && ((t = t.source), x && (e = g(E))), (t = void 0 === t ? '' : v(t)), (e = void 0 === e ? '' : v(e)), (E = t), A && ('dotAll' in K) && (n = !!e && O(e, 's') > -1) && (e = _(e, /s/g, '')), (r = e), U && ('sticky' in K) && (i = !!e && O(e, 'y') > -1) && Y && (e = _(e, /y/g, '')), w && ((t = (o = j(t))[0]), (h = o[1])), (a = c($(t, e), l ? this : m, z)), (n || i || h.length) && ((s = I(a)), n && ((s.dotAll = !0), (s.raw = z(q(t), r))), i && (s.sticky = !0), h.length && (s.groups = h)), t !== E))
                    try {
                        u(a, 'source', '' === E ? '(?:)' : E);
                    } catch (t) {}
                return a;
            },
            F = l($),
            G = 0;
        F.length > G;

    )
        x(z, $, F[G++]);
    (m.constructor = z), (z.prototype = m), h(i, 'RegExp', z, { constructor: !0 });
}
R('RegExp');
