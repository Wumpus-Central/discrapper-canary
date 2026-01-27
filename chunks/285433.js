n.d(t, {
    A: () => N,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(108531),
    o = n(827734),
    c = n(990078),
    u = n(397927),
    d = n(765671),
    p = n(770178),
    m = n(765548),
    f = n(341915),
    g = n(714510),
    h = n(890687),
    _ = n(18437),
    b = n(590202),
    A = n(918338),
    y = n(270045),
    v = n(57718),
    x = n(847641),
    O = n(646764),
    E = n(433745),
    j = n(654487),
    C = n(818348),
    I = n(985018),
    S = n(806449);
let T = (0, s.animated)(u.abt),
    N = (e) => {
        var t;
        let {
                isQuestExpired: n,
                quest: l,
                location: N,
                size: P,
                expansionSpring: w,
                isAnimating: R,
                isExpanded: D,
                isInteracting: L,
                contentPosition: M,
                toggleExpanded: k,
                sourceQuestContent: U,
            } = e,
            { ref: G, height: B } = (0, d.Ay)(),
            [F, H] = i.useState(null),
            [V, z] = i.useState(null),
            W = (0, m.A)((e) => {
                let t = e.target;
                H(t.offsetWidth), z(t.scrollWidth);
            }),
            K = (0, p.w)(W),
            Y = (0, E.a3)(N),
            q = N === f.uF.QUESTS_EMBED,
            J = (0, g.wT)(l, j.rE.QUESTS_CARD, N, U),
            Q = (null == (t = l.userStatus) ? void 0 : t.completedAt) != null,
            Z = (0, _.Ut)(),
            X = (0, h.S5)(l.config.expiresAt),
            $ = (0, h.S5)(l.config.rewardsConfig.rewardsExpireAt),
            ee = i.useMemo(() => null != l.config.cosponsorMetadata, [l]),
            et = (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    k(),
                    Z({
                        questId: l.id,
                        questContent: N,
                        questContentCTA: D ? b.Cy.COLLAPSE : b.Cy.EXPAND,
                        questContentPosition: M,
                        sourceQuestContent: U,
                    });
            },
            en = (0, r.jsx)(v.Ay, {
                className: S.Iu,
                logotypeClassName: ee ? S.qN : void 0,
                gameTileSize: v.LU.MEDIUM,
                quest: l,
                separatorSpacing: v.C8.MEDIUM,
                theme: C.NJ.DARK,
                withGameTile: !q || null == l.config.cosponsorMetadata,
            });
        return (0, r.jsxs)("div", {
            className: a()(S.nw, {
                [S.fu]: Y,
                [S.Gg]: q,
                [S.e5]: "xs" === P,
            }),
            "aria-label": I.intl.string(I.t.dcl9MQ),
            style: {
                height: Y ? B : void 0,
            },
            children: [
                (0, r.jsx)(A.A, {
                    quest: l,
                    isInteracting: L,
                    containerClassName: S.v7,
                    imageSize: {
                        width: 660,
                        height: 185,
                    },
                    imageClassName: S.Z5,
                }),
                (0, r.jsxs)("div", {
                    className: S.wx,
                    "aria-expanded": D,
                    children: [
                        (0, r.jsxs)(s.animated.div, {
                            className: a()(S.VW, {
                                [S.eX]: q,
                            }),
                            style: {
                                y: Y
                                    ? w.to({
                                          range: [0, 1],
                                          output: [E.es, 0],
                                      })
                                    : void 0,
                            },
                            children: [
                                Y &&
                                    (0, r.jsx)(s.animated.div, {
                                        className: S.gM,
                                        style: {
                                            opacity: w.to({
                                                range: [0, 1],
                                                output: [1, 0],
                                            }),
                                            visibility: R || !D ? "inherit" : "hidden",
                                        },
                                        "aria-hidden": !R && D,
                                        children: (0, r.jsxs)(u.sqX, {
                                            "aria-label": I.intl.string(I.t.dcl9MQ),
                                            onClick: et,
                                            className: S._F,
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className: S.SY,
                                                    children: (0, r.jsx)(O.A, {
                                                        quest: l,
                                                        questContent: N,
                                                        className: S.EK,
                                                        sourceQuestContent: U,
                                                    }),
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className: S.if,
                                                    children: [
                                                        (0, r.jsxs)("div", {
                                                            className: S.dc,
                                                            children: [
                                                                en,
                                                                (0, r.jsx)(x.A, {
                                                                    color: "always-white",
                                                                }),
                                                            ],
                                                        }),
                                                        (0, r.jsx)(u.Text, {
                                                            variant: "text-xs/medium",
                                                            children: J,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                (0, r.jsx)(s.animated.div, {
                                    ref: (e) => {
                                        G.current = e;
                                    },
                                    className: a()(S.Yu, {
                                        [S.fu]: Y,
                                        [S.Gg]: q,
                                    }),
                                    style: {
                                        opacity: w.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                        visibility: R || D ? "inherit" : "hidden",
                                    },
                                    "aria-hidden": !R && !D,
                                    children: (0, r.jsxs)("div", {
                                        className: S.uA,
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: S._V,
                                                children: [
                                                    en,
                                                    q
                                                        ? null
                                                        : (0, r.jsx)(x.A, {
                                                              color: "always-white",
                                                          }),
                                                ],
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: S.P9,
                                                children: [
                                                    (0, r.jsx)(c.m, {
                                                        __unsupportedReactNodeAsText: l.config.messages.questName,
                                                        shouldShow: null != F && null != V && F < V,
                                                        children: (0, r.jsx)(u.Heading, {
                                                            ref: K,
                                                            variant:
                                                                "lg" === P
                                                                    ? "heading-xxl/bold"
                                                                    : "sm" === P
                                                                      ? "heading-xl/bold"
                                                                      : "heading-lg/bold",
                                                            className: S.R_,
                                                            color: "always-white",
                                                            children: I.intl.format(I.t.EAYZAr, {
                                                                questName: l.config.messages.questName,
                                                            }),
                                                        }),
                                                    }),
                                                    (0, r.jsx)(u.Text, {
                                                        variant: "text-xs/normal",
                                                        color: "always-white",
                                                        children: Q
                                                            ? I.intl.formatToPlainString(I.t.APddvF, {
                                                                  expirationDate: $,
                                                              })
                                                            : n
                                                              ? I.intl.formatToPlainString(I.t.v7xMw7, {
                                                                    expirationDate: X,
                                                                })
                                                              : I.intl.formatToPlainString(I.t["pX+fmn"], {
                                                                    expirationDate: X,
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
                            className: S._q,
                            style: {
                                top: Y
                                    ? w.to({
                                          range: [0, 1],
                                          output: [E.es / 2 - E.uR / 2, E.wl],
                                      })
                                    : E.wl,
                            },
                            children: [
                                (0, r.jsx)(y.C, {
                                    questContent: N,
                                    quest: l,
                                    questContentPosition: M,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: Y,
                                    showShareLink: !n && q,
                                    sourceQuestContent: U,
                                    children: (e) => {
                                        var t, n;
                                        return (0, r.jsx)(s.animated.div, {
                                            style: {
                                                opacity: w,
                                                visibility: R || D ? "inherit" : "hidden",
                                            },
                                            "aria-hidden": !R && !D,
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
                                                        className: S.P0,
                                                        "aria-label": I.intl.string(I.t.DEoVWZ),
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
                                !(0, E.rW)(N) &&
                                    (0, r.jsx)(u.DUT, {
                                        onClick: et,
                                        className: S.P0,
                                        "aria-label": D ? I.intl.string(I.t.iTcuma) : I.intl.string(I.t.dcl9MQ),
                                        children: (0, r.jsx)(T, {
                                            style: {
                                                rotate: w.to({
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
