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
    function t(t) {
        var n,
            r = arguments.length > 1 ? arguments[1] : {},
            i = {},
            s = { start: eL },
            a = eL,
            o = function (e) {
                return { type: "messageFormatPattern", elements: e };
            },
            l = i,
            u = function (e) {
                var t,
                    n,
                    r,
                    i,
                    s,
                    a = "";
                for (t = 0, r = e.length; t < r; t += 1) for (n = 0, s = (i = e[t]).length; n < s; n += 1) a += i[n];
                return a;
            },
            c = function (e) {
                return { type: "messageTextElement", value: e };
            },
            d = /^[^ \t\n\r,.+={}#]/,
            _ = { type: "class", value: "[^ \\t\\n\\r,.+={}#]", description: "[^ \\t\\n\\r,.+={}#]" },
            f = "{",
            p = { type: "literal", value: "{", description: '"{"' },
            h = null,
            m = ",",
            E = { type: "literal", value: ",", description: '","' },
            g = "}",
            A = { type: "literal", value: "}", description: '"}"' },
            I = function (e, t) {
                return { type: "argumentElement", id: e, format: t && t[2] };
            },
            T = "number",
            S = { type: "literal", value: "number", description: '"number"' },
            y = "date",
            v = { type: "literal", value: "date", description: '"date"' },
            N = "time",
            C = { type: "literal", value: "time", description: '"time"' },
            b = function (e, t) {
                return { type: e + "Format", style: t && t[2] };
            },
            R = "plural",
            O = { type: "literal", value: "plural", description: '"plural"' },
            D = function (e) {
                return { type: e.type, ordinal: !1, offset: e.offset || 0, options: e.options };
            },
            L = "selectordinal",
            w = { type: "literal", value: "selectordinal", description: '"selectordinal"' },
            x = function (e) {
                return { type: e.type, ordinal: !0, offset: e.offset || 0, options: e.options };
            },
            M = "select",
            P = { type: "literal", value: "select", description: '"select"' },
            k = function (e) {
                return { type: "selectFormat", options: e };
            },
            U = "=",
            G = { type: "literal", value: "=", description: '"="' },
            F = function (e, t) {
                return { type: "optionalFormatPattern", selector: e, value: t };
            },
            V = "offset:",
            B = { type: "literal", value: "offset:", description: '"offset:"' },
            H = function (e) {
                return e;
            },
            j = function (e, t) {
                return { type: "pluralFormat", offset: e, options: t };
            },
            Y = { type: "other", description: "whitespace" },
            W = /^[ \t\n\r]/,
            K = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" },
            z = { type: "other", description: "optionalWhitespace" },
            $ = /^[0-9]/,
            q = { type: "class", value: "[0-9]", description: "[0-9]" },
            Z = /^[0-9a-f]/i,
            X = { type: "class", value: "[0-9a-f]i", description: "[0-9a-f]i" },
            Q = "0",
            J = { type: "literal", value: "0", description: '"0"' },
            ee = /^[1-9]/,
            et = { type: "class", value: "[1-9]", description: "[1-9]" },
            en = function (e) {
                return parseInt(e, 10);
            },
            er = /^[^{}\\\0-\x1F \t\n\r]/,
            ei = {
                type: "class",
                value: "[^{}\\\\\\0-\\x1F\x7f \\t\\n\\r]",
                description: "[^{}\\\\\\0-\\x1F\x7f \\t\\n\\r]",
            },
            es = "\\\\",
            ea = { type: "literal", value: "\\\\", description: '"\\\\\\\\"' },
            eo = function () {
                return "\\";
            },
            el = "\\#",
            eu = { type: "literal", value: "\\#", description: '"\\\\#"' },
            ec = function () {
                return "\\#";
            },
            ed = "\\{",
            e_ = { type: "literal", value: "\\{", description: '"\\\\{"' },
            ef = function () {
                return "{";
            },
            ep = "\\}",
            eh = { type: "literal", value: "\\}", description: '"\\\\}"' },
            em = function () {
                return "}";
            },
            eE = "\\u",
            eg = { type: "literal", value: "\\u", description: '"\\\\u"' },
            eA = function (e) {
                return String.fromCharCode(parseInt(e, 16));
            },
            eI = function (e) {
                return e.join("");
            },
            eT = 0,
            eS = 0,
            ey = 0,
            ev = { line: 1, column: 1, seenCR: !1 },
            eN = 0,
            eC = [],
            eb = 0;
        if ("startRule" in r) {
            if (!(r.startRule in s)) throw Error("Can't start parsing from rule \"" + r.startRule + '".');
            a = s[r.startRule];
        }
        function eR(e) {
            function n(e, n, r) {
                var i, s;
                for (i = n; i < r; i++)
                    "\n" === (s = t.charAt(i))
                        ? (!e.seenCR && e.line++, (e.column = 1), (e.seenCR = !1))
                        : "\r" === s || "\u2028" === s || "\u2029" === s
                          ? (e.line++, (e.column = 1), (e.seenCR = !0))
                          : (e.column++, (e.seenCR = !1));
            }
            return (
                ey !== e && (ey > e && ((ey = 0), (ev = { line: 1, column: 1, seenCR: !1 })), n(ev, ey, e), (ey = e)),
                ev
            );
        }
        function eO(e) {
            eT < eN || (eT > eN && ((eN = eT), (eC = [])), eC.push(e));
        }
        function eD(n, r, i) {
            function s(e) {
                var t = 1;
                for (
                    e.sort(function (e, t) {
                        return e.description < t.description ? -1 : +(e.description > t.description);
                    });
                    t < e.length;
                )
                    e[t - 1] === e[t] ? e.splice(t, 1) : t++;
            }
            function a(e, t) {
                function n(e) {
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
                }
                var r,
                    i = Array(e.length);
                for (r = 0; r < e.length; r++) i[r] = e[r].description;
                return (
                    "Expected " +
                    (e.length > 1 ? i.slice(0, -1).join(", ") + " or " + i[e.length - 1] : i[0]) +
                    " but " +
                    (t ? '"' + n(t) + '"' : "end of input") +
                    " found."
                );
            }
            var o = eR(i),
                l = i < t.length ? t.charAt(i) : null;
            return null !== r && s(r), new e(null !== n ? n : a(r, l), r, l, i, o.line, o.column);
        }
        function eL() {
            return ew();
        }
        function ew() {
            var e, t, n;
            for (e = eT, t = [], n = ex(); n !== i; ) t.push(n), (n = ex());
            return t !== i && ((eS = e), (t = o(t))), (e = t);
        }
        function ex() {
            var e;
            return (e = eP()) === i && (e = eU()), e;
        }
        function eM() {
            var e, n, r, s, a, o;
            if (
                ((e = eT),
                (n = []),
                (r = eT),
                (s = e$()) !== i && (a = eJ()) !== i && (o = e$()) !== i ? (r = s = [s, a, o]) : ((eT = r), (r = l)),
                r !== i)
            )
                for (; r !== i; )
                    n.push(r),
                        (r = eT),
                        (s = e$()) !== i && (a = eJ()) !== i && (o = e$()) !== i
                            ? (r = s = [s, a, o])
                            : ((eT = r), (r = l));
            else n = l;
            return (
                n !== i && ((eS = e), (n = u(n))),
                (e = n) === i && ((e = eT), (n = ez()) !== i && (n = t.substring(e, eT)), (e = n)),
                e
            );
        }
        function eP() {
            var e, t;
            return (e = eT), (t = eM()) !== i && ((eS = e), (t = c(t))), (e = t);
        }
        function ek() {
            var e, n, r;
            if ((e = eX()) === i) {
                if (
                    ((e = eT),
                    (n = []),
                    d.test(t.charAt(eT)) ? ((r = t.charAt(eT)), eT++) : ((r = i), 0 === eb && eO(_)),
                    r !== i)
                )
                    for (; r !== i; )
                        n.push(r), d.test(t.charAt(eT)) ? ((r = t.charAt(eT)), eT++) : ((r = i), 0 === eb && eO(_));
                else n = l;
                n !== i && (n = t.substring(e, eT)), (e = n);
            }
            return e;
        }
        function eU() {
            var e, n, r, s, a, o, u;
            return (
                (e = eT),
                123 === t.charCodeAt(eT) ? ((n = f), eT++) : ((n = i), 0 === eb && eO(p)),
                n !== i && e$() !== i && (r = ek()) !== i && e$() !== i
                    ? ((s = eT),
                      44 === t.charCodeAt(eT) ? ((a = m), eT++) : ((a = i), 0 === eb && eO(E)),
                      a !== i && (o = e$()) !== i && (u = eG()) !== i ? (s = a = [a, o, u]) : ((eT = s), (s = l)),
                      s === i && (s = h),
                      s !== i && (a = e$()) !== i
                          ? (125 === t.charCodeAt(eT) ? ((o = g), eT++) : ((o = i), 0 === eb && eO(A)),
                            o !== i ? ((eS = e), (e = n = I(r, s))) : ((eT = e), (e = l)))
                          : ((eT = e), (e = l)))
                    : ((eT = e), (e = l)),
                e
            );
        }
        function eG() {
            var e;
            return (e = eF()) === i && (e = eV()) === i && (e = eB()) === i && (e = eH()), e;
        }
        function eF() {
            var e, n, r, s, a, o;
            return (
                (e = eT),
                t.substr(eT, 6) === T ? ((n = T), (eT += 6)) : ((n = i), 0 === eb && eO(S)),
                n === i &&
                    (t.substr(eT, 4) === y ? ((n = y), (eT += 4)) : ((n = i), 0 === eb && eO(v)),
                    n === i && (t.substr(eT, 4) === N ? ((n = N), (eT += 4)) : ((n = i), 0 === eb && eO(C)))),
                n !== i && e$() !== i
                    ? ((r = eT),
                      44 === t.charCodeAt(eT) ? ((s = m), eT++) : ((s = i), 0 === eb && eO(E)),
                      s !== i && (a = e$()) !== i && (o = eJ()) !== i ? (r = s = [s, a, o]) : ((eT = r), (r = l)),
                      r === i && (r = h),
                      r !== i ? ((eS = e), (e = n = b(n, r))) : ((eT = e), (e = l)))
                    : ((eT = e), (e = l)),
                e
            );
        }
        function eV() {
            var e, n, r, s;
            return (
                (e = eT),
                t.substr(eT, 6) === R ? ((n = R), (eT += 6)) : ((n = i), 0 === eb && eO(O)),
                n !== i && e$() !== i
                    ? (44 === t.charCodeAt(eT) ? ((r = m), eT++) : ((r = i), 0 === eb && eO(E)),
                      r !== i && e$() !== i && (s = eK()) !== i ? ((eS = e), (e = n = D(s))) : ((eT = e), (e = l)))
                    : ((eT = e), (e = l)),
                e
            );
        }
        function eB() {
            var e, n, r, s;
            return (
                (e = eT),
                t.substr(eT, 13) === L ? ((n = L), (eT += 13)) : ((n = i), 0 === eb && eO(w)),
                n !== i && e$() !== i
                    ? (44 === t.charCodeAt(eT) ? ((r = m), eT++) : ((r = i), 0 === eb && eO(E)),
                      r !== i && e$() !== i && (s = eK()) !== i ? ((eS = e), (e = n = x(s))) : ((eT = e), (e = l)))
                    : ((eT = e), (e = l)),
                e
            );
        }
        function eH() {
            var e, n, r, s, a;
            if (((e = eT), t.substr(eT, 6) === M ? ((n = M), (eT += 6)) : ((n = i), 0 === eb && eO(P)), n !== i))
                if (e$() !== i)
                    if ((44 === t.charCodeAt(eT) ? ((r = m), eT++) : ((r = i), 0 === eb && eO(E)), r !== i))
                        if (e$() !== i) {
                            if (((s = []), (a = eY()) !== i)) for (; a !== i; ) s.push(a), (a = eY());
                            else s = l;
                            s !== i ? ((eS = e), (e = n = k(s))) : ((eT = e), (e = l));
                        } else (eT = e), (e = l);
                    else (eT = e), (e = l);
                else (eT = e), (e = l);
            else (eT = e), (e = l);
            return e;
        }
        function ej() {
            var e, n, r, s;
            return (
                (e = eT),
                (n = eT),
                61 === t.charCodeAt(eT) ? ((r = U), eT++) : ((r = i), 0 === eb && eO(G)),
                r !== i && (s = eX()) !== i ? (n = r = [r, s]) : ((eT = n), (n = l)),
                n !== i && (n = t.substring(e, eT)),
                (e = n) === i && (e = eJ()),
                e
            );
        }
        function eY() {
            var e, n, r, s, a, o;
            return (
                (e = eT),
                (n = e$()) !== i && (r = ej()) !== i && e$() !== i
                    ? (123 === t.charCodeAt(eT) ? ((s = f), eT++) : ((s = i), 0 === eb && eO(p)),
                      s !== i && e$() !== i && (a = ew()) !== i && e$() !== i
                          ? (125 === t.charCodeAt(eT) ? ((o = g), eT++) : ((o = i), 0 === eb && eO(A)),
                            o !== i ? ((eS = e), (e = n = F(r, a))) : ((eT = e), (e = l)))
                          : ((eT = e), (e = l)))
                    : ((eT = e), (e = l)),
                e
            );
        }
        function eW() {
            var e, n, r;
            return (
                (e = eT),
                t.substr(eT, 7) === V ? ((n = V), (eT += 7)) : ((n = i), 0 === eb && eO(B)),
                n !== i && e$() !== i && (r = eX()) !== i ? ((eS = e), (e = n = H(r))) : ((eT = e), (e = l)),
                e
            );
        }
        function eK() {
            var e, t, n, r;
            if (((e = eT), (t = eW()) === i && (t = h), t !== i))
                if (e$() !== i) {
                    if (((n = []), (r = eY()) !== i)) for (; r !== i; ) n.push(r), (r = eY());
                    else n = l;
                    n !== i ? ((eS = e), (e = t = j(t, n))) : ((eT = e), (e = l));
                } else (eT = e), (e = l);
            else (eT = e), (e = l);
            return e;
        }
        function ez() {
            var e, n;
            if (
                (eb++,
                (e = []),
                W.test(t.charAt(eT)) ? ((n = t.charAt(eT)), eT++) : ((n = i), 0 === eb && eO(K)),
                n !== i)
            )
                for (; n !== i; )
                    e.push(n), W.test(t.charAt(eT)) ? ((n = t.charAt(eT)), eT++) : ((n = i), 0 === eb && eO(K));
            else e = l;
            return eb--, e === i && ((n = i), 0 === eb && eO(Y)), e;
        }
        function e$() {
            var e, n, r;
            for (eb++, e = eT, n = [], r = ez(); r !== i; ) n.push(r), (r = ez());
            return n !== i && (n = t.substring(e, eT)), (e = n), eb--, e === i && ((n = i), 0 === eb && eO(z)), e;
        }
        function eq() {
            var e;
            return $.test(t.charAt(eT)) ? ((e = t.charAt(eT)), eT++) : ((e = i), 0 === eb && eO(q)), e;
        }
        function eZ() {
            var e;
            return Z.test(t.charAt(eT)) ? ((e = t.charAt(eT)), eT++) : ((e = i), 0 === eb && eO(X)), e;
        }
        function eX() {
            var e, n, r, s, a, o;
            if (((e = eT), 48 === t.charCodeAt(eT) ? ((n = Q), eT++) : ((n = i), 0 === eb && eO(J)), n === i)) {
                if (
                    ((n = eT),
                    (r = eT),
                    ee.test(t.charAt(eT)) ? ((s = t.charAt(eT)), eT++) : ((s = i), 0 === eb && eO(et)),
                    s !== i)
                ) {
                    for (a = [], o = eq(); o !== i; ) a.push(o), (o = eq());
                    a !== i ? (r = s = [s, a]) : ((eT = r), (r = l));
                } else (eT = r), (r = l);
                r !== i && (r = t.substring(n, eT)), (n = r);
            }
            return n !== i && ((eS = e), (n = en(n))), (e = n);
        }
        function eQ() {
            var e, n, r, s, a, o, u, c;
            return (
                er.test(t.charAt(eT)) ? ((e = t.charAt(eT)), eT++) : ((e = i), 0 === eb && eO(ei)),
                e === i &&
                    ((e = eT),
                    t.substr(eT, 2) === es ? ((n = es), (eT += 2)) : ((n = i), 0 === eb && eO(ea)),
                    n !== i && ((eS = e), (n = eo())),
                    (e = n) === i &&
                        ((e = eT),
                        t.substr(eT, 2) === el ? ((n = el), (eT += 2)) : ((n = i), 0 === eb && eO(eu)),
                        n !== i && ((eS = e), (n = ec())),
                        (e = n) === i &&
                            ((e = eT),
                            t.substr(eT, 2) === ed ? ((n = ed), (eT += 2)) : ((n = i), 0 === eb && eO(e_)),
                            n !== i && ((eS = e), (n = ef())),
                            (e = n) === i &&
                                ((e = eT),
                                t.substr(eT, 2) === ep ? ((n = ep), (eT += 2)) : ((n = i), 0 === eb && eO(eh)),
                                n !== i && ((eS = e), (n = em())),
                                (e = n) === i &&
                                    ((e = eT),
                                    t.substr(eT, 2) === eE ? ((n = eE), (eT += 2)) : ((n = i), 0 === eb && eO(eg)),
                                    n !== i
                                        ? ((r = eT),
                                          (s = eT),
                                          (a = eZ()) !== i && (o = eZ()) !== i && (u = eZ()) !== i && (c = eZ()) !== i
                                              ? (s = a = [a, o, u, c])
                                              : ((eT = s), (s = l)),
                                          s !== i && (s = t.substring(r, eT)),
                                          (r = s) !== i ? ((eS = e), (e = n = eA(r))) : ((eT = e), (e = l)))
                                        : ((eT = e), (e = l))))))),
                e
            );
        }
        function eJ() {
            var e, t, n;
            if (((e = eT), (t = []), (n = eQ()) !== i)) for (; n !== i; ) t.push(n), (n = eQ());
            else t = l;
            return t !== i && ((eS = e), (t = eI(t))), (e = t);
        }
        if ((n = a()) !== i && eT === t.length) return n;
        throw (n !== i && eT < t.length && eO({ type: "end", description: "end of input" }), eD(null, eC, eN));
    }
    return (
        (function (e, t) {
            function n() {
                this.constructor = e;
            }
            (n.prototype = t.prototype), (e.prototype = new n());
        })(e, Error),
        { SyntaxError: e, parse: t }
    );
})();
