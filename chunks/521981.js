t.d(e, { ko: () => y, Ay: () => w, Le: () => h, Tz: () => f, jp: () => A });
var o = t(46054);
t(380610);
var l = t(721779);
t(100392);
var i = t(659674),
    a = t(38405),
    r = t(652215),
    s = t(307731);
let u = new Set([r.Auw.IMAGE, r.Auw.GIFV]),
    d = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);
function c(n) {
    if (
        n.some(
            (n) =>
                "emoji" !== n.type &&
                "customEmoji" !== n.type &&
                "soundboard" !== n.type &&
                ("string" != typeof n.content || "" !== n.content.trim()),
        )
    )
        return n;
    let e = 0;
    return (
        n.forEach((n) => {
            if (
                (("emoji" === n.type || "customEmoji" === n.type || "soundboard" === n.type) && (e += 1),
                e > s.MAX_EMOJI_TO_BE_JUMBO)
            )
                return !1;
        }),
        e > s.MAX_EMOJI_TO_BE_JUMBO ||
            n.forEach((n) => {
                n.jumboable = !0;
            }),
        n
    );
}
function m(n, e) {
    if (n instanceof Array) return n.some((n) => m(n, e));
    let t = e(n);
    return null != t
        ? t
        : n.content instanceof Array
          ? m(n.content, e)
          : n.items instanceof Array && n.items.some((n) => m(n, e));
}
function p(n) {
    return m(n, (n) =>
        "spoiler" === n.type ? m(n, (n) => "link" === n.type || "attachmentLink" === n.type || null) : null,
    );
}
function y(n, e) {
    let t = h({ channelId: n.channel_id, messageId: n.id, authorId: n.author?.id, renderOptions: e }),
        o = null != n.webhookId;
    return {
        ...t,
        allowLinks: o || t.allowLinks,
        allowEmojiLinks: o,
        mentionChannels: n.mentionChannels,
        soundboardSounds: n.soundboardSounds ?? [],
    };
}
function h(n) {
    let { channelId: e, messageId: t, authorId: o, renderOptions: l } = n;
    return {
        channelId: e,
        messageId: t,
        authorId: o,
        allowLinks: !!l.allowLinks,
        allowDevLinks: !!l.allowDevLinks,
        allowGameMentions: !!l.allowGameMentions,
        allowTimeMentionInput: !!l.allowTimeMentionInput,
        formatInline: !!l.formatInline,
        noStyleAndInteraction: !!l.noStyleAndInteraction,
        allowHeading: !!l.allowHeading,
        allowList: !!l.allowList,
        previewLinkTarget: !!l.previewLinkTarget,
        disableAnimatedEmoji: !!l.disableAnimatedEmoji,
        allowEmojiLinks: !1,
        disableAutoBlockNewlines: !0,
        mentionChannels: [],
        soundboardSounds: [],
        muted: !1,
        unknownUserMentionPlaceholder: !0,
        viewingChannelId: l.viewingChannelId,
        forceWhite: !!l.forceWhite,
        textColor: l.textColor,
        disablePressableChannelMention: !!l.disablePressableChannelMention,
    };
}
function w(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (function (n, e, t) {
        let {
                toAST: o = !1,
                hideSimpleEmbedContent: s = !0,
                formatInline: m = !1,
                postProcessor: h,
                contentMessage: w,
            } = t,
            A = !1,
            f = !1,
            k = (w ?? e).content,
            g = n(k, !0, y(e, t), (n, t, y) => {
                let { ast: g, hasSpoilerEmbeds: b } = (function (n) {
                    var e, t, o;
                    let s,
                        {
                            ast: m,
                            inline: y,
                            hasBailedAst: h,
                            message: w,
                            contentMessage: A,
                            messageContent: f,
                            hideSimpleEmbedContent: k,
                            formatInline: g,
                            toAST: b,
                        } = n,
                        I = Array.isArray(m) ? m : [m],
                        L = !1;
                    return (
                        h && (I = [{ type: "text", content: f, originalMatch: { index: 0, 0: f } }]),
                        k &&
                            (I = (function (n, e) {
                                if (1 !== n.length || 1 !== e.length) return n;
                                let t = n[0],
                                    o = e[0];
                                return ("link" === t.type || "attachmentLink" === t.type) &&
                                    u.has(o.type) &&
                                    (0, i.NV)(o)
                                    ? []
                                    : n;
                            })(I, (A ?? w).embeds)),
                        g ||
                            w.type === r.lAJ.MEDIA_MENTION_MESSAGE ||
                            ((e = I),
                            (I = y
                                ? c(e)
                                : ("paragraph" === e[0].type &&
                                      e[0].content instanceof Array &&
                                      (e[0].content = c(e[0].content)),
                                  e))),
                        (s = (t = I).some((n) => "link" !== n.type)),
                        (I = (I = t.filter((n) => {
                            let e = "link" === n.type,
                                t = null != n.target ? (0, l.ts)(n.target) : null;
                            return !(e && null != t && !s);
                        })).filter((n) => {
                            let e = "link" === n.type,
                                t = null != n.target && null != (0, l.$9)(n.target);
                            return !(e && t);
                        })),
                        (A ?? w).embeds.length > 0 &&
                            ((o = I),
                            (L = y
                                ? p(o)
                                : "paragraph" === o[0].type && o[0].content instanceof Array && p(o[0].content))),
                        g &&
                            (I = (function n(e) {
                                return (
                                    e.forEach((e) => {
                                        d.has(e.type) &&
                                            null != e.content &&
                                            (Array.isArray(e.content)
                                                ? n(e.content)
                                                : "string" == typeof e.content
                                                  ? (e.content = e.content.replace(/\n/g, " "))
                                                  : a.A.captureMessage(
                                                        `AST node type:${e.type} with content typeof ${typeof e.content}. Keys ${Object.keys(e)}`,
                                                    ));
                                    }),
                                    e
                                );
                            })(I)),
                        { ast: I, hasSpoilerEmbeds: L }
                    );
                })({
                    ast: n,
                    inline: t,
                    hasBailedAst: (f = y ?? !1),
                    message: e,
                    contentMessage: w,
                    messageContent: k,
                    hideSimpleEmbedContent: s,
                    formatInline: m,
                    toAST: o,
                });
                A = b;
                let I = g;
                return (null != h && (I = h(I, t)), I);
            });
        return { hasSpoilerEmbeds: A, hasBailedAst: f, content: g };
    })(e.formatInline ? o.A.parseInlineReply : o.A.parse, n, e);
}
function A(n, e) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return (function (n, e) {
        let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { content: o, guildId: l, channelId: i, messageId: a, authorId: r } = e;
        return n(
            o,
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
                guildId: l,
                channelId: i,
                messageId: a,
                authorId: r,
                muted: !1,
                disablePressableChannelMention: !0,
                textColor: t.textColor,
            },
            (n) => (Array.isArray(n) || (n = [n]), n),
        );
    })(n, e, t);
}
function f(n, e, t) {
    return (0, o.A.parseAutoModerationSystemMessage)(
        n,
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
            highlightWord: e,
            disableAnimatedEmoji: !1,
            channelId: t,
            muted: !1,
        },
        (n) => (Array.isArray(n) || (n = [n]), n),
    );
}
