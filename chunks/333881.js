t.d(n, { default: () => nH, c: () => nK });
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
    h = t(858899),
    p = t(564218),
    y = t(792996);
async function I(e) {
    let n = new Image();
    return ((n.crossOrigin = "anonymous"), (n.src = e), await n.decode(), n);
}
var E = t(532294),
    _ = t(852717),
    x = t(50268),
    b = t(373963),
    S = t(115184),
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
                label: y.intl.string(y.t.grdwwt),
                icon: D.ClockXIcon,
                leadingAccessory: { type: "icon", icon: D.ClockXIcon },
                action: () => {
                    v.A.endPollEarly({ channelId: e.channel_id, messageId: e.id });
                },
                iconProps: { color: "currentColor" },
            }),
    };
var N = t(207560),
    O = t(173500),
    R = t(129230),
    k = t(834730),
    P = t(231483),
    U = t(627794),
    B = t(928348),
    F = t(850216),
    X = t(364806),
    H = t(979816),
    K = t(204300),
    q = t(264349),
    z = t(727419),
    V = t(652215),
    J = t(890634),
    W = t(654502);
let Z = J.uh.KEYWORD;
var $ = t(880457),
    Y = t(503698),
    Q = t.n(Y),
    ee = t(844222),
    en = t(460905),
    et = t(217306),
    ei = t(822123),
    el = t(649963),
    ea = t(815807),
    eo = t(834942),
    er = t(576705);
let es = (e) => {
    let n = e.getGuildId();
    return (
        ((null != n && eo.A.canChatInGuild(n) && er.A.can(V.xBc.ADD_REACTIONS, e)) || e.isPrivate()) && !e.isSystemDM()
    );
};
var ec = t(406704),
    ed = t(253932),
    eu = t(486020),
    eg = t(188567),
    eA = t(690521),
    em = t(307731),
    ef = t(482496);
function eh(e) {
    let { emoji: n, reducedMotionEnabled: t, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: Q()(i, ef.Z),
        src:
            null != n.id
                ? eu.Ay.getEmojiURL({ id: n.id, animated: n.animated && (!t || a), size: 18 })
                : eA.Ay.getURL(n.optionallyDiverseSequence ?? ""),
        alt: "",
    });
}
var ep = t(290136),
    ey = t(519222),
    eI = t(345254),
    eE = t(624479),
    e_ = t(257249),
    ex = t(383233),
    eb = t(957565),
    eS = t(483768),
    ej = t(885574),
    eM = t(473935),
    eD = t(173936),
    ev = t(93688),
    eC = t(509434),
    eT = t(975807),
    eG = t(22231),
    ew = t(138399),
    eL = t(697470),
    eN = t(253925),
    eO = t(843626),
    eR = t(427209);
t(938796);
var ek = t(665260),
    eP = t(563119),
    eU = t(581925),
    eB = t(521427),
    eF = t(20883),
    eX = t(979766),
    eH = t(866665),
    eK = t(816426);
let eq = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];
function ez(e) {
    let { emoji: n, isFocused: t } = e,
        { animated: i, src: a, surrogates: o } = n;
    return (
        null == a && null != n.id
            ? (a = eu.Ay.getEmojiURL({ id: n.id, animated: !!i, size: 20 }))
            : null == a && (a = eA.Ay.getURL(o)),
        (0, l.jsx)(eH.m, {
            text: (0, eA.N)(n),
            hideOnClick: !0,
            spacing: 16,
            forceOpen: t,
            children: (0, l.jsx)("div", {
                "aria-label": y.intl.formatToPlainString(y.t["/iYSo6"], { emojiName: n.name }),
                className: Q()(eK.x6, { [eK.in]: t }),
                children:
                    null == a || "" === a.trim()
                        ? (0, l.jsx)("span", { className: Q()("emoji", "emoji-text", eK.Kk), children: o })
                        : (0, l.jsx)("img", { className: eK.Kk, src: a, alt: "" }),
            }),
        })
    );
}
var eV = t(192308),
    eJ = t(969632),
    eW = t(997571),
    eZ = t(157559),
    e$ = t(769297);
function eY(e) {
    let { emoji: n, reducedMotionEnabled: t, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: i,
        src:
            null != n.id
                ? eu.Ay.getEmojiURL({ id: n.id, animated: n.animated && (!t || a), size: 18 })
                : eA.Ay.getURL(n.name ?? ""),
        alt: "",
    });
}
var eQ = t(110384),
    e0 = t(973196),
    e8 = t(517997),
    e1 = t(554146),
    e6 = t(111159),
    e5 = t(138134),
    e2 = t(964486),
    e3 = t(865116),
    e7 = t(263775),
    e9 = t(928658),
    e4 = t(400528),
    ne = t(374710),
    nn = t(715757),
    nt = t(967198),
    ni = t(287809),
    nl = t(628691),
    na = t(49999),
    no = t(307805),
    nr = t(663417),
    ns = t(965407),
    nc = t(249700),
    nd = t(556112),
    nu = t(54570),
    ng = t(8880),
    nA = t(163328),
    nm = t(620632),
    nf = t(152367),
    nh = t(37646),
    np = t(73153),
    ny = t(147087),
    nI = t(773669),
    nE = t(132183);
