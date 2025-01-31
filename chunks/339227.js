n.d(t, { Q: () => L }), n(47120), n(411104), n(757143), n(653041);
var i = n(512722),
    r = n.n(i),
    a = n(31775),
    s = n.n(a),
    o = n(477660),
    l = n(25209),
    u = n(710845),
    c = n(772096),
    d = n(428595),
    f = n(594199),
    _ = n(364458),
    p = n(70956),
    h = n(40786),
    m = n(362092);
let g = {
        link: { type: 'skip' },
        highlight: { type: 'skip' },
        blockQuote: { type: 'skip' },
        codeBlock: { type: 'skip' },
        list: { type: 'skip' },
        heading: { type: 'skip' },
        channelOrMessageUrl: { type: 'skip' },
        mediaPostLink: { type: 'skip' },
        attachmentLink: { type: 'skip' },
        shopLink: { type: 'skip' },
        newline: { type: 'verbatim' },
        br: { type: 'verbatim' },
        paragraph: { type: 'verbatim' },
        text: { type: 'verbatim' },
        emoticon: { type: 'verbatim' },
        mention: { type: 'inlineObject' },
        roleMention: { type: 'inlineObject' },
        commandMention: { type: 'inlineObject' },
        channelMention: { type: 'inlineObject' },
        silentPrefix: {
            type: 'inlineStyle',
            before: '@silent',
            after: ' '
        },
        emoji: { type: 'inlineObject' },
        customEmoji: { type: 'inlineObject' },
        looseEm: {
            type: 'inlineStyle',
            before: '*',
            after: ' *'
        },
        autolink: {
            type: 'inlineStyle',
            before: '<',
            after: '>'
        },
        strong: {
            type: 'inlineStyle',
            before: '**',
            after: '**'
        },
        u: {
            type: 'inlineStyle',
            before: '__',
            after: '__'
        },
        s: {
            type: 'inlineStyle',
            before: '~~',
            after: '~~'
        },
        escape: {
            type: 'inlineStyle',
            before: '\\',
            after: ''
        },
        staticRouteLink: {
            type: 'inlineStyle',
            before: '<id:',
            after: '>'
        },
        soundboard: {
            type: 'inlineStyle',
            before: '<sound:',
            after: '>'
        },
        spoiler: {
            type: 'inlineStyle',
            before: '||',
            after: '||'
        },
        url: {
            type: 'inlineStyle',
            before: '',
            after: ''
        },
        codeBlockText: {
            type: 'inlineStyle',
            before: '',
            after: ''
        },
        codeBlockSyntax: {
            type: 'inlineStyle',
            before: '',
            after: ''
        },
        codeBlockLang: {
            type: 'inlineStyle',
            before: '',
            after: ''
        },
        timestamp: { type: 'inlineObject' },
        em: {
            type: 'inlineStyle',
            before: '*',
            after: '*'
        },
        inlineCode: {
            type: 'inlineStyle',
            before: '`',
            after: '`'
        },
        subtext: {
            type: 'inlineStyle',
            before: '-# ',
            after: ''
        }
    },
    E = new Set(['*', '_', '\\']),
    v = {},
    y = {};
