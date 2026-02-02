n.d(t, {
    A: () => P,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(353709),
    o = n(827734),
    c = n(990078),
    u = n(397927),
    d = n(765671),
    p = n(770178),
    m = n(765548),
    f = n(341915),
    g = n(714510),
    _ = n(890687),
    h = n(18437),
    b = n(590202),
    y = n(918338),
    A = n(270045),
    v = n(57718),
    O = n(847641),
    x = n(646764),
    E = n(398025),
    j = n(433745),
    C = n(654487),
    I = n(818348),
    S = n(985018),
    T = n(806449);
let N = (0, s.animated)(u.abt),
    P = (e) => {
        var t;
        let {
                isQuestExpired: n,
                quest: l,
                location: P,
                size: w,
                expansionSpring: R,
                isAnimating: D,
                isExpanded: L,
                isInteracting: M,
                contentPosition: k,
                toggleExpanded: U,
                sourceQuestContent: G,
            } = e,
            { ref: B, height: F } = (0, d.Ay)(),
            [H, V] = i.useState(null),
            [z, W] = i.useState(null),
            K = (0, m.A)((e) => {
                let t = e.target;
                V(t.offsetWidth), W(t.scrollWidth);
            }),
            Y = (0, p.w)(K),
            q = (0, j.a3)(P),
            J = P === f.uF.QUESTS_EMBED,
            Q = (0, g.wT)(l, C.rE.QUESTS_CARD, P, G),
            X = (null == (t = l.userStatus) ? void 0 : t.completedAt) != null,
            Z = (0, h.Ut)(),
            $ = (0, _.S5)(l.config.expiresAt),
            ee = (0, _.S5)(l.config.rewardsConfig.rewardsExpireAt),
            et = i.useMemo(() => null != l.config.cosponsorMetadata, [l]),
            en = (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    U(),
                    Z({
                        questId: l.id,
                        questContent: P,
                        questContentCTA: L ? b.Cy.COLLAPSE : b.Cy.EXPAND,
                        questContentPosition: k,
                        sourceQuestContent: G,
                    });
            },
            er = (0, r.jsx)(v.Ay, {
                className: T.Iu,
                logotypeClassName: et ? T.qN : void 0,
                gameTileSize: v.LU.MEDIUM,
                quest: l,
                separatorSpacing: v.C8.MEDIUM,
                theme: I.NJ.DARK,
                withGameTile: !J || null == l.config.cosponsorMetadata,
            });
        return (0, r.jsxs)("div", {
            className: a()(T.nw, {
                [T.fu]: q,
                [T.Gg]: J,
                [T.e5]: "xs" === w,
            }),
            "aria-label": S.intl.string(S.t.dcl9MQ),
            style: {
                height: q ? F : void 0,
            },
            children: [
                (0, r.jsx)(y.A, {
                    quest: l,
                    isInteracting: M,
                    containerClassName: T.v7,
                    imageSize: {
                        width: 660,
                        height: 185,
                    },
                    imageClassName: T.Z5,
                }),
                (0, r.jsxs)("div", {
                    className: T.wx,
                    "aria-expanded": L,
                    children: [
                        (0, r.jsxs)(s.animated.div, {
                            className: a()(T.VW, {
                                [T.eX]: J,
                            }),
                            style: {
                                y: q
                                    ? R.to({
                                          range: [0, 1],
                                          output: [j.es, 0],
                                      })
                                    : void 0,
                            },
                            children: [
                                q &&
                                    (0, r.jsx)(s.animated.div, {
                                        className: T.gM,
                                        style: {
                                            opacity: (0, E.a)(
                                                R.to({
                                                    range: [0, 1],
                                                    output: [1, 0],
                                                }),
                                            ),
                                            visibility: D || !L ? "inherit" : "hidden",
                                        },
                                        "aria-hidden": !D && L,
                                        children: (0, r.jsxs)(u.sqX, {
                                            "aria-label": S.intl.string(S.t.dcl9MQ),
                                            onClick: en,
                                            className: T._F,
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className: T.SY,
                                                    children: (0, r.jsx)(x.A, {
                                                        quest: l,
                                                        questContent: P,
                                                        className: T.EK,
                                                        sourceQuestContent: G,
                                                    }),
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className: T.if,
                                                    children: [
                                                        (0, r.jsxs)("div", {
                                                            className: T.dc,
                                                            children: [
                                                                er,
                                                                (0, r.jsx)(O.A, {
                                                                    color: "always-white",
                                                                }),
                                                            ],
                                                        }),
                                                        (0, r.jsx)(u.Text, {
                                                            variant: "text-xs/medium",
                                                            children: Q,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                (0, r.jsx)(s.animated.div, {
                                    ref: (e) => {
                                        B.current = e;
                                    },
                                    className: a()(T.Yu, {
                                        [T.fu]: q,
                                        [T.Gg]: J,
                                    }),
                                    style: {
                                        opacity: (0, E.a)(
                                            R.to({
                                                range: [0, 1],
                                                output: [0, 1],
                                            }),
                                        ),
                                        visibility: D || L ? "inherit" : "hidden",
                                    },
                                    "aria-hidden": !D && !L,
                                    children: (0, r.jsxs)("div", {
                                        className: T.uA,
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: T._V,
                                                children: [
                                                    er,
                                                    J
                                                        ? null
                                                        : (0, r.jsx)(O.A, {
                                                              color: "always-white",
                                                          }),
                                                ],
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: T.P9,
                                                children: [
                                                    (0, r.jsx)(c.m, {
                                                        __unsupportedReactNodeAsText: l.config.messages.questName,
                                                        shouldShow: null != H && null != z && H < z,
                                                        children: (0, r.jsx)(u.Heading, {
                                                            ref: Y,
                                                            variant:
                                                                "lg" === w
                                                                    ? "heading-xxl/bold"
                                                                    : "sm" === w
                                                                      ? "heading-xl/bold"
                                                                      : "heading-lg/bold",
                                                            className: T.R_,
                                                            color: "always-white",
                                                            children: S.intl.format(S.t.EAYZAr, {
                                                                questName: l.config.messages.questName,
                                                            }),
                                                        }),
                                                    }),
                                                    (0, r.jsx)(u.Text, {
                                                        variant: "text-xs/normal",
                                                        color: "always-white",
                                                        children: X
                                                            ? S.intl.formatToPlainString(S.t.APddvF, {
                                                                  expirationDate: ee,
                                                              })
                                                            : n
                                                              ? S.intl.formatToPlainString(S.t.v7xMw7, {
                                                                    expirationDate: $,
                                                                })
                                                              : S.intl.formatToPlainString(S.t["pX+fmn"], {
                                                                    expirationDate: $,
                                                                }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(s.animated.div, {
                            className: T._q,
                            style: {
                                top: q
                                    ? R.to({
                                          range: [0, 1],
                                          output: [j.es / 2 - j.uR / 2, j.wl],
                                      })
                                    : j.wl,
                            },
                            children: [
                                (0, r.jsx)(A.C, {
                                    questContent: P,
                                    quest: l,
                                    questContentPosition: k,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: q,
                                    showShareLink: !n && J,
                                    sourceQuestContent: G,
                                    children: (e) => {
                                        var t, n;
                                        return (0, r.jsx)(s.animated.div, {
                                            style: {
                                                opacity: (0, E.a)(R),
                                                visibility: D || L ? "inherit" : "hidden",
                                            },
                                            "aria-hidden": !D && !L,
                                            children: (0, r.jsx)(
                                                u.DUT,
                                                ((t = (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            r = Object.keys(n);
                                                        "function" == typeof Object.getOwnPropertySymbols &&
                                                            (r = r.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e)
                                                                        .enumerable;
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
                                                })({}, e)),
                                                (n = n =
                                                    {
                                                        className: T.P0,
                                                        "aria-label": S.intl.string(S.t.DEoVWZ),
                                                        children: (0, r.jsx)(u.jNK, {
                                                            size: "md",
                                                            color: o.A.colors.WHITE,
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
                                                          Object.defineProperty(
                                                              t,
                                                              e,
                                                              Object.getOwnPropertyDescriptor(n, e),
                                                          );
                                                      }),
                                                t),
                                            ),
                                        });
                                    },
                                }),
                                !(0, j.rW)(P) &&
                                    (0, r.jsx)(u.DUT, {
                                        onClick: en,
                                        className: T.P0,
                                        "aria-label": L ? S.intl.string(S.t.iTcuma) : S.intl.string(S.t.dcl9MQ),
                                        children: (0, r.jsx)(N, {
                                            style: {
                                                rotate: R.to({
                                                    range: [0, 1],
                                                    output: [0, 180],
                                                }),
                                            },
                                            color: o.A.colors.WHITE,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
