r.d(n, { A: () => q });
var t = r(435558),
    o = r.n(t),
    l = r(807081),
    a = r(247186),
    i = r(999915),
    u = r(551965);
let s = null,
    c = l.aV;
s = r(937767).A;
let A = ["url", "autolink", "link", "mailto", "tel"];
function d(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        t = {};
    return (
        null != e.mention && null != s && (t = { mention: !0 === r.shouldStopPropagation ? (0, a.xS)(s) : s }),
        (0, u.A)([e, ...n, t])
    );
}
let h = { enableBuildOverrides: !1, enableEmojiClick: !0 },
    y = o().once(() => d(i.Ay.RULES, [(0, a.Ay)({ enableBuildOverrides: !0 })])),
    f = o().once(() => (0, u.A)([y(), (0, a.r3)()])),
    p = o().once(() => o().omit(d(i.Ay.RULES, [(0, a.Ay)(h)]), "paragraph", "newline"));
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, a.Ay)({
        ...h,
        emojiTooltipPosition: "bottom",
        shouldCloseDefaultModals: !0,
        shouldStopPropagation: !0,
        ...e,
    });
}
let E = o().once(() =>
        d(i.Ay.CHANNEL_TOPIC_RULES, [g(), (0, a.r3)(), { codeBlock: { react: i.Ay.RULES.text.react } }], {
            shouldStopPropagation: !0,
        }),
    ),
    S = o().once(() =>
        d(
            i.Ay.CHANNEL_TOPIC_RULES,
            [g({ emojiFocusable: !1 }), (0, a.r3)(), { codeBlock: { react: i.Ay.RULES.text.react } }],
            { shouldStopPropagation: !0 },
        ),
    ),
    T = o().once(() => d(i.Ay.VOICE_CHANNEL_STATUS_RULES, [(0, a.Ay)({ ...h, enableEmojiClick: !1 })])),
    m = o().once(() => d(i.Ay.EMBED_TITLE_RULES, [(0, a.Ay)(h)])),
    v = o().once(() => o().omit(d(i.Ay.EMBED_TITLE_RULES, [(0, a.Ay)(h)]), A)),
    L = o().once(() => d(i.Ay.INLINE_REPLY_RULES, [(0, a.Ay)(h)])),
    I = o().once(() => d(i.Ay.GUILD_VERIFICATION_FORM_RULES, [(0, a.Ay)(h)])),
    R = o().once(() => {
        let e = { ...h, shouldStopPropagation: !0 };
        return d(i.Ay.GUILD_EVENT_RULES, [(0, a.Ay)(e)], e);
    }),
    b = o().once(() => o().omit(R(), "subtext")),
    C = o().once(() => d(i.Ay.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, a.Ay)(h)])),
    _ = o().once(() =>
        o().omit(
            d(i.Ay.RULES, [(0, a.Ay)(h)]),
            "paragraph",
            "newline",
            "strong",
            "codeBlock",
            "inlineCode",
            "u",
            "list",
            "heading",
            "subtext",
            ...A,
        ),
    ),
    k = { text: i.Ay.RULES.text },
    U = o().once(() => c(y())),
    x = o().once(() => c(f())),
    M = o().once(() => c(E())),
    w = o().once(() => c(S())),
    N = o().once(() => c(T())),
    P = o().once(() => c(m())),
    j = o().once(() => c(v())),
    G = o().once(() => c(L())),
    O = o().once(() => c(I())),
    D = o().once(() => c(R())),
    B = o().once(() => c(C())),
    F = o().once(() => c(p())),
    V = o().once(() => l.X(y())),
    X = o().once(() => l.X(E())),
    H = o().once(() => l.X(m())),
    W = o().once(() => l.X(v())),
    Y = o().once(() => l.X(L())),
    $ = o().once(() => l.X(C())),
    q = {
        combineAndInjectMentionRule: d,
        createReactRules: a.Ay,
        defaultReactRuleOptions: h,
        get defaultRules() {
            return y();
        },
        get guildEventRules() {
            return R();
        },
        get guildEventLocationRules() {
            return b();
        },
        get notifCenterV2MessagePreviewRules() {
            return _();
        },
        lockscreenWidgetMessageRules: k,
        astParserFor: l.X,
        reactParserFor: c,
        parse: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return U()(...n);
        },
        parseRichEmbedText: (e, n, r, t) => x()(e, n, { allowGameMentions: !0, ...r }, t),
        parseTopic: (e, n, r, t) => M()(e, n, { allowLinks: !0, allowGameMentions: !0, ...r }, t),
        parseTruncatedTopic: (e, n, r, t) => w()(e, n, { allowLinks: !0, allowGameMentions: !0, ...r }, t),
        parseVoiceChannelStatus: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return N()(...n);
        },
        parseEmbedTitle: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return P()(...n);
        },
        parseEmbedTitleWithoutLinks: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return j()(...n);
        },
        parseInlineReply: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return G()(...n);
        },
        parseGuildVerificationFormRule: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return O()(...n);
        },
        parseGuildEventDescription: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return D()(...n);
        },
        parseAutoModerationSystemMessage: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return B()(...n);
        },
        parseForumPostGuidelines: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return F()(...n);
        },
        parseToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return V()(...n);
        },
        parseTopicToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return X()(...n);
        },
        parseEmbedTitleToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return H()(...n);
        },
        parseEmbedTitleWithoutLinksToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return W()(...n);
        },
        parseInlineReplyToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return Y()(...n);
        },
        parseAutoModerationSystemMessageToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return $()(...n);
        },
    };
