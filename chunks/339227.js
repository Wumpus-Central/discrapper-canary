n.d(t, { Q: () => G }), n(388685), n(415506), n(35282), n(704826), n(539854), n(49124);
var r = n(512722),
    i = n.n(r),
    a = n(31775),
    o = n.n(a),
    s = n(477660),
    l = n(25209),
    c = n(710845),
    u = n(772096),
    d = n(428595),
    f = n(594199),
    _ = n(364458),
    p = n(70956),
    h = n(364964),
    m = n(40786),
    g = n(362092);
function E(e, t, n) {
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
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = new c.Z('MarkdownToSlate'),
    I = {
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
        mailto: {
            type: 'inlineStyle',
            before: '<',
            after: '>'
        },
        tel: {
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
    S = new Set(['*', '_', '\\']),
    T = {},
    A = {};
for (let e in d.Z.RULES) {
    if (!(e in I)) throw Error('Slate: Unknown markdown rule: '.concat(e, '.  If you have just added a new markdown rule ') + 'then you probably need to add it to this file so that the rich chat box understands it.');
    let t = I[e];
    'skip' !== t.type && (T[e] = N(d.Z.RULES[e])), 'skip' !== t.type && 'inlineObject' !== t.type && (A[e] = N('text' === e ? f.ZP : d.Z.RULES[e]));
}
function N(e) {
    i()(null != e.parse, 'Slate: rule must have a parse function');
    let t = e.parse;
    return v(b({}, e), {
        parse(e, n, r) {
            let i = t.call(this, e, n, r);
            return i instanceof Array || (i.originalMatch = e), i;
        }
    });
}
function C(e) {
    return {
        type: 'autolink',
        content: e[1],
        originalMatch: e
    };
}
let R = {
        url: {
            parse: (e) =>
                null == (0, u.yw)(e[1])
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
                null == (0, u.yw)(e[1])
                    ? {
                          type: 'text',
                          content: e[0],
                          originalMatch: e
                      }
                    : C(e)
        },
        mailto: { parse: C },
        tel: { parse: C },
        codeBlockSyntax: {
            order: s.defaultRules.inlineCode.order - 0.1,
            match: (e) => /^(```)([a-z0-9_+\-.#]+$)?/.exec(e),
            parse: (e) =>
                null != e[2] && '' !== e[2] && h.default.isKnownLanguage(e[2])
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
    P = /(-# +)/,
    w = (0, _.Z)([T, R]),
    D = (0, _.Z)([A, R]),
    L = l._p(w),
    x = l._p(D),
    M = {
        max: 1 / 0,
        maxAge: +p.Z.Millis.MINUTE,
        updateAgeOnGet: !0
    },
    k = new (o())(M),
    j = new (o())(M);
function U(e, t, n) {
    let r = [],
        i = {
            returnMentionIds: !0,
            disableAutoBlockNewlines: !0,
            guildId: t,
            isSlate: !0
        },
        a = n ? x : L,
        o = n ? j : k,
        s = o.get(e);
    if (null != s) return s;
    let l =
            e
                .replace(/\r\n/g, ' \n')
                .replace(/[\r\f]/g, ' ')
                .replace(/\t/g, ' ') + '\n\n',
        c = {
            originalMatch: {
                index: 0,
                0: ''
            },
            type: 'paragraph',
            content: a(l, !0, i)
        };
    F(r, l, c, 0, []);
    let u = B(r);
    return o.set(e, u), u;
}
function G(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = g.r(e);
    if ((i.push(e.length), 1 === i.length && n)) return [];
    let a = 0,
        o = n,
        s = [];
    for (let n of i) {
        if (o)
            s.push({
                text: e.substring(a, n),
                start: a,
                attributes: ['codeBlockText'],
                data: void 0
            });
        else {
            let o = n === i[i.length - 2] ? e.substring(n + 3) : '';
            n += 3 + (null != o.match(g.Q) ? o : '').length;
            let l = e.substring(a, n);
            '' !== l &&
                U(l, t, r).forEach((e) => {
                    s.push(v(b({}, e), { start: e.start + a }));
                });
        }
        (o = !o), (a = n);
    }
    return s;
}
function B(e) {
    if (0 === (e = e.filter((e) => e.text.length > 0)).length) return e;
    let t = [e[0]];
    for (let n = 1; n < e.length; n++) {
        let r = t[t.length - 1],
            i = r.start + r.text.length,
            a = e[n];
        a.start === i && null == r.data && null == a.data && r.attributes.join('-') === a.attributes.join('-') ? (r.text += a.text) : t.push(a);
    }
    return t;
}
function F(e, t, n, r, a) {
    let { content: o, type: s, originalMatch: l } = n;
    switch ((i()(null != l, 'Slate: originalMatch must be set ' + JSON.stringify(n, void 0, 2)), s)) {
        case 'newline':
        case 'br':
        case 'paragraph':
        case 'text':
        case 'emoticon':
            return Z(e, t, o || '', r, a);
        case 'emoji':
        case 'customEmoji': {
            let i = t.substring(r);
            if ((i.startsWith(l[0]) || ((r = z(e, t, r, t.length)), (i = t.substring(r))), i.startsWith(l[0])))
                return Y({
                    result: e,
                    sourceText: t,
                    text: l[0],
                    originalStart: r,
                    attributes: [s],
                    data: n
                });
            throw Error('Slate: Unable to find emoji: '.concat(l[0], ' in ').concat(t, ' at ').concat(r));
        }
        case 'soundboard':
            return Y({
                result: e,
                sourceText: t,
                text: l[0],
                originalStart: r,
                attributes: [s],
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
            let { text: a, id: o } = n;
            if (null != a)
                return (
                    i()(a === l[0], 'Slate: text mentions must exactly match the regex match'),
                    Y({
                        result: e,
                        sourceText: t,
                        text: a,
                        originalStart: r,
                        attributes: ['textMention'],
                        data: { text: a }
                    })
                );
            return Y({
                result: e,
                sourceText: t,
                text: l[0],
                originalStart: r,
                attributes: [s],
                data: { id: o }
            });
        }
        case 'staticRouteLink':
            let { id: c, itemId: u } = n;
            return Y({
                result: e,
                sourceText: t,
                text: l[0],
                originalStart: r,
                attributes: [s],
                data: {
                    id: c,
                    itemId: u
                }
            });
        case 'timestamp':
            if (m.Z.getCurrentConfig({ location: 'c70cbb_1' }, { autoTrackExposure: !1 }).enabled)
                return Y({
                    result: e,
                    sourceText: t,
                    text: l[0],
                    originalStart: r,
                    attributes: [s],
                    data: n
                });
            return Z(e, t, l[0], r, a);
        case 'em':
        case 'autolink':
        case 'mailto':
        case 'tel':
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
            r = W(t, r);
            let { before: n, after: i } = V(t, s, r, l);
            return (r = H(e, t, n, r, 'syntaxBefore')), a.push(s), (r = Z(e, t, null != o ? o : '', r, a)), a.pop(), (r = H(e, t, i, r, 'syntaxAfter')), W(t, r);
        }
        default:
            throw Error('Slate: Unknown rule type: '.concat(s));
    }
}
function V(e, t, n, r) {
    if ('inlineCode' === t)
        return {
            before: r[1],
            after: r[1]
        };
    if ('em' === t && '_' === e.substring(n, n + 1))
        return {
            before: '_',
            after: '_'
        };
    if ('subtext' === t)
        return {
            before: P.exec(r.input)[1],
            after: ''
        };
    let i = I['link' === t ? 'url' : t];
    if ('inlineStyle' === i.type) return i;
    throw Error('Slate: rule must be an inlineStyle');
}
function Z(e, t, n, r, i) {
    return (
        'string' == typeof n
            ? (r = Y({
                  result: e,
                  sourceText: t,
                  text: n,
                  originalStart: r,
                  attributes: i,
                  data: null
              }))
            : (n instanceof Array || (n = [n]),
              n.forEach((n) => {
                  r = F(e, t, n, r, i);
              })),
        W(t, r)
    );
}
function H(e, t, n, r, i) {
    if (n.length > 0) {
        let a = t.indexOf(n, r);
        if (-1 === a) return K('Slate: Unable to find syntax characters "'.concat(n, '" at position ').concat(r), n, r);
        let o = t.substring(r, a + n.length);
        e.push({
            text: o,
            attributes: [i],
            start: r,
            data: null
        }),
            (r = a + n.length);
    }
    return r;
}
function Y(e) {
    let { result: t, sourceText: n, text: r, originalStart: i, attributes: a, data: o } = e,
        s = W(n, i);
    for (; '\n' === r.charAt(0) || ' ' === r.charAt(0); ) r = r.substring(1);
    let l = n.indexOf(r, s);
    if ((l !== s ? (s = i = z(t, n, s, l)) : '\\' === r && '\\' === n.charAt(l + 1) && (l++, (i = ++s)), l !== s)) return K('Slate: Unable to find content in source text at start position '.concat(s, ' for text position ').concat(l), r, i);
    let c = s + r.length,
        u = n.substring(i, c);
    return (
        t.push({
            text: u,
            attributes: a.slice(),
            start: i,
            data: o
        }),
        c
    );
}
function W(e, t) {
    for (; '\n' === e.charAt(t) || ' ' === e.charAt(t); ) t++;
    return t;
}
function K(e, t, n) {
    if (t.split('').some((e) => S.has(e))) return O.error(e), n;
    throw Error(e);
}
function z(e, t, n, r) {
    for (; n < r; )
        if (S.has(t[n])) (n = H(e, t, t[n], n, 'syntaxBefore')), (n = W(t, n));
        else break;
    return n;
}
