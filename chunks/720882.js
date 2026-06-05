n.d(t, { c: () => tk, default: () => tU });
var i,
    l = n(627968),
    a = n(64700),
    s = n(621466),
    r = n(477782),
    o = n(980707),
    d = n(442433),
    c = n(155718),
    u = n(793574),
    g = n(688810),
    A = n(50268),
    m = n(486503),
    f = n(373963),
    p = n(115184),
    y = n(777933),
    h = n(826308),
    E = n(337358),
    _ = n(962514);
n(321073);
var S = n(17928),
    x = n(495544),
    b = (((i = {})[(i.END_EARLY = 0)] = "END_EARLY"), i);
let j = [];
var I = n(375708);
let M = {
    [b.END_EARLY]: (e) =>
        (0, l.jsx)(r.Dr, {
            id: "end-poll-early",
            label: I.intl.string(I.t.grdwwt),
            icon: E.O,
            leadingAccessory: { type: "icon", icon: E.O },
            action: () => {
                _.A.endPollEarly({ channelId: e.channel_id, messageId: e.id });
            },
            iconProps: { color: "currentColor" },
        }),
};
var D = n(646911),
    T = n(174459),
    G = n(691540),
    v = n(857250),
    C = n(97483),
    L = n(834730),
    O = n(231483),
    N = n(627794),
    R = n(928348),
    w = n(53594),
    U = n(979816),
    k = n(268749),
    P = n(239705),
    B = n(264349),
    X = n(468689),
    F = n(652215),
    H = n(243277),
    q = n(365863);
let z = H.uh.KEYWORD;
var K = n(880457),
    V = n(503698),
    J = n.n(V),
    W = n(844222),
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
    es = n(690521),
    er = n(307731),
    eo = n(666833);
function ed(e) {
    let { emoji: t, reducedMotionEnabled: n, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: J()(i, eo.Z),
        src:
            null != t.id
                ? el.Ay.getEmojiURL({ id: t.id, animated: t.animated && (!n || a), size: 18 })
                : es.Ay.getURL(t.optionallyDiverseSequence ?? ""),
        alt: "",
    });
}
var ec = n(290136),
    eu = n(519222),
    eg = n(345254),
    eA = n(624479),
    em = n(814890),
    ef = n(383233),
    ep = n(957565),
    ey = n(483768),
    eh = n(885574),
    eE = n(473935),
    e_ = n(173936),
    eS = n(93688),
    ex = n(509434),
    eb = n(975807),
    ej = n(22231),
    eI = n(720149),
    eM = n(697470),
    eD = n(253925),
    eT = n(843626),
    eG = n(427209);
n(938796);
var ev = n(665260),
    eC = n(563119),
    eL = n(581925),
    eO = n(521427),
    eN = n(20883),
    eR = n(979766),
    ew = n(990078),
    eU = n(827319);
let ek = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];
function eP(e) {
    let { emoji: t, isFocused: n } = e,
        { animated: i, src: a, surrogates: s } = t;
    return (
        null == a && null != t.id
            ? (a = el.Ay.getEmojiURL({ id: t.id, animated: !!i, size: 20 }))
            : null == a && (a = es.Ay.getURL(s)),
        (0, l.jsx)(ew.m, {
            text: (0, es.N)(t),
            hideOnClick: !0,
            spacing: 16,
            forceOpen: n,
            children: (0, l.jsx)("div", {
                "aria-label": I.intl.formatToPlainString(I.t["/iYSo6"], { emojiName: t.name }),
                className: J()(eU.x6, { [eU.in]: n }),
                children:
                    null == a || "" === a.trim()
                        ? (0, l.jsx)("span", { className: J()("emoji", "emoji-text", eU.Kk), children: s })
                        : (0, l.jsx)("img", { className: eU.Kk, src: a, alt: "" }),
            }),
        })
    );
}
var eB = n(192308),
    eX = n(969632),
    eF = n(997571),
    eH = n(157559),
    eq = n(769297);
function ez(e) {
    let { emoji: t, reducedMotionEnabled: n, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: i,
        src:
            null != t.id
                ? el.Ay.getEmojiURL({ id: t.id, animated: t.animated && (!n || a), size: 18 })
                : es.Ay.getURL(t.name ?? ""),
        alt: "",
    });
}
var eK = n(110384),
    eV = n(517997),
    eJ = n(554146),
    eW = n(111159),
    eZ = n(138134),
    e$ = n(964486),
    eY = n(865116),
    eQ = n(131607),
    e0 = n(928658),
    e7 = n(400528),
    e8 = n(892340),
    e1 = n(715757),
    e2 = n(967198),
    e6 = n(287809),
    e9 = n(628691),
    e5 = n(49999),
    e4 = n(221314),
    e3 = n(663417),
    te = n(965407),
    tt = n(249700),
    tn = n(556112),
    ti = n(54570),
    tl = n(8880),
    ta = n(163328),
    ts = n(636537),
    tr = n(37646),
    to = n(228366),
    td = n(147087),
    tc = n(773669),
    tu = n(535456);