let n_ = new Map();
var nx = t(534890),
    nb = t(181041),
    nS = t(828488),
    nj = t(485845),
    nM = t(778712),
    nD = t(803306),
    nv = t(966327),
    nC = t(597929),
    nT = t(682163),
    nG = t(100663),
    nw = t(260509),
    nL = t(619019),
    nN = t(734057),
    nO = t(71393),
    nR = t(87221),
    nk = t(930125),
    nP = t(282108),
    nU = t(803316),
    nB = t(889558),
    nF = t(953584),
    nX = t(273185);
function nH(e) {
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
            onHeightUpdate: h,
        } = e,
        { analyticsLocations: p } = (0, g.Ay)([u.A.MESSAGE_CONTEXT_MENU]),
        I = d,
        E = d.getAttribute("data-type"),
        _ = d.getAttribute("data-id"),
        x = d.getAttribute("data-name");
    if (null != A) t = n = i = A.url;
    else
        for (; (0, o.vq)(I);)
            ((0, o.vq)(I, HTMLImageElement) && null != I.src && (t = I.src),
                (0, o.vq)(I, HTMLAnchorElement) &&
                    null != I.href &&
                    ((n = I.href),
                    (a = I.textContent),
                    null == t &&
                        "img" === I.getAttribute("data-role") &&
                        ((t = n),
                        I.hasAttribute("data-safe-src") &&
                            "" !== I.getAttribute("data-safe-src") &&
                            (i = I.getAttribute("data-safe-src")))),
                (I = I.parentElement));
    let b = document.getSelection()?.toString() ?? "";
    return (0, l.jsx)(g.f5, {
        value: p,
        children: nK({
            message: s,
            channel: r,
            mediaItem: A,
            textSelection: b,
            favoriteableType: E,
            favoriteableId: _,
            favoriteableName: x,
            itemHref: n,
            itemSrc: t,
            itemSafeSrc: i,
            itemTextContent: a,
            canReport: !0,
            onHeightUpdate: h,
            onSelect: f,
            onClose: c.Z_,
            navId: "message",
            ariaLabel: y.intl.string(y.t.ChPNkN),
            shouldHideMediaOptions: m,
        }),
    });
}
function nK(e) {
    var n;
    let i,
        o,
        u,
        D,
        v,
        G,
        J,
        Y,
        Q,
        eu,
        ef,
        eH,
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
        n1,
        n6,
        {
            message: n5,
            channel: n2,
            mediaItem: n3,
            textSelection: n7,
            favoriteableType: n9,
            favoriteableId: n4,
            favoriteableName: te,
            itemHref: tn,
            itemSrc: tt,
            itemSafeSrc: ti,
            itemTextContent: tl,
            canReport: ta,
            onHeightUpdate: to,
            onSelect: tr,
            onClose: ts,
            navId: tc,
            ariaLabel: td,
            shouldHideMediaOptions: tu = !1,
        } = e,
        tg = a.useRef(null);
    (a.useEffect(() => {
        tg.current = Date.now();
    }, []),
        a.useEffect(
            () => () => {
                if (null != tg.current) {
                    let e = Date.now() - tg.current;
                    R.default.track(V.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: e,
                        channel_id: n2.id,
                        guild_id: n2.getGuildId() ?? void 0,
                        message_id: n5.id,
                    });
                }
            },
            [n2, n5],
        ));
    let tA = a.useCallback(() => {
            if (null != tg.current) {
                let e = Date.now() - tg.current;
                R.default.track(V.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: e,
                    channel_id: n2.id,
                    guild_id: n2.getGuildId() ?? void 0,
                    message_id: n5.id,
                });
            }
            tr?.();
        }, [tr, n2, n5]),
        tm = (0, N.lF)(),
        tf =
            ((i = (0, ei.D6)(n2.guild_id).filter(
                (e) =>
                    !(e.useSpriteSheet && eq.indexOf(e.uniqueName ?? "") >= 0) &&
                    !eA.Ay.isEmojiPremiumLocked({ emoji: e, channel: n2, intention: em.EmojiIntention.REACTION }),
            )).length > 4 && (i.length = 4),
            (o = ed.jW.useSetting()),
            (u = (0, ec.Id)(n2)),
            (0, C.bG)([eo.A, er.A], () => o && u && es(n2), [n2, u, o]) &&
            i.length > 0 &&
            n5.type !== V.lAJ.MEDIA_MENTION_MESSAGE
                ? (0, l.jsx)(r.rX, {
                      className: eK.iE,
                      children: i.map((e, n) =>
                          (0, l.jsx)(
                              r.Dr,
                              {
                                  id: `quickreact-${e.id ?? n}`,
                                  render: (n) => {
                                      let { isFocused: t } = n;
                                      return (0, l.jsx)(ez, { emoji: e, isFocused: t });
                                  },
                                  action: () => {
                                      (0, el.BB)(n2.id, n5.id, (0, ea.jq)(e), el.qN.MESSAGE_CONTEXT_MENU);
                                  },
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              n,
                          ),
                      ),
                  })
                : null),
        th = (0, b.A)(n7),
        tp = (0, M.A)(n7),
        ty = (function (e, n) {
            let { reducedMotion: t } = a.useContext(ee.C),
                i = (0, ec.Id)(n),
                o = (0, C.bG)([eo.A, er.A], () => es(n) && i && !n.isMediaThread(), [n, i]),
                s = (0, ei.D6)(n.getGuildId());
            if (!ed.jW.getSetting() || !o) return null;
            let c = s
                .filter(
                    (e) =>
                        !eA.Ay.isEmojiFilteredOrLocked({ emoji: e, channel: n, intention: em.EmojiIntention.REACTION }),
                )
                .slice(0, 12)
                .map((i, a) =>
                    (0, l.jsx)(
                        r.Dr,
                        {
                            color: "default",
                            id: i.id ?? i.optionallyDiverseSequence ?? i.name,
                            label: `:${i.name}:`,
                            icon: (e) => (0, l.jsx)(eh, { ...e, reducedMotionEnabled: t.enabled, emoji: i }),
                            leadingAccessory: {
                                type: "emoji",
                                emojiId: i.id,
                                src: null == i.id ? eA.Ay.getURL(i.optionallyDiverseSequence ?? "") : void 0,
                                animated: i.animated,
                            },
                            action: () => {
                                (0, el.BB)(n.id, e.id, (0, ea.jq)(i), el.qN.MESSAGE_CONTEXT_MENU);
                            },
                            dontCloseOnActionIfHoldingShiftKey: !0,
                        },
                        a,
                    ),
                );
            return (0, l.jsx)(r.Dr, {
                id: "add-reaction",
                label: y.intl.string(y.t.lfIHs4),
                leadingAccessory: { type: "icon", icon: en.ReactionIcon },
                action: () => {
                    eg._.dispatchKeyed(V.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                },
                color: "default",
                children: (0, l.jsxs)(l.Fragment, {
                    children: [
                        c,
                        (0, l.jsx)(r.bX, {}),
                        (0, l.jsx)(r.Dr, {
                            color: "default",
                            id: "other-reactions",
                            label: y.intl.string(y.t["OBCR+p"]),
                            icon: en.ReactionIcon,
                            leadingAccessory: { type: "icon", icon: et.ViewReactionIcon },
                            action: () => {
                                eg._.dispatchKeyed(V.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                            },
                        }),
                    ],
                }),
            });
        })(n5, n2),
        tI =
            ((D = (0, C.bG)([T.default], () => T.default.getId())),
            (v = (0, ec.Id)(n2)),
            (G = (0, ec.s5)(n2)),
            (0, eL.A)(n5, D) && v && !G
                ? (0, l.jsx)(r.Dr, {
                      id: "edit",
                      label: y.intl.string(y.t.fsBWmS),
                      action: () => ew.A.startEditMessageRecord(n2.id, n5),
                      leadingAccessory: { type: "icon", icon: eG.PencilIcon },
                      icon: eG.PencilIcon,
                  })
                : null),
        tE =
            ((J = (0, e8.u)(n2, n5)),
            (Y = (0, e0.A)()),
            !J || Y
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "reply",
                      label: y.intl.string(y.t["5IEsGx"]),
                      leadingAccessory: { type: "icon", icon: eQ.ArrowAngleLeftUpIcon },
                      icon: eQ.ArrowAngleLeftUpIcon,
                      action: (e) => {
                          (0, ey.$b)(n2, n5, e);
                      },
                  })),
        t_ = (0, eO.m)(n5)
            ? (0, l.jsx)(r.Dr, {
                  id: "forward",
                  label: y.intl.string(y.t.I3ltXO),
                  leadingAccessory: { type: "icon", icon: eR.A },
                  icon: eR.A,
                  action: () => {
                      (0, ey.Z4)(n2, n5);
                  },
              })
            : null,
        tx = (0, ec.n)(n2, n5)
            ? (0, l.jsx)(r.Dr, {
                  id: "thread",
                  label: y.intl.string(y.t.rBIGBL),
                  leadingAccessory: { type: "icon", icon: nA.ThreadIcon },
                  icon: nA.ThreadIcon,
                  action: () => {
                      (0, ey.Nw)(n2, n5);
                  },
              })
            : null,
        tb = (function (e) {
            if (!eb.p5) return null;
            let n = e.getContentMessage(),
                t = (0, ex._c)(n) ? (0, e_.kC)(n.components) : n.content;
            return null == t || 0 === t.length
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "copy-text",
                      label: y.intl.string(y.t.JrGD7E),
                      leadingAccessory: { type: "icon", icon: eE.CopyIcon },
                      icon: eE.CopyIcon,
                      action: () => {
                          (0, eb.C)(t);
                      },
                  });
        })(n5),
        tS = (function (e) {
            let n,
                {
                    handleTranslate: i,
                    handleRevertTranslation: o,
                    isTranslating: s,
                    isTranslated: c,
                } = (function (e) {
                    let [n, t] = a.useState(!1),
                        i = (0, C.bG)([nI.default], () => nI.default.locale);
                    return {
                        handleTranslate: a.useCallback(
                            async (l, a) => {
                                if (n) return;
                                let o = l ?? i;
                                t(!0);
                                let r = a ?? (0, y.getAvailableLocales)().find((e) => e.value === o)?.name ?? o;
                                (n_.has(e.id) || n_.set(e.id, e.content),
                                    (0, h.P0)({
                                        text: y.intl.formatToPlainString(y.t.Znl8Z8, { targetLanguage: r }),
                                        icon: nf.MagicWandIcon,
                                    }));
                                try {
                                    let n = await nm.Bo.post({
                                        url: V.Rsh.AI_TRANSLATE,
                                        body: { content: e.content, locale: o },
                                        rejectWithError: (0, nm.fT)(),
                                    });
                                    n.body &&
                                        (np.h.dispatch({
                                            type: "MESSAGE_UPDATE",
                                            message: { id: e.id, channel_id: e.channel_id, content: n.body.content },
                                        }),
                                        (0, h.P0)({
                                            text: y.intl.formatToPlainString(y.t.FtVUqm, { targetLanguage: r }),
                                            variant: "success",
                                        }));
                                } finally {
                                    t(!1);
                                }
                            },
                            [e, n, i],
                        ),
                        handleRevertTranslation: a.useCallback(() => {
                            let n = n_.get(e.id);
                            null != n &&
                                (np.h.dispatch({
                                    type: "MESSAGE_UPDATE",
                                    message: { id: e.id, channel_id: e.channel_id, content: n },
                                }),
                                n_.delete(e.id));
                        }, [e.id, e.channel_id]),
                        isTranslating: n,
                        isTranslated: n_.has(e.id),
                    };
                })(e),
                d =
                    ((n = (0, y.getAvailableLocales)()),
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
                                        icon: () => (0, l.jsx)("img", { alt: "", src: n, className: nE.M }),
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
                          label: y.intl.string(y.t.JC9BXn),
                          leadingAccessory: { type: "icon", icon: nh.LanguageIcon },
                          icon: nh.LanguageIcon,
                          action: o,
                          disabled: s,
                      })
                    : (0, l.jsx)(r.Dr, {
                          id: "translate",
                          label: s ? y.intl.string(y.t.SVKIdU) : y.intl.string(y.t["6epDlR"]),
                          action: () => i(),
                          leadingAccessory: { type: "icon", icon: nh.LanguageIcon },
                          disabled: s,
                          children: d,
                      })
                : null;
        })(n5),
        tj = (0, eX.A)(n5, n2),
        tM = (0, eB.kn)(n5, n2, "MessageContextMenu")
            ? (0, ek.Lt)(n5.flags, V.pr7.IS_GUILD_OFFICIAL)
                ? (0, l.jsx)(r.Dr, {
                      id: "guild-official-unset",
                      action: () => {
                          ew.A.patchMessageGuildOfficial(n2.id, n5.id, !1);
                      },
                      label: y.intl.string(y.t["2km5Gf"]),
                      leadingAccessory: { type: "icon", icon: eP.StampXIcon },
                  })
                : (0, l.jsx)(r.Dr, {
                      id: "guild-official-set",
                      action: () => {
                          ew.A.patchMessageGuildOfficial(n2.id, n5.id, !0);
                      },
                      label: y.intl.string(y.t["lE/PG3"]),
                      leadingAccessory: { type: "icon", icon: eU.StampIcon },
                  })
            : null,
        tD = (0, $.A)(n5, n2),
        tv = (0, O.A)({
            commandType: d.kc.MESSAGE,
            commandTargetId: n5.id,
            channel: n2,
            guildId: void 0,
            onHeightUpdate: to,
            showIcon: !0,
        }),
        tC =
            n5.state !== V.cmJ.SEND_FAILED
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "resend",
                      label: y.intl.string(y.t.lXHojr),
                      leadingAccessory: { type: "icon", icon: nr.RefreshIcon },
                      action: () => (0, nc.A)(n2, n5, void 0, ns.A.getOptions(n5.id)),
                  }),
        tT = (0, eF.A)(n5, n2),
        tG =
            null != (Q = n2.getGuildId()) &&
            n5.type === V.lAJ.USER_JOIN &&
            er.A.canWithPartialContext(V.xBc.MANAGE_GUILD, { guildId: Q })
                ? (0, l.jsx)(r.Dr, {
                      id: "configure",
                      label: y.intl.string(y.t.NpHUi1),
                      leadingAccessory: { type: "icon", icon: ep.CircleQuestionIcon },
                      icon: ep.CircleQuestionIcon,
                      action: () => (0, ey.vc)(n2),
                  })
                : null,
        tw = (0, eI.A)(n5, n2),
        tL =
            ((eu = (0, nS.WU)(n2.getGuildId(), "message_context_menu")),
            (ef = (0, C.bG)([nb.A], () => nb.A.getConversationForMessage(n2.id, n5.id) ?? null, [n2.id, n5.id])),
            (eH = a.useCallback(() => {
                null != ef &&
                    (console.log("[ConversationHighlighting]", nb.A.getConversation(n2.id, ef)),
                    window.open(`https://yap-time.vibeyard.tools/?conversation=${ef}`, "_blank"));
            }, [n2.id, ef])),
            eu && null != ef
                ? (0, l.jsx)(r.Dr, {
                      id: "view-conversation",
                      label: "View Conversation",
                      leadingAccessory: { type: "icon", icon: nx.ChatIcon },
                      icon: nx.ChatIcon,
                      action: eH,
                  })
                : null),
        tN =
            ((nH = (0, C.bG)([ng.A], () => ng.A.isSpeakingMessage(n2.id, n5.id), [n2, n5])),
            "" === n5.content
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "tts",
                      label: nH ? y.intl.string(y.t.CJ30BP) : y.intl.string(y.t.yGLjXF),
                      leadingAccessory: { type: "icon", icon: nd.ChatSpeakIcon },
                      icon: nd.ChatSpeakIcon,
                      action: () => (nH ? (0, nu.pr)() : (0, nu.kP)(n2, n5)),
                  })),
        tO =
            null == n5.reactions || 0 === n5.reactions.length || (n5.isPoll() && !(0, eJ.Gh)(n5))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "reactions",
                      label: y.intl.string(y.t.wikODq),
                      leadingAccessory: { type: "icon", icon: et.ViewReactionIcon },
                      icon: et.ViewReactionIcon,
                      action: () =>
                          (0, eV.mM)(async () => {
                              let { default: e } = await Promise.all([t.e(569080), t.e(998186)]).then(
                                  t.bind(t, 112753),
                              );
                              return (n) => (0, l.jsx)(e, { ...n, message: n5 });
                          }),
                  }),
        tR =
            0 ===
            (nK = (function (e) {
                let n = (0, C.bG)([T.default], () => T.default.getId()),
                    { poll: t } = e;
                if (!e.isPoll() || null == t) return w;
                let i = [];
                return (t.expiry.isSameOrBefore(Date.now()) || e.author.id !== n || i.push(0), i);
            })(n5)).length
                ? null
                : (0, l.jsx)(l.Fragment, { children: nK.map((e) => L[e](n5)) }),
        tk = (function (e) {
            let { analyticsLocations: n } = (0, g.Ay)(),
                t = e.interactionMetadata?.authorizing_integration_owners[nj.b.USER_INSTALL],
                i = e.interactionMetadata?.authorizing_integration_owners[nj.b.GUILD_INSTALL],
                o = e.interactionMetadata?.user.id,
                s = (0, C.bG)([ni.default], () => ni.default.getUser(t)),
                c = (0, C.bG)([nO.A], () => nO.A.getGuild(i)),
                d = nN.A.getChannel(e.channel_id),
                u = d?.getGuildId(),
                A = (0, C.bG)([ni.default], () => ni.default.getUser(o));
            if (
                (a.useEffect(() => {
                    null == s && null != t && (0, nD.wz)(t);
                }, [s, t]),
                !(0, nC._)(e))
            )
                return null;
            null == A && (A = new nL.A(e.interactionMetadata?.user));
            let m = null;
            if (null != c) {
                let n = (0, nw.Iv)(c, 18, !0);
                m = (0, l.jsx)(r.Dr, {
                    disabled: !0,
                    iconLeft: () => (0, l.jsx)(nT.Ay, { guild: c, size: nT.Ay.Sizes.MINI }),
                    leadingAccessory: null != n ? { type: "image", src: n } : void 0,
                    id: "integration-owner",
                    label: c.name,
                    subtext: y.intl.formatToPlainString(y.t.ShLXXB, { application: e.author.username }),
                });
            } else
                null != s &&
                    (m = (0, l.jsx)(r.Dr, {
                        action: () =>
                            (0, nG.openUserProfileModal)({
                                userId: s.id,
                                guildId: u,
                                channelId: e.channel_id,
                                sourceAnalyticsLocations: n,
                            }),
                        leadingAccessory: { type: "avatar", src: s.getAvatarURL(u, 18) },
                        id: "integration-owner",
                        label: s.username,
                        iconLeft: () => (0, l.jsx)(nv.A, { user: s, size: nM._3.SIZE_20 }),
                        subtext: y.intl.formatToPlainString(y.t.ShLXXB, { application: e.author.username }),
                    }));
            return (0, l.jsxs)(r.Dr, {
                id: "view-interaction-info",
                label: y.intl.string(y.t.Rjezbz),
                leadingAccessory: { type: "icon", icon: ej.CircleInformationIcon },
                children: [
                    m,
                    null != A
                        ? (0, l.jsx)(r.Dr, {
                              action: () =>
                                  (0, nG.openUserProfileModal)({
                                      userId: A.id,
                                      guildId: u,
                                      channelId: e.channel_id,
                                      sourceAnalyticsLocations: n,
                                  }),
                              leadingAccessory: { type: "avatar", src: A.getAvatarURL(u, 18) },
                              iconLeft: () => (0, l.jsx)(nv.A, { user: A, size: nM._3.SIZE_20 }),
                              id: "interaction-user",
                              label: A.username,
                              subtext: y.intl.string(y.t["04gxNg"]),
                          })
                        : null,
                ],
            });
        })(n5),
        tP = (function (e, n) {
            let { reducedMotion: t } = a.useContext(ee.C),
                i = (0, ec.Id)(n),
                o = (0, C.bG)([er.A], () => er.A.can(V.xBc.MANAGE_MESSAGES, n) && i, [n, i]),
                s = e.reactions.reduce(
                    (e, n) =>
                        n.count_details?.vote != null ||
                        null != e.find((e) => (null != e.id && e.id === n.emoji.id) || e.name === n.emoji.name)
                            ? e
                            : [...e, n.emoji],
                    [],
                );
            return !o || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, eJ.Gh)(e))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "remove-emoji-reactions",
                      label: y.intl.string(y.t["zx/e4P"]),
                      leadingAccessory: { type: "icon", icon: e$.RemoveReactionIcon },
                      color: "danger",
                      children: s.map((i) =>
                          (0, l.jsx)(
                              r.Dr,
                              {
                                  id: `remove-emoji-reactions-${i.name ?? i.id}`,
                                  label: (0, ea.b3)(i),
                                  action: (t) => {
                                      t.shiftKey
                                          ? (0, el.Jf)(n.id, e.id, i)
                                          : eZ.A.show({
                                                title: y.intl.string(y.t["73GqTz"]),
                                                body: y.intl.string(y.t.dmy5bn),
                                                confirmText: y.intl.string(y.t.p89ACt),
                                                confirmVariant: "critical-primary",
                                                cancelText: y.intl.string(y.t.gm1Vej),
                                                onConfirm: () => {
                                                    (0, el.Jf)(n.id, e.id, i);
                                                },
                                            });
                                  },
                                  leadingAccessory: {
                                      type: "emoji",
                                      emojiId: i.id,
                                      src: null == i.id ? eA.Ay.getURL(i.name ?? "") : void 0,
                                      animated: i.animated,
                                  },
                                  icon: (e) => (0, l.jsx)(eY, { ...e, reducedMotionEnabled: t.enabled, emoji: i }),
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              i.name ?? i.id,
                          ),
                      ),
                  });
        })(n5, n2),
        tU =
            ((nq = (0, ec.Id)(n2)),
            !(0, C.bG)([er.A], () => er.A.can(V.xBc.MANAGE_MESSAGES, n2) && nq, [n2, nq]) ||
            null == n5.reactions ||
            0 === n5.reactions.length ||
            (n5.isPoll() && !(0, eJ.Gh)(n5))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "remove-reactions",
                      label: y.intl.string(y.t.ZbtGBm),
                      leadingAccessory: { type: "icon", icon: eW.ReactionMinusIcon },
                      action: function (e) {
                          e.shiftKey
                              ? (0, el.Go)(n2.id, n5.id)
                              : eZ.A.show({
                                    title: y.intl.string(y.t.iz3vYX),
                                    body: y.intl.string(y.t.VpjOCo),
                                    confirmText: y.intl.string(y.t.p89ACt),
                                    confirmVariant: "critical-primary",
                                    cancelText: y.intl.string(y.t.gm1Vej),
                                    onConfirm: () => {
                                        (0, el.Go)(n2.id, n5.id);
                                    },
                                });
                      },
                      color: "danger",
                  })),
        tB = (0, eS.A)(n5, n2),
        tF =
            ((nz = (0, C.bG)([nt.A], () => nt.A.getGuildId())),
            (nV = (0, nn.Qo)(nz)),
            (0, nl.ul)(n5)
                ? (0, l.jsx)(r.Dr, {
                      id: "report",
                      label: nV ? y.intl.string(y.t.n5EBAJ) : y.intl.string(y.t.GwbdGe),
                      action: () => (0, e9.V2)(n5, "web_message_context_menu"),
                      icon: nV ? e6.ClydeIcon : e5.FlagIcon,
                      leadingAccessory: { type: "icon", icon: nV ? e6.ClydeIcon : e5.FlagIcon },
                      color: "danger",
                  })
                : null),
        tX =
            ((nJ = (0, C.bG)([e3.Ay], () => e3.Ay.get("iar_testing"))),
            (nW = (0, C.bG)([ni.default], () => ni.default.getCurrentUser())),
            (0, nl.ul)(n5) && null != nW && nW.isStaff() && nJ
                ? (0, l.jsx)(r.Dr, {
                      id: "staff-test-message-report",
                      label: "[STAFF] Test Message Report",
                      action: () => (0, e9.Rj)(n5, "web_message_context_menu"),
                      icon: e5.FlagIcon,
                      leadingAccessory: { type: "icon", icon: e5.FlagIcon },
                      color: "danger",
                  })
                : null),
        tH = (function (e) {
            let n = (0, C.bG)([e4.A], () => e4.A.hasReportedMessage(e.channel_id, e.id)),
                t = (0, ne.KB)(e),
                i = t ? [e1.M.REPORT_TO_MOD_NEW_TAG] : [],
                [a, o] = (0, e7.kn)(i);
            return ((0, e2.l0)(() => {
                t && o(na.i.AUTO_DISMISS);
            }),
            t)
                ? (0, l.jsx)(r.Dr, {
                      id: "report-to-mod",
                      label: n ? y.intl.string(no.default["8wsdng"]) : y.intl.string(no.default["1D+vqy"]),
                      action: () => {
                          (o(na.i.USER_DISMISS), (0, e9.dy)(e));
                      },
                      icon: e5.FlagIcon,
                      disabled: n,
                      leadingAccessory: { type: "icon", icon: e5.FlagIcon },
                      badge: a === e1.M.REPORT_TO_MOD_NEW_TAG ? "new" : void 0,
                      color: "danger",
                  })
                : null;
        })(n5),
        tK = (0, eN.A)({ type: n9, id: n4, name: te }),
        tq = (function (e, n) {
            let { perGuildMaxCount: t } = F.i$[Z],
                { isLoading: i, saveRule: o, errorMessage: s } = (0, X.S)(),
                { createNewEditingRule: d } = (0, X.U)(),
                [u, g] = a.useState(!1),
                [A, m] = (0, B.H6)(n),
                { rulesByTriggerType: f, updateRule: p } = (0, B.wP)(n),
                I = a.useMemo(() => f[Z] ?? [], [f]),
                E = 0 === I.length,
                _ = t > I.length && !E;
            if (!a.useMemo(() => (0, H.i_)(n), [n]) || null == e || 0 === e.length || null == n) return null;
            let x = e.split(" "),
                b = x.length;
            try {
                (0, U.wk)(x, 1e3);
            } catch (e) {
                return null;
            }
            function S() {
                null == e ||
                    (null != n &&
                        ((0, c.Z_)(),
                        z.A.open(n, V.BEX.GUILD_AUTOMOD),
                        setTimeout(() => {
                            d(n, Z, { triggerMetadata: { keywordFilter: [e], regexPatterns: [], allowList: [] } });
                        }, 400)));
            }
            let j = (0, l.jsx)(r.Dr, { id: "automod-rules-loading", label: y.intl.string(y.t.ZTNur7) });
            return (
                A ||
                    (j = (0, l.jsxs)(l.Fragment, {
                        children: [
                            E &&
                                (0, l.jsx)(r.Dr, {
                                    id: "add-first-rule",
                                    label: y.intl.string(y.t.f72Zqb),
                                    action: S,
                                    disabled: i,
                                }),
                            I.map((n) => {
                                let t = (0, F.J6)(Z).reduce((e, t) => {
                                    let i = n.actions.find((e) => {
                                        let { type: n } = e;
                                        return t === n;
                                    });
                                    if (null == i) return e;
                                    let l = (0, K.x)(t, i);
                                    return e + `, ${l?.headerText}`;
                                }, "");
                                return (0, l.jsx)(
                                    r.iD,
                                    {
                                        id: n.id,
                                        label: n.name,
                                        subtext: (0, l.jsx)(k.E, {
                                            color: "text-muted",
                                            className: W.XX,
                                            variant: "body-xs/normal",
                                            children: t.slice(2),
                                        }),
                                        group: "automod-rule-selection",
                                        checked: !1,
                                        disabled: i,
                                        action: () =>
                                            (async function (n) {
                                                if (null == e || ((0, c.Z_)(), !(await (0, q.Zy)(n.name, e)))) return;
                                                let t = {
                                                    ...n,
                                                    triggerMetadata: {
                                                        ...n.triggerMetadata,
                                                        keywordFilter: [...(n.triggerMetadata?.keywordFilter ?? []), e],
                                                    },
                                                };
                                                (await o(t, I),
                                                    p(t),
                                                    null != s
                                                        ? (0, h.P0)({
                                                              text: y.intl.string(y.t.wH6L0r),
                                                              variant: "critical",
                                                          })
                                                        : (0, h.P0)({
                                                              text: y.intl.string(y.t["0rdYm2"]),
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
                                            label: y.intl.string(y.t["0K5jDE"]),
                                            action: S,
                                            disabled: i,
                                        }),
                                    ],
                                }),
                        ],
                    })),
                (0, l.jsx)(r.Dr, {
                    id: "guild-automod-add-selection",
                    label: y.intl.formatToPlainString(y.t.Kkjv1m, { keywordCount: b }),
                    leadingAccessory: { type: "icon", icon: P.ShieldIcon },
                    onFocus: function () {
                        u || (g(!0), m());
                    },
                    children: j,
                })
            );
        })(n7, n2.getGuildId()),
        tz = (0, S.A)(ti, n5, {
            shouldHideMediaOptions: tu,
            contentType: n3?.contentType,
            originalContentType: n3?.originalContentType,
        }),
        tV =
            ((nZ = (0, nP.Fg)(n5)),
            (n$ = null != n3 && (0, nP.qo)({ type: nk.D.GenericMedia, media: n3 }, nZ)),
            null != n3 && n$
                ? (0, l.jsx)(
                      r.Dr,
                      {
                          id: "report-image-false-positive",
                          label: y.intl.string(y.t.ZH7P2h),
                          action: function () {
                              null != n3 &&
                                  (0, eV.mM)(async () => {
                                      let { default: e } = await t(544135);
                                      return (n) =>
                                          (0, l.jsx)(e, {
                                              channelId: n5.channel_id,
                                              messageId: n5.id,
                                              mediaItemUrl: n3.url,
                                              ...n,
                                          });
                                  });
                          },
                          leadingAccessory: { type: "icon", icon: nR.ImageWarningIcon },
                          icon: nR.ImageWarningIcon,
                      },
                      "report-image-false-positive",
                  )
                : null),
        tJ =
            ((nY = n5.getContentMessage()),
            (0, ek.Lt)(nY.flags, V.pr7.IS_VOICE_MESSAGE) && 0 !== nY.attachments.length
                ? (0, l.jsx)(r.Dr, {
                      id: "save-voice-message-audio",
                      label: y.intl.string(y.t.vbAEaA),
                      leadingAccessory: { type: "icon", icon: A.DownloadIcon },
                      icon: A.DownloadIcon,
                      action: () => {
                          let e = (0, nU.XW)(nY.attachments[0].url);
                          (0, nB.h)({ href: e });
                      },
                  })
                : null),
        tW =
            ((nQ = (0, f._S)(n5.getContentMessage())),
            null != (n0 = nQ?.version === E.wk.V2026 ? nQ.character : null) && (0, m.Mt)("message_context_menu")
                ? (0, l.jsx)(r.Dr, {
                      id: "save-checkpoint-character",
                      label: y.intl.string(_.default.CYcfZo),
                      leadingAccessory: { type: "icon", icon: A.DownloadIcon },
                      icon: A.DownloadIcon,
                      action: () =>
                          (async function (e) {
                              try {
                                  let n = await (async function (e) {
                                      let n = await Promise.all((0, f.dC)(e).map(I)),
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
                                  await (0, p.H)(n, "checkpoint-character.png");
                              } catch {
                                  (0, h.P0)({ text: y.intl.string(y.t["8Ve/S0"]), variant: "critical" });
                              }
                          })(n0),
                  })
                : null),
        tZ =
            ((n = { shouldHideMediaOptions: tu }),
            (n8 = n3?.url ?? ""),
            (n1 = (0, C.bG)([nF.Ay], () => nF.Ay.isVideoStatsEnabled(n8))),
            (n6 = a.useCallback(() => {
                "" !== n8 && (0, nF.FM)(n8);
            }, [n8])),
            null != n3 && (0, nX.XB)(n3.contentType) && n?.shouldHideMediaOptions !== !0
                ? (0, l.jsx)(r.sL, {
                      id: "video-stats-for-nerds",
                      label: "Stats for Nerds",
                      leadingAccessory: { type: "icon", icon: ej.CircleInformationIcon },
                      checked: n1,
                      action: n6,
                  })
                : null),
        t$ = (0, j.A)(tn ?? tt, tl, n5, { shouldHideMediaOptions: tu }),
        tY = (0, x.A)({ id: n5.id, label: y.intl.string(y.t.zBoHlf), shiftId: `${n5.channel_id}-${n5.id}` }),
        tQ = (function (e) {
            let { messageId: n, itemId: t, type: i, imageSrc: o } = e,
                s = ed.Q_.useSetting(),
                c = (0, N.lF)(),
                d = a.useCallback(() => {
                    (0, eb.C)(n);
                }, [n]),
                u = a.useCallback(() => {
                    null != t && (0, eb.C)(t);
                }, [t]),
                g = a.useCallback(() => {
                    null != o && (0, eb.C)(o);
                }, [o]),
                A = a.useCallback(() => {
                    null != o && (0, eT.A)(o);
                }, [o]),
                m = "sticker" === i;
            if (!s || !eb.p5 || !c || ("emoji" !== i && !m) || null == t) return null;
            let f = m ? y.intl.string(y.t.SJ3249) : y.intl.string(y.t.Ap2oVy),
                h = m ? y.intl.string(y.t.B1ubHx) : y.intl.string(y.t.cIoudn),
                p = m ? y.intl.string(y.t["qAEi+C"]) : y.intl.string(y.t.gDAM2n);
            return (0, l.jsxs)(r.Dr, {
                id: "message-details",
                label: y.intl.string(y.t.IqqJNI),
                leadingAccessory: { type: "icon", icon: ej.CircleInformationIcon },
                children: [
                    (0, l.jsx)(r.Dr, {
                        id: "copy-message-id",
                        label: y.intl.string(y.t.zBoHlf),
                        action: d,
                        leadingAccessory: { type: "icon", icon: eM.IdIcon },
                    }),
                    (0, l.jsx)(r.Dr, {
                        id: "copy-item-id",
                        label: f,
                        action: u,
                        leadingAccessory: { type: "icon", icon: eM.IdIcon },
                    }),
                    null != o &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(r.Dr, {
                                    id: "copy-image-link",
                                    label: h,
                                    action: g,
                                    leadingAccessory: { type: "icon", icon: eD.LinkIcon },
                                }),
                                (0, l.jsx)(r.Dr, {
                                    id: "open-image-link",
                                    label: p,
                                    action: A,
                                    leadingAccessory: { type: "icon", icon: ev.BrowserIcon },
                                    trailingIndicator: { type: "icon", icon: eC.LinkExternalSmallIcon },
                                }),
                            ],
                        }),
                ],
            });
        })({ messageId: n5.id, itemId: n4, type: n9, imageSrc: tt }),
        t0 = (0, l.jsx)(r.rX, { children: tQ ?? tY }),
        t8 = (0, l.jsxs)(r.rX, { children: [tK, tq, tz, tV, tJ, tW, tZ] });
    return (0, l.jsxs)(s.W, {
        "data-menu-migrated": !0,
        navId: tc,
        onClose: ts,
        "aria-label": td,
        onSelect: tA,
        children: [
            (0, l.jsx)(r.rX, { children: th }),
            (0, l.jsx)(r.rX, { children: tp }),
            (0, l.jsxs)(r.rX, { children: ["" === n7 ? tf : null, ty, tO] }),
            (0, l.jsxs)(r.rX, { children: [tI, tE, t_, tx] }),
            (0, l.jsxs)(r.rX, { children: [tb, tS, tj, tM, tD, tv, tC, tT, tG, tw, tL, tN, tR, tk] }),
            (0, l.jsxs)(r.rX, { children: [tP, tU, tB, ta && tF, ta && tX, tH] }),
            tm
                ? (0, l.jsxs)(l.Fragment, { children: [t0, t8, null == tQ && (0, l.jsx)(r.rX, { children: t$ })] })
                : (0, l.jsxs)(l.Fragment, { children: [t8, (0, l.jsx)(r.rX, { children: t$ }), t0] }),
        ],
    });
}
