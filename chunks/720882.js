n.d(t, { c: () => tP, default: () => tw });
var i,
    l = n(477900),
    a = n(582128),
    r = n(621466),
    s = n(477782),
    o = n(980707),
    c = n(442433),
    d = n(155718),
    u = n(793574),
    g = n(688810),
    A = n(50268),
    m = n(486503),
    y = n(373963),
    p = n(115184),
    f = n(777933),
    h = n(826308),
    E = n(337358),
    b = n(180662);
n(321073);
var x = n(17928),
    _ = n(280450),
    I = (((i = {})[(i.END_EARLY = 0)] = "END_EARLY"), i);
let S = [];
var j = n(375708);
let D = {
    [I.END_EARLY]: (e) =>
        (0, l.jsx)(s.Dr, {
            id: "end-poll-early",
            label: j.intl.string(j.t.grdwwt),
            icon: E.O,
            leadingAccessory: { type: "icon", icon: E.O },
            action: () => {
                b.A.endPollEarly({ channelId: e.channel_id, messageId: e.id });
            },
            iconProps: { color: "currentColor" },
        }),
};
var M = n(646911),
    C = n(174459),
    G = n(691540),
    T = n(857250),
    v = n(97483),
    L = n(834730),
    O = n(231483),
    N = n(627794),
    R = n(928348),
    U = n(53594),
    k = n(979816),
    w = n(268749),
    P = n(239705),
    B = n(264349),
    F = n(468689),
    X = n(652215),
    q = n(243277),
    z = n(654502);
let H = q.uh.KEYWORD;
var K = n(880457),
    V = n(503698),
    W = n.n(V),
    J = n(844222),
    Z = n(460905),
    $ = n(217306),
    Y = n(822123),
    Q = n(649963),
    ee = n(815807),
    et = n(406704),
    en = n(885386),
    ei = n(576705),
    el = n(486020),
    ea = n(625494),
    er = n(690521),
    es = n(307731),
    eo = n(482496);
function ec(e) {
    let { emoji: t, reducedMotionEnabled: n, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: W()(i, eo.Z),
        src:
            null != t.id
                ? el.Ay.getEmojiURL({ id: t.id, animated: t.animated && (!n || a), size: 18 })
                : er.Ay.getURL(t.optionallyDiverseSequence ?? ""),
        alt: "",
    });
}
var ed = n(290136),
    eu = n(519222),
    eg = n(345254),
    eA = n(624479),
    em = n(814890),
    ey = n(383233),
    ep = n(957565),
    ef = n(483768),
    eh = n(885574),
    eE = n(473935),
    eb = n(173936),
    ex = n(93688),
    e_ = n(509434),
    eI = n(975807),
    eS = n(22231),
    ej = n(148494),
    eD = n(697470),
    eM = n(253925),
    eC = n(843626),
    eG = n(427209);
n(938796);
var eT = n(665260),
    ev = n(563119),
    eL = n(581925),
    eO = n(521427),
    eN = n(20883),
    eR = n(979766),
    eU = n(866665),
    ek = n(816426);
let ew = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];
function eP(e) {
    let { emoji: t, isFocused: n } = e,
        { animated: i, src: a, surrogates: r } = t;
    return (
        null == a && null != t.id
            ? (a = el.Ay.getEmojiURL({ id: t.id, animated: !!i, size: 20 }))
            : null == a && (a = er.Ay.getURL(r)),
        (0, l.jsx)(eU.m, {
            text: (0, er.N)(t),
            hideOnClick: !0,
            spacing: 16,
            forceOpen: n,
            children: (0, l.jsx)("div", {
                "aria-label": j.intl.formatToPlainString(j.t["/iYSo6"], { emojiName: t.name }),
                className: W()(ek.x6, { [ek.in]: n }),
                children:
                    null == a || "" === a.trim()
                        ? (0, l.jsx)("span", { className: W()("emoji", "emoji-text", ek.Kk), children: r })
                        : (0, l.jsx)("img", { className: ek.Kk, src: a, alt: "" }),
            }),
        })
    );
}
var eB = n(192308),
    eF = n(969632),
    eX = n(997571),
    eq = n(157559),
    ez = n(769297);
function eH(e) {
    let { emoji: t, reducedMotionEnabled: n, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: i,
        src:
            null != t.id
                ? el.Ay.getEmojiURL({ id: t.id, animated: t.animated && (!n || a), size: 18 })
                : er.Ay.getURL(t.name ?? ""),
        alt: "",
    });
}
var eK = n(110384),
    eV = n(973196),
    eW = n(517997),
    eJ = n(554146),
    eZ = n(111159),
    e$ = n(138134),
    eY = n(964486),
    eQ = n(865116),
    e0 = n(131607),
    e8 = n(928658),
    e6 = n(400528),
    e2 = n(892340),
    e1 = n(715757),
    e7 = n(967198),
    e5 = n(287809),
    e9 = n(628691),
    e3 = n(49999),
    e4 = n(544482),
    te = n(663417),
    tt = n(965407),
    tn = n(249700),
    ti = n(556112),
    tl = n(54570),
    ta = n(8880),
    tr = n(163328),
    ts = n(636537),
    to = n(37646),
    tc = n(228366),
    td = n(147087),
    tu = n(773669),
    tg = n(132183);
