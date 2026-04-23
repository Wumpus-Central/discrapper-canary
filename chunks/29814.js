"use strict";
n.d(t, { A: () => eT }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(791332),
    a = n.n(s),
    o = n(7584),
    l = n(176201),
    d = n(676608),
    _ = n(335432),
    u = n(734057),
    c = n(317525),
    E = n(71393),
    h = n(287809),
    m = n(562153),
    f = n(427262);
let g =
        /^https:\/\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\/(?:attachments|ephemeral-attachments)\/\d+\/\d+\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/,
    p = {
        order: a().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ["h"],
        match: (e) => g.exec(e),
        parse(e, t, n) {
            var i;
            let r = e[0];
            return {
                type: "attachmentLink",
                content: [{ type: "text", content: (i = e[1]) }],
                attachmentUrl: r,
                attachmentName: i,
            };
        },
    };
var A = n(717125),
    I = n(47167),
    T = n(721592),
    S = n(376943),
    N = n(576705),
    C = n(994500),
    R = n(486020),
    O = n(147036),
    y = n(240248),
    v = n(465365),
    D = n(704726),
    L = n(652215),
    b = n(985018);
let w = (e) => {
    let t = u.A.getChannel(e);
    return t?.getGuildId();
};
function P(e) {
    return {
        type: "guild",
        guildId: e.id,
        content: (0, y.EJ)(e.name, 32),
        icon: R.Ay.getGuildIconURL({ id: e.id, icon: e.icon, size: 40 }),
    };
}
function k(e, t) {
    let n = G((0, y.EJ)(e.name, 32));
    return {
        type: "channel",
        content: ["italics" === t ? { type: "em", content: [n] } : n],
        channelType: e.type,
        iconType: e.iconType,
    };
}
function M(e) {
    return { type: "channel", content: [G("")], iconType: e ? "post" : "message" };
}
function U(e, t) {
    let n = u.A.getChannel(e),
        i = (0, T.p)(e, u.A, A.A, N.A).isSubscriptionGated,
        r = (0, O.QG)(n) ?? "text";
    if (null != t) {
        let s = t.find((t) => t.id === e);
        if (null != s)
            return {
                type: s.type,
                id: s.id,
                guildId: s.guild_id,
                name: s.name,
                isDm: null != n && n.isPrivate(),
                isForumPost: null != n && n.isForumPost(),
                isMentionable: !0,
                canViewChannel: !0,
                roleSubscriptionGated: i,
                iconType: r,
                parentId: n?.parent_id,
            };
    }
    return null != n
        ? {
              type: n.type,
              id: n.id,
              guildId: n.guild_id,
              name: (0, I.m1)(n, h.default, C.A),
              isDm: n.isPrivate(),
              isForumPost: n.isForumPost(),
              isMentionable: (0, v.Y)(n.type),
              canViewChannel: (0, S.nc)(n),
              roleSubscriptionGated: i,
              iconType: r,
              parentId: n.parent_id,
          }
        : null;
}
function x(e) {
    return { type: "link", content: [{ type: "text", content: e }], target: e, title: void 0 };
}
function G(e) {
    return { type: "text", content: e };
}
function V(e, t, n, i, r) {
    let s = E.A.getGuild(e),
        a = s?.id === i;
    return {
        type: "channelMention",
        guildId: e,
        channelId: t,
        messageId: n,
        originalLink: r,
        inContent: null == s || a ? null : [P(s)],
        content: [
            k({ name: b.intl.string(b.t.zLZPmk).toLowerCase(), type: L.rbe.UNKNOWN, iconType: "text" }, "italics"),
        ],
    };
}
function F(e, t, n, i) {
    if (!e.canViewChannel) {
        let n;
        return (
            (n = {
                type: "channel",
                content: [G(e.roleSubscriptionGated ? e.name : b.intl.string(b.t["/YzI63"]))],
                channelType: e.roleSubscriptionGated ? e.type : L.rbe.UNKNOWN,
                iconType: "locked",
            }),
            { type: "channelMention", guildId: e.guildId, channelId: e.id, messageId: t, inContent: null, content: [n] }
        );
    }
    if (!e.isMentionable) return G(`#${e.name}`);
    let r = { type: "channelMention", channelId: e.id, guildId: e.guildId, messageId: t, originalLink: i },
        s = E.A.getGuild(e.guildId);
    if (null == s)
        if (e.isDm) return { ...r, guildId: L.ME, inContent: [k(e)], content: [M(!1)] };
        else return null != i ? x(i) : G(`#${b.intl.string(b.t.J90oLW)}`);
    let a = e.guildId === n;
    return {
        ...r,
        ...(function (e, t, n, i) {
            let r = P(e),
                s = k(t),
                a = M(t.isForumPost);
            if (n && i) {
                if (t.isForumPost) {
                    let e = u.A.getChannel(t.parentId);
                    if (null != e)
                        return {
                            inContent: [
                                k({
                                    name: (0, I.m1)(e, h.default, C.A),
                                    type: e.type,
                                    iconType: (0, O.QG)(e) ?? "forum",
                                }),
                            ],
                            content: [s],
                        };
                }
                return { inContent: [s], content: [a] };
            }
            return n && !i
                ? { inContent: null, content: [s] }
                : !n && i
                  ? { inContent: [r], content: [t.isForumPost ? s : a] }
                  : n || i
                    ? void 0
                    : { inContent: [r], content: [s] };
        })(s, e, a, null != t),
    };
}
let B = {
        order: D.Ay.order,
        requiredFirstCharacters: ["<"],
        match: (e) => /^<#(\d+)>/.exec(e),
        parse(e, t, n) {
            let i = e[1];
            if (n.returnMentionIds) return { type: "channelMention", id: i };
            let r = U(i, n.mentionChannels);
            return null == r ? V(null, i, null, w(n.channelId)) : F(r, null, w(n.channelId));
        },
    },
    H = {
        order: a().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ["h"],
        match(e) {
            let t = S.Ju.exec(e);
            return null != t && ((null != t[2] && /\D/.test(t[2])) || (null != t[3] && /\D/.test(t[3]))) ? null : t;
        },
        parse(e, t, n) {
            let i = e[0],
                r = e[1],
                s = e[2],
                a = e[3];
            if (null == s) return x(i);
            let o = U(s, null);
            return null == o ? V(r, s, a, w(n.channelId), i) : F(o, a, w(n.channelId), i);
        },
    },
    j = {
        order: a().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ["h"],
        match: (e) => S.En.exec(e),
        parse(e, t, n) {
            let i = e[0],
                r = e[1],
                s = e[2],
                a = e[3],
                o = e[4];
            if (null == s || null == a) return x(i);
            let l = U(a, null);
            if (null != l) return F(l, o, w(n.channelId), i);
            let d = U(s, null);
            return null != d ? F(d, o, w(n.channelId), i) : V(r, s, o, w(n.channelId), i);
        },
    };
var W = n(223637),
    Y = n(527214),
    K = n(873879),
    z = n(683412),
    $ = n(159273),
    q = n(690521);
let X = {
    s: { requiredFirstCharacters: ["~"], match: a().inlineRegex(/^~~([\s\S]+?)~~(?!_)/) },
    highlight: { order: D.Ay.order, match: () => null },
    emoji: {
        order: D.Ay.order,
        requiredFirstCharacters: [":"],
        match(e) {
            let t = o.Ay.EMOJI_NAME_AND_DIVERSITY_RE.exec(e);
            return null != t && "" !== o.Ay.convertNameToSurrogate(t[1]) ? t : null;
        },
        parse(e) {
            let [t, n] = e,
                i = o.Ay.convertNameToSurrogate(n);
            return null == i || "" === i
                ? { type: "text", content: t }
                : { name: `:${n}:`, surrogate: i, src: q.Ay.getURL(i) };
        },
    },
    customEmoji: {
        order: a().defaultRules.codeBlock.order,
        requiredFirstCharacters: ["<"],
        match: (e) => /^<(a)?:(\w+):(\d+)>/.exec(e),
        parse(e, t, n) {
            let [i, r, s, a] = e,
                { guildId: o } = n,
                l = $.Ay.getDisambiguatedEmojiContext(o).getById(a),
                d = null == l || l.require_colons;
            return null != l && (s = l.name), { emojiId: a, name: d ? `:${s}:` : s, animated: "a" === r };
        },
    },
    text: {
        parse(e) {
            let t = o.Ay.findInlineEmojisFromSurrogates(e[0]),
                n = 0;
            return t.map((e) => {
                if ("text" === e.type) {
                    let t = { index: n, 0: e.text };
                    return (n += e.text.length), { type: "text", content: e.text, originalMatch: t };
                }
                {
                    let t = { index: n, 0: e.surrogate };
                    return (
                        (n += e.surrogate.length),
                        {
                            type: "emoji",
                            name: e.emojiName,
                            surrogate: e.surrogate,
                            src: q.Ay.getURL(e.surrogate),
                            originalMatch: t,
                        }
                    );
                }
            });
        },
    },
    looseEm: {
        ...a().defaultRules.em,
        match: a().inlineRegex(
            RegExp(
                "^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?) {1,2}\\*(?!\\*)",
            ),
        ),
        parse: (e, t, n) => ({ type: "em", content: t(e[1], n), originalMatch: e }),
    },
};
var Z = n(78390),
    Q = n(379418),
    J = n(551965),
    ee = n(73510);
let et = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
    en = /^$|\n *$/,
    ei = /^ *>>> ?/,
    er = /^ *> ?/gm,
    es = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/;
function ea(e) {
    let t = (0, Y.W1)(e[1]);
    if (null == t) return { type: "text", content: e[1] };
    let { displayTarget: n, target: i } = t;
    return { type: "link", content: [{ type: "text", content: n }], target: i, title: void 0 };
}
let eo = (e) => {
        let t = u.A.getChannel(e);
        return t?.getGuildId();
    },
    el = (e) =>
        null != e.guildId ? E.A.getGuild(e.guildId) : null != e.channelId ? E.A.getGuild(eo(e.channelId)) : null,
    ed = {
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
                let { prevCapture: n, inQuote: i, nested: r } = t;
                if (i || r) return null;
                if (null == n) return et.exec(e);
                let s = n[0];
                return en.test(s) ? et.exec(e) : null;
            },
            parse(e, t, n) {
                let i = e[0],
                    r = !!ei.exec(i),
                    s = r ? ei : er,
                    a = i.replace(s, ""),
                    o = n.inQuote || !1,
                    l = n.inline || !1;
                (n.inQuote = !0), r || (n.inline = !0);
                let d = t(a, n);
                return (
                    (n.inQuote = o),
                    (n.inline = l),
                    0 === d.length && d.push({ type: "text", content: " " }),
                    { content: d, type: "blockQuote" }
                );
            },
        },
        link: Y.Ay,
        autolink: { ...a().defaultRules.autolink, parse: ea },
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
                let n = es.exec(e);
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
            parse: ea,
        },
        strong: a().defaultRules.strong,
        em: a().defaultRules.em,
        u: a().defaultRules.u,
        br: a().defaultRules.br,
        text: D.Ay,
        inlineCode: {
            ...a().defaultRules.inlineCode,
            parse(e, t, n) {
                let i = a().defaultRules.inlineCode.parse(e, t, n);
                return !0 === n.parseInlineCodeChildContent ? { ...i, validationChildContent: t(i.content, n) } : i;
            },
        },
        emoticon: {
            order: D.Ay.order,
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
            order: D.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => /^<@&(\d+)>/.exec(e),
            parse(e, t, n) {
                let [i, r] = e;
                if (n.returnMentionIds) return { type: "roleMention", id: r };
                let s = el(n),
                    a = null != s ? c.A.getRole(s.id, r) : null;
                if (null == a) return { type: "text", content: `@${b.intl.string(b.t["YV4F/n"])}` };
                let o = (0, d.aF)(s?.id, a) && !(0, l.Qv)(a);
                return {
                    type: "mention",
                    channelId: n.channelId,
                    guildId: null != s ? s.id : null,
                    roleId: r,
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
            order: D.Ay.order,
            requiredFirstCharacters: ["<", "@"],
            match(e) {
                let t = /^<@!?(\d+)>|^(@(?:everyone|here))/.exec(e);
                return null == t ? null : t;
            },
            parse(e, t, n) {
                let i, r;
                if (n.returnMentionIds)
                    return null == e[1] ? { type: "mention", text: e[0] } : { type: "mention", id: e[1] };
                let s = h.default.getUser(e[1]),
                    a = u.A.getChannel(n.channelId);
                null != s &&
                    ((r = s.id),
                    (i = s.toString()),
                    null != a && (i = m.Ay.getNickname(a.getGuildId(), n.channelId, s) ?? f.Ay.getName(s)));
                let o = e[1],
                    l = null != o && L.Ut1.test(o.trim()),
                    d = l && n.unknownUserMentionPlaceholder ? `@${b.intl.string(b.t.sKdZ6U)}` : e[0];
                return {
                    userId: r,
                    channelId: n.channelId,
                    viewingChannelId: n.viewingChannelId,
                    guildId: a?.getGuildId(),
                    parsedUserId: l ? o : null,
                    roleName: e[2],
                    content: [{ type: "text", content: null != i ? `@${i}` : d }],
                };
            },
        },
        silentPrefix: {
            order: D.Ay.order,
            requiredFirstCharacters: ["@"],
            match: (e, t, n) => (null == n || "" === n ? /^(@silent(?![^\s]))/.exec(e) : null),
            parse: function (e) {
                return { type: "silentPrefix", content: e[0] };
            },
        },
        channelMention: B,
        channelOrMessageUrl: H,
        mediaPostLink: j,
        attachmentLink: p,
        commandMention: {
            order: a().defaultRules.text.order,
            requiredFirstCharacters: ["<"],
            match: (e) =>
                /^<\/((?:[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?):(\d+)>/u.exec(
                    e,
                ),
            parse(e, t, n) {
                if (n.returnMentionIds) return { type: "commandMention", id: e[2] };
                let [, ...i] = e[1].split(" "),
                    r = `${e[2]}${[...i].map((e) => `${ee.v4}${e}`).join("")}`;
                return {
                    channelId: n.channelId,
                    commandId: e[2],
                    commandName: e[1],
                    commandKey: r,
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
            order: D.Ay.order,
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
            order: D.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => _.ds.exec(e),
            parse: (e, t, n) => (0, _.Ay)(e, n),
        },
        customEmoji: {
            order: D.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => /^<a?:(\w+):(\d+)>/.exec(e),
            parse: (e) => ({ type: "text", content: `:${e[1]}:` }),
        },
        timestamp: {
            order: D.Ay.order - 1,
            requiredFirstCharacters: ["<"],
            match: (e) => Q.l9.exec(e),
            parse(e) {
                let [t, n, i] = e,
                    r = (0, Q.EH)(n, i);
                return null == r ? { type: "text", content: t } : ((r.type = "timestamp"), r);
            },
        },
        s: {
            order: a().defaultRules.u.order,
            requiredFirstCharacters: ["~"],
            match: a().inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
            parse: a().defaultRules.u.parse,
        },
        spoiler: {
            order: D.Ay.order,
            requiredFirstCharacters: ["|"],
            match: (e) => L.VFs.exec(e),
            parse: (e, t, n) => ({ content: t(e[1], n), channelId: n.channelId }),
        },
        staticRouteLink: {
            order: D.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => L.P0V.exec(e),
            parse(e, t, n) {
                let [, i, r] = e,
                    s = (0, Z.Q)(i),
                    a = (0, Z.f)(i, r, el(n)?.id);
                function o(e) {
                    return null == e ? null : [{ type: "text", content: e }];
                }
                return {
                    content: o(s + (null != a ? ` › ${a}` : "")),
                    mainContent: o(s),
                    itemContent: o(a),
                    itemId: r,
                    id: i,
                    guildId: eo(n.channelId),
                    channelId: i,
                };
            },
        },
        heading: W.A,
        list: K.A,
        subtext: z.A,
    },
    e_ = (0, J.A)([ed, X]),
    eu = r().omit(e_, ["inlineCode", "codeBlock", "br", "blockQuote", "subtext", "soundboard"]),
    ec = r().omit(e_, [
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
    eE = r().omit(e_, [
        "codeBlock",
        "br",
        "mention",
        "channel",
        "roleMention",
        "attachmentLink",
        "subtext",
        "soundboard",
    ]),
    eh = r().omit(
        (0, J.A)([
            e_,
            {
                inlineCode: {
                    match(e, t, n) {
                        let i = e_.codeBlock.match(e, t, n);
                        if (null != i) return i;
                        let r = e_.inlineCode.match(e, t, n);
                        if (null != r) return r;
                    },
                },
            },
        ]),
        ["blockQuote", "codeBlock", "br"],
    ),
    em = r().omit(e_, ["codeBlock", "br", "blockQuote"]),
    ef = r().omit(e_, [
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
    eg = r().omit(e_, ["codeBlock", "blockQuote", "br"]),
    ep = r().omit(e_, ["codeBlock", "br", "inlineCode"]);
function eA(e, t) {
    return 0 === e.length || 0 === t || "" === e.charAt(t - 1).trim();
}
let eI = (0, J.A)([
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
                    let i = !eA(e, n);
                    if (i)
                        do (n = e.indexOf(t.highlightWord, n + 1)), (i = !eA(e, n));
                        while (i && -1 !== n);
                    if (-1 === n) return null;
                    let r = e.substring(0, n),
                        s = e.substring(n + t.highlightWord.length);
                    return [e, t.highlightWord, r, s];
                },
                parse(e, t, n) {
                    let i = n.parseDepth ?? 0,
                        r = { ...n, parseDepth: i + 1 },
                        s = t(e[2], r),
                        a = t(e[3], r);
                    return [...s, { type: "highlight", content: e[1] }, ...a];
                },
            },
        },
        r().omit(e_, ["url"]),
    ]),
    eT = {
        RULES: e_,
        CHANNEL_TOPIC_RULES: eu,
        VOICE_CHANNEL_STATUS_RULES: ec,
        EMBED_TITLE_RULES: eE,
        INLINE_REPLY_RULES: eh,
        GUILD_VERIFICATION_FORM_RULES: em,
        GUILD_EVENT_RULES: eg,
        PROFILE_BIO_RULES: ef,
        AUTO_MODERATION_SYSTEM_MESSAGE_RULES: eI,
        NATIVE_SEARCH_RESULT_LINK_RULES: ep,
    };
