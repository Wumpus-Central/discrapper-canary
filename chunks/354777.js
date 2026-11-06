t.d(e, { Ay: () => h, Le: () => m, ko: () => p, Tz: () => A, jp: () => w, b6: () => k, z2: () => f });
var o = t(46054);
(t(380610), t(100392));
var l = t(856383),
    i = t(448767),
    r = t(652215);
t(307731);
let a = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);
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
function u(n, e) {
    if (n instanceof Array) return n.some((n) => u(n, e));
    let t = e(n);
    return null != t
        ? t
        : n.content instanceof Array
          ? u(n.content, e)
          : n.items instanceof Array && n.items.some((n) => u(n, e));
}
function d(n) {
    return u(n, (n) =>
        "spoiler" === n.type ? u(n, (n) => "link" === n.type || "attachmentLink" === n.type || null) : null,
    );
}
function c(n) {
    return "link" === n.type || "attachmentLink" === n.type;
}
function p(n, e) {
    let t = m({ channelId: n.channel_id, messageId: n.id, authorId: n.author?.id, renderOptions: e }),
        o = null != n.webhookId;
    return {
        ...t,
        allowLinks: o || t.allowLinks,
        allowEmojiLinks: o,
        mentionChannels: n.mentionChannels,
        soundboardSounds: n.soundboardSounds ?? [],
    };
}
function m(n) {
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
            hideSimpleEmbedContent: u = !0,
            formatInline: m = !1,
            postProcessor: y,
            contentMessage: h,
        } = t,
        f = !1,
        k = !1,
        w = (h ?? e).content,
        A = n(w, !0, p(e, t), (n, t, p) => {
            let { ast: A, hasSpoilerEmbeds: b } = (function (n) {
                var e, t, o, u, p;
                let m,
                    {
                        ast: y,
                        inline: h,
                        hasBailedAst: f,
                        message: k,
                        contentMessage: w,
                        messageContent: A,
                        hideSimpleEmbedContent: b,
                        formatInline: L,
                        toAST: g,
                    } = n,
                    I = Array.isArray(y) ? y : [y],
                    S = !1;
                return (
                    f && (I = [{ type: "text", content: A, originalMatch: { index: 0, 0: A } }]),
                    b && ((e = I), (t = (w ?? k).embeds), (I = (0, i.k5)(t) && (0, i.iz)((0, i.dn)(e, c)) ? [] : e)),
                    L ||
                        k.type === r.lAJ.MEDIA_MENTION_MESSAGE ||
                        ((o = I),
                        (I = h
                            ? s(o)
                            : ("paragraph" === o[0].type &&
                                  o[0].content instanceof Array &&
                                  (o[0].content = s(o[0].content)),
                              o))),
                    (u = I),
                    (m = { onlyLinkContent: (0, i.dn)(u, c).onlyLinks, stripGameServerShareLinks: !0 }),
                    (I = u.filter((n) => {
                        let e = "link" === n.type ? (n.target ?? null) : null;
                        return null == e || !(0, i.c_)(e, m);
                    })),
                    (w ?? k).embeds.length > 0 &&
                        ((p = I),
                        (S = h ? d(p) : "paragraph" === p[0].type && p[0].content instanceof Array && d(p[0].content))),
                    L &&
                        (I = (function n(e) {
                            return (
                                e.forEach((e) => {
                                    a.has(e.type) &&
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
                hasBailedAst: (k = p ?? !1),
                message: e,
                contentMessage: h,
                messageContent: w,
                hideSimpleEmbedContent: u,
                formatInline: m,
                toAST: o,
            });
            f = b;
            let L = A;
            return (null != y && (L = y(L, t)), L);
        });
    return { hasSpoilerEmbeds: f, hasBailedAst: k, content: A };
}
function h(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return y(e.formatInline ? o.A.parseInlineReply : o.A.parse, n, e);
}
function f(n, e) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return y(n, e, t);
}
function k(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return y(e.formatInline ? o.A.parseInlineReplyToAST : o.A.parseToAST, n, { ...e, toAST: !0 });
}
function w(n, e) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return (function (n, e) {
        let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { content: o, guildId: l, channelId: i, messageId: r, authorId: a } = e;
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
                messageId: r,
                authorId: a,
                muted: !1,
                unknownUserMentionPlaceholder: !0,
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
