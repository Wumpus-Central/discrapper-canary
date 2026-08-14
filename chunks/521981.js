"use strict";
n.d(t, { ko: () => h, Ay: () => f, Le: () => I, Tz: () => T, jp: () => p });
var i = n(46054);
n(321073), n(380610);
var r = n(833291);
n(100392);
var a = n(168543),
    s = n(659674),
    l = n(38405),
    o = n(652215);
let d = new Set([o.Auw.IMAGE, o.Auw.GIFV]),
    c = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);
function u(e) {
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
function _(e, t) {
    if (e instanceof Array) return e.some((e) => _(e, t));
    let n = t(e);
    return null != n
        ? n
        : e.content instanceof Array
          ? _(e.content, t)
          : e.items instanceof Array && e.items.some((e) => _(e, t));
}
function E(e) {
    return _(e, (e) =>
        "spoiler" === e.type ? _(e, (e) => "link" === e.type || "attachmentLink" === e.type || null) : null,
    );
}
function A(e) {
    return "link" === e.type && null != e.target && null != (0, r.iY)(e.target);
}
function h(e, t) {
    let n = I({ channelId: e.channel_id, messageId: e.id, authorId: e.author?.id, renderOptions: t }),
        i = null != e.webhookId;
    return {
        ...n,
        allowLinks: i || n.allowLinks,
        allowEmojiLinks: i,
        mentionChannels: e.mentionChannels,
        soundboardSounds: e.soundboardSounds ?? [],
    };
}
function I(e) {
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
        soundboardSounds: [],
        muted: !1,
        unknownUserMentionPlaceholder: !0,
        viewingChannelId: r.viewingChannelId,
        forceWhite: !!r.forceWhite,
        textColor: r.textColor,
        disablePressableChannelMention: !!r.disablePressableChannelMention,
    };
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (function (e, t, n) {
        let {
                toAST: i = !1,
                hideSimpleEmbedContent: _ = !0,
                formatInline: I = !1,
                postProcessor: f,
                contentMessage: p,
            } = n,
            T = !1,
            m = !1,
            g = (p ?? t).content,
            S = e(g, !0, h(t, n), (e, n, h) => {
                let { ast: S, hasSpoilerEmbeds: N } = (function (e) {
                    var t, n, i, _;
                    let h,
                        {
                            ast: I,
                            inline: f,
                            hasBailedAst: p,
                            message: T,
                            contentMessage: m,
                            messageContent: g,
                            hideSimpleEmbedContent: S,
                            formatInline: N,
                            toAST: C,
                        } = e,
                        R = Array.isArray(I) ? I : [I],
                        O = !1;
                    return (
                        p && (R = [{ type: "text", content: g, originalMatch: { index: 0, 0: g } }]),
                        S &&
                            (R = (function (e, t) {
                                if (1 !== e.length || 1 !== t.length) return e;
                                let n = e[0],
                                    i = t[0];
                                return ("link" === n.type || "attachmentLink" === n.type) &&
                                    d.has(i.type) &&
                                    (0, s.NV)(i)
                                    ? []
                                    : e;
                            })(R, (m ?? T).embeds)),
                        N ||
                            T.type === o.lAJ.MEDIA_MENTION_MESSAGE ||
                            ((t = R),
                            (R = f
                                ? u(t)
                                : ("paragraph" === t[0].type &&
                                      t[0].content instanceof Array &&
                                      (t[0].content = u(t[0].content)),
                                  t))),
                        (h = (n = R).some((e) => "link" !== e.type)),
                        (R =
                            !(i = R =
                                (R = n.filter((e) => {
                                    let t = "link" === e.type,
                                        n = null != e.target ? (0, r.ts)(e.target) : null;
                                    return !(t && null != n && !h);
                                })).filter((e) => {
                                    let t = "link" === e.type,
                                        n = null != e.target && null != (0, r.$9)(e.target);
                                    return !(t && n);
                                })).some(A) ||
                            i.some((e) => "link" !== e.type) ||
                            !(0, a.l)("MarkupPostProcessors")
                                ? i
                                : i.filter((e) => !A(e))),
                        (m ?? T).embeds.length > 0 &&
                            ((_ = R),
                            (O = f
                                ? E(_)
                                : "paragraph" === _[0].type && _[0].content instanceof Array && E(_[0].content))),
                        N &&
                            (R = (function e(t) {
                                return (
                                    t.forEach((t) => {
                                        c.has(t.type) &&
                                            null != t.content &&
                                            (Array.isArray(t.content)
                                                ? e(t.content)
                                                : "string" == typeof t.content
                                                  ? (t.content = t.content.replace(/\n/g, " "))
                                                  : l.A.captureMessage(
                                                        `AST node type:${t.type} with content typeof ${typeof t.content}. Keys ${Object.keys(t)}`,
                                                    ));
                                    }),
                                    t
                                );
                            })(R)),
                        { ast: R, hasSpoilerEmbeds: O }
                    );
                })({
                    ast: e,
                    inline: n,
                    hasBailedAst: (m = h ?? !1),
                    message: t,
                    contentMessage: p,
                    messageContent: g,
                    hideSimpleEmbedContent: _,
                    formatInline: I,
                    toAST: i,
                });
                T = N;
                let C = S;
                return null != f && (C = f(C, n)), C;
            });
        return { hasSpoilerEmbeds: T, hasBailedAst: m, content: S };
    })(t.formatInline ? i.A.parseInlineReply : i.A.parse, e, t);
}
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return (function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { content: i, guildId: r, channelId: a, messageId: s, authorId: l } = t;
        return e(
            i,
            !0,
            {
                allowLinks: !1,
                allowDevLinks: !1,
                allowEmojiLinks: !1,
                allowGameMentions: !1,
                mentionChannels: [],
                soundboardSounds: [],
                formatInline: !0,
                noStyleAndInteraction: !1,
                allowHeading: !1,
                allowList: !1,
                disableAutoBlockNewlines: !0,
                previewLinkTarget: !1,
                disableAnimatedEmoji: !0,
                guildId: r,
                channelId: a,
                messageId: s,
                authorId: l,
                muted: !1,
                disablePressableChannelMention: !0,
                textColor: n.textColor,
            },
            (e) => (Array.isArray(e) || (e = [e]), e),
        );
    })(e, t, n);
}
function T(e, t, n) {
    return (0, i.A.parseAutoModerationSystemMessage)(
        e,
        !0,
        {
            allowLinks: !1,
            allowDevLinks: !1,
            allowEmojiLinks: !1,
            allowGameMentions: !1,
            mentionChannels: [],
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
    );
}
