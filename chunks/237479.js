"use strict";
t.default = (function () {
    function e(e, t, n, r, i, a) {
        (this.message = e),
            (this.expected = t),
            (this.found = n),
            (this.offset = r),
            (this.line = i),
            (this.column = a),
            (this.name = "SyntaxError");
    }
    function t(t) {
        var n,
            r = arguments.length > 1 ? arguments[1] : {},
            i = {},
            a = { start: eL },
            s = eL,
            o = function (e) {
                return { type: "messageFormatPattern", elements: e };
            },
            l = i,
            u = function (e) {
                var t,
                    n,
                    r,
                    i,
                    a,
                    s = "";
                for (t = 0, r = e.length; t < r; t += 1) for (n = 0, a = (i = e[t]).length; n < a; n += 1) s += i[n];
                return s;
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
            g = { type: "literal", value: ",", description: '","' },
            E = "}",
            A = { type: "literal", value: "}", description: '"}"' },
            I = function (e, t) {
                return { type: "argumentElement", id: e, format: t && t[2] };
            },
            T = "number",
            y = { type: "literal", value: "number", description: '"number"' },
            S = "date",
            v = { type: "literal", value: "date", description: '"date"' },
            C = "time",
            b = { type: "literal", value: "time", description: '"time"' },
            N = function (e, t) {
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
            P = "select",
            M = { type: "literal", value: "select", description: '"select"' },
            k = function (e) {
                return { type: "selectFormat", options: e };
            },
            U = "=",
            G = { type: "literal", value: "=", description: '"="' },
            V = function (e, t) {
                return { type: "optionalFormatPattern", selector: e, value: t };
            },
            F = "offset:",
            B = { type: "literal", value: "offset:", description: '"offset:"' },
            j = function (e) {
                return e;
            },
            H = function (e, t) {
                return { type: "pluralFormat", offset: e, options: t };
            },
            Y = { type: "other", description: "whitespace" },
            W = /^[ \t\n\r]/,
            K = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" },
            z = { type: "other", description: "optionalWhitespace" },
            $ = /^[0-9]/,
            q = { type: "class", value: "[0-9]", description: "[0-9]" },
            Z = /^[0-9a-f]/i,
            Q = { type: "class", value: "[0-9a-f]i", description: "[0-9a-f]i" },
            X = "0",
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
            ea = "\\\\",
            es = { type: "literal", value: "\\\\", description: '"\\\\\\\\"' },
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
            eg = "\\u",
            eE = { type: "literal", value: "\\u", description: '"\\\\u"' },
            eA = function (e) {
                return String.fromCharCode(parseInt(e, 16));
            },
            eI = function (e) {
                return e.join("");
            },
            eT = 0,
            ey = 0,
            eS = 0,
            ev = { line: 1, column: 1, seenCR: !1 },
            eC = 0,
            eb = [],
            eN = 0;
        if ("startRule" in r) {
            if (!(r.startRule in a)) throw Error("Can't start parsing from rule \"" + r.startRule + '".');
            s = a[r.startRule];
        }
        function eR(e) {
            function n(e, n, r) {
                var i, a;
                for (i = n; i < r; i++)
                    "\n" === (a = t.charAt(i))
                        ? (!e.seenCR && e.line++, (e.column = 1), (e.seenCR = !1))
                        : "\r" === a || "\u2028" === a || "\u2029" === a
                          ? (e.line++, (e.column = 1), (e.seenCR = !0))
                          : (e.column++, (e.seenCR = !1));
            }
            return (
                eS !== e && (eS > e && ((eS = 0), (ev = { line: 1, column: 1, seenCR: !1 })), n(ev, eS, e), (eS = e)),
                ev
            );
        }
        function eO(e) {
            eT < eC || (eT > eC && ((eC = eT), (eb = [])), eb.push(e));
        }
        function eD(n, r, i) {
            function a(e) {
                var t = 1;
                for (
                    e.sort(function (e, t) {
                        return e.description < t.description ? -1 : +(e.description > t.description);
                    });
                    t < e.length;
                )
                    e[t - 1] === e[t] ? e.splice(t, 1) : t++;
            }
            function s(e, t) {
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
            return null !== r && a(r), new e(null !== n ? n : s(r, l), r, l, i, o.line, o.column);
        }
        function eL() {
            return ew();
        }
        function ew() {
            var e, t, n;
            for (e = eT, t = [], n = ex(); n !== i; ) t.push(n), (n = ex());
            return t !== i && ((ey = e), (t = o(t))), (e = t);
        }
        function ex() {
            var e;
            return (e = eM()) === i && (e = eU()), e;
        }
        function eP() {
            var e, n, r, a, s, o;
            if (
                ((e = eT),
                (n = []),
                (r = eT),
                (a = e$()) !== i && (s = eJ()) !== i && (o = e$()) !== i ? (r = a = [a, s, o]) : ((eT = r), (r = l)),
                r !== i)
            )
                for (; r !== i; )
                    n.push(r),
                        (r = eT),
                        (a = e$()) !== i && (s = eJ()) !== i && (o = e$()) !== i
                            ? (r = a = [a, s, o])
                            : ((eT = r), (r = l));
            else n = l;
            return (
                n !== i && ((ey = e), (n = u(n))),
                (e = n) === i && ((e = eT), (n = ez()) !== i && (n = t.substring(e, eT)), (e = n)),
                e
            );
        }
        function eM() {
            var e, t;
            return (e = eT), (t = eP()) !== i && ((ey = e), (t = c(t))), (e = t);
        }
        function ek() {
            var e, n, r;
            if ((e = eQ()) === i) {
                if (
                    ((e = eT),
                    (n = []),
                    d.test(t.charAt(eT)) ? ((r = t.charAt(eT)), eT++) : ((r = i), 0 === eN && eO(_)),
                    r !== i)
                )
                    for (; r !== i; )
                        n.push(r), d.test(t.charAt(eT)) ? ((r = t.charAt(eT)), eT++) : ((r = i), 0 === eN && eO(_));
                else n = l;
                n !== i && (n = t.substring(e, eT)), (e = n);
            }
            return e;
        }
        function eU() {
            var e, n, r, a, s, o, u;
            return (
                (e = eT),
                123 === t.charCodeAt(eT) ? ((n = f), eT++) : ((n = i), 0 === eN && eO(p)),
                n !== i && e$() !== i && (r = ek()) !== i && e$() !== i
                    ? ((a = eT),
                      44 === t.charCodeAt(eT) ? ((s = m), eT++) : ((s = i), 0 === eN && eO(g)),
                      s !== i && (o = e$()) !== i && (u = eG()) !== i ? (a = s = [s, o, u]) : ((eT = a), (a = l)),
                      a === i && (a = h),
                      a !== i && (s = e$()) !== i
                          ? (125 === t.charCodeAt(eT) ? ((o = E), eT++) : ((o = i), 0 === eN && eO(A)),
                            o !== i ? ((ey = e), (e = n = I(r, a))) : ((eT = e), (e = l)))
                          : ((eT = e), (e = l)))
                    : ((eT = e), (e = l)),
                e
            );
        }
        function eG() {
            var e;
            return (e = eV()) === i && (e = eF()) === i && (e = eB()) === i && (e = ej()), e;
        }
        function eV() {
            var e, n, r, a, s, o;
            return (
                (e = eT),
                t.substr(eT, 6) === T ? ((n = T), (eT += 6)) : ((n = i), 0 === eN && eO(y)),
                n === i &&
                    (t.substr(eT, 4) === S ? ((n = S), (eT += 4)) : ((n = i), 0 === eN && eO(v)),
                    n === i && (t.substr(eT, 4) === C ? ((n = C), (eT += 4)) : ((n = i), 0 === eN && eO(b)))),
                n !== i && e$() !== i
                    ? ((r = eT),
                      44 === t.charCodeAt(eT) ? ((a = m), eT++) : ((a = i), 0 === eN && eO(g)),
                      a !== i && (s = e$()) !== i && (o = eJ()) !== i ? (r = a = [a, s, o]) : ((eT = r), (r = l)),
                      r === i && (r = h),
                      r !== i ? ((ey = e), (e = n = N(n, r))) : ((eT = e), (e = l)))
                    : ((eT = e), (e = l)),
                e
            );
        }
        function eF() {
            var e, n, r, a;
            return (
                (e = eT),
                t.substr(eT, 6) === R ? ((n = R), (eT += 6)) : ((n = i), 0 === eN && eO(O)),
                n !== i && e$() !== i
                    ? (44 === t.charCodeAt(eT) ? ((r = m), eT++) : ((r = i), 0 === eN && eO(g)),
                      r !== i && e$() !== i && (a = eK()) !== i ? ((ey = e), (e = n = D(a))) : ((eT = e), (e = l)))
                    : ((eT = e), (e = l)),
                e
            );
        }
        function eB() {
            var e, n, r, a;
            return (
                (e = eT),
                t.substr(eT, 13) === L ? ((n = L), (eT += 13)) : ((n = i), 0 === eN && eO(w)),
                n !== i && e$() !== i
                    ? (44 === t.charCodeAt(eT) ? ((r = m), eT++) : ((r = i), 0 === eN && eO(g)),
                      r !== i && e$() !== i && (a = eK()) !== i ? ((ey = e), (e = n = x(a))) : ((eT = e), (e = l)))
                    : ((eT = e), (e = l)),
                e
            );
        }
        function ej() {
            var e, n, r, a, s;
            if (((e = eT), t.substr(eT, 6) === P ? ((n = P), (eT += 6)) : ((n = i), 0 === eN && eO(M)), n !== i))
                if (e$() !== i)
                    if ((44 === t.charCodeAt(eT) ? ((r = m), eT++) : ((r = i), 0 === eN && eO(g)), r !== i))
                        if (e$() !== i) {
                            if (((a = []), (s = eY()) !== i)) for (; s !== i; ) a.push(s), (s = eY());
                            else a = l;
                            a !== i ? ((ey = e), (e = n = k(a))) : ((eT = e), (e = l));
                        } else (eT = e), (e = l);
                    else (eT = e), (e = l);
                else (eT = e), (e = l);
            else (eT = e), (e = l);
            return e;
        }
        function eH() {
            var e, n, r, a;
            return (
                (e = eT),
                (n = eT),
                61 === t.charCodeAt(eT) ? ((r = U), eT++) : ((r = i), 0 === eN && eO(G)),
                r !== i && (a = eQ()) !== i ? (n = r = [r, a]) : ((eT = n), (n = l)),
                n !== i && (n = t.substring(e, eT)),
                (e = n) === i && (e = eJ()),
                e
            );
        }
        function eY() {
            var e, n, r, a, s, o;
            return (
                (e = eT),
                (n = e$()) !== i && (r = eH()) !== i && e$() !== i
                    ? (123 === t.charCodeAt(eT) ? ((a = f), eT++) : ((a = i), 0 === eN && eO(p)),
                      a !== i && e$() !== i && (s = ew()) !== i && e$() !== i
                          ? (125 === t.charCodeAt(eT) ? ((o = E), eT++) : ((o = i), 0 === eN && eO(A)),
                            o !== i ? ((ey = e), (e = n = V(r, s))) : ((eT = e), (e = l)))
                          : ((eT = e), (e = l)))
                    : ((eT = e), (e = l)),
                e
            );
        }
        function eW() {
            var e, n, r;
            return (
                (e = eT),
                t.substr(eT, 7) === F ? ((n = F), (eT += 7)) : ((n = i), 0 === eN && eO(B)),
                n !== i && e$() !== i && (r = eQ()) !== i ? ((ey = e), (e = n = j(r))) : ((eT = e), (e = l)),
                e
            );
        }
        function eK() {
            var e, t, n, r;
            if (((e = eT), (t = eW()) === i && (t = h), t !== i))
                if (e$() !== i) {
                    if (((n = []), (r = eY()) !== i)) for (; r !== i; ) n.push(r), (r = eY());
                    else n = l;
                    n !== i ? ((ey = e), (e = t = H(t, n))) : ((eT = e), (e = l));
                } else (eT = e), (e = l);
            else (eT = e), (e = l);
            return e;
        }
        function ez() {
            var e, n;
            if (
                (eN++,
                (e = []),
                W.test(t.charAt(eT)) ? ((n = t.charAt(eT)), eT++) : ((n = i), 0 === eN && eO(K)),
                n !== i)
            )
                for (; n !== i; )
                    e.push(n), W.test(t.charAt(eT)) ? ((n = t.charAt(eT)), eT++) : ((n = i), 0 === eN && eO(K));
            else e = l;
            return eN--, e === i && ((n = i), 0 === eN && eO(Y)), e;
        }
        function e$() {
            var e, n, r;
            for (eN++, e = eT, n = [], r = ez(); r !== i; ) n.push(r), (r = ez());
            return n !== i && (n = t.substring(e, eT)), (e = n), eN--, e === i && ((n = i), 0 === eN && eO(z)), e;
        }
        function eq() {
            var e;
            return $.test(t.charAt(eT)) ? ((e = t.charAt(eT)), eT++) : ((e = i), 0 === eN && eO(q)), e;
        }
        function eZ() {
            var e;
            return Z.test(t.charAt(eT)) ? ((e = t.charAt(eT)), eT++) : ((e = i), 0 === eN && eO(Q)), e;
        }
        function eQ() {
            var e, n, r, a, s, o;
            if (((e = eT), 48 === t.charCodeAt(eT) ? ((n = X), eT++) : ((n = i), 0 === eN && eO(J)), n === i)) {
                if (
                    ((n = eT),
                    (r = eT),
                    ee.test(t.charAt(eT)) ? ((a = t.charAt(eT)), eT++) : ((a = i), 0 === eN && eO(et)),
                    a !== i)
                ) {
                    for (s = [], o = eq(); o !== i; ) s.push(o), (o = eq());
                    s !== i ? (r = a = [a, s]) : ((eT = r), (r = l));
                } else (eT = r), (r = l);
                r !== i && (r = t.substring(n, eT)), (n = r);
            }
            return n !== i && ((ey = e), (n = en(n))), (e = n);
        }
        function eX() {
            var e, n, r, a, s, o, u, c;
            return (
                er.test(t.charAt(eT)) ? ((e = t.charAt(eT)), eT++) : ((e = i), 0 === eN && eO(ei)),
                e === i &&
                    ((e = eT),
                    t.substr(eT, 2) === ea ? ((n = ea), (eT += 2)) : ((n = i), 0 === eN && eO(es)),
                    n !== i && ((ey = e), (n = eo())),
                    (e = n) === i &&
                        ((e = eT),
                        t.substr(eT, 2) === el ? ((n = el), (eT += 2)) : ((n = i), 0 === eN && eO(eu)),
                        n !== i && ((ey = e), (n = ec())),
                        (e = n) === i &&
                            ((e = eT),
                            t.substr(eT, 2) === ed ? ((n = ed), (eT += 2)) : ((n = i), 0 === eN && eO(e_)),
                            n !== i && ((ey = e), (n = ef())),
                            (e = n) === i &&
                                ((e = eT),
                                t.substr(eT, 2) === ep ? ((n = ep), (eT += 2)) : ((n = i), 0 === eN && eO(eh)),
                                n !== i && ((ey = e), (n = em())),
                                (e = n) === i &&
                                    ((e = eT),
                                    t.substr(eT, 2) === eg ? ((n = eg), (eT += 2)) : ((n = i), 0 === eN && eO(eE)),
                                    n !== i
                                        ? ((r = eT),
                                          (a = eT),
                                          (s = eZ()) !== i && (o = eZ()) !== i && (u = eZ()) !== i && (c = eZ()) !== i
                                              ? (a = s = [s, o, u, c])
                                              : ((eT = a), (a = l)),
                                          a !== i && (a = t.substring(r, eT)),
                                          (r = a) !== i ? ((ey = e), (e = n = eA(r))) : ((eT = e), (e = l)))
                                        : ((eT = e), (e = l))))))),
                e
            );
        }
        function eJ() {
            var e, t, n;
            if (((e = eT), (t = []), (n = eX()) !== i)) for (; n !== i; ) t.push(n), (n = eX());
            else t = l;
            return t !== i && ((ey = e), (t = eI(t))), (e = t);
        }
        if ((n = s()) !== i && eT === t.length) return n;
        throw (n !== i && eT < t.length && eO({ type: "end", description: "end of input" }), eD(null, eb, eC));
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
