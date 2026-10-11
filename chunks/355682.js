t.d(n, { c: () => nB, default: () => nk });
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
    I = t(280450),
    S = (((i = {})[(i.END_EARLY = 0)] = "END_EARLY"), i);
let b = [];
var j = t(660183);
let M = {
    [S.END_EARLY]: (e) =>
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
    G = t(174459),
    T = t(858899),
    v = t(834730),
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
    ei = t(885386),
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
    eI = t(509434),
    eS = t(975807),
    eb = t(22231),
    ej = t(148494),
    eM = t(697470),
    eD = t(253925),
    eG = t(843626),
    eT = t(427209);
t(938796);
var ev = t(665260),
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
    e7 = t(892340),
    e4 = t(715757),
    e2 = t(967198),
    e6 = t(287809),
    e5 = t(628691),
    e9 = t(49999),
    e3 = t(39470),
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
    np = t(604681),
    ny = t(181041),
    nh = t(828488),
    nE = t(623562),
    n_ = t(485845),
    nx = t(778712),
    nI = t(803306),
    nS = t(966327),
    nb = t(597929),
    nj = t(548118),
    nM = t(402860),
    nD = t(260509),
    nG = t(889227),
    nT = t(734057),
    nv = t(71393),
    nC = t(87221),
    nL = t(930125),
    nO = t(282108),
    nN = t(32880),
    nR = t(803316),
    nw = t(123917),
    nU = t(953584),
    nP = t(59318);
function nk(e) {
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
                (h = h.parentNode));
    let I = document.getSelection()?.toString() ?? "";
    return (0, l.jsx)(g.f5, {
        value: y,
        children: nB({
            message: o,
            channel: r,
            mediaItem: A,
            textSelection: I,
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
function nB(e) {
    var n;
    let i,
        s,
        u,
        E,
        _,
        S,
        K,
        q,
        el,
        eo,
        ew,
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
        n$,
        nY,
        {
            message: nQ,
            channel: n0,
            mediaItem: n8,
            textSelection: n1,
            favoriteableType: n7,
            favoriteableId: n4,
            favoriteableName: n2,
            itemHref: n6,
            itemSrc: n5,
            itemSafeSrc: n9,
            itemTextContent: n3,
            canReport: te,
            onHeightUpdate: tn,
            onSelect: tt,
            onClose: ti,
            navId: tl,
            ariaLabel: ta,
            shouldHideMediaOptions: ts = !1,
        } = e,
        tr = a.useRef(null);
    (a.useEffect(() => {
        tr.current = Date.now();
    }, []),
        a.useEffect(
            () => () => {
                if (null != tr.current) {
                    let e = Date.now() - tr.current;
                    G.default.track(B.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: e,
                        channel_id: n0.id,
                        guild_id: n0.getGuildId() ?? void 0,
                        message_id: nQ.id,
                    });
                }
            },
            [n0, nQ],
        ));
    let to = a.useCallback(() => {
            if (null != tr.current) {
                let e = Date.now() - tr.current;
                G.default.track(B.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: e,
                    channel_id: n0.id,
                    guild_id: n0.getGuildId() ?? void 0,
                    message_id: nQ.id,
                });
            }
            tt?.();
        }, [tt, n0, nQ]),
        { tidaWebformEnabled: tc } = m.A.useExperiment({ location: "MessageContextMenu" }, { autoTrackExposure: !1 }),
        td =
            ((i = (0, Z.D6)(n0.guild_id).filter(
                (e) =>
                    !(e.useSpriteSheet && eP.indexOf(e.uniqueName ?? "") >= 0) &&
                    !es.Ay.isEmojiPremiumLocked({ emoji: e, channel: n0, intention: er.EmojiIntention.REACTION }),
            )).length > 4 && (i.length = 4),
            (s = ei.jW.useSetting()),
            (u = (0, et.Id)(n0)),
            (0, x.bG)([Q.A, ee.A], () => s && u && en(n0), [n0, u, s]) &&
            i.length > 0 &&
            nQ.type !== B.lAJ.MEDIA_MENTION_MESSAGE
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
                                      (0, $.BB)(n0.id, nQ.id, (0, Y.jq)(e), $.qN.MESSAGE_CONTEXT_MENU);
                                  },
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              n,
                          ),
                      ),
                  })
                : null),
        tu = (0, f.A)(n1),
        tg = (0, h.A)(n1),
        tA = (function (e, n) {
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
        })(nQ, n0),
        tm =
            ((E = (0, x.bG)([I.default], () => I.default.getId())),
            (_ = (0, et.Id)(n0)),
            (S = (0, et.s5)(n0)),
            (0, eM.A)(nQ, E) && _ && !S
                ? (0, l.jsx)(r.Dr, {
                      id: "edit",
                      label: j.intl.string(j.t.fsBWmS),
                      action: () => ej.A.startEditMessageRecord(n0.id, nQ),
                      leadingAccessory: { type: "icon", icon: eb.PencilIcon },
                      icon: eb.PencilIcon,
                  })
                : null),
        tf =
            ((K = (0, eV.u)(n0, nQ)),
            (q = (0, eJ.A)()),
            !K || q
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "reply",
                      label: j.intl.string(j.t["5IEsGx"]),
                      leadingAccessory: { type: "icon", icon: eq.W },
                      icon: eq.W,
                      action: (e) => {
                          (0, eu.$b)(n0, nQ, e);
                      },
                  })),
        tp = (0, eG.m)(nQ)
            ? (0, l.jsx)(r.Dr, {
                  id: "forward",
                  label: j.intl.string(j.t.I3ltXO),
                  leadingAccessory: { type: "icon", icon: eT.A },
                  icon: eT.A,
                  action: () => {
                      (0, eu.Z4)(n0, nQ);
                  },
              })
            : null,
        ty = (0, et.n)(n0, nQ)
            ? (0, l.jsx)(r.Dr, {
                  id: "thread",
                  label: j.intl.string(j.t.rBIGBL),
                  leadingAccessory: { type: "icon", icon: ns.y },
                  icon: ns.y,
                  action: () => {
                      (0, eu.Nw)(n0, nQ);
                  },
              })
            : null,
        th = (function (e) {
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
        })(nQ),
        tE = (function (e) {
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
        })(nQ),
        t_ = (0, eR.A)(nQ, n0),
        tx = (0, eO.kn)(nQ, n0, "MessageContextMenu")
            ? (0, ev.Lt)(nQ.flags, B.pr7.IS_GUILD_OFFICIAL)
                ? (0, l.jsx)(r.Dr, {
                      id: "guild-official-unset",
                      action: () => {
                          ej.A.patchMessageGuildOfficial(n0.id, nQ.id, !1);
                      },
                      label: j.intl.string(j.t["2km5Gf"]),
                      leadingAccessory: { type: "icon", icon: eC.$ },
                  })
                : (0, l.jsx)(r.Dr, {
                      id: "guild-official-set",
                      action: () => {
                          ej.A.patchMessageGuildOfficial(n0.id, nQ.id, !0);
                      },
                      label: j.intl.string(j.t["lE/PG3"]),
                      leadingAccessory: { type: "icon", icon: eL.L },
                  })
            : null,
        tI = (0, z.A)(nQ, n0),
        tS = (0, D.A)({
            commandType: d.kc.MESSAGE,
            commandTargetId: nQ.id,
            channel: n0,
            guildId: void 0,
            onHeightUpdate: tn,
            showIcon: !0,
        }),
        tb =
            nQ.state !== B.cmJ.SEND_FAILED
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "resend",
                      label: j.intl.string(j.t.lXHojr),
                      leadingAccessory: { type: "icon", icon: ne.RefreshIcon },
                      action: () => (0, nt.A)(n0, nQ, void 0, nn.A.getOptions(nQ.id)),
                  }),
        tj = (0, eN.A)(nQ, n0),
        tM =
            null != (el = n0.getGuildId()) &&
            nQ.type === B.lAJ.USER_JOIN &&
            ee.A.canWithPartialContext(B.xBc.MANAGE_GUILD, { guildId: el })
                ? (0, l.jsx)(r.Dr, {
                      id: "configure",
                      label: j.intl.string(j.t.NpHUi1),
                      leadingAccessory: { type: "icon", icon: ed.CircleQuestionIcon },
                      icon: ed.CircleQuestionIcon,
                      action: () => (0, eu.vc)(n0),
                  })
                : null,
        tD = (0, eg.A)(nQ, n0),
        tG =
            ((eo = (0, nh.WU)(n0.getGuildId(), "message_context_menu")),
            (ew = (0, x.bG)([ny.A], () => ny.A.getConversationForMessage(n0.id, nQ.id) ?? null, [n0.id, nQ.id])),
            (nk = a.useCallback(() => {
                null != n0.getGuildId() && null != ew && (np.A.openConversationsSection(), (0, nE.xI)(n0.id, ew));
            }, [n0, ew])),
            eo && null != ew
                ? (0, l.jsx)(r.Dr, {
                      id: "view-conversation",
                      label: "View Conversation",
                      leadingAccessory: { type: "icon", icon: nf.ChatIcon },
                      icon: nf.ChatIcon,
                      action: nk,
                  })
                : null),
        tT =
            ((nB = (0, x.bG)([na.A], () => na.A.isSpeakingMessage(n0.id, nQ.id), [n0, nQ])),
            "" === nQ.content
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "tts",
                      label: nB ? j.intl.string(j.t.CJ30BP) : j.intl.string(j.t.yGLjXF),
                      leadingAccessory: { type: "icon", icon: ni._ },
                      icon: ni._,
                      action: () => (nB ? (0, nl.pr)() : (0, nl.kP)(n0, nQ)),
                  })),
        tv =
            null == nQ.reactions || 0 === nQ.reactions.length || (nQ.isPoll() && !(0, eF.Gh)(nQ))
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
                              return (n) => (0, l.jsx)(e, { ...n, message: nQ });
                          }),
                  }),
        tC =
            0 ===
            (nF = (function (e) {
                let n = (0, x.bG)([I.default], () => I.default.getId()),
                    { poll: t } = e;
                if (!e.isPoll() || null == t) return b;
                let i = [];
                return (t.expiry.isSameOrBefore(Date.now()) || e.author.id !== n || i.push(0), i);
            })(nQ)).length
                ? null
                : (0, l.jsx)(l.Fragment, { children: nF.map((e) => M[e](nQ)) }),
        tL = (function (e) {
            let { analyticsLocations: n } = (0, g.Ay)(),
                t = e.interactionMetadata?.authorizing_integration_owners[n_.b.USER_INSTALL],
                i = e.interactionMetadata?.authorizing_integration_owners[n_.b.GUILD_INSTALL],
                s = e.interactionMetadata?.user.id,
                o = (0, x.bG)([e6.default], () => e6.default.getUser(t)),
                c = (0, x.bG)([nv.A], () => nv.A.getGuild(i)),
                d = nT.A.getChannel(e.channel_id),
                u = d?.getGuildId(),
                A = (0, x.bG)([e6.default], () => e6.default.getUser(s));
            if (
                (a.useEffect(() => {
                    null == o && null != t && (0, nI.wz)(t);
                }, [o, t]),
                !(0, nb._)(e))
            )
                return null;
            null == A && (A = new nG.A(e.interactionMetadata?.user));
            let m = null;
            if (null != c) {
                let n = (0, nD.Iv)(c, 18, !0);
                m = (0, l.jsx)(r.Dr, {
                    disabled: !0,
                    iconLeft: () => (0, l.jsx)(nj.Ay, { guild: c, size: nj.Ay.Sizes.MINI }),
                    leadingAccessory: null != n ? { type: "image", src: n } : void 0,
                    id: "integration-owner",
                    label: c.name,
                    subtext: j.intl.formatToPlainString(j.t.ShLXXB, { application: e.author.username }),
                });
            } else
                null != o &&
                    (m = (0, l.jsx)(r.Dr, {
                        action: () =>
                            (0, nM.openUserProfileModal)({
                                userId: o.id,
                                guildId: u,
                                channelId: e.channel_id,
                                sourceAnalyticsLocations: n,
                            }),
                        leadingAccessory: { type: "avatar", src: o.getAvatarURL(u, 18) },
                        id: "integration-owner",
                        label: o.username,
                        iconLeft: () => (0, l.jsx)(nS.A, { user: o, size: nx._3.SIZE_20 }),
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
                                  (0, nM.openUserProfileModal)({
                                      userId: A.id,
                                      guildId: u,
                                      channelId: e.channel_id,
                                      sourceAnalyticsLocations: n,
                                  }),
                              leadingAccessory: { type: "avatar", src: A.getAvatarURL(u, 18) },
                              iconLeft: () => (0, l.jsx)(nS.A, { user: A, size: nx._3.SIZE_20 }),
                              id: "interaction-user",
                              label: A.username,
                              subtext: j.intl.string(j.t["04gxNg"]),
                          })
                        : null,
                ],
            });
        })(nQ),
        tO = (function (e, n) {
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
        })(nQ, n0),
        tN =
            ((nX = (0, et.Id)(n0)),
            !(0, x.bG)([ee.A], () => ee.A.can(B.xBc.MANAGE_MESSAGES, n0) && nX, [n0, nX]) ||
            null == nQ.reactions ||
            0 === nQ.reactions.length ||
            (nQ.isPoll() && !(0, eF.Gh)(nQ))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "remove-reactions",
                      label: j.intl.string(j.t.ZbtGBm),
                      leadingAccessory: { type: "icon", icon: eX.t },
                      action: function (e) {
                          e.shiftKey
                              ? (0, $.Go)(n0.id, nQ.id)
                              : eH.A.show({
                                    title: j.intl.string(j.t.iz3vYX),
                                    body: j.intl.string(j.t.VpjOCo),
                                    confirmText: j.intl.string(j.t.p89ACt),
                                    confirmVariant: "critical-primary",
                                    cancelText: j.intl.string(j.t.gm1Vej),
                                    onConfirm: () => {
                                        (0, $.Go)(n0.id, nQ.id);
                                    },
                                });
                      },
                      color: "danger",
                  })),
        tR = (0, ey.A)(nQ, n0),
        tw =
            ((nH = (0, x.bG)([e2.A], () => e2.A.getGuildId())),
            (nz = (0, e4.Qo)(nH)),
            (0, e5.ul)(nQ)
                ? (0, l.jsx)(r.Dr, {
                      id: "report",
                      label: nz ? j.intl.string(j.t.n5EBAJ) : j.intl.string(j.t.GwbdGe),
                      action: () => (0, e8.V2)(nQ, "web_message_context_menu"),
                      icon: nz ? eZ.p : e$.FlagIcon,
                      leadingAccessory: { type: "icon", icon: nz ? eZ.p : e$.FlagIcon },
                      color: "danger",
                  })
                : null),
        tU =
            ((nK = (0, x.bG)([eQ.Ay], () => eQ.Ay.get("iar_testing"))),
            (nq = (0, x.bG)([e6.default], () => e6.default.getCurrentUser())),
            (0, e5.ul)(nQ) && null != nq && nq.isStaff() && nK
                ? (0, l.jsx)(r.Dr, {
                      id: "staff-test-message-report",
                      label: "[STAFF] Test Message Report",
                      action: () => (0, e8.Rj)(nQ, "web_message_context_menu"),
                      icon: e$.FlagIcon,
                      leadingAccessory: { type: "icon", icon: e$.FlagIcon },
                      color: "danger",
                  })
                : null),
        tP = (function (e) {
            let n = (0, x.bG)([e1.A], () => e1.A.hasReportedMessage(e.channel_id, e.id)),
                t = (0, e7.KB)(e),
                i = t ? [eW.M.REPORT_TO_MOD_NEW_TAG] : [],
                [a, s] = (0, e0.kn)(i);
            return ((0, eY.l0)(() => {
                t && s(e9.i.AUTO_DISMISS);
            }),
            t)
                ? (0, l.jsx)(r.Dr, {
                      id: "report-to-mod",
                      label: n ? j.intl.string(e3.default["8wsdng"]) : j.intl.string(e3.default["1D+vqy"]),
                      action: () => {
                          (s(e9.i.USER_DISMISS), (0, e8.dy)(e));
                      },
                      icon: e$.FlagIcon,
                      disabled: n,
                      leadingAccessory: { type: "icon", icon: e$.FlagIcon },
                      badge: a === eW.M.REPORT_TO_MOD_NEW_TAG ? "new" : void 0,
                      color: "danger",
                  })
                : null;
        })(nQ),
        tk = (0, eD.A)({ type: n7, id: n4, name: n2 }),
        tB = (function (e, n) {
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
            function I() {
                null == e ||
                    (null != n &&
                        ((0, c.Z_)(),
                        k.A.open(n, B.BEX.GUILD_AUTOMOD),
                        setTimeout(() => {
                            d(n, H, { triggerMetadata: { keywordFilter: [e], regexPatterns: [], allowList: [] } });
                        }, 400)));
            }
            async function S(n) {
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
            let b = (0, l.jsx)(r.Dr, { id: "automod-rules-loading", label: j.intl.string(j.t.ZTNur7) });
            return (
                A ||
                    (b = (0, l.jsxs)(l.Fragment, {
                        children: [
                            h &&
                                (0, l.jsx)(r.Dr, {
                                    id: "add-first-rule",
                                    label: j.intl.string(j.t.f72Zqb),
                                    action: I,
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
                                        subtext: (0, l.jsx)(v.E, {
                                            color: "text-muted",
                                            className: X.XX,
                                            variant: "text-xs/normal",
                                            children: n.slice(2),
                                        }),
                                        group: "automod-rule-selection",
                                        checked: !1,
                                        disabled: i,
                                        action: () => S(e),
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
                                            action: I,
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
                    children: b,
                })
            );
        })(n1, n0.getGuildId()),
        tF = (0, p.A)(n9, nQ, {
            shouldHideMediaOptions: ts,
            contentType: n8?.contentType,
            originalContentType: n8?.originalContentType,
        }),
        tX =
            ((nJ = (0, nO.Fg)(nQ)),
            (nV = null != n8 && (0, nO.qo)({ type: nL.D.GenericMedia, media: n8 }, nJ)),
            null != n8 && nV
                ? (0, l.jsx)(
                      r.Dr,
                      {
                          id: "report-image-false-positive",
                          label: j.intl.string(j.t.ZH7P2h),
                          action: function () {
                              null != n8 &&
                                  (0, eB.openModalLazy)(async () => {
                                      let { default: e } = await t(679276);
                                      return (n) =>
                                          (0, l.jsx)(e, {
                                              channelId: nQ.channel_id,
                                              messageId: nQ.id,
                                              mediaItemUrl: n8.url,
                                              ...n,
                                          });
                                  });
                          },
                          leadingAccessory: { type: "icon", icon: nC.D },
                          icon: nC.D,
                      },
                      "report-image-false-positive",
                  )
                : null),
        tH =
            ((nW = nQ.getContentMessage()),
            (0, ev.Lt)(nW.flags, B.pr7.IS_VOICE_MESSAGE) && 0 !== nW.attachments.length
                ? (0, l.jsx)(r.Dr, {
                      id: "save-voice-message-audio",
                      label: j.intl.string(j.t.vbAEaA),
                      leadingAccessory: { type: "icon", icon: nN.DownloadIcon },
                      icon: nN.DownloadIcon,
                      action: () => {
                          let e = (0, nR.XW)(nW.attachments[0].url);
                          (0, nw.h)({ href: e });
                      },
                  })
                : null),
        tz =
            ((n = { shouldHideMediaOptions: ts }),
            (nZ = n8?.url ?? ""),
            (n$ = (0, x.bG)([nU.Ay], () => nU.Ay.isVideoStatsEnabled(nZ))),
            (nY = a.useCallback(() => {
                "" !== nZ && (0, nU.FM)(nZ);
            }, [nZ])),
            null != n8 && (0, nP.XB)(n8.contentType) && n?.shouldHideMediaOptions !== !0
                ? (0, l.jsx)(r.sL, {
                      id: "video-stats-for-nerds",
                      label: "Stats for Nerds",
                      leadingAccessory: { type: "icon", icon: eh.CircleInformationIcon },
                      checked: n$,
                      action: nY,
                  })
                : null),
        tK = (0, y.A)(n6 ?? n5, n3, nQ, { shouldHideMediaOptions: ts }),
        tq = (0, A.A)({ id: nQ.id, label: j.intl.string(j.t.zBoHlf), shiftId: `${nQ.channel_id}-${nQ.id}` }),
        tJ = (function (e) {
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
                    null != s && (0, eS.A)(s);
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
                                    trailingIndicator: { type: "icon", icon: eI.I },
                                }),
                            ],
                        }),
                ],
            });
        })({ messageId: nQ.id, itemId: n4, type: n7, imageSrc: n5 }),
        tV = (0, l.jsx)(r.rX, { children: tJ ?? tq }),
        tW = (0, l.jsxs)(r.rX, { children: [tk, tB, tF, tX, tH, tz] });
    return (0, l.jsxs)(o.W, {
        "data-menu-migrated": !0,
        navId: tl,
        onClose: ti,
        "aria-label": ta,
        onSelect: to,
        children: [
            (0, l.jsx)(r.rX, { children: tu }),
            (0, l.jsx)(r.rX, { children: tg }),
            (0, l.jsxs)(r.rX, { children: ["" === n1 ? td : null, tA, tv] }),
            (0, l.jsxs)(r.rX, { children: [tm, tf, tp, ty] }),
            (0, l.jsxs)(r.rX, { children: [th, tE, t_, tx, tI, tS, tb, tj, tM, tD, tG, tT, tC, tL] }),
            (0, l.jsxs)(r.rX, { children: [tO, tN, tR, te && tw, te && tU, tP] }),
            tc
                ? (0, l.jsxs)(l.Fragment, { children: [tV, tW, null == tJ && (0, l.jsx)(r.rX, { children: tK })] })
                : (0, l.jsxs)(l.Fragment, { children: [tW, (0, l.jsx)(r.rX, { children: tK }), tV] }),
        ],
    });
}
