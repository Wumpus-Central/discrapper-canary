t.d(n, { c: () => nB, default: () => nF });
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
var j = t(660183);
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
    ef = t(624479),
    ep = t(437517),
    ey = t(383233),
    eh = t(957565),
    eE = t(483768),
    e_ = t(885574),
    eS = t(473935),
    eI = t(173936),
    ex = t(93688),
    eb = t(509434),
    ej = t(975807),
    eM = t(22231),
    eD = t(148494),
    eC = t(697470),
    eG = t(253925),
    eT = t(843626),
    ev = t(427209);
t(938796);
var eL = t(665260),
    eO = t(563119),
    eN = t(581925),
    eR = t(521427),
    ew = t(20883),
    eU = t(979766),
    ek = t(866665),
    eP = t(816426);
let eF = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];
function eB(e) {
    let { emoji: n, isFocused: t } = e,
        { animated: i, src: a, surrogates: r } = n;
    return (
        null == a && null != n.id
            ? (a = er.Ay.getEmojiURL({ id: n.id, animated: !!i, size: 20 }))
            : null == a && (a = eo.Ay.getURL(r)),
        (0, l.jsx)(ek.m, {
            text: (0, eo.N)(n),
            hideOnClick: !0,
            spacing: 16,
            forceOpen: t,
            children: (0, l.jsx)("div", {
                "aria-label": j.intl.formatToPlainString(j.t["/iYSo6"], { emojiName: n.name }),
                className: V()(eP.x6, { [eP.in]: t }),
                children:
                    null == a || "" === a.trim()
                        ? (0, l.jsx)("span", { className: V()("emoji", "emoji-text", eP.Kk), children: r })
                        : (0, l.jsx)("img", { className: eP.Kk, src: a, alt: "" }),
            }),
        })
    );
}
var eX = t(192308),
    eH = t(969632),
    ez = t(997571),
    eK = t(157559),
    eq = t(769297);
