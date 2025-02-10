n.d(t, { Z: () => J }), n(757143), n(653041), n(47120);
var i = n(392711),
    r = n.n(i),
    a = n(477660),
    s = n.n(a),
    o = n(927723),
    l = n(633302),
    u = n(11637),
    c = n(592125),
    d = n(430824),
    f = n(594174),
    _ = n(5192),
    p = n(51144),
    h = n(298552),
    m = n(444758),
    g = n(723454),
    E = n(772096),
    v = n(800927),
    y = n(143223),
    I = n(945884),
    T = n(594199),
    b = n(97734),
    S = n(303694),
    A = n(660199),
    N = n(364458),
    C = n(981631),
    R = n(689079),
    O = n(377668),
    D = n(388032);
let L = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
    x = /^$|\n *$/,
    P = /^ *>>> ?/,
    w = /^ *> ?/gm,
    M = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/;
function k(e) {
    let t = (0, E.yw)(e[1]);
    if (null == t)
        return {
            type: 'text',
            content: e[1]
        };
    let { displayTarget: n, target: i } = t;
    return {
        type: 'link',
        content: [
            {
                type: 'text',
                content: n
            }
        ],
        target: i,
        title: void 0
    };
}
let U = (e) => {
        let t = c.Z.getChannel(e);
        return null == t ? void 0 : t.getGuildId();
    },
    G = (e) => (null != e.guildId ? d.Z.getGuild(e.guildId) : null != e.channelId ? d.Z.getGuild(U(e.channelId)) : null),
    B = {
        newline: s().defaultRules.newline,
        paragraph: s().defaultRules.paragraph,
        escape: {
            ...s().defaultRules.escape,
            match: (e, t, n) => (!1 === t.allowEscape ? null : s().defaultRules.escape.match(e, t, n))
        },
        blockQuote: {
            ...s().defaultRules.blockQuote,
            requiredFirstCharacters: [' ', '>'],
            match(e, t) {
                let { prevCapture: n, inQuote: i, nested: r } = t;
                if (i || r) return null;
                if (null == n) return L.exec(e);
                let a = n[0];
                return x.test(a) ? L.exec(e) : null;
            },
            parse(e, t, n) {
                let i = e[0],
                    r = !!P.exec(i),
                    a = r ? P : w,
                    s = i.replace(a, ''),
                    o = n.inQuote || !1,
                    l = n.inline || !1;
                (n.inQuote = !0), r || (n.inline = !0);
                let u = t(s, n);
                return (
                    (n.inQuote = o),
                    (n.inline = l),
                    0 === u.length &&
                        u.push({
                            type: 'text',
                            content: ' '
                        }),
                    {
                        content: u,
                        type: 'blockQuote'
                    }
                );
            }
        },
        link: E.ZP,
        autolink: {
            ...s().defaultRules.autolink,
            parse: k
        },
        url: {
            ...s().defaultRules.url,
            requiredFirstCharacters: ['h', 's'],
            match(e, t) {
                if (!t.inline) return null;
                let n = M.exec(e);
                if (null != n) {
                    let e = 0,
                        t = n[0];
                    for (let n = t.length - 1; n >= 0 && ')' === t[n]; n--) {
                        let n = t.indexOf('(', e);
                        if (-1 === n) {
                            t = t.slice(0, t.length - 1);
                            break;
                        }
                        e = n + 1;
                    }
                    n[0] = n[1] = t;
                }
                return n;
            },
            parse: k
        },
        strong: s().defaultRules.strong,
        em: s().defaultRules.em,
        u: s().defaultRules.u,
        br: s().defaultRules.br,
        text: T.ZP,
        inlineCode: {
            ...s().defaultRules.inlineCode,
            parse(e, t, n) {
                let i = s().defaultRules.inlineCode.parse(e, t, n);
                return !0 === n.parseInlineCodeChildContent
                    ? {
                          ...i,
                          validationChildContent: t(i.content, n)
                      }
                    : i;
            }
        },
        emoticon: {
            order: T.ZP.order,
            requiredFirstCharacters: ['\xAF'],
            match: (e) => /^(¯\\_\(ツ\)_\/¯)/.exec(e),
            parse: (e) => ({
                type: 'text',
                content: e[1]
            })
        },
        codeBlock: {
            order: s().defaultRules.codeBlock.order,
            requiredFirstCharacters: ['`'],
            match: (e) => /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i.exec(e),
            parse(e, t, n) {
                var i, r;
                return {
                    lang: null !== (i = e[1]) && void 0 !== i ? i : '',
                    content: null !== (r = e[2]) && void 0 !== r ? r : '',
                    inQuote: n.inQuote || n.formatInline || !1
                };
            }
        },
        roleMention: {
            order: T.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => /^<@&(\d+)>/.exec(e),
            parse(e, t, n) {
                let [i, r] = e;
                if (n.returnMentionIds)
                    return {
                        type: 'roleMention',
                        id: r
                    };
                let a = G(n),
                    s = null != a ? d.Z.getRole(a.id, r) : null;
                return null == s
                    ? {
                          type: 'text',
                          content: '@'.concat(D.intl.string(D.t['YV4F/v']))
                      }
                    : {
                          type: 'mention',
                          channelId: n.channelId,
                          guildId: null != a ? a.id : null,
                          roleId: r,
                          roleColor: s.color,
                          roleName: '@'.concat(s.name),
                          color: s.color,
                          colorString: s.colorString,
                          content: [
                              {
                                  type: 'text',
                                  content: '@'.concat(s.name)
                              }
                          ]
                      };
            }
        },
        mention: {
            order: T.ZP.order,
            requiredFirstCharacters: ['<', '@'],
            match(e, t) {
                let n = /^<@!?(\d+)>|^(@(?:everyone|here|Clyde))/.exec(e);
                return null != n && ('@Clyde' !== n[0] || (0, o.gJ)(G(t), c.Z.getChannel(t.channelId))) ? n : null;
            },
            parse(e, t, n) {
                let i, r;
                if (n.returnMentionIds)
                    return null == e[1]
                        ? {
                              type: 'mention',
                              text: e[0]
                          }
                        : {
                              type: 'mention',
                              id: e[1]
                          };
                let a = f.default.getUser(e[1]),
                    s = c.Z.getChannel(n.channelId);
                if (null != a && ((r = a.id), (i = a.toString()), null != s)) {
                    var l;
                    i = null !== (l = _.ZP.getNickname(s.getGuildId(), n.channelId, a)) && void 0 !== l ? l : p.ZP.getName(a);
                }
                null == a && '@Clyde' === e[0] && (0, o.gJ)(G(n), s) && (r = O.fL);
                let u = e[1],
                    d = null != u && C.Xyh.test(u.trim()),
                    h = d && n.unknownUserMentionPlaceholder ? '@'.concat(D.intl.string(D.t.sKdZ6e)) : e[0];
                return {
                    userId: r,
                    channelId: n.channelId,
                    viewingChannelId: n.viewingChannelId,
                    guildId: null == s ? void 0 : s.getGuildId(),
                    parsedUserId: d ? u : null,
                    roleName: e[2],
                    content: [
                        {
                            type: 'text',
                            content: null != i ? '@'.concat(i) : h
                        }
                    ]
                };
            }
        },
        silentPrefix: {
            order: T.ZP.order,
            requiredFirstCharacters: ['@'],
            match: (e, t, n) => (null == n || '' === n ? /^(@silent(?![^\s]))/.exec(e) : null),
            parse: function (e) {
                return {
                    type: 'silentPrefix',
                    content: e[0]
                };
            }
        },
        channelMention: m.Z.channelMention,
        channelOrMessageUrl: m.Z.channelOrMessageUrl,
        mediaPostLink: m.Z.mediaPostLink,
        attachmentLink: h.Z.attachmentLink,
        shopLink: y.Z.shopLink,
        commandMention: {
            order: s().defaultRules.text.order,
            requiredFirstCharacters: ['<'],
            match: (e) => /^<\/((?:[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?):(\d+)>/u.exec(e),
            parse(e, t, n) {
                if (n.returnMentionIds)
                    return {
                        type: 'commandMention',
                        id: e[2]
                    };
                let [, ...i] = e[1].split(' '),
                    r = ''.concat(e[2]).concat([...i].map((e) => ''.concat(R.oQ).concat(e)).join(''));
                return {
                    channelId: n.channelId,
                    commandId: e[2],
                    commandName: e[1],
                    commandKey: r,
                    content: [
                        {
                            type: 'text',
                            content: ''.concat(e[1])
                        }
                    ]
                };
            }
        },
        emoji: {
            order: T.ZP.order,
            requiredFirstCharacters: [':'],
            match(e) {
                let t = l.ZP.EMOJI_NAME_RE.exec(e);
                return null != t && '' !== l.ZP.convertNameToSurrogate(t[1]) ? t : null;
            },
            parse(e) {
                let t = l.ZP.convertNameToSurrogate(e[1]);
                return {
                    type: 'text',
                    content: null == t || '' === t ? ':'.concat(e[1], ':') : t
                };
            }
        },
        soundboard: {
            order: T.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => u.hf.exec(e),
            parse: (e, t, n) => (0, u.ZP)(e, n)
        },
        customEmoji: {
            order: T.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => /^<a?:(\w+):(\d+)>/.exec(e),
            parse: (e) => ({
                type: 'text',
                content: ':'.concat(e[1], ':')
            })
        },
        timestamp: {
            order: T.ZP.order - 1,
            requiredFirstCharacters: ['<'],
            match: (e) => A.Ay.exec(e),
            parse(e) {
                let [t, n, i] = e,
                    r = (0, A.ZB)(n, i);
                return null == r
                    ? {
                          type: 'text',
                          content: t
                      }
                    : ((r.type = 'timestamp'), r);
            }
        },
        s: {
            order: s().defaultRules.u.order,
            requiredFirstCharacters: ['~'],
            match: s().inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
            parse: s().defaultRules.u.parse
        },
        spoiler: {
            order: T.ZP.order,
            requiredFirstCharacters: ['|'],
            match: (e) => C.$92.exec(e),
            parse: (e, t, n) => ({
                content: t(e[1], n),
                channelId: n.channelId
            })
        },
        staticRouteLink: {
            order: T.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => C.PEY.exec(e),
            parse(e, t, n) {
                var i;
                let [, r, a] = e,
                    s = (0, S.l)(r),
                    o = (0, S.W)(r, a, null === (i = G(n)) || void 0 === i ? void 0 : i.id);
                function l(e) {
                    return null == e
                        ? null
                        : [
                              {
                                  type: 'text',
                                  content: e
                              }
                          ];
                }
                return {
                    content: l(s + (null != o ? ' \u203A '.concat(o) : '')),
                    mainContent: l(s),
                    itemContent: l(o),
                    itemId: a,
                    id: r,
                    guildId: U(n.channelId),
                    channelId: r
                };
            }
        },
        heading: g.Z,
        list: v.Z,
        subtext: I.Z
    },
    Z = (0, N.Z)([B, b.Z]),
    F = r().omit(Z, ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'subtext', 'soundboard']),
    V = r().omit(Z, ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'autolink', 'url', 'attachmentLink', 'mention', 'roleMention', 'channelMention', 'channelOrMessageUrl', 'mediaPostLink', 'subtext', 'soundboard']),
    j = r().omit(Z, ['codeBlock', 'br', 'mention', 'channel', 'roleMention', 'attachmentLink', 'subtext', 'soundboard']),
    H = r().omit(
        (0, N.Z)([
            Z,
            {
                inlineCode: {
                    match(e, t, n) {
                        let i = Z.codeBlock.match(e, t, n);
                        if (null != i) return i;
                        let r = Z.inlineCode.match(e, t, n);
                        if (null != r) return r;
                    }
                }
            }
        ]),
        ['blockQuote', 'codeBlock', 'br']
    ),
    Y = r().omit(Z, ['codeBlock', 'br', 'blockQuote']),
    W = r().omit(Z, ['codeBlock', 'br', 'attachmentLink', 'mention', 'roleMention', 'channel', 'paragraph', 'newline', 'subtext', 'soundboard']),
    K = r().omit(Z, ['codeBlock', 'blockQuote', 'br']),
    z = r().omit(Z, ['codeBlock', 'br', 'inlineCode']);
