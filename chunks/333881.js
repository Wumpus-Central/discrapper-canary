t.d(n, { default: () => nF, c: () => nH });
var i,
    l = t(477900),
    a = t(582128),
    o = t(621466),
    r = t(477782),
    s = t(165862),
    c = t(442433),
    d = t(155718),
    u = t(793574),
    g = t(688810),
    A = t(32880),
    m = t(142617),
    f = t(819648),
    p = t(617390),
    y = t(858899),
    h = t(564218),
    I = t(792996);
async function E(e) {
    let n = new Image();
    return ((n.crossOrigin = "anonymous"), (n.src = e), await n.decode(), n);
}
var _ = t(852717),
    b = t(50268),
    S = t(373963),
    x = t(115184),
    j = t(777933),
    M = t(826308),
    D = t(337358),
    v = t(180662);
t(321073);
var C = t(855986),
    T = t(46653),
    G = (((i = {})[(i.END_EARLY = 0)] = "END_EARLY"), i);
let w = [],
    L = {
        [G.END_EARLY]: (e) =>
            (0, l.jsx)(r.Dr, {
                id: "end-poll-early",
                label: I.intl.string(I.t.grdwwt),
                icon: D.ClockXIcon,
                leadingAccessory: { type: "icon", icon: D.ClockXIcon },
                action: () => {
                    v.A.endPollEarly({ channelId: e.channel_id, messageId: e.id });
                },
                iconProps: { color: "currentColor" },
            }),
    };
var N = t(173500),
    O = t(129230),
    R = t(834730),
    k = t(231483),
    P = t(627794),
    U = t(928348),
    B = t(850216),
    X = t(364806),
    F = t(979816),
    H = t(204300),
    K = t(264349),
    q = t(727419),
    z = t(652215),
    V = t(890634),
    J = t(654502);
let W = V.uh.KEYWORD;
var Z = t(880457),
    $ = t(503698),
    Y = t.n($),
    Q = t(844222),
    ee = t(460905),
    en = t(217306),
    et = t(822123),
    ei = t(649963),
    el = t(815807),
    ea = t(834942),
    eo = t(576705);
let er = (e) => {
    let n = e.getGuildId();
    return (
        ((null != n && ea.A.canChatInGuild(n) && eo.A.can(z.xBc.ADD_REACTIONS, e)) || e.isPrivate()) && !e.isSystemDM()
    );
};
var es = t(406704),
    ec = t(253932),
    ed = t(486020),
    eu = t(188567),
    eg = t(690521),
    eA = t(307731),
    em = t(482496);
function ef(e) {
    let { emoji: n, reducedMotionEnabled: t, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: Y()(i, em.Z),
        src:
            null != n.id
                ? ed.Ay.getEmojiURL({ id: n.id, animated: n.animated && (!t || a), size: 18 })
                : eg.Ay.getURL(n.optionallyDiverseSequence ?? ""),
        alt: "",
    });
}
var ep = t(290136),
    ey = t(519222),
    eh = t(345254),
    eI = t(624479),
    eE = t(257249),
    e_ = t(383233),
    eb = t(957565),
    eS = t(483768),
    ex = t(885574),
    ej = t(473935),
    eM = t(173936),
    eD = t(93688),
    ev = t(509434),
    eC = t(975807),
    eT = t(22231),
    eG = t(138399),
    ew = t(697470),
    eL = t(253925),
    eN = t(843626),
    eO = t(427209);
t(938796);
var eR = t(665260),
    ek = t(563119),
    eP = t(581925),
    eU = t(521427),
    eB = t(20883),
    eX = t(979766),
    eF = t(866665),
    eH = t(816426);
let eK = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];
function eq(e) {
    let { emoji: n, isFocused: t } = e,
        { animated: i, src: a, surrogates: o } = n;
    return (
        null == a && null != n.id
            ? (a = ed.Ay.getEmojiURL({ id: n.id, animated: !!i, size: 20 }))
            : null == a && (a = eg.Ay.getURL(o)),
        (0, l.jsx)(eF.m, {
            text: (0, eg.N)(n),
            hideOnClick: !0,
            spacing: 16,
            forceOpen: t,
            children: (0, l.jsx)("div", {
                "aria-label": I.intl.formatToPlainString(I.t["/iYSo6"], { emojiName: n.name }),
                className: Y()(eH.x6, { [eH.in]: t }),
                children:
                    null == a || "" === a.trim()
                        ? (0, l.jsx)("span", { className: Y()("emoji", "emoji-text", eH.Kk), children: o })
                        : (0, l.jsx)("img", { className: eH.Kk, src: a, alt: "" }),
            }),
        })
    );
}
var ez = t(192308),
    eV = t(969632),
    eJ = t(997571),
    eW = t(157559),
    eZ = t(769297);
function e$(e) {
    let { emoji: n, reducedMotionEnabled: t, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: i,
        src:
            null != n.id
                ? ed.Ay.getEmojiURL({ id: n.id, animated: n.animated && (!t || a), size: 18 })
                : eg.Ay.getURL(n.name ?? ""),
        alt: "",
    });
}
var eY = t(110384),
    eQ = t(973196),
    e0 = t(517997),
    e8 = t(554146),
    e1 = t(111159),
    e6 = t(138134),
    e3 = t(964486),
    e5 = t(865116),
    e7 = t(263775),
    e2 = t(928658),
    e9 = t(400528),
    e4 = t(374710),
    ne = t(715757),
    nn = t(967198),
    nt = t(287809),
    ni = t(628691),
    nl = t(49999),
    na = t(307805),
    no = t(663417),
    nr = t(965407),
    ns = t(249700),
    nc = t(556112),
    nd = t(54570),
    nu = t(8880),
    ng = t(163328),
    nA = t(620632),
    nm = t(152367),
    nf = t(37646),
    np = t(73153),
    ny = t(147087),
    nh = t(773669),
    nI = t(132183);
