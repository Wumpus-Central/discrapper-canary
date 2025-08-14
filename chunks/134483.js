n.d(t, { Z: () => z }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
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
    N = n(602667),
    C = n(340100),
    R = n(611855),
    P = n(644646),
    w = n(110560),
    D = n(670638),
    L = n(667105),
    x = n(860151),
    M = n(46140),
    k = n(981631),
    j = n(354459),
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
function F(e, t) {
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
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : F(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function H(e, t, n) {
    for (let a of e) {
        var r, i, o;
        if (a.type === j.fO.STREAM) {
            let e = null != (i = (0, _.Um)(a.stream, n)) ? i : null,
                o = (0, b.ZZ)(t, e);
            if (null != o && (null == (r = o.userStatus) ? void 0 : r.claimedAt) == null) return o;
        }
        for (let r of e)
            if (!(0, j.I)(r))
                for (let e of n.getActivities(r.user.id)) {
                    let n = (0, b.ZZ)(t, e);
                    if (null != n && (null == (o = n.userStatus) ? void 0 : o.claimedAt) == null) return n;
                }
    }
    return null;
}
function Y(e, t, n, r) {
    return e.some((e) => {
        if (e.type !== j.fO.STREAM || e.user.id !== n.id) return !1;
        let i = (0, _.Um)(e.stream, r);
        return null != i && (0, b._D)(i, t);
    });
}
function W(e) {
    var t, n, o, _;
    let { channelId: h, quest: N, previewQuest: j, isParticipatingOverride: B } = e,
        F = (0, E.O5)(),
        [H, W] = i.useState(!1),
        K = i.useCallback(() => W(!0), []),
        z = i.useCallback(() => W(!1), []),
        q = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        X = (0, s.e7)([p.Z], () => p.Z.getState().theme),
        Q = (0, l.wj)(X) ? k.BRd.DARK : k.BRd.LIGHT,
        J = (0, s.e7)([d.Z], () => d.Z.getParticipants(e.channelId), [e.channelId]),
        $ = (0, s.e7)(
            [v.Z],
            () => (0, b.PM)(v.Z.quests, v.Z.questToDeliverForPlacement, I.Ok.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: ee, isQuestInQuestBar: et } = (0, s.cj)(
            [m.Z],
            () => ({
                isCurrentUserStreamingQuestApplication: null != N && null != q && Y(J, N, q, m.Z),
                isQuestInQuestBar: (null == $ ? void 0 : $.id) === (null == N ? void 0 : N.id),
            }),
            [q, N, J, $],
        ),
        en = null != N ? A.r.build(N.config) : null,
        er = null == en ? void 0 : en.application.id,
        ei = (0, s.e7)([f.ZP, m.Z], () => {
            let e = f.ZP.getRunningGames().map((e) => e.id);
            if ((0, b.$H)(N) && e.includes(er)) return !0;
            let t = null != q ? m.Z.findActivity(q.id, (e) => e.type !== k.IIU.CUSTOM_STATUS) : null;
            return !!(null != t && (0, b.$J)(N) && (0, b._D)(t, N));
        }, [N, er, q]),
        eo = !0 === B || ee || ei,
        ea = (0, s.e7)([v.Z], () => null != N && v.Z.isEnrolling(N.id), [N]),
        es = (0, s.e7)(
            [d.Z],
            () => ((null == q ? void 0 : q.id) == null ? null : d.Z.getParticipant(h, q.id)) != null,
            [h, q],
        ),
        el = (0, O.B6)(null == N ? void 0 : N.config.expiresAt),
        ec = (0, O.B6)(null == en ? void 0 : en.rewardsExpireAt),
        eu = i.useCallback(() => {
            (0, y.AH)(N.id, {
                questContent: I.jn.QUEST_LIVE_STREAM,
                questContentCTA: E.jZ.ACCEPT_QUEST,
                sourceQuestContent: I.jn.QUEST_LIVE_STREAM,
            });
        }, [N]),
        ed = i.useCallback(() => {
            F({
                questId: N.id,
                questContent: I.jn.QUEST_LIVE_STREAM,
                questContentCTA: E.jZ.TRACK_PROGRESS,
                sourceQuestContent: I.jn.QUEST_LIVE_STREAM,
            }),
                (0, w.navigateToQuestHome)({
                    fromContent: I.jn.QUEST_LIVE_STREAM,
                    questId: N.id,
                });
        }, [N, F]),
        ef = i.useCallback(() => {
            F({
                questId: N.id,
                questContent: I.jn.QUEST_LIVE_STREAM,
                questContentCTA: E.jZ.LEARN_MORE,
                sourceQuestContent: I.jn.QUEST_LIVE_STREAM,
            }),
                (0, w.navigateToQuestHome)({
                    fromContent: I.jn.QUEST_LIVE_STREAM,
                    questId: N.id,
                });
        }, [N, F]),
        e_ = (0, L.hf)({
            quest: N,
            questContent: I.jn.QUEST_LIVE_STREAM,
            sourceQuestContent: I.jn.QUEST_LIVE_STREAM,
        }),
        ep = i.useMemo(
            () =>
                (0, T.T)({
                    quest: N,
                    location: M.dr.QUEST_CHANNEL_CALL_HEADER,
                }),
            [N],
        ),
        eh = (0, O.tP)(N),
        em = (null == (t = N.userStatus) ? void 0 : t.enrolledAt) != null,
        eg = (null == (n = N.userStatus) ? void 0 : n.completedAt) != null,
        eE = null != N.userStatus && (0, b.zE)(N.userStatus, I.jn.QUEST_LIVE_STREAM),
        eb = null != N.userStatus && (0, b.zE)(N.userStatus, I.jn.QUEST_BAR),
        ey = et && !eb;
    ep.info({
        isQuestCallHeaderDismissed: eE,
        isQuestExpired: eh,
        isQuestBarShowing: ey,
        isCurrentUserCallParticipant: es,
    });
    let eO = null != j && (null == (o = N.userStatus) ? void 0 : o.claimedAt) == null;
    if ((!eO && (eE || eh || ey)) || (!eO && !es)) return null;
    let ev = (0, b.il)(N),
        eI = (0, r.jsx)(P.Z, {
            className: G.rewardTile,
            autoplay: H,
            quest: N,
            questContent: I.jn.QUEST_LIVE_STREAM,
            location: M.dr.QUEST_CHANNEL_CALL_HEADER,
            sourceQuestContent: I.jn.QUEST_LIVE_STREAM,
        });
    return (0, r.jsxs)("div", {
        className: a()(G.wrapper, { [G.wrapperAccepted]: em }),
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
                            em && eo
                                ? eI
                                : (0, r.jsx)("img", {
                                      className: G.gameTile,
                                      alt: N.config.messages.gameTitle,
                                      src: (0, S.fh)(N, S.eC.GAME_TILE, Q).url,
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
                                                children: eo
                                                    ? (0, b.AV)({
                                                          quest: N,
                                                          taskDetails: ev,
                                                      })
                                                    : U.intl.formatToPlainString(U.t.EQa7oq, {
                                                          questName: N.config.messages.questName,
                                                      }),
                                            }),
                                            (0, r.jsx)(D.r, {
                                                questContent: I.jn.QUEST_LIVE_STREAM,
                                                sourceQuestContent: I.jn.QUEST_LIVE_STREAM,
                                                quest: N,
                                                preventIdle: !0,
                                                shouldShowDisclosure:
                                                    (null == (_ = N.userStatus) ? void 0 : _.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        u.P3F,
                                                        V(Z({}, e), {
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
                        !eo &&
                        (0, r.jsx)(x.Z, {
                            autoplay: H,
                            quest: N,
                            questContent: I.jn.QUEST_LIVE_STREAM,
                            taskDetails: ev,
                            location: M.dr.QUEST_CHANNEL_CALL_HEADER,
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
                                            submitting: ea,
                                            children: U.intl.string(U.t.l7E81t),
                                        }),
                                    ],
                                }),
                            em &&
                                !eg &&
                                eo &&
                                (0, r.jsx)(C.Z, {
                                    color: u.TVs.colors.BG_BRAND,
                                    quest: N,
                                }),
                            em &&
                                !eg &&
                                !eo &&
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
        o = (0, s.e7)([v.Z], () => v.Z.quests),
        a = i.useMemo(() => (0, b.MM)(o, M.Lv), [o]),
        l = (0, s.e7)([d.Z], () => d.Z.getParticipants(e.channelId), [e.channelId]),
        c = (0, s.e7)([m.Z], () => (null != e.previewQuest ? e.previewQuest : H(l, a, m.Z)), [l, a, e.previewQuest]);
    return null == c || n
        ? null
        : (0, r.jsx)(N.A, {
              questOrQuests: c,
              overrideVisibility: !t,
              questContent: I.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: I.jn.QUEST_LIVE_STREAM,
              children: () => (0, r.jsx)(W, V(Z({}, e), { quest: c })),
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
