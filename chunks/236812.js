"use strict";
n.d(t, { YN: () => e8, Fl: () => ta, Eh: () => te, fD: () => tt, BC: () => ts });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o);
n(340287);
var d = n(17928),
    _ = n(554146),
    u = n(661531),
    c = n(342952),
    E = n(990078),
    h = n(43990),
    m = n(315710),
    f = n(939249),
    g = n(276293),
    p = n(935063),
    A = n(789645),
    I = n(821609),
    T = n(778712),
    S = n(696986),
    N = n(534514),
    C = n(834730),
    R = n(320448),
    O = n(97808),
    y = n(738188),
    v = n(983851),
    D = n(31300),
    L = n(308528),
    b = n(367513),
    w = n(956793),
    P = n(401843),
    k = n(775602),
    M = n(969151),
    U = n(922016),
    x = n(736653),
    G = n(355622),
    V = n(408018),
    F = n(201349),
    B = n(375499),
    H = n(429433),
    j = n(95701),
    W = n(652215),
    Y = n(985018),
    K = n(389605);
let z = (0, j.createChannelRecord)({ id: "1", type: W.rbe.DM });
function $(e) {
    let {
            placeholder: t,
            onEnter: n,
            setEditorRef: s,
            showEmojiButton: o = !1,
            renderAttachButton: l,
            autoFocus: d = !0,
            onFocus: _,
            channel: u,
            className: c,
        } = e,
        [E, h] = r.useState(""),
        [m, f] = r.useState((0, V.x7)("")),
        g = G.oU.ATOMIC_REACTOR_REPLY_INPUT,
        p = r.useRef(null);
    return (0, i.jsx)(F.Ay, {
        ref: p,
        placeholder: t,
        editorClassName: c,
        className: a()(K.N8, c),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: u ?? z,
        onChange: (e, t, n) => {
            h(t), f(n);
        },
        type: o ? { ...g, emojis: { button: !0 } } : g,
        textValue: E,
        richValue: m,
        onSubmit: (e) => {
            let { value: t } = e;
            return t.length > 200
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (n(t), h(""), f((0, V.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
        },
        setEditorRef: s,
        focused: d,
        onFocus: _,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: (() => {
            if (null == p.current) return "top";
            let e = p.current.getBoundingClientRect(),
                t = window.innerHeight;
            return e.top < t / 2 ? "bottom" : "top";
        })(),
        renderAttachButton: l,
    });
}
let q = (e) => {
    var t;
    let { onSelectEmoji: n, onClick: s } = e,
        a = (0, x.Ay)(),
        [o, l] = r.useState(!1),
        d = r.useRef(null),
        _ = r.useRef(null);
    return (
        (t = () => l(!1)),
        r.useEffect(() => {
            let e = (e) => {
                    "Escape" === e.key && t();
                },
                n = (e) => {
                    null != e.target && (d?.current?.contains(e?.target) || t());
                };
            return (
                document.addEventListener("keydown", e),
                document.addEventListener("mousedown", n),
                () => {
                    document.removeEventListener("keydown", e), document.removeEventListener("mousedown", n);
                }
            );
        }, [t, d]),
        (0, i.jsx)(U.Y, {
            targetElementRef: _,
            align: "right",
            position: "top",
            shouldShow: o,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, i.jsx)(h.N, {
                    theme: a,
                    children: (e) =>
                        (0, i.jsx)("div", {
                            className: e,
                            ref: d,
                            children: (0, i.jsx)(H.C, {
                                messageId: W.dJq,
                                channel: z,
                                closePopout: () => {
                                    l(!1);
                                },
                                onSelectEmoji: (e) => {
                                    let { emoji: t, willClose: i, isBurst: r } = e;
                                    null != t && (n({ emoji: t, willClose: i, isBurst: r }), l(!1));
                                },
                            }),
                        }),
                }),
            children: () =>
                (0, i.jsx)(E.m, {
                    text: Y.intl.string(Y.t.lfIHs4),
                    children: (0, i.jsx)("div", {
                        ref: _,
                        className: K.mJ,
                        children: (0, i.jsx)(B.A, {
                            active: !1,
                            tabIndex: 0,
                            onClick: () => {
                                s?.(), l(!0);
                            },
                        }),
                    }),
                }),
        })
    );
};
var X = n(47167),
    Z = n(262763),
    Q = n(402216),
    J = n(268218),
    ee = n(826673),
    et = n(822123),
    en = n(643501),
    ei = n(409626),
    er = n(692969),
    es = n(279250),
    ea = n(607407),
    eo = n(548118),
    el = n(721592),
    ed = n(378570),
    e_ = n(832163),
    eu = n(565688),
    ec = n(533562);
n(735438);
var eE = n(419354),
    eh = n(805901),
    em = n(565645);
n(915089);
var ef = n(713517);
n(267889);
var eg = n(7584);
n(850992), n(690521);
var ep = n(403362);
n(806931);
var eA = n(307731);
n(650583);
var eI = n(317299);
function eT(e) {
    let { emoji: t, isDisabled: n = !1, onClick: s, className: o } = e,
        l = r.useRef(null),
        d = (0, ef.M)(l);
    return (0, i.jsx)("span", {
        ref: l,
        children: (0, i.jsx)(f.D, {
            onClick: s,
            focusProps: { enabled: !n },
            children: (0, i.jsx)(eh.c, {
                config: B.B,
                from: { value: 0 },
                to: { value: +!!d },
                children: (e) => {
                    let { value: r } = e;
                    return (0, i.jsx)(eE.animated.div, {
                        style: { transform: r.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, i.jsx)(em.A, {
                            className: a()(eI.Zg, o, { [eI.c4]: n }),
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
        eg.Ay.getByName("thumbsup"),
        eg.Ay.getByName("eyes"),
        eg.Ay.getByName("laughing"),
        eg.Ay.getByName("watermelon"),
        eg.Ay.getByName("fork_and_knife"),
        eg.Ay.getByName("yum"),
    ].filter(ep.Vq);
var eS = n(636585),
    eN = n(734057),
    eC = n(71393),
    eR = n(576705),
    eO = n(994500),
    ey = n(543465),
    ev = n(287809),
    eD = n(977997),
    eL = n(607567),
    eb = n(954571),
    ew = n(486020),
    eP = n(562153),
    ek = n(939341),
    eM = n(20805),
    eU = n(22869),
    ex = n(623671),
    eG = n(428249),
    eV = n(327098),
    eF = n(576757),
    eB = n(202195),
    eH = n(140651),
    ej = n(43105),
    eW = n(932001),
    eY = n(49999),
    eK = n(345394);
let ez = (e) => {
    let { children: t } = e,
        [n, s] = (0, eW.kn)([_.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [a, o] = r.useState(!1),
        l = r.useRef(null);
    r.useEffect(() => {
        let e = setTimeout(() => {
            o(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let d = r.useCallback(() => {
        s(eY.i.USER_DISMISS);
    }, [s]);
    return n !== _.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? t
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)("div", { ref: l, children: t }),
                  (0, i.jsx)(ej.A, {
                      targetElementRef: l,
                      shouldShow: a,
                      onRequestClose: d,
                      position: "left",
                      title: Y.intl.string(Y.t.V5y3qZ),
                      body: Y.intl.string(Y.t.eSDHDk),
                      graphic: { type: "image", src: eK.A },
                  }),
              ],
          });
};
var e$ = n(315246),
    eq = n(866323),
    eX = n(857250),
    eZ = n(97483),
    eQ = n(289873),
    eJ = n(401871),
    e0 = n(861173);
let e1 = () =>
        (0, i.jsxs)("div", {
            className: e0.oR,
            children: [
                (0, i.jsx)(eQ.y, { type: eQ.t.SPINNING_CIRCLE_SIMPLE, className: eJ.S }),
                (0, i.jsx)(C.E, {
                    color: "text-strong",
                    variant: "text-md/normal",
                    children: Y.intl.string(Y.t["5z/hlE"]),
                }),
            ],
        }),
    e2 = (e) => {
        let { shown: t, sent: n, className: r } = e,
            s = (0, d.bG)([k.A], () => k.A.useReducedMotion),
            a = (0, eq.p)(
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
        return (0, i.jsx)(i.Fragment, {
            children: a(
                (e, t) =>
                    t &&
                    (0, i.jsx)(eE.animated.div, {
                        className: r,
                        style: e,
                        children: n
                            ? (0, i.jsx)(eX.y, {
                                  message: Y.intl.string(Y.t.fjcCk5),
                                  type: eZ.Ck.SUCCESS,
                                  id: "success_message_toast",
                              })
                            : (0, i.jsx)(eX.y, {
                                  message: "",
                                  type: eZ.Ck.CUSTOM,
                                  id: "custom_loading_message_toast",
                                  options: { component: (0, i.jsx)(e1, {}) },
                              }),
                    }),
            ),
        });
    };
var e3 = n(424994),
    e6 = n(381941),
    e4 = n(699976),
    e7 = n(994063);
let e5 = (0, J.Fe)({
    createPromise: () => Promise.all([n.e("13988"), n.e("20667")]).then(n.bind(n, 963614)),
    webpackId: 963614,
});
function e8(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: e7.SW, children: t });
}
function e9(e) {
    let { children: t, backgroundImgSrc: n, className: r, style: s = {} } = e,
        { primaryColor: o, secondaryColor: l } = (0, eH.A)(n);
    return (
        null != n && (s.background = `linear-gradient(45deg, ${o}, ${l})`),
        (0, i.jsx)(h.N, {
            theme: W.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, i.jsx)("div", { className: a()(e7.ZK, e, r), style: s, children: t }),
        })
    );
}
function te(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: e7.$m, children: t });
}
function tt(e) {
    var t;
    let n,
        s,
        a,
        o,
        { channel: c, user: h, onReaction: N, entry: w, buttons: P = [], header: k, onVoiceChannelPreview: U } = e,
        [x, G] = r.useState(!1),
        [V, F] = r.useState(null),
        B = r.useRef(null),
        H = (0, d.bG)(
            [eR.A],
            () => null != c && W.kvI.CONTENT_ENTRY_EMBEDS.has(c.type) && eR.A.can(W.xBc.SEND_MESSAGES, c),
        ),
        [K, z] = r.useState(!1),
        [Q, J] = r.useState(!1),
        { voiceBar: et, joinVoiceButton: en } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: s } = e,
                { streamPreviewUrl: a, channel: o } = (0, eB.A)(n),
                l = (0, X.Ay)(o),
                { needSubscriptionToAccess: _ } = (0, el.A)(t?.id),
                c = (0, d.bG)([eC.A], () => (null != o ? eC.A.getGuild(o.guild_id) : void 0)),
                h = (0, d.yK)([eL.Ay], () => (null != o ? eL.Ay.getVoiceStatesForChannel(o) : []), [o]),
                m = (0, d.bG)([eD.A], () => eD.A.isInChannel(o?.id)),
                g = r.useMemo(() => {
                    for (let e of h) {
                        let t = eN.A.getDMFromUserId(e.user.id),
                            n = null != t && ey.Ay.isChannelMuted(null, t),
                            i = eO.A.isBlockedOrIgnored(e.user.id);
                        if (n || i) return !0;
                    }
                    return !1;
                }, [h]);
            if (null == o || null == c) return { voiceBar: void 0, joinVoiceButton: void 0 };
            let p = null != a,
                A = (e) => {
                    let { children: t, text: n, hasRestrictedOrMutedVCParticipant: r } = e,
                        s = r
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(y.i, { size: "custom", width: 13, height: 13, className: e7.vb }),
                                      Y.intl.string(Y.t.d6DpXI),
                                  ],
                              })
                            : n;
                    return (0, i.jsx)(
                        E.m,
                        {
                            "aria-label": r ? Y.intl.string(Y.t.d6DpXI) : (n ?? !1),
                            __unsupportedReactNodeAsText: s,
                            shouldShow: !0,
                            children: t,
                        },
                        "voice-preview",
                    );
                };
            return {
                voiceBar: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: e7.kP,
                            children: [
                                (0, i.jsx)(A, {
                                    text: Y.intl.string(Y.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: g,
                                    children: (0, i.jsxs)(f.D, {
                                        "aria-label": Y.intl.string(Y.t.WIVYqJ),
                                        onClick: () => {
                                            b.A.updateChatOpen(o.id, !0), (0, ed.iN)(o.id), s?.(o);
                                        },
                                        className: e7.I3,
                                        children: [
                                            (0, i.jsx)(eo.Ay, {
                                                guild: c,
                                                size: eo.Ay.Sizes.SMOL,
                                                className: e7.O9,
                                                active: !0,
                                            }),
                                            (0, i.jsx)(R._, {
                                                size: "xxs",
                                                color: u.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, i.jsx)(v.H, { size: "xs", color: u.A.colors.TEXT_DEFAULT }),
                                            (0, i.jsx)(C.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: e7.NR,
                                                children: l,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, i.jsx)(eS.A, {
                                    guildId: c.id,
                                    users: h,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, i.jsx)(O.eu, {
                                            src: e.user.getAvatarURL(c.id, 16),
                                            size: T._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: t,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, i.jsx)("div", {
                                            className: e7.V9,
                                            children: (0, i.jsx)(C.E, {
                                                variant: "text-xxs/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(S.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: m
                    ? null
                    : (0, i.jsx)(A, {
                          hasRestrictedOrMutedVCParticipant: g,
                          children: (0, i.jsx)(I.$, {
                              onClick: () => {
                                  Z.A.handleVoiceConnect({
                                      channel: o,
                                      connected: m,
                                      needSubscriptionToAccess: _,
                                      routeDirectlyToChannel: !0,
                                  });
                              },
                              fullWidth: !0,
                              text: p ? Y.intl.string(Y.t.I6JG46) : Y.intl.string(Y.t.VJlc0S),
                              icon: p ? D.k : v.H,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: c, entry: w, onVoiceChannelPreview: U }),
        { embeddedActivity: ei } = (0, eV.A)(w),
        er =
            ((t = ei),
            (n = (0, d.bG)([eC.A], () => eC.A.getGuild((0, M.D)(t?.location)))),
            (s = (0, d.bG)([eN.A], () => eN.A.getChannel((0, M.H)(t?.location)))),
            (a = (0, d.yK)([ev.default], () => t?.participants?.map((e) => ev.default.getUser(e.userId)) ?? [])),
            (o = (0, X.Ay)(s)),
            null != t && null != n && null != s && j.k3.has(s.type)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)("div", {
                              className: e7.kP,
                              children: [
                                  (0, i.jsxs)(f.D, {
                                      "aria-label": Y.intl.string(Y.t["W/A4Qp"]),
                                      onClick: () => (0, ed.iN)(s.id),
                                      className: e7.I3,
                                      children: [
                                          (0, i.jsx)(eo.Ay, {
                                              guild: n,
                                              size: eo.Ay.Sizes.SMOL,
                                              className: e7.O9,
                                              active: !0,
                                          }),
                                          (0, i.jsx)(R._, { size: "xxs", color: u.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                                          (0, i.jsx)(g.N, { size: "xs", color: u.A.colors.TEXT_DEFAULT }),
                                          (0, i.jsx)(C.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: e7.NR,
                                              children: o,
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(eS.A, {
                                      guildId: n.id,
                                      users: a,
                                      max: 3,
                                      renderUser: (e, t) =>
                                          (0, i.jsx)(O.eu, {
                                              src: e.getAvatarURL(n.id, 16),
                                              size: T._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: t,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, i.jsx)("div", {
                                              className: e7.V9,
                                              children: (0, i.jsx)(C.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(S.h, { size: 16 }),
                      ],
                  })
                : null),
        es = null != en && 0 === P.length ? [en] : P,
        ea = es.length > 0,
        e_ = es.length >= 2,
        [eu, ec] = r.useState(!ea),
        eE = eP.Ay.getName(c?.guild_id, c?.id, h),
        eh = (0, X.Ay)(c, !0),
        em =
            null != c && x
                ? Y.intl.formatToPlainString(Y.t["8lzR/R"], { channel: eh })
                : Y.intl.formatToPlainString(Y.t["4c+CAx"], { channel: `@${eE}` }),
        ef = x ? Y.intl.string(Y.t.Z2CUgn) : Y.intl.string(Y.t.XLGiTG),
        eg = async (e) => {
            let t,
                { emoji: n } = e;
            if (null != n) {
                if (
                    (eb.default.track(W.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: e3.UG.GUILD_MEMBER_LIST,
                        channel_id: c?.id,
                        guild_id: c?.guild_id,
                    }),
                    (0, ee.Dr)(_.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    z(!0),
                    J(!1),
                    x)
                )
                    l()(null != c, "shareToChannelMode should only be true if a valid channel is passed"), (t = c);
                else {
                    let e = await L.A.getOrEnsurePrivateChannel(h.id);
                    t = eN.A.getChannel(e) ?? null;
                }
                return (
                    l()(null != t, "Send channel must be defined"),
                    eA({
                        reply: `:${n.name}:`,
                        sendToChannel: t,
                        onComplete: (e, t) => {
                            J(!0),
                                setTimeout(() => {
                                    z(!1), N(e, t);
                                }, 600);
                        },
                        interactionType: e3.PA.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1,
                    })
                );
            }
        },
        ep = async (e) => {
            let t;
            if (((0, ee.Dr)(_.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), x))
                l()(null != c, "shareToChannelMode should only be true if a valid channel is passed"), (t = c);
            else {
                let e = await L.A.openPrivateChannel({ recipientIds: h.id }),
                    n = eN.A.getChannel(e);
                l()(null != n, "DM channel must be defined"), (t = n);
            }
            let n = t.type === W.rbe.DM ? e3.PA.DM_REACTION_MESSAGE_SENT : e3.PA.CHANNEL_REACTION_MESSAGE_SENT;
            return eA({ reply: e, sendToChannel: t, interactionType: n, onComplete: N, requiresChannelReadiness: !0 });
        },
        eA = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: i, interactionType: r, requiresChannelReadiness: s } = e;
            V?.focus(),
                await (0, eG.d)({
                    channel: n,
                    content: t,
                    entry: w,
                    whenReady: s,
                    doNotNotifyOnError: !1,
                    location: e6.Hx.CONTENT_INVENTORY_MEMBERLIST,
                }),
                i?.(r, n);
        },
        eI = k ?? et ?? er,
        eT = () => {
            G((e) => !e), eu && V?.focus();
        },
        ew = (e) => {
            ec(e), e && V?.focus();
        };
    return (0, i.jsx)("div", {
        ref: B,
        style: { pointerEvents: K ? "none" : "all" },
        children: (0, i.jsx)(m.O, {
            containerRef: B,
            children: (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(e2, { sent: Q, shown: K, className: e7.Jt }),
                    eI ??
                        (0, i.jsx)(ez, {
                            children: (0, i.jsxs)("div", {
                                className: e7.T7,
                                children: [
                                    (0, i.jsx)(tn, { channel: c, onClickSuggestion: eg }),
                                    (0, i.jsx)(q, { onSelectEmoji: eg }),
                                ],
                            }),
                        }),
                    (0, i.jsxs)("div", {
                        className: eu ? e7.P2 : e7.VE,
                        children: [
                            (0, i.jsx)($, {
                                placeholder: em,
                                onEnter: ep,
                                setEditorRef: (e) => F(e),
                                channel: x ? c : void 0,
                                showEmojiButton: null != eI,
                                className: e7.N8,
                                autoFocus: !1,
                                renderAttachButton: H
                                    ? () =>
                                          (0, i.jsx)(E.m, {
                                              text: ef,
                                              children: (0, i.jsx)(f.D, {
                                                  className: e7.wD,
                                                  onClick: eT,
                                                  children: x
                                                      ? (0, i.jsx)(g.N, { size: "custom", width: 20, height: 20 })
                                                      : (0, i.jsx)(p.X, { size: "custom", width: 20, height: 20 }),
                                              }),
                                          })
                                    : void 0,
                            }),
                            ea &&
                                (0, i.jsx)(f.D, {
                                    onClick: () => ew(!1),
                                    className: e7.i3,
                                    children: (0, i.jsx)(A.P, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: u.A.colors.ICON_STRONG,
                                    }),
                                }),
                        ],
                    }),
                    !1 === eu &&
                        (0, i.jsxs)("div", {
                            className: e7.fh,
                            children: [
                                !e_ &&
                                    (0, i.jsx)(
                                        I.$,
                                        {
                                            fullWidth: !0,
                                            variant: "secondary",
                                            onClick: () => ew(!0),
                                            size: "md",
                                            text: Y.intl.string(Y.t.OAJQlP),
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
        [s, a] = r.useState(!1);
    r.useEffect(() => {
        a(!0);
    }, []);
    let o = !!k.A.keyboardModeEnabled && !s,
        l = (0, et.Fj)(t?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, ew._O)({ id: e.id, animated: e.animated, size: 58 }) },
            );
    return (0, i.jsx)(i.Fragment, {
        children: l.map((e) => {
            let { emoji: t, url: r } = e;
            return null != r
                ? (0, i.jsx)(
                      "div",
                      {
                          children: (0, i.jsx)(E.m, {
                              asContainer: !0,
                              text: Y.intl.formatToPlainString(Y.t.kilW3l, { emojiName: t.name }),
                              position: "top",
                              "aria-label": Y.intl.formatToPlainString(Y.t.kilW3l, { emojiName: t.name }),
                              shouldShow: !o && void 0,
                              children: (0, i.jsx)(eT, {
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
function ti(e) {
    let { channel: t, userDescription: n, entry: r, disableGameProfileLinks: s, onUserPopoutClosed: o } = e,
        l = t?.guild_id,
        { displayParticipants: _, participant1: u, participant2: E, numOtherParticipants: h } = (0, eF.A)(r, 3),
        m = (0, d.bG)([ev.default], () => ev.default.getUser(r.author_id)),
        { streamPreviewUrl: f } = (0, eB.A)(r),
        g = [u, E];
    return (0, i.jsxs)("div", {
        className: e7.MH,
        children: [
            (0, i.jsxs)("div", {
                className: e7.WP,
                children: [
                    (0, i.jsx)(c.A, {
                        maxUsers: 3,
                        users: _,
                        guildId: l,
                        size: T._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: o,
                    }),
                    (0, i.jsx)(S.h, { size: 8, horizontal: !0 }),
                    (0, i.jsx)(N.D, {
                        variant: "heading-sm/normal",
                        className: a()(e7.Xn, e7.zA),
                        children: Y.intl.format(n, {
                            user0: eP.Ay.getName(l, t?.id, g[0]),
                            user1: eP.Ay.getName(l, t?.id, g[1]),
                            countOthers: h,
                            countOthersHook: (e, t) =>
                                (0, i.jsx)(
                                    C.E,
                                    { variant: "text-sm/medium", className: a()(e7.Mj, e7.nk), children: e },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, i.jsx)(
                                    eU.A,
                                    {
                                        textClassName: a()(e7.Mj, e7.nk),
                                        text: e,
                                        user: g[0],
                                        channel: t,
                                        onPopoutClosed: o,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                            name1Hook: (e, n) =>
                                (0, i.jsx)(
                                    eU.A,
                                    {
                                        textClassName: a()(e7.Mj, e7.nk),
                                        text: e,
                                        user: g[1],
                                        channel: t,
                                        onPopoutClosed: o,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                        }),
                    }),
                ],
            }),
            null != f && (0, i.jsx)(Q.Ay, { size: Q.Ay.Sizes.SMALL }),
            null != m && (0, i.jsx)(e$.A, { user: m, channel: t, guildId: l, entry: r, disableGameProfileLinks: s }),
        ],
    });
}
function tr(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, i.jsx)(f.D, { className: e7.Zw, onClick: n, children: t });
}
function ts(e) {
    let {
            title: t,
            subtitle: n,
            badges: r,
            children: s,
            onClickThumbnail: o,
            onClickTitle: l,
            onClickSubtitle: _,
            headerIcons: u,
            disableGameProfileLinks: c = !1,
            showCoverImage: E = !0,
            onUserPopoutClosed: h,
            trackRankingItemInteraction: m,
            ...f
        } = e,
        { entry: g } = f,
        p = (0, eM.zD)(g),
        A = p ? g.extra?.application_id : void 0,
        I = (0, ec.W)();
    null != I && (A = I);
    let T = (0, er.A)(
            {
                location: "ContentPopout",
                applicationId: c ? void 0 : A,
                source: ei.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: g.author_id,
            },
            { onOpened: () => m?.(e3.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: R, smallImage: O } = (0, ek.nO)({ entry: g, showCoverImage: E }),
        y = (0, eu.w)({ location: "content_inventory" }),
        v = (0, d.bG)([e_.A], () => e_.A.getDetectableIdsToApplicationIds()),
        D = p ? T : void 0;
    return (0, i.jsxs)("div", {
        className: e7.au,
        children: [
            (0, i.jsx)(ti, { disableGameProfileLinks: c, ...f, onUserPopoutClosed: h }),
            (0, i.jsxs)(e9, {
                backgroundImgSrc: R?.src,
                children: [
                    (0, i.jsxs)("div", {
                        className: e7.CG,
                        children: [
                            (0, i.jsx)("div", {
                                className: e7.Fb,
                                children: (0, i.jsx)(ex.d, {
                                    image: R,
                                    smallImage: O,
                                    aspectRatio: E ? "none" : void 0,
                                    onClick: o ?? D,
                                    size: ex.w.SIZE_72,
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: e7.iC,
                                children: [
                                    (0, i.jsx)(tr, {
                                        onClick: l ?? D,
                                        children: (0, i.jsx)(N.D, {
                                            variant: "heading-md/medium",
                                            className: a()(e7.$2, { [e7.bC]: null != u }),
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, i.jsx)(tr, {
                                              onClick: _ ?? D,
                                              children: (0, i.jsx)(C.E, {
                                                  variant: "text-sm/normal",
                                                  className: e7.LG,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, i.jsx)(S.h, { size: 8 }),
                                    r,
                                ],
                            }),
                            (0, i.jsx)("div", { className: e7.hO, children: u }),
                        ],
                    }),
                    s,
                ],
            }),
            y && null != A && null != v[A]
                ? (0, i.jsx)(e5, {
                      className: e7.zu,
                      rewardOfferNoticeClassName: e7.PU,
                      applicationId: A,
                      userIds: [g.author_id],
                      location: "content_popout",
                      guildId: f.channel?.guild_id,
                      channelId: f.channel?.id,
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
            stream: o,
            onClickThumbnail: l,
            onClickTitle: _,
            onClickSubtitle: u,
            onUserPopoutClosed: c,
            trackRankingItemInteraction: E,
            ...h
        } = e,
        m = (0, d.bG)([eN.A], () => eN.A.getChannel(o?.channelId)),
        [f] = r.useMemo(() => (0, es.eo)(m, eD.A, eC.A, eR.A, en.default), [m]),
        { entry: g } = h,
        p = (0, eM.zD)(g),
        A = p ? g.extra?.application_id : void 0,
        I = (0, ec.W)();
    null != I && (A = I);
    let T = (0, er.A)(
            {
                location: "ContentPopout",
                applicationId: A,
                source: ei.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: g.author_id,
            },
            { onOpened: () => E?.(e3.PA.OPENED_GAME_PROFILE) },
        ),
        R = p ? T : void 0,
        { activity: O, activityApplication: y, fallbackApplication: v } = (0, eV.A)(g),
        { largeImage: D, smallImage: L } = (0, ek.D8)(O, y ?? v),
        { largeImage: b } = (0, ek.nO)({ entry: g }),
        k = (0, eu.w)({ location: "content_inventory" }),
        M = (0, d.bG)([e_.A], () => e_.A.getDetectableIdsToApplicationIds());
    return (0, i.jsxs)("div", {
        className: e7.au,
        children: [
            (0, i.jsx)(ti, { ...h, onUserPopoutClosed: c }),
            (0, i.jsxs)(e9, {
                backgroundImgSrc: b?.src,
                className: e7.uR,
                children: [
                    (0, i.jsx)(tr, {
                        onClick: f
                            ? () => {
                                  w.default.selectVoiceChannel(o.channelId), (0, P.Nl)(o);
                              }
                            : void 0,
                        children: (0, i.jsxs)("div", {
                            className: e7.nh,
                            children: [
                                (0, i.jsx)(ea.A, { className: e7.j7, stream: o }),
                                f &&
                                    (0, i.jsx)("div", {
                                        className: e7.NE,
                                        children: (0, i.jsx)(C.E, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: Y.intl.string(Y.t["7Xq/nV"]),
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: e7.$6,
                        children: [
                            null != D &&
                                (0, i.jsx)("div", {
                                    className: e7.Fb,
                                    children: (0, i.jsx)(ex.d, {
                                        image: D,
                                        smallImage: L,
                                        onClick: l ?? R,
                                        size: ex.w.SIZE_72,
                                    }),
                                }),
                            (0, i.jsxs)("div", {
                                className: e7.gv,
                                children: [
                                    (0, i.jsx)(tr, {
                                        onClick: _ ?? R,
                                        children: (0, i.jsx)(N.D, {
                                            variant: "heading-md/semibold",
                                            className: e7.nk,
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, i.jsx)(tr, {
                                              onClick: u ?? R,
                                              children: (0, i.jsx)(C.E, {
                                                  variant: "text-sm/normal",
                                                  className: e7.zA,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, i.jsx)(S.h, { size: 8 }),
                                    s,
                                ],
                            }),
                        ],
                    }),
                    a,
                ],
            }),
            k && null != A && null != M[A]
                ? (0, i.jsx)(e5, {
                      className: e7.zu,
                      applicationId: A,
                      userIds: [g.author_id],
                      location: "content_popout",
                      guildId: h.channel?.guild_id,
                      channelId: h.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: e4.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
