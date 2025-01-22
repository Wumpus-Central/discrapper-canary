!(function (n, r) {
    e.exports = r();
})(0, function () {
    var e = /\r\n?/g,
        n = /\t/g,
        r = /\f/g,
        i = function (i) {
            return i.replace(e, '\n').replace(r, '').replace(n, '    ');
        },
        a = function (e, n) {
            var r = e || {};
            if (null != n) for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
            return r;
        },
        o = function (e, n) {
            var r,
                o = Object.keys(e).filter(function (n) {
                    var r = e[n];
                    if (null == r || null == r.match) return !1;
                    var i = r.order;
                    return ('number' != typeof i || !isFinite(i)) && 'undefined' != typeof console && console.warn('simple-markdown: Invalid order for rule `' + n + '`: ' + String(i)), !0;
                });
            o.sort(function (n, r) {
                var i = e[n],
                    a = e[r],
                    o = i.order,
                    s = a.order;
                if (o !== s) return o - s;
                var l = i.quality ? 0 : 1,
                    u = a.quality ? 0 : 1;
                if (l !== u) return l - u;
                if (n < r) return -1;
                if (n > r) return 1;
                else return 0;
            });
            for (var s = new Map(), l = [], u = 0; u < o.length; u++) {
                var c = o[u],
                    d = e[c].requiredFirstCharacters;
                null == d
                    ? l.push(c)
                    : d.map((e) => {
                          let n = e.charCodeAt(0);
                          !s.has(n) && s.set(n, []), s.get(n).push(c);
                      });
            }
            var f = function (n, i) {
                    var a = [];
                    for (r = i = i || r; n; ) {
                        for (var u = null, c = null, d = null, p = -100000, h = 100000, _ = [s.get(n.charCodeAt(0)), l], m = 0; m < _.length; m++) {
                            var g = _[m];
                            if (null != g)
                                for (var E = 0; E < g.length; E++) {
                                    var v = g[E],
                                        y = e[v],
                                        b = y.order;
                                    if (b > h) break;
                                    var I = null == i.prevCapture ? '' : i.prevCapture[0],
                                        T = y.match(n, i, I);
                                    if (T) {
                                        var S = y.quality ? y.quality(T, i, I) : 0;
                                        (b < h || S > p) && ((u = v), (c = y), (d = T), (p = S), (h = b));
                                    }
                                }
                        }
                        if (null == c || null == d) throw Error("Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '" + o[o.length - 1] + "'. It seems to not match the following source:\n" + n);
                        if (d.index) throw Error('`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?');
                        var A = c.parse(d, f, i);
                        Array.isArray(A) ? Array.prototype.push.apply(a, A) : (null == A.type && (A.type = u), a.push(A)), (i.prevCapture = d), (n = n.substring(i.prevCapture[0].length));
                    }
                    return a;
                },
                p = function (e, o) {
                    return !(r = a(o, n)).inline && !r.disableAutoBlockNewlines && (e += '\n\n'), (r.prevCapture = null), f(i(e), r);
                };
            return (f.rules = e), (p.rules = e), p;
        },
        s = function (e) {
            var n = function (n, r) {
                return r.inline ? e.exec(n) : null;
            };
            return (n.regex = e), n;
        },
        l = function (e) {
            var n = function (n, r) {
                return r.inline ? null : e.exec(n);
            };
            return (n.regex = e), n;
        },
        u = function (e) {
            var n = function (n, r) {
                return e.exec(n);
            };
            return (n.regex = e), n;
        },
        c = ('function' == typeof Symbol && Symbol.for && Symbol.for('react.element')) || 60103,
        d = function (e, n, r) {
            return {
                $$typeof: c,
                type: e,
                key: null == n ? void 0 : n,
                ref: null,
                props: r,
                _owner: null
            };
        },
        f = function (e, n, r, i) {
            i = void 0 === i || i;
            var a = '';
            for (var o in (r = r || {})) {
                var s = r[o];
                Object.prototype.hasOwnProperty.call(r, o) && s && (a += ' ' + g(o) + '="' + g(s) + '"');
            }
            var l = '<' + e + a + '>';
            return i ? l + n + '</' + e + '>' : l;
        },
        p = {},
        h = function (e) {
            if (null == e) return null;
            try {
                var n = new URL(e, 'https://localhost').protocol;
                if (0 === n.indexOf('javascript:') || 0 === n.indexOf('vbscript:') || 0 === n.indexOf('data:')) return null;
            } catch (e) {
                return null;
            }
            return e;
        },
        _ = /[<>&"']/g,
        m = {
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;',
            '"': '&quot;',
            "'": '&#x27;',
            '/': '&#x2F;',
            '`': '&#96;'
        },
        g = function (e) {
            return String(e).replace(_, function (e) {
                return m[e];
            });
        },
        E = /\\([^0-9A-Za-z\s])/g,
        v = function (e) {
            return e.replace(E, '$1');
        },
        y = function (e, n, r) {
            var i = r.inline || !1;
            r.inline = !0;
            var a = e(n, r);
            return (r.inline = i), a;
        },
        b = function (e, n, r) {
            var i = r.inline || !1;
            r.inline = !1;
            var a = e(n + '\n\n', r);
            return (r.inline = i), a;
        },
        I = function (e, n, r) {
            return { content: y(n, e[1], r) };
        },
        T = function () {
            return {};
        },
        S = '(?:[*+-]|\\d+\\.)',
        A = '( *)(' + S + ') +',
        C = RegExp('^' + A),
        N = RegExp(A + '[^\\n]*(?:\\n(?!\\1' + S + ' )[^\\n]*)*(\n|$)', 'gm'),
        R = /\n{2,}$/,
        O = /^ (?= *`)|(` *) $/g,
        D = R,
        L = / *\n+$/,
        x = RegExp('^( *)(' + S + ') [\\s\\S]+?(?:\n{2,}(?! )(?!\\1' + S + ' )\\n*|\\s*\n*$)'),
        w = /(?:^|\n)( *)$/,
        P = (function () {
            var e = /^ *\| *| *\| *$/g,
                n = / *$/,
                r = /^ *-+: *$/,
                i = /^ *:-+: *$/,
                a = /^ *:-+ *$/,
                o = function (e) {
                    if (r.test(e)) return 'right';
                    if (i.test(e)) return 'center';
                    if (a.test(e)) return 'left';
                    else return null;
                },
                s = function (n, r, i, a) {
                    return a && (n = n.replace(e, '')), n.trim().split('|').map(o);
                },
                l = function (e, r, i, a) {
                    var o = i.inTable;
                    i.inTable = !0;
                    var s = r(e.trim(), i);
                    i.inTable = o;
                    var l = [[]];
                    return (
                        s.forEach(function (e, r) {
                            'tableSeparator' === e.type ? (!a || (0 !== r && r !== s.length - 1)) && l.push([]) : ('text' === e.type && (null == s[r + 1] || 'tableSeparator' === s[r + 1].type) && (e.content = e.content.replace(n, '')), l[l.length - 1].push(e));
                        }),
                        l
                    );
                },
                u = function (e, n, r, i) {
                    return e
                        .trim()
                        .split('\n')
                        .map(function (e) {
                            return l(e, n, r, i);
                        });
                },
                c = function (e) {
                    return function (n, r, i) {
                        i.inline = !0;
                        var a = l(n[1], r, i, e),
                            o = s(n[2], r, i, e),
                            c = u(n[3], r, i, e);
                        return (
                            (i.inline = !1),
                            {
                                type: 'table',
                                header: a,
                                align: o,
                                cells: c
                            }
                        );
                    };
                };
            return {
                parseTable: c(!0),
                parseNpTable: c(!1),
                TABLE_REGEX: /^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,
                NPTABLE_REGEX: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/
            };
        })(),
        M = '(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*',
        k = '\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+[\'"]([\\s\\S]*?)[\'"])?\\s*',
        U = /mailto:/i,
        B = function (e, n, r) {
            var i = (e[2] || e[1]).replace(/\s+/g, ' ').toLowerCase();
            if (n._defs && n._defs[i]) {
                var a = n._defs[i];
                (r.target = a.target), (r.title = a.title);
            }
            return (n._refs = n._refs || {}), (n._refs[i] = n._refs[i] || []), n._refs[i].push(r), r;
        },
        G = !1;
    try {
        RegExp('(?<=a)'), RegExp('(?<!a)'), (G = !1);
    } catch (e) {}
    var Z = 0,
        F = {
            Array: {
                react: function (e, n, r) {
                    for (var i = r.key, a = [], o = 0, s = 0; o < e.length; o++, s++) {
                        r.key = '' + o;
                        var l = e[o];
                        if ('text' === l.type)
                            for (
                                l = {
                                    type: 'text',
                                    content: l.content
                                };
                                o + 1 < e.length && 'text' === e[o + 1].type;
                                o++
                            )
                                l.content += e[o + 1].content;
                        a.push(n(l, r));
                    }
                    return (r.key = i), a;
                },
                html: function (e, n, r) {
                    for (var i = '', a = 0; a < e.length; a++) {
                        var o = e[a];
                        if ('text' === o.type)
                            for (
                                o = {
                                    type: 'text',
                                    content: o.content
                                };
                                a + 1 < e.length && 'text' === e[a + 1].type;
                                a++
                            )
                                o.content += e[a + 1].content;
                        i += n(o, r);
                    }
                    return i;
                }
            },
            heading: {
                order: Z++,
                match: l(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/),
                parse: function (e, n, r) {
                    return {
                        level: e[1].length,
                        content: y(n, e[2].trim(), r)
                    };
                },
                react: function (e, n, r) {
                    return d('h' + e.level, r.key, { children: n(e.content, r) });
                },
                html: function (e, n, r) {
                    return f('h' + e.level, n(e.content, r));
                }
            },
            nptable: {
                order: Z++,
                match: l(P.NPTABLE_REGEX),
                parse: P.parseNpTable,
                react: null,
                html: null
            },
            lheading: {
                order: Z++,
                match: l(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),
                parse: function (e, n, r) {
                    return {
                        type: 'heading',
                        level: '=' === e[2] ? 1 : 2,
                        content: y(n, e[1], r)
                    };
                },
                react: null,
                html: null
            },
            hr: {
                order: Z++,
                match: l(/^( *[-*_]){3,} *(?:\n *)+\n/),
                parse: T,
                react: function (e, n, r) {
                    return d('hr', r.key, p);
                },
                html: function (e, n, r) {
                    return '<hr>';
                }
            },
            codeBlock: {
                order: Z++,
                match: l(/^(?:    [^\n]+\n*)+(?:\n *)+\n/),
                parse: function (e, n, r) {
                    return {
                        lang: void 0,
                        content: e[0].replace(/^    /gm, '').replace(/\n+$/, '')
                    };
                },
                react: function (e, n, r) {
                    var i = e.lang ? 'markdown-code-' + e.lang : void 0;
                    return d('pre', r.key, {
                        children: d('code', null, {
                            className: i,
                            children: e.content
                        })
                    });
                },
                html: function (e, n, r) {
                    var i = e.lang ? 'markdown-code-' + e.lang : void 0,
                        a = f('code', g(e.content), { class: i });
                    return f('pre', a);
                }
            },
            fence: {
                order: Z++,
                match: l(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/),
                parse: function (e, n, r) {
                    return {
                        type: 'codeBlock',
                        lang: e[2] || void 0,
                        content: e[3]
                    };
                },
                react: null,
                html: null
            },
            blockQuote: {
                order: Z++,
                match: l(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),
                parse: function (e, n, r) {
                    return { content: n(e[0].replace(/^ *> ?/gm, ''), r) };
                },
                react: function (e, n, r) {
                    return d('blockquote', r.key, { children: n(e.content, r) });
                },
                html: function (e, n, r) {
                    return f('blockquote', n(e.content, r));
                }
            },
            list: {
                order: Z++,
                match: function (e, n) {
                    var r = null == n.prevCapture ? '' : n.prevCapture[0],
                        i = w.exec(r),
                        a = n._list || !n.inline;
                    return i && a ? ((e = i[1] + e), x.exec(e)) : null;
                },
                parse: function (e, n, r) {
                    var i = e[2],
                        a = i.length > 1,
                        o = a ? +i : void 0,
                        s = e[0].replace(D, '\n').match(N),
                        l = !1;
                    return {
                        ordered: a,
                        start: o,
                        items: s.map(function (e, i) {
                            var a,
                                o = C.exec(e),
                                u = RegExp('^ {1,' + (o ? o[0].length : 0) + '}', 'gm'),
                                c = e.replace(u, '').replace(C, ''),
                                d = i === s.length - 1,
                                f = -1 !== c.indexOf('\n\n') || (d && l);
                            l = f;
                            var p = r.inline,
                                h = r._list;
                            (r._list = !0), f ? ((r.inline = !1), (a = c.replace(L, '\n\n'))) : ((r.inline = !0), (a = c.replace(L, '')));
                            var _ = n(a, r);
                            return (r.inline = p), (r._list = h), _;
                        })
                    };
                },
                react: function (e, n, r) {
                    return d(e.ordered ? 'ol' : 'ul', r.key, {
                        start: e.start,
                        children: e.items.map(function (e, i) {
                            return d('li', '' + i, { children: n(e, r) });
                        })
                    });
                },
                html: function (e, n, r) {
                    var i = e.items
                        .map(function (e) {
                            return f('li', n(e, r));
                        })
                        .join('');
                    return f(e.ordered ? 'ol' : 'ul', i, { start: e.start });
                }
            },
            def: {
                order: Z++,
                match: l(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/),
                parse: function (e, n, r) {
                    var i = e[1].replace(/\s+/g, ' ').toLowerCase(),
                        a = e[2],
                        o = e[3];
                    return (
                        r._refs &&
                            r._refs[i] &&
                            r._refs[i].forEach(function (e) {
                                (e.target = a), (e.title = o);
                            }),
                        (r._defs = r._defs || {}),
                        (r._defs[i] = {
                            target: a,
                            title: o
                        }),
                        {
                            def: i,
                            target: a,
                            title: o
                        }
                    );
                },
                react: function () {
                    return null;
                },
                html: function () {
                    return '';
                }
            },
            table: {
                order: Z++,
                match: l(P.TABLE_REGEX),
                parse: P.parseTable,
                react: function (e, n, r) {
                    var i = function (n) {
                            return null == e.align[n] ? {} : { textAlign: e.align[n] };
                        },
                        a = e.header.map(function (e, a) {
                            return d('th', '' + a, {
                                style: i(a),
                                scope: 'col',
                                children: n(e, r)
                            });
                        }),
                        o = e.cells.map(function (e, a) {
                            return d('tr', '' + a, {
                                children: e.map(function (e, a) {
                                    return d('td', '' + a, {
                                        style: i(a),
                                        children: n(e, r)
                                    });
                                })
                            });
                        });
                    return d('table', r.key, {
                        children: [d('thead', 'thead', { children: d('tr', null, { children: a }) }), d('tbody', 'tbody', { children: o })]
                    });
                },
                html: function (e, n, r) {
                    var i = function (n) {
                            return null == e.align[n] ? '' : 'text-align:' + e.align[n] + ';';
                        },
                        a = e.header
                            .map(function (e, a) {
                                return f('th', n(e, r), {
                                    style: i(a),
                                    scope: 'col'
                                });
                            })
                            .join(''),
                        o = e.cells
                            .map(function (e) {
                                var a = e
                                    .map(function (e, a) {
                                        return f('td', n(e, r), { style: i(a) });
                                    })
                                    .join('');
                                return f('tr', a);
                            })
                            .join(''),
                        s = f('thead', f('tr', a)),
                        l = f('tbody', o);
                    return f('table', s + l);
                }
            },
            newline: {
                order: Z++,
                requiredFirstCharacters: ['\n'],
                match: l(/^(?:\n *)*\n/),
                parse: T,
                react: function (e, n, r) {
                    return '\n';
                },
                html: function (e, n, r) {
                    return '\n';
                }
            },
            paragraph: {
                order: Z++,
                match: l(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),
                parse: I,
                react: function (e, n, r) {
                    return d('div', r.key, {
                        className: 'paragraph',
                        children: n(e.content, r)
                    });
                },
                html: function (e, n, r) {
                    var i = { class: 'paragraph' };
                    return f('div', n(e.content, r), i);
                }
            },
            escape: {
                order: Z++,
                requiredFirstCharacters: ['\\'],
                match: s(/^\\([^0-9A-Za-z\s])/),
                parse: function (e, n, r) {
                    return {
                        type: 'text',
                        content: e[1]
                    };
                },
                react: null,
                html: null
            },
            tableSeparator: {
                order: Z++,
                match: function (e, n) {
                    return n.inTable ? /^ *\| */.exec(e) : null;
                },
                parse: function () {
                    return { type: 'tableSeparator' };
                },
                react: function () {
                    return ' | ';
                },
                html: function () {
                    return ' &vert; ';
                }
            },
            autolink: {
                order: Z++,
                requiredFirstCharacters: ['<'],
                match: s(/^<([^: >]+:\/[^ >]+)>/),
                parse: function (e, n, r) {
                    return {
                        type: 'link',
                        content: [
                            {
                                type: 'text',
                                content: e[1]
                            }
                        ],
                        target: e[1]
                    };
                },
                react: null,
                html: null
            },
            mailto: {
                order: Z++,
                match: s(/^<([^ >]+@[^ >]+)>/),
                parse: function (e, n, r) {
                    var i = e[1],
                        a = e[1];
                    return (
                        !U.test(a) && (a = 'mailto:' + a),
                        {
                            type: 'link',
                            content: [
                                {
                                    type: 'text',
                                    content: i
                                }
                            ],
                            target: a
                        }
                    );
                },
                react: null,
                html: null
            },
            url: {
                order: Z++,
                requiredFirstCharacters: ['h'],
                match: s(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),
                parse: function (e, n, r) {
                    return {
                        type: 'link',
                        content: [
                            {
                                type: 'text',
                                content: e[1]
                            }
                        ],
                        target: e[1],
                        title: void 0
                    };
                },
                react: null,
                html: null
            },
            link: {
                order: Z++,
                requiredFirstCharacters: ['['],
                match: s(RegExp('^\\[(' + M + ')\\]\\(' + k + '\\)')),
                parse: function (e, n, r) {
                    return {
                        content: n(e[1], r),
                        target: v(e[2]),
                        title: e[3]
                    };
                },
                react: function (e, n, r) {
                    return d('a', r.key, {
                        href: h(e.target),
                        title: e.title,
                        children: n(e.content, r)
                    });
                },
                html: function (e, n, r) {
                    var i = {
                        href: h(e.target),
                        title: e.title
                    };
                    return f('a', n(e.content, r), i);
                }
            },
            image: {
                order: Z++,
                match: s(RegExp('^!\\[(' + M + ')\\]\\(' + k + '\\)')),
                parse: function (e, n, r) {
                    return {
                        alt: e[1],
                        target: v(e[2]),
                        title: e[3]
                    };
                },
                react: function (e, n, r) {
                    return d('img', r.key, {
                        src: h(e.target),
                        alt: e.alt,
                        title: e.title
                    });
                },
                html: function (e, n, r) {
                    return f(
                        'img',
                        '',
                        {
                            src: h(e.target),
                            alt: e.alt,
                            title: e.title
                        },
                        !1
                    );
                }
            },
            reflink: {
                order: Z++,
                match: s(RegExp('^\\[(' + M + ')\\]\\s*\\[([^\\]]*)\\]')),
                parse: function (e, n, r) {
                    return B(e, r, {
                        type: 'link',
                        content: n(e[1], r)
                    });
                },
                react: null,
                html: null
            },
            refimage: {
                order: Z++,
                match: s(RegExp('^!\\[(' + M + ')\\]\\s*\\[([^\\]]*)\\]')),
                parse: function (e, n, r) {
                    return B(e, r, {
                        type: 'image',
                        alt: e[1]
                    });
                },
                react: null,
                html: null
            },
            em: {
                order: Z,
                match: s(RegExp((G ? '^\\b_((?:_[_(]|\\\\[\\s\\S]|(?<!_)\\B_\\B|[^\\\\_])+?)_(?![(])\\b' : '^\\b_((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_\\b') + '|^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?)\\*(?!\\*)')),
                quality: function (e) {
                    return e[0].length + 0.2;
                },
                parse: function (e, n, r) {
                    return { content: n(e[2] || e[1], r) };
                },
                react: function (e, n, r) {
                    return d('em', r.key, { children: n(e.content, r) });
                },
                html: function (e, n, r) {
                    return f('em', n(e.content, r));
                }
            },
            strong: {
                order: Z,
                requiredFirstCharacters: ['*'],
                match: s(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/),
                quality: function (e) {
                    return e[0].length + 0.1;
                },
                parse: I,
                react: function (e, n, r) {
                    return d('strong', r.key, { children: n(e.content, r) });
                },
                html: function (e, n, r) {
                    return f('strong', n(e.content, r));
                }
            },
            u: {
                order: Z++,
                requiredFirstCharacters: ['_'],
                match: s(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/),
                quality: function (e) {
                    return e[0].length;
                },
                parse: I,
                react: function (e, n, r) {
                    return d('u', r.key, { children: n(e.content, r) });
                },
                html: function (e, n, r) {
                    return f('u', n(e.content, r));
                }
            },
            del: {
                order: Z++,
                requiredFirstCharacters: ['~'],
                match: s(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~]|\s(?!~~))+?)~~/),
                parse: I,
                react: function (e, n, r) {
                    return d('del', r.key, { children: n(e.content, r) });
                },
                html: function (e, n, r) {
                    return f('del', n(e.content, r));
                }
            },
            inlineCode: {
                order: Z++,
                requiredFirstCharacters: ['`'],
                match: s(/^(`+)([\s\S]*?[^`])\1(?!`)/),
                parse: function (e, n, r) {
                    return { content: e[2].replace(O, '$1') };
                },
                react: function (e, n, r) {
                    return d('code', r.key, { children: e.content });
                },
                html: function (e, n, r) {
                    return f('code', g(e.content));
                }
            },
            br: {
                order: Z++,
                requiredFirstCharacters: [' '],
                match: u(/^ {2,}\n/),
                parse: T,
                react: function (e, n, r) {
                    return d('br', r.key, p);
                },
                html: function (e, n, r) {
                    return '<br>';
                }
            },
            text: {
                order: Z++,
                match: u(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/),
                parse: function (e, n, r) {
                    return { content: e[0] };
                },
                react: function (e, n, r) {
                    return e.content;
                },
                html: function (e, n, r) {
                    return g(e.content);
                }
            }
        },
        V = function (e, n) {
            return (
                !n && 'undefined' != typeof console && console.warn("simple-markdown ruleOutput should take 'react' or 'html' as the second argument."),
                function (r, i, a) {
                    return e[r.type][n](r, i, a);
                }
            );
        },
        j = function (e) {
            var n = function (r, i) {
                if (((i = i || {}), !Array.isArray(r))) return e(r, n, i);
                for (var a = i.key, o = [], s = null, l = 0; l < r.length; l++) {
                    i.key = '' + l;
                    var u = n(r[l], i);
                    'string' == typeof u && 'string' == typeof s ? ((s += u), (o[o.length - 1] = s)) : (o.push(u), (s = u));
                }
                return (i.key = a), o;
            };
            return n;
        },
        H = function (e) {
            var n = function (r, i) {
                return ((i = i || {}), Array.isArray(r))
                    ? r
                          .map(function (e) {
                              return n(e, i);
                          })
                          .join('')
                    : e(r, n, i);
            };
            return n;
        },
        Y = function (e, n, r) {
            if (!n) throw Error('simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`');
            var i,
                o = (e.Array || F.Array)[n];
            if (!o) throw Error('simple-markdown: outputFor: to join nodes of type `' + n + '` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.');
            var s = o,
                l = function (r, a) {
                    return ((i = a = a || i), Array.isArray(r)) ? s(r, l, a) : e[r.type][n](r, l, a);
                };
            return function (e, n) {
                return l(e, (i = a(n, r)));
            };
        },
        W = o(F),
        K = function (e, n) {
            return ((n = n || {}).inline = !1), W(e, n);
        },
        z = function (e, n) {
            return ((n = n || {}).inline = !0), W(e, n);
        },
        q = function (e, n) {
            var r = R.test(e);
            return ((n = n || {}).inline = !r), W(e, n);
        },
        Q = Y(F, 'react'),
        X = Y(F, 'html'),
        J = function (e, n) {
            return Q(K(e, n), n);
        },
        $ = function (e) {
            var n = {};
            for (var r in e) 'source' !== r && Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return (n.children = J(e.source)), d('div', null, n);
        };
    return {
        defaultRules: F,
        parserFor: o,
        outputFor: Y,
        inlineRegex: s,
        blockRegex: l,
        anyScopeRegex: u,
        parseInline: y,
        parseBlock: b,
        markdownToReact: J,
        markdownToHtml: function (e, n) {
            return X(K(e, n), n);
        },
        ReactMarkdown: $,
        defaultBlockParse: K,
        defaultInlineParse: z,
        defaultImplicitParse: q,
        defaultReactOutput: Q,
        defaultHtmlOutput: X,
        preprocess: i,
        sanitizeText: g,
        sanitizeUrl: h,
        unescapeUrl: v,
        htmlTag: f,
        reactElement: d,
        defaultRawParse: W,
        ruleOutput: V,
        reactFor: j,
        htmlFor: H,
        defaultParse: function () {
            return 'undefined' != typeof console && console.warn('defaultParse is deprecated, please use `defaultImplicitParse`'), q.apply(null, arguments);
        },
        defaultOutput: function () {
            return 'undefined' != typeof console && console.warn('defaultOutput is deprecated, please use `defaultReactOutput`'), Q.apply(null, arguments);
        }
    };
});