function eJ(e) {
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
var eV = t(110384),
    eW = t(973196),
    eZ = t(517997),
    e$ = t(554146),
    eY = t(111159),
    eQ = t(138134),
    e0 = t(964486),
    e8 = t(865116),
    e1 = t(131607),
    e7 = t(928658),
    e4 = t(400528),
    e2 = t(892340),
    e6 = t(715757),
    e5 = t(967198),
    e9 = t(287809),
    e3 = t(628691),
    ne = t(49999),
    nn = t(39470),
    nt = t(663417),
    ni = t(965407),
    nl = t(249700),
    na = t(556112),
    nr = t(54570),
    ns = t(8880),
    no = t(163328),
    nc = t(636537),
    nd = t(37646),
    nu = t(73153),
    ng = t(147087),
    nA = t(773669),
    nm = t(132183);
let nf = new Map();
var np = t(534890),
    ny = t(604681),
    nh = t(181041),
    nE = t(828488),
    n_ = t(623562),
    nS = t(485845),
    nI = t(778712),
    nx = t(803306),
    nb = t(966327),
    nj = t(597929),
    nM = t(548118),
    nD = t(402860),
    nC = t(260509),
    nG = t(889227),
    nT = t(734057),
    nv = t(71393),
    nL = t(87221),
    nO = t(930125),
    nN = t(282108),
    nR = t(32880),
    nw = t(803316),
    nU = t(123917),
    nk = t(953584),
    nP = t(59318);
function nF(e) {
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
        children: nB({
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
function nB(e) {
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
        ek,
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
        nY,
        nQ,
        {
            message: n0,
            channel: n8,
            mediaItem: n1,
            textSelection: n7,
            favoriteableType: n4,
            favoriteableId: n2,
            favoriteableName: n6,
            itemHref: n5,
            itemSrc: n9,
            itemSafeSrc: n3,
            itemTextContent: te,
            canReport: tn,
            onHeightUpdate: tt,
            onSelect: ti,
            onClose: tl,
            navId: ta,
            ariaLabel: tr,
            shouldHideMediaOptions: ts = !1,
        } = e,
        to = a.useRef(null);
    (a.useEffect(() => {
        to.current = Date.now();
    }, []),
        a.useEffect(
            () => () => {
                if (null != to.current) {
                    let e = Date.now() - to.current;
                    C.default.track(X.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: e,
                        channel_id: n8.id,
                        guild_id: n8.getGuildId() ?? void 0,
                        message_id: n0.id,
                    });
                }
            },
            [n8, n0],
        ));
    let tc = a.useCallback(() => {
            if (null != to.current) {
                let e = Date.now() - to.current;
                C.default.track(X.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: e,
                    channel_id: n8.id,
                    guild_id: n8.getGuildId() ?? void 0,
                    message_id: n0.id,
                });
            }
            ti?.();
        }, [ti, n8, n0]),
        { tidaWebformEnabled: td } = m.A.useExperiment({ location: "MessageContextMenu" }, { autoTrackExposure: !1 }),
        tu =
            ((i = (0, Y.D6)(n8.guild_id).filter(
                (e) =>
                    !(e.useSpriteSheet && eF.indexOf(e.uniqueName ?? "") >= 0) &&
                    !eo.Ay.isEmojiPremiumLocked({ emoji: e, channel: n8, intention: ec.EmojiIntention.REACTION }),
            )).length > 4 && (i.length = 4),
            (r = ea.jW.useSetting()),
            (u = (0, el.Id)(n8)),
            (0, S.bG)([en.A, et.A], () => r && u && ei(n8), [n8, u, r]) &&
            i.length > 0 &&
            n0.type !== X.lAJ.MEDIA_MENTION_MESSAGE
                ? (0, l.jsx)(s.rX, {
                      className: eP.iE,
                      children: i.map((e, n) =>
                          (0, l.jsx)(
                              s.Dr,
                              {
                                  id: `quickreact-${e.id ?? n}`,
                                  render: (n) => {
                                      let { isFocused: t } = n;
                                      return (0, l.jsx)(eB, { emoji: e, isFocused: t });
                                  },
                                  action: () => {
                                      (0, Q.BB)(n8.id, n0.id, (0, ee.jq)(e), Q.qN.MESSAGE_CONTEXT_MENU);
                                  },
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              n,
                          ),
                      ),
                  })
                : null),
        tg = (0, f.A)(n7),
        tA = (0, h.A)(n7),
        tm = (function (e, n) {
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
        })(n0, n8),
        tf =
            ((E = (0, S.bG)([I.default], () => I.default.getId())),
            (_ = (0, el.Id)(n8)),
            (x = (0, el.s5)(n8)),
            (0, eC.A)(n0, E) && _ && !x
                ? (0, l.jsx)(s.Dr, {
                      id: "edit",
                      label: j.intl.string(j.t.fsBWmS),
                      action: () => eD.A.startEditMessageRecord(n8.id, n0),
                      leadingAccessory: { type: "icon", icon: eM.PencilIcon },
                      icon: eM.PencilIcon,
                  })
                : null),
        tp =
            ((J = (0, eZ.u)(n8, n0)),
            (V = (0, eW.A)()),
            !J || V
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "reply",
                      label: j.intl.string(j.t["5IEsGx"]),
                      leadingAccessory: { type: "icon", icon: eV.W },
                      icon: eV.W,
                      action: (e) => {
                          (0, eA.$b)(n8, n0, e);
                      },
                  })),
        ty = (0, eT.m)(n0)
            ? (0, l.jsx)(s.Dr, {
                  id: "forward",
                  label: j.intl.string(j.t.I3ltXO),
                  leadingAccessory: { type: "icon", icon: ev.A },
                  icon: ev.A,
                  action: () => {
                      (0, eA.Z4)(n8, n0);
                  },
              })
            : null,
        th = (0, el.n)(n8, n0)
            ? (0, l.jsx)(s.Dr, {
                  id: "thread",
                  label: j.intl.string(j.t.rBIGBL),
                  leadingAccessory: { type: "icon", icon: no.y },
                  icon: no.y,
                  action: () => {
                      (0, eA.Nw)(n8, n0);
                  },
              })
            : null,
        tE = (function (e) {
            if (!eh.p5) return null;
            let n = e.getContentMessage(),
                t = (0, ey._c)(n) ? (0, ep.kC)(n.components) : n.content;
            return null == t || 0 === t.length
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "copy-text",
                      label: j.intl.string(j.t.JrGD7E),
                      leadingAccessory: { type: "icon", icon: ef.CopyIcon },
                      icon: ef.CopyIcon,
                      action: () => {
                          (0, eh.C)(t);
                      },
                  });
        })(n0),
        t_ = (function (e) {
            let n,
                {
                    handleTranslate: i,
                    handleRevertTranslation: r,
                    isTranslating: o,
                    isTranslated: c,
                } = (function (e) {
                    let [n, t] = a.useState(!1),
                        i = (0, S.bG)([nA.default], () => nA.default.locale);
                    return {
                        handleTranslate: a.useCallback(
                            async (l, a) => {
                                if (n) return;
                                let r = l ?? i;
                                t(!0);
                                let s = a ?? (0, j.getAvailableLocales)().find((e) => e.value === r)?.name ?? r;
                                (nf.has(e.id) || nf.set(e.id, e.content),
                                    (0, G.P)(
                                        (0, T.o)(
                                            j.intl.formatToPlainString(j.t.Znl8Z8, { targetLanguage: s }),
                                            v.Ck.AI,
                                        ),
                                    ));
                                try {
                                    let n = await nc.Bo.post({
                                        url: X.Rsh.AI_TRANSLATE,
                                        body: { content: e.content, locale: r },
                                        rejectWithError: (0, nc.fT)(),
                                    });
                                    n.body &&
                                        (nu.h.dispatch({
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
                            let n = nf.get(e.id);
                            null != n &&
                                (nu.h.dispatch({
                                    type: "MESSAGE_UPDATE",
                                    message: { id: e.id, channel_id: e.channel_id, content: n },
                                }),
                                nf.delete(e.id));
                        }, [e.id, e.channel_id]),
                        isTranslating: n,
                        isTranslated: nf.has(e.id),
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
                                        icon: () => (0, l.jsx)("img", { alt: "", src: n, className: nm.M }),
                                        leadingAccessory: { type: "image", src: n },
                                        action: () => i(e.value, e.name),
                                        disabled: o,
                                    },
                                    e.value,
                                );
                            }),
                        [i, o, n],
                    )),
                u = (0, ng.b)();
            return null != e.content && "" !== e.content.trim() && u
                ? c
                    ? (0, l.jsx)(s.Dr, {
                          id: "revert-translation",
                          label: j.intl.string(j.t.JC9BXn),
                          leadingAccessory: { type: "icon", icon: nd.U },
                          icon: nd.U,
                          action: r,
                          disabled: o,
                      })
                    : (0, l.jsx)(s.Dr, {
                          id: "translate",
                          label: o ? j.intl.string(j.t.SVKIdU) : j.intl.string(j.t["6epDlR"]),
                          action: () => i(),
                          leadingAccessory: { type: "icon", icon: nd.U },
                          disabled: o,
                          children: d,
                      })
                : null;
        })(n0),
        tS = (0, eU.A)(n0, n8),
        tI = (0, eR.kn)(n0, n8, "MessageContextMenu")
            ? (0, eL.Lt)(n0.flags, X.pr7.IS_GUILD_OFFICIAL)
                ? (0, l.jsx)(s.Dr, {
                      id: "guild-official-unset",
                      action: () => {
                          eD.A.patchMessageGuildOfficial(n8.id, n0.id, !1);
                      },
                      label: j.intl.string(j.t["2km5Gf"]),
                      leadingAccessory: { type: "icon", icon: eO.$ },
                  })
                : (0, l.jsx)(s.Dr, {
                      id: "guild-official-set",
                      action: () => {
                          eD.A.patchMessageGuildOfficial(n8.id, n0.id, !0);
                      },
                      label: j.intl.string(j.t["lE/PG3"]),
                      leadingAccessory: { type: "icon", icon: eN.L },
                  })
            : null,
        tx = (0, q.A)(n0, n8),
        tb = (0, D.A)({
            commandType: d.kc.MESSAGE,
            commandTargetId: n0.id,
            channel: n8,
            guildId: void 0,
            onHeightUpdate: tt,
            showIcon: !0,
        }),
        tj =
            n0.state !== X.cmJ.SEND_FAILED
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "resend",
                      label: j.intl.string(j.t.lXHojr),
                      leadingAccessory: { type: "icon", icon: nt.RefreshIcon },
                      action: () => (0, nl.A)(n8, n0, void 0, ni.A.getOptions(n0.id)),
                  }),
        tM = (0, ew.A)(n0, n8),
        tD =
            null != (er = n8.getGuildId()) &&
            n0.type === X.lAJ.USER_JOIN &&
            et.A.canWithPartialContext(X.xBc.MANAGE_GUILD, { guildId: er })
                ? (0, l.jsx)(s.Dr, {
                      id: "configure",
                      label: j.intl.string(j.t.NpHUi1),
                      leadingAccessory: { type: "icon", icon: eg.CircleQuestionIcon },
                      icon: eg.CircleQuestionIcon,
                      action: () => (0, eA.vc)(n8),
                  })
                : null,
        tC = (0, em.A)(n0, n8),
        tG =
            ((ed = (0, nE.WU)(n8.getGuildId(), "message_context_menu")),
            (ek = (0, S.bG)([nh.A], () => nh.A.getConversationForMessage(n8.id, n0.id) ?? null, [n8.id, n0.id])),
            (nF = a.useCallback(() => {
                null != n8.getGuildId() && null != ek && (ny.A.openConversationsSection(), (0, n_.xI)(n8.id, ek));
            }, [n8, ek])),
            ed && null != ek
                ? (0, l.jsx)(s.Dr, {
                      id: "view-conversation",
                      label: "View Conversation",
                      leadingAccessory: { type: "icon", icon: np.ChatIcon },
                      icon: np.ChatIcon,
                      action: nF,
                  })
                : null),
        tT =
            ((nB = (0, S.bG)([ns.A], () => ns.A.isSpeakingMessage(n8.id, n0.id), [n8, n0])),
            "" === n0.content
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "tts",
                      label: nB ? j.intl.string(j.t.CJ30BP) : j.intl.string(j.t.yGLjXF),
                      leadingAccessory: { type: "icon", icon: na._ },
                      icon: na._,
                      action: () => (nB ? (0, nr.pr)() : (0, nr.kP)(n8, n0)),
                  })),
        tv =
            null == n0.reactions || 0 === n0.reactions.length || (n0.isPoll() && !(0, eH.Gh)(n0))
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "reactions",
                      label: j.intl.string(j.t.wikODq),
                      leadingAccessory: { type: "icon", icon: $.S },
                      icon: $.S,
                      action: () =>
                          (0, eX.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([t.e("569080"), t.e("998186")]).then(
                                  t.bind(t, 112753),
                              );
                              return (n) => (0, l.jsx)(e, { ...n, message: n0 });
                          }),
                  }),
        tL =
            0 ===
            (nX = (function (e) {
                let n = (0, S.bG)([I.default], () => I.default.getId()),
                    { poll: t } = e;
                if (!e.isPoll() || null == t) return b;
                let i = [];
                return (t.expiry.isSameOrBefore(Date.now()) || e.author.id !== n || i.push(0), i);
            })(n0)).length
                ? null
                : (0, l.jsx)(l.Fragment, { children: nX.map((e) => M[e](n0)) }),
        tO = (function (e) {
            let { analyticsLocations: n } = (0, g.Ay)(),
                t = e.interactionMetadata?.authorizing_integration_owners[nS.b.USER_INSTALL],
                i = e.interactionMetadata?.authorizing_integration_owners[nS.b.GUILD_INSTALL],
                r = e.interactionMetadata?.user.id,
                o = (0, S.bG)([e9.default], () => e9.default.getUser(t)),
                c = (0, S.bG)([nv.A], () => nv.A.getGuild(i)),
                d = nT.A.getChannel(e.channel_id),
                u = d?.getGuildId(),
                A = (0, S.bG)([e9.default], () => e9.default.getUser(r));
            if (
                (a.useEffect(() => {
                    null == o && null != t && (0, nx.wz)(t);
                }, [o, t]),
                !(0, nj._)(e))
            )
                return null;
            null == A && (A = new nG.A(e.interactionMetadata?.user));
            let m = null;
            if (null != c) {
                let n = (0, nC.Iv)(c, 18, !0);
                m = (0, l.jsx)(s.Dr, {
                    disabled: !0,
                    iconLeft: () => (0, l.jsx)(nM.Ay, { guild: c, size: nM.Ay.Sizes.MINI }),
                    leadingAccessory: null != n ? { type: "image", src: n } : void 0,
                    id: "integration-owner",
                    label: c.name,
                    subtext: j.intl.formatToPlainString(j.t.ShLXXB, { application: e.author.username }),
                });
            } else
                null != o &&
                    (m = (0, l.jsx)(s.Dr, {
                        action: () =>
                            (0, nD.openUserProfileModal)({
                                userId: o.id,
                                guildId: u,
                                channelId: e.channel_id,
                                sourceAnalyticsLocations: n,
                            }),
                        leadingAccessory: { type: "avatar", src: o.getAvatarURL(u, 18) },
                        id: "integration-owner",
                        label: o.username,
                        iconLeft: () => (0, l.jsx)(nb.A, { user: o, size: nI._3.SIZE_20 }),
                        subtext: j.intl.formatToPlainString(j.t.ShLXXB, { application: e.author.username }),
                    }));
            return (0, l.jsxs)(s.Dr, {
                id: "view-interaction-info",
                label: j.intl.string(j.t.Rjezbz),
                leadingAccessory: { type: "icon", icon: e_.CircleInformationIcon },
                children: [
                    m,
                    null != A
                        ? (0, l.jsx)(s.Dr, {
                              action: () =>
                                  (0, nD.openUserProfileModal)({
                                      userId: A.id,
                                      guildId: u,
                                      channelId: e.channel_id,
                                      sourceAnalyticsLocations: n,
                                  }),
                              leadingAccessory: { type: "avatar", src: A.getAvatarURL(u, 18) },
                              iconLeft: () => (0, l.jsx)(nb.A, { user: A, size: nI._3.SIZE_20 }),
                              id: "interaction-user",
                              label: A.username,
                              subtext: j.intl.string(j.t["04gxNg"]),
                          })
                        : null,
                ],
            });
        })(n0),
        tN = (function (e, n) {
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
            return !r || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, eH.Gh)(e))
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "remove-emoji-reactions",
                      label: j.intl.string(j.t["zx/e4P"]),
                      leadingAccessory: { type: "icon", icon: eq.F },
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
                                          : eK.A.show({
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
                                  icon: (e) => (0, l.jsx)(eJ, { ...e, reducedMotionEnabled: t.enabled, emoji: i }),
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              i.name ?? i.id,
                          ),
                      ),
                  });
        })(n0, n8),
        tR =
            ((nH = (0, el.Id)(n8)),
            !(0, S.bG)([et.A], () => et.A.can(X.xBc.MANAGE_MESSAGES, n8) && nH, [n8, nH]) ||
            null == n0.reactions ||
            0 === n0.reactions.length ||
            (n0.isPoll() && !(0, eH.Gh)(n0))
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "remove-reactions",
                      label: j.intl.string(j.t.ZbtGBm),
                      leadingAccessory: { type: "icon", icon: ez.t },
                      action: function (e) {
                          e.shiftKey
                              ? (0, Q.Go)(n8.id, n0.id)
                              : eK.A.show({
                                    title: j.intl.string(j.t.iz3vYX),
                                    body: j.intl.string(j.t.VpjOCo),
                                    confirmText: j.intl.string(j.t.p89ACt),
                                    confirmVariant: "critical-primary",
                                    cancelText: j.intl.string(j.t.gm1Vej),
                                    onConfirm: () => {
                                        (0, Q.Go)(n8.id, n0.id);
                                    },
                                });
                      },
                      color: "danger",
                  })),
        tw = (0, eE.A)(n0, n8),
        tU =
            ((nz = (0, S.bG)([e5.A], () => e5.A.getGuildId())),
            (nK = (0, e6.Qo)(nz)),
            (0, e3.ul)(n0)
                ? (0, l.jsx)(s.Dr, {
                      id: "report",
                      label: nK ? j.intl.string(j.t.n5EBAJ) : j.intl.string(j.t.GwbdGe),
                      action: () => (0, e7.V2)(n0, "web_message_context_menu"),
                      icon: nK ? eY.p : eQ.FlagIcon,
                      leadingAccessory: { type: "icon", icon: nK ? eY.p : eQ.FlagIcon },
                      color: "danger",
                  })
                : null),
        tk =
            ((nq = (0, S.bG)([e8.Ay], () => e8.Ay.get("iar_testing"))),
            (nJ = (0, S.bG)([e9.default], () => e9.default.getCurrentUser())),
            (0, e3.ul)(n0) && null != nJ && nJ.isStaff() && nq
                ? (0, l.jsx)(s.Dr, {
                      id: "staff-test-message-report",
                      label: "[STAFF] Test Message Report",
                      action: () => (0, e7.Rj)(n0, "web_message_context_menu"),
                      icon: eQ.FlagIcon,
                      leadingAccessory: { type: "icon", icon: eQ.FlagIcon },
                      color: "danger",
                  })
                : null),
        tP = (function (e) {
            let n = (0, S.bG)([e4.A], () => e4.A.hasReportedMessage(e.channel_id, e.id)),
                t = (0, e2.KB)(e),
                i = t ? [e$.M.REPORT_TO_MOD_NEW_TAG] : [],
                [a, r] = (0, e1.kn)(i);
            return ((0, e0.l0)(() => {
                t && r(ne.i.AUTO_DISMISS);
            }),
            t)
                ? (0, l.jsx)(s.Dr, {
                      id: "report-to-mod",
                      label: n ? j.intl.string(nn.default["8wsdng"]) : j.intl.string(nn.default["1D+vqy"]),
                      action: () => {
                          (r(ne.i.USER_DISMISS), (0, e7.dy)(e));
                      },
                      icon: eQ.FlagIcon,
                      disabled: n,
                      leadingAccessory: { type: "icon", icon: eQ.FlagIcon },
                      badge: a === e$.M.REPORT_TO_MOD_NEW_TAG ? "new" : void 0,
                      color: "danger",
                  })
                : null;
        })(n0),
        tF = (0, eG.A)({ type: n4, id: n2, name: n6 }),
        tB = (function (e, n) {
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
        })(n7, n8.getGuildId()),
        tX = (0, p.A)(n3, n0, {
            shouldHideMediaOptions: ts,
            contentType: n1?.contentType,
            originalContentType: n1?.originalContentType,
        }),
        tH =
            ((nV = (0, nN.Fg)(n0)),
            (nW = null != n1 && (0, nN.qo)({ type: nO.D.GenericMedia, media: n1 }, nV)),
            null != n1 && nW
                ? (0, l.jsx)(
                      s.Dr,
                      {
                          id: "report-image-false-positive",
                          label: j.intl.string(j.t.ZH7P2h),
                          action: function () {
                              null != n1 &&
                                  (0, eX.openModalLazy)(async () => {
                                      let { default: e } = await t(679276);
                                      return (n) =>
                                          (0, l.jsx)(e, {
                                              channelId: n0.channel_id,
                                              messageId: n0.id,
                                              mediaItemUrl: n1.url,
                                              ...n,
                                          });
                                  });
                          },
                          leadingAccessory: { type: "icon", icon: nL.D },
                          icon: nL.D,
                      },
                      "report-image-false-positive",
                  )
                : null),
        tz =
            ((nZ = n0.getContentMessage()),
            (0, eL.Lt)(nZ.flags, X.pr7.IS_VOICE_MESSAGE) && 0 !== nZ.attachments.length
                ? (0, l.jsx)(s.Dr, {
                      id: "save-voice-message-audio",
                      label: j.intl.string(j.t.vbAEaA),
                      leadingAccessory: { type: "icon", icon: nR.DownloadIcon },
                      icon: nR.DownloadIcon,
                      action: () => {
                          let e = (0, nw.XW)(nZ.attachments[0].url);
                          (0, nU.h)({ href: e });
                      },
                  })
                : null),
        tK =
            ((n = { shouldHideMediaOptions: ts }),
            (n$ = n1?.url ?? ""),
            (nY = (0, S.bG)([nk.Ay], () => nk.Ay.isVideoStatsEnabled(n$))),
            (nQ = a.useCallback(() => {
                "" !== n$ && (0, nk.FM)(n$);
            }, [n$])),
            null != n1 && (0, nP.XB)(n1.contentType) && n?.shouldHideMediaOptions !== !0
                ? (0, l.jsx)(s.sL, {
                      id: "video-stats-for-nerds",
                      label: "Stats for Nerds",
                      leadingAccessory: { type: "icon", icon: e_.CircleInformationIcon },
                      checked: nY,
                      action: nQ,
                  })
                : null),
        tq = (0, y.A)(n5 ?? n9, te, n0, { shouldHideMediaOptions: ts }),
        tJ = (0, A.A)({ id: n0.id, label: j.intl.string(j.t.zBoHlf), shiftId: `${n0.channel_id}-${n0.id}` }),
        tV = (function (e) {
            let { messageId: n, itemId: t, type: i, imageSrc: r } = e,
                o = ea.Q_.useSetting(),
                { tidaWebformEnabled: c } = m.A.useExperiment(
                    { location: "useMessageDetailsItem" },
                    { autoTrackExposure: !1 },
                ),
                d = a.useCallback(() => {
                    (0, eh.C)(n);
                }, [n]),
                u = a.useCallback(() => {
                    null != t && (0, eh.C)(t);
                }, [t]),
                g = a.useCallback(() => {
                    null != r && (0, eh.C)(r);
                }, [r]),
                A = a.useCallback(() => {
                    null != r && (0, ej.A)(r);
                }, [r]),
                f = "sticker" === i;
            if (!o || !eh.p5 || !c || ("emoji" !== i && !f) || null == t) return null;
            let p = f ? j.intl.string(j.t.SJ3249) : j.intl.string(j.t.Ap2oVy),
                y = f ? j.intl.string(j.t.B1ubHx) : j.intl.string(j.t.cIoudn),
                h = f ? j.intl.string(j.t["qAEi+C"]) : j.intl.string(j.t.gDAM2n);
            return (0, l.jsxs)(s.Dr, {
                id: "message-details",
                label: j.intl.string(j.t.IqqJNI),
                leadingAccessory: { type: "icon", icon: e_.CircleInformationIcon },
                children: [
                    (0, l.jsx)(s.Dr, {
                        id: "copy-message-id",
                        label: j.intl.string(j.t.zBoHlf),
                        action: d,
                        leadingAccessory: { type: "icon", icon: eS.L },
                    }),
                    (0, l.jsx)(s.Dr, {
                        id: "copy-item-id",
                        label: p,
                        action: u,
                        leadingAccessory: { type: "icon", icon: eS.L },
                    }),
                    null != r &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(s.Dr, {
                                    id: "copy-image-link",
                                    label: y,
                                    action: g,
                                    leadingAccessory: { type: "icon", icon: eI.LinkIcon },
                                }),
                                (0, l.jsx)(s.Dr, {
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
        })({ messageId: n0.id, itemId: n2, type: n4, imageSrc: n9 }),
        tW = (0, l.jsx)(s.rX, { children: tV ?? tJ }),
        tZ = (0, l.jsxs)(s.rX, { children: [tF, tB, tX, tH, tz, tK] });
    return (0, l.jsxs)(o.W, {
        "data-menu-migrated": !0,
        navId: ta,
        onClose: tl,
        "aria-label": tr,
        onSelect: tc,
        children: [
            (0, l.jsx)(s.rX, { children: tg }),
            (0, l.jsx)(s.rX, { children: tA }),
            (0, l.jsxs)(s.rX, { children: ["" === n7 ? tu : null, tm, tv] }),
            (0, l.jsxs)(s.rX, { children: [tf, tp, ty, th] }),
            (0, l.jsxs)(s.rX, { children: [tE, t_, tS, tI, tx, tb, tj, tM, tD, tC, tG, tT, tL, tO] }),
            (0, l.jsxs)(s.rX, { children: [tN, tR, tw, tn && tU, tn && tk, tP] }),
            td
                ? (0, l.jsxs)(l.Fragment, { children: [tW, tZ, null == tV && (0, l.jsx)(s.rX, { children: tq })] })
                : (0, l.jsxs)(l.Fragment, { children: [tZ, (0, l.jsx)(s.rX, { children: tq }), tW] }),
        ],
    });
}
