"use strict";
n.d(t, { A: () => Y });
var i = n(435558),
    r = n.n(i),
    a = n(807081),
    s = n(480084),
    l = n(29814),
    o = n(551965);
let d = null;
d = n(937767).A;
let c = ["url", "autolink", "link", "mailto", "tel"];
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = {};
    return (
        null != e.mention && null != d && (i = { mention: !0 === n.shouldStopPropagation ? (0, s.x)(d) : d }),
        (0, o.A)([e, ...t, i])
    );
}
let _ = { enableBuildOverrides: !1, enableEmojiClick: !0 },
    E = r().once(() => u(l.Ay.RULES, [(0, s.A)({ enableBuildOverrides: !0 })])),
    A = r().once(() => r().omit(u(l.Ay.RULES, [(0, s.A)(_)]), "paragraph", "newline"));
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, s.A)({
        ..._,
        emojiTooltipPosition: "bottom",
        shouldCloseDefaultModals: !0,
        shouldStopPropagation: !0,
        ...e,
    });
}
let I = r().once(() =>
        u(l.Ay.CHANNEL_TOPIC_RULES, [h(), { codeBlock: { react: l.Ay.RULES.text.react } }], {
            shouldStopPropagation: !0,
        }),
    ),
    f = r().once(() =>
        u(l.Ay.CHANNEL_TOPIC_RULES, [h({ emojiFocusable: !1 }), { codeBlock: { react: l.Ay.RULES.text.react } }], {
            shouldStopPropagation: !0,
        }),
    ),
    p = r().once(() => u(l.Ay.VOICE_CHANNEL_STATUS_RULES, [(0, s.A)({ ..._, enableEmojiClick: !1 })])),
    T = r().once(() => u(l.Ay.EMBED_TITLE_RULES, [(0, s.A)(_)])),
    m = r().once(() => r().omit(u(l.Ay.EMBED_TITLE_RULES, [(0, s.A)(_)]), c)),
    g = r().once(() => u(l.Ay.INLINE_REPLY_RULES, [(0, s.A)(_)])),
    S = r().once(() => u(l.Ay.GUILD_VERIFICATION_FORM_RULES, [(0, s.A)(_)])),
    N = r().once(() => {
        let e = { ..._, shouldStopPropagation: !0 };
        return u(l.Ay.GUILD_EVENT_RULES, [(0, s.A)(e)], e);
    }),
    C = r().once(() => r().omit(N(), "subtext")),
    O = r().once(() => u(l.Ay.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, s.A)(_)])),
    R = r().once(() =>
        r().omit(
            u(l.Ay.RULES, [(0, s.A)(_)]),
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
    L = { text: l.Ay.RULES.text },
    D = r().once(() => a.aV(E())),
    y = r().once(() => a.aV(I())),
    v = r().once(() => a.aV(f())),
    b = r().once(() => a.aV(p())),
    M = r().once(() => a.aV(T())),
    P = r().once(() => a.aV(m())),
    U = r().once(() => a.aV(g())),
    w = r().once(() => a.aV(S())),
    G = r().once(() => a.aV(N())),
    x = r().once(() => a.aV(O())),
    k = r().once(() => a.aV(A())),
    F = r().once(() => a.X(E())),
    V = r().once(() => a.X(I())),
    B = r().once(() => a.X(T())),
    H = r().once(() => a.X(m())),
    j = r().once(() => a.X(g())),
    W = r().once(() => a.X(O())),
    Y = {
        combineAndInjectMentionRule: u,
        createReactRules: s.A,
        defaultReactRuleOptions: _,
        get defaultRules() {
            return E();
        },
        get guildEventRules() {
            return N();
        },
        get guildEventLocationRules() {
            return C();
        },
        get notifCenterV2MessagePreviewRules() {
            return R();
        },
        lockscreenWidgetMessageRules: L,
        astParserFor: a.X,
        reactParserFor: a.aV,
        parse: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return D()(...t);
        },
        parseTopic: (e, t, n, i) => y()(e, t, { allowLinks: !0, ...n }, i),
        parseTruncatedTopic: (e, t, n, i) => v()(e, t, { allowLinks: !0, ...n }, i),
        parseVoiceChannelStatus: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return b()(...t);
        },
        parseEmbedTitle: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return M()(...t);
        },
        parseEmbedTitleWithoutLinks: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return P()(...t);
        },
        parseInlineReply: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return U()(...t);
        },
        parseGuildVerificationFormRule: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return w()(...t);
        },
        parseGuildEventDescription: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return G()(...t);
        },
        parseAutoModerationSystemMessage: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return x()(...t);
        },
        parseForumPostGuidelines: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return k()(...t);
        },
        parseToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return F()(...t);
        },
        parseTopicToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return V()(...t);
        },
        parseEmbedTitleToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return B()(...t);
        },
        parseEmbedTitleWithoutLinksToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return H()(...t);
        },
        parseInlineReplyToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return j()(...t);
        },
        parseAutoModerationSystemMessageToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return W()(...t);
        },
    };
