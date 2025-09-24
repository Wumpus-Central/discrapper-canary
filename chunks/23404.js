n.d(t, { Z: () => j }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(210887),
    u = n(617136),
    d = n(509212),
    f = n(272008),
    _ = n(113434),
    p = n(569984),
    h = n(497505),
    m = n(373370),
    g = n(475595),
    E = n(566078),
    b = n(602667),
    y = n(611855),
    O = n(110560),
    v = n(670638),
    I = n(667105),
    T = n(860151),
    S = n(46140),
    A = n(981631),
    C = n(388032),
    N = n(408228);
function R(e, t, n) {
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
function P(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
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
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e) {
    var t;
    let { quest: n } = e,
        i = (0, _.B6)(n.config.expiresAt),
        a = (0, _.B6)(E.r.build(n.config).rewardsExpireAt),
        o = (0, s.e7)([c.Z], () => c.Z.getState().theme),
        u = (0, l.wjy)(o) ? A.BRd.DARK : A.BRd.LIGHT,
        d = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null;
    return (0, r.jsxs)("div", {
        className: N.heading,
        children: [
            (0, r.jsx)("img", {
                className: N.headingGameTile,
                alt: "",
                src: (0, g.fh)(n, g.eC.GAME_TILE, u).url,
            }),
            (0, r.jsxs)("div", {
                className: N.headingCopy,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: d
                            ? C.intl.string(C.t.XBboAA)
                            : C.intl.formatToPlainString(C.t.EQa7oq, { questName: n.config.messages.questName }),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: d
                            ? C.intl.formatToPlainString(C.t.APddvL, { expirationDate: a })
                            : C.intl.formatToPlainString(C.t["pX+fmp"], { expirationDate: i }),
                    }),
                ],
            }),
        ],
    });
}
function L(e) {
    var t, n, a;
    let { nodeRef: c, quest: g } = e,
        E = (0, u.O5)(),
        b = (0, s.e7)([p.Z], () => p.Z.isEnrolling(g.id), [g]),
        [A, R] = i.useState(!1),
        w = i.useCallback(() => R(!0), []),
        L = i.useCallback(() => R(!1), []),
        j = i.useCallback((e) => {
            e.stopPropagation();
        }, []),
        M = i.useCallback(() => {
            (0, f.AH)(g.id, {
                questContent: h.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.ACCEPT_QUEST,
                sourceQuestContent: h.jn.ACTIVITY_PANEL,
            });
        }, [g]),
        k = i.useCallback(() => {
            null != g &&
                (E({
                    questId: g.id,
                    questContent: h.jn.ACTIVITY_PANEL,
                    questContentCTA: u.jZ.TRACK_PROGRESS,
                    sourceQuestContent: h.jn.ACTIVITY_PANEL,
                }),
                (0, O.navigateToQuestHome)({
                    fromContent: h.jn.ACTIVITY_PANEL,
                    questId: g.id,
                }));
        }, [g, E]),
        U = i.useCallback(() => {
            E({
                questId: g.id,
                questContent: h.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.LEARN_MORE,
                sourceQuestContent: h.jn.ACTIVITY_PANEL,
            }),
                (0, O.navigateToQuestHome)({
                    fromContent: h.jn.ACTIVITY_PANEL,
                    questId: g.id,
                });
        }, [g.id, E]),
        G = (0, I.hf)({
            quest: g,
            questContent: h.jn.ACTIVITY_PANEL,
            sourceQuestContent: h.jn.ACTIVITY_PANEL,
        }),
        B = (null == (t = g.userStatus) ? void 0 : t.enrolledAt) != null,
        Z = (null == (n = g.userStatus) ? void 0 : n.completedAt) != null,
        F = (0, _.Rf)(g),
        V = (0, m.DD)({
            quest: g,
            taskDetails: F,
            location: S.dr.ACTIVITY_PANEL,
            questContent: h.jn.ACTIVITY_PANEL,
            sourceQuestContent: h.jn.ACTIVITY_PANEL,
        }),
        H = (0, d.Rt)(g),
        Y = (0, m.CR)({ quest: g }),
        W = H ? Y : C.intl.string(C.t.l7E81t);
    return (0, r.jsxs)("div", {
        ref: (e) => {
            c.current = e;
        },
        className: o()(N.wrapper, { [N.wrapperQuestAccepted]: B }),
        onClick: j,
        onKeyPress: j,
        onFocus: w,
        onMouseEnter: w,
        onBlur: L,
        onMouseLeave: L,
        children: [
            (0, r.jsxs)("div", {
                className: N.utils,
                children: [
                    B ? (0, r.jsx)(x, { quest: g }) : (0, r.jsx)(y.Z, {}),
                    (0, r.jsx)(v.r, {
                        quest: g,
                        questContent: h.jn.ACTIVITY_PANEL,
                        shouldShowDisclosure: (null == (a = g.userStatus) ? void 0 : a.enrolledAt) == null,
                        showShareLink: !0,
                        sourceQuestContent: h.jn.ACTIVITY_PANEL,
                        children: (e) =>
                            (0, r.jsx)(
                                l.P3F,
                                D(P({}, e), {
                                    "aria-label": C.intl.string(C.t.DEoVWV),
                                    children: (0, r.jsx)(l.xhG, {
                                        size: "md",
                                        color: "currentColor",
                                        className: N.submenuIcon,
                                    }),
                                }),
                            ),
                    }),
                ],
            }),
            !B &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(x, { quest: g }),
                        (0, r.jsx)("div", {
                            className: N.instructions,
                            children: (0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: V,
                            }),
                        }),
                    ],
                }),
            B &&
                !Z &&
                (0, r.jsx)(T.Z, {
                    autoplay: A,
                    className: N.rewardTileWithInstructions,
                    quest: g,
                    questContent: h.jn.ACTIVITY_PANEL,
                    location: S.dr.ACTIVITY_PANEL,
                    taskDetails: F,
                    sourceQuestContent: h.jn.ACTIVITY_PANEL,
                }),
            (0, r.jsxs)("div", {
                className: N.ctas,
                children: [
                    !B &&
                        (0, r.jsxs)(l.hE2, {
                            size: "sm",
                            direction: H ? "vertical" : "horizontal",
                            fullWidth: !0,
                            children: [
                                (0, r.jsx)(l.zxk, {
                                    variant: "secondary",
                                    text: C.intl.string(C.t.LLLLPD),
                                    onClick: U,
                                }),
                                (0, r.jsx)(l.zxk, {
                                    variant: "primary",
                                    text: W,
                                    onClick: M,
                                    loading: b,
                                    icon: g.config.features.includes(S.S7.CLOUD_GAMING_ACTIVITY) ? l.v3n : void 0,
                                }),
                            ],
                        }),
                    B &&
                        !Z &&
                        (0, r.jsx)(l.zxk, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: C.intl.string(C.t.VN1Ajo),
                            onClick: k,
                        }),
                    Z &&
                        (0, r.jsx)(l.zxk, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: C.intl.string(C.t.cfY4PD),
                            onClick: G,
                        }),
                ],
            }),
        ],
    });
}
let j = function (e) {
    return (0, r.jsx)(b.A, {
        questOrQuests: e.quest,
        questContent: h.jn.ACTIVITY_PANEL,
        sourceQuestContent: h.jn.ACTIVITY_PANEL,
        children: (t) => (0, r.jsx)(L, P({ nodeRef: t }, e)),
    });
};
