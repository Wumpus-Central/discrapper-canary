t.d(n, { c: () => nP, default: () => nk });
var i,
    l = t(477900),
    a = t(582128),
    r = t(621466),
    s = t(477782),
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
var S = t(17928),
    I = t(280450),
    x = (((i = {})[(i.END_EARLY = 0)] = "END_EARLY"), i);
let b = [];
var j = t(375708);
let M = {
    [x.END_EARLY]: (e) =>
        (0, l.jsx)(s.Dr, {
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
    C = t(174459),
    G = t(739187),
    T = t(857250),
    v = t(97483),
    L = t(834730),
    O = t(231483),
    N = t(627794),
    R = t(928348),
    w = t(452245),
    U = t(364806),
    k = t(979816),
    P = t(677420),
    F = t(264349),
    B = t(468689),
    X = t(652215),
    H = t(243277),
    z = t(654502);
let K = H.uh.KEYWORD;
var q = t(880457),
    J = t(503698),
    V = t.n(J),
    W = t(844222),
    Z = t(460905),
    $ = t(217306),
    Y = t(822123),
    Q = t(649963),
    ee = t(815807),
    en = t(834942),
    et = t(576705);
let ei = (e) => {
    let n = e.getGuildId();
    return (
        ((null != n && en.A.canChatInGuild(n) && et.A.can(X.xBc.ADD_REACTIONS, e)) || e.isPrivate()) && !e.isSystemDM()
    );
};
var el = t(406704),
    ea = t(885386),
    er = t(486020),
    es = t(625494),
    eo = t(690521),
    ec = t(307731),
    ed = t(482496);
function eu(e) {
    let { emoji: n, reducedMotionEnabled: t, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: V()(i, ed.Z),
        src:
            null != n.id
                ? er.Ay.getEmojiURL({ id: n.id, animated: n.animated && (!t || a), size: 18 })
                : eo.Ay.getURL(n.optionallyDiverseSequence ?? ""),
        alt: "",
    });
}
var eg = t(290136),
    eA = t(519222),
    em = t(345254),
    ef = t(734495),
    ep = t(483768),
    ey = t(885574),
    eh = t(473935),
    eE = t(173936),
    e_ = t(93688),
    eS = t(509434),
    eI = t(975807),
    ex = t(957565),
    eb = t(22231),
    ej = t(148494),
    eM = t(697470),
    eD = t(253925),
    eC = t(843626),
    eG = t(427209);
t(938796);
var eT = t(665260),
    ev = t(563119),
    eL = t(581925),
    eO = t(521427),
    eN = t(20883),
    eR = t(979766),
    ew = t(866665),
    eU = t(816426);
let ek = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];
function eP(e) {
    let { emoji: n, isFocused: t } = e,
        { animated: i, src: a, surrogates: r } = n;
    return (
        null == a && null != n.id
            ? (a = er.Ay.getEmojiURL({ id: n.id, animated: !!i, size: 20 }))
            : null == a && (a = eo.Ay.getURL(r)),
        (0, l.jsx)(ew.m, {
            text: (0, eo.N)(n),
            hideOnClick: !0,
            spacing: 16,
            forceOpen: t,
            children: (0, l.jsx)("div", {
                "aria-label": j.intl.formatToPlainString(j.t["/iYSo6"], { emojiName: n.name }),
                className: V()(eU.x6, { [eU.in]: t }),
                children:
                    null == a || "" === a.trim()
                        ? (0, l.jsx)("span", { className: V()("emoji", "emoji-text", eU.Kk), children: r })
                        : (0, l.jsx)("img", { className: eU.Kk, src: a, alt: "" }),
            }),
        })
    );
}
var eF = t(192308),
    eB = t(969632),
    eX = t(997571),
    eH = t(157559),
    ez = t(769297);
function eK(e) {
    let { emoji: n, reducedMotionEnabled: t, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: i,
        src:
            null != n.id
                ? er.Ay.getEmojiURL({ id: n.id, animated: n.animated && (!t || a), size: 18 })
                : eo.Ay.getURL(n.name ?? ""),
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
    e7 = t(928658),
    e8 = t(400528),
    e4 = t(892340),
    e1 = t(715757),
    e2 = t(967198),
    e5 = t(287809),
    e6 = t(628691),
    e9 = t(49999),
    e3 = t(39470),
    ne = t(663417),
    nn = t(965407),
    nt = t(249700),
    ni = t(556112),
    nl = t(54570),
    na = t(8880),
    nr = t(163328),
    ns = t(636537),
    no = t(37646),
    nc = t(73153),
    nd = t(147087),
    nu = t(773669),
    ng = t(132183);
let nA = new Map();
var nm = t(534890),
    nf = t(604681),
    np = t(181041),
    ny = t(828488),
    nh = t(623562),
    nE = t(485845),
    n_ = t(778712),
    nS = t(803306),
    nI = t(966327),
    nx = t(597929),
    nb = t(548118),
    nj = t(402860),
    nM = t(260509),
    nD = t(889227),
    nC = t(734057),
    nG = t(71393),
    nT = t(87221),
    nv = t(930125),
    nL = t(282108),
    nO = t(32880),
    nN = t(803316),
    nR = t(123917),
    nw = t(953584),
    nU = t(59318);
function nk(e) {
    let n,
        t,
        i,
        a,
        {
            channel: s,
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
        S = d.getAttribute("data-name");
    if (null != A) t = n = i = A.url;
    else
        for (; (0, r.vq)(h);)
            ((0, r.vq)(h, HTMLImageElement) && null != h.src && (t = h.src),
                (0, r.vq)(h, HTMLAnchorElement) &&
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
        children: nP({
            message: o,
            channel: s,
            mediaItem: A,
            textSelection: I,
            favoriteableType: E,
            favoriteableId: _,
            favoriteableName: S,
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
        r,
        u,
        E,
        _,
        x,
        J,
        V,
        er,
        ed,
        ew,
        nk,
        nP,
        nF,
        nB,
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
        {
            message: nY,
            channel: nQ,
            mediaItem: n0,
            textSelection: n7,
            favoriteableType: n8,
            favoriteableId: n4,
            favoriteableName: n1,
            itemHref: n2,
            itemSrc: n5,
            itemSafeSrc: n6,
            itemTextContent: n9,
            canReport: n3,
            onHeightUpdate: te,
            onSelect: tn,
            onClose: tt,
            navId: ti,
            ariaLabel: tl,
            shouldHideMediaOptions: ta = !1,
        } = e,
        tr = a.useRef(null);
    (a.useEffect(() => {
        tr.current = Date.now();
    }, []),
        a.useEffect(
            () => () => {
                if (null != tr.current) {
                    let e = Date.now() - tr.current;
                    C.default.track(X.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: e,
                        channel_id: nQ.id,
                        guild_id: nQ.getGuildId() ?? void 0,
                        message_id: nY.id,
                    });
                }
            },
            [nQ, nY],
        ));
    let ts = a.useCallback(() => {
            if (null != tr.current) {
                let e = Date.now() - tr.current;
                C.default.track(X.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: e,
                    channel_id: nQ.id,
                    guild_id: nQ.getGuildId() ?? void 0,
                    message_id: nY.id,
                });
            }
            tn?.();
        }, [tn, nQ, nY]),
        { tidaWebformEnabled: to } = m.A.useExperiment({ location: "MessageContextMenu" }, { autoTrackExposure: !1 }),
        tc =
            ((i = (0, Y.D6)(nQ.guild_id).filter(
                (e) =>
                    !(e.useSpriteSheet && ek.indexOf(e.uniqueName ?? "") >= 0) &&
                    !eo.Ay.isEmojiPremiumLocked({ emoji: e, channel: nQ, intention: ec.EmojiIntention.REACTION }),
            )).length > 4 && (i.length = 4),
            (r = ea.jW.useSetting()),
            (u = (0, el.Id)(nQ)),
            (0, S.bG)([en.A, et.A], () => r && u && ei(nQ), [nQ, u, r]) &&
            i.length > 0 &&
            nY.type !== X.lAJ.MEDIA_MENTION_MESSAGE
                ? (0, l.jsx)(s.rX, {
                      className: eU.iE,
                      children: i.map((e, n) =>
                          (0, l.jsx)(
                              s.Dr,
                              {
                                  id: `quickreact-${e.id ?? n}`,
                                  render: (n) => {
                                      let { isFocused: t } = n;
                                      return (0, l.jsx)(eP, { emoji: e, isFocused: t });
                                  },
                                  action: () => {
                                      (0, Q.BB)(nQ.id, nY.id, (0, ee.jq)(e), Q.qN.MESSAGE_CONTEXT_MENU);
                                  },
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              n,
                          ),
                      ),
                  })
                : null),
        td = (0, f.A)(n7),
        tu = (0, h.A)(n7),
        tg = (function (e, n) {
            let { reducedMotion: t } = a.useContext(W.C),
                i = (0, el.Id)(n),
                r = (0, S.bG)([en.A, et.A], () => ei(n) && i && !n.isMediaThread(), [n, i]),
                o = (0, Y.D6)(n.getGuildId());
            if (!ea.jW.getSetting() || !r) return null;
            let c = o
                .filter(
                    (e) =>
                        !eo.Ay.isEmojiFilteredOrLocked({ emoji: e, channel: n, intention: ec.EmojiIntention.REACTION }),
                )
                .slice(0, 12)
                .map((i, a) =>
                    (0, l.jsx)(
                        s.Dr,
                        {
                            color: "default",
                            id: i.id ?? i.optionallyDiverseSequence ?? i.name,
                            label: `:${i.name}:`,
                            icon: (e) => (0, l.jsx)(eu, { ...e, reducedMotionEnabled: t.enabled, emoji: i }),
                            leadingAccessory: {
                                type: "emoji",
                                emojiId: i.id,
                                src: null == i.id ? eo.Ay.getURL(i.optionallyDiverseSequence ?? "") : void 0,
                                animated: i.animated,
                            },
                            action: () => {
                                (0, Q.BB)(n.id, e.id, (0, ee.jq)(i), Q.qN.MESSAGE_CONTEXT_MENU);
                            },
                            dontCloseOnActionIfHoldingShiftKey: !0,
                        },
                        a,
                    ),
                );
            return (0, l.jsx)(s.Dr, {
                id: "add-reaction",
                label: j.intl.string(j.t.lfIHs4),
                leadingAccessory: { type: "icon", icon: Z.n },
                action: () => {
                    es._.dispatchKeyed(X.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                },
                color: "default",
                children: (0, l.jsxs)(l.Fragment, {
                    children: [
                        c,
                        (0, l.jsx)(s.bX, {}),
                        (0, l.jsx)(s.Dr, {
                            color: "default",
                            id: "other-reactions",
                            label: j.intl.string(j.t["OBCR+p"]),
                            icon: Z.n,
                            leadingAccessory: { type: "icon", icon: $.S },
                            action: () => {
                                es._.dispatchKeyed(X.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                            },
                        }),
                    ],
                }),
            });
        })(nY, nQ),
        tA =
            ((E = (0, S.bG)([I.default], () => I.default.getId())),
            (_ = (0, el.Id)(nQ)),
            (x = (0, el.s5)(nQ)),
            (0, eM.A)(nY, E) && _ && !x
                ? (0, l.jsx)(s.Dr, {
                      id: "edit",
                      label: j.intl.string(j.t.fsBWmS),
                      action: () => ej.A.startEditMessageRecord(nQ.id, nY),
                      leadingAccessory: { type: "icon", icon: eb.PencilIcon },
                      icon: eb.PencilIcon,
                  })
                : null),
        tm =
            ((J = (0, eV.u)(nQ, nY)),
            (V = (0, eJ.A)()),
            !J || V
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "reply",
                      label: j.intl.string(j.t["5IEsGx"]),
                      leadingAccessory: { type: "icon", icon: eq.W },
                      icon: eq.W,
                      action: (e) => {
                          (0, eA.$b)(nQ, nY, e);
                      },
                  })),
        tf = (0, eC.m)(nY)
            ? (0, l.jsx)(s.Dr, {
                  id: "forward",
                  label: j.intl.string(j.t.I3ltXO),
                  leadingAccessory: { type: "icon", icon: eG.A },
                  icon: eG.A,
                  action: () => {
                      (0, eA.Z4)(nQ, nY);
                  },
              })
            : null,
        tp = (0, el.n)(nQ, nY)
            ? (0, l.jsx)(s.Dr, {
                  id: "thread",
                  label: j.intl.string(j.t.rBIGBL),
                  leadingAccessory: { type: "icon", icon: nr.y },
                  icon: nr.y,
                  action: () => {
                      (0, eA.Nw)(nQ, nY);
                  },
              })
            : null,
        ty = (0, ef.A)(nY),
        th = (function (e) {
            let n,
                {
                    handleTranslate: i,
                    handleRevertTranslation: r,
                    isTranslating: o,
                    isTranslated: c,
                } = (function (e) {
                    let [n, t] = a.useState(!1),
                        i = (0, S.bG)([nu.default], () => nu.default.locale);
                    return {
                        handleTranslate: a.useCallback(
                            async (l, a) => {
                                if (n) return;
                                let r = l ?? i;
                                t(!0);
                                let s = a ?? (0, j.getAvailableLocales)().find((e) => e.value === r)?.name ?? r;
                                (nA.has(e.id) || nA.set(e.id, e.content),
                                    (0, G.P)(
                                        (0, T.o)(
                                            j.intl.formatToPlainString(j.t.Znl8Z8, { targetLanguage: s }),
                                            v.Ck.AI,
                                        ),
                                    ));
                                try {
                                    let n = await ns.Bo.post({
                                        url: X.Rsh.AI_TRANSLATE,
                                        body: { content: e.content, locale: r },
                                        rejectWithError: (0, ns.fT)(),
                                    });
                                    n.body &&
                                        (nc.h.dispatch({
                                            type: "MESSAGE_UPDATE",
                                            message: { id: e.id, channel_id: e.channel_id, content: n.body.content },
                                        }),
                                        (0, G.P)(
                                            (0, T.o)(
                                                j.intl.formatToPlainString(j.t.FtVUqm, { targetLanguage: s }),
                                                v.Ck.SUCCESS,
                                            ),
                                        ));
                                } finally {
                                    t(!1);
                                }
                            },
                            [e, n, i],
                        ),
                        handleRevertTranslation: a.useCallback(() => {
                            let n = nA.get(e.id);
                            null != n &&
                                (nc.h.dispatch({
                                    type: "MESSAGE_UPDATE",
                                    message: { id: e.id, channel_id: e.channel_id, content: n },
                                }),
                                nA.delete(e.id));
                        }, [e.id, e.channel_id]),
                        isTranslating: n,
                        isTranslated: nA.has(e.id),
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
                                    s.Dr,
                                    {
                                        id: `translate-${e.value}`,
                                        label: e.name,
                                        icon: () => (0, l.jsx)("img", { alt: "", src: n, className: ng.M }),
                                        leadingAccessory: { type: "image", src: n },
                                        action: () => i(e.value, e.name),
                                        disabled: o,
                                    },
                                    e.value,
                                );
                            }),
                        [i, o, n],
                    )),
                u = (0, nd.b)();
            return null != e.content && "" !== e.content.trim() && u
                ? c
                    ? (0, l.jsx)(s.Dr, {
                          id: "revert-translation",
                          label: j.intl.string(j.t.JC9BXn),
                          leadingAccessory: { type: "icon", icon: no.U },
                          icon: no.U,
                          action: r,
                          disabled: o,
                      })
                    : (0, l.jsx)(s.Dr, {
                          id: "translate",
                          label: o ? j.intl.string(j.t.SVKIdU) : j.intl.string(j.t["6epDlR"]),
                          action: () => i(),
                          leadingAccessory: { type: "icon", icon: no.U },
                          disabled: o,
                          children: d,
                      })
                : null;
        })(nY),
        tE = (0, eR.A)(nY, nQ),
        t_ = (0, eO.kn)(nY, nQ, "MessageContextMenu")
            ? (0, eT.Lt)(nY.flags, X.pr7.IS_GUILD_OFFICIAL)
                ? (0, l.jsx)(s.Dr, {
                      id: "guild-official-unset",
                      action: () => {
                          ej.A.patchMessageGuildOfficial(nQ.id, nY.id, !1);
                      },
                      label: j.intl.string(j.t["2km5Gf"]),
                      leadingAccessory: { type: "icon", icon: ev.$ },
                  })
                : (0, l.jsx)(s.Dr, {
                      id: "guild-official-set",
                      action: () => {
                          ej.A.patchMessageGuildOfficial(nQ.id, nY.id, !0);
                      },
                      label: j.intl.string(j.t["lE/PG3"]),
                      leadingAccessory: { type: "icon", icon: eL.L },
                  })
            : null,
        tS = (0, q.A)(nY, nQ),
        tI = (0, D.A)({
            commandType: d.kc.MESSAGE,
            commandTargetId: nY.id,
            channel: nQ,
            guildId: void 0,
            onHeightUpdate: te,
            showIcon: !0,
        }),
        tx =
            nY.state !== X.cmJ.SEND_FAILED
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "resend",
                      label: j.intl.string(j.t.lXHojr),
                      leadingAccessory: { type: "icon", icon: ne.RefreshIcon },
                      action: () => (0, nt.A)(nQ, nY, void 0, nn.A.getOptions(nY.id)),
                  }),
        tb = (0, eN.A)(nY, nQ),
        tj =
            null != (er = nQ.getGuildId()) &&
            nY.type === X.lAJ.USER_JOIN &&
            et.A.canWithPartialContext(X.xBc.MANAGE_GUILD, { guildId: er })
                ? (0, l.jsx)(s.Dr, {
                      id: "configure",
                      label: j.intl.string(j.t.NpHUi1),
                      leadingAccessory: { type: "icon", icon: eg.CircleQuestionIcon },
                      icon: eg.CircleQuestionIcon,
                      action: () => (0, eA.vc)(nQ),
                  })
                : null,
        tM = (0, em.A)(nY, nQ),
        tD =
            ((ed = (0, ny.WU)(nQ.getGuildId(), "message_context_menu")),
            (ew = (0, S.bG)([np.A], () => np.A.getConversationForMessage(nQ.id, nY.id) ?? null, [nQ.id, nY.id])),
            (nk = a.useCallback(() => {
                null != nQ.getGuildId() && null != ew && (nf.A.openConversationsSection(), (0, nh.xI)(nQ.id, ew));
            }, [nQ, ew])),
            ed && null != ew
                ? (0, l.jsx)(s.Dr, {
                      id: "view-conversation",
                      label: "View Conversation",
                      leadingAccessory: { type: "icon", icon: nm.ChatIcon },
                      icon: nm.ChatIcon,
                      action: nk,
                  })
                : null),
        tC =
            ((nP = (0, S.bG)([na.A], () => na.A.isSpeakingMessage(nQ.id, nY.id), [nQ, nY])),
            "" === nY.content
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "tts",
                      label: nP ? j.intl.string(j.t.CJ30BP) : j.intl.string(j.t.yGLjXF),
                      leadingAccessory: { type: "icon", icon: ni._ },
                      icon: ni._,
                      action: () => (nP ? (0, nl.pr)() : (0, nl.kP)(nQ, nY)),
                  })),
        tG =
            null == nY.reactions || 0 === nY.reactions.length || (nY.isPoll() && !(0, eB.Gh)(nY))
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "reactions",
                      label: j.intl.string(j.t.wikODq),
                      leadingAccessory: { type: "icon", icon: $.S },
                      icon: $.S,
                      action: () =>
                          (0, eF.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([t.e("569080"), t.e("998186")]).then(
                                  t.bind(t, 112753),
                              );
                              return (n) => (0, l.jsx)(e, { ...n, message: nY });
                          }),
                  }),
        tT =
            0 ===
            (nF = (function (e) {
                let n = (0, S.bG)([I.default], () => I.default.getId()),
                    { poll: t } = e;
                if (!e.isPoll() || null == t) return b;
                let i = [];
                return (t.expiry.isSameOrBefore(Date.now()) || e.author.id !== n || i.push(0), i);
            })(nY)).length
                ? null
                : (0, l.jsx)(l.Fragment, { children: nF.map((e) => M[e](nY)) }),
        tv = (function (e) {
            let { analyticsLocations: n } = (0, g.Ay)(),
                t = e.interactionMetadata?.authorizing_integration_owners[nE.b.USER_INSTALL],
                i = e.interactionMetadata?.authorizing_integration_owners[nE.b.GUILD_INSTALL],
                r = e.interactionMetadata?.user.id,
                o = (0, S.bG)([e5.default], () => e5.default.getUser(t)),
                c = (0, S.bG)([nG.A], () => nG.A.getGuild(i)),
                d = nC.A.getChannel(e.channel_id),
                u = d?.getGuildId(),
                A = (0, S.bG)([e5.default], () => e5.default.getUser(r));
            if (
                (a.useEffect(() => {
                    null == o && null != t && (0, nS.wz)(t);
                }, [o, t]),
                !(0, nx._)(e))
            )
                return null;
            null == A && (A = new nD.A(e.interactionMetadata?.user));
            let m = null;
            if (null != c) {
                let n = (0, nM.Iv)(c, 18, !0);
                m = (0, l.jsx)(s.Dr, {
                    disabled: !0,
                    iconLeft: () => (0, l.jsx)(nb.Ay, { guild: c, size: nb.Ay.Sizes.MINI }),
                    leadingAccessory: null != n ? { type: "image", src: n } : void 0,
                    id: "integration-owner",
                    label: c.name,
                    subtext: j.intl.formatToPlainString(j.t.ShLXXB, { application: e.author.username }),
                });
            } else
                null != o &&
                    (m = (0, l.jsx)(s.Dr, {
                        action: () =>
                            (0, nj.openUserProfileModal)({
                                userId: o.id,
                                guildId: u,
                                channelId: e.channel_id,
                                sourceAnalyticsLocations: n,
                            }),
                        leadingAccessory: { type: "avatar", src: o.getAvatarURL(u, 18) },
                        id: "integration-owner",
                        label: o.username,
                        iconLeft: () => (0, l.jsx)(nI.A, { user: o, size: n_._3.SIZE_20 }),
                        subtext: j.intl.formatToPlainString(j.t.ShLXXB, { application: e.author.username }),
                    }));
            return (0, l.jsxs)(s.Dr, {
                id: "view-interaction-info",
                label: j.intl.string(j.t.Rjezbz),
                leadingAccessory: { type: "icon", icon: ey.CircleInformationIcon },
                children: [
                    m,
                    null != A
                        ? (0, l.jsx)(s.Dr, {
                              action: () =>
                                  (0, nj.openUserProfileModal)({
                                      userId: A.id,
                                      guildId: u,
                                      channelId: e.channel_id,
                                      sourceAnalyticsLocations: n,
                                  }),
                              leadingAccessory: { type: "avatar", src: A.getAvatarURL(u, 18) },
                              iconLeft: () => (0, l.jsx)(nI.A, { user: A, size: n_._3.SIZE_20 }),
                              id: "interaction-user",
                              label: A.username,
                              subtext: j.intl.string(j.t["04gxNg"]),
                          })
                        : null,
                ],
            });
        })(nY),
        tL = (function (e, n) {
            let { reducedMotion: t } = a.useContext(W.C),
                i = (0, el.Id)(n),
                r = (0, S.bG)([et.A], () => et.A.can(X.xBc.MANAGE_MESSAGES, n) && i, [n, i]),
                o = e.reactions.reduce(
                    (e, n) =>
                        n.count_details?.vote != null ||
                        null != e.find((e) => (null != e.id && e.id === n.emoji.id) || e.name === n.emoji.name)
                            ? e
                            : [...e, n.emoji],
                    [],
                );
            return !r || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, eB.Gh)(e))
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "remove-emoji-reactions",
                      label: j.intl.string(j.t["zx/e4P"]),
                      leadingAccessory: { type: "icon", icon: ez.F },
                      color: "danger",
                      children: o.map((i) =>
                          (0, l.jsx)(
                              s.Dr,
                              {
                                  id: `remove-emoji-reactions-${i.name ?? i.id}`,
                                  label: (0, ee.b3)(i),
                                  action: (t) => {
                                      t.shiftKey
                                          ? (0, Q.Jf)(n.id, e.id, i)
                                          : eH.A.show({
                                                title: j.intl.string(j.t["73GqTz"]),
                                                body: j.intl.string(j.t.dmy5bn),
                                                confirmText: j.intl.string(j.t.p89ACt),
                                                confirmVariant: "critical-primary",
                                                cancelText: j.intl.string(j.t.gm1Vej),
                                                onConfirm: () => {
                                                    (0, Q.Jf)(n.id, e.id, i);
                                                },
                                            });
                                  },
                                  leadingAccessory: {
                                      type: "emoji",
                                      emojiId: i.id,
                                      src: null == i.id ? eo.Ay.getURL(i.name ?? "") : void 0,
                                      animated: i.animated,
                                  },
                                  icon: (e) => (0, l.jsx)(eK, { ...e, reducedMotionEnabled: t.enabled, emoji: i }),
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              i.name ?? i.id,
                          ),
                      ),
                  });
        })(nY, nQ),
        tO =
            ((nB = (0, el.Id)(nQ)),
            !(0, S.bG)([et.A], () => et.A.can(X.xBc.MANAGE_MESSAGES, nQ) && nB, [nQ, nB]) ||
            null == nY.reactions ||
            0 === nY.reactions.length ||
            (nY.isPoll() && !(0, eB.Gh)(nY))
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "remove-reactions",
                      label: j.intl.string(j.t.ZbtGBm),
                      leadingAccessory: { type: "icon", icon: eX.t },
                      action: function (e) {
                          e.shiftKey
                              ? (0, Q.Go)(nQ.id, nY.id)
                              : eH.A.show({
                                    title: j.intl.string(j.t.iz3vYX),
                                    body: j.intl.string(j.t.VpjOCo),
                                    confirmText: j.intl.string(j.t.p89ACt),
                                    confirmVariant: "critical-primary",
                                    cancelText: j.intl.string(j.t.gm1Vej),
                                    onConfirm: () => {
                                        (0, Q.Go)(nQ.id, nY.id);
                                    },
                                });
                      },
                      color: "danger",
                  })),
        tN = (0, ep.A)(nY, nQ),
        tR =
            ((nX = (0, S.bG)([e2.A], () => e2.A.getGuildId())),
            (nH = (0, e1.Qo)(nX)),
            (0, e6.ul)(nY)
                ? (0, l.jsx)(s.Dr, {
                      id: "report",
                      label: nH ? j.intl.string(j.t.n5EBAJ) : j.intl.string(j.t.GwbdGe),
                      action: () => (0, e7.V2)(nY, "web_message_context_menu"),
                      icon: nH ? eZ.p : e$.FlagIcon,
                      leadingAccessory: { type: "icon", icon: nH ? eZ.p : e$.FlagIcon },
                      color: "danger",
                  })
                : null),
        tw =
            ((nz = (0, S.bG)([eQ.Ay], () => eQ.Ay.get("iar_testing"))),
            (nK = (0, S.bG)([e5.default], () => e5.default.getCurrentUser())),
            (0, e6.ul)(nY) && null != nK && nK.isStaff() && nz
                ? (0, l.jsx)(s.Dr, {
                      id: "staff-test-message-report",
                      label: "[STAFF] Test Message Report",
                      action: () => (0, e7.Rj)(nY, "web_message_context_menu"),
                      icon: e$.FlagIcon,
                      leadingAccessory: { type: "icon", icon: e$.FlagIcon },
                      color: "danger",
                  })
                : null),
        tU = (function (e) {
            let n = (0, S.bG)([e8.A], () => e8.A.hasReportedMessage(e.channel_id, e.id)),
                t = (0, e4.KB)(e),
                i = t ? [eW.M.REPORT_TO_MOD_NEW_TAG] : [],
                [a, r] = (0, e0.kn)(i);
            return ((0, eY.l0)(() => {
                t && r(e9.i.AUTO_DISMISS);
            }),
            t)
                ? (0, l.jsx)(s.Dr, {
                      id: "report-to-mod",
                      label: n ? j.intl.string(e3.default["8wsdng"]) : j.intl.string(e3.default["1D+vqy"]),
                      action: () => {
                          (r(e9.i.USER_DISMISS), (0, e7.dy)(e));
                      },
                      icon: e$.FlagIcon,
                      disabled: n,
                      leadingAccessory: { type: "icon", icon: e$.FlagIcon },
                      badge: a === eW.M.REPORT_TO_MOD_NEW_TAG ? "new" : void 0,
                      color: "danger",
                  })
                : null;
        })(nY),
        tk = (0, eD.A)({ type: n8, id: n4, name: n1 }),
        tP = (function (e, n) {
            let { perGuildMaxCount: t } = w.i$[K],
                { isLoading: i, saveRule: r, errorMessage: o } = (0, U.S)(),
                { createNewEditingRule: d } = (0, U.U)(),
                [u, g] = a.useState(!1),
                [A, m] = (0, R.H6)(n),
                { rulesByTriggerType: f, updateRule: p } = (0, R.wP)(n),
                y = a.useMemo(() => f[K] ?? [], [f]),
                h = 0 === y.length,
                E = t > y.length && !h;
            if (!a.useMemo(() => (0, k.i_)(n), [n]) || null == e || 0 === e.length || null == n) return null;
            let _ = e.split(" "),
                S = _.length;
            try {
                (0, N.wk)(_, H.bV);
            } catch (e) {
                return null;
            }
            function I() {
                null == e ||
                    (null != n &&
                        ((0, c.Z_)(),
                        B.default.open(n, X.BEX.GUILD_AUTOMOD),
                        setTimeout(() => {
                            d(n, K, { triggerMetadata: { keywordFilter: [e], regexPatterns: [], allowList: [] } });
                        }, 400)));
            }
            async function x(n) {
                if (null == e || ((0, c.Z_)(), !(await (0, F.Zy)(n.name, e)))) return;
                let t = {
                    ...n,
                    triggerMetadata: {
                        ...n.triggerMetadata,
                        keywordFilter: [...(n.triggerMetadata?.keywordFilter ?? []), e],
                    },
                };
                (await r(t, y),
                    p(t),
                    null != o
                        ? (0, G.P)((0, T.o)(j.intl.string(j.t.wH6L0r), v.Ck.FAILURE))
                        : (0, G.P)((0, T.o)(j.intl.string(j.t["0rdYm2"]), v.Ck.SUCCESS)));
            }
            let b = (0, l.jsx)(s.Dr, { id: "automod-rules-loading", label: j.intl.string(j.t.ZTNur7) });
            return (
                A ||
                    (b = (0, l.jsxs)(l.Fragment, {
                        children: [
                            h &&
                                (0, l.jsx)(s.Dr, {
                                    id: "add-first-rule",
                                    label: j.intl.string(j.t.f72Zqb),
                                    action: I,
                                    disabled: i,
                                }),
                            y.map((e) => {
                                let n = (0, w.J6)(K).reduce((n, t) => {
                                    let i = e.actions.find((e) => {
                                        let { type: n } = e;
                                        return t === n;
                                    });
                                    if (null == i) return n;
                                    let l = (0, P.x)(t, i);
                                    return n + `, ${l?.headerText}`;
                                }, "");
                                return (0, l.jsx)(
                                    s.iD,
                                    {
                                        id: e.id,
                                        label: e.name,
                                        subtext: (0, l.jsx)(L.E, {
                                            color: "text-muted",
                                            className: z.XX,
                                            variant: "text-xs/normal",
                                            children: n.slice(2),
                                        }),
                                        group: "automod-rule-selection",
                                        checked: !1,
                                        disabled: i,
                                        action: () => x(e),
                                    },
                                    e.id,
                                );
                            }),
                            E &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(s.bX, {}),
                                        (0, l.jsx)(s.Dr, {
                                            id: "add-another-rule",
                                            label: j.intl.string(j.t["0K5jDE"]),
                                            action: I,
                                            disabled: i,
                                        }),
                                    ],
                                }),
                        ],
                    })),
                (0, l.jsx)(s.Dr, {
                    id: "guild-automod-add-selection",
                    label: j.intl.formatToPlainString(j.t.Kkjv1m, { keywordCount: S }),
                    leadingAccessory: { type: "icon", icon: O.ShieldIcon },
                    onFocus: function () {
                        u || (g(!0), m());
                    },
                    children: b,
                })
            );
        })(n7, nQ.getGuildId()),
        tF = (0, p.A)(n6, nY, {
            shouldHideMediaOptions: ta,
            contentType: n0?.contentType,
            originalContentType: n0?.originalContentType,
        }),
        tB =
            ((nq = (0, nL.Fg)(nY)),
            (nJ = null != n0 && (0, nL.qo)({ type: nv.D.GenericMedia, media: n0 }, nq)),
            null != n0 && nJ
                ? (0, l.jsx)(
                      s.Dr,
                      {
                          id: "report-image-false-positive",
                          label: j.intl.string(j.t.ZH7P2h),
                          action: function () {
                              null != n0 &&
                                  (0, eF.openModalLazy)(async () => {
                                      let { default: e } = await t(679276);
                                      return (n) =>
                                          (0, l.jsx)(e, {
                                              channelId: nY.channel_id,
                                              messageId: nY.id,
                                              mediaItemUrl: n0.url,
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
        tX =
            ((nV = nY.getContentMessage()),
            (0, eT.Lt)(nV.flags, X.pr7.IS_VOICE_MESSAGE) && 0 !== nV.attachments.length
                ? (0, l.jsx)(s.Dr, {
                      id: "save-voice-message-audio",
                      label: j.intl.string(j.t.vbAEaA),
                      leadingAccessory: { type: "icon", icon: nO.DownloadIcon },
                      icon: nO.DownloadIcon,
                      action: () => {
                          let e = (0, nN.XW)(nV.attachments[0].url);
                          (0, nR.h)({ href: e });
                      },
                  })
                : null),
        tH =
            ((n = { shouldHideMediaOptions: ta }),
            (nW = n0?.url ?? ""),
            (nZ = (0, S.bG)([nw.Ay], () => nw.Ay.isVideoStatsEnabled(nW))),
            (n$ = a.useCallback(() => {
                "" !== nW && (0, nw.FM)(nW);
            }, [nW])),
            null != n0 && (0, nU.XB)(n0.contentType) && n?.shouldHideMediaOptions !== !0
                ? (0, l.jsx)(s.sL, {
                      id: "video-stats-for-nerds",
                      label: "Stats for Nerds",
                      leadingAccessory: { type: "icon", icon: ey.CircleInformationIcon },
                      checked: nZ,
                      action: n$,
                  })
                : null),
        tz = (0, y.A)(n2 ?? n5, n9, nY, { shouldHideMediaOptions: ta }),
        tK = (0, A.A)({ id: nY.id, label: j.intl.string(j.t.zBoHlf), shiftId: `${nY.channel_id}-${nY.id}` }),
        tq = (function (e) {
            let { messageId: n, itemId: t, type: i, imageSrc: r } = e,
                o = ea.Q_.useSetting(),
                { tidaWebformEnabled: c } = m.A.useExperiment(
                    { location: "useMessageDetailsItem" },
                    { autoTrackExposure: !1 },
                ),
                d = a.useCallback(() => {
                    (0, ex.C)(n);
                }, [n]),
                u = a.useCallback(() => {
                    null != t && (0, ex.C)(t);
                }, [t]),
                g = a.useCallback(() => {
                    null != r && (0, ex.C)(r);
                }, [r]),
                A = a.useCallback(() => {
                    null != r && (0, eI.A)(r);
                }, [r]),
                f = "sticker" === i;
            if (!o || !ex.p5 || !c || ("emoji" !== i && !f) || null == t) return null;
            let p = f ? j.intl.string(j.t.SJ3249) : j.intl.string(j.t.Ap2oVy),
                y = f ? j.intl.string(j.t.B1ubHx) : j.intl.string(j.t.cIoudn),
                h = f ? j.intl.string(j.t["qAEi+C"]) : j.intl.string(j.t.gDAM2n);
            return (0, l.jsxs)(s.Dr, {
                id: "message-details",
                label: j.intl.string(j.t.IqqJNI),
                leadingAccessory: { type: "icon", icon: ey.CircleInformationIcon },
                children: [
                    (0, l.jsx)(s.Dr, {
                        id: "copy-message-id",
                        label: j.intl.string(j.t.zBoHlf),
                        action: d,
                        leadingAccessory: { type: "icon", icon: eh.L },
                    }),
                    (0, l.jsx)(s.Dr, {
                        id: "copy-item-id",
                        label: p,
                        action: u,
                        leadingAccessory: { type: "icon", icon: eh.L },
                    }),
                    null != r &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(s.Dr, {
                                    id: "copy-image-link",
                                    label: y,
                                    action: g,
                                    leadingAccessory: { type: "icon", icon: eE.LinkIcon },
                                }),
                                (0, l.jsx)(s.Dr, {
                                    id: "open-image-link",
                                    label: h,
                                    action: A,
                                    leadingAccessory: { type: "icon", icon: e_.W },
                                    trailingIndicator: { type: "icon", icon: eS.I },
                                }),
                            ],
                        }),
                ],
            });
        })({ messageId: nY.id, itemId: n4, type: n8, imageSrc: n5 }),
        tJ = (0, l.jsx)(s.rX, { children: tq ?? tK }),
        tV = (0, l.jsxs)(s.rX, { children: [tk, tP, tF, tB, tX, tH] });
    return (0, l.jsxs)(o.W, {
        "data-menu-migrated": !0,
        navId: ti,
        onClose: tt,
        "aria-label": tl,
        onSelect: ts,
        children: [
            (0, l.jsx)(s.rX, { children: td }),
            (0, l.jsx)(s.rX, { children: tu }),
            (0, l.jsxs)(s.rX, { children: ["" === n7 ? tc : null, tg, tG] }),
            (0, l.jsxs)(s.rX, { children: [tA, tm, tf, tp] }),
            (0, l.jsxs)(s.rX, { children: [ty, th, tE, t_, tS, tI, tx, tb, tj, tM, tD, tC, tT, tv] }),
            (0, l.jsxs)(s.rX, { children: [tL, tO, tN, n3 && tR, n3 && tw, tU] }),
            to
                ? (0, l.jsxs)(l.Fragment, { children: [tJ, tV, null == tq && (0, l.jsx)(s.rX, { children: tz })] })
                : (0, l.jsxs)(l.Fragment, { children: [tV, (0, l.jsx)(s.rX, { children: tz }), tJ] }),
        ],
    });
}
