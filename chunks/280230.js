!(function (t, n) {
    e.exports = n();
})(0, function () {
    var e = /\r\n?/g,
        t = /\t/g,
        n = /\f/g,
        r = function (r) {
            return r.replace(e, "\n").replace(n, "").replace(t, "    ");
        },
        i = function (e, t) {
            var n = e || {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n;
        },
        a = function (e, t) {
            var n,
                a = Object.keys(e).filter(function (t) {
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
            a.sort(function (t, n) {
                var r = e[t],
                    i = e[n],
                    a = r.order,
                    s = i.order;
                if (a !== s) return a - s;
                var o = +!r.quality,
                    l = +!i.quality;
                return o !== l ? o - l : t < n ? -1 : 1 * !!(t > n);
            });
            for (var s = new Map(), o = [], l = 0; l < a.length; l++) {
                var c = a[l],
                    u = e[c].requiredFirstCharacters;
                null == u
                    ? o.push(c)
                    : u.map((e) => {
                          let t = e.charCodeAt(0);
                          s.has(t) || s.set(t, []), s.get(t).push(c);
                      });
            }
            var d = function (t, r) {
                    var i = [];
                    for (n = r = r || n; t; ) {
                        for (
                            var l = null, c = null, u = null, f = -1e5, p = 1e5, _ = [s.get(t.charCodeAt(0)), o], h = 0;
                            h < _.length;
                            h++
                        ) {
                            var m = _[h];
                            if (null != m)
                                for (var g = 0; g < m.length; g++) {
                                    var E = m[g],
                                        b = e[E],
                                        y = b.order;
                                    if (y > p) break;
                                    var O = null == r.prevCapture ? "" : r.prevCapture[0],
                                        A = b.match(t, r, O);
                                    if (A) {
                                        var v = b.quality ? b.quality(A, r, O) : 0;
                                        (y < p || v > f) && ((l = E), (c = b), (u = A), (f = v), (p = y));
                                    }
                                }
                        }
                        if (null == c || null == u)
                            throw Error(
                                "Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '" +
                                    a[a.length - 1] +
                                    "'. It seems to not match the following source:\n" +
                                    t,
                            );
                        if (u.index)
                            throw Error(
                                "`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?",
                            );
                        var S = c.parse(u, d, r);
                        Array.isArray(S)
                            ? Array.prototype.push.apply(i, S)
                            : (null == S.type && (S.type = l), i.push(S)),
                            (r.prevCapture = u),
                            (t = t.substring(r.prevCapture[0].length));
                    }
                    return i;
                },
                f = function (e, a) {
                    return (
                        (n = i(a, t)).inline || n.disableAutoBlockNewlines || (e += "\n\n"),
                        (n.prevCapture = null),
                        d(r(e), n)
                    );
                };
            return (d.rules = e), (f.rules = e), f;
        },
        s = function (e) {
            var t = function (t, n) {
                return n.inline ? e.exec(t) : null;
            };
            return (t.regex = e), t;
        },
        o = function (e) {
            var t = function (t, n) {
                return n.inline ? null : e.exec(t);
            };
            return (t.regex = e), t;
        },
        l = function (e) {
            var t = function (t, n) {
                return e.exec(t);
            };
            return (t.regex = e), t;
        },
        c = ("function" == typeof Symbol && Symbol.for && Symbol.for("react.transitional.element")) || 60103,
        u = function (e, t, n) {
            return {
                $$typeof: c,
                type: e,
                key: null == t ? void 0 : t,
                ref: null,
                props: n,
                _owner: null,
            };
        },
        d = function (e, t, n, r) {
            r = void 0 === r || r;
            var i = "";
            for (var a in (n = n || {})) {
                var s = n[a];
                Object.prototype.hasOwnProperty.call(n, a) && s && (i += " " + m(a) + '="' + m(s) + '"');
            }
            var o = "<" + e + i + ">";
            return r ? o + t + "</" + e + ">" : o;
        },
        f = {},
        p = function (e) {
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
        _ = /[<>&"']/g,
        h = {
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;",
            "`": "&#96;",
        },
        m = function (e) {
            return String(e).replace(_, function (e) {
                return h[e];
            });
        },
        g = /\\([^0-9A-Za-z\s])/g,
        E = function (e) {
            return e.replace(g, "$1");
        },
        b = function (e, t, n) {
            var r = n.inline || !1;
            n.inline = !0;
            var i = e(t, n);
            return (n.inline = r), i;
        },
        y = function (e, t, n) {
            var r = n.inline || !1;
            n.inline = !1;
            var i = e(t + "\n\n", n);
            return (n.inline = r), i;
        },
        O = function (e, t, n) {
            return {
                content: b(t, e[1], n),
            };
        },
        A = function () {
            return {};
        },
        v = "(?:[*+-]|\\d+\\.)",
        S = "( *)(" + v + ") +",
        I = RegExp("^" + S),
        T = RegExp(S + "[^\\n]*(?:\\n(?!\\1" + v + " )[^\\n]*)*(\n|$)", "gm"),
        C = /\n{2,}$/,
        N = /^ (?= *`)|(` *) $/g,
        R = C,
        w = / *\n+$/,
        P = RegExp("^( *)(" + v + ") [\\s\\S]+?(?:\n{2,}(?! )(?!\\1" + v + " )\\n*|\\s*\n*$)"),
        D = /(?:^|\n)( *)$/,
        x = (function () {
            var e = /^ *\| *| *\| *$/g,
                t = / *$/,
                n = /^ *-+: *$/,
                r = /^ *:-+: *$/,
                i = /^ *:-+ *$/,
                a = function (e) {
                    return n.test(e) ? "right" : r.test(e) ? "center" : i.test(e) ? "left" : null;
                },
                s = function (t, n, r, i) {
                    return i && (t = t.replace(e, "")), t.trim().split("|").map(a);
                },
                o = function (e, n, r, i) {
                    var a = r.inTable;
                    r.inTable = !0;
                    var s = n(e.trim(), r);
                    r.inTable = a;
                    var o = [[]];
                    return (
                        s.forEach(function (e, n) {
                            "tableSeparator" === e.type
                                ? (i && (0 === n || n === s.length - 1)) || o.push([])
                                : ("text" === e.type &&
                                      (null == s[n + 1] || "tableSeparator" === s[n + 1].type) &&
                                      (e.content = e.content.replace(t, "")),
                                  o[o.length - 1].push(e));
                        }),
                        o
                    );
                },
                l = function (e, t, n, r) {
                    return e
                        .trim()
                        .split("\n")
                        .map(function (e) {
                            return o(e, t, n, r);
                        });
                },
                c = function (e) {
                    return function (t, n, r) {
                        r.inline = !0;
                        var i = o(t[1], n, r, e),
                            a = s(t[2], n, r, e),
                            c = l(t[3], n, r, e);
                        return (
                            (r.inline = !1),
                            {
                                type: "table",
                                header: i,
                                align: a,
                                cells: c,
                            }
                        );
                    };
                };
            return {
                parseTable: c(!0),
                parseNpTable: c(!1),
                TABLE_REGEX: /^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,
                NPTABLE_REGEX: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
            };
        })(),
        L = "(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",
        j = "\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*",
        M = /mailto:/i,
        k = function (e, t, n) {
            var r = (e[2] || e[1]).replace(/\s+/g, " ").toLowerCase();
            if (t._defs && t._defs[r]) {
                var i = t._defs[r];
                (n.target = i.target), (n.title = i.title);
            }
            return (t._refs = t._refs || {}), (t._refs[r] = t._refs[r] || []), t._refs[r].push(n), n;
        },
        U = !1;
    try {
        RegExp("(?<=a)"), RegExp("(?<!a)"), (U = !1);
    } catch (e) {}
    var G = 0,
        V = {
            Array: {
                react: function (e, t, n) {
                    for (var r = n.key, i = [], a = 0, s = 0; a < e.length; a++, s++) {
                        n.key = "" + a;
                        var o = e[a];
                        if ("text" === o.type)
                            for (
                                o = {
                                    type: "text",
                                    content: o.content,
                                };
                                a + 1 < e.length && "text" === e[a + 1].type;
                                a++
                            )
                                o.content += e[a + 1].content;
                        i.push(t(o, n));
                    }
                    return (n.key = r), i;
                },
                html: function (e, t, n) {
                    for (var r = "", i = 0; i < e.length; i++) {
                        var a = e[i];
                        if ("text" === a.type)
                            for (
                                a = {
                                    type: "text",
                                    content: a.content,
                                };
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
                order: G++,
                match: o(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return {
                        level: e[1].length,
                        content: b(t, e[2].trim(), n),
                    };
                },
                react: function (e, t, n) {
                    return u("h" + e.level, n.key, {
                        children: t(e.content, n),
                    });
                },
                html: function (e, t, n) {
                    return d("h" + e.level, t(e.content, n));
                },
            },
            nptable: {
                order: G++,
                match: o(x.NPTABLE_REGEX),
                parse: x.parseNpTable,
                react: null,
                html: null,
            },
            lheading: {
                order: G++,
                match: o(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return {
                        type: "heading",
                        level: "=" === e[2] ? 1 : 2,
                        content: b(t, e[1], n),
                    };
                },
                react: null,
                html: null,
            },
            hr: {
                order: G++,
                match: o(/^( *[-*_]){3,} *(?:\n *)+\n/),
                parse: A,
                react: function (e, t, n) {
                    return u("hr", n.key, f);
                },
                html: function (e, t, n) {
                    return "<hr>";
                },
            },
            codeBlock: {
                order: G++,
                match: o(/^(?:    [^\n]+\n*)+(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return {
                        lang: void 0,
                        content: e[0].replace(/^    /gm, "").replace(/\n+$/, ""),
                    };
                },
                react: function (e, t, n) {
                    var r = e.lang ? "markdown-code-" + e.lang : void 0;
                    return u("pre", n.key, {
                        children: u("code", null, {
                            className: r,
                            children: e.content,
                        }),
                    });
                },
                html: function (e, t, n) {
                    var r = e.lang ? "markdown-code-" + e.lang : void 0,
                        i = d("code", m(e.content), {
                            class: r,
                        });
                    return d("pre", i);
                },
            },
            fence: {
                order: G++,
                match: o(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return {
                        type: "codeBlock",
                        lang: e[2] || void 0,
                        content: e[3],
                    };
                },
                react: null,
                html: null,
            },
            blockQuote: {
                order: G++,
                match: o(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),
                parse: function (e, t, n) {
                    return {
                        content: t(e[0].replace(/^ *> ?/gm, ""), n),
                    };
                },
                react: function (e, t, n) {
                    return u("blockquote", n.key, {
                        children: t(e.content, n),
                    });
                },
                html: function (e, t, n) {
                    return d("blockquote", t(e.content, n));
                },
            },
            list: {
                order: G++,
                match: function (e, t) {
                    var n = null == t.prevCapture ? "" : t.prevCapture[0],
                        r = D.exec(n),
                        i = t._list || !t.inline;
                    return r && i ? ((e = r[1] + e), P.exec(e)) : null;
                },
                parse: function (e, t, n) {
                    var r = e[2],
                        i = r.length > 1,
                        a = i ? +r : void 0,
                        s = e[0].replace(R, "\n").match(T),
                        o = !1;
                    return {
                        ordered: i,
                        start: a,
                        items: s.map(function (e, r) {
                            var i,
                                a = I.exec(e),
                                l = RegExp("^ {1," + (a ? a[0].length : 0) + "}", "gm"),
                                c = e.replace(l, "").replace(I, ""),
                                u = r === s.length - 1,
                                d = -1 !== c.indexOf("\n\n") || (u && o);
                            o = d;
                            var f = n.inline,
                                p = n._list;
                            (n._list = !0),
                                d
                                    ? ((n.inline = !1), (i = c.replace(w, "\n\n")))
                                    : ((n.inline = !0), (i = c.replace(w, "")));
                            var _ = t(i, n);
                            return (n.inline = f), (n._list = p), _;
                        }),
                    };
                },
                react: function (e, t, n) {
                    return u(e.ordered ? "ol" : "ul", n.key, {
                        start: e.start,
                        children: e.items.map(function (e, r) {
                            return u("li", "" + r, {
                                children: t(e, n),
                            });
                        }),
                    });
                },
                html: function (e, t, n) {
                    var r = e.items
                        .map(function (e) {
                            return d("li", t(e, n));
                        })
                        .join("");
                    return d(e.ordered ? "ol" : "ul", r, {
                        start: e.start,
                    });
                },
            },
            def: {
                order: G++,
                match: o(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/),
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
                        (n._defs[r] = {
                            target: i,
                            title: a,
                        }),
                        {
                            def: r,
                            target: i,
                            title: a,
                        }
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
                order: G++,
                match: o(x.TABLE_REGEX),
                parse: x.parseTable,
                react: function (e, t, n) {
                    var r = function (t) {
                            return null == e.align[t]
                                ? {}
                                : {
                                      textAlign: e.align[t],
                                  };
                        },
                        i = e.header.map(function (e, i) {
                            return u("th", "" + i, {
                                style: r(i),
                                scope: "col",
                                children: t(e, n),
                            });
                        }),
                        a = e.cells.map(function (e, i) {
                            return u("tr", "" + i, {
                                children: e.map(function (e, i) {
                                    return u("td", "" + i, {
                                        style: r(i),
                                        children: t(e, n),
                                    });
                                }),
                            });
                        });
                    return u("table", n.key, {
                        children: [
                            u("thead", "thead", {
                                children: u("tr", null, {
                                    children: i,
                                }),
                            }),
                            u("tbody", "tbody", {
                                children: a,
                            }),
                        ],
                    });
                },
                html: function (e, t, n) {
                    var r = function (t) {
                            return null == e.align[t] ? "" : "text-align:" + e.align[t] + ";";
                        },
                        i = e.header
                            .map(function (e, i) {
                                return d("th", t(e, n), {
                                    style: r(i),
                                    scope: "col",
                                });
                            })
                            .join(""),
                        a = e.cells
                            .map(function (e) {
                                var i = e
                                    .map(function (e, i) {
                                        return d("td", t(e, n), {
                                            style: r(i),
                                        });
                                    })
                                    .join("");
                                return d("tr", i);
                            })
                            .join(""),
                        s = d("thead", d("tr", i)),
                        o = d("tbody", a);
                    return d("table", s + o);
                },
            },
            newline: {
                order: G++,
                requiredFirstCharacters: ["\n"],
                match: o(/^(?:\n *)*\n/),
                parse: A,
                react: function (e, t, n) {
                    return "\n";
                },
                html: function (e, t, n) {
                    return "\n";
                },
            },
            paragraph: {
                order: G++,
                match: o(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),
                parse: O,
                react: function (e, t, n) {
                    return u("div", n.key, {
                        className: "paragraph",
                        children: t(e.content, n),
                    });
                },
                html: function (e, t, n) {
                    var r = {
                        class: "paragraph",
                    };
                    return d("div", t(e.content, n), r);
                },
            },
            escape: {
                order: G++,
                requiredFirstCharacters: ["\\"],
                match: s(/^\\([^0-9A-Za-z\s])/),
                parse: function (e, t, n) {
                    return {
                        type: "text",
                        content: e[1],
                    };
                },
                react: null,
                html: null,
            },
            tableSeparator: {
                order: G++,
                match: function (e, t) {
                    return t.inTable ? /^ *\| */.exec(e) : null;
                },
                parse: function () {
                    return {
                        type: "tableSeparator",
                    };
                },
                react: function () {
                    return " | ";
                },
                html: function () {
                    return " &vert; ";
                },
            },
            autolink: {
                order: G++,
                requiredFirstCharacters: ["<"],
                match: s(/^<([^: >]+:\/[^ >]+)>/),
                parse: function (e, t, n) {
                    return {
                        type: "link",
                        content: [
                            {
                                type: "text",
                                content: e[1],
                            },
                        ],
                        target: e[1],
                    };
                },
                react: null,
                html: null,
            },
            mailto: {
                order: G++,
                match: s(/^<([^ >]+@[^ >]+)>/),
                parse: function (e, t, n) {
                    var r = e[1],
                        i = e[1];
                    return (
                        M.test(i) || (i = "mailto:" + i),
                        {
                            type: "link",
                            content: [
                                {
                                    type: "text",
                                    content: r,
                                },
                            ],
                            target: i,
                        }
                    );
                },
                react: null,
                html: null,
            },
            url: {
                order: G++,
                requiredFirstCharacters: ["h"],
                match: s(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),
                parse: function (e, t, n) {
                    return {
                        type: "link",
                        content: [
                            {
                                type: "text",
                                content: e[1],
                            },
                        ],
                        target: e[1],
                        title: void 0,
                    };
                },
                react: null,
                html: null,
            },
            link: {
                order: G++,
                requiredFirstCharacters: ["["],
                match: s(RegExp("^\\[(" + L + ")\\]\\(" + j + "\\)")),
                parse: function (e, t, n) {
                    return {
                        content: t(e[1], n),
                        target: E(e[2]),
                        title: e[3],
                    };
                },
                react: function (e, t, n) {
                    return u("a", n.key, {
                        href: p(e.target),
                        title: e.title,
                        children: t(e.content, n),
                    });
                },
                html: function (e, t, n) {
                    var r = {
                        href: p(e.target),
                        title: e.title,
                    };
                    return d("a", t(e.content, n), r);
                },
            },
            image: {
                order: G++,
                match: s(RegExp("^!\\[(" + L + ")\\]\\(" + j + "\\)")),
                parse: function (e, t, n) {
                    return {
                        alt: e[1],
                        target: E(e[2]),
                        title: e[3],
                    };
                },
                react: function (e, t, n) {
                    return u("img", n.key, {
                        src: p(e.target),
                        alt: e.alt,
                        title: e.title,
                    });
                },
                html: function (e, t, n) {
                    return d(
                        "img",
                        "",
                        {
                            src: p(e.target),
                            alt: e.alt,
                            title: e.title,
                        },
                        !1,
                    );
                },
            },
            reflink: {
                order: G++,
                match: s(RegExp("^\\[(" + L + ")\\]\\s*\\[([^\\]]*)\\]")),
                parse: function (e, t, n) {
                    return k(e, n, {
                        type: "link",
                        content: t(e[1], n),
                    });
                },
                react: null,
                html: null,
            },
            refimage: {
                order: G++,
                match: s(RegExp("^!\\[(" + L + ")\\]\\s*\\[([^\\]]*)\\]")),
                parse: function (e, t, n) {
                    return k(e, n, {
                        type: "image",
                        alt: e[1],
                    });
                },
                react: null,
                html: null,
            },
            em: {
                order: G,
                match: s(
                    RegExp(
                        (U
                            ? "^\\b_((?:_[_(]|\\\\[\\s\\S]|(?<!_)\\B_\\B|[^\\\\_])+?)_(?![(])\\b"
                            : "^\\b_((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_\\b") +
                            "|^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?)\\*(?!\\*)",
                    ),
                ),
                quality: function (e) {
                    return e[0].length + 0.2;
                },
                parse: function (e, t, n) {
                    return {
                        content: t(e[2] || e[1], n),
                    };
                },
                react: function (e, t, n) {
                    return u("em", n.key, {
                        children: t(e.content, n),
                    });
                },
                html: function (e, t, n) {
                    return d("em", t(e.content, n));
                },
            },
            strong: {
                order: G,
                requiredFirstCharacters: ["*"],
                match: s(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/),
                quality: function (e) {
                    return e[0].length + 0.1;
                },
                parse: O,
                react: function (e, t, n) {
                    return u("strong", n.key, {
                        children: t(e.content, n),
                    });
                },
                html: function (e, t, n) {
                    return d("strong", t(e.content, n));
                },
            },
            u: {
                order: G++,
                requiredFirstCharacters: ["_"],
                match: s(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/),
                quality: function (e) {
                    return e[0].length;
                },
                parse: O,
                react: function (e, t, n) {
                    return u("u", n.key, {
                        children: t(e.content, n),
                    });
                },
                html: function (e, t, n) {
                    return d("u", t(e.content, n));
                },
            },
            del: {
                order: G++,
                requiredFirstCharacters: ["~"],
                match: s(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~]|\s(?!~~))+?)~~/),
                parse: O,
                react: function (e, t, n) {
                    return u("del", n.key, {
                        children: t(e.content, n),
                    });
                },
                html: function (e, t, n) {
                    return d("del", t(e.content, n));
                },
            },
            inlineCode: {
                order: G++,
                requiredFirstCharacters: ["`"],
                match: s(/^(`+)([\s\S]*?[^`])\1(?!`)/),
                parse: function (e, t, n) {
                    return {
                        content: e[2].replace(N, "$1"),
                    };
                },
                react: function (e, t, n) {
                    return u("code", n.key, {
                        children: e.content,
                    });
                },
                html: function (e, t, n) {
                    return d("code", m(e.content));
                },
            },
            br: {
                order: G++,
                requiredFirstCharacters: [" "],
                match: l(/^ {2,}\n/),
                parse: A,
                react: function (e, t, n) {
                    return u("br", n.key, f);
                },
                html: function (e, t, n) {
                    return "<br>";
                },
            },
            text: {
                order: G++,
                match: l(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/),
                parse: function (e, t, n) {
                    return {
                        content: e[0],
                    };
                },
                react: function (e, t, n) {
                    return e.content;
                },
                html: function (e, t, n) {
                    return m(e.content);
                },
            },
        },
        F = function (e, t) {
            return (
                !t &&
                    "u" > typeof console &&
                    console.warn("simple-markdown ruleOutput should take 'react' or 'html' as the second argument."),
                function (n, r, i) {
                    return e[n.type][t](n, r, i);
                }
            );
        },
        B = function (e) {
            var t = function (n, r) {
                if (((r = r || {}), !Array.isArray(n))) return e(n, t, r);
                for (var i = r.key, a = [], s = null, o = 0; o < n.length; o++) {
                    r.key = "" + o;
                    var l = t(n[o], r);
                    "string" == typeof l && "string" == typeof s
                        ? ((s += l), (a[a.length - 1] = s))
                        : (a.push(l), (s = l));
                }
                return (r.key = i), a;
            };
            return t;
        },
        H = function (e) {
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
        Y = function (e, t, n) {
            if (!t)
                throw Error(
                    "simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`",
                );
            var r,
                a = (e.Array || V.Array)[t];
            if (!a)
                throw Error(
                    "simple-markdown: outputFor: to join nodes of type `" +
                        t +
                        "` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.",
                );
            var s = a,
                o = function (n, i) {
                    return ((r = i = i || r), Array.isArray(n)) ? s(n, o, i) : e[n.type][t](n, o, i);
                };
            return function (e, t) {
                return o(e, (r = i(t, n)));
            };
        },
        W = a(V),
        K = function (e, t) {
            return ((t = t || {}).inline = !1), W(e, t);
        },
        z = function (e, t) {
            return ((t = t || {}).inline = !0), W(e, t);
        },
        q = function (e, t) {
            var n = C.test(e);
            return ((t = t || {}).inline = !n), W(e, t);
        },
        X = Y(V, "react"),
        Z = Y(V, "html"),
        Q = function (e, t) {
            return X(K(e, t), t);
        },
        $ = function (e) {
            var t = {};
            for (var n in e) "source" !== n && Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.children = Q(e.source)), u("div", null, t);
        };
    return {
        defaultRules: V,
        parserFor: a,
        outputFor: Y,
        inlineRegex: s,
        blockRegex: o,
        anyScopeRegex: l,
        parseInline: b,
        parseBlock: y,
        markdownToReact: Q,
        markdownToHtml: function (e, t) {
            return Z(K(e, t), t);
        },
        ReactMarkdown: $,
        defaultBlockParse: K,
        defaultInlineParse: z,
        defaultImplicitParse: q,
        defaultReactOutput: X,
        defaultHtmlOutput: Z,
        preprocess: r,
        sanitizeText: m,
        sanitizeUrl: p,
        unescapeUrl: E,
        htmlTag: d,
        reactElement: u,
        defaultRawParse: W,
        ruleOutput: F,
        reactFor: B,
        htmlFor: H,
        defaultParse: function () {
            return (
                "u" > typeof console && console.warn("defaultParse is deprecated, please use `defaultImplicitParse`"),
                q.apply(null, arguments)
            );
        },
        defaultOutput: function () {
            return (
                "u" > typeof console && console.warn("defaultOutput is deprecated, please use `defaultReactOutput`"),
                X.apply(null, arguments)
            );
        },
    };
});