function q(e, t) {
    return 0 === e.length || 0 === t || '' === e.charAt(t - 1).trim();
}
let Q = 10,
    X = (0, N.Z)([
        {
            highlightWord: {
                order: -1,
                match(e, t) {
                    if ((null != t.parseDepth && t.parseDepth > Q) || null == t.highlightWord || 0 === t.highlightWord.length) return null;
                    let n = e.indexOf(t.highlightWord);
                    if (-1 === n) return null;
                    let i = !q(e, n);
                    if (i)
                        do (n = e.indexOf(t.highlightWord, n + 1)), (i = !q(e, n));
                        while (i && -1 !== n);
                    if (-1 === n) return null;
                    let r = e.substring(0, n),
                        a = e.substring(n + t.highlightWord.length);
                    return [e, t.highlightWord, r, a];
                },
                parse(e, t, n) {
                    var i;
                    let r = null !== (i = n.parseDepth) && void 0 !== i ? i : 0,
                        a = {
                            ...n,
                            parseDepth: r + 1
                        },
                        s = t(e[2], a),
                        o = t(e[3], a);
                    return [
                        ...s,
                        {
                            type: 'highlight',
                            content: e[1]
                        },
                        ...o
                    ];
                }
            }
        },
        r().omit(Z, ['url'])
    ]),
    J = {
        RULES: Z,
        CHANNEL_TOPIC_RULES: F,
        VOICE_CHANNEL_STATUS_RULES: V,
        EMBED_TITLE_RULES: j,
        INLINE_REPLY_RULES: H,
        GUILD_VERIFICATION_FORM_RULES: Y,
        GUILD_EVENT_RULES: K,
        PROFILE_BIO_RULES: W,
        AUTO_MODERATION_SYSTEM_MESSAGE_RULES: X,
        NATIVE_SEARCH_RESULT_LINK_RULES: z
    };
