n.d(t, { c: () => tB, default: () => tk });
var i,
    l = n(477900),
    a = n(582128),
    s = n(621466),
    r = n(477782),
    o = n(980707),
    c = n(442433),
    d = n(155718),
    u = n(793574),
    g = n(688810),
    A = n(50268),
    m = n(486503),
    f = n(373963),
    p = n(115184),
    y = n(777933),
    h = n(826308),
    E = n(337358),
    _ = n(180662);
n(321073);
var x = n(17928),
    I = n(280450),
    S = (((i = {})[(i.END_EARLY = 0)] = "END_EARLY"), i);
let b = [];
var j = n(660183);
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
var D = n(646911),
    G = n(174459),
    T = n(858899),
    v = n(834730),
    C = n(231483),
    L = n(627794),
    O = n(928348),
    N = n(452245),
    R = n(364806),
    w = n(979816),
    U = n(677420),
    P = n(264349),
    k = n(468689),
    B = n(652215),
    F = n(243277),
    X = n(654502);
let H = F.uh.KEYWORD;
var z = n(880457),
    K = n(503698),
    q = n.n(K),
    J = n(844222),
    V = n(460905),
    W = n(217306),
    Z = n(822123),
    $ = n(649963),
    Y = n(815807),
    Q = n(834942),
    ee = n(576705);
let et = (e) => {
    let t = e.getGuildId();
    return (
        ((null != t && Q.A.canChatInGuild(t) && ee.A.can(B.xBc.ADD_REACTIONS, e)) || e.isPrivate()) && !e.isSystemDM()
    );
};
var en = n(406704),
    ei = n(885386),
    el = n(486020),
    ea = n(625494),
    es = n(690521),
    er = n(307731),
    eo = n(482496);
function ec(e) {
    let { emoji: t, reducedMotionEnabled: n, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: q()(i, eo.Z),
        src:
            null != t.id
                ? el.Ay.getEmojiURL({ id: t.id, animated: t.animated && (!n || a), size: 18 })
                : es.Ay.getURL(t.optionallyDiverseSequence ?? ""),
        alt: "",
    });
}
var ed = n(290136),
    eu = n(519222),
    eg = n(345254),
    eA = n(624479),
    em = n(437517),
    ef = n(383233),
    ep = n(957565),
    ey = n(483768),
    eh = n(885574),
    eE = n(473935),
    e_ = n(173936),
    ex = n(93688),
    eI = n(509434),
    eS = n(975807),
    eb = n(22231),
    ej = n(148494),
    eM = n(697470),
    eD = n(253925),
    eG = n(843626),
    eT = n(427209);
n(938796);
var ev = n(665260),
    eC = n(563119),
    eL = n(581925),
    eO = n(521427),
    eN = n(20883),
    eR = n(979766),
    ew = n(866665),
    eU = n(816426);
let eP = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];
function ek(e) {
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
                "aria-label": j.intl.formatToPlainString(j.t["/iYSo6"], { emojiName: t.name }),
                className: q()(eU.x6, { [eU.in]: n }),
                children:
                    null == a || "" === a.trim()
                        ? (0, l.jsx)("span", { className: q()("emoji", "emoji-text", eU.Kk), children: s })
                        : (0, l.jsx)("img", { className: eU.Kk, src: a, alt: "" }),
            }),
        })
    );
}
var eB = n(192308),
    eF = n(969632),
    eX = n(997571),
    eH = n(157559),
    ez = n(769297);
