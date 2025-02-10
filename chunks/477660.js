!(function (t, n) {
    e.exports = n();
})(0, function () {
    var e = /\r\n?/g,
        t = /\t/g,
        n = /\f/g,
        i = function (i) {
            return i.replace(e, '\n').replace(n, '').replace(t, '    ');
        },
        r = function (e, t) {
            var n = e || {};
            if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
            return n;
        },
        a = function (e, t) {
            var n,
                a = Object.keys(e).filter(function (t) {
                    var n = e[t];
                    if (null == n || null == n.match) return !1;
                    var i = n.order;
                    return ('number' == typeof i && isFinite(i)) || 'undefined' == typeof console || console.warn('simple-markdown: Invalid order for rule `' + t + '`: ' + String(i)), !0;
                });
            a.sort(function (t, n) {
                var i = e[t],
                    r = e[n],
                    a = i.order,
                    s = r.order;
                if (a !== s) return a - s;
                var o = i.quality ? 0 : 1,
                    l = r.quality ? 0 : 1;
                return o !== l ? o - l : t < n ? -1 : t > n ? 1 : 0;
            });
            for (var s = new Map(), o = [], l = 0; l < a.length; l++) {
                var u = a[l],
                    c = e[u].requiredFirstCharacters;
                null == c
                    ? o.push(u)
                    : c.map((e) => {
                          let t = e.charCodeAt(0);
                          s.has(t) || s.set(t, []), s.get(t).push(u);
                      });
            }
            var d = function (t, i) {
                    var r = [];
                    for (n = i = i || n; t; ) {
                        for (var l = null, u = null, c = null, f = -100000, _ = 100000, p = [s.get(t.charCodeAt(0)), o], h = 0; h < p.length; h++) {
                            var m = p[h];
                            if (null != m)
                                for (var g = 0; g < m.length; g++) {
                                    var E = m[g],
                                        v = e[E],
                                        y = v.order;
                                    if (y > _) break;
                                    var I = null == i.prevCapture ? '' : i.prevCapture[0],
                                        T = v.match(t, i, I);
                                    if (T) {
                                        var b = v.quality ? v.quality(T, i, I) : 0;
                                        (y < _ || b > f) && ((l = E), (u = v), (c = T), (f = b), (_ = y));
                                    }
                                }
                        }
                        if (null == u || null == c) throw Error("Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '" + a[a.length - 1] + "'. It seems to not match the following source:\n" + t);
                        if (c.index) throw Error('`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?');
                        var S = u.parse(c, d, i);
                        Array.isArray(S) ? Array.prototype.push.apply(r, S) : (null == S.type && (S.type = l), r.push(S)), (i.prevCapture = c), (t = t.substring(i.prevCapture[0].length));
                    }
                    return r;
                },
                f = function (e, a) {
                    return (n = r(a, t)).inline || n.disableAutoBlockNewlines || (e += '\n\n'), (n.prevCapture = null), d(i(e), n);
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
        u = ('function' == typeof Symbol && Symbol.for && Symbol.for('react.element')) || 60103,
        c = function (e, t, n) {
            return {
                $$typeof: u,
                type: e,
                key: null == t ? void 0 : t,
                ref: null,
                props: n,
                _owner: null
            };
        },
        d = function (e, t, n, i) {
            i = void 0 === i || i;
            var r = '';
            for (var a in (n = n || {})) {
                var s = n[a];
                Object.prototype.hasOwnProperty.call(n, a) && s && (r += ' ' + m(a) + '="' + m(s) + '"');
            }
            var o = '<' + e + r + '>';
            return i ? o + t + '</' + e + '>' : o;
        },
        f = {},
        _ = function (e) {
            if (null == e) return null;
            try {
                var t = new URL(e, 'https://localhost').protocol;
                if (0 === t.indexOf('javascript:') || 0 === t.indexOf('vbscript:') || 0 === t.indexOf('data:')) return null;
            } catch (e) {
                return null;
            }
            return e;
        },
        p = /[<>&"']/g,
        h = {
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;',
            '"': '&quot;',
            "'": '&#x27;',
            '/': '&#x2F;',
            '`': '&#96;'
        },
        m = function (e) {
            return String(e).replace(p, function (e) {
                return h[e];
            });
        },
        g = /\\([^0-9A-Za-z\s])/g,
        E = function (e) {
            return e.replace(g, '$1');
        },
        v = function (e, t, n) {
            var i = n.inline || !1;
            n.inline = !0;
            var r = e(t, n);
            return (n.inline = i), r;
        },
        y = function (e, t, n) {
            var i = n.inline || !1;
            n.inline = !1;
            var r = e(t + '\n\n', n);
            return (n.inline = i), r;
        },
        I = function (e, t, n) {
            return { content: v(t, e[1], n) };
        },
        T = function () {
            return {};
        },
        b = '(?:[*+-]|\\d+\\.)',
        S = '( *)(' + b + ') +',
        A = RegExp('^' + S),
        N = RegExp(S + '[^\\n]*(?:\\n(?!\\1' + b + ' )[^\\n]*)*(\n|$)', 'gm'),
        C = /\n{2,}$/,
        R = /^ (?= *`)|(` *) $/g,
        O = C,
        D = / *\n+$/,
        L = RegExp('^( *)(' + b + ') [\\s\\S]+?(?:\n{2,}(?! )(?!\\1' + b + ' )\\n*|\\s*\n*$)'),
        x = /(?:^|\n)( *)$/,
        P = (function () {
            var e = /^ *\| *| *\| *$/g,
                t = / *$/,
                n = /^ *-+: *$/,
                i = /^ *:-+: *$/,
                r = /^ *:-+ *$/,
                a = function (e) {
                    return n.test(e) ? 'right' : i.test(e) ? 'center' : r.test(e) ? 'left' : null;
                },
                s = function (t, n, i, r) {
                    return r && (t = t.replace(e, '')), t.trim().split('|').map(a);
                },
                o = function (e, n, i, r) {
                    var a = i.inTable;
                    i.inTable = !0;
                    var s = n(e.trim(), i);
                    i.inTable = a;
                    var o = [[]];
                    return (
                        s.forEach(function (e, n) {
                            'tableSeparator' === e.type ? (r && (0 === n || n === s.length - 1)) || o.push([]) : ('text' === e.type && (null == s[n + 1] || 'tableSeparator' === s[n + 1].type) && (e.content = e.content.replace(t, '')), o[o.length - 1].push(e));
                        }),
                        o
                    );
                },
                l = function (e, t, n, i) {
                    return e
                        .trim()
                        .split('\n')
                        .map(function (e) {
                            return o(e, t, n, i);
                        });
                },
                u = function (e) {
                    return function (t, n, i) {
                        i.inline = !0;
                        var r = o(t[1], n, i, e),
                            a = s(t[2], n, i, e),
                            u = l(t[3], n, i, e);
                        return (
                            (i.inline = !1),
                            {
                                type: 'table',
                                header: r,
                                align: a,
                                cells: u
                            }
                        );
                    };
                };
            return {
                parseTable: u(!0),
                parseNpTable: u(!1),
                TABLE_REGEX: /^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,
                NPTABLE_REGEX: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/
            };
        })(),
        w = '(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*',
        M = '\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+[\'"]([\\s\\S]*?)[\'"])?\\s*',
        k = /mailto:/i,
        U = function (e, t, n) {
            var i = (e[2] || e[1]).replace(/\s+/g, ' ').toLowerCase();
            if (t._defs && t._defs[i]) {
                var r = t._defs[i];
                (n.target = r.target), (n.title = r.title);
            }
            return (t._refs = t._refs || {}), (t._refs[i] = t._refs[i] || []), t._refs[i].push(n), n;
        },
        G = !1;
    try {
        RegExp('(?<=a)'), RegExp('(?<!a)'), (G = !1);
    } catch (e) {}
    var B = 0,
        Z = {
            Array: {
                react: function (e, t, n) {
                    for (var i = n.key, r = [], a = 0, s = 0; a < e.length; a++, s++) {
                        n.key = '' + a;
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
                        r.push(t(o, n));
                    }
                    return (n.key = i), r;
                },
                html: function (e, t, n) {
                    for (var i = '', r = 0; r < e.length; r++) {
                        var a = e[r];
                        if ('text' === a.type)
                            for (
                                a = {
                                    type: 'text',
                                    content: a.content
                                };
                                r + 1 < e.length && 'text' === e[r + 1].type;
                                r++
                            )
                                a.content += e[r + 1].content;
                        i += t(a, n);
                    }
                    return i;
                }
            },
            heading: {
                order: B++,
                match: o(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return {
                        level: e[1].length,
                        content: v(t, e[2].trim(), n)
                    };
                },
                react: function (e, t, n) {
                    return c('h' + e.level, n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return d('h' + e.level, t(e.content, n));
                }
            },
            nptable: {
                order: B++,
                match: o(P.NPTABLE_REGEX),
                parse: P.parseNpTable,
                react: null,
                html: null
            },
            lheading: {
                order: B++,
                match: o(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return {
                        type: 'heading',
                        level: '=' === e[2] ? 1 : 2,
                        content: v(t, e[1], n)
                    };
                },
                react: null,
                html: null
            },
            hr: {
                order: B++,
                match: o(/^( *[-*_]){3,} *(?:\n *)+\n/),
                parse: T,
                react: function (e, t, n) {
                    return c('hr', n.key, f);
                },
                html: function (e, t, n) {
                    return '<hr>';
                }
            },
            codeBlock: {
                order: B++,
                match: o(/^(?:    [^\n]+\n*)+(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return {
                        lang: void 0,
                        content: e[0].replace(/^    /gm, '').replace(/\n+$/, '')
                    };
                },
                react: function (e, t, n) {
                    var i = e.lang ? 'markdown-code-' + e.lang : void 0;
                    return c('pre', n.key, {
                        children: c('code', null, {
                            className: i,
                            children: e.content
                        })
                    });
                },
                html: function (e, t, n) {
                    var i = e.lang ? 'markdown-code-' + e.lang : void 0,
                        r = d('code', m(e.content), { class: i });
                    return d('pre', r);
                }
            },
            fence: {
                order: B++,
                match: o(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/),
                parse: function (e, t, n) {
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
                order: B++,
                match: o(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),
                parse: function (e, t, n) {
                    return { content: t(e[0].replace(/^ *> ?/gm, ''), n) };
                },
                react: function (e, t, n) {
                    return c('blockquote', n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return d('blockquote', t(e.content, n));
                }
            },
            list: {
                order: B++,
                match: function (e, t) {
                    var n = null == t.prevCapture ? '' : t.prevCapture[0],
                        i = x.exec(n),
                        r = t._list || !t.inline;
                    return i && r ? ((e = i[1] + e), L.exec(e)) : null;
                },
                parse: function (e, t, n) {
                    var i = e[2],
                        r = i.length > 1,
                        a = r ? +i : void 0,
                        s = e[0].replace(O, '\n').match(N),
                        o = !1;
                    return {
                        ordered: r,
                        start: a,
                        items: s.map(function (e, i) {
                            var r,
                                a = A.exec(e),
                                l = RegExp('^ {1,' + (a ? a[0].length : 0) + '}', 'gm'),
                                u = e.replace(l, '').replace(A, ''),
                                c = i === s.length - 1,
                                d = -1 !== u.indexOf('\n\n') || (c && o);
                            o = d;
                            var f = n.inline,
                                _ = n._list;
                            (n._list = !0), d ? ((n.inline = !1), (r = u.replace(D, '\n\n'))) : ((n.inline = !0), (r = u.replace(D, '')));
                            var p = t(r, n);
                            return (n.inline = f), (n._list = _), p;
                        })
                    };
                },
                react: function (e, t, n) {
                    return c(e.ordered ? 'ol' : 'ul', n.key, {
                        start: e.start,
                        children: e.items.map(function (e, i) {
                            return c('li', '' + i, { children: t(e, n) });
                        })
                    });
                },
                html: function (e, t, n) {
                    var i = e.items
                        .map(function (e) {
                            return d('li', t(e, n));
                        })
                        .join('');
                    return d(e.ordered ? 'ol' : 'ul', i, { start: e.start });
                }
            },
            def: {
                order: B++,
                match: o(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/),
                parse: function (e, t, n) {
                    var i = e[1].replace(/\s+/g, ' ').toLowerCase(),
                        r = e[2],
                        a = e[3];
                    return (
                        n._refs &&
                            n._refs[i] &&
                            n._refs[i].forEach(function (e) {
                                (e.target = r), (e.title = a);
                            }),
                        (n._defs = n._defs || {}),
                        (n._defs[i] = {
                            target: r,
                            title: a
                        }),
                        {
                            def: i,
                            target: r,
                            title: a
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
                order: B++,
                match: o(P.TABLE_REGEX),
                parse: P.parseTable,
                react: function (e, t, n) {
                    var i = function (t) {
                            return null == e.align[t] ? {} : { textAlign: e.align[t] };
                        },
                        r = e.header.map(function (e, r) {
                            return c('th', '' + r, {
                                style: i(r),
                                scope: 'col',
                                children: t(e, n)
                            });
                        }),
                        a = e.cells.map(function (e, r) {
                            return c('tr', '' + r, {
                                children: e.map(function (e, r) {
                                    return c('td', '' + r, {
                                        style: i(r),
                                        children: t(e, n)
                                    });
                                })
                            });
                        });
                    return c('table', n.key, {
                        children: [c('thead', 'thead', { children: c('tr', null, { children: r }) }), c('tbody', 'tbody', { children: a })]
                    });
                },
                html: function (e, t, n) {
                    var i = function (t) {
                            return null == e.align[t] ? '' : 'text-align:' + e.align[t] + ';';
                        },
                        r = e.header
                            .map(function (e, r) {
                                return d('th', t(e, n), {
                                    style: i(r),
                                    scope: 'col'
                                });
                            })
                            .join(''),
                        a = e.cells
                            .map(function (e) {
                                var r = e
                                    .map(function (e, r) {
                                        return d('td', t(e, n), { style: i(r) });
                                    })
                                    .join('');
                                return d('tr', r);
                            })
                            .join(''),
                        s = d('thead', d('tr', r)),
                        o = d('tbody', a);
                    return d('table', s + o);
                }
            },
            newline: {
                order: B++,
                requiredFirstCharacters: ['\n'],
                match: o(/^(?:\n *)*\n/),
                parse: T,
                react: function (e, t, n) {
                    return '\n';
                },
                html: function (e, t, n) {
                    return '\n';
                }
            },
            paragraph: {
                order: B++,
                match: o(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),
                parse: I,
                react: function (e, t, n) {
                    return c('div', n.key, {
                        className: 'paragraph',
                        children: t(e.content, n)
                    });
                },
                html: function (e, t, n) {
                    var i = { class: 'paragraph' };
                    return d('div', t(e.content, n), i);
                }
            },
            escape: {
                order: B++,
                requiredFirstCharacters: ['\\'],
                match: s(/^\\([^0-9A-Za-z\s])/),
                parse: function (e, t, n) {
                    return {
                        type: 'text',
                        content: e[1]
                    };
                },
                react: null,
                html: null
            },
            tableSeparator: {
                order: B++,
                match: function (e, t) {
                    return t.inTable ? /^ *\| */.exec(e) : null;
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
                order: B++,
                requiredFirstCharacters: ['<'],
                match: s(/^<([^: >]+:\/[^ >]+)>/),
                parse: function (e, t, n) {
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
                order: B++,
                match: s(/^<([^ >]+@[^ >]+)>/),
                parse: function (e, t, n) {
                    var i = e[1],
                        r = e[1];
                    return (
                        k.test(r) || (r = 'mailto:' + r),
                        {
                            type: 'link',
                            content: [
                                {
                                    type: 'text',
                                    content: i
                                }
                            ],
                            target: r
                        }
                    );
                },
                react: null,
                html: null
            },
            url: {
                order: B++,
                requiredFirstCharacters: ['h'],
                match: s(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),
                parse: function (e, t, n) {
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
                order: B++,
                requiredFirstCharacters: ['['],
                match: s(RegExp('^\\[(' + w + ')\\]\\(' + M + '\\)')),
                parse: function (e, t, n) {
                    return {
                        content: t(e[1], n),
                        target: E(e[2]),
                        title: e[3]
                    };
                },
                react: function (e, t, n) {
                    return c('a', n.key, {
                        href: _(e.target),
                        title: e.title,
                        children: t(e.content, n)
                    });
                },
                html: function (e, t, n) {
                    var i = {
                        href: _(e.target),
                        title: e.title
                    };
                    return d('a', t(e.content, n), i);
                }
            },
            image: {
                order: B++,
                match: s(RegExp('^!\\[(' + w + ')\\]\\(' + M + '\\)')),
                parse: function (e, t, n) {
                    return {
                        alt: e[1],
                        target: E(e[2]),
                        title: e[3]
                    };
                },
                react: function (e, t, n) {
                    return c('img', n.key, {
                        src: _(e.target),
                        alt: e.alt,
                        title: e.title
                    });
                },
                html: function (e, t, n) {
                    return d(
                        'img',
                        '',
                        {
                            src: _(e.target),
                            alt: e.alt,
                            title: e.title
                        },
                        !1
                    );
                }
            },
            reflink: {
                order: B++,
                match: s(RegExp('^\\[(' + w + ')\\]\\s*\\[([^\\]]*)\\]')),
                parse: function (e, t, n) {
                    return U(e, n, {
                        type: 'link',
                        content: t(e[1], n)
                    });
                },
                react: null,
                html: null
            },
            refimage: {
                order: B++,
                match: s(RegExp('^!\\[(' + w + ')\\]\\s*\\[([^\\]]*)\\]')),
                parse: function (e, t, n) {
                    return U(e, n, {
                        type: 'image',
                        alt: e[1]
                    });
                },
                react: null,
                html: null
            },
            em: {
                order: B,
                match: s(RegExp((G ? '^\\b_((?:_[_(]|\\\\[\\s\\S]|(?<!_)\\B_\\B|[^\\\\_])+?)_(?![(])\\b' : '^\\b_((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_\\b') + '|^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?)\\*(?!\\*)')),
                quality: function (e) {
                    return e[0].length + 0.2;
                },
                parse: function (e, t, n) {
                    return { content: t(e[2] || e[1], n) };
                },
                react: function (e, t, n) {
                    return c('em', n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return d('em', t(e.content, n));
                }
            },
            strong: {
                order: B,
                requiredFirstCharacters: ['*'],
                match: s(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/),
                quality: function (e) {
                    return e[0].length + 0.1;
                },
                parse: I,
                react: function (e, t, n) {
                    return c('strong', n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return d('strong', t(e.content, n));
                }
            },
            u: {
                order: B++,
                requiredFirstCharacters: ['_'],
                match: s(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/),
                quality: function (e) {
                    return e[0].length;
                },
                parse: I,
                react: function (e, t, n) {
                    return c('u', n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return d('u', t(e.content, n));
                }
            },
            del: {
                order: B++,
                requiredFirstCharacters: ['~'],
                match: s(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~]|\s(?!~~))+?)~~/),
                parse: I,
                react: function (e, t, n) {
                    return c('del', n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return d('del', t(e.content, n));
                }
            },
            inlineCode: {
                order: B++,
                requiredFirstCharacters: ['`'],
                match: s(/^(`+)([\s\S]*?[^`])\1(?!`)/),
                parse: function (e, t, n) {
                    return { content: e[2].replace(R, '$1') };
                },
                react: function (e, t, n) {
                    return c('code', n.key, { children: e.content });
                },
                html: function (e, t, n) {
                    return d('code', m(e.content));
                }
            },
            br: {
                order: B++,
                requiredFirstCharacters: [' '],
                match: l(/^ {2,}\n/),
                parse: T,
                react: function (e, t, n) {
                    return c('br', n.key, f);
                },
                html: function (e, t, n) {
                    return '<br>';
                }
            },
            text: {
                order: B++,
                match: l(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/),
                parse: function (e, t, n) {
                    return { content: e[0] };
                },
                react: function (e, t, n) {
                    return e.content;
                },
                html: function (e, t, n) {
                    return m(e.content);
                }
            }
        },
        F = function (e, t) {
            return (
                t || 'undefined' == typeof console || console.warn("simple-markdown ruleOutput should take 'react' or 'html' as the second argument."),
                function (n, i, r) {
                    return e[n.type][t](n, i, r);
                }
            );
        },
        V = function (e) {
            var t = function (n, i) {
                if (((i = i || {}), !Array.isArray(n))) return e(n, t, i);
                for (var r = i.key, a = [], s = null, o = 0; o < n.length; o++) {
                    i.key = '' + o;
                    var l = t(n[o], i);
                    'string' == typeof l && 'string' == typeof s ? ((s += l), (a[a.length - 1] = s)) : (a.push(l), (s = l));
                }
                return (i.key = r), a;
            };
            return t;
        },
        j = function (e) {
            var t = function (n, i) {
                return ((i = i || {}), Array.isArray(n))
                    ? n
                          .map(function (e) {
                              return t(e, i);
                          })
                          .join('')
                    : e(n, t, i);
            };
            return t;
        },
        H = function (e, t, n) {
            if (!t) throw Error('simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`');
            var i,
                a = (e.Array || Z.Array)[t];
            if (!a) throw Error('simple-markdown: outputFor: to join nodes of type `' + t + '` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.');
            var s = a,
                o = function (n, r) {
                    return ((i = r = r || i), Array.isArray(n)) ? s(n, o, r) : e[n.type][t](n, o, r);
                };
            return function (e, t) {
                return o(e, (i = r(t, n)));
            };
        },
        Y = a(Z),
        W = function (e, t) {
            return ((t = t || {}).inline = !1), Y(e, t);
        },
        K = function (e, t) {
            return ((t = t || {}).inline = !0), Y(e, t);
        },
        z = function (e, t) {
            var n = C.test(e);
            return ((t = t || {}).inline = !n), Y(e, t);
        },
        q = H(Z, 'react'),
        Q = H(Z, 'html'),
        X = function (e, t) {
            return q(W(e, t), t);
        },
        J = function (e) {
            var t = {};
            for (var n in e) 'source' !== n && Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.children = X(e.source)), c('div', null, t);
        };
    return {
        defaultRules: Z,
        parserFor: a,
        outputFor: H,
        inlineRegex: s,
        blockRegex: o,
        anyScopeRegex: l,
        parseInline: v,
        parseBlock: y,
        markdownToReact: X,
        markdownToHtml: function (e, t) {
            return Q(W(e, t), t);
        },
        ReactMarkdown: J,
        defaultBlockParse: W,
        defaultInlineParse: K,
        defaultImplicitParse: z,
        defaultReactOutput: q,
        defaultHtmlOutput: Q,
        preprocess: i,
        sanitizeText: m,
        sanitizeUrl: _,
        unescapeUrl: E,
        htmlTag: d,
        reactElement: c,
        defaultRawParse: Y,
        ruleOutput: F,
        reactFor: V,
        htmlFor: j,
        defaultParse: function () {
            return 'undefined' != typeof console && console.warn('defaultParse is deprecated, please use `defaultImplicitParse`'), z.apply(null, arguments);
        },
        defaultOutput: function () {
            return 'undefined' != typeof console && console.warn('defaultOutput is deprecated, please use `defaultReactOutput`'), q.apply(null, arguments);
        }
    };
});
