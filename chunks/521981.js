t.d(e, { ko: () => p, Ay: () => h, Le: () => y, Tz: () => k, jp: () => f });
var o = t(46054);
(t(380610), t(100392));
var l = t(38405),
    i = t(448767),
    a = t(652215),
    r = t(307731);
let s = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);
function u(n) {
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
                e > r.MAX_EMOJI_TO_BE_JUMBO)
            )
                return !1;
        }),
        e > r.MAX_EMOJI_TO_BE_JUMBO ||
            n.forEach((n) => {
                n.jumboable = !0;
            }),
        n
    );
}
function d(n, e) {
    if (n instanceof Array) return n.some((n) => d(n, e));
    let t = e(n);
    return null != t
        ? t
        : n.content instanceof Array
          ? d(n.content, e)
          : n.items instanceof Array && n.items.some((n) => d(n, e));
}
function c(n) {
    return d(n, (n) =>
        "spoiler" === n.type ? d(n, (n) => "link" === n.type || "attachmentLink" === n.type || null) : null,
    );
}
function m(n) {
    return "link" === n.type || "attachmentLink" === n.type;
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
                hideSimpleEmbedContent: r = !0,
                formatInline: d = !1,
                postProcessor: y,
                contentMessage: h,
            } = t,
            f = !1,
            k = !1,
            w = (h ?? e).content,
            A = n(w, !0, p(e, t), (n, t, p) => {
                let { ast: A, hasSpoilerEmbeds: L } = (function (n) {
                    var e, t, o, r, d;
                    let p,
                        {
                            ast: y,
                            inline: h,
                            hasBailedAst: f,
                            message: k,
                            contentMessage: w,
                            messageContent: A,
                            hideSimpleEmbedContent: L,
                            formatInline: b,
                            toAST: g,
                        } = n,
                        I = Array.isArray(y) ? y : [y],
                        M = !1;
                    return (
                        f && (I = [{ type: "text", content: A, originalMatch: { index: 0, 0: A } }]),
                        L &&
                            ((e = I), (t = (w ?? k).embeds), (I = (0, i.k5)(t) && (0, i.iz)((0, i.dn)(e, m)) ? [] : e)),
                        b ||
                            k.type === a.lAJ.MEDIA_MENTION_MESSAGE ||
                            ((o = I),
                            (I = h
                                ? u(o)
                                : ("paragraph" === o[0].type &&
                                      o[0].content instanceof Array &&
                                      (o[0].content = u(o[0].content)),
                                  o))),
                        (r = I),
                        (p = { onlyLinkContent: (0, i.dn)(r, m).onlyLinks, stripGameServerShareLinks: !0 }),
                        (I = r.filter((n) => {
                            let e = "link" === n.type ? (n.target ?? null) : null;
                            return null == e || !(0, i.c_)(e, p);
                        })),
                        (w ?? k).embeds.length > 0 &&
                            ((d = I),
                            (M = h
                                ? c(d)
                                : "paragraph" === d[0].type && d[0].content instanceof Array && c(d[0].content))),
                        b &&
                            (I = (function n(e) {
                                return (
                                    e.forEach((e) => {
                                        s.has(e.type) &&
                                            null != e.content &&
                                            (Array.isArray(e.content)
                                                ? n(e.content)
                                                : "string" == typeof e.content
                                                  ? (e.content = e.content.replace(/\n/g, " "))
                                                  : l.A.captureMessage(
                                                        `AST node type:${e.type} with content typeof ${typeof e.content}. Keys ${Object.keys(e)}`,
                                                    ));
                                    }),
                                    e
                                );
                            })(I)),
                        { ast: I, hasSpoilerEmbeds: M }
                    );
                })({
                    ast: n,
                    inline: t,
                    hasBailedAst: (k = p ?? !1),
                    message: e,
                    contentMessage: h,
                    messageContent: w,
                    hideSimpleEmbedContent: r,
                    formatInline: d,
                    toAST: o,
                });
                f = L;
                let b = A;
                return (null != y && (b = y(b, t)), b);
            });
        return { hasSpoilerEmbeds: f, hasBailedAst: k, content: A };
    })(e.formatInline ? o.A.parseInlineReply : o.A.parse, n, e);
}
function f(n, e) {
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
function k(n, e, t) {
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
