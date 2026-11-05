t.d(n, { default: () => nU, c: () => nP });
var i,
    l = t(477900),
    a = t(582128),
    r = t(621466),
    s = t(477782),
    o = t(165862),
    c = t(442433),
    d = t(155718),
    u = t(793574),
    g = t(688810),
    A = t(50268),
    m = t(373963),
    f = t(115184),
    y = t(777933),
    p = t(826308),
    h = t(337358),
    E = t(180662);
t(321073);
var _ = t(855986),
    b = t(46653),
    I = (((i = {})[(i.END_EARLY = 0)] = "END_EARLY"), i);
let S = [];
var x = t(792996);
let j = {
    [I.END_EARLY]: (e) =>
        (0, l.jsx)(s.Dr, {
            id: "end-poll-early",
            label: x.intl.string(x.t.grdwwt),
            icon: h.O,
            leadingAccessory: { type: "icon", icon: h.O },
            action: () => {
                E.A.endPollEarly({ channelId: e.channel_id, messageId: e.id });
            },
            iconProps: { color: "currentColor" },
        }),
};
var M = t(207560),
    D = t(173500),
    v = t(129230),
    G = t(858899),
    T = t(834730),
    C = t(231483),
    L = t(627794),
    O = t(928348),
    N = t(850216),
    R = t(364806),
    w = t(979816),
    U = t(204300),
    P = t(264349),
    k = t(727419),
    F = t(652215),
    B = t(890634),
    X = t(654502);
let H = B.uh.KEYWORD;
var K = t(880457),
    q = t(503698),
    z = t.n(q),
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
        ((null != n && Q.A.canChatInGuild(n) && ee.A.can(F.xBc.ADD_REACTIONS, e)) || e.isPrivate()) && !e.isSystemDM()
    );
};
var et = t(406704),
    ei = t(253932),
    el = t(486020),
    ea = t(188567),
    er = t(690521),
    es = t(307731),
    eo = t(482496);
function ec(e) {
    let { emoji: n, reducedMotionEnabled: t, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: z()(i, eo.Z),
        src:
            null != n.id
                ? el.Ay.getEmojiURL({ id: n.id, animated: n.animated && (!t || a), size: 18 })
                : er.Ay.getURL(n.optionallyDiverseSequence ?? ""),
        alt: "",
    });
}
var ed = t(290136),
    eu = t(519222),
    eg = t(345254),
    eA = t(624479),
    em = t(257249),
    ef = t(383233),
    ey = t(957565),
    ep = t(483768),
    eh = t(885574),
    eE = t(473935),
    e_ = t(173936),
    eb = t(93688),
    eI = t(509434),
    eS = t(975807),
    ex = t(22231),
    ej = t(138399),
    eM = t(697470),
    eD = t(253925),
    ev = t(843626),
    eG = t(427209);
t(938796);
var eT = t(665260),
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
        { animated: i, src: a, surrogates: r } = n;
    return (
        null == a && null != n.id
            ? (a = el.Ay.getEmojiURL({ id: n.id, animated: !!i, size: 20 }))
            : null == a && (a = er.Ay.getURL(r)),
        (0, l.jsx)(ew.m, {
            text: (0, er.N)(n),
            hideOnClick: !0,
            spacing: 16,
            forceOpen: t,
            children: (0, l.jsx)("div", {
                "aria-label": x.intl.formatToPlainString(x.t["/iYSo6"], { emojiName: n.name }),
                className: z()(eU.x6, { [eU.in]: t }),
                children:
                    null == a || "" === a.trim()
                        ? (0, l.jsx)("span", { className: z()("emoji", "emoji-text", eU.Kk), children: r })
                        : (0, l.jsx)("img", { className: eU.Kk, src: a, alt: "" }),
            }),
        })
    );
}
var eF = t(192308),
    eB = t(969632),
    eX = t(997571),
    eH = t(157559),
    eK = t(769297);
function eq(e) {
    let { emoji: n, reducedMotionEnabled: t, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: i,
        src:
            null != n.id
                ? el.Ay.getEmojiURL({ id: n.id, animated: n.animated && (!t || a), size: 18 })
                : er.Ay.getURL(n.name ?? ""),
        alt: "",
    });
}
var ez = t(110384),
    eJ = t(973196),
    eV = t(517997),
    eW = t(554146),
    eZ = t(111159),
    e$ = t(138134),
    eY = t(964486),
    eQ = t(865116),
    e0 = t(263775),
    e8 = t(928658),
    e1 = t(400528),
    e5 = t(374710),
    e7 = t(715757),
    e6 = t(967198),
    e3 = t(287809),
    e2 = t(628691),
    e9 = t(49999),
    e4 = t(307805),
    ne = t(663417),
    nn = t(965407),
    nt = t(249700),
    ni = t(556112),
    nl = t(54570),
    na = t(8880),
    nr = t(163328),
    ns = t(620632),
    no = t(152367),
    nc = t(37646),
    nd = t(73153),
    nu = t(147087),
    ng = t(773669),
    nA = t(132183);
