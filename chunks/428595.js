n.d(t, { Z: () => et }), n(35282), n(704826), n(539854), n(804061), n(388685), n(781311), n(413496), n(433524);
var r = n(392711),
    i = n.n(r),
    a = n(159635),
    o = n.n(a),
    s = n(633302),
    l = n(402235),
    c = n(11637),
    u = n(592125),
    d = n(430824),
    f = n(594174),
    _ = n(5192),
    p = n(51144),
    h = n(298552),
    m = n(444758),
    g = n(723454),
    E = n(772096),
    b = n(800927),
    y = n(143223),
    O = n(945884),
    v = n(594199),
    I = n(97734),
    T = n(303694),
    S = n(660199),
    A = n(364458),
    N = n(981631),
    C = n(689079),
    R = n(388032);
function P(e, t, n) {
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
function w(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
    k = /^$|\n *$/,
    M = /^ *>>> ?/,
    j = /^ *> ?/gm,
    U = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/;
function G(e) {
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
let B = (e) => {
        let t = u.Z.getChannel(e);
        return null == t ? void 0 : t.getGuildId();
    },
    V = (e) => (null != e.guildId ? d.Z.getGuild(e.guildId) : null != e.channelId ? d.Z.getGuild(B(e.channelId)) : null),
    F = {
        newline: o().defaultRules.newline,
        paragraph: o().defaultRules.paragraph,
        escape: L(w({}, o().defaultRules.escape), { match: (e, t, n) => (!1 === t.allowEscape ? null : o().defaultRules.escape.match(e, t, n)) }),
        blockQuote: L(w({}, o().defaultRules.blockQuote), {
            requiredFirstCharacters: [' ', '>'],
            match(e, t) {
                let { prevCapture: n, inQuote: r, nested: i } = t;
                if (r || i) return null;
                if (null == n) return x.exec(e);
                let a = n[0];
                return k.test(a) ? x.exec(e) : null;
            },
            parse(e, t, n) {
                let r = e[0],
                    i = !!M.exec(r),
                    a = i ? M : j,
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
        link: E.ZP,
        autolink: L(w({}, o().defaultRules.autolink), { parse: G }),
        mailto: L(w({}, o().defaultRules.mailto), {
            match: o().inlineRegex(/^<([^\s<>@]+@[^\s<>@]+\.[^\s<>@]+)>/),
            requiredFirstCharacters: ['<']
        }),
        tel: L(w({}, o().defaultRules.mailto), {
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
        url: L(w({}, o().defaultRules.url), {
            requiredFirstCharacters: ['h', 's'],
            match(e, t) {
                if (!t.inline) return null;
                let n = U.exec(e);
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
            parse: G
        }),
        strong: o().defaultRules.strong,
        em: o().defaultRules.em,
        u: o().defaultRules.u,
        br: o().defaultRules.br,
        text: v.ZP,
        inlineCode: L(w({}, o().defaultRules.inlineCode), {
            parse(e, t, n) {
                let r = o().defaultRules.inlineCode.parse(e, t, n);
                return !0 === n.parseInlineCodeChildContent ? L(w({}, r), { validationChildContent: t(r.content, n) }) : r;
            }
        }),
        emoticon: {
            order: v.ZP.order,
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
            order: v.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => /^<@&(\d+)>/.exec(e),
            parse(e, t, n) {
                var r, i, a, o, s, c;
                let [u, f] = e;
                if (n.returnMentionIds)
                    return {
                        type: 'roleMention',
                        id: f
                    };
                let _ = V(n),
                    p = null != _ ? d.Z.getRole(_.id, f) : null;
                if (null == p)
                    return {
                        type: 'text',
                        content: '@'.concat(R.intl.string(R.t['YV4F/v']))
                    };
                let h = (0, l.i)(null == _ ? void 0 : _.id, 'parse'),
                    m = (null == (r = p.colors) ? void 0 : r.primary_color) === 0 && (null == (i = p.colors) ? void 0 : i.secondary_color) == null && (null == (a = p.colors) ? void 0 : a.tertiary_color) == null;
                return {
                    type: 'mention',
                    channelId: n.channelId,
                    guildId: null != _ ? _.id : null,
                    roleId: f,
                    roleColor: p.color,
                    roleColors:
                        h && !m
                            ? {
                                  primaryColor: null == (o = p.colors) ? void 0 : o.primary_color,
                                  secondaryColor: null == (s = p.colors) ? void 0 : s.secondary_color,
                                  tertiaryColor: null == (c = p.colors) ? void 0 : c.tertiary_color
                              }
                            : null,
                    roleName: '@'.concat(p.name),
                    color: p.color,
                    colorString: p.colorString,
                    content: [
                        {
                            type: 'text',
                            content: '@'.concat(p.name)
                        }
                    ]
                };
            }
        },
        mention: {
            order: v.ZP.order,
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
                let a = f.default.getUser(e[1]),
                    o = u.Z.getChannel(n.channelId);
                if (null != a && ((i = a.id), (r = a.toString()), null != o)) {
                    var s;
                    r = null != (s = _.ZP.getNickname(o.getGuildId(), n.channelId, a)) ? s : p.ZP.getName(a);
                }
                let l = e[1],
                    c = null != l && N.Xyh.test(l.trim()),
                    d = c && n.unknownUserMentionPlaceholder ? '@'.concat(R.intl.string(R.t.sKdZ6e)) : e[0];
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
                            content: null != r ? '@'.concat(r) : d
                        }
                    ]
                };
            }
        },
        silentPrefix: {
            order: v.ZP.order,
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
            order: v.ZP.order,
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
            order: v.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => c.hf.exec(e),
            parse: (e, t, n) => (0, c.ZP)(e, n)
        },
        customEmoji: {
            order: v.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => /^<a?:(\w+):(\d+)>/.exec(e),
            parse: (e) => ({
                type: 'text',
                content: ':'.concat(e[1], ':')
            })
        },
        timestamp: {
            order: v.ZP.order - 1,
            requiredFirstCharacters: ['<'],
            match: (e) => S.Ay.exec(e),
            parse(e) {
                let [t, n, r] = e,
                    i = (0, S.ZB)(n, r);
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
            order: v.ZP.order,
            requiredFirstCharacters: ['|'],
            match: (e) => N.$92.exec(e),
            parse: (e, t, n) => ({
                content: t(e[1], n),
                channelId: n.channelId
            })
        },
        staticRouteLink: {
            order: v.ZP.order,
            requiredFirstCharacters: ['<'],
            match: (e) => N.PEY.exec(e),
            parse(e, t, n) {
                var r;
                let [, i, a] = e,
                    o = (0, T.l)(i),
                    s = (0, T.W)(i, a, null == (r = V(n)) ? void 0 : r.id);
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
                    guildId: B(n.channelId),
                    channelId: i
                };
            }
        },
        heading: g.Z,
        list: b.Z,
        subtext: O.Z
    },
    Z = (0, A.Z)([F, I.Z]),
    H = i().omit(Z, ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'subtext', 'soundboard']),
    Y = i().omit(Z, ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'autolink', 'url', 'attachmentLink', 'mention', 'roleMention', 'channelMention', 'channelOrMessageUrl', 'mediaPostLink', 'subtext', 'soundboard']),
    W = i().omit(Z, ['codeBlock', 'br', 'mention', 'channel', 'roleMention', 'attachmentLink', 'subtext', 'soundboard']),
    K = i().omit(
        (0, A.Z)([
            Z,
            {
                inlineCode: {
                    match(e, t, n) {
                        let r = Z.codeBlock.match(e, t, n);
                        if (null != r) return r;
                        let i = Z.inlineCode.match(e, t, n);
                        if (null != i) return i;
                    }
                }
            }
        ]),
        ['blockQuote', 'codeBlock', 'br']
    ),
    z = i().omit(Z, ['codeBlock', 'br', 'blockQuote']),
    q = i().omit(Z, ['codeBlock', 'br', 'attachmentLink', 'mention', 'roleMention', 'channel', 'paragraph', 'newline', 'subtext', 'soundboard']),
    X = i().omit(Z, ['codeBlock', 'blockQuote', 'br']),
    Q = i().omit(Z, ['codeBlock', 'br', 'inlineCode']);
function J(e, t) {
    return 0 === e.length || 0 === t || '' === e.charAt(t - 1).trim();
}
let $ = 10,
    ee = (0, A.Z)([
        {
            highlightWord: {
                order: -1,
                match(e, t) {
                    if ((null != t.parseDepth && t.parseDepth > $) || null == t.highlightWord || 0 === t.highlightWord.length) return null;
                    let n = e.indexOf(t.highlightWord);
                    if (-1 === n) return null;
                    let r = !J(e, n);
                    if (r)
                        do (n = e.indexOf(t.highlightWord, n + 1)), (r = !J(e, n));
                        while (r && -1 !== n);
                    if (-1 === n) return null;
                    let i = e.substring(0, n),
                        a = e.substring(n + t.highlightWord.length);
                    return [e, t.highlightWord, i, a];
                },
                parse(e, t, n) {
                    var r;
                    let i = null != (r = n.parseDepth) ? r : 0,
                        a = L(w({}, n), { parseDepth: i + 1 }),
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
        i().omit(Z, ['url'])
    ]),
    et = {
        RULES: Z,
        CHANNEL_TOPIC_RULES: H,
        VOICE_CHANNEL_STATUS_RULES: Y,
        EMBED_TITLE_RULES: W,
        INLINE_REPLY_RULES: K,
        GUILD_VERIFICATION_FORM_RULES: z,
        GUILD_EVENT_RULES: X,
        PROFILE_BIO_RULES: q,
        AUTO_MODERATION_SYSTEM_MESSAGE_RULES: ee,
        NATIVE_SEARCH_RESULT_LINK_RULES: Q
    };
