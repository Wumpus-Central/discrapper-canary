n.d(t, { Z: () => z }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(780384),
    c = n(481060),
    u = n(358221),
    d = n(594190),
    f = n(687516),
    _ = n(210887),
    p = n(937995),
    h = n(158776),
    m = n(594174),
    g = n(617136),
    E = n(509212),
    b = n(272008),
    y = n(113434),
    O = n(569984),
    v = n(497505),
    I = n(5881),
    T = n(373370),
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
    for (let o of e) {
        var r, i, a;
        if (o.type === k.fO.STREAM) {
            let e = null != (i = (0, f.Um)(o.stream, n)) ? i : null,
                a = (0, E.ZZ)(t, e);
            if (null != a && (null == (r = a.userStatus) ? void 0 : r.claimedAt) == null) return a;
        }
        for (let r of e)
            if (!(0, k.I)(r))
                for (let e of n.getActivities(r.user.id)) {
                    let n = (0, E.ZZ)(t, e);
                    if (null != n && (null == (a = n.userStatus) ? void 0 : a.claimedAt) == null) return n;
                }
    }
    return null;
}
function Y(e, t, n, r) {
    return e.some((e) => {
        if (e.type !== k.fO.STREAM || e.user.id !== n.id) return !1;
        let i = (0, f.Um)(e.stream, r);
        return null != i && (0, E._D)(i, t);
    });
}
function W(e) {
    var t, n, a, f;
    let { channelId: p, quest: C, previewQuest: k, isParticipatingOverride: B } = e,
        F = (0, g.O5)(),
        [H, W] = i.useState(!1),
        K = i.useCallback(() => W(!0), []),
        z = i.useCallback(() => W(!1), []),
        q = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
        X = (0, s.e7)([_.Z], () => _.Z.getState().theme),
        Q = (0, l.wj)(X) ? M.BRd.DARK : M.BRd.LIGHT,
        J = (0, s.e7)([u.Z], () => u.Z.getParticipants(e.channelId), [e.channelId]),
        $ = (0, s.e7)(
            [O.Z],
            () => (0, E.PM)(O.Z.quests, O.Z.questToDeliverForPlacement, v.Ok.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: ee, isQuestInQuestBar: et } = (0, s.cj)(
            [h.Z],
            () => ({
                isCurrentUserStreamingQuestApplication: null != C && null != q && Y(J, C, q, h.Z),
                isQuestInQuestBar: (null == $ ? void 0 : $.id) === (null == C ? void 0 : C.id),
            }),
            [q, C, J, $],
        ),
        en = null != C ? A.r.build(C.config) : null,
        er = null == en ? void 0 : en.application.id,
        ei = (0, s.e7)([d.ZP, h.Z], () => {
            let e = d.ZP.getRunningGames().map((e) => e.id);
            if ((0, E.$H)(C) && e.includes(er)) return !0;
            let t = null != q ? h.Z.findActivity(q.id, (e) => e.type !== M.IIU.CUSTOM_STATUS) : null;
            return !!(null != t && (0, E.$J)(C) && (0, E._D)(t, C));
        }, [C, er, q]),
        ea = !0 === B || ee || ei,
        eo = (0, s.e7)([O.Z], () => null != C && O.Z.isEnrolling(C.id), [C]),
        es = (0, s.e7)(
            [u.Z],
            () => ((null == q ? void 0 : q.id) == null ? null : u.Z.getParticipant(p, q.id)) != null,
            [p, q],
        ),
        el = (0, y.B6)(null == C ? void 0 : C.config.expiresAt),
        ec = (0, y.B6)(null == en ? void 0 : en.rewardsExpireAt),
        eu = i.useCallback(() => {
            (0, b.AH)(C.id, {
                questContent: v.jn.QUEST_LIVE_STREAM,
                questContentCTA: g.jZ.ACCEPT_QUEST,
                sourceQuestContent: v.jn.QUEST_LIVE_STREAM,
            });
        }, [C]),
        ed = i.useCallback(() => {
            F({
                questId: C.id,
                questContent: v.jn.QUEST_LIVE_STREAM,
                questContentCTA: g.jZ.TRACK_PROGRESS,
                sourceQuestContent: v.jn.QUEST_LIVE_STREAM,
            }),
                (0, w.navigateToQuestHome)({
                    fromContent: v.jn.QUEST_LIVE_STREAM,
                    questId: C.id,
                });
        }, [C, F]),
        ef = i.useCallback(() => {
            F({
                questId: C.id,
                questContent: v.jn.QUEST_LIVE_STREAM,
                questContentCTA: g.jZ.LEARN_MORE,
                sourceQuestContent: v.jn.QUEST_LIVE_STREAM,
            }),
                (0, w.navigateToQuestHome)({
                    fromContent: v.jn.QUEST_LIVE_STREAM,
                    questId: C.id,
                });
        }, [C, F]),
        e_ = (0, x.hf)({
            quest: C,
            questContent: v.jn.QUEST_LIVE_STREAM,
            sourceQuestContent: v.jn.QUEST_LIVE_STREAM,
        }),
        ep = i.useMemo(
            () =>
                (0, I.T)({
                    quest: C,
                    location: j.dr.QUEST_CHANNEL_CALL_HEADER,
                }),
            [C],
        ),
        eh = (0, T.CR)({ quest: C }),
        em = (0, E.Rt)(C),
        eg = (0, y.tP)(C),
        eE = (null == (t = C.userStatus) ? void 0 : t.enrolledAt) != null,
        eb = (null == (n = C.userStatus) ? void 0 : n.completedAt) != null,
        ey = null != C.userStatus && (0, E.zE)(C.userStatus, v.jn.QUEST_LIVE_STREAM),
        eO = null != C.userStatus && (0, E.zE)(C.userStatus, v.jn.QUEST_BAR),
        ev = et && !eO;
    ep.info({
        isQuestCallHeaderDismissed: ey,
        isQuestExpired: eg,
        isQuestBarShowing: ev,
        isCurrentUserCallParticipant: es,
    });
    let eI = null != k && (null == (a = C.userStatus) ? void 0 : a.claimedAt) == null;
    if ((!eI && (ey || eg || ev)) || (!eI && !es)) return null;
    let eT = (0, E.il)(C),
        eS = (0, r.jsx)(P.Z, {
            className: G.rewardTile,
            autoplay: H,
            quest: C,
            questContent: v.jn.QUEST_LIVE_STREAM,
            location: j.dr.QUEST_CHANNEL_CALL_HEADER,
            sourceQuestContent: v.jn.QUEST_LIVE_STREAM,
        });
    return (0, r.jsxs)("div", {
        className: o()(G.wrapper, { [G.wrapperAccepted]: eE }),
        onFocus: K,
        onMouseEnter: K,
        onBlur: z,
        onMouseLeave: z,
        children: [
            !eE &&
                (0, r.jsxs)("div", {
                    className: G.rewardTileWrapper,
                    children: [
                        eS,
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
                            eE && ea
                                ? eS
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
                                            (0, r.jsx)(c.X6q, {
                                                className: G.questTitle,
                                                variant: "heading-md/semibold",
                                                color: "header-primary",
                                                children: ea
                                                    ? (0, E.AV)({
                                                          quest: C,
                                                          taskDetails: eT,
                                                      })
                                                    : U.intl.formatToPlainString(U.t.EQa7oq, {
                                                          questName: C.config.messages.questName,
                                                      }),
                                            }),
                                            (0, r.jsx)(D.r, {
                                                questContent: v.jn.QUEST_LIVE_STREAM,
                                                sourceQuestContent: v.jn.QUEST_LIVE_STREAM,
                                                quest: C,
                                                preventIdle: !0,
                                                shouldShowDisclosure:
                                                    (null == (f = C.userStatus) ? void 0 : f.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        c.P3F,
                                                        V(Z({}, e), {
                                                            className: G.submenuWrapper,
                                                            "aria-label": U.intl.string(U.t.DEoVWV),
                                                            children: (0, r.jsx)(c.xhG, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: G.submenuIcon,
                                                            }),
                                                        }),
                                                    ),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        color: "header-secondary",
                                        variant: "text-xs/medium",
                                        children: eb
                                            ? U.intl.formatToPlainString(U.t.APddvL, { expirationDate: ec })
                                            : U.intl.formatToPlainString(U.t["pX+fmp"], { expirationDate: el }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eE &&
                        !eb &&
                        !ea &&
                        (0, r.jsx)(L.Z, {
                            autoplay: H,
                            quest: C,
                            questContent: v.jn.QUEST_LIVE_STREAM,
                            taskDetails: eT,
                            location: j.dr.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: v.jn.QUEST_LIVE_STREAM,
                        }),
                    (0, r.jsxs)("div", {
                        className: G.ctas,
                        children: [
                            !eE &&
                                (0, r.jsxs)(c.Kqy, {
                                    direction: "horizontal",
                                    children: [
                                        (0, r.jsx)(c.zxk, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: U.intl.string(U.t.LLLLPD),
                                            onClick: ef,
                                            fullWidth: !em || C.config.features.includes(j.S7.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        (0, r.jsx)(c.zxk, {
                                            size: "sm",
                                            variant: "primary",
                                            fullWidth: !0,
                                            text: eh,
                                            onClick: eu,
                                            loading: eo,
                                        }),
                                    ],
                                }),
                            eE &&
                                !eb &&
                                ea &&
                                (0, r.jsx)(N.Z, {
                                    color: c.TVs.colors.BG_BRAND,
                                    quest: C,
                                }),
                            eE &&
                                !eb &&
                                !ea &&
                                (0, r.jsx)(c.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: U.intl.string(U.t.VN1Ajo),
                                    onClick: ed,
                                }),
                            eb &&
                                (0, r.jsx)(c.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: U.intl.string(U.t.cfY4PD),
                                    onClick: e_,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function K(e) {
    let t = i.useContext(p.h9),
        n = (0, s.e7)([O.Z], () => null != O.Z.questEnrollmentBlockedUntil, []),
        a = (0, s.e7)([O.Z], () => O.Z.quests),
        o = i.useMemo(() => (0, E.NI)(a, j.Lv), [a]),
        l = (0, s.e7)([u.Z], () => u.Z.getParticipants(e.channelId), [e.channelId]),
        c = (0, s.e7)([h.Z], () => (null != e.previewQuest ? e.previewQuest : H(l, o, h.Z)), [l, o, e.previewQuest]);
    return null == c || n
        ? null
        : (0, r.jsx)(C.A, {
              questOrQuests: c,
              overrideVisibility: !t,
              questContent: v.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: v.jn.QUEST_LIVE_STREAM,
              children: () => (0, r.jsx)(W, V(Z({}, e), { quest: c })),
          });
}
let z = function (e) {
    let t = (0, s.e7)([m.default], () => m.default.getCurrentUser());
    return (0, s.e7)(
        [u.Z],
        () => ((null == t ? void 0 : t.id) == null ? null : u.Z.getParticipant(e.channelId, t.id)) != null,
        [e.channelId, t],
    ) || null != e.previewQuest
        ? (0, r.jsx)(K, Z({}, e))
        : null;
};
