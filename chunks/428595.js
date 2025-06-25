n.d(t, { Z: () => en }), n(35282), n(704826), n(539854), n(804061), n(388685), n(781311), n(413496), n(433524);
var r = n(392711),
    i = n.n(r),
    a = n(159635),
    o = n.n(a),
    s = n(633302),
    l = n(606318),
    c = n(402235),
    u = n(11637),
    d = n(592125),
    f = n(430824),
    _ = n(594174),
    p = n(5192),
    h = n(51144),
    m = n(298552),
    g = n(444758),
    E = n(723454),
    b = n(772096),
    y = n(800927),
    O = n(143223),
    v = n(945884),
    I = n(594199),
    T = n(97734),
    S = n(303694),
    A = n(660199),
    N = n(364458),
    C = n(981631),
    R = n(689079),
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
function L(e, t) {
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
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let k = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
    M = /^$|\n *$/,
    j = /^ *>>> ?/,
    U = /^ *> ?/gm,
    G = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/;
function B(e) {
    let t = (0, b.yw)(e[1]);
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
let V = (e) => {
        let t = d.Z.getChannel(e);
        return null == t ? void 0 : t.getGuildId();
    },
    F = (e) => (null != e.guildId ? f.Z.getGuild(e.guildId) : null != e.channelId ? f.Z.getGuild(V(e.channelId)) : null),
    Z = {
        newline: o().defaultRules.newline,
        paragraph: o().defaultRules.paragraph,
        escape: x(D({}, o().defaultRules.escape), { match: (e, t, n) => (!1 === t.allowEscape ? null : o().defaultRules.escape.match(e, t, n)) }),
        blockQuote: x(D({}, o().defaultRules.blockQuote), {
            requiredFirstCharacters: [' ', '>'],
            match(e, t) {
                let { prevCapture: n, inQuote: r, nested: i } = t;
                if (r || i) return null;
                if (null == n) return k.exec(e);
                let a = n[0];
                return M.test(a) ? k.exec(e) : null;
            },
            parse(e, t, n) {
                let r = e[0],
                    i = !!j.exec(r),
                    a = i ? j : U,
                    o = r.replace(a, ''),
                    s = n.inQuote || !1,
                    l = n.inline || !1;
                (n.inQuote = !0), i || (n.inline = !0);
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
        link: b.ZP,
        autolink: x(D({}, o().defaultRules.autolink), { parse: B }),
        mailto: x(D({}, o().defaultRules.mailto), {
            match: o().inlineRegex(/^<([^\s<>@]+@[^\s<>@]+\.[^\s<>@]+)>/),
            requiredFirstCharacters: ['<']
        }),
        tel: x(D({}, o().defaultRules.mailto), {
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
        url: x(D({}, o().defaultRules.url), {
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
        strong: o().defaultRules.strong,
        em: o().defaultRules.em,
        u: o().defaultRules.u,
        br: o().defaultRules.br,
        text: I.ZP,
        inlineCode: x(D({}, o().defaultRules.inlineCode), {
            parse(e, t, n) {
                let r = o().defaultRules.inlineCode.parse(e, t, n);
                return !0 === n.parseInlineCodeChildContent ? x(D({}, r), { validationChildContent: t(r.content, n) }) : r;
            }
        }),
        emoticon: {
            order: I.ZP.order,
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
            order: I.ZP.order,
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
                let u = F(n),
                    d = null != u ? f.Z.getRole(u.id, s) : null;
                if (null == d)
                    return {
                        type: 'text',
                        content: '@'.concat(P.intl.string(P.t['YV4F/v']))
                    };
                let _ = (0, l.Gr)(d),
                    p = (0, c.zI)(null == u ? void 0 : u.id, d) && !_;
                return {
                    type: 'mention',
                    channelId: n.channelId,
                    guildId: null != u ? u.id : null,
                    roleId: s,
                    roleColor: d.color,
                    roleColors: p
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
            order: I.ZP.order,
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
                let a = _.default.getUser(e[1]),
                    o = d.Z.getChannel(n.channelId);
                if (null != a && ((i = a.id), (r = a.toString()), null != o)) {
                    var s;
                    r = null != (s = p.ZP.getNickname(o.getGuildId(), n.channelId, a)) ? s : h.ZP.getName(a);
                }
                let l = e[1],
                    c = null != l && C.Xyh.test(l.trim()),
                    u = c && n.unknownUserMentionPlaceholder ? '@'.concat(P.intl.string(P.t.sKdZ6e)) : e[0];
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
            order: I.ZP.order,
            requiredFirstCharacters: ['@'],
            match: (e, t, n) => (null == n || '' === n ? /^(@silent(?![^\s]))/.exec(e) : null),
            parse: function (e) {
                return {
                    type: 'silentPrefix',
                    content: e[0]
                };
            }
        },
        channelMention: g.Z.channelMention,
        channelOrMessageUrl: g.Z.channelOrMessageUrl,
        mediaPostLink: g.Z.mediaPostLink,
        attachmentLink: m.Z.attachmentLink,
        shopLink: O.Z.shopLink,
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
                    i = ''.concat(e[2]).concat([...r].map((e) => ''.concat(R.oQ).concat(e)).join(''));
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
            order: I.ZP.order,
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
            order: I.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => u.hf.exec(e),
            parse: (e, t, n) => (0, u.ZP)(e, n)
        },
        customEmoji: {
            order: I.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => /^<a?:(\w+):(\d+)>/.exec(e),
            parse: (e) => ({
                type: 'text',
                content: ':'.concat(e[1], ':')
            })
        },
        timestamp: {
            order: I.ZP.order - 1,
            requiredFirstCharacters: ['<'],
            match: (e) => A.Ay.exec(e),
            parse(e) {
                let [t, n, r] = e,
                    i = (0, A.ZB)(n, r);
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
            order: I.ZP.order,
            requiredFirstCharacters: ['|'],
            match: (e) => C.$92.exec(e),
            parse: (e, t, n) => ({
                content: t(e[1], n),
                channelId: n.channelId
            })
        },
        staticRouteLink: {
            order: I.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => C.PEY.exec(e),
            parse(e, t, n) {
                var r;
                let [, i, a] = e,
                    o = (0, S.l)(i),
                    s = (0, S.W)(i, a, null == (r = F(n)) ? void 0 : r.id);
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
                    guildId: V(n.channelId),
                    channelId: i
                };
            }
        },
        heading: E.Z,
        list: y.Z,
        subtext: v.Z
    },
    H = (0, N.Z)([Z, T.Z]),
    Y = i().omit(H, ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'subtext', 'soundboard']),
    W = i().omit(H, ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'autolink', 'url', 'attachmentLink', 'mention', 'roleMention', 'channelMention', 'channelOrMessageUrl', 'mediaPostLink', 'subtext', 'soundboard']),
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
    X = i().omit(H, ['codeBlock', 'br', 'attachmentLink', 'mention', 'roleMention', 'channel', 'paragraph', 'newline', 'subtext', 'soundboard']),
    Q = i().omit(H, ['codeBlock', 'blockQuote', 'br']),
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
                        a = e.substring(n + t.highlightWord.length);
                    return [e, t.highlightWord, i, a];
                },
                parse(e, t, n) {
                    var r;
                    let i = null != (r = n.parseDepth) ? r : 0,
                        a = x(D({}, n), { parseDepth: i + 1 }),
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
        i().omit(H, ['url'])
    ]),
    en = {
        RULES: H,
        CHANNEL_TOPIC_RULES: Y,
        VOICE_CHANNEL_STATUS_RULES: W,
        EMBED_TITLE_RULES: K,
        INLINE_REPLY_RULES: z,
        GUILD_VERIFICATION_FORM_RULES: q,
        GUILD_EVENT_RULES: Q,
        PROFILE_BIO_RULES: X,
        AUTO_MODERATION_SYSTEM_MESSAGE_RULES: et,
        NATIVE_SEARCH_RESULT_LINK_RULES: J
    };
