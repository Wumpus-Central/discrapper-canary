n.d(t, { A: () => ei }), n(747238), n(812715), n(321073), n(866193), n(896048), n(733351), n(591487), n(727858);
var r = n(735438),
    i = n.n(r),
    a = n(280230),
    s = n.n(a),
    o = n(128265),
    l = n(7584),
    c = n(176201),
    u = n(676608),
    d = n(335432),
    f = n(734057),
    p = n(317525),
    _ = n(71393),
    h = n(287809),
    m = n(486020),
    g = n(562153),
    E = n(427262),
    b = n(258072),
    y = n(867402),
    O = n(223637),
    A = n(694403),
    v = n(873879),
    S = n(683412),
    I = n(704726),
    T = n(438419),
    C = n(78390),
    N = n(379418),
    R = n(551965),
    w = n(652215),
    P = n(73510),
    D = n(985018);
function x(e, t, n) {
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
function L(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
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
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let k = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
    U = /^$|\n *$/,
    G = /^ *>>> ?/,
    V = /^ *> ?/gm,
    F = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/;
function B(e) {
    let t = (0, A.W1)(e[1]);
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
        let t = f.A.getChannel(e);
        return null == t ? void 0 : t.getGuildId();
    },
    Y = (e) =>
        null != e.guildId ? _.A.getGuild(e.guildId) : null != e.channelId ? _.A.getGuild(H(e.channelId)) : null,
    W = {
        newline: s().defaultRules.newline,
        paragraph: s().defaultRules.paragraph,
        escape: M(L({}, s().defaultRules.escape), {
            match: (e, t, n) => (!1 === t.allowEscape ? null : s().defaultRules.escape.match(e, t, n)),
        }),
        blockQuote: M(L({}, s().defaultRules.blockQuote), {
            requiredFirstCharacters: [" ", ">"],
            match(e, t) {
                let { prevCapture: n, inQuote: r, nested: i } = t;
                if (r || i) return null;
                if (null == n) return k.exec(e);
                let a = n[0];
                return U.test(a) ? k.exec(e) : null;
            },
            parse(e, t, n) {
                let r = e[0],
                    i = !!G.exec(r),
                    a = i ? G : V,
                    s = r.replace(a, ""),
                    o = n.inQuote || !1,
                    l = n.inline || !1;
                (n.inQuote = !0), i || (n.inline = !0);
                let c = t(s, n);
                return (
                    (n.inQuote = o),
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
        link: A.Ay,
        autolink: M(L({}, s().defaultRules.autolink), { parse: B }),
        mailto: M(L({}, s().defaultRules.mailto), {
            match: s().inlineRegex(/^<([^\s<>@]+@[^\s<>@]+\.[^\s<>@]+)>/),
            requiredFirstCharacters: ["<"],
            parse(e) {
                let t = e[1],
                    n = e[1];
                return (
                    n.startsWith("mailto:") || (n = "mailto:" + n),
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
        tel: M(L({}, s().defaultRules.mailto), {
            requiredFirstCharacters: ["<"],
            match: s().inlineRegex(
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
        url: M(L({}, s().defaultRules.url), {
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
            parse: B,
        }),
        strong: s().defaultRules.strong,
        em: s().defaultRules.em,
        u: s().defaultRules.u,
        br: s().defaultRules.br,
        text: I.Ay,
        inlineCode: M(L({}, s().defaultRules.inlineCode), {
            parse(e, t, n) {
                let r = s().defaultRules.inlineCode.parse(e, t, n);
                return !0 === n.parseInlineCodeChildContent
                    ? M(L({}, r), { validationChildContent: t(r.content, n) })
                    : r;
            },
        }),
        emoticon: {
            order: I.Ay.order,
            requiredFirstCharacters: ["\xAF"],
            match: (e) => /^(¯\\_\(ツ\)_\/¯)/.exec(e),
            parse: (e) => ({
                type: "text",
                content: e[1],
            }),
        },
        codeBlock: {
            order: s().defaultRules.codeBlock.order,
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
            order: I.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => /^<@&(\d+)>/.exec(e),
            parse(e, t, n) {
                var r, i, a;
                let [s, o] = e;
                if (n.returnMentionIds)
                    return {
                        type: "roleMention",
                        id: o,
                    };
                let l = Y(n),
                    d = null != l ? p.A.getRole(l.id, o) : null;
                if (null == d)
                    return {
                        type: "text",
                        content: "@".concat(D.intl.string(D.t["YV4F/n"])),
                    };
                let f = (0, u.aF)(null == l ? void 0 : l.id, d) && !(0, c.Qv)(d);
                return {
                    type: "mention",
                    channelId: n.channelId,
                    guildId: null != l ? l.id : null,
                    roleId: o,
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
            order: I.Ay.order,
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
                let a = h.default.getUser(e[1]),
                    s = f.A.getChannel(n.channelId);
                if (null != a && ((i = a.id), (r = a.toString()), null != s)) {
                    var o;
                    r = null != (o = g.Ay.getNickname(s.getGuildId(), n.channelId, a)) ? o : E.Ay.getName(a);
                }
                let l = e[1],
                    c = null != l && w.Ut1.test(l.trim()),
                    u = c && n.unknownUserMentionPlaceholder ? "@".concat(D.intl.string(D.t.sKdZ6U)) : e[0];
                return {
                    userId: i,
                    channelId: n.channelId,
                    viewingChannelId: n.viewingChannelId,
                    guildId: null == s ? void 0 : s.getGuildId(),
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
            order: I.Ay.order,
            requiredFirstCharacters: ["@"],
            match: (e, t, n) => (null == n || "" === n ? /^(@silent(?![^\s]))/.exec(e) : null),
            parse: function (e) {
                return {
                    type: "silentPrefix",
                    content: e[0],
                };
            },
        },
        channelMention: y.A.channelMention,
        channelOrMessageUrl: y.A.channelOrMessageUrl,
        mediaPostLink: y.A.mediaPostLink,
        attachmentLink: b.A.attachmentLink,
        commandMention: {
            order: s().defaultRules.text.order,
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
                    i = "".concat(e[2]).concat([...r].map((e) => "".concat(P.v4).concat(e)).join(""));
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
            order: s().defaultRules.text.order,
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
                                content: D.intl.string(D.t["11pdXZ"]),
                            },
                        ],
                        icon: void 0,
                    };
                let s = null == (i = o.A.get(n.channelId)) ? void 0 : i.get(n.messageId),
                    l = null == s || null == (a = s.mentionGames) ? void 0 : a.find((t) => t.id === e[1]);
                return {
                    type: "gameMention",
                    applicationId: e[1],
                    channelId: n.channelId,
                    content: [
                        {
                            type: "text",
                            content: "".concat(
                                null != (r = null == l ? void 0 : l.name) ? r : D.intl.string(D.t["11pdXZ"]),
                            ),
                        },
                    ],
                    icon:
                        null != l && null != l.icon_hash
                            ? m.Ay.getApplicationIconURL({
                                  id: l.id,
                                  icon: l.icon_hash,
                                  size: 32,
                              })
                            : void 0,
                };
            },
        },
        timestampMentionInput: {
            order: s().defaultRules.text.order,
            requiredFirstCharacters: ["<"],
            match: (e, t) => (t.allowTimeMentionInput ? /^<@time:([^>]*)>/.exec(e) : null),
            parse: (e) => ({
                type: "timestampMentionInput",
                content: e[1],
            }),
        },
        emoji: {
            order: I.Ay.order,
            requiredFirstCharacters: [":"],
            match(e) {
                let t = l.Ay.EMOJI_NAME_RE.exec(e);
                return null != t && "" !== l.Ay.convertNameToSurrogate(t[1]) ? t : null;
            },
            parse(e) {
                let t = l.Ay.convertNameToSurrogate(e[1]);
                return {
                    type: "text",
                    content: null == t || "" === t ? ":".concat(e[1], ":") : t,
                };
            },
        },
        soundboard: {
            order: I.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => d.ds.exec(e),
            parse: (e, t, n) => (0, d.Ay)(e, n),
        },
        customEmoji: {
            order: I.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => /^<a?:(\w+):(\d+)>/.exec(e),
            parse: (e) => ({
                type: "text",
                content: ":".concat(e[1], ":"),
            }),
        },
        timestamp: {
            order: I.Ay.order - 1,
            requiredFirstCharacters: ["<"],
            match: (e) => N.l9.exec(e),
            parse(e) {
                let [t, n, r] = e,
                    i = (0, N.EH)(n, r);
                return null == i
                    ? {
                          type: "text",
                          content: t,
                      }
                    : ((i.type = "timestamp"), i);
            },
        },
        s: {
            order: s().defaultRules.u.order,
            requiredFirstCharacters: ["~"],
            match: s().inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
            parse: s().defaultRules.u.parse,
        },
        spoiler: {
            order: I.Ay.order,
            requiredFirstCharacters: ["|"],
            match: (e) => w.VFs.exec(e),
            parse: (e, t, n) => ({
                content: t(e[1], n),
                channelId: n.channelId,
            }),
        },
        staticRouteLink: {
            order: I.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => w.P0V.exec(e),
            parse(e, t, n) {
                var r;
                let [, i, a] = e,
                    s = (0, C.Q)(i),
                    o = (0, C.f)(i, a, null == (r = Y(n)) ? void 0 : r.id);
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
                    content: l(s + (null != o ? " \u203A ".concat(o) : "")),
                    mainContent: l(s),
                    itemContent: l(o),
                    itemId: a,
                    id: i,
                    guildId: H(n.channelId),
                    channelId: i,
                };
            },
        },
        heading: O.A,
        list: v.A,
        subtext: S.A,
    },
    K = (0, R.A)([W, T.A]),
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
    X = i().omit(K, [
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
    Z = i().omit(
        (0, R.A)([
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
    Q = i().omit(K, ["codeBlock", "br", "blockQuote"]),
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
    J = i().omit(K, ["codeBlock", "blockQuote", "br"]),
    ee = i().omit(K, ["codeBlock", "br", "inlineCode"]);
function et(e, t) {
    return 0 === e.length || 0 === t || "" === e.charAt(t - 1).trim();
}
let en = 10,
    er = (0, R.A)([
        {
            highlightWord: {
                order: -1,
                match(e, t) {
                    if (
                        (null != t.parseDepth && t.parseDepth > en) ||
                        null == t.highlightWord ||
                        0 === t.highlightWord.length
                    )
                        return null;
                    let n = e.indexOf(t.highlightWord);
                    if (-1 === n) return null;
                    let r = !et(e, n);
                    if (r)
                        do (n = e.indexOf(t.highlightWord, n + 1)), (r = !et(e, n));
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
                        s = t(e[2], a),
                        o = t(e[3], a);
                    return [
                        ...s,
                        {
                            type: "highlight",
                            content: e[1],
                        },
                        ...o,
                    ];
                },
            },
        },
        i().omit(K, ["url"]),
    ]),
    ei = {
        RULES: K,
        CHANNEL_TOPIC_RULES: z,
        VOICE_CHANNEL_STATUS_RULES: q,
        EMBED_TITLE_RULES: X,
        INLINE_REPLY_RULES: Z,
        GUILD_VERIFICATION_FORM_RULES: Q,
        GUILD_EVENT_RULES: J,
        PROFILE_BIO_RULES: $,
        AUTO_MODERATION_SYSTEM_MESSAGE_RULES: er,
        NATIVE_SEARCH_RESULT_LINK_RULES: ee,
    };
