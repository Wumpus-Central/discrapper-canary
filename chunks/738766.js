function r(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            }));
    }
    return e;
}
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var o,
    a = n(359282),
    s = n(879154),
    l = n(214788),
    c = n(687655),
    u = n(493428),
    d = n(946572),
    f = n(606166),
    _ = n(551558),
    p = n(982716),
    h = n(223138),
    m = n(65183),
    g = m.List,
    E = m.Map,
    b = m.OrderedSet,
    y = n(797187),
    O = n(318720),
    v = n(217492),
    I = n(570508),
    T = h('draft_tree_data_support'),
    S = '&nbsp;',
    A = ' ',
    N = RegExp('\r', 'g'),
    C = RegExp('\n', 'g'),
    R = RegExp('^\n', 'g'),
    P = RegExp(S, 'g'),
    w = RegExp('&#13;?', 'g'),
    D = RegExp('&#8203;?', 'g'),
    L = ['bold', 'bolder', '500', '600', '700', '800', '900'],
    x = ['light', 'lighter', 'normal', '100', '200', '300', '400'],
    M = ['className', 'href', 'rel', 'target', 'title'],
    k = ['alt', 'className', 'height', 'src', 'width'],
    j = (i((o = {}), f('public/DraftStyleDefault/depth0'), 0), i(o, f('public/DraftStyleDefault/depth1'), 1), i(o, f('public/DraftStyleDefault/depth2'), 2), i(o, f('public/DraftStyleDefault/depth3'), 3), i(o, f('public/DraftStyleDefault/depth4'), 4), o),
    U = E({
        b: 'BOLD',
        code: 'CODE',
        del: 'STRIKETHROUGH',
        em: 'ITALIC',
        i: 'ITALIC',
        s: 'STRIKETHROUGH',
        strike: 'STRIKETHROUGH',
        strong: 'BOLD',
        u: 'UNDERLINE',
        mark: 'HIGHLIGHT'
    }),
    G = function (e) {
        var t = {};
        return (
            e.mapKeys(function (e, n) {
                var r = [n.element];
                (void 0 !== n.aliasedElements && r.push.apply(r, n.aliasedElements),
                    r.forEach(function (n) {
                        void 0 === t[n] ? (t[n] = e) : 'string' == typeof t[n] ? (t[n] = [t[n], e]) : t[n].push(e);
                    }));
            }),
            E(t)
        );
    },
    B = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (
            Object.keys(j).some(function (n) {
                e.classList.contains(n) && (t = j[n]);
            }),
            t
        );
    },
    Z = function (e) {
        if (!y(e)) return !1;
        var t = e;
        return !!(t.href && ('http:' === t.protocol || 'https:' === t.protocol || 'mailto:' === t.protocol));
    },
    F = function (e) {
        if (!I(e)) return !1;
        var t = e;
        return !!(t.attributes.getNamedItem('src') && t.attributes.getNamedItem('src').value);
    },
    V = function (e, t) {
        if (!v(e)) return t;
        var n = e,
            r = n.style.fontWeight,
            i = n.style.fontStyle,
            o = n.style.textDecoration;
        return t.withMutations(function (e) {
            (L.indexOf(r) >= 0 ? e.add('BOLD') : x.indexOf(r) >= 0 && e.remove('BOLD'), 'italic' === i ? e.add('ITALIC') : 'normal' === i && e.remove('ITALIC'), 'underline' === o && e.add('UNDERLINE'), 'line-through' === o && e.add('STRIKETHROUGH'), 'none' === o && (e.remove('UNDERLINE'), e.remove('STRIKETHROUGH')));
        });
    },
    H = function (e) {
        return 'ul' === e || 'ol' === e;
    },
    Y = (function () {
        function e(e, t) {
            (i(this, 'characterList', g()), i(this, 'currentBlockType', 'unstyled'), i(this, 'currentDepth', 0), i(this, 'currentEntity', null), i(this, 'currentText', ''), i(this, 'wrapper', null), i(this, 'blockConfigs', []), i(this, 'contentBlocks', []), i(this, 'entityMap', u), i(this, 'blockTypeMap', void 0), i(this, 'disambiguate', void 0), this.clear(), (this.blockTypeMap = e), (this.disambiguate = t));
        }
        var t = e.prototype;
        return (
            (t.clear = function () {
                ((this.characterList = g()), (this.blockConfigs = []), (this.currentBlockType = 'unstyled'), (this.currentDepth = 0), (this.currentEntity = null), (this.currentText = ''), (this.entityMap = u), (this.wrapper = null), (this.contentBlocks = []));
            }),
            (t.addDOMNode = function (e) {
                var t;
                return ((this.contentBlocks = []), (this.currentDepth = 0), (t = this.blockConfigs).push.apply(t, this._toBlockConfigs([e], b())), this._trimCurrentText(), '' !== this.currentText && this.blockConfigs.push(this._makeBlockConfig()), this);
            }),
            (t.getContentBlocks = function () {
                return (
                    0 === this.contentBlocks.length && (T ? this._toContentBlocks(this.blockConfigs) : this._toFlatContentBlocks(this.blockConfigs)),
                    {
                        contentBlocks: this.contentBlocks,
                        entityMap: this.entityMap
                    }
                );
            }),
            (t._makeBlockConfig = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = r(
                        {
                            key: e.key || _(),
                            type: this.currentBlockType,
                            text: this.currentText,
                            characterList: this.characterList,
                            depth: this.currentDepth,
                            parent: null,
                            children: g(),
                            prevSibling: null,
                            nextSibling: null,
                            childConfigs: []
                        },
                        e
                    );
                return ((this.characterList = g()), (this.currentBlockType = 'unstyled'), (this.currentText = ''), t);
            }),
            (t._toBlockConfigs = function (e, t) {
                for (var n = [], r = 0; r < e.length; r++) {
                    var i = e[r],
                        o = i.nodeName.toLowerCase();
                    if ('body' === o || H(o)) {
                        (this._trimCurrentText(), '' !== this.currentText && n.push(this._makeBlockConfig()));
                        var a = this.currentDepth,
                            s = this.wrapper;
                        (H(o) && ((this.wrapper = o), H(s) && this.currentDepth++), n.push.apply(n, this._toBlockConfigs(Array.from(i.childNodes), t)), (this.currentDepth = a), (this.wrapper = s));
                        continue;
                    }
                    var l = this.blockTypeMap.get(o);
                    if (void 0 !== l) {
                        (this._trimCurrentText(), '' !== this.currentText && n.push(this._makeBlockConfig()));
                        var c = this.currentDepth,
                            u = this.wrapper;
                        if (((this.wrapper = 'pre' === o ? 'pre' : this.wrapper), 'string' != typeof l && (l = this.disambiguate(o, this.wrapper) || l[0] || 'unstyled'), !T && v(i) && ('unordered-list-item' === l || 'ordered-list-item' === l))) {
                            var d = i;
                            this.currentDepth = B(d, this.currentDepth);
                        }
                        var f = _(),
                            p = this._toBlockConfigs(Array.from(i.childNodes), t);
                        (this._trimCurrentText(),
                            n.push(
                                this._makeBlockConfig({
                                    key: f,
                                    childConfigs: p,
                                    type: l
                                })
                            ),
                            (this.currentDepth = c),
                            (this.wrapper = u));
                        continue;
                    }
                    if ('#text' === o) {
                        this._addTextNode(i, t);
                        continue;
                    }
                    if ('br' === o) {
                        this._addBreakNode(i, t);
                        continue;
                    }
                    if (F(i)) {
                        this._addImgNode(i, t);
                        continue;
                    }
                    if (Z(i)) {
                        this._addAnchorNode(i, n, t);
                        continue;
                    }
                    var h = t;
                    (U.has(o) && (h = h.add(U.get(o))), (h = V(i, h)), n.push.apply(n, this._toBlockConfigs(Array.from(i.childNodes), h)));
                }
                return n;
            }),
            (t._appendText = function (e, t) {
                this.currentText += e;
                var n,
                    r = a.create({
                        style: t,
                        entity: this.currentEntity
                    });
                this.characterList = (n = this.characterList).push.apply(n, Array(e.length).fill(r));
            }),
            (t._trimCurrentText = function () {
                var e = this.currentText.length,
                    t = e - this.currentText.trimLeft().length,
                    n = this.currentText.trimRight().length,
                    r = this.characterList.findEntry(function (e) {
                        return null !== e.getEntity();
                    });
                (t = void 0 !== r ? Math.min(t, r[0]) : t) >
                (n =
                    void 0 !==
                    (r = this.characterList.reverse().findEntry(function (e) {
                        return null !== e.getEntity();
                    }))
                        ? Math.max(n, e - r[0])
                        : n)
                    ? ((this.currentText = ''), (this.characterList = g()))
                    : ((this.currentText = this.currentText.slice(t, n)), (this.characterList = this.characterList.slice(t, n)));
            }),
            (t._addTextNode = function (e, t) {
                var n = e.textContent;
                ('' === n.trim() && 'pre' !== this.wrapper && (n = ' '), 'pre' !== this.wrapper && (n = (n = n.replace(R, '')).replace(C, A)), this._appendText(n, t));
            }),
            (t._addBreakNode = function (e, t) {
                O(e) && this._appendText('\n', t);
            }),
            (t._addImgNode = function (e, t) {
                if (I(e)) {
                    var n = e,
                        r = {};
                    (k.forEach(function (e) {
                        var t = n.getAttribute(e);
                        t && (r[e] = t);
                    }),
                        (this.currentEntity = this.entityMap.__create('IMAGE', 'IMMUTABLE', r)),
                        h('draftjs_fix_paste_for_img') ? 'presentation' !== n.getAttribute('role') && this._appendText('\uD83D\uDCF7', t) : this._appendText('\uD83D\uDCF7', t),
                        (this.currentEntity = null));
                }
            }),
            (t._addAnchorNode = function (e, t, n) {
                if (y(e)) {
                    var r = e,
                        i = {};
                    (M.forEach(function (e) {
                        var t = r.getAttribute(e);
                        t && (i[e] = t);
                    }),
                        (i.url = new d(r.href).toString()),
                        (this.currentEntity = this.entityMap.__create('LINK', 'MUTABLE', i || {})),
                        t.push.apply(t, this._toBlockConfigs(Array.from(e.childNodes), n)),
                        (this.currentEntity = null));
                }
            }),
            (t._toContentBlocks = function (e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = e.length - 1, i = 0; i <= n; i++) {
                    var o = e[i];
                    ((o.parent = t),
                        (o.prevSibling = i > 0 ? e[i - 1].key : null),
                        (o.nextSibling = i < n ? e[i + 1].key : null),
                        (o.children = g(
                            o.childConfigs.map(function (e) {
                                return e.key;
                            })
                        )),
                        this.contentBlocks.push(new l(r({}, o))),
                        this._toContentBlocks(o.childConfigs, o.key));
                }
            }),
            (t._hoistContainersInBlockConfigs = function (e) {
                var t = this;
                return g(e).flatMap(function (e) {
                    return 'unstyled' !== e.type || '' !== e.text ? [e] : t._hoistContainersInBlockConfigs(e.childConfigs);
                });
            }),
            (t._toFlatContentBlocks = function (e) {
                var t = this;
                this._hoistContainersInBlockConfigs(e).forEach(function (e) {
                    var n = t._extractTextFromBlockConfigs(e.childConfigs),
                        i = n.text,
                        o = n.characterList;
                    t.contentBlocks.push(
                        new s(
                            r({}, e, {
                                text: e.text + i,
                                characterList: e.characterList.concat(o)
                            })
                        )
                    );
                });
            }),
            (t._extractTextFromBlockConfigs = function (e) {
                for (var t = e.length - 1, n = '', r = g(), i = 0; i <= t; i++) {
                    var o = e[i];
                    ((n += o.text), (r = r.concat(o.characterList)), '' !== n && 'unstyled' !== o.type && ((n += '\n'), (r = r.push(r.last()))));
                    var a = this._extractTextFromBlockConfigs(o.childConfigs);
                    ((n += a.text), (r = r.concat(a.characterList)));
                }
                return {
                    text: n,
                    characterList: r
                };
            }),
            e
        );
    })();
e.exports = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c,
        r = t((e = e.trim().replace(N, '').replace(P, A).replace(w, '').replace(D, '')));
    return r
        ? new Y(G(n), function (e, t) {
              return 'li' === e ? ('ol' === t ? 'ordered-list-item' : 'unordered-list-item') : null;
          })
              .addDOMNode(r)
              .getContentBlocks()
        : null;
};
