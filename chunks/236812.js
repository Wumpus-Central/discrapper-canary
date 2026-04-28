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
    _ = n(276293),
    x = n(935063),
    C = n(789645),
    A = n(821609),
    E = n(778712),
    I = n(696986),
    v = n(534514),
    y = n(834730),
    b = n(320448),
    S = n(97808),
    N = n(738188),
    j = n(983851),
    T = n(31300),
    w = n(308528),
    R = n(367513),
    L = n(956793),
    k = n(401843),
    O = n(775602),
    M = n(969151),
    P = n(922016),
    D = n(736653),
    U = n(355622),
    V = n(408018),
    G = n(201349),
    F = n(375499),
    B = n(429433),
    H = n(95701),
    W = n(652215),
    K = n(985018),
    z = n(389605);
let Z = (0, H.createChannelRecord)({ id: "1", type: W.rbe.DM });
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
        _ = U.oU.ATOMIC_REACTOR_REPLY_INPUT,
        x = i.useRef(null);
    return (0, l.jsx)(G.Ay, {
        ref: x,
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
        type: r ? { ..._, emojis: { button: !0 } } : _,
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
            if (null == x.current) return "top";
            let e = x.current.getBoundingClientRect(),
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
                            children: (0, l.jsx)(B.C, {
                                messageId: W.dJq,
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
    $ = n(262763),
    X = n(402216),
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
var e_ = n(7584);
n(850992), n(690521);
var ex = n(403362);
n(806931);
var eC = n(307731);
n(650583);
var eA = n(317299);
function eE(e) {
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
                            className: a()(eA.Zg, r, { [eA.c4]: n }),
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
eC.EmojiIntention.CHAT,
    [
        e_.Ay.getByName("thumbsup"),
        e_.Ay.getByName("eyes"),
        e_.Ay.getByName("laughing"),
        e_.Ay.getByName("watermelon"),
        e_.Ay.getByName("fork_and_knife"),
        e_.Ay.getByName("yum"),
    ].filter(ex.Vq);
var eI = n(636585),
    ev = n(734057),
    ey = n(71393),
    eb = n(576705),
    eS = n(994500),
    eN = n(543465),
    ej = n(287809),
    eT = n(977997),
    ew = n(607567),
    eR = n(954571),
    eL = n(486020),
    ek = n(562153),
    eO = n(939341),
    eM = n(20805),
    eP = n(22869),
    eD = n(623671),
    eU = n(428249),
    eV = n(327098),
    eG = n(576757),
    eF = n(202195),
    eB = n(140651),
    eH = n(43105),
    eW = n(932001),
    eK = n(49999),
    ez = n(345394);
let eZ = (e) => {
    let { children: t } = e,
        [n, s] = (0, eW.kn)([u.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
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
                  (0, l.jsx)(eH.A, {
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
    e$ = n(97483),
    eX = n(289873),
    eQ = n(401871),
    e0 = n(861173);
let e1 = () =>
        (0, l.jsxs)("div", {
            className: e0.oR,
            children: [
                (0, l.jsx)(eX.y, { type: eX.t.SPINNING_CIRCLE_SIMPLE, className: eQ.S }),
                (0, l.jsx)(y.E, {
                    color: "text-strong",
                    variant: "text-md/normal",
                    children: K.intl.string(K.t["5z/hlE"]),
                }),
            ],
        }),
    e2 = (e) => {
        let { shown: t, sent: n, className: i } = e,
            s = (0, c.bG)([O.A], () => O.A.useReducedMotion),
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
                                  type: e$.Ck.SUCCESS,
                                  id: "success_message_toast",
                              })
                            : (0, l.jsx)(eY.y, {
                                  message: "",
                                  type: e$.Ck.CUSTOM,
                                  id: "custom_loading_message_toast",
                                  options: { component: (0, l.jsx)(e1, {}) },
                              }),
                    }),
            ),
        });
    };
var e6 = n(424994),
    e3 = n(381941),
    e4 = n(699976),
    e7 = n(994063);
let e8 = (0, Q.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("32292"),
            n.e("28367"),
            n.e("45174"),
            n.e("85519"),
            n.e("11871"),
            n.e("37266"),
            n.e("55057"),
            n.e("14976"),
            n.e("63229"),
            n.e("31988"),
            n.e("55343"),
            n.e("48900"),
            n.e("20735"),
            n.e("27846"),
            n.e("8306"),
            n.e("10567"),
            n.e("12542"),
            n.e("84317"),
            n.e("93858"),
            n.e("98352"),
            n.e("4986"),
            n.e("20667"),
        ]).then(n.bind(n, 963614)),
    webpackId: 963614,
});
function e5(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: e7.SW, children: t });
}
function e9(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: s = {} } = e,
        { primaryColor: r, secondaryColor: o } = (0, eB.A)(n);
    return (
        null != n && (s.background = `linear-gradient(45deg, ${r}, ${o})`),
        (0, l.jsx)(p.N, {
            theme: W.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, l.jsx)("div", { className: a()(e7.ZK, e, i), style: s, children: t }),
        })
    );
}
function te(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: e7.$m, children: t });
}
function tt(e) {
    var t;
    let n,
        s,
        a,
        r,
        { channel: h, user: p, onReaction: v, entry: L, buttons: k = [], header: O, onVoiceChannelPreview: P } = e,
        [D, U] = i.useState(!1),
        [V, G] = i.useState(null),
        F = i.useRef(null),
        B = (0, c.bG)(
            [eb.A],
            () => null != h && W.kvI.CONTENT_ENTRY_EMBEDS.has(h.type) && eb.A.can(W.xBc.SEND_MESSAGES, h),
        ),
        [z, Z] = i.useState(!1),
        [X, Q] = i.useState(!1),
        { voiceBar: et, joinVoiceButton: en } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: s } = e,
                { streamPreviewUrl: a, channel: r } = (0, eF.A)(n),
                o = (0, Y.Ay)(r),
                { needSubscriptionToAccess: u } = (0, eo.A)(t?.id),
                h = (0, c.bG)([ey.A], () => (null != r ? ey.A.getGuild(r.guild_id) : void 0)),
                p = (0, c.yK)([ew.Ay], () => (null != r ? ew.Ay.getVoiceStatesForChannel(r) : []), [r]),
                f = (0, c.bG)([eT.A], () => eT.A.isInChannel(r?.id)),
                _ = i.useMemo(() => {
                    for (let e of p) {
                        let t = ev.A.getDMFromUserId(e.user.id),
                            n = null != t && eN.Ay.isChannelMuted(null, t),
                            l = eS.A.isBlockedOrIgnored(e.user.id);
                        if (n || l) return !0;
                    }
                    return !1;
                }, [p]);
            if (null == r || null == h) return { voiceBar: void 0, joinVoiceButton: void 0 };
            let x = null != a,
                C = (e) => {
                    let { children: t, text: n, hasRestrictedOrMutedVCParticipant: i } = e,
                        s = i
                            ? (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)(N.i, { size: "custom", width: 13, height: 13, className: e7.vb }),
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
                            className: e7.kP,
                            children: [
                                (0, l.jsx)(C, {
                                    text: K.intl.string(K.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: _,
                                    children: (0, l.jsxs)(g.D, {
                                        "aria-label": K.intl.string(K.t.WIVYqJ),
                                        onClick: () => {
                                            R.A.updateChatOpen(r.id, !0), (0, ec.iN)(r.id), s?.(r);
                                        },
                                        className: e7.I3,
                                        children: [
                                            (0, l.jsx)(er.Ay, {
                                                guild: h,
                                                size: er.Ay.Sizes.SMOL,
                                                className: e7.O9,
                                                active: !0,
                                            }),
                                            (0, l.jsx)(b._, {
                                                size: "xxs",
                                                color: d.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, l.jsx)(j.H, { size: "xs", color: d.A.colors.TEXT_DEFAULT }),
                                            (0, l.jsx)(y.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: e7.NR,
                                                children: o,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)(eI.A, {
                                    guildId: h.id,
                                    users: p,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, l.jsx)(S.eu, {
                                            src: e.user.getAvatarURL(h.id, 16),
                                            size: E._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: t,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)("div", {
                                            className: e7.V9,
                                            children: (0, l.jsx)(y.E, {
                                                variant: "text-xxs/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(I.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: f
                    ? null
                    : (0, l.jsx)(C, {
                          hasRestrictedOrMutedVCParticipant: _,
                          children: (0, l.jsx)(A.$, {
                              onClick: () => {
                                  $.A.handleVoiceConnect({
                                      channel: r,
                                      connected: f,
                                      needSubscriptionToAccess: u,
                                      routeDirectlyToChannel: !0,
                                  });
                              },
                              fullWidth: !0,
                              text: x ? K.intl.string(K.t.I6JG46) : K.intl.string(K.t.VJlc0S),
                              icon: x ? T.k : j.H,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: h, entry: L, onVoiceChannelPreview: P }),
        { embeddedActivity: el } = (0, eV.A)(L),
        ei =
            ((t = el),
            (n = (0, c.bG)([ey.A], () => ey.A.getGuild((0, M.D)(t?.location)))),
            (s = (0, c.bG)([ev.A], () => ev.A.getChannel((0, M.H)(t?.location)))),
            (a = (0, c.yK)([ej.default], () => t?.participants?.map((e) => ej.default.getUser(e.userId)) ?? [])),
            (r = (0, Y.Ay)(s)),
            null != t && null != n && null != s && H.k3.has(s.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("div", {
                              className: e7.kP,
                              children: [
                                  (0, l.jsxs)(g.D, {
                                      "aria-label": K.intl.string(K.t["W/A4Qp"]),
                                      onClick: () => (0, ec.iN)(s.id),
                                      className: e7.I3,
                                      children: [
                                          (0, l.jsx)(er.Ay, {
                                              guild: n,
                                              size: er.Ay.Sizes.SMOL,
                                              className: e7.O9,
                                              active: !0,
                                          }),
                                          (0, l.jsx)(b._, { size: "xxs", color: d.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                                          (0, l.jsx)(_.N, { size: "xs", color: d.A.colors.TEXT_DEFAULT }),
                                          (0, l.jsx)(y.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: e7.NR,
                                              children: r,
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(eI.A, {
                                      guildId: n.id,
                                      users: a,
                                      max: 3,
                                      renderUser: (e, t) =>
                                          (0, l.jsx)(S.eu, {
                                              src: e.getAvatarURL(n.id, 16),
                                              size: E._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: t,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)("div", {
                                              className: e7.V9,
                                              children: (0, l.jsx)(y.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(I.h, { size: 16 }),
                      ],
                  })
                : null),
        es = null != en && 0 === k.length ? [en] : k,
        ea = es.length > 0,
        eu = es.length >= 2,
        [ed, eh] = i.useState(!ea),
        em = ek.Ay.getName(h?.guild_id, h?.id, p),
        ep = (0, Y.Ay)(h, !0),
        ef =
            null != h && D
                ? K.intl.formatToPlainString(K.t["8lzR/R"], { channel: ep })
                : K.intl.formatToPlainString(K.t["4c+CAx"], { channel: `@${em}` }),
        eg = D ? K.intl.string(K.t.Z2CUgn) : K.intl.string(K.t.XLGiTG),
        e_ = async (e) => {
            let t,
                { emoji: n } = e;
            if (null != n) {
                if (
                    (eR.default.track(W.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
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
                    let e = await w.A.getOrEnsurePrivateChannel(p.id);
                    t = ev.A.getChannel(e) ?? null;
                }
                return (
                    o()(null != t, "Send channel must be defined"),
                    eC({
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
        ex = async (e) => {
            let t;
            if (((0, ee.Dr)(u.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), D))
                o()(null != h, "shareToChannelMode should only be true if a valid channel is passed"), (t = h);
            else {
                let e = await w.A.openPrivateChannel({ recipientIds: p.id }),
                    n = ev.A.getChannel(e);
                o()(null != n, "DM channel must be defined"), (t = n);
            }
            let n = t.type === W.rbe.DM ? e6.PA.DM_REACTION_MESSAGE_SENT : e6.PA.CHANNEL_REACTION_MESSAGE_SENT;
            return eC({ reply: e, sendToChannel: t, interactionType: n, onComplete: v, requiresChannelReadiness: !0 });
        },
        eC = async (e) => {
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
        eA = O ?? et ?? ei,
        eE = () => {
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
                    (0, l.jsx)(e2, { sent: X, shown: z, className: e7.Jt }),
                    eA ??
                        (0, l.jsx)(eZ, {
                            children: (0, l.jsxs)("div", {
                                className: e7.T7,
                                children: [
                                    (0, l.jsx)(tn, { channel: h, onClickSuggestion: e_ }),
                                    (0, l.jsx)(J, { onSelectEmoji: e_ }),
                                ],
                            }),
                        }),
                    (0, l.jsxs)("div", {
                        className: ed ? e7.P2 : e7.VE,
                        children: [
                            (0, l.jsx)(q, {
                                placeholder: ef,
                                onEnter: ex,
                                setEditorRef: (e) => G(e),
                                channel: D ? h : void 0,
                                showEmojiButton: null != eA,
                                className: e7.N8,
                                autoFocus: !1,
                                renderAttachButton: B
                                    ? () =>
                                          (0, l.jsx)(m.m, {
                                              text: eg,
                                              children: (0, l.jsx)(g.D, {
                                                  className: e7.wD,
                                                  onClick: eE,
                                                  children: D
                                                      ? (0, l.jsx)(_.N, { size: "custom", width: 20, height: 20 })
                                                      : (0, l.jsx)(x.X, { size: "custom", width: 20, height: 20 }),
                                              }),
                                          })
                                    : void 0,
                            }),
                            ea &&
                                (0, l.jsx)(g.D, {
                                    onClick: () => eL(!1),
                                    className: e7.i3,
                                    children: (0, l.jsx)(C.P, {
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
                            className: e7.fh,
                            children: [
                                !eu &&
                                    (0, l.jsx)(
                                        A.$,
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
    let r = !!O.A.keyboardModeEnabled && !s,
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
                              children: (0, l.jsx)(eE, {
                                  emoji: t,
                                  isDisabled: !s,
                                  onClick: () => n({ emoji: t }),
                                  className: e7.Zg,
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
        f = (0, c.bG)([ej.default], () => ej.default.getUser(i.author_id)),
        { streamPreviewUrl: g } = (0, eF.A)(i),
        _ = [d, m];
    return (0, l.jsxs)("div", {
        className: e7.MH,
        children: [
            (0, l.jsxs)("div", {
                className: e7.WP,
                children: [
                    (0, l.jsx)(h.A, {
                        maxUsers: 3,
                        users: u,
                        guildId: o,
                        size: E._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: r,
                    }),
                    (0, l.jsx)(I.h, { size: 8, horizontal: !0 }),
                    (0, l.jsx)(v.D, {
                        variant: "heading-sm/normal",
                        className: a()(e7.Xn, e7.zA),
                        children: K.intl.format(n, {
                            user0: ek.Ay.getName(o, t?.id, _[0]),
                            user1: ek.Ay.getName(o, t?.id, _[1]),
                            countOthers: p,
                            countOthersHook: (e, t) =>
                                (0, l.jsx)(
                                    y.E,
                                    { variant: "text-sm/medium", className: a()(e7.Mj, e7.nk), children: e },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, l.jsx)(
                                    eP.A,
                                    {
                                        textClassName: a()(e7.Mj, e7.nk),
                                        text: e,
                                        user: _[0],
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
                                        textClassName: a()(e7.Mj, e7.nk),
                                        text: e,
                                        user: _[1],
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
            null != g && (0, l.jsx)(X.Ay, { size: X.Ay.Sizes.SMALL }),
            null != f && (0, l.jsx)(eq.A, { user: f, channel: t, guildId: o, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function ti(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, l.jsx)(g.D, { className: e7.Zw, onClick: n, children: t });
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
        { entry: _ } = g,
        x = (0, eM.zD)(_),
        C = x ? _.extra?.application_id : void 0,
        A = (0, eh.W)();
    null != A && (C = A);
    let E = (0, ei.A)(
            {
                location: "ContentPopout",
                applicationId: h ? void 0 : C,
                source: el.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: _.author_id,
            },
            { onOpened: () => f?.(e6.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: b, smallImage: S } = (0, eO.nO)({ entry: _, showCoverImage: m }),
        N = (0, ed.w)({ location: "content_inventory" }),
        j = (0, c.bG)([eu.A], () => eu.A.getDetectableIdsToApplicationIds()),
        T = x ? E : void 0;
    return (0, l.jsxs)("div", {
        className: e7.au,
        children: [
            (0, l.jsx)(tl, { disableGameProfileLinks: h, ...g, onUserPopoutClosed: p }),
            (0, l.jsxs)(e9, {
                backgroundImgSrc: b?.src,
                children: [
                    (0, l.jsxs)("div", {
                        className: e7.CG,
                        children: [
                            (0, l.jsx)("div", {
                                className: e7.Fb,
                                children: (0, l.jsx)(eD.d, {
                                    image: b,
                                    smallImage: S,
                                    aspectRatio: m ? "none" : void 0,
                                    onClick: r ?? T,
                                    size: eD.w.SIZE_72,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: e7.iC,
                                children: [
                                    (0, l.jsx)(ti, {
                                        onClick: o ?? T,
                                        children: (0, l.jsx)(v.D, {
                                            variant: "heading-md/medium",
                                            className: a()(e7.$2, { [e7.bC]: null != d }),
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, l.jsx)(ti, {
                                              onClick: u ?? T,
                                              children: (0, l.jsx)(y.E, {
                                                  variant: "text-sm/normal",
                                                  className: e7.LG,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(I.h, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, l.jsx)("div", { className: e7.hO, children: d }),
                        ],
                    }),
                    s,
                ],
            }),
            N && null != C && null != j[C]
                ? (0, l.jsx)(e8, {
                      className: e7.zu,
                      rewardOfferNoticeClassName: e7.PU,
                      applicationId: C,
                      userIds: [_.author_id],
                      location: "content_popout",
                      guildId: g.channel?.guild_id,
                      channelId: g.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: e4.Z.SIZE_90,
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
        [g] = i.useMemo(() => (0, es.eo)(f, eT.A, ey.A, eb.A, en.default), [f]),
        { entry: _ } = p,
        x = (0, eM.zD)(_),
        C = x ? _.extra?.application_id : void 0,
        A = (0, eh.W)();
    null != A && (C = A);
    let E = (0, ei.A)(
            {
                location: "ContentPopout",
                applicationId: C,
                source: el.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: _.author_id,
            },
            { onOpened: () => m?.(e6.PA.OPENED_GAME_PROFILE) },
        ),
        b = x ? E : void 0,
        { activity: S, activityApplication: N, fallbackApplication: j } = (0, eV.A)(_),
        { largeImage: T, smallImage: w } = (0, eO.D8)(S, N ?? j),
        { largeImage: R } = (0, eO.nO)({ entry: _ }),
        O = (0, ed.w)({ location: "content_inventory" }),
        M = (0, c.bG)([eu.A], () => eu.A.getDetectableIdsToApplicationIds());
    return (0, l.jsxs)("div", {
        className: e7.au,
        children: [
            (0, l.jsx)(tl, { ...p, onUserPopoutClosed: h }),
            (0, l.jsxs)(e9, {
                backgroundImgSrc: R?.src,
                className: e7.uR,
                children: [
                    (0, l.jsx)(ti, {
                        onClick: g
                            ? () => {
                                  L.default.selectVoiceChannel(r.channelId), (0, k.Nl)(r);
                              }
                            : void 0,
                        children: (0, l.jsxs)("div", {
                            className: e7.nh,
                            children: [
                                (0, l.jsx)(ea.A, { className: e7.j7, stream: r }),
                                g &&
                                    (0, l.jsx)("div", {
                                        className: e7.NE,
                                        children: (0, l.jsx)(y.E, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: K.intl.string(K.t["7Xq/nV"]),
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: e7.$6,
                        children: [
                            null != T &&
                                (0, l.jsx)("div", {
                                    className: e7.Fb,
                                    children: (0, l.jsx)(eD.d, {
                                        image: T,
                                        smallImage: w,
                                        onClick: o ?? b,
                                        size: eD.w.SIZE_72,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                className: e7.gv,
                                children: [
                                    (0, l.jsx)(ti, {
                                        onClick: u ?? b,
                                        children: (0, l.jsx)(v.D, {
                                            variant: "heading-md/semibold",
                                            className: e7.nk,
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, l.jsx)(ti, {
                                              onClick: d ?? b,
                                              children: (0, l.jsx)(y.E, {
                                                  variant: "text-sm/normal",
                                                  className: e7.zA,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(I.h, { size: 8 }),
                                    s,
                                ],
                            }),
                        ],
                    }),
                    a,
                ],
            }),
            O && null != C && null != M[C]
                ? (0, l.jsx)(e8, {
                      className: e7.zu,
                      applicationId: C,
                      userIds: [_.author_id],
                      location: "content_popout",
                      guildId: p.channel?.guild_id,
                      channelId: p.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: e4.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
