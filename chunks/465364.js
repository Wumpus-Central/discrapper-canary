"use strict";
n.d(t, { Ay: () => _, Le: () => d, Tz: () => f, jp: () => p, ko: () => u }), n(380610);
var r = n(833291);
n(100392);
var i = n(46054),
    a = n(659674),
    l = n(38405),
    s = n(652215);
let o = new Set([s.Auw.IMAGE, s.Auw.GIFV]),
    c = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);
function u(e, t) {
    let n = d({ channelId: e.channel_id, messageId: e.id, renderOptions: t }),
        r = null != e.webhookId;
    return {
        ...n,
        allowLinks: r || n.allowLinks,
        allowEmojiLinks: r,
        mentionChannels: e.mentionChannels,
        soundboardSounds: e.soundboardSounds ?? [],
    };
}
function d(e) {
    let { channelId: t, messageId: n, renderOptions: r } = e;
    return {
        channelId: t,
        messageId: n,
        allowLinks: !!r.allowLinks,
        allowDevLinks: !!r.allowDevLinks,
        allowTimeMentionInput: !!r.allowTimeMentionInput,
        formatInline: !!r.formatInline,
        noStyleAndInteraction: !!r.noStyleAndInteraction,
        allowHeading: !!r.allowHeading,
        allowList: !!r.allowList,
        previewLinkTarget: !!r.previewLinkTarget,
        disableAnimatedEmoji: !!r.disableAnimatedEmoji,
        allowEmojiLinks: !1,
        disableAutoBlockNewlines: !0,
        mentionChannels: [],
        soundboardSounds: [],
        muted: !1,
        unknownUserMentionPlaceholder: !0,
        viewingChannelId: r.viewingChannelId,
        forceWhite: !!r.forceWhite,
        textColor: r.textColor,
    };
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (function (e, t, n) {
        let {
                toAST: i = !1,
                hideSimpleEmbedContent: s = !0,
                formatInline: d = !1,
                postProcessor: _,
                contentMessage: p,
            } = n,
            f = !1,
            m = !1,
            b = (p ?? t).content,
            A = e(b, !0, u(t, n), (e, n, i) => {
                var u, A, E;
                let v;
                return (
                    (m = i ?? !1),
                    Array.isArray(e) || (e = [e]),
                    m && (e = [{ type: "text", content: b, originalMatch: { index: 0, 0: b } }]),
                    s &&
                        (e = (function (e, t) {
                            if (1 !== e.length || 1 !== t.length) return e;
                            let n = e[0],
                                r = t[0];
                            return ("link" === n.type || "attachmentLink" === n.type) && o.has(r.type) && (0, a.NV)(r)
                                ? []
                                : e;
                        })(e, (p ?? t).embeds)),
                    d ||
                        ((u = e),
                        (e = n
                            ? h(u)
                            : ("paragraph" === u[0].type &&
                                  u[0].content instanceof Array &&
                                  (u[0].content = h(u[0].content)),
                              u))),
                    (v = (A = e).some((e) => "link" !== e.type)),
                    (e = A.filter((e) => {
                        let t = "link" === e.type,
                            n = null != e.target ? (0, r.ts)(e.target) : null;
                        return !(t && null != n && !v);
                    })),
                    t.embeds.length > 0 &&
                        ((E = e),
                        (f = n ? g(E) : "paragraph" === E[0].type && E[0].content instanceof Array && g(E[0].content))),
                    d &&
                        (e = (function e(t) {
                            return (
                                t.forEach((t) => {
                                    c.has(t.type) &&
                                        null != t.content &&
                                        (Array.isArray(t.content)
                                            ? e(t.content)
                                            : "string" == typeof t.content
                                              ? (t.content = t.content.replace(/\n/g, " "))
                                              : l.A.captureMessage(
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
        return { hasSpoilerEmbeds: f, hasBailedAst: m, content: A };
    })(t.formatInline ? i.A.parseInlineReply : i.A.parse, e, t);
}
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return (function (e, t) {
        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        let { content: n, guildId: r, channelId: i } = t;
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
                guildId: r,
                channelId: i,
                muted: !1,
                disablePressableChannelMention: !0,
            },
            (e) => (Array.isArray(e) || (e = [e]), e),
        );
    })(e, t, n);
}
function f(e, t, n) {
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
function h(e) {
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
function m(e, t) {
    if (e instanceof Array) return e.some((e) => m(e, t));
    let n = t(e);
    return null != n
        ? n
        : e.content instanceof Array
          ? m(e.content, t)
          : e.items instanceof Array && e.items.some((e) => m(e, t));
}
function g(e) {
    return m(e, (e) =>
        "spoiler" === e.type ? m(e, (e) => "link" === e.type || "attachmentLink" === e.type || null) : null,
    );
}
