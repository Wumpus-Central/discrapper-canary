var i = r(47120);
var a = r(392711),
    o = r.n(a),
    s = r(25209),
    l = r(691424),
    u = r(428595),
    c = r(364458);
let d = null;
function f(e, n) {
    let r = {};
    return null != e.mention && null != d && (r = { mention: d }), (0, c.Z)([e, ...n, r]);
}
d = r(878611).Z;
let p = {
        enableBuildOverrides: !1,
        enableEmojiClick: !0
    },
    h = f(u.Z.RULES, [(0, l.Z)({ enableBuildOverrides: !0 })]),
    _ = o().omit(f(u.Z.RULES, [(0, l.Z)(p)]), 'paragraph', 'newline'),
    m = f(u.Z.CHANNEL_TOPIC_RULES, [
        (0, l.Z)({
            ...p,
            emojiTooltipPosition: 'bottom'
        }),
        { codeBlock: { react: u.Z.RULES.text.react } }
    ]),
    g = f(u.Z.VOICE_CHANNEL_STATUS_RULES, [
        (0, l.Z)({
            ...p,
            enableEmojiClick: !1
        })
    ]),
    E = f(u.Z.EMBED_TITLE_RULES, [(0, l.Z)(p)]),
    v = f(u.Z.INLINE_REPLY_RULES, [(0, l.Z)(p)]),
    y = f(u.Z.GUILD_VERIFICATION_FORM_RULES, [(0, l.Z)(p)]),
    b = f(u.Z.GUILD_EVENT_RULES, [(0, l.Z)(p)]),
    I = f(u.Z.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, l.Z)(p)]),
    T = o().omit(f(u.Z.RULES, [(0, l.Z)(p)]), 'paragraph', 'newline', 'strong', 'codeBlock', 'inlineCode', 'u', 'link', 'url', 'autolink', 'list', 'heading', 'subtext'),
    S = { text: u.Z.RULES.text };
n.Z = {
    combineAndInjectMentionRule: f,
    createReactRules: l.Z,
    defaultReactRuleOptions: p,
    defaultRules: h,
    guildEventRules: b,
    notifCenterV2MessagePreviewRules: T,
    lockscreenWidgetMessageRules: S,
    astParserFor: s._p,
    reactParserFor: s.w4,
    parse: s.w4(h),
    parseTopic: s.w4(m),
    parseVoiceChannelStatus: s.w4(g),
    parseEmbedTitle: s.w4(E),
    parseInlineReply: s.w4(v),
    parseGuildVerificationFormRule: s.w4(y),
    parseGuildEventDescription: s.w4(b),
    parseAutoModerationSystemMessage: s.w4(I),
    parseForumPostGuidelines: s.w4(_),
    parseToAST: s._p(h),
    parseTopicToAST: s._p(m),
    parseEmbedTitleToAST: s._p(E),
    parseInlineReplyToAST: s._p(v),
    parseAutoModerationSystemMessageToAST: s._p(I)
};
