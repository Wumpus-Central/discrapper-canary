r.d(n, { A: () => $ });
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
    h = o().once(() => A(i.Ay.RULES, [(0, l.Ay)({ enableBuildOverrides: !0 })])),
    y = o().once(() => (0, u.A)([h(), (0, l.r3)()])),
    f = o().once(() => o().omit(A(i.Ay.RULES, [(0, l.Ay)(d)]), "paragraph", "newline"));
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, l.Ay)({
        ...d,
        emojiTooltipPosition: "bottom",
        shouldCloseDefaultModals: !0,
        shouldStopPropagation: !0,
        ...e,
    });
}
let g = o().once(() =>
        A(i.Ay.CHANNEL_TOPIC_RULES, [p(), (0, l.r3)(), { codeBlock: { react: i.Ay.RULES.text.react } }], {
            shouldStopPropagation: !0,
        }),
    ),
    E = o().once(() =>
        A(
            i.Ay.CHANNEL_TOPIC_RULES,
            [p({ emojiFocusable: !1 }), (0, l.r3)(), { codeBlock: { react: i.Ay.RULES.text.react } }],
            { shouldStopPropagation: !0 },
        ),
    ),
    S = o().once(() => A(i.Ay.VOICE_CHANNEL_STATUS_RULES, [(0, l.Ay)({ ...d, enableEmojiClick: !1 })])),
    T = o().once(() => A(i.Ay.EMBED_TITLE_RULES, [(0, l.Ay)(d)])),
    m = o().once(() => o().omit(A(i.Ay.EMBED_TITLE_RULES, [(0, l.Ay)(d)]), c)),
    v = o().once(() => A(i.Ay.INLINE_REPLY_RULES, [(0, l.Ay)(d)])),
    L = o().once(() => A(i.Ay.GUILD_VERIFICATION_FORM_RULES, [(0, l.Ay)(d)])),
    I = o().once(() => {
        let e = { ...d, shouldStopPropagation: !0 };
        return A(i.Ay.GUILD_EVENT_RULES, [(0, l.Ay)(e)], e);
    }),
    R = o().once(() => o().omit(I(), "subtext")),
    b = o().once(() => A(i.Ay.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, l.Ay)(d)])),
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
    k = o().once(() => a.aV(h())),
    U = o().once(() => a.aV(y())),
    x = o().once(() => a.aV(g())),
    M = o().once(() => a.aV(E())),
    w = o().once(() => a.aV(S())),
    N = o().once(() => a.aV(T())),
    P = o().once(() => a.aV(m())),
    V = o().once(() => a.aV(v())),
    j = o().once(() => a.aV(L())),
    G = o().once(() => a.aV(I())),
    O = o().once(() => a.aV(b())),
    D = o().once(() => a.aV(f())),
    F = o().once(() => a.X(h())),
    B = o().once(() => a.X(g())),
    X = o().once(() => a.X(T())),
    H = o().once(() => a.X(m())),
    W = o().once(() => a.X(v())),
    Y = o().once(() => a.X(b())),
    $ = {
        combineAndInjectMentionRule: A,
        createReactRules: l.Ay,
        defaultReactRuleOptions: d,
        get defaultRules() {
            return h();
        },
        get guildEventRules() {
            return I();
        },
        get guildEventLocationRules() {
            return R();
        },
        get notifCenterV2MessagePreviewRules() {
            return C();
        },
        lockscreenWidgetMessageRules: _,
        astParserFor: a.X,
        reactParserFor: a.aV,
        parse: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return k()(...n);
        },
        parseRichEmbedText: (e, n, r, t) => U()(e, n, { allowGameMentions: !0, ...r }, t),
        parseTopic: (e, n, r, t) => x()(e, n, { allowLinks: !0, allowGameMentions: !0, ...r }, t),
        parseTruncatedTopic: (e, n, r, t) => M()(e, n, { allowLinks: !0, allowGameMentions: !0, ...r }, t),
        parseVoiceChannelStatus: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return w()(...n);
        },
        parseEmbedTitle: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return N()(...n);
        },
        parseEmbedTitleWithoutLinks: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return P()(...n);
        },
        parseInlineReply: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return V()(...n);
        },
        parseGuildVerificationFormRule: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return j()(...n);
        },
        parseGuildEventDescription: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return G()(...n);
        },
        parseAutoModerationSystemMessage: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return O()(...n);
        },
        parseForumPostGuidelines: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return D()(...n);
        },
        parseToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return F()(...n);
        },
        parseTopicToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return B()(...n);
        },
        parseEmbedTitleToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return X()(...n);
        },
        parseEmbedTitleWithoutLinksToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return H()(...n);
        },
        parseInlineReplyToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return W()(...n);
        },
        parseAutoModerationSystemMessageToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return Y()(...n);
        },
    };
