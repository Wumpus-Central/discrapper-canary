var n,
    i,
    o = r(926515),
    a = r(581031),
    c = r(714050),
    u = r(572609),
    s = r(489412),
    l = r(972277),
    f = r(803938),
    p = r(644659).get,
    v = r(973326),
    g = r(440196),
    x = l('native-string-replace', String.prototype.replace),
    d = RegExp.prototype.exec,
    h = d,
    E = a(''.charAt),
    I = a(''.indexOf),
    y = a(''.replace),
    R = a(''.slice),
    b = ((i = /b*/g), o(d, (n = /a/), 'a'), o(d, i, 'a'), 0 !== n.lastIndex || 0 !== i.lastIndex),
    A = s.BROKEN_CARET,
    S = void 0 !== /()??/.exec('')[1];
(b || S || A || v || g) &&
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
            $ = v.raw;
        if ($) return ($.lastIndex = this.lastIndex), (e = o(h, $, g)), (this.lastIndex = $.lastIndex), e;
        var m = v.groups,
            k = A && this.sticky,
            w = o(u, this),
            C = this.source,
            T = 0,
            _ = g;
        if (
            (k && (-1 === I((w = y(w, 'y', '')), 'g') && (w += 'g'), (_ = R(g, this.lastIndex)), this.lastIndex > 0 && (!this.multiline || (this.multiline && '\n' !== E(g, this.lastIndex - 1))) && ((C = '(?: ' + C + ')'), (_ = ' ' + _), T++), (r = RegExp('^(?:' + C + ')', w))),
            S && (r = RegExp('^' + C + '$(?!\\s)', w)),
            b && (n = this.lastIndex),
            (i = o(d, k ? r : this, _)),
            k ? (i ? ((i.input = R(i.input, T)), (i[0] = R(i[0], T)), (i.index = this.lastIndex), (this.lastIndex += i[0].length)) : (this.lastIndex = 0)) : b && i && (this.lastIndex = this.global ? i.index + i[0].length : n),
            S &&
                i &&
                i.length > 1 &&
                o(x, i[0], r, function () {
                    for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (i[a] = void 0);
                }),
            i && m)
        )
            for (a = 0, i.groups = s = f(null); a < m.length; a++) s[(l = m[a])[0]] = i[l[1]];
        return i;
    }),
    (t.exports = h);
