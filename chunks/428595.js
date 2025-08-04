(n.d(t, { Z: () => ea }), n(35282), n(704826), n(539854), n(804061), n(388685), n(781311), n(413496), n(433524));
var r = n(392711),
    i = n.n(r),
    a = n(159635),
    o = n.n(a),
    s = n(633302),
    l = n(606318),
    c = n(402235),
    u = n(11637),
    d = n(592125),
    f = n(77498),
    _ = n(485386),
    p = n(430824),
    h = n(594174),
    m = n(768581),
    g = n(5192),
    E = n(51144),
    b = n(298552),
    y = n(444758),
    O = n(723454),
    v = n(772096),
    I = n(800927),
    T = n(143223),
    S = n(945884),
    A = n(594199),
    N = n(97734),
    C = n(303694),
    R = n(660199),
    P = n(364458),
    w = n(981631),
    D = n(689079),
    L = n(388032);
function x(e, t, n) {
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
function k(e) {
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
                x(e, t, n[t]);
            }));
    }
    return e;
}
function M(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let U = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
    G = /^$|\n *$/,
    B = /^ *>>> ?/,
    V = /^ *> ?/gm,
    F = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/;
function Z(e) {
    let t = (0, v.yw)(e[1]);
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
let H = (e) => {
        let t = d.Z.getChannel(e);
        return null == t ? void 0 : t.getGuildId();
    },
    Y = (e) => (null != e.guildId ? p.Z.getGuild(e.guildId) : null != e.channelId ? p.Z.getGuild(H(e.channelId)) : null),
    W = {
        newline: o().defaultRules.newline,
        paragraph: o().defaultRules.paragraph,
        escape: j(k({}, o().defaultRules.escape), { match: (e, t, n) => (!1 === t.allowEscape ? null : o().defaultRules.escape.match(e, t, n)) }),
        blockQuote: j(k({}, o().defaultRules.blockQuote), {
            requiredFirstCharacters: [' ', '>'],
            match(e, t) {
                let { prevCapture: n, inQuote: r, nested: i } = t;
                if (r || i) return null;
                if (null == n) return U.exec(e);
                let a = n[0];
                return G.test(a) ? U.exec(e) : null;
            },
            parse(e, t, n) {
                let r = e[0],
                    i = !!B.exec(r),
                    a = i ? B : V,
                    o = r.replace(a, ''),
                    s = n.inQuote || !1,
                    l = n.inline || !1;
                ((n.inQuote = !0), i || (n.inline = !0));
                let c = t(o, n);
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
        link: v.ZP,
        autolink: j(k({}, o().defaultRules.autolink), { parse: Z }),
        mailto: j(k({}, o().defaultRules.mailto), {
            match: o().inlineRegex(/^<([^\s<>@]+@[^\s<>@]+\.[^\s<>@]+)>/),
            requiredFirstCharacters: ['<']
        }),
        tel: j(k({}, o().defaultRules.mailto), {
            requiredFirstCharacters: ['<'],
            match: o().inlineRegex(/^<((?:(?:tel|sms):\+?|\+)(?:(?:[0-9]|\([0-9]+\)))(?:[- .\/]?(?:[0-9]|\([0-9]+\)))+)>/),
            parse(e) {
                let t = e[1],
                    n = e[1].replaceAll(/[ \/]+/g, '-');
                return (
                    n.startsWith('tel:') || n.startsWith('sms:') || (n = 'tel:' + n),
                    {
                        type: 'link',
                        content: [
                            {
                                type: 'text',
                                content: t
                            }
                        ],
                        target: n
                    }
                );
            }
        }),
        url: j(k({}, o().defaultRules.url), {
            requiredFirstCharacters: ['h', 's'],
            match(e, t) {
                if (!t.inline) return null;
                let n = F.exec(e);
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
            parse: Z
        }),
        strong: o().defaultRules.strong,
        em: o().defaultRules.em,
        u: o().defaultRules.u,
        br: o().defaultRules.br,
        text: A.ZP,
        inlineCode: j(k({}, o().defaultRules.inlineCode), {
            parse(e, t, n) {
                let r = o().defaultRules.inlineCode.parse(e, t, n);
                return !0 === n.parseInlineCodeChildContent ? j(k({}, r), { validationChildContent: t(r.content, n) }) : r;
            }
        }),
        emoticon: {
            order: A.ZP.order,
            requiredFirstCharacters: ['\xAF'],
            match: (e) => /^(¯\\_\(ツ\)_\/¯)/.exec(e),
            parse: (e) => ({
                type: 'text',
                content: e[1]
            })
        },
        codeBlock: {
            order: o().defaultRules.codeBlock.order,
            requiredFirstCharacters: ['`'],
            match: (e) => /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i.exec(e),
            parse(e, t, n) {
                var r, i;
                return {
                    lang: null != (r = e[1]) ? r : '',
                    content: null != (i = e[2]) ? i : '',
                    inQuote: n.inQuote || n.formatInline || !1
                };
            }
        },
        roleMention: {
            order: A.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => /^<@&(\d+)>/.exec(e),
            parse(e, t, n) {
                var r, i, a;
                let [o, s] = e;
                if (n.returnMentionIds)
                    return {
                        type: 'roleMention',
                        id: s
                    };
                let u = Y(n),
                    d = null != u ? _.Z.getRole(u.id, s) : null;
                if (null == d)
                    return {
                        type: 'text',
                        content: '@'.concat(L.intl.string(L.t['YV4F/v']))
                    };
                let f = (0, c.zI)(null == u ? void 0 : u.id, d) && !(0, l.Gr)(d);
                return {
                    type: 'mention',
                    channelId: n.channelId,
                    guildId: null != u ? u.id : null,
                    roleId: s,
                    roleColor: d.color,
                    roleColors: f
                        ? {
                              primaryColor: null == (r = d.colors) ? void 0 : r.primary_color,
                              secondaryColor: null == (i = d.colors) ? void 0 : i.secondary_color,
                              tertiaryColor: null == (a = d.colors) ? void 0 : a.tertiary_color
                          }
                        : null,
                    roleName: '@'.concat(d.name),
                    color: d.color,
                    colorString: d.colorString,
                    content: [
                        {
                            type: 'text',
                            content: '@'.concat(d.name)
                        }
                    ]
                };
            }
        },
        mention: {
            order: A.ZP.order,
            requiredFirstCharacters: ['<', '@'],
            match(e) {
                let t = /^<@!?(\d+)>|^(@(?:everyone|here))/.exec(e);
                return null == t ? null : t;
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
                let a = h.default.getUser(e[1]),
                    o = d.Z.getChannel(n.channelId);
                if (null != a && ((i = a.id), (r = a.toString()), null != o)) {
                    var s;
                    r = null != (s = g.ZP.getNickname(o.getGuildId(), n.channelId, a)) ? s : E.ZP.getName(a);
                }
                let l = e[1],
                    c = null != l && w.Xyh.test(l.trim()),
                    u = c && n.unknownUserMentionPlaceholder ? '@'.concat(L.intl.string(L.t.sKdZ6e)) : e[0];
                return {
                    userId: i,
                    channelId: n.channelId,
                    viewingChannelId: n.viewingChannelId,
                    guildId: null == o ? void 0 : o.getGuildId(),
                    parsedUserId: c ? l : null,
                    roleName: e[2],
                    content: [
                        {
                            type: 'text',
                            content: null != r ? '@'.concat(r) : u
                        }
                    ]
                };
            }
        },
        silentPrefix: {
            order: A.ZP.order,
            requiredFirstCharacters: ['@'],
            match: (e, t, n) => (null == n || '' === n ? /^(@silent(?![^\s]))/.exec(e) : null),
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
        attachmentLink: b.Z.attachmentLink,
        shopLink: T.Z.shopLink,
        commandMention: {
            order: o().defaultRules.text.order,
            requiredFirstCharacters: ['<'],
            match: (e) => RegExp('^<\\/((?:[-_\\p{Letter}\\p{Number}\\p{sc=Deva}\\p{sc=Thai}]{1,32})(?: [-_\\p{Letter}\\p{Number}\\p{sc=Deva}\\p{sc=Thai}]{1,32})?(?: [-_\\p{Letter}\\p{Number}\\p{sc=Deva}\\p{sc=Thai}]{1,32})?):(\\d+)>', 'u').exec(e),
            parse(e, t, n) {
                if (n.returnMentionIds)
                    return {
                        type: 'commandMention',
                        id: e[2]
                    };
                let [, ...r] = e[1].split(' '),
                    i = ''.concat(e[2]).concat([...r].map((e) => ''.concat(D.oQ).concat(e)).join(''));
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
        gameMention: {
            order: o().defaultRules.text.order,
            requiredFirstCharacters: ['<', '@', '$'],
            match: (e, t) => (t.allowGameMentions ? /^<@\$(\d+)>/.exec(e) : null),
            parse(e, t, n) {
                var r;
                let i = f.Z.getDetectableGame(e[1]);
                return {
                    type: 'gameMention',
                    applicationId: e[1],
                    channelId: n.channelId,
                    content: [
                        {
                            type: 'text',
                            content: ''.concat(null != (r = null == i ? void 0 : i.name) ? r : L.intl.string(L.t['11pdXV']))
                        }
                    ],
                    icon:
                        null != i && null != i.icon
                            ? m.ZP.getApplicationIconURL({
                                  id: i.id,
                                  icon: i.icon,
                                  size: 32
                              })
                            : void 0
                };
            }
        },
        emoji: {
            order: A.ZP.order,
            requiredFirstCharacters: [':'],
            match(e) {
                let t = s.ZP.EMOJI_NAME_RE.exec(e);
                return null != t && '' !== s.ZP.convertNameToSurrogate(t[1]) ? t : null;
            },
            parse(e) {
                let t = s.ZP.convertNameToSurrogate(e[1]);
                return {
                    type: 'text',
                    content: null == t || '' === t ? ':'.concat(e[1], ':') : t
                };
            }
        },
        soundboard: {
            order: A.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => u.hf.exec(e),
            parse: (e, t, n) => (0, u.ZP)(e, n)
        },
        customEmoji: {
            order: A.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => /^<a?:(\w+):(\d+)>/.exec(e),
            parse: (e) => ({
                type: 'text',
                content: ':'.concat(e[1], ':')
            })
        },
        timestamp: {
            order: A.ZP.order - 1,
            requiredFirstCharacters: ['<'],
            match: (e) => R.Ay.exec(e),
            parse(e) {
                let [t, n, r] = e,
                    i = (0, R.ZB)(n, r);
                return null == i
                    ? {
                          type: 'text',
                          content: t
                      }
                    : ((i.type = 'timestamp'), i);
            }
        },
        s: {
            order: o().defaultRules.u.order,
            requiredFirstCharacters: ['~'],
            match: o().inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
            parse: o().defaultRules.u.parse
        },
        spoiler: {
            order: A.ZP.order,
            requiredFirstCharacters: ['|'],
            match: (e) => w.$92.exec(e),
            parse: (e, t, n) => ({
                content: t(e[1], n),
                channelId: n.channelId
            })
        },
        staticRouteLink: {
            order: A.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => w.PEY.exec(e),
            parse(e, t, n) {
                var r;
                let [, i, a] = e,
                    o = (0, C.l)(i),
                    s = (0, C.W)(i, a, null == (r = Y(n)) ? void 0 : r.id);
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
                    content: l(o + (null != s ? ' \u203A '.concat(s) : '')),
                    mainContent: l(o),
                    itemContent: l(s),
                    itemId: a,
                    id: i,
                    guildId: H(n.channelId),
                    channelId: i
                };
            }
        },
        heading: O.Z,
        list: I.Z,
        subtext: S.Z
    },
    K = (0, P.Z)([W, N.Z]),
    z = i().omit(K, ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'subtext', 'soundboard']),
    q = i().omit(K, ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'autolink', 'url', 'attachmentLink', 'mention', 'roleMention', 'channelMention', 'channelOrMessageUrl', 'mediaPostLink', 'subtext', 'soundboard', 'gameMention']),
    X = i().omit(K, ['codeBlock', 'br', 'mention', 'channel', 'roleMention', 'attachmentLink', 'subtext', 'soundboard', 'gameMention']),
    Q = i().omit(
        (0, P.Z)([
            K,
            {
                inlineCode: {
                    match(e, t, n) {
                        let r = K.codeBlock.match(e, t, n);
                        if (null != r) return r;
                        let i = K.inlineCode.match(e, t, n);
                        if (null != i) return i;
                    }
                }
            }
        ]),
        ['blockQuote', 'codeBlock', 'br']
    ),
    J = i().omit(K, ['codeBlock', 'br', 'blockQuote']),
    $ = i().omit(K, ['codeBlock', 'br', 'attachmentLink', 'mention', 'roleMention', 'channel', 'paragraph', 'newline', 'subtext', 'soundboard']),
    ee = i().omit(K, ['codeBlock', 'blockQuote', 'br']),
    et = i().omit(K, ['codeBlock', 'br', 'inlineCode']);
function en(e, t) {
    return 0 === e.length || 0 === t || '' === e.charAt(t - 1).trim();
}
let er = 10,
    ei = (0, P.Z)([
        {
            highlightWord: {
                order: -1,
                match(e, t) {
                    if ((null != t.parseDepth && t.parseDepth > er) || null == t.highlightWord || 0 === t.highlightWord.length) return null;
                    let n = e.indexOf(t.highlightWord);
                    if (-1 === n) return null;
                    let r = !en(e, n);
                    if (r)
                        do ((n = e.indexOf(t.highlightWord, n + 1)), (r = !en(e, n)));
                        while (r && -1 !== n);
                    if (-1 === n) return null;
                    let i = e.substring(0, n),
                        a = e.substring(n + t.highlightWord.length);
                    return [e, t.highlightWord, i, a];
                },
                parse(e, t, n) {
                    var r;
                    let i = null != (r = n.parseDepth) ? r : 0,
                        a = j(k({}, n), { parseDepth: i + 1 }),
                        o = t(e[2], a),
                        s = t(e[3], a);
                    return [
                        ...o,
                        {
                            type: 'highlight',
                            content: e[1]
                        },
                        ...s
                    ];
                }
            }
        },
        i().omit(K, ['url'])
    ]),
    ea = {
        RULES: K,
        CHANNEL_TOPIC_RULES: z,
        VOICE_CHANNEL_STATUS_RULES: q,
        EMBED_TITLE_RULES: X,
        INLINE_REPLY_RULES: Q,
        GUILD_VERIFICATION_FORM_RULES: J,
        GUILD_EVENT_RULES: ee,
        PROFILE_BIO_RULES: $,
        AUTO_MODERATION_SYSTEM_MESSAGE_RULES: ei,
        NATIVE_SEARCH_RESULT_LINK_RULES: et
    };
