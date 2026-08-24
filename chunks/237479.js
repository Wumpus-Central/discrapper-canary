"use strict";
t.default = (function () {
    function e(e, t, r, n, i, o) {
        (this.message = e),
            (this.expected = t),
            (this.found = r),
            (this.offset = n),
            (this.line = i),
            (this.column = o),
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
                var r,
                    n,
                    i,
                    o,
                    a,
                    s = arguments.length > 1 ? arguments[1] : {},
                    l = {},
                    u = { start: en },
                    c = en,
                    f = function (e) {
                        var t,
                            r,
                            n,
                            i,
                            o,
                            a = "";
                        for (t = 0, n = e.length; t < n; t += 1)
                            for (r = 0, o = (i = e[t]).length; r < o; r += 1) a += i[r];
                        return a;
                    },
                    d = /^[^ \t\n\r,.+={}#]/,
                    p = { type: "class", value: "[^ \\t\\n\\r,.+={}#]", description: "[^ \\t\\n\\r,.+={}#]" },
                    h = { type: "literal", value: "{", description: '"{"' },
                    m = { type: "literal", value: ",", description: '","' },
                    v = { type: "literal", value: "}", description: '"}"' },
                    y = "number",
                    g = { type: "literal", value: "number", description: '"number"' },
                    b = "date",
                    w = { type: "literal", value: "date", description: '"date"' },
                    _ = "time",
                    S = { type: "literal", value: "time", description: '"time"' },
                    x = "plural",
                    E = { type: "literal", value: "plural", description: '"plural"' },
                    k = "selectordinal",
                    C = { type: "literal", value: "selectordinal", description: '"selectordinal"' },
                    T = "select",
                    M = { type: "literal", value: "select", description: '"select"' },
                    P = { type: "literal", value: "=", description: '"="' },
                    A = "offset:",
                    I = { type: "literal", value: "offset:", description: '"offset:"' },
                    O = { type: "other", description: "whitespace" },
                    D = /^[ \t\n\r]/,
                    R = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" },
                    L = { type: "other", description: "optionalWhitespace" },
                    F = /^[0-9]/,
                    N = { type: "class", value: "[0-9]", description: "[0-9]" },
                    j = /^[0-9a-f]/i,
                    B = { type: "class", value: "[0-9a-f]i", description: "[0-9a-f]i" },
                    K = { type: "literal", value: "0", description: '"0"' },
                    $ = /^[1-9]/,
                    V = { type: "class", value: "[1-9]", description: "[1-9]" },
                    U = /^[^{}\\\0-\x1F \t\n\r]/,
                    z = {
                        type: "class",
                        value: "[^{}\\\\\\0-\\x1F\x7f \\t\\n\\r]",
                        description: "[^{}\\\\\\0-\\x1F\x7f \\t\\n\\r]",
                    },
                    W = { type: "literal", value: "\\\\", description: '"\\\\\\\\"' },
                    H = { type: "literal", value: "\\#", description: '"\\\\#"' },
                    G = { type: "literal", value: "\\{", description: '"\\\\{"' },
                    q = { type: "literal", value: "\\}", description: '"\\\\}"' },
                    Y = { type: "literal", value: "\\u", description: '"\\\\u"' },
                    X = 0,
                    J = 0,
                    Q = { line: 1, column: 1, seenCR: !1 },
                    Z = 0,
                    ee = [],
                    et = 0;
                if ("startRule" in s) {
                    if (!(s.startRule in u)) throw Error("Can't start parsing from rule \"" + s.startRule + '".');
                    c = u[s.startRule];
                }
                function er(e) {
                    X < Z || (X > Z && ((Z = X), (ee = [])), ee.push(e));
                }
                function en() {
                    return ei();
                }
                function ei() {
                    var e, t;
                    for (e = [], t = eo(); t !== l; ) e.push(t), (t = eo());
                    return e !== l && (e = { type: "messageFormatPattern", elements: e }), e;
                }
                function eo() {
                    var e, r;
                    return (
                        (r = (function () {
                            var e, r, n, i, o, a;
                            if (
                                ((e = X),
                                (r = []),
                                (n = X),
                                (i = eu()) !== l && (o = eh()) !== l && (a = eu()) !== l
                                    ? (n = i = [i, o, a])
                                    : ((X = n), (n = l)),
                                n !== l)
                            )
                                for (; n !== l; )
                                    r.push(n),
                                        (n = X),
                                        (i = eu()) !== l && (o = eh()) !== l && (a = eu()) !== l
                                            ? (n = i = [i, o, a])
                                            : ((X = n), (n = l));
                            else r = l;
                            return (
                                r !== l && (r = f(r)),
                                (e = r) === l && ((e = X), (r = el()) !== l && (r = t.substring(e, X)), (e = r)),
                                e
                            );
                        })()) !== l && (r = { type: "messageTextElement", value: r }),
                        (e = r) === l &&
                            (e = (function () {
                                var e, r, n, i, o, a, s, u, c, f, P, A, I, O, D, R;
                                if (
                                    ((e = X),
                                    123 === t.charCodeAt(X) ? ((r = "{"), X++) : ((r = l), 0 === et && er(h)),
                                    r !== l)
                                )
                                    if (eu() !== l)
                                        if (
                                            (n = (function () {
                                                var e, r, n;
                                                if ((e = ed()) === l) {
                                                    if (
                                                        ((e = X),
                                                        (r = []),
                                                        d.test(t.charAt(X))
                                                            ? ((n = t.charAt(X)), X++)
                                                            : ((n = l), 0 === et && er(p)),
                                                        n !== l)
                                                    )
                                                        for (; n !== l; )
                                                            r.push(n),
                                                                d.test(t.charAt(X))
                                                                    ? ((n = t.charAt(X)), X++)
                                                                    : ((n = l), 0 === et && er(p));
                                                    else r = l;
                                                    r !== l && (r = t.substring(e, X)), (e = r);
                                                }
                                                return e;
                                            })()) !== l
                                        )
                                            if (eu() !== l) {
                                                if (
                                                    ((i = X),
                                                    44 === t.charCodeAt(X)
                                                        ? ((o = ","), X++)
                                                        : ((o = l), 0 === et && er(m)),
                                                    o !== l &&
                                                    (a = eu()) !== l &&
                                                    (((f = X),
                                                    t.substr(X, 6) === y
                                                        ? ((P = y), (X += 6))
                                                        : ((P = l), 0 === et && er(g)),
                                                    P === l &&
                                                        (t.substr(X, 4) === b
                                                            ? ((P = b), (X += 4))
                                                            : ((P = l), 0 === et && er(w)),
                                                        P === l &&
                                                            (t.substr(X, 4) === _
                                                                ? ((P = _), (X += 4))
                                                                : ((P = l), 0 === et && er(S)))),
                                                    P !== l &&
                                                        eu() !== l &&
                                                        ((A = X),
                                                        44 === t.charCodeAt(X)
                                                            ? ((I = ","), X++)
                                                            : ((I = l), 0 === et && er(m)),
                                                        I !== l && (O = eu()) !== l && (D = eh()) !== l
                                                            ? (A = I = [I, O, D])
                                                            : ((X = A), (A = l)),
                                                        A === l && (A = null),
                                                        A !== l))
                                                        ? (f = P = { type: P + "Format", style: (R = A) && R[2] })
                                                        : ((X = f), (f = l)),
                                                    (c = f) === l &&
                                                        (c = (function () {
                                                            var e, r, n, i;
                                                            return (
                                                                ((e = X),
                                                                t.substr(X, 6) === x
                                                                    ? ((r = x), (X += 6))
                                                                    : ((r = l), 0 === et && er(E)),
                                                                r !== l &&
                                                                    eu() !== l &&
                                                                    (44 === t.charCodeAt(X)
                                                                        ? ((n = ","), X++)
                                                                        : ((n = l), 0 === et && er(m)),
                                                                    n !== l && eu() !== l && (i = es()) !== l))
                                                                    ? (e = r =
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
                                                        (c = (function () {
                                                            var e, r, n, i;
                                                            return (
                                                                ((e = X),
                                                                t.substr(X, 13) === k
                                                                    ? ((r = k), (X += 13))
                                                                    : ((r = l), 0 === et && er(C)),
                                                                r !== l &&
                                                                    eu() !== l &&
                                                                    (44 === t.charCodeAt(X)
                                                                        ? ((n = ","), X++)
                                                                        : ((n = l), 0 === et && er(m)),
                                                                    n !== l && eu() !== l && (i = es()) !== l))
                                                                    ? (e = r =
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
                                                        (c = (function () {
                                                            var e, r, n, i, o;
                                                            if (
                                                                ((e = X),
                                                                t.substr(X, 6) === T
                                                                    ? ((r = T), (X += 6))
                                                                    : ((r = l), 0 === et && er(M)),
                                                                r !== l)
                                                            )
                                                                if (eu() !== l)
                                                                    if (
                                                                        (44 === t.charCodeAt(X)
                                                                            ? ((n = ","), X++)
                                                                            : ((n = l), 0 === et && er(m)),
                                                                        n !== l)
                                                                    )
                                                                        if (eu() !== l) {
                                                                            if (((i = []), (o = ea()) !== l))
                                                                                for (; o !== l; ) i.push(o), (o = ea());
                                                                            else i = l;
                                                                            i !== l
                                                                                ? (e = r =
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
                                                    (s = c) !== l)
                                                        ? (i = o = [o, a, s])
                                                        : ((X = i), (i = l)),
                                                    i === l && (i = null),
                                                    i !== l)
                                                )
                                                    (o = eu()) !== l &&
                                                    (125 === t.charCodeAt(X)
                                                        ? ((a = "}"), X++)
                                                        : ((a = l), 0 === et && er(v)),
                                                    a !== l)
                                                        ? (e = r =
                                                              {
                                                                  type: "argumentElement",
                                                                  id: n,
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
                    var e, r, n, i, o, a, s, u, c;
                    return (
                        ((e = X),
                        eu() !== l &&
                            ((a = X),
                            (s = X),
                            61 === t.charCodeAt(X) ? ((u = "="), X++) : ((u = l), 0 === et && er(P)),
                            u !== l && (c = ed()) !== l ? (s = u = [u, c]) : ((X = s), (s = l)),
                            s !== l && (s = t.substring(a, X)),
                            (a = s) === l && (a = eh()),
                            (r = a) !== l &&
                                eu() !== l &&
                                (123 === t.charCodeAt(X) ? ((n = "{"), X++) : ((n = l), 0 === et && er(h)),
                                n !== l &&
                                    eu() !== l &&
                                    (i = ei()) !== l &&
                                    eu() !== l &&
                                    (125 === t.charCodeAt(X) ? ((o = "}"), X++) : ((o = l), 0 === et && er(v)),
                                    o !== l))))
                            ? (e = { type: "optionalFormatPattern", selector: r, value: i })
                            : ((X = e), (e = l)),
                        e
                    );
                }
                function es() {
                    var e, r, n, i, o, a, s;
                    if (
                        ((e = X),
                        ((o = X),
                        t.substr(X, 7) === A ? ((a = A), (X += 7)) : ((a = l), 0 === et && er(I)),
                        a !== l && eu() !== l && (s = ed()) !== l)
                            ? (o = a = s)
                            : ((X = o), (o = l)),
                        (r = o) === l && (r = null),
                        r !== l)
                    )
                        if (eu() !== l) {
                            if (((n = []), (i = ea()) !== l)) for (; i !== l; ) n.push(i), (i = ea());
                            else n = l;
                            n !== l ? (e = r = { type: "pluralFormat", offset: r, options: n }) : ((X = e), (e = l));
                        } else (X = e), (e = l);
                    else (X = e), (e = l);
                    return e;
                }
                function el() {
                    var e, r;
                    if (
                        (et++,
                        (e = []),
                        D.test(t.charAt(X)) ? ((r = t.charAt(X)), X++) : ((r = l), 0 === et && er(R)),
                        r !== l)
                    )
                        for (; r !== l; )
                            e.push(r), D.test(t.charAt(X)) ? ((r = t.charAt(X)), X++) : ((r = l), 0 === et && er(R));
                    else e = l;
                    return et--, e === l && ((r = l), 0 === et && er(O)), e;
                }
                function eu() {
                    var e, r, n;
                    for (et++, e = X, r = [], n = el(); n !== l; ) r.push(n), (n = el());
                    return (
                        r !== l && (r = t.substring(e, X)), (e = r), et--, e === l && ((r = l), 0 === et && er(L)), e
                    );
                }
                function ec() {
                    var e;
                    return F.test(t.charAt(X)) ? ((e = t.charAt(X)), X++) : ((e = l), 0 === et && er(N)), e;
                }
                function ef() {
                    var e;
                    return j.test(t.charAt(X)) ? ((e = t.charAt(X)), X++) : ((e = l), 0 === et && er(B)), e;
                }
                function ed() {
                    var e, r, n, i, o;
                    if ((48 === t.charCodeAt(X) ? ((e = "0"), X++) : ((e = l), 0 === et && er(K)), e === l)) {
                        if (
                            ((e = X),
                            (r = X),
                            $.test(t.charAt(X)) ? ((n = t.charAt(X)), X++) : ((n = l), 0 === et && er(V)),
                            n !== l)
                        ) {
                            for (i = [], o = ec(); o !== l; ) i.push(o), (o = ec());
                            i !== l ? (r = n = [n, i]) : ((X = r), (r = l));
                        } else (X = r), (r = l);
                        r !== l && (r = t.substring(e, X)), (e = r);
                    }
                    return e !== l && (e = parseInt(e, 10)), e;
                }
                function ep() {
                    var e, r, n, i, o, a, s, u;
                    return (
                        U.test(t.charAt(X)) ? ((e = t.charAt(X)), X++) : ((e = l), 0 === et && er(z)),
                        e === l &&
                            ((e = X),
                            "\\\\" === t.substr(X, 2) ? ((r = "\\\\"), (X += 2)) : ((r = l), 0 === et && er(W)),
                            r !== l && (r = "\\"),
                            (e = r) === l &&
                                ((e = X),
                                "\\#" === t.substr(X, 2) ? ((r = "\\#"), (X += 2)) : ((r = l), 0 === et && er(H)),
                                r !== l && (r = "\\#"),
                                (e = r) === l &&
                                    ((e = X),
                                    "\\{" === t.substr(X, 2) ? ((r = "\\{"), (X += 2)) : ((r = l), 0 === et && er(G)),
                                    r !== l && (r = "{"),
                                    (e = r) === l))) &&
                            ((e = X),
                            "\\}" === t.substr(X, 2) ? ((r = "\\}"), (X += 2)) : ((r = l), 0 === et && er(q)),
                            r !== l && (r = "}"),
                            (e = r) === l) &&
                            (((e = X),
                            "\\u" === t.substr(X, 2) ? ((r = "\\u"), (X += 2)) : ((r = l), 0 === et && er(Y)),
                            r !== l &&
                                ((n = X),
                                (i = X),
                                (o = ef()) !== l && (a = ef()) !== l && (s = ef()) !== l && (u = ef()) !== l
                                    ? (i = o = [o, a, s, u])
                                    : ((X = i), (i = l)),
                                i !== l && (i = t.substring(n, X)),
                                (n = i) !== l))
                                ? (e = r = String.fromCharCode(parseInt(n, 16)))
                                : ((X = e), (e = l))),
                        e
                    );
                }
                function eh() {
                    var e, t;
                    if (((e = []), (t = ep()) !== l)) for (; t !== l; ) e.push(t), (t = ep());
                    else e = l;
                    return e !== l && (e = e.join("")), e;
                }
                if ((a = c()) !== l && X === t.length) return a;
                throw (
                    (a !== l && X < t.length && er({ type: "end", description: "end of input" }),
                    (r = ee),
                    (i = (function (e) {
                        if (J !== e) {
                            J > e && ((J = 0), (Q = { line: 1, column: 1, seenCR: !1 }));
                            var r,
                                n,
                                i = Q;
                            for (r = J; r < e; r++)
                                "\n" === (n = t.charAt(r))
                                    ? (!i.seenCR && i.line++, (i.column = 1), (i.seenCR = !1))
                                    : "\r" === n || "\u2028" === n || "\u2029" === n
                                      ? (i.line++, (i.column = 1), (i.seenCR = !0))
                                      : (i.column++, (i.seenCR = !1));
                            J = e;
                        }
                        return Q;
                    })((n = Z))),
                    (o = n < t.length ? t.charAt(n) : null),
                    null !== r &&
                        (function (e) {
                            var t = 1;
                            for (
                                e.sort(function (e, t) {
                                    return e.description < t.description ? -1 : +(e.description > t.description);
                                });
                                t < e.length;
                            )
                                e[t - 1] === e[t] ? e.splice(t, 1) : t++;
                        })(r),
                    new e(
                        (function (e, t) {
                            var r,
                                n = Array(e.length);
                            for (r = 0; r < e.length; r++) n[r] = e[r].description;
                            return (
                                "Expected " +
                                (e.length > 1 ? n.slice(0, -1).join(", ") + " or " + n[e.length - 1] : n[0]) +
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
                        })(r, o),
                        r,
                        o,
                        n,
                        i.line,
                        i.column,
                    ))
                );
            },
        }
    );
})();
