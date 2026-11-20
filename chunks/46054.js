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
    L = o().once(() => y(i.Ay.EMBED_TITLE_RULES, [(0, a.Ay)(h)])),
    m = o().once(() => o().omit(y(i.Ay.EMBED_TITLE_RULES, [(0, a.Ay)(h)]), d, "channelOrMessageUrl", "mediaPostLink")),
    R = o().once(() => y(i.Ay.INLINE_REPLY_RULES, [(0, a.Ay)(h)])),
    I = o().once(() => y(i.Ay.GUILD_VERIFICATION_FORM_RULES, [(0, a.Ay)(h)])),
    k = o().once(() => {
        let e = { ...h, shouldStopPropagation: !0 };
        return y(i.Ay.GUILD_EVENT_RULES, [(0, a.Ay)(e)], e);
    }),
    _ = o().once(() => o().omit(k(), "subtext")),
    U = o().once(() => (0, u.A)([i.Ay.POLL_RULES, (0, a.Ay)(h)])),
    C = o().once(() => y(i.Ay.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, a.Ay)(h)])),
    b = o().once(() =>
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
    M = { text: i.Ay.RULES.text },
    x = o().once(() => A(p())),
    N = o().once(() => A(f())),
    P = o().once(() => A(S())),
    w = o().once(() => A(T())),
    j = o().once(() => A(v())),
    G = o().once(() => A(L())),
    O = o().once(() => A(m())),
    X = o().once(() => A(R())),
    B = o().once(() => A(I())),
    D = o().once(() => A(k())),
    F = o().once(() => A(C())),
    V = o().once(() => A(g())),
    H = o().once(() => A(U())),
    W = o().once(() => l.X(p())),
    Y = o().once(() => l.X(S())),
    $ = o().once(() => l.X(L())),
    q = o().once(() => l.X(m())),
    z = o().once(() => l.X(R())),
    J = o().once(() => l.X(C())),
    K = o().once(() => l.X(U())),
    Q = {
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
            return b();
        },
        lockscreenWidgetMessageRules: M,
        astParserFor: l.X,
        reactParserFor: A,
        parse: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return x()(...n);
        },
        parseRichEmbedText: (e, n, r, t) => N()(e, n, { allowGameMentions: !0, ...r }, t),
        parseTopic: (e, n, r, t) => P()(e, n, { allowLinks: !0, allowGameMentions: !0, ...r }, t),
        parseTruncatedTopic: (e, n, r, t) => w()(e, n, { allowLinks: !0, allowGameMentions: !0, ...r }, t),
        parseVoiceChannelStatus: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return j()(...n);
        },
        parseEmbedTitle: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return G()(...n);
        },
        parseEmbedTitleWithoutLinks: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return O()(...n);
        },
        parseInlineReply: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return X()(...n);
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
        parsePoll: function (e, n, r) {
            return H()(e, n, r);
        },
        parseToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return W()(...n);
        },
        parseTopicToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return Y()(...n);
        },
        parseEmbedTitleToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return $()(...n);
        },
        parseEmbedTitleWithoutLinksToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return q()(...n);
        },
        parseInlineReplyToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return z()(...n);
        },
        parseAutoModerationSystemMessageToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return J()(...n);
        },
        parsePollToAST: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return K()(...n);
        },
    };
r.d(n, {}, { A: Q });
