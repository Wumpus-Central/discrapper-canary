var i = r(757143);
var a = r(653041);
var o = r(47120);
var s = r(392711),
    l = r.n(s),
    u = r(477660),
    c = r.n(u),
    d = r(927723),
    f = r(633302),
    p = r(11637),
    h = r(592125),
    _ = r(430824),
    m = r(594174),
    g = r(5192),
    E = r(51144),
    v = r(298552),
    y = r(444758),
    b = r(723454),
    I = r(772096),
    T = r(800927),
    S = r(143223),
    A = r(945884),
    C = r(594199),
    N = r(97734),
    R = r(303694),
    O = r(660199),
    D = r(364458),
    L = r(981631),
    x = r(689079),
    w = r(377668),
    P = r(388032);
let M = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
    k = /^$|\n *$/,
    U = /^ *>>> ?/,
    B = /^ *> ?/gm,
    G = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/;
function Z(e) {
    let n = (0, I.yw)(e[1]);
    if (null == n)
        return {
            type: 'text',
            content: e[1]
        };
    let { displayTarget: r, target: i } = n;
    return {
        type: 'link',
        content: [
            {
                type: 'text',
                content: r
            }
        ],
        target: i,
        title: void 0
    };
}
let F = (e) => {
        let n = h.Z.getChannel(e);
        return null == n ? void 0 : n.getGuildId();
    },
    V = (e) => (null != e.guildId ? _.Z.getGuild(e.guildId) : null != e.channelId ? _.Z.getGuild(F(e.channelId)) : null),
    j = {
        newline: c().defaultRules.newline,
        paragraph: c().defaultRules.paragraph,
        escape: {
            ...c().defaultRules.escape,
            match: (e, n, r) => (!1 === n.allowEscape ? null : c().defaultRules.escape.match(e, n, r))
        },
        blockQuote: {
            ...c().defaultRules.blockQuote,
            requiredFirstCharacters: [' ', '>'],
            match(e, n) {
                let { prevCapture: r, inQuote: i, nested: a } = n;
                if (i || a) return null;
                if (null == r) return M.exec(e);
                let o = r[0];
                return k.test(o) ? M.exec(e) : null;
            },
            parse(e, n, r) {
                let i = e[0],
                    a = !!U.exec(i),
                    o = a ? U : B,
                    s = i.replace(o, ''),
                    l = r.inQuote || !1,
                    u = r.inline || !1;
                (r.inQuote = !0), !a && (r.inline = !0);
                let c = n(s, r);
                return (
                    (r.inQuote = l),
                    (r.inline = u),
                    0 === c.length &&
                        c.push({
                            type: 'text',
                            content: ' '
                        }),
                    {
                        content: c,
                        type: 'blockQuote'
                    }
                );
            }
        },
        link: I.ZP,
        autolink: {
            ...c().defaultRules.autolink,
            parse: Z
        },
        url: {
            ...c().defaultRules.url,
            requiredFirstCharacters: ['h', 's'],
            match(e, n) {
                if (!n.inline) return null;
                let r = G.exec(e);
                if (null != r) {
                    let e = 0,
                        n = r[0];
                    for (let r = n.length - 1; r >= 0 && ')' === n[r]; r--) {
                        let r = n.indexOf('(', e);
                        if (-1 === r) {
                            n = n.slice(0, n.length - 1);
                            break;
                        }
                        e = r + 1;
                    }
                    r[0] = r[1] = n;
                }
                return r;
            },
            parse: Z
        },
        strong: c().defaultRules.strong,
        em: c().defaultRules.em,
        u: c().defaultRules.u,
        br: c().defaultRules.br,
        text: C.ZP,
        inlineCode: {
            ...c().defaultRules.inlineCode,
            parse(e, n, r) {
                let i = c().defaultRules.inlineCode.parse(e, n, r);
                return !0 === r.parseInlineCodeChildContent
                    ? {
                          ...i,
                          validationChildContent: n(i.content, r)
                      }
                    : i;
            }
        },
        emoticon: {
            order: C.ZP.order,
            requiredFirstCharacters: ['\xAF'],
            match: (e) => /^(¯\\_\(ツ\)_\/¯)/.exec(e),
            parse: (e) => ({
                type: 'text',
                content: e[1]
            })
        },
        codeBlock: {
            order: c().defaultRules.codeBlock.order,
            requiredFirstCharacters: ['`'],
            match: (e) => /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i.exec(e),
            parse(e, n, r) {
                var i, a;
                return {
                    lang: null !== (i = e[1]) && void 0 !== i ? i : '',
                    content: null !== (a = e[2]) && void 0 !== a ? a : '',
                    inQuote: r.inQuote || r.formatInline || !1
                };
            }
        },
        roleMention: {
            order: C.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => /^<@&(\d+)>/.exec(e),
            parse(e, n, r) {
                let [i, a] = e;
                if (r.returnMentionIds)
                    return {
                        type: 'roleMention',
                        id: a
                    };
                let o = V(r),
                    s = null != o ? _.Z.getRole(o.id, a) : null;
                return null == s
                    ? {
                          type: 'text',
                          content: '@'.concat(P.intl.string(P.t['YV4F/v']))
                      }
                    : {
                          type: 'mention',
                          channelId: r.channelId,
                          guildId: null != o ? o.id : null,
                          roleId: a,
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
            order: C.ZP.order,
            requiredFirstCharacters: ['<', '@'],
            match(e, n) {
                let r = /^<@!?(\d+)>|^(@(?:everyone|here|Clyde))/.exec(e);
                return null != r && ('@Clyde' !== r[0] || (0, d.gJ)(V(n), h.Z.getChannel(n.channelId))) ? r : null;
            },
            parse(e, n, r) {
                let i, a;
                if (r.returnMentionIds)
                    return null == e[1]
                        ? {
                              type: 'mention',
                              text: e[0]
                          }
                        : {
                              type: 'mention',
                              id: e[1]
                          };
                let o = m.default.getUser(e[1]),
                    s = h.Z.getChannel(r.channelId);
                if (null != o && ((a = o.id), (i = o.toString()), null != s)) {
                    var l;
                    i = null !== (l = g.ZP.getNickname(s.getGuildId(), r.channelId, o)) && void 0 !== l ? l : E.ZP.getName(o);
                }
                null == o && '@Clyde' === e[0] && (0, d.gJ)(V(r), s) && (a = w.fL);
                let u = e[1],
                    c = null != u && L.Xyh.test(u.trim()),
                    f = c && r.unknownUserMentionPlaceholder ? '@'.concat(P.intl.string(P.t.sKdZ6e)) : e[0];
                return {
                    userId: a,
                    channelId: r.channelId,
                    viewingChannelId: r.viewingChannelId,
                    guildId: null == s ? void 0 : s.getGuildId(),
                    parsedUserId: c ? u : null,
                    roleName: e[2],
                    content: [
                        {
                            type: 'text',
                            content: null != i ? '@'.concat(i) : f
                        }
                    ]
                };
            }
        },
        silentPrefix: {
            order: C.ZP.order,
            requiredFirstCharacters: ['@'],
            match: (e, n, r) => (null == r || '' === r ? /^(@silent(?![^\s]))/.exec(e) : null),
            parse: function (e) {
                return {
                    type: 'silentPrefix',
                    content: e[0]
                };
            }
        },
        channelMention: y.Z.channelMention,
        channelOrMessageUrl: y.Z.channelOrMessageUrl,
        mediaPostLink: y.Z.mediaPostLink,
        attachmentLink: v.Z.attachmentLink,
        shopLink: S.Z.shopLink,
        commandMention: {
            order: c().defaultRules.text.order,
            requiredFirstCharacters: ['<'],
            match: (e) => /^<\/((?:[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?):(\d+)>/u.exec(e),
            parse(e, n, r) {
                if (r.returnMentionIds)
                    return {
                        type: 'commandMention',
                        id: e[2]
                    };
                let [, ...i] = e[1].split(' '),
                    a = ''.concat(e[2]).concat([...i].map((e) => ''.concat(x.oQ).concat(e)).join(''));
                return {
                    channelId: r.channelId,
                    commandId: e[2],
                    commandName: e[1],
                    commandKey: a,
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
            order: C.ZP.order,
            requiredFirstCharacters: [':'],
            match(e) {
                let n = f.ZP.EMOJI_NAME_RE.exec(e);
                return null != n && '' !== f.ZP.convertNameToSurrogate(n[1]) ? n : null;
            },
            parse(e) {
                let n = f.ZP.convertNameToSurrogate(e[1]);
                return {
                    type: 'text',
                    content: null == n || '' === n ? ':'.concat(e[1], ':') : n
                };
            }
        },
        soundboard: {
            order: C.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => p.hf.exec(e),
            parse: (e, n, r) => (0, p.ZP)(e, r)
        },
        customEmoji: {
            order: C.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => /^<a?:(\w+):(\d+)>/.exec(e),
            parse: (e) => ({
                type: 'text',
                content: ':'.concat(e[1], ':')
            })
        },
        timestamp: {
            order: C.ZP.order - 1,
            requiredFirstCharacters: ['<'],
            match: (e) => O.Ay.exec(e),
            parse(e) {
                let [n, r, i] = e,
                    a = (0, O.ZB)(r, i);
                return null == a
                    ? {
                          type: 'text',
                          content: n
                      }
                    : ((a.type = 'timestamp'), a);
            }
        },
        s: {
            order: c().defaultRules.u.order,
            requiredFirstCharacters: ['~'],
            match: c().inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
            parse: c().defaultRules.u.parse
        },
        spoiler: {
            order: C.ZP.order,
            requiredFirstCharacters: ['|'],
            match: (e) => L.$92.exec(e),
            parse: (e, n, r) => ({
                content: n(e[1], r),
                channelId: r.channelId
            })
        },
        staticRouteLink: {
            order: C.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => L.PEY.exec(e),
            parse(e, n, r) {
                var i;
                let [, a, o] = e,
                    s = (0, R.l)(a),
                    l = (0, R.W)(a, o, null === (i = V(r)) || void 0 === i ? void 0 : i.id);
                function u(e) {
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
                    content: u(s + (null != l ? ' \u203A '.concat(l) : '')),
                    mainContent: u(s),
                    itemContent: u(l),
                    itemId: o,
                    id: a,
                    guildId: F(r.channelId),
                    channelId: a
                };
            }
        },
        heading: b.Z,
        list: T.Z,
        subtext: A.Z
    },
    H = (0, D.Z)([j, N.Z]),
    Y = l().omit(H, ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'subtext', 'soundboard']),
    W = l().omit(H, ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'autolink', 'url', 'attachmentLink', 'mention', 'roleMention', 'channelMention', 'channelOrMessageUrl', 'mediaPostLink', 'subtext', 'soundboard']),
    K = l().omit(H, ['codeBlock', 'br', 'mention', 'channel', 'roleMention', 'attachmentLink', 'subtext', 'soundboard']),
    z = l().omit(
        (0, D.Z)([
            H,
            {
                inlineCode: {
                    match(e, n, r) {
                        let i = H.codeBlock.match(e, n, r);
                        if (null != i) return i;
                        let a = H.inlineCode.match(e, n, r);
                        if (null != a) return a;
                    }
                }
            }
        ]),
        ['blockQuote', 'codeBlock', 'br']
    ),
    q = l().omit(H, ['codeBlock', 'br', 'blockQuote']),
    Q = l().omit(H, ['codeBlock', 'br', 'attachmentLink', 'mention', 'roleMention', 'channel', 'paragraph', 'newline', 'subtext', 'soundboard']),
    X = l().omit(H, ['codeBlock', 'blockQuote', 'br']),
    J = l().omit(H, ['codeBlock', 'br', 'inlineCode']);
function $(e, n) {
    return 0 === e.length || 0 === n || '' === e.charAt(n - 1).trim();
}
let ee = 10,
    et = (0, D.Z)([
        {
            highlightWord: {
                order: -1,
                match(e, n) {
                    if ((null != n.parseDepth && n.parseDepth > ee) || null == n.highlightWord || 0 === n.highlightWord.length) return null;
                    let r = e.indexOf(n.highlightWord);
                    if (-1 === r) return null;
                    let i = !$(e, r);
                    if (i)
                        do (r = e.indexOf(n.highlightWord, r + 1)), (i = !$(e, r));
                        while (i && -1 !== r);
                    if (-1 === r) return null;
                    let a = e.substring(0, r),
                        o = e.substring(r + n.highlightWord.length);
                    return [e, n.highlightWord, a, o];
                },
                parse(e, n, r) {
                    var i;
                    let a = null !== (i = r.parseDepth) && void 0 !== i ? i : 0,
                        o = {
                            ...r,
                            parseDepth: a + 1
                        },
                        s = n(e[2], o),
                        l = n(e[3], o);
                    return [
                        ...s,
                        {
                            type: 'highlight',
                            content: e[1]
                        },
                        ...l
                    ];
                }
            }
        },
        l().omit(H, ['url'])
    ]);
n.Z = {
    RULES: H,
    CHANNEL_TOPIC_RULES: Y,
    VOICE_CHANNEL_STATUS_RULES: W,
    EMBED_TITLE_RULES: K,
    INLINE_REPLY_RULES: z,
    GUILD_VERIFICATION_FORM_RULES: q,
    GUILD_EVENT_RULES: X,
    PROFILE_BIO_RULES: Q,
    AUTO_MODERATION_SYSTEM_MESSAGE_RULES: et,
    NATIVE_SEARCH_RESULT_LINK_RULES: J
};
