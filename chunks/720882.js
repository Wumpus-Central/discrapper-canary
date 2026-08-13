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
    j = (((i = {})[(i.END_EARLY = 0)] = "END_EARLY"), i);
let S = [];
var I = n(375708);
let M = {
    [j.END_EARLY]: (e) =>
        (0, l.jsx)(s.Dr, {
            id: "end-poll-early",
            label: I.intl.string(I.t.grdwwt),
            icon: E.O,
            leadingAccessory: { type: "icon", icon: E.O },
            action: () => {
                b.A.endPollEarly({ channelId: e.channel_id, messageId: e.id });
            },
            iconProps: { color: "currentColor" },
        }),
};
var D = n(646911),
    G = n(174459),
    T = n(691540),
    C = n(857250),
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
    X = n(468689),
    F = n(652215),
    q = n(243277),
    z = n(873455);
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
    eo = n(330585);
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
    ej = n(975807),
    eS = n(22231),
    eI = n(148494),
    eM = n(697470),
    eD = n(253925),
    eG = n(843626),
    eT = n(427209);
n(938796);
var eC = n(665260),
    ev = n(563119),
    eL = n(581925),
    eO = n(521427),
    eN = n(20883),
    eR = n(979766),
    eU = n(866665),
    ek = n(302143);
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
                "aria-label": I.intl.formatToPlainString(I.t["/iYSo6"], { emojiName: t.name }),
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
    eX = n(969632),
    eF = n(997571),
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
    e7 = n(400528),
    e2 = n(892340),
    e1 = n(715757),
    e6 = n(967198),
    e3 = n(287809),
    e5 = n(628691),
    e9 = n(49999),
    e4 = n(221314),
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
    tg = n(842056);
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
    tj = n(597929),
    tS = n(548118),
    tI = n(975732),
    tM = n(260509),
    tD = n(889227),
    tG = n(734057),
    tT = n(71393),
    tC = n(87221),
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
            ariaLabel: I.intl.string(I.t.ChPNkN),
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
        j,
        V,
        W,
        el,
        eo,
        eU,
        tw,
        tP,
        tB,
        tX,
        tF,
        tq,
        tz,
        tH,
        tK,
        tV,
        tW,
        tJ,
        tZ,
        {
            message: t$,
            channel: tY,
            mediaItem: tQ,
            textSelection: t0,
            favoriteableType: t8,
            favoriteableId: t7,
            favoriteableName: t2,
            itemHref: t1,
            itemSrc: t6,
            itemSafeSrc: t3,
            itemTextContent: t5,
            canReport: t9,
            onHeightUpdate: t4,
            onSelect: ne,
            onClose: nt,
            navId: nn,
            ariaLabel: ni,
            shouldHideMediaOptions: nl = !1,
        } = e,
        na = a.useRef(null);
    a.useEffect(() => {
        na.current = Date.now();
    }, []),
        a.useEffect(
            () => () => {
                if (null != na.current) {
                    let e = Date.now() - na.current;
                    G.default.track(F.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: e,
                        channel_id: tY.id,
                        guild_id: tY.getGuildId() ?? void 0,
                        message_id: t$.id,
                    });
                }
            },
            [tY, t$],
        );
    let nr = a.useCallback(() => {
            if (null != na.current) {
                let e = Date.now() - na.current;
                G.default.track(F.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: e,
                    channel_id: tY.id,
                    guild_id: tY.getGuildId() ?? void 0,
                    message_id: t$.id,
                });
            }
            ne?.();
        }, [ne, tY, t$]),
        { tidaWebformEnabled: ns } = m.A.useExperiment({ location: "MessageContextMenu" }, { autoTrackExposure: !1 }),
        no =
            ((i = (0, Y.D6)(tY.guild_id).filter(
                (e) =>
                    !(e.useSpriteSheet && ew.indexOf(e.uniqueName ?? "") >= 0) &&
                    !er.Ay.isEmojiPremiumLocked({ emoji: e, channel: tY, intention: es.EmojiIntention.REACTION }),
            )).length > 4 && (i.length = 4),
            (r = en.jW.useSetting()),
            (u = (0, et.Id)(tY)),
            (0, x.bG)([ei.A], () => r && u && (tY.isPrivate() || ei.A.can(F.xBc.ADD_REACTIONS, tY)), [tY, u, r]) &&
            i.length > 0 &&
            t$.type !== F.lAJ.MEDIA_MENTION_MESSAGE
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
                                      (0, Q.BB)(tY.id, t$.id, (0, ee.jq)(e), Q.qN.MESSAGE_CONTEXT_MENU);
                                  },
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              t,
                          ),
                      ),
                  })
                : null),
        nc = (0, y.A)(t0),
        nd = (0, h.A)(t0),
        nu = (function (e, t) {
            let { reducedMotion: n } = a.useContext(J.C),
                i = (0, et.Id)(t),
                r = (0, x.bG)(
                    [ei.A],
                    () => (t.isPrivate() || ei.A.can(F.xBc.ADD_REACTIONS, t)) && i && !t.isMediaThread(),
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
                label: I.intl.string(I.t.lfIHs4),
                leadingAccessory: { type: "icon", icon: Z.n },
                action: () => {
                    ea._.dispatchKeyed(F.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                },
                color: "default",
                children: (0, l.jsxs)(l.Fragment, {
                    children: [
                        c,
                        (0, l.jsx)(s.bX, {}),
                        (0, l.jsx)(s.Dr, {
                            color: "default",
                            id: "other-reactions",
                            label: I.intl.string(I.t["OBCR+p"]),
                            icon: Z.n,
                            leadingAccessory: { type: "icon", icon: $.S },
                            action: () => {
                                ea._.dispatchKeyed(F.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                            },
                        }),
                    ],
                }),
            });
        })(t$, tY),
        ng =
            ((E = (0, x.bG)([_.default], () => _.default.getId())),
            (b = (0, et.Id)(tY)),
            (j = (0, et.s5)(tY)),
            (0, eM.A)(t$, E) && b && !j
                ? (0, l.jsx)(s.Dr, {
                      id: "edit",
                      label: I.intl.string(I.t.fsBWmS),
                      action: () => eI.A.startEditMessageRecord(tY.id, t$),
                      leadingAccessory: { type: "icon", icon: eS.R },
                      icon: eS.R,
                  })
                : null),
        nA =
            ((V = (0, eW.u)(tY, t$)),
            (W = (0, eV.A)()),
            !V || W
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "reply",
                      label: I.intl.string(I.t["5IEsGx"]),
                      leadingAccessory: { type: "icon", icon: eK.W },
                      icon: eK.W,
                      action: (e) => {
                          (0, eu.$b)(tY, t$, e);
                      },
                  })),
        nm = (0, eG.m)(t$)
            ? (0, l.jsx)(s.Dr, {
                  id: "forward",
                  label: I.intl.string(I.t.I3ltXO),
                  leadingAccessory: { type: "icon", icon: eT.A },
                  icon: eT.A,
                  action: () => {
                      (0, eu.Z4)(tY, t$);
                  },
              })
            : null,
        ny = (0, et.n)(tY, t$)
            ? (0, l.jsx)(s.Dr, {
                  id: "thread",
                  label: I.intl.string(I.t.rBIGBL),
                  leadingAccessory: { type: "icon", icon: tr.y },
                  icon: tr.y,
                  action: () => {
                      (0, eu.Nw)(tY, t$);
                  },
              })
            : null,
        np = (function (e) {
            if (!ep.p5) return null;
            let t = e.getContentMessage(),
                n = (0, ey._c)(t) ? (0, em.kC)(t.components) : t.content;
            return null == n || 0 === n.length
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "copy-text",
                      label: I.intl.string(I.t.JrGD7E),
                      leadingAccessory: { type: "icon", icon: eA.T },
                      icon: eA.T,
                      action: () => {
                          (0, ep.C)(n);
                      },
                  });
        })(t$),
        nf = (function (e) {
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
                                let s = a ?? (0, I.getAvailableLocales)().find((e) => e.value === r)?.name ?? r;
                                tA.has(e.id) || tA.set(e.id, e.content),
                                    (0, T.P0)(
                                        (0, C.o)(
                                            I.intl.formatToPlainString(I.t.Znl8Z8, { targetLanguage: s }),
                                            v.Ck.AI,
                                        ),
                                    );
                                try {
                                    let t = await ts.Bo.post({
                                        url: F.Rsh.AI_TRANSLATE,
                                        body: { content: e.content, locale: r },
                                        rejectWithError: (0, ts.fT)(),
                                    });
                                    t.body &&
                                        (tc.h.dispatch({
                                            type: "MESSAGE_UPDATE",
                                            message: { id: e.id, channel_id: e.channel_id, content: t.body.content },
                                        }),
                                        (0, T.P0)(
                                            (0, C.o)(
                                                I.intl.formatToPlainString(I.t.FtVUqm, { targetLanguage: s }),
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
                    ((t = (0, I.getAvailableLocales)()),
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
                          label: I.intl.string(I.t.JC9BXn),
                          leadingAccessory: { type: "icon", icon: to.U },
                          icon: to.U,
                          action: r,
                          disabled: o,
                      })
                    : (0, l.jsx)(s.Dr, {
                          id: "translate",
                          label: o ? I.intl.string(I.t.SVKIdU) : I.intl.string(I.t["6epDlR"]),
                          action: () => i(),
                          leadingAccessory: { type: "icon", icon: to.U },
                          disabled: o,
                          children: d,
                      })
                : null;
        })(t$),
        nh = (0, eR.A)(t$, tY),
        nE = (0, eO.kn)(t$, tY, "MessageContextMenu")
            ? (0, eC.Lt)(t$.flags, F.pr7.IS_GUILD_OFFICIAL)
                ? (0, l.jsx)(s.Dr, {
                      id: "guild-official-unset",
                      action: () => {
                          eI.A.patchMessageGuildOfficial(tY.id, t$.id, !1);
                      },
                      label: I.intl.string(I.t["2km5Gf"]),
                      leadingAccessory: { type: "icon", icon: ev.$ },
                  })
                : (0, l.jsx)(s.Dr, {
                      id: "guild-official-set",
                      action: () => {
                          eI.A.patchMessageGuildOfficial(tY.id, t$.id, !0);
                      },
                      label: I.intl.string(I.t["lE/PG3"]),
                      leadingAccessory: { type: "icon", icon: eL.L },
                  })
            : null,
        nb = (0, K.A)(t$, tY),
        nx = (0, D.A)({
            commandType: d.kc.MESSAGE,
            commandTargetId: t$.id,
            channel: tY,
            guildId: void 0,
            onHeightUpdate: t4,
            showIcon: !0,
        }),
        n_ =
            t$.state !== F.cmJ.SEND_FAILED
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "resend",
                      label: I.intl.string(I.t.lXHojr),
                      leadingAccessory: { type: "icon", icon: te.f },
                      action: () => (0, tn.A)(tY, t$, void 0, tt.A.getOptions(t$.id)),
                  }),
        nj = (0, eN.A)(t$, tY),
        nS =
            null != (el = tY.getGuildId()) &&
            t$.type === F.lAJ.USER_JOIN &&
            ei.A.canWithPartialContext(F.xBc.MANAGE_GUILD, { guildId: el })
                ? (0, l.jsx)(s.Dr, {
                      id: "configure",
                      label: I.intl.string(I.t.NpHUi1),
                      leadingAccessory: { type: "icon", icon: ed.c },
                      icon: ed.c,
                      action: () => (0, eu.vc)(tY),
                  })
                : null,
        nI = (0, eg.A)(t$, tY),
        nM =
            ((eo = (0, tp.WU)(tY.getGuildId(), "message_context_menu")),
            (eU = (0, x.bG)([th.A], () => th.A.getConversationForMessage(tY.id, t$.id) ?? null, [tY.id, t$.id])),
            (tw = a.useCallback(() => {
                let e = tY.getGuildId();
                null != e && null != eU && (ty.A.openConversationsSection(), (0, tf.xI)(tY.id, e, eU));
            }, [tY, eU])),
            eo && null != eU
                ? (0, l.jsx)(s.Dr, {
                      id: "view-conversation",
                      label: "View Conversation",
                      leadingAccessory: { type: "icon", icon: tm.o },
                      icon: tm.o,
                      action: tw,
                  })
                : null),
        nD =
            ((tP = (0, x.bG)([ta.A], () => ta.A.isSpeakingMessage(tY.id, t$.id), [tY, t$])),
            "" === t$.content
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "tts",
                      label: tP ? I.intl.string(I.t.CJ30BP) : I.intl.string(I.t.yGLjXF),
                      leadingAccessory: { type: "icon", icon: ti._ },
                      icon: ti._,
                      action: () => (tP ? (0, tl.pr)() : (0, tl.kP)(tY, t$)),
                  })),
        nG =
            null == t$.reactions || 0 === t$.reactions.length || (t$.isPoll() && !(0, eX.Gh)(t$))
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "reactions",
                      label: I.intl.string(I.t.wikODq),
                      leadingAccessory: { type: "icon", icon: $.S },
                      icon: $.S,
                      action: () =>
                          (0, eB.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([n.e("89779"), n.e("98186")]).then(
                                  n.bind(n, 112753),
                              );
                              return (t) => (0, l.jsx)(e, { ...t, message: t$ });
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
            })(t$)).length
                ? null
                : (0, l.jsx)(l.Fragment, { children: tB.map((e) => M[e](t$)) }),
        nC = (function (e) {
            let { analyticsLocations: t } = (0, g.Ay)(),
                n = e.interactionMetadata?.authorizing_integration_owners[tE.b.USER_INSTALL],
                i = e.interactionMetadata?.authorizing_integration_owners[tE.b.GUILD_INSTALL],
                r = e.interactionMetadata?.user.id,
                o = (0, x.bG)([e3.default], () => e3.default.getUser(n)),
                c = (0, x.bG)([tT.A], () => tT.A.getGuild(i)),
                d = tG.A.getChannel(e.channel_id),
                u = d?.getGuildId(),
                A = (0, x.bG)([e3.default], () => e3.default.getUser(r));
            if (
                (a.useEffect(() => {
                    null == o && null != n && (0, tx.getUser)(n);
                }, [o, n]),
                !(0, tj._)(e))
            )
                return null;
            null == A && (A = new tD.A(e.interactionMetadata?.user));
            let m = null;
            if (null != c) {
                let t = (0, tM.Iv)(c, 18, !0);
                m = (0, l.jsx)(s.Dr, {
                    disabled: !0,
                    iconLeft: () => (0, l.jsx)(tS.Ay, { guild: c, size: tS.Ay.Sizes.MINI }),
                    leadingAccessory: null != t ? { type: "image", src: t } : void 0,
                    id: "integration-owner",
                    label: c.name,
                    subtext: I.intl.formatToPlainString(I.t.ShLXXB, { application: e.author.username }),
                });
            } else
                null != o &&
                    (m = (0, l.jsx)(s.Dr, {
                        action: () =>
                            (0, tI.openUserProfileModal)({
                                userId: o.id,
                                guildId: u,
                                channelId: e.channel_id,
                                sourceAnalyticsLocations: t,
                            }),
                        leadingAccessory: { type: "avatar", src: o.getAvatarURL(u, 18) },
                        id: "integration-owner",
                        label: o.username,
                        iconLeft: () => (0, l.jsx)(t_.A, { user: o, size: tb._3.SIZE_20 }),
                        subtext: I.intl.formatToPlainString(I.t.ShLXXB, { application: e.author.username }),
                    }));
            return (0, l.jsxs)(s.Dr, {
                id: "view-interaction-info",
                label: I.intl.string(I.t.Rjezbz),
                leadingAccessory: { type: "icon", icon: eh.m },
                children: [
                    m,
                    null != A
                        ? (0, l.jsx)(s.Dr, {
                              action: () =>
                                  (0, tI.openUserProfileModal)({
                                      userId: A.id,
                                      guildId: u,
                                      channelId: e.channel_id,
                                      sourceAnalyticsLocations: t,
                                  }),
                              leadingAccessory: { type: "avatar", src: A.getAvatarURL(u, 18) },
                              iconLeft: () => (0, l.jsx)(t_.A, { user: A, size: tb._3.SIZE_20 }),
                              id: "interaction-user",
                              label: A.username,
                              subtext: I.intl.string(I.t["04gxNg"]),
                          })
                        : null,
                ],
            });
        })(t$),
        nv = (function (e, t) {
            let { reducedMotion: n } = a.useContext(J.C),
                i = (0, et.Id)(t),
                r = (0, x.bG)([ei.A], () => ei.A.can(F.xBc.MANAGE_MESSAGES, t) && i, [t, i]),
                o = e.reactions.reduce(
                    (e, t) =>
                        t.count_details?.vote != null ||
                        null != e.find((e) => (null != e.id && e.id === t.emoji.id) || e.name === t.emoji.name)
                            ? e
                            : [...e, t.emoji],
                    [],
                );
            return !r || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, eX.Gh)(e))
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "remove-emoji-reactions",
                      label: I.intl.string(I.t["zx/e4P"]),
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
                                                title: I.intl.string(I.t["73GqTz"]),
                                                body: I.intl.string(I.t.dmy5bn),
                                                confirmText: I.intl.string(I.t.p89ACt),
                                                confirmVariant: "critical-primary",
                                                cancelText: I.intl.string(I.t.gm1Vej),
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
        })(t$, tY),
        nL =
            ((tX = (0, et.Id)(tY)),
            !(0, x.bG)([ei.A], () => ei.A.can(F.xBc.MANAGE_MESSAGES, tY) && tX, [tY, tX]) ||
            null == t$.reactions ||
            0 === t$.reactions.length ||
            (t$.isPoll() && !(0, eX.Gh)(t$))
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "remove-reactions",
                      label: I.intl.string(I.t.ZbtGBm),
                      leadingAccessory: { type: "icon", icon: eF.t },
                      action: function (e) {
                          e.shiftKey
                              ? (0, Q.Go)(tY.id, t$.id)
                              : eq.A.show({
                                    title: I.intl.string(I.t.iz3vYX),
                                    body: I.intl.string(I.t.VpjOCo),
                                    confirmText: I.intl.string(I.t.p89ACt),
                                    confirmVariant: "critical-primary",
                                    cancelText: I.intl.string(I.t.gm1Vej),
                                    onConfirm: () => {
                                        (0, Q.Go)(tY.id, t$.id);
                                    },
                                });
                      },
                      color: "danger",
                  })),
        nO = (0, ef.A)(t$, tY),
        nN =
            ((tF = (0, x.bG)([e6.A], () => e6.A.getGuildId())),
            (tq = (0, e1.Qo)(tF)),
            (0, e5.ul)(t$)
                ? (0, l.jsx)(s.Dr, {
                      id: "report",
                      label: tq ? I.intl.string(I.t.n5EBAJ) : I.intl.string(I.t.GwbdGe),
                      action: () => (0, e8.V2)(t$, "web_message_context_menu"),
                      icon: tq ? eZ.p : e$.i,
                      leadingAccessory: { type: "icon", icon: tq ? eZ.p : e$.i },
                      color: "danger",
                  })
                : null),
        nR =
            ((tz = (0, x.bG)([eQ.Ay], () => eQ.Ay.get("iar_testing"))),
            (tH = (0, x.bG)([e3.default], () => e3.default.getCurrentUser())),
            (0, e5.ul)(t$) && null != tH && tH.isStaff() && tz
                ? (0, l.jsx)(s.Dr, {
                      id: "staff-test-message-report",
                      label: "[STAFF] Test Message Report",
                      action: () => (0, e8.Rj)(t$, "web_message_context_menu"),
                      icon: e$.i,
                      leadingAccessory: { type: "icon", icon: e$.i },
                      color: "danger",
                  })
                : null),
        nU = (function (e) {
            let t = (0, x.bG)([e7.A], () => e7.A.hasReportedMessage(e.channel_id, e.id)),
                n = (0, e2.KB)(e),
                i = n ? [eJ.M.REPORT_TO_MOD_NEW_TAG] : [],
                [a, r] = (0, e0.kn)(i);
            return ((0, eY.l0)(() => {
                n && r(e9.i.AUTO_DISMISS);
            }),
            n)
                ? (0, l.jsx)(s.Dr, {
                      id: "report-to-mod",
                      label: t ? I.intl.string(e4.default["8wsdng"]) : I.intl.string(e4.default["1D+vqy"]),
                      action: () => {
                          r(e9.i.USER_DISMISS), (0, e8.dy)(e);
                      },
                      icon: e$.i,
                      disabled: t,
                      leadingAccessory: { type: "icon", icon: e$.i },
                      badge: a === eJ.M.REPORT_TO_MOD_NEW_TAG ? "new" : void 0,
                      color: "danger",
                  })
                : null;
        })(t$),
        nk = (0, eD.A)({ type: t8, id: t7, name: t2 }),
        nw = (function (e, t) {
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
                        X.A.open(t, F.BEX.GUILD_AUTOMOD),
                        setTimeout(() => {
                            d(t, H, { triggerMetadata: { keywordFilter: [e], regexPatterns: [], allowList: [] } });
                        }, 400)));
            }
            async function j(t) {
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
                        ? (0, T.P0)((0, C.o)(I.intl.string(I.t.wH6L0r), v.Ck.FAILURE))
                        : (0, T.P0)((0, C.o)(I.intl.string(I.t["0rdYm2"]), v.Ck.SUCCESS));
            }
            let S = (0, l.jsx)(s.Dr, { id: "automod-rules-loading", label: I.intl.string(I.t.ZTNur7) });
            return (
                A ||
                    (S = (0, l.jsxs)(l.Fragment, {
                        children: [
                            h &&
                                (0, l.jsx)(s.Dr, {
                                    id: "add-first-rule",
                                    label: I.intl.string(I.t.f72Zqb),
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
                                        action: () => j(e),
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
                                            label: I.intl.string(I.t["0K5jDE"]),
                                            action: _,
                                            disabled: i,
                                        }),
                                    ],
                                }),
                        ],
                    })),
                (0, l.jsx)(s.Dr, {
                    id: "guild-automod-add-selection",
                    label: I.intl.formatToPlainString(I.t.Kkjv1m, { keywordCount: x }),
                    leadingAccessory: { type: "icon", icon: O.l },
                    onFocus: function () {
                        u || (g(!0), m());
                    },
                    children: S,
                })
            );
        })(t0, tY.getGuildId()),
        nP = (0, p.A)(t3, t$, {
            shouldHideMediaOptions: nl,
            contentType: tQ?.contentType,
            originalContentType: tQ?.originalContentType,
        }),
        nB =
            ((tK = (0, tL.Fg)(t$)),
            (tV = null != tQ && (0, tL.qo)({ type: tv.D.GenericMedia, media: tQ }, tK)),
            null != tQ && tV
                ? (0, l.jsx)(
                      s.Dr,
                      {
                          id: "report-image-false-positive",
                          label: I.intl.string(I.t.ZH7P2h),
                          action: function () {
                              null != tQ &&
                                  (0, eB.openModalLazy)(async () => {
                                      let { default: e } = await n(679276);
                                      return (t) =>
                                          (0, l.jsx)(e, {
                                              channelId: t$.channel_id,
                                              messageId: t$.id,
                                              mediaItemUrl: tQ.url,
                                              ...t,
                                          });
                                  });
                          },
                          leadingAccessory: { type: "icon", icon: tC.D },
                          icon: tC.D,
                      },
                      "report-image-false-positive",
                  )
                : null),
        nX = (0, eC.Lt)(t$.flags, F.pr7.IS_VOICE_MESSAGE)
            ? (0, l.jsx)(s.Dr, {
                  id: "save-voice-message-audio",
                  label: I.intl.string(I.t.vbAEaA),
                  leadingAccessory: { type: "icon", icon: tO.s },
                  icon: tO.s,
                  action: () => {
                      let e = (0, tN.XW)(t$.attachments[0].url);
                      (0, tR.h)({ href: e });
                  },
              })
            : null,
        nF =
            ((t = { shouldHideMediaOptions: nl }),
            (tW = tQ?.url ?? ""),
            (tJ = (0, x.bG)([tU.Ay], () => tU.Ay.isVideoStatsEnabled(tW))),
            (tZ = a.useCallback(() => {
                "" !== tW && (0, tU.FM)(tW);
            }, [tW])),
            null != tQ && (0, tk.XB)(tQ.contentType) && t?.shouldHideMediaOptions !== !0
                ? (0, l.jsx)(s.sL, {
                      id: "video-stats-for-nerds",
                      label: "Stats for Nerds",
                      leadingAccessory: { type: "icon", icon: eh.m },
                      checked: tJ,
                      action: tZ,
                  })
                : null),
        nq = (0, f.A)(t1 ?? t6, t5, t$, { shouldHideMediaOptions: nl }),
        nz = (0, A.A)({ id: t$.id, label: I.intl.string(I.t.zBoHlf), shiftId: `${t$.channel_id}-${t$.id}` }),
        nH = (function (e) {
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
                    null != r && (0, ej.A)(r);
                }, [r]),
                y = "sticker" === i;
            if (!o || !ep.p5 || !c || ("emoji" !== i && !y) || null == n) return null;
            let p = y ? I.intl.string(I.t.SJ3249) : I.intl.string(I.t.Ap2oVy),
                f = y ? I.intl.string(I.t.B1ubHx) : I.intl.string(I.t.cIoudn),
                h = y ? I.intl.string(I.t["qAEi+C"]) : I.intl.string(I.t.gDAM2n);
            return (0, l.jsxs)(s.Dr, {
                id: "message-details",
                label: I.intl.string(I.t.IqqJNI),
                leadingAccessory: { type: "icon", icon: eh.m },
                children: [
                    (0, l.jsx)(s.Dr, {
                        id: "copy-message-id",
                        label: I.intl.string(I.t.zBoHlf),
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
                                    leadingAccessory: { type: "icon", icon: eb.q },
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
        })({ messageId: t$.id, itemId: t7, type: t8, imageSrc: t6 }),
        nK = (0, l.jsx)(s.rX, { children: nH ?? nz }),
        nV = (0, l.jsxs)(s.rX, { children: [nk, nw, nP, nB, nX, nF] });
    return (0, l.jsxs)(o.W, {
        "data-menu-migrated": !0,
        navId: nn,
        onClose: nt,
        "aria-label": ni,
        onSelect: nr,
        children: [
            (0, l.jsx)(s.rX, { children: nc }),
            (0, l.jsx)(s.rX, { children: nd }),
            (0, l.jsxs)(s.rX, { children: ["" === t0 ? no : null, nu, nG] }),
            (0, l.jsxs)(s.rX, { children: [ng, nA, nm, ny] }),
            (0, l.jsxs)(s.rX, { children: [np, nf, nh, nE, nb, nx, n_, nj, nS, nI, nM, nD, nT, nC] }),
            (0, l.jsxs)(s.rX, { children: [nv, nL, nO, t9 && nN, t9 && nR, nU] }),
            ns
                ? (0, l.jsxs)(l.Fragment, { children: [nK, nV, null == nH && (0, l.jsx)(s.rX, { children: nq })] })
                : (0, l.jsxs)(l.Fragment, { children: [nV, (0, l.jsx)(s.rX, { children: nq }), nK] }),
        ],
    });
}