let nE = new Map();
var n_ = t(534890),
    nb = t(181041),
    nS = t(828488),
    nx = t(485845),
    nj = t(778712),
    nM = t(803306),
    nD = t(966327),
    nv = t(597929),
    nC = t(682163),
    nT = t(100663),
    nG = t(260509),
    nw = t(619019),
    nL = t(734057),
    nN = t(71393),
    nO = t(87221),
    nR = t(930125),
    nk = t(282108),
    nP = t(803316),
    nU = t(889558),
    nB = t(953584),
    nX = t(273185);
function nF(e) {
    let n,
        t,
        i,
        a,
        {
            channel: r,
            message: s,
            target: d,
            mediaItem: A,
            shouldHideMediaOptions: m,
            onSelect: f,
            onHeightUpdate: p,
        } = e,
        { analyticsLocations: y } = (0, g.Ay)([u.A.MESSAGE_CONTEXT_MENU]),
        h = d,
        E = d.getAttribute("data-type"),
        _ = d.getAttribute("data-id"),
        b = d.getAttribute("data-name");
    if (null != A) t = n = i = A.url;
    else
        for (; (0, o.vq)(h);)
            ((0, o.vq)(h, HTMLImageElement) && null != h.src && (t = h.src),
                (0, o.vq)(h, HTMLAnchorElement) &&
                    null != h.href &&
                    ((n = h.href),
                    (a = h.textContent),
                    null == t &&
                        "img" === h.getAttribute("data-role") &&
                        ((t = n),
                        h.hasAttribute("data-safe-src") &&
                            "" !== h.getAttribute("data-safe-src") &&
                            (i = h.getAttribute("data-safe-src")))),
                (h = h.parentElement));
    let S = document.getSelection()?.toString() ?? "";
    return (0, l.jsx)(g.f5, {
        value: y,
        children: nH({
            message: s,
            channel: r,
            mediaItem: A,
            textSelection: S,
            favoriteableType: E,
            favoriteableId: _,
            favoriteableName: b,
            itemHref: n,
            itemSrc: t,
            itemSafeSrc: i,
            itemTextContent: a,
            canReport: !0,
            onHeightUpdate: p,
            onSelect: f,
            onClose: c.Z_,
            navId: "message",
            ariaLabel: I.intl.string(I.t.ChPNkN),
            shouldHideMediaOptions: m,
        }),
    });
}
function nH(e) {
    var n;
    let i,
        o,
        u,
        D,
        v,
        G,
        V,
        $,
        Y,
        ed,
        em,
        eF,
        nF,
        nH,
        nK,
        nq,
        nz,
        nV,
        nJ,
        nW,
        nZ,
        n$,
        nY,
        nQ,
        n0,
        n8,
        {
            message: n1,
            channel: n6,
            mediaItem: n3,
            textSelection: n5,
            favoriteableType: n7,
            favoriteableId: n2,
            favoriteableName: n9,
            itemHref: n4,
            itemSrc: te,
            itemSafeSrc: tn,
            itemTextContent: tt,
            canReport: ti,
            onHeightUpdate: tl,
            onSelect: ta,
            onClose: to,
            navId: tr,
            ariaLabel: ts,
            shouldHideMediaOptions: tc = !1,
        } = e,
        td = a.useRef(null);
    (a.useEffect(() => {
        td.current = Date.now();
    }, []),
        a.useEffect(
            () => () => {
                if (null != td.current) {
                    let e = Date.now() - td.current;
                    O.default.track(z.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: e,
                        channel_id: n6.id,
                        guild_id: n6.getGuildId() ?? void 0,
                        message_id: n1.id,
                    });
                }
            },
            [n6, n1],
        ));
    let tu = a.useCallback(() => {
            if (null != td.current) {
                let e = Date.now() - td.current;
                O.default.track(z.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: e,
                    channel_id: n6.id,
                    guild_id: n6.getGuildId() ?? void 0,
                    message_id: n1.id,
                });
            }
            ta?.();
        }, [ta, n6, n1]),
        tg =
            ((i = (0, et.D6)(n6.guild_id).filter(
                (e) =>
                    !(e.useSpriteSheet && eK.indexOf(e.uniqueName ?? "") >= 0) &&
                    !eg.Ay.isEmojiPremiumLocked({ emoji: e, channel: n6, intention: eA.EmojiIntention.REACTION }),
            )).length > 4 && (i.length = 4),
            (o = ec.jW.useSetting()),
            (u = (0, es.Id)(n6)),
            (0, C.bG)([ea.A, eo.A], () => o && u && er(n6), [n6, u, o]) &&
            i.length > 0 &&
            n1.type !== z.lAJ.MEDIA_MENTION_MESSAGE
                ? (0, l.jsx)(r.rX, {
                      className: eH.iE,
                      children: i.map((e, n) =>
                          (0, l.jsx)(
                              r.Dr,
                              {
                                  id: `quickreact-${e.id ?? n}`,
                                  render: (n) => {
                                      let { isFocused: t } = n;
                                      return (0, l.jsx)(eq, { emoji: e, isFocused: t });
                                  },
                                  action: () => {
                                      (0, ei.BB)(n6.id, n1.id, (0, el.jq)(e), ei.qN.MESSAGE_CONTEXT_MENU);
                                  },
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              n,
                          ),
                      ),
                  })
                : null),
        tA = (0, S.A)(n5),
        tm = (0, M.A)(n5),
        tf = (function (e, n) {
            let { reducedMotion: t } = a.useContext(Q.C),
                i = (0, es.Id)(n),
                o = (0, C.bG)([ea.A, eo.A], () => er(n) && i && !n.isMediaThread(), [n, i]),
                s = (0, et.D6)(n.getGuildId());
            if (!ec.jW.getSetting() || !o) return null;
            let c = s
                .filter(
                    (e) =>
                        !eg.Ay.isEmojiFilteredOrLocked({ emoji: e, channel: n, intention: eA.EmojiIntention.REACTION }),
                )
                .slice(0, 12)
                .map((i, a) =>
                    (0, l.jsx)(
                        r.Dr,
                        {
                            color: "default",
                            id: i.id ?? i.optionallyDiverseSequence ?? i.name,
                            label: `:${i.name}:`,
                            icon: (e) => (0, l.jsx)(ef, { ...e, reducedMotionEnabled: t.enabled, emoji: i }),
                            leadingAccessory: {
                                type: "emoji",
                                emojiId: i.id,
                                src: null == i.id ? eg.Ay.getURL(i.optionallyDiverseSequence ?? "") : void 0,
                                animated: i.animated,
                            },
                            action: () => {
                                (0, ei.BB)(n.id, e.id, (0, el.jq)(i), ei.qN.MESSAGE_CONTEXT_MENU);
                            },
                            dontCloseOnActionIfHoldingShiftKey: !0,
                        },
                        a,
                    ),
                );
            return (0, l.jsx)(r.Dr, {
                id: "add-reaction",
                label: I.intl.string(I.t.lfIHs4),
                leadingAccessory: { type: "icon", icon: ee.ReactionIcon },
                action: () => {
                    eu._.dispatchKeyed(z.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                },
                color: "default",
                children: (0, l.jsxs)(l.Fragment, {
                    children: [
                        c,
                        (0, l.jsx)(r.bX, {}),
                        (0, l.jsx)(r.Dr, {
                            color: "default",
                            id: "other-reactions",
                            label: I.intl.string(I.t["OBCR+p"]),
                            icon: ee.ReactionIcon,
                            leadingAccessory: { type: "icon", icon: en.ViewReactionIcon },
                            action: () => {
                                eu._.dispatchKeyed(z.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                            },
                        }),
                    ],
                }),
            });
        })(n1, n6),
        tp =
            ((D = (0, C.bG)([T.default], () => T.default.getId())),
            (v = (0, es.Id)(n6)),
            (G = (0, es.s5)(n6)),
            (0, ew.A)(n1, D) && v && !G
                ? (0, l.jsx)(r.Dr, {
                      id: "edit",
                      label: I.intl.string(I.t.fsBWmS),
                      action: () => eG.A.startEditMessageRecord(n6.id, n1),
                      leadingAccessory: { type: "icon", icon: eT.PencilIcon },
                      icon: eT.PencilIcon,
                  })
                : null),
        ty =
            ((V = (0, e0.u)(n6, n1)),
            ($ = (0, eQ.A)()),
            !V || $
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "reply",
                      label: I.intl.string(I.t["5IEsGx"]),
                      leadingAccessory: { type: "icon", icon: eY.ArrowAngleLeftUpIcon },
                      icon: eY.ArrowAngleLeftUpIcon,
                      action: (e) => {
                          (0, ey.$b)(n6, n1, e);
                      },
                  })),
        th = (0, eN.m)(n1)
            ? (0, l.jsx)(r.Dr, {
                  id: "forward",
                  label: I.intl.string(I.t.I3ltXO),
                  leadingAccessory: { type: "icon", icon: eO.A },
                  icon: eO.A,
                  action: () => {
                      (0, ey.Z4)(n6, n1);
                  },
              })
            : null,
        tI = (0, es.n)(n6, n1)
            ? (0, l.jsx)(r.Dr, {
                  id: "thread",
                  label: I.intl.string(I.t.rBIGBL),
                  leadingAccessory: { type: "icon", icon: ng.ThreadIcon },
                  icon: ng.ThreadIcon,
                  action: () => {
                      (0, ey.Nw)(n6, n1);
                  },
              })
            : null,
        tE = (function (e) {
            if (!eb.p5) return null;
            let n = e.getContentMessage(),
                t = (0, e_._c)(n) ? (0, eE.kC)(n.components) : n.content;
            return null == t || 0 === t.length
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "copy-text",
                      label: I.intl.string(I.t.JrGD7E),
                      leadingAccessory: { type: "icon", icon: eI.CopyIcon },
                      icon: eI.CopyIcon,
                      action: () => {
                          (0, eb.C)(t);
                      },
                  });
        })(n1),
        t_ = (function (e) {
            let n,
                {
                    handleTranslate: i,
                    handleRevertTranslation: o,
                    isTranslating: s,
                    isTranslated: c,
                } = (function (e) {
                    let [n, t] = a.useState(!1),
                        i = (0, C.bG)([nh.default], () => nh.default.locale);
                    return {
                        handleTranslate: a.useCallback(
                            async (l, a) => {
                                if (n) return;
                                let o = l ?? i;
                                t(!0);
                                let r = a ?? (0, I.getAvailableLocales)().find((e) => e.value === o)?.name ?? o;
                                (nE.has(e.id) || nE.set(e.id, e.content),
                                    (0, y.P0)({
                                        text: I.intl.formatToPlainString(I.t.Znl8Z8, { targetLanguage: r }),
                                        icon: nm.MagicWandIcon,
                                    }));
                                try {
                                    let n = await nA.Bo.post({
                                        url: z.Rsh.AI_TRANSLATE,
                                        body: { content: e.content, locale: o },
                                        rejectWithError: (0, nA.fT)(),
                                    });
                                    n.body &&
                                        (np.h.dispatch({
                                            type: "MESSAGE_UPDATE",
                                            message: { id: e.id, channel_id: e.channel_id, content: n.body.content },
                                        }),
                                        (0, y.P0)({
                                            text: I.intl.formatToPlainString(I.t.FtVUqm, { targetLanguage: r }),
                                            variant: "success",
                                        }));
                                } finally {
                                    t(!1);
                                }
                            },
                            [e, n, i],
                        ),
                        handleRevertTranslation: a.useCallback(() => {
                            let n = nE.get(e.id);
                            null != n &&
                                (np.h.dispatch({
                                    type: "MESSAGE_UPDATE",
                                    message: { id: e.id, channel_id: e.channel_id, content: n },
                                }),
                                nE.delete(e.id));
                        }, [e.id, e.channel_id]),
                        isTranslating: n,
                        isTranslated: nE.has(e.id),
                    };
                })(e),
                d =
                    ((n = (0, I.getAvailableLocales)()),
                    a.useMemo(
                        () =>
                            n.map((e) => {
                                let n;
                                try {
                                    n = t(579832)(`./${e.value}.png`);
                                } catch (e) {
                                    n = t(432706);
                                }
                                return (0, l.jsx)(
                                    r.Dr,
                                    {
                                        id: `translate-${e.value}`,
                                        label: e.name,
                                        icon: () => (0, l.jsx)("img", { alt: "", src: n, className: nI.M }),
                                        leadingAccessory: { type: "image", src: n },
                                        action: () => i(e.value, e.name),
                                        disabled: s,
                                    },
                                    e.value,
                                );
                            }),
                        [i, s, n],
                    )),
                u = (0, ny.b)();
            return null != e.content && "" !== e.content.trim() && u
                ? c
                    ? (0, l.jsx)(r.Dr, {
                          id: "revert-translation",
                          label: I.intl.string(I.t.JC9BXn),
                          leadingAccessory: { type: "icon", icon: nf.LanguageIcon },
                          icon: nf.LanguageIcon,
                          action: o,
                          disabled: s,
                      })
                    : (0, l.jsx)(r.Dr, {
                          id: "translate",
                          label: s ? I.intl.string(I.t.SVKIdU) : I.intl.string(I.t["6epDlR"]),
                          action: () => i(),
                          leadingAccessory: { type: "icon", icon: nf.LanguageIcon },
                          disabled: s,
                          children: d,
                      })
                : null;
        })(n1),
        tb = (0, eX.A)(n1, n6),
        tS = (0, eU.kn)(n1, n6, "MessageContextMenu")
            ? (0, eR.Lt)(n1.flags, z.pr7.IS_GUILD_OFFICIAL)
                ? (0, l.jsx)(r.Dr, {
                      id: "guild-official-unset",
                      action: () => {
                          eG.A.patchMessageGuildOfficial(n6.id, n1.id, !1);
                      },
                      label: I.intl.string(I.t["2km5Gf"]),
                      leadingAccessory: { type: "icon", icon: ek.StampXIcon },
                  })
                : (0, l.jsx)(r.Dr, {
                      id: "guild-official-set",
                      action: () => {
                          eG.A.patchMessageGuildOfficial(n6.id, n1.id, !0);
                      },
                      label: I.intl.string(I.t["lE/PG3"]),
                      leadingAccessory: { type: "icon", icon: eP.StampIcon },
                  })
            : null,
        tx = (0, Z.A)(n1, n6),
        tj = (0, N.A)({
            commandType: d.kc.MESSAGE,
            commandTargetId: n1.id,
            channel: n6,
            guildId: void 0,
            onHeightUpdate: tl,
            showIcon: !0,
        }),
        tM =
            n1.state !== z.cmJ.SEND_FAILED
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "resend",
                      label: I.intl.string(I.t.lXHojr),
                      leadingAccessory: { type: "icon", icon: no.RefreshIcon },
                      action: () => (0, ns.A)(n6, n1, void 0, nr.A.getOptions(n1.id)),
                  }),
        tD = (0, eB.A)(n1, n6),
        tv =
            null != (Y = n6.getGuildId()) &&
            n1.type === z.lAJ.USER_JOIN &&
            eo.A.canWithPartialContext(z.xBc.MANAGE_GUILD, { guildId: Y })
                ? (0, l.jsx)(r.Dr, {
                      id: "configure",
                      label: I.intl.string(I.t.NpHUi1),
                      leadingAccessory: { type: "icon", icon: ep.CircleQuestionIcon },
                      icon: ep.CircleQuestionIcon,
                      action: () => (0, ey.vc)(n6),
                  })
                : null,
        tC = (0, eh.A)(n1, n6),
        tT =
            ((ed = (0, nS.WU)(n6.getGuildId(), "message_context_menu")),
            (em = (0, C.bG)([nb.A], () => nb.A.getConversationForMessage(n6.id, n1.id) ?? null, [n6.id, n1.id])),
            (eF = a.useCallback(() => {
                null != em &&
                    (console.log("[ConversationHighlighting]", nb.A.getConversation(n6.id, em)),
                    window.open(`https://yap-time.vibeyard.tools/?conversation=${em}`, "_blank"));
            }, [n6.id, em])),
            ed && null != em
                ? (0, l.jsx)(r.Dr, {
                      id: "view-conversation",
                      label: "View Conversation",
                      leadingAccessory: { type: "icon", icon: n_.ChatIcon },
                      icon: n_.ChatIcon,
                      action: eF,
                  })
                : null),
        tG =
            ((nF = (0, C.bG)([nu.A], () => nu.A.isSpeakingMessage(n6.id, n1.id), [n6, n1])),
            "" === n1.content
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "tts",
                      label: nF ? I.intl.string(I.t.CJ30BP) : I.intl.string(I.t.yGLjXF),
                      leadingAccessory: { type: "icon", icon: nc.ChatSpeakIcon },
                      icon: nc.ChatSpeakIcon,
                      action: () => (nF ? (0, nd.pr)() : (0, nd.kP)(n6, n1)),
                  })),
        tw =
            null == n1.reactions || 0 === n1.reactions.length || (n1.isPoll() && !(0, eV.Gh)(n1))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "reactions",
                      label: I.intl.string(I.t.wikODq),
                      leadingAccessory: { type: "icon", icon: en.ViewReactionIcon },
                      icon: en.ViewReactionIcon,
                      action: () =>
                          (0, ez.mM)(async () => {
                              let { default: e } = await Promise.all([t.e(569080), t.e(998186)]).then(
                                  t.bind(t, 112753),
                              );
                              return (n) => (0, l.jsx)(e, { ...n, message: n1 });
                          }),
                  }),
        tL =
            0 ===
            (nH = (function (e) {
                let n = (0, C.bG)([T.default], () => T.default.getId()),
                    { poll: t } = e;
                if (!e.isPoll() || null == t) return w;
                let i = [];
                return (t.expiry.isSameOrBefore(Date.now()) || e.author.id !== n || i.push(0), i);
            })(n1)).length
                ? null
                : (0, l.jsx)(l.Fragment, { children: nH.map((e) => L[e](n1)) }),
        tN = (function (e) {
            let { analyticsLocations: n } = (0, g.Ay)(),
                t = e.interactionMetadata?.authorizing_integration_owners[nx.b.USER_INSTALL],
                i = e.interactionMetadata?.authorizing_integration_owners[nx.b.GUILD_INSTALL],
                o = e.interactionMetadata?.user.id,
                s = (0, C.bG)([nt.default], () => nt.default.getUser(t)),
                c = (0, C.bG)([nN.A], () => nN.A.getGuild(i)),
                d = nL.A.getChannel(e.channel_id),
                u = d?.getGuildId(),
                A = (0, C.bG)([nt.default], () => nt.default.getUser(o));
            if (
                (a.useEffect(() => {
                    null == s && null != t && (0, nM.wz)(t);
                }, [s, t]),
                !(0, nv._)(e))
            )
                return null;
            null == A && (A = new nw.A(e.interactionMetadata?.user));
            let m = null;
            if (null != c) {
                let n = (0, nG.Iv)(c, 18, !0);
                m = (0, l.jsx)(r.Dr, {
                    disabled: !0,
                    iconLeft: () => (0, l.jsx)(nC.Ay, { guild: c, size: nC.Ay.Sizes.MINI }),
                    leadingAccessory: null != n ? { type: "image", src: n } : void 0,
                    id: "integration-owner",
                    label: c.name,
                    subtext: I.intl.formatToPlainString(I.t.ShLXXB, { application: e.author.username }),
                });
            } else
                null != s &&
                    (m = (0, l.jsx)(r.Dr, {
                        action: () =>
                            (0, nT.openUserProfileModal)({
                                userId: s.id,
                                guildId: u,
                                channelId: e.channel_id,
                                sourceAnalyticsLocations: n,
                            }),
                        leadingAccessory: { type: "avatar", src: s.getAvatarURL(u, 18) },
                        id: "integration-owner",
                        label: s.username,
                        iconLeft: () => (0, l.jsx)(nD.A, { user: s, size: nj._3.SIZE_20 }),
                        subtext: I.intl.formatToPlainString(I.t.ShLXXB, { application: e.author.username }),
                    }));
            return (0, l.jsxs)(r.Dr, {
                id: "view-interaction-info",
                label: I.intl.string(I.t.Rjezbz),
                leadingAccessory: { type: "icon", icon: ex.CircleInformationIcon },
                children: [
                    m,
                    null != A
                        ? (0, l.jsx)(r.Dr, {
                              action: () =>
                                  (0, nT.openUserProfileModal)({
                                      userId: A.id,
                                      guildId: u,
                                      channelId: e.channel_id,
                                      sourceAnalyticsLocations: n,
                                  }),
                              leadingAccessory: { type: "avatar", src: A.getAvatarURL(u, 18) },
                              iconLeft: () => (0, l.jsx)(nD.A, { user: A, size: nj._3.SIZE_20 }),
                              id: "interaction-user",
                              label: A.username,
                              subtext: I.intl.string(I.t["04gxNg"]),
                          })
                        : null,
                ],
            });
        })(n1),
        tO = (function (e, n) {
            let { reducedMotion: t } = a.useContext(Q.C),
                i = (0, es.Id)(n),
                o = (0, C.bG)([eo.A], () => eo.A.can(z.xBc.MANAGE_MESSAGES, n) && i, [n, i]),
                s = e.reactions.reduce(
                    (e, n) =>
                        n.count_details?.vote != null ||
                        null != e.find((e) => (null != e.id && e.id === n.emoji.id) || e.name === n.emoji.name)
                            ? e
                            : [...e, n.emoji],
                    [],
                );
            return !o || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, eV.Gh)(e))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "remove-emoji-reactions",
                      label: I.intl.string(I.t["zx/e4P"]),
                      leadingAccessory: { type: "icon", icon: eZ.RemoveReactionIcon },
                      color: "danger",
                      children: s.map((i) =>
                          (0, l.jsx)(
                              r.Dr,
                              {
                                  id: `remove-emoji-reactions-${i.name ?? i.id}`,
                                  label: (0, el.b3)(i),
                                  action: (t) => {
                                      t.shiftKey
                                          ? (0, ei.Jf)(n.id, e.id, i)
                                          : eW.A.show({
                                                title: I.intl.string(I.t["73GqTz"]),
                                                body: I.intl.string(I.t.dmy5bn),
                                                confirmText: I.intl.string(I.t.p89ACt),
                                                confirmVariant: "critical-primary",
                                                cancelText: I.intl.string(I.t.gm1Vej),
                                                onConfirm: () => {
                                                    (0, ei.Jf)(n.id, e.id, i);
                                                },
                                            });
                                  },
                                  leadingAccessory: {
                                      type: "emoji",
                                      emojiId: i.id,
                                      src: null == i.id ? eg.Ay.getURL(i.name ?? "") : void 0,
                                      animated: i.animated,
                                  },
                                  icon: (e) => (0, l.jsx)(e$, { ...e, reducedMotionEnabled: t.enabled, emoji: i }),
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              i.name ?? i.id,
                          ),
                      ),
                  });
        })(n1, n6),
        tR =
            ((nK = (0, es.Id)(n6)),
            !(0, C.bG)([eo.A], () => eo.A.can(z.xBc.MANAGE_MESSAGES, n6) && nK, [n6, nK]) ||
            null == n1.reactions ||
            0 === n1.reactions.length ||
            (n1.isPoll() && !(0, eV.Gh)(n1))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "remove-reactions",
                      label: I.intl.string(I.t.ZbtGBm),
                      leadingAccessory: { type: "icon", icon: eJ.ReactionMinusIcon },
                      action: function (e) {
                          e.shiftKey
                              ? (0, ei.Go)(n6.id, n1.id)
                              : eW.A.show({
                                    title: I.intl.string(I.t.iz3vYX),
                                    body: I.intl.string(I.t.VpjOCo),
                                    confirmText: I.intl.string(I.t.p89ACt),
                                    confirmVariant: "critical-primary",
                                    cancelText: I.intl.string(I.t.gm1Vej),
                                    onConfirm: () => {
                                        (0, ei.Go)(n6.id, n1.id);
                                    },
                                });
                      },
                      color: "danger",
                  })),
        tk = (0, eS.A)(n1, n6),
        tP =
            ((nq = (0, C.bG)([nn.A], () => nn.A.getGuildId())),
            (nz = (0, ne.Qo)(nq)),
            (0, ni.ul)(n1)
                ? (0, l.jsx)(r.Dr, {
                      id: "report",
                      label: nz ? I.intl.string(I.t.n5EBAJ) : I.intl.string(I.t.GwbdGe),
                      action: () => (0, e2.V2)(n1, "web_message_context_menu"),
                      icon: nz ? e1.ClydeIcon : e6.FlagIcon,
                      leadingAccessory: { type: "icon", icon: nz ? e1.ClydeIcon : e6.FlagIcon },
                      color: "danger",
                  })
                : null),
        tU =
            ((nV = (0, C.bG)([e5.Ay], () => e5.Ay.get("iar_testing"))),
            (nJ = (0, C.bG)([nt.default], () => nt.default.getCurrentUser())),
            (0, ni.ul)(n1) && null != nJ && nJ.isStaff() && nV
                ? (0, l.jsx)(r.Dr, {
                      id: "staff-test-message-report",
                      label: "[STAFF] Test Message Report",
                      action: () => (0, e2.Rj)(n1, "web_message_context_menu"),
                      icon: e6.FlagIcon,
                      leadingAccessory: { type: "icon", icon: e6.FlagIcon },
                      color: "danger",
                  })
                : null),
        tB = (function (e) {
            let n = (0, C.bG)([e9.A], () => e9.A.hasReportedMessage(e.channel_id, e.id)),
                t = (0, e4.KB)(e),
                i = t ? [e8.M.REPORT_TO_MOD_NEW_TAG] : [],
                [a, o] = (0, e7.kn)(i);
            return ((0, e3.l0)(() => {
                t && o(nl.i.AUTO_DISMISS);
            }),
            t)
                ? (0, l.jsx)(r.Dr, {
                      id: "report-to-mod",
                      label: n ? I.intl.string(na.default["8wsdng"]) : I.intl.string(na.default["1D+vqy"]),
                      action: () => {
                          (o(nl.i.USER_DISMISS), (0, e2.dy)(e));
                      },
                      icon: e6.FlagIcon,
                      disabled: n,
                      leadingAccessory: { type: "icon", icon: e6.FlagIcon },
                      badge: a === e8.M.REPORT_TO_MOD_NEW_TAG ? "new" : void 0,
                      color: "danger",
                  })
                : null;
        })(n1),
        tX = (0, eL.A)({ type: n7, id: n2, name: n9 }),
        tF = (function (e, n) {
            let { perGuildMaxCount: t } = B.i$[W],
                { isLoading: i, saveRule: o, errorMessage: s } = (0, X.S)(),
                { createNewEditingRule: d } = (0, X.U)(),
                [u, g] = a.useState(!1),
                [A, m] = (0, U.H6)(n),
                { rulesByTriggerType: f, updateRule: p } = (0, U.wP)(n),
                h = a.useMemo(() => f[W] ?? [], [f]),
                E = 0 === h.length,
                _ = t > h.length && !E;
            if (!a.useMemo(() => (0, F.i_)(n), [n]) || null == e || 0 === e.length || null == n) return null;
            let b = e.split(" "),
                S = b.length;
            try {
                (0, P.wk)(b, 1e3);
            } catch (e) {
                return null;
            }
            function x() {
                null == e ||
                    (null != n &&
                        ((0, c.Z_)(),
                        q.A.open(n, z.BEX.GUILD_AUTOMOD),
                        setTimeout(() => {
                            d(n, W, { triggerMetadata: { keywordFilter: [e], regexPatterns: [], allowList: [] } });
                        }, 400)));
            }
            let j = (0, l.jsx)(r.Dr, { id: "automod-rules-loading", label: I.intl.string(I.t.ZTNur7) });
            return (
                A ||
                    (j = (0, l.jsxs)(l.Fragment, {
                        children: [
                            E &&
                                (0, l.jsx)(r.Dr, {
                                    id: "add-first-rule",
                                    label: I.intl.string(I.t.f72Zqb),
                                    action: x,
                                    disabled: i,
                                }),
                            h.map((n) => {
                                let t = (0, B.J6)(W).reduce((e, t) => {
                                    let i = n.actions.find((e) => {
                                        let { type: n } = e;
                                        return t === n;
                                    });
                                    if (null == i) return e;
                                    let l = (0, H.x)(t, i);
                                    return e + `, ${l?.headerText}`;
                                }, "");
                                return (0, l.jsx)(
                                    r.iD,
                                    {
                                        id: n.id,
                                        label: n.name,
                                        subtext: (0, l.jsx)(R.E, {
                                            color: "text-muted",
                                            className: J.XX,
                                            variant: "body-xs/normal",
                                            children: t.slice(2),
                                        }),
                                        group: "automod-rule-selection",
                                        checked: !1,
                                        disabled: i,
                                        action: () =>
                                            (async function (n) {
                                                if (null == e || ((0, c.Z_)(), !(await (0, K.Zy)(n.name, e)))) return;
                                                let t = {
                                                    ...n,
                                                    triggerMetadata: {
                                                        ...n.triggerMetadata,
                                                        keywordFilter: [...(n.triggerMetadata?.keywordFilter ?? []), e],
                                                    },
                                                };
                                                (await o(t, h),
                                                    p(t),
                                                    null != s
                                                        ? (0, y.P0)({
                                                              text: I.intl.string(I.t.wH6L0r),
                                                              variant: "critical",
                                                          })
                                                        : (0, y.P0)({
                                                              text: I.intl.string(I.t["0rdYm2"]),
                                                              variant: "success",
                                                          }));
                                            })(n),
                                    },
                                    n.id,
                                );
                            }),
                            _ &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(r.bX, {}),
                                        (0, l.jsx)(r.Dr, {
                                            id: "add-another-rule",
                                            label: I.intl.string(I.t["0K5jDE"]),
                                            action: x,
                                            disabled: i,
                                        }),
                                    ],
                                }),
                        ],
                    })),
                (0, l.jsx)(r.Dr, {
                    id: "guild-automod-add-selection",
                    label: I.intl.formatToPlainString(I.t.Kkjv1m, { keywordCount: S }),
                    leadingAccessory: { type: "icon", icon: k.ShieldIcon },
                    onFocus: function () {
                        u || (g(!0), m());
                    },
                    children: j,
                })
            );
        })(n5, n6.getGuildId()),
        tH = (0, x.A)(tn, n1, {
            shouldHideMediaOptions: tc,
            contentType: n3?.contentType,
            originalContentType: n3?.originalContentType,
        }),
        tK =
            ((nW = (0, nk.Fg)(n1)),
            (nZ = null != n3 && (0, nk.qo)({ type: nR.D.GenericMedia, media: n3 }, nW)),
            null != n3 && nZ
                ? (0, l.jsx)(
                      r.Dr,
                      {
                          id: "report-image-false-positive",
                          label: I.intl.string(I.t.ZH7P2h),
                          action: function () {
                              null != n3 &&
                                  (0, ez.mM)(async () => {
                                      let { default: e } = await t(544135);
                                      return (n) =>
                                          (0, l.jsx)(e, {
                                              channelId: n1.channel_id,
                                              messageId: n1.id,
                                              mediaItemUrl: n3.url,
                                              ...n,
                                          });
                                  });
                          },
                          leadingAccessory: { type: "icon", icon: nO.ImageWarningIcon },
                          icon: nO.ImageWarningIcon,
                      },
                      "report-image-false-positive",
                  )
                : null),
        tq =
            ((n$ = n1.getContentMessage()),
            (0, eR.Lt)(n$.flags, z.pr7.IS_VOICE_MESSAGE) && 0 !== n$.attachments.length
                ? (0, l.jsx)(r.Dr, {
                      id: "save-voice-message-audio",
                      label: I.intl.string(I.t.vbAEaA),
                      leadingAccessory: { type: "icon", icon: A.DownloadIcon },
                      icon: A.DownloadIcon,
                      action: () => {
                          let e = (0, nP.XW)(n$.attachments[0].url);
                          (0, nU.h)({ href: e });
                      },
                  })
                : null),
        tz =
            null != (nY = (0, f.lw)(n1.getContentMessage())) && (0, m.Mt)("message_context_menu")
                ? (0, l.jsx)(r.Dr, {
                      id: "save-checkpoint-character",
                      label: I.intl.string(_.default.CYcfZo),
                      leadingAccessory: { type: "icon", icon: A.DownloadIcon },
                      icon: A.DownloadIcon,
                      action: () => {
                          ((0, p.p3)(),
                              (async function (e) {
                                  try {
                                      let n = await (async function (e) {
                                          let n = await Promise.all((0, f.dC)(e).map(E)),
                                              t = document.createElement("canvas");
                                          ((t.width = n[0]?.naturalWidth ?? 0), (t.height = n[0]?.naturalHeight ?? 0));
                                          let i = t.getContext("2d");
                                          if (null == i) throw Error("No 2D canvas context");
                                          return (
                                              n.forEach((e) => i.drawImage(e, 0, 0, t.width, t.height)),
                                              new Promise((e, n) => {
                                                  t.toBlob((t) => {
                                                      null != t ? e(t) : n(Error("Canvas export failed"));
                                                  }, "image/png");
                                              })
                                          );
                                      })(e);
                                      await (0, h.H)(n, "checkpoint-character.png");
                                  } catch {
                                      (0, y.P0)({ text: I.intl.string(I.t["8Ve/S0"]), variant: "critical" });
                                  }
                              })(nY));
                      },
                  })
                : null,
        tV =
            ((n = { shouldHideMediaOptions: tc }),
            (nQ = n3?.url ?? ""),
            (n0 = (0, C.bG)([nB.Ay], () => nB.Ay.isVideoStatsEnabled(nQ))),
            (n8 = a.useCallback(() => {
                "" !== nQ && (0, nB.FM)(nQ);
            }, [nQ])),
            null != n3 && (0, nX.XB)(n3.contentType) && n?.shouldHideMediaOptions !== !0
                ? (0, l.jsx)(r.sL, {
                      id: "video-stats-for-nerds",
                      label: "Stats for Nerds",
                      leadingAccessory: { type: "icon", icon: ex.CircleInformationIcon },
                      checked: n0,
                      action: n8,
                  })
                : null),
        tJ = (0, j.A)(n4 ?? te, tt, n1, { shouldHideMediaOptions: tc }),
        tW = (0, b.A)({ id: n1.id, label: I.intl.string(I.t.zBoHlf), shiftId: `${n1.channel_id}-${n1.id}` }),
        tZ = (function (e) {
            let { messageId: n, itemId: t, type: i, imageSrc: o } = e,
                s = ec.Q_.useSetting(),
                c = a.useCallback(() => {
                    (0, eb.C)(n);
                }, [n]),
                d = a.useCallback(() => {
                    null != t && (0, eb.C)(t);
                }, [t]),
                u = a.useCallback(() => {
                    null != o && (0, eb.C)(o);
                }, [o]),
                g = a.useCallback(() => {
                    null != o && (0, eC.A)(o);
                }, [o]),
                A = "sticker" === i;
            if (!s || !eb.p5 || ("emoji" !== i && !A) || null == t) return null;
            let m = A ? I.intl.string(I.t.SJ3249) : I.intl.string(I.t.Ap2oVy),
                f = A ? I.intl.string(I.t.B1ubHx) : I.intl.string(I.t.cIoudn),
                p = A ? I.intl.string(I.t["qAEi+C"]) : I.intl.string(I.t.gDAM2n);
            return (0, l.jsxs)(r.Dr, {
                id: "message-details",
                label: I.intl.string(I.t.IqqJNI),
                leadingAccessory: { type: "icon", icon: ex.CircleInformationIcon },
                children: [
                    (0, l.jsx)(r.Dr, {
                        id: "copy-message-id",
                        label: I.intl.string(I.t.zBoHlf),
                        action: c,
                        leadingAccessory: { type: "icon", icon: ej.IdIcon },
                    }),
                    (0, l.jsx)(r.Dr, {
                        id: "copy-item-id",
                        label: m,
                        action: d,
                        leadingAccessory: { type: "icon", icon: ej.IdIcon },
                    }),
                    null != o &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(r.Dr, {
                                    id: "copy-image-link",
                                    label: f,
                                    action: u,
                                    leadingAccessory: { type: "icon", icon: eM.LinkIcon },
                                }),
                                (0, l.jsx)(r.Dr, {
                                    id: "open-image-link",
                                    label: p,
                                    action: g,
                                    leadingAccessory: { type: "icon", icon: eD.BrowserIcon },
                                    trailingIndicator: { type: "icon", icon: ev.LinkExternalSmallIcon },
                                }),
                            ],
                        }),
                ],
            });
        })({ messageId: n1.id, itemId: n2, type: n7, imageSrc: te }),
        t$ = (0, l.jsx)(r.rX, { children: tZ ?? tW }),
        tY = (0, l.jsxs)(r.rX, { children: [tX, tF, tH, tK, tq, tz, tV] });
    return (0, l.jsxs)(s.W, {
        "data-menu-migrated": !0,
        navId: tr,
        onClose: to,
        "aria-label": ts,
        onSelect: tu,
        children: [
            (0, l.jsx)(r.rX, { children: tA }),
            (0, l.jsx)(r.rX, { children: tm }),
            (0, l.jsxs)(r.rX, { children: ["" === n5 ? tg : null, tf, tw] }),
            (0, l.jsxs)(r.rX, { children: [tp, ty, th, tI] }),
            (0, l.jsxs)(r.rX, { children: [tE, t_, tb, tS, tx, tj, tM, tD, tv, tC, tT, tG, tL, tN] }),
            (0, l.jsxs)(r.rX, { children: [tO, tR, tk, ti && tP, ti && tU, tB] }),
            t$,
            tY,
            null == tZ && (0, l.jsx)(r.rX, { children: tJ }),
        ],
    });
}
