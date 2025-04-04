var n = r(325008),
    i = r(161581),
    o = r(581031),
    a = r(474180),
    c = r(95948),
    u = r(251069),
    s = r(537443).f,
    l = r(838957),
    f = r(155763),
    p = r(714050),
    v = r(87046),
    g = r(489412),
    x = r(504559),
    d = r(859209),
    h = r(936940),
    E = r(740362),
    y = r(644659).enforce,
    I = r(930990),
    R = r(641236),
    b = r(973326),
    A = r(440196),
    S = R('match'),
    $ = i.RegExp,
    m = $.prototype,
    w = i.SyntaxError,
    k = o(m.exec),
    C = o(''.charAt),
    T = o(''.replace),
    _ = o(''.indexOf),
    O = o(''.slice),
    M = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
    D = /a/g,
    K = /a/g,
    N = new $(D) !== D,
    P = g.MISSED_STICKY,
    U = g.UNSUPPORTED_Y,
    Y =
        n &&
        (!N ||
            P ||
            b ||
            A ||
            h(function () {
                return (K[S] = !1), $(D) !== D || $(K) === K || '/a/i' !== String($(D, 'i'));
            })),
    B = function (t) {
        for (var e, r = t.length, n = 0, i = '', o = !1; n <= r; n++) {
            if ('\\' === (e = C(t, n))) {
                i += e + C(t, ++n);
                continue;
            }
            o || '.' !== e ? ('[' === e ? (o = !0) : ']' === e && (o = !1), (i += e)) : (i += '[\\s\\S]');
        }
        return i;
    },
    q = function (t) {
        for (var e, r = t.length, n = 0, i = '', o = [], a = {}, c = !1, u = !1, s = 0, l = ''; n <= r; n++) {
            if ('\\' === (e = C(t, n))) e += C(t, ++n);
            else if (']' === e) c = !1;
            else if (!c)
                switch (!0) {
                    case '[' === e:
                        c = !0;
                        break;
                    case '(' === e:
                        k(M, O(t, n + 1)) && ((n += 2), (u = !0)), (i += e), s++;
                        continue;
                    case '>' === e && u:
                        if ('' === l || E(a, l)) throw new w('Invalid capture group name');
                        (a[l] = !0), (o[o.length] = [l, s]), (u = !1), (l = '');
                        continue;
                }
            u ? (l += e) : (i += e);
        }
        return [i, o];
    };
if (a('RegExp', Y)) {
    for (
        var j = function (t, e) {
                var r,
                    n,
                    i,
                    o,
                    a,
                    s,
                    g = l(m, this),
                    x = f(t),
                    d = void 0 === e,
                    h = [],
                    E = t;
                if (!g && x && d && t.constructor === j) return t;
                if (((x || l(m, t)) && ((t = t.source), d && (e = v(E))), (t = void 0 === t ? '' : p(t)), (e = void 0 === e ? '' : p(e)), (E = t), b && ('dotAll' in D) && (n = !!e && _(e, 's') > -1) && (e = T(e, /s/g, '')), (r = e), P && ('sticky' in D) && (i = !!e && _(e, 'y') > -1) && U && (e = T(e, /y/g, '')), A && ((t = (o = q(t))[0]), (h = o[1])), (a = c($(t, e), g ? this : m, j)), (n || i || h.length) && ((s = y(a)), n && ((s.dotAll = !0), (s.raw = j(B(t), r))), i && (s.sticky = !0), h.length && (s.groups = h)), t !== E))
                    try {
                        u(a, 'source', '' === E ? '(?:)' : E);
                    } catch (t) {}
                return a;
            },
            z = s($),
            F = 0;
        z.length > F;

    )
        x(j, $, z[F++]);
    (m.constructor = j), (j.prototype = m), d(i, 'RegExp', j, { constructor: !0 });
}
I('RegExp');
