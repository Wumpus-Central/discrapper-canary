"use strict";
n.d(t, { A: () => B });
var i = n(735438),
    r = n.n(i),
    s = n(436857),
    a = n(365347),
    o = n(29814),
    l = n(551965);
let d = null;
d = n(937767).A;
let _ = ["url", "autolink", "link", "mailto", "tel"];
function u(e, t) {
    let n = {};
    return null != e.mention && null != d && (n = { mention: d }), (0, l.A)([e, ...t, n]);
}
let c = { enableBuildOverrides: !1, enableEmojiClick: !0 },
    E = r().once(() => u(o.A.RULES, [(0, a.A)({ enableBuildOverrides: !0 })])),
    h = r().once(() => r().omit(u(o.A.RULES, [(0, a.A)(c)]), "paragraph", "newline")),
    m = r().once(() =>
        u(o.A.CHANNEL_TOPIC_RULES, [
            (0, a.A)({ ...c, emojiTooltipPosition: "bottom", shouldCloseDefaultModals: !0, shouldStopPropagation: !0 }),
            { codeBlock: { react: o.A.RULES.text.react } },
        ]),
    ),
    f = r().once(() => u(o.A.VOICE_CHANNEL_STATUS_RULES, [(0, a.A)({ ...c, enableEmojiClick: !1 })])),
    g = r().once(() => u(o.A.EMBED_TITLE_RULES, [(0, a.A)(c)])),
    p = r().once(() => r().omit(u(o.A.EMBED_TITLE_RULES, [(0, a.A)(c)]), _)),
    A = r().once(() => u(o.A.INLINE_REPLY_RULES, [(0, a.A)(c)])),
    I = r().once(() => u(o.A.GUILD_VERIFICATION_FORM_RULES, [(0, a.A)(c)])),
    T = r().once(() => u(o.A.GUILD_EVENT_RULES, [(0, a.A)(c)])),
    S = r().once(() => u(o.A.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, a.A)(c)])),
    N = r().once(() =>
        r().omit(
            u(o.A.RULES, [(0, a.A)(c)]),
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
    ),
    C = { text: o.A.RULES.text },
    R = r().once(() => s.aV(E())),
    O = r().once(() => s.aV(m())),
    y = r().once(() => s.aV(f())),
    v = r().once(() => s.aV(g())),
    D = r().once(() => s.aV(p())),
    L = r().once(() => s.aV(A())),
    b = r().once(() => s.aV(I())),
    w = r().once(() => s.aV(T())),
    P = r().once(() => s.aV(S())),
    k = r().once(() => s.aV(h())),
    M = r().once(() => s.X(E())),
    U = r().once(() => s.X(m())),
    x = r().once(() => s.X(g())),
    G = r().once(() => s.X(p())),
    V = r().once(() => s.X(A())),
    F = r().once(() => s.X(S())),
    B = {
        combineAndInjectMentionRule: u,
        createReactRules: a.A,
        defaultReactRuleOptions: c,
        get defaultRules() {
            return E();
        },
        get guildEventRules() {
            return T();
        },
        get notifCenterV2MessagePreviewRules() {
            return N();
        },
        lockscreenWidgetMessageRules: C,
        astParserFor: s.X,
        reactParserFor: s.aV,
        parse: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return R()(...t);
        },
        parseTopic: (e, t, n, i) => O()(e, t, { allowLinks: !0, ...n }, i),
        parseVoiceChannelStatus: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return y()(...t);
        },
        parseEmbedTitle: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return v()(...t);
        },
        parseEmbedTitleWithoutLinks: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return D()(...t);
        },
        parseInlineReply: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return L()(...t);
        },
        parseGuildVerificationFormRule: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return b()(...t);
        },
        parseGuildEventDescription: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return w()(...t);
        },
        parseAutoModerationSystemMessage: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return P()(...t);
        },
        parseForumPostGuidelines: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return k()(...t);
        },
        parseToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return M()(...t);
        },
        parseTopicToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return U()(...t);
        },
        parseEmbedTitleToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return x()(...t);
        },
        parseEmbedTitleWithoutLinksToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return G()(...t);
        },
        parseInlineReplyToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return V()(...t);
        },
        parseAutoModerationSystemMessageToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return F()(...t);
        },
    };