let tg = new Map();
var tA = n(534890),
    tm = n(604681),
    tf = n(828488),
    tp = n(761259),
    ty = n(958720),
    th = n(485845),
    tE = n(778712),
    t_ = n(803306),
    tS = n(966327),
    tx = n(597929),
    tb = n(548118),
    tj = n(975732),
    tI = n(260509),
    tM = n(889227),
    tD = n(734057),
    tT = n(71393),
    tG = n(87221),
    tv = n(930125),
    tC = n(282108),
    tL = n(32880),
    tO = n(803316),
    tN = n(123917),
    tR = n(953584),
    tw = n(59318);
function tU(e) {
    let t,
        n,
        i,
        a,
        {
            channel: r,
            message: o,
            target: c,
            mediaItem: A,
            shouldHideMediaOptions: m,
            onSelect: f,
            onHeightUpdate: p,
        } = e,
        { analyticsLocations: y } = (0, g.Ay)([u.A.MESSAGE_CONTEXT_MENU]),
        h = c,
        E = c.getAttribute("data-type"),
        _ = c.getAttribute("data-id"),
        S = c.getAttribute("data-name");
    if (null != A) n = t = i = A.url;
    else
        for (; (0, s.vq)(h); )
            (0, s.vq)(h, HTMLImageElement) && null != h.src && (n = h.src),
                (0, s.vq)(h, HTMLAnchorElement) &&
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
    let x = document.getSelection()?.toString() ?? "";
    return (0, l.jsx)(g.f5, {
        value: y,
        children: tk({
            message: o,
            channel: r,
            mediaItem: A,
            textSelection: x,
            favoriteableType: E,
            favoriteableId: _,
            favoriteableName: S,
            itemHref: t,
            itemSrc: n,
            itemSafeSrc: i,
            itemTextContent: a,
            canReport: !0,
            onHeightUpdate: p,
            onSelect: f,
            onClose: d.Z_,
            navId: "message",
            ariaLabel: I.intl.string(I.t.ChPNkN),
            shouldHideMediaOptions: m,
        }),
    });
}
function tk(e) {
    var t;
    let i,
        s,
        u,
        E,
        _,
        b,
        V,
        J,
        el,
        eo,
        ew,
        tU,
        tk,
        tP,
        tB,
        tX,
        tF,
        tH,
        tq,
        tz,
        tK,
        tV,
        tJ,
        tW,
        {
            message: tZ,
            channel: t$,
            mediaItem: tY,
            textSelection: tQ,
            favoriteableType: t0,
            favoriteableId: t7,
            favoriteableName: t8,
            itemHref: t1,
            itemSrc: t2,
            itemSafeSrc: t6,
            itemTextContent: t9,
            canReport: t5,
            onHeightUpdate: t4,
            onSelect: t3,
            onClose: ne,
            navId: nt,
            ariaLabel: nn,
            shouldHideMediaOptions: ni = !1,
        } = e,
        nl = a.useRef(null);
    a.useEffect(() => {
        nl.current = Date.now();
    }, []),
        a.useEffect(
            () => () => {
                if (null != nl.current) {
                    let e = Date.now() - nl.current;
                    T.default.track(F.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: e,
                        channel_id: t$.id,
                        guild_id: t$.getGuildId() ?? void 0,
                        message_id: tZ.id,
                    });
                }
            },
            [t$, tZ],
        );
    let na = a.useCallback(() => {
            if (null != nl.current) {
                let e = Date.now() - nl.current;
                T.default.track(F.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: e,
                    channel_id: t$.id,
                    guild_id: t$.getGuildId() ?? void 0,
                    message_id: tZ.id,
                });
            }
            t3?.();
        }, [t3, t$, tZ]),
        { tidaWebformEnabled: ns } = m.A.useExperiment({ location: "MessageContextMenu" }, { autoTrackExposure: !1 }),
        nr =
            ((i = (0, Y.D6)(t$.guild_id).filter(
                (e) =>
                    !(e.useSpriteSheet && ek.indexOf(e.uniqueName ?? "") >= 0) &&
                    !es.Ay.isEmojiPremiumLocked({ emoji: e, channel: t$, intention: er.EmojiIntention.REACTION }),
            )).length > 4 && (i.length = 4),
            (s = en.jW.useSetting()),
            (u = (0, et.Id)(t$)),
            (0, S.bG)([ei.A], () => s && u && (t$.isPrivate() || ei.A.can(F.xBc.ADD_REACTIONS, t$)), [t$, u, s]) &&
            i.length > 0
                ? (0, l.jsx)(r.rX, {
                      className: eU.iE,
                      children: i.map((e, t) =>
                          (0, l.jsx)(
                              r.Dr,
                              {
                                  id: `quickreact-${e.id ?? t}`,
                                  render: (t) => {
                                      let { isFocused: n } = t;
                                      return (0, l.jsx)(eP, { emoji: e, isFocused: n });
                                  },
                                  action: () => {
                                      (0, Q.BB)(t$.id, tZ.id, (0, ee.jq)(e), Q.qN.MESSAGE_CONTEXT_MENU);
                                  },
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              t,
                          ),
                      ),
                  })
                : null),
        no = (0, f.A)(tQ),
        nd = (0, h.A)(tQ),
        nc = (function (e, t) {
            let { reducedMotion: n } = a.useContext(W.C),
                i = (0, et.Id)(t),
                s = (0, S.bG)([ei.A], () => (t.isPrivate() || ei.A.can(F.xBc.ADD_REACTIONS, t)) && i, [t, i]),
                o = (0, Y.D6)(t.getGuildId());
            if (!en.jW.getSetting() || !s) return null;
            let d = o
                .filter(
                    (e) =>
                        !es.Ay.isEmojiFilteredOrLocked({ emoji: e, channel: t, intention: er.EmojiIntention.REACTION }),
                )
                .slice(0, 12)
                .map((i, a) =>
                    (0, l.jsx)(
                        r.Dr,
                        {
                            color: "default",
                            id: i.id ?? i.optionallyDiverseSequence ?? i.name,
                            label: `:${i.name}:`,
                            icon: (e) => (0, l.jsx)(ed, { ...e, reducedMotionEnabled: n.enabled, emoji: i }),
                            leadingAccessory: {
                                type: "emoji",
                                emojiId: i.id,
                                src: null == i.id ? es.Ay.getURL(i.optionallyDiverseSequence ?? "") : void 0,
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
            return (0, l.jsx)(r.Dr, {
                id: "add-reaction",
                label: I.intl.string(I.t.lfIHs4),
                leadingAccessory: { type: "icon", icon: Z.n },
                action: () => {
                    ea._.dispatchKeyed(F.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                },
                color: "default",
                children: (0, l.jsxs)(l.Fragment, {
                    children: [
                        d,
                        (0, l.jsx)(r.bX, {}),
                        (0, l.jsx)(r.Dr, {
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
        })(tZ, t$),
        nu =
            ((E = (0, S.bG)([x.default], () => x.default.getId())),
            (_ = (0, et.Id)(t$)),
            (b = (0, et.s5)(t$)),
            (0, eM.A)(tZ, E) && _ && !b
                ? (0, l.jsx)(r.Dr, {
                      id: "edit",
                      label: I.intl.string(I.t.fsBWmS),
                      action: () => eI.A.startEditMessageRecord(t$.id, tZ),
                      leadingAccessory: { type: "icon", icon: ej.R },
                      icon: ej.R,
                  })
                : null),
        ng = (0, eV.u)(t$, tZ)
            ? (0, l.jsx)(r.Dr, {
                  id: "reply",
                  label: I.intl.string(I.t["5IEsGx"]),
                  leadingAccessory: { type: "icon", icon: eK.W },
                  icon: eK.W,
                  action: (e) => {
                      (0, eu.$b)(t$, tZ, e);
                  },
              })
            : null,
        nA = (0, eT.m)(tZ)
            ? (0, l.jsx)(r.Dr, {
                  id: "forward",
                  label: I.intl.string(I.t.I3ltXO),
                  leadingAccessory: { type: "icon", icon: eG.A },
                  icon: eG.A,
                  action: () => {
                      (0, eu.Z4)(t$, tZ);
                  },
              })
            : null,
        nm = (0, et.n)(t$, tZ)
            ? (0, l.jsx)(r.Dr, {
                  id: "thread",
                  label: I.intl.string(I.t.rBIGBL),
                  leadingAccessory: { type: "icon", icon: ta.y },
                  icon: ta.y,
                  action: () => {
                      (0, eu.Nw)(t$, tZ);
                  },
              })
            : null,
        nf = (function (e) {
            if (!ep.p5) return null;
            let t = e.getContentMessage(),
                n = (0, ef._c)(t) ? (0, em.kC)(t.components) : t.content;
            return null == n || 0 === n.length
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "copy-text",
                      label: I.intl.string(I.t.JrGD7E),
                      leadingAccessory: { type: "icon", icon: eA.T },
                      icon: eA.T,
                      action: () => {
                          (0, ep.C)(n);
                      },
                  });
        })(tZ),
        np = (function (e) {
            let t,
                {
                    handleTranslate: i,
                    handleRevertTranslation: s,
                    isTranslating: o,
                    isTranslated: d,
                } = (function (e) {
                    let [t, n] = a.useState(!1),
                        i = (0, S.bG)([tc.default], () => tc.default.locale);
                    return {
                        handleTranslate: a.useCallback(
                            async (l, a) => {
                                if (t) return;
                                let s = l ?? i;
                                n(!0);
                                let r = a ?? (0, I.getAvailableLocales)().find((e) => e.value === s)?.name ?? s;
                                tg.has(e.id) || tg.set(e.id, e.content),
                                    (0, G.P0)(
                                        (0, v.o)(
                                            I.intl.formatToPlainString(I.t.Znl8Z8, { targetLanguage: r }),
                                            C.Ck.AI,
                                        ),
                                    );
                                try {
                                    let t = await ts.Bo.post({
                                        url: F.Rsh.AI_TRANSLATE,
                                        body: { content: e.content, locale: s },
                                        rejectWithError: !1,
                                    });
                                    t.ok &&
                                        t.body &&
                                        (to.h.dispatch({
                                            type: "MESSAGE_UPDATE",
                                            message: { id: e.id, channel_id: e.channel_id, content: t.body.content },
                                        }),
                                        (0, G.P0)(
                                            (0, v.o)(
                                                I.intl.formatToPlainString(I.t.FtVUqm, { targetLanguage: r }),
                                                C.Ck.SUCCESS,
                                            ),
                                        ));
                                } finally {
                                    n(!1);
                                }
                            },
                            [e, t, i],
                        ),
                        handleRevertTranslation: a.useCallback(() => {
                            let t = tg.get(e.id);
                            null != t &&
                                (to.h.dispatch({
                                    type: "MESSAGE_UPDATE",
                                    message: { id: e.id, channel_id: e.channel_id, content: t },
                                }),
                                tg.delete(e.id));
                        }, [e.id, e.channel_id]),
                        isTranslating: t,
                        isTranslated: tg.has(e.id),
                    };
                })(e),
                c =
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
                                    r.Dr,
                                    {
                                        id: `translate-${e.value}`,
                                        label: e.name,
                                        icon: () => (0, l.jsx)("img", { alt: "", src: t, className: tu.M }),
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
                ? d
                    ? (0, l.jsx)(r.Dr, {
                          id: "revert-translation",
                          label: I.intl.string(I.t.JC9BXn),
                          leadingAccessory: { type: "icon", icon: tr.U },
                          icon: tr.U,
                          action: s,
                          disabled: o,
                      })
                    : (0, l.jsx)(r.Dr, {
                          id: "translate",
                          label: o ? I.intl.string(I.t.SVKIdU) : I.intl.string(I.t["6epDlR"]),
                          action: () => i(),
                          leadingAccessory: { type: "icon", icon: tr.U },
                          disabled: o,
                          children: c,
                      })
                : null;
        })(tZ),
        ny = (0, eR.A)(tZ, t$),
        nh =
            ((V = (0, eO.Vc)(t$.guild_id, t$, "MessageContextMenu")),
            (J = (0, ev.Lt)(tZ.flags, F.pr7.IS_GUILD_OFFICIAL)),
            V
                ? J
                    ? (0, l.jsx)(r.Dr, {
                          id: "guild-official-unset",
                          action: () => {
                              eI.A.patchMessageGuildOfficial(t$.id, tZ.id, !1);
                          },
                          label: I.intl.string(I.t["2km5Gf"]),
                          leadingAccessory: { type: "icon", icon: eC.$ },
                      })
                    : (0, l.jsx)(r.Dr, {
                          id: "guild-official-set",
                          action: () => {
                              eI.A.patchMessageGuildOfficial(t$.id, tZ.id, !0);
                          },
                          label: I.intl.string(I.t["lE/PG3"]),
                          leadingAccessory: { type: "icon", icon: eL.L },
                      })
                : null),
        nE = (0, K.A)(tZ),
        n_ = (0, D.A)({
            commandType: c.kc.MESSAGE,
            commandTargetId: tZ.id,
            channel: t$,
            guildId: void 0,
            onHeightUpdate: t4,
            showIcon: !0,
        }),
        nS =
            tZ.state !== F.cmJ.SEND_FAILED
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "resend",
                      label: I.intl.string(I.t.lXHojr),
                      leadingAccessory: { type: "icon", icon: e3.f },
                      action: () => (0, tt.A)(t$, tZ, void 0, te.A.getOptions(tZ.id)),
                  }),
        nx = (0, eN.A)(tZ, t$),
        nb =
            null != (el = t$.getGuildId()) &&
            tZ.type === F.lAJ.USER_JOIN &&
            ei.A.canWithPartialContext(F.xBc.MANAGE_GUILD, { guildId: el })
                ? (0, l.jsx)(r.Dr, {
                      id: "configure",
                      label: I.intl.string(I.t.NpHUi1),
                      leadingAccessory: { type: "icon", icon: ec.c },
                      icon: ec.c,
                      action: () => (0, eu.vc)(t$),
                  })
                : null,
        nj = (0, eg.A)(tZ, t$),
        nI =
            ((eo = (0, tf.WU)(t$.getGuildId(), "message_context_menu")),
            (ew = (0, S.bG)([ty.A], () => ty.A.getConversationForMessage(t$.id, tZ.id) ?? null, [t$.id, tZ.id])),
            (tU = a.useCallback(() => {
                let e = t$.getGuildId();
                null != e && null != ew && (tm.A.openConversationsSection(), (0, tp.xI)(t$.id, e, ew));
            }, [t$, ew])),
            eo && null != ew
                ? (0, l.jsx)(r.Dr, {
                      id: "view-conversation",
                      label: "View Conversation",
                      leadingAccessory: { type: "icon", icon: tA.o },
                      icon: tA.o,
                      action: tU,
                  })
                : null),
        nM =
            ((tk = (0, S.bG)([tl.A], () => tl.A.isSpeakingMessage(t$.id, tZ.id), [t$, tZ])),
            "" === tZ.content
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "tts",
                      label: tk ? I.intl.string(I.t.CJ30BP) : I.intl.string(I.t.yGLjXF),
                      leadingAccessory: { type: "icon", icon: tn._ },
                      icon: tn._,
                      action: () => (tk ? (0, ti.pr)() : (0, ti.kP)(t$, tZ)),
                  })),
        nD =
            null == tZ.reactions || 0 === tZ.reactions.length || (tZ.isPoll() && !(0, eX.Gh)(tZ))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "reactions",
                      label: I.intl.string(I.t.wikODq),
                      leadingAccessory: { type: "icon", icon: $.S },
                      icon: $.S,
                      action: () =>
                          (0, eB.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([n.e("77067"), n.e("98186")]).then(
                                  n.bind(n, 112753),
                              );
                              return (t) => (0, l.jsx)(e, { ...t, message: tZ });
                          }),
                  }),
        nT =
            0 ===
            (tP = (function (e) {
                let t = (0, S.bG)([x.default], () => x.default.getId()),
                    { poll: n } = e;
                if (!e.isPoll() || null == n) return j;
                let i = [];
                return n.expiry.isSameOrBefore(Date.now()) || e.author.id !== t || i.push(0), i;
            })(tZ)).length
                ? null
                : (0, l.jsx)(l.Fragment, { children: tP.map((e) => M[e](tZ)) }),
        nG = (function (e) {
            let { analyticsLocations: t } = (0, g.Ay)(),
                n = e.interactionMetadata?.authorizing_integration_owners[th.b.USER_INSTALL],
                i = e.interactionMetadata?.authorizing_integration_owners[th.b.GUILD_INSTALL],
                s = e.interactionMetadata?.user.id,
                o = (0, S.bG)([e6.default], () => e6.default.getUser(n)),
                d = (0, S.bG)([tT.A], () => tT.A.getGuild(i)),
                c = tD.A.getChannel(e.channel_id),
                u = c?.getGuildId(),
                A = (0, S.bG)([e6.default], () => e6.default.getUser(s));
            if (
                (a.useEffect(() => {
                    null == o && null != n && (0, t_.wz)(n);
                }, [o, n]),
                !(0, tx._)(e))
            )
                return null;
            null == A && (A = new tM.A(e.interactionMetadata?.user));
            let m = null;
            if (null != d) {
                let t = (0, tI.Iv)(d, 18, !0);
                m = (0, l.jsx)(r.Dr, {
                    disabled: !0,
                    iconLeft: () => (0, l.jsx)(tb.Ay, { guild: d, size: tb.Ay.Sizes.MINI }),
                    leadingAccessory: null != t ? { type: "image", src: t } : void 0,
                    id: "integration-owner",
                    label: d.name,
                    subtext: I.intl.formatToPlainString(I.t.ShLXXB, { application: e.author.username }),
                });
            } else
                null != o &&
                    (m = (0, l.jsx)(r.Dr, {
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
                        iconLeft: () => (0, l.jsx)(tS.A, { user: o, size: tE._3.SIZE_20 }),
                        subtext: I.intl.formatToPlainString(I.t.ShLXXB, { application: e.author.username }),
                    }));
            return (0, l.jsxs)(r.Dr, {
                id: "view-interaction-info",
                label: I.intl.string(I.t.Rjezbz),
                leadingAccessory: { type: "icon", icon: eh.m },
                children: [
                    m,
                    null != A
                        ? (0, l.jsx)(r.Dr, {
                              action: () =>
                                  (0, tj.openUserProfileModal)({
                                      userId: A.id,
                                      guildId: u,
                                      channelId: e.channel_id,
                                      sourceAnalyticsLocations: t,
                                  }),
                              leadingAccessory: { type: "avatar", src: A.getAvatarURL(u, 18) },
                              iconLeft: () => (0, l.jsx)(tS.A, { user: A, size: tE._3.SIZE_20 }),
                              id: "interaction-user",
                              label: A.username,
                              subtext: I.intl.string(I.t["04gxNg"]),
                          })
                        : null,
                ],
            });
        })(tZ),
        nv = (function (e, t) {
            let { reducedMotion: n } = a.useContext(W.C),
                i = (0, et.Id)(t),
                s = (0, S.bG)([ei.A], () => ei.A.can(F.xBc.MANAGE_MESSAGES, t) && i, [t, i]),
                o = e.reactions.reduce(
                    (e, t) =>
                        t.count_details?.vote != null ||
                        null != e.find((e) => (null != e.id && e.id === t.emoji.id) || e.name === t.emoji.name)
                            ? e
                            : [...e, t.emoji],
                    [],
                );
            return !s || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, eX.Gh)(e))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "remove-emoji-reactions",
                      label: I.intl.string(I.t["zx/e4P"]),
                      leadingAccessory: { type: "icon", icon: eq.F },
                      color: "danger",
                      children: o.map((i) =>
                          (0, l.jsx)(
                              r.Dr,
                              {
                                  id: `remove-emoji-reactions-${i.name ?? i.id}`,
                                  label: (0, ee.b3)(i),
                                  action: (n) => {
                                      n.shiftKey
                                          ? (0, Q.Jf)(t.id, e.id, i)
                                          : eH.A.show({
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
                                      src: null == i.id ? es.Ay.getURL(i.name ?? "") : void 0,
                                      animated: i.animated,
                                  },
                                  icon: (e) => (0, l.jsx)(ez, { ...e, reducedMotionEnabled: n.enabled, emoji: i }),
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              i.name ?? i.id,
                          ),
                      ),
                  });
        })(tZ, t$),
        nC =
            ((tB = (0, et.Id)(t$)),
            !(0, S.bG)([ei.A], () => ei.A.can(F.xBc.MANAGE_MESSAGES, t$) && tB, [t$, tB]) ||
            null == tZ.reactions ||
            0 === tZ.reactions.length ||
            (tZ.isPoll() && !(0, eX.Gh)(tZ))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "remove-reactions",
                      label: I.intl.string(I.t.ZbtGBm),
                      leadingAccessory: { type: "icon", icon: eF.t },
                      action: function (e) {
                          e.shiftKey
                              ? (0, Q.Go)(t$.id, tZ.id)
                              : eH.A.show({
                                    title: I.intl.string(I.t.iz3vYX),
                                    body: I.intl.string(I.t.VpjOCo),
                                    confirmText: I.intl.string(I.t.p89ACt),
                                    confirmVariant: "critical-primary",
                                    cancelText: I.intl.string(I.t.gm1Vej),
                                    onConfirm: () => {
                                        (0, Q.Go)(t$.id, tZ.id);
                                    },
                                });
                      },
                      color: "danger",
                  })),
        nL = (0, ey.A)(tZ, t$),
        nO =
            ((tX = (0, S.bG)([e2.A], () => e2.A.getGuildId())),
            (tF = (0, e1.Qo)(tX)),
            (0, e9.ul)(tZ)
                ? (0, l.jsx)(r.Dr, {
                      id: "report",
                      label: tF ? I.intl.string(I.t.n5EBAJ) : I.intl.string(I.t.GwbdGe),
                      action: () => (0, e0.V2)(tZ, "web_message_context_menu"),
                      icon: tF ? eW.p : eZ.i,
                      leadingAccessory: { type: "icon", icon: tF ? eW.p : eZ.i },
                      color: "danger",
                  })
                : null),
        nN =
            ((tH = (0, S.bG)([eY.Ay], () => eY.Ay.get("iar_testing"))),
            (tq = (0, S.bG)([e6.default], () => e6.default.getCurrentUser())),
            (0, e9.ul)(tZ) && null != tq && tq.isStaff() && tH
                ? (0, l.jsx)(r.Dr, {
                      id: "staff-test-message-report",
                      label: "[STAFF] Test Message Report",
                      action: () => (0, e0.Rj)(tZ, "web_message_context_menu"),
                      icon: eZ.i,
                      leadingAccessory: { type: "icon", icon: eZ.i },
                      color: "danger",
                  })
                : null),
        nR = (function (e) {
            let t = (0, S.bG)([e7.A], () => e7.A.hasReportedMessage(e.channel_id, e.id)),
                n = (0, e8.KB)(e),
                i = n ? [eJ.M.REPORT_TO_MOD_NEW_TAG] : [],
                [a, s] = (0, eQ.kn)(i);
            return ((0, e$.l0)(() => {
                n && s(e5.i.AUTO_DISMISS);
            }),
            n)
                ? (0, l.jsx)(r.Dr, {
                      id: "report-to-mod",
                      label: t ? I.intl.string(e4.default["8wsdng"]) : I.intl.string(e4.default["1D+vqy"]),
                      action: () => {
                          s(e5.i.USER_DISMISS), (0, e0.dy)(e);
                      },
                      icon: eZ.i,
                      disabled: t,
                      leadingAccessory: { type: "icon", icon: eZ.i },
                      badge: a === eJ.M.REPORT_TO_MOD_NEW_TAG ? "new" : void 0,
                      color: "danger",
                  })
                : null;
        })(tZ),
        nw = (0, eD.A)({ type: t0, id: t7, name: t8 }),
        nU = (function (e, t) {
            let { perGuildMaxCount: n } = w.i$[z],
                { isLoading: i, saveRule: s, errorMessage: o } = (0, k.S)(),
                { createNewEditingRule: c } = (0, k.U)(),
                [u, g] = a.useState(!1),
                [A, m] = (0, R.H6)(t),
                { rulesByTriggerType: f, updateRule: p } = (0, R.wP)(t),
                y = a.useMemo(() => f[z] ?? [], [f]),
                h = 0 === y.length,
                E = n > y.length && !h;
            if (!a.useMemo(() => (0, U.i_)(t), [t]) || null == e || 0 === e.length || null == t) return null;
            let _ = e.split(" "),
                S = _.length;
            try {
                (0, N.wk)(_, H.bV);
            } catch (e) {
                return null;
            }
            let x = () => {
                    null != t &&
                        ((0, d.Z_)(),
                        X.A.open(t, F.BEX.GUILD_AUTOMOD),
                        setTimeout(() => {
                            c(t, z, { triggerMetadata: { keywordFilter: [e], regexPatterns: [], allowList: [] } });
                        }, 400));
                },
                b = async (t) => {
                    if (((0, d.Z_)(), !(await (0, B.Zy)(t.name, e)))) return;
                    let n = {
                        ...t,
                        triggerMetadata: {
                            ...t.triggerMetadata,
                            keywordFilter: [...(t.triggerMetadata?.keywordFilter ?? []), e],
                        },
                    };
                    await s(n, y),
                        p(n),
                        null != o
                            ? (0, G.P0)((0, v.o)(I.intl.string(I.t.wH6L0r), C.Ck.FAILURE))
                            : (0, G.P0)((0, v.o)(I.intl.string(I.t["0rdYm2"]), C.Ck.SUCCESS));
                },
                j = (0, l.jsx)(r.Dr, { id: "automod-rules-loading", label: I.intl.string(I.t.ZTNur7) });
            return (
                A ||
                    (j = (0, l.jsxs)(l.Fragment, {
                        children: [
                            h &&
                                (0, l.jsx)(r.Dr, {
                                    id: "add-first-rule",
                                    label: I.intl.string(I.t.f72Zqb),
                                    action: x,
                                    disabled: i,
                                }),
                            y.map((e) => {
                                let t = (0, w.J6)(z).reduce((t, n) => {
                                    let i = e.actions.find((e) => {
                                        let { type: t } = e;
                                        return n === t;
                                    });
                                    if (null == i) return t;
                                    let l = (0, P.x)(n, i);
                                    return t + `, ${l?.headerText}`;
                                }, "");
                                return (0, l.jsx)(
                                    r.iD,
                                    {
                                        id: e.id,
                                        label: e.name,
                                        subtext: (0, l.jsx)(L.E, {
                                            color: "text-muted",
                                            className: q.XX,
                                            variant: "text-xs/normal",
                                            children: t.slice(2),
                                        }),
                                        group: "automod-rule-selection",
                                        checked: !1,
                                        disabled: i,
                                        action: () => b(e),
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
                    leadingAccessory: { type: "icon", icon: O.l },
                    onFocus: () => {
                        u || (g(!0), m());
                    },
                    children: j,
                })
            );
        })(tQ, t$.getGuildId()),
        nk = (0, p.A)(t6, tZ, {
            shouldHideMediaOptions: ni,
            contentType: tY?.contentType,
            originalContentType: tY?.originalContentType,
        }),
        nP =
            ((tz = (0, tC.Fg)(tZ)),
            (tK = null != tY && (0, tC.qo)({ type: tv.D.GenericMedia, media: tY }, tz)),
            null != tY && tK
                ? (0, l.jsx)(
                      r.Dr,
                      {
                          id: "report-image-false-positive",
                          label: I.intl.string(I.t.ZH7P2h),
                          action: () => {
                              (0, eB.openModalLazy)(async () => {
                                  let { default: e } = await n(679276);
                                  return (t) =>
                                      (0, l.jsx)(e, {
                                          channelId: tZ.channel_id,
                                          messageId: tZ.id,
                                          mediaItemUrl: tY.url,
                                          ...t,
                                      });
                              });
                          },
                          leadingAccessory: { type: "icon", icon: tG.D },
                          icon: tG.D,
                      },
                      "report-image-false-positive",
                  )
                : null),
        nB = (0, ev.Lt)(tZ.flags, F.pr7.IS_VOICE_MESSAGE)
            ? (0, l.jsx)(r.Dr, {
                  id: "save-voice-message-audio",
                  label: I.intl.string(I.t.vbAEaA),
                  leadingAccessory: { type: "icon", icon: tL.s },
                  icon: tL.s,
                  action: () => {
                      let e = (0, tO.XW)(tZ.attachments[0].url);
                      (0, tN.h)({ href: e });
                  },
              })
            : null,
        nX =
            ((t = { shouldHideMediaOptions: ni }),
            (tV = tY?.url ?? ""),
            (tJ = (0, S.bG)([tR.Ay], () => tR.Ay.isVideoStatsEnabled(tV))),
            (tW = a.useCallback(() => {
                "" !== tV && (0, tR.FM)(tV);
            }, [tV])),
            null != tY && (0, tw.XB)(tY.contentType) && t?.shouldHideMediaOptions !== !0
                ? (0, l.jsx)(r.sL, {
                      id: "video-stats-for-nerds",
                      label: "Stats for Nerds",
                      leadingAccessory: { type: "icon", icon: eh.m },
                      checked: tJ,
                      action: tW,
                  })
                : null),
        nF = (0, y.A)(t1 ?? t2, t9, tZ, { shouldHideMediaOptions: ni }),
        nH = (0, A.A)({ id: tZ.id, label: I.intl.string(I.t.zBoHlf), shiftId: `${tZ.channel_id}-${tZ.id}` }),
        nq = (function (e) {
            let { messageId: t, itemId: n, type: i, imageSrc: s } = e,
                o = en.Q_.useSetting(),
                { tidaWebformEnabled: d } = m.A.useExperiment(
                    { location: "useMessageDetailsItem" },
                    { autoTrackExposure: !1 },
                ),
                c = a.useCallback(() => {
                    (0, ep.C)(t);
                }, [t]),
                u = a.useCallback(() => {
                    null != n && (0, ep.C)(n);
                }, [n]),
                g = a.useCallback(() => {
                    null != s && (0, ep.C)(s);
                }, [s]),
                A = a.useCallback(() => {
                    null != s && (0, eb.A)(s);
                }, [s]),
                f = "sticker" === i;
            if (!o || !ep.p5 || !d || ("emoji" !== i && !f) || null == n) return null;
            let p = f ? I.intl.string(I.t.SJ3249) : I.intl.string(I.t.Ap2oVy),
                y = f ? I.intl.string(I.t.B1ubHx) : I.intl.string(I.t.cIoudn),
                h = f ? I.intl.string(I.t["qAEi+C"]) : I.intl.string(I.t.gDAM2n);
            return (0, l.jsxs)(r.Dr, {
                id: "message-details",
                label: I.intl.string(I.t.IqqJNI),
                leadingAccessory: { type: "icon", icon: eh.m },
                children: [
                    (0, l.jsx)(r.Dr, {
                        id: "copy-message-id",
                        label: I.intl.string(I.t.zBoHlf),
                        action: c,
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
                                    leadingAccessory: { type: "icon", icon: e_.q },
                                }),
                                (0, l.jsx)(r.Dr, {
                                    id: "open-image-link",
                                    label: h,
                                    action: A,
                                    leadingAccessory: { type: "icon", icon: eS.W },
                                    trailingIndicator: { type: "icon", icon: ex.I },
                                }),
                            ],
                        }),
                ],
            });
        })({ messageId: tZ.id, itemId: t7, type: t0, imageSrc: t2 }),
        nz = (0, l.jsx)(r.rX, { children: nq ?? nH }),
        nK = (0, l.jsxs)(r.rX, { children: [nw, nU, nk, nP, nB, nX] });
    return (0, l.jsxs)(o.W, {
        "data-menu-migrated": !0,
        navId: nt,
        onClose: ne,
        "aria-label": nn,
        onSelect: na,
        children: [
            (0, l.jsx)(r.rX, { children: no }),
            (0, l.jsx)(r.rX, { children: nd }),
            (0, l.jsxs)(r.rX, { children: ["" === tQ ? nr : null, nc, nD] }),
            (0, l.jsxs)(r.rX, { children: [nu, ng, nA, nm] }),
            (0, l.jsxs)(r.rX, { children: [nf, np, ny, nh, nE, n_, nS, nx, nb, nj, nI, nM, nT, nG] }),
            (0, l.jsxs)(r.rX, { children: [nv, nC, nL, t5 && nO, t5 && nN, nR] }),
            ns
                ? (0, l.jsxs)(l.Fragment, { children: [nz, nK, null == nq && (0, l.jsx)(r.rX, { children: nF })] })
                : (0, l.jsxs)(l.Fragment, { children: [nK, (0, l.jsx)(r.rX, { children: nF }), nz] }),
        ],
    });
}
