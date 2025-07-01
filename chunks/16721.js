var n,
    i,
    s = r(580983),
    a = r(46015),
    o = r(382698),
    u = r(503463),
    h = r(751954),
    c = r(571078),
    f = r(713411),
    l = r(199838).get,
    p = r(923646),
    v = r(204954),
    g = c('native-string-replace', String.prototype.replace),
    d = RegExp.prototype.exec,
    m = d,
    y = a(''.charAt),
    b = a(''.indexOf),
    w = a(''.replace),
    x = a(''.slice),
    S = ((i = /b*/g), s(d, (n = /a/), 'a'), s(d, i, 'a'), 0 !== n.lastIndex || 0 !== i.lastIndex),
    R = h.BROKEN_CARET,
    k = void 0 !== /()??/.exec('')[1];
((S || k || R || p || v) &&
    (m = function (t) {
        var e,
            r,
            n,
            i,
            a,
            h,
            c,
            p = l(this),
            v = o(t),
            P = p.raw;
        if (P) return ((P.lastIndex = this.lastIndex), (e = s(m, P, v)), (this.lastIndex = P.lastIndex), e);
        var U = p.groups,
            L = R && this.sticky,
            E = s(u, this),
            I = this.source,
            A = 0,
            q = v;
        if (
            (L && (-1 === b((E = w(E, 'y', '')), 'g') && (E += 'g'), (q = x(v, this.lastIndex)), this.lastIndex > 0 && (!this.multiline || (this.multiline && '\n' !== y(v, this.lastIndex - 1))) && ((I = '(?: ' + I + ')'), (q = ' ' + q), A++), (r = RegExp('^(?:' + I + ')', E))),
            k && (r = RegExp('^' + I + '$(?!\\s)', E)),
            S && (n = this.lastIndex),
            (i = s(d, L ? r : this, q)),
            L ? (i ? ((i.input = x(i.input, A)), (i[0] = x(i[0], A)), (i.index = this.lastIndex), (this.lastIndex += i[0].length)) : (this.lastIndex = 0)) : S && i && (this.lastIndex = this.global ? i.index + i[0].length : n),
            k &&
                i &&
                i.length > 1 &&
                s(g, i[0], r, function () {
                    for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (i[a] = void 0);
                }),
            i && U)
        )
            for (a = 0, i.groups = h = f(null); a < U.length; a++) h[(c = U[a])[0]] = i[c[1]];
        return i;
    }),
    (t.exports = m));
