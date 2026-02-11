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
            a = { start: ew },
            s = ew,
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
            h = { type: "literal", value: "{", description: '"{"' },
            p = null,
            g = ",",
            E = { type: "literal", value: ",", description: '","' },
            A = "}",
            I = { type: "literal", value: "}", description: '"}"' },
            T = function (e, t) {
                return { type: "argumentElement", id: e, format: t && t[2] };
            },
            y = "number",
            S = { type: "literal", value: "number", description: '"number"' },
            v = "date",
            C = { type: "literal", value: "date", description: '"date"' },
            b = "time",
            N = { type: "literal", value: "time", description: '"time"' },
            R = function (e, t) {
                return { type: e + "Format", style: t && t[2] };
            },
            O = "plural",
            D = { type: "literal", value: "plural", description: '"plural"' },
            L = function (e) {
                return { type: e.type, ordinal: !1, offset: e.offset || 0, options: e.options };
            },
            w = "selectordinal",
            x = { type: "literal", value: "selectordinal", description: '"selectordinal"' },
            P = function (e) {
                return { type: e.type, ordinal: !0, offset: e.offset || 0, options: e.options };
            },
            M = "select",
            k = { type: "literal", value: "select", description: '"select"' },
            U = function (e) {
                return { type: "selectFormat", options: e };
            },
            G = "=",
            F = { type: "literal", value: "=", description: '"="' },
            V = function (e, t) {
                return { type: "optionalFormatPattern", selector: e, value: t };
            },
            B = "offset:",
            j = { type: "literal", value: "offset:", description: '"offset:"' },
            H = function (e) {
                return e;
            },
            Y = function (e, t) {
                return { type: "pluralFormat", offset: e, options: t };
            },
            W = { type: "other", description: "whitespace" },
            K = /^[ \t\n\r]/,
            $ = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" },
            z = { type: "other", description: "optionalWhitespace" },
            q = /^[0-9]/,
            X = { type: "class", value: "[0-9]", description: "[0-9]" },
            Z = /^[0-9a-f]/i,
            Q = { type: "class", value: "[0-9a-f]i", description: "[0-9a-f]i" },
            J = "0",
            ee = { type: "literal", value: "0", description: '"0"' },
            et = /^[1-9]/,
            en = { type: "class", value: "[1-9]", description: "[1-9]" },
            er = function (e) {
                return parseInt(e, 10);
            },
            ei = /^[^{}\\\0-\x1F \t\n\r]/,
            ea = {
                type: "class",
                value: "[^{}\\\\\\0-\\x1F\x7f \\t\\n\\r]",
                description: "[^{}\\\\\\0-\\x1F\x7f \\t\\n\\r]",
            },
            es = "\\\\",
            eo = { type: "literal", value: "\\\\", description: '"\\\\\\\\"' },
            el = function () {
                return "\\";
            },
            eu = "\\#",
            ec = { type: "literal", value: "\\#", description: '"\\\\#"' },
            ed = function () {
                return "\\#";
            },
            e_ = "\\{",
            ef = { type: "literal", value: "\\{", description: '"\\\\{"' },
            eh = function () {
                return "{";
            },
            ep = "\\}",
            em = { type: "literal", value: "\\}", description: '"\\\\}"' },
            eg = function () {
                return "}";
            },
            eE = "\\u",
            eA = { type: "literal", value: "\\u", description: '"\\\\u"' },
            eI = function (e) {
                return String.fromCharCode(parseInt(e, 16));
            },
            eT = function (e) {
                return e.join("");
            },
            ey = 0,
            eS = 0,
            ev = 0,
            eC = { line: 1, column: 1, seenCR: !1 },
            eb = 0,
            eN = [],
            eR = 0;
        if ("startRule" in r) {
            if (!(r.startRule in a)) throw Error("Can't start parsing from rule \"" + r.startRule + '".');
            s = a[r.startRule];
        }
        function eO(e) {
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
                ev !== e && (ev > e && ((ev = 0), (eC = { line: 1, column: 1, seenCR: !1 })), n(eC, ev, e), (ev = e)),
                eC
            );
        }
        function eD(e) {
            ey < eb || (ey > eb && ((eb = ey), (eN = [])), eN.push(e));
        }
        function eL(n, r, i) {
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
            var o = eO(i),
                l = i < t.length ? t.charAt(i) : null;
            return null !== r && a(r), new e(null !== n ? n : s(r, l), r, l, i, o.line, o.column);
        }
        function ew() {
            return ex();
        }
        function ex() {
            var e, t, n;
            for (e = ey, t = [], n = eP(); n !== i; ) t.push(n), (n = eP());
            return t !== i && ((eS = e), (t = o(t))), (e = t);
        }
        function eP() {
            var e;
            return (e = ek()) === i && (e = eG()), e;
        }
        function eM() {
            var e, n, r, a, s, o;
            if (
                ((e = ey),
                (n = []),
                (r = ey),
                (a = eq()) !== i && (s = e0()) !== i && (o = eq()) !== i ? (r = a = [a, s, o]) : ((ey = r), (r = l)),
                r !== i)
            )
                for (; r !== i; )
                    n.push(r),
                        (r = ey),
                        (a = eq()) !== i && (s = e0()) !== i && (o = eq()) !== i
                            ? (r = a = [a, s, o])
                            : ((ey = r), (r = l));
            else n = l;
            return (
                n !== i && ((eS = e), (n = u(n))),
                (e = n) === i && ((e = ey), (n = ez()) !== i && (n = t.substring(e, ey)), (e = n)),
                e
            );
        }
        function ek() {
            var e, t;
            return (e = ey), (t = eM()) !== i && ((eS = e), (t = c(t))), (e = t);
        }
        function eU() {
            var e, n, r;
            if ((e = eQ()) === i) {
                if (
                    ((e = ey),
                    (n = []),
                    d.test(t.charAt(ey)) ? ((r = t.charAt(ey)), ey++) : ((r = i), 0 === eR && eD(_)),
                    r !== i)
                )
                    for (; r !== i; )
                        n.push(r), d.test(t.charAt(ey)) ? ((r = t.charAt(ey)), ey++) : ((r = i), 0 === eR && eD(_));
                else n = l;
                n !== i && (n = t.substring(e, ey)), (e = n);
            }
            return e;
        }
        function eG() {
            var e, n, r, a, s, o, u;
            return (
                (e = ey),
                123 === t.charCodeAt(ey) ? ((n = f), ey++) : ((n = i), 0 === eR && eD(h)),
                n !== i && eq() !== i && (r = eU()) !== i && eq() !== i
                    ? ((a = ey),
                      44 === t.charCodeAt(ey) ? ((s = g), ey++) : ((s = i), 0 === eR && eD(E)),
                      s !== i && (o = eq()) !== i && (u = eF()) !== i ? (a = s = [s, o, u]) : ((ey = a), (a = l)),
                      a === i && (a = p),
                      a !== i && (s = eq()) !== i
                          ? (125 === t.charCodeAt(ey) ? ((o = A), ey++) : ((o = i), 0 === eR && eD(I)),
                            o !== i ? ((eS = e), (e = n = T(r, a))) : ((ey = e), (e = l)))
                          : ((ey = e), (e = l)))
                    : ((ey = e), (e = l)),
                e
            );
        }
        function eF() {
            var e;
            return (e = eV()) === i && (e = eB()) === i && (e = ej()) === i && (e = eH()), e;
        }
        function eV() {
            var e, n, r, a, s, o;
            return (
                (e = ey),
                t.substr(ey, 6) === y ? ((n = y), (ey += 6)) : ((n = i), 0 === eR && eD(S)),
                n === i &&
                    (t.substr(ey, 4) === v ? ((n = v), (ey += 4)) : ((n = i), 0 === eR && eD(C)),
                    n === i && (t.substr(ey, 4) === b ? ((n = b), (ey += 4)) : ((n = i), 0 === eR && eD(N)))),
                n !== i && eq() !== i
                    ? ((r = ey),
                      44 === t.charCodeAt(ey) ? ((a = g), ey++) : ((a = i), 0 === eR && eD(E)),
                      a !== i && (s = eq()) !== i && (o = e0()) !== i ? (r = a = [a, s, o]) : ((ey = r), (r = l)),
                      r === i && (r = p),
                      r !== i ? ((eS = e), (e = n = R(n, r))) : ((ey = e), (e = l)))
                    : ((ey = e), (e = l)),
                e
            );
        }
        function eB() {
            var e, n, r, a;
            return (
                (e = ey),
                t.substr(ey, 6) === O ? ((n = O), (ey += 6)) : ((n = i), 0 === eR && eD(D)),
                n !== i && eq() !== i
                    ? (44 === t.charCodeAt(ey) ? ((r = g), ey++) : ((r = i), 0 === eR && eD(E)),
                      r !== i && eq() !== i && (a = e$()) !== i ? ((eS = e), (e = n = L(a))) : ((ey = e), (e = l)))
                    : ((ey = e), (e = l)),
                e
            );
        }
        function ej() {
            var e, n, r, a;
            return (
                (e = ey),
                t.substr(ey, 13) === w ? ((n = w), (ey += 13)) : ((n = i), 0 === eR && eD(x)),
                n !== i && eq() !== i
                    ? (44 === t.charCodeAt(ey) ? ((r = g), ey++) : ((r = i), 0 === eR && eD(E)),
                      r !== i && eq() !== i && (a = e$()) !== i ? ((eS = e), (e = n = P(a))) : ((ey = e), (e = l)))
                    : ((ey = e), (e = l)),
                e
            );
        }
        function eH() {
            var e, n, r, a, s;
            if (((e = ey), t.substr(ey, 6) === M ? ((n = M), (ey += 6)) : ((n = i), 0 === eR && eD(k)), n !== i))
                if (eq() !== i)
                    if ((44 === t.charCodeAt(ey) ? ((r = g), ey++) : ((r = i), 0 === eR && eD(E)), r !== i))
                        if (eq() !== i) {
                            if (((a = []), (s = eW()) !== i)) for (; s !== i; ) a.push(s), (s = eW());
                            else a = l;
                            a !== i ? ((eS = e), (e = n = U(a))) : ((ey = e), (e = l));
                        } else (ey = e), (e = l);
                    else (ey = e), (e = l);
                else (ey = e), (e = l);
            else (ey = e), (e = l);
            return e;
        }
        function eY() {
            var e, n, r, a;
            return (
                (e = ey),
                (n = ey),
                61 === t.charCodeAt(ey) ? ((r = G), ey++) : ((r = i), 0 === eR && eD(F)),
                r !== i && (a = eQ()) !== i ? (n = r = [r, a]) : ((ey = n), (n = l)),
                n !== i && (n = t.substring(e, ey)),
                (e = n) === i && (e = e0()),
                e
            );
        }
        function eW() {
            var e, n, r, a, s, o;
            return (
                (e = ey),
                (n = eq()) !== i && (r = eY()) !== i && eq() !== i
                    ? (123 === t.charCodeAt(ey) ? ((a = f), ey++) : ((a = i), 0 === eR && eD(h)),
                      a !== i && eq() !== i && (s = ex()) !== i && eq() !== i
                          ? (125 === t.charCodeAt(ey) ? ((o = A), ey++) : ((o = i), 0 === eR && eD(I)),
                            o !== i ? ((eS = e), (e = n = V(r, s))) : ((ey = e), (e = l)))
                          : ((ey = e), (e = l)))
                    : ((ey = e), (e = l)),
                e
            );
        }
        function eK() {
            var e, n, r;
            return (
                (e = ey),
                t.substr(ey, 7) === B ? ((n = B), (ey += 7)) : ((n = i), 0 === eR && eD(j)),
                n !== i && eq() !== i && (r = eQ()) !== i ? ((eS = e), (e = n = H(r))) : ((ey = e), (e = l)),
                e
            );
        }
        function e$() {
            var e, t, n, r;
            if (((e = ey), (t = eK()) === i && (t = p), t !== i))
                if (eq() !== i) {
                    if (((n = []), (r = eW()) !== i)) for (; r !== i; ) n.push(r), (r = eW());
                    else n = l;
                    n !== i ? ((eS = e), (e = t = Y(t, n))) : ((ey = e), (e = l));
                } else (ey = e), (e = l);
            else (ey = e), (e = l);
            return e;
        }
        function ez() {
            var e, n;
            if (
                (eR++,
                (e = []),
                K.test(t.charAt(ey)) ? ((n = t.charAt(ey)), ey++) : ((n = i), 0 === eR && eD($)),
                n !== i)
            )
                for (; n !== i; )
                    e.push(n), K.test(t.charAt(ey)) ? ((n = t.charAt(ey)), ey++) : ((n = i), 0 === eR && eD($));
            else e = l;
            return eR--, e === i && ((n = i), 0 === eR && eD(W)), e;
        }
        function eq() {
            var e, n, r;
            for (eR++, e = ey, n = [], r = ez(); r !== i; ) n.push(r), (r = ez());
            return n !== i && (n = t.substring(e, ey)), (e = n), eR--, e === i && ((n = i), 0 === eR && eD(z)), e;
        }
        function eX() {
            var e;
            return q.test(t.charAt(ey)) ? ((e = t.charAt(ey)), ey++) : ((e = i), 0 === eR && eD(X)), e;
        }
        function eZ() {
            var e;
            return Z.test(t.charAt(ey)) ? ((e = t.charAt(ey)), ey++) : ((e = i), 0 === eR && eD(Q)), e;
        }
        function eQ() {
            var e, n, r, a, s, o;
            if (((e = ey), 48 === t.charCodeAt(ey) ? ((n = J), ey++) : ((n = i), 0 === eR && eD(ee)), n === i)) {
                if (
                    ((n = ey),
                    (r = ey),
                    et.test(t.charAt(ey)) ? ((a = t.charAt(ey)), ey++) : ((a = i), 0 === eR && eD(en)),
                    a !== i)
                ) {
                    for (s = [], o = eX(); o !== i; ) s.push(o), (o = eX());
                    s !== i ? (r = a = [a, s]) : ((ey = r), (r = l));
                } else (ey = r), (r = l);
                r !== i && (r = t.substring(n, ey)), (n = r);
            }
            return n !== i && ((eS = e), (n = er(n))), (e = n);
        }
        function eJ() {
            var e, n, r, a, s, o, u, c;
            return (
                ei.test(t.charAt(ey)) ? ((e = t.charAt(ey)), ey++) : ((e = i), 0 === eR && eD(ea)),
                e === i &&
                    ((e = ey),
                    t.substr(ey, 2) === es ? ((n = es), (ey += 2)) : ((n = i), 0 === eR && eD(eo)),
                    n !== i && ((eS = e), (n = el())),
                    (e = n) === i &&
                        ((e = ey),
                        t.substr(ey, 2) === eu ? ((n = eu), (ey += 2)) : ((n = i), 0 === eR && eD(ec)),
                        n !== i && ((eS = e), (n = ed())),
                        (e = n) === i &&
                            ((e = ey),
                            t.substr(ey, 2) === e_ ? ((n = e_), (ey += 2)) : ((n = i), 0 === eR && eD(ef)),
                            n !== i && ((eS = e), (n = eh())),
                            (e = n) === i &&
                                ((e = ey),
                                t.substr(ey, 2) === ep ? ((n = ep), (ey += 2)) : ((n = i), 0 === eR && eD(em)),
                                n !== i && ((eS = e), (n = eg())),
                                (e = n) === i &&
                                    ((e = ey),
                                    t.substr(ey, 2) === eE ? ((n = eE), (ey += 2)) : ((n = i), 0 === eR && eD(eA)),
                                    n !== i
                                        ? ((r = ey),
                                          (a = ey),
                                          (s = eZ()) !== i && (o = eZ()) !== i && (u = eZ()) !== i && (c = eZ()) !== i
                                              ? (a = s = [s, o, u, c])
                                              : ((ey = a), (a = l)),
                                          a !== i && (a = t.substring(r, ey)),
                                          (r = a) !== i ? ((eS = e), (e = n = eI(r))) : ((ey = e), (e = l)))
                                        : ((ey = e), (e = l))))))),
                e
            );
        }
        function e0() {
            var e, t, n;
            if (((e = ey), (t = []), (n = eJ()) !== i)) for (; n !== i; ) t.push(n), (n = eJ());
            else t = l;
            return t !== i && ((eS = e), (t = eT(t))), (e = t);
        }
        if ((n = s()) !== i && ey === t.length) return n;
        throw (n !== i && ey < t.length && eD({ type: "end", description: "end of input" }), eL(null, eN, eb));
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