for (let e in d.Z.RULES) {
    if (!(e in g)) throw Error('Slate: Unknown markdown rule: '.concat(e, '.  If you have just added a new markdown rule ') + 'then you probably need to add it to this file so that the rich chat box understands it.');
    let t = g[e];
    'skip' !== t.type && (v[e] = I(d.Z.RULES[e])), 'skip' !== t.type && 'inlineObject' !== t.type && (y[e] = I('text' === e ? f.ZP : d.Z.RULES[e]));
}
function I(e) {
    r()(null != e.parse, 'Slate: rule must have a parse function');
    let t = e.parse;
    return {
        ...e,
        parse(e, n, i) {
            let r = t.call(this, e, n, i);
            return r instanceof Array || (r.originalMatch = e), r;
        }
    };
}
let b = {
        url: {
            parse: (e) =>
                null == (0, c.yw)(e[1])
                    ? {
                          type: 'text',
                          content: e[0],
                          originalMatch: e
                      }
                    : {
                          type: 'link',
                          content: e[1],
                          originalMatch: e
                      }
        },
        autolink: {
            parse: (e) =>
                null == (0, c.yw)(e[1])
                    ? {
                          type: 'text',
                          content: e[0],
                          originalMatch: e
                      }
                    : {
                          type: 'autolink',
                          content: e[1],
                          originalMatch: e
                      }
        },
        codeBlockSyntax: {
            order: o.defaultRules.inlineCode.order - 0.1,
            match: (e) => /^(```)([a-z0-9_+\-.#]+$)?/.exec(e),
            parse: (e) =>
                null != e[2] && '' !== e[2] && m.i6(e[2])
                    ? [
                          {
                              type: 'codeBlockSyntax',
                              content: e[1],
                              originalMatch: e
                          },
                          {
                              type: 'codeBlockLang',
                              content: e[2],
                              originalMatch: e
                          }
                      ]
                    : {
                          type: 'codeBlockSyntax',
                          content: e[0],
                          originalMatch: e
                      }
        }
    },
    T = /(-# +)/,
    S = (0, _.Z)([v, b]),
    A = (0, _.Z)([y, b]),
    N = l._p(S),
    C = l._p(A),
    R = {
        max: 1 / 0,
        maxAge: 1 * p.Z.Millis.MINUTE,
        updateAgeOnGet: !0
    },
    O = new (s())(R),
    D = new (s())(R);
function x(e, t, n) {
    let i = [],
        r = {
            returnMentionIds: !0,
            disableAutoBlockNewlines: !0,
            guildId: t
        },
        a = n ? C : N,
        s = n ? D : O,
        o = s.get(e);
    if (null != o) return o;
    let l =
            e
                .replace(/\r\n/g, ' \n')
                .replace(/[\r\f]/g, ' ')
                .replace(/\t/g, ' ') + '\n\n',
        u = {
            originalMatch: {
                index: 0,
                0: ''
            },
            type: 'paragraph',
            content: a(l, !0, r)
        };
    w(i, l, u, 0, []);
    let c = P(i);
    return s.set(e, c), c;
}
function L(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = m.rN(e);
    if ((r.push(e.length), 1 === r.length && n)) return [];
    let a = 0,
        s = n,
        o = [];
    for (let n of r) {
        if (s)
            o.push({
                text: e.substring(a, n),
                start: a,
                attributes: ['codeBlockText'],
                data: void 0
            });
        else {
            let s = n === r[r.length - 2] ? e.substring(n + 3) : '';
            n += 3 + (null != s.match(m.Q2) ? s : '').length;
            let l = e.substring(a, n);
            '' !== l &&
                x(l, t, i).forEach((e) => {
                    o.push({
                        ...e,
                        start: e.start + a
                    });
                });
        }
        (s = !s), (a = n);
    }
    return o;
}
function P(e) {
    if (0 === (e = e.filter((e) => e.text.length > 0)).length) return e;
    let t = [e[0]];
    for (let n = 1; n < e.length; n++) {
        let i = t[t.length - 1],
            r = i.start + i.text.length,
            a = e[n];
        a.start === r && null == i.data && null == a.data && i.attributes.join('-') === a.attributes.join('-') ? (i.text += a.text) : t.push(a);
    }
    return t;
}
function w(e, t, n, i, a) {
    let { content: s, type: o, originalMatch: l } = n;
    switch ((r()(null != l, 'Slate: originalMatch must be set ' + JSON.stringify(n, void 0, 2)), o)) {
        case 'newline':
        case 'br':
        case 'paragraph':
        case 'text':
        case 'emoticon':
            return k(e, t, s || '', i, a);
        case 'emoji':
        case 'customEmoji': {
            let r = t.substring(i);
            if ((r.startsWith(l[0]) || ((i = Z(e, t, i, t.length)), (r = t.substring(i))), r.startsWith(l[0])))
                return G({
                    result: e,
                    sourceText: t,
                    text: l[0],
                    originalStart: i,
                    attributes: [o],
                    data: n
                });
            throw Error('Slate: Unable to find emoji: '.concat(l[0], ' in ').concat(t, ' at ').concat(i));
        }
        case 'soundboard':
            return G({
                result: e,
                sourceText: t,
                text: l[0],
                originalStart: i,
                attributes: [o],
                data: {
                    guildId: n.guildId,
                    soundId: n.soundId
                }
            });
        case 'mention':
        case 'roleMention':
        case 'channelMention':
        case 'commandMention':
        case 'silentPrefix':
        case 'channel': {
            let { text: a, id: s } = n;
            if (null != a)
                return (
                    r()(a === l[0], 'Slate: text mentions must exactly match the regex match'),
                    G({
                        result: e,
                        sourceText: t,
                        text: a,
                        originalStart: i,
                        attributes: ['textMention'],
                        data: { text: a }
                    })
                );
            return G({
                result: e,
                sourceText: t,
                text: l[0],
                originalStart: i,
                attributes: [o],
                data: { id: s }
            });
        }
        case 'staticRouteLink':
            let { id: u, itemId: c } = n;
            return G({
                result: e,
                sourceText: t,
                text: l[0],
                originalStart: i,
                attributes: [o],
                data: {
                    id: u,
                    itemId: c
                }
            });
        case 'timestamp':
            if (h.Z.getCurrentConfig({ location: 'c70cbb_1' }, { autoTrackExposure: !1 }).enabled)
                return G({
                    result: e,
                    sourceText: t,
                    text: l[0],
                    originalStart: i,
                    attributes: [o],
                    data: n
                });
            return k(e, t, l[0], i, a);
        case 'em':
        case 'autolink':
        case 'strong':
        case 'u':
        case 's':
        case 'escape':
        case 'inlineCode':
        case 'codeBlockSyntax':
        case 'codeBlockLang':
        case 'spoiler':
        case 'url':
        case 'link':
        case 'subtext': {
            i = B(t, i);
            let { before: n, after: r } = M(t, o, i, l);
            return (i = U(e, t, n, i, 'syntaxBefore')), a.push(o), (i = k(e, t, null != s ? s : '', i, a)), a.pop(), (i = U(e, t, r, i, 'syntaxAfter')), B(t, i);
        }
        default:
            throw Error('Slate: Unknown rule type: '.concat(o));
    }
}
function M(e, t, n, i) {
    if ('inlineCode' === t)
        return {
            before: i[1],
            after: i[1]
        };
    if ('em' === t && '_' === e.substring(n, n + 1))
        return {
            before: '_',
            after: '_'
        };
    if ('subtext' === t)
        return {
            before: T.exec(i.input)[1],
            after: ''
        };
    let r = g['link' === t ? 'url' : t];
    if ('inlineStyle' === r.type) return r;
    throw Error('Slate: rule must be an inlineStyle');
}
function k(e, t, n, i, r) {
    return (
        'string' == typeof n
            ? (i = G({
                  result: e,
                  sourceText: t,
                  text: n,
                  originalStart: i,
                  attributes: r,
                  data: null
              }))
            : (n instanceof Array || (n = [n]),
              n.forEach((n) => {
                  i = w(e, t, n, i, r);
              })),
        B(t, i)
    );
}
function U(e, t, n, i, a) {
    if (n.length > 0) {
        let s = t.indexOf(n, i),
            o = t.substring(i, s + n.length);
        r()(s >= 0, 'Slate: Unable to find syntax characters'),
            e.push({
                text: o,
                attributes: [a],
                start: i,
                data: null
            }),
            (i = s + n.length);
    }
    return i;
}
function G(e) {
    let { result: t, sourceText: n, text: i, originalStart: r, attributes: a, data: s } = e,
        o = B(n, r);
    for (; '\n' === i.charAt(0) || ' ' === i.charAt(0); ) i = i.substring(1);
    let l = n.indexOf(i, o);
    if ((l !== o ? (o = r = Z(t, n, o, l)) : '\\' === i && '\\' === n.charAt(l + 1) && (l++, (r = ++o)), l !== o))
        throw (
            (new u.Z('MarkdownToSlate').error(
                JSON.stringify({
                    sourceText: n,
                    searchText: i,
                    searchStartsAt: n.substring(o),
                    startPos: o
                })
            ),
            Error('Slate: Unable to find content in source text!'))
        );
    let c = o + i.length,
        d = n.substring(r, c);
    return (
        t.push({
            text: d,
            attributes: a.slice(),
            start: r,
            data: s
        }),
        c
    );
}
function B(e, t) {
    for (; '\n' === e.charAt(t) || ' ' === e.charAt(t); ) t++;
    return t;
}
function Z(e, t, n, i) {
    for (; n < i; )
        if (E.has(t[n])) (n = U(e, t, t[n], n, 'syntaxBefore')), (n = B(t, n));
        else break;
    return n;
}
