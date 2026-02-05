"use strict";
n.d(t, { A: () => ee }), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(791332),
    s = n.n(a),
    o = n(128265),
    l = n(7584),
    u = n(176201),
    c = n(676608),
    d = n(335432),
    _ = n(734057),
    f = n(317525),
    p = n(71393),
    h = n(287809),
    m = n(486020),
    g = n(562153),
    E = n(427262),
    A = n(258072),
    I = n(867402),
    T = n(223637),
    y = n(694403),
    S = n(873879),
    v = n(683412),
    C = n(704726),
    b = n(438419),
    N = n(78390),
    R = n(379418),
    O = n(551965),
    D = n(652215),
    L = n(73510),
    w = n(985018);
let x = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
    P = /^$|\n *$/,
    M = /^ *>>> ?/,
    k = /^ *> ?/gm,
    U = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/;
function G(e) {
    let t = (0, y.W1)(e[1]);
    if (null == t) return { type: "text", content: e[1] };
    let { displayTarget: n, target: r } = t;
    return { type: "link", content: [{ type: "text", content: n }], target: r, title: void 0 };
}
let V = (e) => {
        let t = _.A.getChannel(e);
        return t?.getGuildId();
    },
    F = (e) =>
        null != e.guildId ? p.A.getGuild(e.guildId) : null != e.channelId ? p.A.getGuild(V(e.channelId)) : null,
    B = {
        newline: s().defaultRules.newline,
        paragraph: s().defaultRules.paragraph,
        escape: {
            ...s().defaultRules.escape,
            match: (e, t, n) => (!1 === t.allowEscape ? null : s().defaultRules.escape.match(e, t, n)),
        },
        blockQuote: {
            ...s().defaultRules.blockQuote,
            requiredFirstCharacters: [" ", ">"],
            match(e, t) {
                let { prevCapture: n, inQuote: r, nested: i } = t;
                if (r || i) return null;
                if (null == n) return x.exec(e);
                let a = n[0];
                return P.test(a) ? x.exec(e) : null;
            },
            parse(e, t, n) {
                let r = e[0],
                    i = !!M.exec(r),
                    a = i ? M : k,
                    s = r.replace(a, ""),
                    o = n.inQuote || !1,
                    l = n.inline || !1;
                (n.inQuote = !0), i || (n.inline = !0);
                let u = t(s, n);
                return (
                    (n.inQuote = o),
                    (n.inline = l),
                    0 === u.length && u.push({ type: "text", content: " " }),
                    { content: u, type: "blockQuote" }
                );
            },
        },
        link: y.Ay,
        autolink: { ...s().defaultRules.autolink, parse: G },
        mailto: {
            ...s().defaultRules.mailto,
            match: s().inlineRegex(/^<([^\s<>@]+@[^\s<>@]+\.[^\s<>@]+)>/),
            requiredFirstCharacters: ["<"],
            parse(e) {
                let t = e[1],
                    n = e[1];
                return (
                    n.startsWith("mailto:") || (n = "mailto:" + n),
                    { type: "link", content: [{ type: "text", content: t }], target: n }
                );
            },
        },
        tel: {
            ...s().defaultRules.mailto,
            requiredFirstCharacters: ["<"],
            match: s().inlineRegex(
                /^<((?:(?:tel|sms):\+?|\+)(?:(?:[0-9]|\([0-9]+\)))(?:[- .\/]?(?:[0-9]|\([0-9]+\)))+)>/,
            ),
            parse(e) {
                let t = e[1],
                    n = e[1].replaceAll(/[ \/]+/g, "-");
                return (
                    n.startsWith("tel:") || n.startsWith("sms:") || (n = "tel:" + n),
                    { type: "link", content: [{ type: "text", content: t }], target: n }
                );
            },
        },
        url: {
            ...s().defaultRules.url,
            requiredFirstCharacters: ["h", "s"],
            match(e, t) {
                if (!t.inline) return null;
                let n = U.exec(e);
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
            parse: G,
        },
        strong: s().defaultRules.strong,
        em: s().defaultRules.em,
        u: s().defaultRules.u,
        br: s().defaultRules.br,
        text: C.Ay,
        inlineCode: {
            ...s().defaultRules.inlineCode,
            parse(e, t, n) {
                let r = s().defaultRules.inlineCode.parse(e, t, n);
                return !0 === n.parseInlineCodeChildContent ? { ...r, validationChildContent: t(r.content, n) } : r;
            },
        },
        emoticon: {
            order: C.Ay.order,
            requiredFirstCharacters: ["\xaf"],
            match: (e) => /^(¯\\_\(ツ\)_\/¯)/.exec(e),
            parse: (e) => ({ type: "text", content: e[1] }),
        },
        codeBlock: {
            order: s().defaultRules.codeBlock.order,
            requiredFirstCharacters: ["`"],
            match: (e) => /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i.exec(e),
            parse: (e, t, n) => ({ lang: e[1] ?? "", content: e[2] ?? "", inQuote: n.inQuote || n.formatInline || !1 }),
        },
        roleMention: {
            order: C.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => /^<@&(\d+)>/.exec(e),
            parse(e, t, n) {
                let [r, i] = e;
                if (n.returnMentionIds) return { type: "roleMention", id: i };
                let a = F(n),
                    s = null != a ? f.A.getRole(a.id, i) : null;
                if (null == s) return { type: "text", content: `@${w.intl.string(w.t["YV4F/n"])}` };
                let o = (0, c.aF)(a?.id, s) && !(0, u.Qv)(s);
                return {
                    type: "mention",
                    channelId: n.channelId,
                    guildId: null != a ? a.id : null,
                    roleId: i,
                    roleColor: s.color,
                    roleColors: o
                        ? {
                              primaryColor: s.colors?.primary_color,
                              secondaryColor: s.colors?.secondary_color,
                              tertiaryColor: s.colors?.tertiary_color,
                          }
                        : null,
                    roleName: `@${s.name}`,
                    color: s.color,
                    colorString: s.colorString,
                    content: [{ type: "text", content: `@${s.name}` }],
                };
            },
        },
        mention: {
            order: C.Ay.order,
            requiredFirstCharacters: ["<", "@"],
            match(e) {
                let t = /^<@!?(\d+)>|^(@(?:everyone|here))/.exec(e);
                return null == t ? null : t;
            },
            parse(e, t, n) {
                let r, i;
                if (n.returnMentionIds)
                    return null == e[1] ? { type: "mention", text: e[0] } : { type: "mention", id: e[1] };
                let a = h.default.getUser(e[1]),
                    s = _.A.getChannel(n.channelId);
                null != a &&
                    ((i = a.id),
                    (r = a.toString()),
                    null != s && (r = g.Ay.getNickname(s.getGuildId(), n.channelId, a) ?? E.Ay.getName(a)));
                let o = e[1],
                    l = null != o && D.Ut1.test(o.trim()),
                    u = l && n.unknownUserMentionPlaceholder ? `@${w.intl.string(w.t.sKdZ6U)}` : e[0];
                return {
                    userId: i,
                    channelId: n.channelId,
                    viewingChannelId: n.viewingChannelId,
                    guildId: s?.getGuildId(),
                    parsedUserId: l ? o : null,
                    roleName: e[2],
                    content: [{ type: "text", content: null != r ? `@${r}` : u }],
                };
            },
        },
        silentPrefix: {
            order: C.Ay.order,
            requiredFirstCharacters: ["@"],
            match: (e, t, n) => (null == n || "" === n ? /^(@silent(?![^\s]))/.exec(e) : null),
            parse: function (e) {
                return { type: "silentPrefix", content: e[0] };
            },
        },
        channelMention: I.A.channelMention,
        channelOrMessageUrl: I.A.channelOrMessageUrl,
        mediaPostLink: I.A.mediaPostLink,
        attachmentLink: A.A.attachmentLink,
        commandMention: {
            order: s().defaultRules.text.order,
            requiredFirstCharacters: ["<"],
            match: (e) =>
                /^<\/((?:[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?):(\d+)>/u.exec(
                    e,
                ),
            parse(e, t, n) {
                if (n.returnMentionIds) return { type: "commandMention", id: e[2] };
                let [, ...r] = e[1].split(" "),
                    i = `${e[2]}${[...r].map((e) => `${L.v4}${e}`).join("")}`;
                return {
                    channelId: n.channelId,
                    commandId: e[2],
                    commandName: e[1],
                    commandKey: i,
                    content: [{ type: "text", content: `${e[1]}` }],
                };
            },
        },
        gameMention: {
            order: s().defaultRules.text.order,
            requiredFirstCharacters: ["<"],
            match: (e, t) => (t.allowGameMentions ? /^<@\$(\d+)>/.exec(e) : null),
            parse(e, t, n) {
                if (null == n.channelId || null == n.messageId)
                    return {
                        type: "gameMention",
                        applicationId: e[1],
                        channelId: n.channelId,
                        content: [{ type: "text", content: w.intl.string(w.t["11pdXZ"]) }],
                        icon: void 0,
                    };
                let r = o.A.get(n.channelId)?.get(n.messageId),
                    i = r?.mentionGames?.find((t) => t.id === e[1]);
                return {
                    type: "gameMention",
                    applicationId: e[1],
                    channelId: n.channelId,
                    content: [{ type: "text", content: `${i?.name ?? w.intl.string(w.t["11pdXZ"])}` }],
                    icon:
                        null != i && null != i.icon_hash
                            ? m.Ay.getApplicationIconURL({ id: i.id, icon: i.icon_hash, size: 32 })
                            : void 0,
                };
            },
        },
        timestampMentionInput: {
            order: s().defaultRules.text.order,
            requiredFirstCharacters: ["<"],
            match: (e, t) => (t.allowTimeMentionInput ? /^<@time:([^>]*)>/.exec(e) : null),
            parse: (e) => ({ type: "timestampMentionInput", content: e[1] }),
        },
        emoji: {
            order: C.Ay.order,
            requiredFirstCharacters: [":"],
            match(e) {
                let t = l.Ay.EMOJI_NAME_RE.exec(e);
                return null != t && "" !== l.Ay.convertNameToSurrogate(t[1]) ? t : null;
            },
            parse(e) {
                let t = l.Ay.convertNameToSurrogate(e[1]);
                return { type: "text", content: null == t || "" === t ? `:${e[1]}:` : t };
            },
        },
        soundboard: {
            order: C.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => d.ds.exec(e),
            parse: (e, t, n) => (0, d.Ay)(e, n),
        },
        customEmoji: {
            order: C.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => /^<a?:(\w+):(\d+)>/.exec(e),
            parse: (e) => ({ type: "text", content: `:${e[1]}:` }),
        },
        timestamp: {
            order: C.Ay.order - 1,
            requiredFirstCharacters: ["<"],
            match: (e) => R.l9.exec(e),
            parse(e) {
                let [t, n, r] = e,
                    i = (0, R.EH)(n, r);
                return null == i ? { type: "text", content: t } : ((i.type = "timestamp"), i);
            },
        },
        s: {
            order: s().defaultRules.u.order,
            requiredFirstCharacters: ["~"],
            match: s().inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
            parse: s().defaultRules.u.parse,
        },
        spoiler: {
            order: C.Ay.order,
            requiredFirstCharacters: ["|"],
            match: (e) => D.VFs.exec(e),
            parse: (e, t, n) => ({ content: t(e[1], n), channelId: n.channelId }),
        },
        staticRouteLink: {
            order: C.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => D.P0V.exec(e),
            parse(e, t, n) {
                let [, r, i] = e,
                    a = (0, N.Q)(r),
                    s = (0, N.f)(r, i, F(n)?.id);
                function o(e) {
                    return null == e ? null : [{ type: "text", content: e }];
                }
                return {
                    content: o(a + (null != s ? ` › ${s}` : "")),
                    mainContent: o(a),
                    itemContent: o(s),
                    itemId: i,
                    id: r,
                    guildId: V(n.channelId),
                    channelId: r,
                };
            },
        },
        heading: T.A,
        list: S.A,
        subtext: v.A,
    },
    j = (0, O.A)([B, b.A]),
    H = i().omit(j, ["inlineCode", "codeBlock", "br", "blockQuote", "subtext", "soundboard"]),
    Y = i().omit(j, [
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
    W = i().omit(j, [
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
    K = i().omit(
        (0, O.A)([
            j,
            {
                inlineCode: {
                    match(e, t, n) {
                        let r = j.codeBlock.match(e, t, n);
                        if (null != r) return r;
                        let i = j.inlineCode.match(e, t, n);
                        if (null != i) return i;
                    },
                },
            },
        ]),
        ["blockQuote", "codeBlock", "br"],
    ),
    z = i().omit(j, ["codeBlock", "br", "blockQuote"]),
    $ = i().omit(j, [
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
    q = i().omit(j, ["codeBlock", "blockQuote", "br"]),
    Z = i().omit(j, ["codeBlock", "br", "inlineCode"]);
function Q(e, t) {
    return 0 === e.length || 0 === t || "" === e.charAt(t - 1).trim();
}
let X = 10,
    J = (0, O.A)([
        {
            highlightWord: {
                order: -1,
                match(e, t) {
                    if (
                        (null != t.parseDepth && t.parseDepth > X) ||
                        null == t.highlightWord ||
                        0 === t.highlightWord.length
                    )
                        return null;
                    let n = e.indexOf(t.highlightWord);
                    if (-1 === n) return null;
                    let r = !Q(e, n);
                    if (r)
                        do (n = e.indexOf(t.highlightWord, n + 1)), (r = !Q(e, n));
                        while (r && -1 !== n);
                    if (-1 === n) return null;
                    let i = e.substring(0, n),
                        a = e.substring(n + t.highlightWord.length);
                    return [e, t.highlightWord, i, a];
                },
                parse(e, t, n) {
                    let r = n.parseDepth ?? 0,
                        i = { ...n, parseDepth: r + 1 },
                        a = t(e[2], i),
                        s = t(e[3], i);
                    return [...a, { type: "highlight", content: e[1] }, ...s];
                },
            },
        },
        i().omit(j, ["url"]),
    ]),
    ee = {
        RULES: j,
        CHANNEL_TOPIC_RULES: H,
        VOICE_CHANNEL_STATUS_RULES: Y,
        EMBED_TITLE_RULES: W,
        INLINE_REPLY_RULES: K,
        GUILD_VERIFICATION_FORM_RULES: z,
        GUILD_EVENT_RULES: q,
        PROFILE_BIO_RULES: $,
        AUTO_MODERATION_SYSTEM_MESSAGE_RULES: J,
        NATIVE_SEARCH_RESULT_LINK_RULES: Z,
    };
