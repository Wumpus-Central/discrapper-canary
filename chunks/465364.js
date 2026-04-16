"use strict";
n.d(t, { Ay: () => h, Le: () => _, Tz: () => A, jp: () => E, ko: () => d }), n(380610);
var r = n(833291);
n(100392);
var i = n(46054),
    s = n(659674),
    a = n(728458),
    o = n(652215);
let l = 30,
    u = new Set([o.Auw.IMAGE, o.Auw.GIFV]),
    c = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);
function d(e, t) {
    let n = _({ channelId: e.channel_id, messageId: e.id, renderOptions: t }),
        r = null != e.webhookId;
    return {
        ...n,
        allowLinks: r || n.allowLinks,
        allowEmojiLinks: r,
        mentionChannels: e.mentionChannels,
        soundboardSounds: e.soundboardSounds ?? [],
    };
}
function _(e) {
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
function f(e, t, n) {
    let {
            toAST: r = !1,
            hideSimpleEmbedContent: i = !0,
            formatInline: s = !1,
            postProcessor: a,
            contentMessage: o,
        } = n,
        l = !1,
        u = !1,
        c = (o ?? t).content,
        _ = e(
            c,
            !0,
            d(t, n),
            (e, n, r) => (
                (u = r ?? !1),
                Array.isArray(e) || (e = [e]),
                u && (e = [{ type: "text", content: c, originalMatch: { index: 0, 0: c } }]),
                i && (e = N(e, (o ?? t).embeds)),
                s || (e = I(e, n)),
                (e = p(e)),
                t.embeds.length > 0 && (l = S(e, n)),
                s && (e = C(e)),
                null != a && (e = a(e, n)),
                e
            ),
        );
    return { hasSpoilerEmbeds: l, hasBailedAst: u, content: _ };
}
function p(e) {
    let t = e.some((e) => "link" !== e.type);
    return e.filter((e) => {
        let n = "link" === e.type,
            i = null != (null != e.target ? (0, r.ts)(e.target) : null);
        return !(n && i && !t);
    });
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return f(t.formatInline ? i.A.parseInlineReply : i.A.parse, e, t);
}
function m(e, t) {
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
}
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return m(e, t, n);
}
function g(e, t, n, r) {
    return e(
        t,
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
            highlightWord: n,
            disableAnimatedEmoji: !1,
            channelId: r,
            muted: !1,
        },
        (e) => (Array.isArray(e) || (e = [e]), e),
    );
}
function A(e, t, n) {
    return g(i.A.parseAutoModerationSystemMessage, e, t, n);
}
function I(e, t) {
    return t
        ? T(e)
        : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = T(e[0].content)), e);
}
function T(e) {
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
            if ((("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (t += 1), t > l))
                return !1;
        }),
        t > l ||
            e.forEach((e) => {
                e.jumboable = !0;
            }),
        e
    );
}
function S(e, t) {
    return t ? v(e) : "paragraph" === e[0].type && e[0].content instanceof Array && v(e[0].content);
}
function y(e, t) {
    if (e instanceof Array) return e.some((e) => y(e, t));
    let n = t(e);
    return null != n
        ? n
        : e.content instanceof Array
          ? y(e.content, t)
          : e.items instanceof Array && e.items.some((e) => y(e, t));
}
function v(e) {
    return y(e, (e) =>
        "spoiler" === e.type ? y(e, (e) => "link" === e.type || "attachmentLink" === e.type || null) : null,
    );
}
function N(e, t) {
    if (1 !== e.length || 1 !== t.length) return e;
    let n = e[0],
        r = t[0];
    return ("link" === n.type || "attachmentLink" === n.type) && u.has(r.type) && (0, s.NV)(r) ? [] : e;
}
function C(e) {
    return (
        e.forEach((e) => {
            c.has(e.type) &&
                null != e.content &&
                (Array.isArray(e.content)
                    ? C(e.content)
                    : "string" == typeof e.content
                      ? (e.content = e.content.replace(/\n/g, " "))
                      : a.A.captureMessage(
                            `AST node type:${e.type} with content typeof ${typeof e.content}. Keys ${Object.keys(e)}`,
                        ));
        }),
        e
    );
}
