t.d(e, { ko: () => p, Ay: () => y, Le: () => w, Tz: () => A, jp: () => h });
var o = t(46054);
t(380610);
var a = t(833291);
t(100392);
var i = t(659674),
    l = t(38405),
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
    let t = w({ channelId: n.channel_id, messageId: n.id, authorId: n.author?.id, renderOptions: e }),
        o = null != n.webhookId;
    return {
        ...t,
        allowLinks: o || t.allowLinks,
        allowEmojiLinks: o,
        mentionChannels: n.mentionChannels,
        mentionGames: n.mentionGames ?? new Map(),
        soundboardSounds: n.soundboardSounds ?? [],
    };
}
function w(n) {
    let { channelId: e, messageId: t, authorId: o, renderOptions: a } = n;
    return {
        channelId: e,
        messageId: t,
        authorId: o,
        allowLinks: !!a.allowLinks,
        allowDevLinks: !!a.allowDevLinks,
        allowGameMentions: !!a.allowGameMentions,
        allowTimeMentionInput: !!a.allowTimeMentionInput,
        formatInline: !!a.formatInline,
        noStyleAndInteraction: !!a.noStyleAndInteraction,
        allowHeading: !!a.allowHeading,
        allowList: !!a.allowList,
        previewLinkTarget: !!a.previewLinkTarget,
        disableAnimatedEmoji: !!a.disableAnimatedEmoji,
        allowEmojiLinks: !1,
        disableAutoBlockNewlines: !0,
        mentionChannels: [],
        mentionGames: new Map(),
        soundboardSounds: [],
        muted: !1,
        unknownUserMentionPlaceholder: !0,
        viewingChannelId: a.viewingChannelId,
        forceWhite: !!a.forceWhite,
        textColor: a.textColor,
        disablePressableChannelMention: !!a.disablePressableChannelMention,
    };
}
function y(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (function (n, e, t) {
        let {
                toAST: o = !1,
                hideSimpleEmbedContent: c = !0,
                formatInline: w = !1,
                postProcessor: y,
                contentMessage: h,
            } = t,
            A = !1,
            f = !1,
            k = (h ?? e).content,
            b = n(k, !0, p(e, t), (n, t, p) => {
                let { ast: b, hasSpoilerEmbeds: g } = (function (n) {
                    var e, t, o;
                    let c,
                        {
                            ast: p,
                            inline: w,
                            hasBailedAst: y,
                            message: h,
                            contentMessage: A,
                            messageContent: f,
                            hideSimpleEmbedContent: k,
                            formatInline: b,
                            toAST: g,
                        } = n,
                        L = Array.isArray(p) ? p : [p],
                        I = !1;
                    return (
                        y && (L = [{ type: "text", content: f, originalMatch: { index: 0, 0: f } }]),
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
                            })(L, (A ?? h).embeds)),
                        b ||
                            h.type === r.lAJ.MEDIA_MENTION_MESSAGE ||
                            ((e = L),
                            (L = w
                                ? d(e)
                                : ("paragraph" === e[0].type &&
                                      e[0].content instanceof Array &&
                                      (e[0].content = d(e[0].content)),
                                  e))),
                        (c = (t = L).some((n) => "link" !== n.type)),
                        (L = t.filter((n) => {
                            let e = "link" === n.type,
                                t = null != n.target ? (0, a.ts)(n.target) : null;
                            return !(e && null != t && !c);
                        })),
                        (A ?? h).embeds.length > 0 &&
                            ((o = L),
                            (I = w
                                ? m(o)
                                : "paragraph" === o[0].type && o[0].content instanceof Array && m(o[0].content))),
                        b &&
                            (L = (function n(e) {
                                return (
                                    e.forEach((e) => {
                                        u.has(e.type) &&
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
                            })(L)),
                        { ast: L, hasSpoilerEmbeds: I }
                    );
                })({
                    ast: n,
                    inline: t,
                    hasBailedAst: (f = p ?? !1),
                    message: e,
                    contentMessage: h,
                    messageContent: k,
                    hideSimpleEmbedContent: c,
                    formatInline: w,
                    toAST: o,
                });
                A = g;
                let L = b;
                return null != y && (L = y(L, t)), L;
            });
        return { hasSpoilerEmbeds: A, hasBailedAst: f, content: b };
    })(e.formatInline ? o.A.parseInlineReply : o.A.parse, n, e);
}
function h(n, e) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return (function (n, e) {
        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        let { content: t, guildId: o, channelId: a, messageId: i, authorId: l } = e;
        return n(
            t,
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
                guildId: o,
                channelId: a,
                messageId: i,
                authorId: l,
                muted: !1,
                disablePressableChannelMention: !0,
            },
            (n) => (Array.isArray(n) || (n = [n]), n),
        );
    })(n, e, t);
}
function A(n, e, t) {
    var a;
    return (
        (a = o.A.parseAutoModerationSystemMessage),
        a(
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
        )
    );
}
