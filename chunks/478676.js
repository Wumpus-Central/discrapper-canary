e.exports = (function () {
    "use strict";
    var e,
        t,
        r,
        n,
        i,
        o,
        a,
        s,
        l = /\r\n?/g,
        u = /\t/g,
        c = /\f/g,
        f = function (e) {
            return e.replace(l, "\n").replace(c, "").replace(u, "    ");
        },
        p = function (e, t) {
            var r = e || {};
            if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
            return r;
        },
        d = function (e, t) {
            var r,
                n = Object.keys(e).filter(function (t) {
                    var r = e[t];
                    if (null == r || null == r.match) return !1;
                    var n = r.order;
                    return (
                        ("number" != typeof n || !isFinite(n)) &&
                            "u" > typeof console &&
                            console.warn("simple-markdown: Invalid order for rule `" + t + "`: " + String(n)),
                        !0
                    );
                });
            n.sort(function (t, r) {
                var n = e[t],
                    i = e[r],
                    o = n.order,
                    a = i.order;
                if (o !== a) return o - a;
                var s = +!n.quality,
                    l = +!i.quality;
                return s !== l ? s - l : t < r ? -1 : 1 * !!(t > r);
            });
            for (var i = new Map(), o = [], a = 0; a < n.length; a++) {
                var s = n[a],
                    l = e[s].requiredFirstCharacters;
                null == l
                    ? o.push(s)
                    : l.map((e) => {
                          let t = e.charCodeAt(0);
                          (i.has(t) || i.set(t, []), i.get(t).push(s));
                      });
            }
            var u = function (t, a) {
                    var s = [];
                    r = a = a || r;
                    var l = (a._parseDepth ?? 0) + 1;
                    if (l > 1e3) return (t && s.push({ type: "text", content: t }), s);
                    for (r = a = Object.assign({}, a, { _parseDepth: l }); t;) {
                        for (
                            var c = null, f = null, p = null, d = -1e5, h = 1e5, m = [i.get(t.charCodeAt(0)), o], v = 0;
                            v < m.length;
                            v++
                        ) {
                            var y = m[v];
                            if (null != y)
                                for (var g = 0; g < y.length; g++) {
                                    var b = y[g],
                                        w = e[b],
                                        _ = w.order;
                                    if (_ > h) break;
                                    var S = null == a.prevCapture ? "" : a.prevCapture[0],
                                        E = w.match(t, a, S);
                                    if (E) {
                                        var x = w.quality ? w.quality(E, a, S) : 0;
                                        (_ < h || x > d) && ((c = b), (f = w), (p = E), (d = x), (h = _));
                                    }
                                }
                        }
                        if (null == f || null == p)
                            throw Error(
                                "Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '" +
                                    n[n.length - 1] +
                                    "'. It seems to not match the following source:\n" +
                                    t,
                            );
                        if (p.index)
                            throw Error(
                                "`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?",
                            );
                        var C = f.parse(p, u, a);
                        (Array.isArray(C)
                            ? Array.prototype.push.apply(s, C)
                            : (null == C.type && (C.type = c), s.push(C)),
                            (a.prevCapture = p),
                            (t = t.substring(a.prevCapture[0].length)));
                    }
                    return s;
                },
                c = function (e, n) {
                    return (
                        (r = p(n, t)).inline || r.disableAutoBlockNewlines || (e += "\n\n"),
                        (r.prevCapture = null),
                        u(f(e), r)
                    );
                };
            return ((u.rules = e), (c.rules = e), c);
        },
        h = function (e) {
            var t = function (t, r) {
                return r.inline ? e.exec(t) : null;
            };
            return ((t.regex = e), t);
        },
        m = function (e) {
            var t = function (t, r) {
                return r.inline ? null : e.exec(t);
            };
            return ((t.regex = e), t);
        },
        v = function (e) {
            var t = function (t, r) {
                return e.exec(t);
            };
            return ((t.regex = e), t);
        },
        y = ("function" == typeof Symbol && Symbol.for && Symbol.for("react.transitional.element")) || 60103,
        g = function (e, t, r) {
            return { $$typeof: y, type: e, key: null == t ? void 0 : t, ref: null, props: r, _owner: null };
        },
        b = function (e, t, r, n) {
            n = void 0 === n || n;
            var i = "";
            for (var o in (r = r || {})) {
                var a = r[o];
                Object.prototype.hasOwnProperty.call(r, o) && a && (i += " " + x(o) + '="' + x(a) + '"');
            }
            var s = "<" + e + i + ">";
            return n ? s + t + "</" + e + ">" : s;
        },
        w = {},
        _ = function (e) {
            if (null == e) return null;
            try {
                var t = new URL(e, "https://localhost").protocol;
                if (0 === t.indexOf("javascript:") || 0 === t.indexOf("vbscript:") || 0 === t.indexOf("data:"))
                    return null;
            } catch (e) {
                return null;
            }
            return e;
        },
        S = /[<>&"']/g,
        E = { "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;", "`": "&#96;" },
        x = function (e) {
            return String(e).replace(S, function (e) {
                return E[e];
            });
        },
        C = /\\([^0-9A-Za-z\s])/g,
        k = function (e) {
            return e.replace(C, "$1");
        },
        T = function (e, t, r) {
            var n = r.inline || !1;
            r.inline = !0;
            var i = e(t, r);
            return ((r.inline = n), i);
        },
        M = function (e, t, r) {
            return { content: T(t, e[1], r) };
        },
        P = function () {
            return {};
        },
        A = "(?:[*+-]|\\d+\\.)",
        I = "( *)(" + A + ") +",
        O = RegExp("^" + I),
        R = RegExp(I + "[^\\n]*(?:\\n(?!\\1" + A + " )[^\\n]*)*(\n|$)", "gm"),
        L = /\n{2,}$/,
        D = /^ (?= *`)|(` *) $/g,
        F = / *\n+$/,
        N = RegExp("^( *)(" + A + ") [\\s\\S]+?(?:\n{2,}(?! )(?!\\1" + A + " )\\n*|\\s*\n*$)"),
        j = /(?:^|\n)( *)$/,
        B =
            ((e = /^ *\| *| *\| *$/g),
            (t = / *$/),
            (r = /^ *-+: *$/),
            (n = /^ *:-+: *$/),
            (i = /^ *:-+ *$/),
            (o = function (e) {
                return r.test(e) ? "right" : n.test(e) ? "center" : i.test(e) ? "left" : null;
            }),
            (a = function (e, r, n, i) {
                var o = n.inTable;
                n.inTable = !0;
                var a = r(e.trim(), n);
                n.inTable = o;
                var s = [[]];
                return (
                    a.forEach(function (e, r) {
                        "tableSeparator" === e.type
                            ? (i && (0 === r || r === a.length - 1)) || s.push([])
                            : ("text" === e.type &&
                                  (null == a[r + 1] || "tableSeparator" === a[r + 1].type) &&
                                  (e.content = e.content.replace(t, "")),
                              s[s.length - 1].push(e));
                    }),
                    s
                );
            }),
            {
                parseTable: (s = function (t) {
                    return function (r, n, i) {
                        i.inline = !0;
                        var s,
                            l,
                            u = a(r[1], n, i, t),
                            c = ((s = r[2]), t && (s = s.replace(e, "")), s.trim().split("|").map(o)),
                            f =
                                ((l = r[3]),
                                l
                                    .trim()
                                    .split("\n")
                                    .map(function (e) {
                                        return a(e, n, i, t);
                                    }));
                        return ((i.inline = !1), { type: "table", header: u, align: c, cells: f });
                    };
                })(!0),
                parseNpTable: s(!1),
                TABLE_REGEX: /^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,
                NPTABLE_REGEX: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
            }),
        K = "(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",
        U = "\\s*<?((?:\\([^)]*\\)|[^\\s\\\\()]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*",
        V = /mailto:/i,
        $ = function (e, t, r) {
            var n = (e[2] || e[1]).replace(/\s+/g, " ").toLowerCase();
            if (t._defs && t._defs[n]) {
                var i = t._defs[n];
                ((r.target = i.target), (r.title = i.title));
            }
            return ((t._refs = t._refs || {}), (t._refs[n] = t._refs[n] || []), t._refs[n].push(r), r);
        },
        H = !1;
    try {
        (RegExp("(?<=a)"), RegExp("(?<!a)"), (H = !1));
    } catch (e) {}
    var z = 0,
        G = {
            Array: {
                react: function (e, t, r) {
                    for (var n = r.key, i = [], o = 0, a = 0; o < e.length; o++, a++) {
                        r.key = "" + o;
                        var s = e[o];
                        if ("text" === s.type)
                            for (
                                s = { type: "text", content: s.content };
                                o + 1 < e.length && "text" === e[o + 1].type;
                                o++
                            )
                                s.content += e[o + 1].content;
                        i.push(t(s, r));
                    }
                    return ((r.key = n), i);
                },
                html: function (e, t, r) {
                    for (var n = "", i = 0; i < e.length; i++) {
                        var o = e[i];
                        if ("text" === o.type)
                            for (
                                o = { type: "text", content: o.content };
                                i + 1 < e.length && "text" === e[i + 1].type;
                                i++
                            )
                                o.content += e[i + 1].content;
                        n += t(o, r);
                    }
                    return n;
                },
            },
            heading: {
                order: z++,
                match: m(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/),
                parse: function (e, t, r) {
                    return { level: e[1].length, content: T(t, e[2].trim(), r) };
                },
                react: function (e, t, r) {
                    return g("h" + e.level, r.key, { children: t(e.content, r) });
                },
                html: function (e, t, r) {
                    return b("h" + e.level, t(e.content, r));
                },
            },
            nptable: { order: z++, match: m(B.NPTABLE_REGEX), parse: B.parseNpTable, react: null, html: null },
            lheading: {
                order: z++,
                match: m(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),
                parse: function (e, t, r) {
                    return { type: "heading", level: "=" === e[2] ? 1 : 2, content: T(t, e[1], r) };
                },
                react: null,
                html: null,
            },
            hr: {
                order: z++,
                match: m(/^( *[-*_]){3,} *(?:\n *)+\n/),
                parse: P,
                react: function (e, t, r) {
                    return g("hr", r.key, w);
                },
                html: function (e, t, r) {
                    return "<hr>";
                },
            },
            codeBlock: {
                order: z++,
                match: m(/^(?:    [^\n]+\n*)+(?:\n *)+\n/),
                parse: function (e, t, r) {
                    return { lang: void 0, content: e[0].replace(/^    /gm, "").replace(/\n+$/, "") };
                },
                react: function (e, t, r) {
                    var n = e.lang ? "markdown-code-" + e.lang : void 0;
                    return g("pre", r.key, { children: g("code", null, { className: n, children: e.content }) });
                },
                html: function (e, t, r) {
                    var n = e.lang ? "markdown-code-" + e.lang : void 0,
                        i = b("code", x(e.content), { class: n });
                    return b("pre", i);
                },
            },
            fence: {
                order: z++,
                match: m(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/),
                parse: function (e, t, r) {
                    return { type: "codeBlock", lang: e[2] || void 0, content: e[3] };
                },
                react: null,
                html: null,
            },
            blockQuote: {
                order: z++,
                match: m(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),
                parse: function (e, t, r) {
                    return { content: t(e[0].replace(/^ *> ?/gm, ""), r) };
                },
                react: function (e, t, r) {
                    return g("blockquote", r.key, { children: t(e.content, r) });
                },
                html: function (e, t, r) {
                    return b("blockquote", t(e.content, r));
                },
            },
            list: {
                order: z++,
                match: function (e, t) {
                    var r = null == t.prevCapture ? "" : t.prevCapture[0],
                        n = j.exec(r),
                        i = t._list || !t.inline;
                    return n && i ? ((e = n[1] + e), N.exec(e)) : null;
                },
                parse: function (e, t, r) {
                    var n = e[2],
                        i = n.length > 1,
                        o = i ? +n : void 0,
                        a = e[0].replace(L, "\n").match(R),
                        s = !1;
                    return {
                        ordered: i,
                        start: o,
                        items: a.map(function (e, n) {
                            var i,
                                o = O.exec(e),
                                l = RegExp("^ {1," + (o ? o[0].length : 0) + "}", "gm"),
                                u = e.replace(l, "").replace(O, ""),
                                c = n === a.length - 1,
                                f = -1 !== u.indexOf("\n\n") || (c && s);
                            s = f;
                            var p = r.inline,
                                d = r._list;
                            ((r._list = !0),
                                f
                                    ? ((r.inline = !1), (i = u.replace(F, "\n\n")))
                                    : ((r.inline = !0), (i = u.replace(F, ""))));
                            var h = t(i, r);
                            return ((r.inline = p), (r._list = d), h);
                        }),
                    };
                },
                react: function (e, t, r) {
                    return g(e.ordered ? "ol" : "ul", r.key, {
                        start: e.start,
                        children: e.items.map(function (e, n) {
                            return g("li", "" + n, { children: t(e, r) });
                        }),
                    });
                },
                html: function (e, t, r) {
                    var n = e.items
                        .map(function (e) {
                            return b("li", t(e, r));
                        })
                        .join("");
                    return b(e.ordered ? "ol" : "ul", n, { start: e.start });
                },
            },
            def: {
                order: z++,
                match: m(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/),
                parse: function (e, t, r) {
                    var n = e[1].replace(/\s+/g, " ").toLowerCase(),
                        i = e[2],
                        o = e[3];
                    return (
                        r._refs &&
                            r._refs[n] &&
                            r._refs[n].forEach(function (e) {
                                ((e.target = i), (e.title = o));
                            }),
                        (r._defs = r._defs || {}),
                        (r._defs[n] = { target: i, title: o }),
                        { def: n, target: i, title: o }
                    );
                },
                react: function () {
                    return null;
                },
                html: function () {
                    return "";
                },
            },
            table: {
                order: z++,
                match: m(B.TABLE_REGEX),
                parse: B.parseTable,
                react: function (e, t, r) {
                    var n = function (t) {
                            return null == e.align[t] ? {} : { textAlign: e.align[t] };
                        },
                        i = e.header.map(function (e, i) {
                            return g("th", "" + i, { style: n(i), scope: "col", children: t(e, r) });
                        }),
                        o = e.cells.map(function (e, i) {
                            return g("tr", "" + i, {
                                children: e.map(function (e, i) {
                                    return g("td", "" + i, { style: n(i), children: t(e, r) });
                                }),
                            });
                        });
                    return g("table", r.key, {
                        children: [
                            g("thead", "thead", { children: g("tr", null, { children: i }) }),
                            g("tbody", "tbody", { children: o }),
                        ],
                    });
                },
                html: function (e, t, r) {
                    var n = function (t) {
                            return null == e.align[t] ? "" : "text-align:" + e.align[t] + ";";
                        },
                        i = e.header
                            .map(function (e, i) {
                                return b("th", t(e, r), { style: n(i), scope: "col" });
                            })
                            .join(""),
                        o = e.cells
                            .map(function (e) {
                                var i = e
                                    .map(function (e, i) {
                                        return b("td", t(e, r), { style: n(i) });
                                    })
                                    .join("");
                                return b("tr", i);
                            })
                            .join(""),
                        a = b("thead", b("tr", i)),
                        s = b("tbody", o);
                    return b("table", a + s);
                },
            },
            newline: {
                order: z++,
                requiredFirstCharacters: ["\n"],
                match: m(/^(?:\n *)*\n/),
                parse: P,
                react: function (e, t, r) {
                    return "\n";
                },
                html: function (e, t, r) {
                    return "\n";
                },
            },
            paragraph: {
                order: z++,
                match: m(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),
                parse: M,
                react: function (e, t, r) {
                    return g("div", r.key, { className: "paragraph", children: t(e.content, r) });
                },
                html: function (e, t, r) {
                    return b("div", t(e.content, r), { class: "paragraph" });
                },
            },
            escape: {
                order: z++,
                requiredFirstCharacters: ["\\"],
                match: h(/^\\([^0-9A-Za-z\s])/),
                parse: function (e, t, r) {
                    return { type: "text", content: e[1] };
                },
                react: null,
                html: null,
            },
            tableSeparator: {
                order: z++,
                match: function (e, t) {
                    return t.inTable ? /^ *\| */.exec(e) : null;
                },
                parse: function () {
                    return { type: "tableSeparator" };
                },
                react: function () {
                    return " | ";
                },
                html: function () {
                    return " &vert; ";
                },
            },
            autolink: {
                order: z++,
                requiredFirstCharacters: ["<"],
                match: h(/^<([^: >]+:\/[^ >]+)>/),
                parse: function (e, t, r) {
                    return { type: "link", content: [{ type: "text", content: e[1] }], target: e[1] };
                },
                react: null,
                html: null,
            },
            mailto: {
                order: z++,
                match: h(/^<([^ >]+@[^ >]+)>/),
                parse: function (e, t, r) {
                    var n = e[1],
                        i = e[1];
                    return (
                        V.test(i) || (i = "mailto:" + i),
                        { type: "link", content: [{ type: "text", content: n }], target: i }
                    );
                },
                react: null,
                html: null,
            },
            url: {
                order: z++,
                requiredFirstCharacters: ["h"],
                match: h(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),
                parse: function (e, t, r) {
                    return { type: "link", content: [{ type: "text", content: e[1] }], target: e[1], title: void 0 };
                },
                react: null,
                html: null,
            },
            link: {
                order: z++,
                requiredFirstCharacters: ["["],
                match: h(RegExp("^\\[(" + K + ")\\]\\(" + U + "\\)")),
                parse: function (e, t, r) {
                    return { content: t(e[1], r), target: k(e[2]), title: e[3] };
                },
                react: function (e, t, r) {
                    return g("a", r.key, { href: _(e.target), title: e.title, children: t(e.content, r) });
                },
                html: function (e, t, r) {
                    var n = { href: _(e.target), title: e.title };
                    return b("a", t(e.content, r), n);
                },
            },
            image: {
                order: z++,
                match: h(RegExp("^!\\[(" + K + ")\\]\\(" + U + "\\)")),
                parse: function (e, t, r) {
                    return { alt: e[1], target: k(e[2]), title: e[3] };
                },
                react: function (e, t, r) {
                    return g("img", r.key, { src: _(e.target), alt: e.alt, title: e.title });
                },
                html: function (e, t, r) {
                    return b("img", "", { src: _(e.target), alt: e.alt, title: e.title }, !1);
                },
            },
            reflink: {
                order: z++,
                match: h(RegExp("^\\[(" + K + ")\\]\\s*\\[([^\\]]*)\\]")),
                parse: function (e, t, r) {
                    return $(e, r, { type: "link", content: t(e[1], r) });
                },
                react: null,
                html: null,
            },
            refimage: {
                order: z++,
                match: h(RegExp("^!\\[(" + K + ")\\]\\s*\\[([^\\]]*)\\]")),
                parse: function (e, t, r) {
                    return $(e, r, { type: "image", alt: e[1] });
                },
                react: null,
                html: null,
            },
            em: {
                order: z,
                match: h(
                    RegExp(
                        (H
                            ? "^\\b_((?:_[_(]|\\\\[\\s\\S]|(?<!_)\\B_\\B|[^\\\\_])+?)_(?![(])\\b"
                            : "^\\b_((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_\\b") +
                            "|^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?)\\*(?!\\*)",
                    ),
                ),
                quality: function (e) {
                    return e[0].length + 0.2;
                },
                parse: function (e, t, r) {
                    return { content: t(e[2] || e[1], r) };
                },
                react: function (e, t, r) {
                    return g("em", r.key, { children: t(e.content, r) });
                },
                html: function (e, t, r) {
                    return b("em", t(e.content, r));
                },
            },
            strong: {
                order: z,
                requiredFirstCharacters: ["*"],
                match: h(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/),
                quality: function (e) {
                    return e[0].length + 0.1;
                },
                parse: M,
                react: function (e, t, r) {
                    return g("strong", r.key, { children: t(e.content, r) });
                },
                html: function (e, t, r) {
                    return b("strong", t(e.content, r));
                },
            },
            u: {
                order: z++,
                requiredFirstCharacters: ["_"],
                match: h(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/),
                quality: function (e) {
                    return e[0].length;
                },
                parse: M,
                react: function (e, t, r) {
                    return g("u", r.key, { children: t(e.content, r) });
                },
                html: function (e, t, r) {
                    return b("u", t(e.content, r));
                },
            },
            del: {
                order: z++,
                requiredFirstCharacters: ["~"],
                match: h(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~]|\s(?!~~))+?)~~/),
                parse: M,
                react: function (e, t, r) {
                    return g("del", r.key, { children: t(e.content, r) });
                },
                html: function (e, t, r) {
                    return b("del", t(e.content, r));
                },
            },
            inlineCode: {
                order: z++,
                requiredFirstCharacters: ["`"],
                match: h(/^(`+)([\s\S]*?[^`])\1(?!`)/),
                parse: function (e, t, r) {
                    return { content: e[2].replace(D, "$1") };
                },
                react: function (e, t, r) {
                    return g("code", r.key, { children: e.content });
                },
                html: function (e, t, r) {
                    return b("code", x(e.content));
                },
            },
            br: {
                order: z++,
                requiredFirstCharacters: [" "],
                match: v(/^ {2,}\n/),
                parse: P,
                react: function (e, t, r) {
                    return g("br", r.key, w);
                },
                html: function (e, t, r) {
                    return "<br>";
                },
            },
            text: {
                order: z++,
                match: v(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/),
                parse: function (e, t, r) {
                    return { content: e[0] };
                },
                react: function (e, t, r) {
                    return e.content;
                },
                html: function (e, t, r) {
                    return x(e.content);
                },
            },
        },
        W = function (e, t, r) {
            if (!t)
                throw Error(
                    "simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`",
                );
            var n,
                i = (e.Array || G.Array)[t];
            if (!i)
                throw Error(
                    "simple-markdown: outputFor: to join nodes of type `" +
                        t +
                        "` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.",
                );
            var o = function (r, a) {
                return ((n = a = a || n), Array.isArray(r)) ? i(r, o, a) : e[r.type][t](r, o, a);
            };
            return function (e, t) {
                return o(e, (n = p(t, r)));
            };
        },
        q = d(G),
        Y = function (e, t) {
            return (((t = t || {}).inline = !1), q(e, t));
        },
        X = function (e, t) {
            var r = L.test(e);
            return (((t = t || {}).inline = !r), q(e, t));
        },
        J = W(G, "react"),
        Z = W(G, "html"),
        Q = function (e, t) {
            return J(Y(e, t), t);
        };
    return {
        defaultRules: G,
        parserFor: d,
        outputFor: W,
        inlineRegex: h,
        blockRegex: m,
        anyScopeRegex: v,
        parseInline: T,
        parseBlock: function (e, t, r) {
            var n = r.inline || !1;
            r.inline = !1;
            var i = e(t + "\n\n", r);
            return ((r.inline = n), i);
        },
        markdownToReact: Q,
        markdownToHtml: function (e, t) {
            return Z(Y(e, t), t);
        },
        ReactMarkdown: function (e) {
            var t = {};
            for (var r in e) "source" !== r && Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return ((t.children = Q(e.source)), g("div", null, t));
        },
        defaultBlockParse: Y,
        defaultInlineParse: function (e, t) {
            return (((t = t || {}).inline = !0), q(e, t));
        },
        defaultImplicitParse: X,
        defaultReactOutput: J,
        defaultHtmlOutput: Z,
        preprocess: f,
        sanitizeText: x,
        sanitizeUrl: _,
        unescapeUrl: k,
        htmlTag: b,
        reactElement: g,
        defaultRawParse: q,
        ruleOutput: function (e, t) {
            return (
                !t &&
                    "u" > typeof console &&
                    console.warn("simple-markdown ruleOutput should take 'react' or 'html' as the second argument."),
                function (r, n, i) {
                    return e[r.type][t](r, n, i);
                }
            );
        },
        reactFor: function (e) {
            var t = function (r, n) {
                if (((n = n || {}), !Array.isArray(r))) return e(r, t, n);
                for (var i = n.key, o = [], a = null, s = 0; s < r.length; s++) {
                    n.key = "" + s;
                    var l = t(r[s], n);
                    "string" == typeof l && "string" == typeof a
                        ? ((a += l), (o[o.length - 1] = a))
                        : (o.push(l), (a = l));
                }
                return ((n.key = i), o);
            };
            return t;
        },
        htmlFor: function (e) {
            var t = function (r, n) {
                return ((n = n || {}), Array.isArray(r))
                    ? r
                          .map(function (e) {
                              return t(e, n);
                          })
                          .join("")
                    : e(r, t, n);
            };
            return t;
        },
        defaultParse: function () {
            return (
                "u" > typeof console && console.warn("defaultParse is deprecated, please use `defaultImplicitParse`"),
                X.apply(null, arguments)
            );
        },
        defaultOutput: function () {
            return (
                "u" > typeof console && console.warn("defaultOutput is deprecated, please use `defaultReactOutput`"),
                J.apply(null, arguments)
            );
        },
    };
})();
