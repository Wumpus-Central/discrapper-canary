"use strict";
n.d(t, { YN: () => e5, Fl: () => ta, Eh: () => te, fD: () => tt, BC: () => ts });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r);
n(340287);
var c = n(17928),
    u = n(554146),
    d = n(661531),
    h = n(342952),
    m = n(990078),
    p = n(43990),
    f = n(315710),
    g = n(939249),
    x = n(276293),
    C = n(935063),
    A = n(789645),
    E = n(821609),
    I = n(778712),
    y = n(696986),
    v = n(534514),
    S = n(834730),
    N = n(320448),
    j = n(97808),
    _ = n(738188),
    T = n(983851),
    b = n(31300),
    R = n(308528),
    O = n(367513),
    L = n(956793),
    w = n(401843),
    M = n(775602),
    k = n(969151),
    P = n(922016),
    D = n(736653),
    U = n(355622),
    V = n(408018),
    G = n(201349),
    F = n(375499),
    H = n(429433),
    W = n(95701),
    B = n(652215),
    K = n(985018),
    z = n(389605);
let Z = (0, W.createChannelRecord)({ id: "1", type: B.rbe.DM });
function q(e) {
    let {
            placeholder: t,
            onEnter: n,
            setEditorRef: s,
            showEmojiButton: r = !1,
            renderAttachButton: o,
            autoFocus: c = !0,
            onFocus: u,
            channel: d,
            className: h,
        } = e,
        [m, p] = i.useState(""),
        [f, g] = i.useState((0, V.x7)("")),
        x = U.oU.ATOMIC_REACTOR_REPLY_INPUT,
        C = i.useRef(null);
    return (0, l.jsx)(G.Ay, {
        ref: C,
        placeholder: t,
        editorClassName: h,
        className: a()(z.N8, h),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: d ?? Z,
        onChange: (e, t, n) => {
            p(t), g(n);
        },
        type: r ? { ...x, emojis: { button: !0 } } : x,
        textValue: m,
        richValue: f,
        onSubmit: (e) => {
            let { value: t } = e;
            return t.length > 200
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (n(t), p(""), g((0, V.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
        },
        setEditorRef: s,
        focused: c,
        onFocus: u,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: (() => {
            if (null == C.current) return "top";
            let e = C.current.getBoundingClientRect(),
                t = window.innerHeight;
            return e.top < t / 2 ? "bottom" : "top";
        })(),
        renderAttachButton: o,
    });
}
let J = (e) => {
    var t;
    let { onSelectEmoji: n, onClick: s } = e,
        a = (0, D.Ay)(),
        [r, o] = i.useState(!1),
        c = i.useRef(null),
        u = i.useRef(null);
    return (
        (t = () => o(!1)),
        i.useEffect(() => {
            let e = (e) => {
                    "Escape" === e.key && t();
                },
                n = (e) => {
                    null != e.target && (c?.current?.contains(e?.target) || t());
                };
            return (
                document.addEventListener("keydown", e),
                document.addEventListener("mousedown", n),
                () => {
                    document.removeEventListener("keydown", e), document.removeEventListener("mousedown", n);
                }
            );
        }, [t, c]),
        (0, l.jsx)(P.Y, {
            targetElementRef: u,
            align: "right",
            position: "top",
            shouldShow: r,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, l.jsx)(p.N, {
                    theme: a,
                    children: (e) =>
                        (0, l.jsx)("div", {
                            className: e,
                            ref: c,
                            children: (0, l.jsx)(H.C, {
                                messageId: B.dJq,
                                channel: Z,
                                closePopout: () => {
                                    o(!1);
                                },
                                onSelectEmoji: (e) => {
                                    let { emoji: t, willClose: l, isBurst: i } = e;
                                    null != t && (n({ emoji: t, willClose: l, isBurst: i }), o(!1));
                                },
                            }),
                        }),
                }),
            children: () =>
                (0, l.jsx)(m.m, {
                    text: K.intl.string(K.t.lfIHs4),
                    children: (0, l.jsx)("div", {
                        ref: u,
                        className: z.mJ,
                        children: (0, l.jsx)(F.A, {
                            active: !1,
                            tabIndex: 0,
                            onClick: () => {
                                s?.(), o(!0);
                            },
                        }),
                    }),
                }),
        })
    );
};
var Y = n(47167),
    X = n(262763),
    $ = n(402216),
    Q = n(268218),
    ee = n(826673),
    et = n(822123),
    en = n(643501),
    el = n(409626),
    ei = n(692969),
    es = n(279250),
    ea = n(607407),
    er = n(548118),
    eo = n(721592),
    ec = n(378570),
    eu = n(832163),
    ed = n(565688),
    eh = n(533562);
n(735438);
var em = n(123924),
    ep = n(805901),
    ef = n(565645);
n(915089);
var eg = n(713517);
n(267889);
var ex = n(7584);
n(850992), n(690521);
var eC = n(403362);
n(806931);
var eA = n(307731);
n(650583);
var eE = n(317299);
function eI(e) {
    let { emoji: t, isDisabled: n = !1, onClick: s, className: r } = e,
        o = i.useRef(null),
        c = (0, eg.M)(o);
    return (0, l.jsx)("span", {
        ref: o,
        children: (0, l.jsx)(g.D, {
            onClick: s,
            focusProps: { enabled: !n },
            children: (0, l.jsx)(ep.c, {
                config: F.B,
                from: { value: 0 },
                to: { value: +!!c },
                children: (e) => {
                    let { value: i } = e;
                    return (0, l.jsx)(em.animated.div, {
                        style: { transform: i.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, l.jsx)(ef.A, {
                            className: a()(eE.Zg, r, { [eE.c4]: n }),
                            emojiId: t.id,
                            emojiName: t?.surrogates,
                            animated: t.animated,
                        }),
                    });
                },
            }),
        }),
    });
}
eA.EmojiIntention.CHAT,
    [
        ex.Ay.getByName("thumbsup"),
        ex.Ay.getByName("eyes"),
        ex.Ay.getByName("laughing"),
        ex.Ay.getByName("watermelon"),
        ex.Ay.getByName("fork_and_knife"),
        ex.Ay.getByName("yum"),
    ].filter(eC.Vq);
var ey = n(636585),
    ev = n(734057),
    eS = n(71393),
    eN = n(576705),
    ej = n(994500),
    e_ = n(543465),
    eT = n(287809),
    eb = n(977997),
    eR = n(607567),
    eO = n(954571),
    eL = n(486020),
    ew = n(562153),
    eM = n(939341),
    ek = n(20805),
    eP = n(22869),
    eD = n(623671),
    eU = n(428249),
    eV = n(327098),
    eG = n(576757),
    eF = n(202195),
    eH = n(140651),
    eW = n(43105),
    eB = n(932001),
    eK = n(49999),
    ez = n(345394);
let eZ = (e) => {
    let { children: t } = e,
        [n, s] = (0, eB.kn)([u.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [a, r] = i.useState(!1),
        o = i.useRef(null);
    i.useEffect(() => {
        let e = setTimeout(() => {
            r(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let c = i.useCallback(() => {
        s(eK.i.USER_DISMISS);
    }, [s]);
    return n !== u.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? t
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", { ref: o, children: t }),
                  (0, l.jsx)(eW.A, {
                      targetElementRef: o,
                      shouldShow: a,
                      onRequestClose: c,
                      position: "left",
                      title: K.intl.string(K.t.V5y3qZ),
                      body: K.intl.string(K.t.eSDHDk),
                      graphic: { type: "image", src: ez.A },
                  }),
              ],
          });
};
var eq = n(315246),
    eJ = n(866323),
    eY = n(857250),
    eX = n(97483),
    e$ = n(289873),
    eQ = n(401871),
    e0 = n(861173);
let e1 = () =>
        (0, l.jsxs)("div", {
            className: e0.oR,
            children: [
                (0, l.jsx)(e$.y, { type: e$.t.SPINNING_CIRCLE_SIMPLE, className: eQ.S }),
                (0, l.jsx)(S.E, {
                    color: "text-strong",
                    variant: "text-md/normal",
                    children: K.intl.string(K.t["5z/hlE"]),
                }),
            ],
        }),
    e2 = (e) => {
        let { shown: t, sent: n, className: i } = e,
            s = (0, c.bG)([M.A], () => M.A.useReducedMotion),
            a = (0, eJ.p)(
                t,
                {
                    from: { transform: s ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                    enter: { transform: "translateY(0)", opacity: 1 },
                    leave: { transform: s ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                    config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
                    delay: 200,
                },
                "animate-always",
            );
        return (0, l.jsx)(l.Fragment, {
            children: a(
                (e, t) =>
                    t &&
                    (0, l.jsx)(em.animated.div, {
                        className: i,
                        style: e,
                        children: n
                            ? (0, l.jsx)(eY.y, {
                                  message: K.intl.string(K.t.fjcCk5),
                                  type: eX.Ck.SUCCESS,
                                  id: "success_message_toast",
                              })
                            : (0, l.jsx)(eY.y, {
                                  message: "",
                                  type: eX.Ck.CUSTOM,
                                  id: "custom_loading_message_toast",
                                  options: { component: (0, l.jsx)(e1, {}) },
                              }),
                    }),
            ),
        });
    };
var e6 = n(424994),
    e3 = n(381941),
    e7 = n(699976),
    e4 = n(994063);
let e8 = (0, Q.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("63397"),
            n.e("51402"),
            n.e("38123"),
            n.e("34712"),
            n.e("89317"),
            n.e("20524"),
            n.e("40841"),
            n.e("69273"),
            n.e("61659"),
            n.e("63941"),
            n.e("63009"),
            n.e("84580"),
            n.e("62370"),
            n.e("45650"),
            n.e("97189"),
            n.e("24059"),
            n.e("27660"),
            n.e("17764"),
            n.e("85484"),
            n.e("89516"),
            n.e("16384"),
            n.e("39501"),
            n.e("3256"),
            n.e("53539"),
            n.e("19145"),
            n.e("18091"),
            n.e("79705"),
            n.e("69279"),
            n.e("23924"),
            n.e("15510"),
            n.e("48226"),
            n.e("20287"),
            n.e("28367"),
            n.e("35429"),
            n.e("10471"),
            n.e("63232"),
            n.e("64827"),
            n.e("30938"),
            n.e("23808"),
            n.e("11301"),
            n.e("60235"),
            n.e("61737"),
            n.e("79428"),
            n.e("29963"),
            n.e("47834"),
            n.e("98329"),
            n.e("20317"),
            n.e("84569"),
            n.e("2368"),
            n.e("27084"),
            n.e("24313"),
            n.e("48405"),
            n.e("63185"),
            n.e("19551"),
            n.e("84150"),
            n.e("45959"),
            n.e("18573"),
            n.e("55057"),
            n.e("37794"),
            n.e("26073"),
            n.e("7743"),
            n.e("34303"),
            n.e("48172"),
            n.e("28866"),
            n.e("54961"),
            n.e("8304"),
            n.e("58038"),
            n.e("93159"),
            n.e("55936"),
            n.e("11566"),
            n.e("21106"),
            n.e("31988"),
            n.e("94723"),
            n.e("62931"),
            n.e("81987"),
            n.e("58007"),
            n.e("5812"),
            n.e("17363"),
            n.e("34530"),
            n.e("28561"),
            n.e("9233"),
            n.e("69747"),
            n.e("54975"),
            n.e("21570"),
            n.e("49697"),
            n.e("77265"),
            n.e("71133"),
            n.e("77084"),
            n.e("96565"),
            n.e("37687"),
            n.e("95093"),
            n.e("62615"),
            n.e("48900"),
            n.e("60177"),
            n.e("21976"),
            n.e("1006"),
            n.e("79707"),
            n.e("27773"),
            n.e("20007"),
            n.e("99518"),
            n.e("55577"),
            n.e("59880"),
            n.e("78412"),
            n.e("9662"),
            n.e("80239"),
            n.e("23276"),
            n.e("54791"),
            n.e("255"),
            n.e("68479"),
            n.e("10567"),
            n.e("39286"),
            n.e("63645"),
            n.e("88343"),
            n.e("31445"),
            n.e("5636"),
            n.e("95444"),
            n.e("38472"),
            n.e("48720"),
            n.e("834"),
            n.e("33134"),
            n.e("77446"),
            n.e("84317"),
            n.e("25279"),
            n.e("67176"),
            n.e("20858"),
            n.e("54625"),
            n.e("18489"),
            n.e("77473"),
            n.e("166"),
            n.e("35996"),
            n.e("26574"),
            n.e("21856"),
            n.e("72963"),
            n.e("21930"),
            n.e("77467"),
            n.e("93461"),
            n.e("49013"),
            n.e("20965"),
            n.e("11133"),
            n.e("86313"),
            n.e("42324"),
            n.e("90779"),
            n.e("66523"),
            n.e("39808"),
            n.e("9763"),
            n.e("20667"),
        ]).then(n.bind(n, 963614)),
    webpackId: 963614,
});
function e5(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: e4.SW, children: t });
}
function e9(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: s = {} } = e,
        { primaryColor: r, secondaryColor: o } = (0, eH.A)(n);
    return (
        null != n && (s.background = `linear-gradient(45deg, ${r}, ${o})`),
        (0, l.jsx)(p.N, {
            theme: B.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, l.jsx)("div", { className: a()(e4.ZK, e, i), style: s, children: t }),
        })
    );
}
function te(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: e4.$m, children: t });
}
function tt(e) {
    var t;
    let n,
        s,
        a,
        r,
        { channel: h, user: p, onReaction: v, entry: L, buttons: w = [], header: M, onVoiceChannelPreview: P } = e,
        [D, U] = i.useState(!1),
        [V, G] = i.useState(null),
        F = i.useRef(null),
        H = (0, c.bG)(
            [eN.A],
            () => null != h && B.kvI.CONTENT_ENTRY_EMBEDS.has(h.type) && eN.A.can(B.xBc.SEND_MESSAGES, h),
        ),
        [z, Z] = i.useState(!1),
        [$, Q] = i.useState(!1),
        { voiceBar: et, joinVoiceButton: en } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: s } = e,
                { streamPreviewUrl: a, channel: r } = (0, eF.A)(n),
                o = (0, Y.Ay)(r),
                { needSubscriptionToAccess: u } = (0, eo.A)(t?.id),
                h = (0, c.bG)([eS.A], () => (null != r ? eS.A.getGuild(r.guild_id) : void 0)),
                p = (0, c.yK)([eR.Ay], () => (null != r ? eR.Ay.getVoiceStatesForChannel(r) : []), [r]),
                f = (0, c.bG)([eb.A], () => eb.A.isInChannel(r?.id)),
                x = i.useMemo(() => {
                    for (let e of p) {
                        let t = ev.A.getDMFromUserId(e.user.id),
                            n = null != t && e_.Ay.isChannelMuted(null, t),
                            l = ej.A.isBlockedOrIgnored(e.user.id);
                        if (n || l) return !0;
                    }
                    return !1;
                }, [p]);
            if (null == r || null == h) return { voiceBar: void 0, joinVoiceButton: void 0 };
            let C = null != a,
                A = (e) => {
                    let { children: t, text: n, hasRestrictedOrMutedVCParticipant: i } = e,
                        s = i
                            ? (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)(_.i, { size: "custom", width: 13, height: 13, className: e4.vb }),
                                      K.intl.string(K.t.d6DpXI),
                                  ],
                              })
                            : n;
                    return (0, l.jsx)(
                        m.m,
                        {
                            "aria-label": i ? K.intl.string(K.t.d6DpXI) : (n ?? !1),
                            __unsupportedReactNodeAsText: s,
                            shouldShow: !0,
                            children: t,
                        },
                        "voice-preview",
                    );
                };
            return {
                voiceBar: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)("div", {
                            className: e4.kP,
                            children: [
                                (0, l.jsx)(A, {
                                    text: K.intl.string(K.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: x,
                                    children: (0, l.jsxs)(g.D, {
                                        "aria-label": K.intl.string(K.t.WIVYqJ),
                                        onClick: () => {
                                            O.A.updateChatOpen(r.id, !0), (0, ec.iN)(r.id), s?.(r);
                                        },
                                        className: e4.I3,
                                        children: [
                                            (0, l.jsx)(er.Ay, {
                                                guild: h,
                                                size: er.Ay.Sizes.SMOL,
                                                className: e4.O9,
                                                active: !0,
                                            }),
                                            (0, l.jsx)(N._, {
                                                size: "xxs",
                                                color: d.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, l.jsx)(T.H, { size: "xs", color: d.A.colors.TEXT_DEFAULT }),
                                            (0, l.jsx)(S.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: e4.NR,
                                                children: o,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)(ey.A, {
                                    guildId: h.id,
                                    users: p,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, l.jsx)(j.eu, {
                                            src: e.user.getAvatarURL(h.id, 16),
                                            size: I._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: t,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)("div", {
                                            className: e4.V9,
                                            children: (0, l.jsx)(S.E, {
                                                variant: "text-xxs/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(y.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: f
                    ? null
                    : (0, l.jsx)(A, {
                          hasRestrictedOrMutedVCParticipant: x,
                          children: (0, l.jsx)(E.$, {
                              onClick: () => {
                                  X.A.handleVoiceConnect({
                                      channel: r,
                                      connected: f,
                                      needSubscriptionToAccess: u,
                                      routeDirectlyToChannel: !0,
                                  });
                              },
                              fullWidth: !0,
                              text: C ? K.intl.string(K.t.I6JG46) : K.intl.string(K.t.VJlc0S),
                              icon: C ? b.k : T.H,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: h, entry: L, onVoiceChannelPreview: P }),
        { embeddedActivity: el } = (0, eV.A)(L),
        ei =
            ((t = el),
            (n = (0, c.bG)([eS.A], () => eS.A.getGuild((0, k.D)(t?.location)))),
            (s = (0, c.bG)([ev.A], () => ev.A.getChannel((0, k.H)(t?.location)))),
            (a = (0, c.yK)([eT.default], () => t?.participants?.map((e) => eT.default.getUser(e.userId)) ?? [])),
            (r = (0, Y.Ay)(s)),
            null != t && null != n && null != s && W.k3.has(s.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("div", {
                              className: e4.kP,
                              children: [
                                  (0, l.jsxs)(g.D, {
                                      "aria-label": K.intl.string(K.t["W/A4Qp"]),
                                      onClick: () => (0, ec.iN)(s.id),
                                      className: e4.I3,
                                      children: [
                                          (0, l.jsx)(er.Ay, {
                                              guild: n,
                                              size: er.Ay.Sizes.SMOL,
                                              className: e4.O9,
                                              active: !0,
                                          }),
                                          (0, l.jsx)(N._, { size: "xxs", color: d.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                                          (0, l.jsx)(x.N, { size: "xs", color: d.A.colors.TEXT_DEFAULT }),
                                          (0, l.jsx)(S.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: e4.NR,
                                              children: r,
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(ey.A, {
                                      guildId: n.id,
                                      users: a,
                                      max: 3,
                                      renderUser: (e, t) =>
                                          (0, l.jsx)(j.eu, {
                                              src: e.getAvatarURL(n.id, 16),
                                              size: I._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: t,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)("div", {
                                              className: e4.V9,
                                              children: (0, l.jsx)(S.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(y.h, { size: 16 }),
                      ],
                  })
                : null),
        es = null != en && 0 === w.length ? [en] : w,
        ea = es.length > 0,
        eu = es.length >= 2,
        [ed, eh] = i.useState(!ea),
        em = ew.Ay.getName(h?.guild_id, h?.id, p),
        ep = (0, Y.Ay)(h, !0),
        ef =
            null != h && D
                ? K.intl.formatToPlainString(K.t["8lzR/R"], { channel: ep })
                : K.intl.formatToPlainString(K.t["4c+CAx"], { channel: `@${em}` }),
        eg = D ? K.intl.string(K.t.Z2CUgn) : K.intl.string(K.t.XLGiTG),
        ex = async (e) => {
            let t,
                { emoji: n } = e;
            if (null != n) {
                if (
                    (eO.default.track(B.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: e6.UG.GUILD_MEMBER_LIST,
                        channel_id: h?.id,
                        guild_id: h?.guild_id,
                    }),
                    (0, ee.Dr)(u.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    Z(!0),
                    Q(!1),
                    D)
                )
                    o()(null != h, "shareToChannelMode should only be true if a valid channel is passed"), (t = h);
                else {
                    let e = await R.A.getOrEnsurePrivateChannel(p.id);
                    t = ev.A.getChannel(e) ?? null;
                }
                return (
                    o()(null != t, "Send channel must be defined"),
                    eA({
                        reply: `:${n.name}:`,
                        sendToChannel: t,
                        onComplete: (e, t) => {
                            Q(!0),
                                setTimeout(() => {
                                    Z(!1), v(e, t);
                                }, 600);
                        },
                        interactionType: e6.PA.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1,
                    })
                );
            }
        },
        eC = async (e) => {
            let t;
            if (((0, ee.Dr)(u.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), D))
                o()(null != h, "shareToChannelMode should only be true if a valid channel is passed"), (t = h);
            else {
                let e = await R.A.openPrivateChannel({ recipientIds: p.id }),
                    n = ev.A.getChannel(e);
                o()(null != n, "DM channel must be defined"), (t = n);
            }
            let n = t.type === B.rbe.DM ? e6.PA.DM_REACTION_MESSAGE_SENT : e6.PA.CHANNEL_REACTION_MESSAGE_SENT;
            return eA({ reply: e, sendToChannel: t, interactionType: n, onComplete: v, requiresChannelReadiness: !0 });
        },
        eA = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: l, interactionType: i, requiresChannelReadiness: s } = e;
            V?.focus(),
                await (0, eU.d)({
                    channel: n,
                    content: t,
                    entry: L,
                    whenReady: s,
                    doNotNotifyOnError: !1,
                    location: e3.Hx.CONTENT_INVENTORY_MEMBERLIST,
                }),
                l?.(i, n);
        },
        eE = M ?? et ?? ei,
        eI = () => {
            U((e) => !e), ed && V?.focus();
        },
        eL = (e) => {
            eh(e), e && V?.focus();
        };
    return (0, l.jsx)("div", {
        ref: F,
        style: { pointerEvents: z ? "none" : "all" },
        children: (0, l.jsx)(f.O, {
            containerRef: F,
            children: (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(e2, { sent: $, shown: z, className: e4.Jt }),
                    eE ??
                        (0, l.jsx)(eZ, {
                            children: (0, l.jsxs)("div", {
                                className: e4.T7,
                                children: [
                                    (0, l.jsx)(tn, { channel: h, onClickSuggestion: ex }),
                                    (0, l.jsx)(J, { onSelectEmoji: ex }),
                                ],
                            }),
                        }),
                    (0, l.jsxs)("div", {
                        className: ed ? e4.P2 : e4.VE,
                        children: [
                            (0, l.jsx)(q, {
                                placeholder: ef,
                                onEnter: eC,
                                setEditorRef: (e) => G(e),
                                channel: D ? h : void 0,
                                showEmojiButton: null != eE,
                                className: e4.N8,
                                autoFocus: !1,
                                renderAttachButton: H
                                    ? () =>
                                          (0, l.jsx)(m.m, {
                                              text: eg,
                                              children: (0, l.jsx)(g.D, {
                                                  className: e4.wD,
                                                  onClick: eI,
                                                  children: D
                                                      ? (0, l.jsx)(x.N, { size: "custom", width: 20, height: 20 })
                                                      : (0, l.jsx)(C.X, { size: "custom", width: 20, height: 20 }),
                                              }),
                                          })
                                    : void 0,
                            }),
                            ea &&
                                (0, l.jsx)(g.D, {
                                    onClick: () => eL(!1),
                                    className: e4.i3,
                                    children: (0, l.jsx)(A.P, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: d.A.colors.ICON_STRONG,
                                    }),
                                }),
                        ],
                    }),
                    !1 === ed &&
                        (0, l.jsxs)("div", {
                            className: e4.fh,
                            children: [
                                !eu &&
                                    (0, l.jsx)(
                                        E.$,
                                        {
                                            fullWidth: !0,
                                            variant: "secondary",
                                            onClick: () => eL(!0),
                                            size: "md",
                                            text: K.intl.string(K.t.OAJQlP),
                                        },
                                        "toggleMessageMode",
                                    ),
                                es,
                            ],
                        }),
                ],
            }),
        }),
    });
}
let tn = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [s, a] = i.useState(!1);
    i.useEffect(() => {
        a(!0);
    }, []);
    let r = !!M.A.keyboardModeEnabled && !s,
        o = (0, et.Fj)(t?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, eL._O)({ id: e.id, animated: e.animated, size: 58 }) },
            );
    return (0, l.jsx)(l.Fragment, {
        children: o.map((e) => {
            let { emoji: t, url: i } = e;
            return null != i
                ? (0, l.jsx)(
                      "div",
                      {
                          children: (0, l.jsx)(m.m, {
                              asContainer: !0,
                              text: K.intl.formatToPlainString(K.t.kilW3l, { emojiName: t.name }),
                              position: "top",
                              "aria-label": K.intl.formatToPlainString(K.t.kilW3l, { emojiName: t.name }),
                              shouldShow: !r && void 0,
                              children: (0, l.jsx)(eI, {
                                  emoji: t,
                                  isDisabled: !s,
                                  onClick: () => n({ emoji: t }),
                                  className: e4.Zg,
                              }),
                          }),
                      },
                      t.name,
                  )
                : null;
        }),
    });
};
function tl(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: s, onUserPopoutClosed: r } = e,
        o = t?.guild_id,
        { displayParticipants: u, participant1: d, participant2: m, numOtherParticipants: p } = (0, eG.A)(i, 3),
        f = (0, c.bG)([eT.default], () => eT.default.getUser(i.author_id)),
        { streamPreviewUrl: g } = (0, eF.A)(i),
        x = [d, m];
    return (0, l.jsxs)("div", {
        className: e4.MH,
        children: [
            (0, l.jsxs)("div", {
                className: e4.WP,
                children: [
                    (0, l.jsx)(h.A, {
                        maxUsers: 3,
                        users: u,
                        guildId: o,
                        size: I._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: r,
                    }),
                    (0, l.jsx)(y.h, { size: 8, horizontal: !0 }),
                    (0, l.jsx)(v.D, {
                        variant: "heading-sm/normal",
                        className: a()(e4.Xn, e4.zA),
                        children: K.intl.format(n, {
                            user0: ew.Ay.getName(o, t?.id, x[0]),
                            user1: ew.Ay.getName(o, t?.id, x[1]),
                            countOthers: p,
                            countOthersHook: (e, t) =>
                                (0, l.jsx)(
                                    S.E,
                                    { variant: "text-sm/medium", className: a()(e4.Mj, e4.nk), children: e },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, l.jsx)(
                                    eP.A,
                                    {
                                        textClassName: a()(e4.Mj, e4.nk),
                                        text: e,
                                        user: x[0],
                                        channel: t,
                                        onPopoutClosed: r,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                            name1Hook: (e, n) =>
                                (0, l.jsx)(
                                    eP.A,
                                    {
                                        textClassName: a()(e4.Mj, e4.nk),
                                        text: e,
                                        user: x[1],
                                        channel: t,
                                        onPopoutClosed: r,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                        }),
                    }),
                ],
            }),
            null != g && (0, l.jsx)($.Ay, { size: $.Ay.Sizes.SMALL }),
            null != f && (0, l.jsx)(eq.A, { user: f, channel: t, guildId: o, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function ti(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, l.jsx)(g.D, { className: e4.Zw, onClick: n, children: t });
}
function ts(e) {
    let {
            title: t,
            subtitle: n,
            badges: i,
            children: s,
            onClickThumbnail: r,
            onClickTitle: o,
            onClickSubtitle: u,
            headerIcons: d,
            disableGameProfileLinks: h = !1,
            showCoverImage: m = !0,
            onUserPopoutClosed: p,
            trackRankingItemInteraction: f,
            ...g
        } = e,
        { entry: x } = g,
        C = (0, ek.zD)(x),
        A = C ? x.extra?.application_id : void 0,
        E = (0, eh.W)();
    null != E && (A = E);
    let I = (0, ei.A)(
            {
                location: "ContentPopout",
                applicationId: h ? void 0 : A,
                source: el.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: x.author_id,
            },
            { onOpened: () => f?.(e6.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: N, smallImage: j } = (0, eM.nO)({ entry: x, showCoverImage: m }),
        _ = (0, ed.w)({ location: "content_inventory" }),
        T = (0, c.bG)([eu.A], () => eu.A.getDetectableIdsToApplicationIds()),
        b = C ? I : void 0;
    return (0, l.jsxs)("div", {
        className: e4.au,
        children: [
            (0, l.jsx)(tl, { disableGameProfileLinks: h, ...g, onUserPopoutClosed: p }),
            (0, l.jsxs)(e9, {
                backgroundImgSrc: N?.src,
                children: [
                    (0, l.jsxs)("div", {
                        className: e4.CG,
                        children: [
                            (0, l.jsx)("div", {
                                className: e4.Fb,
                                children: (0, l.jsx)(eD.d, {
                                    image: N,
                                    smallImage: j,
                                    aspectRatio: m ? "none" : void 0,
                                    onClick: r ?? b,
                                    size: eD.w.SIZE_72,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: e4.iC,
                                children: [
                                    (0, l.jsx)(ti, {
                                        onClick: o ?? b,
                                        children: (0, l.jsx)(v.D, {
                                            variant: "heading-md/medium",
                                            className: a()(e4.$2, { [e4.bC]: null != d }),
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, l.jsx)(ti, {
                                              onClick: u ?? b,
                                              children: (0, l.jsx)(S.E, {
                                                  variant: "text-sm/normal",
                                                  className: e4.LG,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(y.h, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, l.jsx)("div", { className: e4.hO, children: d }),
                        ],
                    }),
                    s,
                ],
            }),
            _ && null != A && null != T[A]
                ? (0, l.jsx)(e8, {
                      className: e4.zu,
                      rewardOfferNoticeClassName: e4.PU,
                      applicationId: A,
                      userIds: [x.author_id],
                      location: "content_popout",
                      guildId: g.channel?.guild_id,
                      channelId: g.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: e7.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function ta(e) {
    let {
            title: t,
            subtitle: n,
            badges: s,
            children: a,
            stream: r,
            onClickThumbnail: o,
            onClickTitle: u,
            onClickSubtitle: d,
            onUserPopoutClosed: h,
            trackRankingItemInteraction: m,
            ...p
        } = e,
        f = (0, c.bG)([ev.A], () => ev.A.getChannel(r?.channelId)),
        [g] = i.useMemo(() => (0, es.eo)(f, eb.A, eS.A, eN.A, en.default), [f]),
        { entry: x } = p,
        C = (0, ek.zD)(x),
        A = C ? x.extra?.application_id : void 0,
        E = (0, eh.W)();
    null != E && (A = E);
    let I = (0, ei.A)(
            {
                location: "ContentPopout",
                applicationId: A,
                source: el.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: x.author_id,
            },
            { onOpened: () => m?.(e6.PA.OPENED_GAME_PROFILE) },
        ),
        N = C ? I : void 0,
        { activity: j, activityApplication: _, fallbackApplication: T } = (0, eV.A)(x),
        { largeImage: b, smallImage: R } = (0, eM.D8)(j, _ ?? T),
        { largeImage: O } = (0, eM.nO)({ entry: x }),
        M = (0, ed.w)({ location: "content_inventory" }),
        k = (0, c.bG)([eu.A], () => eu.A.getDetectableIdsToApplicationIds());
    return (0, l.jsxs)("div", {
        className: e4.au,
        children: [
            (0, l.jsx)(tl, { ...p, onUserPopoutClosed: h }),
            (0, l.jsxs)(e9, {
                backgroundImgSrc: O?.src,
                className: e4.uR,
                children: [
                    (0, l.jsx)(ti, {
                        onClick: g
                            ? () => {
                                  L.default.selectVoiceChannel(r.channelId), (0, w.Nl)(r);
                              }
                            : void 0,
                        children: (0, l.jsxs)("div", {
                            className: e4.nh,
                            children: [
                                (0, l.jsx)(ea.A, { className: e4.j7, stream: r }),
                                g &&
                                    (0, l.jsx)("div", {
                                        className: e4.NE,
                                        children: (0, l.jsx)(S.E, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: K.intl.string(K.t["7Xq/nV"]),
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: e4.$6,
                        children: [
                            null != b &&
                                (0, l.jsx)("div", {
                                    className: e4.Fb,
                                    children: (0, l.jsx)(eD.d, {
                                        image: b,
                                        smallImage: R,
                                        onClick: o ?? N,
                                        size: eD.w.SIZE_72,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                className: e4.gv,
                                children: [
                                    (0, l.jsx)(ti, {
                                        onClick: u ?? N,
                                        children: (0, l.jsx)(v.D, {
                                            variant: "heading-md/semibold",
                                            className: e4.nk,
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, l.jsx)(ti, {
                                              onClick: d ?? N,
                                              children: (0, l.jsx)(S.E, {
                                                  variant: "text-sm/normal",
                                                  className: e4.zA,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(y.h, { size: 8 }),
                                    s,
                                ],
                            }),
                        ],
                    }),
                    a,
                ],
            }),
            M && null != A && null != k[A]
                ? (0, l.jsx)(e8, {
                      className: e4.zu,
                      applicationId: A,
                      userIds: [x.author_id],
                      location: "content_popout",
                      guildId: p.channel?.guild_id,
                      channelId: p.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: e7.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
