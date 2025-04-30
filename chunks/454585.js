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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
let _ = null;
function p(e, t) {
    let n = {};
    return null != e.mention && null != _ && (n = { mention: _ }), (0, l.Z)([e, ...t, n]);
}
_ = n(878611).Z;
let h = {
        enableBuildOverrides: !1,
        enableEmojiClick: !0
    },
    m = p(s.Z.RULES, [(0, o.Z)({ enableBuildOverrides: !0 })]),
    g = i().omit(p(s.Z.RULES, [(0, o.Z)(h)]), 'paragraph', 'newline'),
    E = p(s.Z.CHANNEL_TOPIC_RULES, [(0, o.Z)(f(u({}, h), { emojiTooltipPosition: 'bottom' })), { codeBlock: { react: s.Z.RULES.text.react } }]),
    b = p(s.Z.VOICE_CHANNEL_STATUS_RULES, [(0, o.Z)(f(u({}, h), { enableEmojiClick: !1 }))]),
    y = p(s.Z.EMBED_TITLE_RULES, [(0, o.Z)(h)]),
    O = p(s.Z.INLINE_REPLY_RULES, [(0, o.Z)(h)]),
    v = p(s.Z.GUILD_VERIFICATION_FORM_RULES, [(0, o.Z)(h)]),
    I = p(s.Z.GUILD_EVENT_RULES, [(0, o.Z)(h)]),
    S = p(s.Z.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, o.Z)(h)]),
    T = i().omit(p(s.Z.RULES, [(0, o.Z)(h)]), 'paragraph', 'newline', 'strong', 'codeBlock', 'inlineCode', 'u', 'link', 'url', 'autolink', 'list', 'heading', 'subtext'),
    A = { text: s.Z.RULES.text },
    N = {
        combineAndInjectMentionRule: p,
        createReactRules: o.Z,
        defaultReactRuleOptions: h,
        defaultRules: m,
        guildEventRules: I,
        notifCenterV2MessagePreviewRules: T,
        lockscreenWidgetMessageRules: A,
        astParserFor: a._p,
        reactParserFor: a.w4,
        parse: a.w4(m),
        parseTopic: (e, t, n, r) => a.w4(E)(e, t, u({ allowLinks: !0 }, n), r),
        parseVoiceChannelStatus: a.w4(b),
        parseEmbedTitle: a.w4(y),
        parseInlineReply: a.w4(O),
        parseGuildVerificationFormRule: a.w4(v),
        parseGuildEventDescription: a.w4(I),
        parseAutoModerationSystemMessage: a.w4(S),
        parseForumPostGuidelines: a.w4(g),
        parseToAST: a._p(m),
        parseTopicToAST: a._p(E),
        parseEmbedTitleToAST: a._p(y),
        parseInlineReplyToAST: a._p(O),
        parseAutoModerationSystemMessageToAST: a._p(S)
    };
