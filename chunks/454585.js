n.d(t, { Z: () => P }), n(388685);
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
p = n(878611).Z;
let _ = ["url", "autolink", "link", "mailto", "tel"];
function m(e, t) {
    let n = {};
    return null != e.mention && null != p && (n = { mention: p }), (0, l.Z)([e, ...t, n]);
}
let h = {
        enableBuildOverrides: !1,
        enableEmojiClick: !0,
    },
    g = m(s.Z.RULES, [(0, o.Z)({ enableBuildOverrides: !0 })]),
    E = i().omit(m(s.Z.RULES, [(0, o.Z)(h)]), "paragraph", "newline"),
    b = m(s.Z.CHANNEL_TOPIC_RULES, [
        (0, o.Z)(f(u({}, h), { emojiTooltipPosition: "bottom" })),
        { codeBlock: { react: s.Z.RULES.text.react } },
    ]),
    y = m(s.Z.VOICE_CHANNEL_STATUS_RULES, [(0, o.Z)(f(u({}, h), { enableEmojiClick: !1 }))]),
    O = m(s.Z.EMBED_TITLE_RULES, [(0, o.Z)(h)]),
    v = i().omit(m(s.Z.EMBED_TITLE_RULES, [(0, o.Z)(h)]), _),
    S = m(s.Z.INLINE_REPLY_RULES, [(0, o.Z)(h)]),
    I = m(s.Z.GUILD_VERIFICATION_FORM_RULES, [(0, o.Z)(h)]),
    T = m(s.Z.GUILD_EVENT_RULES, [(0, o.Z)(h)]),
    C = m(s.Z.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, o.Z)(h)]),
    A = i().omit(
        m(s.Z.RULES, [(0, o.Z)(h)]),
        "paragraph",
        "newline",
        "strong",
        "codeBlock",
        "inlineCode",
        "u",
        "list",
        "heading",
        "subtext",
        ..._,
    ),
    N = { text: s.Z.RULES.text },
    P = {
        combineAndInjectMentionRule: m,
        createReactRules: o.Z,
        defaultReactRuleOptions: h,
        defaultRules: g,
        guildEventRules: T,
        notifCenterV2MessagePreviewRules: A,
        lockscreenWidgetMessageRules: N,
        astParserFor: a._p,
        reactParserFor: a.w4,
        parse: a.w4(g),
        parseTopic: (e, t, n, r) => a.w4(b)(e, t, u({ allowLinks: !0 }, n), r),
        parseVoiceChannelStatus: a.w4(y),
        parseEmbedTitle: a.w4(O),
        parseEmbedTitleWithoutLinks: a.w4(v),
        parseInlineReply: a.w4(S),
        parseGuildVerificationFormRule: a.w4(I),
        parseGuildEventDescription: a.w4(T),
        parseAutoModerationSystemMessage: a.w4(C),
        parseForumPostGuidelines: a.w4(E),
        parseToAST: a._p(g),
        parseTopicToAST: a._p(b),
        parseEmbedTitleToAST: a._p(O),
        parseEmbedTitleWithoutLinksToAST: a._p(v),
        parseInlineReplyToAST: a._p(S),
        parseAutoModerationSystemMessageToAST: a._p(C),
    };
