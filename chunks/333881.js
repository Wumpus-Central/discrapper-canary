t.d(n, { default: () => nX, c: () => nF });
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
    p = t(858899),
    y = t(564218),
    h = t(792996);
async function I(e) {
    let n = new Image();
    return ((n.crossOrigin = "anonymous"), (n.src = e), await n.decode(), n);
}
var E = t(852717),
    _ = t(50268),
    b = t(373963),
    S = t(115184),
    x = t(777933),
    j = t(826308),
    M = t(337358),
    D = t(180662);
t(321073);
var v = t(855986),
    C = t(46653),
    T = (((i = {})[(i.END_EARLY = 0)] = "END_EARLY"), i);
let G = [],
    w = {
        [T.END_EARLY]: (e) =>
            (0, l.jsx)(r.Dr, {
                id: "end-poll-early",
                label: h.intl.string(h.t.grdwwt),
                icon: M.ClockXIcon,
                leadingAccessory: { type: "icon", icon: M.ClockXIcon },
                action: () => {
                    D.A.endPollEarly({ channelId: e.channel_id, messageId: e.id });
                },
                iconProps: { color: "currentColor" },
            }),
    };
var L = t(173500),
    N = t(129230),
    O = t(834730),
    R = t(231483),
    k = t(627794),
    P = t(928348),
    U = t(850216),
    B = t(364806),
    X = t(979816),
    F = t(204300),
    H = t(264349),
    K = t(727419),
    q = t(652215),
    z = t(890634),
    V = t(654502);
let J = z.uh.KEYWORD;
var W = t(880457),
    Z = t(503698),
    $ = t.n(Z),
    Y = t(844222),
    Q = t(460905),
    ee = t(217306),
    en = t(822123),
    et = t(649963),
    ei = t(815807),
    el = t(834942),
    ea = t(576705);
let eo = (e) => {
    let n = e.getGuildId();
    return (
        ((null != n && el.A.canChatInGuild(n) && ea.A.can(q.xBc.ADD_REACTIONS, e)) || e.isPrivate()) && !e.isSystemDM()
    );
};
var er = t(406704),
    es = t(253932),
    ec = t(486020),
    ed = t(188567),
    eu = t(690521),
    eg = t(307731),
    eA = t(482496);
function em(e) {
    let { emoji: n, reducedMotionEnabled: t, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: $()(i, eA.Z),
        src:
            null != n.id
                ? ec.Ay.getEmojiURL({ id: n.id, animated: n.animated && (!t || a), size: 18 })
                : eu.Ay.getURL(n.optionallyDiverseSequence ?? ""),
        alt: "",
    });
}
var ef = t(290136),
    ep = t(519222),
    ey = t(345254),
    eh = t(624479),
    eI = t(257249),
    eE = t(383233),
    e_ = t(957565),
    eb = t(483768),
    eS = t(885574),
    ex = t(473935),
    ej = t(173936),
    eM = t(93688),
    eD = t(509434),
    ev = t(975807),
    eC = t(22231),
    eT = t(138399),
    eG = t(697470),
    ew = t(253925),
    eL = t(843626),
    eN = t(427209);
t(938796);
var eO = t(665260),
    eR = t(563119),
    ek = t(581925),
    eP = t(521427),
    eU = t(20883),
    eB = t(979766),
    eX = t(866665),
    eF = t(816426);
let eH = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];
function eK(e) {
    let { emoji: n, isFocused: t } = e,
        { animated: i, src: a, surrogates: o } = n;
    return (
        null == a && null != n.id
            ? (a = ec.Ay.getEmojiURL({ id: n.id, animated: !!i, size: 20 }))
            : null == a && (a = eu.Ay.getURL(o)),
        (0, l.jsx)(eX.m, {
            text: (0, eu.N)(n),
            hideOnClick: !0,
            spacing: 16,
            forceOpen: t,
            children: (0, l.jsx)("div", {
                "aria-label": h.intl.formatToPlainString(h.t["/iYSo6"], { emojiName: n.name }),
                className: $()(eF.x6, { [eF.in]: t }),
                children:
                    null == a || "" === a.trim()
                        ? (0, l.jsx)("span", { className: $()("emoji", "emoji-text", eF.Kk), children: o })
                        : (0, l.jsx)("img", { className: eF.Kk, src: a, alt: "" }),
            }),
        })
    );
}
var eq = t(192308),
    ez = t(969632),
    eV = t(997571),
    eJ = t(157559),
    eW = t(769297);
function eZ(e) {
    let { emoji: n, reducedMotionEnabled: t, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: i,
        src:
            null != n.id
                ? ec.Ay.getEmojiURL({ id: n.id, animated: n.animated && (!t || a), size: 18 })
                : eu.Ay.getURL(n.name ?? ""),
        alt: "",
    });
}
var e$ = t(110384),
    eY = t(973196),
    eQ = t(517997),
    e0 = t(554146),
    e8 = t(111159),
    e1 = t(138134),
    e6 = t(964486),
    e5 = t(865116),
    e3 = t(263775),
    e7 = t(928658),
    e2 = t(400528),
    e9 = t(374710),
    e4 = t(715757),
    ne = t(967198),
    nn = t(287809),
    nt = t(628691),
    ni = t(49999),
    nl = t(307805),
    na = t(663417),
    no = t(965407),
    nr = t(249700),
    ns = t(556112),
    nc = t(54570),
    nd = t(8880),
    nu = t(163328),
    ng = t(620632),
    nA = t(152367),
    nm = t(37646),
    nf = t(73153),
    np = t(147087),
    ny = t(773669),
    nh = t(132183);