let nm = new Map();
var nf = t(534890),
    ny = t(181041),
    np = t(828488),
    nh = t(485845),
    nE = t(778712),
    n_ = t(803306),
    nb = t(966327),
    nI = t(597929),
    nS = t(682163),
    nx = t(702476),
    nj = t(260509),
    nM = t(619019),
    nD = t(734057),
    nv = t(71393),
    nG = t(87221),
    nT = t(930125),
    nC = t(282108),
    nL = t(32880),
    nO = t(803316),
    nN = t(889558),
    nR = t(953584),
    nw = t(273185);
function nU(e) {
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
            onHeightUpdate: y,
        } = e,
        { analyticsLocations: p } = (0, g.Ay)([u.A.MESSAGE_CONTEXT_MENU]),
        h = d,
        E = d.getAttribute("data-type"),
        _ = d.getAttribute("data-id"),
        b = d.getAttribute("data-name");
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
                (h = h.parentElement));
    let I = document.getSelection()?.toString() ?? "";
    return (0, l.jsx)(g.f5, {
        value: p,
        children: nP({
            message: o,
            channel: s,
            mediaItem: A,
            textSelection: I,
            favoriteableType: E,
            favoriteableId: _,
            favoriteableName: b,
            itemHref: n,
            itemSrc: t,
            itemSafeSrc: i,
            itemTextContent: a,
            canReport: !0,
            onHeightUpdate: y,
            onSelect: f,
            onClose: c.Z_,
            navId: "message",
            ariaLabel: x.intl.string(x.t.ChPNkN),
            shouldHideMediaOptions: m,
        }),
    });
}
function nP(e) {
    var n;
    let i,
        r,
        u,
        h,
        E,
        I,
        B,
        q,
        z,
        el,
        eo,
        ew,
        nU,
        nP,
        nk,
        nF,
        nB,
        nX,
        nH,
        nK,
        nq,
        nz,
        nJ,
        nV,
        nW,
        {
            message: nZ,
            channel: n$,
            mediaItem: nY,
            textSelection: nQ,
            favoriteableType: n0,
            favoriteableId: n8,
            favoriteableName: n1,
            itemHref: n5,
            itemSrc: n7,
            itemSafeSrc: n6,
            itemTextContent: n3,
            canReport: n2,
            onHeightUpdate: n9,
            onSelect: n4,
            onClose: te,
            navId: tn,
            ariaLabel: tt,
            shouldHideMediaOptions: ti = !1,
        } = e,
        tl = a.useRef(null);
    (a.useEffect(() => {
        tl.current = Date.now();
    }, []),
        a.useEffect(
            () => () => {
                if (null != tl.current) {
                    let e = Date.now() - tl.current;
                    v.default.track(F.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: e,
                        channel_id: n$.id,
                        guild_id: n$.getGuildId() ?? void 0,
                        message_id: nZ.id,
                    });
                }
            },
            [n$, nZ],
        ));
    let ta = a.useCallback(() => {
            if (null != tl.current) {
                let e = Date.now() - tl.current;
                v.default.track(F.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: e,
                    channel_id: n$.id,
                    guild_id: n$.getGuildId() ?? void 0,
                    message_id: nZ.id,
                });
            }
            n4?.();
        }, [n4, n$, nZ]),
        tr = (0, M.lF)(),
        ts =
            ((i = (0, Z.D6)(n$.guild_id).filter(
                (e) =>
                    !(e.useSpriteSheet && eP.indexOf(e.uniqueName ?? "") >= 0) &&
                    !er.Ay.isEmojiPremiumLocked({ emoji: e, channel: n$, intention: es.EmojiIntention.REACTION }),
            )).length > 4 && (i.length = 4),
            (r = ei.jW.useSetting()),
            (u = (0, et.Id)(n$)),
            (0, _.bG)([Q.A, ee.A], () => r && u && en(n$), [n$, u, r]) &&
            i.length > 0 &&
            nZ.type !== F.lAJ.MEDIA_MENTION_MESSAGE
                ? (0, l.jsx)(s.rX, {
                      className: eU.iE,
                      children: i.map((e, n) =>
                          (0, l.jsx)(
                              s.Dr,
                              {
                                  id: `quickreact-${e.id ?? n}`,
                                  render: (n) => {
                                      let { isFocused: t } = n;
                                      return (0, l.jsx)(ek, { emoji: e, isFocused: t });
                                  },
                                  action: () => {
                                      (0, $.BB)(n$.id, nZ.id, (0, Y.jq)(e), $.qN.MESSAGE_CONTEXT_MENU);
                                  },
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              n,
                          ),
                      ),
                  })
                : null),
        to = (0, m.A)(nQ),
        tc = (0, p.A)(nQ),
        td = (function (e, n) {
            let { reducedMotion: t } = a.useContext(J.C),
                i = (0, et.Id)(n),
                r = (0, _.bG)([Q.A, ee.A], () => en(n) && i && !n.isMediaThread(), [n, i]),
                o = (0, Z.D6)(n.getGuildId());
            if (!ei.jW.getSetting() || !r) return null;
            let c = o
                .filter(
                    (e) =>
                        !er.Ay.isEmojiFilteredOrLocked({ emoji: e, channel: n, intention: es.EmojiIntention.REACTION }),
                )
                .slice(0, 12)
                .map((i, a) =>
                    (0, l.jsx)(
                        s.Dr,
                        {
                            color: "default",
                            id: i.id ?? i.optionallyDiverseSequence ?? i.name,
                            label: `:${i.name}:`,
                            icon: (e) => (0, l.jsx)(ec, { ...e, reducedMotionEnabled: t.enabled, emoji: i }),
                            leadingAccessory: {
                                type: "emoji",
                                emojiId: i.id,
                                src: null == i.id ? er.Ay.getURL(i.optionallyDiverseSequence ?? "") : void 0,
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
            return (0, l.jsx)(s.Dr, {
                id: "add-reaction",
                label: x.intl.string(x.t.lfIHs4),
                leadingAccessory: { type: "icon", icon: V.n },
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
                            label: x.intl.string(x.t["OBCR+p"]),
                            icon: V.n,
                            leadingAccessory: { type: "icon", icon: W.S },
                            action: () => {
                                ea._.dispatchKeyed(F.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                            },
                        }),
                    ],
                }),
            });
        })(nZ, n$),
        tu =
            ((h = (0, _.bG)([b.default], () => b.default.getId())),
            (E = (0, et.Id)(n$)),
            (I = (0, et.s5)(n$)),
            (0, eM.A)(nZ, h) && E && !I
                ? (0, l.jsx)(s.Dr, {
                      id: "edit",
                      label: x.intl.string(x.t.fsBWmS),
                      action: () => ej.A.startEditMessageRecord(n$.id, nZ),
                      leadingAccessory: { type: "icon", icon: ex.PencilIcon },
                      icon: ex.PencilIcon,
                  })
                : null),
        tg =
            ((B = (0, eV.u)(n$, nZ)),
            (q = (0, eJ.A)()),
            !B || q
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "reply",
                      label: x.intl.string(x.t["5IEsGx"]),
                      leadingAccessory: { type: "icon", icon: ez.W },
                      icon: ez.W,
                      action: (e) => {
                          (0, eu.$b)(n$, nZ, e);
                      },
                  })),
        tA = (0, ev.m)(nZ)
            ? (0, l.jsx)(s.Dr, {
                  id: "forward",
                  label: x.intl.string(x.t.I3ltXO),
                  leadingAccessory: { type: "icon", icon: eG.A },
                  icon: eG.A,
                  action: () => {
                      (0, eu.Z4)(n$, nZ);
                  },
              })
            : null,
        tm = (0, et.n)(n$, nZ)
            ? (0, l.jsx)(s.Dr, {
                  id: "thread",
                  label: x.intl.string(x.t.rBIGBL),
                  leadingAccessory: { type: "icon", icon: nr.y },
                  icon: nr.y,
                  action: () => {
                      (0, eu.Nw)(n$, nZ);
                  },
              })
            : null,
        tf = (function (e) {
            if (!ey.p5) return null;
            let n = e.getContentMessage(),
                t = (0, ef._c)(n) ? (0, em.kC)(n.components) : n.content;
            return null == t || 0 === t.length
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "copy-text",
                      label: x.intl.string(x.t.JrGD7E),
                      leadingAccessory: { type: "icon", icon: eA.CopyIcon },
                      icon: eA.CopyIcon,
                      action: () => {
                          (0, ey.C)(t);
                      },
                  });
        })(nZ),
        ty = (function (e) {
            let n,
                {
                    handleTranslate: i,
                    handleRevertTranslation: r,
                    isTranslating: o,
                    isTranslated: c,
                } = (function (e) {
                    let [n, t] = a.useState(!1),
                        i = (0, _.bG)([ng.default], () => ng.default.locale);
                    return {
                        handleTranslate: a.useCallback(
                            async (l, a) => {
                                if (n) return;
                                let r = l ?? i;
                                t(!0);
                                let s = a ?? (0, x.getAvailableLocales)().find((e) => e.value === r)?.name ?? r;
                                (nm.has(e.id) || nm.set(e.id, e.content),
                                    (0, G.P0)({
                                        text: x.intl.formatToPlainString(x.t.Znl8Z8, { targetLanguage: s }),
                                        icon: no.D,
                                    }));
                                try {
                                    let n = await ns.Bo.post({
                                        url: F.Rsh.AI_TRANSLATE,
                                        body: { content: e.content, locale: r },
                                        rejectWithError: (0, ns.fT)(),
                                    });
                                    n.body &&
                                        (nd.h.dispatch({
                                            type: "MESSAGE_UPDATE",
                                            message: { id: e.id, channel_id: e.channel_id, content: n.body.content },
                                        }),
                                        (0, G.P0)({
                                            text: x.intl.formatToPlainString(x.t.FtVUqm, { targetLanguage: s }),
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
                    ((n = (0, x.getAvailableLocales)()),
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
                    ? (0, l.jsx)(s.Dr, {
                          id: "revert-translation",
                          label: x.intl.string(x.t.JC9BXn),
                          leadingAccessory: { type: "icon", icon: nc.U },
                          icon: nc.U,
                          action: r,
                          disabled: o,
                      })
                    : (0, l.jsx)(s.Dr, {
                          id: "translate",
                          label: o ? x.intl.string(x.t.SVKIdU) : x.intl.string(x.t["6epDlR"]),
                          action: () => i(),
                          leadingAccessory: { type: "icon", icon: nc.U },
                          disabled: o,
                          children: d,
                      })
                : null;
        })(nZ),
        tp = (0, eR.A)(nZ, n$),
        th = (0, eO.kn)(nZ, n$, "MessageContextMenu")
            ? (0, eT.Lt)(nZ.flags, F.pr7.IS_GUILD_OFFICIAL)
                ? (0, l.jsx)(s.Dr, {
                      id: "guild-official-unset",
                      action: () => {
                          ej.A.patchMessageGuildOfficial(n$.id, nZ.id, !1);
                      },
                      label: x.intl.string(x.t["2km5Gf"]),
                      leadingAccessory: { type: "icon", icon: eC.$ },
                  })
                : (0, l.jsx)(s.Dr, {
                      id: "guild-official-set",
                      action: () => {
                          ej.A.patchMessageGuildOfficial(n$.id, nZ.id, !0);
                      },
                      label: x.intl.string(x.t["lE/PG3"]),
                      leadingAccessory: { type: "icon", icon: eL.L },
                  })
            : null,
        tE = (0, K.A)(nZ, n$),
        t_ = (0, D.A)({
            commandType: d.kc.MESSAGE,
            commandTargetId: nZ.id,
            channel: n$,
            guildId: void 0,
            onHeightUpdate: n9,
            showIcon: !0,
        }),
        tb =
            nZ.state !== F.cmJ.SEND_FAILED
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "resend",
                      label: x.intl.string(x.t.lXHojr),
                      leadingAccessory: { type: "icon", icon: ne.RefreshIcon },
                      action: () => (0, nt.A)(n$, nZ, void 0, nn.A.getOptions(nZ.id)),
                  }),
        tI = (0, eN.A)(nZ, n$),
        tS =
            null != (z = n$.getGuildId()) &&
            nZ.type === F.lAJ.USER_JOIN &&
            ee.A.canWithPartialContext(F.xBc.MANAGE_GUILD, { guildId: z })
                ? (0, l.jsx)(s.Dr, {
                      id: "configure",
                      label: x.intl.string(x.t.NpHUi1),
                      leadingAccessory: { type: "icon", icon: ed.CircleQuestionIcon },
                      icon: ed.CircleQuestionIcon,
                      action: () => (0, eu.vc)(n$),
                  })
                : null,
        tx = (0, eg.A)(nZ, n$),
        tj =
            ((el = (0, np.WU)(n$.getGuildId(), "message_context_menu")),
            (eo = (0, _.bG)([ny.A], () => ny.A.getConversationForMessage(n$.id, nZ.id) ?? null, [n$.id, nZ.id])),
            (ew = a.useCallback(() => {
                null != eo &&
                    (console.log("[ConversationHighlighting]", ny.A.getConversation(n$.id, eo)),
                    window.open(`https://yap-time.vibeyard.tools/?conversation=${eo}`, "_blank"));
            }, [n$.id, eo])),
            el && null != eo
                ? (0, l.jsx)(s.Dr, {
                      id: "view-conversation",
                      label: "View Conversation",
                      leadingAccessory: { type: "icon", icon: nf.ChatIcon },
                      icon: nf.ChatIcon,
                      action: ew,
                  })
                : null),
        tM =
            ((nU = (0, _.bG)([na.A], () => na.A.isSpeakingMessage(n$.id, nZ.id), [n$, nZ])),
            "" === nZ.content
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "tts",
                      label: nU ? x.intl.string(x.t.CJ30BP) : x.intl.string(x.t.yGLjXF),
                      leadingAccessory: { type: "icon", icon: ni._ },
                      icon: ni._,
                      action: () => (nU ? (0, nl.pr)() : (0, nl.kP)(n$, nZ)),
                  })),
        tD =
            null == nZ.reactions || 0 === nZ.reactions.length || (nZ.isPoll() && !(0, eB.Gh)(nZ))
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "reactions",
                      label: x.intl.string(x.t.wikODq),
                      leadingAccessory: { type: "icon", icon: W.S },
                      icon: W.S,
                      action: () =>
                          (0, eF.mM)(async () => {
                              let { default: e } = await Promise.all([t.e(569080), t.e(998186)]).then(
                                  t.bind(t, 112753),
                              );
                              return (n) => (0, l.jsx)(e, { ...n, message: nZ });
                          }),
                  }),
        tv =
            0 ===
            (nP = (function (e) {
                let n = (0, _.bG)([b.default], () => b.default.getId()),
                    { poll: t } = e;
                if (!e.isPoll() || null == t) return S;
                let i = [];
                return (t.expiry.isSameOrBefore(Date.now()) || e.author.id !== n || i.push(0), i);
            })(nZ)).length
                ? null
                : (0, l.jsx)(l.Fragment, { children: nP.map((e) => j[e](nZ)) }),
        tG = (function (e) {
            let { analyticsLocations: n } = (0, g.Ay)(),
                t = e.interactionMetadata?.authorizing_integration_owners[nh.b.USER_INSTALL],
                i = e.interactionMetadata?.authorizing_integration_owners[nh.b.GUILD_INSTALL],
                r = e.interactionMetadata?.user.id,
                o = (0, _.bG)([e3.default], () => e3.default.getUser(t)),
                c = (0, _.bG)([nv.A], () => nv.A.getGuild(i)),
                d = nD.A.getChannel(e.channel_id),
                u = d?.getGuildId(),
                A = (0, _.bG)([e3.default], () => e3.default.getUser(r));
            if (
                (a.useEffect(() => {
                    null == o && null != t && (0, n_.wz)(t);
                }, [o, t]),
                !(0, nI._)(e))
            )
                return null;
            null == A && (A = new nM.A(e.interactionMetadata?.user));
            let m = null;
            if (null != c) {
                let n = (0, nj.Iv)(c, 18, !0);
                m = (0, l.jsx)(s.Dr, {
                    disabled: !0,
                    iconLeft: () => (0, l.jsx)(nS.Ay, { guild: c, size: nS.Ay.Sizes.MINI }),
                    leadingAccessory: null != n ? { type: "image", src: n } : void 0,
                    id: "integration-owner",
                    label: c.name,
                    subtext: x.intl.formatToPlainString(x.t.ShLXXB, { application: e.author.username }),
                });
            } else
                null != o &&
                    (m = (0, l.jsx)(s.Dr, {
                        action: () =>
                            (0, nx.openUserProfileModal)({
                                userId: o.id,
                                guildId: u,
                                channelId: e.channel_id,
                                sourceAnalyticsLocations: n,
                            }),
                        leadingAccessory: { type: "avatar", src: o.getAvatarURL(u, 18) },
                        id: "integration-owner",
                        label: o.username,
                        iconLeft: () => (0, l.jsx)(nb.A, { user: o, size: nE._3.SIZE_20 }),
                        subtext: x.intl.formatToPlainString(x.t.ShLXXB, { application: e.author.username }),
                    }));
            return (0, l.jsxs)(s.Dr, {
                id: "view-interaction-info",
                label: x.intl.string(x.t.Rjezbz),
                leadingAccessory: { type: "icon", icon: eh.CircleInformationIcon },
                children: [
                    m,
                    null != A
                        ? (0, l.jsx)(s.Dr, {
                              action: () =>
                                  (0, nx.openUserProfileModal)({
                                      userId: A.id,
                                      guildId: u,
                                      channelId: e.channel_id,
                                      sourceAnalyticsLocations: n,
                                  }),
                              leadingAccessory: { type: "avatar", src: A.getAvatarURL(u, 18) },
                              iconLeft: () => (0, l.jsx)(nb.A, { user: A, size: nE._3.SIZE_20 }),
                              id: "interaction-user",
                              label: A.username,
                              subtext: x.intl.string(x.t["04gxNg"]),
                          })
                        : null,
                ],
            });
        })(nZ),
        tT = (function (e, n) {
            let { reducedMotion: t } = a.useContext(J.C),
                i = (0, et.Id)(n),
                r = (0, _.bG)([ee.A], () => ee.A.can(F.xBc.MANAGE_MESSAGES, n) && i, [n, i]),
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
                      label: x.intl.string(x.t["zx/e4P"]),
                      leadingAccessory: { type: "icon", icon: eK.F },
                      color: "danger",
                      children: o.map((i) =>
                          (0, l.jsx)(
                              s.Dr,
                              {
                                  id: `remove-emoji-reactions-${i.name ?? i.id}`,
                                  label: (0, Y.b3)(i),
                                  action: (t) => {
                                      t.shiftKey
                                          ? (0, $.Jf)(n.id, e.id, i)
                                          : eH.A.show({
                                                title: x.intl.string(x.t["73GqTz"]),
                                                body: x.intl.string(x.t.dmy5bn),
                                                confirmText: x.intl.string(x.t.p89ACt),
                                                confirmVariant: "critical-primary",
                                                cancelText: x.intl.string(x.t.gm1Vej),
                                                onConfirm: () => {
                                                    (0, $.Jf)(n.id, e.id, i);
                                                },
                                            });
                                  },
                                  leadingAccessory: {
                                      type: "emoji",
                                      emojiId: i.id,
                                      src: null == i.id ? er.Ay.getURL(i.name ?? "") : void 0,
                                      animated: i.animated,
                                  },
                                  icon: (e) => (0, l.jsx)(eq, { ...e, reducedMotionEnabled: t.enabled, emoji: i }),
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              i.name ?? i.id,
                          ),
                      ),
                  });
        })(nZ, n$),
        tC =
            ((nk = (0, et.Id)(n$)),
            !(0, _.bG)([ee.A], () => ee.A.can(F.xBc.MANAGE_MESSAGES, n$) && nk, [n$, nk]) ||
            null == nZ.reactions ||
            0 === nZ.reactions.length ||
            (nZ.isPoll() && !(0, eB.Gh)(nZ))
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "remove-reactions",
                      label: x.intl.string(x.t.ZbtGBm),
                      leadingAccessory: { type: "icon", icon: eX.t },
                      action: function (e) {
                          e.shiftKey
                              ? (0, $.Go)(n$.id, nZ.id)
                              : eH.A.show({
                                    title: x.intl.string(x.t.iz3vYX),
                                    body: x.intl.string(x.t.VpjOCo),
                                    confirmText: x.intl.string(x.t.p89ACt),
                                    confirmVariant: "critical-primary",
                                    cancelText: x.intl.string(x.t.gm1Vej),
                                    onConfirm: () => {
                                        (0, $.Go)(n$.id, nZ.id);
                                    },
                                });
                      },
                      color: "danger",
                  })),
        tL = (0, ep.A)(nZ, n$),
        tO =
            ((nF = (0, _.bG)([e6.A], () => e6.A.getGuildId())),
            (nB = (0, e7.Qo)(nF)),
            (0, e2.ul)(nZ)
                ? (0, l.jsx)(s.Dr, {
                      id: "report",
                      label: nB ? x.intl.string(x.t.n5EBAJ) : x.intl.string(x.t.GwbdGe),
                      action: () => (0, e8.V2)(nZ, "web_message_context_menu"),
                      icon: nB ? eZ.p : e$.FlagIcon,
                      leadingAccessory: { type: "icon", icon: nB ? eZ.p : e$.FlagIcon },
                      color: "danger",
                  })
                : null),
        tN =
            ((nX = (0, _.bG)([eQ.Ay], () => eQ.Ay.get("iar_testing"))),
            (nH = (0, _.bG)([e3.default], () => e3.default.getCurrentUser())),
            (0, e2.ul)(nZ) && null != nH && nH.isStaff() && nX
                ? (0, l.jsx)(s.Dr, {
                      id: "staff-test-message-report",
                      label: "[STAFF] Test Message Report",
                      action: () => (0, e8.Rj)(nZ, "web_message_context_menu"),
                      icon: e$.FlagIcon,
                      leadingAccessory: { type: "icon", icon: e$.FlagIcon },
                      color: "danger",
                  })
                : null),
        tR = (function (e) {
            let n = (0, _.bG)([e1.A], () => e1.A.hasReportedMessage(e.channel_id, e.id)),
                t = (0, e5.KB)(e),
                i = t ? [eW.M.REPORT_TO_MOD_NEW_TAG] : [],
                [a, r] = (0, e0.kn)(i);
            return ((0, eY.l0)(() => {
                t && r(e9.i.AUTO_DISMISS);
            }),
            t)
                ? (0, l.jsx)(s.Dr, {
                      id: "report-to-mod",
                      label: n ? x.intl.string(e4.default["8wsdng"]) : x.intl.string(e4.default["1D+vqy"]),
                      action: () => {
                          (r(e9.i.USER_DISMISS), (0, e8.dy)(e));
                      },
                      icon: e$.FlagIcon,
                      disabled: n,
                      leadingAccessory: { type: "icon", icon: e$.FlagIcon },
                      badge: a === eW.M.REPORT_TO_MOD_NEW_TAG ? "new" : void 0,
                      color: "danger",
                  })
                : null;
        })(nZ),
        tw = (0, eD.A)({ type: n0, id: n8, name: n1 }),
        tU = (function (e, n) {
            let { perGuildMaxCount: t } = N.i$[H],
                { isLoading: i, saveRule: r, errorMessage: o } = (0, R.S)(),
                { createNewEditingRule: d } = (0, R.U)(),
                [u, g] = a.useState(!1),
                [A, m] = (0, O.H6)(n),
                { rulesByTriggerType: f, updateRule: y } = (0, O.wP)(n),
                p = a.useMemo(() => f[H] ?? [], [f]),
                h = 0 === p.length,
                E = t > p.length && !h;
            if (!a.useMemo(() => (0, w.i_)(n), [n]) || null == e || 0 === e.length || null == n) return null;
            let _ = e.split(" "),
                b = _.length;
            try {
                (0, L.wk)(_, 1e3);
            } catch (e) {
                return null;
            }
            function I() {
                null == e ||
                    (null != n &&
                        ((0, c.Z_)(),
                        k.A.open(n, F.BEX.GUILD_AUTOMOD),
                        setTimeout(() => {
                            d(n, H, { triggerMetadata: { keywordFilter: [e], regexPatterns: [], allowList: [] } });
                        }, 400)));
            }
            let S = (0, l.jsx)(s.Dr, { id: "automod-rules-loading", label: x.intl.string(x.t.ZTNur7) });
            return (
                A ||
                    (S = (0, l.jsxs)(l.Fragment, {
                        children: [
                            h &&
                                (0, l.jsx)(s.Dr, {
                                    id: "add-first-rule",
                                    label: x.intl.string(x.t.f72Zqb),
                                    action: I,
                                    disabled: i,
                                }),
                            p.map((n) => {
                                let t = (0, N.J6)(H).reduce((e, t) => {
                                    let i = n.actions.find((e) => {
                                        let { type: n } = e;
                                        return t === n;
                                    });
                                    if (null == i) return e;
                                    let l = (0, U.x)(t, i);
                                    return e + `, ${l?.headerText}`;
                                }, "");
                                return (0, l.jsx)(
                                    s.iD,
                                    {
                                        id: n.id,
                                        label: n.name,
                                        subtext: (0, l.jsx)(T.E, {
                                            color: "text-muted",
                                            className: X.XX,
                                            variant: "body-xs/normal",
                                            children: t.slice(2),
                                        }),
                                        group: "automod-rule-selection",
                                        checked: !1,
                                        disabled: i,
                                        action: () =>
                                            (async function (n) {
                                                if (null == e || ((0, c.Z_)(), !(await (0, P.Zy)(n.name, e)))) return;
                                                let t = {
                                                    ...n,
                                                    triggerMetadata: {
                                                        ...n.triggerMetadata,
                                                        keywordFilter: [...(n.triggerMetadata?.keywordFilter ?? []), e],
                                                    },
                                                };
                                                (await r(t, p),
                                                    y(t),
                                                    null != o
                                                        ? (0, G.P0)({
                                                              text: x.intl.string(x.t.wH6L0r),
                                                              variant: "critical",
                                                          })
                                                        : (0, G.P0)({
                                                              text: x.intl.string(x.t["0rdYm2"]),
                                                              variant: "success",
                                                          }));
                                            })(n),
                                    },
                                    n.id,
                                );
                            }),
                            E &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(s.bX, {}),
                                        (0, l.jsx)(s.Dr, {
                                            id: "add-another-rule",
                                            label: x.intl.string(x.t["0K5jDE"]),
                                            action: I,
                                            disabled: i,
                                        }),
                                    ],
                                }),
                        ],
                    })),
                (0, l.jsx)(s.Dr, {
                    id: "guild-automod-add-selection",
                    label: x.intl.formatToPlainString(x.t.Kkjv1m, { keywordCount: b }),
                    leadingAccessory: { type: "icon", icon: C.ShieldIcon },
                    onFocus: function () {
                        u || (g(!0), m());
                    },
                    children: S,
                })
            );
        })(nQ, n$.getGuildId()),
        tP = (0, f.A)(n6, nZ, {
            shouldHideMediaOptions: ti,
            contentType: nY?.contentType,
            originalContentType: nY?.originalContentType,
        }),
        tk =
            ((nK = (0, nC.Fg)(nZ)),
            (nq = null != nY && (0, nC.qo)({ type: nT.D.GenericMedia, media: nY }, nK)),
            null != nY && nq
                ? (0, l.jsx)(
                      s.Dr,
                      {
                          id: "report-image-false-positive",
                          label: x.intl.string(x.t.ZH7P2h),
                          action: function () {
                              null != nY &&
                                  (0, eF.mM)(async () => {
                                      let { default: e } = await t(544135);
                                      return (n) =>
                                          (0, l.jsx)(e, {
                                              channelId: nZ.channel_id,
                                              messageId: nZ.id,
                                              mediaItemUrl: nY.url,
                                              ...n,
                                          });
                                  });
                          },
                          leadingAccessory: { type: "icon", icon: nG.D },
                          icon: nG.D,
                      },
                      "report-image-false-positive",
                  )
                : null),
        tF =
            ((nz = nZ.getContentMessage()),
            (0, eT.Lt)(nz.flags, F.pr7.IS_VOICE_MESSAGE) && 0 !== nz.attachments.length
                ? (0, l.jsx)(s.Dr, {
                      id: "save-voice-message-audio",
                      label: x.intl.string(x.t.vbAEaA),
                      leadingAccessory: { type: "icon", icon: nL.DownloadIcon },
                      icon: nL.DownloadIcon,
                      action: () => {
                          let e = (0, nO.XW)(nz.attachments[0].url);
                          (0, nN.h)({ href: e });
                      },
                  })
                : null),
        tB =
            ((n = { shouldHideMediaOptions: ti }),
            (nJ = nY?.url ?? ""),
            (nV = (0, _.bG)([nR.Ay], () => nR.Ay.isVideoStatsEnabled(nJ))),
            (nW = a.useCallback(() => {
                "" !== nJ && (0, nR.FM)(nJ);
            }, [nJ])),
            null != nY && (0, nw.XB)(nY.contentType) && n?.shouldHideMediaOptions !== !0
                ? (0, l.jsx)(s.sL, {
                      id: "video-stats-for-nerds",
                      label: "Stats for Nerds",
                      leadingAccessory: { type: "icon", icon: eh.CircleInformationIcon },
                      checked: nV,
                      action: nW,
                  })
                : null),
        tX = (0, y.A)(n5 ?? n7, n3, nZ, { shouldHideMediaOptions: ti }),
        tH = (0, A.A)({ id: nZ.id, label: x.intl.string(x.t.zBoHlf), shiftId: `${nZ.channel_id}-${nZ.id}` }),
        tK = (function (e) {
            let { messageId: n, itemId: t, type: i, imageSrc: r } = e,
                o = ei.Q_.useSetting(),
                c = (0, M.lF)(),
                d = a.useCallback(() => {
                    (0, ey.C)(n);
                }, [n]),
                u = a.useCallback(() => {
                    null != t && (0, ey.C)(t);
                }, [t]),
                g = a.useCallback(() => {
                    null != r && (0, ey.C)(r);
                }, [r]),
                A = a.useCallback(() => {
                    null != r && (0, eS.A)(r);
                }, [r]),
                m = "sticker" === i;
            if (!o || !ey.p5 || !c || ("emoji" !== i && !m) || null == t) return null;
            let f = m ? x.intl.string(x.t.SJ3249) : x.intl.string(x.t.Ap2oVy),
                y = m ? x.intl.string(x.t.B1ubHx) : x.intl.string(x.t.cIoudn),
                p = m ? x.intl.string(x.t["qAEi+C"]) : x.intl.string(x.t.gDAM2n);
            return (0, l.jsxs)(s.Dr, {
                id: "message-details",
                label: x.intl.string(x.t.IqqJNI),
                leadingAccessory: { type: "icon", icon: eh.CircleInformationIcon },
                children: [
                    (0, l.jsx)(s.Dr, {
                        id: "copy-message-id",
                        label: x.intl.string(x.t.zBoHlf),
                        action: d,
                        leadingAccessory: { type: "icon", icon: eE.L },
                    }),
                    (0, l.jsx)(s.Dr, {
                        id: "copy-item-id",
                        label: f,
                        action: u,
                        leadingAccessory: { type: "icon", icon: eE.L },
                    }),
                    null != r &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(s.Dr, {
                                    id: "copy-image-link",
                                    label: y,
                                    action: g,
                                    leadingAccessory: { type: "icon", icon: e_.LinkIcon },
                                }),
                                (0, l.jsx)(s.Dr, {
                                    id: "open-image-link",
                                    label: p,
                                    action: A,
                                    leadingAccessory: { type: "icon", icon: eb.W },
                                    trailingIndicator: { type: "icon", icon: eI.I },
                                }),
                            ],
                        }),
                ],
            });
        })({ messageId: nZ.id, itemId: n8, type: n0, imageSrc: n7 }),
        tq = (0, l.jsx)(s.rX, { children: tK ?? tH }),
        tz = (0, l.jsxs)(s.rX, { children: [tw, tU, tP, tk, tF, tB] });
    return (0, l.jsxs)(o.W, {
        "data-menu-migrated": !0,
        navId: tn,
        onClose: te,
        "aria-label": tt,
        onSelect: ta,
        children: [
            (0, l.jsx)(s.rX, { children: to }),
            (0, l.jsx)(s.rX, { children: tc }),
            (0, l.jsxs)(s.rX, { children: ["" === nQ ? ts : null, td, tD] }),
            (0, l.jsxs)(s.rX, { children: [tu, tg, tA, tm] }),
            (0, l.jsxs)(s.rX, { children: [tf, ty, tp, th, tE, t_, tb, tI, tS, tx, tj, tM, tv, tG] }),
            (0, l.jsxs)(s.rX, { children: [tT, tC, tL, n2 && tO, n2 && tN, tR] }),
            tr
                ? (0, l.jsxs)(l.Fragment, { children: [tq, tz, null == tK && (0, l.jsx)(s.rX, { children: tX })] })
                : (0, l.jsxs)(l.Fragment, { children: [tz, (0, l.jsx)(s.rX, { children: tX }), tq] }),
        ],
    });
}
