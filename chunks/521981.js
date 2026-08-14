t.d(e, { ko: () => f, Ay: () => w, Le: () => h, Tz: () => g, jp: () => k });
var o = t(46054);
t(321073), t(380610);
var l = t(833291);
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
function y(n) {
    return "link" === n.type && null != n.target && null != (0, l.iY)(n.target);
}
function f(n, e) {
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
                hideSimpleEmbedContent: m = !0,
                formatInline: h = !1,
                postProcessor: w,
                contentMessage: k,
            } = t,
            g = !1,
            A = !1,
            b = (k ?? e).content,
            L = n(b, !0, f(e, t), (n, t, f) => {
                let { ast: L, hasSpoilerEmbeds: I } = (function (n) {
                    var e, t, o, m;
                    let f,
                        {
                            ast: h,
                            inline: w,
                            hasBailedAst: k,
                            message: g,
                            contentMessage: A,
                            messageContent: b,
                            hideSimpleEmbedContent: L,
                            formatInline: I,
                            toAST: C,
                        } = n,
                        E = Array.isArray(h) ? h : [h],
                        M = !1;
                    return (
                        k && (E = [{ type: "text", content: b, originalMatch: { index: 0, 0: b } }]),
                        L &&
                            (E = (function (n, e) {
                                if (1 !== n.length || 1 !== e.length) return n;
                                let t = n[0],
                                    o = e[0];
                                return ("link" === t.type || "attachmentLink" === t.type) &&
                                    u.has(o.type) &&
                                    (0, a.NV)(o)
                                    ? []
                                    : n;
                            })(E, (A ?? g).embeds)),
                        I ||
                            g.type === s.lAJ.MEDIA_MENTION_MESSAGE ||
                            ((e = E),
                            (E = w
                                ? c(e)
                                : ("paragraph" === e[0].type &&
                                      e[0].content instanceof Array &&
                                      (e[0].content = c(e[0].content)),
                                  e))),
                        (f = (t = E).some((n) => "link" !== n.type)),
                        (E =
                            !(o = E =
                                (E = t.filter((n) => {
                                    let e = "link" === n.type,
                                        t = null != n.target ? (0, l.ts)(n.target) : null;
                                    return !(e && null != t && !f);
                                })).filter((n) => {
                                    let e = "link" === n.type,
                                        t = null != n.target && null != (0, l.$9)(n.target);
                                    return !(e && t);
                                })).some(y) ||
                            o.some((n) => "link" !== n.type) ||
                            !(0, i.l)("MarkupPostProcessors")
                                ? o
                                : o.filter((n) => !y(n))),
                        (A ?? g).embeds.length > 0 &&
                            ((m = E),
                            (M = w
                                ? p(m)
                                : "paragraph" === m[0].type && m[0].content instanceof Array && p(m[0].content))),
                        I &&
                            (E = (function n(e) {
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
                            })(E)),
                        { ast: E, hasSpoilerEmbeds: M }
                    );
                })({
                    ast: n,
                    inline: t,
                    hasBailedAst: (A = f ?? !1),
                    message: e,
                    contentMessage: k,
                    messageContent: b,
                    hideSimpleEmbedContent: m,
                    formatInline: h,
                    toAST: o,
                });
                g = I;
                let C = L;
                return null != w && (C = w(C, t)), C;
            });
        return { hasSpoilerEmbeds: g, hasBailedAst: A, content: L };
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
function g(n, e, t) {
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
