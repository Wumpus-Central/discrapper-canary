s.d(t, { sT: () => eH, Ay: () => eK });
var n = s(627968),
    i = s(64700),
    r = s(503698),
    l = s.n(r),
    a = s(17928),
    o = s(859703),
    c = s(24001),
    u = s(347135),
    d = s(73473),
    x = s(321503);
s(134528), s(947204);
var m = s(580929),
    C = s(990078),
    h = s(462887),
    E = s(717421),
    j = s(695366),
    N = s(885574),
    f = s(661531),
    g = s(834730),
    v = s(123292),
    A = s(331322),
    O = s(508770),
    I = s(939249),
    p = s(782134),
    y = s(365199),
    S = s(820081),
    T = s(765671),
    L = s(736653),
    _ = s(814925),
    q = s(178540),
    Q = s(590202),
    w = s(710969),
    b = s(792620),
    R = s(988436),
    D = s(918338),
    M = s(270045),
    k = s(371912),
    U = s(57718),
    P = s(398025),
    z = s(617986),
    H = s(516226),
    F = s(720875),
    K = s(419367),
    B = s(652215),
    V = s(375708),
    W = s(368774);
function X(e) {
    let { quest: t, errorHints: s, warningHints: r, isDarkTheme: l, sourceQuestContent: a } = e,
        { ref: o, height: c = 0 } = (0, T.Ay)([s]),
        d = t.userStatus?.completedAt != null,
        x = (0, u.Vn)(t),
        { type: C, hints: h } = i.useMemo(
            () =>
                d || x
                    ? { type: 2, hints: [] }
                    : s.length > 0
                      ? { type: 0, hints: s.map((e) => e.message) }
                      : r.length > 0
                        ? { type: 1, hints: r }
                        : { type: 2, hints: [] },
            [s, d, x, r],
        ),
        A = 2 !== C,
        O = (0, E.z)({ opacity: +!!A, height: A ? c : 0, config: K.N }),
        I = 0 === C ? j.E : N.m,
        p = f.A.unsafe_rawColors.RED_345.css,
        y = 0 === C ? p : l ? f.A.colors.TEXT_DEFAULT : f.A.colors.WHITE;
    return (0, n.jsx)(m.animated.div, {
        style: { height: O.height, opacity: (0, P.a)(O.opacity) },
        children: (0, n.jsxs)("div", {
            ref: o,
            className: W.XZ,
            children: [
                (0, n.jsxs)("div", {
                    className: W.M5,
                    children: [
                        (0, n.jsx)(I, { size: "xs", color: y }),
                        (0, n.jsx)(g.E, {
                            variant: "text-xs/medium",
                            color: l ? "text-muted" : "text-overlay-light",
                            children: h.at(0),
                        }),
                    ],
                }),
                0 === C &&
                    (0, n.jsx)(v.Q, {
                        text: V.intl.string(V.t["yKJi+/"]),
                        onClick: () => (0, R.i)({ quest: t, errorHints: s, sourceQuestContent: a }),
                        variant: "always-white",
                        textVariant: "text-sm/semibold",
                    }),
            ],
        }),
    });
}
function G(e) {
    let {
            quest: t,
            isHovering: s,
            errorHints: r,
            isInFeaturedSection: l,
            warningHints: a,
            isVisibleInViewport: o,
            onCtxMenuClose: d,
            onCtxMenuOpen: x,
            onCtxMenuSelect: m,
            sourceQuestContent: E,
        } = e,
        j = (0, q.O)((e) => e.getErrorHints(t.id)),
        N = j.length > 0 ? j : r,
        v = (0, b.IO)(t),
        T = (0, L.Ay)(),
        R = ((0, h.M)(T) ? B.NJ8.DARK : B.NJ8.LIGHT) === B.NJ8.DARK,
        P = (0, u.LS)(t),
        K = t.userStatus?.claimedAt != null,
        G = (0, u.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        $ = t.userStatus?.enrolledAt != null,
        Y = t.userStatus?.completedAt != null,
        { onAssetLoadComplete: J } = i.useContext(H.M),
        Z = R ? "text-muted" : "text-overlay-light",
        ee = i.useCallback(() => {
            v &&
                (0, z.d5)({
                    quest: t,
                    questContent: c.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: E,
                    sourceQuestContentCTA: Q.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
        }, [v, t, E]),
        et = (0, k.UX)(t.id),
        es = !0 === l || et,
        en = i.useRef(null);
    return (0, n.jsxs)("div", {
        className: W.kL,
        children: [
            (0, n.jsx)("div", {
                className: W.IC,
                children: (0, n.jsx)(D.A, {
                    quest: t,
                    isInteracting: s,
                    hideAssets: !o,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: W.l1,
                    imageClassName: W.c8,
                }),
            }),
            (0, n.jsx)("div", { className: W.Lw }),
            (0, n.jsxs)("div", {
                className: W.nX,
                children: [
                    (0, n.jsxs)("div", {
                        className: W.PG,
                        children: [
                            (0, n.jsxs)("div", {
                                className: W.mY,
                                children: [
                                    (es || t.preview) &&
                                        (0, n.jsxs)(A.B, {
                                            className: W.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                es &&
                                                    !(0, w.Ic)(t) &&
                                                    (0, n.jsx)(O.E, {
                                                        type: { text: V.intl.string(V.t.Jt6u7B) },
                                                        variant: "expressive",
                                                    }),
                                                t.preview &&
                                                    (0, n.jsx)(O.E, {
                                                        type: { text: V.intl.string(V.t.SKNnqq) },
                                                        variant: "brand",
                                                    }),
                                            ],
                                        }),
                                    v &&
                                        (0, n.jsx)(C.m, {
                                            text: Y
                                                ? V.intl.string(V.t.YsCuyF)
                                                : $
                                                  ? V.intl.string(V.t["74KqrR"])
                                                  : (0, w.Ic)(t)
                                                    ? V.intl.string(V.t.I6JG46)
                                                    : V.intl.string(V.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, n.jsx)(I.D, {
                                                className: W.iI,
                                                "aria-label": V.intl.string(V.t.RscU7I),
                                                onClick: ee,
                                                children: (0, n.jsx)(p.u, { color: "currentColor", className: W.A9 }),
                                            }),
                                        }),
                                    (0, n.jsx)(M.C, {
                                        onOpen: x,
                                        onClose: d,
                                        onSelect: m,
                                        questContent: c.uF.QUEST_HOME_DESKTOP,
                                        quest: t,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: E,
                                        returnRef: en,
                                        children: (e) =>
                                            (0, n.jsx)(I.D, {
                                                ...e,
                                                innerRef: en,
                                                className: W.iI,
                                                "aria-label": V.intl.string(V.t.DEoVWZ),
                                                children: (0, n.jsx)(y.j, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: W.A9,
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(F.A, {
                                showPlaceholder: !o,
                                width: 100,
                                height: 30,
                                className: W.Iu,
                                children: (0, n.jsx)(U.Ay, {
                                    className: W.Iu,
                                    logotypeClassName: W.ND,
                                    quest: t,
                                    separatorSpacing: U.C8.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: J,
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: W.E_,
                                children: [
                                    (0, n.jsxs)("span", {
                                        className: W.O,
                                        children: [
                                            (0, n.jsx)(g.E, {
                                                variant: "text-sm/medium",
                                                color: Z,
                                                children: V.intl.string(V.t.VAbKhK),
                                            }),
                                            (0, n.jsx)(_.A, {
                                                className: W.w$,
                                                size: 16,
                                                color: f.A.unsafe_rawColors.GREEN_360.css,
                                                "aria-label": V.intl.string(V.t.OfMjx9),
                                                allowFullSizedIcon: !0,
                                                children: (0, n.jsx)(S.B, {
                                                    color: f.A.unsafe_rawColors.WHITE.css,
                                                    size: "custom",
                                                    width: 13,
                                                    height: 13,
                                                }),
                                            }),
                                            (0, n.jsx)(g.E, {
                                                variant: "text-sm/medium",
                                                color: "text-overlay-light",
                                                children:
                                                    t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                                            }),
                                        ],
                                    }),
                                    P || K
                                        ? null
                                        : (0, n.jsx)(g.E, {
                                              variant: "text-sm/medium",
                                              color: Z,
                                              children: V.intl.format(V.t["7D8r4F"], { expiryDate: G }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(X, { quest: t, errorHints: N, warningHints: a, isDarkTheme: R, sourceQuestContent: E }),
                ],
            }),
        ],
    });
}
var $ = s(604121),
    Y = s(297264),
    J = s(775602),
    Z = s(409626),
    ee = s(106799),
    et = s(287809),
    es = s(192444),
    en = s(3738),
    ei = s(646917),
    er = s(576761),
    el = s(801365),
    ea = s(895253),
    eo = s(453384),
    ec = s(442734),
    eu = s(646764),
    ed = s(843282),
    ex = s(825484),
    em = s(821609),
    eC = s(31300),
    eh = s(687966),
    eE = s(414499),
    ej = s(971649),
    eN = s(651892),
    ef = s(901406),
    eg = s(814793),
    ev = s(509252),
    eA = s(79545),
    eO = s(190107),
    eI = s(562296);
let ep = [
    {
        value: eO.fO.DESKTOP,
        get label() {
            return V.intl.string(V.t["QXc01+"]);
        },
    },
    {
        value: eO.fO.CONSOLE,
        get label() {
            return V.intl.string(V.t["8lAfuB"]);
        },
    },
];
function ey(e) {
    let t,
        s,
        { value: i } = e;
    switch (i) {
        case eO.fO.DESKTOP:
            (s = (0, n.jsx)(eC.k, {})), (t = V.intl.string(V.t["QXc01+"]));
            break;
        case eO.fO.CONSOLE:
            (s = (0, n.jsx)(eh._, {})), (t = V.intl.string(V.t["8lAfuB"]));
            break;
        default:
            return null;
    }
    return (0, n.jsxs)("div", { className: eI.FL, children: [s, t] });
}
function eS(e) {
    let t, s;
    if (0 === e.length) return null;
    switch (e[0].value) {
        case eO.fO.DESKTOP:
            (s = (0, n.jsx)(eC.k, {})), (t = V.intl.string(V.t.g6Dr44));
            break;
        case eO.fO.CONSOLE:
            (s = (0, n.jsx)(eh._, {})), (t = V.intl.string(V.t.iyNbj5));
            break;
        default:
            return null;
    }
    return (0, n.jsxs)("span", { className: eI.FL, children: [s, t] });
}
function eT(e) {
    let {
            quest: t,
            analyticsCtxQuestContent: s,
            analyticsCtxSourceQuestContent: i,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: l,
        } = e,
        { launchInGameActivity: a } = (0, u.zW)(t),
        o = (0, en.NA)({ quest: t, shortText: !0 });
    return (0, n.jsx)("div", {
        className: eI.qz,
        children: (0, n.jsxs)(ex.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                (0, n.jsx)(em.$, {
                    variant: "secondary",
                    icon: t.config.features.includes(eO.Li.CLOUD_GAMING_ACTIVITY) ? eE.h : eh._,
                    text: o,
                    onClick: a,
                }),
                (0, n.jsx)(ev.A, {
                    quest: t,
                    surface: eA.V3.QUEST_HOME_TILE_FOOTER,
                    analyticsCtxQuestContent: s,
                    analyticsCtxSourceQuestContent: i,
                    analyticsCtxQuestContentPosition: r,
                    analyticsCtxQuestContentRowIndex: l,
                }),
            ],
        }),
    });
}
function eL(e) {
    let { quest: t, content: s, sourceQuestContent: r, fullWidth: l } = e,
        { externalLinkCta: a, handleOpenExternalLink: o } = (function (e) {
            let { quest: t, content: s, sourceQuestContent: n } = e,
                r = (0, ej.wW)();
            return {
                externalLinkCta: (0, eN.wr)(t),
                handleOpenExternalLink: i.useCallback(() => {
                    (0, ef.pu)(t, {
                        content: s,
                        ctaContent: Q.Cy.OPEN_GAME_LINK,
                        impressionId: r(),
                        sourceQuestContent: n,
                    });
                }, [t, s, n, r]),
            };
        })({ quest: t, content: s, sourceQuestContent: r });
    return (0, n.jsx)(em.$, { variant: "secondary", text: a, onClick: o, fullWidth: l });
}
function e_(e) {
    let { quest: t, content: s, sourceQuestContent: i } = e;
    return (0, n.jsx)("div", {
        className: eI.qz,
        children: (0, n.jsx)(eL, { quest: t, content: s, sourceQuestContent: i, fullWidth: !0 }),
    });
}
function eq(e) {
    let {
            quest: t,
            ctaQuestState: s,
            analyticsCtxQuestContent: i,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: a,
        } = e,
        o = (function (e, t) {
            switch (e) {
                case eA.UA.EXPIRED_CLAIMABLE:
                case eA.UA.EXPIRED:
                    return !0;
                case eA.UA.CLAIMED:
                case eA.UA.COMPLETED:
                    return (0, b.vv)(t) || (0, eg.vA)(t);
                case eA.UA.INCOMPLETE:
                case eA.UA.ENROLLED:
                    return (0, b.vv)(t) || (0, eg.vA)(t) || (0, b.I6)(t);
                case eA.UA.UNENROLLED:
                    return !0;
                default:
                    return !1;
            }
        })(s, t);
    return (0, n.jsx)("div", {
        className: eI.qz,
        children: (0, n.jsxs)(ex.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                o && (0, n.jsx)(eL, { quest: t, content: i, sourceQuestContent: r }),
                (0, n.jsx)(ev.A, {
                    quest: t,
                    surface: eA.V3.QUEST_HOME_TILE_FOOTER,
                    analyticsCtxQuestContent: i,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: a,
                }),
            ],
        }),
    });
}
function eQ(e) {
    let { quest: t, analyticsCtxQuestContent: s, analyticsCtxSourceQuestContent: i } = e;
    return (0, n.jsx)("div", {
        className: eI.qz,
        children: (0, n.jsxs)(ex.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                (0, n.jsx)(em.$, { variant: "secondary", disabled: !0, text: V.intl.string(V.t["8LKchl"]) }),
                (0, n.jsx)(em.$, {
                    variant: "primary",
                    onClick: () => (0, z.m6)(t, s, i),
                    text: V.intl.string(V.t.vY9GgG),
                }),
            ],
        }),
    });
}
function ew(e) {
    let {
            quest: t,
            onReceiveErrorHints: s,
            analyticsCtxQuestContent: r,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: o,
        } = e,
        d = (0, u.fc)(t),
        x = (0, q.O)((e) => e.clearErrorHints),
        [m, C, h] = (0, u.Qo)(t, d),
        E = i.useCallback(
            (e) => {
                h(e), e === eO.fO.DESKTOP && (s([]), x(t.id));
            },
            [h, s, x, t.id],
        );
    return m === c.X0.SELECT
        ? (0, n.jsx)(ed.Pw, {
              className: eI.dd,
              isSelected: () => !1,
              options: ep,
              placeholder: V.intl.string(V.t.drVw4T),
              renderOptionLabel: ey,
              renderOptionValue: eS,
              select: E,
              serialize: (e) => {
                  switch (e) {
                      case eO.fO.DESKTOP:
                          return V.intl.string(V.t["QXc01+"]);
                      case eO.fO.CONSOLE:
                          return V.intl.string(V.t["8lAfuB"]);
                      default:
                          return V.intl.string(V.t.WLDKSb);
                  }
              },
              size: "sm",
              "data-migration-pending": !0,
          })
        : C.length > 1
          ? (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)("div", {
                        className: eI.qz,
                        children: (0, n.jsx)(ev.A, {
                            quest: t,
                            surface: eA.V3.QUEST_HOME_TILE_FOOTER,
                            analyticsCtxQuestContent: r,
                            analyticsCtxSourceQuestContent: l,
                            analyticsCtxQuestContentPosition: a,
                            analyticsCtxQuestContentRowIndex: o,
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: eI.qz,
                        children: (0, n.jsx)(ed.Pw, {
                            className: eI.xZ,
                            isSelected: (e) => {
                                switch (m) {
                                    case c.X0.DESKTOP:
                                        return e === eO.fO.DESKTOP;
                                    case c.X0.CONSOLE:
                                        return e === eO.fO.CONSOLE;
                                    default:
                                        return !1;
                                }
                            },
                            options: ep,
                            placeholder: V.intl.string(V.t.drVw4T),
                            renderOptionLabel: ey,
                            renderOptionValue: eS,
                            select: E,
                            serialize: (e) => {
                                switch (e) {
                                    case eO.fO.DESKTOP:
                                        return V.intl.string(V.t["QXc01+"]);
                                    case eO.fO.CONSOLE:
                                        return V.intl.string(V.t["8lAfuB"]);
                                }
                            },
                            size: "sm",
                            "data-migration-pending": !0,
                        }),
                    }),
                ],
            })
          : (0, n.jsx)(eq, {
                quest: t,
                ctaQuestState: eA.UA.ENROLLED,
                analyticsCtxQuestContent: r,
                analyticsCtxSourceQuestContent: l,
                analyticsCtxQuestContentPosition: a,
                analyticsCtxQuestContentRowIndex: o,
            });
}
function eb(e) {
    let {
            quest: t,
            questContent: s,
            onReceiveErrorHints: i,
            contentPosition: r,
            rowIndex: l,
            sourceQuestContent: c,
        } = e,
        u = (0, eA.Pd)(t),
        { isQuestEnrollmentBlocked: d } = (0, a.cf)([o.A], () => ({
            isQuestEnrollmentBlocked: null != o.A.questEnrollmentBlockedUntil,
        }));
    return u === eA.UA.UNENROLLED && d
        ? (0, n.jsx)("div", {
              className: eI.kL,
              children: (0, n.jsx)(eQ, { quest: t, analyticsCtxQuestContent: s, analyticsCtxSourceQuestContent: c }),
          })
        : u === eA.UA.ENROLLED && (0, b.g5)(t)
          ? (0, n.jsx)("div", {
                className: eI.kL,
                children: (0, n.jsx)(ew, {
                    quest: t,
                    onReceiveErrorHints: i,
                    analyticsCtxQuestContentPosition: r,
                    analyticsCtxQuestContentRowIndex: l,
                    analyticsCtxQuestContent: s,
                    analyticsCtxSourceQuestContent: c,
                }),
            })
          : (u === eA.UA.ENROLLED || u === eA.UA.INCOMPLETE) && (0, b.no)(t)
            ? (0, n.jsx)("div", {
                  className: eI.kL,
                  children: (0, n.jsx)(e_, { quest: t, content: s, sourceQuestContent: c }),
              })
            : (u === eA.UA.COMPLETED || u === eA.UA.CLAIMED) && (0, eg.vA)(t)
              ? (0, n.jsx)("div", {
                    className: eI.kL,
                    children: (0, n.jsx)(eT, {
                        quest: t,
                        analyticsCtxQuestContent: s,
                        analyticsCtxSourceQuestContent: c,
                        analyticsCtxQuestContentPosition: r,
                        analyticsCtxQuestContentRowIndex: l,
                    }),
                })
              : (0, n.jsx)("div", {
                    className: eI.kL,
                    children: (0, n.jsx)(eq, {
                        quest: t,
                        ctaQuestState: u,
                        analyticsCtxQuestContent: s,
                        analyticsCtxSourceQuestContent: c,
                        analyticsCtxQuestContentPosition: r,
                        analyticsCtxQuestContentRowIndex: l,
                    }),
                });
}
var eR = s(474491);
async function eD() {
    return await s.e("40119").then(s.t.bind(s, 718698, 19));
}
function eM(e) {
    let {
            quest: t,
            questContent: s,
            isHovering: r,
            contentPosition: o,
            rowIndex: c,
            isVisibleInViewport: d,
            onReceiveErrorHints: x,
            sourceQuestContent: C,
            questNameHeadingId: h,
        } = e,
        j = i.useRef(null),
        N = (0, ei.z)(),
        f = (0, u.SD)(t, N),
        v = N === er.MA.NITRO && f,
        A = (0, a.bG)([et.default], () => et.default.getCurrentUser()),
        O = (0, el.mq)(t.config, A),
        I = (0, el.mH)(t.config, A),
        p = t.userStatus?.enrolledAt != null,
        { ref: y, scrollHeight: S } = (0, T.wR)(),
        L = null != S && S > 104,
        { onAssetLoadComplete: _ } = i.useContext(H.M),
        { expansionSpring: q } = (0, E.z)({ expansionSpring: +!!r, config: { ...K.N, clamp: !0 } }),
        Q = t.userStatus?.completedAt != null,
        R = t.userStatus?.claimedAt != null,
        D = (0, el.ks)(t.config),
        M = t.userStatus?.orbQuantityClaimed ?? (0, el._Z)(t.config),
        k = (0, el.wo)(t.config, A),
        U = (0, b.I6)(t),
        { completedRatio: z, completedRatioDisplay: B } = (0, u.O9)(t, U),
        W = (0, en.A9)(t, C, eO.rE.QUEST_HOME_DESKTOP, Z.GameProfileSources.QuestHome, j),
        X = (function (e, t) {
            let { variant: s } = es.Mk.useConfig({ location: t });
            return s === es.d.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER
                ? e.messages.gamePublisher
                : s === es.d.REMOVE_QUEST_TITLE_SUFFIX
                  ? e.messages.questName
                  : V.intl.format(V.t.EAYZAr, { questName: e.messages.questName });
        })(t.config, eO.rE.QUEST_HOME_DESKTOP),
        G = i.useMemo(
            () =>
                R && D
                    ? (0, n.jsxs)(
                          ek,
                          {
                              questId: t.id,
                              children: [
                                  (0, n.jsx)(ee.A, { shouldUseThemeColor: !0, className: eR.Kq, customSize: 14 }),
                                  V.intl.format(V.t["nLXlh+"], { orbAmount: M ?? 0 }),
                              ],
                          },
                          t.id,
                      )
                    : R
                      ? (0, n.jsx)(ek, { questId: t.id, children: O })
                      : D
                        ? V.intl.format(V.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, n.jsxs)(
                                      ek,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, n.jsx)(ee.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: eR.Kq,
                                                  customSize: 14,
                                              }),
                                              V.intl.format(V.t["nLXlh+"], { orbAmount: k ?? 0 }),
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : V.intl.format(V.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, n.jsx)(ek, { questId: t.id, children: I }, t.id),
                          }),
            [O, R, I, t.id, k, M, D],
        ),
        ed = i.useMemo(() => {
            if (null != W)
                return (0, n.jsx)(g.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: eR.h_,
                    children: W,
                });
        }, [W]),
        ex = (0, a.bG)([J.Ay], () => J.Ay.useReducedMotion);
    return (0, n.jsxs)("div", {
        className: eR.kL,
        ref: j,
        children: [
            (0, n.jsx)(ea.A, { visible: v, glow: !0 }),
            (0, n.jsxs)(m.animated.div, {
                style: { maxHeight: q.to([0, 1], [104, (S ?? 0) + 12]) },
                className: eR.z,
                children: [
                    (0, n.jsx)("div", {
                        className: eR.c6,
                        children: (0, n.jsxs)(F.A, {
                            showPlaceholder: !d,
                            width: 80,
                            height: 80,
                            children: [
                                !R && Q && (0, n.jsx)("div", { className: eR.Nz }),
                                p
                                    ? (0, n.jsxs)("div", {
                                          className: eR.Tr,
                                          children: [
                                              Q &&
                                                  (0, n.jsx)($.a, {
                                                      importData: eD,
                                                      className: eR.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !ex,
                                                  }),
                                              (0, n.jsx)(eo.A, {
                                                  size: 76,
                                                  percentComplete: z,
                                                  overlayText: r && !(0, w.Ic)(t) ? B : void 0,
                                                  children: (0, n.jsx)(eu.A, {
                                                      quest: t,
                                                      questContent: s,
                                                      autoplay: r,
                                                      onLoadComplete: _,
                                                      lazyLoad: !0,
                                                      fullWidth: !0,
                                                      sourceQuestContent: C,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, n.jsx)(eu.A, {
                                          quest: t,
                                          autoplay: r,
                                          questContent: s,
                                          className: eR.eB,
                                          onLoadComplete: _,
                                          lazyLoad: !0,
                                          sourceQuestContent: C,
                                      }),
                            ],
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        ref: y,
                        className: l()(eR.FS, { [eR.wq]: !L }),
                        children: [
                            (0, n.jsx)(Y.D, {
                                id: h,
                                variant: "eyebrow",
                                color: "text-brand",
                                className: eR.G$,
                                children: X,
                            }),
                            f
                                ? (0, n.jsxs)("div", {
                                      className: eR.xv,
                                      children: [
                                          (0, n.jsx)(g.E, {
                                              variant: "text-md/semibold",
                                              color: "text-strong",
                                              className: eR.wx,
                                              children: G,
                                          }),
                                          (0, n.jsx)(ec.e, { questId: t.id, orbMultiplierEligibility: N }),
                                      ],
                                  })
                                : (0, n.jsx)(g.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      className: eR.wx,
                                      children: G,
                                  }),
                            ed,
                        ],
                    }),
                    L &&
                        (0, n.jsx)(m.animated.div, {
                            style: { opacity: (0, P.a)(q.to([0, 1], [1, 0])) },
                            className: eR.hS,
                        }),
                ],
            }),
            (0, n.jsx)(eb, {
                quest: t,
                questContent: s,
                contentPosition: o,
                rowIndex: c,
                onReceiveErrorHints: x,
                sourceQuestContent: C,
            }),
        ],
    });
}
let ek = i.memo(function (e) {
    let { questId: t, children: s } = e;
    return (0, n.jsx)(
        g.E,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: eR.wx, children: s },
        `${t}_reward`,
    );
});
var eU = s(688755),
    eP = s(831368),
    ez = s(355620);
function eH(e, t) {
    return null == t ? `quest-tile-${e}` : `quest-tile-${e}-${t}`;
}
function eF(e) {
    let {
            quest: t,
            className: s,
            sectionIdentifier: r,
            isInFeaturedSection: a,
            questContent: o,
            contentPosition: c,
            rowIndex: d,
            eagerLoadAssets: m,
            impressionRef: C,
            sourceQuestContent: h,
        } = e,
        E = i.useId(),
        [j, N] = i.useState(!1),
        [f, g] = i.useState([]),
        v = (0, u.aC)(t),
        {
            handleHoverStart: A,
            handleHoverEnd: O,
            isEventWithinParent: I,
        } = (0, eU.B)({ quest: t, questContent: o, contentPosition: c, rowIndex: d, sourceQuestContent: h }),
        p = i.useContext(x.X),
        { visibilityElementRef: y, almostVisibleInViewport: S } = (0, eP.I)(
            p?.current?.getScrollerNode() ?? null,
            m ?? !1,
        );
    return (0, n.jsxs)("article", {
        id: eH(t.id, r),
        ref: (e) => {
            (C.current = e), (y.current = e);
        },
        "aria-labelledby": E,
        className: l()(ez.k, s),
        onMouseEnter: () => {
            N(!0), A();
        },
        onMouseLeave: () => {
            N(!1), O();
        },
        onFocus: (e) => {
            I(e) || (N(!0), A());
        },
        onBlur: (e) => {
            I(e) || (N(!1), O());
        },
        children: [
            (0, n.jsx)(G, {
                quest: t,
                isInFeaturedSection: a,
                isHovering: j,
                errorHints: f,
                warningHints: v,
                isVisibleInViewport: S,
                sourceQuestContent: h,
            }),
            (0, n.jsx)(eM, {
                quest: t,
                questContent: o,
                isHovering: j,
                contentPosition: c,
                rowIndex: d,
                onReceiveErrorHints: g,
                isVisibleInViewport: S,
                sourceQuestContent: h,
                questNameHeadingId: E,
            }),
        ],
    });
}
let eK = i.memo(function (e) {
    let t = (0, a.bG)([o.A], () => (null != e.questId ? o.A.getQuest(e.questId) : void 0), [e.questId]),
        s = i.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == s
        ? null
        : (0, n.jsx)(d.R, {
              questOrQuests: s,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === c.uF.QUESTS_EMBED,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, n.jsx)(eF, { ...e, quest: s, impressionRef: t }),
          });
});
