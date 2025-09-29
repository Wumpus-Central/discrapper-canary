n.d(t, { Z: () => Z }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(210887),
    u = n(617136),
    d = n(509212),
    p = n(272008),
    f = n(113434),
    h = n(569984),
    g = n(497505),
    m = n(373370),
    b = n(475595),
    _ = n(566078),
    O = n(602667),
    E = n(611855),
    y = n(110560),
    v = n(670638),
    I = n(667105),
    S = n(860151),
    C = n(46140),
    T = n(981631),
    N = n(388032),
    j = n(123611);
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function x(e) {
    var t;
    let { quest: n } = e,
        i = (0, f.B6)(n.config.expiresAt),
        l = (0, f.B6)(_.r.build(n.config).rewardsExpireAt),
        a = (0, o.e7)([c.Z], () => c.Z.getState().theme),
        u = (0, s.wjy)(a) ? T.BRd.DARK : T.BRd.LIGHT,
        d = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null;
    return (0, r.jsxs)("div", {
        className: j.heading,
        children: [
            (0, r.jsx)("img", {
                className: j.headingGameTile,
                alt: "",
                src: (0, b.fh)(n, b.eC.GAME_TILE, u).url,
            }),
            (0, r.jsxs)("div", {
                className: j.headingCopy,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: d
                            ? N.intl.string(N.t.XBboAA)
                            : N.intl.formatToPlainString(N.t.EQa7oq, { questName: n.config.messages.questName }),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: d
                            ? N.intl.formatToPlainString(N.t.APddvL, { expirationDate: l })
                            : N.intl.formatToPlainString(N.t["pX+fmp"], { expirationDate: i }),
                    }),
                ],
            }),
        ],
    });
}
function A(e) {
    var t, n, l;
    let { nodeRef: c, quest: b } = e,
        _ = (0, u.O5)(),
        O = (0, o.e7)([h.Z], () => h.Z.isEnrolling(b.id), [b]),
        [T, A] = i.useState(!1),
        Z = i.useCallback(() => A(!0), []),
        w = i.useCallback(() => A(!1), []),
        L = i.useCallback((e) => {
            e.stopPropagation();
        }, []),
        R = i.useCallback(() => {
            (0, p.AH)(b.id, {
                questContent: g.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.ACCEPT_QUEST,
                sourceQuestContent: g.jn.ACTIVITY_PANEL,
            });
        }, [b]),
        D = i.useCallback(() => {
            null != b &&
                (_({
                    questId: b.id,
                    questContent: g.jn.ACTIVITY_PANEL,
                    questContentCTA: u.jZ.TRACK_PROGRESS,
                    sourceQuestContent: g.jn.ACTIVITY_PANEL,
                }),
                (0, y.navigateToQuestHome)({
                    fromContent: g.jn.ACTIVITY_PANEL,
                    questId: b.id,
                }));
        }, [b, _]),
        k = i.useCallback(() => {
            _({
                questId: b.id,
                questContent: g.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.LEARN_MORE,
                sourceQuestContent: g.jn.ACTIVITY_PANEL,
            }),
                (0, y.navigateToQuestHome)({
                    fromContent: g.jn.ACTIVITY_PANEL,
                    questId: b.id,
                });
        }, [b.id, _]),
        M = (0, I.hf)({
            quest: b,
            questContent: g.jn.ACTIVITY_PANEL,
            sourceQuestContent: g.jn.ACTIVITY_PANEL,
        }),
        U = (null == (t = b.userStatus) ? void 0 : t.enrolledAt) != null,
        G = (null == (n = b.userStatus) ? void 0 : n.completedAt) != null,
        B = (0, f.Rf)(b),
        V = (0, m.DD)({
            quest: b,
            taskDetails: B,
            location: C.dr.ACTIVITY_PANEL,
            questContent: g.jn.ACTIVITY_PANEL,
            sourceQuestContent: g.jn.ACTIVITY_PANEL,
        }),
        H = (0, d.Rt)(b),
        F = (0, m.CR)({ quest: b }),
        z = H ? F : N.intl.string(N.t.l7E81t);
    return (0, r.jsxs)("div", {
        ref: (e) => {
            c.current = e;
        },
        className: a()(j.wrapper, { [j.wrapperQuestAccepted]: U }),
        onClick: L,
        onKeyPress: L,
        onFocus: Z,
        onMouseEnter: Z,
        onBlur: w,
        onMouseLeave: w,
        children: [
            (0, r.jsxs)("div", {
                className: j.utils,
                children: [
                    U ? (0, r.jsx)(x, { quest: b }) : (0, r.jsx)(E.Z, {}),
                    (0, r.jsx)(v.r, {
                        quest: b,
                        questContent: g.jn.ACTIVITY_PANEL,
                        shouldShowDisclosure: (null == (l = b.userStatus) ? void 0 : l.enrolledAt) == null,
                        showShareLink: !0,
                        sourceQuestContent: g.jn.ACTIVITY_PANEL,
                        children: (e) => {
                            var t, n;
                            return (0, r.jsx)(
                                s.P3F,
                                ((t = P({}, e)),
                                (n = n =
                                    {
                                        "aria-label": N.intl.string(N.t.DEoVWV),
                                        children: (0, r.jsx)(s.xhG, {
                                            size: "md",
                                            color: "currentColor",
                                            className: j.submenuIcon,
                                        }),
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(n)).forEach(function (e) {
                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                      }),
                                t),
                            );
                        },
                    }),
                ],
            }),
            !U &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(x, { quest: b }),
                        (0, r.jsx)("div", {
                            className: j.instructions,
                            children: (0, r.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: V,
                            }),
                        }),
                    ],
                }),
            U &&
                !G &&
                (0, r.jsx)(S.Z, {
                    autoplay: T,
                    className: j.rewardTileWithInstructions,
                    quest: b,
                    questContent: g.jn.ACTIVITY_PANEL,
                    location: C.dr.ACTIVITY_PANEL,
                    taskDetails: B,
                    sourceQuestContent: g.jn.ACTIVITY_PANEL,
                }),
            (0, r.jsxs)("div", {
                className: j.ctas,
                children: [
                    !U &&
                        (0, r.jsxs)(s.hE2, {
                            size: "sm",
                            direction: H ? "vertical" : "horizontal",
                            fullWidth: !0,
                            children: [
                                (0, r.jsx)(s.zxk, {
                                    variant: "secondary",
                                    text: N.intl.string(N.t.LLLLPD),
                                    onClick: k,
                                }),
                                (0, r.jsx)(s.zxk, {
                                    variant: "primary",
                                    text: z,
                                    onClick: R,
                                    loading: O,
                                    icon: b.config.features.includes(C.S7.CLOUD_GAMING_ACTIVITY) ? s.v3n : void 0,
                                }),
                            ],
                        }),
                    U &&
                        !G &&
                        (0, r.jsx)(s.zxk, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: N.intl.string(N.t.VN1Ajo),
                            onClick: D,
                        }),
                    G &&
                        (0, r.jsx)(s.zxk, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: N.intl.string(N.t.cfY4PD),
                            onClick: M,
                        }),
                ],
            }),
        ],
    });
}
let Z = function (e) {
    return (0, r.jsx)(O.A, {
        questOrQuests: e.quest,
        questContent: g.jn.ACTIVITY_PANEL,
        sourceQuestContent: g.jn.ACTIVITY_PANEL,
        children: (t) => (0, r.jsx)(A, P({ nodeRef: t }, e)),
    });
};
