"use strict";
n.d(t, { Ay: () => eC }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(478676),
    s = n.n(a),
    l = n(7584),
    o = n(176201),
    d = n(676608),
    c = n(113051),
    u = n(734057),
    _ = n(317525),
    E = n(71393),
    A = n(287809),
    h = n(562153),
    I = n(427262);
let f = Array.from(n(256964).p)
        .map((e) => e.replaceAll("/", ""))
        .join("|"),
    p = RegExp(
        `^https://(?:(?:media|images)\\.discordapp\\.net|(?:cdn\\.discordapp\\.com))/(?:${f})/\\d+/\\d+/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?`,
    ),
    T = {
        order: s().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ["h"],
        match: (e) => p.exec(e),
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
var m = n(717125),
    g = n(47167),
    S = n(499211),
    N = n(376943),
    C = n(576705),
    O = n(994500),
    R = n(486020),
    L = n(871237),
    y = n(240248),
    D = n(465365),
    v = n(704726),
    b = n(652215),
    M = n(375708);
function P(e) {
    let t = u.A.getChannel(e);
    return t?.getGuildId();
}
function U(e) {
    return {
        type: "guild",
        guildId: e.id,
        content: (0, y.EJ)(e.name, 32),
        icon: R.Ay.getGuildIconURL({ id: e.id, icon: e.icon, size: 40 }),
    };
}
function w(e, t) {
    let n = F((0, y.EJ)(e.name, 32));
    return {
        type: "channel",
        content: ["italics" === t ? { type: "em", content: [n] } : n],
        channelType: e.type,
        iconType: e.iconType,
    };
}
function G(e) {
    return { type: "channel", content: [F("")], iconType: e ? "post" : "message" };
}
function x(e, t) {
    let n = u.A.getChannel(e),
        i = (0, S.p)(e, u.A, m.A, C.A).isSubscriptionGated,
        r = (0, L.QG)(n) ?? "text";
    if (null != t) {
        let a = t.find((t) => t.id === e);
        if (null != a)
            return {
                type: a.type,
                id: a.id,
                guildId: a.guild_id,
                name: a.name,
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
              name: (0, g.m1)(n, A.default, O.A),
              isDm: n.isPrivate(),
              isForumPost: n.isForumPost(),
              isMentionable: (0, D.Y)(n.type),
              canViewChannel: (0, N.nc)(n),
              roleSubscriptionGated: i,
              iconType: r,
              parentId: n.parent_id,
          }
        : null;
}
function k(e) {
    return { type: "link", content: [{ type: "text", content: e }], target: e, title: void 0 };
}
function F(e) {
    return { type: "text", content: e };
}
function V(e, t, n, i, r) {
    let a = E.A.getGuild(e),
        s = a?.id === i;
    return {
        type: "channelMention",
        guildId: e,
        channelId: t,
        messageId: n,
        originalLink: r,
        inContent: null == a || s ? null : [U(a)],
        content: [
            w({ name: M.intl.string(M.t.zLZPmk).toLowerCase(), type: b.rbe.UNKNOWN, iconType: "text" }, "italics"),
        ],
    };
}
function B(e, t, n, i) {
    if (!e.canViewChannel) {
        let n;
        return (
            (n = {
                type: "channel",
                content: [F(e.roleSubscriptionGated ? e.name : M.intl.string(M.t["/YzI63"]))],
                channelType: e.roleSubscriptionGated ? e.type : b.rbe.UNKNOWN,
                iconType: "locked",
            }),
            { type: "channelMention", guildId: e.guildId, channelId: e.id, messageId: t, inContent: null, content: [n] }
        );
    }
    if (!e.isMentionable) return F(`#${e.name}`);
    let r = { type: "channelMention", channelId: e.id, guildId: e.guildId, messageId: t, originalLink: i },
        a = E.A.getGuild(e.guildId);
    if (null == a)
        if (e.isDm) return { ...r, guildId: b.ME, inContent: [w(e)], content: [G(!1)] };
        else return null != i ? k(i) : F(`#${M.intl.string(M.t.J90oLW)}`);
    let s = e.guildId === n;
    return {
        ...r,
        ...(function (e, t, n, i) {
            let r = U(e),
                a = w(t),
                s = G(t.isForumPost);
            if (n && i) {
                if (t.isForumPost) {
                    let e = u.A.getChannel(t.parentId);
                    if (null != e)
                        return {
                            inContent: [
                                w({
                                    name: (0, g.m1)(e, A.default, O.A),
                                    type: e.type,
                                    iconType: (0, L.QG)(e) ?? "forum",
                                }),
                            ],
                            content: [a],
                        };
                }
                return { inContent: [a], content: [s] };
            }
            return n && !i
                ? { inContent: null, content: [a] }
                : !n && i
                  ? { inContent: [r], content: [t.isForumPost ? a : s] }
                  : n || i
                    ? void 0
                    : { inContent: [r], content: [a] };
        })(a, e, s, null != t),
    };
}
let H = {
        order: v.Ay.order,
        requiredFirstCharacters: ["<"],
        match: (e) => /^<#(\d+)>/.exec(e),
        parse(e, t, n) {
            let i = e[1];
            if (n.returnMentionIds) return { type: "channelMention", id: i };
            let r = x(i, n.mentionChannels);
            return null == r ? V(null, i, null, P(n.channelId)) : B(r, null, P(n.channelId));
        },
    },
    j = {
        order: s().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ["h"],
        match(e) {
            let t = N.Ju.exec(e);
            return null != t && ((null != t[2] && /\D/.test(t[2])) || (null != t[3] && /\D/.test(t[3]))) ? null : t;
        },
        parse(e, t, n) {
            let i = e[0],
                r = e[1],
                a = e[2],
                s = e[3];
            if (null == a) return k(i);
            let l = x(a, null);
            return null == l ? V(r, a, s, P(n.channelId), i) : B(l, s, P(n.channelId), i);
        },
    },
    W = {
        order: s().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ["h"],
        match: (e) => N.En.exec(e),
        parse(e, t, n) {
            let i = e[0],
                r = e[1],
                a = e[2],
                s = e[3],
                l = e[4];
            if (null == a || null == s) return k(i);
            let o = x(s, null);
            if (null != o) return B(o, l, P(n.channelId), i);
            let d = x(a, null);
            return null != d ? B(d, l, P(n.channelId), i) : V(r, a, l, P(n.channelId), i);
        },
    };
var Y = n(223637),
    K = n(694403),
    $ = n(873879),
    z = n(683412),
    Z = n(236285),
    q = n(690521);
let X = {
    s: { requiredFirstCharacters: ["~"], match: s().inlineRegex(/^~~([\s\S]+?)~~(?!_)/) },
    highlight: { order: v.Ay.order, match: () => null },
    emoji: {
        order: v.Ay.order,
        requiredFirstCharacters: [":"],
        match(e) {
            let t = l.Ay.EMOJI_NAME_AND_DIVERSITY_RE.exec(e);
            return null != t && "" !== l.Ay.convertNameToSurrogate(t[1]) ? t : null;
        },
        parse(e) {
            let [t, n] = e,
                i = l.Ay.convertNameToSurrogate(n);
            return null == i || "" === i
                ? { type: "text", content: t }
                : { name: `:${n}:`, surrogate: i, src: q.Ay.getURL(i) };
        },
    },
    customEmoji: {
        order: s().defaultRules.codeBlock.order,
        requiredFirstCharacters: ["<"],
        match: (e) => /^<(a)?:(\w+):(\d+)>/.exec(e),
        parse(e, t, n) {
            let [i, r, a, s] = e,
                { guildId: l } = n,
                o = Z.Ay.getDisambiguatedEmojiContext(l).getById(s),
                d = null == o || o.require_colons;
            return null != o && (a = o.name), { emojiId: s, name: d ? `:${a}:` : a, animated: "a" === r };
        },
    },
    text: {
        parse(e) {
            let t = l.Ay.findInlineEmojisFromSurrogates(e[0]),
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
        ...s().defaultRules.em,
        match: s().inlineRegex(
            RegExp(
                "^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?) {1,2}\\*(?!\\*)",
            ),
        ),
        parse: (e, t, n) => ({ type: "em", content: t(e[1], n), originalMatch: e }),
    },
};
var Q = n(78390),
    J = n(379418),
    ee = n(551965),
    et = n(73510),
    en = n(827669);
let ei = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
    er = /^$|\n *$/,
    ea = /^ *>>> ?/,
    es = /^ *> ?/gm,
    el = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/;
function eo(e) {
    let t = (0, K.W1)(e[1]);
    if (null == t) return { type: "text", content: e[1] };
    let { displayTarget: n, target: i } = t;
    return { type: "link", content: [{ type: "text", content: n }], target: i, title: void 0 };
}
function ed(e) {
    let t = u.A.getChannel(e);
    return t?.getGuildId();
}
function ec(e) {
    return null != e.guildId ? E.A.getGuild(e.guildId) : null != e.channelId ? E.A.getGuild(ed(e.channelId)) : null;
}
let eu = {
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
                let { prevCapture: n, inQuote: i, nested: r } = t;
                if (i || r) return null;
                if (null == n) return ei.exec(e);
                let a = n[0];
                return er.test(a) ? ei.exec(e) : null;
            },
            parse(e, t, n) {
                let i = e[0],
                    r = !!ea.exec(i),
                    a = r ? ea : es,
                    s = i.replace(a, ""),
                    l = n.inQuote || !1,
                    o = n.inline || !1;
                (n.inQuote = !0), r || (n.inline = !0);
                let d = t(s, n);
                return (
                    (n.inQuote = l),
                    (n.inline = o),
                    0 === d.length && d.push({ type: "text", content: " " }),
                    { content: d, type: "blockQuote" }
                );
            },
        },
        link: K.Ay,
        autolink: { ...s().defaultRules.autolink, parse: eo },
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
            parse: eo,
        },
        strong: s().defaultRules.strong,
        em: s().defaultRules.em,
        u: s().defaultRules.u,
        br: s().defaultRules.br,
        text: v.Ay,
        inlineCode: {
            ...s().defaultRules.inlineCode,
            parse(e, t, n) {
                let i = s().defaultRules.inlineCode.parse(e, t, n);
                return !0 === n.parseInlineCodeChildContent ? { ...i, validationChildContent: t(i.content, n) } : i;
            },
        },
        emoticon: {
            order: v.Ay.order,
            requiredFirstCharacters: ["\xaf"],
            match: (e) => /^(\xaf\\_\(\u30c4\)_\/\xaf)/.exec(e),
            parse: (e) => ({ type: "text", content: e[1] }),
        },
        codeBlock: {
            order: s().defaultRules.codeBlock.order,
            requiredFirstCharacters: ["`"],
            match: (e) => /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i.exec(e),
            parse: (e, t, n) => ({ lang: e[1] ?? "", content: e[2] ?? "", inQuote: n.inQuote || n.formatInline || !1 }),
        },
        roleMention: {
            order: v.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => /^<@&(\d+)>/.exec(e),
            parse(e, t, n) {
                let [i, r] = e;
                if (n.returnMentionIds) return { type: "roleMention", id: r };
                let a = ec(n),
                    s = null != a ? _.A.getRole(a.id, r) : null;
                if (null == s) return { type: "text", content: `@${M.intl.string(M.t["YV4F/n"])}` };
                let l = (0, d.aF)(a?.id, s) && !(0, o.Qv)(s);
                return {
                    type: "mention",
                    channelId: n.channelId,
                    guildId: null != a ? a.id : null,
                    roleId: r,
                    roleColor: s.color,
                    roleColors: l
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
            order: v.Ay.order,
            requiredFirstCharacters: ["<", "@"],
            match(e) {
                let t = /^<@!?(\d+)>|^(@(?:everyone|here))/.exec(e);
                return null == t ? null : t;
            },
            parse: (e, t, n) =>
                n.returnMentionIds
                    ? null == e[1]
                        ? { type: "mention", text: e[0] }
                        : { type: "mention", id: e[1] }
                    : (function (e, t) {
                          let n,
                              i,
                              { fullMatch: r, id: a, everyoneOrHere: s } = e,
                              l = A.default.getUser(a),
                              o = u.A.getChannel(t.channelId);
                          null != l &&
                              ((i = l.id),
                              (n = l.toString()),
                              null != o && (n = h.Ay.getNickname(o.getGuildId(), t.channelId, l) ?? I.Ay.getName(l)));
                          let d = null != a && b.Ut1.test(a.trim()),
                              c = d && t.unknownUserMentionPlaceholder ? `@${M.intl.string(M.t.sKdZ6U)}` : r;
                          return {
                              type: "mention",
                              userId: i,
                              channelId: t.channelId,
                              viewingChannelId: t.viewingChannelId,
                              guildId: o?.getGuildId(),
                              parsedUserId: d ? a : null,
                              roleName: s,
                              content: [{ type: "text", content: null != n ? `@${n}` : c }],
                          };
                      })({ fullMatch: e[0], id: e[1], everyoneOrHere: e[2] }, n),
        },
        silentPrefix: {
            order: v.Ay.order,
            requiredFirstCharacters: ["@"],
            match: (e, t, n) => (null == n || "" === n ? /^(@silent(?![^\s]))/.exec(e) : null),
            parse: function (e) {
                return { type: "silentPrefix", content: e[0] };
            },
        },
        channelMention: H,
        channelOrMessageUrl: j,
        mediaPostLink: W,
        attachmentLink: T,
        commandMention: {
            order: s().defaultRules.text.order,
            requiredFirstCharacters: ["<"],
            match: (e) =>
                /^<\/((?:[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?):(\d+)>/u.exec(
                    e,
                ),
            parse: (e, t, n) =>
                n.returnMentionIds
                    ? { type: "commandMention", id: e[2] }
                    : (function (e, t, n) {
                          let [, ...i] = e.split(" "),
                              r = `${t}${[...i].map((e) => `${et.v4}${e}`).join("")}`;
                          return {
                              type: "commandMention",
                              channelId: n.channelId,
                              commandId: t,
                              commandName: e,
                              commandKey: r,
                              content: [{ type: "text", content: `${e}` }],
                          };
                      })(e[1], e[2], n),
        },
        timestampMentionInput: {
            order: s().defaultRules.text.order,
            requiredFirstCharacters: ["<"],
            match: (e, t) => (t.allowTimeMentionInput ? /^<@time:([^>]*)>/.exec(e) : null),
            parse: (e) => ({ type: "timestampMentionInput", content: e[1] }),
        },
        gameMention: {
            order: s().defaultRules.text.order,
            requiredFirstCharacters: ["<"],
            match: (e, t) => (t.allowGameMentions ? en.P7.exec(e) : null),
            parse: (e) => ({ type: "gameMention", gameId: e[1] }),
        },
        emoji: {
            order: v.Ay.order,
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
            order: v.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => c.ds.exec(e),
            parse: (e, t, n) => (0, c.Ay)(e, n),
        },
        customEmoji: {
            order: v.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => /^<a?:(\w+):(\d+)>/.exec(e),
            parse: (e) => ({ type: "text", content: `:${e[1]}:` }),
        },
        timestamp: {
            order: v.Ay.order - 1,
            requiredFirstCharacters: ["<"],
            match: (e) => J.l9.exec(e),
            parse(e) {
                let [t, n, i] = e,
                    r = (0, J.EH)(n, i);
                return null == r ? { type: "text", content: t } : ((r.type = "timestamp"), r);
            },
        },
        s: {
            order: s().defaultRules.u.order,
            requiredFirstCharacters: ["~"],
            match: s().inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
            parse: s().defaultRules.u.parse,
        },
        spoiler: {
            order: v.Ay.order,
            requiredFirstCharacters: ["|"],
            match: (e) => b.VFs.exec(e),
            parse: (e, t, n) => ({ content: t(e[1], n), channelId: n.channelId }),
        },
        staticRouteLink: {
            order: v.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => b.P0V.exec(e),
            parse(e, t, n) {
                let [, i, r] = e,
                    a = (0, Q.Q)(i),
                    s = (0, Q.f)(i, r, ec(n)?.id);
                function l(e) {
                    return null == e ? null : [{ type: "text", content: e }];
                }
                return {
                    content: l(a + (null != s ? ` \u{203A} ${s}` : "")),
                    mainContent: l(a),
                    itemContent: l(s),
                    itemId: r,
                    id: i,
                    guildId: ed(n.channelId),
                    channelId: i,
                };
            },
        },
        heading: Y.A,
        list: $.A,
        subtext: z.A,
    },
    e_ = (0, ee.A)([eu, X]),
    eE = r().omit(e_, ["inlineCode", "codeBlock", "br", "blockQuote", "subtext", "soundboard"]),
    eA = r().omit(e_, [
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
    eh = r().omit(e_, [
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
    eI = r().omit(
        (0, ee.A)([
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
    ef = r().omit(e_, ["codeBlock", "br", "blockQuote"]),
    ep = r().omit(e_, [
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
    eT = r().omit(e_, ["codeBlock", "blockQuote", "br"]),
    em = r().omit(e_, ["codeBlock", "br", "inlineCode"]);
function eg(e, t) {
    return 0 === e.length || 0 === t || "" === e.charAt(t - 1).trim();
}
function eS(e, t, n) {
    let i = t + n;
    return i === e.length || "" === e.charAt(i).trim();
}
let eN = (0, ee.A)([
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
                    let i = !eg(e, n) || !eS(e, n, t.highlightWord.length);
                    if (i)
                        do
                            (n = e.indexOf(t.highlightWord, n + 1)),
                                (i = !eg(e, n) || !eS(e, n, t.highlightWord.length));
                        while (i && -1 !== n);
                    if (-1 === n) return null;
                    let r = e.substring(0, n),
                        a = e.substring(n + t.highlightWord.length);
                    return [e, t.highlightWord, r, a];
                },
                parse(e, t, n) {
                    let i = n.parseDepth ?? 0,
                        r = { ...n, parseDepth: i + 1 },
                        a = t(e[2], r),
                        s = t(e[3], r);
                    return [...a, { type: "highlight", content: e[1] }, ...s];
                },
            },
        },
        r().omit(e_, ["url"]),
    ]),
    eC = {
        RULES: e_,
        CHANNEL_TOPIC_RULES: eE,
        VOICE_CHANNEL_STATUS_RULES: eA,
        EMBED_TITLE_RULES: eh,
        INLINE_REPLY_RULES: eI,
        GUILD_VERIFICATION_FORM_RULES: ef,
        GUILD_EVENT_RULES: eT,
        PROFILE_BIO_RULES: ep,
        AUTO_MODERATION_SYSTEM_MESSAGE_RULES: eN,
        NATIVE_SEARCH_RESULT_LINK_RULES: em,
    };
