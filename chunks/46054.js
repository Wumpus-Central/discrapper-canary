"use strict";
n.d(t, { A: () => B });
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
    A = r().once(() => r().omit(u(l.Ay.RULES, [(0, s.A)(_)]), "paragraph", "newline")),
    h = r().once(() =>
        u(
            l.Ay.CHANNEL_TOPIC_RULES,
            [
                (0, s.A)({
                    ..._,
                    emojiTooltipPosition: "bottom",
                    shouldCloseDefaultModals: !0,
                    shouldStopPropagation: !0,
                }),
                { codeBlock: { react: l.Ay.RULES.text.react } },
            ],
            { shouldStopPropagation: !0 },
        ),
    ),
    I = r().once(() => u(l.Ay.VOICE_CHANNEL_STATUS_RULES, [(0, s.A)({ ..._, enableEmojiClick: !1 })])),
    f = r().once(() => u(l.Ay.EMBED_TITLE_RULES, [(0, s.A)(_)])),
    p = r().once(() => r().omit(u(l.Ay.EMBED_TITLE_RULES, [(0, s.A)(_)]), c)),
    T = r().once(() => u(l.Ay.INLINE_REPLY_RULES, [(0, s.A)(_)])),
    m = r().once(() => u(l.Ay.GUILD_VERIFICATION_FORM_RULES, [(0, s.A)(_)])),
    g = r().once(() => {
        let e = { ..._, shouldStopPropagation: !0 };
        return u(l.Ay.GUILD_EVENT_RULES, [(0, s.A)(e)], e);
    }),
    S = r().once(() => u(l.Ay.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, s.A)(_)])),
    N = r().once(() =>
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
    C = { text: l.Ay.RULES.text },
    R = r().once(() => a.aV(E())),
    O = r().once(() => a.aV(h())),
    L = r().once(() => a.aV(I())),
    D = r().once(() => a.aV(f())),
    y = r().once(() => a.aV(p())),
    v = r().once(() => a.aV(T())),
    b = r().once(() => a.aV(m())),
    M = r().once(() => a.aV(g())),
    P = r().once(() => a.aV(S())),
    U = r().once(() => a.aV(A())),
    w = r().once(() => a.X(E())),
    G = r().once(() => a.X(h())),
    x = r().once(() => a.X(f())),
    k = r().once(() => a.X(p())),
    F = r().once(() => a.X(T())),
    V = r().once(() => a.X(S())),
    B = {
        combineAndInjectMentionRule: u,
        createReactRules: s.A,
        defaultReactRuleOptions: _,
        get defaultRules() {
            return E();
        },
        get guildEventRules() {
            return g();
        },
        get notifCenterV2MessagePreviewRules() {
            return N();
        },
        lockscreenWidgetMessageRules: C,
        astParserFor: a.X,
        reactParserFor: a.aV,
        parse: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return R()(...t);
        },
        parseTopic: (e, t, n, i) => O()(e, t, { allowLinks: !0, ...n }, i),
        parseVoiceChannelStatus: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return L()(...t);
        },
        parseEmbedTitle: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return D()(...t);
        },
        parseEmbedTitleWithoutLinks: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return y()(...t);
        },
        parseInlineReply: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return v()(...t);
        },
        parseGuildVerificationFormRule: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return b()(...t);
        },
        parseGuildEventDescription: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return M()(...t);
        },
        parseAutoModerationSystemMessage: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return P()(...t);
        },
        parseForumPostGuidelines: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return U()(...t);
        },
        parseToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return w()(...t);
        },
        parseTopicToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return G()(...t);
        },
        parseEmbedTitleToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return x()(...t);
        },
        parseEmbedTitleWithoutLinksToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return k()(...t);
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
