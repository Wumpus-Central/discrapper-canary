n.d(t, {
    Ay: () => y,
    Le: () => g,
    Tz: () => S,
    jp: () => A,
    ko: () => m,
}),
    n(896048),
    n(733351),
    n(747238),
    n(812715);
var r = n(436857);
n(380610);
var i = n(833291);
n(100392);
var a = n(46054),
    s = n(659674),
    o = n(728458),
    l = n(652215);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = 30,
    _ = new Set([l.Auw.IMAGE, l.Auw.GIFV]),
    h = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);
function m(e, t) {
    var n;
    let r = g({
            channelId: e.channel_id,
            messageId: e.id,
            renderOptions: t,
        }),
        i = null != e.webhookId;
    return f(u({}, r), {
        allowLinks: i || r.allowLinks,
        allowEmojiLinks: i,
        mentionChannels: e.mentionChannels,
        soundboardSounds: null != (n = e.soundboardSounds) ? n : [],
    });
}
function g(e) {
    let { channelId: t, messageId: n, renderOptions: r } = e;
    return {
        channelId: t,
        messageId: n,
        allowLinks: !!r.allowLinks,
        allowDevLinks: !!r.allowDevLinks,
        allowGameMentions: !!r.allowGameMentions,
        allowTimeMentionInput: !!r.allowTimeMentionInput,
        formatInline: !!r.formatInline,
        noStyleAndInteraction: !!r.noStyleAndInteraction,
        allowHeading: !!r.allowHeading,
        allowList: !!r.allowList,
        previewLinkTarget: !!r.previewLinkTarget,
        disableAnimatedEmoji: !!r.disableAnimatedEmoji,
        isInteracting: !!r.isInteracting,
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
function E(e, t, n) {
    let {
            toAST: i = !1,
            hideSimpleEmbedContent: a = !0,
            formatInline: s = !1,
            postProcessor: o,
            contentMessage: l,
        } = n,
        c = !1,
        u = !1,
        d = (null != l ? l : t).content,
        f = e(
            d,
            !0,
            m(t, n),
            (e, n) => (
                Array.isArray(e) || (e = [e]),
                e.length >= r.t9 - 10 &&
                    ((u = !0),
                    (e = [
                        {
                            type: "text",
                            content: d,
                            originalMatch: {
                                index: 0,
                                0: d,
                            },
                        },
                    ])),
                a && (e = w(e, (null != l ? l : t).embeds)),
                s || (e = I(e, n)),
                (e = b(e)),
                t.embeds.length > 0 && (c = C(e, n)),
                s && (e = P(e)),
                null != o && (e = o(e, n)),
                e
            ),
        );
    return {
        hasSpoilerEmbeds: c,
        content: f,
        hasBailedAst: u,
    };
}
function b(e) {
    let t = e.some((e) => "link" !== e.type);
    return e.filter((e) => {
        let n = "link" === e.type,
            r = null != (null != e.target ? (0, i.ts)(e.target) : null);
        return !(n && r && !t);
    });
}
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return E(t.formatInline ? a.A.parseInlineReply : a.A.parse, e, t);
}
function O(e, t) {
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
            isInteracting: !1,
            formatInline: !0,
            noStyleAndInteraction: !1,
            allowHeading: !1,
            allowList: !1,
            allowGameMentions: !1,
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
function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return O(e, t, n);
}
function v(e, t, n, r) {
    return e(
        t,
        !0,
        {
            allowLinks: !1,
            allowDevLinks: !1,
            allowEmojiLinks: !1,
            mentionChannels: [],
            soundboardSounds: [],
            isInteracting: !1,
            formatInline: !1,
            noStyleAndInteraction: !1,
            allowHeading: !1,
            allowList: !1,
            allowGameMentions: !1,
            disableAutoBlockNewlines: !0,
            highlightWord: n,
            disableAnimatedEmoji: !1,
            channelId: r,
            muted: !1,
        },
        (e) => (Array.isArray(e) || (e = [e]), e),
    );
}
function S(e, t, n) {
    return v(a.A.parseAutoModerationSystemMessage, e, t, n);
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
            if ((("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (t += 1), t > p))
                return !1;
        }),
        t > p ||
            e.forEach((e) => {
                e.jumboable = !0;
            }),
        e
    );
}
function C(e, t) {
    return t ? R(e) : "paragraph" === e[0].type && e[0].content instanceof Array && R(e[0].content);
}
function N(e, t) {
    if (e instanceof Array) return e.some((e) => N(e, t));
    let n = t(e);
    return null != n
        ? n
        : e.content instanceof Array
          ? N(e.content, t)
          : e.items instanceof Array && e.items.some((e) => N(e, t));
}
function R(e) {
    return N(e, (e) =>
        "spoiler" === e.type ? N(e, (e) => "link" === e.type || "attachmentLink" === e.type || null) : null,
    );
}
function w(e, t) {
    if (1 !== e.length || 1 !== t.length) return e;
    let n = e[0],
        r = t[0];
    return ("link" === n.type || "attachmentLink" === n.type) && _.has(r.type) && (0, s.NV)(r) ? [] : e;
}
function P(e) {
    return (
        e.forEach((e) => {
            h.has(e.type) &&
                null != e.content &&
                (Array.isArray(e.content)
                    ? P(e.content)
                    : "string" == typeof e.content
                      ? (e.content = e.content.replace(/\n/g, " "))
                      : o.A.captureMessage(
                            "AST node type:"
                                .concat(e.type, " with content typeof ")
                                .concat(typeof e.content, ". Keys ")
                                .concat(Object.keys(e)),
                        ));
        }),
        e
    );
}
