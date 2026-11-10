var t = r(435558),
    o = r.n(t),
    l = r(826059),
    a = r(862316),
    i = r(605275),
    u = r(551965);
let c = null,
    s = l.aV;
c = r(937767).A;
let A = ["url", "autolink", "link", "mailto", "tel"];
function d(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        t = {};
    return (
        null != e.mention && null != c && (t = { mention: !0 === r.shouldStopPropagation ? (0, a.xS)(c) : c }),
        (0, u.A)([e, ...n, t])
    );
}
let y = { enableBuildOverrides: !1, enableEmojiClick: !0 },
    h = o().once(() => d(i.Ay.RULES, [(0, a.Ay)({ enableBuildOverrides: !0 })])),
    p = o().once(() => (0, u.A)([h(), (0, a.r3)()])),
    f = o().once(() => o().omit(d(i.Ay.RULES, [(0, a.Ay)(y)]), "paragraph", "newline"));
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, a.Ay)({
        ...y,
        emojiTooltipPosition: "bottom",
        shouldCloseDefaultModals: !0,
        shouldStopPropagation: !0,
        ...e,
    });
}
let g = o().once(() =>
        d(i.Ay.CHANNEL_TOPIC_RULES, [E(), (0, a.r3)(), { codeBlock: { react: i.Ay.RULES.text.react } }], {
            shouldStopPropagation: !0,
        }),
    ),
    S = o().once(() =>
        d(
            i.Ay.CHANNEL_TOPIC_RULES,
            [E({ emojiFocusable: !1 }), (0, a.r3)(), { codeBlock: { react: i.Ay.RULES.text.react } }],
            { shouldStopPropagation: !0 },
        ),
    ),
    T = o().once(() => d(i.Ay.VOICE_CHANNEL_STATUS_RULES, [(0, a.Ay)({ ...y, enableEmojiClick: !1 })])),
    v = o().once(() => d(i.Ay.EMBED_TITLE_RULES, [(0, a.Ay)(y)])),
    m = o().once(() => o().omit(d(i.Ay.EMBED_TITLE_RULES, [(0, a.Ay)(y)]), A)),
    R = o().once(() => d(i.Ay.INLINE_REPLY_RULES, [(0, a.Ay)(y)])),
    L = o().once(() => d(i.Ay.GUILD_VERIFICATION_FORM_RULES, [(0, a.Ay)(y)])),
    I = o().once(() => {
        let e = { ...y, shouldStopPropagation: !0 };
        return d(i.Ay.GUILD_EVENT_RULES, [(0, a.Ay)(e)], e);
    }),
    _ = o().once(() => o().omit(I(), "subtext")),
    k = o().once(() => d(i.Ay.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, a.Ay)(y)])),
    C = o().once(() =>
        o().omit(
            d(i.Ay.RULES, [(0, a.Ay)(y)]),
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
    U = { text: i.Ay.RULES.text },
    b = o().once(() => s(h())),
    x = o().once(() => s(p())),
    M = o().once(() => s(g())),
    N = o().once(() => s(S())),
    w = o().once(() => s(T())),
    P = o().once(() => s(v())),
    j = o().once(() => s(m())),
    G = o().once(() => s(R())),
    O = o().once(() => s(L())),
    B = o().once(() => s(I())),
    D = o().once(() => s(k())),
    F = o().once(() => s(f())),
    V = o().once(() => l.X(h())),
    X = o().once(() => l.X(g())),
    H = o().once(() => l.X(v())),
    W = o().once(() => l.X(m())),
    Y = o().once(() => l.X(R())),
    $ = o().once(() => l.X(k())),
    q = {
        combineAndInjectMentionRule: d,
        createReactRules: a.Ay,
        defaultReactRuleOptions: y,
        get defaultRules() {
            return h();
        },
        get topicRules() {
            return g();
        },
        get guildEventRules() {
            return I();
        },
        get guildEventLocationRules() {
            return _();
        },
        get notifCenterV2MessagePreviewRules() {
            return C();
        },
        lockscreenWidgetMessageRules: U,
        astParserFor: l.X,
        reactParserFor: s,
        parse: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return b()(...n);
        },
        parseRichEmbedText: (e, n, r, t) => x()(e, n, { allowGameMentions: !0, ...r }, t),
        parseTopic: (e, n, r, t) => M()(e, n, { allowLinks: !0, allowGameMentions: !0, ...r }, t),
        parseTruncatedTopic: (e, n, r, t) => N()(e, n, { allowLinks: !0, allowGameMentions: !0, ...r }, t),
        parseVoiceChannelStatus: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return w()(...n);
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
            return B()(...n);
        },
        parseAutoModerationSystemMessage: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return D()(...n);
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
r.d(n, {}, { A: q });
