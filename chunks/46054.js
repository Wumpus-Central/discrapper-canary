"use strict";
n.d(t, { A: () => B });
var i = n(735438),
    r = n.n(i),
    s = n(807081),
    a = n(480084),
    o = n(29814),
    l = n(551965);
let u = null;
u = n(937767).A;
let c = ["url", "autolink", "link", "mailto", "tel"];
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = {};
    return (
        null != e.mention && null != u && (i = { mention: !0 === n.shouldStopPropagation ? (0, a.x)(u) : u }),
        (0, l.A)([e, ...t, i])
    );
}
let _ = { enableBuildOverrides: !1, enableEmojiClick: !0 },
    h = r().once(() => d(o.A.RULES, [(0, a.A)({ enableBuildOverrides: !0 })])),
    f = r().once(() => r().omit(d(o.A.RULES, [(0, a.A)(_)]), "paragraph", "newline")),
    p = r().once(() =>
        d(
            o.A.CHANNEL_TOPIC_RULES,
            [
                (0, a.A)({
                    ..._,
                    emojiTooltipPosition: "bottom",
                    shouldCloseDefaultModals: !0,
                    shouldStopPropagation: !0,
                }),
                { codeBlock: { react: o.A.RULES.text.react } },
            ],
            { shouldStopPropagation: !0 },
        ),
    ),
    E = r().once(() => d(o.A.VOICE_CHANNEL_STATUS_RULES, [(0, a.A)({ ..._, enableEmojiClick: !1 })])),
    m = r().once(() => d(o.A.EMBED_TITLE_RULES, [(0, a.A)(_)])),
    g = r().once(() => r().omit(d(o.A.EMBED_TITLE_RULES, [(0, a.A)(_)]), c)),
    A = r().once(() => d(o.A.INLINE_REPLY_RULES, [(0, a.A)(_)])),
    I = r().once(() => d(o.A.GUILD_VERIFICATION_FORM_RULES, [(0, a.A)(_)])),
    T = r().once(() => {
        let e = { ..._, shouldStopPropagation: !0 };
        return d(o.A.GUILD_EVENT_RULES, [(0, a.A)(e)], e);
    }),
    S = r().once(() => d(o.A.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, a.A)(_)])),
    y = r().once(() =>
        r().omit(
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
    v = r().once(() => s.aV(h())),
    C = r().once(() => s.aV(p())),
    R = r().once(() => s.aV(E())),
    O = r().once(() => s.aV(m())),
    b = r().once(() => s.aV(g())),
    D = r().once(() => s.aV(A())),
    L = r().once(() => s.aV(I())),
    w = r().once(() => s.aV(T())),
    M = r().once(() => s.aV(S())),
    P = r().once(() => s.aV(f())),
    x = r().once(() => s.X(h())),
    k = r().once(() => s.X(p())),
    U = r().once(() => s.X(m())),
    G = r().once(() => s.X(g())),
    F = r().once(() => s.X(A())),
    V = r().once(() => s.X(S())),
    B = {
        combineAndInjectMentionRule: d,
        createReactRules: a.A,
        defaultReactRuleOptions: _,
        get defaultRules() {
            return h();
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
        parseTopic: (e, t, n, i) => C()(e, t, { allowLinks: !0, ...n }, i),
        parseVoiceChannelStatus: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return R()(...t);
        },
        parseEmbedTitle: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return O()(...t);
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
