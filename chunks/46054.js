r.d(n, { A: () => W });
var t = r(435558),
    o = r.n(t),
    a = r(807081),
    l = r(247186),
    i = r(999915),
    u = r(551965);
let s = null;
s = r(937767).A;
let c = ["url", "autolink", "link", "mailto", "tel"];
function A(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        t = {};
    return (
        null != e.mention && null != s && (t = { mention: !0 === r.shouldStopPropagation ? (0, l.xS)(s) : s }),
        (0, u.A)([e, ...n, t])
    );
}
let d = { enableBuildOverrides: !1, enableEmojiClick: !0 },
    y = o().once(() => A(i.Ay.RULES, [(0, l.Ay)({ enableBuildOverrides: !0 })])),
    h = o().once(() => o().omit(A(i.Ay.RULES, [(0, l.Ay)(d)]), "paragraph", "newline"));
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, l.Ay)({
        ...d,
        emojiTooltipPosition: "bottom",
        shouldCloseDefaultModals: !0,
        shouldStopPropagation: !0,
        ...e,
    });
}
let p = o().once(() =>
        A(i.Ay.CHANNEL_TOPIC_RULES, [f(), (0, l.r3)(), { codeBlock: { react: i.Ay.RULES.text.react } }], {
            shouldStopPropagation: !0,
        }),
    ),
    g = o().once(() =>
        A(
            i.Ay.CHANNEL_TOPIC_RULES,
            [f({ emojiFocusable: !1 }), (0, l.r3)(), { codeBlock: { react: i.Ay.RULES.text.react } }],
            { shouldStopPropagation: !0 },
        ),
    ),
    E = o().once(() => A(i.Ay.VOICE_CHANNEL_STATUS_RULES, [(0, l.Ay)({ ...d, enableEmojiClick: !1 })])),
    S = o().once(() => A(i.Ay.EMBED_TITLE_RULES, [(0, l.Ay)(d)])),
    v = o().once(() => o().omit(A(i.Ay.EMBED_TITLE_RULES, [(0, l.Ay)(d)]), c)),
    T = o().once(() => A(i.Ay.INLINE_REPLY_RULES, [(0, l.Ay)(d)])),
    m = o().once(() => A(i.Ay.GUILD_VERIFICATION_FORM_RULES, [(0, l.Ay)(d)])),
    L = o().once(() => {
        let e = { ...d, shouldStopPropagation: !0 };
        return A(i.Ay.GUILD_EVENT_RULES, [(0, l.Ay)(e)], e);
    }),
    I = o().once(() => o().omit(L(), "subtext")),
    R = o().once(() => A(i.Ay.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, l.Ay)(d)])),
    C = o().once(() =>
        o().omit(
            A(i.Ay.RULES, [(0, l.Ay)(d)]),
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
    _ = { text: i.Ay.RULES.text },
    b = o().once(() => a.aV(y())),
    k = o().once(() => a.aV(p())),
    U = o().once(() => a.aV(g())),
    x = o().once(() => a.aV(E())),
    M = o().once(() => a.aV(S())),
    N = o().once(() => a.aV(v())),
    P = o().once(() => a.aV(T())),
    w = o().once(() => a.aV(m())),
    V = o().once(() => a.aV(L())),
    j = o().once(() => a.aV(R())),
    G = o().once(() => a.aV(h())),
    O = o().once(() => a.X(y())),
    D = o().once(() => a.X(p())),
    F = o().once(() => a.X(S())),
    B = o().once(() => a.X(v())),
    X = o().once(() => a.X(T())),
    H = o().once(() => a.X(R())),
    W = {
        combineAndInjectMentionRule: A,
        createReactRules: l.Ay,
        defaultReactRuleOptions: d,
        get defaultRules() {
            return y();
        },
        get guildEventRules() {
            return L();
        },
        get guildEventLocationRules() {
            return I();
        },
        get notifCenterV2MessagePreviewRules() {
            return C();
        },
        lockscreenWidgetMessageRules: _,
        astParserFor: a.X,
        reactParserFor: a.aV,
        parse: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return b()(...n);
        },
        parseTopic: (e, n, r, t) => k()(e, n, { allowLinks: !0, allowGameMentions: !0, ...r }, t),
        parseTruncatedTopic: (e, n, r, t) => U()(e, n, { allowLinks: !0, allowGameMentions: !0, ...r }, t),
        parseVoiceChannelStatus: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return x()(...n);
        },
        parseEmbedTitle: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return M()(...n);
        },
        parseEmbedTitleWithoutLinks: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return N()(...n);
        },
        parseInlineReply: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return P()(...n);
        },
        parseGuildVerificationFormRule: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return w()(...n);
        },
        parseGuildEventDescription: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return V()(...n);
        },
        parseAutoModerationSystemMessage: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return j()(...n);
        },
        parseForumPostGuidelines: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return G()(...n);
        },
        parseToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return O()(...n);
        },
        parseTopicToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return D()(...n);
        },
        parseEmbedTitleToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return F()(...n);
        },
        parseEmbedTitleWithoutLinksToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return B()(...n);
        },
        parseInlineReplyToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return X()(...n);
        },
        parseAutoModerationSystemMessageToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return H()(...n);
        },
    };
