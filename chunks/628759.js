function o(r, e) {
    var t = ("u" > typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
    if (!t) {
        if (
            Array.isArray(r) ||
            (t = (function (r) {
                if (r) {
                    if ("string" == typeof r) return a(r, void 0);
                    var e = Object.prototype.toString.call(r).slice(8, -1);
                    if (("Object" === e && r.constructor && (e = r.constructor.name), "Map" === e || "Set" === e))
                        return Array.from(r);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return a(r, void 0);
                }
            })(r)) ||
            (e && r && "number" == typeof r.length)
        ) {
            t && (r = t);
            var o = 0,
                n = function () {};
            return {
                s: n,
                n: function () {
                    return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] };
                },
                e: function (r) {
                    throw r;
                },
                f: n,
            };
        }
        throw TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
    }
    var c,
        i = !0,
        s = !1;
    return {
        s: function () {
            t = t.call(r);
        },
        n: function () {
            var r = t.next();
            return (i = r.done), r;
        },
        e: function (r) {
            (s = !0), (c = r);
        },
        f: function () {
            try {
                i || null == t.return || t.return();
            } finally {
                if (s) throw c;
            }
        },
    };
}
function a(r, e) {
    (null == e || e > r.length) && (e = r.length);
    for (var t = 0, o = Array(e); t < e; t++) o[t] = r[t];
    return o;
}
var n,
    c = t(143585),
    i = {
        fg: "#FFF",
        bg: "#000",
        newline: !1,
        escapeXML: !1,
        stream: !1,
        colors:
            ((n = {
                0: "#000",
                1: "#A00",
                2: "#0A0",
                3: "#A50",
                4: "#00A",
                5: "#A0A",
                6: "#0AA",
                7: "#AAA",
                8: "#555",
                9: "#F55",
                10: "#5F5",
                11: "#FF5",
                12: "#55F",
                13: "#F5F",
                14: "#5FF",
                15: "#FFF",
            }),
            p(0, 5).forEach(function (r) {
                p(0, 5).forEach(function (e) {
                    p(0, 5).forEach(function (t) {
                        var a, c, i;
                        n[16 + 36 * (a = r) + 6 * (c = e) + (i = t)] = (function (r) {
                            var e,
                                t = [],
                                a = o(r);
                            try {
                                for (a.s(); !(e = a.n()).done; ) {
                                    var n = e.value;
                                    t.push(s(n));
                                }
                            } catch (r) {
                                a.e(r);
                            } finally {
                                a.f();
                            }
                            return "#" + t.join("");
                        })([a > 0 ? 40 * a + 55 : 0, c > 0 ? 40 * c + 55 : 0, i > 0 ? 40 * i + 55 : 0]);
                    });
                });
            }),
            p(0, 23).forEach(function (r) {
                var e = s(10 * r + 8);
                n[r + 232] = "#" + e + e + e;
            }),
            n),
    };
