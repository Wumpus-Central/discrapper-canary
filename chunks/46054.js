"use strict";
n.d(t, { A: () => K });
var l = n(435558),
    i = n.n(l),
    s = n(807081),
    r = n(480084),
    a = n(29814),
    o = n(551965);
let u = null;
u = n(937767).A;
let c = ["url", "autolink", "link", "mailto", "tel"];
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        l = {};
    return (
        null != e.mention && null != u && (l = { mention: !0 === n.shouldStopPropagation ? (0, r.x)(u) : u }),
        (0, o.A)([e, ...t, l])
    );
}
let h = { enableBuildOverrides: !1, enableEmojiClick: !0 },
    m = i().once(() => d(a.Ay.RULES, [(0, r.A)({ enableBuildOverrides: !0 })])),
    f = i().once(() => i().omit(d(a.Ay.RULES, [(0, r.A)(h)]), "paragraph", "newline"));
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, r.A)({
        ...h,
        emojiTooltipPosition: "bottom",
        shouldCloseDefaultModals: !0,
        shouldStopPropagation: !0,
        ...e,
    });
}
let g = i().once(() =>
        d(a.Ay.CHANNEL_TOPIC_RULES, [p(), { codeBlock: { react: a.Ay.RULES.text.react } }], {
            shouldStopPropagation: !0,
        }),
    ),
    x = i().once(() =>
        d(a.Ay.CHANNEL_TOPIC_RULES, [p({ emojiFocusable: !1 }), { codeBlock: { react: a.Ay.RULES.text.react } }], {
            shouldStopPropagation: !0,
        }),
    ),
    A = i().once(() => d(a.Ay.VOICE_CHANNEL_STATUS_RULES, [(0, r.A)({ ...h, enableEmojiClick: !1 })])),
    C = i().once(() => d(a.Ay.EMBED_TITLE_RULES, [(0, r.A)(h)])),
    E = i().once(() => i().omit(d(a.Ay.EMBED_TITLE_RULES, [(0, r.A)(h)]), c)),
    I = i().once(() => d(a.Ay.INLINE_REPLY_RULES, [(0, r.A)(h)])),
    y = i().once(() => d(a.Ay.GUILD_VERIFICATION_FORM_RULES, [(0, r.A)(h)])),
    v = i().once(() => {
        let e = { ...h, shouldStopPropagation: !0 };
        return d(a.Ay.GUILD_EVENT_RULES, [(0, r.A)(e)], e);
    }),
    S = i().once(() => i().omit(v(), "subtext")),
    N = i().once(() => d(a.Ay.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, r.A)(h)])),
    _ = i().once(() =>
        i().omit(
            d(a.Ay.RULES, [(0, r.A)(h)]),
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
    T = { text: a.Ay.RULES.text },
    j = i().once(() => s.aV(m())),
    b = i().once(() => s.aV(g())),
    R = i().once(() => s.aV(x())),
    O = i().once(() => s.aV(A())),
    M = i().once(() => s.aV(C())),
    L = i().once(() => s.aV(E())),
    w = i().once(() => s.aV(I())),
    k = i().once(() => s.aV(y())),
    P = i().once(() => s.aV(v())),
    D = i().once(() => s.aV(N())),
    U = i().once(() => s.aV(f())),
    G = i().once(() => s.X(m())),
    V = i().once(() => s.X(g())),
    F = i().once(() => s.X(C())),
    H = i().once(() => s.X(E())),
    B = i().once(() => s.X(I())),
    W = i().once(() => s.X(N())),
    K = {
        combineAndInjectMentionRule: d,
        createReactRules: r.A,
        defaultReactRuleOptions: h,
        get defaultRules() {
            return m();
        },
        get guildEventRules() {
            return v();
        },
        get guildEventLocationRules() {
            return S();
        },
        get notifCenterV2MessagePreviewRules() {
            return _();
        },
        lockscreenWidgetMessageRules: T,
        astParserFor: s.X,
        reactParserFor: s.aV,
        parse: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return j()(...t);
        },
        parseTopic: (e, t, n, l) => b()(e, t, { allowLinks: !0, ...n }, l),
        parseTruncatedTopic: (e, t, n, l) => R()(e, t, { allowLinks: !0, ...n }, l),
        parseVoiceChannelStatus: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return O()(...t);
        },
        parseEmbedTitle: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return M()(...t);
        },
        parseEmbedTitleWithoutLinks: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return L()(...t);
        },
        parseInlineReply: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return w()(...t);
        },
        parseGuildVerificationFormRule: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return k()(...t);
        },
        parseGuildEventDescription: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return P()(...t);
        },
        parseAutoModerationSystemMessage: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return D()(...t);
        },
        parseForumPostGuidelines: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return U()(...t);
        },
        parseToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return G()(...t);
        },
        parseTopicToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return V()(...t);
        },
        parseEmbedTitleToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return F()(...t);
        },
        parseEmbedTitleWithoutLinksToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return H()(...t);
        },
        parseInlineReplyToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return B()(...t);
        },
        parseAutoModerationSystemMessageToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return W()(...t);
        },
    };
