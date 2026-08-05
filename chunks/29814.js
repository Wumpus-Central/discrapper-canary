"use strict";
n.d(t, { Ay: () => eN }), n(321073);
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
let f =
        /^https:\/\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\/(?:attachments|ephemeral-attachments)\/\d+\/\d+\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/,
    p = {
        order: s().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ["h"],
        match: (e) => f.exec(e),
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
var T = n(717125),
    m = n(47167),
    g = n(499211),
    S = n(376943),
    N = n(576705),
    C = n(994500),
    O = n(486020),
    R = n(871237),
    L = n(240248),
    D = n(465365),
    y = n(704726),
    v = n(652215),
    b = n(375708);
function M(e) {
    let t = u.A.getChannel(e);
    return t?.getGuildId();
}
function P(e) {
    return {
        type: "guild",
        guildId: e.id,
        content: (0, L.EJ)(e.name, 32),
        icon: O.Ay.getGuildIconURL({ id: e.id, icon: e.icon, size: 40 }),
    };
}
function U(e, t) {
    let n = k((0, L.EJ)(e.name, 32));
    return {
        type: "channel",
        content: ["italics" === t ? { type: "em", content: [n] } : n],
        channelType: e.type,
        iconType: e.iconType,
    };
}
function w(e) {
    return { type: "channel", content: [k("")], iconType: e ? "post" : "message" };
}
function G(e, t) {
    let n = u.A.getChannel(e),
        i = (0, g.p)(e, u.A, T.A, N.A).isSubscriptionGated,
        r = (0, R.QG)(n) ?? "text";
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
              name: (0, m.m1)(n, A.default, C.A),
              isDm: n.isPrivate(),
              isForumPost: n.isForumPost(),
              isMentionable: (0, D.Y)(n.type),
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
function k(e) {
    return { type: "text", content: e };
}
function F(e, t, n, i, r) {
    let a = E.A.getGuild(e),
        s = a?.id === i;
    return {
        type: "channelMention",
        guildId: e,
        channelId: t,
        messageId: n,
        originalLink: r,
        inContent: null == a || s ? null : [P(a)],
        content: [
            U({ name: b.intl.string(b.t.zLZPmk).toLowerCase(), type: v.rbe.UNKNOWN, iconType: "text" }, "italics"),
        ],
    };
}
function V(e, t, n, i) {
    if (!e.canViewChannel) {
        let n;
        return (
            (n = {
                type: "channel",
                content: [k(e.roleSubscriptionGated ? e.name : b.intl.string(b.t["/YzI63"]))],
                channelType: e.roleSubscriptionGated ? e.type : v.rbe.UNKNOWN,
                iconType: "locked",
            }),
            { type: "channelMention", guildId: e.guildId, channelId: e.id, messageId: t, inContent: null, content: [n] }
        );
    }
    if (!e.isMentionable) return k(`#${e.name}`);
    let r = { type: "channelMention", channelId: e.id, guildId: e.guildId, messageId: t, originalLink: i },
        a = E.A.getGuild(e.guildId);
    if (null == a)
        if (e.isDm) return { ...r, guildId: v.ME, inContent: [U(e)], content: [w(!1)] };
        else return null != i ? x(i) : k(`#${b.intl.string(b.t.J90oLW)}`);
    let s = e.guildId === n;
    return {
        ...r,
        ...(function (e, t, n, i) {
            let r = P(e),
                a = U(t),
                s = w(t.isForumPost);
            if (n && i) {
                if (t.isForumPost) {
                    let e = u.A.getChannel(t.parentId);
                    if (null != e)
                        return {
                            inContent: [
                                U({
                                    name: (0, m.m1)(e, A.default, C.A),
                                    type: e.type,
                                    iconType: (0, R.QG)(e) ?? "forum",
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
let B = {
        order: y.Ay.order,
        requiredFirstCharacters: ["<"],
        match: (e) => /^<#(\d+)>/.exec(e),
        parse(e, t, n) {
            let i = e[1];
            if (n.returnMentionIds) return { type: "channelMention", id: i };
            let r = G(i, n.mentionChannels);
            return null == r ? F(null, i, null, M(n.channelId)) : V(r, null, M(n.channelId));
        },
    },
    H = {
        order: s().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ["h"],
        match(e) {
            let t = S.Ju.exec(e);
            return null != t && ((null != t[2] && /\D/.test(t[2])) || (null != t[3] && /\D/.test(t[3]))) ? null : t;
        },
        parse(e, t, n) {
            let i = e[0],
                r = e[1],
                a = e[2],
                s = e[3];
            if (null == a) return x(i);
            let l = G(a, null);
            return null == l ? F(r, a, s, M(n.channelId), i) : V(l, s, M(n.channelId), i);
        },
    },
    j = {
        order: s().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ["h"],
        match: (e) => S.En.exec(e),
        parse(e, t, n) {
            let i = e[0],
                r = e[1],
                a = e[2],
                s = e[3],
                l = e[4];
            if (null == a || null == s) return x(i);
            let o = G(s, null);
            if (null != o) return V(o, l, M(n.channelId), i);
            let d = G(a, null);
            return null != d ? V(d, l, M(n.channelId), i) : F(r, a, l, M(n.channelId), i);
        },
    };
var W = n(223637),
    Y = n(694403),
    K = n(873879),
    $ = n(683412),
    z = n(159273),
    q = n(690521);
let Z = {
    s: { requiredFirstCharacters: ["~"], match: s().inlineRegex(/^~~([\s\S]+?)~~(?!_)/) },
    highlight: { order: y.Ay.order, match: () => null },
    emoji: {
        order: y.Ay.order,
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
                o = z.Ay.getDisambiguatedEmojiContext(l).getById(s),
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
var X = n(78390),
    Q = n(379418),
    J = n(551965),
    ee = n(73510),
    et = n(827669);
let en = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
    ei = /^$|\n *$/,
    er = /^ *>>> ?/,
    ea = /^ *> ?/gm,
    es = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/;
function el(e) {
    let t = (0, Y.W1)(e[1]);
    if (null == t) return { type: "text", content: e[1] };
    let { displayTarget: n, target: i } = t;
    return { type: "link", content: [{ type: "text", content: n }], target: i, title: void 0 };
}
function eo(e) {
    let t = u.A.getChannel(e);
    return t?.getGuildId();
}
function ed(e) {
    return null != e.guildId ? E.A.getGuild(e.guildId) : null != e.channelId ? E.A.getGuild(eo(e.channelId)) : null;
}
let ec = {
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
                if (null == n) return en.exec(e);
                let a = n[0];
                return ei.test(a) ? en.exec(e) : null;
            },
            parse(e, t, n) {
                let i = e[0],
                    r = !!er.exec(i),
                    a = r ? er : ea,
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
        link: Y.Ay,
        autolink: { ...s().defaultRules.autolink, parse: el },
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
            parse: el,
        },
        strong: s().defaultRules.strong,
        em: s().defaultRules.em,
        u: s().defaultRules.u,
        br: s().defaultRules.br,
        text: y.Ay,
        inlineCode: {
            ...s().defaultRules.inlineCode,
            parse(e, t, n) {
                let i = s().defaultRules.inlineCode.parse(e, t, n);
                return !0 === n.parseInlineCodeChildContent ? { ...i, validationChildContent: t(i.content, n) } : i;
            },
        },
        emoticon: {
            order: y.Ay.order,
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
            order: y.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => /^<@&(\d+)>/.exec(e),
            parse(e, t, n) {
                let [i, r] = e;
                if (n.returnMentionIds) return { type: "roleMention", id: r };
                let a = ed(n),
                    s = null != a ? _.A.getRole(a.id, r) : null;
                if (null == s) return { type: "text", content: `@${b.intl.string(b.t["YV4F/n"])}` };
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
            order: y.Ay.order,
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
                          let d = null != a && v.Ut1.test(a.trim()),
                              c = d && t.unknownUserMentionPlaceholder ? `@${b.intl.string(b.t.sKdZ6U)}` : r;
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
            order: y.Ay.order,
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
                              r = `${t}${[...i].map((e) => `${ee.v4}${e}`).join("")}`;
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
            match: (e, t) => (t.allowGameMentions ? et.P7.exec(e) : null),
            parse: (e, t, n) => ({ type: "gameMention", gameId: e[1], channelId: n.channelId }),
        },
        emoji: {
            order: y.Ay.order,
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
            match: (e) => Q.l9.exec(e),
            parse(e) {
                let [t, n, i] = e,
                    r = (0, Q.EH)(n, i);
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
            order: y.Ay.order,
            requiredFirstCharacters: ["|"],
            match: (e) => v.VFs.exec(e),
            parse: (e, t, n) => ({ content: t(e[1], n), channelId: n.channelId }),
        },
        staticRouteLink: {
            order: y.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => v.P0V.exec(e),
            parse(e, t, n) {
                let [, i, r] = e,
                    a = (0, X.Q)(i),
                    s = (0, X.f)(i, r, ed(n)?.id);
                function l(e) {
                    return null == e ? null : [{ type: "text", content: e }];
                }
                return {
                    content: l(a + (null != s ? ` \u{203A} ${s}` : "")),
                    mainContent: l(a),
                    itemContent: l(s),
                    itemId: r,
                    id: i,
                    guildId: eo(n.channelId),
                    channelId: i,
                };
            },
        },
        heading: W.A,
        list: K.A,
        subtext: $.A,
    },
    eu = (0, J.A)([ec, Z]),
    e_ = r().omit(eu, ["inlineCode", "codeBlock", "br", "blockQuote", "subtext", "soundboard"]),
    eE = r().omit(eu, [
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
    eA = r().omit(eu, [
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
    eh = r().omit(
        (0, J.A)([
            eu,
            {
                inlineCode: {
                    match(e, t, n) {
                        let i = eu.codeBlock.match(e, t, n);
                        if (null != i) return i;
                        let r = eu.inlineCode.match(e, t, n);
                        if (null != r) return r;
                    },
                },
            },
        ]),
        ["blockQuote", "codeBlock", "br"],
    ),
    eI = r().omit(eu, ["codeBlock", "br", "blockQuote"]),
    ef = r().omit(eu, [
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
    ep = r().omit(eu, ["codeBlock", "blockQuote", "br"]),
    eT = r().omit(eu, ["codeBlock", "br", "inlineCode"]);
function em(e, t) {
    return 0 === e.length || 0 === t || "" === e.charAt(t - 1).trim();
}
function eg(e, t, n) {
    let i = t + n;
    return i === e.length || "" === e.charAt(i).trim();
}
let eS = (0, J.A)([
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
                    let i = !em(e, n) || !eg(e, n, t.highlightWord.length);
                    if (i)
                        do
                            (n = e.indexOf(t.highlightWord, n + 1)),
                                (i = !em(e, n) || !eg(e, n, t.highlightWord.length));
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
        r().omit(eu, ["url"]),
    ]),
    eN = {
        RULES: eu,
        CHANNEL_TOPIC_RULES: e_,
        VOICE_CHANNEL_STATUS_RULES: eE,
        EMBED_TITLE_RULES: eA,
        INLINE_REPLY_RULES: eh,
        GUILD_VERIFICATION_FORM_RULES: eI,
        GUILD_EVENT_RULES: ep,
        PROFILE_BIO_RULES: ef,
        AUTO_MODERATION_SYSTEM_MESSAGE_RULES: eS,
        NATIVE_SEARCH_RESULT_LINK_RULES: eT,
    };
