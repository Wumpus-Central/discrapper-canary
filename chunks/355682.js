n.d(t, { c: () => tF, default: () => tB });
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
let M = {
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
var D = n(646911),
    C = n(174459),
    G = n(691540),
    T = n(857250),
    v = n(97483),
    L = n(834730),
    O = n(231483),
    N = n(627794),
    w = n(928348),
    R = n(53594),
    U = n(364806),
    k = n(979816),
    P = n(677420),
    B = n(264349),
    F = n(468689),
    X = n(652215),
    z = n(243277),
    q = n(654502);
let H = z.uh.KEYWORD;
var K = n(880457),
    V = n(503698),
    W = n.n(V),
    J = n(844222),
    Z = n(460905),
    $ = n(217306),
    Y = n(822123),
    Q = n(649963),
    ee = n(815807),
    et = n(834942),
    en = n(576705);
let ei = (e) => {
    let t = e.getGuildId();
    return (
        ((null != t && et.A.canChatInGuild(t) && en.A.can(X.xBc.ADD_REACTIONS, e)) || e.isPrivate()) && !e.isSystemDM()
    );
};
var el = n(406704),
    ea = n(885386),
    er = n(486020),
    es = n(625494),
    eo = n(690521),
    ec = n(307731),
    ed = n(482496);
function eu(e) {
    let { emoji: t, reducedMotionEnabled: n, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: W()(i, ed.Z),
        src:
            null != t.id
                ? er.Ay.getEmojiURL({ id: t.id, animated: t.animated && (!n || a), size: 18 })
                : eo.Ay.getURL(t.optionallyDiverseSequence ?? ""),
        alt: "",
    });
}
var eg = n(290136),
    eA = n(519222),
    em = n(345254),
    ey = n(624479),
    ep = n(437517),
    ef = n(383233),
    eh = n(957565),
    eE = n(483768),
    eb = n(885574),
    ex = n(473935),
    e_ = n(173936),
    eI = n(93688),
    eS = n(509434),
    ej = n(975807),
    eM = n(22231),
    eD = n(148494),
    eC = n(697470),
    eG = n(253925),
    eT = n(843626),
    ev = n(427209);
n(938796);
var eL = n(665260),
    eO = n(563119),
    eN = n(581925),
    ew = n(521427),
    eR = n(20883),
    eU = n(979766),
    ek = n(866665),
    eP = n(816426);
let eB = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];
function eF(e) {
    let { emoji: t, isFocused: n } = e,
        { animated: i, src: a, surrogates: r } = t;
    return (
        null == a && null != t.id
            ? (a = er.Ay.getEmojiURL({ id: t.id, animated: !!i, size: 20 }))
            : null == a && (a = eo.Ay.getURL(r)),
        (0, l.jsx)(ek.m, {
            text: (0, eo.N)(t),
            hideOnClick: !0,
            spacing: 16,
            forceOpen: n,
            children: (0, l.jsx)("div", {
                "aria-label": j.intl.formatToPlainString(j.t["/iYSo6"], { emojiName: t.name }),
                className: W()(eP.x6, { [eP.in]: n }),
                children:
                    null == a || "" === a.trim()
                        ? (0, l.jsx)("span", { className: W()("emoji", "emoji-text", eP.Kk), children: r })
                        : (0, l.jsx)("img", { className: eP.Kk, src: a, alt: "" }),
            }),
        })
    );
}
var eX = n(192308),
    ez = n(969632),
    eq = n(997571),
    eH = n(157559),
    eK = n(769297);
function eV(e) {
    let { emoji: t, reducedMotionEnabled: n, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: i,
        src:
            null != t.id
                ? er.Ay.getEmojiURL({ id: t.id, animated: t.animated && (!n || a), size: 18 })
                : eo.Ay.getURL(t.name ?? ""),
        alt: "",
    });
}
var eW = n(110384),
    eJ = n(973196),
    eZ = n(517997),
    e$ = n(554146),
    eY = n(111159),
    eQ = n(138134),
    e0 = n(964486),
    e8 = n(865116),
    e6 = n(131607),
    e7 = n(928658),
    e2 = n(400528),
    e1 = n(892340),
    e3 = n(715757),
    e9 = n(967198),
    e5 = n(287809),
    e4 = n(628691),
    te = n(49999),
    tt = n(39470),
    tn = n(663417),
    ti = n(965407),
    tl = n(249700),
    ta = n(556112),
    tr = n(54570),
    ts = n(8880),
    to = n(163328),
    tc = n(636537),
    td = n(37646),
    tu = n(228366),
    tg = n(147087),
    tA = n(773669),
    tm = n(132183);
