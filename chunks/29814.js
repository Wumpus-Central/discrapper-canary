"use strict";
n.d(t, { Ay: () => eC }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(791332),
    s = n.n(a),
    l = n(7584),
    o = n(744700),
    d = n(176201),
    c = n(676608),
    u = n(113051),
    _ = n(734057),
    E = n(760751),
    A = n(317525),
    h = n(71393),
    I = n(287809),
    f = n(486020),
    p = n(562153),
    T = n(427262);
let m =
        /^https:\/\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\/(?:attachments|ephemeral-attachments)\/\d+\/\d+\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/,
    g = {
        order: s().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ["h"],
        match: (e) => m.exec(e),
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
    R = n(376943),
    O = n(576705),
    L = n(994500),
    D = n(871237),
    y = n(240248),
    v = n(465365),
    b = n(704726),
    M = n(652215),
    P = n(375708);
function U(e) {
    let t = _.A.getChannel(e);
    return t?.getGuildId();
}
function w(e) {
    return {
        type: "guild",
        guildId: e.id,
        content: (0, y.EJ)(e.name, 32),
        icon: f.Ay.getGuildIconURL({ id: e.id, icon: e.icon, size: 40 }),
    };
}
function G(e, t) {
    let n = V((0, y.EJ)(e.name, 32));
    return {
        type: "channel",
        content: ["italics" === t ? { type: "em", content: [n] } : n],
        channelType: e.type,
        iconType: e.iconType,
    };
}
function x(e) {
    return { type: "channel", content: [V("")], iconType: e ? "post" : "message" };
}
function k(e, t) {
    let n = _.A.getChannel(e),
        i = (0, C.p)(e, _.A, S.A, O.A).isSubscriptionGated,
        r = (0, D.QG)(n) ?? "text";
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
              name: (0, N.m1)(n, I.default, L.A),
              isDm: n.isPrivate(),
              isForumPost: n.isForumPost(),
              isMentionable: (0, v.Y)(n.type),
              canViewChannel: (0, R.nc)(n),
              roleSubscriptionGated: i,
              iconType: r,
              parentId: n.parent_id,
          }
        : null;
}
function F(e) {
    return { type: "link", content: [{ type: "text", content: e }], target: e, title: void 0 };
}
function V(e) {
    return { type: "text", content: e };
}
function B(e, t, n, i, r) {
    let a = h.A.getGuild(e),
        s = a?.id === i;
    return {
        type: "channelMention",
        guildId: e,
        channelId: t,
        messageId: n,
        originalLink: r,
        inContent: null == a || s ? null : [w(a)],
        content: [
            G({ name: P.intl.string(P.t.zLZPmk).toLowerCase(), type: M.rbe.UNKNOWN, iconType: "text" }, "italics"),
        ],
    };
}
function H(e, t, n, i) {
    if (!e.canViewChannel) {
        let n;
        return (
            (n = {
                type: "channel",
                content: [V(e.roleSubscriptionGated ? e.name : P.intl.string(P.t["/YzI63"]))],
                channelType: e.roleSubscriptionGated ? e.type : M.rbe.UNKNOWN,
                iconType: "locked",
            }),
            { type: "channelMention", guildId: e.guildId, channelId: e.id, messageId: t, inContent: null, content: [n] }
        );
    }
    if (!e.isMentionable) return V(`#${e.name}`);
    let r = { type: "channelMention", channelId: e.id, guildId: e.guildId, messageId: t, originalLink: i },
        a = h.A.getGuild(e.guildId);
    if (null == a)
        if (e.isDm) return { ...r, guildId: M.ME, inContent: [G(e)], content: [x(!1)] };
        else return null != i ? F(i) : V(`#${P.intl.string(P.t.J90oLW)}`);
    let s = e.guildId === n;
    return {
        ...r,
        ...(function (e, t, n, i) {
            let r = w(e),
                a = G(t),
                s = x(t.isForumPost);
            if (n && i) {
                if (t.isForumPost) {
                    let e = _.A.getChannel(t.parentId);
                    if (null != e)
                        return {
                            inContent: [
                                G({
                                    name: (0, N.m1)(e, I.default, L.A),
                                    type: e.type,
                                    iconType: (0, D.QG)(e) ?? "forum",
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
let j = {
        order: b.Ay.order,
        requiredFirstCharacters: ["<"],
        match: (e) => /^<#(\d+)>/.exec(e),
        parse(e, t, n) {
            let i = e[1];
            if (n.returnMentionIds) return { type: "channelMention", id: i };
            let r = k(i, n.mentionChannels);
            return null == r ? B(null, i, null, U(n.channelId)) : H(r, null, U(n.channelId));
        },
    },
    W = {
        order: s().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ["h"],
        match(e) {
            let t = R.Ju.exec(e);
            return null != t && ((null != t[2] && /\D/.test(t[2])) || (null != t[3] && /\D/.test(t[3]))) ? null : t;
        },
        parse(e, t, n) {
            let i = e[0],
                r = e[1],
                a = e[2],
                s = e[3];
            if (null == a) return F(i);
            let l = k(a, null);
            return null == l ? B(r, a, s, U(n.channelId), i) : H(l, s, U(n.channelId), i);
        },
    },
    Y = {
        order: s().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ["h"],
        match: (e) => R.En.exec(e),
        parse(e, t, n) {
            let i = e[0],
                r = e[1],
                a = e[2],
                s = e[3],
                l = e[4];
            if (null == a || null == s) return F(i);
            let o = k(s, null);
            if (null != o) return H(o, l, U(n.channelId), i);
            let d = k(a, null);
            return null != d ? H(d, l, U(n.channelId), i) : B(r, a, l, U(n.channelId), i);
        },
    };
var K = n(223637),
    $ = n(694403),
    z = n(873879),
    q = n(683412),
    Z = n(159273),
    X = n(690521);
let Q = {
    s: { requiredFirstCharacters: ["~"], match: s().inlineRegex(/^~~([\s\S]+?)~~(?!_)/) },
    highlight: { order: b.Ay.order, match: () => null },
    emoji: {
        order: b.Ay.order,
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
                : { name: `:${n}:`, surrogate: i, src: X.Ay.getURL(i) };
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
                            src: X.Ay.getURL(e.surrogate),
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
var J = n(78390),
    ee = n(379418),
    et = n(551965),
    en = n(73510),
    ei = n(827669);
let er = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
    ea = /^$|\n *$/,
    es = /^ *>>> ?/,
    el = /^ *> ?/gm,
    eo = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/;
function ed(e) {
    let t = (0, $.W1)(e[1]);
    if (null == t) return { type: "text", content: e[1] };
    let { displayTarget: n, target: i } = t;
    return { type: "link", content: [{ type: "text", content: n }], target: i, title: void 0 };
}
function ec(e) {
    let t = _.A.getChannel(e);
    return t?.getGuildId();
}
function eu(e) {
    return null != e.guildId ? h.A.getGuild(e.guildId) : null != e.channelId ? h.A.getGuild(ec(e.channelId)) : null;
}
let e_ = {
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
                if (null == n) return er.exec(e);
                let a = n[0];
                return ea.test(a) ? er.exec(e) : null;
            },
            parse(e, t, n) {
                let i = e[0],
                    r = !!es.exec(i),
                    a = r ? es : el,
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
        link: $.Ay,
        autolink: { ...s().defaultRules.autolink, parse: ed },
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
                let n = eo.exec(e);
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
            parse: ed,
        },
        strong: s().defaultRules.strong,
        em: s().defaultRules.em,
        u: s().defaultRules.u,
        br: s().defaultRules.br,
        text: b.Ay,
        inlineCode: {
            ...s().defaultRules.inlineCode,
            parse(e, t, n) {
                let i = s().defaultRules.inlineCode.parse(e, t, n);
                return !0 === n.parseInlineCodeChildContent ? { ...i, validationChildContent: t(i.content, n) } : i;
            },
        },
        emoticon: {
            order: b.Ay.order,
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
            order: b.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => /^<@&(\d+)>/.exec(e),
            parse(e, t, n) {
                let [i, r] = e;
                if (n.returnMentionIds) return { type: "roleMention", id: r };
                let a = eu(n),
                    s = null != a ? A.A.getRole(a.id, r) : null;
                if (null == s) return { type: "text", content: `@${P.intl.string(P.t["YV4F/n"])}` };
                let l = (0, c.aF)(a?.id, s) && !(0, d.Qv)(s);
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
            order: b.Ay.order,
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
                              l = I.default.getUser(a),
                              o = _.A.getChannel(t.channelId);
                          null != l &&
                              ((i = l.id),
                              (n = l.toString()),
                              null != o && (n = p.Ay.getNickname(o.getGuildId(), t.channelId, l) ?? T.Ay.getName(l)));
                          let d = null != a && M.Ut1.test(a.trim()),
                              c = d && t.unknownUserMentionPlaceholder ? `@${P.intl.string(P.t.sKdZ6U)}` : r;
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
            order: b.Ay.order,
            requiredFirstCharacters: ["@"],
            match: (e, t, n) => (null == n || "" === n ? /^(@silent(?![^\s]))/.exec(e) : null),
            parse: function (e) {
                return { type: "silentPrefix", content: e[0] };
            },
        },
        channelMention: j,
        channelOrMessageUrl: W,
        mediaPostLink: Y,
        attachmentLink: g,
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
                              r = `${t}${[...i].map((e) => `${en.v4}${e}`).join("")}`;
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
            match: (e, t) => (t.allowGameMentions ? ei.P7.exec(e) : null),
            parse: (e, t, n) =>
                (function (e, t) {
                    let n,
                        i = t.mentionGames?.get(e),
                        r = E.A.getDetectableGame(e);
                    if (!0 !== t.returnMentionIds && null == i && null == r)
                        return { type: "text", content: `@${P.intl.string(P.t["11pdXZ"])}` };
                    let a = i?.name ?? r?.name ?? P.intl.string(P.t["11pdXZ"]),
                        s = (0, o.A)(e, i?.icon, { size: 32 });
                    return (
                        null != s
                            ? (n = s)
                            : r?.icon != null && (n = f.Ay.getApplicationIconURL({ id: r.id, icon: r.icon, size: 32 })),
                        {
                            type: "gameMention",
                            gameId: e,
                            channelId: t.channelId,
                            gameName: i?.name,
                            gameIcon: i?.icon,
                            icon: n,
                            displayName: a,
                        }
                    );
                })(e[1], n),
        },
        emoji: {
            order: b.Ay.order,
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
            order: b.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => u.ds.exec(e),
            parse: (e, t, n) => (0, u.Ay)(e, n),
        },
        customEmoji: {
            order: b.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => /^<a?:(\w+):(\d+)>/.exec(e),
            parse: (e) => ({ type: "text", content: `:${e[1]}:` }),
        },
        timestamp: {
            order: b.Ay.order - 1,
            requiredFirstCharacters: ["<"],
            match: (e) => ee.l9.exec(e),
            parse(e) {
                let [t, n, i] = e,
                    r = (0, ee.EH)(n, i);
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
            order: b.Ay.order,
            requiredFirstCharacters: ["|"],
            match: (e) => M.VFs.exec(e),
            parse: (e, t, n) => ({ content: t(e[1], n), channelId: n.channelId }),
        },
        staticRouteLink: {
            order: b.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => M.P0V.exec(e),
            parse(e, t, n) {
                let [, i, r] = e,
                    a = (0, J.Q)(i),
                    s = (0, J.f)(i, r, eu(n)?.id);
                function l(e) {
                    return null == e ? null : [{ type: "text", content: e }];
                }
                return {
                    content: l(a + (null != s ? ` \u{203A} ${s}` : "")),
                    mainContent: l(a),
                    itemContent: l(s),
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
    eE = (0, et.A)([e_, Q]),
    eA = r().omit(eE, ["inlineCode", "codeBlock", "br", "blockQuote", "subtext", "soundboard"]),
    eh = r().omit(eE, [
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
    eI = r().omit(eE, [
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
    ef = r().omit(
        (0, et.A)([
            eE,
            {
                inlineCode: {
                    match(e, t, n) {
                        let i = eE.codeBlock.match(e, t, n);
                        if (null != i) return i;
                        let r = eE.inlineCode.match(e, t, n);
                        if (null != r) return r;
                    },
                },
            },
        ]),
        ["blockQuote", "codeBlock", "br"],
    ),
    ep = r().omit(eE, ["codeBlock", "br", "blockQuote"]),
    eT = r().omit(eE, [
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
    em = r().omit(eE, ["codeBlock", "blockQuote", "br"]),
    eg = r().omit(eE, ["codeBlock", "br", "inlineCode"]);
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
        r().omit(eE, ["url"]),
    ]),
    eC = {
        RULES: eE,
        CHANNEL_TOPIC_RULES: eA,
        VOICE_CHANNEL_STATUS_RULES: eh,
        EMBED_TITLE_RULES: eI,
        INLINE_REPLY_RULES: ef,
        GUILD_VERIFICATION_FORM_RULES: ep,
        GUILD_EVENT_RULES: em,
        PROFILE_BIO_RULES: eT,
        AUTO_MODERATION_SYSTEM_MESSAGE_RULES: eN,
        NATIVE_SEARCH_RESULT_LINK_RULES: eg,
    };
