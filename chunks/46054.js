t.d(n, { A: () => K });
var l = t(435558),
    r = t.n(l),
    a = t(807081),
    i = t(247186),
    o = t(999915),
    s = t(551965);
let c = null;
c = t(937767).A;
let u = ["url", "autolink", "link", "mailto", "tel"];
function d(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        l = {};
    return (
        null != e.mention && null != c && (l = { mention: !0 === t.shouldStopPropagation ? (0, i.xS)(c) : c }),
        (0, s.A)([e, ...n, l])
    );
}
let m = { enableBuildOverrides: !1, enableEmojiClick: !0 },
    h = r().once(() => d(o.Ay.RULES, [(0, i.Ay)({ enableBuildOverrides: !0 })])),
    p = r().once(() => r().omit(d(o.Ay.RULES, [(0, i.Ay)(m)]), "paragraph", "newline"));
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, i.Ay)({
        ...m,
        emojiTooltipPosition: "bottom",
        shouldCloseDefaultModals: !0,
        shouldStopPropagation: !0,
        ...e,
    });
}
let f = r().once(() =>
        d(o.Ay.CHANNEL_TOPIC_RULES, [g(), (0, i.r3)(), { codeBlock: { react: o.Ay.RULES.text.react } }], {
            shouldStopPropagation: !0,
        }),
    ),
    A = r().once(() =>
        d(
            o.Ay.CHANNEL_TOPIC_RULES,
            [g({ emojiFocusable: !1 }), (0, i.r3)(), { codeBlock: { react: o.Ay.RULES.text.react } }],
            { shouldStopPropagation: !0 },
        ),
    ),
    y = r().once(() => d(o.Ay.VOICE_CHANNEL_STATUS_RULES, [(0, i.Ay)({ ...m, enableEmojiClick: !1 })])),
    x = r().once(() => d(o.Ay.EMBED_TITLE_RULES, [(0, i.Ay)(m)])),
    E = r().once(() => r().omit(d(o.Ay.EMBED_TITLE_RULES, [(0, i.Ay)(m)]), u)),
    j = r().once(() => d(o.Ay.INLINE_REPLY_RULES, [(0, i.Ay)(m)])),
    I = r().once(() => d(o.Ay.GUILD_VERIFICATION_FORM_RULES, [(0, i.Ay)(m)])),
    C = r().once(() => {
        let e = { ...m, shouldStopPropagation: !0 };
        return d(o.Ay.GUILD_EVENT_RULES, [(0, i.Ay)(e)], e);
    }),
    k = r().once(() => r().omit(C(), "subtext")),
    v = r().once(() => d(o.Ay.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, i.Ay)(m)])),
    N = r().once(() =>
        r().omit(
            d(o.Ay.RULES, [(0, i.Ay)(m)]),
            "paragraph",
            "newline",
            "strong",
            "codeBlock",
            "inlineCode",
            "u",
            "list",
            "heading",
            "subtext",
            ...u,
        ),
    ),
    S = { text: o.Ay.RULES.text },
    b = r().once(() => a.aV(h())),
    T = r().once(() => a.aV(f())),
    L = r().once(() => a.aV(A())),
    M = r().once(() => a.aV(y())),
    _ = r().once(() => a.aV(x())),
    P = r().once(() => a.aV(E())),
    R = r().once(() => a.aV(j())),
    O = r().once(() => a.aV(I())),
    w = r().once(() => a.aV(C())),
    U = r().once(() => a.aV(v())),
    D = r().once(() => a.aV(p())),
    G = r().once(() => a.X(h())),
    V = r().once(() => a.X(f())),
    H = r().once(() => a.X(x())),
    B = r().once(() => a.X(E())),
    $ = r().once(() => a.X(j())),
    F = r().once(() => a.X(v())),
    K = {
        combineAndInjectMentionRule: d,
        createReactRules: i.Ay,
        defaultReactRuleOptions: m,
        get defaultRules() {
            return h();
        },
        get guildEventRules() {
            return C();
        },
        get guildEventLocationRules() {
            return k();
        },
        get notifCenterV2MessagePreviewRules() {
            return N();
        },
        lockscreenWidgetMessageRules: S,
        astParserFor: a.X,
        reactParserFor: a.aV,
        parse: function () {
            for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
            return b()(...n);
        },
        parseTopic: (e, n, t, l) => T()(e, n, { allowLinks: !0, allowGameMentions: !0, ...t }, l),
        parseTruncatedTopic: (e, n, t, l) => L()(e, n, { allowLinks: !0, allowGameMentions: !0, ...t }, l),
        parseVoiceChannelStatus: function () {
            for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
            return M()(...n);
        },
        parseEmbedTitle: function () {
            for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
            return _()(...n);
        },
        parseEmbedTitleWithoutLinks: function () {
            for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
            return P()(...n);
        },
        parseInlineReply: function () {
            for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
            return R()(...n);
        },
        parseGuildVerificationFormRule: function () {
            for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
            return O()(...n);
        },
        parseGuildEventDescription: function () {
            for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
            return w()(...n);
        },
        parseAutoModerationSystemMessage: function () {
            for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
            return U()(...n);
        },
        parseForumPostGuidelines: function () {
            for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
            return D()(...n);
        },
        parseToAST: function () {
            for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
            return G()(...n);
        },
        parseTopicToAST: function () {
            for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
            return V()(...n);
        },
        parseEmbedTitleToAST: function () {
            for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
            return H()(...n);
        },
        parseEmbedTitleWithoutLinksToAST: function () {
            for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
            return B()(...n);
        },
        parseInlineReplyToAST: function () {
            for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
            return $()(...n);
        },
        parseAutoModerationSystemMessageToAST: function () {
            for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
            return F()(...n);
        },
    };
