t.d(e, { ko: () => h, Ay: () => f, Le: () => w, Tz: () => A, jp: () => k });
var o = t(46054);
t(321073), t(380610);
var l = t(721779);
t(100392);
var i = t(168543),
    a = t(659674),
    r = t(38405),
    s = t(652215);
let u = new Set([s.Auw.IMAGE, s.Auw.GIFV]),
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
            if ((("emoji" === n.type || "customEmoji" === n.type || "soundboard" === n.type) && (e += 1), e > 30))
                return !1;
        }),
        e > 30 ||
            n.forEach((n) => {
                n.jumboable = !0;
            }),
        n
    );
}
function p(n, e) {
    if (n instanceof Array) return n.some((n) => p(n, e));
    let t = e(n);
    return null != t
        ? t
        : n.content instanceof Array
          ? p(n.content, e)
          : n.items instanceof Array && n.items.some((n) => p(n, e));
}
function m(n) {
    return p(n, (n) =>
        "spoiler" === n.type ? p(n, (n) => "link" === n.type || "attachmentLink" === n.type || null) : null,
    );
}
function y(n) {
    return "link" === n.type && null != n.target && null != (0, l.iY)(n.target);
}
function h(n, e) {
    let t = w({ channelId: n.channel_id, messageId: n.id, authorId: n.author?.id, renderOptions: e }),
        o = null != n.webhookId;
    return {
        ...t,
        allowLinks: o || t.allowLinks,
        allowEmojiLinks: o,
        mentionChannels: n.mentionChannels,
        soundboardSounds: n.soundboardSounds ?? [],
    };
}
function w(n) {
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
function f(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (function (n, e, t) {
        let {
                toAST: o = !1,
                hideSimpleEmbedContent: p = !0,
                formatInline: w = !1,
                postProcessor: f,
                contentMessage: k,
            } = t,
            A = !1,
            g = !1,
            b = (k ?? e).content,
            L = n(b, !0, h(e, t), (n, t, h) => {
                let { ast: L, hasSpoilerEmbeds: I } = (function (n) {
                    var e, t, o, p;
                    let h,
                        {
                            ast: w,
                            inline: f,
                            hasBailedAst: k,
                            message: A,
                            contentMessage: g,
                            messageContent: b,
                            hideSimpleEmbedContent: L,
                            formatInline: I,
                            toAST: E,
                        } = n,
                        M = Array.isArray(w) ? w : [w],
                        C = !1;
                    return (
                        k && (M = [{ type: "text", content: b, originalMatch: { index: 0, 0: b } }]),
                        L &&
                            (M = (function (n, e) {
                                if (1 !== n.length || 1 !== e.length) return n;
                                let t = n[0],
                                    o = e[0];
                                return ("link" === t.type || "attachmentLink" === t.type) &&
                                    u.has(o.type) &&
                                    (0, a.NV)(o)
                                    ? []
                                    : n;
                            })(M, (g ?? A).embeds)),
                        I ||
                            A.type === s.lAJ.MEDIA_MENTION_MESSAGE ||
                            ((e = M),
                            (M = f
                                ? c(e)
                                : ("paragraph" === e[0].type &&
                                      e[0].content instanceof Array &&
                                      (e[0].content = c(e[0].content)),
                                  e))),
                        (h = (t = M).some((n) => "link" !== n.type)),
                        (M =
                            !(o = M =
                                (M = t.filter((n) => {
                                    let e = "link" === n.type,
                                        t = null != n.target ? (0, l.ts)(n.target) : null;
                                    return !(e && null != t && !h);
                                })).filter((n) => {
                                    let e = "link" === n.type,
                                        t = null != n.target && null != (0, l.$9)(n.target);
                                    return !(e && t);
                                })).some(y) ||
                            o.some((n) => "link" !== n.type) ||
                            !(0, i.l)("MarkupPostProcessors")
                                ? o
                                : o.filter((n) => !y(n))),
                        (g ?? A).embeds.length > 0 &&
                            ((p = M),
                            (C = f
                                ? m(p)
                                : "paragraph" === p[0].type && p[0].content instanceof Array && m(p[0].content))),
                        I &&
                            (M = (function n(e) {
                                return (
                                    e.forEach((e) => {
                                        d.has(e.type) &&
                                            null != e.content &&
                                            (Array.isArray(e.content)
                                                ? n(e.content)
                                                : "string" == typeof e.content
                                                  ? (e.content = e.content.replace(/\n/g, " "))
                                                  : r.A.captureMessage(
                                                        `AST node type:${e.type} with content typeof ${typeof e.content}. Keys ${Object.keys(e)}`,
                                                    ));
                                    }),
                                    e
                                );
                            })(M)),
                        { ast: M, hasSpoilerEmbeds: C }
                    );
                })({
                    ast: n,
                    inline: t,
                    hasBailedAst: (g = h ?? !1),
                    message: e,
                    contentMessage: k,
                    messageContent: b,
                    hideSimpleEmbedContent: p,
                    formatInline: w,
                    toAST: o,
                });
                A = I;
                let E = L;
                return null != f && (E = f(E, t)), E;
            });
        return { hasSpoilerEmbeds: A, hasBailedAst: g, content: L };
    })(e.formatInline ? o.A.parseInlineReply : o.A.parse, n, e);
}
function k(n, e) {
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
function A(n, e, t) {
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
