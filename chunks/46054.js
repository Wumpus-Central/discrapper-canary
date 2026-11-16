var t = r(435558),
    o = r.n(t),
    l = r(826059),
    a = r(862316),
    i = r(605275),
    u = r(551965);
let c = null,
    s = l.aV,
    A = (e) => s(e.link?.react != null ? e : { ...e, link: { ...e.link, react: (e, n, r) => n(e.content, r) } });
c = r(937767).A;
let d = ["url", "autolink", "link", "mailto", "tel"];
function y(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        t = {};
    return (
        null != e.mention && null != c && (t = { mention: !0 === r.shouldStopPropagation ? (0, a.xS)(c) : c }),
        (0, u.A)([e, ...n, t])
    );
}
let h = { enableBuildOverrides: !1, enableEmojiClick: !0 },
    p = o().once(() => y(i.Ay.RULES, [(0, a.Ay)({ enableBuildOverrides: !0 })])),
    f = o().once(() => (0, u.A)([p(), (0, a.r3)()])),
    g = o().once(() => o().omit(y(i.Ay.RULES, [(0, a.Ay)(h)]), "paragraph", "newline"));
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, a.Ay)({
        ...h,
        emojiTooltipPosition: "bottom",
        shouldCloseDefaultModals: !0,
        shouldStopPropagation: !0,
        ...e,
    });
}
let S = o().once(() =>
        y(i.Ay.CHANNEL_TOPIC_RULES, [E(), (0, a.r3)(), { codeBlock: { react: i.Ay.RULES.text.react } }], {
            shouldStopPropagation: !0,
        }),
    ),
    T = o().once(() =>
        y(
            i.Ay.CHANNEL_TOPIC_RULES,
            [E({ emojiFocusable: !1 }), (0, a.r3)(), { codeBlock: { react: i.Ay.RULES.text.react } }],
            { shouldStopPropagation: !0 },
        ),
    ),
    v = o().once(() => y(i.Ay.VOICE_CHANNEL_STATUS_RULES, [(0, a.Ay)({ ...h, enableEmojiClick: !1 })])),
    m = o().once(() => y(i.Ay.EMBED_TITLE_RULES, [(0, a.Ay)(h)])),
    R = o().once(() => o().omit(y(i.Ay.EMBED_TITLE_RULES, [(0, a.Ay)(h)]), d, "channelOrMessageUrl", "mediaPostLink")),
    L = o().once(() => y(i.Ay.INLINE_REPLY_RULES, [(0, a.Ay)(h)])),
    I = o().once(() => y(i.Ay.GUILD_VERIFICATION_FORM_RULES, [(0, a.Ay)(h)])),
    k = o().once(() => {
        let e = { ...h, shouldStopPropagation: !0 };
        return y(i.Ay.GUILD_EVENT_RULES, [(0, a.Ay)(e)], e);
    }),
    _ = o().once(() => o().omit(k(), "subtext")),
    U = o().once(() => y(i.Ay.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, a.Ay)(h)])),
    C = o().once(() =>
        o().omit(
            y(i.Ay.RULES, [(0, a.Ay)(h)]),
            "paragraph",
            "newline",
            "strong",
            "codeBlock",
            "inlineCode",
            "u",
            "list",
            "heading",
            "subtext",
            ...d,
        ),
    ),
    b = { text: i.Ay.RULES.text },
    M = o().once(() => A(p())),
    x = o().once(() => A(f())),
    N = o().once(() => A(S())),
    P = o().once(() => A(T())),
    w = o().once(() => A(v())),
    j = o().once(() => A(m())),
    G = o().once(() => A(R())),
    O = o().once(() => A(L())),
    B = o().once(() => A(I())),
    D = o().once(() => A(k())),
    F = o().once(() => A(U())),
    V = o().once(() => A(g())),
    X = o().once(() => l.X(p())),
    H = o().once(() => l.X(S())),
    W = o().once(() => l.X(m())),
    Y = o().once(() => l.X(R())),
    $ = o().once(() => l.X(L())),
    q = o().once(() => l.X(U())),
    z = {
        combineAndInjectMentionRule: y,
        createReactRules: a.Ay,
        defaultReactRuleOptions: h,
        get defaultRules() {
            return p();
        },
        get topicRules() {
            return S();
        },
        get guildEventRules() {
            return k();
        },
        get guildEventLocationRules() {
            return _();
        },
        get notifCenterV2MessagePreviewRules() {
            return C();
        },
        lockscreenWidgetMessageRules: b,
        astParserFor: l.X,
        reactParserFor: A,
        parse: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return M()(...n);
        },
        parseRichEmbedText: (e, n, r, t) => x()(e, n, { allowGameMentions: !0, ...r }, t),
        parseTopic: (e, n, r, t) => N()(e, n, { allowLinks: !0, allowGameMentions: !0, ...r }, t),
        parseTruncatedTopic: (e, n, r, t) => P()(e, n, { allowLinks: !0, allowGameMentions: !0, ...r }, t),
        parseVoiceChannelStatus: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return w()(...n);
        },
        parseEmbedTitle: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return j()(...n);
        },
        parseEmbedTitleWithoutLinks: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return G()(...n);
        },
        parseInlineReply: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return O()(...n);
        },
        parseGuildVerificationFormRule: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return B()(...n);
        },
        parseGuildEventDescription: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return D()(...n);
        },
        parseAutoModerationSystemMessage: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return F()(...n);
        },
        parseForumPostGuidelines: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return V()(...n);
        },
        parseToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return X()(...n);
        },
        parseTopicToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return H()(...n);
        },
        parseEmbedTitleToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return W()(...n);
        },
        parseEmbedTitleWithoutLinksToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return Y()(...n);
        },
        parseInlineReplyToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return $()(...n);
        },
        parseAutoModerationSystemMessageToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return q()(...n);
        },
    };
r.d(n, {}, { A: z });