let tA = new Map();
var tm = n(534890),
    ty = n(604681),
    tp = n(828488),
    tf = n(623562),
    th = n(619065),
    tE = n(485845),
    tb = n(778712),
    tx = n(803306),
    t_ = n(966327),
    tI = n(597929),
    tS = n(548118),
    tj = n(402860),
    tD = n(260509),
    tM = n(889227),
    tC = n(734057),
    tG = n(71393),
    tT = n(87221),
    tv = n(930125),
    tL = n(282108),
    tO = n(32880),
    tN = n(803316),
    tR = n(123917),
    tU = n(953584),
    tk = n(59318);
function tw(e) {
    let t,
        n,
        i,
        a,
        {
            channel: s,
            message: o,
            target: d,
            mediaItem: A,
            shouldHideMediaOptions: m,
            onSelect: y,
            onHeightUpdate: p,
        } = e,
        { analyticsLocations: f } = (0, g.Ay)([u.A.MESSAGE_CONTEXT_MENU]),
        h = d,
        E = d.getAttribute("data-type"),
        b = d.getAttribute("data-id"),
        x = d.getAttribute("data-name");
    if (null != A) n = t = i = A.url;
    else
        for (; (0, r.vq)(h); )
            (0, r.vq)(h, HTMLImageElement) && null != h.src && (n = h.src),
                (0, r.vq)(h, HTMLAnchorElement) &&
                    null != h.href &&
                    ((t = h.href),
                    (a = h.textContent),
                    null == n &&
                        "img" === h.getAttribute("data-role") &&
                        ((n = t),
                        h.hasAttribute("data-safe-src") &&
                            "" !== h.getAttribute("data-safe-src") &&
                            (i = h.getAttribute("data-safe-src")))),
                (h = h.parentNode);
    let _ = document.getSelection()?.toString() ?? "";
    return (0, l.jsx)(g.f5, {
        value: f,
        children: tP({
            message: o,
            channel: s,
            mediaItem: A,
            textSelection: _,
            favoriteableType: E,
            favoriteableId: b,
            favoriteableName: x,
            itemHref: t,
            itemSrc: n,
            itemSafeSrc: i,
            itemTextContent: a,
            canReport: !0,
            onHeightUpdate: p,
            onSelect: y,
            onClose: c.Z_,
            navId: "message",
            ariaLabel: j.intl.string(j.t.ChPNkN),
            shouldHideMediaOptions: m,
        }),
    });
}
function tP(e) {
    var t;
    let i,
        r,
        u,
        E,
        b,
        I,
        V,
        W,
        el,
        eo,
        eU,
        tw,
        tP,
        tB,
        tF,
        tX,
        tq,
        tz,
        tH,
        tK,
        tV,
        tW,
        tJ,
        tZ,
        t$,
        {
            message: tY,
            channel: tQ,
            mediaItem: t0,
            textSelection: t8,
            favoriteableType: t6,
            favoriteableId: t2,
            favoriteableName: t1,
            itemHref: t7,
            itemSrc: t5,
            itemSafeSrc: t9,
            itemTextContent: t3,
            canReport: t4,
            onHeightUpdate: ne,
            onSelect: nt,
            onClose: nn,
            navId: ni,
            ariaLabel: nl,
            shouldHideMediaOptions: na = !1,
        } = e,
        nr = a.useRef(null);
    a.useEffect(() => {
        nr.current = Date.now();
    }, []),
        a.useEffect(
            () => () => {
                if (null != nr.current) {
                    let e = Date.now() - nr.current;
                    C.default.track(X.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: e,
                        channel_id: tQ.id,
                        guild_id: tQ.getGuildId() ?? void 0,
                        message_id: tY.id,
                    });
                }
            },
            [tQ, tY],
        );
    let ns = a.useCallback(() => {
            if (null != nr.current) {
                let e = Date.now() - nr.current;
                C.default.track(X.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: e,
                    channel_id: tQ.id,
                    guild_id: tQ.getGuildId() ?? void 0,
                    message_id: tY.id,
                });
            }
            nt?.();
        }, [nt, tQ, tY]),
        { tidaWebformEnabled: no } = m.A.useExperiment({ location: "MessageContextMenu" }, { autoTrackExposure: !1 }),
        nc =
            ((i = (0, Y.D6)(tQ.guild_id).filter(
                (e) =>
                    !(e.useSpriteSheet && ew.indexOf(e.uniqueName ?? "") >= 0) &&
                    !er.Ay.isEmojiPremiumLocked({ emoji: e, channel: tQ, intention: es.EmojiIntention.REACTION }),
            )).length > 4 && (i.length = 4),
            (r = en.jW.useSetting()),
            (u = (0, et.Id)(tQ)),
            (0, x.bG)([ei.A], () => r && u && (tQ.isPrivate() || ei.A.can(X.xBc.ADD_REACTIONS, tQ)), [tQ, u, r]) &&
            i.length > 0 &&
            tY.type !== X.lAJ.MEDIA_MENTION_MESSAGE
                ? (0, l.jsx)(s.rX, {
                      className: ek.iE,
                      children: i.map((e, t) =>
                          (0, l.jsx)(
                              s.Dr,
                              {
                                  id: `quickreact-${e.id ?? t}`,
                                  render: (t) => {
                                      let { isFocused: n } = t;
                                      return (0, l.jsx)(eP, { emoji: e, isFocused: n });
                                  },
                                  action: () => {
                                      (0, Q.BB)(tQ.id, tY.id, (0, ee.jq)(e), Q.qN.MESSAGE_CONTEXT_MENU);
                                  },
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              t,
                          ),
                      ),
                  })
                : null),
        nd = (0, y.A)(t8),
        nu = (0, h.A)(t8),
        ng = (function (e, t) {
            let { reducedMotion: n } = a.useContext(J.C),
                i = (0, et.Id)(t),
                r = (0, x.bG)(
                    [ei.A],
                    () => (t.isPrivate() || ei.A.can(X.xBc.ADD_REACTIONS, t)) && i && !t.isMediaThread(),
                    [t, i],
                ),
                o = (0, Y.D6)(t.getGuildId());
            if (!en.jW.getSetting() || !r) return null;
            let c = o
                .filter(
                    (e) =>
                        !er.Ay.isEmojiFilteredOrLocked({ emoji: e, channel: t, intention: es.EmojiIntention.REACTION }),
                )
                .slice(0, 12)
                .map((i, a) =>
                    (0, l.jsx)(
                        s.Dr,
                        {
                            color: "default",
                            id: i.id ?? i.optionallyDiverseSequence ?? i.name,
                            label: `:${i.name}:`,
                            icon: (e) => (0, l.jsx)(ec, { ...e, reducedMotionEnabled: n.enabled, emoji: i }),
                            leadingAccessory: {
                                type: "emoji",
                                emojiId: i.id,
                                src: null == i.id ? er.Ay.getURL(i.optionallyDiverseSequence ?? "") : void 0,
                                animated: i.animated,
                            },
                            action: () => {
                                (0, Q.BB)(t.id, e.id, (0, ee.jq)(i), Q.qN.MESSAGE_CONTEXT_MENU);
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
                    ea._.dispatchKeyed(X.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
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
                                ea._.dispatchKeyed(X.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                            },
                        }),
                    ],
                }),
            });
        })(tY, tQ),
        nA =
            ((E = (0, x.bG)([_.default], () => _.default.getId())),
            (b = (0, et.Id)(tQ)),
            (I = (0, et.s5)(tQ)),
            (0, eD.A)(tY, E) && b && !I
                ? (0, l.jsx)(s.Dr, {
                      id: "edit",
                      label: j.intl.string(j.t.fsBWmS),
                      action: () => ej.A.startEditMessageRecord(tQ.id, tY),
                      leadingAccessory: { type: "icon", icon: eS.PencilIcon },
                      icon: eS.PencilIcon,
                  })
                : null),
        nm =
            ((V = (0, eW.u)(tQ, tY)),
            (W = (0, eV.A)()),
            !V || W
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "reply",
                      label: j.intl.string(j.t["5IEsGx"]),
                      leadingAccessory: { type: "icon", icon: eK.W },
                      icon: eK.W,
                      action: (e) => {
                          (0, eu.$b)(tQ, tY, e);
                      },
                  })),
        ny = (0, eC.m)(tY)
            ? (0, l.jsx)(s.Dr, {
                  id: "forward",
                  label: j.intl.string(j.t.I3ltXO),
                  leadingAccessory: { type: "icon", icon: eG.A },
                  icon: eG.A,
                  action: () => {
                      (0, eu.Z4)(tQ, tY);
                  },
              })
            : null,
        np = (0, et.n)(tQ, tY)
            ? (0, l.jsx)(s.Dr, {
                  id: "thread",
                  label: j.intl.string(j.t.rBIGBL),
                  leadingAccessory: { type: "icon", icon: tr.y },
                  icon: tr.y,
                  action: () => {
                      (0, eu.Nw)(tQ, tY);
                  },
              })
            : null,
        nf = (function (e) {
            if (!ep.p5) return null;
            let t = e.getContentMessage(),
                n = (0, ey._c)(t) ? (0, em.kC)(t.components) : t.content;
            return null == n || 0 === n.length
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "copy-text",
                      label: j.intl.string(j.t.JrGD7E),
                      leadingAccessory: { type: "icon", icon: eA.CopyIcon },
                      icon: eA.CopyIcon,
                      action: () => {
                          (0, ep.C)(n);
                      },
                  });
        })(tY),
        nh = (function (e) {
            let t,
                {
                    handleTranslate: i,
                    handleRevertTranslation: r,
                    isTranslating: o,
                    isTranslated: c,
                } = (function (e) {
                    let [t, n] = a.useState(!1),
                        i = (0, x.bG)([tu.default], () => tu.default.locale);
                    return {
                        handleTranslate: a.useCallback(
                            async (l, a) => {
                                if (t) return;
                                let r = l ?? i;
                                n(!0);
                                let s = a ?? (0, j.getAvailableLocales)().find((e) => e.value === r)?.name ?? r;
                                tA.has(e.id) || tA.set(e.id, e.content),
                                    (0, G.P0)(
                                        (0, T.o)(
                                            j.intl.formatToPlainString(j.t.Znl8Z8, { targetLanguage: s }),
                                            v.Ck.AI,
                                        ),
                                    );
                                try {
                                    let t = await ts.Bo.post({
                                        url: X.Rsh.AI_TRANSLATE,
                                        body: { content: e.content, locale: r },
                                        rejectWithError: (0, ts.fT)(),
                                    });
                                    t.body &&
                                        (tc.h.dispatch({
                                            type: "MESSAGE_UPDATE",
                                            message: { id: e.id, channel_id: e.channel_id, content: t.body.content },
                                        }),
                                        (0, G.P0)(
                                            (0, T.o)(
                                                j.intl.formatToPlainString(j.t.FtVUqm, { targetLanguage: s }),
                                                v.Ck.SUCCESS,
                                            ),
                                        ));
                                } finally {
                                    n(!1);
                                }
                            },
                            [e, t, i],
                        ),
                        handleRevertTranslation: a.useCallback(() => {
                            let t = tA.get(e.id);
                            null != t &&
                                (tc.h.dispatch({
                                    type: "MESSAGE_UPDATE",
                                    message: { id: e.id, channel_id: e.channel_id, content: t },
                                }),
                                tA.delete(e.id));
                        }, [e.id, e.channel_id]),
                        isTranslating: t,
                        isTranslated: tA.has(e.id),
                    };
                })(e),
                d =
                    ((t = (0, j.getAvailableLocales)()),
                    a.useMemo(
                        () =>
                            t.map((e) => {
                                let t;
                                try {
                                    t = n(579832)(`./${e.value}.png`);
                                } catch (e) {
                                    t = n(432706);
                                }
                                return (0, l.jsx)(
                                    s.Dr,
                                    {
                                        id: `translate-${e.value}`,
                                        label: e.name,
                                        icon: () => (0, l.jsx)("img", { alt: "", src: t, className: tg.M }),
                                        leadingAccessory: { type: "image", src: t },
                                        action: () => i(e.value, e.name),
                                        disabled: o,
                                    },
                                    e.value,
                                );
                            }),
                        [i, o, t],
                    )),
                u = (0, td.b)();
            return null != e.content && "" !== e.content.trim() && u
                ? c
                    ? (0, l.jsx)(s.Dr, {
                          id: "revert-translation",
                          label: j.intl.string(j.t.JC9BXn),
                          leadingAccessory: { type: "icon", icon: to.U },
                          icon: to.U,
                          action: r,
                          disabled: o,
                      })
                    : (0, l.jsx)(s.Dr, {
                          id: "translate",
                          label: o ? j.intl.string(j.t.SVKIdU) : j.intl.string(j.t["6epDlR"]),
                          action: () => i(),
                          leadingAccessory: { type: "icon", icon: to.U },
                          disabled: o,
                          children: d,
                      })
                : null;
        })(tY),
        nE = (0, eR.A)(tY, tQ),
        nb = (0, eO.kn)(tY, tQ, "MessageContextMenu")
            ? (0, eT.Lt)(tY.flags, X.pr7.IS_GUILD_OFFICIAL)
                ? (0, l.jsx)(s.Dr, {
                      id: "guild-official-unset",
                      action: () => {
                          ej.A.patchMessageGuildOfficial(tQ.id, tY.id, !1);
                      },
                      label: j.intl.string(j.t["2km5Gf"]),
                      leadingAccessory: { type: "icon", icon: ev.$ },
                  })
                : (0, l.jsx)(s.Dr, {
                      id: "guild-official-set",
                      action: () => {
                          ej.A.patchMessageGuildOfficial(tQ.id, tY.id, !0);
                      },
                      label: j.intl.string(j.t["lE/PG3"]),
                      leadingAccessory: { type: "icon", icon: eL.L },
                  })
            : null,
        nx = (0, K.A)(tY, tQ),
        n_ = (0, M.A)({
            commandType: d.kc.MESSAGE,
            commandTargetId: tY.id,
            channel: tQ,
            guildId: void 0,
            onHeightUpdate: ne,
            showIcon: !0,
        }),
        nI =
            tY.state !== X.cmJ.SEND_FAILED
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "resend",
                      label: j.intl.string(j.t.lXHojr),
                      leadingAccessory: { type: "icon", icon: te.RefreshIcon },
                      action: () => (0, tn.A)(tQ, tY, void 0, tt.A.getOptions(tY.id)),
                  }),
        nS = (0, eN.A)(tY, tQ),
        nj =
            null != (el = tQ.getGuildId()) &&
            tY.type === X.lAJ.USER_JOIN &&
            ei.A.canWithPartialContext(X.xBc.MANAGE_GUILD, { guildId: el })
                ? (0, l.jsx)(s.Dr, {
                      id: "configure",
                      label: j.intl.string(j.t.NpHUi1),
                      leadingAccessory: { type: "icon", icon: ed.CircleQuestionIcon },
                      icon: ed.CircleQuestionIcon,
                      action: () => (0, eu.vc)(tQ),
                  })
                : null,
        nD = (0, eg.A)(tY, tQ),
        nM =
            ((eo = (0, tp.WU)(tQ.getGuildId(), "message_context_menu")),
            (eU = (0, x.bG)([th.A], () => th.A.getConversationForMessage(tQ.id, tY.id) ?? null, [tQ.id, tY.id])),
            (tw = a.useCallback(() => {
                let e = tQ.getGuildId();
                null != e && null != eU && (ty.A.openConversationsSection(), (0, tf.xI)(tQ.id, e, eU));
            }, [tQ, eU])),
            eo && null != eU
                ? (0, l.jsx)(s.Dr, {
                      id: "view-conversation",
                      label: "View Conversation",
                      leadingAccessory: { type: "icon", icon: tm.ChatIcon },
                      icon: tm.ChatIcon,
                      action: tw,
                  })
                : null),
        nC =
            ((tP = (0, x.bG)([ta.A], () => ta.A.isSpeakingMessage(tQ.id, tY.id), [tQ, tY])),
            "" === tY.content
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "tts",
                      label: tP ? j.intl.string(j.t.CJ30BP) : j.intl.string(j.t.yGLjXF),
                      leadingAccessory: { type: "icon", icon: ti._ },
                      icon: ti._,
                      action: () => (tP ? (0, tl.pr)() : (0, tl.kP)(tQ, tY)),
                  })),
        nG =
            null == tY.reactions || 0 === tY.reactions.length || (tY.isPoll() && !(0, eF.Gh)(tY))
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "reactions",
                      label: j.intl.string(j.t.wikODq),
                      leadingAccessory: { type: "icon", icon: $.S },
                      icon: $.S,
                      action: () =>
                          (0, eB.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([n.e("569080"), n.e("998186")]).then(
                                  n.bind(n, 112753),
                              );
                              return (t) => (0, l.jsx)(e, { ...t, message: tY });
                          }),
                  }),
        nT =
            0 ===
            (tB = (function (e) {
                let t = (0, x.bG)([_.default], () => _.default.getId()),
                    { poll: n } = e;
                if (!e.isPoll() || null == n) return S;
                let i = [];
                return n.expiry.isSameOrBefore(Date.now()) || e.author.id !== t || i.push(0), i;
            })(tY)).length
                ? null
                : (0, l.jsx)(l.Fragment, { children: tB.map((e) => D[e](tY)) }),
        nv = (function (e) {
            let { analyticsLocations: t } = (0, g.Ay)(),
                n = e.interactionMetadata?.authorizing_integration_owners[tE.b.USER_INSTALL],
                i = e.interactionMetadata?.authorizing_integration_owners[tE.b.GUILD_INSTALL],
                r = e.interactionMetadata?.user.id,
                o = (0, x.bG)([e5.default], () => e5.default.getUser(n)),
                c = (0, x.bG)([tG.A], () => tG.A.getGuild(i)),
                d = tC.A.getChannel(e.channel_id),
                u = d?.getGuildId(),
                A = (0, x.bG)([e5.default], () => e5.default.getUser(r));
            if (
                (a.useEffect(() => {
                    null == o && null != n && (0, tx.getUser)(n);
                }, [o, n]),
                !(0, tI._)(e))
            )
                return null;
            null == A && (A = new tM.A(e.interactionMetadata?.user));
            let m = null;
            if (null != c) {
                let t = (0, tD.Iv)(c, 18, !0);
                m = (0, l.jsx)(s.Dr, {
                    disabled: !0,
                    iconLeft: () => (0, l.jsx)(tS.Ay, { guild: c, size: tS.Ay.Sizes.MINI }),
                    leadingAccessory: null != t ? { type: "image", src: t } : void 0,
                    id: "integration-owner",
                    label: c.name,
                    subtext: j.intl.formatToPlainString(j.t.ShLXXB, { application: e.author.username }),
                });
            } else
                null != o &&
                    (m = (0, l.jsx)(s.Dr, {
                        action: () =>
                            (0, tj.openUserProfileModal)({
                                userId: o.id,
                                guildId: u,
                                channelId: e.channel_id,
                                sourceAnalyticsLocations: t,
                            }),
                        leadingAccessory: { type: "avatar", src: o.getAvatarURL(u, 18) },
                        id: "integration-owner",
                        label: o.username,
                        iconLeft: () => (0, l.jsx)(t_.A, { user: o, size: tb._3.SIZE_20 }),
                        subtext: j.intl.formatToPlainString(j.t.ShLXXB, { application: e.author.username }),
                    }));
            return (0, l.jsxs)(s.Dr, {
                id: "view-interaction-info",
                label: j.intl.string(j.t.Rjezbz),
                leadingAccessory: { type: "icon", icon: eh.CircleInformationIcon },
                children: [
                    m,
                    null != A
                        ? (0, l.jsx)(s.Dr, {
                              action: () =>
                                  (0, tj.openUserProfileModal)({
                                      userId: A.id,
                                      guildId: u,
                                      channelId: e.channel_id,
                                      sourceAnalyticsLocations: t,
                                  }),
                              leadingAccessory: { type: "avatar", src: A.getAvatarURL(u, 18) },
                              iconLeft: () => (0, l.jsx)(t_.A, { user: A, size: tb._3.SIZE_20 }),
                              id: "interaction-user",
                              label: A.username,
                              subtext: j.intl.string(j.t["04gxNg"]),
                          })
                        : null,
                ],
            });
        })(tY),
        nL = (function (e, t) {
            let { reducedMotion: n } = a.useContext(J.C),
                i = (0, et.Id)(t),
                r = (0, x.bG)([ei.A], () => ei.A.can(X.xBc.MANAGE_MESSAGES, t) && i, [t, i]),
                o = e.reactions.reduce(
                    (e, t) =>
                        t.count_details?.vote != null ||
                        null != e.find((e) => (null != e.id && e.id === t.emoji.id) || e.name === t.emoji.name)
                            ? e
                            : [...e, t.emoji],
                    [],
                );
            return !r || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, eF.Gh)(e))
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
                                  action: (n) => {
                                      n.shiftKey
                                          ? (0, Q.Jf)(t.id, e.id, i)
                                          : eq.A.show({
                                                title: j.intl.string(j.t["73GqTz"]),
                                                body: j.intl.string(j.t.dmy5bn),
                                                confirmText: j.intl.string(j.t.p89ACt),
                                                confirmVariant: "critical-primary",
                                                cancelText: j.intl.string(j.t.gm1Vej),
                                                onConfirm: () => {
                                                    (0, Q.Jf)(t.id, e.id, i);
                                                },
                                            });
                                  },
                                  leadingAccessory: {
                                      type: "emoji",
                                      emojiId: i.id,
                                      src: null == i.id ? er.Ay.getURL(i.name ?? "") : void 0,
                                      animated: i.animated,
                                  },
                                  icon: (e) => (0, l.jsx)(eH, { ...e, reducedMotionEnabled: n.enabled, emoji: i }),
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              i.name ?? i.id,
                          ),
                      ),
                  });
        })(tY, tQ),
        nO =
            ((tF = (0, et.Id)(tQ)),
            !(0, x.bG)([ei.A], () => ei.A.can(X.xBc.MANAGE_MESSAGES, tQ) && tF, [tQ, tF]) ||
            null == tY.reactions ||
            0 === tY.reactions.length ||
            (tY.isPoll() && !(0, eF.Gh)(tY))
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "remove-reactions",
                      label: j.intl.string(j.t.ZbtGBm),
                      leadingAccessory: { type: "icon", icon: eX.t },
                      action: function (e) {
                          e.shiftKey
                              ? (0, Q.Go)(tQ.id, tY.id)
                              : eq.A.show({
                                    title: j.intl.string(j.t.iz3vYX),
                                    body: j.intl.string(j.t.VpjOCo),
                                    confirmText: j.intl.string(j.t.p89ACt),
                                    confirmVariant: "critical-primary",
                                    cancelText: j.intl.string(j.t.gm1Vej),
                                    onConfirm: () => {
                                        (0, Q.Go)(tQ.id, tY.id);
                                    },
                                });
                      },
                      color: "danger",
                  })),
        nN = (0, ef.A)(tY, tQ),
        nR =
            ((tX = (0, x.bG)([e7.A], () => e7.A.getGuildId())),
            (tq = (0, e1.Qo)(tX)),
            (0, e9.ul)(tY)
                ? (0, l.jsx)(s.Dr, {
                      id: "report",
                      label: tq ? j.intl.string(j.t.n5EBAJ) : j.intl.string(j.t.GwbdGe),
                      action: () => (0, e8.V2)(tY, "web_message_context_menu"),
                      icon: tq ? eZ.p : e$.FlagIcon,
                      leadingAccessory: { type: "icon", icon: tq ? eZ.p : e$.FlagIcon },
                      color: "danger",
                  })
                : null),
        nU =
            ((tz = (0, x.bG)([eQ.Ay], () => eQ.Ay.get("iar_testing"))),
            (tH = (0, x.bG)([e5.default], () => e5.default.getCurrentUser())),
            (0, e9.ul)(tY) && null != tH && tH.isStaff() && tz
                ? (0, l.jsx)(s.Dr, {
                      id: "staff-test-message-report",
                      label: "[STAFF] Test Message Report",
                      action: () => (0, e8.Rj)(tY, "web_message_context_menu"),
                      icon: e$.FlagIcon,
                      leadingAccessory: { type: "icon", icon: e$.FlagIcon },
                      color: "danger",
                  })
                : null),
        nk = (function (e) {
            let t = (0, x.bG)([e6.A], () => e6.A.hasReportedMessage(e.channel_id, e.id)),
                n = (0, e2.KB)(e),
                i = n ? [eJ.M.REPORT_TO_MOD_NEW_TAG] : [],
                [a, r] = (0, e0.kn)(i);
            return ((0, eY.l0)(() => {
                n && r(e3.i.AUTO_DISMISS);
            }),
            n)
                ? (0, l.jsx)(s.Dr, {
                      id: "report-to-mod",
                      label: t ? j.intl.string(e4.default["8wsdng"]) : j.intl.string(e4.default["1D+vqy"]),
                      action: () => {
                          r(e3.i.USER_DISMISS), (0, e8.dy)(e);
                      },
                      icon: e$.FlagIcon,
                      disabled: t,
                      leadingAccessory: { type: "icon", icon: e$.FlagIcon },
                      badge: a === eJ.M.REPORT_TO_MOD_NEW_TAG ? "new" : void 0,
                      color: "danger",
                  })
                : null;
        })(tY),
        nw = (0, eM.A)({ type: t6, id: t2, name: t1 }),
        nP = (function (e, t) {
            let { perGuildMaxCount: n } = U.i$[H],
                { isLoading: i, saveRule: r, errorMessage: o } = (0, w.S)(),
                { createNewEditingRule: d } = (0, w.U)(),
                [u, g] = a.useState(!1),
                [A, m] = (0, R.H6)(t),
                { rulesByTriggerType: y, updateRule: p } = (0, R.wP)(t),
                f = a.useMemo(() => y[H] ?? [], [y]),
                h = 0 === f.length,
                E = n > f.length && !h;
            if (!a.useMemo(() => (0, k.i_)(t), [t]) || null == e || 0 === e.length || null == t) return null;
            let b = e.split(" "),
                x = b.length;
            try {
                (0, N.wk)(b, q.bV);
            } catch (e) {
                return null;
            }
            function _() {
                null == e ||
                    (null != t &&
                        ((0, c.Z_)(),
                        F.A.open(t, X.BEX.GUILD_AUTOMOD),
                        setTimeout(() => {
                            d(t, H, { triggerMetadata: { keywordFilter: [e], regexPatterns: [], allowList: [] } });
                        }, 400)));
            }
            async function I(t) {
                if (null == e || ((0, c.Z_)(), !(await (0, B.Zy)(t.name, e)))) return;
                let n = {
                    ...t,
                    triggerMetadata: {
                        ...t.triggerMetadata,
                        keywordFilter: [...(t.triggerMetadata?.keywordFilter ?? []), e],
                    },
                };
                await r(n, f),
                    p(n),
                    null != o
                        ? (0, G.P0)((0, T.o)(j.intl.string(j.t.wH6L0r), v.Ck.FAILURE))
                        : (0, G.P0)((0, T.o)(j.intl.string(j.t["0rdYm2"]), v.Ck.SUCCESS));
            }
            let S = (0, l.jsx)(s.Dr, { id: "automod-rules-loading", label: j.intl.string(j.t.ZTNur7) });
            return (
                A ||
                    (S = (0, l.jsxs)(l.Fragment, {
                        children: [
                            h &&
                                (0, l.jsx)(s.Dr, {
                                    id: "add-first-rule",
                                    label: j.intl.string(j.t.f72Zqb),
                                    action: _,
                                    disabled: i,
                                }),
                            f.map((e) => {
                                let t = (0, U.J6)(H).reduce((t, n) => {
                                    let i = e.actions.find((e) => {
                                        let { type: t } = e;
                                        return n === t;
                                    });
                                    if (null == i) return t;
                                    let l = (0, P.x)(n, i);
                                    return t + `, ${l?.headerText}`;
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
                                            children: t.slice(2),
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
                                        (0, l.jsx)(s.bX, {}),
                                        (0, l.jsx)(s.Dr, {
                                            id: "add-another-rule",
                                            label: j.intl.string(j.t["0K5jDE"]),
                                            action: _,
                                            disabled: i,
                                        }),
                                    ],
                                }),
                        ],
                    })),
                (0, l.jsx)(s.Dr, {
                    id: "guild-automod-add-selection",
                    label: j.intl.formatToPlainString(j.t.Kkjv1m, { keywordCount: x }),
                    leadingAccessory: { type: "icon", icon: O.ShieldIcon },
                    onFocus: function () {
                        u || (g(!0), m());
                    },
                    children: S,
                })
            );
        })(t8, tQ.getGuildId()),
        nB = (0, p.A)(t9, tY, {
            shouldHideMediaOptions: na,
            contentType: t0?.contentType,
            originalContentType: t0?.originalContentType,
        }),
        nF =
            ((tK = (0, tL.Fg)(tY)),
            (tV = null != t0 && (0, tL.qo)({ type: tv.D.GenericMedia, media: t0 }, tK)),
            null != t0 && tV
                ? (0, l.jsx)(
                      s.Dr,
                      {
                          id: "report-image-false-positive",
                          label: j.intl.string(j.t.ZH7P2h),
                          action: function () {
                              null != t0 &&
                                  (0, eB.openModalLazy)(async () => {
                                      let { default: e } = await n(679276);
                                      return (t) =>
                                          (0, l.jsx)(e, {
                                              channelId: tY.channel_id,
                                              messageId: tY.id,
                                              mediaItemUrl: t0.url,
                                              ...t,
                                          });
                                  });
                          },
                          leadingAccessory: { type: "icon", icon: tT.D },
                          icon: tT.D,
                      },
                      "report-image-false-positive",
                  )
                : null),
        nX =
            ((tW = tY.getContentMessage()),
            (0, eT.Lt)(tW.flags, X.pr7.IS_VOICE_MESSAGE) && 0 !== tW.attachments.length
                ? (0, l.jsx)(s.Dr, {
                      id: "save-voice-message-audio",
                      label: j.intl.string(j.t.vbAEaA),
                      leadingAccessory: { type: "icon", icon: tO.DownloadIcon },
                      icon: tO.DownloadIcon,
                      action: () => {
                          let e = (0, tN.XW)(tW.attachments[0].url);
                          (0, tR.h)({ href: e });
                      },
                  })
                : null),
        nq =
            ((t = { shouldHideMediaOptions: na }),
            (tJ = t0?.url ?? ""),
            (tZ = (0, x.bG)([tU.Ay], () => tU.Ay.isVideoStatsEnabled(tJ))),
            (t$ = a.useCallback(() => {
                "" !== tJ && (0, tU.FM)(tJ);
            }, [tJ])),
            null != t0 && (0, tk.XB)(t0.contentType) && t?.shouldHideMediaOptions !== !0
                ? (0, l.jsx)(s.sL, {
                      id: "video-stats-for-nerds",
                      label: "Stats for Nerds",
                      leadingAccessory: { type: "icon", icon: eh.CircleInformationIcon },
                      checked: tZ,
                      action: t$,
                  })
                : null),
        nz = (0, f.A)(t7 ?? t5, t3, tY, { shouldHideMediaOptions: na }),
        nH = (0, A.A)({ id: tY.id, label: j.intl.string(j.t.zBoHlf), shiftId: `${tY.channel_id}-${tY.id}` }),
        nK = (function (e) {
            let { messageId: t, itemId: n, type: i, imageSrc: r } = e,
                o = en.Q_.useSetting(),
                { tidaWebformEnabled: c } = m.A.useExperiment(
                    { location: "useMessageDetailsItem" },
                    { autoTrackExposure: !1 },
                ),
                d = a.useCallback(() => {
                    (0, ep.C)(t);
                }, [t]),
                u = a.useCallback(() => {
                    null != n && (0, ep.C)(n);
                }, [n]),
                g = a.useCallback(() => {
                    null != r && (0, ep.C)(r);
                }, [r]),
                A = a.useCallback(() => {
                    null != r && (0, eI.A)(r);
                }, [r]),
                y = "sticker" === i;
            if (!o || !ep.p5 || !c || ("emoji" !== i && !y) || null == n) return null;
            let p = y ? j.intl.string(j.t.SJ3249) : j.intl.string(j.t.Ap2oVy),
                f = y ? j.intl.string(j.t.B1ubHx) : j.intl.string(j.t.cIoudn),
                h = y ? j.intl.string(j.t["qAEi+C"]) : j.intl.string(j.t.gDAM2n);
            return (0, l.jsxs)(s.Dr, {
                id: "message-details",
                label: j.intl.string(j.t.IqqJNI),
                leadingAccessory: { type: "icon", icon: eh.CircleInformationIcon },
                children: [
                    (0, l.jsx)(s.Dr, {
                        id: "copy-message-id",
                        label: j.intl.string(j.t.zBoHlf),
                        action: d,
                        leadingAccessory: { type: "icon", icon: eE.L },
                    }),
                    (0, l.jsx)(s.Dr, {
                        id: "copy-item-id",
                        label: p,
                        action: u,
                        leadingAccessory: { type: "icon", icon: eE.L },
                    }),
                    null != r &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(s.Dr, {
                                    id: "copy-image-link",
                                    label: f,
                                    action: g,
                                    leadingAccessory: { type: "icon", icon: eb.LinkIcon },
                                }),
                                (0, l.jsx)(s.Dr, {
                                    id: "open-image-link",
                                    label: h,
                                    action: A,
                                    leadingAccessory: { type: "icon", icon: ex.W },
                                    trailingIndicator: { type: "icon", icon: e_.I },
                                }),
                            ],
                        }),
                ],
            });
        })({ messageId: tY.id, itemId: t2, type: t6, imageSrc: t5 }),
        nV = (0, l.jsx)(s.rX, { children: nK ?? nH }),
        nW = (0, l.jsxs)(s.rX, { children: [nw, nP, nB, nF, nX, nq] });
    return (0, l.jsxs)(o.W, {
        "data-menu-migrated": !0,
        navId: ni,
        onClose: nn,
        "aria-label": nl,
        onSelect: ns,
        children: [
            (0, l.jsx)(s.rX, { children: nd }),
            (0, l.jsx)(s.rX, { children: nu }),
            (0, l.jsxs)(s.rX, { children: ["" === t8 ? nc : null, ng, nG] }),
            (0, l.jsxs)(s.rX, { children: [nA, nm, ny, np] }),
            (0, l.jsxs)(s.rX, { children: [nf, nh, nE, nb, nx, n_, nI, nS, nj, nD, nM, nC, nT, nv] }),
            (0, l.jsxs)(s.rX, { children: [nL, nO, nN, t4 && nR, t4 && nU, nk] }),
            no
                ? (0, l.jsxs)(l.Fragment, { children: [nV, nW, null == nK && (0, l.jsx)(s.rX, { children: nz })] })
                : (0, l.jsxs)(l.Fragment, { children: [nW, (0, l.jsx)(s.rX, { children: nz }), nV] }),
        ],
    });
}
