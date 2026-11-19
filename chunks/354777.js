t.d(e, { Ay: () => h, Le: () => p, ko: () => m, Tz: () => k, jp: () => f, b6: () => A, z2: () => w });
var o = t(46054);
(t(380610), t(100392));
var l = t(856383),
    i = t(448767),
    a = t(652215);
t(307731);
let r = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);
function s(n) {
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
function d(n, e) {
    if (n instanceof Array) return n.some((n) => d(n, e));
    let t = e(n);
    return null != t
        ? t
        : n.content instanceof Array
          ? d(n.content, e)
          : n.items instanceof Array && n.items.some((n) => d(n, e));
}
function u(n) {
    return d(n, (n) =>
        "spoiler" === n.type ? d(n, (n) => "link" === n.type || "attachmentLink" === n.type || null) : null,
    );
}
function c(n) {
    return "link" === n.type || "attachmentLink" === n.type;
}
function m(n, e) {
    let t = p({ channelId: n.channel_id, messageId: n.id, authorId: n.author?.id, renderOptions: e }),
        o = null != n.webhookId;
    return {
        ...t,
        allowLinks: o || t.allowLinks,
        allowEmojiLinks: o,
        mentionChannels: n.mentionChannels,
        soundboardSounds: n.soundboardSounds ?? [],
    };
}
function p(n) {
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
function y(n, e, t) {
    let {
            toAST: o = !1,
            hideSimpleEmbedContent: d = !0,
            formatInline: p = !1,
            postProcessor: y,
            contentMessage: h,
        } = t,
        w = !1,
        A = !1,
        f = (h ?? e).content,
        k = n(f, !0, m(e, t), (n, t, m) => {
            let { ast: k, hasSpoilerEmbeds: b } = (function (n) {
                var e, t, o, d, m;
                let p,
                    {
                        ast: y,
                        inline: h,
                        hasBailedAst: w,
                        message: A,
                        contentMessage: f,
                        messageContent: k,
                        hideSimpleEmbedContent: b,
                        formatInline: g,
                        toAST: L,
                    } = n,
                    I = Array.isArray(y) ? y : [y],
                    S = !1;
                return (
                    w && (I = [{ type: "text", content: k, originalMatch: { index: 0, 0: k } }]),
                    b && ((e = I), (t = (f ?? A).embeds), (I = (0, i.k5)(t) && (0, i.iz)((0, i.dn)(e, c)) ? [] : e)),
                    g ||
                        A.type === a.lAJ.MEDIA_MENTION_MESSAGE ||
                        ((o = I),
                        (I = h
                            ? s(o)
                            : ("paragraph" === o[0].type &&
                                  o[0].content instanceof Array &&
                                  (o[0].content = s(o[0].content)),
                              o))),
                    (d = I),
                    (p = { onlyLinkContent: (0, i.dn)(d, c).onlyLinks, stripGameServerShareLinks: !0 }),
                    (I = d.filter((n) => {
                        let e = "link" === n.type ? (n.target ?? null) : null;
                        return null == e || !(0, i.c_)(e, p);
                    })),
                    (f ?? A).embeds.length > 0 &&
                        ((m = I),
                        (S = h ? u(m) : "paragraph" === m[0].type && m[0].content instanceof Array && u(m[0].content))),
                    g &&
                        (I = (function n(e) {
                            return (
                                e.forEach((e) => {
                                    r.has(e.type) &&
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
                    { ast: I, hasSpoilerEmbeds: S }
                );
            })({
                ast: n,
                inline: t,
                hasBailedAst: (A = m ?? !1),
                message: e,
                contentMessage: h,
                messageContent: f,
                hideSimpleEmbedContent: d,
                formatInline: p,
                toAST: o,
            });
            w = b;
            let g = k;
            return (null != y && (g = y(g, t)), g);
        });
    return { hasSpoilerEmbeds: w, hasBailedAst: A, content: k };
}
function h(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return y(e.formatInline ? o.A.parseInlineReply : o.A.parse, n, e);
}
function w(n, e) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return y(n, e, t);
}
function A(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return y(e.formatInline ? o.A.parseInlineReplyToAST : o.A.parseToAST, n, { ...e, toAST: !0 });
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
                unknownUserMentionPlaceholder: !0,
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
