var r,
    i,
    o = n(580983),
    a = n(46015),
    c = n(382698),
    u = n(503463),
    s = n(751954),
    l = n(571078),
    f = n(713411),
    p = n(199838).get,
    v = n(923646),
    g = n(204954),
    x = l("native-string-replace", String.prototype.replace),
    d = RegExp.prototype.exec,
    h = d,
    E = a("".charAt),
    I = a("".indexOf),
    y = a("".replace),
    R = a("".slice),
    b = ((i = /b*/g), o(d, (r = /a/), "a"), o(d, i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
    A = s.BROKEN_CARET,
    S = void 0 !== /()??/.exec("")[1];
(b || S || A || v || g) &&
    (h = function (t) {
        var e,
            n,
            r,
            i,
            a,
            s,
            l,
            v = p(this),
            g = c(t),
            $ = v.raw;
        if ($) return ($.lastIndex = this.lastIndex), (e = o(h, $, g)), (this.lastIndex = $.lastIndex), e;
        var w = v.groups,
            m = A && this.sticky,
            k = o(u, this),
            C = this.source,
            T = 0,
            _ = g;
        if (
            (m &&
                (-1 === I((k = y(k, "y", "")), "g") && (k += "g"),
                (_ = R(g, this.lastIndex)),
                this.lastIndex > 0 &&
                    (!this.multiline || (this.multiline && "\n" !== E(g, this.lastIndex - 1))) &&
                    ((C = "(?: " + C + ")"), (_ = " " + _), T++),
                (n = RegExp("^(?:" + C + ")", k))),
            S && (n = RegExp("^" + C + "$(?!\\s)", k)),
            b && (r = this.lastIndex),
            (i = o(d, m ? n : this, _)),
            m
                ? i
                    ? ((i.input = R(i.input, T)),
                      (i[0] = R(i[0], T)),
                      (i.index = this.lastIndex),
                      (this.lastIndex += i[0].length))
                    : (this.lastIndex = 0)
                : b && i && (this.lastIndex = this.global ? i.index + i[0].length : r),
            S &&
                i &&
                i.length > 1 &&
                o(x, i[0], n, function () {
                    for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (i[a] = void 0);
                }),
            i && w)
        )
            for (a = 0, i.groups = s = f(null); a < w.length; a++) s[(l = w[a])[0]] = i[l[1]];
        return i;
    }),
    (t.exports = h);
