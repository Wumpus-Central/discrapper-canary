"use strict";
t.default = (function () {
    function e(e, t, n, i, r, s) {
        (this.message = e),
            (this.expected = t),
            (this.found = n),
            (this.offset = i),
            (this.line = r),
            (this.column = s),
            (this.name = "SyntaxError");
    }
    function t() {
        this.constructor = e;
    }
    return (
        (t.prototype = Error.prototype),
        (e.prototype = new t()),
        {
            SyntaxError: e,
            parse: function (t) {
                var n,
                    i,
                    r,
                    s,
                    a,
                    o = arguments.length > 1 ? arguments[1] : {},
                    l = {},
                    u = { start: ei },
                    c = ei,
                    d = function (e) {
                        var t,
                            n,
                            i,
                            r,
                            s,
                            a = "";
                        for (t = 0, i = e.length; t < i; t += 1)
                            for (n = 0, s = (r = e[t]).length; n < s; n += 1) a += r[n];
                        return a;
                    },
                    _ = /^[^ \t\n\r,.+={}#]/,
                    h = { type: "class", value: "[^ \\t\\n\\r,.+={}#]", description: "[^ \\t\\n\\r,.+={}#]" },
                    f = { type: "literal", value: "{", description: '"{"' },
                    p = { type: "literal", value: ",", description: '","' },
                    E = { type: "literal", value: "}", description: '"}"' },
                    m = "number",
                    g = { type: "literal", value: "number", description: '"number"' },
                    A = "date",
                    I = { type: "literal", value: "date", description: '"date"' },
                    T = "time",
                    S = { type: "literal", value: "time", description: '"time"' },
                    y = "plural",
                    C = { type: "literal", value: "plural", description: '"plural"' },
                    N = "selectordinal",
                    v = { type: "literal", value: "selectordinal", description: '"selectordinal"' },
                    R = "select",
                    O = { type: "literal", value: "select", description: '"select"' },
                    b = { type: "literal", value: "=", description: '"="' },
                    D = "offset:",
                    L = { type: "literal", value: "offset:", description: '"offset:"' },
                    w = { type: "other", description: "whitespace" },
                    M = /^[ \t\n\r]/,
                    P = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" },
                    x = { type: "other", description: "optionalWhitespace" },
                    k = /^[0-9]/,
                    U = { type: "class", value: "[0-9]", description: "[0-9]" },
                    G = /^[0-9a-f]/i,
                    F = { type: "class", value: "[0-9a-f]i", description: "[0-9a-f]i" },
                    V = { type: "literal", value: "0", description: '"0"' },
                    B = /^[1-9]/,
                    j = { type: "class", value: "[1-9]", description: "[1-9]" },
                    H = /^[^{}\\\0-\x1F \t\n\r]/,
                    Y = {
                        type: "class",
                        value: "[^{}\\\\\\0-\\x1F\x7f \\t\\n\\r]",
                        description: "[^{}\\\\\\0-\\x1F\x7f \\t\\n\\r]",
                    },
                    W = { type: "literal", value: "\\\\", description: '"\\\\\\\\"' },
                    K = { type: "literal", value: "\\#", description: '"\\\\#"' },
                    $ = { type: "literal", value: "\\{", description: '"\\\\{"' },
                    z = { type: "literal", value: "\\}", description: '"\\\\}"' },
                    q = { type: "literal", value: "\\u", description: '"\\\\u"' },
                    Z = 0,
                    X = 0,
                    Q = { line: 1, column: 1, seenCR: !1 },
                    J = 0,
                    ee = [],
                    et = 0;
                if ("startRule" in o) {
                    if (!(o.startRule in u)) throw Error("Can't start parsing from rule \"" + o.startRule + '".');
                    c = u[o.startRule];
                }
                function en(e) {
                    Z < J || (Z > J && ((J = Z), (ee = [])), ee.push(e));
                }
                function ei() {
                    return er();
                }
                function er() {
                    var e, t;
                    for (e = [], t = es(); t !== l; ) e.push(t), (t = es());
                    return e !== l && (e = { type: "messageFormatPattern", elements: e }), e;
                }
                function es() {
                    var e, n;
                    return (
                        (n = (function () {
                            var e, n, i, r, s, a;
                            if (
                                ((e = Z),
                                (n = []),
                                (i = Z),
                                (r = eu()) !== l && (s = ef()) !== l && (a = eu()) !== l
                                    ? (i = r = [r, s, a])
                                    : ((Z = i), (i = l)),
                                i !== l)
                            )
                                for (; i !== l; )
                                    n.push(i),
                                        (i = Z),
                                        (r = eu()) !== l && (s = ef()) !== l && (a = eu()) !== l
                                            ? (i = r = [r, s, a])
                                            : ((Z = i), (i = l));
                            else n = l;
                            return (
                                n !== l && (n = d(n)),
                                (e = n) === l && ((e = Z), (n = el()) !== l && (n = t.substring(e, Z)), (e = n)),
                                e
                            );
                        })()) !== l && (n = { type: "messageTextElement", value: n }),
                        (e = n) === l &&
                            (e = (function () {
                                var e, n, i, r, s, a, o, u, c, d, b, D, L, w, M, P;
                                if (
                                    ((e = Z),
                                    123 === t.charCodeAt(Z) ? ((n = "{"), Z++) : ((n = l), 0 === et && en(f)),
                                    n !== l)
                                )
                                    if (eu() !== l)
                                        if (
                                            (i = (function () {
                                                var e, n, i;
                                                if ((e = e_()) === l) {
                                                    if (
                                                        ((e = Z),
                                                        (n = []),
                                                        _.test(t.charAt(Z))
                                                            ? ((i = t.charAt(Z)), Z++)
                                                            : ((i = l), 0 === et && en(h)),
                                                        i !== l)
                                                    )
                                                        for (; i !== l; )
                                                            n.push(i),
                                                                _.test(t.charAt(Z))
                                                                    ? ((i = t.charAt(Z)), Z++)
                                                                    : ((i = l), 0 === et && en(h));
                                                    else n = l;
                                                    n !== l && (n = t.substring(e, Z)), (e = n);
                                                }
                                                return e;
                                            })()) !== l
                                        )
                                            if (eu() !== l) {
                                                if (
                                                    ((r = Z),
                                                    44 === t.charCodeAt(Z)
                                                        ? ((s = ","), Z++)
                                                        : ((s = l), 0 === et && en(p)),
                                                    s !== l &&
                                                    (a = eu()) !== l &&
                                                    (((d = Z),
                                                    t.substr(Z, 6) === m
                                                        ? ((b = m), (Z += 6))
                                                        : ((b = l), 0 === et && en(g)),
                                                    b === l &&
                                                        (t.substr(Z, 4) === A
                                                            ? ((b = A), (Z += 4))
                                                            : ((b = l), 0 === et && en(I)),
                                                        b === l &&
                                                            (t.substr(Z, 4) === T
                                                                ? ((b = T), (Z += 4))
                                                                : ((b = l), 0 === et && en(S)))),
                                                    b !== l &&
                                                        eu() !== l &&
                                                        ((D = Z),
                                                        44 === t.charCodeAt(Z)
                                                            ? ((L = ","), Z++)
                                                            : ((L = l), 0 === et && en(p)),
                                                        L !== l && (w = eu()) !== l && (M = ef()) !== l
                                                            ? (D = L = [L, w, M])
                                                            : ((Z = D), (D = l)),
                                                        D === l && (D = null),
                                                        D !== l))
                                                        ? (d = b = { type: b + "Format", style: (P = D) && P[2] })
                                                        : ((Z = d), (d = l)),
                                                    (c = d) === l &&
                                                        (c = (function () {
                                                            var e, n, i, r;
                                                            return (
                                                                ((e = Z),
                                                                t.substr(Z, 6) === y
                                                                    ? ((n = y), (Z += 6))
                                                                    : ((n = l), 0 === et && en(C)),
                                                                n !== l &&
                                                                    eu() !== l &&
                                                                    (44 === t.charCodeAt(Z)
                                                                        ? ((i = ","), Z++)
                                                                        : ((i = l), 0 === et && en(p)),
                                                                    i !== l && eu() !== l && (r = eo()) !== l))
                                                                    ? (e = n =
                                                                          {
                                                                              type: r.type,
                                                                              ordinal: !1,
                                                                              offset: r.offset || 0,
                                                                              options: r.options,
                                                                          })
                                                                    : ((Z = e), (e = l)),
                                                                e
                                                            );
                                                        })()) === l &&
                                                        (c = (function () {
                                                            var e, n, i, r;
                                                            return (
                                                                ((e = Z),
                                                                t.substr(Z, 13) === N
                                                                    ? ((n = N), (Z += 13))
                                                                    : ((n = l), 0 === et && en(v)),
                                                                n !== l &&
                                                                    eu() !== l &&
                                                                    (44 === t.charCodeAt(Z)
                                                                        ? ((i = ","), Z++)
                                                                        : ((i = l), 0 === et && en(p)),
                                                                    i !== l && eu() !== l && (r = eo()) !== l))
                                                                    ? (e = n =
                                                                          {
                                                                              type: r.type,
                                                                              ordinal: !0,
                                                                              offset: r.offset || 0,
                                                                              options: r.options,
                                                                          })
                                                                    : ((Z = e), (e = l)),
                                                                e
                                                            );
                                                        })()) === l &&
                                                        (c = (function () {
                                                            var e, n, i, r, s;
                                                            if (
                                                                ((e = Z),
                                                                t.substr(Z, 6) === R
                                                                    ? ((n = R), (Z += 6))
                                                                    : ((n = l), 0 === et && en(O)),
                                                                n !== l)
                                                            )
                                                                if (eu() !== l)
                                                                    if (
                                                                        (44 === t.charCodeAt(Z)
                                                                            ? ((i = ","), Z++)
                                                                            : ((i = l), 0 === et && en(p)),
                                                                        i !== l)
                                                                    )
                                                                        if (eu() !== l) {
                                                                            if (((r = []), (s = ea()) !== l))
                                                                                for (; s !== l; ) r.push(s), (s = ea());
                                                                            else r = l;
                                                                            r !== l
                                                                                ? (e = n =
                                                                                      {
                                                                                          type: "selectFormat",
                                                                                          options: r,
                                                                                      })
                                                                                : ((Z = e), (e = l));
                                                                        } else (Z = e), (e = l);
                                                                    else (Z = e), (e = l);
                                                                else (Z = e), (e = l);
                                                            else (Z = e), (e = l);
                                                            return e;
                                                        })()),
                                                    (o = c) !== l)
                                                        ? (r = s = [s, a, o])
                                                        : ((Z = r), (r = l)),
                                                    r === l && (r = null),
                                                    r !== l)
                                                )
                                                    (s = eu()) !== l &&
                                                    (125 === t.charCodeAt(Z)
                                                        ? ((a = "}"), Z++)
                                                        : ((a = l), 0 === et && en(E)),
                                                    a !== l)
                                                        ? (e = n =
                                                              {
                                                                  type: "argumentElement",
                                                                  id: i,
                                                                  format: (u = r) && u[2],
                                                              })
                                                        : ((Z = e), (e = l));
                                                else (Z = e), (e = l);
                                            } else (Z = e), (e = l);
                                        else (Z = e), (e = l);
                                    else (Z = e), (e = l);
                                else (Z = e), (e = l);
                                return e;
                            })()),
                        e
                    );
                }
                function ea() {
                    var e, n, i, r, s, a, o, u, c;
                    return (
                        ((e = Z),
                        eu() !== l &&
                            ((a = Z),
                            (o = Z),
                            61 === t.charCodeAt(Z) ? ((u = "="), Z++) : ((u = l), 0 === et && en(b)),
                            u !== l && (c = e_()) !== l ? (o = u = [u, c]) : ((Z = o), (o = l)),
                            o !== l && (o = t.substring(a, Z)),
                            (a = o) === l && (a = ef()),
                            (n = a) !== l &&
                                eu() !== l &&
                                (123 === t.charCodeAt(Z) ? ((i = "{"), Z++) : ((i = l), 0 === et && en(f)),
                                i !== l &&
                                    eu() !== l &&
                                    (r = er()) !== l &&
                                    eu() !== l &&
                                    (125 === t.charCodeAt(Z) ? ((s = "}"), Z++) : ((s = l), 0 === et && en(E)),
                                    s !== l))))
                            ? (e = { type: "optionalFormatPattern", selector: n, value: r })
                            : ((Z = e), (e = l)),
                        e
                    );
                }
                function eo() {
                    var e, n, i, r, s, a, o;
                    if (
                        ((e = Z),
                        ((s = Z),
                        t.substr(Z, 7) === D ? ((a = D), (Z += 7)) : ((a = l), 0 === et && en(L)),
                        a !== l && eu() !== l && (o = e_()) !== l)
                            ? (s = a = o)
                            : ((Z = s), (s = l)),
                        (n = s) === l && (n = null),
                        n !== l)
                    )
                        if (eu() !== l) {
                            if (((i = []), (r = ea()) !== l)) for (; r !== l; ) i.push(r), (r = ea());
                            else i = l;
                            i !== l ? (e = n = { type: "pluralFormat", offset: n, options: i }) : ((Z = e), (e = l));
                        } else (Z = e), (e = l);
                    else (Z = e), (e = l);
                    return e;
                }
                function el() {
                    var e, n;
                    if (
                        (et++,
                        (e = []),
                        M.test(t.charAt(Z)) ? ((n = t.charAt(Z)), Z++) : ((n = l), 0 === et && en(P)),
                        n !== l)
                    )
                        for (; n !== l; )
                            e.push(n), M.test(t.charAt(Z)) ? ((n = t.charAt(Z)), Z++) : ((n = l), 0 === et && en(P));
                    else e = l;
                    return et--, e === l && ((n = l), 0 === et && en(w)), e;
                }
                function eu() {
                    var e, n, i;
                    for (et++, e = Z, n = [], i = el(); i !== l; ) n.push(i), (i = el());
                    return (
                        n !== l && (n = t.substring(e, Z)), (e = n), et--, e === l && ((n = l), 0 === et && en(x)), e
                    );
                }
                function ec() {
                    var e;
                    return k.test(t.charAt(Z)) ? ((e = t.charAt(Z)), Z++) : ((e = l), 0 === et && en(U)), e;
                }
                function ed() {
                    var e;
                    return G.test(t.charAt(Z)) ? ((e = t.charAt(Z)), Z++) : ((e = l), 0 === et && en(F)), e;
                }
                function e_() {
                    var e, n, i, r, s;
                    if ((48 === t.charCodeAt(Z) ? ((e = "0"), Z++) : ((e = l), 0 === et && en(V)), e === l)) {
                        if (
                            ((e = Z),
                            (n = Z),
                            B.test(t.charAt(Z)) ? ((i = t.charAt(Z)), Z++) : ((i = l), 0 === et && en(j)),
                            i !== l)
                        ) {
                            for (r = [], s = ec(); s !== l; ) r.push(s), (s = ec());
                            r !== l ? (n = i = [i, r]) : ((Z = n), (n = l));
                        } else (Z = n), (n = l);
                        n !== l && (n = t.substring(e, Z)), (e = n);
                    }
                    return e !== l && (e = parseInt(e, 10)), e;
                }
                function eh() {
                    var e, n, i, r, s, a, o, u;
                    return (
                        H.test(t.charAt(Z)) ? ((e = t.charAt(Z)), Z++) : ((e = l), 0 === et && en(Y)),
                        e === l &&
                            ((e = Z),
                            "\\\\" === t.substr(Z, 2) ? ((n = "\\\\"), (Z += 2)) : ((n = l), 0 === et && en(W)),
                            n !== l && (n = "\\"),
                            (e = n) === l &&
                                ((e = Z),
                                "\\#" === t.substr(Z, 2) ? ((n = "\\#"), (Z += 2)) : ((n = l), 0 === et && en(K)),
                                n !== l && (n = "\\#"),
                                (e = n) === l &&
                                    ((e = Z),
                                    "\\{" === t.substr(Z, 2) ? ((n = "\\{"), (Z += 2)) : ((n = l), 0 === et && en($)),
                                    n !== l && (n = "{"),
                                    (e = n) === l))) &&
                            ((e = Z),
                            "\\}" === t.substr(Z, 2) ? ((n = "\\}"), (Z += 2)) : ((n = l), 0 === et && en(z)),
                            n !== l && (n = "}"),
                            (e = n) === l) &&
                            (((e = Z),
                            "\\u" === t.substr(Z, 2) ? ((n = "\\u"), (Z += 2)) : ((n = l), 0 === et && en(q)),
                            n !== l &&
                                ((i = Z),
                                (r = Z),
                                (s = ed()) !== l && (a = ed()) !== l && (o = ed()) !== l && (u = ed()) !== l
                                    ? (r = s = [s, a, o, u])
                                    : ((Z = r), (r = l)),
                                r !== l && (r = t.substring(i, Z)),
                                (i = r) !== l))
                                ? (e = n = String.fromCharCode(parseInt(i, 16)))
                                : ((Z = e), (e = l))),
                        e
                    );
                }
                function ef() {
                    var e, t;
                    if (((e = []), (t = eh()) !== l)) for (; t !== l; ) e.push(t), (t = eh());
                    else e = l;
                    return e !== l && (e = e.join("")), e;
                }
                if ((a = c()) !== l && Z === t.length) return a;
                throw (
                    (a !== l && Z < t.length && en({ type: "end", description: "end of input" }),
                    (n = ee),
                    (r = (function (e) {
                        if (X !== e) {
                            X > e && ((X = 0), (Q = { line: 1, column: 1, seenCR: !1 }));
                            var n,
                                i,
                                r = Q;
                            for (n = X; n < e; n++)
                                "\n" === (i = t.charAt(n))
                                    ? (!r.seenCR && r.line++, (r.column = 1), (r.seenCR = !1))
                                    : "\r" === i || "\u2028" === i || "\u2029" === i
                                      ? (r.line++, (r.column = 1), (r.seenCR = !0))
                                      : (r.column++, (r.seenCR = !1));
                            X = e;
                        }
                        return Q;
                    })((i = J))),
                    (s = i < t.length ? t.charAt(i) : null),
                    null !== n &&
                        (function (e) {
                            var t = 1;
                            for (
                                e.sort(function (e, t) {
                                    return e.description < t.description ? -1 : +(e.description > t.description);
                                });
                                t < e.length;
                            )
                                e[t - 1] === e[t] ? e.splice(t, 1) : t++;
                        })(n),
                    new e(
                        (function (e, t) {
                            var n,
                                i = Array(e.length);
                            for (n = 0; n < e.length; n++) i[n] = e[n].description;
                            return (
                                "Expected " +
                                (e.length > 1 ? i.slice(0, -1).join(", ") + " or " + i[e.length - 1] : i[0]) +
                                " but " +
                                (t
                                    ? '"' +
                                      (function (e) {
                                          function t(e) {
                                              return e.charCodeAt(0).toString(16).toUpperCase();
                                          }
                                          return e
                                              .replace(/\\/g, "\\\\")
                                              .replace(/"/g, '\\"')
                                              .replace(/\x08/g, "\\b")
                                              .replace(/\t/g, "\\t")
                                              .replace(/\n/g, "\\n")
                                              .replace(/\f/g, "\\f")
                                              .replace(/\r/g, "\\r")
                                              .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (e) {
                                                  return "\\x0" + t(e);
                                              })
                                              .replace(/[\x10-\x1F\x80-\xFF]/g, function (e) {
                                                  return "\\x" + t(e);
                                              })
                                              .replace(/[\u0180-\u0FFF]/g, function (e) {
                                                  return "\\u0" + t(e);
                                              })
                                              .replace(/[\u1080-\uFFFF]/g, function (e) {
                                                  return "\\u" + t(e);
                                              });
                                      })(t) +
                                      '"'
                                    : "end of input") +
                                " found."
                            );
                        })(n, s),
                        n,
                        s,
                        i,
                        r.line,
                        r.column,
                    ))
                );
            },
        }
    );
})();
