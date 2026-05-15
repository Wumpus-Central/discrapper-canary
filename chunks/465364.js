"use strict";
n.d(t, { Ay: () => _, Le: () => d, Tz: () => h, jp: () => f, ko: () => c }), n(380610);
var i = n(833291);
n(100392);
var r = n(46054),
    s = n(659674),
    a = n(38405),
    o = n(652215);
let l = new Set([o.Auw.IMAGE, o.Auw.GIFV]),
    u = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);
function c(e, t) {
    let n = d({ channelId: e.channel_id, messageId: e.id, renderOptions: t }),
        i = null != e.webhookId;
    return {
        ...n,
        allowLinks: i || n.allowLinks,
        allowEmojiLinks: i,
        mentionChannels: e.mentionChannels,
        soundboardSounds: e.soundboardSounds ?? [],
    };
}
function d(e) {
    let { channelId: t, messageId: n, renderOptions: i } = e;
    return {
        channelId: t,
        messageId: n,
        allowLinks: !!i.allowLinks,
        allowDevLinks: !!i.allowDevLinks,
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
        soundboardSounds: [],
        muted: !1,
        unknownUserMentionPlaceholder: !0,
        viewingChannelId: i.viewingChannelId,
        forceWhite: !!i.forceWhite,
        textColor: i.textColor,
    };
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (function (e, t, n) {
        let {
                toAST: r = !1,
                hideSimpleEmbedContent: o = !0,
                formatInline: d = !1,
                postProcessor: _,
                contentMessage: f,
            } = n,
            h = !1,
            E = !1,
            g = (f ?? t).content,
            A = e(g, !0, c(t, n), (e, n, r) => {
                var c, A, I;
                let T;
                return (
                    (E = r ?? !1),
                    Array.isArray(e) || (e = [e]),
                    E && (e = [{ type: "text", content: g, originalMatch: { index: 0, 0: g } }]),
                    o &&
                        (e = (function (e, t) {
                            if (1 !== e.length || 1 !== t.length) return e;
                            let n = e[0],
                                i = t[0];
                            return ("link" === n.type || "attachmentLink" === n.type) && l.has(i.type) && (0, s.NV)(i)
                                ? []
                                : e;
                        })(e, (f ?? t).embeds)),
                    d ||
                        ((c = e),
                        (e = n
                            ? p(c)
                            : ("paragraph" === c[0].type &&
                                  c[0].content instanceof Array &&
                                  (c[0].content = p(c[0].content)),
                              c))),
                    (T = (A = e).some((e) => "link" !== e.type)),
                    (e = A.filter((e) => {
                        let t = "link" === e.type,
                            n = null != e.target ? (0, i.ts)(e.target) : null;
                        return !(t && null != n && !T);
                    })),
                    (f ?? t).embeds.length > 0 &&
                        ((I = e),
                        (h = n ? m(I) : "paragraph" === I[0].type && I[0].content instanceof Array && m(I[0].content))),
                    d &&
                        (e = (function e(t) {
                            return (
                                t.forEach((t) => {
                                    u.has(t.type) &&
                                        null != t.content &&
                                        (Array.isArray(t.content)
                                            ? e(t.content)
                                            : "string" == typeof t.content
                                              ? (t.content = t.content.replace(/\n/g, " "))
                                              : a.A.captureMessage(
                                                    `AST node type:${t.type} with content typeof ${typeof t.content}. Keys ${Object.keys(t)}`,
                                                ));
                                }),
                                t
                            );
                        })(e)),
                    null != _ && (e = _(e, n)),
                    e
                );
            });
        return { hasSpoilerEmbeds: h, hasBailedAst: E, content: A };
    })(t.formatInline ? r.A.parseInlineReply : r.A.parse, e, t);
}
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return (function (e, t) {
        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        let { content: n, guildId: i, channelId: r } = t;
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
                guildId: i,
                channelId: r,
                muted: !1,
                disablePressableChannelMention: !0,
            },
            (e) => (Array.isArray(e) || (e = [e]), e),
        );
    })(e, t, n);
}
function h(e, t, n) {
    return (0, r.A.parseAutoModerationSystemMessage)(
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
function E(e, t) {
    if (e instanceof Array) return e.some((e) => E(e, t));
    let n = t(e);
    return null != n
        ? n
        : e.content instanceof Array
          ? E(e.content, t)
          : e.items instanceof Array && e.items.some((e) => E(e, t));
}
function m(e) {
    return E(e, (e) =>
        "spoiler" === e.type ? E(e, (e) => "link" === e.type || "attachmentLink" === e.type || null) : null,
    );
}
