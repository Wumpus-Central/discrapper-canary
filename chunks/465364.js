n.d(t, { Ay: () => m, Le: () => u, Tz: () => h, jp: () => _, ko: () => d }), n(380610);
var a = n(833291);
n(100392);
var i = n(46054),
    l = n(659674),
    s = n(728458),
    r = n(652215);
let o = new Set([r.Auw.IMAGE, r.Auw.GIFV]),
    c = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);
function d(e, t) {
    let n = u({ channelId: e.channel_id, messageId: e.id, renderOptions: t }),
        a = null != e.webhookId;
    return {
        ...n,
        allowLinks: a || n.allowLinks,
        allowEmojiLinks: a,
        mentionChannels: e.mentionChannels,
        soundboardSounds: e.soundboardSounds ?? [],
    };
}
function u(e) {
    let { channelId: t, messageId: n, renderOptions: a } = e;
    return {
        channelId: t,
        messageId: n,
        allowLinks: !!a.allowLinks,
        allowDevLinks: !!a.allowDevLinks,
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
        soundboardSounds: [],
        muted: !1,
        unknownUserMentionPlaceholder: !0,
        viewingChannelId: a.viewingChannelId,
        forceWhite: !!a.forceWhite,
        textColor: a.textColor,
    };
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (function (e, t, n) {
        let {
                toAST: i = !1,
                hideSimpleEmbedContent: r = !0,
                formatInline: u = !1,
                postProcessor: m,
                contentMessage: _,
            } = n,
            h = !1,
            g = !1,
            A = (_ ?? t).content,
            b = e(A, !0, d(t, n), (e, n, i) => {
                var d, b, T;
                let I;
                return (
                    (g = i ?? !1),
                    Array.isArray(e) || (e = [e]),
                    g && (e = [{ type: "text", content: A, originalMatch: { index: 0, 0: A } }]),
                    r &&
                        (e = (function (e, t) {
                            if (1 !== e.length || 1 !== t.length) return e;
                            let n = e[0],
                                a = t[0];
                            return ("link" === n.type || "attachmentLink" === n.type) && o.has(a.type) && (0, l.NV)(a)
                                ? []
                                : e;
                        })(e, (_ ?? t).embeds)),
                    u ||
                        ((d = e),
                        (e = n
                            ? p(d)
                            : ("paragraph" === d[0].type &&
                                  d[0].content instanceof Array &&
                                  (d[0].content = p(d[0].content)),
                              d))),
                    (I = (b = e).some((e) => "link" !== e.type)),
                    (e = b.filter((e) => {
                        let t = "link" === e.type,
                            n = null != e.target ? (0, a.ts)(e.target) : null;
                        return !(t && null != n && !I);
                    })),
                    t.embeds.length > 0 &&
                        ((T = e),
                        (h = n ? f(T) : "paragraph" === T[0].type && T[0].content instanceof Array && f(T[0].content))),
                    u &&
                        (e = (function e(t) {
                            return (
                                t.forEach((t) => {
                                    c.has(t.type) &&
                                        null != t.content &&
                                        (Array.isArray(t.content)
                                            ? e(t.content)
                                            : "string" == typeof t.content
                                              ? (t.content = t.content.replace(/\n/g, " "))
                                              : s.A.captureMessage(
                                                    `AST node type:${t.type} with content typeof ${typeof t.content}. Keys ${Object.keys(t)}`,
                                                ));
                                }),
                                t
                            );
                        })(e)),
                    null != m && (e = m(e, n)),
                    e
                );
            });
        return { hasSpoilerEmbeds: h, hasBailedAst: g, content: b };
    })(t.formatInline ? i.A.parseInlineReply : i.A.parse, e, t);
}
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return (function (e, t) {
        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        let { content: n, guildId: a, channelId: i } = t;
        return e(
            n,
            !0,
            {
                allowLinks: !1,
                allowDevLinks: !1,
                allowEmojiLinks: !1,
                mentionChannels: [],
                soundboardSounds: [],
                formatInline: !0,
                noStyleAndInteraction: !1,
                allowHeading: !1,
                allowList: !1,
                disableAutoBlockNewlines: !0,
                previewLinkTarget: !1,
                disableAnimatedEmoji: !0,
                guildId: a,
                channelId: i,
                muted: !1,
                disablePressableChannelMention: !0,
            },
            (e) => (Array.isArray(e) || (e = [e]), e),
        );
    })(e, t, n);
}
function h(e, t, n) {
    return (0, i.A.parseAutoModerationSystemMessage)(
        e,
        !0,
        {
            allowLinks: !1,
            allowDevLinks: !1,
            allowEmojiLinks: !1,
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
function p(e) {
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
function g(e, t) {
    if (e instanceof Array) return e.some((e) => g(e, t));
    let n = t(e);
    return null != n
        ? n
        : e.content instanceof Array
          ? g(e.content, t)
          : e.items instanceof Array && e.items.some((e) => g(e, t));
}
function f(e) {
    return g(e, (e) =>
        "spoiler" === e.type ? g(e, (e) => "link" === e.type || "attachmentLink" === e.type || null) : null,
    );
}
