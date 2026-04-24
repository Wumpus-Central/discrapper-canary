"use strict";
n.d(t, { A: () => F });
var l = n(735438),
    i = n.n(l),
    s = n(436857),
    a = n(365347),
    r = n(29814),
    o = n(551965);
let c = null;
c = n(937767).A;
let u = ["url", "autolink", "link", "mailto", "tel"];
function d(e, t) {
    let n = {};
    return null != e.mention && null != c && (n = { mention: c }), (0, o.A)([e, ...t, n]);
}
let h = { enableBuildOverrides: !1, enableEmojiClick: !0 },
    m = i().once(() => d(r.A.RULES, [(0, a.A)({ enableBuildOverrides: !0 })])),
    p = i().once(() => i().omit(d(r.A.RULES, [(0, a.A)(h)]), "paragraph", "newline")),
    f = i().once(() =>
        d(r.A.CHANNEL_TOPIC_RULES, [
            (0, a.A)({ ...h, emojiTooltipPosition: "bottom", shouldCloseDefaultModals: !0, shouldStopPropagation: !0 }),
            { codeBlock: { react: r.A.RULES.text.react } },
        ]),
    ),
    g = i().once(() => d(r.A.VOICE_CHANNEL_STATUS_RULES, [(0, a.A)({ ...h, enableEmojiClick: !1 })])),
    _ = i().once(() => d(r.A.EMBED_TITLE_RULES, [(0, a.A)(h)])),
    x = i().once(() => i().omit(d(r.A.EMBED_TITLE_RULES, [(0, a.A)(h)]), u)),
    C = i().once(() => d(r.A.INLINE_REPLY_RULES, [(0, a.A)(h)])),
    A = i().once(() => d(r.A.GUILD_VERIFICATION_FORM_RULES, [(0, a.A)(h)])),
    E = i().once(() => d(r.A.GUILD_EVENT_RULES, [(0, a.A)(h)])),
    I = i().once(() => d(r.A.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, a.A)(h)])),
    v = i().once(() =>
        i().omit(
            d(r.A.RULES, [(0, a.A)(h)]),
            "paragraph",
            "newline",
            "strong",
            "codeBlock",
            "inlineCode",
            "u",
            "list",
            "heading",
            "subtext",
            ...u,
        ),
    ),
    y = { text: r.A.RULES.text },
    b = i().once(() => s.aV(m())),
    S = i().once(() => s.aV(f())),
    N = i().once(() => s.aV(g())),
    j = i().once(() => s.aV(_())),
    T = i().once(() => s.aV(x())),
    w = i().once(() => s.aV(C())),
    R = i().once(() => s.aV(A())),
    L = i().once(() => s.aV(E())),
    k = i().once(() => s.aV(I())),
    M = i().once(() => s.aV(p())),
    O = i().once(() => s.X(m())),
    P = i().once(() => s.X(f())),
    D = i().once(() => s.X(_())),
    U = i().once(() => s.X(x())),
    V = i().once(() => s.X(C())),
    G = i().once(() => s.X(I())),
    F = {
        combineAndInjectMentionRule: d,
        createReactRules: a.A,
        defaultReactRuleOptions: h,
        get defaultRules() {
            return m();
        },
        get guildEventRules() {
            return E();
        },
        get notifCenterV2MessagePreviewRules() {
            return v();
        },
        lockscreenWidgetMessageRules: y,
        astParserFor: s.X,
        reactParserFor: s.aV,
        parse: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return b()(...t);
        },
        parseTopic: (e, t, n, l) => S()(e, t, { allowLinks: !0, ...n }, l),
        parseVoiceChannelStatus: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return N()(...t);
        },
        parseEmbedTitle: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return j()(...t);
        },
        parseEmbedTitleWithoutLinks: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return T()(...t);
        },
        parseInlineReply: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return w()(...t);
        },
        parseGuildVerificationFormRule: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return R()(...t);
        },
        parseGuildEventDescription: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return L()(...t);
        },
        parseAutoModerationSystemMessage: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return k()(...t);
        },
        parseForumPostGuidelines: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return M()(...t);
        },
        parseToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return O()(...t);
        },
        parseTopicToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return P()(...t);
        },
        parseEmbedTitleToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return D()(...t);
        },
        parseEmbedTitleWithoutLinksToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return U()(...t);
        },
        parseInlineReplyToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return V()(...t);
        },
        parseAutoModerationSystemMessageToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return G()(...t);
        },
    };
