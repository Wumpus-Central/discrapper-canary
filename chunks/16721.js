var n,
    i,
    o = r(580983),
    a = r(46015),
    c = r(382698),
    u = r(503463),
    s = r(751954),
    l = r(571078),
    f = r(713411),
    p = r(199838).get,
    v = r(923646),
    g = r(204954),
    d = l('native-string-replace', String.prototype.replace),
    x = RegExp.prototype.exec,
    h = x,
    E = a(''.charAt),
    y = a(''.indexOf),
    I = a(''.replace),
    R = a(''.slice),
    b = ((i = /b*/g), o(x, (n = /a/), 'a'), o(x, i, 'a'), 0 !== n.lastIndex || 0 !== i.lastIndex),
    A = s.BROKEN_CARET,
    w = void 0 !== /()??/.exec('')[1];
(b || w || A || v || g) &&
    (h = function (t) {
        var e,
            r,
            n,
            i,
            a,
            s,
            l,
            v = p(this),
            g = c(t),
            S = v.raw;
        if (S) return (S.lastIndex = this.lastIndex), (e = o(h, S, g)), (this.lastIndex = S.lastIndex), e;
        var $ = v.groups,
            m = A && this.sticky,
            k = o(u, this),
            C = this.source,
            T = 0,
            _ = g;
        if (
            (m && (-1 === y((k = I(k, 'y', '')), 'g') && (k += 'g'), (_ = R(g, this.lastIndex)), this.lastIndex > 0 && (!this.multiline || (this.multiline && '\n' !== E(g, this.lastIndex - 1))) && ((C = '(?: ' + C + ')'), (_ = ' ' + _), T++), (r = RegExp('^(?:' + C + ')', k))),
            w && (r = RegExp('^' + C + '$(?!\\s)', k)),
            b && (n = this.lastIndex),
            (i = o(x, m ? r : this, _)),
            m ? (i ? ((i.input = R(i.input, T)), (i[0] = R(i[0], T)), (i.index = this.lastIndex), (this.lastIndex += i[0].length)) : (this.lastIndex = 0)) : b && i && (this.lastIndex = this.global ? i.index + i[0].length : n),
            w &&
                i &&
                i.length > 1 &&
                o(d, i[0], r, function () {
                    for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (i[a] = void 0);
                }),
            i && $)
        )
            for (a = 0, i.groups = s = f(null); a < $.length; a++) s[(l = $[a])[0]] = i[l[1]];
        return i;
    }),
    (t.exports = h);
