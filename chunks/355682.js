t.d(n, { c: () => nP, default: () => nU });
var i,
    l = t(477900),
    a = t(582128),
    s = t(621466),
    r = t(477782),
    o = t(980707),
    c = t(442433),
    d = t(155718),
    u = t(793574),
    g = t(688810),
    A = t(50268),
    m = t(486503),
    f = t(373963),
    p = t(115184),
    y = t(777933),
    h = t(826308),
    E = t(337358),
    _ = t(180662);
t(321073);
var x = t(17928),
    b = t(280450),
    I = (((i = {})[(i.END_EARLY = 0)] = "END_EARLY"), i);
let S = [];
var j = t(105292);
let M = {
    [I.END_EARLY]: (e) =>
        (0, l.jsx)(r.Dr, {
            id: "end-poll-early",
            label: j.intl.string(j.t.grdwwt),
            icon: E.O,
            leadingAccessory: { type: "icon", icon: E.O },
            action: () => {
                _.A.endPollEarly({ channelId: e.channel_id, messageId: e.id });
            },
            iconProps: { color: "currentColor" },
        }),
};
var D = t(646911),
    v = t(174459),
    T = t(858899),
    G = t(834730),
    C = t(231483),
    L = t(627794),
    O = t(928348),
    N = t(452245),
    R = t(364806),
    w = t(979816),
    U = t(677420),
    P = t(264349),
    k = t(468689),
    B = t(652215),
    F = t(243277),
    X = t(654502);
let H = F.uh.KEYWORD;
var z = t(880457),
    K = t(503698),
    q = t.n(K),
    J = t(844222),
    V = t(460905),
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
    ea = t(625494),
    es = t(690521),
    er = t(307731),
    eo = t(482496);
function ec(e) {
    let { emoji: n, reducedMotionEnabled: t, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: q()(i, eo.Z),
        src:
            null != n.id
                ? el.Ay.getEmojiURL({ id: n.id, animated: n.animated && (!t || a), size: 18 })
                : es.Ay.getURL(n.optionallyDiverseSequence ?? ""),
        alt: "",
    });
}
var ed = t(290136),
    eu = t(519222),
    eg = t(345254),
    eA = t(624479),
    em = t(437517),
    ef = t(383233),
    ep = t(957565),
    ey = t(483768),
    eh = t(885574),
    eE = t(473935),
    e_ = t(173936),
    ex = t(93688),
    eb = t(509434),
    eI = t(975807),
    eS = t(22231),
    ej = t(148494),
    eM = t(697470),
    eD = t(253925),
    ev = t(843626),
    eT = t(427209);
t(938796);
var eG = t(665260),
    eC = t(563119),
    eL = t(581925),
    eO = t(521427),
    eN = t(20883),
    eR = t(979766),
    ew = t(866665),
    eU = t(816426);
let eP = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];
function ek(e) {
    let { emoji: n, isFocused: t } = e,
        { animated: i, src: a, surrogates: s } = n;
    return (
        null == a && null != n.id
            ? (a = el.Ay.getEmojiURL({ id: n.id, animated: !!i, size: 20 }))
            : null == a && (a = es.Ay.getURL(s)),
        (0, l.jsx)(ew.m, {
            text: (0, es.N)(n),
            hideOnClick: !0,
            spacing: 16,
            forceOpen: t,
            children: (0, l.jsx)("div", {
                "aria-label": j.intl.formatToPlainString(j.t["/iYSo6"], { emojiName: n.name }),
                className: q()(eU.x6, { [eU.in]: t }),
                children:
                    null == a || "" === a.trim()
                        ? (0, l.jsx)("span", { className: q()("emoji", "emoji-text", eU.Kk), children: s })
                        : (0, l.jsx)("img", { className: eU.Kk, src: a, alt: "" }),
            }),
        })
    );
}
var eB = t(192308),
    eF = t(969632),
    eX = t(997571),
    eH = t(157559),
    ez = t(769297);
function eK(e) {
    let { emoji: n, reducedMotionEnabled: t, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: i,
        src:
            null != n.id
                ? el.Ay.getEmojiURL({ id: n.id, animated: n.animated && (!t || a), size: 18 })
                : es.Ay.getURL(n.name ?? ""),
        alt: "",
    });
}
var eq = t(110384),
    eJ = t(973196),
    eV = t(517997),
    eW = t(554146),
    eZ = t(111159),
    e$ = t(138134),
    eY = t(964486),
    eQ = t(865116),
    e0 = t(131607),
    e8 = t(928658),
    e1 = t(400528),
    e2 = t(892340),
    e7 = t(715757),
    e4 = t(967198),
    e5 = t(287809),
    e9 = t(628691),
    e6 = t(49999),
    e3 = t(291185),
    ne = t(663417),
    nn = t(965407),
    nt = t(249700),
    ni = t(556112),
    nl = t(54570),
    na = t(8880),
    ns = t(163328),
    nr = t(636537),
    no = t(152367),
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
    nE = t(778712),
    n_ = t(803306),
    nx = t(966327),
    nb = t(597929),
    nI = t(548118),
    nS = t(402860),
    nj = t(260509),
    nM = t(889227),
    nD = t(734057),
    nv = t(71393),
    nT = t(87221),
    nG = t(930125),
    nC = t(282108),
    nL = t(32880),
    nO = t(803316),
    nN = t(123917),
    nR = t(953584),
    nw = t(59318);
