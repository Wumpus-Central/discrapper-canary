n.d(t, { Z: () => ea }), n(35282), n(704826), n(539854), n(804061), n(388685), n(781311), n(413496), n(433524);
var r = n(392711),
    i = n.n(r),
    a = n(159635),
    o = n.n(a),
    s = n(89892),
    l = n(633302),
    c = n(606318),
    u = n(402235),
    d = n(11637),
    f = n(592125),
    p = n(485386),
    _ = n(430824),
    m = n(594174),
    h = n(768581),
    g = n(5192),
    E = n(51144),
    b = n(298552),
    y = n(444758),
    O = n(723454),
    v = n(772096),
    S = n(800927),
    I = n(143223),
    T = n(945884),
    C = n(594199),
    A = n(97734),
    N = n(303694),
    P = n(660199),
    R = n(364458),
    D = n(981631),
    w = n(689079),
    x = n(388032);
function L(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                L(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
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
function k(e, t) {
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
    Z = /^ *>>> ?/,
    B = /^ *> ?/gm,
    F = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/;
function V(e) {
    let t = (0, v.yw)(e[1]);
    if (null == t)
        return {
            type: "text",
            content: e[1],
        };
    let { displayTarget: n, target: r } = t;
    return {
        type: "link",
        content: [
            {
                type: "text",
                content: n,
            },
        ],
        target: r,
        title: void 0,
    };
}
let H = (e) => {
        let t = f.Z.getChannel(e);
        return null == t ? void 0 : t.getGuildId();
    },
    Y = (e) =>
        null != e.guildId ? _.Z.getGuild(e.guildId) : null != e.channelId ? _.Z.getGuild(H(e.channelId)) : null,
    W = {
        newline: o().defaultRules.newline,
        paragraph: o().defaultRules.paragraph,
        escape: k(j({}, o().defaultRules.escape), {
            match: (e, t, n) => (!1 === t.allowEscape ? null : o().defaultRules.escape.match(e, t, n)),
        }),
        blockQuote: k(j({}, o().defaultRules.blockQuote), {
            requiredFirstCharacters: [" ", ">"],
            match(e, t) {
                let { prevCapture: n, inQuote: r, nested: i } = t;
                if (r || i) return null;
                if (null == n) return U.exec(e);
                let a = n[0];
                return G.test(a) ? U.exec(e) : null;
            },
            parse(e, t, n) {
                let r = e[0],
                    i = !!Z.exec(r),
                    a = i ? Z : B,
                    o = r.replace(a, ""),
                    s = n.inQuote || !1,
                    l = n.inline || !1;
                (n.inQuote = !0), i || (n.inline = !0);
                let c = t(o, n);
                return (
                    (n.inQuote = s),
                    (n.inline = l),
                    0 === c.length &&
                        c.push({
                            type: "text",
                            content: " ",
                        }),
                    {
                        content: c,
                        type: "blockQuote",
                    }
                );
            },
        }),
        link: v.ZP,
        autolink: k(j({}, o().defaultRules.autolink), { parse: V }),
        mailto: k(j({}, o().defaultRules.mailto), {
            match: o().inlineRegex(/^<([^\s<>@]+@[^\s<>@]+\.[^\s<>@]+)>/),
            requiredFirstCharacters: ["<"],
        }),
        tel: k(j({}, o().defaultRules.mailto), {
            requiredFirstCharacters: ["<"],
            match: o().inlineRegex(
                /^<((?:(?:tel|sms):\+?|\+)(?:(?:[0-9]|\([0-9]+\)))(?:[- .\/]?(?:[0-9]|\([0-9]+\)))+)>/,
            ),
            parse(e) {
                let t = e[1],
                    n = e[1].replaceAll(/[ \/]+/g, "-");
                return (
                    n.startsWith("tel:") || n.startsWith("sms:") || (n = "tel:" + n),
                    {
                        type: "link",
                        content: [
                            {
                                type: "text",
                                content: t,
                            },
                        ],
                        target: n,
                    }
                );
            },
        }),
        url: k(j({}, o().defaultRules.url), {
            requiredFirstCharacters: ["h", "s"],
            match(e, t) {
                if (!t.inline) return null;
                let n = F.exec(e);
                if (null != n) {
                    let e = 0,
                        t = n[0];
                    for (let n = t.length - 1; n >= 0 && ")" === t[n]; n--) {
                        let n = t.indexOf("(", e);
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
            parse: V,
        }),
        strong: o().defaultRules.strong,
        em: o().defaultRules.em,
        u: o().defaultRules.u,
        br: o().defaultRules.br,
        text: C.ZP,
        inlineCode: k(j({}, o().defaultRules.inlineCode), {
            parse(e, t, n) {
                let r = o().defaultRules.inlineCode.parse(e, t, n);
                return !0 === n.parseInlineCodeChildContent
                    ? k(j({}, r), { validationChildContent: t(r.content, n) })
                    : r;
            },
        }),
        emoticon: {
            order: C.ZP.order,
            requiredFirstCharacters: ["\xAF"],
            match: (e) => /^(¯\\_\(ツ\)_\/¯)/.exec(e),
            parse: (e) => ({
                type: "text",
                content: e[1],
            }),
        },
        codeBlock: {
            order: o().defaultRules.codeBlock.order,
            requiredFirstCharacters: ["`"],
            match: (e) => /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i.exec(e),
            parse(e, t, n) {
                var r, i;
                return {
                    lang: null != (r = e[1]) ? r : "",
                    content: null != (i = e[2]) ? i : "",
                    inQuote: n.inQuote || n.formatInline || !1,
                };
            },
        },
        roleMention: {
            order: C.ZP.order,
            requiredFirstCharacters: ["<"],
            match: (e) => /^<@&(\d+)>/.exec(e),
            parse(e, t, n) {
                var r, i, a;
                let [o, s] = e;
                if (n.returnMentionIds)
                    return {
                        type: "roleMention",
                        id: s,
                    };
                let l = Y(n),
                    d = null != l ? p.Z.getRole(l.id, s) : null;
                if (null == d)
                    return {
                        type: "text",
                        content: "@".concat(x.intl.string(x.t["YV4F/n"])),
                    };
                let f = (0, u.zI)(null == l ? void 0 : l.id, d) && !(0, c.Gr)(d);
                return {
                    type: "mention",
                    channelId: n.channelId,
                    guildId: null != l ? l.id : null,
                    roleId: s,
                    roleColor: d.color,
                    roleColors: f
                        ? {
                              primaryColor: null == (r = d.colors) ? void 0 : r.primary_color,
                              secondaryColor: null == (i = d.colors) ? void 0 : i.secondary_color,
                              tertiaryColor: null == (a = d.colors) ? void 0 : a.tertiary_color,
                          }
                        : null,
                    roleName: "@".concat(d.name),
                    color: d.color,
                    colorString: d.colorString,
                    content: [
                        {
                            type: "text",
                            content: "@".concat(d.name),
                        },
                    ],
                };
            },
        },
        mention: {
            order: C.ZP.order,
            requiredFirstCharacters: ["<", "@"],
            match(e) {
                let t = /^<@!?(\d+)>|^(@(?:everyone|here))/.exec(e);
                return null == t ? null : t;
            },
            parse(e, t, n) {
                let r, i;
                if (n.returnMentionIds)
                    return null == e[1]
                        ? {
                              type: "mention",
                              text: e[0],
                          }
                        : {
                              type: "mention",
                              id: e[1],
                          };
                let a = m.default.getUser(e[1]),
                    o = f.Z.getChannel(n.channelId);
                if (null != a && ((i = a.id), (r = a.toString()), null != o)) {
                    var s;
                    r = null != (s = g.ZP.getNickname(o.getGuildId(), n.channelId, a)) ? s : E.ZP.getName(a);
                }
                let l = e[1],
                    c = null != l && D.Xyh.test(l.trim()),
                    u = c && n.unknownUserMentionPlaceholder ? "@".concat(x.intl.string(x.t.sKdZ6U)) : e[0];
                return {
                    userId: i,
                    channelId: n.channelId,
                    viewingChannelId: n.viewingChannelId,
                    guildId: null == o ? void 0 : o.getGuildId(),
                    parsedUserId: c ? l : null,
                    roleName: e[2],
                    content: [
                        {
                            type: "text",
                            content: null != r ? "@".concat(r) : u,
                        },
                    ],
                };
            },
        },
        silentPrefix: {
            order: C.ZP.order,
            requiredFirstCharacters: ["@"],
            match: (e, t, n) => (null == n || "" === n ? /^(@silent(?![^\s]))/.exec(e) : null),
            parse: function (e) {
                return {
                    type: "silentPrefix",
                    content: e[0],
                };
            },
        },
        channelMention: y.Z.channelMention,
        channelOrMessageUrl: y.Z.channelOrMessageUrl,
        mediaPostLink: y.Z.mediaPostLink,
        attachmentLink: b.Z.attachmentLink,
        shopLink: I.Z.shopLink,
        commandMention: {
            order: o().defaultRules.text.order,
            requiredFirstCharacters: ["<"],
            match: (e) =>
                RegExp(
                    "^<\\/((?:[-_\\p{Letter}\\p{Number}\\p{sc=Deva}\\p{sc=Thai}]{1,32})(?: [-_\\p{Letter}\\p{Number}\\p{sc=Deva}\\p{sc=Thai}]{1,32})?(?: [-_\\p{Letter}\\p{Number}\\p{sc=Deva}\\p{sc=Thai}]{1,32})?):(\\d+)>",
                    "u",
                ).exec(e),
            parse(e, t, n) {
                if (n.returnMentionIds)
                    return {
                        type: "commandMention",
                        id: e[2],
                    };
                let [, ...r] = e[1].split(" "),
                    i = "".concat(e[2]).concat([...r].map((e) => "".concat(w.oQ).concat(e)).join(""));
                return {
                    channelId: n.channelId,
                    commandId: e[2],
                    commandName: e[1],
                    commandKey: i,
                    content: [
                        {
                            type: "text",
                            content: "".concat(e[1]),
                        },
                    ],
                };
            },
        },
        gameMention: {
            order: o().defaultRules.text.order,
            requiredFirstCharacters: ["<"],
            match: (e, t) => (t.allowGameMentions ? /^<@\$(\d+)>/.exec(e) : null),
            parse(e, t, n) {
                var r, i, a;
                if (null == n.channelId || null == n.messageId)
                    return {
                        type: "gameMention",
                        applicationId: e[1],
                        channelId: n.channelId,
                        content: [
                            {
                                type: "text",
                                content: x.intl.string(x.t["11pdXZ"]),
                            },
                        ],
                        icon: void 0,
                    };
                let o = null == (r = s.Z.get(n.channelId)) ? void 0 : r.get(n.messageId),
                    l = null == o || null == (i = o.mentionGames) ? void 0 : i.find((t) => t.id === e[1]);
                return {
                    type: "gameMention",
                    applicationId: e[1],
                    channelId: n.channelId,
                    content: [
                        {
                            type: "text",
                            content: "".concat(
                                null != (a = null == l ? void 0 : l.name) ? a : x.intl.string(x.t["11pdXZ"]),
                            ),
                        },
                    ],
                    icon:
                        null != l && null != l.icon_hash
                            ? h.ZP.getApplicationIconURL({
                                  id: l.id,
                                  icon: l.icon_hash,
                                  size: 32,
                              })
                            : void 0,
                };
            },
        },
        timestampMentionInput: {
            order: o().defaultRules.text.order,
            requiredFirstCharacters: ["<"],
            match: (e, t) => (t.allowTimeMentionInput ? /^<@time:([^>]*)>/.exec(e) : null),
            parse: (e) => ({
                type: "timestampMentionInput",
                content: e[1],
            }),
        },
        emoji: {
            order: C.ZP.order,
            requiredFirstCharacters: [":"],
            match(e) {
                let t = l.ZP.EMOJI_NAME_RE.exec(e);
                return null != t && "" !== l.ZP.convertNameToSurrogate(t[1]) ? t : null;
            },
            parse(e) {
                let t = l.ZP.convertNameToSurrogate(e[1]);
                return {
                    type: "text",
                    content: null == t || "" === t ? ":".concat(e[1], ":") : t,
                };
            },
        },
        soundboard: {
            order: C.ZP.order,
            requiredFirstCharacters: ["<"],
            match: (e) => d.hf.exec(e),
            parse: (e, t, n) => (0, d.ZP)(e, n),
        },
        customEmoji: {
            order: C.ZP.order,
            requiredFirstCharacters: ["<"],
            match: (e) => /^<a?:(\w+):(\d+)>/.exec(e),
            parse: (e) => ({
                type: "text",
                content: ":".concat(e[1], ":"),
            }),
        },
        timestamp: {
            order: C.ZP.order - 1,
            requiredFirstCharacters: ["<"],
            match: (e) => P.Ay.exec(e),
            parse(e) {
                let [t, n, r] = e,
                    i = (0, P.ZB)(n, r);
                return null == i
                    ? {
                          type: "text",
                          content: t,
                      }
                    : ((i.type = "timestamp"), i);
            },
        },
        s: {
            order: o().defaultRules.u.order,
            requiredFirstCharacters: ["~"],
            match: o().inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
            parse: o().defaultRules.u.parse,
        },
        spoiler: {
            order: C.ZP.order,
            requiredFirstCharacters: ["|"],
            match: (e) => D.$92.exec(e),
            parse: (e, t, n) => ({
                content: t(e[1], n),
                channelId: n.channelId,
            }),
        },
        staticRouteLink: {
            order: C.ZP.order,
            requiredFirstCharacters: ["<"],
            match: (e) => D.PEY.exec(e),
            parse(e, t, n) {
                var r;
                let [, i, a] = e,
                    o = (0, N.l)(i),
                    s = (0, N.W)(i, a, null == (r = Y(n)) ? void 0 : r.id);
                function l(e) {
                    return null == e
                        ? null
                        : [
                              {
                                  type: "text",
                                  content: e,
                              },
                          ];
                }
                return {
                    content: l(o + (null != s ? " \u203A ".concat(s) : "")),
                    mainContent: l(o),
                    itemContent: l(s),
                    itemId: a,
                    id: i,
                    guildId: H(n.channelId),
                    channelId: i,
                };
            },
        },
        heading: O.Z,
        list: S.Z,
        subtext: T.Z,
    },
    K = (0, R.Z)([W, A.Z]),
    z = i().omit(K, ["inlineCode", "codeBlock", "br", "blockQuote", "subtext", "soundboard"]),
    q = i().omit(K, [
        "inlineCode",
        "codeBlock",
        "br",
        "blockQuote",
        "autolink",
        "url",
        "attachmentLink",
        "mention",
        "roleMention",
        "channelMention",
        "channelOrMessageUrl",
        "mediaPostLink",
        "subtext",
        "soundboard",
        "gameMention",
    ]),
    Q = i().omit(K, [
        "codeBlock",
        "br",
        "mention",
        "channel",
        "roleMention",
        "attachmentLink",
        "subtext",
        "soundboard",
        "gameMention",
    ]),
    X = i().omit(
        (0, R.Z)([
            K,
            {
                inlineCode: {
                    match(e, t, n) {
                        let r = K.codeBlock.match(e, t, n);
                        if (null != r) return r;
                        let i = K.inlineCode.match(e, t, n);
                        if (null != i) return i;
                    },
                },
            },
        ]),
        ["blockQuote", "codeBlock", "br"],
    ),
    J = i().omit(K, ["codeBlock", "br", "blockQuote"]),
    $ = i().omit(K, [
        "codeBlock",
        "br",
        "attachmentLink",
        "mention",
        "roleMention",
        "channel",
        "paragraph",
        "newline",
        "subtext",
        "soundboard",
    ]),
    ee = i().omit(K, ["codeBlock", "blockQuote", "br"]),
    et = i().omit(K, ["codeBlock", "br", "inlineCode"]);
function en(e, t) {
    return 0 === e.length || 0 === t || "" === e.charAt(t - 1).trim();
}
let er = 10,
    ei = (0, R.Z)([
        {
            highlightWord: {
                order: -1,
                match(e, t) {
                    if (
                        (null != t.parseDepth && t.parseDepth > er) ||
                        null == t.highlightWord ||
                        0 === t.highlightWord.length
                    )
                        return null;
                    let n = e.indexOf(t.highlightWord);
                    if (-1 === n) return null;
                    let r = !en(e, n);
                    if (r)
                        do (n = e.indexOf(t.highlightWord, n + 1)), (r = !en(e, n));
                        while (r && -1 !== n);
                    if (-1 === n) return null;
                    let i = e.substring(0, n),
                        a = e.substring(n + t.highlightWord.length);
                    return [e, t.highlightWord, i, a];
                },
                parse(e, t, n) {
                    var r;
                    let i = null != (r = n.parseDepth) ? r : 0,
                        a = k(j({}, n), { parseDepth: i + 1 }),
                        o = t(e[2], a),
                        s = t(e[3], a);
                    return [
                        ...o,
                        {
                            type: "highlight",
                            content: e[1],
                        },
                        ...s,
                    ];
                },
            },
        },
        i().omit(K, ["url"]),
    ]),
    ea = {
        RULES: K,
        CHANNEL_TOPIC_RULES: z,
        VOICE_CHANNEL_STATUS_RULES: q,
        EMBED_TITLE_RULES: Q,
        INLINE_REPLY_RULES: X,
        GUILD_VERIFICATION_FORM_RULES: J,
        GUILD_EVENT_RULES: ee,
        PROFILE_BIO_RULES: $,
        AUTO_MODERATION_SYSTEM_MESSAGE_RULES: ei,
        NATIVE_SEARCH_RESULT_LINK_RULES: et,
    };
