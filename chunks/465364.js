n.d(t, {
    Ay: () => y,
    Le: () => m,
    Tz: () => A,
    jp: () => O,
    ko: () => h,
}),
    n(896048),
    n(733351),
    n(747238),
    n(812715),
    n(380610);
var r = n(833291);
n(100392);
var i = n(46054),
    a = n(659674),
    o = n(728458),
    s = n(652215);

function l(e, t, n) {
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

function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}

function u(e, t) {
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

function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = 30,
    p = new Set([s.Auw.IMAGE, s.Auw.GIFV]),
    _ = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

function h(e, t) {
    var n;
    let r = m({
            channelId: e.channel_id,
            messageId: e.id,
            renderOptions: t,
        }),
        i = null != e.webhookId;
    return d(c({}, r), {
        allowLinks: i || r.allowLinks,
        allowEmojiLinks: i,
        mentionChannels: e.mentionChannels,
        soundboardSounds: null != (n = e.soundboardSounds) ? n : [],
    });
}

function m(e) {
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

function g(e, t, n) {
    let {
            toAST: r = !1,
            hideSimpleEmbedContent: i = !0,
            formatInline: a = !1,
            postProcessor: o,
            contentMessage: s,
        } = n,
        l = !1,
        c = !1,
        u = (null != s ? s : t).content,
        d = e(
            u,
            !0,
            h(t, n),
            (e, n, r) => (
                (c = null != r && r),
                Array.isArray(e) || (e = [e]),
                c &&
                    (e = [
                        {
                            type: "text",
                            content: u,
                            originalMatch: {
                                index: 0,
                                0: u,
                            },
                        },
                    ]),
                i && (e = w(e, (null != s ? s : t).embeds)),
                a || (e = I(e, n)),
                (e = E(e)),
                t.embeds.length > 0 && (l = T(e, n)),
                a && (e = R(e)),
                null != o && (e = o(e, n)),
                e
            ),
        );
    return {
        hasSpoilerEmbeds: l,
        hasBailedAst: c,
        content: d,
    };
}

function E(e) {
    let t = e.some((e) => "link" !== e.type);
    return e.filter((e) => {
        let n = "link" === e.type,
            i = null != (null != e.target ? (0, r.ts)(e.target) : null);
        return !(n && i && !t);
    });
}

function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return g(t.formatInline ? i.A.parseInlineReply : i.A.parse, e, t);
}

function b(e, t) {
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

function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return b(e, t, n);
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

function A(e, t, n) {
    return v(i.A.parseAutoModerationSystemMessage, e, t, n);
}

function I(e, t) {
    return t
        ? S(e)
        : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = S(e[0].content)), e);
}

function S(e) {
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
            if ((("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (t += 1), t > f))
                return !1;
        }),
        t > f ||
            e.forEach((e) => {
                e.jumboable = !0;
            }),
        e
    );
}

function T(e, t) {
    return t ? N(e) : "paragraph" === e[0].type && e[0].content instanceof Array && N(e[0].content);
}

function C(e, t) {
    if (e instanceof Array) return e.some((e) => C(e, t));
    let n = t(e);
    return null != n
        ? n
        : e.content instanceof Array
          ? C(e.content, t)
          : e.items instanceof Array && e.items.some((e) => C(e, t));
}

function N(e) {
    return C(e, (e) =>
        "spoiler" === e.type ? C(e, (e) => "link" === e.type || "attachmentLink" === e.type || null) : null,
    );
}

function w(e, t) {
    if (1 !== e.length || 1 !== t.length) return e;
    let n = e[0],
        r = t[0];
    return ("link" === n.type || "attachmentLink" === n.type) && p.has(r.type) && (0, a.NV)(r) ? [] : e;
}

function R(e) {
    return (
        e.forEach((e) => {
            _.has(e.type) &&
                null != e.content &&
                (Array.isArray(e.content)
                    ? R(e.content)
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
