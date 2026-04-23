"use strict";
n.d(t, { A: () => Q }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(791332),
    a = n.n(s),
    o = n(7584),
    l = n(176201),
    u = n(676608),
    c = n(335432),
    d = n(734057),
    _ = n(317525),
    f = n(71393),
    p = n(287809),
    h = n(562153),
    E = n(427262),
    m = n(258072),
    g = n(867402),
    A = n(223637),
    I = n(694403),
    T = n(873879),
    S = n(683412),
    y = n(704726),
    N = n(438419),
    v = n(78390),
    C = n(379418),
    O = n(551965),
    R = n(652215),
    b = n(73510),
    D = n(985018);
let L = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
    w = /^$|\n *$/,
    M = /^ *>>> ?/,
    P = /^ *> ?/gm,
    x = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/;
function k(e) {
    let t = (0, I.W1)(e[1]);
    if (null == t) return { type: "text", content: e[1] };
    let { displayTarget: n, target: r } = t;
    return { type: "link", content: [{ type: "text", content: n }], target: r, title: void 0 };
}
let U = (e) => {
        let t = d.A.getChannel(e);
        return t?.getGuildId();
    },
    G = (e) =>
        null != e.guildId ? f.A.getGuild(e.guildId) : null != e.channelId ? f.A.getGuild(U(e.channelId)) : null,
    F = {
        newline: a().defaultRules.newline,
        paragraph: a().defaultRules.paragraph,
        escape: {
            ...a().defaultRules.escape,
            match: (e, t, n) => (!1 === t.allowEscape ? null : a().defaultRules.escape.match(e, t, n)),
        },
        blockQuote: {
            ...a().defaultRules.blockQuote,
            requiredFirstCharacters: [" ", ">"],
            match(e, t) {
                let { prevCapture: n, inQuote: r, nested: i } = t;
                if (r || i) return null;
                if (null == n) return L.exec(e);
                let s = n[0];
                return w.test(s) ? L.exec(e) : null;
            },
            parse(e, t, n) {
                let r = e[0],
                    i = !!M.exec(r),
                    s = i ? M : P,
                    a = r.replace(s, ""),
                    o = n.inQuote || !1,
                    l = n.inline || !1;
                (n.inQuote = !0), i || (n.inline = !0);
                let u = t(a, n);
                return (
                    (n.inQuote = o),
                    (n.inline = l),
                    0 === u.length && u.push({ type: "text", content: " " }),
                    { content: u, type: "blockQuote" }
                );
            },
        },
        link: I.Ay,
        autolink: { ...a().defaultRules.autolink, parse: k },
        mailto: {
            ...a().defaultRules.mailto,
            match: a().inlineRegex(/^<([^\s<>@]+@[^\s<>@]+\.[^\s<>@]+)>/),
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
            ...a().defaultRules.mailto,
            requiredFirstCharacters: ["<"],
            match: a().inlineRegex(
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
            ...a().defaultRules.url,
            requiredFirstCharacters: ["h", "s"],
            match(e, t) {
                if (!t.inline) return null;
                let n = x.exec(e);
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
            parse: k,
        },
        strong: a().defaultRules.strong,
        em: a().defaultRules.em,
        u: a().defaultRules.u,
        br: a().defaultRules.br,
        text: y.Ay,
        inlineCode: {
            ...a().defaultRules.inlineCode,
            parse(e, t, n) {
                let r = a().defaultRules.inlineCode.parse(e, t, n);
                return !0 === n.parseInlineCodeChildContent ? { ...r, validationChildContent: t(r.content, n) } : r;
            },
        },
        emoticon: {
            order: y.Ay.order,
            requiredFirstCharacters: ["\xaf"],
            match: (e) => /^(¯\\_\(ツ\)_\/¯)/.exec(e),
            parse: (e) => ({ type: "text", content: e[1] }),
        },
        codeBlock: {
            order: a().defaultRules.codeBlock.order,
            requiredFirstCharacters: ["`"],
            match: (e) => /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i.exec(e),
            parse: (e, t, n) => ({ lang: e[1] ?? "", content: e[2] ?? "", inQuote: n.inQuote || n.formatInline || !1 }),
        },
        roleMention: {
            order: y.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => /^<@&(\d+)>/.exec(e),
            parse(e, t, n) {
                let [r, i] = e;
                if (n.returnMentionIds) return { type: "roleMention", id: i };
                let s = G(n),
                    a = null != s ? _.A.getRole(s.id, i) : null;
                if (null == a) return { type: "text", content: `@${D.intl.string(D.t["YV4F/n"])}` };
                let o = (0, u.aF)(s?.id, a) && !(0, l.Qv)(a);
                return {
                    type: "mention",
                    channelId: n.channelId,
                    guildId: null != s ? s.id : null,
                    roleId: i,
                    roleColor: a.color,
                    roleColors: o
                        ? {
                              primaryColor: a.colors?.primary_color,
                              secondaryColor: a.colors?.secondary_color,
                              tertiaryColor: a.colors?.tertiary_color,
                          }
                        : null,
                    roleName: `@${a.name}`,
                    color: a.color,
                    colorString: a.colorString,
                    content: [{ type: "text", content: `@${a.name}` }],
                };
            },
        },
        mention: {
            order: y.Ay.order,
            requiredFirstCharacters: ["<", "@"],
            match(e) {
                let t = /^<@!?(\d+)>|^(@(?:everyone|here))/.exec(e);
                return null == t ? null : t;
            },
            parse(e, t, n) {
                let r, i;
                if (n.returnMentionIds)
                    return null == e[1] ? { type: "mention", text: e[0] } : { type: "mention", id: e[1] };
                let s = p.default.getUser(e[1]),
                    a = d.A.getChannel(n.channelId);
                null != s &&
                    ((i = s.id),
                    (r = s.toString()),
                    null != a && (r = h.Ay.getNickname(a.getGuildId(), n.channelId, s) ?? E.Ay.getName(s)));
                let o = e[1],
                    l = null != o && R.Ut1.test(o.trim()),
                    u = l && n.unknownUserMentionPlaceholder ? `@${D.intl.string(D.t.sKdZ6U)}` : e[0];
                return {
                    userId: i,
                    channelId: n.channelId,
                    viewingChannelId: n.viewingChannelId,
                    guildId: a?.getGuildId(),
                    parsedUserId: l ? o : null,
                    roleName: e[2],
                    content: [{ type: "text", content: null != r ? `@${r}` : u }],
                };
            },
        },
        silentPrefix: {
            order: y.Ay.order,
            requiredFirstCharacters: ["@"],
            match: (e, t, n) => (null == n || "" === n ? /^(@silent(?![^\s]))/.exec(e) : null),
            parse: function (e) {
                return { type: "silentPrefix", content: e[0] };
            },
        },
        channelMention: g.A.channelMention,
        channelOrMessageUrl: g.A.channelOrMessageUrl,
        mediaPostLink: g.A.mediaPostLink,
        attachmentLink: m.A.attachmentLink,
        commandMention: {
            order: a().defaultRules.text.order,
            requiredFirstCharacters: ["<"],
            match: (e) =>
                /^<\/((?:[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?):(\d+)>/u.exec(
                    e,
                ),
            parse(e, t, n) {
                if (n.returnMentionIds) return { type: "commandMention", id: e[2] };
                let [, ...r] = e[1].split(" "),
                    i = `${e[2]}${[...r].map((e) => `${b.v4}${e}`).join("")}`;
                return {
                    channelId: n.channelId,
                    commandId: e[2],
                    commandName: e[1],
                    commandKey: i,
                    content: [{ type: "text", content: `${e[1]}` }],
                };
            },
        },
        timestampMentionInput: {
            order: a().defaultRules.text.order,
            requiredFirstCharacters: ["<"],
            match: (e, t) => (t.allowTimeMentionInput ? /^<@time:([^>]*)>/.exec(e) : null),
            parse: (e) => ({ type: "timestampMentionInput", content: e[1] }),
        },
        emoji: {
            order: y.Ay.order,
            requiredFirstCharacters: [":"],
            match(e) {
                let t = o.Ay.EMOJI_NAME_RE.exec(e);
                return null != t && "" !== o.Ay.convertNameToSurrogate(t[1]) ? t : null;
            },
            parse(e) {
                let t = o.Ay.convertNameToSurrogate(e[1]);
                return { type: "text", content: null == t || "" === t ? `:${e[1]}:` : t };
            },
        },
        soundboard: {
            order: y.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => c.ds.exec(e),
            parse: (e, t, n) => (0, c.Ay)(e, n),
        },
        customEmoji: {
            order: y.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => /^<a?:(\w+):(\d+)>/.exec(e),
            parse: (e) => ({ type: "text", content: `:${e[1]}:` }),
        },
        timestamp: {
            order: y.Ay.order - 1,
            requiredFirstCharacters: ["<"],
            match: (e) => C.l9.exec(e),
            parse(e) {
                let [t, n, r] = e,
                    i = (0, C.EH)(n, r);
                return null == i ? { type: "text", content: t } : ((i.type = "timestamp"), i);
            },
        },
        s: {
            order: a().defaultRules.u.order,
            requiredFirstCharacters: ["~"],
            match: a().inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
            parse: a().defaultRules.u.parse,
        },
        spoiler: {
            order: y.Ay.order,
            requiredFirstCharacters: ["|"],
            match: (e) => R.VFs.exec(e),
            parse: (e, t, n) => ({ content: t(e[1], n), channelId: n.channelId }),
        },
        staticRouteLink: {
            order: y.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => R.P0V.exec(e),
            parse(e, t, n) {
                let [, r, i] = e,
                    s = (0, v.Q)(r),
                    a = (0, v.f)(r, i, G(n)?.id);
                function o(e) {
                    return null == e ? null : [{ type: "text", content: e }];
                }
                return {
                    content: o(s + (null != a ? ` › ${a}` : "")),
                    mainContent: o(s),
                    itemContent: o(a),
                    itemId: i,
                    id: r,
                    guildId: U(n.channelId),
                    channelId: r,
                };
            },
        },
        heading: A.A,
        list: T.A,
        subtext: S.A,
    },
    V = (0, O.A)([F, N.A]),
    B = i().omit(V, ["inlineCode", "codeBlock", "br", "blockQuote", "subtext", "soundboard"]),
    H = i().omit(V, [
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
    ]),
    j = i().omit(V, [
        "codeBlock",
        "br",
        "mention",
        "channel",
        "roleMention",
        "attachmentLink",
        "subtext",
        "soundboard",
    ]),
    Y = i().omit(
        (0, O.A)([
            V,
            {
                inlineCode: {
                    match(e, t, n) {
                        let r = V.codeBlock.match(e, t, n);
                        if (null != r) return r;
                        let i = V.inlineCode.match(e, t, n);
                        if (null != i) return i;
                    },
                },
            },
        ]),
        ["blockQuote", "codeBlock", "br"],
    ),
    W = i().omit(V, ["codeBlock", "br", "blockQuote"]),
    K = i().omit(V, [
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
    $ = i().omit(V, ["codeBlock", "blockQuote", "br"]),
    z = i().omit(V, ["codeBlock", "br", "inlineCode"]);
function q(e, t) {
    return 0 === e.length || 0 === t || "" === e.charAt(t - 1).trim();
}
let X = (0, O.A)([
        {
            highlightWord: {
                order: -1,
                match(e, t) {
                    if (
                        (null != t.parseDepth && t.parseDepth > 10) ||
                        null == t.highlightWord ||
                        0 === t.highlightWord.length
                    )
                        return null;
                    let n = e.indexOf(t.highlightWord);
                    if (-1 === n) return null;
                    let r = !q(e, n);
                    if (r)
                        do (n = e.indexOf(t.highlightWord, n + 1)), (r = !q(e, n));
                        while (r && -1 !== n);
                    if (-1 === n) return null;
                    let i = e.substring(0, n),
                        s = e.substring(n + t.highlightWord.length);
                    return [e, t.highlightWord, i, s];
                },
                parse(e, t, n) {
                    let r = n.parseDepth ?? 0,
                        i = { ...n, parseDepth: r + 1 },
                        s = t(e[2], i),
                        a = t(e[3], i);
                    return [...s, { type: "highlight", content: e[1] }, ...a];
                },
            },
        },
        i().omit(V, ["url"]),
    ]),
    Q = {
        RULES: V,
        CHANNEL_TOPIC_RULES: B,
        VOICE_CHANNEL_STATUS_RULES: H,
        EMBED_TITLE_RULES: j,
        INLINE_REPLY_RULES: Y,
        GUILD_VERIFICATION_FORM_RULES: W,
        GUILD_EVENT_RULES: $,
        PROFILE_BIO_RULES: K,
        AUTO_MODERATION_SYSTEM_MESSAGE_RULES: X,
        NATIVE_SEARCH_RESULT_LINK_RULES: z,
    };
