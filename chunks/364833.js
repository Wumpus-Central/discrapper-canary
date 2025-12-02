n.d(t, { Z: () => A }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(210887),
    u = n(22095),
    d = n(617136),
    p = n(616022),
    f = n(49436),
    h = n(509212),
    g = n(373370),
    m = n(968843),
    _ = n(475595),
    b = n(602667),
    E = n(698716),
    O = n(659302),
    v = n(611855),
    y = n(346592),
    I = n(110560),
    C = n(324805),
    S = n(981631),
    T = n(388032),
    N = n(378672);
function j(e) {
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
function P(e) {
    var t;
    let { quest: n } = e,
        i = (0, m.B6)(n.config.expiresAt),
        l = (0, m.B6)(n.config.rewardsConfig.rewardsExpireAt),
        a = (0, s.e7)([c.Z], () => c.Z.getState().theme),
        u = (0, o.wjy)(a) ? S.BRd.DARK : S.BRd.LIGHT,
        d = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null;
    return (0, r.jsxs)("div", {
        className: N.heading,
        children: [
            (0, r.jsx)("img", {
                className: N.headingGameTile,
                alt: "",
                src: (0, _.fh)(n, _.eC.GAME_TILE, u).url,
            }),
            (0, r.jsxs)("div", {
                className: N.headingCopy,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: d
                            ? T.intl.string(T.t.XBboAK)
                            : T.intl.formatToPlainString(T.t.EQa7os, { questName: n.config.messages.questName }),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: d
                            ? T.intl.formatToPlainString(T.t.APddvF, { expirationDate: l })
                            : T.intl.formatToPlainString(T.t["pX+fmn"], { expirationDate: i }),
                    }),
                ],
            }),
        ],
    });
}
function x(e) {
    var t, n, l;
    let { nodeRef: c, quest: _ } = e,
        b = (0, d.O5)(),
        S = (0, s.e7)([p.Z], () => p.Z.isEnrolling(_.id), [_]),
        [x, A] = i.useState(!1),
        Z = i.useCallback(() => A(!0), []),
        w = i.useCallback(() => A(!1), []),
        { launchInGameActivity: L } = (0, m.zB)(_),
        R = i.useCallback((e) => {
            e.stopPropagation();
        }, []),
        D = i.useCallback(() => {
            (0, u.AH)(_.id, {
                questContent: f.jn.ACTIVITY_PANEL,
                questContentCTA: d.jZ.ACCEPT_QUEST,
                sourceQuestContent: f.jn.ACTIVITY_PANEL,
            }),
                (0, h.Rt)(_) && L();
        }, [_, L]),
        M = i.useCallback(() => {
            null != _ &&
                (b({
                    questId: _.id,
                    questContent: f.jn.ACTIVITY_PANEL,
                    questContentCTA: d.jZ.TRACK_PROGRESS,
                    sourceQuestContent: f.jn.ACTIVITY_PANEL,
                }),
                (0, I.navigateToQuestHome)({
                    fromContent: f.jn.ACTIVITY_PANEL,
                    questId: _.id,
                }));
        }, [_, b]),
        k = i.useCallback(() => {
            b({
                questId: _.id,
                questContent: f.jn.ACTIVITY_PANEL,
                questContentCTA: d.jZ.LEARN_MORE,
                sourceQuestContent: f.jn.ACTIVITY_PANEL,
            }),
                (0, I.navigateToQuestHome)({
                    fromContent: f.jn.ACTIVITY_PANEL,
                    questId: _.id,
                });
        }, [_.id, b]),
        U = (0, O.hf)({
            quest: _,
            questContent: f.jn.ACTIVITY_PANEL,
            sourceQuestContent: f.jn.ACTIVITY_PANEL,
        }),
        G = (null == (t = _.userStatus) ? void 0 : t.enrolledAt) != null,
        B = (null == (n = _.userStatus) ? void 0 : n.completedAt) != null,
        H = (0, m.Rf)(_),
        V = (0, g.DD)({
            quest: _,
            taskDetails: H,
            location: C.dr.ACTIVITY_PANEL,
            questContent: f.jn.ACTIVITY_PANEL,
            sourceQuestContent: f.jn.ACTIVITY_PANEL,
        }),
        F = (0, h.Rt)(_),
        z = (0, g.CR)({ quest: _ }),
        Y = F ? z : T.intl.string(T.t.l7E81v);
    return (0, r.jsxs)("div", {
        ref: (e) => {
            c.current = e;
        },
        className: a()(N.wrapper, { [N.wrapperQuestAccepted]: G }),
        onClick: R,
        onKeyPress: R,
        onFocus: Z,
        onMouseEnter: Z,
        onBlur: w,
        onMouseLeave: w,
        children: [
            (0, r.jsxs)("div", {
                className: N.utils,
                children: [
                    G ? (0, r.jsx)(P, { quest: _ }) : (0, r.jsx)(v.Z, {}),
                    (0, r.jsx)(E.i, {
                        quest: _,
                        questContent: f.jn.ACTIVITY_PANEL,
                        shouldShowDisclosure: (null == (l = _.userStatus) ? void 0 : l.enrolledAt) == null,
                        showShareLink: !0,
                        sourceQuestContent: f.jn.ACTIVITY_PANEL,
                        children: (e) => {
                            var t, n;
                            return (0, r.jsx)(
                                o.P3F,
                                ((t = j({}, e)),
                                (n = n =
                                    {
                                        "aria-label": T.intl.string(T.t.DEoVWZ),
                                        children: (0, r.jsx)(o.xhG, {
                                            size: "md",
                                            color: "currentColor",
                                            className: N.submenuIcon,
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
            !G &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(P, { quest: _ }),
                        (0, r.jsx)("div", {
                            className: N.instructions,
                            children: (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: V,
                            }),
                        }),
                    ],
                }),
            G &&
                !B &&
                (0, r.jsx)(y.Z, {
                    autoplay: x,
                    className: N.rewardTileWithInstructions,
                    quest: _,
                    questContent: f.jn.ACTIVITY_PANEL,
                    location: C.dr.ACTIVITY_PANEL,
                    taskDetails: H,
                    sourceQuestContent: f.jn.ACTIVITY_PANEL,
                }),
            (0, r.jsxs)("div", {
                className: N.ctas,
                children: [
                    !G &&
                        (0, r.jsxs)(o.ButtonGroup, {
                            size: "sm",
                            direction: F ? "vertical" : "horizontal",
                            fullWidth: !0,
                            children: [
                                (0, r.jsx)(o.Button, {
                                    variant: "secondary",
                                    text: T.intl.string(T.t.LLLLPD),
                                    onClick: k,
                                }),
                                (0, r.jsx)(o.Button, {
                                    variant: "primary",
                                    text: Y,
                                    onClick: D,
                                    loading: S,
                                    icon: (0, I.getPrimaryCtaIcon)(_),
                                }),
                            ],
                        }),
                    G &&
                        !B &&
                        (0, r.jsx)(o.Button, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: T.intl.string(T.t.VN1Ajl),
                            onClick: M,
                        }),
                    B &&
                        (0, r.jsx)(o.Button, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: T.intl.string(T.t.cfY4PE),
                            onClick: U,
                        }),
                ],
            }),
        ],
    });
}
let A = function (e) {
    return (0, r.jsx)(b.A, {
        questOrQuests: e.quest,
        questContent: f.jn.ACTIVITY_PANEL,
        sourceQuestContent: f.jn.ACTIVITY_PANEL,
        children: (t) => (0, r.jsx)(x, j({ nodeRef: t }, e)),
    });
};
