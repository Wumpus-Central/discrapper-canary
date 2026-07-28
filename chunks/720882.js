n.d(t, { c: () => tw, default: () => tk });
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
    eV = n(517997),
    eW = n(554146),
    eJ = n(111159),
    eZ = n(138134),
    e$ = n(964486),
    eY = n(865116),
    eQ = n(131607),
    e0 = n(928658),
    e8 = n(400528),
    e7 = n(892340),
    e2 = n(715757),
    e1 = n(967198),
    e6 = n(287809),
    e5 = n(628691),
    e3 = n(49999),
    e9 = n(221314),
    e4 = n(663417),
    te = n(965407),
    tt = n(249700),
    tn = n(556112),
    ti = n(54570),
    tl = n(8880),
    ta = n(163328),
    tr = n(562465),
    ts = n(37646),
    to = n(228366),
    tc = n(147087),
    td = n(773669),
    tu = n(842056);
let tg = new Map();
var tA = n(534890),
    tm = n(604681),
    ty = n(828488),
    tp = n(623562),
    tf = n(619065),
    th = n(485845),
    tE = n(778712),
    tb = n(803306),
    tx = n(966327),
    t_ = n(597929),
    tj = n(548118),
    tS = n(975732),
    tI = n(260509),
    tM = n(889227),
    tD = n(734057),
    tG = n(71393),
    tT = n(87221),
    tC = n(930125),
    tv = n(282108),
    tL = n(32880),
    tO = n(803316),
    tN = n(123917),
    tR = n(953584),
    tU = n(59318);
