"use strict";
n.d(t, { A: () => F });
var i = n(735438),
    l = n.n(i),
    s = n(436857),
    r = n(999443),
    a = n(542664),
    o = n(551965);
let c = null;
c = n(937767).A;
let u = ["url", "autolink", "link", "mailto", "tel"];
function d(e, t) {
    let n = {};
    return null != e.mention && null != c && (n = { mention: c }), (0, o.A)([e, ...t, n]);
}
let h = { enableBuildOverrides: !1, enableEmojiClick: !0 },
    m = l().once(() => d(a.A.RULES, [(0, r.A)({ enableBuildOverrides: !0 })])),
    p = l().once(() => l().omit(d(a.A.RULES, [(0, r.A)(h)]), "paragraph", "newline")),
    f = l().once(() =>
        d(a.A.CHANNEL_TOPIC_RULES, [
            (0, r.A)({ ...h, emojiTooltipPosition: "bottom", shouldCloseDefaultModals: !0, shouldStopPropagation: !0 }),
            { codeBlock: { react: a.A.RULES.text.react } },
        ]),
    ),
    g = l().once(() => d(a.A.VOICE_CHANNEL_STATUS_RULES, [(0, r.A)({ ...h, enableEmojiClick: !1 })])),
    _ = l().once(() => d(a.A.EMBED_TITLE_RULES, [(0, r.A)(h)])),
    x = l().once(() => l().omit(d(a.A.EMBED_TITLE_RULES, [(0, r.A)(h)]), u)),
    A = l().once(() => d(a.A.INLINE_REPLY_RULES, [(0, r.A)(h)])),
    C = l().once(() => d(a.A.GUILD_VERIFICATION_FORM_RULES, [(0, r.A)(h)])),
    E = l().once(() => d(a.A.GUILD_EVENT_RULES, [(0, r.A)(h)])),
    I = l().once(() => d(a.A.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, r.A)(h)])),
    v = l().once(() =>
        l().omit(
            d(a.A.RULES, [(0, r.A)(h)]),
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
    y = { text: a.A.RULES.text },
    S = l().once(() => s.aV(m())),
    b = l().once(() => s.aV(f())),
    N = l().once(() => s.aV(g())),
    T = l().once(() => s.aV(_())),
    j = l().once(() => s.aV(x())),
    R = l().once(() => s.aV(A())),
    w = l().once(() => s.aV(C())),
    L = l().once(() => s.aV(E())),
    M = l().once(() => s.aV(I())),
    k = l().once(() => s.aV(p())),
    O = l().once(() => s.X(m())),
    P = l().once(() => s.X(f())),
    D = l().once(() => s.X(_())),
    U = l().once(() => s.X(x())),
    V = l().once(() => s.X(A())),
    G = l().once(() => s.X(I())),
    F = {
        combineAndInjectMentionRule: d,
        createReactRules: r.A,
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
            return S()(...t);
        },
        parseTopic: (e, t, n, i) => b()(e, t, { allowLinks: !0, ...n }, i),
        parseVoiceChannelStatus: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return N()(...t);
        },
        parseEmbedTitle: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return T()(...t);
        },
        parseEmbedTitleWithoutLinks: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return j()(...t);
        },
        parseInlineReply: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return R()(...t);
        },
        parseGuildVerificationFormRule: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return w()(...t);
        },
        parseGuildEventDescription: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return L()(...t);
        },
        parseAutoModerationSystemMessage: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return M()(...t);
        },
        parseForumPostGuidelines: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return k()(...t);
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
