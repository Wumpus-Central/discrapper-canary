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
                    N = { type: "literal", value: "plural", description: '"plural"' },
                    v = "selectordinal",
                    C = { type: "literal", value: "selectordinal", description: '"selectordinal"' },
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
                    H = { type: "class", value: "[1-9]", description: "[1-9]" },
                    j = /^[^{}\\\0-\x1F \t\n\r]/,
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
                    X = 0,
                    Z = 0,
                    Q = { line: 1, column: 1, seenCR: !1 },
                    J = 0,
                    ee = [],
                    et = 0;
                if ("startRule" in o) {
                    if (!(o.startRule in u)) throw Error("Can't start parsing from rule \"" + o.startRule + '".');
                    c = u[o.startRule];
                }
                function en(e) {
                    X < J || (X > J && ((J = X), (ee = [])), ee.push(e));
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
                                ((e = X),
                                (n = []),
                                (i = X),
                                (r = eu()) !== l && (s = ef()) !== l && (a = eu()) !== l
                                    ? (i = r = [r, s, a])
                                    : ((X = i), (i = l)),
                                i !== l)
                            )
                                for (; i !== l; )
                                    n.push(i),
                                        (i = X),
                                        (r = eu()) !== l && (s = ef()) !== l && (a = eu()) !== l
                                            ? (i = r = [r, s, a])
                                            : ((X = i), (i = l));
                            else n = l;
                            return (
                                n !== l && (n = d(n)),
                                (e = n) === l && ((e = X), (n = el()) !== l && (n = t.substring(e, X)), (e = n)),
                                e
                            );
                        })()) !== l && (n = { type: "messageTextElement", value: n }),
                        (e = n) === l &&
                            (e = (function () {
                                var e, n, i, r, s, a, o, u, c, d, b, D, L, w, M, P;
                                if (
                                    ((e = X),
                                    123 === t.charCodeAt(X) ? ((n = "{"), X++) : ((n = l), 0 === et && en(f)),
                                    n !== l)
                                )
                                    if (eu() !== l)
                                        if (
                                            (i = (function () {
                                                var e, n, i;
                                                if ((e = e_()) === l) {
                                                    if (
                                                        ((e = X),
                                                        (n = []),
                                                        _.test(t.charAt(X))
                                                            ? ((i = t.charAt(X)), X++)
                                                            : ((i = l), 0 === et && en(h)),
                                                        i !== l)
                                                    )
                                                        for (; i !== l; )
                                                            n.push(i),
                                                                _.test(t.charAt(X))
                                                                    ? ((i = t.charAt(X)), X++)
                                                                    : ((i = l), 0 === et && en(h));
                                                    else n = l;
                                                    n !== l && (n = t.substring(e, X)), (e = n);
                                                }
                                                return e;
                                            })()) !== l
                                        )
                                            if (eu() !== l) {
                                                if (
                                                    ((r = X),
                                                    44 === t.charCodeAt(X)
                                                        ? ((s = ","), X++)
                                                        : ((s = l), 0 === et && en(p)),
                                                    s !== l &&
                                                    (a = eu()) !== l &&
                                                    (((d = X),
                                                    t.substr(X, 6) === m
                                                        ? ((b = m), (X += 6))
                                                        : ((b = l), 0 === et && en(g)),
                                                    b === l &&
                                                        (t.substr(X, 4) === A
                                                            ? ((b = A), (X += 4))
                                                            : ((b = l), 0 === et && en(I)),
                                                        b === l &&
                                                            (t.substr(X, 4) === T
                                                                ? ((b = T), (X += 4))
                                                                : ((b = l), 0 === et && en(S)))),
                                                    b !== l &&
                                                        eu() !== l &&
                                                        ((D = X),
                                                        44 === t.charCodeAt(X)
                                                            ? ((L = ","), X++)
                                                            : ((L = l), 0 === et && en(p)),
                                                        L !== l && (w = eu()) !== l && (M = ef()) !== l
                                                            ? (D = L = [L, w, M])
                                                            : ((X = D), (D = l)),
                                                        D === l && (D = null),
                                                        D !== l))
                                                        ? (d = b = { type: b + "Format", style: (P = D) && P[2] })
                                                        : ((X = d), (d = l)),
                                                    (c = d) === l &&
                                                        (c = (function () {
                                                            var e, n, i, r;
                                                            return (
                                                                ((e = X),
                                                                t.substr(X, 6) === y
                                                                    ? ((n = y), (X += 6))
                                                                    : ((n = l), 0 === et && en(N)),
                                                                n !== l &&
                                                                    eu() !== l &&
                                                                    (44 === t.charCodeAt(X)
                                                                        ? ((i = ","), X++)
                                                                        : ((i = l), 0 === et && en(p)),
                                                                    i !== l && eu() !== l && (r = eo()) !== l))
                                                                    ? (e = n =
                                                                          {
                                                                              type: r.type,
                                                                              ordinal: !1,
                                                                              offset: r.offset || 0,
                                                                              options: r.options,
                                                                          })
                                                                    : ((X = e), (e = l)),
                                                                e
                                                            );
                                                        })()) === l &&
                                                        (c = (function () {
                                                            var e, n, i, r;
                                                            return (
                                                                ((e = X),
                                                                t.substr(X, 13) === v
                                                                    ? ((n = v), (X += 13))
                                                                    : ((n = l), 0 === et && en(C)),
                                                                n !== l &&
                                                                    eu() !== l &&
                                                                    (44 === t.charCodeAt(X)
                                                                        ? ((i = ","), X++)
                                                                        : ((i = l), 0 === et && en(p)),
                                                                    i !== l && eu() !== l && (r = eo()) !== l))
                                                                    ? (e = n =
                                                                          {
                                                                              type: r.type,
                                                                              ordinal: !0,
                                                                              offset: r.offset || 0,
                                                                              options: r.options,
                                                                          })
                                                                    : ((X = e), (e = l)),
                                                                e
                                                            );
                                                        })()) === l &&
                                                        (c = (function () {
                                                            var e, n, i, r, s;
                                                            if (
                                                                ((e = X),
                                                                t.substr(X, 6) === R
                                                                    ? ((n = R), (X += 6))
                                                                    : ((n = l), 0 === et && en(O)),
                                                                n !== l)
                                                            )
                                                                if (eu() !== l)
                                                                    if (
                                                                        (44 === t.charCodeAt(X)
                                                                            ? ((i = ","), X++)
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
                                                                                : ((X = e), (e = l));
                                                                        } else (X = e), (e = l);
                                                                    else (X = e), (e = l);
                                                                else (X = e), (e = l);
                                                            else (X = e), (e = l);
                                                            return e;
                                                        })()),
                                                    (o = c) !== l)
                                                        ? (r = s = [s, a, o])
                                                        : ((X = r), (r = l)),
                                                    r === l && (r = null),
                                                    r !== l)
                                                )
                                                    (s = eu()) !== l &&
                                                    (125 === t.charCodeAt(X)
                                                        ? ((a = "}"), X++)
                                                        : ((a = l), 0 === et && en(E)),
                                                    a !== l)
                                                        ? (e = n =
                                                              {
                                                                  type: "argumentElement",
                                                                  id: i,
                                                                  format: (u = r) && u[2],
                                                              })
                                                        : ((X = e), (e = l));
                                                else (X = e), (e = l);
                                            } else (X = e), (e = l);
                                        else (X = e), (e = l);
                                    else (X = e), (e = l);
                                else (X = e), (e = l);
                                return e;
                            })()),
                        e
                    );
                }
                function ea() {
                    var e, n, i, r, s, a, o, u, c;
                    return (
                        ((e = X),
                        eu() !== l &&
                            ((a = X),
                            (o = X),
                            61 === t.charCodeAt(X) ? ((u = "="), X++) : ((u = l), 0 === et && en(b)),
                            u !== l && (c = e_()) !== l ? (o = u = [u, c]) : ((X = o), (o = l)),
                            o !== l && (o = t.substring(a, X)),
                            (a = o) === l && (a = ef()),
                            (n = a) !== l &&
                                eu() !== l &&
                                (123 === t.charCodeAt(X) ? ((i = "{"), X++) : ((i = l), 0 === et && en(f)),
                                i !== l &&
                                    eu() !== l &&
                                    (r = er()) !== l &&
                                    eu() !== l &&
                                    (125 === t.charCodeAt(X) ? ((s = "}"), X++) : ((s = l), 0 === et && en(E)),
                                    s !== l))))
                            ? (e = { type: "optionalFormatPattern", selector: n, value: r })
                            : ((X = e), (e = l)),
                        e
                    );
                }
                function eo() {
                    var e, n, i, r, s, a, o;
                    if (
                        ((e = X),
                        ((s = X),
                        t.substr(X, 7) === D ? ((a = D), (X += 7)) : ((a = l), 0 === et && en(L)),
                        a !== l && eu() !== l && (o = e_()) !== l)
                            ? (s = a = o)
                            : ((X = s), (s = l)),
                        (n = s) === l && (n = null),
                        n !== l)
                    )
                        if (eu() !== l) {
                            if (((i = []), (r = ea()) !== l)) for (; r !== l; ) i.push(r), (r = ea());
                            else i = l;
                            i !== l ? (e = n = { type: "pluralFormat", offset: n, options: i }) : ((X = e), (e = l));
                        } else (X = e), (e = l);
                    else (X = e), (e = l);
                    return e;
                }
                function el() {
                    var e, n;
                    if (
                        (et++,
                        (e = []),
                        M.test(t.charAt(X)) ? ((n = t.charAt(X)), X++) : ((n = l), 0 === et && en(P)),
                        n !== l)
                    )
                        for (; n !== l; )
                            e.push(n), M.test(t.charAt(X)) ? ((n = t.charAt(X)), X++) : ((n = l), 0 === et && en(P));
                    else e = l;
                    return et--, e === l && ((n = l), 0 === et && en(w)), e;
                }
                function eu() {
                    var e, n, i;
                    for (et++, e = X, n = [], i = el(); i !== l; ) n.push(i), (i = el());
                    return (
                        n !== l && (n = t.substring(e, X)), (e = n), et--, e === l && ((n = l), 0 === et && en(x)), e
                    );
                }
                function ec() {
                    var e;
                    return k.test(t.charAt(X)) ? ((e = t.charAt(X)), X++) : ((e = l), 0 === et && en(U)), e;
                }
                function ed() {
                    var e;
                    return G.test(t.charAt(X)) ? ((e = t.charAt(X)), X++) : ((e = l), 0 === et && en(F)), e;
                }
                function e_() {
                    var e, n, i, r, s;
                    if ((48 === t.charCodeAt(X) ? ((e = "0"), X++) : ((e = l), 0 === et && en(V)), e === l)) {
                        if (
                            ((e = X),
                            (n = X),
                            B.test(t.charAt(X)) ? ((i = t.charAt(X)), X++) : ((i = l), 0 === et && en(H)),
                            i !== l)
                        ) {
                            for (r = [], s = ec(); s !== l; ) r.push(s), (s = ec());
                            r !== l ? (n = i = [i, r]) : ((X = n), (n = l));
                        } else (X = n), (n = l);
                        n !== l && (n = t.substring(e, X)), (e = n);
                    }
                    return e !== l && (e = parseInt(e, 10)), e;
                }
                function eh() {
                    var e, n, i, r, s, a, o, u;
                    return (
                        j.test(t.charAt(X)) ? ((e = t.charAt(X)), X++) : ((e = l), 0 === et && en(Y)),
                        e === l &&
                            ((e = X),
                            "\\\\" === t.substr(X, 2) ? ((n = "\\\\"), (X += 2)) : ((n = l), 0 === et && en(W)),
                            n !== l && (n = "\\"),
                            (e = n) === l &&
                                ((e = X),
                                "\\#" === t.substr(X, 2) ? ((n = "\\#"), (X += 2)) : ((n = l), 0 === et && en(K)),
                                n !== l && (n = "\\#"),
                                (e = n) === l &&
                                    ((e = X),
                                    "\\{" === t.substr(X, 2) ? ((n = "\\{"), (X += 2)) : ((n = l), 0 === et && en($)),
                                    n !== l && (n = "{"),
                                    (e = n) === l))) &&
                            ((e = X),
                            "\\}" === t.substr(X, 2) ? ((n = "\\}"), (X += 2)) : ((n = l), 0 === et && en(z)),
                            n !== l && (n = "}"),
                            (e = n) === l) &&
                            (((e = X),
                            "\\u" === t.substr(X, 2) ? ((n = "\\u"), (X += 2)) : ((n = l), 0 === et && en(q)),
                            n !== l &&
                                ((i = X),
                                (r = X),
                                (s = ed()) !== l && (a = ed()) !== l && (o = ed()) !== l && (u = ed()) !== l
                                    ? (r = s = [s, a, o, u])
                                    : ((X = r), (r = l)),
                                r !== l && (r = t.substring(i, X)),
                                (i = r) !== l))
                                ? (e = n = String.fromCharCode(parseInt(i, 16)))
                                : ((X = e), (e = l))),
                        e
                    );
                }
                function ef() {
                    var e, t;
                    if (((e = []), (t = eh()) !== l)) for (; t !== l; ) e.push(t), (t = eh());
                    else e = l;
                    return e !== l && (e = e.join("")), e;
                }
                if ((a = c()) !== l && X === t.length) return a;
                throw (
                    (a !== l && X < t.length && en({ type: "end", description: "end of input" }),
                    (n = ee),
                    (r = (function (e) {
                        if (Z !== e) {
                            Z > e && ((Z = 0), (Q = { line: 1, column: 1, seenCR: !1 }));
                            var n,
                                i,
                                r = Q;
                            for (n = Z; n < e; n++)
                                "\n" === (i = t.charAt(n))
                                    ? (!r.seenCR && r.line++, (r.column = 1), (r.seenCR = !1))
                                    : "\r" === i || "\u2028" === i || "\u2029" === i
                                      ? (r.line++, (r.column = 1), (r.seenCR = !0))
                                      : (r.column++, (r.seenCR = !1));
                            Z = e;
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
