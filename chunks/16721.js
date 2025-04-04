var r,
    n,
    _ = a(580983),
    o = a(46015),
    i = a(382698),
    c = a(503463),
    s = a(751954),
    E = a(571078),
    l = a(713411),
    u = a(199838).get,
    I = a(923646),
    R = a(204954),
    d = E('native-string-replace', String.prototype.replace),
    A = RegExp.prototype.exec,
    f = A,
    p = o(''.charAt),
    N = o(''.indexOf),
    T = o(''.replace),
    L = o(''.slice),
    h = ((n = /b*/g), _(A, (r = /a/), 'a'), _(A, n, 'a'), 0 !== r.lastIndex || 0 !== n.lastIndex),
    O = s.BROKEN_CARET,
    D = void 0 !== /()??/.exec('')[1];
(h || D || O || I || R) &&
    (f = function (t) {
        var e,
            a,
            r,
            n,
            o,
            s,
            E,
            I = u(this),
            R = i(t),
            g = I.raw;
        if (g) return (g.lastIndex = this.lastIndex), (e = _(f, g, R)), (this.lastIndex = g.lastIndex), e;
        var P = I.groups,
            m = O && this.sticky,
            y = _(c, this),
            v = this.source,
            C = 0,
            S = R;
        if (
            (m && (-1 === N((y = T(y, 'y', '')), 'g') && (y += 'g'), (S = L(R, this.lastIndex)), this.lastIndex > 0 && (!this.multiline || (this.multiline && '\n' !== p(R, this.lastIndex - 1))) && ((v = '(?: ' + v + ')'), (S = ' ' + S), C++), (a = RegExp('^(?:' + v + ')', y))),
            D && (a = RegExp('^' + v + '$(?!\\s)', y)),
            h && (r = this.lastIndex),
            (n = _(A, m ? a : this, S)),
            m ? (n ? ((n.input = L(n.input, C)), (n[0] = L(n[0], C)), (n.index = this.lastIndex), (this.lastIndex += n[0].length)) : (this.lastIndex = 0)) : h && n && (this.lastIndex = this.global ? n.index + n[0].length : r),
            D &&
                n &&
                n.length > 1 &&
                _(d, n[0], a, function () {
                    for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (n[o] = void 0);
                }),
            n && P)
        )
            for (o = 0, n.groups = s = l(null); o < P.length; o++) s[(E = P[o])[0]] = n[E[1]];
        return n;
    }),
    (t.exports = f);