function tk(e) {
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
        children: tw({
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
function tw(e) {
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
        tk,
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
        {
            message: tW,
            channel: tJ,
            mediaItem: tZ,
            textSelection: t$,
            favoriteableType: tY,
            favoriteableId: tQ,
            favoriteableName: t0,
            itemHref: t8,
            itemSrc: t7,
            itemSafeSrc: t2,
            itemTextContent: t1,
            canReport: t6,
            onHeightUpdate: t5,
            onSelect: t3,
            onClose: t9,
            navId: t4,
            ariaLabel: ne,
            shouldHideMediaOptions: nt = !1,
        } = e,
        nn = a.useRef(null);
    a.useEffect(() => {
        nn.current = Date.now();
    }, []),
        a.useEffect(
            () => () => {
                if (null != nn.current) {
                    let e = Date.now() - nn.current;
                    G.default.track(F.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: e,
                        channel_id: tJ.id,
                        guild_id: tJ.getGuildId() ?? void 0,
                        message_id: tW.id,
                    });
                }
            },
            [tJ, tW],
        );
    let ni = a.useCallback(() => {
            if (null != nn.current) {
                let e = Date.now() - nn.current;
                G.default.track(F.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: e,
                    channel_id: tJ.id,
                    guild_id: tJ.getGuildId() ?? void 0,
                    message_id: tW.id,
                });
            }
            t3?.();
        }, [t3, tJ, tW]),
        { tidaWebformEnabled: nl } = m.A.useExperiment({ location: "MessageContextMenu" }, { autoTrackExposure: !1 }),
        na =
            ((i = (0, Y.D6)(tJ.guild_id).filter(
                (e) =>
                    !(e.useSpriteSheet && ew.indexOf(e.uniqueName ?? "") >= 0) &&
                    !er.Ay.isEmojiPremiumLocked({ emoji: e, channel: tJ, intention: es.EmojiIntention.REACTION }),
            )).length > 4 && (i.length = 4),
            (r = en.jW.useSetting()),
            (u = (0, et.Id)(tJ)),
            (0, x.bG)([ei.A], () => r && u && (tJ.isPrivate() || ei.A.can(F.xBc.ADD_REACTIONS, tJ)), [tJ, u, r]) &&
            i.length > 0 &&
            tW.type !== F.lAJ.MEDIA_MENTION_MESSAGE
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
                                      (0, Q.BB)(tJ.id, tW.id, (0, ee.jq)(e), Q.qN.MESSAGE_CONTEXT_MENU);
                                  },
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              t,
                          ),
                      ),
                  })
                : null),
        nr = (0, y.A)(t$),
        ns = (0, h.A)(t$),
        no = (function (e, t) {
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
        })(tW, tJ),
        nc =
            ((E = (0, x.bG)([_.default], () => _.default.getId())),
            (b = (0, et.Id)(tJ)),
            (j = (0, et.s5)(tJ)),
            (0, eM.A)(tW, E) && b && !j
                ? (0, l.jsx)(s.Dr, {
                      id: "edit",
                      label: I.intl.string(I.t.fsBWmS),
                      action: () => eI.A.startEditMessageRecord(tJ.id, tW),
                      leadingAccessory: { type: "icon", icon: eS.R },
                      icon: eS.R,
                  })
                : null),
        nd = (0, eV.u)(tJ, tW)
            ? (0, l.jsx)(s.Dr, {
                  id: "reply",
                  label: I.intl.string(I.t["5IEsGx"]),
                  leadingAccessory: { type: "icon", icon: eK.W },
                  icon: eK.W,
                  action: (e) => {
                      (0, eu.$b)(tJ, tW, e);
                  },
              })
            : null,
        nu = (0, eG.m)(tW)
            ? (0, l.jsx)(s.Dr, {
                  id: "forward",
                  label: I.intl.string(I.t.I3ltXO),
                  leadingAccessory: { type: "icon", icon: eT.A },
                  icon: eT.A,
                  action: () => {
                      (0, eu.Z4)(tJ, tW);
                  },
              })
            : null,
        ng = (0, et.n)(tJ, tW)
            ? (0, l.jsx)(s.Dr, {
                  id: "thread",
                  label: I.intl.string(I.t.rBIGBL),
                  leadingAccessory: { type: "icon", icon: ta.y },
                  icon: ta.y,
                  action: () => {
                      (0, eu.Nw)(tJ, tW);
                  },
              })
            : null,
        nA = (function (e) {
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
        })(tW),
        nm = (function (e) {
            let t,
                {
                    handleTranslate: i,
                    handleRevertTranslation: r,
                    isTranslating: o,
                    isTranslated: c,
                } = (function (e) {
                    let [t, n] = a.useState(!1),
                        i = (0, x.bG)([td.default], () => td.default.locale);
                    return {
                        handleTranslate: a.useCallback(
                            async (l, a) => {
                                if (t) return;
                                let r = l ?? i;
                                n(!0);
                                let s = a ?? (0, I.getAvailableLocales)().find((e) => e.value === r)?.name ?? r;
                                tg.has(e.id) || tg.set(e.id, e.content),
                                    (0, T.P0)(
                                        (0, C.o)(
                                            I.intl.formatToPlainString(I.t.Znl8Z8, { targetLanguage: s }),
                                            v.Ck.AI,
                                        ),
                                    );
                                try {
                                    let t = await tr.Bo.post({
                                        url: F.Rsh.AI_TRANSLATE,
                                        body: { content: e.content, locale: r },
                                        rejectWithError: (0, tr.fT)(),
                                    });
                                    t.ok &&
                                        t.body &&
                                        (to.h.dispatch({
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
                u = (0, tc.b)();
            return null != e.content && "" !== e.content.trim() && u
                ? c
                    ? (0, l.jsx)(s.Dr, {
                          id: "revert-translation",
                          label: I.intl.string(I.t.JC9BXn),
                          leadingAccessory: { type: "icon", icon: ts.U },
                          icon: ts.U,
                          action: r,
                          disabled: o,
                      })
                    : (0, l.jsx)(s.Dr, {
                          id: "translate",
                          label: o ? I.intl.string(I.t.SVKIdU) : I.intl.string(I.t["6epDlR"]),
                          action: () => i(),
                          leadingAccessory: { type: "icon", icon: ts.U },
                          disabled: o,
                          children: d,
                      })
                : null;
        })(tW),
        ny = (0, eR.A)(tW, tJ),
        np = (0, eO.kn)(tW, tJ, "MessageContextMenu")
            ? (0, eC.Lt)(tW.flags, F.pr7.IS_GUILD_OFFICIAL)
                ? (0, l.jsx)(s.Dr, {
                      id: "guild-official-unset",
                      action: () => {
                          eI.A.patchMessageGuildOfficial(tJ.id, tW.id, !1);
                      },
                      label: I.intl.string(I.t["2km5Gf"]),
                      leadingAccessory: { type: "icon", icon: ev.$ },
                  })
                : (0, l.jsx)(s.Dr, {
                      id: "guild-official-set",
                      action: () => {
                          eI.A.patchMessageGuildOfficial(tJ.id, tW.id, !0);
                      },
                      label: I.intl.string(I.t["lE/PG3"]),
                      leadingAccessory: { type: "icon", icon: eL.L },
                  })
            : null,
        nf = (0, K.A)(tW, tJ),
        nh = (0, D.A)({
            commandType: d.kc.MESSAGE,
            commandTargetId: tW.id,
            channel: tJ,
            guildId: void 0,
            onHeightUpdate: t5,
            showIcon: !0,
        }),
        nE =
            tW.state !== F.cmJ.SEND_FAILED
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "resend",
                      label: I.intl.string(I.t.lXHojr),
                      leadingAccessory: { type: "icon", icon: e4.f },
                      action: () => (0, tt.A)(tJ, tW, void 0, te.A.getOptions(tW.id)),
                  }),
        nb = (0, eN.A)(tW, tJ),
        nx =
            null != (V = tJ.getGuildId()) &&
            tW.type === F.lAJ.USER_JOIN &&
            ei.A.canWithPartialContext(F.xBc.MANAGE_GUILD, { guildId: V })
                ? (0, l.jsx)(s.Dr, {
                      id: "configure",
                      label: I.intl.string(I.t.NpHUi1),
                      leadingAccessory: { type: "icon", icon: ed.c },
                      icon: ed.c,
                      action: () => (0, eu.vc)(tJ),
                  })
                : null,
        n_ = (0, eg.A)(tW, tJ),
        nj =
            ((W = (0, ty.WU)(tJ.getGuildId(), "message_context_menu")),
            (el = (0, x.bG)([tf.A], () => tf.A.getConversationForMessage(tJ.id, tW.id) ?? null, [tJ.id, tW.id])),
            (eo = a.useCallback(() => {
                let e = tJ.getGuildId();
                null != e && null != el && (tm.A.openConversationsSection(), (0, tp.xI)(tJ.id, e, el));
            }, [tJ, el])),
            W && null != el
                ? (0, l.jsx)(s.Dr, {
                      id: "view-conversation",
                      label: "View Conversation",
                      leadingAccessory: { type: "icon", icon: tA.o },
                      icon: tA.o,
                      action: eo,
                  })
                : null),
        nS =
            ((eU = (0, x.bG)([tl.A], () => tl.A.isSpeakingMessage(tJ.id, tW.id), [tJ, tW])),
            "" === tW.content
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "tts",
                      label: eU ? I.intl.string(I.t.CJ30BP) : I.intl.string(I.t.yGLjXF),
                      leadingAccessory: { type: "icon", icon: tn._ },
                      icon: tn._,
                      action: () => (eU ? (0, ti.pr)() : (0, ti.kP)(tJ, tW)),
                  })),
        nI =
            null == tW.reactions || 0 === tW.reactions.length || (tW.isPoll() && !(0, eX.Gh)(tW))
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
                              return (t) => (0, l.jsx)(e, { ...t, message: tW });
                          }),
                  }),
        nM =
            0 ===
            (tk = (function (e) {
                let t = (0, x.bG)([_.default], () => _.default.getId()),
                    { poll: n } = e;
                if (!e.isPoll() || null == n) return S;
                let i = [];
                return n.expiry.isSameOrBefore(Date.now()) || e.author.id !== t || i.push(0), i;
            })(tW)).length
                ? null
                : (0, l.jsx)(l.Fragment, { children: tk.map((e) => M[e](tW)) }),
        nD = (function (e) {
            let { analyticsLocations: t } = (0, g.Ay)(),
                n = e.interactionMetadata?.authorizing_integration_owners[th.b.USER_INSTALL],
                i = e.interactionMetadata?.authorizing_integration_owners[th.b.GUILD_INSTALL],
                r = e.interactionMetadata?.user.id,
                o = (0, x.bG)([e6.default], () => e6.default.getUser(n)),
                c = (0, x.bG)([tG.A], () => tG.A.getGuild(i)),
                d = tD.A.getChannel(e.channel_id),
                u = d?.getGuildId(),
                A = (0, x.bG)([e6.default], () => e6.default.getUser(r));
            if (
                (a.useEffect(() => {
                    null == o && null != n && (0, tb.getUser)(n);
                }, [o, n]),
                !(0, t_._)(e))
            )
                return null;
            null == A && (A = new tM.A(e.interactionMetadata?.user));
            let m = null;
            if (null != c) {
                let t = (0, tI.Iv)(c, 18, !0);
                m = (0, l.jsx)(s.Dr, {
                    disabled: !0,
                    iconLeft: () => (0, l.jsx)(tj.Ay, { guild: c, size: tj.Ay.Sizes.MINI }),
                    leadingAccessory: null != t ? { type: "image", src: t } : void 0,
                    id: "integration-owner",
                    label: c.name,
                    subtext: I.intl.formatToPlainString(I.t.ShLXXB, { application: e.author.username }),
                });
            } else
                null != o &&
                    (m = (0, l.jsx)(s.Dr, {
                        action: () =>
                            (0, tS.openUserProfileModal)({
                                userId: o.id,
                                guildId: u,
                                channelId: e.channel_id,
                                sourceAnalyticsLocations: t,
                            }),
                        leadingAccessory: { type: "avatar", src: o.getAvatarURL(u, 18) },
                        id: "integration-owner",
                        label: o.username,
                        iconLeft: () => (0, l.jsx)(tx.A, { user: o, size: tE._3.SIZE_20 }),
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
                                  (0, tS.openUserProfileModal)({
                                      userId: A.id,
                                      guildId: u,
                                      channelId: e.channel_id,
                                      sourceAnalyticsLocations: t,
                                  }),
                              leadingAccessory: { type: "avatar", src: A.getAvatarURL(u, 18) },
                              iconLeft: () => (0, l.jsx)(tx.A, { user: A, size: tE._3.SIZE_20 }),
                              id: "interaction-user",
                              label: A.username,
                              subtext: I.intl.string(I.t["04gxNg"]),
                          })
                        : null,
                ],
            });
        })(tW),
        nG = (function (e, t) {
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
        })(tW, tJ),
        nT =
            ((tw = (0, et.Id)(tJ)),
            !(0, x.bG)([ei.A], () => ei.A.can(F.xBc.MANAGE_MESSAGES, tJ) && tw, [tJ, tw]) ||
            null == tW.reactions ||
            0 === tW.reactions.length ||
            (tW.isPoll() && !(0, eX.Gh)(tW))
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "remove-reactions",
                      label: I.intl.string(I.t.ZbtGBm),
                      leadingAccessory: { type: "icon", icon: eF.t },
                      action: function (e) {
                          e.shiftKey
                              ? (0, Q.Go)(tJ.id, tW.id)
                              : eq.A.show({
                                    title: I.intl.string(I.t.iz3vYX),
                                    body: I.intl.string(I.t.VpjOCo),
                                    confirmText: I.intl.string(I.t.p89ACt),
                                    confirmVariant: "critical-primary",
                                    cancelText: I.intl.string(I.t.gm1Vej),
                                    onConfirm: () => {
                                        (0, Q.Go)(tJ.id, tW.id);
                                    },
                                });
                      },
                      color: "danger",
                  })),
        nC = (0, ef.A)(tW, tJ),
        nv =
            ((tP = (0, x.bG)([e1.A], () => e1.A.getGuildId())),
            (tB = (0, e2.Qo)(tP)),
            (0, e5.ul)(tW)
                ? (0, l.jsx)(s.Dr, {
                      id: "report",
                      label: tB ? I.intl.string(I.t.n5EBAJ) : I.intl.string(I.t.GwbdGe),
                      action: () => (0, e0.V2)(tW, "web_message_context_menu"),
                      icon: tB ? eJ.p : eZ.i,
                      leadingAccessory: { type: "icon", icon: tB ? eJ.p : eZ.i },
                      color: "danger",
                  })
                : null),
        nL =
            ((tX = (0, x.bG)([eY.Ay], () => eY.Ay.get("iar_testing"))),
            (tF = (0, x.bG)([e6.default], () => e6.default.getCurrentUser())),
            (0, e5.ul)(tW) && null != tF && tF.isStaff() && tX
                ? (0, l.jsx)(s.Dr, {
                      id: "staff-test-message-report",
                      label: "[STAFF] Test Message Report",
                      action: () => (0, e0.Rj)(tW, "web_message_context_menu"),
                      icon: eZ.i,
                      leadingAccessory: { type: "icon", icon: eZ.i },
                      color: "danger",
                  })
                : null),
        nO = (function (e) {
            let t = (0, x.bG)([e8.A], () => e8.A.hasReportedMessage(e.channel_id, e.id)),
                n = (0, e7.KB)(e),
                i = n ? [eW.M.REPORT_TO_MOD_NEW_TAG] : [],
                [a, r] = (0, eQ.kn)(i);
            return ((0, e$.l0)(() => {
                n && r(e3.i.AUTO_DISMISS);
            }),
            n)
                ? (0, l.jsx)(s.Dr, {
                      id: "report-to-mod",
                      label: t ? I.intl.string(e9.default["8wsdng"]) : I.intl.string(e9.default["1D+vqy"]),
                      action: () => {
                          r(e3.i.USER_DISMISS), (0, e0.dy)(e);
                      },
                      icon: eZ.i,
                      disabled: t,
                      leadingAccessory: { type: "icon", icon: eZ.i },
                      badge: a === eW.M.REPORT_TO_MOD_NEW_TAG ? "new" : void 0,
                      color: "danger",
                  })
                : null;
        })(tW),
        nN = (0, eD.A)({ type: tY, id: tQ, name: t0 }),
        nR = (function (e, t) {
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
        })(t$, tJ.getGuildId()),
        nU = (0, p.A)(t2, tW, {
            shouldHideMediaOptions: nt,
            contentType: tZ?.contentType,
            originalContentType: tZ?.originalContentType,
        }),
        nk =
            ((tq = (0, tv.Fg)(tW)),
            (tz = null != tZ && (0, tv.qo)({ type: tC.D.GenericMedia, media: tZ }, tq)),
            null != tZ && tz
                ? (0, l.jsx)(
                      s.Dr,
                      {
                          id: "report-image-false-positive",
                          label: I.intl.string(I.t.ZH7P2h),
                          action: function () {
                              null != tZ &&
                                  (0, eB.openModalLazy)(async () => {
                                      let { default: e } = await n(679276);
                                      return (t) =>
                                          (0, l.jsx)(e, {
                                              channelId: tW.channel_id,
                                              messageId: tW.id,
                                              mediaItemUrl: tZ.url,
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
        nw = (0, eC.Lt)(tW.flags, F.pr7.IS_VOICE_MESSAGE)
            ? (0, l.jsx)(s.Dr, {
                  id: "save-voice-message-audio",
                  label: I.intl.string(I.t.vbAEaA),
                  leadingAccessory: { type: "icon", icon: tL.s },
                  icon: tL.s,
                  action: () => {
                      let e = (0, tO.XW)(tW.attachments[0].url);
                      (0, tN.h)({ href: e });
                  },
              })
            : null,
        nP =
            ((t = { shouldHideMediaOptions: nt }),
            (tH = tZ?.url ?? ""),
            (tK = (0, x.bG)([tR.Ay], () => tR.Ay.isVideoStatsEnabled(tH))),
            (tV = a.useCallback(() => {
                "" !== tH && (0, tR.FM)(tH);
            }, [tH])),
            null != tZ && (0, tU.XB)(tZ.contentType) && t?.shouldHideMediaOptions !== !0
                ? (0, l.jsx)(s.sL, {
                      id: "video-stats-for-nerds",
                      label: "Stats for Nerds",
                      leadingAccessory: { type: "icon", icon: eh.m },
                      checked: tK,
                      action: tV,
                  })
                : null),
        nB = (0, f.A)(t8 ?? t7, t1, tW, { shouldHideMediaOptions: nt }),
        nX = (0, A.A)({ id: tW.id, label: I.intl.string(I.t.zBoHlf), shiftId: `${tW.channel_id}-${tW.id}` }),
        nF = (function (e) {
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
        })({ messageId: tW.id, itemId: tQ, type: tY, imageSrc: t7 }),
        nq = (0, l.jsx)(s.rX, { children: nF ?? nX }),
        nz = (0, l.jsxs)(s.rX, { children: [nN, nR, nU, nk, nw, nP] });
    return (0, l.jsxs)(o.W, {
        "data-menu-migrated": !0,
        navId: t4,
        onClose: t9,
        "aria-label": ne,
        onSelect: ni,
        children: [
            (0, l.jsx)(s.rX, { children: nr }),
            (0, l.jsx)(s.rX, { children: ns }),
            (0, l.jsxs)(s.rX, { children: ["" === t$ ? na : null, no, nI] }),
            (0, l.jsxs)(s.rX, { children: [nc, nd, nu, ng] }),
            (0, l.jsxs)(s.rX, { children: [nA, nm, ny, np, nf, nh, nE, nb, nx, n_, nj, nS, nM, nD] }),
            (0, l.jsxs)(s.rX, { children: [nG, nT, nC, t6 && nv, t6 && nL, nO] }),
            nl
                ? (0, l.jsxs)(l.Fragment, { children: [nq, nz, null == nF && (0, l.jsx)(s.rX, { children: nB })] })
                : (0, l.jsxs)(l.Fragment, { children: [nz, (0, l.jsx)(s.rX, { children: nB }), nq] }),
        ],
    });
}
