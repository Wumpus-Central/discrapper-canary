t.d(n, { default: () => nk, c: () => nP });
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
    A = t(50268),
    m = t(373963),
    f = t(115184),
    p = t(777933),
    y = t(826308),
    h = t(337358),
    I = t(180662);
t(321073);
var E = t(855986),
    _ = t(46653),
    b = (((i = {})[(i.END_EARLY = 0)] = "END_EARLY"), i);
let S = [];
var x = t(792996);
let j = {
    [b.END_EARLY]: (e) =>
        (0, l.jsx)(r.Dr, {
            id: "end-poll-early",
            label: x.intl.string(x.t.grdwwt),
            icon: h.ClockXIcon,
            leadingAccessory: { type: "icon", icon: h.ClockXIcon },
            action: () => {
                I.A.endPollEarly({ channelId: e.channel_id, messageId: e.id });
            },
            iconProps: { color: "currentColor" },
        }),
};
var M = t(207560),
    D = t(173500),
    v = t(129230),
    C = t(858899),
    T = t(834730),
    G = t(231483),
    L = t(627794),
    R = t(928348),
    N = t(850216),
    O = t(364806),
    w = t(979816),
    k = t(204300),
    P = t(264349),
    U = t(727419),
    B = t(652215),
    F = t(890634),
    X = t(654502);
let H = F.uh.KEYWORD;
var K = t(880457),
    q = t(503698),
    z = t.n(q),
    V = t(844222),
    J = t(460905),
    W = t(217306),
    Z = t(822123),
    $ = t(649963),
    Y = t(815807),
    Q = t(834942),
    ee = t(576705);
let en = (e) => {
    let n = e.getGuildId();
    return (
        ((null != n && Q.A.canChatInGuild(n) && ee.A.can(B.xBc.ADD_REACTIONS, e)) || e.isPrivate()) && !e.isSystemDM()
    );
};
var et = t(406704),
    ei = t(253932),
    el = t(486020),
    ea = t(188567),
    eo = t(690521),
    er = t(307731),
    es = t(482496);
function ec(e) {
    let { emoji: n, reducedMotionEnabled: t, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: z()(i, es.Z),
        src:
            null != n.id
                ? el.Ay.getEmojiURL({ id: n.id, animated: n.animated && (!t || a), size: 18 })
                : eo.Ay.getURL(n.optionallyDiverseSequence ?? ""),
        alt: "",
    });
}
var ed = t(290136),
    eu = t(519222),
    eg = t(345254),
    eA = t(624479),
    em = t(257249),
    ef = t(383233),
    ep = t(957565),
    ey = t(483768),
    eh = t(885574),
    eI = t(473935),
    eE = t(173936),
    e_ = t(93688),
    eb = t(509434),
    eS = t(975807),
    ex = t(22231),
    ej = t(138399),
    eM = t(697470),
    eD = t(253925),
    ev = t(843626),
    eC = t(427209);
t(938796);
var eT = t(665260),
    eG = t(563119),
    eL = t(581925),
    eR = t(521427),
    eN = t(20883),
    eO = t(979766),
    ew = t(866665),
    ek = t(816426);
let eP = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];
function eU(e) {
    let { emoji: n, isFocused: t } = e,
        { animated: i, src: a, surrogates: o } = n;
    return (
        null == a && null != n.id
            ? (a = el.Ay.getEmojiURL({ id: n.id, animated: !!i, size: 20 }))
            : null == a && (a = eo.Ay.getURL(o)),
        (0, l.jsx)(ew.m, {
            text: (0, eo.N)(n),
            hideOnClick: !0,
            spacing: 16,
            forceOpen: t,
            children: (0, l.jsx)("div", {
                "aria-label": x.intl.formatToPlainString(x.t["/iYSo6"], { emojiName: n.name }),
                className: z()(ek.x6, { [ek.in]: t }),
                children:
                    null == a || "" === a.trim()
                        ? (0, l.jsx)("span", { className: z()("emoji", "emoji-text", ek.Kk), children: o })
                        : (0, l.jsx)("img", { className: ek.Kk, src: a, alt: "" }),
            }),
        })
    );
}
var eB = t(192308),
    eF = t(969632),
    eX = t(997571),
    eH = t(157559),
    eK = t(769297);
function eq(e) {
    let { emoji: n, reducedMotionEnabled: t, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: i,
        src:
            null != n.id
                ? el.Ay.getEmojiURL({ id: n.id, animated: n.animated && (!t || a), size: 18 })
                : eo.Ay.getURL(n.name ?? ""),
        alt: "",
    });
}
var ez = t(110384),
    eV = t(973196),
    eJ = t(517997),
    eW = t(554146),
    eZ = t(111159),
    e$ = t(138134),
    eY = t(964486),
    eQ = t(865116),
    e0 = t(263775),
    e8 = t(928658),
    e1 = t(400528),
    e5 = t(374710),
    e7 = t(715757),
    e6 = t(967198),
    e3 = t(287809),
    e2 = t(628691),
    e9 = t(49999),
    e4 = t(307805),
    ne = t(663417),
    nn = t(965407),
    nt = t(249700),
    ni = t(556112),
    nl = t(54570),
    na = t(8880),
    no = t(163328),
    nr = t(620632),
    ns = t(152367),
    nc = t(37646),
    nd = t(73153),
    nu = t(147087),
    ng = t(773669),
    nA = t(132183);
