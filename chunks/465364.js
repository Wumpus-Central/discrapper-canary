"use strict";
n.d(t, { Ay: () => _, Le: () => u, Tz: () => A, jp: () => E, ko: () => c }), n(380610);
var i = n(833291);
n(100392);
var r = n(46054),
    a = n(659674),
    s = n(38405),
    l = n(652215);
let o = new Set([l.Auw.IMAGE, l.Auw.GIFV]),
    d = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);
function c(e, t) {
    let n = u({ channelId: e.channel_id, messageId: e.id, authorId: e.author?.id, renderOptions: t }),
        i = null != e.webhookId;
    return {
        ...n,
        allowLinks: i || n.allowLinks,
        allowEmojiLinks: i,
        mentionChannels: e.mentionChannels,
        mentionGames: e.mentionGames ?? new Map(),
        soundboardSounds: e.soundboardSounds ?? [],
    };
}
function u(e) {
    let { channelId: t, messageId: n, authorId: i, renderOptions: r } = e;
    return {
        channelId: t,
        messageId: n,
        authorId: i,
        allowLinks: !!r.allowLinks,
        allowDevLinks: !!r.allowDevLinks,
        allowGameMentions: !!r.allowGameMentions,
        allowTimeMentionInput: !!r.allowTimeMentionInput,
        formatInline: !!r.formatInline,
        noStyleAndInteraction: !!r.noStyleAndInteraction,
        allowHeading: !!r.allowHeading,
        allowList: !!r.allowList,
        previewLinkTarget: !!r.previewLinkTarget,
        disableAnimatedEmoji: !!r.disableAnimatedEmoji,
        allowEmojiLinks: !1,
        disableAutoBlockNewlines: !0,
        mentionChannels: [],
        mentionGames: new Map(),
        soundboardSounds: [],
        muted: !1,
        unknownUserMentionPlaceholder: !0,
        viewingChannelId: r.viewingChannelId,
        forceWhite: !!r.forceWhite,
        textColor: r.textColor,
        disablePressableChannelMention: !!r.disablePressableChannelMention,
    };
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (function (e, t, n) {
        let {
                toAST: r = !1,
                hideSimpleEmbedContent: u = !0,
                formatInline: _ = !1,
                postProcessor: E,
                contentMessage: A,
            } = n,
            I = !1,
            p = !1,
            T = (A ?? t).content,
            m = e(T, !0, c(t, n), (e, n, r) => {
                var c, m, g;
                let S;
                return (
                    (p = r ?? !1),
                    Array.isArray(e) || (e = [e]),
                    p && (e = [{ type: "text", content: T, originalMatch: { index: 0, 0: T } }]),
                    u &&
                        (e = (function (e, t) {
                            if (1 !== e.length || 1 !== t.length) return e;
                            let n = e[0],
                                i = t[0];
                            return ("link" === n.type || "attachmentLink" === n.type) && o.has(i.type) && (0, a.NV)(i)
                                ? []
                                : e;
                        })(e, (A ?? t).embeds)),
                    _ ||
                        t.type === l.lAJ.MEDIA_MENTION_MESSAGE ||
                        ((c = e),
                        (e = n
                            ? h(c)
                            : ("paragraph" === c[0].type &&
                                  c[0].content instanceof Array &&
                                  (c[0].content = h(c[0].content)),
                              c))),
                    (S = (m = e).some((e) => "link" !== e.type)),
                    (e = m.filter((e) => {
                        let t = "link" === e.type,
                            n = null != e.target ? (0, i.ts)(e.target) : null;
                        return !(t && null != n && !S);
                    })),
                    (A ?? t).embeds.length > 0 &&
                        ((g = e),
                        (I = n ? f(g) : "paragraph" === g[0].type && g[0].content instanceof Array && f(g[0].content))),
                    _ &&
                        (e = (function e(t) {
                            return (
                                t.forEach((t) => {
                                    d.has(t.type) &&
                                        null != t.content &&
                                        (Array.isArray(t.content)
                                            ? e(t.content)
                                            : "string" == typeof t.content
                                              ? (t.content = t.content.replace(/\n/g, " "))
                                              : s.A.captureMessage(
                                                    `AST node type:${t.type} with content typeof ${typeof t.content}. Keys ${Object.keys(t)}`,
                                                ));
                                }),
                                t
                            );
                        })(e)),
                    null != E && (e = E(e, n)),
                    e
                );
            });
        return { hasSpoilerEmbeds: I, hasBailedAst: p, content: m };
    })(t.formatInline ? r.A.parseInlineReply : r.A.parse, e, t);
}
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return (function (e, t) {
        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        let { content: n, guildId: i, channelId: r, messageId: a, authorId: s } = t;
        return e(
            n,
            !0,
            {
                allowLinks: !1,
                allowDevLinks: !1,
                allowEmojiLinks: !1,
                allowGameMentions: !1,
                mentionChannels: [],
                mentionGames: new Map(),
                soundboardSounds: [],
                formatInline: !0,
                noStyleAndInteraction: !1,
                allowHeading: !1,
                allowList: !1,
                disableAutoBlockNewlines: !0,
                previewLinkTarget: !1,
                disableAnimatedEmoji: !0,
                guildId: i,
                channelId: r,
                messageId: a,
                authorId: s,
                muted: !1,
                disablePressableChannelMention: !0,
            },
            (e) => (Array.isArray(e) || (e = [e]), e),
        );
    })(e, t, n);
}
function A(e, t, n) {
    var i;
    return (
        (i = r.A.parseAutoModerationSystemMessage),
        i(
            e,
            !0,
            {
                allowLinks: !1,
                allowDevLinks: !1,
                allowEmojiLinks: !1,
                allowGameMentions: !1,
                mentionChannels: [],
                mentionGames: new Map(),
                soundboardSounds: [],
                formatInline: !1,
                noStyleAndInteraction: !1,
                allowHeading: !1,
                allowList: !1,
                disableAutoBlockNewlines: !0,
                highlightWord: t,
                disableAnimatedEmoji: !1,
                channelId: n,
                muted: !1,
            },
            (e) => (Array.isArray(e) || (e = [e]), e),
        )
    );
}
function h(e) {
    if (
        e.some(
            (e) =>
                "emoji" !== e.type &&
                "customEmoji" !== e.type &&
                "soundboard" !== e.type &&
                ("string" != typeof e.content || "" !== e.content.trim()),
        )
    )
        return e;
    let t = 0;
    return (
        e.forEach((e) => {
            if ((("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (t += 1), t > 30))
                return !1;
        }),
        t > 30 ||
            e.forEach((e) => {
                e.jumboable = !0;
            }),
        e
    );
}
function I(e, t) {
    if (e instanceof Array) return e.some((e) => I(e, t));
    let n = t(e);
    return null != n
        ? n
        : e.content instanceof Array
          ? I(e.content, t)
          : e.items instanceof Array && e.items.some((e) => I(e, t));
}
function f(e) {
    return I(e, (e) =>
        "spoiler" === e.type ? I(e, (e) => "link" === e.type || "attachmentLink" === e.type || null) : null,
    );
}
