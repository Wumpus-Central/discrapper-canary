n.d(t, {
    A: () => x,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(108531),
    l = n(827734),
    c = n(990078),
    u = n(397927),
    d = n(765671),
    f = n(770178),
    p = n(765548),
    _ = n(216456),
    h = n(341915),
    m = n(714510),
    g = n(890687),
    E = n(918338),
    b = n(270045),
    y = n(57718),
    O = n(847641),
    A = n(646764),
    v = n(433745),
    S = n(654487),
    I = n(818348),
    T = n(985018),
    C = n(806449);

function N(e, t, n) {
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

function R(e) {
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
                N(e, t, n[t]);
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

function P(e, t) {
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
let D = (0, o.animated)(u.abt),
    x = (e) => {
        var t;
        let {
                isQuestExpired: n,
                quest: a,
                location: N,
                size: w,
                expansionSpring: x,
                isAnimating: L,
                isExpanded: j,
                isInteracting: M,
                contentPosition: k,
                toggleExpanded: U,
                sourceQuestContent: G,
            } = e,
            { ref: V, height: F } = (0, d.Ay)(),
            [B, H] = i.useState(null),
            [Y, W] = i.useState(null),
            K = (0, p.A)((e) => {
                let t = e.target;
                H(t.offsetWidth), W(t.scrollWidth);
            }),
            z = (0, f.w)(K),
            q = (0, v.a3)(N),
            X = N === h.uF.QUESTS_EMBED,
            Z = (0, m.wT)(a, S.rE.QUESTS_CARD, N, G),
            Q = (null == (t = a.userStatus) ? void 0 : t.completedAt) != null,
            $ = (0, _.Ut)(),
            J = (0, g.S5)(a.config.expiresAt),
            ee = (0, g.S5)(a.config.rewardsConfig.rewardsExpireAt),
            et = i.useMemo(() => null != a.config.cosponsorMetadata, [a]),
            en = (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    U(),
                    $({
                        questId: a.id,
                        questContent: N,
                        questContentCTA: j ? _.Cy.COLLAPSE : _.Cy.EXPAND,
                        questContentPosition: k,
                        sourceQuestContent: G,
                    });
            },
            er = () => null != B && null != Y && B < Y,
            ei = (0, r.jsx)(y.Ay, {
                className: C.Iu,
                logotypeClassName: et ? C.qN : void 0,
                gameTileSize: y.LU.MEDIUM,
                quest: a,
                separatorSpacing: y.C8.MEDIUM,
                theme: I.NJ.DARK,
                withGameTile: !X || null == a.config.cosponsorMetadata,
            });
        return (0, r.jsxs)("div", {
            className: s()(C.nw, {
                [C.fu]: q,
                [C.Gg]: X,
                [C.e5]: "xs" === w,
            }),
            "aria-label": T.intl.string(T.t.dcl9MQ),
            style: {
                height: q ? F : void 0,
            },
            children: [
                (0, r.jsx)(E.A, {
                    quest: a,
                    isInteracting: M,
                    containerClassName: C.v7,
                    imageSize: {
                        width: 660,
                        height: 185,
                    },
                    imageClassName: C.Z5,
                }),
                (0, r.jsxs)("div", {
                    className: C.wx,
                    "aria-expanded": j,
                    children: [
                        (0, r.jsxs)(o.animated.div, {
                            className: s()(C.VW, {
                                [C.eX]: X,
                            }),
                            style: {
                                y: q
                                    ? x.to({
                                          range: [0, 1],
                                          output: [v.es, 0],
                                      })
                                    : void 0,
                            },
                            children: [
                                q &&
                                    (0, r.jsx)(o.animated.div, {
                                        className: C.gM,
                                        style: {
                                            opacity: x.to({
                                                range: [0, 1],
                                                output: [1, 0],
                                            }),
                                            visibility: L || !j ? "inherit" : "hidden",
                                        },
                                        "aria-hidden": !L && j,
                                        children: (0, r.jsxs)(u.sqX, {
                                            "aria-label": T.intl.string(T.t.dcl9MQ),
                                            onClick: en,
                                            className: C._F,
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className: C.SY,
                                                    children: (0, r.jsx)(A.A, {
                                                        quest: a,
                                                        questContent: N,
                                                        className: C.EK,
                                                        sourceQuestContent: G,
                                                    }),
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className: C.if,
                                                    children: [
                                                        (0, r.jsxs)("div", {
                                                            className: C.dc,
                                                            children: [
                                                                ei,
                                                                (0, r.jsx)(O.A, {
                                                                    color: "always-white",
                                                                }),
                                                            ],
                                                        }),
                                                        (0, r.jsx)(u.Text, {
                                                            variant: "text-xs/medium",
                                                            children: Z,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                (0, r.jsx)(o.animated.div, {
                                    ref: (e) => {
                                        V.current = e;
                                    },
                                    className: s()(C.Yu, {
                                        [C.fu]: q,
                                        [C.Gg]: X,
                                    }),
                                    style: {
                                        opacity: x.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                        visibility: L || j ? "inherit" : "hidden",
                                    },
                                    "aria-hidden": !L && !j,
                                    children: (0, r.jsxs)("div", {
                                        className: C.uA,
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: C._V,
                                                children: [
                                                    ei,
                                                    X
                                                        ? null
                                                        : (0, r.jsx)(O.A, {
                                                              color: "always-white",
                                                          }),
                                                ],
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: C.P9,
                                                children: [
                                                    (0, r.jsx)(c.m, {
                                                        __unsupportedReactNodeAsText: a.config.messages.questName,
                                                        shouldShow: er(),
                                                        children: (0, r.jsx)(u.Heading, {
                                                            ref: z,
                                                            variant:
                                                                "lg" === w
                                                                    ? "heading-xxl/bold"
                                                                    : "sm" === w
                                                                      ? "heading-xl/bold"
                                                                      : "heading-lg/bold",
                                                            className: C.R_,
                                                            color: "always-white",
                                                            children: T.intl.format(T.t.EAYZAr, {
                                                                questName: a.config.messages.questName,
                                                            }),
                                                        }),
                                                    }),
                                                    (0, r.jsx)(u.Text, {
                                                        variant: "text-xs/normal",
                                                        color: "always-white",
                                                        children: Q
                                                            ? T.intl.formatToPlainString(T.t.APddvF, {
                                                                  expirationDate: ee,
                                                              })
                                                            : n
                                                              ? T.intl.formatToPlainString(T.t.v7xMw7, {
                                                                    expirationDate: J,
                                                                })
                                                              : T.intl.formatToPlainString(T.t["pX+fmn"], {
                                                                    expirationDate: J,
                                                                }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(o.animated.div, {
                            className: C._q,
                            style: {
                                top: q
                                    ? x.to({
                                          range: [0, 1],
                                          output: [v.es / 2 - v.uR / 2, v.wl],
                                      })
                                    : v.wl,
                            },
                            children: [
                                (0, r.jsx)(b.C, {
                                    questContent: N,
                                    quest: a,
                                    questContentPosition: k,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: q,
                                    showShareLink: !n && X,
                                    sourceQuestContent: G,
                                    children: (e) =>
                                        (0, r.jsx)(o.animated.div, {
                                            style: {
                                                opacity: x,
                                                visibility: L || j ? "inherit" : "hidden",
                                            },
                                            "aria-hidden": !L && !j,
                                            children: (0, r.jsx)(
                                                u.DUT,
                                                P(R({}, e), {
                                                    className: C.P0,
                                                    "aria-label": T.intl.string(T.t.DEoVWZ),
                                                    children: (0, r.jsx)(u.jNK, {
                                                        size: "md",
                                                        color: l.A.colors.WHITE,
                                                    }),
                                                }),
                                            ),
                                        }),
                                }),
                                !(0, v.rW)(N) &&
                                    (0, r.jsx)(u.DUT, {
                                        onClick: en,
                                        className: C.P0,
                                        "aria-label": j ? T.intl.string(T.t.iTcuma) : T.intl.string(T.t.dcl9MQ),
                                        children: (0, r.jsx)(D, {
                                            style: {
                                                rotate: x.to({
                                                    range: [0, 1],
                                                    output: [0, 180],
                                                }),
                                            },
                                            color: l.A.colors.WHITE,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