let ty = new Map();
var tp = n(534890),
    tf = n(604681),
    th = n(828488),
    tE = n(623562),
    tb = n(958720),
    tx = n(485845),
    t_ = n(778712),
    tI = n(803306),
    tS = n(966327),
    tj = n(597929),
    tM = n(548118),
    tD = n(402860),
    tC = n(260509),
    tG = n(889227),
    tT = n(734057),
    tv = n(71393),
    tL = n(87221),
    tO = n(930125),
    tN = n(282108),
    tw = n(32880),
    tR = n(803316),
    tU = n(123917),
    tk = n(953584),
    tP = n(59318);
function tB(e) {
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
        for (; (0, r.vq)(h);)
            ((0, r.vq)(h, HTMLImageElement) && null != h.src && (n = h.src),
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
                (h = h.parentNode));
    let _ = document.getSelection()?.toString() ?? "";
    return (0, l.jsx)(g.f5, {
        value: f,
        children: tF({
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
function tF(e) {
    var t;
    let i,
        r,
        u,
        E,
        b,
        I,
        V,
        W,
        er,
        ed,
        ek,
        tB,
        tF,
        tX,
        tz,
        tq,
        tH,
        tK,
        tV,
        tW,
        tJ,
        tZ,
        t$,
        tY,
        tQ,
        {
            message: t0,
            channel: t8,
            mediaItem: t6,
            textSelection: t7,
            favoriteableType: t2,
            favoriteableId: t1,
            favoriteableName: t3,
            itemHref: t9,
            itemSrc: t5,
            itemSafeSrc: t4,
            itemTextContent: ne,
            canReport: nt,
            onHeightUpdate: nn,
            onSelect: ni,
            onClose: nl,
            navId: na,
            ariaLabel: nr,
            shouldHideMediaOptions: ns = !1,
        } = e,
        no = a.useRef(null);
    (a.useEffect(() => {
        no.current = Date.now();
    }, []),
        a.useEffect(
            () => () => {
                if (null != no.current) {
                    let e = Date.now() - no.current;
                    C.default.track(X.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: e,
                        channel_id: t8.id,
                        guild_id: t8.getGuildId() ?? void 0,
                        message_id: t0.id,
                    });
                }
            },
            [t8, t0],
        ));
    let nc = a.useCallback(() => {
            if (null != no.current) {
                let e = Date.now() - no.current;
                C.default.track(X.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: e,
                    channel_id: t8.id,
                    guild_id: t8.getGuildId() ?? void 0,
                    message_id: t0.id,
                });
            }
            ni?.();
        }, [ni, t8, t0]),
        { tidaWebformEnabled: nd } = m.A.useExperiment({ location: "MessageContextMenu" }, { autoTrackExposure: !1 }),
        nu =
            ((i = (0, Y.D6)(t8.guild_id).filter(
                (e) =>
                    !(e.useSpriteSheet && eB.indexOf(e.uniqueName ?? "") >= 0) &&
                    !eo.Ay.isEmojiPremiumLocked({ emoji: e, channel: t8, intention: ec.EmojiIntention.REACTION }),
            )).length > 4 && (i.length = 4),
            (r = ea.jW.useSetting()),
            (u = (0, el.Id)(t8)),
            (0, x.bG)([et.A, en.A], () => r && u && ei(t8), [t8, u, r]) &&
            i.length > 0 &&
            t0.type !== X.lAJ.MEDIA_MENTION_MESSAGE
                ? (0, l.jsx)(s.rX, {
                      className: eP.iE,
                      children: i.map((e, t) =>
                          (0, l.jsx)(
                              s.Dr,
                              {
                                  id: `quickreact-${e.id ?? t}`,
                                  render: (t) => {
                                      let { isFocused: n } = t;
                                      return (0, l.jsx)(eF, { emoji: e, isFocused: n });
                                  },
                                  action: () => {
                                      (0, Q.BB)(t8.id, t0.id, (0, ee.jq)(e), Q.qN.MESSAGE_CONTEXT_MENU);
                                  },
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              t,
                          ),
                      ),
                  })
                : null),
        ng = (0, y.A)(t7),
        nA = (0, h.A)(t7),
        nm = (function (e, t) {
            let { reducedMotion: n } = a.useContext(J.C),
                i = (0, el.Id)(t),
                r = (0, x.bG)([et.A, en.A], () => ei(t) && i && !t.isMediaThread(), [t, i]),
                o = (0, Y.D6)(t.getGuildId());
            if (!ea.jW.getSetting() || !r) return null;
            let c = o
                .filter(
                    (e) =>
                        !eo.Ay.isEmojiFilteredOrLocked({ emoji: e, channel: t, intention: ec.EmojiIntention.REACTION }),
                )
                .slice(0, 12)
                .map((i, a) =>
                    (0, l.jsx)(
                        s.Dr,
                        {
                            color: "default",
                            id: i.id ?? i.optionallyDiverseSequence ?? i.name,
                            label: `:${i.name}:`,
                            icon: (e) => (0, l.jsx)(eu, { ...e, reducedMotionEnabled: n.enabled, emoji: i }),
                            leadingAccessory: {
                                type: "emoji",
                                emojiId: i.id,
                                src: null == i.id ? eo.Ay.getURL(i.optionallyDiverseSequence ?? "") : void 0,
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
        })(t0, t8),
        ny =
            ((E = (0, x.bG)([_.default], () => _.default.getId())),
            (b = (0, el.Id)(t8)),
            (I = (0, el.s5)(t8)),
            (0, eC.A)(t0, E) && b && !I
                ? (0, l.jsx)(s.Dr, {
                      id: "edit",
                      label: j.intl.string(j.t.fsBWmS),
                      action: () => eD.A.startEditMessageRecord(t8.id, t0),
                      leadingAccessory: { type: "icon", icon: eM.PencilIcon },
                      icon: eM.PencilIcon,
                  })
                : null),
        np =
            ((V = (0, eZ.u)(t8, t0)),
            (W = (0, eJ.A)()),
            !V || W
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "reply",
                      label: j.intl.string(j.t["5IEsGx"]),
                      leadingAccessory: { type: "icon", icon: eW.W },
                      icon: eW.W,
                      action: (e) => {
                          (0, eA.$b)(t8, t0, e);
                      },
                  })),
        nf = (0, eT.m)(t0)
            ? (0, l.jsx)(s.Dr, {
                  id: "forward",
                  label: j.intl.string(j.t.I3ltXO),
                  leadingAccessory: { type: "icon", icon: ev.A },
                  icon: ev.A,
                  action: () => {
                      (0, eA.Z4)(t8, t0);
                  },
              })
            : null,
        nh = (0, el.n)(t8, t0)
            ? (0, l.jsx)(s.Dr, {
                  id: "thread",
                  label: j.intl.string(j.t.rBIGBL),
                  leadingAccessory: { type: "icon", icon: to.y },
                  icon: to.y,
                  action: () => {
                      (0, eA.Nw)(t8, t0);
                  },
              })
            : null,
        nE = (function (e) {
            if (!eh.p5) return null;
            let t = e.getContentMessage(),
                n = (0, ef._c)(t) ? (0, ep.kC)(t.components) : t.content;
            return null == n || 0 === n.length
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "copy-text",
                      label: j.intl.string(j.t.JrGD7E),
                      leadingAccessory: { type: "icon", icon: ey.CopyIcon },
                      icon: ey.CopyIcon,
                      action: () => {
                          (0, eh.C)(n);
                      },
                  });
        })(t0),
        nb = (function (e) {
            let t,
                {
                    handleTranslate: i,
                    handleRevertTranslation: r,
                    isTranslating: o,
                    isTranslated: c,
                } = (function (e) {
                    let [t, n] = a.useState(!1),
                        i = (0, x.bG)([tA.default], () => tA.default.locale);
                    return {
                        handleTranslate: a.useCallback(
                            async (l, a) => {
                                if (t) return;
                                let r = l ?? i;
                                n(!0);
                                let s = a ?? (0, j.getAvailableLocales)().find((e) => e.value === r)?.name ?? r;
                                (ty.has(e.id) || ty.set(e.id, e.content),
                                    (0, G.P0)(
                                        (0, T.o)(
                                            j.intl.formatToPlainString(j.t.Znl8Z8, { targetLanguage: s }),
                                            v.Ck.AI,
                                        ),
                                    ));
                                try {
                                    let t = await tc.Bo.post({
                                        url: X.Rsh.AI_TRANSLATE,
                                        body: { content: e.content, locale: r },
                                        rejectWithError: (0, tc.fT)(),
                                    });
                                    t.body &&
                                        (tu.h.dispatch({
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
                            let t = ty.get(e.id);
                            null != t &&
                                (tu.h.dispatch({
                                    type: "MESSAGE_UPDATE",
                                    message: { id: e.id, channel_id: e.channel_id, content: t },
                                }),
                                ty.delete(e.id));
                        }, [e.id, e.channel_id]),
                        isTranslating: t,
                        isTranslated: ty.has(e.id),
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
                                        icon: () => (0, l.jsx)("img", { alt: "", src: t, className: tm.M }),
                                        leadingAccessory: { type: "image", src: t },
                                        action: () => i(e.value, e.name),
                                        disabled: o,
                                    },
                                    e.value,
                                );
                            }),
                        [i, o, t],
                    )),
                u = (0, tg.b)();
            return null != e.content && "" !== e.content.trim() && u
                ? c
                    ? (0, l.jsx)(s.Dr, {
                          id: "revert-translation",
                          label: j.intl.string(j.t.JC9BXn),
                          leadingAccessory: { type: "icon", icon: td.U },
                          icon: td.U,
                          action: r,
                          disabled: o,
                      })
                    : (0, l.jsx)(s.Dr, {
                          id: "translate",
                          label: o ? j.intl.string(j.t.SVKIdU) : j.intl.string(j.t["6epDlR"]),
                          action: () => i(),
                          leadingAccessory: { type: "icon", icon: td.U },
                          disabled: o,
                          children: d,
                      })
                : null;
        })(t0),
        nx = (0, eU.A)(t0, t8),
        n_ = (0, ew.kn)(t0, t8, "MessageContextMenu")
            ? (0, eL.Lt)(t0.flags, X.pr7.IS_GUILD_OFFICIAL)
                ? (0, l.jsx)(s.Dr, {
                      id: "guild-official-unset",
                      action: () => {
                          eD.A.patchMessageGuildOfficial(t8.id, t0.id, !1);
                      },
                      label: j.intl.string(j.t["2km5Gf"]),
                      leadingAccessory: { type: "icon", icon: eO.$ },
                  })
                : (0, l.jsx)(s.Dr, {
                      id: "guild-official-set",
                      action: () => {
                          eD.A.patchMessageGuildOfficial(t8.id, t0.id, !0);
                      },
                      label: j.intl.string(j.t["lE/PG3"]),
                      leadingAccessory: { type: "icon", icon: eN.L },
                  })
            : null,
        nI = (0, K.A)(t0, t8),
        nS = (0, D.A)({
            commandType: d.kc.MESSAGE,
            commandTargetId: t0.id,
            channel: t8,
            guildId: void 0,
            onHeightUpdate: nn,
            showIcon: !0,
        }),
        nj =
            t0.state !== X.cmJ.SEND_FAILED
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "resend",
                      label: j.intl.string(j.t.lXHojr),
                      leadingAccessory: { type: "icon", icon: tn.RefreshIcon },
                      action: () => (0, tl.A)(t8, t0, void 0, ti.A.getOptions(t0.id)),
                  }),
        nM = (0, eR.A)(t0, t8),
        nD =
            null != (er = t8.getGuildId()) &&
            t0.type === X.lAJ.USER_JOIN &&
            en.A.canWithPartialContext(X.xBc.MANAGE_GUILD, { guildId: er })
                ? (0, l.jsx)(s.Dr, {
                      id: "configure",
                      label: j.intl.string(j.t.NpHUi1),
                      leadingAccessory: { type: "icon", icon: eg.CircleQuestionIcon },
                      icon: eg.CircleQuestionIcon,
                      action: () => (0, eA.vc)(t8),
                  })
                : null,
        nC = (0, em.A)(t0, t8),
        nG =
            ((ed = (0, th.WU)(t8.getGuildId(), "message_context_menu")),
            (ek = (0, x.bG)([tb.A], () => tb.A.getConversationForMessage(t8.id, t0.id) ?? null, [t8.id, t0.id])),
            (tB = a.useCallback(() => {
                null != t8.getGuildId() && null != ek && (tf.A.openConversationsSection(), (0, tE.xI)(t8.id, ek));
            }, [t8, ek])),
            ed && null != ek
                ? (0, l.jsx)(s.Dr, {
                      id: "view-conversation",
                      label: "View Conversation",
                      leadingAccessory: { type: "icon", icon: tp.ChatIcon },
                      icon: tp.ChatIcon,
                      action: tB,
                  })
                : null),
        nT =
            ((tF = (0, x.bG)([ts.A], () => ts.A.isSpeakingMessage(t8.id, t0.id), [t8, t0])),
            "" === t0.content
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "tts",
                      label: tF ? j.intl.string(j.t.CJ30BP) : j.intl.string(j.t.yGLjXF),
                      leadingAccessory: { type: "icon", icon: ta._ },
                      icon: ta._,
                      action: () => (tF ? (0, tr.pr)() : (0, tr.kP)(t8, t0)),
                  })),
        nv =
            null == t0.reactions || 0 === t0.reactions.length || (t0.isPoll() && !(0, ez.Gh)(t0))
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "reactions",
                      label: j.intl.string(j.t.wikODq),
                      leadingAccessory: { type: "icon", icon: $.S },
                      icon: $.S,
                      action: () =>
                          (0, eX.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([n.e("569080"), n.e("998186")]).then(
                                  n.bind(n, 112753),
                              );
                              return (t) => (0, l.jsx)(e, { ...t, message: t0 });
                          }),
                  }),
        nL =
            0 ===
            (tX = (function (e) {
                let t = (0, x.bG)([_.default], () => _.default.getId()),
                    { poll: n } = e;
                if (!e.isPoll() || null == n) return S;
                let i = [];
                return (n.expiry.isSameOrBefore(Date.now()) || e.author.id !== t || i.push(0), i);
            })(t0)).length
                ? null
                : (0, l.jsx)(l.Fragment, { children: tX.map((e) => M[e](t0)) }),
        nO = (function (e) {
            let { analyticsLocations: t } = (0, g.Ay)(),
                n = e.interactionMetadata?.authorizing_integration_owners[tx.b.USER_INSTALL],
                i = e.interactionMetadata?.authorizing_integration_owners[tx.b.GUILD_INSTALL],
                r = e.interactionMetadata?.user.id,
                o = (0, x.bG)([e5.default], () => e5.default.getUser(n)),
                c = (0, x.bG)([tv.A], () => tv.A.getGuild(i)),
                d = tT.A.getChannel(e.channel_id),
                u = d?.getGuildId(),
                A = (0, x.bG)([e5.default], () => e5.default.getUser(r));
            if (
                (a.useEffect(() => {
                    null == o && null != n && (0, tI.wz)(n);
                }, [o, n]),
                !(0, tj._)(e))
            )
                return null;
            null == A && (A = new tG.A(e.interactionMetadata?.user));
            let m = null;
            if (null != c) {
                let t = (0, tC.Iv)(c, 18, !0);
                m = (0, l.jsx)(s.Dr, {
                    disabled: !0,
                    iconLeft: () => (0, l.jsx)(tM.Ay, { guild: c, size: tM.Ay.Sizes.MINI }),
                    leadingAccessory: null != t ? { type: "image", src: t } : void 0,
                    id: "integration-owner",
                    label: c.name,
                    subtext: j.intl.formatToPlainString(j.t.ShLXXB, { application: e.author.username }),
                });
            } else
                null != o &&
                    (m = (0, l.jsx)(s.Dr, {
                        action: () =>
                            (0, tD.openUserProfileModal)({
                                userId: o.id,
                                guildId: u,
                                channelId: e.channel_id,
                                sourceAnalyticsLocations: t,
                            }),
                        leadingAccessory: { type: "avatar", src: o.getAvatarURL(u, 18) },
                        id: "integration-owner",
                        label: o.username,
                        iconLeft: () => (0, l.jsx)(tS.A, { user: o, size: t_._3.SIZE_20 }),
                        subtext: j.intl.formatToPlainString(j.t.ShLXXB, { application: e.author.username }),
                    }));
            return (0, l.jsxs)(s.Dr, {
                id: "view-interaction-info",
                label: j.intl.string(j.t.Rjezbz),
                leadingAccessory: { type: "icon", icon: eb.CircleInformationIcon },
                children: [
                    m,
                    null != A
                        ? (0, l.jsx)(s.Dr, {
                              action: () =>
                                  (0, tD.openUserProfileModal)({
                                      userId: A.id,
                                      guildId: u,
                                      channelId: e.channel_id,
                                      sourceAnalyticsLocations: t,
                                  }),
                              leadingAccessory: { type: "avatar", src: A.getAvatarURL(u, 18) },
                              iconLeft: () => (0, l.jsx)(tS.A, { user: A, size: t_._3.SIZE_20 }),
                              id: "interaction-user",
                              label: A.username,
                              subtext: j.intl.string(j.t["04gxNg"]),
                          })
                        : null,
                ],
            });
        })(t0),
        nN = (function (e, t) {
            let { reducedMotion: n } = a.useContext(J.C),
                i = (0, el.Id)(t),
                r = (0, x.bG)([en.A], () => en.A.can(X.xBc.MANAGE_MESSAGES, t) && i, [t, i]),
                o = e.reactions.reduce(
                    (e, t) =>
                        t.count_details?.vote != null ||
                        null != e.find((e) => (null != e.id && e.id === t.emoji.id) || e.name === t.emoji.name)
                            ? e
                            : [...e, t.emoji],
                    [],
                );
            return !r || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, ez.Gh)(e))
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "remove-emoji-reactions",
                      label: j.intl.string(j.t["zx/e4P"]),
                      leadingAccessory: { type: "icon", icon: eK.F },
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
                                          : eH.A.show({
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
                                      src: null == i.id ? eo.Ay.getURL(i.name ?? "") : void 0,
                                      animated: i.animated,
                                  },
                                  icon: (e) => (0, l.jsx)(eV, { ...e, reducedMotionEnabled: n.enabled, emoji: i }),
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              i.name ?? i.id,
                          ),
                      ),
                  });
        })(t0, t8),
        nw =
            ((tz = (0, el.Id)(t8)),
            !(0, x.bG)([en.A], () => en.A.can(X.xBc.MANAGE_MESSAGES, t8) && tz, [t8, tz]) ||
            null == t0.reactions ||
            0 === t0.reactions.length ||
            (t0.isPoll() && !(0, ez.Gh)(t0))
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "remove-reactions",
                      label: j.intl.string(j.t.ZbtGBm),
                      leadingAccessory: { type: "icon", icon: eq.t },
                      action: function (e) {
                          e.shiftKey
                              ? (0, Q.Go)(t8.id, t0.id)
                              : eH.A.show({
                                    title: j.intl.string(j.t.iz3vYX),
                                    body: j.intl.string(j.t.VpjOCo),
                                    confirmText: j.intl.string(j.t.p89ACt),
                                    confirmVariant: "critical-primary",
                                    cancelText: j.intl.string(j.t.gm1Vej),
                                    onConfirm: () => {
                                        (0, Q.Go)(t8.id, t0.id);
                                    },
                                });
                      },
                      color: "danger",
                  })),
        nR = (0, eE.A)(t0, t8),
        nU =
            ((tq = (0, x.bG)([e9.A], () => e9.A.getGuildId())),
            (tH = (0, e3.Qo)(tq)),
            (0, e4.ul)(t0)
                ? (0, l.jsx)(s.Dr, {
                      id: "report",
                      label: tH ? j.intl.string(j.t.n5EBAJ) : j.intl.string(j.t.GwbdGe),
                      action: () => (0, e7.V2)(t0, "web_message_context_menu"),
                      icon: tH ? eY.p : eQ.FlagIcon,
                      leadingAccessory: { type: "icon", icon: tH ? eY.p : eQ.FlagIcon },
                      color: "danger",
                  })
                : null),
        nk =
            ((tK = (0, x.bG)([e8.Ay], () => e8.Ay.get("iar_testing"))),
            (tV = (0, x.bG)([e5.default], () => e5.default.getCurrentUser())),
            (0, e4.ul)(t0) && null != tV && tV.isStaff() && tK
                ? (0, l.jsx)(s.Dr, {
                      id: "staff-test-message-report",
                      label: "[STAFF] Test Message Report",
                      action: () => (0, e7.Rj)(t0, "web_message_context_menu"),
                      icon: eQ.FlagIcon,
                      leadingAccessory: { type: "icon", icon: eQ.FlagIcon },
                      color: "danger",
                  })
                : null),
        nP = (function (e) {
            let t = (0, x.bG)([e2.A], () => e2.A.hasReportedMessage(e.channel_id, e.id)),
                n = (0, e1.KB)(e),
                i = n ? [e$.M.REPORT_TO_MOD_NEW_TAG] : [],
                [a, r] = (0, e6.kn)(i);
            return ((0, e0.l0)(() => {
                n && r(te.i.AUTO_DISMISS);
            }),
            n)
                ? (0, l.jsx)(s.Dr, {
                      id: "report-to-mod",
                      label: t ? j.intl.string(tt.default["8wsdng"]) : j.intl.string(tt.default["1D+vqy"]),
                      action: () => {
                          (r(te.i.USER_DISMISS), (0, e7.dy)(e));
                      },
                      icon: eQ.FlagIcon,
                      disabled: t,
                      leadingAccessory: { type: "icon", icon: eQ.FlagIcon },
                      badge: a === e$.M.REPORT_TO_MOD_NEW_TAG ? "new" : void 0,
                      color: "danger",
                  })
                : null;
        })(t0),
        nB = (0, eG.A)({ type: t2, id: t1, name: t3 }),
        nF = (function (e, t) {
            let { perGuildMaxCount: n } = R.i$[H],
                { isLoading: i, saveRule: r, errorMessage: o } = (0, U.S)(),
                { createNewEditingRule: d } = (0, U.U)(),
                [u, g] = a.useState(!1),
                [A, m] = (0, w.H6)(t),
                { rulesByTriggerType: y, updateRule: p } = (0, w.wP)(t),
                f = a.useMemo(() => y[H] ?? [], [y]),
                h = 0 === f.length,
                E = n > f.length && !h;
            if (!a.useMemo(() => (0, k.i_)(t), [t]) || null == e || 0 === e.length || null == t) return null;
            let b = e.split(" "),
                x = b.length;
            try {
                (0, N.wk)(b, z.bV);
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
                (await r(n, f),
                    p(n),
                    null != o
                        ? (0, G.P0)((0, T.o)(j.intl.string(j.t.wH6L0r), v.Ck.FAILURE))
                        : (0, G.P0)((0, T.o)(j.intl.string(j.t["0rdYm2"]), v.Ck.SUCCESS)));
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
                                let t = (0, R.J6)(H).reduce((t, n) => {
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
                                            className: q.XX,
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
        })(t7, t8.getGuildId()),
        nX = (0, p.A)(t4, t0, {
            shouldHideMediaOptions: ns,
            contentType: t6?.contentType,
            originalContentType: t6?.originalContentType,
        }),
        nz =
            ((tW = (0, tN.Fg)(t0)),
            (tJ = null != t6 && (0, tN.qo)({ type: tO.D.GenericMedia, media: t6 }, tW)),
            null != t6 && tJ
                ? (0, l.jsx)(
                      s.Dr,
                      {
                          id: "report-image-false-positive",
                          label: j.intl.string(j.t.ZH7P2h),
                          action: function () {
                              null != t6 &&
                                  (0, eX.openModalLazy)(async () => {
                                      let { default: e } = await n(679276);
                                      return (t) =>
                                          (0, l.jsx)(e, {
                                              channelId: t0.channel_id,
                                              messageId: t0.id,
                                              mediaItemUrl: t6.url,
                                              ...t,
                                          });
                                  });
                          },
                          leadingAccessory: { type: "icon", icon: tL.D },
                          icon: tL.D,
                      },
                      "report-image-false-positive",
                  )
                : null),
        nq =
            ((tZ = t0.getContentMessage()),
            (0, eL.Lt)(tZ.flags, X.pr7.IS_VOICE_MESSAGE) && 0 !== tZ.attachments.length
                ? (0, l.jsx)(s.Dr, {
                      id: "save-voice-message-audio",
                      label: j.intl.string(j.t.vbAEaA),
                      leadingAccessory: { type: "icon", icon: tw.DownloadIcon },
                      icon: tw.DownloadIcon,
                      action: () => {
                          let e = (0, tR.XW)(tZ.attachments[0].url);
                          (0, tU.h)({ href: e });
                      },
                  })
                : null),
        nH =
            ((t = { shouldHideMediaOptions: ns }),
            (t$ = t6?.url ?? ""),
            (tY = (0, x.bG)([tk.Ay], () => tk.Ay.isVideoStatsEnabled(t$))),
            (tQ = a.useCallback(() => {
                "" !== t$ && (0, tk.FM)(t$);
            }, [t$])),
            null != t6 && (0, tP.XB)(t6.contentType) && t?.shouldHideMediaOptions !== !0
                ? (0, l.jsx)(s.sL, {
                      id: "video-stats-for-nerds",
                      label: "Stats for Nerds",
                      leadingAccessory: { type: "icon", icon: eb.CircleInformationIcon },
                      checked: tY,
                      action: tQ,
                  })
                : null),
        nK = (0, f.A)(t9 ?? t5, ne, t0, { shouldHideMediaOptions: ns }),
        nV = (0, A.A)({ id: t0.id, label: j.intl.string(j.t.zBoHlf), shiftId: `${t0.channel_id}-${t0.id}` }),
        nW = (function (e) {
            let { messageId: t, itemId: n, type: i, imageSrc: r } = e,
                o = ea.Q_.useSetting(),
                { tidaWebformEnabled: c } = m.A.useExperiment(
                    { location: "useMessageDetailsItem" },
                    { autoTrackExposure: !1 },
                ),
                d = a.useCallback(() => {
                    (0, eh.C)(t);
                }, [t]),
                u = a.useCallback(() => {
                    null != n && (0, eh.C)(n);
                }, [n]),
                g = a.useCallback(() => {
                    null != r && (0, eh.C)(r);
                }, [r]),
                A = a.useCallback(() => {
                    null != r && (0, ej.A)(r);
                }, [r]),
                y = "sticker" === i;
            if (!o || !eh.p5 || !c || ("emoji" !== i && !y) || null == n) return null;
            let p = y ? j.intl.string(j.t.SJ3249) : j.intl.string(j.t.Ap2oVy),
                f = y ? j.intl.string(j.t.B1ubHx) : j.intl.string(j.t.cIoudn),
                h = y ? j.intl.string(j.t["qAEi+C"]) : j.intl.string(j.t.gDAM2n);
            return (0, l.jsxs)(s.Dr, {
                id: "message-details",
                label: j.intl.string(j.t.IqqJNI),
                leadingAccessory: { type: "icon", icon: eb.CircleInformationIcon },
                children: [
                    (0, l.jsx)(s.Dr, {
                        id: "copy-message-id",
                        label: j.intl.string(j.t.zBoHlf),
                        action: d,
                        leadingAccessory: { type: "icon", icon: ex.L },
                    }),
                    (0, l.jsx)(s.Dr, {
                        id: "copy-item-id",
                        label: p,
                        action: u,
                        leadingAccessory: { type: "icon", icon: ex.L },
                    }),
                    null != r &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(s.Dr, {
                                    id: "copy-image-link",
                                    label: f,
                                    action: g,
                                    leadingAccessory: { type: "icon", icon: e_.LinkIcon },
                                }),
                                (0, l.jsx)(s.Dr, {
                                    id: "open-image-link",
                                    label: h,
                                    action: A,
                                    leadingAccessory: { type: "icon", icon: eI.W },
                                    trailingIndicator: { type: "icon", icon: eS.I },
                                }),
                            ],
                        }),
                ],
            });
        })({ messageId: t0.id, itemId: t1, type: t2, imageSrc: t5 }),
        nJ = (0, l.jsx)(s.rX, { children: nW ?? nV }),
        nZ = (0, l.jsxs)(s.rX, { children: [nB, nF, nX, nz, nq, nH] });
    return (0, l.jsxs)(o.W, {
        "data-menu-migrated": !0,
        navId: na,
        onClose: nl,
        "aria-label": nr,
        onSelect: nc,
        children: [
            (0, l.jsx)(s.rX, { children: ng }),
            (0, l.jsx)(s.rX, { children: nA }),
            (0, l.jsxs)(s.rX, { children: ["" === t7 ? nu : null, nm, nv] }),
            (0, l.jsxs)(s.rX, { children: [ny, np, nf, nh] }),
            (0, l.jsxs)(s.rX, { children: [nE, nb, nx, n_, nI, nS, nj, nM, nD, nC, nG, nT, nL, nO] }),
            (0, l.jsxs)(s.rX, { children: [nN, nw, nR, nt && nU, nt && nk, nP] }),
            nd
                ? (0, l.jsxs)(l.Fragment, { children: [nJ, nZ, null == nW && (0, l.jsx)(s.rX, { children: nK })] })
                : (0, l.jsxs)(l.Fragment, { children: [nZ, (0, l.jsx)(s.rX, { children: nK }), nJ] }),
        ],
    });
}
