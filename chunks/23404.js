n.d(t, { Z: () => Z }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(210887),
    u = n(22095),
    d = n(617136),
    p = n(509212),
    f = n(113434),
    m = n(569984),
    h = n(497505),
    g = n(373370),
    _ = n(475595),
    b = n(566078),
    E = n(602667),
    O = n(611855),
    I = n(110560),
    y = n(670638),
    v = n(667105),
    C = n(860151),
    S = n(46140),
    T = n(981631),
    N = n(388032),
    j = n(408228);
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
        l = (0, f.B6)(b.r.build(n.config).rewardsExpireAt),
        a = (0, s.e7)([c.Z], () => c.Z.getState().theme),
        u = (0, o.wjy)(a) ? T.BRd.DARK : T.BRd.LIGHT,
        d = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null;
    return (0, r.jsxs)("div", {
        className: j.heading,
        children: [
            (0, r.jsx)("img", {
                className: j.headingGameTile,
                alt: "",
                src: (0, _.fh)(n, _.eC.GAME_TILE, u).url,
            }),
            (0, r.jsxs)("div", {
                className: j.headingCopy,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: d
                            ? N.intl.string(N.t.XBboAK)
                            : N.intl.formatToPlainString(N.t.EQa7os, { questName: n.config.messages.questName }),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: d
                            ? N.intl.formatToPlainString(N.t.APddvF, { expirationDate: l })
                            : N.intl.formatToPlainString(N.t["pX+fmn"], { expirationDate: i }),
                    }),
                ],
            }),
        ],
    });
}
function A(e) {
    var t, n, l;
    let { nodeRef: c, quest: _ } = e,
        b = (0, d.O5)(),
        E = (0, s.e7)([m.Z], () => m.Z.isEnrolling(_.id), [_]),
        [T, A] = i.useState(!1),
        Z = i.useCallback(() => A(!0), []),
        w = i.useCallback(() => A(!1), []),
        { launchInGameActivity: L } = (0, f.zB)(_),
        R = i.useCallback((e) => {
            e.stopPropagation();
        }, []),
        D = i.useCallback(() => {
            (0, u.AH)(_.id, {
                questContent: h.jn.ACTIVITY_PANEL,
                questContentCTA: d.jZ.ACCEPT_QUEST,
                sourceQuestContent: h.jn.ACTIVITY_PANEL,
            }),
                (0, p.Rt)(_) && L();
        }, [_, L]),
        M = i.useCallback(() => {
            null != _ &&
                (b({
                    questId: _.id,
                    questContent: h.jn.ACTIVITY_PANEL,
                    questContentCTA: d.jZ.TRACK_PROGRESS,
                    sourceQuestContent: h.jn.ACTIVITY_PANEL,
                }),
                (0, I.navigateToQuestHome)({
                    fromContent: h.jn.ACTIVITY_PANEL,
                    questId: _.id,
                }));
        }, [_, b]),
        k = i.useCallback(() => {
            b({
                questId: _.id,
                questContent: h.jn.ACTIVITY_PANEL,
                questContentCTA: d.jZ.LEARN_MORE,
                sourceQuestContent: h.jn.ACTIVITY_PANEL,
            }),
                (0, I.navigateToQuestHome)({
                    fromContent: h.jn.ACTIVITY_PANEL,
                    questId: _.id,
                });
        }, [_.id, b]),
        U = (0, v.hf)({
            quest: _,
            questContent: h.jn.ACTIVITY_PANEL,
            sourceQuestContent: h.jn.ACTIVITY_PANEL,
        }),
        G = (null == (t = _.userStatus) ? void 0 : t.enrolledAt) != null,
        B = (null == (n = _.userStatus) ? void 0 : n.completedAt) != null,
        H = (0, f.Rf)(_),
        V = (0, g.DD)({
            quest: _,
            taskDetails: H,
            location: S.dr.ACTIVITY_PANEL,
            questContent: h.jn.ACTIVITY_PANEL,
            sourceQuestContent: h.jn.ACTIVITY_PANEL,
        }),
        F = (0, p.Rt)(_),
        z = (0, g.CR)({ quest: _ }),
        Y = F ? z : N.intl.string(N.t.l7E81v);
    return (0, r.jsxs)("div", {
        ref: (e) => {
            c.current = e;
        },
        className: a()(j.wrapper, { [j.wrapperQuestAccepted]: G }),
        onClick: R,
        onKeyPress: R,
        onFocus: Z,
        onMouseEnter: Z,
        onBlur: w,
        onMouseLeave: w,
        children: [
            (0, r.jsxs)("div", {
                className: j.utils,
                children: [
                    G ? (0, r.jsx)(x, { quest: _ }) : (0, r.jsx)(O.Z, {}),
                    (0, r.jsx)(y.r, {
                        quest: _,
                        questContent: h.jn.ACTIVITY_PANEL,
                        shouldShowDisclosure: (null == (l = _.userStatus) ? void 0 : l.enrolledAt) == null,
                        showShareLink: !0,
                        sourceQuestContent: h.jn.ACTIVITY_PANEL,
                        children: (e) => {
                            var t, n;
                            return (0, r.jsx)(
                                o.P3F,
                                ((t = P({}, e)),
                                (n = n =
                                    {
                                        "aria-label": N.intl.string(N.t.DEoVWZ),
                                        children: (0, r.jsx)(o.xhG, {
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
            !G &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(x, { quest: _ }),
                        (0, r.jsx)("div", {
                            className: j.instructions,
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
                (0, r.jsx)(C.Z, {
                    autoplay: T,
                    className: j.rewardTileWithInstructions,
                    quest: _,
                    questContent: h.jn.ACTIVITY_PANEL,
                    location: S.dr.ACTIVITY_PANEL,
                    taskDetails: H,
                    sourceQuestContent: h.jn.ACTIVITY_PANEL,
                }),
            (0, r.jsxs)("div", {
                className: j.ctas,
                children: [
                    !G &&
                        (0, r.jsxs)(o.ButtonGroup, {
                            size: "sm",
                            direction: F ? "vertical" : "horizontal",
                            fullWidth: !0,
                            children: [
                                (0, r.jsx)(o.Button, {
                                    variant: "secondary",
                                    text: N.intl.string(N.t.LLLLPD),
                                    onClick: k,
                                }),
                                (0, r.jsx)(o.Button, {
                                    variant: "primary",
                                    text: Y,
                                    onClick: D,
                                    loading: E,
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
                            text: N.intl.string(N.t.VN1Ajl),
                            onClick: M,
                        }),
                    B &&
                        (0, r.jsx)(o.Button, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: N.intl.string(N.t.cfY4PE),
                            onClick: U,
                        }),
                ],
            }),
        ],
    });
}
let Z = function (e) {
    return (0, r.jsx)(E.A, {
        questOrQuests: e.quest,
        questContent: h.jn.ACTIVITY_PANEL,
        sourceQuestContent: h.jn.ACTIVITY_PANEL,
        children: (t) => (0, r.jsx)(A, P({ nodeRef: t }, e)),
    });
};
