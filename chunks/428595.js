n.d(t, { Z: () => er }), n(35282), n(704826), n(539854), n(804061), n(388685), n(781311), n(413496), n(433524);
var r = n(392711),
    i = n.n(r),
    a = n(477660),
    o = n.n(a),
    s = n(797610),
    l = n(633302),
    c = n(181918),
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
    v = n(143223),
    O = n(945884),
    I = n(594199),
    S = n(97734),
    T = n(303694),
    A = n(660199),
    N = n(364458),
    C = n(981631),
    R = n(689079),
    P = n(377668),
    w = n(388032);
function D(e, t, n) {
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
function L(e) {
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
                D(e, t, n[t]);
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
function M(e, t) {
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
let k = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
    j = /^$|\n *$/,
    U = /^ *>>> ?/,
    G = /^ *> ?/gm,
    B = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/;
function F(e) {
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
    Z = (e) => (null != e.guildId ? f.Z.getGuild(e.guildId) : null != e.channelId ? f.Z.getGuild(V(e.channelId)) : null),
    H = {
        newline: o().defaultRules.newline,
        paragraph: o().defaultRules.paragraph,
        escape: M(L({}, o().defaultRules.escape), { match: (e, t, n) => (!1 === t.allowEscape ? null : o().defaultRules.escape.match(e, t, n)) }),
        blockQuote: M(L({}, o().defaultRules.blockQuote), {
            requiredFirstCharacters: [' ', '>'],
            match(e, t) {
                let { prevCapture: n, inQuote: r, nested: i } = t;
                if (r || i) return null;
                if (null == n) return k.exec(e);
                let a = n[0];
                return j.test(a) ? k.exec(e) : null;
            },
            parse(e, t, n) {
                let r = e[0],
                    i = !!U.exec(r),
                    a = i ? U : G,
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
        autolink: M(L({}, o().defaultRules.autolink), { parse: F }),
        mailto: M(L({}, o().defaultRules.mailto), {
            match: o().inlineRegex(/^<([^\s<>@]+@[^\s<>@]+\.[^\s<>@]+)>/),
            requiredFirstCharacters: ['<']
        }),
        tel: M(L({}, o().defaultRules.mailto), {
            requiredFirstCharacters: ['<'],
            match: o().inlineRegex(/^<((?:(?:tel|sms):\+?|\+)(?:([0-9]+|\([0-9]+\)))(?:[- .\/]?([0-9]+|\([0-9]+\)))+)>/),
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
        url: M(L({}, o().defaultRules.url), {
            requiredFirstCharacters: ['h', 's'],
            match(e, t) {
                if (!t.inline) return null;
                let n = B.exec(e);
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
            parse: F
        }),
        strong: o().defaultRules.strong,
        em: o().defaultRules.em,
        u: o().defaultRules.u,
        br: o().defaultRules.br,
        text: I.ZP,
        inlineCode: M(L({}, o().defaultRules.inlineCode), {
            parse(e, t, n) {
                let r = o().defaultRules.inlineCode.parse(e, t, n);
                return !0 === n.parseInlineCodeChildContent ? M(L({}, r), { validationChildContent: t(r.content, n) }) : r;
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
                var r, i, a, o, s, l;
                let [u, d] = e;
                if (n.returnMentionIds)
                    return {
                        type: 'roleMention',
                        id: d
                    };
                let _ = Z(n),
                    p = null != _ ? f.Z.getRole(_.id, d) : null;
                if (null == p)
                    return {
                        type: 'text',
                        content: '@'.concat(w.intl.string(w.t['YV4F/v']))
                    };
                let h = (0, c.OC)(null == _ ? void 0 : _.id, 'parse'),
                    m = (null == (r = p.colors) ? void 0 : r.primary_color) === 0 && (null == (i = p.colors) ? void 0 : i.secondary_color) == null && (null == (a = p.colors) ? void 0 : a.tertiary_color) == null;
                return {
                    type: 'mention',
                    channelId: n.channelId,
                    guildId: null != _ ? _.id : null,
                    roleId: d,
                    roleColor: p.color,
                    roleColors:
                        h && !m
                            ? {
                                  primaryColor: null == (o = p.colors) ? void 0 : o.primary_color,
                                  secondaryColor: null == (s = p.colors) ? void 0 : s.secondary_color,
                                  tertiaryColor: null == (l = p.colors) ? void 0 : l.tertiary_color
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
            order: I.ZP.order,
            requiredFirstCharacters: ['<', '@'],
            match(e, t) {
                let n = /^<@!?(\d+)>|^(@(?:everyone|here|Clyde))/.exec(e);
                return null != n && ('@Clyde' !== n[0] || (0, s.gJ)(Z(t), d.Z.getChannel(t.channelId))) ? n : null;
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
                    var l;
                    r = null != (l = p.ZP.getNickname(o.getGuildId(), n.channelId, a)) ? l : h.ZP.getName(a);
                }
                null == a && '@Clyde' === e[0] && (0, s.gJ)(Z(n), o) && (i = P.fL);
                let c = e[1],
                    u = null != c && C.Xyh.test(c.trim()),
                    f = u && n.unknownUserMentionPlaceholder ? '@'.concat(w.intl.string(w.t.sKdZ6e)) : e[0];
                return {
                    userId: i,
                    channelId: n.channelId,
                    viewingChannelId: n.viewingChannelId,
                    guildId: null == o ? void 0 : o.getGuildId(),
                    parsedUserId: u ? c : null,
                    roleName: e[2],
                    content: [
                        {
                            type: 'text',
                            content: null != r ? '@'.concat(r) : f
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
        shopLink: v.Z.shopLink,
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
                    o = (0, T.l)(i),
                    s = (0, T.W)(i, a, null == (r = Z(n)) ? void 0 : r.id);
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
        subtext: O.Z
    },
    Y = (0, N.Z)([H, S.Z]),
    W = i().omit(Y, ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'subtext', 'soundboard']),
    K = i().omit(Y, ['inlineCode', 'codeBlock', 'br', 'blockQuote', 'autolink', 'url', 'attachmentLink', 'mention', 'roleMention', 'channelMention', 'channelOrMessageUrl', 'mediaPostLink', 'subtext', 'soundboard']),
    z = i().omit(Y, ['codeBlock', 'br', 'mention', 'channel', 'roleMention', 'attachmentLink', 'subtext', 'soundboard']),
    q = i().omit(
        (0, N.Z)([
            Y,
            {
                inlineCode: {
                    match(e, t, n) {
                        let r = Y.codeBlock.match(e, t, n);
                        if (null != r) return r;
                        let i = Y.inlineCode.match(e, t, n);
                        if (null != i) return i;
                    }
                }
            }
        ]),
        ['blockQuote', 'codeBlock', 'br']
    ),
    Q = i().omit(Y, ['codeBlock', 'br', 'blockQuote']),
    X = i().omit(Y, ['codeBlock', 'br', 'attachmentLink', 'mention', 'roleMention', 'channel', 'paragraph', 'newline', 'subtext', 'soundboard']),
    J = i().omit(Y, ['codeBlock', 'blockQuote', 'br']),
    $ = i().omit(Y, ['codeBlock', 'br', 'inlineCode']);
function ee(e, t) {
    return 0 === e.length || 0 === t || '' === e.charAt(t - 1).trim();
}
let et = 10,
    en = (0, N.Z)([
        {
            highlightWord: {
                order: -1,
                match(e, t) {
                    if ((null != t.parseDepth && t.parseDepth > et) || null == t.highlightWord || 0 === t.highlightWord.length) return null;
                    let n = e.indexOf(t.highlightWord);
                    if (-1 === n) return null;
                    let r = !ee(e, n);
                    if (r)
                        do (n = e.indexOf(t.highlightWord, n + 1)), (r = !ee(e, n));
                        while (r && -1 !== n);
                    if (-1 === n) return null;
                    let i = e.substring(0, n),
                        a = e.substring(n + t.highlightWord.length);
                    return [e, t.highlightWord, i, a];
                },
                parse(e, t, n) {
                    var r;
                    let i = null != (r = n.parseDepth) ? r : 0,
                        a = M(L({}, n), { parseDepth: i + 1 }),
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
        i().omit(Y, ['url'])
    ]),
    er = {
        RULES: Y,
        CHANNEL_TOPIC_RULES: W,
        VOICE_CHANNEL_STATUS_RULES: K,
        EMBED_TITLE_RULES: z,
        INLINE_REPLY_RULES: q,
        GUILD_VERIFICATION_FORM_RULES: Q,
        GUILD_EVENT_RULES: J,
        PROFILE_BIO_RULES: X,
        AUTO_MODERATION_SYSTEM_MESSAGE_RULES: en,
        NATIVE_SEARCH_RESULT_LINK_RULES: $
    };
