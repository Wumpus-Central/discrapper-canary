n.d(t, { Ay: () => eX, sT: () => eG });
var s = n(477900),
    i = n(582128),
    l = n(503698),
    r = n.n(l),
    a = n(855986),
    o = n(122760),
    c = n(506988),
    u = n(914313),
    d = n(61387),
    x = n(280905),
    m = n(321503);
(n(134528), n(947204));
var C = n(120692),
    h = n(462887),
    E = n(717421),
    f = n(695366),
    j = n(885574),
    g = n(646514),
    v = n(834730),
    A = n(123292),
    N = n(331322),
    O = n(805251),
    S = n(866665),
    y = n(939249),
    I = n(782134),
    p = n(365199),
    T = n(820081),
    Q = n(765671),
    _ = n(736653),
    q = n(152578),
    L = n(178540),
    w = n(561844),
    b = n(590202),
    D = n(977416),
    M = n(792620),
    P = n(988436),
    U = n(918338),
    R = n(270045),
    k = n(201805),
    H = n(57718),
    z = n(398025),
    K = n(321538),
    F = n(516226),
    B = n(720875);
let G = i.createContext(u.B5);
var V = n(419367),
    X = n(652215),
    W = n(792996),
    $ = n(322335);
function Y(e) {
    let { quest: t, warningHints: n, isDarkTheme: l, sourceQuestContent: r } = e,
        a = (0, L.O)((e) => e.getErrorHints(t.id)),
        { ref: o, height: c = 0 } = (0, Q.Ay)([a]),
        u = t.userStatus?.completedAt != null,
        x = (0, d.Vn)(t),
        { type: m, hints: h } = i.useMemo(
            () =>
                u || x
                    ? { type: 2, hints: [] }
                    : a.length > 0
                      ? { type: 0, hints: a.map((e) => e.message) }
                      : n.length > 0
                        ? { type: 1, hints: n }
                        : { type: 2, hints: [] },
            [a, u, x, n],
        ),
        N = 2 !== m,
        O = (0, E.z)({ opacity: +!!N, height: N ? c : 0, config: V.N }),
        S = 0 === m ? f.CircleErrorIcon : j.CircleInformationIcon,
        y = g.A.unsafe_rawColors.RED_345.css,
        I = 0 === m ? y : l ? g.A.colors.TEXT_DEFAULT : g.A.colors.WHITE;
    return (0, s.jsx)(C.animated.div, {
        style: { height: O.height, opacity: (0, z.a)(O.opacity) },
        children: (0, s.jsxs)("div", {
            ref: o,
            className: $.XZ,
            children: [
                (0, s.jsxs)("div", {
                    className: $.M5,
                    children: [
                        (0, s.jsx)(S, { size: "xs", color: I }),
                        (0, s.jsx)(v.E, {
                            variant: "body-xs/medium",
                            color: l ? "text-muted" : "text-overlay-light",
                            children: h.at(0),
                        }),
                    ],
                }),
                0 === m &&
                    (0, s.jsx)(A.Q, {
                        text: W.intl.string(W.t["yKJi+/"]),
                        onClick: () => (0, P.i)({ quest: t, sourceQuestContent: r }),
                        variant: "always-white",
                        textVariant: "body-sm/semibold",
                    }),
            ],
        }),
    });
}
function J(e) {
    let {
            quest: t,
            isHovering: n,
            isInFeaturedSection: l,
            warningHints: a,
            isVisibleInViewport: o,
            onCtxMenuClose: u,
            onCtxMenuOpen: x,
            onCtxMenuSelect: m,
            sourceQuestContent: C,
        } = e,
        E = (0, M.IO)(t),
        f = (0, _.Ay)(),
        j = ((0, h.M)(f) ? X.NJ8.DARK : X.NJ8.LIGHT) === X.NJ8.DARK,
        A = (0, d.LS)(t),
        Q = t.userStatus?.claimedAt != null,
        L = (0, d.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        P = t.userStatus?.enrolledAt != null,
        z = t.userStatus?.completedAt != null,
        { onAssetLoadComplete: V } = i.useContext(F.M),
        J = j ? "text-muted" : "text-overlay-light",
        Z = (0, d.Hv)() && !z,
        ee = i.useCallback(() => {
            if (E) {
                if (Z) {
                    ((0, w.Y5)({
                        questId: t.id,
                        questContent: c.uF.QUEST_HOME_DESKTOP,
                        questContentCTA: b.Cy.QUEST_ACCESS_SUSPENDED,
                        sourceQuestContent: C,
                    }),
                        (0, K.FS)());
                    return;
                }
                (0, K.d5)({
                    quest: t,
                    questContent: c.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: C,
                    sourceQuestContentCTA: b.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
            }
        }, [E, t, C, Z]),
        et = (0, k.UX)(t.id),
        en = !0 === l || et,
        es = i.useRef(null),
        { showGameLogo: ei } = i.useContext(G);
    return (0, s.jsxs)("div", {
        className: $.kL,
        children: [
            (0, s.jsx)("div", {
                className: $.IC,
                children: (0, s.jsx)(U.A, {
                    quest: t,
                    isInteracting: n,
                    hideAssets: !o,
                    imageSize: { width: 1320, height: 370 },
                    variant: "banner",
                }),
            }),
            (0, s.jsx)("div", { className: $.Lw }),
            (0, s.jsxs)("div", {
                className: $.nX,
                children: [
                    (0, s.jsxs)("div", {
                        className: $.PG,
                        children: [
                            (0, s.jsxs)("div", {
                                className: $.mY,
                                children: [
                                    (en || t.preview) &&
                                        (0, s.jsxs)(N.B, {
                                            className: $.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                en &&
                                                    !(0, D.Ic)(t) &&
                                                    (0, s.jsx)(O.E, {
                                                        type: { text: W.intl.string(W.t.Jt6u7B) },
                                                        variant: "expressive",
                                                    }),
                                                t.preview &&
                                                    (0, s.jsx)(O.E, {
                                                        type: { text: W.intl.string(W.t.SKNnqq) },
                                                        variant: "primary",
                                                    }),
                                            ],
                                        }),
                                    E &&
                                        (0, s.jsx)(S.m, {
                                            text: z
                                                ? W.intl.string(W.t.YsCuyF)
                                                : P
                                                  ? W.intl.string(W.t["74KqrR"])
                                                  : (0, D.Ic)(t)
                                                    ? W.intl.string(W.t.I6JG46)
                                                    : W.intl.string(W.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, s.jsx)(y.D, {
                                                className: $.iI,
                                                "aria-label": W.intl.string(W.t.RscU7I),
                                                onClick: ee,
                                                children: (0, s.jsx)(I.PlayIcon, {
                                                    color: "currentColor",
                                                    className: $.A9,
                                                }),
                                            }),
                                        }),
                                    (0, s.jsx)(R.C, {
                                        onOpen: x,
                                        onClose: u,
                                        onSelect: m,
                                        questContent: c.uF.QUEST_HOME_DESKTOP,
                                        quest: t,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: C,
                                        returnRef: es,
                                        children: (e) =>
                                            (0, s.jsx)(y.D, {
                                                ...e,
                                                innerRef: es,
                                                className: $.iI,
                                                "aria-label": W.intl.string(W.t.DEoVWZ),
                                                children: (0, s.jsx)(p.MoreHorizontalIcon, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: $.A9,
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(B.A, {
                                showPlaceholder: !o,
                                width: 100,
                                height: 30,
                                className: r()($.Iu, { [$.OM]: !ei }),
                                children: (0, s.jsx)(H.Ay, {
                                    className: r()($.Iu, { [$.OM]: !ei }),
                                    logotypeClassName: $.ND,
                                    quest: t,
                                    separatorSpacing: H.C8.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: V,
                                }),
                            }),
                            (0, s.jsxs)("div", {
                                className: $.E_,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: $.O,
                                        children: [
                                            (0, s.jsx)(v.E, {
                                                tag: "span",
                                                className: $.vT,
                                                variant: "body-sm/medium",
                                                color: J,
                                                children: W.intl.string(W.t.VAbKhK),
                                            }),
                                            (0, s.jsx)(q.A, {
                                                className: $.w$,
                                                size: 16,
                                                color: g.A.unsafe_rawColors.GREEN_360.css,
                                                "aria-label": W.intl.string(W.t.OfMjx9),
                                                allowFullSizedIcon: !0,
                                                children: (0, s.jsx)(T.CheckmarkSmallBoldIcon, {
                                                    color: g.A.unsafe_rawColors.WHITE.css,
                                                    size: "custom",
                                                    width: 13,
                                                    height: 13,
                                                }),
                                            }),
                                            (0, s.jsx)(v.E, {
                                                className: $.eA,
                                                tag: "span",
                                                variant: "body-sm/medium",
                                                color: "text-overlay-light",
                                                children:
                                                    t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                                            }),
                                        ],
                                    }),
                                    A || Q
                                        ? null
                                        : (0, s.jsx)(v.E, {
                                              className: $.xK,
                                              variant: "body-sm/medium",
                                              color: J,
                                              children: W.intl.format(W.t["7D8r4F"], { expiryDate: L }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(Y, { quest: t, warningHints: a, isDarkTheme: j, sourceQuestContent: C }),
                ],
            }),
        ],
    });
}
var Z = n(604121),
    ee = n(534514),
    et = n(775602),
    en = n(409626),
    es = n(106799),
    ei = n(287809),
    el = n(870273),
    er = n(646917),
    ea = n(576761),
    eo = n(417404),
    ec = n(117634),
    eu = n(453384),
    ed = n(442734),
    ex = n(639701),
    em = n(843282),
    eC = n(31300),
    eh = n(687966),
    eE = n(825484),
    ef = n(821609),
    ej = n(414499),
    eg = n(408278),
    ev = n(743368),
    eA = n(971649),
    eN = n(651892),
    eO = n(574112),
    eS = n(814793),
    ey = n(452411),
    eI = n(79545),
    ep = n(221596),
    eT = n(336779);
let eQ = [
    {
        value: ep.fO.DESKTOP,
        get label() {
            return W.intl.string(W.t["QXc01+"]);
        },
    },
    {
        value: ep.fO.CONSOLE,
        get label() {
            return W.intl.string(W.t["8lAfuB"]);
        },
    },
];
function e_(e) {
    let t,
        n,
        { value: i } = e;
    switch (i) {
        case ep.fO.DESKTOP:
            ((n = (0, s.jsx)(eC.ScreenIcon, {})), (t = W.intl.string(W.t["QXc01+"])));
            break;
        case ep.fO.CONSOLE:
            ((n = (0, s.jsx)(eh.GameControllerIcon, {})), (t = W.intl.string(W.t["8lAfuB"])));
            break;
        default:
            return null;
    }
    return (0, s.jsxs)("div", { className: eT.FL, children: [n, t] });
}
function eq(e) {
    let t, n;
    if (0 === e.length) return null;
    switch (e[0].value) {
        case ep.fO.DESKTOP:
            ((n = (0, s.jsx)(eC.ScreenIcon, {})), (t = W.intl.string(W.t.g6Dr44)));
            break;
        case ep.fO.CONSOLE:
            ((n = (0, s.jsx)(eh.GameControllerIcon, {})), (t = W.intl.string(W.t.iyNbj5)));
            break;
        default:
            return null;
    }
    return (0, s.jsxs)("span", { className: eT.FL, children: [n, t] });
}
function eL(e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: i,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: r,
        } = e,
        { launchInGameActivity: a } = (0, d.zW)(t),
        o = (0, el.NA)({ quest: t, shortText: !0 });
    return (0, s.jsx)("div", {
        className: eT.qz,
        children: (0, s.jsxs)(eE.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                (0, s.jsx)(ef.$, {
                    variant: "secondary",
                    icon: t.config.features.includes(ep.Li.CLOUD_GAMING_ACTIVITY)
                        ? ej.CloudIcon
                        : eh.GameControllerIcon,
                    text: o,
                    onClick: a,
                }),
                (0, s.jsx)(ey.A, {
                    quest: t,
                    surface: eI.V3.QUEST_HOME_TILE_FOOTER,
                    analyticsCtxQuestContent: n,
                    analyticsCtxSourceQuestContent: i,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: r,
                }),
            ],
        }),
    });
}
function ew(e) {
    let { quest: t, content: n, sourceQuestContent: l, fullWidth: r } = e,
        { externalLinkCta: a, handleOpenExternalLink: o } = (function (e) {
            let { quest: t, content: n, sourceQuestContent: s } = e,
                l = (0, eA.wW)();
            return {
                externalLinkCta: (0, eN.wr)(t),
                handleOpenExternalLink: i.useCallback(() => {
                    (0, eO.pu)(t, {
                        content: n,
                        ctaContent: b.Cy.OPEN_GAME_LINK,
                        impressionId: l(),
                        sourceQuestContent: s,
                    });
                }, [t, n, s, l]),
            };
        })({ quest: t, content: n, sourceQuestContent: l }),
        { iconOnlyCTA: c } = i.useContext(G);
    return c && !r
        ? (0, s.jsx)(S.m, {
              text: a,
              ariaHidden: !0,
              children: (0, s.jsx)(eg.K, {
                  variant: "secondary",
                  icon: ev.LinkExternalMediumIcon,
                  "aria-label": a,
                  onClick: o,
              }),
          })
        : (0, s.jsx)(ef.$, { variant: "secondary", text: a, onClick: o, fullWidth: r });
}
function eb(e) {
    let { quest: t, content: n, sourceQuestContent: i } = e;
    return (0, s.jsx)("div", {
        className: eT.qz,
        children: (0, s.jsx)(ew, { quest: t, content: n, sourceQuestContent: i, fullWidth: !0 }),
    });
}
function eD(e) {
    let {
            quest: t,
            ctaQuestState: n,
            analyticsCtxQuestContent: i,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: a,
        } = e,
        o = (function (e, t) {
            switch (e) {
                case eI.UA.EXPIRED_CLAIMABLE:
                case eI.UA.EXPIRED:
                case eI.UA.EXPIRED_CLAIMED:
                    return !0;
                case eI.UA.CLAIMED:
                case eI.UA.COMPLETED:
                    return (0, M.vv)(t) || (0, eS.vA)(t);
                case eI.UA.INCOMPLETE:
                case eI.UA.ENROLLED:
                    return (0, M.vv)(t) || (0, eS.vA)(t) || (0, M.I6)(t);
                case eI.UA.UNENROLLED:
                    return !0;
                default:
                    return !1;
            }
        })(n, t);
    return (0, s.jsx)("div", {
        className: eT.qz,
        children: (0, s.jsxs)(eE.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                o && (0, s.jsx)(ew, { quest: t, content: i, sourceQuestContent: l }),
                (0, s.jsx)(ey.A, {
                    quest: t,
                    surface: eI.V3.QUEST_HOME_TILE_FOOTER,
                    analyticsCtxQuestContent: i,
                    analyticsCtxSourceQuestContent: l,
                    analyticsCtxQuestContentPosition: r,
                    analyticsCtxQuestContentRowIndex: a,
                }),
            ],
        }),
    });
}
function eM(e) {
    let { quest: t, analyticsCtxQuestContent: n, analyticsCtxSourceQuestContent: i } = e;
    return (0, s.jsx)("div", {
        className: eT.qz,
        children: (0, s.jsxs)(eE.e, {
            direction: "horizontal",
            fullWidth: !0,
            wrap: !1,
            children: [
                (0, s.jsx)(ef.$, { variant: "secondary", disabled: !0, text: W.intl.string(W.t["8LKchl"]) }),
                (0, s.jsx)(ef.$, {
                    variant: "primary",
                    onClick: () => (0, K.m6)(t, n, i),
                    text: W.intl.string(W.t.vY9GgG),
                }),
            ],
        }),
    });
}
function eP(e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: a,
        } = e,
        o = (0, d.fc)(t),
        u = (0, L.O)((e) => e.clearErrorHints),
        [x, m, C] = (0, d.Qo)(t, o),
        h = i.useCallback(
            (e) => {
                (C(e), e === ep.fO.DESKTOP && u(t.id));
            },
            [C, u, t.id],
        );
    return x === c.X0.SELECT
        ? (0, s.jsx)(em.Pw, {
              className: eT.dd,
              isSelected: () => !1,
              options: eQ,
              placeholder: W.intl.string(W.t.drVw4T),
              renderOptionLabel: e_,
              renderOptionValue: eq,
              select: h,
              serialize: (e) => {
                  switch (e) {
                      case ep.fO.DESKTOP:
                          return W.intl.string(W.t["QXc01+"]);
                      case ep.fO.CONSOLE:
                          return W.intl.string(W.t["8lAfuB"]);
                      default:
                          return W.intl.string(W.t.WLDKSb);
                  }
              },
              size: "sm",
              "data-migration-pending": !0,
          })
        : m.length > 1
          ? (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)("div", {
                        className: eT.qz,
                        children: (0, s.jsx)(ey.A, {
                            quest: t,
                            surface: eI.V3.QUEST_HOME_TILE_FOOTER,
                            analyticsCtxQuestContent: n,
                            analyticsCtxSourceQuestContent: l,
                            analyticsCtxQuestContentPosition: r,
                            analyticsCtxQuestContentRowIndex: a,
                        }),
                    }),
                    (0, s.jsx)("div", {
                        className: eT.qz,
                        children: (0, s.jsx)(em.Pw, {
                            className: eT.xZ,
                            isSelected: (e) => {
                                switch (x) {
                                    case c.X0.DESKTOP:
                                        return e === ep.fO.DESKTOP;
                                    case c.X0.CONSOLE:
                                        return e === ep.fO.CONSOLE;
                                    default:
                                        return !1;
                                }
                            },
                            options: eQ,
                            placeholder: W.intl.string(W.t.drVw4T),
                            renderOptionLabel: e_,
                            renderOptionValue: eq,
                            select: h,
                            serialize: (e) => {
                                switch (e) {
                                    case ep.fO.DESKTOP:
                                        return W.intl.string(W.t["QXc01+"]);
                                    case ep.fO.CONSOLE:
                                        return W.intl.string(W.t["8lAfuB"]);
                                }
                            },
                            size: "sm",
                            "data-migration-pending": !0,
                        }),
                    }),
                ],
            })
          : (0, s.jsx)(eD, {
                quest: t,
                ctaQuestState: eI.UA.ENROLLED,
                analyticsCtxQuestContent: n,
                analyticsCtxSourceQuestContent: l,
                analyticsCtxQuestContentPosition: r,
                analyticsCtxQuestContentRowIndex: a,
            });
}
function eU(e) {
    let { quest: t, questContent: n, contentPosition: i, rowIndex: l, sourceQuestContent: r } = e,
        c = (0, eI.Pd)(t),
        { isQuestEnrollmentBlocked: u } = (0, a.cf)([o.A], () => ({
            isQuestEnrollmentBlocked: null != o.A.questEnrollmentBlockedUntil,
        }));
    return c === eI.UA.UNENROLLED && u
        ? (0, s.jsx)("div", {
              className: eT.kL,
              children: (0, s.jsx)(eM, { quest: t, analyticsCtxQuestContent: n, analyticsCtxSourceQuestContent: r }),
          })
        : c === eI.UA.ENROLLED && (0, M.g5)(t)
          ? (0, s.jsx)("div", {
                className: eT.kL,
                children: (0, s.jsx)(eP, {
                    quest: t,
                    analyticsCtxQuestContentPosition: i,
                    analyticsCtxQuestContentRowIndex: l,
                    analyticsCtxQuestContent: n,
                    analyticsCtxSourceQuestContent: r,
                }),
            })
          : (c === eI.UA.ENROLLED || c === eI.UA.INCOMPLETE) && (0, M.no)(t)
            ? (0, s.jsx)("div", {
                  className: eT.kL,
                  children: (0, s.jsx)(eb, { quest: t, content: n, sourceQuestContent: r }),
              })
            : (c === eI.UA.COMPLETED || c === eI.UA.CLAIMED) && (0, eS.vA)(t)
              ? (0, s.jsx)("div", {
                    className: eT.kL,
                    children: (0, s.jsx)(eL, {
                        quest: t,
                        analyticsCtxQuestContent: n,
                        analyticsCtxSourceQuestContent: r,
                        analyticsCtxQuestContentPosition: i,
                        analyticsCtxQuestContentRowIndex: l,
                    }),
                })
              : (0, s.jsx)("div", {
                    className: eT.kL,
                    children: (0, s.jsx)(eD, {
                        quest: t,
                        ctaQuestState: c,
                        analyticsCtxQuestContent: n,
                        analyticsCtxSourceQuestContent: r,
                        analyticsCtxQuestContentPosition: i,
                        analyticsCtxQuestContentRowIndex: l,
                    }),
                });
}
var eR = n(503666);
async function ek() {
    return await n.e(40119).then(n.t.bind(n, 718698, 19));
}
function eH(e) {
    let {
            quest: t,
            questContent: n,
            isHovering: l,
            contentPosition: o,
            rowIndex: c,
            isVisibleInViewport: x,
            sourceQuestContent: m,
            questNameHeadingId: h,
        } = e,
        f = i.useRef(null),
        j = (0, er.z)(),
        g = (0, d.SD)(t, j),
        A = j === ea.MA.NITRO && g,
        N = (0, a.bG)([ei.default], () => ei.default.getCurrentUser()),
        O = (0, eo.mq)(t.config, N),
        S = (0, eo.mH)(t.config, N),
        y = t.userStatus?.enrolledAt != null,
        { ref: I, scrollHeight: p } = (0, Q.wR)(),
        T = null != p && p > 104,
        { onAssetLoadComplete: _ } = i.useContext(F.M),
        { expansionSpring: q } = (0, E.z)({ expansionSpring: +!!l, config: { ...V.N, clamp: !0 } }),
        L = t.userStatus?.completedAt != null,
        w = t.userStatus?.claimedAt != null,
        b = (0, eo.ks)(t.config),
        P = t.userStatus?.orbQuantityClaimed ?? (0, eo._Z)(t.config),
        U = (0, eo.wo)(t.config, N),
        R = (0, M.I6)(t),
        { completedRatio: k, completedRatioDisplay: H } = (0, d.O9)(t, R),
        K = (0, el.A9)(t, m, ep.rE.QUEST_HOME_DESKTOP, en.GameProfileSources.QuestHome, f),
        G = (function (e, t) {
            let { variant: n } = u.Mk.useConfig({ location: t });
            return n === u.d.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER
                ? e.messages.gamePublisher
                : n === u.d.REMOVE_QUEST_TITLE_SUFFIX
                  ? e.messages.questName
                  : W.intl.format(W.t.EAYZAr, { questName: e.messages.questName });
        })(t.config, ep.rE.QUEST_HOME_DESKTOP),
        X = i.useMemo(
            () =>
                w && b
                    ? (0, s.jsxs)(
                          ez,
                          {
                              questId: t.id,
                              children: [
                                  (0, s.jsx)(es.A, { shouldUseThemeColor: !0, className: eR.Kq, customSize: 14 }),
                                  W.intl.format(W.t["nLXlh+"], { orbAmount: P ?? 0 }),
                              ],
                          },
                          t.id,
                      )
                    : w
                      ? (0, s.jsx)(ez, { questId: t.id, children: O })
                      : b
                        ? W.intl.format(W.t["0IUT4Y"], {
                              rewardWithArticleHook: () =>
                                  (0, s.jsxs)(
                                      ez,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, s.jsx)(es.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: eR.Kq,
                                                  customSize: 14,
                                              }),
                                              W.intl.format(W.t["nLXlh+"], { orbAmount: U ?? 0 }),
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : W.intl.format(W.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, s.jsx)(ez, { questId: t.id, children: S }, t.id),
                          }),
            [O, w, S, t.id, U, P, b],
        ),
        $ = i.useMemo(() => {
            if (null != K)
                return (0, s.jsx)(v.E, {
                    variant: "body-sm/medium",
                    color: "text-muted",
                    className: eR.h_,
                    children: K,
                });
        }, [K]),
        Y = (0, a.bG)([et.Ay], () => et.Ay.useReducedMotion);
    return (0, s.jsxs)("div", {
        className: eR.kL,
        ref: f,
        children: [
            (0, s.jsx)(ec.A, { visible: A, glow: !0 }),
            (0, s.jsxs)(C.animated.div, {
                style: { maxHeight: q.to([0, 1], [104, (p ?? 0) + 12]) },
                className: eR.z,
                children: [
                    (0, s.jsx)("div", {
                        className: eR.c6,
                        children: (0, s.jsxs)(B.A, {
                            showPlaceholder: !x,
                            width: 80,
                            height: 80,
                            children: [
                                !w && L && (0, s.jsx)("div", { className: eR.Nz }),
                                y
                                    ? (0, s.jsxs)("div", {
                                          className: eR.Tr,
                                          children: [
                                              L &&
                                                  (0, s.jsx)(Z.a, {
                                                      importData: ek,
                                                      className: eR.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !Y,
                                                  }),
                                              (0, s.jsx)(eu.A, {
                                                  size: 76,
                                                  percentComplete: k,
                                                  overlayText: l && !(0, D.Ic)(t) ? H : void 0,
                                                  children: (0, s.jsx)(ex.A, {
                                                      quest: t,
                                                      location: ep.rE.QUEST_HOME_DESKTOP,
                                                      questContent: n,
                                                      autoplay: l,
                                                      onLoadComplete: _,
                                                      lazyLoad: !0,
                                                      fullWidth: !0,
                                                      sourceQuestContent: m,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, s.jsx)(ex.A, {
                                          quest: t,
                                          location: ep.rE.QUEST_HOME_DESKTOP,
                                          autoplay: l,
                                          questContent: n,
                                          className: eR.eB,
                                          onLoadComplete: _,
                                          lazyLoad: !0,
                                          sourceQuestContent: m,
                                      }),
                            ],
                        }),
                    }),
                    (0, s.jsxs)("div", {
                        ref: I,
                        className: r()(eR.FS, { [eR.wq]: !T }),
                        children: [
                            (0, s.jsx)(ee.D, {
                                id: h,
                                variant: "body-sm/medium",
                                color: "text-brand",
                                className: eR.G$,
                                children: G,
                            }),
                            g
                                ? (0, s.jsxs)("div", {
                                      className: eR.xv,
                                      children: [
                                          (0, s.jsx)(v.E, {
                                              variant: "body-md/semibold",
                                              color: "text-strong",
                                              className: eR.wx,
                                              children: X,
                                          }),
                                          (0, s.jsx)(ed.e, { questId: t.id, orbMultiplierEligibility: j }),
                                      ],
                                  })
                                : (0, s.jsx)(v.E, {
                                      variant: "body-md/semibold",
                                      color: "text-strong",
                                      className: eR.wx,
                                      children: X,
                                  }),
                            $,
                        ],
                    }),
                    T &&
                        (0, s.jsx)(C.animated.div, {
                            style: { opacity: (0, z.a)(q.to([0, 1], [1, 0])) },
                            className: eR.hS,
                        }),
                ],
            }),
            (0, s.jsx)(eU, { quest: t, questContent: n, contentPosition: o, rowIndex: c, sourceQuestContent: m }),
        ],
    });
}
let ez = i.memo(function (e) {
    let { questId: t, children: n } = e;
    return (0, s.jsx)(
        v.E,
        { variant: "body-md/semibold", color: "text-strong", tag: "span", className: eR.wx, children: n },
        `${t}_reward`,
    );
});
var eK = n(688755),
    eF = n(831368),
    eB = n(989673);
function eG(e, t) {
    return null == t ? `quest-tile-${e}` : `quest-tile-${e}-${t}`;
}
function eV(e) {
    let {
            quest: t,
            className: n,
            sectionIdentifier: l,
            isInFeaturedSection: a,
            questContent: o,
            contentPosition: c,
            rowIndex: x,
            eagerLoadAssets: C,
            impressionRef: h,
            sourceQuestContent: E,
        } = e,
        f = i.useId(),
        [j, g] = i.useState(!1),
        v = (0, d.aC)(t),
        {
            handleHoverStart: A,
            handleHoverEnd: N,
            isEventWithinParent: O,
        } = (0, eK.B)({ quest: t, questContent: o, contentPosition: c, rowIndex: x, sourceQuestContent: E }),
        S = i.useContext(m.X),
        { visibilityElementRef: y, almostVisibleInViewport: I } = (0, eF.I)(
            S?.current?.getScrollerNode() ?? null,
            C ?? !1,
        ),
        p = u.s9.useConfig({ location: ep.rE.QUEST_HOME_DESKTOP });
    return (0, s.jsx)(G.Provider, {
        value: p,
        children: (0, s.jsxs)("article", {
            id: eG(t.id, l),
            ref: (e) => {
                ((h.current = e), (y.current = e));
            },
            "aria-labelledby": f,
            className: r()(eB.k, n),
            onMouseEnter: () => {
                (g(!0), A());
            },
            onMouseLeave: () => {
                (g(!1), N());
            },
            onFocus: (e) => {
                O(e) || (g(!0), A());
            },
            onBlur: (e) => {
                O(e) || (g(!1), N());
            },
            children: [
                (0, s.jsx)(J, {
                    quest: t,
                    isInFeaturedSection: a,
                    isHovering: j,
                    warningHints: v,
                    isVisibleInViewport: I,
                    sourceQuestContent: E,
                }),
                (0, s.jsx)(eH, {
                    quest: t,
                    questContent: o,
                    isHovering: j,
                    contentPosition: c,
                    rowIndex: x,
                    isVisibleInViewport: I,
                    sourceQuestContent: E,
                    questNameHeadingId: f,
                }),
            ],
        }),
    });
}
let eX = i.memo(function (e) {
    let t = (0, a.bG)([o.A], () => (null != e.questId ? o.A.getQuest(e.questId) : void 0), [e.questId]),
        n = i.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == n
        ? null
        : (0, s.jsx)(x.R, {
              questOrQuests: n,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === c.uF.QUESTS_EMBED,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, s.jsx)(eV, { ...e, quest: n, impressionRef: t }),
          });
});
