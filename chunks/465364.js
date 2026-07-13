t.d(e, { Ay: () => m, Le: () => c, Tz: () => w, jp: () => p, ko: () => d }), t(380610);
var o = t(833291);
t(100392);
var i = t(46054),
    a = t(659674),
    l = t(38405),
    r = t(652215);
let s = new Set([r.Auw.IMAGE, r.Auw.GIFV]),
    u = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);
function d(n, e) {
    let t = c({ channelId: n.channel_id, messageId: n.id, authorId: n.author?.id, renderOptions: e }),
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
function c(n) {
    let { channelId: e, messageId: t, authorId: o, renderOptions: i } = n;
    return {
        channelId: e,
        messageId: t,
        authorId: o,
        allowLinks: !!i.allowLinks,
        allowDevLinks: !!i.allowDevLinks,
        allowGameMentions: !!i.allowGameMentions,
        allowTimeMentionInput: !!i.allowTimeMentionInput,
        formatInline: !!i.formatInline,
        noStyleAndInteraction: !!i.noStyleAndInteraction,
        allowHeading: !!i.allowHeading,
        allowList: !!i.allowList,
        previewLinkTarget: !!i.previewLinkTarget,
        disableAnimatedEmoji: !!i.disableAnimatedEmoji,
        allowEmojiLinks: !1,
        disableAutoBlockNewlines: !0,
        mentionChannels: [],
        mentionGames: new Map(),
        soundboardSounds: [],
        muted: !1,
        unknownUserMentionPlaceholder: !0,
        viewingChannelId: i.viewingChannelId,
        forceWhite: !!i.forceWhite,
        textColor: i.textColor,
        disablePressableChannelMention: !!i.disablePressableChannelMention,
    };
}
function m(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (function (n, e, t) {
        let {
                toAST: i = !1,
                hideSimpleEmbedContent: c = !0,
                formatInline: m = !1,
                postProcessor: p,
                contentMessage: w,
            } = t,
            h = !1,
            f = !1,
            k = (w ?? e).content,
            g = n(k, !0, d(e, t), (n, t, i) => {
                var d, g, b;
                let L;
                return (
                    (f = i ?? !1),
                    Array.isArray(n) || (n = [n]),
                    f && (n = [{ type: "text", content: k, originalMatch: { index: 0, 0: k } }]),
                    c &&
                        (n = (function (n, e) {
                            if (1 !== n.length || 1 !== e.length) return n;
                            let t = n[0],
                                o = e[0];
                            return ("link" === t.type || "attachmentLink" === t.type) && s.has(o.type) && (0, a.NV)(o)
                                ? []
                                : n;
                        })(n, (w ?? e).embeds)),
                    m ||
                        e.type === r.lAJ.MEDIA_MENTION_MESSAGE ||
                        ((d = n),
                        (n = t
                            ? y(d)
                            : ("paragraph" === d[0].type &&
                                  d[0].content instanceof Array &&
                                  (d[0].content = y(d[0].content)),
                              d))),
                    (L = (g = n).some((n) => "link" !== n.type)),
                    (n = g.filter((n) => {
                        let e = "link" === n.type,
                            t = null != n.target ? (0, o.ts)(n.target) : null;
                        return !(e && null != t && !L);
                    })),
                    (w ?? e).embeds.length > 0 &&
                        ((b = n),
                        (h = t ? A(b) : "paragraph" === b[0].type && b[0].content instanceof Array && A(b[0].content))),
                    m &&
                        (n = (function n(e) {
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
                        })(n)),
                    null != p && (n = p(n, t)),
                    n
                );
            });
        return { hasSpoilerEmbeds: h, hasBailedAst: f, content: g };
    })(e.formatInline ? i.A.parseInlineReply : i.A.parse, n, e);
}
function p(n, e) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return (function (n, e) {
        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        let { content: t, guildId: o, channelId: i, messageId: a, authorId: l } = e;
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
                channelId: i,
                messageId: a,
                authorId: l,
                muted: !1,
                disablePressableChannelMention: !0,
            },
            (n) => (Array.isArray(n) || (n = [n]), n),
        );
    })(n, e, t);
}
function w(n, e, t) {
    var o;
    return (
        (o = i.A.parseAutoModerationSystemMessage),
        o(
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
function y(n) {
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
function h(n, e) {
    if (n instanceof Array) return n.some((n) => h(n, e));
    let t = e(n);
    return null != t
        ? t
        : n.content instanceof Array
          ? h(n.content, e)
          : n.items instanceof Array && n.items.some((n) => h(n, e));
}
function A(n) {
    return h(n, (n) =>
        "spoiler" === n.type ? h(n, (n) => "link" === n.type || "attachmentLink" === n.type || null) : null,
    );
}
