n.d(t, {
    A: () => L,
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
    _ = n(341915),
    h = n(714510),
    m = n(890687),
    g = n(18437),
    E = n(590202),
    y = n(918338),
    b = n(270045),
    O = n(57718),
    v = n(847641),
    A = n(646764),
    I = n(433745),
    S = n(654487),
    T = n(818348),
    C = n(985018),
    N = n(806449);

function w(e, t, n) {
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
                w(e, t, n[t]);
            });
    }
    return e;
}

function P(e, t) {
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
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = (0, o.animated)(u.abt),
    L = (e) => {
        var t;
        let {
                isQuestExpired: n,
                quest: a,
                location: w,
                size: P,
                expansionSpring: L,
                isAnimating: j,
                isExpanded: M,
                isInteracting: k,
                contentPosition: U,
                toggleExpanded: G,
                sourceQuestContent: V,
            } = e,
            { ref: F, height: B } = (0, d.Ay)(),
            [H, Y] = i.useState(null),
            [W, K] = i.useState(null),
            z = (0, p.A)((e) => {
                let t = e.target;
                Y(t.offsetWidth), K(t.scrollWidth);
            }),
            q = (0, f.w)(z),
            Z = (0, I.a3)(w),
            X = w === _.uF.QUESTS_EMBED,
            Q = (0, h.wT)(a, S.rE.QUESTS_CARD, w, V),
            J = (null == (t = a.userStatus) ? void 0 : t.completedAt) != null,
            $ = (0, g.Ut)(),
            ee = (0, m.S5)(a.config.expiresAt),
            et = (0, m.S5)(a.config.rewardsConfig.rewardsExpireAt),
            en = i.useMemo(() => null != a.config.cosponsorMetadata, [a]),
            er = (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    G(),
                    $({
                        questId: a.id,
                        questContent: w,
                        questContentCTA: M ? E.Cy.COLLAPSE : E.Cy.EXPAND,
                        questContentPosition: U,
                        sourceQuestContent: V,
                    });
            },
            ei = () => null != H && null != W && H < W,
            ea = (0, r.jsx)(O.Ay, {
                className: N.Iu,
                logotypeClassName: en ? N.qN : void 0,
                gameTileSize: O.LU.MEDIUM,
                quest: a,
                separatorSpacing: O.C8.MEDIUM,
                theme: T.NJ.DARK,
                withGameTile: !X || null == a.config.cosponsorMetadata,
            });
        return (0, r.jsxs)("div", {
            className: s()(N.nw, {
                [N.fu]: Z,
                [N.Gg]: X,
                [N.e5]: "xs" === P,
            }),
            "aria-label": C.intl.string(C.t.dcl9MQ),
            style: {
                height: Z ? B : void 0,
            },
            children: [
                (0, r.jsx)(y.A, {
                    quest: a,
                    isInteracting: k,
                    containerClassName: N.v7,
                    imageSize: {
                        width: 660,
                        height: 185,
                    },
                    imageClassName: N.Z5,
                }),
                (0, r.jsxs)("div", {
                    className: N.wx,
                    "aria-expanded": M,
                    children: [
                        (0, r.jsxs)(o.animated.div, {
                            className: s()(N.VW, {
                                [N.eX]: X,
                            }),
                            style: {
                                y: Z
                                    ? L.to({
                                          range: [0, 1],
                                          output: [I.es, 0],
                                      })
                                    : void 0,
                            },
                            children: [
                                Z &&
                                    (0, r.jsx)(o.animated.div, {
                                        className: N.gM,
                                        style: {
                                            opacity: L.to({
                                                range: [0, 1],
                                                output: [1, 0],
                                            }),
                                            visibility: j || !M ? "inherit" : "hidden",
                                        },
                                        "aria-hidden": !j && M,
                                        children: (0, r.jsxs)(u.sqX, {
                                            "aria-label": C.intl.string(C.t.dcl9MQ),
                                            onClick: er,
                                            className: N._F,
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className: N.SY,
                                                    children: (0, r.jsx)(A.A, {
                                                        quest: a,
                                                        questContent: w,
                                                        className: N.EK,
                                                        sourceQuestContent: V,
                                                    }),
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className: N.if,
                                                    children: [
                                                        (0, r.jsxs)("div", {
                                                            className: N.dc,
                                                            children: [
                                                                ea,
                                                                (0, r.jsx)(v.A, {
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
                                (0, r.jsx)(o.animated.div, {
                                    ref: (e) => {
                                        F.current = e;
                                    },
                                    className: s()(N.Yu, {
                                        [N.fu]: Z,
                                        [N.Gg]: X,
                                    }),
                                    style: {
                                        opacity: L.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                        visibility: j || M ? "inherit" : "hidden",
                                    },
                                    "aria-hidden": !j && !M,
                                    children: (0, r.jsxs)("div", {
                                        className: N.uA,
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: N._V,
                                                children: [
                                                    ea,
                                                    X
                                                        ? null
                                                        : (0, r.jsx)(v.A, {
                                                              color: "always-white",
                                                          }),
                                                ],
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: N.P9,
                                                children: [
                                                    (0, r.jsx)(c.m, {
                                                        __unsupportedReactNodeAsText: a.config.messages.questName,
                                                        shouldShow: ei(),
                                                        children: (0, r.jsx)(u.Heading, {
                                                            ref: q,
                                                            variant:
                                                                "lg" === P
                                                                    ? "heading-xxl/bold"
                                                                    : "sm" === P
                                                                      ? "heading-xl/bold"
                                                                      : "heading-lg/bold",
                                                            className: N.R_,
                                                            color: "always-white",
                                                            children: C.intl.format(C.t.EAYZAr, {
                                                                questName: a.config.messages.questName,
                                                            }),
                                                        }),
                                                    }),
                                                    (0, r.jsx)(u.Text, {
                                                        variant: "text-xs/normal",
                                                        color: "always-white",
                                                        children: J
                                                            ? C.intl.formatToPlainString(C.t.APddvF, {
                                                                  expirationDate: et,
                                                              })
                                                            : n
                                                              ? C.intl.formatToPlainString(C.t.v7xMw7, {
                                                                    expirationDate: ee,
                                                                })
                                                              : C.intl.formatToPlainString(C.t["pX+fmn"], {
                                                                    expirationDate: ee,
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
                            className: N._q,
                            style: {
                                top: Z
                                    ? L.to({
                                          range: [0, 1],
                                          output: [I.es / 2 - I.uR / 2, I.wl],
                                      })
                                    : I.wl,
                            },
                            children: [
                                (0, r.jsx)(b.C, {
                                    questContent: w,
                                    quest: a,
                                    questContentPosition: U,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: Z,
                                    showShareLink: !n && X,
                                    sourceQuestContent: V,
                                    children: (e) =>
                                        (0, r.jsx)(o.animated.div, {
                                            style: {
                                                opacity: L,
                                                visibility: j || M ? "inherit" : "hidden",
                                            },
                                            "aria-hidden": !j && !M,
                                            children: (0, r.jsx)(
                                                u.DUT,
                                                D(R({}, e), {
                                                    className: N.P0,
                                                    "aria-label": C.intl.string(C.t.DEoVWZ),
                                                    children: (0, r.jsx)(u.jNK, {
                                                        size: "md",
                                                        color: l.A.colors.WHITE,
                                                    }),
                                                }),
                                            ),
                                        }),
                                }),
                                !(0, I.rW)(w) &&
                                    (0, r.jsx)(u.DUT, {
                                        onClick: er,
                                        className: N.P0,
                                        "aria-label": M ? C.intl.string(C.t.iTcuma) : C.intl.string(C.t.dcl9MQ),
                                        children: (0, r.jsx)(x, {
                                            style: {
                                                rotate: L.to({
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
