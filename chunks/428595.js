n.d(t, { Z: () => en }), n(301563), n(757143), n(653041), n(47120), n(566702), n(474991), n(398202);
var r = n(392711),
    i = n.n(r),
    o = n(477660),
    a = n.n(o),
    s = n(927723),
    l = n(633302),
    c = n(11637),
    u = n(592125),
    d = n(430824),
    f = n(594174),
    p = n(5192),
    _ = n(51144),
    h = n(298552),
    m = n(444758),
    g = n(723454),
    E = n(772096),
    v = n(800927),
    b = n(143223),
    y = n(945884),
    O = n(594199),
    S = n(97734),
    I = n(303694),
    T = n(660199),
    N = n(364458),
    A = n(981631),
    C = n(689079),
    R = n(377668),
    P = n(388032);
function w(e, t, n) {
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
function D(e) {
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
                w(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let M = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
    k = /^$|\n *$/,
    j = /^ *>>> ?/,
    U = /^ *> ?/gm,
    G = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/;
function B(e) {
    let t = (0, E.yw)(e[1]);
    if (null == t)
        return {
            type: 'text',
            content: e[1]
        };
    let { displayTarget: n, target: r } = t;
    return {
        type: 'link',
        content: [
            {
                type: 'text',
                content: n
            }
        ],
        target: r,
        title: void 0
    };
}
let Z = (e) => {
        let t = u.Z.getChannel(e);
        return null == t ? void 0 : t.getGuildId();
    },
    F = (e) => (null != e.guildId ? d.Z.getGuild(e.guildId) : null != e.channelId ? d.Z.getGuild(Z(e.channelId)) : null),
    V = {
        newline: a().defaultRules.newline,
        paragraph: a().defaultRules.paragraph,
        escape: L(D({}, a().defaultRules.escape), { match: (e, t, n) => (!1 === t.allowEscape ? null : a().defaultRules.escape.match(e, t, n)) }),
        blockQuote: L(D({}, a().defaultRules.blockQuote), {
            requiredFirstCharacters: [' ', '>'],
            match(e, t) {
                let { prevCapture: n, inQuote: r, nested: i } = t;
                if (r || i) return null;
                if (null == n) return M.exec(e);
                let o = n[0];
                return k.test(o) ? M.exec(e) : null;
            },
            parse(e, t, n) {
                let r = e[0],
                    i = !!j.exec(r),
                    o = i ? j : U,
                    a = r.replace(o, ''),
                    s = n.inQuote || !1,
                    l = n.inline || !1;
                (n.inQuote = !0), i || (n.inline = !0);
                let c = t(a, n);
                return (
                    (n.inQuote = s),
                    (n.inline = l),
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
        }),
        link: E.ZP,
        autolink: L(D({}, a().defaultRules.autolink), { parse: B }),
        url: L(D({}, a().defaultRules.url), {
            requiredFirstCharacters: ['h', 's'],
            match(e, t) {
                if (!t.inline) return null;
                let n = G.exec(e);
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
            parse: B
        }),
        strong: a().defaultRules.strong,
        em: a().defaultRules.em,
        u: a().defaultRules.u,
        br: a().defaultRules.br,
        text: O.ZP,
        inlineCode: L(D({}, a().defaultRules.inlineCode), {
            parse(e, t, n) {
                let r = a().defaultRules.inlineCode.parse(e, t, n);
                return !0 === n.parseInlineCodeChildContent ? L(D({}, r), { validationChildContent: t(r.content, n) }) : r;
            }
        }),
        emoticon: {
            order: O.ZP.order,
            requiredFirstCharacters: ['\xAF'],
            match: (e) => /^(¯\\_\(ツ\)_\/¯)/.exec(e),
            parse: (e) => ({
                type: 'text',
                content: e[1]
            })
        },
        codeBlock: {
            order: a().defaultRules.codeBlock.order,
            requiredFirstCharacters: ['`'],
            match: (e) => /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i.exec(e),
            parse(e, t, n) {
                var r, i;
                return {
                    lang: null !== (r = e[1]) && void 0 !== r ? r : '',
                    content: null !== (i = e[2]) && void 0 !== i ? i : '',
                    inQuote: n.inQuote || n.formatInline || !1
                };
            }
        },
        roleMention: {
            order: O.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => /^<@&(\d+)>/.exec(e),
            parse(e, t, n) {
                let [r, i] = e;
                if (n.returnMentionIds)
                    return {
                        type: 'roleMention',
                        id: i
                    };
                let o = F(n),
                    a = null != o ? d.Z.getRole(o.id, i) : null;
                return null == a
                    ? {
                          type: 'text',
                          content: '@'.concat(P.NW.string(P.t['YV4F/v']))
                      }
                    : {
                          type: 'mention',
                          channelId: n.channelId,
                          guildId: null != o ? o.id : null,
                          roleId: i,
                          roleColor: a.color,
                          roleName: '@'.concat(a.name),
                          color: a.color,
                          colorString: a.colorString,
                          content: [
                              {
                                  type: 'text',
                                  content: '@'.concat(a.name)
                              }
                          ]
                      };
            }
        },
        mention: {
            order: O.ZP.order,
            requiredFirstCharacters: ['<', '@'],
            match(e, t) {
                let n = /^<@!?(\d+)>|^(@(?:everyone|here|Clyde))/.exec(e);
                return null != n && ('@Clyde' !== n[0] || (0, s.gJ)(F(t), u.Z.getChannel(t.channelId))) ? n : null;
            },
            parse(e, t, n) {
                let r, i;
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
                let o = f.default.getUser(e[1]),
                    a = u.Z.getChannel(n.channelId);
                if (null != o && ((i = o.id), (r = o.toString()), null != a)) {
                    var l;
                    r = null !== (l = p.ZP.getNickname(a.getGuildId(), n.channelId, o)) && void 0 !== l ? l : _.ZP.getName(o);
                }
                null == o && '@Clyde' === e[0] && (0, s.gJ)(F(n), a) && (i = R.fL);
                let c = e[1],
                    d = null != c && A.Xyh.test(c.trim()),
                    h = d && n.unknownUserMentionPlaceholder ? '@'.concat(P.NW.string(P.t.sKdZ6e)) : e[0];
                return {
                    userId: i,
                    channelId: n.channelId,
                    viewingChannelId: n.viewingChannelId,
                    guildId: null == a ? void 0 : a.getGuildId(),
                    parsedUserId: d ? c : null,
                    roleName: e[2],
                    content: [
                        {
                            type: 'text',
                            content: null != r ? '@'.concat(r) : h
                        }
                    ]
                };
            }
        },
        silentPrefix: {
            order: O.ZP.order,
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
        shopLink: b.Z.shopLink,
        commandMention: {
            order: a().defaultRules.text.order,
            requiredFirstCharacters: ['<'],
            match: (e) => RegExp('^<\\/((?:[-_\\p{Letter}\\p{Number}\\p{sc=Deva}\\p{sc=Thai}]{1,32})(?: [-_\\p{Letter}\\p{Number}\\p{sc=Deva}\\p{sc=Thai}]{1,32})?(?: [-_\\p{Letter}\\p{Number}\\p{sc=Deva}\\p{sc=Thai}]{1,32})?):(\\d+)>', 'u').exec(e),
            parse(e, t, n) {
                if (n.returnMentionIds)
                    return {
                        type: 'commandMention',
                        id: e[2]
                    };
                let [, ...r] = e[1].split(' '),
                    i = ''.concat(e[2]).concat([...r].map((e) => ''.concat(C.oQ).concat(e)).join(''));
                return {
                    channelId: n.channelId,
                    commandId: e[2],
                    commandName: e[1],
                    commandKey: i,
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
            order: O.ZP.order,
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
            order: O.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => c.hf.exec(e),
            parse: (e, t, n) => (0, c.ZP)(e, n)
        },
        customEmoji: {
            order: O.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => /^<a?:(\w+):(\d+)>/.exec(e),
            parse: (e) => ({
                type: 'text',
                content: ':'.concat(e[1], ':')
            })
        },
        timestamp: {
            order: O.ZP.order - 1,
            requiredFirstCharacters: ['<'],
            match: (e) => T.Ay.exec(e),
            parse(e) {
                let [t, n, r] = e,
                    i = (0, T.ZB)(n, r);
                return null == i
                    ? {
                          type: 'text',
                          content: t
                      }
                    : ((i.type = 'timestamp'), i);
            }
        },
        s: {
            order: a().defaultRules.u.order,
            requiredFirstCharacters: ['~'],
            match: a().inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
            parse: a().defaultRules.u.parse
        },
        spoiler: {
            order: O.ZP.order,
            requiredFirstCharacters: ['|'],
            match: (e) => A.$92.exec(e),
            parse: (e, t, n) => ({
                content: t(e[1], n),
                channelId: n.channelId
            })
        },
        staticRouteLink: {
            order: O.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => A.PEY.exec(e),
            parse(e, t, n) {
                var r;
                let [, i, o] = e,
                    a = (0, I.l)(i),
                    s = (0, I.W)(i, o, null === (r = F(n)) || void 0 === r ? void 0 : r.id);
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
                    content: l(a + (null != s ? ' \u203A '.concat(s) : '')),
                    mainContent: l(a),
                    itemContent: l(s),
                    itemId: o,
                    id: i,
                    guildId: Z(n.channelId),
                    channelId: i
                };
            }
        },
        heading: g.Z,
        list: v.Z,
        subtext: y.Z
    },
    H = (0, N.Z)([V, S.Z]),
    W = i().omit(H, ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'subtext', 'soundboard']),
    Y = i().omit(H, ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'autolink', 'url', 'attachmentLink', 'mention', 'roleMention', 'channelMention', 'channelOrMessageUrl', 'mediaPostLink', 'subtext', 'soundboard']),
    K = i().omit(H, ['codeBlock', 'br', 'mention', 'channel', 'roleMention', 'attachmentLink', 'subtext', 'soundboard']),
    z = i().omit(
        (0, N.Z)([
            H,
            {
                inlineCode: {
                    match(e, t, n) {
                        let r = H.codeBlock.match(e, t, n);
                        if (null != r) return r;
                        let i = H.inlineCode.match(e, t, n);
                        if (null != i) return i;
                    }
                }
            }
        ]),
        ['blockQuote', 'codeBlock', 'br']
    ),
    q = i().omit(H, ['codeBlock', 'br', 'blockQuote']),
    Q = i().omit(H, ['codeBlock', 'br', 'attachmentLink', 'mention', 'roleMention', 'channel', 'paragraph', 'newline', 'subtext', 'soundboard']),
    X = i().omit(H, ['codeBlock', 'blockQuote', 'br']),
    J = i().omit(H, ['codeBlock', 'br', 'inlineCode']);
function $(e, t) {
    return 0 === e.length || 0 === t || '' === e.charAt(t - 1).trim();
}
let ee = 10,
    et = (0, N.Z)([
        {
            highlightWord: {
                order: -1,
                match(e, t) {
                    if ((null != t.parseDepth && t.parseDepth > ee) || null == t.highlightWord || 0 === t.highlightWord.length) return null;
                    let n = e.indexOf(t.highlightWord);
                    if (-1 === n) return null;
                    let r = !$(e, n);
                    if (r)
                        do (n = e.indexOf(t.highlightWord, n + 1)), (r = !$(e, n));
                        while (r && -1 !== n);
                    if (-1 === n) return null;
                    let i = e.substring(0, n),
                        o = e.substring(n + t.highlightWord.length);
                    return [e, t.highlightWord, i, o];
                },
                parse(e, t, n) {
                    var r;
                    let i = null !== (r = n.parseDepth) && void 0 !== r ? r : 0,
                        o = L(D({}, n), { parseDepth: i + 1 }),
                        a = t(e[2], o),
                        s = t(e[3], o);
                    return [
                        ...a,
                        {
                            type: 'highlight',
                            content: e[1]
                        },
                        ...s
                    ];
                }
            }
        },
        i().omit(H, ['url'])
    ]),
    en = {
        RULES: H,
        CHANNEL_TOPIC_RULES: W,
        VOICE_CHANNEL_STATUS_RULES: Y,
        EMBED_TITLE_RULES: K,
        INLINE_REPLY_RULES: z,
        GUILD_VERIFICATION_FORM_RULES: q,
        GUILD_EVENT_RULES: X,
        PROFILE_BIO_RULES: Q,
        AUTO_MODERATION_SYSTEM_MESSAGE_RULES: et,
        NATIVE_SEARCH_RESULT_LINK_RULES: J
    };
