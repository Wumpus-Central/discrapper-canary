"use strict";
n.d(t, { A: () => C });
var r = n(735438),
    i = n.n(r),
    a = n(436857),
    s = n(999443),
    o = n(542664),
    l = n(551965);
let u = null;
u = n(937767).A;
let c = ["url", "autolink", "link", "mailto", "tel"];
function d(e, t) {
    let n = {};
    return null != e.mention && null != u && (n = { mention: u }), (0, l.A)([e, ...t, n]);
}
let _ = { enableBuildOverrides: !1, enableEmojiClick: !0 },
    f = d(o.A.RULES, [(0, s.A)({ enableBuildOverrides: !0 })]),
    p = i().omit(d(o.A.RULES, [(0, s.A)(_)]), "paragraph", "newline"),
    h = d(o.A.CHANNEL_TOPIC_RULES, [
        (0, s.A)({ ..._, emojiTooltipPosition: "bottom" }),
        { codeBlock: { react: o.A.RULES.text.react } },
    ]),
    m = d(o.A.VOICE_CHANNEL_STATUS_RULES, [(0, s.A)({ ..._, enableEmojiClick: !1 })]),
    g = d(o.A.EMBED_TITLE_RULES, [(0, s.A)(_)]),
    E = i().omit(d(o.A.EMBED_TITLE_RULES, [(0, s.A)(_)]), c),
    A = d(o.A.INLINE_REPLY_RULES, [(0, s.A)(_)]),
    I = d(o.A.GUILD_VERIFICATION_FORM_RULES, [(0, s.A)(_)]),
    T = d(o.A.GUILD_EVENT_RULES, [(0, s.A)(_)]),
    y = d(o.A.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, s.A)(_)]),
    S = i().omit(
        d(o.A.RULES, [(0, s.A)(_)]),
        "paragraph",
        "newline",
        "strong",
        "codeBlock",
        "inlineCode",
        "u",
        "list",
        "heading",
        "subtext",
        ...c,
    ),
    v = { text: o.A.RULES.text },
    C = {
        combineAndInjectMentionRule: d,
        createReactRules: s.A,
        defaultReactRuleOptions: _,
        defaultRules: f,
        guildEventRules: T,
        notifCenterV2MessagePreviewRules: S,
        lockscreenWidgetMessageRules: v,
        astParserFor: a.X,
        reactParserFor: a.aV,
        parse: a.aV(f),
        parseTopic: (e, t, n, r) => a.aV(h)(e, t, { allowLinks: !0, ...n }, r),
        parseVoiceChannelStatus: a.aV(m),
        parseEmbedTitle: a.aV(g),
        parseEmbedTitleWithoutLinks: a.aV(E),
        parseInlineReply: a.aV(A),
        parseGuildVerificationFormRule: a.aV(I),
        parseGuildEventDescription: a.aV(T),
        parseAutoModerationSystemMessage: a.aV(y),
        parseForumPostGuidelines: a.aV(p),
        parseToAST: a.X(f),
        parseTopicToAST: a.X(h),
        parseEmbedTitleToAST: a.X(g),
        parseEmbedTitleWithoutLinksToAST: a.X(E),
        parseInlineReplyToAST: a.X(A),
        parseAutoModerationSystemMessageToAST: a.X(y),
    };
