"use strict";
n.d(t, { A: () => eC }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(791332),
    a = n.n(s),
    o = n(7584),
    l = n(744700),
    u = n(176201),
    c = n(676608),
    d = n(113051),
    _ = n(734057),
    h = n(760751),
    f = n(317525),
    E = n(71393),
    p = n(287809),
    m = n(486020),
    g = n(562153),
    A = n(427262);
let I =
        /^https:\/\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\/(?:attachments|ephemeral-attachments)\/\d+\/\d+\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/,
    T = {
        order: a().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ["h"],
        match: (e) => I.exec(e),
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
var S = n(717125),
    N = n(47167),
    C = n(499211),
    y = n(376943),
    O = n(576705),
    R = n(994500),
    v = n(871237),
    b = n(240248),
    L = n(465365),
    D = n(704726),
    w = n(652215),
    P = n(375708);
function M(e) {
    let t = _.A.getChannel(e);
    return t?.getGuildId();
}
function x(e) {
    return {
        type: "guild",
        guildId: e.id,
        content: (0, b.EJ)(e.name, 32),
        icon: m.Ay.getGuildIconURL({ id: e.id, icon: e.icon, size: 40 }),
    };
}
function U(e, t) {
    let n = F((0, b.EJ)(e.name, 32));
    return {
        type: "channel",
        content: ["italics" === t ? { type: "em", content: [n] } : n],
        channelType: e.type,
        iconType: e.iconType,
    };
}
function k(e) {
    return { type: "channel", content: [F("")], iconType: e ? "post" : "message" };
}
function G(e, t) {
    let n = _.A.getChannel(e),
        i = (0, C.p)(e, _.A, S.A, O.A).isSubscriptionGated,
        r = (0, v.QG)(n) ?? "text";
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
              name: (0, N.m1)(n, p.default, R.A),
              isDm: n.isPrivate(),
              isForumPost: n.isForumPost(),
              isMentionable: (0, L.Y)(n.type),
              canViewChannel: (0, y.nc)(n),
              roleSubscriptionGated: i,
              iconType: r,
              parentId: n.parent_id,
          }
        : null;
}
function V(e) {
    return { type: "link", content: [{ type: "text", content: e }], target: e, title: void 0 };
}
function F(e) {
    return { type: "text", content: e };
}
function B(e, t, n, i, r) {
    let s = E.A.getGuild(e),
        a = s?.id === i;
    return {
        type: "channelMention",
        guildId: e,
        channelId: t,
        messageId: n,
        originalLink: r,
        inContent: null == s || a ? null : [x(s)],
        content: [
            U({ name: P.intl.string(P.t.zLZPmk).toLowerCase(), type: w.rbe.UNKNOWN, iconType: "text" }, "italics"),
        ],
    };
}
function H(e, t, n, i) {
    if (!e.canViewChannel) {
        let n;
        return (
            (n = {
                type: "channel",
                content: [F(e.roleSubscriptionGated ? e.name : P.intl.string(P.t["/YzI63"]))],
                channelType: e.roleSubscriptionGated ? e.type : w.rbe.UNKNOWN,
                iconType: "locked",
            }),
            { type: "channelMention", guildId: e.guildId, channelId: e.id, messageId: t, inContent: null, content: [n] }
        );
    }
    if (!e.isMentionable) return F(`#${e.name}`);
    let r = { type: "channelMention", channelId: e.id, guildId: e.guildId, messageId: t, originalLink: i },
        s = E.A.getGuild(e.guildId);
    if (null == s)
        if (e.isDm) return { ...r, guildId: w.ME, inContent: [U(e)], content: [k(!1)] };
        else return null != i ? V(i) : F(`#${P.intl.string(P.t.J90oLW)}`);
    let a = e.guildId === n;
    return {
        ...r,
        ...(function (e, t, n, i) {
            let r = x(e),
                s = U(t),
                a = k(t.isForumPost);
            if (n && i) {
                if (t.isForumPost) {
                    let e = _.A.getChannel(t.parentId);
                    if (null != e)
                        return {
                            inContent: [
                                U({
                                    name: (0, N.m1)(e, p.default, R.A),
                                    type: e.type,
                                    iconType: (0, v.QG)(e) ?? "forum",
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
let j = {
        order: D.Ay.order,
        requiredFirstCharacters: ["<"],
        match: (e) => /^<#(\d+)>/.exec(e),
        parse(e, t, n) {
            let i = e[1];
            if (n.returnMentionIds) return { type: "channelMention", id: i };
            let r = G(i, n.mentionChannels);
            return null == r ? B(null, i, null, M(n.channelId)) : H(r, null, M(n.channelId));
        },
    },
    W = {
        order: a().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ["h"],
        match(e) {
            let t = y.Ju.exec(e);
            return null != t && ((null != t[2] && /\D/.test(t[2])) || (null != t[3] && /\D/.test(t[3]))) ? null : t;
        },
        parse(e, t, n) {
            let i = e[0],
                r = e[1],
                s = e[2],
                a = e[3];
            if (null == s) return V(i);
            let o = G(s, null);
            return null == o ? B(r, s, a, M(n.channelId), i) : H(o, a, M(n.channelId), i);
        },
    },
    Y = {
        order: a().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ["h"],
        match: (e) => y.En.exec(e),
        parse(e, t, n) {
            let i = e[0],
                r = e[1],
                s = e[2],
                a = e[3],
                o = e[4];
            if (null == s || null == a) return V(i);
            let l = G(a, null);
            if (null != l) return H(l, o, M(n.channelId), i);
            let u = G(s, null);
            return null != u ? H(u, o, M(n.channelId), i) : B(r, s, o, M(n.channelId), i);
        },
    };
var K = n(223637),
    $ = n(694403),
    z = n(873879),
    q = n(683412),
    Z = n(159273),
    X = n(690521);
let Q = {
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
                : { name: `:${n}:`, surrogate: i, src: X.Ay.getURL(i) };
        },
    },
    customEmoji: {
        order: a().defaultRules.codeBlock.order,
        requiredFirstCharacters: ["<"],
        match: (e) => /^<(a)?:(\w+):(\d+)>/.exec(e),
        parse(e, t, n) {
            let [i, r, s, a] = e,
                { guildId: o } = n,
                l = Z.Ay.getDisambiguatedEmojiContext(o).getById(a),
                u = null == l || l.require_colons;
            return null != l && (s = l.name), { emojiId: a, name: u ? `:${s}:` : s, animated: "a" === r };
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
                            src: X.Ay.getURL(e.surrogate),
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
var J = n(78390),
    ee = n(379418),
    et = n(551965),
    en = n(73510),
    ei = n(827669);
let er = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
    es = /^$|\n *$/,
    ea = /^ *>>> ?/,
    eo = /^ *> ?/gm,
    el = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/;
function eu(e) {
    let t = (0, $.W1)(e[1]);
    if (null == t) return { type: "text", content: e[1] };
    let { displayTarget: n, target: i } = t;
    return { type: "link", content: [{ type: "text", content: n }], target: i, title: void 0 };
}
function ec(e) {
    let t = _.A.getChannel(e);
    return t?.getGuildId();
}
function ed(e) {
    return null != e.guildId ? E.A.getGuild(e.guildId) : null != e.channelId ? E.A.getGuild(ec(e.channelId)) : null;
}
let e_ = {
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
                if (null == n) return er.exec(e);
                let s = n[0];
                return es.test(s) ? er.exec(e) : null;
            },
            parse(e, t, n) {
                let i = e[0],
                    r = !!ea.exec(i),
                    s = r ? ea : eo,
                    a = i.replace(s, ""),
                    o = n.inQuote || !1,
                    l = n.inline || !1;
                (n.inQuote = !0), r || (n.inline = !0);
                let u = t(a, n);
                return (
                    (n.inQuote = o),
                    (n.inline = l),
                    0 === u.length && u.push({ type: "text", content: " " }),
                    { content: u, type: "blockQuote" }
                );
            },
        },
        link: $.Ay,
        autolink: { ...a().defaultRules.autolink, parse: eu },
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
                let n = el.exec(e);
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
            parse: eu,
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
            match: (e) => /^(\xaf\\_\(\u30c4\)_\/\xaf)/.exec(e),
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
                let s = ed(n),
                    a = null != s ? f.A.getRole(s.id, r) : null;
                if (null == a) return { type: "text", content: `@${P.intl.string(P.t["YV4F/n"])}` };
                let o = (0, c.aF)(s?.id, a) && !(0, u.Qv)(a);
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
                let s = p.default.getUser(e[1]),
                    a = _.A.getChannel(n.channelId);
                null != s &&
                    ((r = s.id),
                    (i = s.toString()),
                    null != a && (i = g.Ay.getNickname(a.getGuildId(), n.channelId, s) ?? A.Ay.getName(s)));
                let o = e[1],
                    l = null != o && w.Ut1.test(o.trim()),
                    u = l && n.unknownUserMentionPlaceholder ? `@${P.intl.string(P.t.sKdZ6U)}` : e[0];
                return {
                    userId: r,
                    channelId: n.channelId,
                    viewingChannelId: n.viewingChannelId,
                    guildId: a?.getGuildId(),
                    parsedUserId: l ? o : null,
                    roleName: e[2],
                    content: [{ type: "text", content: null != i ? `@${i}` : u }],
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
        channelMention: j,
        channelOrMessageUrl: W,
        mediaPostLink: Y,
        attachmentLink: T,
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
                    r = `${e[2]}${[...i].map((e) => `${en.v4}${e}`).join("")}`;
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
        gameMention: {
            order: a().defaultRules.text.order,
            requiredFirstCharacters: ["<"],
            match: (e, t) => (t.allowGameMentions ? ei.P.exec(e) : null),
            parse(e, t, n) {
                let i,
                    r = e[1],
                    s = n.mentionGames?.get(r),
                    a = h.A.getDetectableGame(r);
                if (!0 !== n.returnMentionIds && null == s && null == a)
                    return { type: "text", content: `@${P.intl.string(P.t["11pdXZ"])}` };
                let o = s?.name ?? a?.name ?? P.intl.string(P.t["11pdXZ"]),
                    u = (0, l.A)(r, s?.icon, { size: 32 });
                return (
                    null != u
                        ? (i = u)
                        : a?.icon != null && (i = m.Ay.getApplicationIconURL({ id: a.id, icon: a.icon, size: 32 })),
                    {
                        type: "gameMention",
                        gameId: r,
                        channelId: n.channelId,
                        gameName: s?.name,
                        gameIcon: s?.icon,
                        icon: i,
                        displayName: o,
                    }
                );
            },
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
            match: (e) => d.ds.exec(e),
            parse: (e, t, n) => (0, d.Ay)(e, n),
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
            match: (e) => ee.l9.exec(e),
            parse(e) {
                let [t, n, i] = e,
                    r = (0, ee.EH)(n, i);
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
            match: (e) => w.VFs.exec(e),
            parse: (e, t, n) => ({ content: t(e[1], n), channelId: n.channelId }),
        },
        staticRouteLink: {
            order: D.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => w.P0V.exec(e),
            parse(e, t, n) {
                let [, i, r] = e,
                    s = (0, J.Q)(i),
                    a = (0, J.f)(i, r, ed(n)?.id);
                function o(e) {
                    return null == e ? null : [{ type: "text", content: e }];
                }
                return {
                    content: o(s + (null != a ? ` \u{203A} ${a}` : "")),
                    mainContent: o(s),
                    itemContent: o(a),
                    itemId: r,
                    id: i,
                    guildId: ec(n.channelId),
                    channelId: i,
                };
            },
        },
        heading: K.A,
        list: z.A,
        subtext: q.A,
    },
    eh = (0, et.A)([e_, Q]),
    ef = r().omit(eh, ["inlineCode", "codeBlock", "br", "blockQuote", "subtext", "soundboard"]),
    eE = r().omit(eh, [
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
    ep = r().omit(eh, [
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
    em = r().omit(
        (0, et.A)([
            eh,
            {
                inlineCode: {
                    match(e, t, n) {
                        let i = eh.codeBlock.match(e, t, n);
                        if (null != i) return i;
                        let r = eh.inlineCode.match(e, t, n);
                        if (null != r) return r;
                    },
                },
            },
        ]),
        ["blockQuote", "codeBlock", "br"],
    ),
    eg = r().omit(eh, ["codeBlock", "br", "blockQuote"]),
    eA = r().omit(eh, [
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
    eI = r().omit(eh, ["codeBlock", "blockQuote", "br"]),
    eT = r().omit(eh, ["codeBlock", "br", "inlineCode"]);
function eS(e, t) {
    return 0 === e.length || 0 === t || "" === e.charAt(t - 1).trim();
}
let eN = (0, et.A)([
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
                    let i = !eS(e, n);
                    if (i)
                        do (n = e.indexOf(t.highlightWord, n + 1)), (i = !eS(e, n));
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
        r().omit(eh, ["url"]),
    ]),
    eC = {
        RULES: eh,
        CHANNEL_TOPIC_RULES: ef,
        VOICE_CHANNEL_STATUS_RULES: eE,
        EMBED_TITLE_RULES: ep,
        INLINE_REPLY_RULES: em,
        GUILD_VERIFICATION_FORM_RULES: eg,
        GUILD_EVENT_RULES: eI,
        PROFILE_BIO_RULES: eA,
        AUTO_MODERATION_SYSTEM_MESSAGE_RULES: eN,
        NATIVE_SEARCH_RESULT_LINK_RULES: eT,
    };
