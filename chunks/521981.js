"use strict";
n.d(t, { ko: () => E, Ay: () => h, Le: () => A, Tz: () => f, jp: () => I });
var i = n(46054);
n(380610);
var r = n(833291);
n(100392);
var a = n(659674),
    s = n(38405),
    l = n(652215);
let o = new Set([l.Auw.IMAGE, l.Auw.GIFV]),
    d = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);
function c(e) {
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
function u(e, t) {
    if (e instanceof Array) return e.some((e) => u(e, t));
    let n = t(e);
    return null != n
        ? n
        : e.content instanceof Array
          ? u(e.content, t)
          : e.items instanceof Array && e.items.some((e) => u(e, t));
}
function _(e) {
    return u(e, (e) =>
        "spoiler" === e.type ? u(e, (e) => "link" === e.type || "attachmentLink" === e.type || null) : null,
    );
}
function E(e, t) {
    let n = A({ channelId: e.channel_id, messageId: e.id, authorId: e.author?.id, renderOptions: t }),
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
function A(e) {
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
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (function (e, t, n) {
        let {
                toAST: i = !1,
                hideSimpleEmbedContent: u = !0,
                formatInline: A = !1,
                postProcessor: h,
                contentMessage: I,
            } = n,
            f = !1,
            p = !1,
            T = (I ?? t).content,
            m = e(T, !0, E(t, n), (e, n, E) => {
                let { ast: m, hasSpoilerEmbeds: g } = (function (e) {
                    var t, n, i;
                    let u,
                        {
                            ast: E,
                            inline: A,
                            hasBailedAst: h,
                            message: I,
                            contentMessage: f,
                            messageContent: p,
                            hideSimpleEmbedContent: T,
                            formatInline: m,
                            toAST: g,
                        } = e,
                        S = Array.isArray(E) ? E : [E],
                        N = !1;
                    return (
                        h && (S = [{ type: "text", content: p, originalMatch: { index: 0, 0: p } }]),
                        T &&
                            (S = (function (e, t) {
                                if (1 !== e.length || 1 !== t.length) return e;
                                let n = e[0],
                                    i = t[0];
                                return ("link" === n.type || "attachmentLink" === n.type) &&
                                    o.has(i.type) &&
                                    (0, a.NV)(i)
                                    ? []
                                    : e;
                            })(S, (f ?? I).embeds)),
                        m ||
                            I.type === l.lAJ.MEDIA_MENTION_MESSAGE ||
                            ((t = S),
                            (S = A
                                ? c(t)
                                : ("paragraph" === t[0].type &&
                                      t[0].content instanceof Array &&
                                      (t[0].content = c(t[0].content)),
                                  t))),
                        (u = (n = S).some((e) => "link" !== e.type)),
                        (S = n.filter((e) => {
                            let t = "link" === e.type,
                                n = null != e.target ? (0, r.ts)(e.target) : null;
                            return !(t && null != n && !u);
                        })),
                        (f ?? I).embeds.length > 0 &&
                            ((i = S),
                            (N = A
                                ? _(i)
                                : "paragraph" === i[0].type && i[0].content instanceof Array && _(i[0].content))),
                        m &&
                            (S = (function e(t) {
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
                            })(S)),
                        { ast: S, hasSpoilerEmbeds: N }
                    );
                })({
                    ast: e,
                    inline: n,
                    hasBailedAst: (p = E ?? !1),
                    message: t,
                    contentMessage: I,
                    messageContent: T,
                    hideSimpleEmbedContent: u,
                    formatInline: A,
                    toAST: i,
                });
                f = g;
                let S = m;
                return null != h && (S = h(S, n)), S;
            });
        return { hasSpoilerEmbeds: f, hasBailedAst: p, content: m };
    })(t.formatInline ? i.A.parseInlineReply : i.A.parse, e, t);
}
function I(e, t) {
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
function f(e, t, n) {
    var r;
    return (
        (r = i.A.parseAutoModerationSystemMessage),
        r(
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
