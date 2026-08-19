e.exports = (function () {
    "use strict";
    var e,
        t,
        n,
        r,
        i,
        a,
        o,
        s,
        u = /\r\n?/g,
        c = /\t/g,
        l = /\f/g,
        d = function (e) {
            return e.replace(u, "\n").replace(l, "").replace(c, "    ");
        },
        f = function (e, t) {
            var n = e || {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n;
        },
        h = function (e, t) {
            var n,
                r = Object.keys(e).filter(function (t) {
                    var n = e[t];
                    if (null == n || null == n.match) return !1;
                    var r = n.order;
                    return (
                        ("number" != typeof r || !isFinite(r)) &&
                            "u" > typeof console &&
                            console.warn("simple-markdown: Invalid order for rule `" + t + "`: " + String(r)),
                        !0
                    );
                });
            r.sort(function (t, n) {
                var r = e[t],
                    i = e[n],
                    a = r.order,
                    o = i.order;
                if (a !== o) return a - o;
                var s = +!r.quality,
                    u = +!i.quality;
                return s !== u ? s - u : t < n ? -1 : 1 * !!(t > n);
            });
            for (var i = new Map(), a = [], o = 0; o < r.length; o++) {
                var s = r[o],
                    u = e[s].requiredFirstCharacters;
                null == u
                    ? a.push(s)
                    : u.map((e) => {
                          let t = e.charCodeAt(0);
                          i.has(t) || i.set(t, []), i.get(t).push(s);
                      });
            }
            var c = function (t, o) {
                    var s = [];
                    n = o = o || n;
                    var u = (o._parseDepth ?? 0) + 1;
                    if (u > 1e3) return t && s.push({ type: "text", content: t }), s;
                    for (n = o = Object.assign({}, o, { _parseDepth: u }); t; ) {
                        for (
                            var l = null, d = null, f = null, h = -1e5, p = 1e5, m = [i.get(t.charCodeAt(0)), a], g = 0;
                            g < m.length;
                            g++
                        ) {
                            var _ = m[g];
                            if (null != _)
                                for (var y = 0; y < _.length; y++) {
                                    var v = _[y],
                                        b = e[v],
                                        w = b.order;
                                    if (w > p) break;
                                    var T = null == o.prevCapture ? "" : o.prevCapture[0],
                                        E = b.match(t, o, T);
                                    if (E) {
                                        var x = b.quality ? b.quality(E, o, T) : 0;
                                        (w < p || x > h) && ((l = v), (d = b), (f = E), (h = x), (p = w));
                                    }
                                }
                        }
                        if (null == d || null == f)
                            throw Error(
                                "Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '" +
                                    r[r.length - 1] +
                                    "'. It seems to not match the following source:\n" +
                                    t,
                            );
                        if (f.index)
                            throw Error(
                                "`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?",
                            );
                        var V = d.parse(f, c, o);
                        Array.isArray(V)
                            ? Array.prototype.push.apply(s, V)
                            : (null == V.type && (V.type = l), s.push(V)),
                            (o.prevCapture = f),
                            (t = t.substring(o.prevCapture[0].length));
                    }
                    return s;
                },
                l = function (e, r) {
                    return (
                        (n = f(r, t)).inline || n.disableAutoBlockNewlines || (e += "\n\n"),
                        (n.prevCapture = null),
                        c(d(e), n)
                    );
                };
            return (c.rules = e), (l.rules = e), l;
        },
        p = function (e) {
            var t = function (t, n) {
                return n.inline ? e.exec(t) : null;
            };
            return (t.regex = e), t;
        },
        m = function (e) {
            var t = function (t, n) {
                return n.inline ? null : e.exec(t);
            };
            return (t.regex = e), t;
        },
        g = function (e) {
            var t = function (t, n) {
                return e.exec(t);
            };
            return (t.regex = e), t;
        },
        _ = ("function" == typeof Symbol && Symbol.for && Symbol.for("react.transitional.element")) || 60103,
        y = function (e, t, n) {
            return { $$typeof: _, type: e, key: null == t ? void 0 : t, ref: null, props: n, _owner: null };
        },
        v = function (e, t, n, r) {
            r = void 0 === r || r;
            var i = "";
            for (var a in (n = n || {})) {
                var o = n[a];
                Object.prototype.hasOwnProperty.call(n, a) && o && (i += " " + x(a) + '="' + x(o) + '"');
            }
            var s = "<" + e + i + ">";
            return r ? s + t + "</" + e + ">" : s;
        },
        b = {},
        w = function (e) {
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
        T = /[<>&"']/g,
        E = { "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;", "`": "&#96;" },
        x = function (e) {
            return String(e).replace(T, function (e) {
                return E[e];
            });
        },
        V = /\\([^0-9A-Za-z\s])/g,
        k = function (e) {
            return e.replace(V, "$1");
        },
        A = function (e, t, n) {
            var r = n.inline || !1;
            n.inline = !0;
            var i = e(t, n);
            return (n.inline = r), i;
        },
        S = function (e, t, n) {
            return { content: A(t, e[1], n) };
        },
        O = function () {
            return {};
        },
        R = "(?:[*+-]|\\d+\\.)",
        P = "( *)(" + R + ") +",
        C = RegExp("^" + P),
        L = RegExp(P + "[^\\n]*(?:\\n(?!\\1" + R + " )[^\\n]*)*(\n|$)", "gm"),
        I = /\n{2,}$/,
        D = /^ (?= *`)|(` *) $/g,
        M = / *\n+$/,
        U = RegExp("^( *)(" + R + ") [\\s\\S]+?(?:\n{2,}(?! )(?!\\1" + R + " )\\n*|\\s*\n*$)"),
        j = /(?:^|\n)( *)$/,
        F =
            ((e = /^ *\| *| *\| *$/g),
            (t = / *$/),
            (n = /^ *-+: *$/),
            (r = /^ *:-+: *$/),
            (i = /^ *:-+ *$/),
            (a = function (e) {
                return n.test(e) ? "right" : r.test(e) ? "center" : i.test(e) ? "left" : null;
            }),
            (o = function (e, n, r, i) {
                var a = r.inTable;
                r.inTable = !0;
                var o = n(e.trim(), r);
                r.inTable = a;
                var s = [[]];
                return (
                    o.forEach(function (e, n) {
                        "tableSeparator" === e.type
                            ? (i && (0 === n || n === o.length - 1)) || s.push([])
                            : ("text" === e.type &&
                                  (null == o[n + 1] || "tableSeparator" === o[n + 1].type) &&
                                  (e.content = e.content.replace(t, "")),
                              s[s.length - 1].push(e));
                    }),
                    s
                );
            }),
            {
                parseTable: (s = function (t) {
                    return function (n, r, i) {
                        i.inline = !0;
                        var s,
                            u,
                            c = o(n[1], r, i, t),
                            l = ((s = n[2]), t && (s = s.replace(e, "")), s.trim().split("|").map(a)),
                            d =
                                ((u = n[3]),
                                u
                                    .trim()
                                    .split("\n")
                                    .map(function (e) {
                                        return o(e, r, i, t);
                                    }));
                        return (i.inline = !1), { type: "table", header: c, align: l, cells: d };
                    };
                })(!0),
                parseNpTable: s(!1),
                TABLE_REGEX: /^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,
                NPTABLE_REGEX: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
            }),
        N = "(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",
        B = "\\s*<?((?:\\([^)]*\\)|[^\\s\\\\()]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*",
        G = /mailto:/i,
        H = function (e, t, n) {
            var r = (e[2] || e[1]).replace(/\s+/g, " ").toLowerCase();
            if (t._defs && t._defs[r]) {
                var i = t._defs[r];
                (n.target = i.target), (n.title = i.title);
            }
            return (t._refs = t._refs || {}), (t._refs[r] = t._refs[r] || []), t._refs[r].push(n), n;
        },
        W = !1;
    try {
        RegExp("(?<=a)"), RegExp("(?<!a)"), (W = !1);
    } catch (e) {}
    var z = 0,
        q = {
            Array: {
                react: function (e, t, n) {
                    for (var r = n.key, i = [], a = 0, o = 0; a < e.length; a++, o++) {
                        n.key = "" + a;
                        var s = e[a];
                        if ("text" === s.type)
                            for (
                                s = { type: "text", content: s.content };
                                a + 1 < e.length && "text" === e[a + 1].type;
                                a++
                            )
                                s.content += e[a + 1].content;
                        i.push(t(s, n));
                    }
                    return (n.key = r), i;
                },
                html: function (e, t, n) {
                    for (var r = "", i = 0; i < e.length; i++) {
                        var a = e[i];
                        if ("text" === a.type)
                            for (
                                a = { type: "text", content: a.content };
                                i + 1 < e.length && "text" === e[i + 1].type;
                                i++
                            )
                                a.content += e[i + 1].content;
                        r += t(a, n);
                    }
                    return r;
                },
            },
            heading: {
                order: z++,
                match: m(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return { level: e[1].length, content: A(t, e[2].trim(), n) };
                },
                react: function (e, t, n) {
                    return y("h" + e.level, n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return v("h" + e.level, t(e.content, n));
                },
            },
            nptable: { order: z++, match: m(F.NPTABLE_REGEX), parse: F.parseNpTable, react: null, html: null },
            lheading: {
                order: z++,
                match: m(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return { type: "heading", level: "=" === e[2] ? 1 : 2, content: A(t, e[1], n) };
                },
                react: null,
                html: null,
            },
            hr: {
                order: z++,
                match: m(/^( *[-*_]){3,} *(?:\n *)+\n/),
                parse: O,
                react: function (e, t, n) {
                    return y("hr", n.key, b);
                },
                html: function (e, t, n) {
                    return "<hr>";
                },
            },
            codeBlock: {
                order: z++,
                match: m(/^(?:    [^\n]+\n*)+(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return { lang: void 0, content: e[0].replace(/^    /gm, "").replace(/\n+$/, "") };
                },
                react: function (e, t, n) {
                    var r = e.lang ? "markdown-code-" + e.lang : void 0;
                    return y("pre", n.key, { children: y("code", null, { className: r, children: e.content }) });
                },
                html: function (e, t, n) {
                    var r = e.lang ? "markdown-code-" + e.lang : void 0,
                        i = v("code", x(e.content), { class: r });
                    return v("pre", i);
                },
            },
            fence: {
                order: z++,
                match: m(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return { type: "codeBlock", lang: e[2] || void 0, content: e[3] };
                },
                react: null,
                html: null,
            },
            blockQuote: {
                order: z++,
                match: m(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),
                parse: function (e, t, n) {
                    return { content: t(e[0].replace(/^ *> ?/gm, ""), n) };
                },
                react: function (e, t, n) {
                    return y("blockquote", n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return v("blockquote", t(e.content, n));
                },
            },
            list: {
                order: z++,
                match: function (e, t) {
                    var n = null == t.prevCapture ? "" : t.prevCapture[0],
                        r = j.exec(n),
                        i = t._list || !t.inline;
                    return r && i ? ((e = r[1] + e), U.exec(e)) : null;
                },
                parse: function (e, t, n) {
                    var r = e[2],
                        i = r.length > 1,
                        a = i ? +r : void 0,
                        o = e[0].replace(I, "\n").match(L),
                        s = !1;
                    return {
                        ordered: i,
                        start: a,
                        items: o.map(function (e, r) {
                            var i,
                                a = C.exec(e),
                                u = RegExp("^ {1," + (a ? a[0].length : 0) + "}", "gm"),
                                c = e.replace(u, "").replace(C, ""),
                                l = r === o.length - 1,
                                d = -1 !== c.indexOf("\n\n") || (l && s);
                            s = d;
                            var f = n.inline,
                                h = n._list;
                            (n._list = !0),
                                d
                                    ? ((n.inline = !1), (i = c.replace(M, "\n\n")))
                                    : ((n.inline = !0), (i = c.replace(M, "")));
                            var p = t(i, n);
                            return (n.inline = f), (n._list = h), p;
                        }),
                    };
                },
                react: function (e, t, n) {
                    return y(e.ordered ? "ol" : "ul", n.key, {
                        start: e.start,
                        children: e.items.map(function (e, r) {
                            return y("li", "" + r, { children: t(e, n) });
                        }),
                    });
                },
                html: function (e, t, n) {
                    var r = e.items
                        .map(function (e) {
                            return v("li", t(e, n));
                        })
                        .join("");
                    return v(e.ordered ? "ol" : "ul", r, { start: e.start });
                },
            },
            def: {
                order: z++,
                match: m(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/),
                parse: function (e, t, n) {
                    var r = e[1].replace(/\s+/g, " ").toLowerCase(),
                        i = e[2],
                        a = e[3];
                    return (
                        n._refs &&
                            n._refs[r] &&
                            n._refs[r].forEach(function (e) {
                                (e.target = i), (e.title = a);
                            }),
                        (n._defs = n._defs || {}),
                        (n._defs[r] = { target: i, title: a }),
                        { def: r, target: i, title: a }
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
                match: m(F.TABLE_REGEX),
                parse: F.parseTable,
                react: function (e, t, n) {
                    var r = function (t) {
                            return null == e.align[t] ? {} : { textAlign: e.align[t] };
                        },
                        i = e.header.map(function (e, i) {
                            return y("th", "" + i, { style: r(i), scope: "col", children: t(e, n) });
                        }),
                        a = e.cells.map(function (e, i) {
                            return y("tr", "" + i, {
                                children: e.map(function (e, i) {
                                    return y("td", "" + i, { style: r(i), children: t(e, n) });
                                }),
                            });
                        });
                    return y("table", n.key, {
                        children: [
                            y("thead", "thead", { children: y("tr", null, { children: i }) }),
                            y("tbody", "tbody", { children: a }),
                        ],
                    });
                },
                html: function (e, t, n) {
                    var r = function (t) {
                            return null == e.align[t] ? "" : "text-align:" + e.align[t] + ";";
                        },
                        i = e.header
                            .map(function (e, i) {
                                return v("th", t(e, n), { style: r(i), scope: "col" });
                            })
                            .join(""),
                        a = e.cells
                            .map(function (e) {
                                var i = e
                                    .map(function (e, i) {
                                        return v("td", t(e, n), { style: r(i) });
                                    })
                                    .join("");
                                return v("tr", i);
                            })
                            .join(""),
                        o = v("thead", v("tr", i)),
                        s = v("tbody", a);
                    return v("table", o + s);
                },
            },
            newline: {
                order: z++,
                requiredFirstCharacters: ["\n"],
                match: m(/^(?:\n *)*\n/),
                parse: O,
                react: function (e, t, n) {
                    return "\n";
                },
                html: function (e, t, n) {
                    return "\n";
                },
            },
            paragraph: {
                order: z++,
                match: m(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),
                parse: S,
                react: function (e, t, n) {
                    return y("div", n.key, { className: "paragraph", children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return v("div", t(e.content, n), { class: "paragraph" });
                },
            },
            escape: {
                order: z++,
                requiredFirstCharacters: ["\\"],
                match: p(/^\\([^0-9A-Za-z\s])/),
                parse: function (e, t, n) {
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
                match: p(/^<([^: >]+:\/[^ >]+)>/),
                parse: function (e, t, n) {
                    return { type: "link", content: [{ type: "text", content: e[1] }], target: e[1] };
                },
                react: null,
                html: null,
            },
            mailto: {
                order: z++,
                match: p(/^<([^ >]+@[^ >]+)>/),
                parse: function (e, t, n) {
                    var r = e[1],
                        i = e[1];
                    return (
                        G.test(i) || (i = "mailto:" + i),
                        { type: "link", content: [{ type: "text", content: r }], target: i }
                    );
                },
                react: null,
                html: null,
            },
            url: {
                order: z++,
                requiredFirstCharacters: ["h"],
                match: p(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),
                parse: function (e, t, n) {
                    return { type: "link", content: [{ type: "text", content: e[1] }], target: e[1], title: void 0 };
                },
                react: null,
                html: null,
            },
            link: {
                order: z++,
                requiredFirstCharacters: ["["],
                match: p(RegExp("^\\[(" + N + ")\\]\\(" + B + "\\)")),
                parse: function (e, t, n) {
                    return { content: t(e[1], n), target: k(e[2]), title: e[3] };
                },
                react: function (e, t, n) {
                    return y("a", n.key, { href: w(e.target), title: e.title, children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    var r = { href: w(e.target), title: e.title };
                    return v("a", t(e.content, n), r);
                },
            },
            image: {
                order: z++,
                match: p(RegExp("^!\\[(" + N + ")\\]\\(" + B + "\\)")),
                parse: function (e, t, n) {
                    return { alt: e[1], target: k(e[2]), title: e[3] };
                },
                react: function (e, t, n) {
                    return y("img", n.key, { src: w(e.target), alt: e.alt, title: e.title });
                },
                html: function (e, t, n) {
                    return v("img", "", { src: w(e.target), alt: e.alt, title: e.title }, !1);
                },
            },
            reflink: {
                order: z++,
                match: p(RegExp("^\\[(" + N + ")\\]\\s*\\[([^\\]]*)\\]")),
                parse: function (e, t, n) {
                    return H(e, n, { type: "link", content: t(e[1], n) });
                },
                react: null,
                html: null,
            },
            refimage: {
                order: z++,
                match: p(RegExp("^!\\[(" + N + ")\\]\\s*\\[([^\\]]*)\\]")),
                parse: function (e, t, n) {
                    return H(e, n, { type: "image", alt: e[1] });
                },
                react: null,
                html: null,
            },
            em: {
                order: z,
                match: p(
                    RegExp(
                        (W
                            ? "^\\b_((?:_[_(]|\\\\[\\s\\S]|(?<!_)\\B_\\B|[^\\\\_])+?)_(?![(])\\b"
                            : "^\\b_((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_\\b") +
                            "|^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?)\\*(?!\\*)",
                    ),
                ),
                quality: function (e) {
                    return e[0].length + 0.2;
                },
                parse: function (e, t, n) {
                    return { content: t(e[2] || e[1], n) };
                },
                react: function (e, t, n) {
                    return y("em", n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return v("em", t(e.content, n));
                },
            },
            strong: {
                order: z,
                requiredFirstCharacters: ["*"],
                match: p(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/),
                quality: function (e) {
                    return e[0].length + 0.1;
                },
                parse: S,
                react: function (e, t, n) {
                    return y("strong", n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return v("strong", t(e.content, n));
                },
            },
            u: {
                order: z++,
                requiredFirstCharacters: ["_"],
                match: p(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/),
                quality: function (e) {
                    return e[0].length;
                },
                parse: S,
                react: function (e, t, n) {
                    return y("u", n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return v("u", t(e.content, n));
                },
            },
            del: {
                order: z++,
                requiredFirstCharacters: ["~"],
                match: p(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~]|\s(?!~~))+?)~~/),
                parse: S,
                react: function (e, t, n) {
                    return y("del", n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return v("del", t(e.content, n));
                },
            },
            inlineCode: {
                order: z++,
                requiredFirstCharacters: ["`"],
                match: p(/^(`+)([\s\S]*?[^`])\1(?!`)/),
                parse: function (e, t, n) {
                    return { content: e[2].replace(D, "$1") };
                },
                react: function (e, t, n) {
                    return y("code", n.key, { children: e.content });
                },
                html: function (e, t, n) {
                    return v("code", x(e.content));
                },
            },
            br: {
                order: z++,
                requiredFirstCharacters: [" "],
                match: g(/^ {2,}\n/),
                parse: O,
                react: function (e, t, n) {
                    return y("br", n.key, b);
                },
                html: function (e, t, n) {
                    return "<br>";
                },
            },
            text: {
                order: z++,
                match: g(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/),
                parse: function (e, t, n) {
                    return { content: e[0] };
                },
                react: function (e, t, n) {
                    return e.content;
                },
                html: function (e, t, n) {
                    return x(e.content);
                },
            },
        },
        K = function (e, t, n) {
            if (!t)
                throw Error(
                    "simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`",
                );
            var r,
                i = (e.Array || q.Array)[t];
            if (!i)
                throw Error(
                    "simple-markdown: outputFor: to join nodes of type `" +
                        t +
                        "` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.",
                );
            var a = function (n, o) {
                return ((r = o = o || r), Array.isArray(n)) ? i(n, a, o) : e[n.type][t](n, a, o);
            };
            return function (e, t) {
                return a(e, (r = f(t, n)));
            };
        },
        X = h(q),
        Y = function (e, t) {
            return ((t = t || {}).inline = !1), X(e, t);
        },
        Z = function (e, t) {
            var n = I.test(e);
            return ((t = t || {}).inline = !n), X(e, t);
        },
        Q = K(q, "react"),
        J = K(q, "html"),
        $ = function (e, t) {
            return Q(Y(e, t), t);
        };
    return {
        defaultRules: q,
        parserFor: h,
        outputFor: K,
        inlineRegex: p,
        blockRegex: m,
        anyScopeRegex: g,
        parseInline: A,
        parseBlock: function (e, t, n) {
            var r = n.inline || !1;
            n.inline = !1;
            var i = e(t + "\n\n", n);
            return (n.inline = r), i;
        },
        markdownToReact: $,
        markdownToHtml: function (e, t) {
            return J(Y(e, t), t);
        },
        ReactMarkdown: function (e) {
            var t = {};
            for (var n in e) "source" !== n && Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.children = $(e.source)), y("div", null, t);
        },
        defaultBlockParse: Y,
        defaultInlineParse: function (e, t) {
            return ((t = t || {}).inline = !0), X(e, t);
        },
        defaultImplicitParse: Z,
        defaultReactOutput: Q,
        defaultHtmlOutput: J,
        preprocess: d,
        sanitizeText: x,
        sanitizeUrl: w,
        unescapeUrl: k,
        htmlTag: v,
        reactElement: y,
        defaultRawParse: X,
        ruleOutput: function (e, t) {
            return (
                !t &&
                    "u" > typeof console &&
                    console.warn("simple-markdown ruleOutput should take 'react' or 'html' as the second argument."),
                function (n, r, i) {
                    return e[n.type][t](n, r, i);
                }
            );
        },
        reactFor: function (e) {
            var t = function (n, r) {
                if (((r = r || {}), !Array.isArray(n))) return e(n, t, r);
                for (var i = r.key, a = [], o = null, s = 0; s < n.length; s++) {
                    r.key = "" + s;
                    var u = t(n[s], r);
                    "string" == typeof u && "string" == typeof o
                        ? ((o += u), (a[a.length - 1] = o))
                        : (a.push(u), (o = u));
                }
                return (r.key = i), a;
            };
            return t;
        },
        htmlFor: function (e) {
            var t = function (n, r) {
                return ((r = r || {}), Array.isArray(n))
                    ? n
                          .map(function (e) {
                              return t(e, r);
                          })
                          .join("")
                    : e(n, t, r);
            };
            return t;
        },
        defaultParse: function () {
            return (
                "u" > typeof console && console.warn("defaultParse is deprecated, please use `defaultImplicitParse`"),
                Z.apply(null, arguments)
            );
        },
        defaultOutput: function () {
            return (
                "u" > typeof console && console.warn("defaultOutput is deprecated, please use `defaultReactOutput`"),
                Q.apply(null, arguments)
            );
        },
    };
})();
