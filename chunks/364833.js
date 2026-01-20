n.d(t, { Z: () => L }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(210887),
    u = n(22095),
    d = n(617136),
    p = n(616022),
    f = n(49436),
    g = n(937797),
    h = n(373370),
    m = n(968843),
    b = n(475595),
    E = n(862657),
    _ = n(283689),
    O = n(602667),
    I = n(698716),
    v = n(659302),
    y = n(504411),
    C = n(611855),
    S = n(346592),
    T = n(110560),
    N = n(324805),
    j = n(981631),
    x = n(388032),
    P = n(773969);
function A(e) {
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
function Z(e) {
    var t;
    let { quest: n } = e,
        i = (0, m.B6)(n.config.expiresAt),
        l = (0, m.B6)(n.config.rewardsConfig.rewardsExpireAt),
        a = (0, o.e7)([c.Z], () => c.Z.getState().theme),
        u = (0, s.wjy)(a) ? j.BRd.DARK : j.BRd.LIGHT,
        d = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null;
    return (0, r.jsxs)("div", {
        className: P.heading,
        children: [
            (0, r.jsx)("img", {
                className: P.headingGameTile,
                alt: "",
                src: (0, b.fh)(n, b.eC.GAME_TILE, u).url,
            }),
            (0, r.jsxs)("div", {
                className: P.headingCopy,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: d
                            ? x.intl.string(x.t.XBboAK)
                            : x.intl.formatToPlainString(x.t.EQa7os, { questName: n.config.messages.questName }),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: d
                            ? x.intl.formatToPlainString(x.t.APddvF, { expirationDate: l })
                            : x.intl.formatToPlainString(x.t["pX+fmn"], { expirationDate: i }),
                    }),
                ],
            }),
        ],
    });
}
function w(e) {
    var t, n, l;
    let { nodeRef: c, quest: b } = e,
        O = (0, d.O5)(),
        j = (0, o.e7)([p.Z], () => p.Z.isEnrolling(b.id), [b]),
        [w, L] = i.useState(!1),
        R = i.useCallback(() => L(!0), []),
        D = i.useCallback(() => L(!1), []),
        { launchInGameActivity: M } = (0, m.zB)(b),
        k = g.Cx.useConfig({ location: N.dr.ACTIVITY_PANEL }).enabled,
        U = i.useCallback((e) => {
            e.stopPropagation();
        }, []),
        G = i.useCallback(() => {
            (0, u.AH)(b.id, {
                questContent: f.jn.ACTIVITY_PANEL,
                questContentCTA: d.jZ.ACCEPT_QUEST,
                sourceQuestContent: f.jn.ACTIVITY_PANEL,
            }),
                (0, _.Rt)(b) && M();
        }, [b, M]),
        H = i.useCallback(() => {
            null != b &&
                (O({
                    questId: b.id,
                    questContent: f.jn.ACTIVITY_PANEL,
                    questContentCTA: d.jZ.TRACK_PROGRESS,
                    sourceQuestContent: f.jn.ACTIVITY_PANEL,
                }),
                (0, T.navigateToQuestHome)({
                    fromContent: f.jn.ACTIVITY_PANEL,
                    questId: b.id,
                }));
        }, [b, O]),
        B = i.useCallback(() => {
            O({
                questId: b.id,
                questContent: f.jn.ACTIVITY_PANEL,
                questContentCTA: d.jZ.LEARN_MORE,
                sourceQuestContent: f.jn.ACTIVITY_PANEL,
            }),
                (0, T.navigateToQuestHome)({
                    fromContent: f.jn.ACTIVITY_PANEL,
                    questId: b.id,
                });
        }, [b.id, O]),
        V = (0, v.hf)({
            quest: b,
            questContent: f.jn.ACTIVITY_PANEL,
            sourceQuestContent: f.jn.ACTIVITY_PANEL,
        }),
        F = (null == (t = b.userStatus) ? void 0 : t.enrolledAt) != null,
        z = (null == (n = b.userStatus) ? void 0 : n.completedAt) != null,
        Y = (0, m.Rf)(b),
        W = (0, h.DD)({
            quest: b,
            taskDetails: Y,
            location: N.dr.ACTIVITY_PANEL,
            questContent: f.jn.ACTIVITY_PANEL,
            sourceQuestContent: f.jn.ACTIVITY_PANEL,
        }),
        K = (0, _.Rt)(b),
        q = (0, h.CR)({ quest: b }),
        Q = K ? q : x.intl.string(x.t.l7E81v);
    return (0, r.jsxs)("div", {
        ref: (e) => {
            c.current = e;
        },
        className: a()(P.wrapper, { [P.wrapperQuestAccepted]: F }),
        onClick: U,
        onKeyPress: U,
        onFocus: R,
        onMouseEnter: R,
        onBlur: D,
        onMouseLeave: D,
        children: [
            (0, r.jsxs)("div", {
                className: P.utils,
                children: [
                    F ? (0, r.jsx)(Z, { quest: b }) : (0, r.jsx)(C.Z, {}),
                    (0, r.jsx)(I.i, {
                        quest: b,
                        questContent: f.jn.ACTIVITY_PANEL,
                        shouldShowDisclosure: (null == (l = b.userStatus) ? void 0 : l.enrolledAt) == null,
                        showShareLink: !0,
                        sourceQuestContent: f.jn.ACTIVITY_PANEL,
                        children: (e) => {
                            var t, n;
                            return (0, r.jsx)(
                                s.P3F,
                                ((t = A({}, e)),
                                (n = n =
                                    {
                                        "aria-label": x.intl.string(x.t.DEoVWZ),
                                        children: (0, r.jsx)(s.xhG, {
                                            size: "md",
                                            color: "currentColor",
                                            className: P.submenuIcon,
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
            !F &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(Z, { quest: b }),
                        (0, r.jsx)("div", {
                            className: P.instructions,
                            children: (0, r.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: W,
                            }),
                        }),
                    ],
                }),
            F &&
                !z &&
                (0, r.jsx)(S.Z, {
                    autoplay: w,
                    className: P.rewardTileWithInstructions,
                    quest: b,
                    questContent: f.jn.ACTIVITY_PANEL,
                    location: N.dr.ACTIVITY_PANEL,
                    taskDetails: Y,
                    sourceQuestContent: f.jn.ACTIVITY_PANEL,
                }),
            (0, r.jsxs)("div", {
                className: P.ctas,
                children: [
                    !F &&
                        (0, r.jsxs)(s.ButtonGroup, {
                            size: "sm",
                            direction: K ? "vertical" : "horizontal",
                            fullWidth: !0,
                            children: [
                                (0, r.jsx)(s.Button, {
                                    variant: "secondary",
                                    text: x.intl.string(x.t.LLLLPD),
                                    onClick: B,
                                }),
                                k && !(0, E.zi)(b)
                                    ? (0, r.jsx)(y.Z, {
                                          quest: b,
                                          size: "md",
                                          analyticsCtxQuestContent: f.jn.ACTIVITY_PANEL,
                                          analyticsCtxSourceQuestContent: f.jn.ACTIVITY_PANEL,
                                      })
                                    : (0, r.jsx)(s.Button, {
                                          variant: "primary",
                                          text: Q,
                                          onClick: G,
                                          loading: j,
                                          icon: (0, T.getPrimaryCtaIcon)(b),
                                      }),
                            ],
                        }),
                    F &&
                        !z &&
                        (0, r.jsx)(s.Button, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: x.intl.string(x.t.VN1Ajl),
                            onClick: H,
                        }),
                    z &&
                        (0, r.jsx)(s.Button, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: x.intl.string(x.t.cfY4PE),
                            onClick: V,
                        }),
                ],
            }),
        ],
    });
}
let L = function (e) {
    return (0, r.jsx)(O.A, {
        questOrQuests: e.quest,
        questContent: f.jn.ACTIVITY_PANEL,
        sourceQuestContent: f.jn.ACTIVITY_PANEL,
        children: (t) => (0, r.jsx)(w, A({ nodeRef: t }, e)),
    });
};
