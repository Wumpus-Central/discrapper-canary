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
            a = {
                start: eP,
            },
            s = eP,
            o = function (e) {
                return {
                    type: "messageFormatPattern",
                    elements: e,
                };
            },
            l = i,
            c = function (e) {
                var t,
                    n,
                    r,
                    i,
                    a,
                    s = "";
                for (t = 0, r = e.length; t < r; t += 1) for (n = 0, a = (i = e[t]).length; n < a; n += 1) s += i[n];
                return s;
            },
            u = function (e) {
                return {
                    type: "messageTextElement",
                    value: e,
                };
            },
            d = /^[^ \t\n\r,.+={}#]/,
            f = {
                type: "class",
                value: "[^ \\t\\n\\r,.+={}#]",
                description: "[^ \\t\\n\\r,.+={}#]",
            },
            p = "{",
            _ = {
                type: "literal",
                value: "{",
                description: '"{"',
            },
            h = null,
            m = ",",
            g = {
                type: "literal",
                value: ",",
                description: '","',
            },
            E = "}",
            b = {
                type: "literal",
                value: "}",
                description: '"}"',
            },
            y = function (e, t) {
                return {
                    type: "argumentElement",
                    id: e,
                    format: t && t[2],
                };
            },
            O = "number",
            A = {
                type: "literal",
                value: "number",
                description: '"number"',
            },
            v = "date",
            S = {
                type: "literal",
                value: "date",
                description: '"date"',
            },
            I = "time",
            T = {
                type: "literal",
                value: "time",
                description: '"time"',
            },
            C = function (e, t) {
                return {
                    type: e + "Format",
                    style: t && t[2],
                };
            },
            N = "plural",
            R = {
                type: "literal",
                value: "plural",
                description: '"plural"',
            },
            w = function (e) {
                return {
                    type: e.type,
                    ordinal: !1,
                    offset: e.offset || 0,
                    options: e.options,
                };
            },
            P = "selectordinal",
            D = {
                type: "literal",
                value: "selectordinal",
                description: '"selectordinal"',
            },
            x = function (e) {
                return {
                    type: e.type,
                    ordinal: !0,
                    offset: e.offset || 0,
                    options: e.options,
                };
            },
            L = "select",
            j = {
                type: "literal",
                value: "select",
                description: '"select"',
            },
            M = function (e) {
                return {
                    type: "selectFormat",
                    options: e,
                };
            },
            k = "=",
            U = {
                type: "literal",
                value: "=",
                description: '"="',
            },
            G = function (e, t) {
                return {
                    type: "optionalFormatPattern",
                    selector: e,
                    value: t,
                };
            },
            V = "offset:",
            F = {
                type: "literal",
                value: "offset:",
                description: '"offset:"',
            },
            B = function (e) {
                return e;
            },
            H = function (e, t) {
                return {
                    type: "pluralFormat",
                    offset: e,
                    options: t,
                };
            },
            Y = {
                type: "other",
                description: "whitespace",
            },
            W = /^[ \t\n\r]/,
            K = {
                type: "class",
                value: "[ \\t\\n\\r]",
                description: "[ \\t\\n\\r]",
            },
            z = {
                type: "other",
                description: "optionalWhitespace",
            },
            q = /^[0-9]/,
            X = {
                type: "class",
                value: "[0-9]",
                description: "[0-9]",
            },
            Z = /^[0-9a-f]/i,
            Q = {
                type: "class",
                value: "[0-9a-f]i",
                description: "[0-9a-f]i",
            },
            $ = "0",
            J = {
                type: "literal",
                value: "0",
                description: '"0"',
            },
            ee = /^[1-9]/,
            et = {
                type: "class",
                value: "[1-9]",
                description: "[1-9]",
            },
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
            es = {
                type: "literal",
                value: "\\\\",
                description: '"\\\\\\\\"',
            },
            eo = function () {
                return "\\";
            },
            el = "\\#",
            ec = {
                type: "literal",
                value: "\\#",
                description: '"\\\\#"',
            },
            eu = function () {
                return "\\#";
            },
            ed = "\\{",
            ef = {
                type: "literal",
                value: "\\{",
                description: '"\\\\{"',
            },
            ep = function () {
                return "{";
            },
            e_ = "\\}",
            eh = {
                type: "literal",
                value: "\\}",
                description: '"\\\\}"',
            },
            em = function () {
                return "}";
            },
            eg = "\\u",
            eE = {
                type: "literal",
                value: "\\u",
                description: '"\\\\u"',
            },
            eb = function (e) {
                return String.fromCharCode(parseInt(e, 16));
            },
            ey = function (e) {
                return e.join("");
            },
            eO = 0,
            eA = 0,
            ev = 0,
            eS = {
                line: 1,
                column: 1,
                seenCR: !1,
            },
            eI = 0,
            eT = [],
            eC = 0;
        if ("startRule" in r) {
            if (!(r.startRule in a)) throw Error("Can't start parsing from rule \"" + r.startRule + '".');
            s = a[r.startRule];
        }

        function eN(e) {
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
                ev !== e &&
                    (ev > e &&
                        ((ev = 0),
                        (eS = {
                            line: 1,
                            column: 1,
                            seenCR: !1,
                        })),
                    n(eS, ev, e),
                    (ev = e)),
                eS
            );
        }

        function eR(e) {
            eO < eI || (eO > eI && ((eI = eO), (eT = [])), eT.push(e));
        }

        function ew(n, r, i) {
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
            var o = eN(i),
                l = i < t.length ? t.charAt(i) : null;
            return null !== r && a(r), new e(null !== n ? n : s(r, l), r, l, i, o.line, o.column);
        }

        function eP() {
            return eD();
        }

        function eD() {
            var e, t, n;
            for (e = eO, t = [], n = ex(); n !== i; ) t.push(n), (n = ex());
            return t !== i && ((eA = e), (t = o(t))), (e = t);
        }

        function ex() {
            var e;
            return (e = ej()) === i && (e = ek()), e;
        }

        function eL() {
            var e, n, r, a, s, o;
            if (
                ((e = eO),
                (n = []),
                (r = eO),
                (a = eq()) !== i && (s = eJ()) !== i && (o = eq()) !== i ? (r = a = [a, s, o]) : ((eO = r), (r = l)),
                r !== i)
            )
                for (; r !== i; )
                    n.push(r),
                        (r = eO),
                        (a = eq()) !== i && (s = eJ()) !== i && (o = eq()) !== i
                            ? (r = a = [a, s, o])
                            : ((eO = r), (r = l));
            else n = l;
            return (
                n !== i && ((eA = e), (n = c(n))),
                (e = n) === i && ((e = eO), (n = ez()) !== i && (n = t.substring(e, eO)), (e = n)),
                e
            );
        }

        function ej() {
            var e, t;
            return (e = eO), (t = eL()) !== i && ((eA = e), (t = u(t))), (e = t);
        }

        function eM() {
            var e, n, r;
            if ((e = eQ()) === i) {
                if (
                    ((e = eO),
                    (n = []),
                    d.test(t.charAt(eO)) ? ((r = t.charAt(eO)), eO++) : ((r = i), 0 === eC && eR(f)),
                    r !== i)
                )
                    for (; r !== i; )
                        n.push(r), d.test(t.charAt(eO)) ? ((r = t.charAt(eO)), eO++) : ((r = i), 0 === eC && eR(f));
                else n = l;
                n !== i && (n = t.substring(e, eO)), (e = n);
            }
            return e;
        }

        function ek() {
            var e, n, r, a, s, o, c;
            return (
                (e = eO),
                123 === t.charCodeAt(eO) ? ((n = p), eO++) : ((n = i), 0 === eC && eR(_)),
                n !== i && eq() !== i && (r = eM()) !== i && eq() !== i
                    ? ((a = eO),
                      44 === t.charCodeAt(eO) ? ((s = m), eO++) : ((s = i), 0 === eC && eR(g)),
                      s !== i && (o = eq()) !== i && (c = eU()) !== i ? (a = s = [s, o, c]) : ((eO = a), (a = l)),
                      a === i && (a = h),
                      a !== i && (s = eq()) !== i
                          ? (125 === t.charCodeAt(eO) ? ((o = E), eO++) : ((o = i), 0 === eC && eR(b)),
                            o !== i ? ((eA = e), (e = n = y(r, a))) : ((eO = e), (e = l)))
                          : ((eO = e), (e = l)))
                    : ((eO = e), (e = l)),
                e
            );
        }

        function eU() {
            var e;
            return (e = eG()) === i && (e = eV()) === i && (e = eF()) === i && (e = eB()), e;
        }

        function eG() {
            var e, n, r, a, s, o;
            return (
                (e = eO),
                t.substr(eO, 6) === O ? ((n = O), (eO += 6)) : ((n = i), 0 === eC && eR(A)),
                n === i &&
                    (t.substr(eO, 4) === v ? ((n = v), (eO += 4)) : ((n = i), 0 === eC && eR(S)),
                    n === i && (t.substr(eO, 4) === I ? ((n = I), (eO += 4)) : ((n = i), 0 === eC && eR(T)))),
                n !== i && eq() !== i
                    ? ((r = eO),
                      44 === t.charCodeAt(eO) ? ((a = m), eO++) : ((a = i), 0 === eC && eR(g)),
                      a !== i && (s = eq()) !== i && (o = eJ()) !== i ? (r = a = [a, s, o]) : ((eO = r), (r = l)),
                      r === i && (r = h),
                      r !== i ? ((eA = e), (e = n = C(n, r))) : ((eO = e), (e = l)))
                    : ((eO = e), (e = l)),
                e
            );
        }

        function eV() {
            var e, n, r, a;
            return (
                (e = eO),
                t.substr(eO, 6) === N ? ((n = N), (eO += 6)) : ((n = i), 0 === eC && eR(R)),
                n !== i && eq() !== i
                    ? (44 === t.charCodeAt(eO) ? ((r = m), eO++) : ((r = i), 0 === eC && eR(g)),
                      r !== i && eq() !== i && (a = eK()) !== i ? ((eA = e), (e = n = w(a))) : ((eO = e), (e = l)))
                    : ((eO = e), (e = l)),
                e
            );
        }

        function eF() {
            var e, n, r, a;
            return (
                (e = eO),
                t.substr(eO, 13) === P ? ((n = P), (eO += 13)) : ((n = i), 0 === eC && eR(D)),
                n !== i && eq() !== i
                    ? (44 === t.charCodeAt(eO) ? ((r = m), eO++) : ((r = i), 0 === eC && eR(g)),
                      r !== i && eq() !== i && (a = eK()) !== i ? ((eA = e), (e = n = x(a))) : ((eO = e), (e = l)))
                    : ((eO = e), (e = l)),
                e
            );
        }

        function eB() {
            var e, n, r, a, s;
            if (((e = eO), t.substr(eO, 6) === L ? ((n = L), (eO += 6)) : ((n = i), 0 === eC && eR(j)), n !== i))
                if (eq() !== i)
                    if ((44 === t.charCodeAt(eO) ? ((r = m), eO++) : ((r = i), 0 === eC && eR(g)), r !== i))
                        if (eq() !== i) {
                            if (((a = []), (s = eY()) !== i)) for (; s !== i; ) a.push(s), (s = eY());
                            else a = l;
                            a !== i ? ((eA = e), (e = n = M(a))) : ((eO = e), (e = l));
                        } else (eO = e), (e = l);
                    else (eO = e), (e = l);
                else (eO = e), (e = l);
            else (eO = e), (e = l);
            return e;
        }

        function eH() {
            var e, n, r, a;
            return (
                (e = eO),
                (n = eO),
                61 === t.charCodeAt(eO) ? ((r = k), eO++) : ((r = i), 0 === eC && eR(U)),
                r !== i && (a = eQ()) !== i ? (n = r = [r, a]) : ((eO = n), (n = l)),
                n !== i && (n = t.substring(e, eO)),
                (e = n) === i && (e = eJ()),
                e
            );
        }

        function eY() {
            var e, n, r, a, s, o;
            return (
                (e = eO),
                (n = eq()) !== i && (r = eH()) !== i && eq() !== i
                    ? (123 === t.charCodeAt(eO) ? ((a = p), eO++) : ((a = i), 0 === eC && eR(_)),
                      a !== i && eq() !== i && (s = eD()) !== i && eq() !== i
                          ? (125 === t.charCodeAt(eO) ? ((o = E), eO++) : ((o = i), 0 === eC && eR(b)),
                            o !== i ? ((eA = e), (e = n = G(r, s))) : ((eO = e), (e = l)))
                          : ((eO = e), (e = l)))
                    : ((eO = e), (e = l)),
                e
            );
        }

        function eW() {
            var e, n, r;
            return (
                (e = eO),
                t.substr(eO, 7) === V ? ((n = V), (eO += 7)) : ((n = i), 0 === eC && eR(F)),
                n !== i && eq() !== i && (r = eQ()) !== i ? ((eA = e), (e = n = B(r))) : ((eO = e), (e = l)),
                e
            );
        }

        function eK() {
            var e, t, n, r;
            if (((e = eO), (t = eW()) === i && (t = h), t !== i))
                if (eq() !== i) {
                    if (((n = []), (r = eY()) !== i)) for (; r !== i; ) n.push(r), (r = eY());
                    else n = l;
                    n !== i ? ((eA = e), (e = t = H(t, n))) : ((eO = e), (e = l));
                } else (eO = e), (e = l);
            else (eO = e), (e = l);
            return e;
        }

        function ez() {
            var e, n;
            if (
                (eC++,
                (e = []),
                W.test(t.charAt(eO)) ? ((n = t.charAt(eO)), eO++) : ((n = i), 0 === eC && eR(K)),
                n !== i)
            )
                for (; n !== i; )
                    e.push(n), W.test(t.charAt(eO)) ? ((n = t.charAt(eO)), eO++) : ((n = i), 0 === eC && eR(K));
            else e = l;
            return eC--, e === i && ((n = i), 0 === eC && eR(Y)), e;
        }

        function eq() {
            var e, n, r;
            for (eC++, e = eO, n = [], r = ez(); r !== i; ) n.push(r), (r = ez());
            return n !== i && (n = t.substring(e, eO)), (e = n), eC--, e === i && ((n = i), 0 === eC && eR(z)), e;
        }

        function eX() {
            var e;
            return q.test(t.charAt(eO)) ? ((e = t.charAt(eO)), eO++) : ((e = i), 0 === eC && eR(X)), e;
        }

        function eZ() {
            var e;
            return Z.test(t.charAt(eO)) ? ((e = t.charAt(eO)), eO++) : ((e = i), 0 === eC && eR(Q)), e;
        }

        function eQ() {
            var e, n, r, a, s, o;
            if (((e = eO), 48 === t.charCodeAt(eO) ? ((n = $), eO++) : ((n = i), 0 === eC && eR(J)), n === i)) {
                if (
                    ((n = eO),
                    (r = eO),
                    ee.test(t.charAt(eO)) ? ((a = t.charAt(eO)), eO++) : ((a = i), 0 === eC && eR(et)),
                    a !== i)
                ) {
                    for (s = [], o = eX(); o !== i; ) s.push(o), (o = eX());
                    s !== i ? (r = a = [a, s]) : ((eO = r), (r = l));
                } else (eO = r), (r = l);
                r !== i && (r = t.substring(n, eO)), (n = r);
            }
            return n !== i && ((eA = e), (n = en(n))), (e = n);
        }

        function e$() {
            var e, n, r, a, s, o, c, u;
            return (
                er.test(t.charAt(eO)) ? ((e = t.charAt(eO)), eO++) : ((e = i), 0 === eC && eR(ei)),
                e === i &&
                    ((e = eO),
                    t.substr(eO, 2) === ea ? ((n = ea), (eO += 2)) : ((n = i), 0 === eC && eR(es)),
                    n !== i && ((eA = e), (n = eo())),
                    (e = n) === i &&
                        ((e = eO),
                        t.substr(eO, 2) === el ? ((n = el), (eO += 2)) : ((n = i), 0 === eC && eR(ec)),
                        n !== i && ((eA = e), (n = eu())),
                        (e = n) === i &&
                            ((e = eO),
                            t.substr(eO, 2) === ed ? ((n = ed), (eO += 2)) : ((n = i), 0 === eC && eR(ef)),
                            n !== i && ((eA = e), (n = ep())),
                            (e = n) === i &&
                                ((e = eO),
                                t.substr(eO, 2) === e_ ? ((n = e_), (eO += 2)) : ((n = i), 0 === eC && eR(eh)),
                                n !== i && ((eA = e), (n = em())),
                                (e = n) === i &&
                                    ((e = eO),
                                    t.substr(eO, 2) === eg ? ((n = eg), (eO += 2)) : ((n = i), 0 === eC && eR(eE)),
                                    n !== i
                                        ? ((r = eO),
                                          (a = eO),
                                          (s = eZ()) !== i && (o = eZ()) !== i && (c = eZ()) !== i && (u = eZ()) !== i
                                              ? (a = s = [s, o, c, u])
                                              : ((eO = a), (a = l)),
                                          a !== i && (a = t.substring(r, eO)),
                                          (r = a) !== i ? ((eA = e), (e = n = eb(r))) : ((eO = e), (e = l)))
                                        : ((eO = e), (e = l))))))),
                e
            );
        }

        function eJ() {
            var e, t, n;
            if (((e = eO), (t = []), (n = e$()) !== i)) for (; n !== i; ) t.push(n), (n = e$());
            else t = l;
            return t !== i && ((eA = e), (t = ey(t))), (e = t);
        }
        if ((n = s()) !== i && eO === t.length) return n;
        throw (
            (n !== i &&
                eO < t.length &&
                eR({
                    type: "end",
                    description: "end of input",
                }),
            ew(null, eT, eI))
        );
    }
    return (
        (function (e, t) {
            function n() {
                this.constructor = e;
            }
            (n.prototype = t.prototype), (e.prototype = new n());
        })(e, Error),
        {
            SyntaxError: e,
            parse: t,
        }
    );
})();
