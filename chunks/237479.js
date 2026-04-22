"use strict";
t.default = (function () {
    function e(e, t, n, r, i, s) {
        (this.message = e),
            (this.expected = t),
            (this.found = n),
            (this.offset = r),
            (this.line = i),
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
                    r,
                    i,
                    s,
                    a,
                    o = arguments.length > 1 ? arguments[1] : {},
                    l = {},
                    u = { start: er },
                    d = er,
                    c = function (e) {
                        var t,
                            n,
                            r,
                            i,
                            s,
                            a = "";
                        for (t = 0, r = e.length; t < r; t += 1)
                            for (n = 0, s = (i = e[t]).length; n < s; n += 1) a += i[n];
                        return a;
                    },
                    _ = /^[^ \t\n\r,.+={}#]/,
                    f = { type: "class", value: "[^ \\t\\n\\r,.+={}#]", description: "[^ \\t\\n\\r,.+={}#]" },
                    E = { type: "literal", value: "{", description: '"{"' },
                    h = { type: "literal", value: ",", description: '","' },
                    p = { type: "literal", value: "}", description: '"}"' },
                    m = "number",
                    g = { type: "literal", value: "number", description: '"number"' },
                    A = "date",
                    I = { type: "literal", value: "date", description: '"date"' },
                    T = "time",
                    S = { type: "literal", value: "time", description: '"time"' },
                    y = "plural",
                    N = { type: "literal", value: "plural", description: '"plural"' },
                    O = "selectordinal",
                    R = { type: "literal", value: "selectordinal", description: '"selectordinal"' },
                    v = "select",
                    C = { type: "literal", value: "select", description: '"select"' },
                    b = { type: "literal", value: "=", description: '"="' },
                    D = "offset:",
                    L = { type: "literal", value: "offset:", description: '"offset:"' },
                    w = { type: "other", description: "whitespace" },
                    M = /^[ \t\n\r]/,
                    P = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" },
                    U = { type: "other", description: "optionalWhitespace" },
                    k = /^[0-9]/,
                    x = { type: "class", value: "[0-9]", description: "[0-9]" },
                    G = /^[0-9a-f]/i,
                    V = { type: "class", value: "[0-9a-f]i", description: "[0-9a-f]i" },
                    F = { type: "literal", value: "0", description: '"0"' },
                    B = /^[1-9]/,
                    H = { type: "class", value: "[1-9]", description: "[1-9]" },
                    Y = /^[^{}\\\0-\x1F \t\n\r]/,
                    W = {
                        type: "class",
                        value: "[^{}\\\\\\0-\\x1F\x7f \\t\\n\\r]",
                        description: "[^{}\\\\\\0-\\x1F\x7f \\t\\n\\r]",
                    },
                    j = { type: "literal", value: "\\\\", description: '"\\\\\\\\"' },
                    K = { type: "literal", value: "\\#", description: '"\\\\#"' },
                    $ = { type: "literal", value: "\\{", description: '"\\\\{"' },
                    z = { type: "literal", value: "\\}", description: '"\\\\}"' },
                    q = { type: "literal", value: "\\u", description: '"\\\\u"' },
                    X = 0,
                    Q = 0,
                    J = { line: 1, column: 1, seenCR: !1 },
                    Z = 0,
                    ee = [],
                    et = 0;
                if ("startRule" in o) {
                    if (!(o.startRule in u)) throw Error("Can't start parsing from rule \"" + o.startRule + '".');
                    d = u[o.startRule];
                }
                function en(e) {
                    X < Z || (X > Z && ((Z = X), (ee = [])), ee.push(e));
                }
                function er() {
                    return ei();
                }
                function ei() {
                    var e, t;
                    for (e = [], t = es(); t !== l; ) e.push(t), (t = es());
                    return e !== l && (e = { type: "messageFormatPattern", elements: e }), e;
                }
                function es() {
                    var e, n;
                    return (
                        (n = (function () {
                            var e, n, r, i, s, a;
                            if (
                                ((e = X),
                                (n = []),
                                (r = X),
                                (i = eu()) !== l && (s = eE()) !== l && (a = eu()) !== l
                                    ? (r = i = [i, s, a])
                                    : ((X = r), (r = l)),
                                r !== l)
                            )
                                for (; r !== l; )
                                    n.push(r),
                                        (r = X),
                                        (i = eu()) !== l && (s = eE()) !== l && (a = eu()) !== l
                                            ? (r = i = [i, s, a])
                                            : ((X = r), (r = l));
                            else n = l;
                            return (
                                n !== l && (n = c(n)),
                                (e = n) === l && ((e = X), (n = el()) !== l && (n = t.substring(e, X)), (e = n)),
                                e
                            );
                        })()) !== l && (n = { type: "messageTextElement", value: n }),
                        (e = n) === l &&
                            (e = (function () {
                                var e, n, r, i, s, a, o, u, d, c, b, D, L, w, M, P;
                                if (
                                    ((e = X),
                                    123 === t.charCodeAt(X) ? ((n = "{"), X++) : ((n = l), 0 === et && en(E)),
                                    n !== l)
                                )
                                    if (eu() !== l)
                                        if (
                                            (r = (function () {
                                                var e, n, r;
                                                if ((e = e_()) === l) {
                                                    if (
                                                        ((e = X),
                                                        (n = []),
                                                        _.test(t.charAt(X))
                                                            ? ((r = t.charAt(X)), X++)
                                                            : ((r = l), 0 === et && en(f)),
                                                        r !== l)
                                                    )
                                                        for (; r !== l; )
                                                            n.push(r),
                                                                _.test(t.charAt(X))
                                                                    ? ((r = t.charAt(X)), X++)
                                                                    : ((r = l), 0 === et && en(f));
                                                    else n = l;
                                                    n !== l && (n = t.substring(e, X)), (e = n);
                                                }
                                                return e;
                                            })()) !== l
                                        )
                                            if (eu() !== l) {
                                                if (
                                                    ((i = X),
                                                    44 === t.charCodeAt(X)
                                                        ? ((s = ","), X++)
                                                        : ((s = l), 0 === et && en(h)),
                                                    s !== l &&
                                                    (a = eu()) !== l &&
                                                    (((c = X),
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
                                                            : ((L = l), 0 === et && en(h)),
                                                        L !== l && (w = eu()) !== l && (M = eE()) !== l
                                                            ? (D = L = [L, w, M])
                                                            : ((X = D), (D = l)),
                                                        D === l && (D = null),
                                                        D !== l))
                                                        ? (c = b = { type: b + "Format", style: (P = D) && P[2] })
                                                        : ((X = c), (c = l)),
                                                    (d = c) === l &&
                                                        (d = (function () {
                                                            var e, n, r, i;
                                                            return (
                                                                ((e = X),
                                                                t.substr(X, 6) === y
                                                                    ? ((n = y), (X += 6))
                                                                    : ((n = l), 0 === et && en(N)),
                                                                n !== l &&
                                                                    eu() !== l &&
                                                                    (44 === t.charCodeAt(X)
                                                                        ? ((r = ","), X++)
                                                                        : ((r = l), 0 === et && en(h)),
                                                                    r !== l && eu() !== l && (i = eo()) !== l))
                                                                    ? (e = n =
                                                                          {
                                                                              type: i.type,
                                                                              ordinal: !1,
                                                                              offset: i.offset || 0,
                                                                              options: i.options,
                                                                          })
                                                                    : ((X = e), (e = l)),
                                                                e
                                                            );
                                                        })()) === l &&
                                                        (d = (function () {
                                                            var e, n, r, i;
                                                            return (
                                                                ((e = X),
                                                                t.substr(X, 13) === O
                                                                    ? ((n = O), (X += 13))
                                                                    : ((n = l), 0 === et && en(R)),
                                                                n !== l &&
                                                                    eu() !== l &&
                                                                    (44 === t.charCodeAt(X)
                                                                        ? ((r = ","), X++)
                                                                        : ((r = l), 0 === et && en(h)),
                                                                    r !== l && eu() !== l && (i = eo()) !== l))
                                                                    ? (e = n =
                                                                          {
                                                                              type: i.type,
                                                                              ordinal: !0,
                                                                              offset: i.offset || 0,
                                                                              options: i.options,
                                                                          })
                                                                    : ((X = e), (e = l)),
                                                                e
                                                            );
                                                        })()) === l &&
                                                        (d = (function () {
                                                            var e, n, r, i, s;
                                                            if (
                                                                ((e = X),
                                                                t.substr(X, 6) === v
                                                                    ? ((n = v), (X += 6))
                                                                    : ((n = l), 0 === et && en(C)),
                                                                n !== l)
                                                            )
                                                                if (eu() !== l)
                                                                    if (
                                                                        (44 === t.charCodeAt(X)
                                                                            ? ((r = ","), X++)
                                                                            : ((r = l), 0 === et && en(h)),
                                                                        r !== l)
                                                                    )
                                                                        if (eu() !== l) {
                                                                            if (((i = []), (s = ea()) !== l))
                                                                                for (; s !== l; ) i.push(s), (s = ea());
                                                                            else i = l;
                                                                            i !== l
                                                                                ? (e = n =
                                                                                      {
                                                                                          type: "selectFormat",
                                                                                          options: i,
                                                                                      })
                                                                                : ((X = e), (e = l));
                                                                        } else (X = e), (e = l);
                                                                    else (X = e), (e = l);
                                                                else (X = e), (e = l);
                                                            else (X = e), (e = l);
                                                            return e;
                                                        })()),
                                                    (o = d) !== l)
                                                        ? (i = s = [s, a, o])
                                                        : ((X = i), (i = l)),
                                                    i === l && (i = null),
                                                    i !== l)
                                                )
                                                    (s = eu()) !== l &&
                                                    (125 === t.charCodeAt(X)
                                                        ? ((a = "}"), X++)
                                                        : ((a = l), 0 === et && en(p)),
                                                    a !== l)
                                                        ? (e = n =
                                                              {
                                                                  type: "argumentElement",
                                                                  id: r,
                                                                  format: (u = i) && u[2],
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
                    var e, n, r, i, s, a, o, u, d;
                    return (
                        ((e = X),
                        eu() !== l &&
                            ((a = X),
                            (o = X),
                            61 === t.charCodeAt(X) ? ((u = "="), X++) : ((u = l), 0 === et && en(b)),
                            u !== l && (d = e_()) !== l ? (o = u = [u, d]) : ((X = o), (o = l)),
                            o !== l && (o = t.substring(a, X)),
                            (a = o) === l && (a = eE()),
                            (n = a) !== l &&
                                eu() !== l &&
                                (123 === t.charCodeAt(X) ? ((r = "{"), X++) : ((r = l), 0 === et && en(E)),
                                r !== l &&
                                    eu() !== l &&
                                    (i = ei()) !== l &&
                                    eu() !== l &&
                                    (125 === t.charCodeAt(X) ? ((s = "}"), X++) : ((s = l), 0 === et && en(p)),
                                    s !== l))))
                            ? (e = { type: "optionalFormatPattern", selector: n, value: i })
                            : ((X = e), (e = l)),
                        e
                    );
                }
                function eo() {
                    var e, n, r, i, s, a, o;
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
                            if (((r = []), (i = ea()) !== l)) for (; i !== l; ) r.push(i), (i = ea());
                            else r = l;
                            r !== l ? (e = n = { type: "pluralFormat", offset: n, options: r }) : ((X = e), (e = l));
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
                    var e, n, r;
                    for (et++, e = X, n = [], r = el(); r !== l; ) n.push(r), (r = el());
                    return (
                        n !== l && (n = t.substring(e, X)), (e = n), et--, e === l && ((n = l), 0 === et && en(U)), e
                    );
                }
                function ed() {
                    var e;
                    return k.test(t.charAt(X)) ? ((e = t.charAt(X)), X++) : ((e = l), 0 === et && en(x)), e;
                }
                function ec() {
                    var e;
                    return G.test(t.charAt(X)) ? ((e = t.charAt(X)), X++) : ((e = l), 0 === et && en(V)), e;
                }
                function e_() {
                    var e, n, r, i, s;
                    if ((48 === t.charCodeAt(X) ? ((e = "0"), X++) : ((e = l), 0 === et && en(F)), e === l)) {
                        if (
                            ((e = X),
                            (n = X),
                            B.test(t.charAt(X)) ? ((r = t.charAt(X)), X++) : ((r = l), 0 === et && en(H)),
                            r !== l)
                        ) {
                            for (i = [], s = ed(); s !== l; ) i.push(s), (s = ed());
                            i !== l ? (n = r = [r, i]) : ((X = n), (n = l));
                        } else (X = n), (n = l);
                        n !== l && (n = t.substring(e, X)), (e = n);
                    }
                    return e !== l && (e = parseInt(e, 10)), e;
                }
                function ef() {
                    var e, n, r, i, s, a, o, u;
                    return (
                        Y.test(t.charAt(X)) ? ((e = t.charAt(X)), X++) : ((e = l), 0 === et && en(W)),
                        e === l &&
                            ((e = X),
                            "\\\\" === t.substr(X, 2) ? ((n = "\\\\"), (X += 2)) : ((n = l), 0 === et && en(j)),
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
                                ((r = X),
                                (i = X),
                                (s = ec()) !== l && (a = ec()) !== l && (o = ec()) !== l && (u = ec()) !== l
                                    ? (i = s = [s, a, o, u])
                                    : ((X = i), (i = l)),
                                i !== l && (i = t.substring(r, X)),
                                (r = i) !== l))
                                ? (e = n = String.fromCharCode(parseInt(r, 16)))
                                : ((X = e), (e = l))),
                        e
                    );
                }
                function eE() {
                    var e, t;
                    if (((e = []), (t = ef()) !== l)) for (; t !== l; ) e.push(t), (t = ef());
                    else e = l;
                    return e !== l && (e = e.join("")), e;
                }
                if ((a = d()) !== l && X === t.length) return a;
                throw (
                    (a !== l && X < t.length && en({ type: "end", description: "end of input" }),
                    (n = ee),
                    (i = (function (e) {
                        if (Q !== e) {
                            Q > e && ((Q = 0), (J = { line: 1, column: 1, seenCR: !1 }));
                            var n,
                                r,
                                i = J;
                            for (n = Q; n < e; n++)
                                "\n" === (r = t.charAt(n))
                                    ? (!i.seenCR && i.line++, (i.column = 1), (i.seenCR = !1))
                                    : "\r" === r || "\u2028" === r || "\u2029" === r
                                      ? (i.line++, (i.column = 1), (i.seenCR = !0))
                                      : (i.column++, (i.seenCR = !1));
                            Q = e;
                        }
                        return J;
                    })((r = Z))),
                    (s = r < t.length ? t.charAt(r) : null),
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
                                r = Array(e.length);
                            for (n = 0; n < e.length; n++) r[n] = e[n].description;
                            return (
                                "Expected " +
                                (e.length > 1 ? r.slice(0, -1).join(", ") + " or " + r[e.length - 1] : r[0]) +
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
                        r,
                        i.line,
                        i.column,
                    ))
                );
            },
        }
    );
})();
