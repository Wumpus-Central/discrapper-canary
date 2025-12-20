var e,
    i,
    o = r(580983),
    u = r(46015),
    c = r(382698),
    a = r(503463),
    s = r(751954),
    f = r(571078),
    l = r(713411),
    v = r(199838).get,
    p = r(923646),
    d = r(204954),
    g = f("native-string-replace", String.prototype.replace),
    h = RegExp.prototype.exec,
    x = h,
    y = u("".charAt),
    b = u("".indexOf),
    I = u("".replace),
    E = u("".slice),
    R = ((i = /b*/g), o(h, (e = /a/), "a"), o(h, i, "a"), 0 !== e.lastIndex || 0 !== i.lastIndex),
    m = s.BROKEN_CARET,
    $ = void 0 !== /()??/.exec("")[1];
(R || $ || m || p || d) &&
    (x = function (t) {
        var n,
            r,
            e,
            i,
            u,
            s,
            f,
            p = v(this),
            d = c(t),
            S = p.raw;
        if (S) return (S.lastIndex = this.lastIndex), (n = o(x, S, d)), (this.lastIndex = S.lastIndex), n;
        var w = p.groups,
            O = m && this.sticky,
            A = o(a, this),
            k = this.source,
            C = 0,
            P = d;
        if (
            (O &&
                (-1 === b((A = I(A, "y", "")), "g") && (A += "g"),
                (P = E(d, this.lastIndex)),
                this.lastIndex > 0 &&
                    (!this.multiline || (this.multiline && "\n" !== y(d, this.lastIndex - 1))) &&
                    ((k = "(?: " + k + ")"), (P = " " + P), C++),
                (r = RegExp("^(?:" + k + ")", A))),
            $ && (r = RegExp("^" + k + "$(?!\\s)", A)),
            R && (e = this.lastIndex),
            (i = o(h, O ? r : this, P)),
            O
                ? i
                    ? ((i.input = E(i.input, C)),
                      (i[0] = E(i[0], C)),
                      (i.index = this.lastIndex),
                      (this.lastIndex += i[0].length))
                    : (this.lastIndex = 0)
                : R && i && (this.lastIndex = this.global ? i.index + i[0].length : e),
            $ &&
                i &&
                i.length > 1 &&
                o(g, i[0], r, function () {
                    for (u = 1; u < arguments.length - 2; u++) void 0 === arguments[u] && (i[u] = void 0);
                }),
            i && w)
        )
            for (u = 0, i.groups = s = l(null); u < w.length; u++) s[(f = w[u])[0]] = i[f[1]];
        return i;
    }),
    (t.exports = x);
