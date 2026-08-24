"use strict";
t.default = (function () {
    function e(e, t, r, n, o, i) {
        (this.message = e),
            (this.expected = t),
            (this.found = r),
            (this.offset = n),
            (this.line = o),
            (this.column = i),
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
                    o,
                    i,
                    a,
                    s = arguments.length > 1 ? arguments[1] : {},
                    l = {},
                    u = { start: en },
                    c = en,
                    f = function (e) {
                        var t,
                            r,
                            n,
                            o,
                            i,
                            a = "";
                        for (t = 0, n = e.length; t < n; t += 1)
                            for (r = 0, i = (o = e[t]).length; r < i; r += 1) a += o[r];
                        return a;
                    },
                    p = /^[^ \t\n\r,.+={}#]/,
                    d = { type: "class", value: "[^ \\t\\n\\r,.+={}#]", description: "[^ \\t\\n\\r,.+={}#]" },
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
                    O = { type: "literal", value: "offset:", description: '"offset:"' },
                    I = { type: "other", description: "whitespace" },
                    D = /^[ \t\n\r]/,
                    L = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" },
                    R = { type: "other", description: "optionalWhitespace" },
                    F = /^[0-9]/,
                    N = { type: "class", value: "[0-9]", description: "[0-9]" },
                    j = /^[0-9a-f]/i,
                    B = { type: "class", value: "[0-9a-f]i", description: "[0-9a-f]i" },
                    $ = { type: "literal", value: "0", description: '"0"' },
                    K = /^[1-9]/,
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
                    J = 0,
                    X = 0,
                    Z = { line: 1, column: 1, seenCR: !1 },
                    Q = 0,
                    ee = [],
                    et = 0;
                if ("startRule" in s) {
                    if (!(s.startRule in u)) throw Error("Can't start parsing from rule \"" + s.startRule + '".');
                    c = u[s.startRule];
                }
                function er(e) {
                    J < Q || (J > Q && ((Q = J), (ee = [])), ee.push(e));
                }
                function en() {
                    return eo();
                }
                function eo() {
                    var e, t;
                    for (e = [], t = ei(); t !== l; ) e.push(t), (t = ei());
                    return e !== l && (e = { type: "messageFormatPattern", elements: e }), e;
                }
                function ei() {
                    var e, r;
                    return (
                        (r = (function () {
                            var e, r, n, o, i, a;
                            if (
                                ((e = J),
                                (r = []),
                                (n = J),
                                (o = eu()) !== l && (i = eh()) !== l && (a = eu()) !== l
                                    ? (n = o = [o, i, a])
                                    : ((J = n), (n = l)),
                                n !== l)
                            )
                                for (; n !== l; )
                                    r.push(n),
                                        (n = J),
                                        (o = eu()) !== l && (i = eh()) !== l && (a = eu()) !== l
                                            ? (n = o = [o, i, a])
                                            : ((J = n), (n = l));
                            else r = l;
                            return (
                                r !== l && (r = f(r)),
                                (e = r) === l && ((e = J), (r = el()) !== l && (r = t.substring(e, J)), (e = r)),
                                e
                            );
                        })()) !== l && (r = { type: "messageTextElement", value: r }),
                        (e = r) === l &&
                            (e = (function () {
                                var e, r, n, o, i, a, s, u, c, f, P, A, O, I, D, L;
                                if (
                                    ((e = J),
                                    123 === t.charCodeAt(J) ? ((r = "{"), J++) : ((r = l), 0 === et && er(h)),
                                    r !== l)
                                )
                                    if (eu() !== l)
                                        if (
                                            (n = (function () {
                                                var e, r, n;
                                                if ((e = ep()) === l) {
                                                    if (
                                                        ((e = J),
                                                        (r = []),
                                                        p.test(t.charAt(J))
                                                            ? ((n = t.charAt(J)), J++)
                                                            : ((n = l), 0 === et && er(d)),
                                                        n !== l)
                                                    )
                                                        for (; n !== l; )
                                                            r.push(n),
                                                                p.test(t.charAt(J))
                                                                    ? ((n = t.charAt(J)), J++)
                                                                    : ((n = l), 0 === et && er(d));
                                                    else r = l;
                                                    r !== l && (r = t.substring(e, J)), (e = r);
                                                }
                                                return e;
                                            })()) !== l
                                        )
                                            if (eu() !== l) {
                                                if (
                                                    ((o = J),
                                                    44 === t.charCodeAt(J)
                                                        ? ((i = ","), J++)
                                                        : ((i = l), 0 === et && er(m)),
                                                    i !== l &&
                                                    (a = eu()) !== l &&
                                                    (((f = J),
                                                    t.substr(J, 6) === y
                                                        ? ((P = y), (J += 6))
                                                        : ((P = l), 0 === et && er(g)),
                                                    P === l &&
                                                        (t.substr(J, 4) === b
                                                            ? ((P = b), (J += 4))
                                                            : ((P = l), 0 === et && er(w)),
                                                        P === l &&
                                                            (t.substr(J, 4) === _
                                                                ? ((P = _), (J += 4))
                                                                : ((P = l), 0 === et && er(S)))),
                                                    P !== l &&
                                                        eu() !== l &&
                                                        ((A = J),
                                                        44 === t.charCodeAt(J)
                                                            ? ((O = ","), J++)
                                                            : ((O = l), 0 === et && er(m)),
                                                        O !== l && (I = eu()) !== l && (D = eh()) !== l
                                                            ? (A = O = [O, I, D])
                                                            : ((J = A), (A = l)),
                                                        A === l && (A = null),
                                                        A !== l))
                                                        ? (f = P = { type: P + "Format", style: (L = A) && L[2] })
                                                        : ((J = f), (f = l)),
                                                    (c = f) === l &&
                                                        (c = (function () {
                                                            var e, r, n, o;
                                                            return (
                                                                ((e = J),
                                                                t.substr(J, 6) === x
                                                                    ? ((r = x), (J += 6))
                                                                    : ((r = l), 0 === et && er(E)),
                                                                r !== l &&
                                                                    eu() !== l &&
                                                                    (44 === t.charCodeAt(J)
                                                                        ? ((n = ","), J++)
                                                                        : ((n = l), 0 === et && er(m)),
                                                                    n !== l && eu() !== l && (o = es()) !== l))
                                                                    ? (e = r =
                                                                          {
                                                                              type: o.type,
                                                                              ordinal: !1,
                                                                              offset: o.offset || 0,
                                                                              options: o.options,
                                                                          })
                                                                    : ((J = e), (e = l)),
                                                                e
                                                            );
                                                        })()) === l &&
                                                        (c = (function () {
                                                            var e, r, n, o;
                                                            return (
                                                                ((e = J),
                                                                t.substr(J, 13) === k
                                                                    ? ((r = k), (J += 13))
                                                                    : ((r = l), 0 === et && er(C)),
                                                                r !== l &&
                                                                    eu() !== l &&
                                                                    (44 === t.charCodeAt(J)
                                                                        ? ((n = ","), J++)
                                                                        : ((n = l), 0 === et && er(m)),
                                                                    n !== l && eu() !== l && (o = es()) !== l))
                                                                    ? (e = r =
                                                                          {
                                                                              type: o.type,
                                                                              ordinal: !0,
                                                                              offset: o.offset || 0,
                                                                              options: o.options,
                                                                          })
                                                                    : ((J = e), (e = l)),
                                                                e
                                                            );
                                                        })()) === l &&
                                                        (c = (function () {
                                                            var e, r, n, o, i;
                                                            if (
                                                                ((e = J),
                                                                t.substr(J, 6) === T
                                                                    ? ((r = T), (J += 6))
                                                                    : ((r = l), 0 === et && er(M)),
                                                                r !== l)
                                                            )
                                                                if (eu() !== l)
                                                                    if (
                                                                        (44 === t.charCodeAt(J)
                                                                            ? ((n = ","), J++)
                                                                            : ((n = l), 0 === et && er(m)),
                                                                        n !== l)
                                                                    )
                                                                        if (eu() !== l) {
                                                                            if (((o = []), (i = ea()) !== l))
                                                                                for (; i !== l; ) o.push(i), (i = ea());
                                                                            else o = l;
                                                                            o !== l
                                                                                ? (e = r =
                                                                                      {
                                                                                          type: "selectFormat",
                                                                                          options: o,
                                                                                      })
                                                                                : ((J = e), (e = l));
                                                                        } else (J = e), (e = l);
                                                                    else (J = e), (e = l);
                                                                else (J = e), (e = l);
                                                            else (J = e), (e = l);
                                                            return e;
                                                        })()),
                                                    (s = c) !== l)
                                                        ? (o = i = [i, a, s])
                                                        : ((J = o), (o = l)),
                                                    o === l && (o = null),
                                                    o !== l)
                                                )
                                                    (i = eu()) !== l &&
                                                    (125 === t.charCodeAt(J)
                                                        ? ((a = "}"), J++)
                                                        : ((a = l), 0 === et && er(v)),
                                                    a !== l)
                                                        ? (e = r =
                                                              {
                                                                  type: "argumentElement",
                                                                  id: n,
                                                                  format: (u = o) && u[2],
                                                              })
                                                        : ((J = e), (e = l));
                                                else (J = e), (e = l);
                                            } else (J = e), (e = l);
                                        else (J = e), (e = l);
                                    else (J = e), (e = l);
                                else (J = e), (e = l);
                                return e;
                            })()),
                        e
                    );
                }
                function ea() {
                    var e, r, n, o, i, a, s, u, c;
                    return (
                        ((e = J),
                        eu() !== l &&
                            ((a = J),
                            (s = J),
                            61 === t.charCodeAt(J) ? ((u = "="), J++) : ((u = l), 0 === et && er(P)),
                            u !== l && (c = ep()) !== l ? (s = u = [u, c]) : ((J = s), (s = l)),
                            s !== l && (s = t.substring(a, J)),
                            (a = s) === l && (a = eh()),
                            (r = a) !== l &&
                                eu() !== l &&
                                (123 === t.charCodeAt(J) ? ((n = "{"), J++) : ((n = l), 0 === et && er(h)),
                                n !== l &&
                                    eu() !== l &&
                                    (o = eo()) !== l &&
                                    eu() !== l &&
                                    (125 === t.charCodeAt(J) ? ((i = "}"), J++) : ((i = l), 0 === et && er(v)),
                                    i !== l))))
                            ? (e = { type: "optionalFormatPattern", selector: r, value: o })
                            : ((J = e), (e = l)),
                        e
                    );
                }
                function es() {
                    var e, r, n, o, i, a, s;
                    if (
                        ((e = J),
                        ((i = J),
                        t.substr(J, 7) === A ? ((a = A), (J += 7)) : ((a = l), 0 === et && er(O)),
                        a !== l && eu() !== l && (s = ep()) !== l)
                            ? (i = a = s)
                            : ((J = i), (i = l)),
                        (r = i) === l && (r = null),
                        r !== l)
                    )
                        if (eu() !== l) {
                            if (((n = []), (o = ea()) !== l)) for (; o !== l; ) n.push(o), (o = ea());
                            else n = l;
                            n !== l ? (e = r = { type: "pluralFormat", offset: r, options: n }) : ((J = e), (e = l));
                        } else (J = e), (e = l);
                    else (J = e), (e = l);
                    return e;
                }
                function el() {
                    var e, r;
                    if (
                        (et++,
                        (e = []),
                        D.test(t.charAt(J)) ? ((r = t.charAt(J)), J++) : ((r = l), 0 === et && er(L)),
                        r !== l)
                    )
                        for (; r !== l; )
                            e.push(r), D.test(t.charAt(J)) ? ((r = t.charAt(J)), J++) : ((r = l), 0 === et && er(L));
                    else e = l;
                    return et--, e === l && ((r = l), 0 === et && er(I)), e;
                }
                function eu() {
                    var e, r, n;
                    for (et++, e = J, r = [], n = el(); n !== l; ) r.push(n), (n = el());
                    return (
                        r !== l && (r = t.substring(e, J)), (e = r), et--, e === l && ((r = l), 0 === et && er(R)), e
                    );
                }
                function ec() {
                    var e;
                    return F.test(t.charAt(J)) ? ((e = t.charAt(J)), J++) : ((e = l), 0 === et && er(N)), e;
                }
                function ef() {
                    var e;
                    return j.test(t.charAt(J)) ? ((e = t.charAt(J)), J++) : ((e = l), 0 === et && er(B)), e;
                }
                function ep() {
                    var e, r, n, o, i;
                    if ((48 === t.charCodeAt(J) ? ((e = "0"), J++) : ((e = l), 0 === et && er($)), e === l)) {
                        if (
                            ((e = J),
                            (r = J),
                            K.test(t.charAt(J)) ? ((n = t.charAt(J)), J++) : ((n = l), 0 === et && er(V)),
                            n !== l)
                        ) {
                            for (o = [], i = ec(); i !== l; ) o.push(i), (i = ec());
                            o !== l ? (r = n = [n, o]) : ((J = r), (r = l));
                        } else (J = r), (r = l);
                        r !== l && (r = t.substring(e, J)), (e = r);
                    }
                    return e !== l && (e = parseInt(e, 10)), e;
                }
                function ed() {
                    var e, r, n, o, i, a, s, u;
                    return (
                        U.test(t.charAt(J)) ? ((e = t.charAt(J)), J++) : ((e = l), 0 === et && er(z)),
                        e === l &&
                            ((e = J),
                            "\\\\" === t.substr(J, 2) ? ((r = "\\\\"), (J += 2)) : ((r = l), 0 === et && er(W)),
                            r !== l && (r = "\\"),
                            (e = r) === l &&
                                ((e = J),
                                "\\#" === t.substr(J, 2) ? ((r = "\\#"), (J += 2)) : ((r = l), 0 === et && er(H)),
                                r !== l && (r = "\\#"),
                                (e = r) === l &&
                                    ((e = J),
                                    "\\{" === t.substr(J, 2) ? ((r = "\\{"), (J += 2)) : ((r = l), 0 === et && er(G)),
                                    r !== l && (r = "{"),
                                    (e = r) === l))) &&
                            ((e = J),
                            "\\}" === t.substr(J, 2) ? ((r = "\\}"), (J += 2)) : ((r = l), 0 === et && er(q)),
                            r !== l && (r = "}"),
                            (e = r) === l) &&
                            (((e = J),
                            "\\u" === t.substr(J, 2) ? ((r = "\\u"), (J += 2)) : ((r = l), 0 === et && er(Y)),
                            r !== l &&
                                ((n = J),
                                (o = J),
                                (i = ef()) !== l && (a = ef()) !== l && (s = ef()) !== l && (u = ef()) !== l
                                    ? (o = i = [i, a, s, u])
                                    : ((J = o), (o = l)),
                                o !== l && (o = t.substring(n, J)),
                                (n = o) !== l))
                                ? (e = r = String.fromCharCode(parseInt(n, 16)))
                                : ((J = e), (e = l))),
                        e
                    );
                }
                function eh() {
                    var e, t;
                    if (((e = []), (t = ed()) !== l)) for (; t !== l; ) e.push(t), (t = ed());
                    else e = l;
                    return e !== l && (e = e.join("")), e;
                }
                if ((a = c()) !== l && J === t.length) return a;
                throw (
                    (a !== l && J < t.length && er({ type: "end", description: "end of input" }),
                    (r = ee),
                    (o = (function (e) {
                        if (X !== e) {
                            X > e && ((X = 0), (Z = { line: 1, column: 1, seenCR: !1 }));
                            var r,
                                n,
                                o = Z;
                            for (r = X; r < e; r++)
                                "\n" === (n = t.charAt(r))
                                    ? (!o.seenCR && o.line++, (o.column = 1), (o.seenCR = !1))
                                    : "\r" === n || "\u2028" === n || "\u2029" === n
                                      ? (o.line++, (o.column = 1), (o.seenCR = !0))
                                      : (o.column++, (o.seenCR = !1));
                            X = e;
                        }
                        return Z;
                    })((n = Q))),
                    (i = n < t.length ? t.charAt(n) : null),
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
                        })(r, i),
                        r,
                        i,
                        n,
                        o.line,
                        o.column,
                    ))
                );
            },
        }
    );
})();