let nm = new Map();
var nf = t(534890),
    np = t(181041),
    ny = t(828488),
    nh = t(485845),
    nI = t(778712),
    nE = t(803306),
    n_ = t(966327),
    nb = t(597929),
    nS = t(682163),
    nx = t(702476),
    nj = t(260509),
    nM = t(619019),
    nD = t(734057),
    nv = t(71393),
    nC = t(87221),
    nT = t(930125),
    nG = t(282108),
    nL = t(32880),
    nR = t(803316),
    nN = t(889558),
    nO = t(953584),
    nw = t(273185);
function nk(e) {
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
        I = d.getAttribute("data-type"),
        E = d.getAttribute("data-id"),
        _ = d.getAttribute("data-name");
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
    let b = document.getSelection()?.toString() ?? "";
    return (0, l.jsx)(g.f5, {
        value: y,
        children: nP({
            message: s,
            channel: r,
            mediaItem: A,
            textSelection: b,
            favoriteableType: I,
            favoriteableId: E,
            favoriteableName: _,
            itemHref: n,
            itemSrc: t,
            itemSafeSrc: i,
            itemTextContent: a,
            canReport: !0,
            onHeightUpdate: p,
            onSelect: f,
            onClose: c.Z_,
            navId: "message",
            ariaLabel: x.intl.string(x.t.ChPNkN),
            shouldHideMediaOptions: m,
        }),
    });
}
function nP(e) {
    var n;
    let i,
        o,
        u,
        h,
        I,
        b,
        F,
        q,
        z,
        el,
        es,
        ew,
        nk,
        nP,
        nU,
        nB,
        nF,
        nX,
        nH,
        nK,
        nq,
        nz,
        nV,
        nJ,
        nW,
        {
            message: nZ,
            channel: n$,
            mediaItem: nY,
            textSelection: nQ,
            favoriteableType: n0,
            favoriteableId: n8,
            favoriteableName: n1,
            itemHref: n5,
            itemSrc: n7,
            itemSafeSrc: n6,
            itemTextContent: n3,
            canReport: n2,
            onHeightUpdate: n9,
            onSelect: n4,
            onClose: te,
            navId: tn,
            ariaLabel: tt,
            shouldHideMediaOptions: ti = !1,
        } = e,
        tl = a.useRef(null);
    (a.useEffect(() => {
        tl.current = Date.now();
    }, []),
        a.useEffect(
            () => () => {
                if (null != tl.current) {
                    let e = Date.now() - tl.current;
                    v.default.track(B.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: e,
                        channel_id: n$.id,
                        guild_id: n$.getGuildId() ?? void 0,
                        message_id: nZ.id,
                    });
                }
            },
            [n$, nZ],
        ));
    let ta = a.useCallback(() => {
            if (null != tl.current) {
                let e = Date.now() - tl.current;
                v.default.track(B.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: e,
                    channel_id: n$.id,
                    guild_id: n$.getGuildId() ?? void 0,
                    message_id: nZ.id,
                });
            }
            n4?.();
        }, [n4, n$, nZ]),
        to = (0, M.lF)(),
        tr =
            ((i = (0, Z.D6)(n$.guild_id).filter(
                (e) =>
                    !(e.useSpriteSheet && eP.indexOf(e.uniqueName ?? "") >= 0) &&
                    !eo.Ay.isEmojiPremiumLocked({ emoji: e, channel: n$, intention: er.EmojiIntention.REACTION }),
            )).length > 4 && (i.length = 4),
            (o = ei.jW.useSetting()),
            (u = (0, et.Id)(n$)),
            (0, E.bG)([Q.A, ee.A], () => o && u && en(n$), [n$, u, o]) &&
            i.length > 0 &&
            nZ.type !== B.lAJ.MEDIA_MENTION_MESSAGE
                ? (0, l.jsx)(r.rX, {
                      className: ek.iE,
                      children: i.map((e, n) =>
                          (0, l.jsx)(
                              r.Dr,
                              {
                                  id: `quickreact-${e.id ?? n}`,
                                  render: (n) => {
                                      let { isFocused: t } = n;
                                      return (0, l.jsx)(eU, { emoji: e, isFocused: t });
                                  },
                                  action: () => {
                                      (0, $.BB)(n$.id, nZ.id, (0, Y.jq)(e), $.qN.MESSAGE_CONTEXT_MENU);
                                  },
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              n,
                          ),
                      ),
                  })
                : null),
        ts = (0, m.A)(nQ),
        tc = (0, y.A)(nQ),
        td = (function (e, n) {
            let { reducedMotion: t } = a.useContext(V.C),
                i = (0, et.Id)(n),
                o = (0, E.bG)([Q.A, ee.A], () => en(n) && i && !n.isMediaThread(), [n, i]),
                s = (0, Z.D6)(n.getGuildId());
            if (!ei.jW.getSetting() || !o) return null;
            let c = s
                .filter(
                    (e) =>
                        !eo.Ay.isEmojiFilteredOrLocked({ emoji: e, channel: n, intention: er.EmojiIntention.REACTION }),
                )
                .slice(0, 12)
                .map((i, a) =>
                    (0, l.jsx)(
                        r.Dr,
                        {
                            color: "default",
                            id: i.id ?? i.optionallyDiverseSequence ?? i.name,
                            label: `:${i.name}:`,
                            icon: (e) => (0, l.jsx)(ec, { ...e, reducedMotionEnabled: t.enabled, emoji: i }),
                            leadingAccessory: {
                                type: "emoji",
                                emojiId: i.id,
                                src: null == i.id ? eo.Ay.getURL(i.optionallyDiverseSequence ?? "") : void 0,
                                animated: i.animated,
                            },
                            action: () => {
                                (0, $.BB)(n.id, e.id, (0, Y.jq)(i), $.qN.MESSAGE_CONTEXT_MENU);
                            },
                            dontCloseOnActionIfHoldingShiftKey: !0,
                        },
                        a,
                    ),
                );
            return (0, l.jsx)(r.Dr, {
                id: "add-reaction",
                label: x.intl.string(x.t.lfIHs4),
                leadingAccessory: { type: "icon", icon: J.ReactionIcon },
                action: () => {
                    ea._.dispatchKeyed(B.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                },
                color: "default",
                children: (0, l.jsxs)(l.Fragment, {
                    children: [
                        c,
                        (0, l.jsx)(r.bX, {}),
                        (0, l.jsx)(r.Dr, {
                            color: "default",
                            id: "other-reactions",
                            label: x.intl.string(x.t["OBCR+p"]),
                            icon: J.ReactionIcon,
                            leadingAccessory: { type: "icon", icon: W.ViewReactionIcon },
                            action: () => {
                                ea._.dispatchKeyed(B.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                            },
                        }),
                    ],
                }),
            });
        })(nZ, n$),
        tu =
            ((h = (0, E.bG)([_.default], () => _.default.getId())),
            (I = (0, et.Id)(n$)),
            (b = (0, et.s5)(n$)),
            (0, eM.A)(nZ, h) && I && !b
                ? (0, l.jsx)(r.Dr, {
                      id: "edit",
                      label: x.intl.string(x.t.fsBWmS),
                      action: () => ej.A.startEditMessageRecord(n$.id, nZ),
                      leadingAccessory: { type: "icon", icon: ex.PencilIcon },
                      icon: ex.PencilIcon,
                  })
                : null),
        tg =
            ((F = (0, eJ.u)(n$, nZ)),
            (q = (0, eV.A)()),
            !F || q
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "reply",
                      label: x.intl.string(x.t["5IEsGx"]),
                      leadingAccessory: { type: "icon", icon: ez.ArrowAngleLeftUpIcon },
                      icon: ez.ArrowAngleLeftUpIcon,
                      action: (e) => {
                          (0, eu.$b)(n$, nZ, e);
                      },
                  })),
        tA = (0, ev.m)(nZ)
            ? (0, l.jsx)(r.Dr, {
                  id: "forward",
                  label: x.intl.string(x.t.I3ltXO),
                  leadingAccessory: { type: "icon", icon: eC.A },
                  icon: eC.A,
                  action: () => {
                      (0, eu.Z4)(n$, nZ);
                  },
              })
            : null,
        tm = (0, et.n)(n$, nZ)
            ? (0, l.jsx)(r.Dr, {
                  id: "thread",
                  label: x.intl.string(x.t.rBIGBL),
                  leadingAccessory: { type: "icon", icon: no.ThreadIcon },
                  icon: no.ThreadIcon,
                  action: () => {
                      (0, eu.Nw)(n$, nZ);
                  },
              })
            : null,
        tf = (function (e) {
            if (!ep.p5) return null;
            let n = e.getContentMessage(),
                t = (0, ef._c)(n) ? (0, em.kC)(n.components) : n.content;
            return null == t || 0 === t.length
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "copy-text",
                      label: x.intl.string(x.t.JrGD7E),
                      leadingAccessory: { type: "icon", icon: eA.CopyIcon },
                      icon: eA.CopyIcon,
                      action: () => {
                          (0, ep.C)(t);
                      },
                  });
        })(nZ),
        tp = (function (e) {
            let n,
                {
                    handleTranslate: i,
                    handleRevertTranslation: o,
                    isTranslating: s,
                    isTranslated: c,
                } = (function (e) {
                    let [n, t] = a.useState(!1),
                        i = (0, E.bG)([ng.default], () => ng.default.locale);
                    return {
                        handleTranslate: a.useCallback(
                            async (l, a) => {
                                if (n) return;
                                let o = l ?? i;
                                t(!0);
                                let r = a ?? (0, x.getAvailableLocales)().find((e) => e.value === o)?.name ?? o;
                                (nm.has(e.id) || nm.set(e.id, e.content),
                                    (0, C.P0)({
                                        text: x.intl.formatToPlainString(x.t.Znl8Z8, { targetLanguage: r }),
                                        icon: ns.MagicWandIcon,
                                    }));
                                try {
                                    let n = await nr.Bo.post({
                                        url: B.Rsh.AI_TRANSLATE,
                                        body: { content: e.content, locale: o },
                                        rejectWithError: (0, nr.fT)(),
                                    });
                                    n.body &&
                                        (nd.h.dispatch({
                                            type: "MESSAGE_UPDATE",
                                            message: { id: e.id, channel_id: e.channel_id, content: n.body.content },
                                        }),
                                        (0, C.P0)({
                                            text: x.intl.formatToPlainString(x.t.FtVUqm, { targetLanguage: r }),
                                            variant: "success",
                                        }));
                                } finally {
                                    t(!1);
                                }
                            },
                            [e, n, i],
                        ),
                        handleRevertTranslation: a.useCallback(() => {
                            let n = nm.get(e.id);
                            null != n &&
                                (nd.h.dispatch({
                                    type: "MESSAGE_UPDATE",
                                    message: { id: e.id, channel_id: e.channel_id, content: n },
                                }),
                                nm.delete(e.id));
                        }, [e.id, e.channel_id]),
                        isTranslating: n,
                        isTranslated: nm.has(e.id),
                    };
                })(e),
                d =
                    ((n = (0, x.getAvailableLocales)()),
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
                                        icon: () => (0, l.jsx)("img", { alt: "", src: n, className: nA.M }),
                                        leadingAccessory: { type: "image", src: n },
                                        action: () => i(e.value, e.name),
                                        disabled: s,
                                    },
                                    e.value,
                                );
                            }),
                        [i, s, n],
                    )),
                u = (0, nu.b)();
            return null != e.content && "" !== e.content.trim() && u
                ? c
                    ? (0, l.jsx)(r.Dr, {
                          id: "revert-translation",
                          label: x.intl.string(x.t.JC9BXn),
                          leadingAccessory: { type: "icon", icon: nc.LanguageIcon },
                          icon: nc.LanguageIcon,
                          action: o,
                          disabled: s,
                      })
                    : (0, l.jsx)(r.Dr, {
                          id: "translate",
                          label: s ? x.intl.string(x.t.SVKIdU) : x.intl.string(x.t["6epDlR"]),
                          action: () => i(),
                          leadingAccessory: { type: "icon", icon: nc.LanguageIcon },
                          disabled: s,
                          children: d,
                      })
                : null;
        })(nZ),
        ty = (0, eO.A)(nZ, n$),
        th = (0, eR.kn)(nZ, n$, "MessageContextMenu")
            ? (0, eT.Lt)(nZ.flags, B.pr7.IS_GUILD_OFFICIAL)
                ? (0, l.jsx)(r.Dr, {
                      id: "guild-official-unset",
                      action: () => {
                          ej.A.patchMessageGuildOfficial(n$.id, nZ.id, !1);
                      },
                      label: x.intl.string(x.t["2km5Gf"]),
                      leadingAccessory: { type: "icon", icon: eG.StampXIcon },
                  })
                : (0, l.jsx)(r.Dr, {
                      id: "guild-official-set",
                      action: () => {
                          ej.A.patchMessageGuildOfficial(n$.id, nZ.id, !0);
                      },
                      label: x.intl.string(x.t["lE/PG3"]),
                      leadingAccessory: { type: "icon", icon: eL.StampIcon },
                  })
            : null,
        tI = (0, K.A)(nZ, n$),
        tE = (0, D.A)({
            commandType: d.kc.MESSAGE,
            commandTargetId: nZ.id,
            channel: n$,
            guildId: void 0,
            onHeightUpdate: n9,
            showIcon: !0,
        }),
        t_ =
            nZ.state !== B.cmJ.SEND_FAILED
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "resend",
                      label: x.intl.string(x.t.lXHojr),
                      leadingAccessory: { type: "icon", icon: ne.RefreshIcon },
                      action: () => (0, nt.A)(n$, nZ, void 0, nn.A.getOptions(nZ.id)),
                  }),
        tb = (0, eN.A)(nZ, n$),
        tS =
            null != (z = n$.getGuildId()) &&
            nZ.type === B.lAJ.USER_JOIN &&
            ee.A.canWithPartialContext(B.xBc.MANAGE_GUILD, { guildId: z })
                ? (0, l.jsx)(r.Dr, {
                      id: "configure",
                      label: x.intl.string(x.t.NpHUi1),
                      leadingAccessory: { type: "icon", icon: ed.CircleQuestionIcon },
                      icon: ed.CircleQuestionIcon,
                      action: () => (0, eu.vc)(n$),
                  })
                : null,
        tx = (0, eg.A)(nZ, n$),
        tj =
            ((el = (0, ny.WU)(n$.getGuildId(), "message_context_menu")),
            (es = (0, E.bG)([np.A], () => np.A.getConversationForMessage(n$.id, nZ.id) ?? null, [n$.id, nZ.id])),
            (ew = a.useCallback(() => {
                null != es &&
                    (console.log("[ConversationHighlighting]", np.A.getConversation(n$.id, es)),
                    window.open(`https://yap-time.vibeyard.tools/?conversation=${es}`, "_blank"));
            }, [n$.id, es])),
            el && null != es
                ? (0, l.jsx)(r.Dr, {
                      id: "view-conversation",
                      label: "View Conversation",
                      leadingAccessory: { type: "icon", icon: nf.ChatIcon },
                      icon: nf.ChatIcon,
                      action: ew,
                  })
                : null),
        tM =
            ((nk = (0, E.bG)([na.A], () => na.A.isSpeakingMessage(n$.id, nZ.id), [n$, nZ])),
            "" === nZ.content
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "tts",
                      label: nk ? x.intl.string(x.t.CJ30BP) : x.intl.string(x.t.yGLjXF),
                      leadingAccessory: { type: "icon", icon: ni.ChatSpeakIcon },
                      icon: ni.ChatSpeakIcon,
                      action: () => (nk ? (0, nl.pr)() : (0, nl.kP)(n$, nZ)),
                  })),
        tD =
            null == nZ.reactions || 0 === nZ.reactions.length || (nZ.isPoll() && !(0, eF.Gh)(nZ))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "reactions",
                      label: x.intl.string(x.t.wikODq),
                      leadingAccessory: { type: "icon", icon: W.ViewReactionIcon },
                      icon: W.ViewReactionIcon,
                      action: () =>
                          (0, eB.mM)(async () => {
                              let { default: e } = await Promise.all([t.e(569080), t.e(998186)]).then(
                                  t.bind(t, 112753),
                              );
                              return (n) => (0, l.jsx)(e, { ...n, message: nZ });
                          }),
                  }),
        tv =
            0 ===
            (nP = (function (e) {
                let n = (0, E.bG)([_.default], () => _.default.getId()),
                    { poll: t } = e;
                if (!e.isPoll() || null == t) return S;
                let i = [];
                return (t.expiry.isSameOrBefore(Date.now()) || e.author.id !== n || i.push(0), i);
            })(nZ)).length
                ? null
                : (0, l.jsx)(l.Fragment, { children: nP.map((e) => j[e](nZ)) }),
        tC = (function (e) {
            let { analyticsLocations: n } = (0, g.Ay)(),
                t = e.interactionMetadata?.authorizing_integration_owners[nh.b.USER_INSTALL],
                i = e.interactionMetadata?.authorizing_integration_owners[nh.b.GUILD_INSTALL],
                o = e.interactionMetadata?.user.id,
                s = (0, E.bG)([e3.default], () => e3.default.getUser(t)),
                c = (0, E.bG)([nv.A], () => nv.A.getGuild(i)),
                d = nD.A.getChannel(e.channel_id),
                u = d?.getGuildId(),
                A = (0, E.bG)([e3.default], () => e3.default.getUser(o));
            if (
                (a.useEffect(() => {
                    null == s && null != t && (0, nE.wz)(t);
                }, [s, t]),
                !(0, nb._)(e))
            )
                return null;
            null == A && (A = new nM.A(e.interactionMetadata?.user));
            let m = null;
            if (null != c) {
                let n = (0, nj.Iv)(c, 18, !0);
                m = (0, l.jsx)(r.Dr, {
                    disabled: !0,
                    iconLeft: () => (0, l.jsx)(nS.Ay, { guild: c, size: nS.Ay.Sizes.MINI }),
                    leadingAccessory: null != n ? { type: "image", src: n } : void 0,
                    id: "integration-owner",
                    label: c.name,
                    subtext: x.intl.formatToPlainString(x.t.ShLXXB, { application: e.author.username }),
                });
            } else
                null != s &&
                    (m = (0, l.jsx)(r.Dr, {
                        action: () =>
                            (0, nx.openUserProfileModal)({
                                userId: s.id,
                                guildId: u,
                                channelId: e.channel_id,
                                sourceAnalyticsLocations: n,
                            }),
                        leadingAccessory: { type: "avatar", src: s.getAvatarURL(u, 18) },
                        id: "integration-owner",
                        label: s.username,
                        iconLeft: () => (0, l.jsx)(n_.A, { user: s, size: nI._3.SIZE_20 }),
                        subtext: x.intl.formatToPlainString(x.t.ShLXXB, { application: e.author.username }),
                    }));
            return (0, l.jsxs)(r.Dr, {
                id: "view-interaction-info",
                label: x.intl.string(x.t.Rjezbz),
                leadingAccessory: { type: "icon", icon: eh.CircleInformationIcon },
                children: [
                    m,
                    null != A
                        ? (0, l.jsx)(r.Dr, {
                              action: () =>
                                  (0, nx.openUserProfileModal)({
                                      userId: A.id,
                                      guildId: u,
                                      channelId: e.channel_id,
                                      sourceAnalyticsLocations: n,
                                  }),
                              leadingAccessory: { type: "avatar", src: A.getAvatarURL(u, 18) },
                              iconLeft: () => (0, l.jsx)(n_.A, { user: A, size: nI._3.SIZE_20 }),
                              id: "interaction-user",
                              label: A.username,
                              subtext: x.intl.string(x.t["04gxNg"]),
                          })
                        : null,
                ],
            });
        })(nZ),
        tT = (function (e, n) {
            let { reducedMotion: t } = a.useContext(V.C),
                i = (0, et.Id)(n),
                o = (0, E.bG)([ee.A], () => ee.A.can(B.xBc.MANAGE_MESSAGES, n) && i, [n, i]),
                s = e.reactions.reduce(
                    (e, n) =>
                        n.count_details?.vote != null ||
                        null != e.find((e) => (null != e.id && e.id === n.emoji.id) || e.name === n.emoji.name)
                            ? e
                            : [...e, n.emoji],
                    [],
                );
            return !o || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, eF.Gh)(e))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "remove-emoji-reactions",
                      label: x.intl.string(x.t["zx/e4P"]),
                      leadingAccessory: { type: "icon", icon: eK.RemoveReactionIcon },
                      color: "danger",
                      children: s.map((i) =>
                          (0, l.jsx)(
                              r.Dr,
                              {
                                  id: `remove-emoji-reactions-${i.name ?? i.id}`,
                                  label: (0, Y.b3)(i),
                                  action: (t) => {
                                      t.shiftKey
                                          ? (0, $.Jf)(n.id, e.id, i)
                                          : eH.A.show({
                                                title: x.intl.string(x.t["73GqTz"]),
                                                body: x.intl.string(x.t.dmy5bn),
                                                confirmText: x.intl.string(x.t.p89ACt),
                                                confirmVariant: "critical-primary",
                                                cancelText: x.intl.string(x.t.gm1Vej),
                                                onConfirm: () => {
                                                    (0, $.Jf)(n.id, e.id, i);
                                                },
                                            });
                                  },
                                  leadingAccessory: {
                                      type: "emoji",
                                      emojiId: i.id,
                                      src: null == i.id ? eo.Ay.getURL(i.name ?? "") : void 0,
                                      animated: i.animated,
                                  },
                                  icon: (e) => (0, l.jsx)(eq, { ...e, reducedMotionEnabled: t.enabled, emoji: i }),
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              i.name ?? i.id,
                          ),
                      ),
                  });
        })(nZ, n$),
        tG =
            ((nU = (0, et.Id)(n$)),
            !(0, E.bG)([ee.A], () => ee.A.can(B.xBc.MANAGE_MESSAGES, n$) && nU, [n$, nU]) ||
            null == nZ.reactions ||
            0 === nZ.reactions.length ||
            (nZ.isPoll() && !(0, eF.Gh)(nZ))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "remove-reactions",
                      label: x.intl.string(x.t.ZbtGBm),
                      leadingAccessory: { type: "icon", icon: eX.ReactionMinusIcon },
                      action: function (e) {
                          e.shiftKey
                              ? (0, $.Go)(n$.id, nZ.id)
                              : eH.A.show({
                                    title: x.intl.string(x.t.iz3vYX),
                                    body: x.intl.string(x.t.VpjOCo),
                                    confirmText: x.intl.string(x.t.p89ACt),
                                    confirmVariant: "critical-primary",
                                    cancelText: x.intl.string(x.t.gm1Vej),
                                    onConfirm: () => {
                                        (0, $.Go)(n$.id, nZ.id);
                                    },
                                });
                      },
                      color: "danger",
                  })),
        tL = (0, ey.A)(nZ, n$),
        tR =
            ((nB = (0, E.bG)([e6.A], () => e6.A.getGuildId())),
            (nF = (0, e7.Qo)(nB)),
            (0, e2.ul)(nZ)
                ? (0, l.jsx)(r.Dr, {
                      id: "report",
                      label: nF ? x.intl.string(x.t.n5EBAJ) : x.intl.string(x.t.GwbdGe),
                      action: () => (0, e8.V2)(nZ, "web_message_context_menu"),
                      icon: nF ? eZ.ClydeIcon : e$.FlagIcon,
                      leadingAccessory: { type: "icon", icon: nF ? eZ.ClydeIcon : e$.FlagIcon },
                      color: "danger",
                  })
                : null),
        tN =
            ((nX = (0, E.bG)([eQ.Ay], () => eQ.Ay.get("iar_testing"))),
            (nH = (0, E.bG)([e3.default], () => e3.default.getCurrentUser())),
            (0, e2.ul)(nZ) && null != nH && nH.isStaff() && nX
                ? (0, l.jsx)(r.Dr, {
                      id: "staff-test-message-report",
                      label: "[STAFF] Test Message Report",
                      action: () => (0, e8.Rj)(nZ, "web_message_context_menu"),
                      icon: e$.FlagIcon,
                      leadingAccessory: { type: "icon", icon: e$.FlagIcon },
                      color: "danger",
                  })
                : null),
        tO = (function (e) {
            let n = (0, E.bG)([e1.A], () => e1.A.hasReportedMessage(e.channel_id, e.id)),
                t = (0, e5.KB)(e),
                i = t ? [eW.M.REPORT_TO_MOD_NEW_TAG] : [],
                [a, o] = (0, e0.kn)(i);
            return ((0, eY.l0)(() => {
                t && o(e9.i.AUTO_DISMISS);
            }),
            t)
                ? (0, l.jsx)(r.Dr, {
                      id: "report-to-mod",
                      label: n ? x.intl.string(e4.default["8wsdng"]) : x.intl.string(e4.default["1D+vqy"]),
                      action: () => {
                          (o(e9.i.USER_DISMISS), (0, e8.dy)(e));
                      },
                      icon: e$.FlagIcon,
                      disabled: n,
                      leadingAccessory: { type: "icon", icon: e$.FlagIcon },
                      badge: a === eW.M.REPORT_TO_MOD_NEW_TAG ? "new" : void 0,
                      color: "danger",
                  })
                : null;
        })(nZ),
        tw = (0, eD.A)({ type: n0, id: n8, name: n1 }),
        tk = (function (e, n) {
            let { perGuildMaxCount: t } = N.i$[H],
                { isLoading: i, saveRule: o, errorMessage: s } = (0, O.S)(),
                { createNewEditingRule: d } = (0, O.U)(),
                [u, g] = a.useState(!1),
                [A, m] = (0, R.H6)(n),
                { rulesByTriggerType: f, updateRule: p } = (0, R.wP)(n),
                y = a.useMemo(() => f[H] ?? [], [f]),
                h = 0 === y.length,
                I = t > y.length && !h;
            if (!a.useMemo(() => (0, w.i_)(n), [n]) || null == e || 0 === e.length || null == n) return null;
            let E = e.split(" "),
                _ = E.length;
            try {
                (0, L.wk)(E, 1e3);
            } catch (e) {
                return null;
            }
            function b() {
                null == e ||
                    (null != n &&
                        ((0, c.Z_)(),
                        U.A.open(n, B.BEX.GUILD_AUTOMOD),
                        setTimeout(() => {
                            d(n, H, { triggerMetadata: { keywordFilter: [e], regexPatterns: [], allowList: [] } });
                        }, 400)));
            }
            let S = (0, l.jsx)(r.Dr, { id: "automod-rules-loading", label: x.intl.string(x.t.ZTNur7) });
            return (
                A ||
                    (S = (0, l.jsxs)(l.Fragment, {
                        children: [
                            h &&
                                (0, l.jsx)(r.Dr, {
                                    id: "add-first-rule",
                                    label: x.intl.string(x.t.f72Zqb),
                                    action: b,
                                    disabled: i,
                                }),
                            y.map((n) => {
                                let t = (0, N.J6)(H).reduce((e, t) => {
                                    let i = n.actions.find((e) => {
                                        let { type: n } = e;
                                        return t === n;
                                    });
                                    if (null == i) return e;
                                    let l = (0, k.x)(t, i);
                                    return e + `, ${l?.headerText}`;
                                }, "");
                                return (0, l.jsx)(
                                    r.iD,
                                    {
                                        id: n.id,
                                        label: n.name,
                                        subtext: (0, l.jsx)(T.E, {
                                            color: "text-muted",
                                            className: X.XX,
                                            variant: "body-xs/normal",
                                            children: t.slice(2),
                                        }),
                                        group: "automod-rule-selection",
                                        checked: !1,
                                        disabled: i,
                                        action: () =>
                                            (async function (n) {
                                                if (null == e || ((0, c.Z_)(), !(await (0, P.Zy)(n.name, e)))) return;
                                                let t = {
                                                    ...n,
                                                    triggerMetadata: {
                                                        ...n.triggerMetadata,
                                                        keywordFilter: [...(n.triggerMetadata?.keywordFilter ?? []), e],
                                                    },
                                                };
                                                (await o(t, y),
                                                    p(t),
                                                    null != s
                                                        ? (0, C.P0)({
                                                              text: x.intl.string(x.t.wH6L0r),
                                                              variant: "critical",
                                                          })
                                                        : (0, C.P0)({
                                                              text: x.intl.string(x.t["0rdYm2"]),
                                                              variant: "success",
                                                          }));
                                            })(n),
                                    },
                                    n.id,
                                );
                            }),
                            I &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(r.bX, {}),
                                        (0, l.jsx)(r.Dr, {
                                            id: "add-another-rule",
                                            label: x.intl.string(x.t["0K5jDE"]),
                                            action: b,
                                            disabled: i,
                                        }),
                                    ],
                                }),
                        ],
                    })),
                (0, l.jsx)(r.Dr, {
                    id: "guild-automod-add-selection",
                    label: x.intl.formatToPlainString(x.t.Kkjv1m, { keywordCount: _ }),
                    leadingAccessory: { type: "icon", icon: G.ShieldIcon },
                    onFocus: function () {
                        u || (g(!0), m());
                    },
                    children: S,
                })
            );
        })(nQ, n$.getGuildId()),
        tP = (0, f.A)(n6, nZ, {
            shouldHideMediaOptions: ti,
            contentType: nY?.contentType,
            originalContentType: nY?.originalContentType,
        }),
        tU =
            ((nK = (0, nG.Fg)(nZ)),
            (nq = null != nY && (0, nG.qo)({ type: nT.D.GenericMedia, media: nY }, nK)),
            null != nY && nq
                ? (0, l.jsx)(
                      r.Dr,
                      {
                          id: "report-image-false-positive",
                          label: x.intl.string(x.t.ZH7P2h),
                          action: function () {
                              null != nY &&
                                  (0, eB.mM)(async () => {
                                      let { default: e } = await t(544135);
                                      return (n) =>
                                          (0, l.jsx)(e, {
                                              channelId: nZ.channel_id,
                                              messageId: nZ.id,
                                              mediaItemUrl: nY.url,
                                              ...n,
                                          });
                                  });
                          },
                          leadingAccessory: { type: "icon", icon: nC.ImageWarningIcon },
                          icon: nC.ImageWarningIcon,
                      },
                      "report-image-false-positive",
                  )
                : null),
        tB =
            ((nz = nZ.getContentMessage()),
            (0, eT.Lt)(nz.flags, B.pr7.IS_VOICE_MESSAGE) && 0 !== nz.attachments.length
                ? (0, l.jsx)(r.Dr, {
                      id: "save-voice-message-audio",
                      label: x.intl.string(x.t.vbAEaA),
                      leadingAccessory: { type: "icon", icon: nL.DownloadIcon },
                      icon: nL.DownloadIcon,
                      action: () => {
                          let e = (0, nR.XW)(nz.attachments[0].url);
                          (0, nN.h)({ href: e });
                      },
                  })
                : null),
        tF =
            ((n = { shouldHideMediaOptions: ti }),
            (nV = nY?.url ?? ""),
            (nJ = (0, E.bG)([nO.Ay], () => nO.Ay.isVideoStatsEnabled(nV))),
            (nW = a.useCallback(() => {
                "" !== nV && (0, nO.FM)(nV);
            }, [nV])),
            null != nY && (0, nw.XB)(nY.contentType) && n?.shouldHideMediaOptions !== !0
                ? (0, l.jsx)(r.sL, {
                      id: "video-stats-for-nerds",
                      label: "Stats for Nerds",
                      leadingAccessory: { type: "icon", icon: eh.CircleInformationIcon },
                      checked: nJ,
                      action: nW,
                  })
                : null),
        tX = (0, p.A)(n5 ?? n7, n3, nZ, { shouldHideMediaOptions: ti }),
        tH = (0, A.A)({ id: nZ.id, label: x.intl.string(x.t.zBoHlf), shiftId: `${nZ.channel_id}-${nZ.id}` }),
        tK = (function (e) {
            let { messageId: n, itemId: t, type: i, imageSrc: o } = e,
                s = ei.Q_.useSetting(),
                c = (0, M.lF)(),
                d = a.useCallback(() => {
                    (0, ep.C)(n);
                }, [n]),
                u = a.useCallback(() => {
                    null != t && (0, ep.C)(t);
                }, [t]),
                g = a.useCallback(() => {
                    null != o && (0, ep.C)(o);
                }, [o]),
                A = a.useCallback(() => {
                    null != o && (0, eS.A)(o);
                }, [o]),
                m = "sticker" === i;
            if (!s || !ep.p5 || !c || ("emoji" !== i && !m) || null == t) return null;
            let f = m ? x.intl.string(x.t.SJ3249) : x.intl.string(x.t.Ap2oVy),
                p = m ? x.intl.string(x.t.B1ubHx) : x.intl.string(x.t.cIoudn),
                y = m ? x.intl.string(x.t["qAEi+C"]) : x.intl.string(x.t.gDAM2n);
            return (0, l.jsxs)(r.Dr, {
                id: "message-details",
                label: x.intl.string(x.t.IqqJNI),
                leadingAccessory: { type: "icon", icon: eh.CircleInformationIcon },
                children: [
                    (0, l.jsx)(r.Dr, {
                        id: "copy-message-id",
                        label: x.intl.string(x.t.zBoHlf),
                        action: d,
                        leadingAccessory: { type: "icon", icon: eI.IdIcon },
                    }),
                    (0, l.jsx)(r.Dr, {
                        id: "copy-item-id",
                        label: f,
                        action: u,
                        leadingAccessory: { type: "icon", icon: eI.IdIcon },
                    }),
                    null != o &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(r.Dr, {
                                    id: "copy-image-link",
                                    label: p,
                                    action: g,
                                    leadingAccessory: { type: "icon", icon: eE.LinkIcon },
                                }),
                                (0, l.jsx)(r.Dr, {
                                    id: "open-image-link",
                                    label: y,
                                    action: A,
                                    leadingAccessory: { type: "icon", icon: e_.BrowserIcon },
                                    trailingIndicator: { type: "icon", icon: eb.LinkExternalSmallIcon },
                                }),
                            ],
                        }),
                ],
            });
        })({ messageId: nZ.id, itemId: n8, type: n0, imageSrc: n7 }),
        tq = (0, l.jsx)(r.rX, { children: tK ?? tH }),
        tz = (0, l.jsxs)(r.rX, { children: [tw, tk, tP, tU, tB, tF] });
    return (0, l.jsxs)(s.W, {
        "data-menu-migrated": !0,
        navId: tn,
        onClose: te,
        "aria-label": tt,
        onSelect: ta,
        children: [
            (0, l.jsx)(r.rX, { children: ts }),
            (0, l.jsx)(r.rX, { children: tc }),
            (0, l.jsxs)(r.rX, { children: ["" === nQ ? tr : null, td, tD] }),
            (0, l.jsxs)(r.rX, { children: [tu, tg, tA, tm] }),
            (0, l.jsxs)(r.rX, { children: [tf, tp, ty, th, tI, tE, t_, tb, tS, tx, tj, tM, tv, tC] }),
            (0, l.jsxs)(r.rX, { children: [tT, tG, tL, n2 && tR, n2 && tN, tO] }),
            to
                ? (0, l.jsxs)(l.Fragment, { children: [tq, tz, null == tK && (0, l.jsx)(r.rX, { children: tX })] })
                : (0, l.jsxs)(l.Fragment, { children: [tz, (0, l.jsx)(r.rX, { children: tX }), tq] }),
        ],
    });
}
