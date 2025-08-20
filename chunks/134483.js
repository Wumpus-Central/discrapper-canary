n.d(t, { Z: () => z }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(780384),
    c = n(755721),
    u = n(481060),
    d = n(358221),
    f = n(594190),
    _ = n(687516),
    p = n(210887),
    h = n(937995),
    m = n(158776),
    g = n(594174),
    E = n(617136),
    b = n(509212),
    y = n(272008),
    O = n(113434),
    v = n(569984),
    I = n(497505),
    T = n(5881),
    S = n(475595),
    A = n(566078),
    C = n(602667),
    N = n(340100),
    R = n(611855),
    P = n(644646),
    w = n(110560),
    D = n(670638),
    x = n(667105),
    L = n(860151),
    j = n(46140),
    M = n(981631),
    k = n(354459),
    U = n(388032),
    G = n(435413);
function B(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                B(e, t, n[t]);
            });
    }
    return e;
}
function V(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function H(e, t, n) {
    for (let o of e) {
        var r, i, a;
        if (o.type === k.fO.STREAM) {
            let e = null != (i = (0, _.Um)(o.stream, n)) ? i : null,
                a = (0, b.ZZ)(t, e);
            if (null != a && (null == (r = a.userStatus) ? void 0 : r.claimedAt) == null) return a;
        }
        for (let r of e)
            if (!(0, k.I)(r))
                for (let e of n.getActivities(r.user.id)) {
                    let n = (0, b.ZZ)(t, e);
                    if (null != n && (null == (a = n.userStatus) ? void 0 : a.claimedAt) == null) return n;
                }
    }
    return null;
}
function Y(e, t, n, r) {
    return e.some((e) => {
        if (e.type !== k.fO.STREAM || e.user.id !== n.id) return !1;
        let i = (0, _.Um)(e.stream, r);
        return null != i && (0, b._D)(i, t);
    });
}
function W(e) {
    var t, n, a, _;
    let { channelId: h, quest: C, previewQuest: k, isParticipatingOverride: B } = e,
        V = (0, E.O5)(),
        [H, W] = i.useState(!1),
        K = i.useCallback(() => W(!0), []),
        z = i.useCallback(() => W(!1), []),
        q = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        X = (0, s.e7)([p.Z], () => p.Z.getState().theme),
        Q = (0, l.wj)(X) ? M.BRd.DARK : M.BRd.LIGHT,
        J = (0, s.e7)([d.Z], () => d.Z.getParticipants(e.channelId), [e.channelId]),
        $ = (0, s.e7)(
            [v.Z],
            () => (0, b.PM)(v.Z.quests, v.Z.questToDeliverForPlacement, I.Ok.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: ee, isQuestInQuestBar: et } = (0, s.cj)(
            [m.Z],
            () => ({
                isCurrentUserStreamingQuestApplication: null != C && null != q && Y(J, C, q, m.Z),
                isQuestInQuestBar: (null == $ ? void 0 : $.id) === (null == C ? void 0 : C.id),
            }),
            [q, C, J, $],
        ),
        en = null != C ? A.r.build(C.config) : null,
        er = null == en ? void 0 : en.application.id,
        ei = (0, s.e7)([f.ZP, m.Z], () => {
            let e = f.ZP.getRunningGames().map((e) => e.id);
            if ((0, b.$H)(C) && e.includes(er)) return !0;
            let t = null != q ? m.Z.findActivity(q.id, (e) => e.type !== M.IIU.CUSTOM_STATUS) : null;
            return !!(null != t && (0, b.$J)(C) && (0, b._D)(t, C));
        }, [C, er, q]),
        ea = !0 === B || ee || ei,
        eo = (0, s.e7)([v.Z], () => null != C && v.Z.isEnrolling(C.id), [C]),
        es = (0, s.e7)(
            [d.Z],
            () => ((null == q ? void 0 : q.id) == null ? null : d.Z.getParticipant(h, q.id)) != null,
            [h, q],
        ),
        el = (0, O.B6)(null == C ? void 0 : C.config.expiresAt),
        ec = (0, O.B6)(null == en ? void 0 : en.rewardsExpireAt),
        eu = i.useCallback(() => {
            (0, y.AH)(C.id, {
                questContent: I.jn.QUEST_LIVE_STREAM,
                questContentCTA: E.jZ.ACCEPT_QUEST,
                sourceQuestContent: I.jn.QUEST_LIVE_STREAM,
            });
        }, [C]),
        ed = i.useCallback(() => {
            V({
                questId: C.id,
                questContent: I.jn.QUEST_LIVE_STREAM,
                questContentCTA: E.jZ.TRACK_PROGRESS,
                sourceQuestContent: I.jn.QUEST_LIVE_STREAM,
            }),
                (0, w.navigateToQuestHome)({
                    fromContent: I.jn.QUEST_LIVE_STREAM,
                    questId: C.id,
                });
        }, [C, V]),
        ef = i.useCallback(() => {
            V({
                questId: C.id,
                questContent: I.jn.QUEST_LIVE_STREAM,
                questContentCTA: E.jZ.LEARN_MORE,
                sourceQuestContent: I.jn.QUEST_LIVE_STREAM,
            }),
                (0, w.navigateToQuestHome)({
                    fromContent: I.jn.QUEST_LIVE_STREAM,
                    questId: C.id,
                });
        }, [C, V]),
        e_ = (0, x.hf)({
            quest: C,
            questContent: I.jn.QUEST_LIVE_STREAM,
            sourceQuestContent: I.jn.QUEST_LIVE_STREAM,
        }),
        ep = i.useMemo(
            () =>
                (0, T.T)({
                    quest: C,
                    location: j.dr.QUEST_CHANNEL_CALL_HEADER,
                }),
            [C],
        ),
        eh = (0, O.tP)(C),
        em = (null == (t = C.userStatus) ? void 0 : t.enrolledAt) != null,
        eg = (null == (n = C.userStatus) ? void 0 : n.completedAt) != null,
        eE = null != C.userStatus && (0, b.zE)(C.userStatus, I.jn.QUEST_LIVE_STREAM),
        eb = null != C.userStatus && (0, b.zE)(C.userStatus, I.jn.QUEST_BAR),
        ey = et && !eb;
    ep.info({
        isQuestCallHeaderDismissed: eE,
        isQuestExpired: eh,
        isQuestBarShowing: ey,
        isCurrentUserCallParticipant: es,
    });
    let eO = null != k && (null == (a = C.userStatus) ? void 0 : a.claimedAt) == null;
    if ((!eO && (eE || eh || ey)) || (!eO && !es)) return null;
    let ev = (0, b.il)(C),
        eI = (0, r.jsx)(P.Z, {
            className: G.rewardTile,
            autoplay: H,
            quest: C,
            questContent: I.jn.QUEST_LIVE_STREAM,
            location: j.dr.QUEST_CHANNEL_CALL_HEADER,
            sourceQuestContent: I.jn.QUEST_LIVE_STREAM,
        });
    return (0, r.jsxs)("div", {
        className: o()(G.wrapper, { [G.wrapperAccepted]: em }),
        onFocus: K,
        onMouseEnter: K,
        onBlur: z,
        onMouseLeave: z,
        children: [
            !em &&
                (0, r.jsxs)("div", {
                    className: G.rewardTileWrapper,
                    children: [
                        eI,
                        (0, r.jsx)(R.Z, {
                            bgOpacity: 0.32,
                            className: G.promotedTag,
                        }),
                    ],
                }),
            (0, r.jsxs)("div", {
                className: G.content,
                children: [
                    (0, r.jsxs)("div", {
                        className: G.heading,
                        children: [
                            em && ea
                                ? eI
                                : (0, r.jsx)("img", {
                                      className: G.gameTile,
                                      alt: C.config.messages.gameTitle,
                                      src: (0, S.fh)(C, S.eC.GAME_TILE, Q).url,
                                  }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: G.headingWithSubmenu,
                                        children: [
                                            (0, r.jsx)(u.X6q, {
                                                className: G.questTitle,
                                                variant: "heading-md/semibold",
                                                color: "header-primary",
                                                children: ea
                                                    ? (0, b.AV)({
                                                          quest: C,
                                                          taskDetails: ev,
                                                      })
                                                    : U.intl.formatToPlainString(U.t.EQa7oq, {
                                                          questName: C.config.messages.questName,
                                                      }),
                                            }),
                                            (0, r.jsx)(D.r, {
                                                questContent: I.jn.QUEST_LIVE_STREAM,
                                                sourceQuestContent: I.jn.QUEST_LIVE_STREAM,
                                                quest: C,
                                                preventIdle: !0,
                                                shouldShowDisclosure:
                                                    (null == (_ = C.userStatus) ? void 0 : _.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        u.P3F,
                                                        F(Z({}, e), {
                                                            className: G.submenuWrapper,
                                                            "aria-label": U.intl.string(U.t.DEoVWV),
                                                            children: (0, r.jsx)(u.xhG, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: G.submenuIcon,
                                                            }),
                                                        }),
                                                    ),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        color: "header-secondary",
                                        variant: "text-xs/medium",
                                        children: eg
                                            ? U.intl.formatToPlainString(U.t.APddvL, { expirationDate: ec })
                                            : U.intl.formatToPlainString(U.t["pX+fmp"], { expirationDate: el }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    em &&
                        !eg &&
                        !ea &&
                        (0, r.jsx)(L.Z, {
                            autoplay: H,
                            quest: C,
                            questContent: I.jn.QUEST_LIVE_STREAM,
                            taskDetails: ev,
                            location: j.dr.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: I.jn.QUEST_LIVE_STREAM,
                        }),
                    (0, r.jsxs)("div", {
                        className: G.ctas,
                        children: [
                            !em &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(c.zx, {
                                            className: G.cta,
                                            color: c.zx.Colors.PRIMARY,
                                            fullWidth: !0,
                                            size: c.zx.Sizes.SMALL,
                                            onClick: ef,
                                            children: U.intl.string(U.t.LLLLPD),
                                        }),
                                        (0, r.jsx)(c.zx, {
                                            className: G.cta,
                                            color: c.zx.Colors.BRAND,
                                            fullWidth: !0,
                                            onClick: eu,
                                            size: c.zx.Sizes.SMALL,
                                            submitting: eo,
                                            children: U.intl.string(U.t.l7E81t),
                                        }),
                                    ],
                                }),
                            em &&
                                !eg &&
                                ea &&
                                (0, r.jsx)(N.Z, {
                                    color: u.TVs.colors.BG_BRAND,
                                    quest: C,
                                }),
                            em &&
                                !eg &&
                                !ea &&
                                (0, r.jsx)(c.zx, {
                                    className: G.cta,
                                    color: c.zx.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: ed,
                                    size: c.zx.Sizes.SMALL,
                                    children: U.intl.string(U.t.VN1Ajo),
                                }),
                            eg &&
                                (0, r.jsx)(c.zx, {
                                    className: G.cta,
                                    color: c.zx.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: e_,
                                    size: c.zx.Sizes.SMALL,
                                    children: U.intl.string(U.t.cfY4PD),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function K(e) {
    let t = i.useContext(h.h9),
        n = (0, s.e7)([v.Z], () => null != v.Z.questEnrollmentBlockedUntil, []),
        a = (0, s.e7)([v.Z], () => v.Z.quests),
        o = i.useMemo(() => (0, b.MM)(a, j.Lv), [a]),
        l = (0, s.e7)([d.Z], () => d.Z.getParticipants(e.channelId), [e.channelId]),
        c = (0, s.e7)([m.Z], () => (null != e.previewQuest ? e.previewQuest : H(l, o, m.Z)), [l, o, e.previewQuest]);
    return null == c || n
        ? null
        : (0, r.jsx)(C.A, {
              questOrQuests: c,
              overrideVisibility: !t,
              questContent: I.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: I.jn.QUEST_LIVE_STREAM,
              children: () => (0, r.jsx)(W, F(Z({}, e), { quest: c })),
          });
}
let z = function (e) {
    let t = (0, s.e7)([g.default], () => g.default.getCurrentUser());
    return (0, s.e7)(
        [d.Z],
        () => ((null == t ? void 0 : t.id) == null ? null : d.Z.getParticipant(e.channelId, t.id)) != null,
        [e.channelId, t],
    ) || null != e.previewQuest
        ? (0, r.jsx)(K, Z({}, e))
        : null;
};
