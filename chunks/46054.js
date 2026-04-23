"use strict";
n.d(t, { A: () => B });
var r = n(735438),
    i = n.n(r),
    s = n(436857),
    a = n(999443),
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
    f = i().once(() => d(o.A.RULES, [(0, a.A)({ enableBuildOverrides: !0 })])),
    p = i().once(() => i().omit(d(o.A.RULES, [(0, a.A)(_)]), "paragraph", "newline")),
    h = i().once(() =>
        d(o.A.CHANNEL_TOPIC_RULES, [
            (0, a.A)({ ..._, emojiTooltipPosition: "bottom", shouldCloseDefaultModals: !0, shouldStopPropagation: !0 }),
            { codeBlock: { react: o.A.RULES.text.react } },
        ]),
    ),
    E = i().once(() => d(o.A.VOICE_CHANNEL_STATUS_RULES, [(0, a.A)({ ..._, enableEmojiClick: !1 })])),
    m = i().once(() => d(o.A.EMBED_TITLE_RULES, [(0, a.A)(_)])),
    g = i().once(() => i().omit(d(o.A.EMBED_TITLE_RULES, [(0, a.A)(_)]), c)),
    A = i().once(() => d(o.A.INLINE_REPLY_RULES, [(0, a.A)(_)])),
    I = i().once(() => d(o.A.GUILD_VERIFICATION_FORM_RULES, [(0, a.A)(_)])),
    T = i().once(() => d(o.A.GUILD_EVENT_RULES, [(0, a.A)(_)])),
    S = i().once(() => d(o.A.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, a.A)(_)])),
    y = i().once(() =>
        i().omit(
            d(o.A.RULES, [(0, a.A)(_)]),
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
    ),
    N = { text: o.A.RULES.text },
    v = i().once(() => s.aV(f())),
    C = i().once(() => s.aV(h())),
    O = i().once(() => s.aV(E())),
    R = i().once(() => s.aV(m())),
    b = i().once(() => s.aV(g())),
    D = i().once(() => s.aV(A())),
    L = i().once(() => s.aV(I())),
    w = i().once(() => s.aV(T())),
    M = i().once(() => s.aV(S())),
    P = i().once(() => s.aV(p())),
    x = i().once(() => s.X(f())),
    k = i().once(() => s.X(h())),
    U = i().once(() => s.X(m())),
    G = i().once(() => s.X(g())),
    F = i().once(() => s.X(A())),
    V = i().once(() => s.X(S())),
    B = {
        combineAndInjectMentionRule: d,
        createReactRules: a.A,
        defaultReactRuleOptions: _,
        get defaultRules() {
            return f();
        },
        get guildEventRules() {
            return T();
        },
        get notifCenterV2MessagePreviewRules() {
            return y();
        },
        lockscreenWidgetMessageRules: N,
        astParserFor: s.X,
        reactParserFor: s.aV,
        parse: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return v()(...t);
        },
        parseTopic: (e, t, n, r) => C()(e, t, { allowLinks: !0, ...n }, r),
        parseVoiceChannelStatus: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return O()(...t);
        },
        parseEmbedTitle: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return R()(...t);
        },
        parseEmbedTitleWithoutLinks: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return b()(...t);
        },
        parseInlineReply: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return D()(...t);
        },
        parseGuildVerificationFormRule: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return L()(...t);
        },
        parseGuildEventDescription: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return w()(...t);
        },
        parseAutoModerationSystemMessage: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return M()(...t);
        },
        parseForumPostGuidelines: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return P()(...t);
        },
        parseToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return x()(...t);
        },
        parseTopicToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return k()(...t);
        },
        parseEmbedTitleToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return U()(...t);
        },
        parseEmbedTitleWithoutLinksToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return G()(...t);
        },
        parseInlineReplyToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return F()(...t);
        },
        parseAutoModerationSystemMessageToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return V()(...t);
        },
    };
