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
        u = /\r\n?/g,
        c = /\t/g,
        l = /\f/g,
        d = function (e) {
            return e.replace(u, "\n").replace(l, "").replace(c, "    ");
        },
        f = function (e, t) {
            var r = e || {};
            if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
            return r;
        },
        p = function (e, t) {
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
                    u = +!i.quality;
                return s !== u ? s - u : t < r ? -1 : 1 * !!(t > r);
            });
            for (var i = new Map(), o = [], a = 0; a < n.length; a++) {
                var s = n[a],
                    u = e[s].requiredFirstCharacters;
                null == u
                    ? o.push(s)
                    : u.map((e) => {
                          let t = e.charCodeAt(0);
                          i.has(t) || i.set(t, []), i.get(t).push(s);
                      });
            }
            var c = function (t, a) {
                    var s = [];
                    r = a = a || r;
                    var u = (a._parseDepth ?? 0) + 1;
                    if (u > 1e3) return t && s.push({ type: "text", content: t }), s;
                    for (r = a = Object.assign({}, a, { _parseDepth: u }); t; ) {
                        for (
                            var l = null, d = null, f = null, p = -1e5, h = 1e5, g = [i.get(t.charCodeAt(0)), o], v = 0;
                            v < g.length;
                            v++
                        ) {
                            var y = g[v];
                            if (null != y)
                                for (var m = 0; m < y.length; m++) {
                                    var b = y[m],
                                        E = e[b],
                                        O = E.order;
                                    if (O > h) break;
                                    var T = null == a.prevCapture ? "" : a.prevCapture[0],
                                        S = E.match(t, a, T);
                                    if (S) {
                                        var w = E.quality ? E.quality(S, a, T) : 0;
                                        (O < h || w > p) && ((l = b), (d = E), (f = S), (p = w), (h = O));
                                    }
                                }
                        }
                        if (null == d || null == f)
                            throw Error(
                                "Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '" +
                                    n[n.length - 1] +
                                    "'. It seems to not match the following source:\n" +
                                    t,
                            );
                        if (f.index)
                            throw Error(
                                "`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?",
                            );
                        var x = d.parse(f, c, a);
                        Array.isArray(x)
                            ? Array.prototype.push.apply(s, x)
                            : (null == x.type && (x.type = l), s.push(x)),
                            (a.prevCapture = f),
                            (t = t.substring(a.prevCapture[0].length));
                    }
                    return s;
                },
                l = function (e, n) {
                    return (
                        (r = f(n, t)).inline || r.disableAutoBlockNewlines || (e += "\n\n"),
                        (r.prevCapture = null),
                        c(d(e), r)
                    );
                };
            return (c.rules = e), (l.rules = e), l;
        },
        h = function (e) {
            var t = function (t, r) {
                return r.inline ? e.exec(t) : null;
            };
            return (t.regex = e), t;
        },
        g = function (e) {
            var t = function (t, r) {
                return r.inline ? null : e.exec(t);
            };
            return (t.regex = e), t;
        },
        v = function (e) {
            var t = function (t, r) {
                return e.exec(t);
            };
            return (t.regex = e), t;
        },
        y = ("function" == typeof Symbol && Symbol.for && Symbol.for("react.transitional.element")) || 60103,
        m = function (e, t, r) {
            return { $$typeof: y, type: e, key: null == t ? void 0 : t, ref: null, props: r, _owner: null };
        },
        b = function (e, t, r, n) {
            n = void 0 === n || n;
            var i = "";
            for (var o in (r = r || {})) {
                var a = r[o];
                Object.prototype.hasOwnProperty.call(r, o) && a && (i += " " + w(o) + '="' + w(a) + '"');
            }
            var s = "<" + e + i + ">";
            return n ? s + t + "</" + e + ">" : s;
        },
        E = {},
        O = function (e) {
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
        S = { "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;", "`": "&#96;" },
        w = function (e) {
            return String(e).replace(T, function (e) {
                return S[e];
            });
        },
        x = /\\([^0-9A-Za-z\s])/g,
        C = function (e) {
            return e.replace(x, "$1");
        },
        D = function (e, t, r) {
            var n = r.inline || !1;
            r.inline = !0;
            var i = e(t, r);
            return (r.inline = n), i;
        },
        k = function (e, t, r) {
            return { content: D(t, e[1], r) };
        },
        A = function () {
            return {};
        },
        I = "(?:[*+-]|\\d+\\.)",
        P = "( *)(" + I + ") +",
        j = RegExp("^" + P),
        N = RegExp(P + "[^\\n]*(?:\\n(?!\\1" + I + " )[^\\n]*)*(\n|$)", "gm"),
        R = /\n{2,}$/,
        L = /^ (?= *`)|(` *) $/g,
        _ = / *\n+$/,
        M = RegExp("^( *)(" + I + ") [\\s\\S]+?(?:\n{2,}(?! )(?!\\1" + I + " )\\n*|\\s*\n*$)"),
        U = /(?:^|\n)( *)$/,
        V =
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
                            u,
                            c = a(r[1], n, i, t),
                            l = ((s = r[2]), t && (s = s.replace(e, "")), s.trim().split("|").map(o)),
                            d =
                                ((u = r[3]),
                                u
                                    .trim()
                                    .split("\n")
                                    .map(function (e) {
                                        return a(e, n, i, t);
                                    }));
                        return (i.inline = !1), { type: "table", header: c, align: l, cells: d };
                    };
                })(!0),
                parseNpTable: s(!1),
                TABLE_REGEX: /^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,
                NPTABLE_REGEX: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
            }),
        F = "(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",
        H = "\\s*<?((?:\\([^)]*\\)|[^\\s\\\\()]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*",
        B = /mailto:/i,
        q = function (e, t, r) {
            var n = (e[2] || e[1]).replace(/\s+/g, " ").toLowerCase();
            if (t._defs && t._defs[n]) {
                var i = t._defs[n];
                (r.target = i.target), (r.title = i.title);
            }
            return (t._refs = t._refs || {}), (t._refs[n] = t._refs[n] || []), t._refs[n].push(r), r;
        },
        W = !1;
    try {
        RegExp("(?<=a)"), RegExp("(?<!a)"), (W = !1);
    } catch (e) {}
    var $ = 0,
        Y = {
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
                    return (r.key = n), i;
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
                order: $++,
                match: g(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/),
                parse: function (e, t, r) {
                    return { level: e[1].length, content: D(t, e[2].trim(), r) };
                },
                react: function (e, t, r) {
                    return m("h" + e.level, r.key, { children: t(e.content, r) });
                },
                html: function (e, t, r) {
                    return b("h" + e.level, t(e.content, r));
                },
            },
            nptable: { order: $++, match: g(V.NPTABLE_REGEX), parse: V.parseNpTable, react: null, html: null },
            lheading: {
                order: $++,
                match: g(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),
                parse: function (e, t, r) {
                    return { type: "heading", level: "=" === e[2] ? 1 : 2, content: D(t, e[1], r) };
                },
                react: null,
                html: null,
            },
            hr: {
                order: $++,
                match: g(/^( *[-*_]){3,} *(?:\n *)+\n/),
                parse: A,
                react: function (e, t, r) {
                    return m("hr", r.key, E);
                },
                html: function (e, t, r) {
                    return "<hr>";
                },
            },
            codeBlock: {
                order: $++,
                match: g(/^(?:    [^\n]+\n*)+(?:\n *)+\n/),
                parse: function (e, t, r) {
                    return { lang: void 0, content: e[0].replace(/^    /gm, "").replace(/\n+$/, "") };
                },
                react: function (e, t, r) {
                    var n = e.lang ? "markdown-code-" + e.lang : void 0;
                    return m("pre", r.key, { children: m("code", null, { className: n, children: e.content }) });
                },
                html: function (e, t, r) {
                    var n = e.lang ? "markdown-code-" + e.lang : void 0,
                        i = b("code", w(e.content), { class: n });
                    return b("pre", i);
                },
            },
            fence: {
                order: $++,
                match: g(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/),
                parse: function (e, t, r) {
                    return { type: "codeBlock", lang: e[2] || void 0, content: e[3] };
                },
                react: null,
                html: null,
            },
            blockQuote: {
                order: $++,
                match: g(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),
                parse: function (e, t, r) {
                    return { content: t(e[0].replace(/^ *> ?/gm, ""), r) };
                },
                react: function (e, t, r) {
                    return m("blockquote", r.key, { children: t(e.content, r) });
                },
                html: function (e, t, r) {
                    return b("blockquote", t(e.content, r));
                },
            },
            list: {
                order: $++,
                match: function (e, t) {
                    var r = null == t.prevCapture ? "" : t.prevCapture[0],
                        n = U.exec(r),
                        i = t._list || !t.inline;
                    return n && i ? ((e = n[1] + e), M.exec(e)) : null;
                },
                parse: function (e, t, r) {
                    var n = e[2],
                        i = n.length > 1,
                        o = i ? +n : void 0,
                        a = e[0].replace(R, "\n").match(N),
                        s = !1;
                    return {
                        ordered: i,
                        start: o,
                        items: a.map(function (e, n) {
                            var i,
                                o = j.exec(e),
                                u = RegExp("^ {1," + (o ? o[0].length : 0) + "}", "gm"),
                                c = e.replace(u, "").replace(j, ""),
                                l = n === a.length - 1,
                                d = -1 !== c.indexOf("\n\n") || (l && s);
                            s = d;
                            var f = r.inline,
                                p = r._list;
                            (r._list = !0),
                                d
                                    ? ((r.inline = !1), (i = c.replace(_, "\n\n")))
                                    : ((r.inline = !0), (i = c.replace(_, "")));
                            var h = t(i, r);
                            return (r.inline = f), (r._list = p), h;
                        }),
                    };
                },
                react: function (e, t, r) {
                    return m(e.ordered ? "ol" : "ul", r.key, {
                        start: e.start,
                        children: e.items.map(function (e, n) {
                            return m("li", "" + n, { children: t(e, r) });
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
                order: $++,
                match: g(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/),
                parse: function (e, t, r) {
                    var n = e[1].replace(/\s+/g, " ").toLowerCase(),
                        i = e[2],
                        o = e[3];
                    return (
                        r._refs &&
                            r._refs[n] &&
                            r._refs[n].forEach(function (e) {
                                (e.target = i), (e.title = o);
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
                order: $++,
                match: g(V.TABLE_REGEX),
                parse: V.parseTable,
                react: function (e, t, r) {
                    var n = function (t) {
                            return null == e.align[t] ? {} : { textAlign: e.align[t] };
                        },
                        i = e.header.map(function (e, i) {
                            return m("th", "" + i, { style: n(i), scope: "col", children: t(e, r) });
                        }),
                        o = e.cells.map(function (e, i) {
                            return m("tr", "" + i, {
                                children: e.map(function (e, i) {
                                    return m("td", "" + i, { style: n(i), children: t(e, r) });
                                }),
                            });
                        });
                    return m("table", r.key, {
                        children: [
                            m("thead", "thead", { children: m("tr", null, { children: i }) }),
                            m("tbody", "tbody", { children: o }),
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
                order: $++,
                requiredFirstCharacters: ["\n"],
                match: g(/^(?:\n *)*\n/),
                parse: A,
                react: function (e, t, r) {
                    return "\n";
                },
                html: function (e, t, r) {
                    return "\n";
                },
            },
            paragraph: {
                order: $++,
                match: g(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),
                parse: k,
                react: function (e, t, r) {
                    return m("div", r.key, { className: "paragraph", children: t(e.content, r) });
                },
                html: function (e, t, r) {
                    return b("div", t(e.content, r), { class: "paragraph" });
                },
            },
            escape: {
                order: $++,
                requiredFirstCharacters: ["\\"],
                match: h(/^\\([^0-9A-Za-z\s])/),
                parse: function (e, t, r) {
                    return { type: "text", content: e[1] };
                },
                react: null,
                html: null,
            },
            tableSeparator: {
                order: $++,
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
                order: $++,
                requiredFirstCharacters: ["<"],
                match: h(/^<([^: >]+:\/[^ >]+)>/),
                parse: function (e, t, r) {
                    return { type: "link", content: [{ type: "text", content: e[1] }], target: e[1] };
                },
                react: null,
                html: null,
            },
            mailto: {
                order: $++,
                match: h(/^<([^ >]+@[^ >]+)>/),
                parse: function (e, t, r) {
                    var n = e[1],
                        i = e[1];
                    return (
                        B.test(i) || (i = "mailto:" + i),
                        { type: "link", content: [{ type: "text", content: n }], target: i }
                    );
                },
                react: null,
                html: null,
            },
            url: {
                order: $++,
                requiredFirstCharacters: ["h"],
                match: h(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),
                parse: function (e, t, r) {
                    return { type: "link", content: [{ type: "text", content: e[1] }], target: e[1], title: void 0 };
                },
                react: null,
                html: null,
            },
            link: {
                order: $++,
                requiredFirstCharacters: ["["],
                match: h(RegExp("^\\[(" + F + ")\\]\\(" + H + "\\)")),
                parse: function (e, t, r) {
                    return { content: t(e[1], r), target: C(e[2]), title: e[3] };
                },
                react: function (e, t, r) {
                    return m("a", r.key, { href: O(e.target), title: e.title, children: t(e.content, r) });
                },
                html: function (e, t, r) {
                    var n = { href: O(e.target), title: e.title };
                    return b("a", t(e.content, r), n);
                },
            },
            image: {
                order: $++,
                match: h(RegExp("^!\\[(" + F + ")\\]\\(" + H + "\\)")),
                parse: function (e, t, r) {
                    return { alt: e[1], target: C(e[2]), title: e[3] };
                },
                react: function (e, t, r) {
                    return m("img", r.key, { src: O(e.target), alt: e.alt, title: e.title });
                },
                html: function (e, t, r) {
                    return b("img", "", { src: O(e.target), alt: e.alt, title: e.title }, !1);
                },
            },
            reflink: {
                order: $++,
                match: h(RegExp("^\\[(" + F + ")\\]\\s*\\[([^\\]]*)\\]")),
                parse: function (e, t, r) {
                    return q(e, r, { type: "link", content: t(e[1], r) });
                },
                react: null,
                html: null,
            },
            refimage: {
                order: $++,
                match: h(RegExp("^!\\[(" + F + ")\\]\\s*\\[([^\\]]*)\\]")),
                parse: function (e, t, r) {
                    return q(e, r, { type: "image", alt: e[1] });
                },
                react: null,
                html: null,
            },
            em: {
                order: $,
                match: h(
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
                parse: function (e, t, r) {
                    return { content: t(e[2] || e[1], r) };
                },
                react: function (e, t, r) {
                    return m("em", r.key, { children: t(e.content, r) });
                },
                html: function (e, t, r) {
                    return b("em", t(e.content, r));
                },
            },
            strong: {
                order: $,
                requiredFirstCharacters: ["*"],
                match: h(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/),
                quality: function (e) {
                    return e[0].length + 0.1;
                },
                parse: k,
                react: function (e, t, r) {
                    return m("strong", r.key, { children: t(e.content, r) });
                },
                html: function (e, t, r) {
                    return b("strong", t(e.content, r));
                },
            },
            u: {
                order: $++,
                requiredFirstCharacters: ["_"],
                match: h(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/),
                quality: function (e) {
                    return e[0].length;
                },
                parse: k,
                react: function (e, t, r) {
                    return m("u", r.key, { children: t(e.content, r) });
                },
                html: function (e, t, r) {
                    return b("u", t(e.content, r));
                },
            },
            del: {
                order: $++,
                requiredFirstCharacters: ["~"],
                match: h(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~]|\s(?!~~))+?)~~/),
                parse: k,
                react: function (e, t, r) {
                    return m("del", r.key, { children: t(e.content, r) });
                },
                html: function (e, t, r) {
                    return b("del", t(e.content, r));
                },
            },
            inlineCode: {
                order: $++,
                requiredFirstCharacters: ["`"],
                match: h(/^(`+)([\s\S]*?[^`])\1(?!`)/),
                parse: function (e, t, r) {
                    return { content: e[2].replace(L, "$1") };
                },
                react: function (e, t, r) {
                    return m("code", r.key, { children: e.content });
                },
                html: function (e, t, r) {
                    return b("code", w(e.content));
                },
            },
            br: {
                order: $++,
                requiredFirstCharacters: [" "],
                match: v(/^ {2,}\n/),
                parse: A,
                react: function (e, t, r) {
                    return m("br", r.key, E);
                },
                html: function (e, t, r) {
                    return "<br>";
                },
            },
            text: {
                order: $++,
                match: v(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/),
                parse: function (e, t, r) {
                    return { content: e[0] };
                },
                react: function (e, t, r) {
                    return e.content;
                },
                html: function (e, t, r) {
                    return w(e.content);
                },
            },
        },
        z = function (e, t, r) {
            if (!t)
                throw Error(
                    "simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`",
                );
            var n,
                i = (e.Array || Y.Array)[t];
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
                return o(e, (n = f(t, r)));
            };
        },
        G = p(Y),
        X = function (e, t) {
            return ((t = t || {}).inline = !1), G(e, t);
        },
        K = function (e, t) {
            var r = R.test(e);
            return ((t = t || {}).inline = !r), G(e, t);
        },
        J = z(Y, "react"),
        Z = z(Y, "html"),
        Q = function (e, t) {
            return J(X(e, t), t);
        };
    return {
        defaultRules: Y,
        parserFor: p,
        outputFor: z,
        inlineRegex: h,
        blockRegex: g,
        anyScopeRegex: v,
        parseInline: D,
        parseBlock: function (e, t, r) {
            var n = r.inline || !1;
            r.inline = !1;
            var i = e(t + "\n\n", r);
            return (r.inline = n), i;
        },
        markdownToReact: Q,
        markdownToHtml: function (e, t) {
            return Z(X(e, t), t);
        },
        ReactMarkdown: function (e) {
            var t = {};
            for (var r in e) "source" !== r && Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return (t.children = Q(e.source)), m("div", null, t);
        },
        defaultBlockParse: X,
        defaultInlineParse: function (e, t) {
            return ((t = t || {}).inline = !0), G(e, t);
        },
        defaultImplicitParse: K,
        defaultReactOutput: J,
        defaultHtmlOutput: Z,
        preprocess: d,
        sanitizeText: w,
        sanitizeUrl: O,
        unescapeUrl: C,
        htmlTag: b,
        reactElement: m,
        defaultRawParse: G,
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
                    var u = t(r[s], n);
                    "string" == typeof u && "string" == typeof a
                        ? ((a += u), (o[o.length - 1] = a))
                        : (o.push(u), (a = u));
                }
                return (n.key = i), o;
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
                K.apply(null, arguments)
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
