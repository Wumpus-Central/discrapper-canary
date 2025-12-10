n.d(t, { Z: () => N }), n(388685);
var r = n(392711),
    i = n.n(r),
    a = n(25209),
    o = n(691424),
    s = n(428595),
    l = n(364458);
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
let p = null;
function _(e, t) {
    let n = {};
    return null != e.mention && null != p && (n = { mention: p }), (0, l.Z)([e, ...t, n]);
}
p = n(878611).Z;
let m = {
        enableBuildOverrides: !1,
        enableEmojiClick: !0,
    },
    h = _(s.Z.RULES, [(0, o.Z)({ enableBuildOverrides: !0 })]),
    g = i().omit(_(s.Z.RULES, [(0, o.Z)(m)]), "paragraph", "newline"),
    E = _(s.Z.CHANNEL_TOPIC_RULES, [
        (0, o.Z)(f(u({}, m), { emojiTooltipPosition: "bottom" })),
        { codeBlock: { react: s.Z.RULES.text.react } },
    ]),
    b = _(s.Z.VOICE_CHANNEL_STATUS_RULES, [(0, o.Z)(f(u({}, m), { enableEmojiClick: !1 }))]),
    y = _(s.Z.EMBED_TITLE_RULES, [(0, o.Z)(m)]),
    O = i().omit(_(s.Z.EMBED_TITLE_RULES, [(0, o.Z)(m)]), ["url", "autolink", "link"]),
    v = _(s.Z.INLINE_REPLY_RULES, [(0, o.Z)(m)]),
    S = _(s.Z.GUILD_VERIFICATION_FORM_RULES, [(0, o.Z)(m)]),
    I = _(s.Z.GUILD_EVENT_RULES, [(0, o.Z)(m)]),
    T = _(s.Z.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, o.Z)(m)]),
    C = i().omit(
        _(s.Z.RULES, [(0, o.Z)(m)]),
        "paragraph",
        "newline",
        "strong",
        "codeBlock",
        "inlineCode",
        "u",
        "link",
        "url",
        "autolink",
        "list",
        "heading",
        "subtext",
    ),
    A = { text: s.Z.RULES.text },
    N = {
        combineAndInjectMentionRule: _,
        createReactRules: o.Z,
        defaultReactRuleOptions: m,
        defaultRules: h,
        guildEventRules: I,
        notifCenterV2MessagePreviewRules: C,
        lockscreenWidgetMessageRules: A,
        astParserFor: a._p,
        reactParserFor: a.w4,
        parse: a.w4(h),
        parseTopic: (e, t, n, r) => a.w4(E)(e, t, u({ allowLinks: !0 }, n), r),
        parseVoiceChannelStatus: a.w4(b),
        parseEmbedTitle: a.w4(y),
        parseEmbedTitleWithoutLinks: a.w4(O),
        parseInlineReply: a.w4(v),
        parseGuildVerificationFormRule: a.w4(S),
        parseGuildEventDescription: a.w4(I),
        parseAutoModerationSystemMessage: a.w4(T),
        parseForumPostGuidelines: a.w4(g),
        parseToAST: a._p(h),
        parseTopicToAST: a._p(E),
        parseEmbedTitleToAST: a._p(y),
        parseEmbedTitleWithoutLinksToAST: a._p(O),
        parseInlineReplyToAST: a._p(v),
        parseAutoModerationSystemMessageToAST: a._p(T),
    };
