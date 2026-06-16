"use strict";
n.d(t, { A: () => V });
var l = n(735438),
    i = n.n(l),
    r = n(807081),
    s = n(480084),
    a = n(29814),
    o = n(551965);
let u = null;
u = n(937767).A;
let c = ["url", "autolink", "link", "mailto", "tel"];
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        l = {};
    return (
        null != e.mention && null != u && (l = { mention: !0 === n.shouldStopPropagation ? (0, s.x)(u) : u }),
        (0, o.A)([e, ...t, l])
    );
}
let m = { enableBuildOverrides: !1, enableEmojiClick: !0 },
    h = i().once(() => d(a.A.RULES, [(0, s.A)({ enableBuildOverrides: !0 })])),
    p = i().once(() => i().omit(d(a.A.RULES, [(0, s.A)(m)]), "paragraph", "newline")),
    f = i().once(() =>
        d(
            a.A.CHANNEL_TOPIC_RULES,
            [
                (0, s.A)({
                    ...m,
                    emojiTooltipPosition: "bottom",
                    shouldCloseDefaultModals: !0,
                    shouldStopPropagation: !0,
                }),
                { codeBlock: { react: a.A.RULES.text.react } },
            ],
            { shouldStopPropagation: !0 },
        ),
    ),
    g = i().once(() => d(a.A.VOICE_CHANNEL_STATUS_RULES, [(0, s.A)({ ...m, enableEmojiClick: !1 })])),
    E = i().once(() => d(a.A.EMBED_TITLE_RULES, [(0, s.A)(m)])),
    A = i().once(() => i().omit(d(a.A.EMBED_TITLE_RULES, [(0, s.A)(m)]), c)),
    C = i().once(() => d(a.A.INLINE_REPLY_RULES, [(0, s.A)(m)])),
    x = i().once(() => d(a.A.GUILD_VERIFICATION_FORM_RULES, [(0, s.A)(m)])),
    I = i().once(() => {
        let e = { ...m, shouldStopPropagation: !0 };
        return d(a.A.GUILD_EVENT_RULES, [(0, s.A)(e)], e);
    }),
    _ = i().once(() => d(a.A.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, s.A)(m)])),
    S = i().once(() =>
        i().omit(
            d(a.A.RULES, [(0, s.A)(m)]),
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
    y = { text: a.A.RULES.text },
    v = i().once(() => r.aV(h())),
    T = i().once(() => r.aV(f())),
    N = i().once(() => r.aV(g())),
    j = i().once(() => r.aV(E())),
    b = i().once(() => r.aV(A())),
    R = i().once(() => r.aV(C())),
    P = i().once(() => r.aV(x())),
    L = i().once(() => r.aV(I())),
    M = i().once(() => r.aV(_())),
    O = i().once(() => r.aV(p())),
    w = i().once(() => r.X(h())),
    k = i().once(() => r.X(f())),
    D = i().once(() => r.X(E())),
    U = i().once(() => r.X(A())),
    G = i().once(() => r.X(C())),
    F = i().once(() => r.X(_())),
    V = {
        combineAndInjectMentionRule: d,
        createReactRules: s.A,
        defaultReactRuleOptions: m,
        get defaultRules() {
            return h();
        },
        get guildEventRules() {
            return I();
        },
        get notifCenterV2MessagePreviewRules() {
            return S();
        },
        lockscreenWidgetMessageRules: y,
        astParserFor: r.X,
        reactParserFor: r.aV,
        parse: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return v()(...t);
        },
        parseTopic: (e, t, n, l) => T()(e, t, { allowLinks: !0, ...n }, l),
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
            return b()(...t);
        },
        parseInlineReply: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return R()(...t);
        },
        parseGuildVerificationFormRule: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return P()(...t);
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
            return O()(...t);
        },
        parseToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return w()(...t);
        },
        parseTopicToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return k()(...t);
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
            return G()(...t);
        },
        parseAutoModerationSystemMessageToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return F()(...t);
        },
    };
