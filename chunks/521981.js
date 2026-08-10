t.d(e, { ko: () => p, Ay: () => h, Le: () => y, Tz: () => f, jp: () => w });
var o = t(46054);
t(380610);
var l = t(833291);
t(100392);
var i = t(659674),
    a = t(38405),
    r = t(652215);
let s = new Set([r.Auw.IMAGE, r.Auw.GIFV]),
    u = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);
function d(n) {
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
function c(n, e) {
    if (n instanceof Array) return n.some((n) => c(n, e));
    let t = e(n);
    return null != t
        ? t
        : n.content instanceof Array
          ? c(n.content, e)
          : n.items instanceof Array && n.items.some((n) => c(n, e));
}
function m(n) {
    return c(n, (n) =>
        "spoiler" === n.type ? c(n, (n) => "link" === n.type || "attachmentLink" === n.type || null) : null,
    );
}
function p(n, e) {
    let t = y({ channelId: n.channel_id, messageId: n.id, authorId: n.author?.id, renderOptions: e }),
        o = null != n.webhookId;
    return {
        ...t,
        allowLinks: o || t.allowLinks,
        allowEmojiLinks: o,
        mentionChannels: n.mentionChannels,
        soundboardSounds: n.soundboardSounds ?? [],
    };
}
function y(n) {
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
function h(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (function (n, e, t) {
        let {
                toAST: o = !1,
                hideSimpleEmbedContent: c = !0,
                formatInline: y = !1,
                postProcessor: h,
                contentMessage: w,
            } = t,
            f = !1,
            A = !1,
            k = (w ?? e).content,
            g = n(k, !0, p(e, t), (n, t, p) => {
                let { ast: g, hasSpoilerEmbeds: b } = (function (n) {
                    var e, t, o;
                    let c,
                        {
                            ast: p,
                            inline: y,
                            hasBailedAst: h,
                            message: w,
                            contentMessage: f,
                            messageContent: A,
                            hideSimpleEmbedContent: k,
                            formatInline: g,
                            toAST: b,
                        } = n,
                        L = Array.isArray(p) ? p : [p],
                        I = !1;
                    return (
                        h && (L = [{ type: "text", content: A, originalMatch: { index: 0, 0: A } }]),
                        k &&
                            (L = (function (n, e) {
                                if (1 !== n.length || 1 !== e.length) return n;
                                let t = n[0],
                                    o = e[0];
                                return ("link" === t.type || "attachmentLink" === t.type) &&
                                    s.has(o.type) &&
                                    (0, i.NV)(o)
                                    ? []
                                    : n;
                            })(L, (f ?? w).embeds)),
                        g ||
                            w.type === r.lAJ.MEDIA_MENTION_MESSAGE ||
                            ((e = L),
                            (L = y
                                ? d(e)
                                : ("paragraph" === e[0].type &&
                                      e[0].content instanceof Array &&
                                      (e[0].content = d(e[0].content)),
                                  e))),
                        (c = (t = L).some((n) => "link" !== n.type)),
                        (L = (L = t.filter((n) => {
                            let e = "link" === n.type,
                                t = null != n.target ? (0, l.ts)(n.target) : null;
                            return !(e && null != t && !c);
                        })).filter((n) => {
                            let e = "link" === n.type,
                                t = null != n.target && null != (0, l.$9)(n.target);
                            return !(e && t);
                        })),
                        (f ?? w).embeds.length > 0 &&
                            ((o = L),
                            (I = y
                                ? m(o)
                                : "paragraph" === o[0].type && o[0].content instanceof Array && m(o[0].content))),
                        g &&
                            (L = (function n(e) {
                                return (
                                    e.forEach((e) => {
                                        u.has(e.type) &&
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
                            })(L)),
                        { ast: L, hasSpoilerEmbeds: I }
                    );
                })({
                    ast: n,
                    inline: t,
                    hasBailedAst: (A = p ?? !1),
                    message: e,
                    contentMessage: w,
                    messageContent: k,
                    hideSimpleEmbedContent: c,
                    formatInline: y,
                    toAST: o,
                });
                f = b;
                let L = g;
                return null != h && (L = h(L, t)), L;
            });
        return { hasSpoilerEmbeds: f, hasBailedAst: A, content: g };
    })(e.formatInline ? o.A.parseInlineReply : o.A.parse, n, e);
}
function w(n, e) {
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