function eK(e) {
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
var eq = n(110384),
    eJ = n(973196),
    eV = n(517997),
    eW = n(554146),
    eZ = n(111159),
    e$ = n(138134),
    eY = n(964486),
    eQ = n(865116),
    e0 = n(131607),
    e8 = n(928658),
    e1 = n(400528),
    e7 = n(892340),
    e4 = n(715757),
    e2 = n(967198),
    e6 = n(287809),
    e5 = n(628691),
    e9 = n(49999),
    e3 = n(39470),
    te = n(663417),
    tt = n(965407),
    tn = n(249700),
    ti = n(556112),
    tl = n(54570),
    ta = n(8880),
    ts = n(163328),
    tr = n(636537),
    to = n(152367),
    tc = n(37646),
    td = n(73153),
    tu = n(147087),
    tg = n(773669),
    tA = n(132183);
let tm = new Map();
var tf = n(534890),
    tp = n(604681),
    ty = n(181041),
    th = n(828488),
    tE = n(623562),
    t_ = n(485845),
    tx = n(778712),
    tI = n(803306),
    tS = n(966327),
    tb = n(597929),
    tj = n(548118),
    tM = n(402860),
    tD = n(260509),
    tG = n(889227),
    tT = n(734057),
    tv = n(71393),
    tC = n(87221),
    tL = n(930125),
    tO = n(282108),
    tN = n(32880),
    tR = n(803316),
    tw = n(123917),
    tU = n(953584),
    tP = n(59318);
function tk(e) {
    let t,
        n,
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
    if (null != A) n = t = i = A.url;
    else
        for (; (0, s.vq)(h);)
            ((0, s.vq)(h, HTMLImageElement) && null != h.src && (n = h.src),
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
                (h = h.parentNode));
    let I = document.getSelection()?.toString() ?? "";
    return (0, l.jsx)(g.f5, {
        value: y,
        children: tB({
            message: o,
            channel: r,
            mediaItem: A,
            textSelection: I,
            favoriteableType: E,
            favoriteableId: _,
            favoriteableName: x,
            itemHref: t,
            itemSrc: n,
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
function tB(e) {
    var t;
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
        tk,
        tB,
        tF,
        tX,
        tH,
        tz,
        tK,
        tq,
        tJ,
        tV,
        tW,
        tZ,
        t$,
        tY,
        {
            message: tQ,
            channel: t0,
            mediaItem: t8,
            textSelection: t1,
            favoriteableType: t7,
            favoriteableId: t4,
            favoriteableName: t2,
            itemHref: t6,
            itemSrc: t5,
            itemSafeSrc: t9,
            itemTextContent: t3,
            canReport: ne,
            onHeightUpdate: nt,
            onSelect: nn,
            onClose: ni,
            navId: nl,
            ariaLabel: na,
            shouldHideMediaOptions: ns = !1,
        } = e,
        nr = a.useRef(null);
    (a.useEffect(() => {
        nr.current = Date.now();
    }, []),
        a.useEffect(
            () => () => {
                if (null != nr.current) {
                    let e = Date.now() - nr.current;
                    G.default.track(B.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: e,
                        channel_id: t0.id,
                        guild_id: t0.getGuildId() ?? void 0,
                        message_id: tQ.id,
                    });
                }
            },
            [t0, tQ],
        ));
    let no = a.useCallback(() => {
            if (null != nr.current) {
                let e = Date.now() - nr.current;
                G.default.track(B.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: e,
                    channel_id: t0.id,
                    guild_id: t0.getGuildId() ?? void 0,
                    message_id: tQ.id,
                });
            }
            nn?.();
        }, [nn, t0, tQ]),
        { tidaWebformEnabled: nc } = m.A.useExperiment({ location: "MessageContextMenu" }, { autoTrackExposure: !1 }),
        nd =
            ((i = (0, Z.D6)(t0.guild_id).filter(
                (e) =>
                    !(e.useSpriteSheet && eP.indexOf(e.uniqueName ?? "") >= 0) &&
                    !es.Ay.isEmojiPremiumLocked({ emoji: e, channel: t0, intention: er.EmojiIntention.REACTION }),
            )).length > 4 && (i.length = 4),
            (s = ei.jW.useSetting()),
            (u = (0, en.Id)(t0)),
            (0, x.bG)([Q.A, ee.A], () => s && u && et(t0), [t0, u, s]) &&
            i.length > 0 &&
            tQ.type !== B.lAJ.MEDIA_MENTION_MESSAGE
                ? (0, l.jsx)(r.rX, {
                      className: eU.iE,
                      children: i.map((e, t) =>
                          (0, l.jsx)(
                              r.Dr,
                              {
                                  id: `quickreact-${e.id ?? t}`,
                                  render: (t) => {
                                      let { isFocused: n } = t;
                                      return (0, l.jsx)(ek, { emoji: e, isFocused: n });
                                  },
                                  action: () => {
                                      (0, $.BB)(t0.id, tQ.id, (0, Y.jq)(e), $.qN.MESSAGE_CONTEXT_MENU);
                                  },
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              t,
                          ),
                      ),
                  })
                : null),
        nu = (0, f.A)(t1),
        ng = (0, h.A)(t1),
        nA = (function (e, t) {
            let { reducedMotion: n } = a.useContext(J.C),
                i = (0, en.Id)(t),
                s = (0, x.bG)([Q.A, ee.A], () => et(t) && i && !t.isMediaThread(), [t, i]),
                o = (0, Z.D6)(t.getGuildId());
            if (!ei.jW.getSetting() || !s) return null;
            let c = o
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
                            icon: (e) => (0, l.jsx)(ec, { ...e, reducedMotionEnabled: n.enabled, emoji: i }),
                            leadingAccessory: {
                                type: "emoji",
                                emojiId: i.id,
                                src: null == i.id ? es.Ay.getURL(i.optionallyDiverseSequence ?? "") : void 0,
                                animated: i.animated,
                            },
                            action: () => {
                                (0, $.BB)(t.id, e.id, (0, Y.jq)(i), $.qN.MESSAGE_CONTEXT_MENU);
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
        })(tQ, t0),
        nm =
            ((E = (0, x.bG)([I.default], () => I.default.getId())),
            (_ = (0, en.Id)(t0)),
            (S = (0, en.s5)(t0)),
            (0, eM.A)(tQ, E) && _ && !S
                ? (0, l.jsx)(r.Dr, {
                      id: "edit",
                      label: j.intl.string(j.t.fsBWmS),
                      action: () => ej.A.startEditMessageRecord(t0.id, tQ),
                      leadingAccessory: { type: "icon", icon: eb.PencilIcon },
                      icon: eb.PencilIcon,
                  })
                : null),
        nf =
            ((K = (0, eV.u)(t0, tQ)),
            (q = (0, eJ.A)()),
            !K || q
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "reply",
                      label: j.intl.string(j.t["5IEsGx"]),
                      leadingAccessory: { type: "icon", icon: eq.W },
                      icon: eq.W,
                      action: (e) => {
                          (0, eu.$b)(t0, tQ, e);
                      },
                  })),
        np = (0, eG.m)(tQ)
            ? (0, l.jsx)(r.Dr, {
                  id: "forward",
                  label: j.intl.string(j.t.I3ltXO),
                  leadingAccessory: { type: "icon", icon: eT.A },
                  icon: eT.A,
                  action: () => {
                      (0, eu.Z4)(t0, tQ);
                  },
              })
            : null,
        ny = (0, en.n)(t0, tQ)
            ? (0, l.jsx)(r.Dr, {
                  id: "thread",
                  label: j.intl.string(j.t.rBIGBL),
                  leadingAccessory: { type: "icon", icon: ts.y },
                  icon: ts.y,
                  action: () => {
                      (0, eu.Nw)(t0, tQ);
                  },
              })
            : null,
        nh = (function (e) {
            if (!ep.p5) return null;
            let t = e.getContentMessage(),
                n = (0, ef._c)(t) ? (0, em.kC)(t.components) : t.content;
            return null == n || 0 === n.length
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "copy-text",
                      label: j.intl.string(j.t.JrGD7E),
                      leadingAccessory: { type: "icon", icon: eA.CopyIcon },
                      icon: eA.CopyIcon,
                      action: () => {
                          (0, ep.C)(n);
                      },
                  });
        })(tQ),
        nE = (function (e) {
            let t,
                {
                    handleTranslate: i,
                    handleRevertTranslation: s,
                    isTranslating: o,
                    isTranslated: c,
                } = (function (e) {
                    let [t, n] = a.useState(!1),
                        i = (0, x.bG)([tg.default], () => tg.default.locale);
                    return {
                        handleTranslate: a.useCallback(
                            async (l, a) => {
                                if (t) return;
                                let s = l ?? i;
                                n(!0);
                                let r = a ?? (0, j.getAvailableLocales)().find((e) => e.value === s)?.name ?? s;
                                (tm.has(e.id) || tm.set(e.id, e.content),
                                    (0, T.P0)({
                                        text: j.intl.formatToPlainString(j.t.Znl8Z8, { targetLanguage: r }),
                                        icon: to.D,
                                    }));
                                try {
                                    let t = await tr.Bo.post({
                                        url: B.Rsh.AI_TRANSLATE,
                                        body: { content: e.content, locale: s },
                                        rejectWithError: (0, tr.fT)(),
                                    });
                                    t.body &&
                                        (td.h.dispatch({
                                            type: "MESSAGE_UPDATE",
                                            message: { id: e.id, channel_id: e.channel_id, content: t.body.content },
                                        }),
                                        (0, T.P0)({
                                            text: j.intl.formatToPlainString(j.t.FtVUqm, { targetLanguage: r }),
                                            variant: "success",
                                        }));
                                } finally {
                                    n(!1);
                                }
                            },
                            [e, t, i],
                        ),
                        handleRevertTranslation: a.useCallback(() => {
                            let t = tm.get(e.id);
                            null != t &&
                                (td.h.dispatch({
                                    type: "MESSAGE_UPDATE",
                                    message: { id: e.id, channel_id: e.channel_id, content: t },
                                }),
                                tm.delete(e.id));
                        }, [e.id, e.channel_id]),
                        isTranslating: t,
                        isTranslated: tm.has(e.id),
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
                                    r.Dr,
                                    {
                                        id: `translate-${e.value}`,
                                        label: e.name,
                                        icon: () => (0, l.jsx)("img", { alt: "", src: t, className: tA.M }),
                                        leadingAccessory: { type: "image", src: t },
                                        action: () => i(e.value, e.name),
                                        disabled: o,
                                    },
                                    e.value,
                                );
                            }),
                        [i, o, t],
                    )),
                u = (0, tu.b)();
            return null != e.content && "" !== e.content.trim() && u
                ? c
                    ? (0, l.jsx)(r.Dr, {
                          id: "revert-translation",
                          label: j.intl.string(j.t.JC9BXn),
                          leadingAccessory: { type: "icon", icon: tc.U },
                          icon: tc.U,
                          action: s,
                          disabled: o,
                      })
                    : (0, l.jsx)(r.Dr, {
                          id: "translate",
                          label: o ? j.intl.string(j.t.SVKIdU) : j.intl.string(j.t["6epDlR"]),
                          action: () => i(),
                          leadingAccessory: { type: "icon", icon: tc.U },
                          disabled: o,
                          children: d,
                      })
                : null;
        })(tQ),
        n_ = (0, eR.A)(tQ, t0),
        nx = (0, eO.kn)(tQ, t0, "MessageContextMenu")
            ? (0, ev.Lt)(tQ.flags, B.pr7.IS_GUILD_OFFICIAL)
                ? (0, l.jsx)(r.Dr, {
                      id: "guild-official-unset",
                      action: () => {
                          ej.A.patchMessageGuildOfficial(t0.id, tQ.id, !1);
                      },
                      label: j.intl.string(j.t["2km5Gf"]),
                      leadingAccessory: { type: "icon", icon: eC.$ },
                  })
                : (0, l.jsx)(r.Dr, {
                      id: "guild-official-set",
                      action: () => {
                          ej.A.patchMessageGuildOfficial(t0.id, tQ.id, !0);
                      },
                      label: j.intl.string(j.t["lE/PG3"]),
                      leadingAccessory: { type: "icon", icon: eL.L },
                  })
            : null,
        nI = (0, z.A)(tQ, t0),
        nS = (0, D.A)({
            commandType: d.kc.MESSAGE,
            commandTargetId: tQ.id,
            channel: t0,
            guildId: void 0,
            onHeightUpdate: nt,
            showIcon: !0,
        }),
        nb =
            tQ.state !== B.cmJ.SEND_FAILED
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "resend",
                      label: j.intl.string(j.t.lXHojr),
                      leadingAccessory: { type: "icon", icon: te.RefreshIcon },
                      action: () => (0, tn.A)(t0, tQ, void 0, tt.A.getOptions(tQ.id)),
                  }),
        nj = (0, eN.A)(tQ, t0),
        nM =
            null != (el = t0.getGuildId()) &&
            tQ.type === B.lAJ.USER_JOIN &&
            ee.A.canWithPartialContext(B.xBc.MANAGE_GUILD, { guildId: el })
                ? (0, l.jsx)(r.Dr, {
                      id: "configure",
                      label: j.intl.string(j.t.NpHUi1),
                      leadingAccessory: { type: "icon", icon: ed.CircleQuestionIcon },
                      icon: ed.CircleQuestionIcon,
                      action: () => (0, eu.vc)(t0),
                  })
                : null,
        nD = (0, eg.A)(tQ, t0),
        nG =
            ((eo = (0, th.WU)(t0.getGuildId(), "message_context_menu")),
            (ew = (0, x.bG)([ty.A], () => ty.A.getConversationForMessage(t0.id, tQ.id) ?? null, [t0.id, tQ.id])),
            (tk = a.useCallback(() => {
                null != t0.getGuildId() && null != ew && (tp.A.openConversationsSection(), (0, tE.xI)(t0.id, ew));
            }, [t0, ew])),
            eo && null != ew
                ? (0, l.jsx)(r.Dr, {
                      id: "view-conversation",
                      label: "View Conversation",
                      leadingAccessory: { type: "icon", icon: tf.ChatIcon },
                      icon: tf.ChatIcon,
                      action: tk,
                  })
                : null),
        nT =
            ((tB = (0, x.bG)([ta.A], () => ta.A.isSpeakingMessage(t0.id, tQ.id), [t0, tQ])),
            "" === tQ.content
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "tts",
                      label: tB ? j.intl.string(j.t.CJ30BP) : j.intl.string(j.t.yGLjXF),
                      leadingAccessory: { type: "icon", icon: ti._ },
                      icon: ti._,
                      action: () => (tB ? (0, tl.pr)() : (0, tl.kP)(t0, tQ)),
                  })),
        nv =
            null == tQ.reactions || 0 === tQ.reactions.length || (tQ.isPoll() && !(0, eF.Gh)(tQ))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "reactions",
                      label: j.intl.string(j.t.wikODq),
                      leadingAccessory: { type: "icon", icon: W.S },
                      icon: W.S,
                      action: () =>
                          (0, eB.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([n.e("569080"), n.e("998186")]).then(
                                  n.bind(n, 112753),
                              );
                              return (t) => (0, l.jsx)(e, { ...t, message: tQ });
                          }),
                  }),
        nC =
            0 ===
            (tF = (function (e) {
                let t = (0, x.bG)([I.default], () => I.default.getId()),
                    { poll: n } = e;
                if (!e.isPoll() || null == n) return b;
                let i = [];
                return (n.expiry.isSameOrBefore(Date.now()) || e.author.id !== t || i.push(0), i);
            })(tQ)).length
                ? null
                : (0, l.jsx)(l.Fragment, { children: tF.map((e) => M[e](tQ)) }),
        nL = (function (e) {
            let { analyticsLocations: t } = (0, g.Ay)(),
                n = e.interactionMetadata?.authorizing_integration_owners[t_.b.USER_INSTALL],
                i = e.interactionMetadata?.authorizing_integration_owners[t_.b.GUILD_INSTALL],
                s = e.interactionMetadata?.user.id,
                o = (0, x.bG)([e6.default], () => e6.default.getUser(n)),
                c = (0, x.bG)([tv.A], () => tv.A.getGuild(i)),
                d = tT.A.getChannel(e.channel_id),
                u = d?.getGuildId(),
                A = (0, x.bG)([e6.default], () => e6.default.getUser(s));
            if (
                (a.useEffect(() => {
                    null == o && null != n && (0, tI.wz)(n);
                }, [o, n]),
                !(0, tb._)(e))
            )
                return null;
            null == A && (A = new tG.A(e.interactionMetadata?.user));
            let m = null;
            if (null != c) {
                let t = (0, tD.Iv)(c, 18, !0);
                m = (0, l.jsx)(r.Dr, {
                    disabled: !0,
                    iconLeft: () => (0, l.jsx)(tj.Ay, { guild: c, size: tj.Ay.Sizes.MINI }),
                    leadingAccessory: null != t ? { type: "image", src: t } : void 0,
                    id: "integration-owner",
                    label: c.name,
                    subtext: j.intl.formatToPlainString(j.t.ShLXXB, { application: e.author.username }),
                });
            } else
                null != o &&
                    (m = (0, l.jsx)(r.Dr, {
                        action: () =>
                            (0, tM.openUserProfileModal)({
                                userId: o.id,
                                guildId: u,
                                channelId: e.channel_id,
                                sourceAnalyticsLocations: t,
                            }),
                        leadingAccessory: { type: "avatar", src: o.getAvatarURL(u, 18) },
                        id: "integration-owner",
                        label: o.username,
                        iconLeft: () => (0, l.jsx)(tS.A, { user: o, size: tx._3.SIZE_20 }),
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
                                  (0, tM.openUserProfileModal)({
                                      userId: A.id,
                                      guildId: u,
                                      channelId: e.channel_id,
                                      sourceAnalyticsLocations: t,
                                  }),
                              leadingAccessory: { type: "avatar", src: A.getAvatarURL(u, 18) },
                              iconLeft: () => (0, l.jsx)(tS.A, { user: A, size: tx._3.SIZE_20 }),
                              id: "interaction-user",
                              label: A.username,
                              subtext: j.intl.string(j.t["04gxNg"]),
                          })
                        : null,
                ],
            });
        })(tQ),
        nO = (function (e, t) {
            let { reducedMotion: n } = a.useContext(J.C),
                i = (0, en.Id)(t),
                s = (0, x.bG)([ee.A], () => ee.A.can(B.xBc.MANAGE_MESSAGES, t) && i, [t, i]),
                o = e.reactions.reduce(
                    (e, t) =>
                        t.count_details?.vote != null ||
                        null != e.find((e) => (null != e.id && e.id === t.emoji.id) || e.name === t.emoji.name)
                            ? e
                            : [...e, t.emoji],
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
                                  action: (n) => {
                                      n.shiftKey
                                          ? (0, $.Jf)(t.id, e.id, i)
                                          : eH.A.show({
                                                title: j.intl.string(j.t["73GqTz"]),
                                                body: j.intl.string(j.t.dmy5bn),
                                                confirmText: j.intl.string(j.t.p89ACt),
                                                confirmVariant: "critical-primary",
                                                cancelText: j.intl.string(j.t.gm1Vej),
                                                onConfirm: () => {
                                                    (0, $.Jf)(t.id, e.id, i);
                                                },
                                            });
                                  },
                                  leadingAccessory: {
                                      type: "emoji",
                                      emojiId: i.id,
                                      src: null == i.id ? es.Ay.getURL(i.name ?? "") : void 0,
                                      animated: i.animated,
                                  },
                                  icon: (e) => (0, l.jsx)(eK, { ...e, reducedMotionEnabled: n.enabled, emoji: i }),
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              i.name ?? i.id,
                          ),
                      ),
                  });
        })(tQ, t0),
        nN =
            ((tX = (0, en.Id)(t0)),
            !(0, x.bG)([ee.A], () => ee.A.can(B.xBc.MANAGE_MESSAGES, t0) && tX, [t0, tX]) ||
            null == tQ.reactions ||
            0 === tQ.reactions.length ||
            (tQ.isPoll() && !(0, eF.Gh)(tQ))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "remove-reactions",
                      label: j.intl.string(j.t.ZbtGBm),
                      leadingAccessory: { type: "icon", icon: eX.t },
                      action: function (e) {
                          e.shiftKey
                              ? (0, $.Go)(t0.id, tQ.id)
                              : eH.A.show({
                                    title: j.intl.string(j.t.iz3vYX),
                                    body: j.intl.string(j.t.VpjOCo),
                                    confirmText: j.intl.string(j.t.p89ACt),
                                    confirmVariant: "critical-primary",
                                    cancelText: j.intl.string(j.t.gm1Vej),
                                    onConfirm: () => {
                                        (0, $.Go)(t0.id, tQ.id);
                                    },
                                });
                      },
                      color: "danger",
                  })),
        nR = (0, ey.A)(tQ, t0),
        nw =
            ((tH = (0, x.bG)([e2.A], () => e2.A.getGuildId())),
            (tz = (0, e4.Qo)(tH)),
            (0, e5.ul)(tQ)
                ? (0, l.jsx)(r.Dr, {
                      id: "report",
                      label: tz ? j.intl.string(j.t.n5EBAJ) : j.intl.string(j.t.GwbdGe),
                      action: () => (0, e8.V2)(tQ, "web_message_context_menu"),
                      icon: tz ? eZ.p : e$.FlagIcon,
                      leadingAccessory: { type: "icon", icon: tz ? eZ.p : e$.FlagIcon },
                      color: "danger",
                  })
                : null),
        nU =
            ((tK = (0, x.bG)([eQ.Ay], () => eQ.Ay.get("iar_testing"))),
            (tq = (0, x.bG)([e6.default], () => e6.default.getCurrentUser())),
            (0, e5.ul)(tQ) && null != tq && tq.isStaff() && tK
                ? (0, l.jsx)(r.Dr, {
                      id: "staff-test-message-report",
                      label: "[STAFF] Test Message Report",
                      action: () => (0, e8.Rj)(tQ, "web_message_context_menu"),
                      icon: e$.FlagIcon,
                      leadingAccessory: { type: "icon", icon: e$.FlagIcon },
                      color: "danger",
                  })
                : null),
        nP = (function (e) {
            let t = (0, x.bG)([e1.A], () => e1.A.hasReportedMessage(e.channel_id, e.id)),
                n = (0, e7.KB)(e),
                i = n ? [eW.M.REPORT_TO_MOD_NEW_TAG] : [],
                [a, s] = (0, e0.kn)(i);
            return ((0, eY.l0)(() => {
                n && s(e9.i.AUTO_DISMISS);
            }),
            n)
                ? (0, l.jsx)(r.Dr, {
                      id: "report-to-mod",
                      label: t ? j.intl.string(e3.default["8wsdng"]) : j.intl.string(e3.default["1D+vqy"]),
                      action: () => {
                          (s(e9.i.USER_DISMISS), (0, e8.dy)(e));
                      },
                      icon: e$.FlagIcon,
                      disabled: t,
                      leadingAccessory: { type: "icon", icon: e$.FlagIcon },
                      badge: a === eW.M.REPORT_TO_MOD_NEW_TAG ? "new" : void 0,
                      color: "danger",
                  })
                : null;
        })(tQ),
        nk = (0, eD.A)({ type: t7, id: t4, name: t2 }),
        nB = (function (e, t) {
            let { perGuildMaxCount: n } = N.i$[H],
                { isLoading: i, saveRule: s, errorMessage: o } = (0, R.S)(),
                { createNewEditingRule: d } = (0, R.U)(),
                [u, g] = a.useState(!1),
                [A, m] = (0, O.H6)(t),
                { rulesByTriggerType: f, updateRule: p } = (0, O.wP)(t),
                y = a.useMemo(() => f[H] ?? [], [f]),
                h = 0 === y.length,
                E = n > y.length && !h;
            if (!a.useMemo(() => (0, w.i_)(t), [t]) || null == e || 0 === e.length || null == t) return null;
            let _ = e.split(" "),
                x = _.length;
            try {
                (0, L.wk)(_, F.bV);
            } catch (e) {
                return null;
            }
            function I() {
                null == e ||
                    (null != t &&
                        ((0, c.Z_)(),
                        k.default.open(t, B.BEX.GUILD_AUTOMOD),
                        setTimeout(() => {
                            d(t, H, { triggerMetadata: { keywordFilter: [e], regexPatterns: [], allowList: [] } });
                        }, 400)));
            }
            async function S(t) {
                if (null == e || ((0, c.Z_)(), !(await (0, P.Zy)(t.name, e)))) return;
                let n = {
                    ...t,
                    triggerMetadata: {
                        ...t.triggerMetadata,
                        keywordFilter: [...(t.triggerMetadata?.keywordFilter ?? []), e],
                    },
                };
                (await s(n, y),
                    p(n),
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
                                let t = (0, N.J6)(H).reduce((t, n) => {
                                    let i = e.actions.find((e) => {
                                        let { type: t } = e;
                                        return n === t;
                                    });
                                    if (null == i) return t;
                                    let l = (0, U.x)(n, i);
                                    return t + `, ${l?.headerText}`;
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
                                            children: t.slice(2),
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
        })(t1, t0.getGuildId()),
        nF = (0, p.A)(t9, tQ, {
            shouldHideMediaOptions: ns,
            contentType: t8?.contentType,
            originalContentType: t8?.originalContentType,
        }),
        nX =
            ((tJ = (0, tO.Fg)(tQ)),
            (tV = null != t8 && (0, tO.qo)({ type: tL.D.GenericMedia, media: t8 }, tJ)),
            null != t8 && tV
                ? (0, l.jsx)(
                      r.Dr,
                      {
                          id: "report-image-false-positive",
                          label: j.intl.string(j.t.ZH7P2h),
                          action: function () {
                              null != t8 &&
                                  (0, eB.openModalLazy)(async () => {
                                      let { default: e } = await n(679276);
                                      return (t) =>
                                          (0, l.jsx)(e, {
                                              channelId: tQ.channel_id,
                                              messageId: tQ.id,
                                              mediaItemUrl: t8.url,
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
        nH =
            ((tW = tQ.getContentMessage()),
            (0, ev.Lt)(tW.flags, B.pr7.IS_VOICE_MESSAGE) && 0 !== tW.attachments.length
                ? (0, l.jsx)(r.Dr, {
                      id: "save-voice-message-audio",
                      label: j.intl.string(j.t.vbAEaA),
                      leadingAccessory: { type: "icon", icon: tN.DownloadIcon },
                      icon: tN.DownloadIcon,
                      action: () => {
                          let e = (0, tR.XW)(tW.attachments[0].url);
                          (0, tw.h)({ href: e });
                      },
                  })
                : null),
        nz =
            ((t = { shouldHideMediaOptions: ns }),
            (tZ = t8?.url ?? ""),
            (t$ = (0, x.bG)([tU.Ay], () => tU.Ay.isVideoStatsEnabled(tZ))),
            (tY = a.useCallback(() => {
                "" !== tZ && (0, tU.FM)(tZ);
            }, [tZ])),
            null != t8 && (0, tP.XB)(t8.contentType) && t?.shouldHideMediaOptions !== !0
                ? (0, l.jsx)(r.sL, {
                      id: "video-stats-for-nerds",
                      label: "Stats for Nerds",
                      leadingAccessory: { type: "icon", icon: eh.CircleInformationIcon },
                      checked: t$,
                      action: tY,
                  })
                : null),
        nK = (0, y.A)(t6 ?? t5, t3, tQ, { shouldHideMediaOptions: ns }),
        nq = (0, A.A)({ id: tQ.id, label: j.intl.string(j.t.zBoHlf), shiftId: `${tQ.channel_id}-${tQ.id}` }),
        nJ = (function (e) {
            let { messageId: t, itemId: n, type: i, imageSrc: s } = e,
                o = ei.Q_.useSetting(),
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
                    null != s && (0, ep.C)(s);
                }, [s]),
                A = a.useCallback(() => {
                    null != s && (0, eS.A)(s);
                }, [s]),
                f = "sticker" === i;
            if (!o || !ep.p5 || !c || ("emoji" !== i && !f) || null == n) return null;
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
        })({ messageId: tQ.id, itemId: t4, type: t7, imageSrc: t5 }),
        nV = (0, l.jsx)(r.rX, { children: nJ ?? nq }),
        nW = (0, l.jsxs)(r.rX, { children: [nk, nB, nF, nX, nH, nz] });
    return (0, l.jsxs)(o.W, {
        "data-menu-migrated": !0,
        navId: nl,
        onClose: ni,
        "aria-label": na,
        onSelect: no,
        children: [
            (0, l.jsx)(r.rX, { children: nu }),
            (0, l.jsx)(r.rX, { children: ng }),
            (0, l.jsxs)(r.rX, { children: ["" === t1 ? nd : null, nA, nv] }),
            (0, l.jsxs)(r.rX, { children: [nm, nf, np, ny] }),
            (0, l.jsxs)(r.rX, { children: [nh, nE, n_, nx, nI, nS, nb, nj, nM, nD, nG, nT, nC, nL] }),
            (0, l.jsxs)(r.rX, { children: [nO, nN, nR, ne && nw, ne && nU, nP] }),
            nc
                ? (0, l.jsxs)(l.Fragment, { children: [nV, nW, null == nJ && (0, l.jsx)(r.rX, { children: nK })] })
                : (0, l.jsxs)(l.Fragment, { children: [nW, (0, l.jsx)(r.rX, { children: nK }), nV] }),
        ],
    });
}
