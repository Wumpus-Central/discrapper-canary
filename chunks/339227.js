r.d(n, {
    Q: function () {
        return U;
    }
});
var i = r(47120);
var a = r(411104);
var o = r(757143);
var s = r(653041);
var l = r(512722),
    u = r.n(l),
    c = r(31775),
    d = r.n(c),
    f = r(477660);
var p = r(25209),
    h = r(710845),
    _ = r(772096),
    m = r(428595),
    g = r(594199),
    E = r(364458),
    v = r(70956),
    y = r(40786),
    b = r(362092);
let I = {
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
    T = new Set(['*', '_', '\\']),
    S = {},
    A = {};
for (let e in m.Z.RULES) {
    if (!(e in I)) throw Error('Slate: Unknown markdown rule: '.concat(e, '.  If you have just added a new markdown rule ') + 'then you probably need to add it to this file so that the rich chat box understands it.');
    let n = I[e];
    'skip' !== n.type && (S[e] = C(m.Z.RULES[e])), 'skip' !== n.type && 'inlineObject' !== n.type && (A[e] = C('text' === e ? g.ZP : m.Z.RULES[e]));
}
function C(e) {
    u()(null != e.parse, 'Slate: rule must have a parse function');
    let n = e.parse;
    return {
        ...e,
        parse(e, r, i) {
            let a = n.call(this, e, r, i);
            return !(a instanceof Array) && (a.originalMatch = e), a;
        }
    };
}
let N = {
        url: {
            parse: (e) =>
                null == (0, _.yw)(e[1])
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
                null == (0, _.yw)(e[1])
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
            order: f.defaultRules.inlineCode.order - 0.1,
            match: (e) => /^(```)([a-z0-9_+\-.#]+$)?/.exec(e),
            parse: (e) =>
                null != e[2] && '' !== e[2] && b.i6(e[2])
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
    R = /(-# +)/,
    O = (0, E.Z)([S, N]),
    D = (0, E.Z)([A, N]),
    x = p._p(O),
    L = p._p(D),
    w = {
        max: 1 / 0,
        maxAge: 1 * v.Z.Millis.MINUTE,
        updateAgeOnGet: !0
    },
    P = new (d())(w),
    M = new (d())(w);
function k(e, n, r) {
    let i = [],
        a = {
            returnMentionIds: !0,
            disableAutoBlockNewlines: !0,
            guildId: n
        },
        o = r ? L : x,
        s = r ? M : P,
        l = s.get(e);
    if (null != l) return l;
    let u =
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
            content: o(u, !0, a)
        };
    G(i, u, c, 0, []);
    let d = B(i);
    return s.set(e, d), d;
}
function U(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = b.rN(e);
    if ((a.push(e.length), 1 === a.length && r)) return [];
    let o = 0,
        s = r,
        l = [];
    for (let r of a) {
        if (s)
            l.push({
                text: e.substring(o, r),
                start: o,
                attributes: ['codeBlockText'],
                data: void 0
            });
        else {
            let s = r === a[a.length - 2] ? e.substring(r + 3) : '';
            r += 3 + (null != s.match(b.Q2) ? s : '').length;
            let u = e.substring(o, r);
            '' !== u &&
                k(u, n, i).forEach((e) => {
                    l.push({
                        ...e,
                        start: e.start + o
                    });
                });
        }
        (s = !s), (o = r);
    }
    return l;
}
function B(e) {
    if (0 === (e = e.filter((e) => e.text.length > 0)).length) return e;
    let n = [e[0]];
    for (let r = 1; r < e.length; r++) {
        let i = n[n.length - 1],
            a = i.start + i.text.length,
            o = e[r];
        o.start === a && null == i.data && null == o.data && i.attributes.join('-') === o.attributes.join('-') ? (i.text += o.text) : n.push(o);
    }
    return n;
}
function G(e, n, r, i, a) {
    let { content: o, type: s, originalMatch: l } = r;
    switch ((u()(null != l, 'Slate: originalMatch must be set ' + JSON.stringify(r, void 0, 2)), s)) {
        case 'newline':
        case 'br':
        case 'paragraph':
        case 'text':
        case 'emoticon':
            return F(e, n, o || '', i, a);
        case 'emoji':
        case 'customEmoji': {
            let a = n.substring(i);
            if ((!a.startsWith(l[0]) && ((i = Y(e, n, i, n.length)), (a = n.substring(i))), a.startsWith(l[0])))
                return j({
                    result: e,
                    sourceText: n,
                    text: l[0],
                    originalStart: i,
                    attributes: [s],
                    data: r
                });
            throw Error('Slate: Unable to find emoji: '.concat(l[0], ' in ').concat(n, ' at ').concat(i));
        }
        case 'soundboard':
            return j({
                result: e,
                sourceText: n,
                text: l[0],
                originalStart: i,
                attributes: [s],
                data: {
                    guildId: r.guildId,
                    soundId: r.soundId
                }
            });
        case 'mention':
        case 'roleMention':
        case 'channelMention':
        case 'commandMention':
        case 'silentPrefix':
        case 'channel': {
            let { text: a, id: o } = r;
            if (null != a)
                return (
                    u()(a === l[0], 'Slate: text mentions must exactly match the regex match'),
                    j({
                        result: e,
                        sourceText: n,
                        text: a,
                        originalStart: i,
                        attributes: ['textMention'],
                        data: { text: a }
                    })
                );
            return j({
                result: e,
                sourceText: n,
                text: l[0],
                originalStart: i,
                attributes: [s],
                data: { id: o }
            });
        }
        case 'staticRouteLink':
            let { id: c, itemId: d } = r;
            return j({
                result: e,
                sourceText: n,
                text: l[0],
                originalStart: i,
                attributes: [s],
                data: {
                    id: c,
                    itemId: d
                }
            });
        case 'timestamp':
            if (y.Z.getCurrentConfig({ location: 'c70cbb_1' }, { autoTrackExposure: !1 }).enabled)
                return j({
                    result: e,
                    sourceText: n,
                    text: l[0],
                    originalStart: i,
                    attributes: [s],
                    data: r
                });
            return F(e, n, l[0], i, a);
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
            i = H(n, i);
            let { before: r, after: u } = Z(n, s, i, l);
            return (i = V(e, n, r, i, 'syntaxBefore')), a.push(s), (i = F(e, n, null != o ? o : '', i, a)), a.pop(), (i = V(e, n, u, i, 'syntaxAfter')), H(n, i);
        }
        default:
            throw Error('Slate: Unknown rule type: '.concat(s));
    }
}
function Z(e, n, r, i) {
    if ('inlineCode' === n)
        return {
            before: i[1],
            after: i[1]
        };
    if ('em' === n && '_' === e.substring(r, r + 1))
        return {
            before: '_',
            after: '_'
        };
    if ('subtext' === n)
        return {
            before: R.exec(i.input)[1],
            after: ''
        };
    let a = I['link' === n ? 'url' : n];
    if ('inlineStyle' === a.type) return a;
    throw Error('Slate: rule must be an inlineStyle');
}
function F(e, n, r, i, a) {
    return (
        'string' == typeof r
            ? (i = j({
                  result: e,
                  sourceText: n,
                  text: r,
                  originalStart: i,
                  attributes: a,
                  data: null
              }))
            : (!(r instanceof Array) && (r = [r]),
              r.forEach((r) => {
                  i = G(e, n, r, i, a);
              })),
        H(n, i)
    );
}
function V(e, n, r, i, a) {
    if (r.length > 0) {
        let o = n.indexOf(r, i),
            s = n.substring(i, o + r.length);
        u()(o >= 0, 'Slate: Unable to find syntax characters'),
            e.push({
                text: s,
                attributes: [a],
                start: i,
                data: null
            }),
            (i = o + r.length);
    }
    return i;
}
function j(e) {
    let { result: n, sourceText: r, text: i, originalStart: a, attributes: o, data: s } = e,
        l = H(r, a);
    for (; '\n' === i.charAt(0) || ' ' === i.charAt(0); ) i = i.substring(1);
    let u = r.indexOf(i, l);
    if ((u !== l ? (l = a = Y(n, r, l, u)) : '\\' === i && '\\' === r.charAt(u + 1) && (u++, (a = ++l)), u !== l))
        throw (
            (new h.Z('MarkdownToSlate').error(
                JSON.stringify({
                    sourceText: r,
                    searchText: i,
                    searchStartsAt: r.substring(l),
                    startPos: l
                })
            ),
            Error('Slate: Unable to find content in source text!'))
        );
    let c = l + i.length,
        d = r.substring(a, c);
    return (
        n.push({
            text: d,
            attributes: o.slice(),
            start: a,
            data: s
        }),
        c
    );
}
function H(e, n) {
    for (; '\n' === e.charAt(n) || ' ' === e.charAt(n); ) n++;
    return n;
}
function Y(e, n, r, i) {
    for (; r < i; )
        if (T.has(n[r])) (r = V(e, n, n[r], r, 'syntaxBefore')), (r = H(n, r));
        else break;
    return r;
}