let nI = new Map();
var nE = t(534890),
    n_ = t(181041),
    nb = t(828488),
    nS = t(485845),
    nx = t(778712),
    nj = t(803306),
    nM = t(966327),
    nD = t(597929),
    nv = t(682163),
    nC = t(100663),
    nT = t(260509),
    nG = t(619019),
    nw = t(734057),
    nL = t(71393),
    nN = t(87221),
    nO = t(930125),
    nR = t(282108),
    nk = t(803316),
    nP = t(889558),
    nU = t(953584),
    nB = t(273185);
function nX(e) {
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
        I = d,
        E = d.getAttribute("data-type"),
        _ = d.getAttribute("data-id"),
        b = d.getAttribute("data-name");
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
    let S = document.getSelection()?.toString() ?? "";
    return (0, l.jsx)(g.f5, {
        value: y,
        children: nF({
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
            ariaLabel: h.intl.string(h.t.ChPNkN),
            shouldHideMediaOptions: m,
        }),
    });
}
function nF(e) {
    var n;
    let i,
        o,
        u,
        M,
        D,
        T,
        z,
        Z,
        $,
        ec,
        eA,
        eX,
        nX,
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
        {
            message: n8,
            channel: n1,
            mediaItem: n6,
            textSelection: n5,
            favoriteableType: n3,
            favoriteableId: n7,
            favoriteableName: n2,
            itemHref: n9,
            itemSrc: n4,
            itemSafeSrc: te,
            itemTextContent: tn,
            canReport: tt,
            onHeightUpdate: ti,
            onSelect: tl,
            onClose: ta,
            navId: to,
            ariaLabel: tr,
            shouldHideMediaOptions: ts = !1,
        } = e,
        tc = a.useRef(null);
    (a.useEffect(() => {
        tc.current = Date.now();
    }, []),
        a.useEffect(
            () => () => {
                if (null != tc.current) {
                    let e = Date.now() - tc.current;
                    N.default.track(q.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: e,
                        channel_id: n1.id,
                        guild_id: n1.getGuildId() ?? void 0,
                        message_id: n8.id,
                    });
                }
            },
            [n1, n8],
        ));
    let td = a.useCallback(() => {
            if (null != tc.current) {
                let e = Date.now() - tc.current;
                N.default.track(q.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: e,
                    channel_id: n1.id,
                    guild_id: n1.getGuildId() ?? void 0,
                    message_id: n8.id,
                });
            }
            tl?.();
        }, [tl, n1, n8]),
        tu =
            ((i = (0, en.D6)(n1.guild_id).filter(
                (e) =>
                    !(e.useSpriteSheet && eH.indexOf(e.uniqueName ?? "") >= 0) &&
                    !eu.Ay.isEmojiPremiumLocked({ emoji: e, channel: n1, intention: eg.EmojiIntention.REACTION }),
            )).length > 4 && (i.length = 4),
            (o = es.jW.useSetting()),
            (u = (0, er.Id)(n1)),
            (0, v.bG)([el.A, ea.A], () => o && u && eo(n1), [n1, u, o]) &&
            i.length > 0 &&
            n8.type !== q.lAJ.MEDIA_MENTION_MESSAGE
                ? (0, l.jsx)(r.rX, {
                      className: eF.iE,
                      children: i.map((e, n) =>
                          (0, l.jsx)(
                              r.Dr,
                              {
                                  id: `quickreact-${e.id ?? n}`,
                                  render: (n) => {
                                      let { isFocused: t } = n;
                                      return (0, l.jsx)(eK, { emoji: e, isFocused: t });
                                  },
                                  action: () => {
                                      (0, et.BB)(n1.id, n8.id, (0, ei.jq)(e), et.qN.MESSAGE_CONTEXT_MENU);
                                  },
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              n,
                          ),
                      ),
                  })
                : null),
        tg = (0, b.A)(n5),
        tA = (0, j.A)(n5),
        tm = (function (e, n) {
            let { reducedMotion: t } = a.useContext(Y.C),
                i = (0, er.Id)(n),
                o = (0, v.bG)([el.A, ea.A], () => eo(n) && i && !n.isMediaThread(), [n, i]),
                s = (0, en.D6)(n.getGuildId());
            if (!es.jW.getSetting() || !o) return null;
            let c = s
                .filter(
                    (e) =>
                        !eu.Ay.isEmojiFilteredOrLocked({ emoji: e, channel: n, intention: eg.EmojiIntention.REACTION }),
                )
                .slice(0, 12)
                .map((i, a) =>
                    (0, l.jsx)(
                        r.Dr,
                        {
                            color: "default",
                            id: i.id ?? i.optionallyDiverseSequence ?? i.name,
                            label: `:${i.name}:`,
                            icon: (e) => (0, l.jsx)(em, { ...e, reducedMotionEnabled: t.enabled, emoji: i }),
                            leadingAccessory: {
                                type: "emoji",
                                emojiId: i.id,
                                src: null == i.id ? eu.Ay.getURL(i.optionallyDiverseSequence ?? "") : void 0,
                                animated: i.animated,
                            },
                            action: () => {
                                (0, et.BB)(n.id, e.id, (0, ei.jq)(i), et.qN.MESSAGE_CONTEXT_MENU);
                            },
                            dontCloseOnActionIfHoldingShiftKey: !0,
                        },
                        a,
                    ),
                );
            return (0, l.jsx)(r.Dr, {
                id: "add-reaction",
                label: h.intl.string(h.t.lfIHs4),
                leadingAccessory: { type: "icon", icon: Q.ReactionIcon },
                action: () => {
                    ed._.dispatchKeyed(q.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                },
                color: "default",
                children: (0, l.jsxs)(l.Fragment, {
                    children: [
                        c,
                        (0, l.jsx)(r.bX, {}),
                        (0, l.jsx)(r.Dr, {
                            color: "default",
                            id: "other-reactions",
                            label: h.intl.string(h.t["OBCR+p"]),
                            icon: Q.ReactionIcon,
                            leadingAccessory: { type: "icon", icon: ee.ViewReactionIcon },
                            action: () => {
                                ed._.dispatchKeyed(q.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                            },
                        }),
                    ],
                }),
            });
        })(n8, n1),
        tf =
            ((M = (0, v.bG)([C.default], () => C.default.getId())),
            (D = (0, er.Id)(n1)),
            (T = (0, er.s5)(n1)),
            (0, eG.A)(n8, M) && D && !T
                ? (0, l.jsx)(r.Dr, {
                      id: "edit",
                      label: h.intl.string(h.t.fsBWmS),
                      action: () => eT.A.startEditMessageRecord(n1.id, n8),
                      leadingAccessory: { type: "icon", icon: eC.PencilIcon },
                      icon: eC.PencilIcon,
                  })
                : null),
        tp =
            ((z = (0, eQ.u)(n1, n8)),
            (Z = (0, eY.A)()),
            !z || Z
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "reply",
                      label: h.intl.string(h.t["5IEsGx"]),
                      leadingAccessory: { type: "icon", icon: e$.ArrowAngleLeftUpIcon },
                      icon: e$.ArrowAngleLeftUpIcon,
                      action: (e) => {
                          (0, ep.$b)(n1, n8, e);
                      },
                  })),
        ty = (0, eL.m)(n8)
            ? (0, l.jsx)(r.Dr, {
                  id: "forward",
                  label: h.intl.string(h.t.I3ltXO),
                  leadingAccessory: { type: "icon", icon: eN.A },
                  icon: eN.A,
                  action: () => {
                      (0, ep.Z4)(n1, n8);
                  },
              })
            : null,
        th = (0, er.n)(n1, n8)
            ? (0, l.jsx)(r.Dr, {
                  id: "thread",
                  label: h.intl.string(h.t.rBIGBL),
                  leadingAccessory: { type: "icon", icon: nu.ThreadIcon },
                  icon: nu.ThreadIcon,
                  action: () => {
                      (0, ep.Nw)(n1, n8);
                  },
              })
            : null,
        tI = (function (e) {
            if (!e_.p5) return null;
            let n = e.getContentMessage(),
                t = (0, eE._c)(n) ? (0, eI.kC)(n.components) : n.content;
            return null == t || 0 === t.length
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "copy-text",
                      label: h.intl.string(h.t.JrGD7E),
                      leadingAccessory: { type: "icon", icon: eh.CopyIcon },
                      icon: eh.CopyIcon,
                      action: () => {
                          (0, e_.C)(t);
                      },
                  });
        })(n8),
        tE = (function (e) {
            let n,
                {
                    handleTranslate: i,
                    handleRevertTranslation: o,
                    isTranslating: s,
                    isTranslated: c,
                } = (function (e) {
                    let [n, t] = a.useState(!1),
                        i = (0, v.bG)([ny.default], () => ny.default.locale);
                    return {
                        handleTranslate: a.useCallback(
                            async (l, a) => {
                                if (n) return;
                                let o = l ?? i;
                                t(!0);
                                let r = a ?? (0, h.getAvailableLocales)().find((e) => e.value === o)?.name ?? o;
                                (nI.has(e.id) || nI.set(e.id, e.content),
                                    (0, p.P0)({
                                        text: h.intl.formatToPlainString(h.t.Znl8Z8, { targetLanguage: r }),
                                        icon: nA.MagicWandIcon,
                                    }));
                                try {
                                    let n = await ng.Bo.post({
                                        url: q.Rsh.AI_TRANSLATE,
                                        body: { content: e.content, locale: o },
                                        rejectWithError: (0, ng.fT)(),
                                    });
                                    n.body &&
                                        (nf.h.dispatch({
                                            type: "MESSAGE_UPDATE",
                                            message: { id: e.id, channel_id: e.channel_id, content: n.body.content },
                                        }),
                                        (0, p.P0)({
                                            text: h.intl.formatToPlainString(h.t.FtVUqm, { targetLanguage: r }),
                                            variant: "success",
                                        }));
                                } finally {
                                    t(!1);
                                }
                            },
                            [e, n, i],
                        ),
                        handleRevertTranslation: a.useCallback(() => {
                            let n = nI.get(e.id);
                            null != n &&
                                (nf.h.dispatch({
                                    type: "MESSAGE_UPDATE",
                                    message: { id: e.id, channel_id: e.channel_id, content: n },
                                }),
                                nI.delete(e.id));
                        }, [e.id, e.channel_id]),
                        isTranslating: n,
                        isTranslated: nI.has(e.id),
                    };
                })(e),
                d =
                    ((n = (0, h.getAvailableLocales)()),
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
                                        icon: () => (0, l.jsx)("img", { alt: "", src: n, className: nh.M }),
                                        leadingAccessory: { type: "image", src: n },
                                        action: () => i(e.value, e.name),
                                        disabled: s,
                                    },
                                    e.value,
                                );
                            }),
                        [i, s, n],
                    )),
                u = (0, np.b)();
            return null != e.content && "" !== e.content.trim() && u
                ? c
                    ? (0, l.jsx)(r.Dr, {
                          id: "revert-translation",
                          label: h.intl.string(h.t.JC9BXn),
                          leadingAccessory: { type: "icon", icon: nm.LanguageIcon },
                          icon: nm.LanguageIcon,
                          action: o,
                          disabled: s,
                      })
                    : (0, l.jsx)(r.Dr, {
                          id: "translate",
                          label: s ? h.intl.string(h.t.SVKIdU) : h.intl.string(h.t["6epDlR"]),
                          action: () => i(),
                          leadingAccessory: { type: "icon", icon: nm.LanguageIcon },
                          disabled: s,
                          children: d,
                      })
                : null;
        })(n8),
        t_ = (0, eB.A)(n8, n1),
        tb = (0, eP.kn)(n8, n1, "MessageContextMenu")
            ? (0, eO.Lt)(n8.flags, q.pr7.IS_GUILD_OFFICIAL)
                ? (0, l.jsx)(r.Dr, {
                      id: "guild-official-unset",
                      action: () => {
                          eT.A.patchMessageGuildOfficial(n1.id, n8.id, !1);
                      },
                      label: h.intl.string(h.t["2km5Gf"]),
                      leadingAccessory: { type: "icon", icon: eR.StampXIcon },
                  })
                : (0, l.jsx)(r.Dr, {
                      id: "guild-official-set",
                      action: () => {
                          eT.A.patchMessageGuildOfficial(n1.id, n8.id, !0);
                      },
                      label: h.intl.string(h.t["lE/PG3"]),
                      leadingAccessory: { type: "icon", icon: ek.StampIcon },
                  })
            : null,
        tS = (0, W.A)(n8, n1),
        tx = (0, L.A)({
            commandType: d.kc.MESSAGE,
            commandTargetId: n8.id,
            channel: n1,
            guildId: void 0,
            onHeightUpdate: ti,
            showIcon: !0,
        }),
        tj =
            n8.state !== q.cmJ.SEND_FAILED
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "resend",
                      label: h.intl.string(h.t.lXHojr),
                      leadingAccessory: { type: "icon", icon: na.RefreshIcon },
                      action: () => (0, nr.A)(n1, n8, void 0, no.A.getOptions(n8.id)),
                  }),
        tM = (0, eU.A)(n8, n1),
        tD =
            null != ($ = n1.getGuildId()) &&
            n8.type === q.lAJ.USER_JOIN &&
            ea.A.canWithPartialContext(q.xBc.MANAGE_GUILD, { guildId: $ })
                ? (0, l.jsx)(r.Dr, {
                      id: "configure",
                      label: h.intl.string(h.t.NpHUi1),
                      leadingAccessory: { type: "icon", icon: ef.CircleQuestionIcon },
                      icon: ef.CircleQuestionIcon,
                      action: () => (0, ep.vc)(n1),
                  })
                : null,
        tv = (0, ey.A)(n8, n1),
        tC =
            ((ec = (0, nb.WU)(n1.getGuildId(), "message_context_menu")),
            (eA = (0, v.bG)([n_.A], () => n_.A.getConversationForMessage(n1.id, n8.id) ?? null, [n1.id, n8.id])),
            (eX = a.useCallback(() => {
                null != eA &&
                    (console.log("[ConversationHighlighting]", n_.A.getConversation(n1.id, eA)),
                    window.open(`https://yap-time.vibeyard.tools/?conversation=${eA}`, "_blank"));
            }, [n1.id, eA])),
            ec && null != eA
                ? (0, l.jsx)(r.Dr, {
                      id: "view-conversation",
                      label: "View Conversation",
                      leadingAccessory: { type: "icon", icon: nE.ChatIcon },
                      icon: nE.ChatIcon,
                      action: eX,
                  })
                : null),
        tT =
            ((nX = (0, v.bG)([nd.A], () => nd.A.isSpeakingMessage(n1.id, n8.id), [n1, n8])),
            "" === n8.content
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "tts",
                      label: nX ? h.intl.string(h.t.CJ30BP) : h.intl.string(h.t.yGLjXF),
                      leadingAccessory: { type: "icon", icon: ns.ChatSpeakIcon },
                      icon: ns.ChatSpeakIcon,
                      action: () => (nX ? (0, nc.pr)() : (0, nc.kP)(n1, n8)),
                  })),
        tG =
            null == n8.reactions || 0 === n8.reactions.length || (n8.isPoll() && !(0, ez.Gh)(n8))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "reactions",
                      label: h.intl.string(h.t.wikODq),
                      leadingAccessory: { type: "icon", icon: ee.ViewReactionIcon },
                      icon: ee.ViewReactionIcon,
                      action: () =>
                          (0, eq.mM)(async () => {
                              let { default: e } = await Promise.all([t.e(569080), t.e(998186)]).then(
                                  t.bind(t, 112753),
                              );
                              return (n) => (0, l.jsx)(e, { ...n, message: n8 });
                          }),
                  }),
        tw =
            0 ===
            (nF = (function (e) {
                let n = (0, v.bG)([C.default], () => C.default.getId()),
                    { poll: t } = e;
                if (!e.isPoll() || null == t) return G;
                let i = [];
                return (t.expiry.isSameOrBefore(Date.now()) || e.author.id !== n || i.push(0), i);
            })(n8)).length
                ? null
                : (0, l.jsx)(l.Fragment, { children: nF.map((e) => w[e](n8)) }),
        tL = (function (e) {
            let { analyticsLocations: n } = (0, g.Ay)(),
                t = e.interactionMetadata?.authorizing_integration_owners[nS.b.USER_INSTALL],
                i = e.interactionMetadata?.authorizing_integration_owners[nS.b.GUILD_INSTALL],
                o = e.interactionMetadata?.user.id,
                s = (0, v.bG)([nn.default], () => nn.default.getUser(t)),
                c = (0, v.bG)([nL.A], () => nL.A.getGuild(i)),
                d = nw.A.getChannel(e.channel_id),
                u = d?.getGuildId(),
                A = (0, v.bG)([nn.default], () => nn.default.getUser(o));
            if (
                (a.useEffect(() => {
                    null == s && null != t && (0, nj.wz)(t);
                }, [s, t]),
                !(0, nD._)(e))
            )
                return null;
            null == A && (A = new nG.A(e.interactionMetadata?.user));
            let m = null;
            if (null != c) {
                let n = (0, nT.Iv)(c, 18, !0);
                m = (0, l.jsx)(r.Dr, {
                    disabled: !0,
                    iconLeft: () => (0, l.jsx)(nv.Ay, { guild: c, size: nv.Ay.Sizes.MINI }),
                    leadingAccessory: null != n ? { type: "image", src: n } : void 0,
                    id: "integration-owner",
                    label: c.name,
                    subtext: h.intl.formatToPlainString(h.t.ShLXXB, { application: e.author.username }),
                });
            } else
                null != s &&
                    (m = (0, l.jsx)(r.Dr, {
                        action: () =>
                            (0, nC.openUserProfileModal)({
                                userId: s.id,
                                guildId: u,
                                channelId: e.channel_id,
                                sourceAnalyticsLocations: n,
                            }),
                        leadingAccessory: { type: "avatar", src: s.getAvatarURL(u, 18) },
                        id: "integration-owner",
                        label: s.username,
                        iconLeft: () => (0, l.jsx)(nM.A, { user: s, size: nx._3.SIZE_20 }),
                        subtext: h.intl.formatToPlainString(h.t.ShLXXB, { application: e.author.username }),
                    }));
            return (0, l.jsxs)(r.Dr, {
                id: "view-interaction-info",
                label: h.intl.string(h.t.Rjezbz),
                leadingAccessory: { type: "icon", icon: eS.CircleInformationIcon },
                children: [
                    m,
                    null != A
                        ? (0, l.jsx)(r.Dr, {
                              action: () =>
                                  (0, nC.openUserProfileModal)({
                                      userId: A.id,
                                      guildId: u,
                                      channelId: e.channel_id,
                                      sourceAnalyticsLocations: n,
                                  }),
                              leadingAccessory: { type: "avatar", src: A.getAvatarURL(u, 18) },
                              iconLeft: () => (0, l.jsx)(nM.A, { user: A, size: nx._3.SIZE_20 }),
                              id: "interaction-user",
                              label: A.username,
                              subtext: h.intl.string(h.t["04gxNg"]),
                          })
                        : null,
                ],
            });
        })(n8),
        tN = (function (e, n) {
            let { reducedMotion: t } = a.useContext(Y.C),
                i = (0, er.Id)(n),
                o = (0, v.bG)([ea.A], () => ea.A.can(q.xBc.MANAGE_MESSAGES, n) && i, [n, i]),
                s = e.reactions.reduce(
                    (e, n) =>
                        n.count_details?.vote != null ||
                        null != e.find((e) => (null != e.id && e.id === n.emoji.id) || e.name === n.emoji.name)
                            ? e
                            : [...e, n.emoji],
                    [],
                );
            return !o || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, ez.Gh)(e))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "remove-emoji-reactions",
                      label: h.intl.string(h.t["zx/e4P"]),
                      leadingAccessory: { type: "icon", icon: eW.RemoveReactionIcon },
                      color: "danger",
                      children: s.map((i) =>
                          (0, l.jsx)(
                              r.Dr,
                              {
                                  id: `remove-emoji-reactions-${i.name ?? i.id}`,
                                  label: (0, ei.b3)(i),
                                  action: (t) => {
                                      t.shiftKey
                                          ? (0, et.Jf)(n.id, e.id, i)
                                          : eJ.A.show({
                                                title: h.intl.string(h.t["73GqTz"]),
                                                body: h.intl.string(h.t.dmy5bn),
                                                confirmText: h.intl.string(h.t.p89ACt),
                                                confirmVariant: "critical-primary",
                                                cancelText: h.intl.string(h.t.gm1Vej),
                                                onConfirm: () => {
                                                    (0, et.Jf)(n.id, e.id, i);
                                                },
                                            });
                                  },
                                  leadingAccessory: {
                                      type: "emoji",
                                      emojiId: i.id,
                                      src: null == i.id ? eu.Ay.getURL(i.name ?? "") : void 0,
                                      animated: i.animated,
                                  },
                                  icon: (e) => (0, l.jsx)(eZ, { ...e, reducedMotionEnabled: t.enabled, emoji: i }),
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              i.name ?? i.id,
                          ),
                      ),
                  });
        })(n8, n1),
        tO =
            ((nH = (0, er.Id)(n1)),
            !(0, v.bG)([ea.A], () => ea.A.can(q.xBc.MANAGE_MESSAGES, n1) && nH, [n1, nH]) ||
            null == n8.reactions ||
            0 === n8.reactions.length ||
            (n8.isPoll() && !(0, ez.Gh)(n8))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "remove-reactions",
                      label: h.intl.string(h.t.ZbtGBm),
                      leadingAccessory: { type: "icon", icon: eV.ReactionMinusIcon },
                      action: function (e) {
                          e.shiftKey
                              ? (0, et.Go)(n1.id, n8.id)
                              : eJ.A.show({
                                    title: h.intl.string(h.t.iz3vYX),
                                    body: h.intl.string(h.t.VpjOCo),
                                    confirmText: h.intl.string(h.t.p89ACt),
                                    confirmVariant: "critical-primary",
                                    cancelText: h.intl.string(h.t.gm1Vej),
                                    onConfirm: () => {
                                        (0, et.Go)(n1.id, n8.id);
                                    },
                                });
                      },
                      color: "danger",
                  })),
        tR = (0, eb.A)(n8, n1),
        tk =
            ((nK = (0, v.bG)([ne.A], () => ne.A.getGuildId())),
            (nq = (0, e4.Qo)(nK)),
            (0, nt.ul)(n8)
                ? (0, l.jsx)(r.Dr, {
                      id: "report",
                      label: nq ? h.intl.string(h.t.n5EBAJ) : h.intl.string(h.t.GwbdGe),
                      action: () => (0, e7.V2)(n8, "web_message_context_menu"),
                      icon: nq ? e8.ClydeIcon : e1.FlagIcon,
                      leadingAccessory: { type: "icon", icon: nq ? e8.ClydeIcon : e1.FlagIcon },
                      color: "danger",
                  })
                : null),
        tP =
            ((nz = (0, v.bG)([e5.Ay], () => e5.Ay.get("iar_testing"))),
            (nV = (0, v.bG)([nn.default], () => nn.default.getCurrentUser())),
            (0, nt.ul)(n8) && null != nV && nV.isStaff() && nz
                ? (0, l.jsx)(r.Dr, {
                      id: "staff-test-message-report",
                      label: "[STAFF] Test Message Report",
                      action: () => (0, e7.Rj)(n8, "web_message_context_menu"),
                      icon: e1.FlagIcon,
                      leadingAccessory: { type: "icon", icon: e1.FlagIcon },
                      color: "danger",
                  })
                : null),
        tU = (function (e) {
            let n = (0, v.bG)([e2.A], () => e2.A.hasReportedMessage(e.channel_id, e.id)),
                t = (0, e9.KB)(e),
                i = t ? [e0.M.REPORT_TO_MOD_NEW_TAG] : [],
                [a, o] = (0, e3.kn)(i);
            return ((0, e6.l0)(() => {
                t && o(ni.i.AUTO_DISMISS);
            }),
            t)
                ? (0, l.jsx)(r.Dr, {
                      id: "report-to-mod",
                      label: n ? h.intl.string(nl.default["8wsdng"]) : h.intl.string(nl.default["1D+vqy"]),
                      action: () => {
                          (o(ni.i.USER_DISMISS), (0, e7.dy)(e));
                      },
                      icon: e1.FlagIcon,
                      disabled: n,
                      leadingAccessory: { type: "icon", icon: e1.FlagIcon },
                      badge: a === e0.M.REPORT_TO_MOD_NEW_TAG ? "new" : void 0,
                      color: "danger",
                  })
                : null;
        })(n8),
        tB = (0, ew.A)({ type: n3, id: n7, name: n2 }),
        tX = (function (e, n) {
            let { perGuildMaxCount: t } = U.i$[J],
                { isLoading: i, saveRule: o, errorMessage: s } = (0, B.S)(),
                { createNewEditingRule: d } = (0, B.U)(),
                [u, g] = a.useState(!1),
                [A, m] = (0, P.H6)(n),
                { rulesByTriggerType: f, updateRule: y } = (0, P.wP)(n),
                I = a.useMemo(() => f[J] ?? [], [f]),
                E = 0 === I.length,
                _ = t > I.length && !E;
            if (!a.useMemo(() => (0, X.i_)(n), [n]) || null == e || 0 === e.length || null == n) return null;
            let b = e.split(" "),
                S = b.length;
            try {
                (0, k.wk)(b, 1e3);
            } catch (e) {
                return null;
            }
            function x() {
                null == e ||
                    (null != n &&
                        ((0, c.Z_)(),
                        K.A.open(n, q.BEX.GUILD_AUTOMOD),
                        setTimeout(() => {
                            d(n, J, { triggerMetadata: { keywordFilter: [e], regexPatterns: [], allowList: [] } });
                        }, 400)));
            }
            let j = (0, l.jsx)(r.Dr, { id: "automod-rules-loading", label: h.intl.string(h.t.ZTNur7) });
            return (
                A ||
                    (j = (0, l.jsxs)(l.Fragment, {
                        children: [
                            E &&
                                (0, l.jsx)(r.Dr, {
                                    id: "add-first-rule",
                                    label: h.intl.string(h.t.f72Zqb),
                                    action: x,
                                    disabled: i,
                                }),
                            I.map((n) => {
                                let t = (0, U.J6)(J).reduce((e, t) => {
                                    let i = n.actions.find((e) => {
                                        let { type: n } = e;
                                        return t === n;
                                    });
                                    if (null == i) return e;
                                    let l = (0, F.x)(t, i);
                                    return e + `, ${l?.headerText}`;
                                }, "");
                                return (0, l.jsx)(
                                    r.iD,
                                    {
                                        id: n.id,
                                        label: n.name,
                                        subtext: (0, l.jsx)(O.E, {
                                            color: "text-muted",
                                            className: V.XX,
                                            variant: "body-xs/normal",
                                            children: t.slice(2),
                                        }),
                                        group: "automod-rule-selection",
                                        checked: !1,
                                        disabled: i,
                                        action: () =>
                                            (async function (n) {
                                                if (null == e || ((0, c.Z_)(), !(await (0, H.Zy)(n.name, e)))) return;
                                                let t = {
                                                    ...n,
                                                    triggerMetadata: {
                                                        ...n.triggerMetadata,
                                                        keywordFilter: [...(n.triggerMetadata?.keywordFilter ?? []), e],
                                                    },
                                                };
                                                (await o(t, I),
                                                    y(t),
                                                    null != s
                                                        ? (0, p.P0)({
                                                              text: h.intl.string(h.t.wH6L0r),
                                                              variant: "critical",
                                                          })
                                                        : (0, p.P0)({
                                                              text: h.intl.string(h.t["0rdYm2"]),
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
                                            label: h.intl.string(h.t["0K5jDE"]),
                                            action: x,
                                            disabled: i,
                                        }),
                                    ],
                                }),
                        ],
                    })),
                (0, l.jsx)(r.Dr, {
                    id: "guild-automod-add-selection",
                    label: h.intl.formatToPlainString(h.t.Kkjv1m, { keywordCount: S }),
                    leadingAccessory: { type: "icon", icon: R.ShieldIcon },
                    onFocus: function () {
                        u || (g(!0), m());
                    },
                    children: j,
                })
            );
        })(n5, n1.getGuildId()),
        tF = (0, S.A)(te, n8, {
            shouldHideMediaOptions: ts,
            contentType: n6?.contentType,
            originalContentType: n6?.originalContentType,
        }),
        tH =
            ((nJ = (0, nR.Fg)(n8)),
            (nW = null != n6 && (0, nR.qo)({ type: nO.D.GenericMedia, media: n6 }, nJ)),
            null != n6 && nW
                ? (0, l.jsx)(
                      r.Dr,
                      {
                          id: "report-image-false-positive",
                          label: h.intl.string(h.t.ZH7P2h),
                          action: function () {
                              null != n6 &&
                                  (0, eq.mM)(async () => {
                                      let { default: e } = await t(544135);
                                      return (n) =>
                                          (0, l.jsx)(e, {
                                              channelId: n8.channel_id,
                                              messageId: n8.id,
                                              mediaItemUrl: n6.url,
                                              ...n,
                                          });
                                  });
                          },
                          leadingAccessory: { type: "icon", icon: nN.ImageWarningIcon },
                          icon: nN.ImageWarningIcon,
                      },
                      "report-image-false-positive",
                  )
                : null),
        tK =
            ((nZ = n8.getContentMessage()),
            (0, eO.Lt)(nZ.flags, q.pr7.IS_VOICE_MESSAGE) && 0 !== nZ.attachments.length
                ? (0, l.jsx)(r.Dr, {
                      id: "save-voice-message-audio",
                      label: h.intl.string(h.t.vbAEaA),
                      leadingAccessory: { type: "icon", icon: A.DownloadIcon },
                      icon: A.DownloadIcon,
                      action: () => {
                          let e = (0, nk.XW)(nZ.attachments[0].url);
                          (0, nP.h)({ href: e });
                      },
                  })
                : null),
        tq =
            null != (n$ = (0, f.lw)(n8.getContentMessage())) && (0, m.Mt)("message_context_menu")
                ? (0, l.jsx)(r.Dr, {
                      id: "save-checkpoint-character",
                      label: h.intl.string(E.default.CYcfZo),
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
                                  await (0, y.H)(n, "checkpoint-character.png");
                              } catch {
                                  (0, p.P0)({ text: h.intl.string(h.t["8Ve/S0"]), variant: "critical" });
                              }
                          })(n$),
                  })
                : null,
        tz =
            ((n = { shouldHideMediaOptions: ts }),
            (nY = n6?.url ?? ""),
            (nQ = (0, v.bG)([nU.Ay], () => nU.Ay.isVideoStatsEnabled(nY))),
            (n0 = a.useCallback(() => {
                "" !== nY && (0, nU.FM)(nY);
            }, [nY])),
            null != n6 && (0, nB.XB)(n6.contentType) && n?.shouldHideMediaOptions !== !0
                ? (0, l.jsx)(r.sL, {
                      id: "video-stats-for-nerds",
                      label: "Stats for Nerds",
                      leadingAccessory: { type: "icon", icon: eS.CircleInformationIcon },
                      checked: nQ,
                      action: n0,
                  })
                : null),
        tV = (0, x.A)(n9 ?? n4, tn, n8, { shouldHideMediaOptions: ts }),
        tJ = (0, _.A)({ id: n8.id, label: h.intl.string(h.t.zBoHlf), shiftId: `${n8.channel_id}-${n8.id}` }),
        tW = (function (e) {
            let { messageId: n, itemId: t, type: i, imageSrc: o } = e,
                s = es.Q_.useSetting(),
                c = a.useCallback(() => {
                    (0, e_.C)(n);
                }, [n]),
                d = a.useCallback(() => {
                    null != t && (0, e_.C)(t);
                }, [t]),
                u = a.useCallback(() => {
                    null != o && (0, e_.C)(o);
                }, [o]),
                g = a.useCallback(() => {
                    null != o && (0, ev.A)(o);
                }, [o]),
                A = "sticker" === i;
            if (!s || !e_.p5 || ("emoji" !== i && !A) || null == t) return null;
            let m = A ? h.intl.string(h.t.SJ3249) : h.intl.string(h.t.Ap2oVy),
                f = A ? h.intl.string(h.t.B1ubHx) : h.intl.string(h.t.cIoudn),
                p = A ? h.intl.string(h.t["qAEi+C"]) : h.intl.string(h.t.gDAM2n);
            return (0, l.jsxs)(r.Dr, {
                id: "message-details",
                label: h.intl.string(h.t.IqqJNI),
                leadingAccessory: { type: "icon", icon: eS.CircleInformationIcon },
                children: [
                    (0, l.jsx)(r.Dr, {
                        id: "copy-message-id",
                        label: h.intl.string(h.t.zBoHlf),
                        action: c,
                        leadingAccessory: { type: "icon", icon: ex.IdIcon },
                    }),
                    (0, l.jsx)(r.Dr, {
                        id: "copy-item-id",
                        label: m,
                        action: d,
                        leadingAccessory: { type: "icon", icon: ex.IdIcon },
                    }),
                    null != o &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(r.Dr, {
                                    id: "copy-image-link",
                                    label: f,
                                    action: u,
                                    leadingAccessory: { type: "icon", icon: ej.LinkIcon },
                                }),
                                (0, l.jsx)(r.Dr, {
                                    id: "open-image-link",
                                    label: p,
                                    action: g,
                                    leadingAccessory: { type: "icon", icon: eM.BrowserIcon },
                                    trailingIndicator: { type: "icon", icon: eD.LinkExternalSmallIcon },
                                }),
                            ],
                        }),
                ],
            });
        })({ messageId: n8.id, itemId: n7, type: n3, imageSrc: n4 }),
        tZ = (0, l.jsx)(r.rX, { children: tW ?? tJ }),
        t$ = (0, l.jsxs)(r.rX, { children: [tB, tX, tF, tH, tK, tq, tz] });
    return (0, l.jsxs)(s.W, {
        "data-menu-migrated": !0,
        navId: to,
        onClose: ta,
        "aria-label": tr,
        onSelect: td,
        children: [
            (0, l.jsx)(r.rX, { children: tg }),
            (0, l.jsx)(r.rX, { children: tA }),
            (0, l.jsxs)(r.rX, { children: ["" === n5 ? tu : null, tm, tG] }),
            (0, l.jsxs)(r.rX, { children: [tf, tp, ty, th] }),
            (0, l.jsxs)(r.rX, { children: [tI, tE, t_, tb, tS, tx, tj, tM, tD, tv, tC, tT, tw, tL] }),
            (0, l.jsxs)(r.rX, { children: [tN, tO, tR, tt && tk, tt && tP, tU] }),
            tZ,
            t$,
            null == tW && (0, l.jsx)(r.rX, { children: tV }),
        ],
    });
}
