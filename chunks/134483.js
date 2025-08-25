n.d(t, { Z: () => K }), n(388685);
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
    T = n(475595),
    S = n(566078),
    A = n(602667),
    C = n(340100),
    N = n(611855),
    R = n(644646),
    P = n(110560),
    w = n(670638),
    D = n(667105),
    x = n(860151),
    L = n(46140),
    j = n(981631),
    k = n(354459),
    M = n(388032),
    U = n(435413);
function G(e, t, n) {
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
function B(e) {
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
                G(e, t, n[t]);
            });
    }
    return e;
}
function Z(e, t) {
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
            : Z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function F(e, t, n) {
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
function H(e, t, n, r) {
    return e.some((e) => {
        if (e.type !== k.fO.STREAM || e.user.id !== n.id) return !1;
        let i = (0, f.Um)(e.stream, r);
        return null != i && (0, E._D)(i, t);
    });
}
function Y(e) {
    var t, n, a, f;
    let { channelId: p, quest: A, previewQuest: k, isParticipatingOverride: G } = e,
        Z = (0, g.O5)(),
        [F, Y] = i.useState(!1),
        W = i.useCallback(() => Y(!0), []),
        K = i.useCallback(() => Y(!1), []),
        z = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
        q = (0, s.e7)([_.Z], () => _.Z.getState().theme),
        X = (0, l.wj)(q) ? j.BRd.DARK : j.BRd.LIGHT,
        Q = (0, s.e7)([u.Z], () => u.Z.getParticipants(e.channelId), [e.channelId]),
        J = (0, s.e7)(
            [O.Z],
            () => (0, E.PM)(O.Z.quests, O.Z.questToDeliverForPlacement, v.Ok.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: $, isQuestInQuestBar: ee } = (0, s.cj)(
            [h.Z],
            () => ({
                isCurrentUserStreamingQuestApplication: null != A && null != z && H(Q, A, z, h.Z),
                isQuestInQuestBar: (null == J ? void 0 : J.id) === (null == A ? void 0 : A.id),
            }),
            [z, A, Q, J],
        ),
        et = null != A ? S.r.build(A.config) : null,
        en = null == et ? void 0 : et.application.id,
        er = (0, s.e7)([d.ZP, h.Z], () => {
            let e = d.ZP.getRunningGames().map((e) => e.id);
            if ((0, E.$H)(A) && e.includes(en)) return !0;
            let t = null != z ? h.Z.findActivity(z.id, (e) => e.type !== j.IIU.CUSTOM_STATUS) : null;
            return !!(null != t && (0, E.$J)(A) && (0, E._D)(t, A));
        }, [A, en, z]),
        ei = !0 === G || $ || er,
        ea = (0, s.e7)([O.Z], () => null != A && O.Z.isEnrolling(A.id), [A]),
        eo = (0, s.e7)(
            [u.Z],
            () => ((null == z ? void 0 : z.id) == null ? null : u.Z.getParticipant(p, z.id)) != null,
            [p, z],
        ),
        es = (0, y.B6)(null == A ? void 0 : A.config.expiresAt),
        el = (0, y.B6)(null == et ? void 0 : et.rewardsExpireAt),
        ec = i.useCallback(() => {
            (0, b.AH)(A.id, {
                questContent: v.jn.QUEST_LIVE_STREAM,
                questContentCTA: g.jZ.ACCEPT_QUEST,
                sourceQuestContent: v.jn.QUEST_LIVE_STREAM,
            });
        }, [A]),
        eu = i.useCallback(() => {
            Z({
                questId: A.id,
                questContent: v.jn.QUEST_LIVE_STREAM,
                questContentCTA: g.jZ.TRACK_PROGRESS,
                sourceQuestContent: v.jn.QUEST_LIVE_STREAM,
            }),
                (0, P.navigateToQuestHome)({
                    fromContent: v.jn.QUEST_LIVE_STREAM,
                    questId: A.id,
                });
        }, [A, Z]),
        ed = i.useCallback(() => {
            Z({
                questId: A.id,
                questContent: v.jn.QUEST_LIVE_STREAM,
                questContentCTA: g.jZ.LEARN_MORE,
                sourceQuestContent: v.jn.QUEST_LIVE_STREAM,
            }),
                (0, P.navigateToQuestHome)({
                    fromContent: v.jn.QUEST_LIVE_STREAM,
                    questId: A.id,
                });
        }, [A, Z]),
        ef = (0, D.hf)({
            quest: A,
            questContent: v.jn.QUEST_LIVE_STREAM,
            sourceQuestContent: v.jn.QUEST_LIVE_STREAM,
        }),
        e_ = i.useMemo(
            () =>
                (0, I.T)({
                    quest: A,
                    location: L.dr.QUEST_CHANNEL_CALL_HEADER,
                }),
            [A],
        ),
        ep = (0, y.tP)(A),
        eh = (null == (t = A.userStatus) ? void 0 : t.enrolledAt) != null,
        em = (null == (n = A.userStatus) ? void 0 : n.completedAt) != null,
        eg = null != A.userStatus && (0, E.zE)(A.userStatus, v.jn.QUEST_LIVE_STREAM),
        eE = null != A.userStatus && (0, E.zE)(A.userStatus, v.jn.QUEST_BAR),
        eb = ee && !eE;
    e_.info({
        isQuestCallHeaderDismissed: eg,
        isQuestExpired: ep,
        isQuestBarShowing: eb,
        isCurrentUserCallParticipant: eo,
    });
    let ey = null != k && (null == (a = A.userStatus) ? void 0 : a.claimedAt) == null;
    if ((!ey && (eg || ep || eb)) || (!ey && !eo)) return null;
    let eO = (0, E.il)(A),
        ev = (0, r.jsx)(R.Z, {
            className: U.rewardTile,
            autoplay: F,
            quest: A,
            questContent: v.jn.QUEST_LIVE_STREAM,
            location: L.dr.QUEST_CHANNEL_CALL_HEADER,
            sourceQuestContent: v.jn.QUEST_LIVE_STREAM,
        });
    return (0, r.jsxs)("div", {
        className: o()(U.wrapper, { [U.wrapperAccepted]: eh }),
        onFocus: W,
        onMouseEnter: W,
        onBlur: K,
        onMouseLeave: K,
        children: [
            !eh &&
                (0, r.jsxs)("div", {
                    className: U.rewardTileWrapper,
                    children: [
                        ev,
                        (0, r.jsx)(N.Z, {
                            bgOpacity: 0.32,
                            className: U.promotedTag,
                        }),
                    ],
                }),
            (0, r.jsxs)("div", {
                className: U.content,
                children: [
                    (0, r.jsxs)("div", {
                        className: U.heading,
                        children: [
                            eh && ei
                                ? ev
                                : (0, r.jsx)("img", {
                                      className: U.gameTile,
                                      alt: A.config.messages.gameTitle,
                                      src: (0, T.fh)(A, T.eC.GAME_TILE, X).url,
                                  }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: U.headingWithSubmenu,
                                        children: [
                                            (0, r.jsx)(c.X6q, {
                                                className: U.questTitle,
                                                variant: "heading-md/semibold",
                                                color: "header-primary",
                                                children: ei
                                                    ? (0, E.AV)({
                                                          quest: A,
                                                          taskDetails: eO,
                                                      })
                                                    : M.intl.formatToPlainString(M.t.EQa7oq, {
                                                          questName: A.config.messages.questName,
                                                      }),
                                            }),
                                            (0, r.jsx)(w.r, {
                                                questContent: v.jn.QUEST_LIVE_STREAM,
                                                sourceQuestContent: v.jn.QUEST_LIVE_STREAM,
                                                quest: A,
                                                preventIdle: !0,
                                                shouldShowDisclosure:
                                                    (null == (f = A.userStatus) ? void 0 : f.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        c.P3F,
                                                        V(B({}, e), {
                                                            className: U.submenuWrapper,
                                                            "aria-label": M.intl.string(M.t.DEoVWV),
                                                            children: (0, r.jsx)(c.xhG, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: U.submenuIcon,
                                                            }),
                                                        }),
                                                    ),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        color: "header-secondary",
                                        variant: "text-xs/medium",
                                        children: em
                                            ? M.intl.formatToPlainString(M.t.APddvL, { expirationDate: el })
                                            : M.intl.formatToPlainString(M.t["pX+fmp"], { expirationDate: es }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eh &&
                        !em &&
                        !ei &&
                        (0, r.jsx)(x.Z, {
                            autoplay: F,
                            quest: A,
                            questContent: v.jn.QUEST_LIVE_STREAM,
                            taskDetails: eO,
                            location: L.dr.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: v.jn.QUEST_LIVE_STREAM,
                        }),
                    (0, r.jsxs)("div", {
                        className: U.ctas,
                        children: [
                            !eh &&
                                (0, r.jsxs)(c.hE2, {
                                    size: "sm",
                                    fullWidth: !0,
                                    children: [
                                        (0, r.jsx)(c.zxk, {
                                            variant: "secondary",
                                            text: M.intl.string(M.t.LLLLPD),
                                            onClick: ed,
                                        }),
                                        (0, r.jsx)(c.zxk, {
                                            variant: "primary",
                                            text: M.intl.string(M.t.l7E81t),
                                            onClick: ec,
                                            loading: ea,
                                        }),
                                    ],
                                }),
                            eh &&
                                !em &&
                                ei &&
                                (0, r.jsx)(C.Z, {
                                    color: c.TVs.colors.BG_BRAND,
                                    quest: A,
                                }),
                            eh &&
                                !em &&
                                !ei &&
                                (0, r.jsx)(c.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: M.intl.string(M.t.VN1Ajo),
                                    onClick: eu,
                                }),
                            em &&
                                (0, r.jsx)(c.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: M.intl.string(M.t.cfY4PD),
                                    onClick: ef,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function W(e) {
    let t = i.useContext(p.h9),
        n = (0, s.e7)([O.Z], () => null != O.Z.questEnrollmentBlockedUntil, []),
        a = (0, s.e7)([O.Z], () => O.Z.quests),
        o = i.useMemo(() => (0, E.MM)(a, L.Lv), [a]),
        l = (0, s.e7)([u.Z], () => u.Z.getParticipants(e.channelId), [e.channelId]),
        c = (0, s.e7)([h.Z], () => (null != e.previewQuest ? e.previewQuest : F(l, o, h.Z)), [l, o, e.previewQuest]);
    return null == c || n
        ? null
        : (0, r.jsx)(A.A, {
              questOrQuests: c,
              overrideVisibility: !t,
              questContent: v.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: v.jn.QUEST_LIVE_STREAM,
              children: () => (0, r.jsx)(Y, V(B({}, e), { quest: c })),
          });
}
let K = function (e) {
    let t = (0, s.e7)([m.default], () => m.default.getCurrentUser());
    return (0, s.e7)(
        [u.Z],
        () => ((null == t ? void 0 : t.id) == null ? null : u.Z.getParticipant(e.channelId, t.id)) != null,
        [e.channelId, t],
    ) || null != e.previewQuest
        ? (0, r.jsx)(W, B({}, e))
        : null;
};
