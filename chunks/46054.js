n.d(t, { A: () => K });
var l = n(435558),
    i = n.n(l),
    s = n(807081),
    r = n(247186),
    a = n(999915),
    o = n(551965);
let u = null;
u = n(937767).A;
let c = ["url", "autolink", "link", "mailto", "tel"];
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        l = {};
    return (
        null != e.mention && null != u && (l = { mention: !0 === n.shouldStopPropagation ? (0, r.xS)(u) : u }),
        (0, o.A)([e, ...t, l])
    );
}
let m = { enableBuildOverrides: !1, enableEmojiClick: !0 },
    h = i().once(() => d(a.Ay.RULES, [(0, r.Ay)({ enableBuildOverrides: !0 })])),
    p = i().once(() => i().omit(d(a.Ay.RULES, [(0, r.Ay)(m)]), "paragraph", "newline"));
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, r.Ay)({
        ...m,
        emojiTooltipPosition: "bottom",
        shouldCloseDefaultModals: !0,
        shouldStopPropagation: !0,
        ...e,
    });
}
let g = i().once(() =>
        d(a.Ay.CHANNEL_TOPIC_RULES, [f(), (0, r.r3)(), { codeBlock: { react: a.Ay.RULES.text.react } }], {
            shouldStopPropagation: !0,
        }),
    ),
    x = i().once(() =>
        d(
            a.Ay.CHANNEL_TOPIC_RULES,
            [f({ emojiFocusable: !1 }), (0, r.r3)(), { codeBlock: { react: a.Ay.RULES.text.react } }],
            { shouldStopPropagation: !0 },
        ),
    ),
    A = i().once(() => d(a.Ay.VOICE_CHANNEL_STATUS_RULES, [(0, r.Ay)({ ...m, enableEmojiClick: !1 })])),
    C = i().once(() => d(a.Ay.EMBED_TITLE_RULES, [(0, r.Ay)(m)])),
    E = i().once(() => i().omit(d(a.Ay.EMBED_TITLE_RULES, [(0, r.Ay)(m)]), c)),
    I = i().once(() => d(a.Ay.INLINE_REPLY_RULES, [(0, r.Ay)(m)])),
    y = i().once(() => d(a.Ay.GUILD_VERIFICATION_FORM_RULES, [(0, r.Ay)(m)])),
    S = i().once(() => {
        let e = { ...m, shouldStopPropagation: !0 };
        return d(a.Ay.GUILD_EVENT_RULES, [(0, r.Ay)(e)], e);
    }),
    v = i().once(() => i().omit(S(), "subtext")),
    N = i().once(() => d(a.Ay.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, r.Ay)(m)])),
    _ = i().once(() =>
        i().omit(
            d(a.Ay.RULES, [(0, r.Ay)(m)]),
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
    j = { text: a.Ay.RULES.text },
    b = i().once(() => s.aV(h())),
    T = i().once(() => s.aV(g())),
    R = i().once(() => s.aV(x())),
    O = i().once(() => s.aV(A())),
    L = i().once(() => s.aV(C())),
    M = i().once(() => s.aV(E())),
    k = i().once(() => s.aV(I())),
    w = i().once(() => s.aV(y())),
    P = i().once(() => s.aV(S())),
    D = i().once(() => s.aV(N())),
    U = i().once(() => s.aV(p())),
    V = i().once(() => s.X(h())),
    G = i().once(() => s.X(g())),
    F = i().once(() => s.X(C())),
    H = i().once(() => s.X(E())),
    B = i().once(() => s.X(I())),
    W = i().once(() => s.X(N())),
    K = {
        combineAndInjectMentionRule: d,
        createReactRules: r.Ay,
        defaultReactRuleOptions: m,
        get defaultRules() {
            return h();
        },
        get guildEventRules() {
            return S();
        },
        get guildEventLocationRules() {
            return v();
        },
        get notifCenterV2MessagePreviewRules() {
            return _();
        },
        lockscreenWidgetMessageRules: j,
        astParserFor: s.X,
        reactParserFor: s.aV,
        parse: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return b()(...t);
        },
        parseTopic: (e, t, n, l) => T()(e, t, { allowLinks: !0, allowGameMentions: !0, ...n }, l),
        parseTruncatedTopic: (e, t, n, l) => R()(e, t, { allowLinks: !0, allowGameMentions: !0, ...n }, l),
        parseVoiceChannelStatus: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return O()(...t);
        },
        parseEmbedTitle: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return L()(...t);
        },
        parseEmbedTitleWithoutLinks: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return M()(...t);
        },
        parseInlineReply: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return k()(...t);
        },
        parseGuildVerificationFormRule: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return w()(...t);
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
            return V()(...t);
        },
        parseTopicToAST: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return G()(...t);
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