function s(r) {
    for (var e = r.toString(16); e.length < 2; ) e = "0" + e;
    return e;
}
function l(r, e, t, o) {
    var a, n, i, s, l, p, d, v;
    return (
        "text" === e
            ? ((n = t), (a = o.escapeXML ? c.encodeXML(n) : n))
            : "display" === e
              ? ((i = r),
                (s = t),
                (l = o),
                (s = parseInt(s, 10)),
                (d = {
                    "-1": function () {
                        return "<br/>";
                    },
                    0: function () {
                        return i.length && u(i);
                    },
                    1: function () {
                        return f(i, "b");
                    },
                    3: function () {
                        return f(i, "i");
                    },
                    4: function () {
                        return f(i, "u");
                    },
                    8: function () {
                        return g(i, "display:none");
                    },
                    9: function () {
                        return f(i, "strike");
                    },
                    22: function () {
                        return g(i, "font-weight:normal;text-decoration:none;font-style:normal");
                    },
                    23: function () {
                        return h(i, "i");
                    },
                    24: function () {
                        return h(i, "u");
                    },
                    39: function () {
                        return b(i, l.fg);
                    },
                    49: function () {
                        return m(i, l.bg);
                    },
                    53: function () {
                        return g(i, "text-decoration:overline");
                    },
                })[s]
                    ? (p = d[s]())
                    : 4 < s && s < 7
                      ? (p = f(i, "blink"))
                      : 29 < s && s < 38
                        ? (p = b(i, l.colors[s - 30]))
                        : 39 < s && s < 48
                          ? (p = m(i, l.colors[s - 40]))
                          : 89 < s && s < 98
                            ? (p = b(i, l.colors[8 + (s - 90)]))
                            : 99 < s && s < 108 && (p = m(i, l.colors[8 + (s - 100)])),
                (a = p))
              : "xterm256Foreground" === e
                ? (a = b(r, o.colors[t]))
                : "xterm256Background" === e
                  ? (a = m(r, o.colors[t]))
                  : "rgb" === e &&
                    (a = g(
                        r,
                        (38 == +(v = (v = t).substring(2).slice(0, -1)).substr(0, 2)
                            ? "color:#"
                            : "background-color:#") +
                            v
                                .substring(5)
                                .split(";")
                                .map(function (r) {
                                    return ("0" + Number(r).toString(16)).substr(-2);
                                })
                                .join(""),
                    )),
        a
    );
}
function u(r) {
    var e = r.slice(0);
    return (
        (r.length = 0),
        e
            .reverse()
            .map(function (r) {
                return "</" + r + ">";
            })
            .join("")
    );
}
function p(r, e) {
    for (var t = [], o = r; o <= e; o++) t.push(o);
    return t;
}
function d(r) {
    r = parseInt(r, 10);
    var e = null;
    return (
        0 === r
            ? (e = "all")
            : 1 === r
              ? (e = "bold")
              : 2 < r && r < 5
                ? (e = "underline")
                : 4 < r && r < 7
                  ? (e = "blink")
                  : 8 === r
                    ? (e = "hide")
                    : 9 === r
                      ? (e = "strike")
                      : (29 < r && r < 38) || 39 === r || (89 < r && r < 98)
                        ? (e = "foreground-color")
                        : ((39 < r && r < 48) || 49 === r || (99 < r && r < 108)) && (e = "background-color"),
        e
    );
}
function f(r, e, t) {
    return t || (t = ""), r.push(e), "<".concat(e).concat(t ? ' style="'.concat(t, '"') : "", ">");
}
function g(r, e) {
    return f(r, "span", e);
}
function b(r, e) {
    return f(r, "span", "color:" + e);
}
function m(r, e) {
    return f(r, "span", "background-color:" + e);
}
function h(r, e) {
    var t;
    if ((r.slice(-1)[0] === e && (t = r.pop()), t)) return "</" + e + ">";
}
r.exports = (function () {
    var r;
    function e(r) {
        if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
        (r = r || {}).colors && (r.colors = Object.assign({}, i.colors, r.colors)),
            (this.options = Object.assign({}, i, r)),
            (this.stack = []),
            (this.stickyStack = []);
    }
    return (
        (r = [
            {
                key: "toHtml",
                value: function (r) {
                    var e = this;
                    r = "string" == typeof r ? [r] : r;
                    var t = this.stack,
                        a = this.options,
                        n = [];
                    return (
                        this.stickyStack.forEach(function (r) {
                            var e = l(t, r.token, r.data, a);
                            e && n.push(e);
                        }),
                        !(function (r, e, t) {
                            var a = !1;
                            function n() {
                                return "";
                            }
                            function c(r) {
                                return e.newline ? t("display", -1) : t("text", r), "";
                            }
                            var i = [
                                    { pattern: /^\x08+/, sub: n },
                                    { pattern: /^\x1b\[[012]?K/, sub: n },
                                    { pattern: /^\x1b\[\(B/, sub: n },
                                    {
                                        pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/,
                                        sub: function (r) {
                                            return t("rgb", r), "";
                                        },
                                    },
                                    {
                                        pattern: /^\x1b\[38;5;(\d+)m/,
                                        sub: function (r, e) {
                                            return t("xterm256Foreground", e), "";
                                        },
                                    },
                                    {
                                        pattern: /^\x1b\[48;5;(\d+)m/,
                                        sub: function (r, e) {
                                            return t("xterm256Background", e), "";
                                        },
                                    },
                                    { pattern: /^\n/, sub: c },
                                    { pattern: /^\r+\n/, sub: c },
                                    { pattern: /^\r/, sub: c },
                                    {
                                        pattern: /^\x1b\[((?:\d{1,3};?)+|)m/,
                                        sub: function (r, e) {
                                            (a = !0), 0 === e.trim().length && (e = "0");
                                            var n,
                                                c = o((e = e.trimRight(";").split(";")));
                                            try {
                                                for (c.s(); !(n = c.n()).done; ) {
                                                    var i = n.value;
                                                    t("display", i);
                                                }
                                            } catch (r) {
                                                c.e(r);
                                            } finally {
                                                c.f();
                                            }
                                            return "";
                                        },
                                    },
                                    { pattern: /^\x1b\[\d?J/, sub: n },
                                    { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: n },
                                    { pattern: /^\x1b\[?[\d;]{0,3}/, sub: n },
                                    {
                                        pattern: /^(([^\x1b\x08\r\n])+)/,
                                        sub: function (r) {
                                            return t("text", r), "";
                                        },
                                    },
                                ],
                                s = [],
                                l = r.length;
                            r: for (; l > 0; ) {
                                for (var u, p = 0, d = 0, f = i.length; d < f; p = ++d)
                                    if (
                                        ((u = i[p]),
                                        (p > 3 && a) || ((a = !1), (r = r.replace(u.pattern, u.sub))),
                                        r.length !== l)
                                    ) {
                                        l = r.length;
                                        continue r;
                                    }
                                if (r.length === l) break;
                                s.push(0), (l = r.length);
                            }
                        })(r.join(""), a, function (r, o) {
                            var c = l(t, r, o, a);
                            c && n.push(c),
                                a.stream &&
                                    (e.stickyStack = (function (r, e, t) {
                                        if ("text" !== e) {
                                            var o;
                                            (r = r.filter(
                                                ((o = d(t)),
                                                function (r) {
                                                    return (null === o || r.category !== o) && "all" !== o;
                                                }),
                                            )).push({ token: e, data: t, category: d(t) });
                                        }
                                        return r;
                                    })(e.stickyStack, r, o));
                        }),
                        t.length && n.push(u(t)),
                        n.join("")
                    );
                },
            },
        ]),
        (function (r, e) {
            for (var t = 0; t < e.length; t++) {
                var o = e[t];
                (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(r, o.key, o);
            }
        })(e.prototype, r),
        e
    );
})();
