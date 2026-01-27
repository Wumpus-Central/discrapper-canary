var n,
    i,
    o = e(446474),
    a = e(410323),
    u = e(304880),
    c = e(693510),
    s = e(603526),
    l = e(635896),
    f = e(482779),
    v = e(883972).get,
    p = e(614886),
    d = e(919971),
    g = l("native-string-replace", String.prototype.replace),
    h = RegExp.prototype.exec,
    x = h,
    y = a("".charAt),
    b = a("".indexOf),
    I = a("".replace),
    E = a("".slice),
    R = ((i = /b*/g), o(h, (n = /a/), "a"), o(h, i, "a"), 0 !== n.lastIndex || 0 !== i.lastIndex),
    m = s.BROKEN_CARET,
    $ = void 0 !== /()??/.exec("")[1];
(R || $ || m || p || d) &&
    (x = function (t) {
        var r,
            e,
            n,
            i,
            a,
            s,
            l,
            p = v(this),
            d = u(t),
            S = p.raw;
        if (S) return (S.lastIndex = this.lastIndex), (r = o(x, S, d)), (this.lastIndex = S.lastIndex), r;
        var w = p.groups,
            O = m && this.sticky,
            A = o(c, this),
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
                (e = RegExp("^(?:" + k + ")", A))),
            $ && (e = RegExp("^" + k + "$(?!\\s)", A)),
            R && (n = this.lastIndex),
            (i = o(h, O ? e : this, P)),
            O
                ? i
                    ? ((i.input = E(i.input, C)),
                      (i[0] = E(i[0], C)),
                      (i.index = this.lastIndex),
                      (this.lastIndex += i[0].length))
                    : (this.lastIndex = 0)
                : R && i && (this.lastIndex = this.global ? i.index + i[0].length : n),
            $ &&
                i &&
                i.length > 1 &&
                o(g, i[0], e, function () {
                    for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (i[a] = void 0);
                }),
            i && w)
        )
            for (a = 0, i.groups = s = f(null); a < w.length; a++) s[(l = w[a])[0]] = i[l[1]];
        return i;
    }),
    (t.exports = x);
