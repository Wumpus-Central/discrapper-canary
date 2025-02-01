var e,
    i,
    o = r(926515),
    u = r(581031),
    a = r(714050),
    c = r(572609),
    s = r(489412),
    f = r(972277),
    l = r(803938),
    h = r(644659).get,
    v = r(973326),
    p = r(440196),
    d = f('native-string-replace', String.prototype.replace),
    x = RegExp.prototype.exec,
    g = x,
    I = u(''.charAt),
    y = u(''.indexOf),
    E = u(''.replace),
    b = u(''.slice),
    R = ((i = /b*/g), o(x, (e = /a/), 'a'), o(x, i, 'a'), 0 !== e.lastIndex || 0 !== i.lastIndex),
    $ = s.BROKEN_CARET,
    A = void 0 !== /()??/.exec('')[1];
(R || A || $ || v || p) &&
    (g = function (n) {
        var t,
            r,
            e,
            i,
            u,
            s,
            f,
            v = h(this),
            p = a(n),
            k = v.raw;
        if (k) return (k.lastIndex = this.lastIndex), (t = o(g, k, p)), (this.lastIndex = k.lastIndex), t;
        var m = v.groups,
            C = $ && this.sticky,
            S = o(c, this),
            w = this.source,
            T = 0,
            O = p;
        if (
            (C && (-1 === y((S = E(S, 'y', '')), 'g') && (S += 'g'), (O = b(p, this.lastIndex)), this.lastIndex > 0 && (!this.multiline || (this.multiline && '\n' !== I(p, this.lastIndex - 1))) && ((w = '(?: ' + w + ')'), (O = ' ' + O), T++), (r = RegExp('^(?:' + w + ')', S))),
            A && (r = RegExp('^' + w + '$(?!\\s)', S)),
            R && (e = this.lastIndex),
            (i = o(x, C ? r : this, O)),
            C ? (i ? ((i.input = b(i.input, T)), (i[0] = b(i[0], T)), (i.index = this.lastIndex), (this.lastIndex += i[0].length)) : (this.lastIndex = 0)) : R && i && (this.lastIndex = this.global ? i.index + i[0].length : e),
            A &&
                i &&
                i.length > 1 &&
                o(d, i[0], r, function () {
                    for (u = 1; u < arguments.length - 2; u++) void 0 === arguments[u] && (i[u] = void 0);
                }),
            i && m)
        )
            for (u = 0, i.groups = s = l(null); u < m.length; u++) s[(f = m[u])[0]] = i[f[1]];
        return i;
    }),
    (n.exports = g);