function nU(e) {
    let n,
        t,
        i,
        a,
        {
            channel: r,
            message: o,
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
        x = d.getAttribute("data-name");
    if (null != A) t = n = i = A.url;
    else
        for (; (0, s.vq)(h);)
            ((0, s.vq)(h, HTMLImageElement) && null != h.src && (t = h.src),
                (0, s.vq)(h, HTMLAnchorElement) &&
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
            message: o,
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
            onHeightUpdate: p,
            onSelect: f,
            onClose: c.Z_,
            navId: "message",
            ariaLabel: j.intl.string(j.t.ChPNkN),
            shouldHideMediaOptions: m,
        }),
    });
}
function nP(e) {
    var n;
    let i,
        s,
        u,
        E,
        _,
        I,
        K,
        q,
        el,
        eo,
        ew,
        nU,
        nP,
        nk,
        nB,
        nF,
        nX,
        nH,
        nz,
        nK,
        nq,
        nJ,
        nV,
        nW,
        nZ,
        {
            message: n$,
            channel: nY,
            mediaItem: nQ,
            textSelection: n0,
            favoriteableType: n8,
            favoriteableId: n1,
            favoriteableName: n2,
            itemHref: n7,
            itemSrc: n4,
            itemSafeSrc: n5,
            itemTextContent: n9,
            canReport: n6,
            onHeightUpdate: n3,
            onSelect: te,
            onClose: tn,
            navId: tt,
            ariaLabel: ti,
            shouldHideMediaOptions: tl = !1,
        } = e,
        ta = a.useRef(null);
    (a.useEffect(() => {
        ta.current = Date.now();
    }, []),
        a.useEffect(
            () => () => {
                if (null != ta.current) {
                    let e = Date.now() - ta.current;
                    v.default.track(B.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: e,
                        channel_id: nY.id,
                        guild_id: nY.getGuildId() ?? void 0,
                        message_id: n$.id,
                    });
                }
            },
            [nY, n$],
        ));
    let ts = a.useCallback(() => {
            if (null != ta.current) {
                let e = Date.now() - ta.current;
                v.default.track(B.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: e,
                    channel_id: nY.id,
                    guild_id: nY.getGuildId() ?? void 0,
                    message_id: n$.id,
                });
            }
            te?.();
        }, [te, nY, n$]),
        { tidaWebformEnabled: tr } = m.A.useExperiment({ location: "MessageContextMenu" }, { autoTrackExposure: !1 }),
        to =
            ((i = (0, Z.D6)(nY.guild_id).filter(
                (e) =>
                    !(e.useSpriteSheet && eP.indexOf(e.uniqueName ?? "") >= 0) &&
                    !es.Ay.isEmojiPremiumLocked({ emoji: e, channel: nY, intention: er.EmojiIntention.REACTION }),
            )).length > 4 && (i.length = 4),
            (s = ei.jW.useSetting()),
            (u = (0, et.Id)(nY)),
            (0, x.bG)([Q.A, ee.A], () => s && u && en(nY), [nY, u, s]) &&
            i.length > 0 &&
            n$.type !== B.lAJ.MEDIA_MENTION_MESSAGE
                ? (0, l.jsx)(r.rX, {
                      className: eU.iE,
                      children: i.map((e, n) =>
                          (0, l.jsx)(
                              r.Dr,
                              {
                                  id: `quickreact-${e.id ?? n}`,
                                  render: (n) => {
                                      let { isFocused: t } = n;
                                      return (0, l.jsx)(ek, { emoji: e, isFocused: t });
                                  },
                                  action: () => {
                                      (0, $.BB)(nY.id, n$.id, (0, Y.jq)(e), $.qN.MESSAGE_CONTEXT_MENU);
                                  },
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              n,
                          ),
                      ),
                  })
                : null),
        tc = (0, f.A)(n0),
        td = (0, h.A)(n0),
        tu = (function (e, n) {
            let { reducedMotion: t } = a.useContext(J.C),
                i = (0, et.Id)(n),
                s = (0, x.bG)([Q.A, ee.A], () => en(n) && i && !n.isMediaThread(), [n, i]),
                o = (0, Z.D6)(n.getGuildId());
            if (!ei.jW.getSetting() || !s) return null;
            let c = o
                .filter(
                    (e) =>
                        !es.Ay.isEmojiFilteredOrLocked({ emoji: e, channel: n, intention: er.EmojiIntention.REACTION }),
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
                                src: null == i.id ? es.Ay.getURL(i.optionallyDiverseSequence ?? "") : void 0,
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
                label: j.intl.string(j.t.lfIHs4),
                leadingAccessory: { type: "icon", icon: V.n },
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
                            label: j.intl.string(j.t["OBCR+p"]),
                            icon: V.n,
                            leadingAccessory: { type: "icon", icon: W.S },
                            action: () => {
                                ea._.dispatchKeyed(B.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                            },
                        }),
                    ],
                }),
            });
        })(n$, nY),
        tg =
            ((E = (0, x.bG)([b.default], () => b.default.getId())),
            (_ = (0, et.Id)(nY)),
            (I = (0, et.s5)(nY)),
            (0, eM.A)(n$, E) && _ && !I
                ? (0, l.jsx)(r.Dr, {
                      id: "edit",
                      label: j.intl.string(j.t.fsBWmS),
                      action: () => ej.A.startEditMessageRecord(nY.id, n$),
                      leadingAccessory: { type: "icon", icon: eS.PencilIcon },
                      icon: eS.PencilIcon,
                  })
                : null),
        tA =
            ((K = (0, eV.u)(nY, n$)),
            (q = (0, eJ.A)()),
            !K || q
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "reply",
                      label: j.intl.string(j.t["5IEsGx"]),
                      leadingAccessory: { type: "icon", icon: eq.W },
                      icon: eq.W,
                      action: (e) => {
                          (0, eu.$b)(nY, n$, e);
                      },
                  })),
        tm = (0, ev.m)(n$)
            ? (0, l.jsx)(r.Dr, {
                  id: "forward",
                  label: j.intl.string(j.t.I3ltXO),
                  leadingAccessory: { type: "icon", icon: eT.A },
                  icon: eT.A,
                  action: () => {
                      (0, eu.Z4)(nY, n$);
                  },
              })
            : null,
        tf = (0, et.n)(nY, n$)
            ? (0, l.jsx)(r.Dr, {
                  id: "thread",
                  label: j.intl.string(j.t.rBIGBL),
                  leadingAccessory: { type: "icon", icon: ns.y },
                  icon: ns.y,
                  action: () => {
                      (0, eu.Nw)(nY, n$);
                  },
              })
            : null,
        tp = (function (e) {
            if (!ep.p5) return null;
            let n = e.getContentMessage(),
                t = (0, ef._c)(n) ? (0, em.kC)(n.components) : n.content;
            return null == t || 0 === t.length
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "copy-text",
                      label: j.intl.string(j.t.JrGD7E),
                      leadingAccessory: { type: "icon", icon: eA.CopyIcon },
                      icon: eA.CopyIcon,
                      action: () => {
                          (0, ep.C)(t);
                      },
                  });
        })(n$),
        ty = (function (e) {
            let n,
                {
                    handleTranslate: i,
                    handleRevertTranslation: s,
                    isTranslating: o,
                    isTranslated: c,
                } = (function (e) {
                    let [n, t] = a.useState(!1),
                        i = (0, x.bG)([ng.default], () => ng.default.locale);
                    return {
                        handleTranslate: a.useCallback(
                            async (l, a) => {
                                if (n) return;
                                let s = l ?? i;
                                t(!0);
                                let r = a ?? (0, j.getAvailableLocales)().find((e) => e.value === s)?.name ?? s;
                                (nm.has(e.id) || nm.set(e.id, e.content),
                                    (0, T.P0)({
                                        text: j.intl.formatToPlainString(j.t.Znl8Z8, { targetLanguage: r }),
                                        icon: no.D,
                                    }));
                                try {
                                    let n = await nr.Bo.post({
                                        url: B.Rsh.AI_TRANSLATE,
                                        body: { content: e.content, locale: s },
                                        rejectWithError: (0, nr.fT)(),
                                    });
                                    n.body &&
                                        (nd.h.dispatch({
                                            type: "MESSAGE_UPDATE",
                                            message: { id: e.id, channel_id: e.channel_id, content: n.body.content },
                                        }),
                                        (0, T.P0)({
                                            text: j.intl.formatToPlainString(j.t.FtVUqm, { targetLanguage: r }),
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
                    ((n = (0, j.getAvailableLocales)()),
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
                                        disabled: o,
                                    },
                                    e.value,
                                );
                            }),
                        [i, o, n],
                    )),
                u = (0, nu.b)();
            return null != e.content && "" !== e.content.trim() && u
                ? c
                    ? (0, l.jsx)(r.Dr, {
                          id: "revert-translation",
                          label: j.intl.string(j.t.JC9BXn),
                          leadingAccessory: { type: "icon", icon: nc.U },
                          icon: nc.U,
                          action: s,
                          disabled: o,
                      })
                    : (0, l.jsx)(r.Dr, {
                          id: "translate",
                          label: o ? j.intl.string(j.t.SVKIdU) : j.intl.string(j.t["6epDlR"]),
                          action: () => i(),
                          leadingAccessory: { type: "icon", icon: nc.U },
                          disabled: o,
                          children: d,
                      })
                : null;
        })(n$),
        th = (0, eR.A)(n$, nY),
        tE = (0, eO.kn)(n$, nY, "MessageContextMenu")
            ? (0, eG.Lt)(n$.flags, B.pr7.IS_GUILD_OFFICIAL)
                ? (0, l.jsx)(r.Dr, {
                      id: "guild-official-unset",
                      action: () => {
                          ej.A.patchMessageGuildOfficial(nY.id, n$.id, !1);
                      },
                      label: j.intl.string(j.t["2km5Gf"]),
                      leadingAccessory: { type: "icon", icon: eC.$ },
                  })
                : (0, l.jsx)(r.Dr, {
                      id: "guild-official-set",
                      action: () => {
                          ej.A.patchMessageGuildOfficial(nY.id, n$.id, !0);
                      },
                      label: j.intl.string(j.t["lE/PG3"]),
                      leadingAccessory: { type: "icon", icon: eL.L },
                  })
            : null,
        t_ = (0, z.A)(n$, nY),
        tx = (0, D.A)({
            commandType: d.kc.MESSAGE,
            commandTargetId: n$.id,
            channel: nY,
            guildId: void 0,
            onHeightUpdate: n3,
            showIcon: !0,
        }),
        tb =
            n$.state !== B.cmJ.SEND_FAILED
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "resend",
                      label: j.intl.string(j.t.lXHojr),
                      leadingAccessory: { type: "icon", icon: ne.RefreshIcon },
                      action: () => (0, nt.A)(nY, n$, void 0, nn.A.getOptions(n$.id)),
                  }),
        tI = (0, eN.A)(n$, nY),
        tS =
            null != (el = nY.getGuildId()) &&
            n$.type === B.lAJ.USER_JOIN &&
            ee.A.canWithPartialContext(B.xBc.MANAGE_GUILD, { guildId: el })
                ? (0, l.jsx)(r.Dr, {
                      id: "configure",
                      label: j.intl.string(j.t.NpHUi1),
                      leadingAccessory: { type: "icon", icon: ed.CircleQuestionIcon },
                      icon: ed.CircleQuestionIcon,
                      action: () => (0, eu.vc)(nY),
                  })
                : null,
        tj = (0, eg.A)(n$, nY),
        tM =
            ((eo = (0, ny.WU)(nY.getGuildId(), "message_context_menu")),
            (ew = (0, x.bG)([np.A], () => np.A.getConversationForMessage(nY.id, n$.id) ?? null, [nY.id, n$.id])),
            (nU = a.useCallback(() => {
                null != ew &&
                    (console.log("[ConversationHighlighting]", np.A.getConversation(nY.id, ew)),
                    window.open(`https://yap-time.vibeyard.tools/?conversation=${ew}`, "_blank"));
            }, [nY.id, ew])),
            eo && null != ew
                ? (0, l.jsx)(r.Dr, {
                      id: "view-conversation",
                      label: "View Conversation",
                      leadingAccessory: { type: "icon", icon: nf.ChatIcon },
                      icon: nf.ChatIcon,
                      action: nU,
                  })
                : null),
        tD =
            ((nP = (0, x.bG)([na.A], () => na.A.isSpeakingMessage(nY.id, n$.id), [nY, n$])),
            "" === n$.content
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "tts",
                      label: nP ? j.intl.string(j.t.CJ30BP) : j.intl.string(j.t.yGLjXF),
                      leadingAccessory: { type: "icon", icon: ni._ },
                      icon: ni._,
                      action: () => (nP ? (0, nl.pr)() : (0, nl.kP)(nY, n$)),
                  })),
        tv =
            null == n$.reactions || 0 === n$.reactions.length || (n$.isPoll() && !(0, eF.Gh)(n$))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "reactions",
                      label: j.intl.string(j.t.wikODq),
                      leadingAccessory: { type: "icon", icon: W.S },
                      icon: W.S,
                      action: () =>
                          (0, eB.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([t.e("569080"), t.e("998186")]).then(
                                  t.bind(t, 112753),
                              );
                              return (n) => (0, l.jsx)(e, { ...n, message: n$ });
                          }),
                  }),
        tT =
            0 ===
            (nk = (function (e) {
                let n = (0, x.bG)([b.default], () => b.default.getId()),
                    { poll: t } = e;
                if (!e.isPoll() || null == t) return S;
                let i = [];
                return (t.expiry.isSameOrBefore(Date.now()) || e.author.id !== n || i.push(0), i);
            })(n$)).length
                ? null
                : (0, l.jsx)(l.Fragment, { children: nk.map((e) => M[e](n$)) }),
        tG = (function (e) {
            let { analyticsLocations: n } = (0, g.Ay)(),
                t = e.interactionMetadata?.authorizing_integration_owners[nh.b.USER_INSTALL],
                i = e.interactionMetadata?.authorizing_integration_owners[nh.b.GUILD_INSTALL],
                s = e.interactionMetadata?.user.id,
                o = (0, x.bG)([e5.default], () => e5.default.getUser(t)),
                c = (0, x.bG)([nv.A], () => nv.A.getGuild(i)),
                d = nD.A.getChannel(e.channel_id),
                u = d?.getGuildId(),
                A = (0, x.bG)([e5.default], () => e5.default.getUser(s));
            if (
                (a.useEffect(() => {
                    null == o && null != t && (0, n_.wz)(t);
                }, [o, t]),
                !(0, nb._)(e))
            )
                return null;
            null == A && (A = new nM.A(e.interactionMetadata?.user));
            let m = null;
            if (null != c) {
                let n = (0, nj.Iv)(c, 18, !0);
                m = (0, l.jsx)(r.Dr, {
                    disabled: !0,
                    iconLeft: () => (0, l.jsx)(nI.Ay, { guild: c, size: nI.Ay.Sizes.MINI }),
                    leadingAccessory: null != n ? { type: "image", src: n } : void 0,
                    id: "integration-owner",
                    label: c.name,
                    subtext: j.intl.formatToPlainString(j.t.ShLXXB, { application: e.author.username }),
                });
            } else
                null != o &&
                    (m = (0, l.jsx)(r.Dr, {
                        action: () =>
                            (0, nS.openUserProfileModal)({
                                userId: o.id,
                                guildId: u,
                                channelId: e.channel_id,
                                sourceAnalyticsLocations: n,
                            }),
                        leadingAccessory: { type: "avatar", src: o.getAvatarURL(u, 18) },
                        id: "integration-owner",
                        label: o.username,
                        iconLeft: () => (0, l.jsx)(nx.A, { user: o, size: nE._3.SIZE_20 }),
                        subtext: j.intl.formatToPlainString(j.t.ShLXXB, { application: e.author.username }),
                    }));
            return (0, l.jsxs)(r.Dr, {
                id: "view-interaction-info",
                label: j.intl.string(j.t.Rjezbz),
                leadingAccessory: { type: "icon", icon: eh.CircleInformationIcon },
                children: [
                    m,
                    null != A
                        ? (0, l.jsx)(r.Dr, {
                              action: () =>
                                  (0, nS.openUserProfileModal)({
                                      userId: A.id,
                                      guildId: u,
                                      channelId: e.channel_id,
                                      sourceAnalyticsLocations: n,
                                  }),
                              leadingAccessory: { type: "avatar", src: A.getAvatarURL(u, 18) },
                              iconLeft: () => (0, l.jsx)(nx.A, { user: A, size: nE._3.SIZE_20 }),
                              id: "interaction-user",
                              label: A.username,
                              subtext: j.intl.string(j.t["04gxNg"]),
                          })
                        : null,
                ],
            });
        })(n$),
        tC = (function (e, n) {
            let { reducedMotion: t } = a.useContext(J.C),
                i = (0, et.Id)(n),
                s = (0, x.bG)([ee.A], () => ee.A.can(B.xBc.MANAGE_MESSAGES, n) && i, [n, i]),
                o = e.reactions.reduce(
                    (e, n) =>
                        n.count_details?.vote != null ||
                        null != e.find((e) => (null != e.id && e.id === n.emoji.id) || e.name === n.emoji.name)
                            ? e
                            : [...e, n.emoji],
                    [],
                );
            return !s || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, eF.Gh)(e))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "remove-emoji-reactions",
                      label: j.intl.string(j.t["zx/e4P"]),
                      leadingAccessory: { type: "icon", icon: ez.F },
                      color: "danger",
                      children: o.map((i) =>
                          (0, l.jsx)(
                              r.Dr,
                              {
                                  id: `remove-emoji-reactions-${i.name ?? i.id}`,
                                  label: (0, Y.b3)(i),
                                  action: (t) => {
                                      t.shiftKey
                                          ? (0, $.Jf)(n.id, e.id, i)
                                          : eH.A.show({
                                                title: j.intl.string(j.t["73GqTz"]),
                                                body: j.intl.string(j.t.dmy5bn),
                                                confirmText: j.intl.string(j.t.p89ACt),
                                                confirmVariant: "critical-primary",
                                                cancelText: j.intl.string(j.t.gm1Vej),
                                                onConfirm: () => {
                                                    (0, $.Jf)(n.id, e.id, i);
                                                },
                                            });
                                  },
                                  leadingAccessory: {
                                      type: "emoji",
                                      emojiId: i.id,
                                      src: null == i.id ? es.Ay.getURL(i.name ?? "") : void 0,
                                      animated: i.animated,
                                  },
                                  icon: (e) => (0, l.jsx)(eK, { ...e, reducedMotionEnabled: t.enabled, emoji: i }),
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              i.name ?? i.id,
                          ),
                      ),
                  });
        })(n$, nY),
        tL =
            ((nB = (0, et.Id)(nY)),
            !(0, x.bG)([ee.A], () => ee.A.can(B.xBc.MANAGE_MESSAGES, nY) && nB, [nY, nB]) ||
            null == n$.reactions ||
            0 === n$.reactions.length ||
            (n$.isPoll() && !(0, eF.Gh)(n$))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "remove-reactions",
                      label: j.intl.string(j.t.ZbtGBm),
                      leadingAccessory: { type: "icon", icon: eX.t },
                      action: function (e) {
                          e.shiftKey
                              ? (0, $.Go)(nY.id, n$.id)
                              : eH.A.show({
                                    title: j.intl.string(j.t.iz3vYX),
                                    body: j.intl.string(j.t.VpjOCo),
                                    confirmText: j.intl.string(j.t.p89ACt),
                                    confirmVariant: "critical-primary",
                                    cancelText: j.intl.string(j.t.gm1Vej),
                                    onConfirm: () => {
                                        (0, $.Go)(nY.id, n$.id);
                                    },
                                });
                      },
                      color: "danger",
                  })),
        tO = (0, ey.A)(n$, nY),
        tN =
            ((nF = (0, x.bG)([e4.A], () => e4.A.getGuildId())),
            (nX = (0, e7.Qo)(nF)),
            (0, e9.ul)(n$)
                ? (0, l.jsx)(r.Dr, {
                      id: "report",
                      label: nX ? j.intl.string(j.t.n5EBAJ) : j.intl.string(j.t.GwbdGe),
                      action: () => (0, e8.V2)(n$, "web_message_context_menu"),
                      icon: nX ? eZ.p : e$.FlagIcon,
                      leadingAccessory: { type: "icon", icon: nX ? eZ.p : e$.FlagIcon },
                      color: "danger",
                  })
                : null),
        tR =
            ((nH = (0, x.bG)([eQ.Ay], () => eQ.Ay.get("iar_testing"))),
            (nz = (0, x.bG)([e5.default], () => e5.default.getCurrentUser())),
            (0, e9.ul)(n$) && null != nz && nz.isStaff() && nH
                ? (0, l.jsx)(r.Dr, {
                      id: "staff-test-message-report",
                      label: "[STAFF] Test Message Report",
                      action: () => (0, e8.Rj)(n$, "web_message_context_menu"),
                      icon: e$.FlagIcon,
                      leadingAccessory: { type: "icon", icon: e$.FlagIcon },
                      color: "danger",
                  })
                : null),
        tw = (function (e) {
            let n = (0, x.bG)([e1.A], () => e1.A.hasReportedMessage(e.channel_id, e.id)),
                t = (0, e2.KB)(e),
                i = t ? [eW.M.REPORT_TO_MOD_NEW_TAG] : [],
                [a, s] = (0, e0.kn)(i);
            return ((0, eY.l0)(() => {
                t && s(e6.i.AUTO_DISMISS);
            }),
            t)
                ? (0, l.jsx)(r.Dr, {
                      id: "report-to-mod",
                      label: n ? j.intl.string(e3.default["8wsdng"]) : j.intl.string(e3.default["1D+vqy"]),
                      action: () => {
                          (s(e6.i.USER_DISMISS), (0, e8.dy)(e));
                      },
                      icon: e$.FlagIcon,
                      disabled: n,
                      leadingAccessory: { type: "icon", icon: e$.FlagIcon },
                      badge: a === eW.M.REPORT_TO_MOD_NEW_TAG ? "new" : void 0,
                      color: "danger",
                  })
                : null;
        })(n$),
        tU = (0, eD.A)({ type: n8, id: n1, name: n2 }),
        tP = (function (e, n) {
            let { perGuildMaxCount: t } = N.i$[H],
                { isLoading: i, saveRule: s, errorMessage: o } = (0, R.S)(),
                { createNewEditingRule: d } = (0, R.U)(),
                [u, g] = a.useState(!1),
                [A, m] = (0, O.H6)(n),
                { rulesByTriggerType: f, updateRule: p } = (0, O.wP)(n),
                y = a.useMemo(() => f[H] ?? [], [f]),
                h = 0 === y.length,
                E = t > y.length && !h;
            if (!a.useMemo(() => (0, w.i_)(n), [n]) || null == e || 0 === e.length || null == n) return null;
            let _ = e.split(" "),
                x = _.length;
            try {
                (0, L.wk)(_, F.bV);
            } catch (e) {
                return null;
            }
            function b() {
                null == e ||
                    (null != n &&
                        ((0, c.Z_)(),
                        k.A.open(n, B.BEX.GUILD_AUTOMOD),
                        setTimeout(() => {
                            d(n, H, { triggerMetadata: { keywordFilter: [e], regexPatterns: [], allowList: [] } });
                        }, 400)));
            }
            async function I(n) {
                if (null == e || ((0, c.Z_)(), !(await (0, P.Zy)(n.name, e)))) return;
                let t = {
                    ...n,
                    triggerMetadata: {
                        ...n.triggerMetadata,
                        keywordFilter: [...(n.triggerMetadata?.keywordFilter ?? []), e],
                    },
                };
                (await s(t, y),
                    p(t),
                    null != o
                        ? (0, T.P0)({ text: j.intl.string(j.t.wH6L0r), variant: "critical" })
                        : (0, T.P0)({ text: j.intl.string(j.t["0rdYm2"]), variant: "success" }));
            }
            let S = (0, l.jsx)(r.Dr, { id: "automod-rules-loading", label: j.intl.string(j.t.ZTNur7) });
            return (
                A ||
                    (S = (0, l.jsxs)(l.Fragment, {
                        children: [
                            h &&
                                (0, l.jsx)(r.Dr, {
                                    id: "add-first-rule",
                                    label: j.intl.string(j.t.f72Zqb),
                                    action: b,
                                    disabled: i,
                                }),
                            y.map((e) => {
                                let n = (0, N.J6)(H).reduce((n, t) => {
                                    let i = e.actions.find((e) => {
                                        let { type: n } = e;
                                        return t === n;
                                    });
                                    if (null == i) return n;
                                    let l = (0, U.x)(t, i);
                                    return n + `, ${l?.headerText}`;
                                }, "");
                                return (0, l.jsx)(
                                    r.iD,
                                    {
                                        id: e.id,
                                        label: e.name,
                                        subtext: (0, l.jsx)(G.E, {
                                            color: "text-muted",
                                            className: X.XX,
                                            variant: "text-xs/normal",
                                            children: n.slice(2),
                                        }),
                                        group: "automod-rule-selection",
                                        checked: !1,
                                        disabled: i,
                                        action: () => I(e),
                                    },
                                    e.id,
                                );
                            }),
                            E &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(r.bX, {}),
                                        (0, l.jsx)(r.Dr, {
                                            id: "add-another-rule",
                                            label: j.intl.string(j.t["0K5jDE"]),
                                            action: b,
                                            disabled: i,
                                        }),
                                    ],
                                }),
                        ],
                    })),
                (0, l.jsx)(r.Dr, {
                    id: "guild-automod-add-selection",
                    label: j.intl.formatToPlainString(j.t.Kkjv1m, { keywordCount: x }),
                    leadingAccessory: { type: "icon", icon: C.ShieldIcon },
                    onFocus: function () {
                        u || (g(!0), m());
                    },
                    children: S,
                })
            );
        })(n0, nY.getGuildId()),
        tk = (0, p.A)(n5, n$, {
            shouldHideMediaOptions: tl,
            contentType: nQ?.contentType,
            originalContentType: nQ?.originalContentType,
        }),
        tB =
            ((nK = (0, nC.Fg)(n$)),
            (nq = null != nQ && (0, nC.qo)({ type: nG.D.GenericMedia, media: nQ }, nK)),
            null != nQ && nq
                ? (0, l.jsx)(
                      r.Dr,
                      {
                          id: "report-image-false-positive",
                          label: j.intl.string(j.t.ZH7P2h),
                          action: function () {
                              null != nQ &&
                                  (0, eB.openModalLazy)(async () => {
                                      let { default: e } = await t(679276);
                                      return (n) =>
                                          (0, l.jsx)(e, {
                                              channelId: n$.channel_id,
                                              messageId: n$.id,
                                              mediaItemUrl: nQ.url,
                                              ...n,
                                          });
                                  });
                          },
                          leadingAccessory: { type: "icon", icon: nT.D },
                          icon: nT.D,
                      },
                      "report-image-false-positive",
                  )
                : null),
        tF =
            ((nJ = n$.getContentMessage()),
            (0, eG.Lt)(nJ.flags, B.pr7.IS_VOICE_MESSAGE) && 0 !== nJ.attachments.length
                ? (0, l.jsx)(r.Dr, {
                      id: "save-voice-message-audio",
                      label: j.intl.string(j.t.vbAEaA),
                      leadingAccessory: { type: "icon", icon: nL.DownloadIcon },
                      icon: nL.DownloadIcon,
                      action: () => {
                          let e = (0, nO.XW)(nJ.attachments[0].url);
                          (0, nN.h)({ href: e });
                      },
                  })
                : null),
        tX =
            ((n = { shouldHideMediaOptions: tl }),
            (nV = nQ?.url ?? ""),
            (nW = (0, x.bG)([nR.Ay], () => nR.Ay.isVideoStatsEnabled(nV))),
            (nZ = a.useCallback(() => {
                "" !== nV && (0, nR.FM)(nV);
            }, [nV])),
            null != nQ && (0, nw.XB)(nQ.contentType) && n?.shouldHideMediaOptions !== !0
                ? (0, l.jsx)(r.sL, {
                      id: "video-stats-for-nerds",
                      label: "Stats for Nerds",
                      leadingAccessory: { type: "icon", icon: eh.CircleInformationIcon },
                      checked: nW,
                      action: nZ,
                  })
                : null),
        tH = (0, y.A)(n7 ?? n4, n9, n$, { shouldHideMediaOptions: tl }),
        tz = (0, A.A)({ id: n$.id, label: j.intl.string(j.t.zBoHlf), shiftId: `${n$.channel_id}-${n$.id}` }),
        tK = (function (e) {
            let { messageId: n, itemId: t, type: i, imageSrc: s } = e,
                o = ei.Q_.useSetting(),
                { tidaWebformEnabled: c } = m.A.useExperiment(
                    { location: "useMessageDetailsItem" },
                    { autoTrackExposure: !1 },
                ),
                d = a.useCallback(() => {
                    (0, ep.C)(n);
                }, [n]),
                u = a.useCallback(() => {
                    null != t && (0, ep.C)(t);
                }, [t]),
                g = a.useCallback(() => {
                    null != s && (0, ep.C)(s);
                }, [s]),
                A = a.useCallback(() => {
                    null != s && (0, eI.A)(s);
                }, [s]),
                f = "sticker" === i;
            if (!o || !ep.p5 || !c || ("emoji" !== i && !f) || null == t) return null;
            let p = f ? j.intl.string(j.t.SJ3249) : j.intl.string(j.t.Ap2oVy),
                y = f ? j.intl.string(j.t.B1ubHx) : j.intl.string(j.t.cIoudn),
                h = f ? j.intl.string(j.t["qAEi+C"]) : j.intl.string(j.t.gDAM2n);
            return (0, l.jsxs)(r.Dr, {
                id: "message-details",
                label: j.intl.string(j.t.IqqJNI),
                leadingAccessory: { type: "icon", icon: eh.CircleInformationIcon },
                children: [
                    (0, l.jsx)(r.Dr, {
                        id: "copy-message-id",
                        label: j.intl.string(j.t.zBoHlf),
                        action: d,
                        leadingAccessory: { type: "icon", icon: eE.L },
                    }),
                    (0, l.jsx)(r.Dr, {
                        id: "copy-item-id",
                        label: p,
                        action: u,
                        leadingAccessory: { type: "icon", icon: eE.L },
                    }),
                    null != s &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(r.Dr, {
                                    id: "copy-image-link",
                                    label: y,
                                    action: g,
                                    leadingAccessory: { type: "icon", icon: e_.LinkIcon },
                                }),
                                (0, l.jsx)(r.Dr, {
                                    id: "open-image-link",
                                    label: h,
                                    action: A,
                                    leadingAccessory: { type: "icon", icon: ex.W },
                                    trailingIndicator: { type: "icon", icon: eb.I },
                                }),
                            ],
                        }),
                ],
            });
        })({ messageId: n$.id, itemId: n1, type: n8, imageSrc: n4 }),
        tq = (0, l.jsx)(r.rX, { children: tK ?? tz }),
        tJ = (0, l.jsxs)(r.rX, { children: [tU, tP, tk, tB, tF, tX] });
    return (0, l.jsxs)(o.W, {
        "data-menu-migrated": !0,
        navId: tt,
        onClose: tn,
        "aria-label": ti,
        onSelect: ts,
        children: [
            (0, l.jsx)(r.rX, { children: tc }),
            (0, l.jsx)(r.rX, { children: td }),
            (0, l.jsxs)(r.rX, { children: ["" === n0 ? to : null, tu, tv] }),
            (0, l.jsxs)(r.rX, { children: [tg, tA, tm, tf] }),
            (0, l.jsxs)(r.rX, { children: [tp, ty, th, tE, t_, tx, tb, tI, tS, tj, tM, tD, tT, tG] }),
            (0, l.jsxs)(r.rX, { children: [tC, tL, tO, n6 && tN, n6 && tR, tw] }),
            tr
                ? (0, l.jsxs)(l.Fragment, { children: [tq, tJ, null == tK && (0, l.jsx)(r.rX, { children: tH })] })
                : (0, l.jsxs)(l.Fragment, { children: [tJ, (0, l.jsx)(r.rX, { children: tH }), tq] }),
        ],
    });
}
