n.d(t, { Z: () => K }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n.n(a),
    s = n(205120),
    l = n(793030),
    c = n(442837),
    u = n(379649),
    d = n(481060),
    f = n(596454),
    p = n(607070),
    _ = n(204418),
    m = n(633302),
    h = n(565138),
    g = n(430824),
    E = n(594174),
    b = n(768581),
    y = n(302221),
    O = n(324060),
    v = n(5888),
    S = n(26118),
    I = n(482617),
    T = n(639949),
    A = n(829468),
    C = n(198358),
    N = n(225055),
    P = n(391876),
    R = n(883166),
    w = n(612776),
    D = n(860076),
    x = n(388032),
    L = n(417788),
    j = n(278607);
function M(e, t, n) {
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
function k(e) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}
let U = {
        [w._n.ZERO]: "Bonsai",
        [w._n.ONE]: "Donut",
        [w._n.TWO]: "Capybara",
        [w._n.THREE]: "Disco",
        [w._n.FOUR]: "Origami",
        [w._n.FIVE]: "Snail",
        [w._n.SIX]: "Duck",
        [w._n.SEVEN]: "Banana",
        [w._n.EIGHT]: "Cat",
        [w._n.NINE]: "Cassette",
    },
    G = {
        [w._n.ZERO]: "Bonsai Icon",
        [w._n.ONE]: "Donut Icon",
        [w._n.TWO]: "Capybara Icon",
        [w._n.THREE]: "Disco Icon",
        [w._n.FOUR]: "Origami Icon",
        [w._n.FIVE]: "Snail Icon",
        [w._n.SIX]: "Duck Icon",
        [w._n.SEVEN]: "Banana Icon",
        [w._n.EIGHT]: "Cat Icon",
        [w._n.NINE]: "Cassette Icon",
    },
    Z = 429 / 462,
    B = 200;
function F(e) {
    var t;
    let { step: n, onNext: a } = e,
        {
            powerLevel: u = 0,
            powerLevelPercentile: f = 0,
            cardId: _ = 0,
        } = (0, c.e7)([v.Z], () => v.Z.getCheckpointData()),
        m = (0, c.e7)([E.default], () => E.default.getCurrentUser()),
        h = (0, i.useContext)(O.Q),
        g = (0, I.Z)((0, d.dQu)(h.primaryColor).hex()),
        b = (0, y.a7)(g),
        A = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        C = (0, i.useRef)(null),
        [N, R] = (0, i.useState)(void 0),
        M = (0, i.useMemo)(() => (n <= w.ij.END_REWARD ? 1 : n === w.ij.END_CLAIM ? 2 : 3), [n]),
        k = (0, i.useMemo)(
            () =>
                o().throttle(() => {
                    null != C.current && R(C.current.clientWidth);
                }, B),
            [],
        ),
        F = (0, i.useCallback)(() => (n <= w.ij.END_REWARD ? "100%" : n === w.ij.END_CLAIM ? "50%" : "30%"), [n]),
        V = (0, l.q_F)({
            onChange: k,
            to: { width: F() },
        }),
        H = (0, l.q_F)({
            to: {
                width: n === w.ij.END_SUMMARY ? "140%" : "100%",
                height: null != N ? N * Z : void 0,
                left: n === w.ij.END_SUMMARY ? "40px" : "0px",
            },
        }),
        Y = (0, l.q_F)({
            to: {
                opacity: +(n !== w.ij.END_SUMMARY),
                transform: n === w.ij.END_SUMMARY ? "translate3d(0, -200px, 0)" : "translate3d(0, 0px, 0)",
            },
        });
    return (
        (0, i.useEffect)(
            () => (
                k(),
                window.addEventListener("resize", k),
                () => {
                    window.removeEventListener("resize", k), k.cancel();
                }
            ),
            [k],
        ),
        (0, r.jsxs)(s.animated.div, {
            className: j.cardSection,
            style: V,
            children: [
                (0, r.jsx)(s.animated.div, {
                    style: Y,
                    children: (0, r.jsxs)("div", {
                        className: j.content,
                        children: [
                            (0, r.jsxs)("div", {
                                className: L.title,
                                children: [
                                    (0, r.jsx)(l.d5i, {
                                        size: "refresh_sm",
                                        color: g,
                                        colorClass: L.iconColor,
                                        className: L.titleIcon,
                                    }),
                                    (0, r.jsx)(P.Z, {
                                        variant: "eyebrow",
                                        className: L.eyebrow,
                                        children: x.intl.string(D.default.ir6nEQ),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(P.Z, {
                                variant: "display-lg",
                                className: j.display,
                                children: "DECO",
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(s.animated.div, {
                    ref: C,
                    className: j.cardAnimation,
                    style: H,
                    children: (0, r.jsx)(
                        l.cAm,
                        {
                            fit: "contain",
                            dataBinding: {
                                "id#": null != (t = null == m ? void 0 : m.id.substring(0, 4)) ? t : "0000",
                                LVL: "".concat(Math.round(u)),
                                Outof: "".concat(_, "/10"),
                                PersonaName: w.IL[_],
                                AnimationState: M,
                                FillColor: {
                                    r: b.r,
                                    g: b.g,
                                    b: b.b,
                                    a: 255 * b.a,
                                },
                                PowerMeter: (0, S.QB)(f),
                                Icon: G[_],
                                Illustration: U[_],
                                reducedMotion: A,
                            },
                            withReducedMotion: "play",
                        },
                        "rive",
                    ),
                }),
                n <= w.ij.END_REWARD &&
                    (0, r.jsx)("div", {
                        className: j.content,
                        children: (0, r.jsx)(T.Z, {
                            onClick: a,
                            muteSound: !0,
                            children: (0, r.jsx)(P.Z, {
                                variant: "eyebrow",
                                className: j.buttonCTA,
                                children: x.intl.string(x.t.dcztdU),
                            }),
                        }),
                    }),
            ],
        })
    );
}
function V() {
    let e = (0, c.e7)([E.default], () => E.default.getCurrentUser()),
        { avatarDecoration: t } = (0, c.e7)([v.Z], () => v.Z.getCheckpointData());
    return (0, r.jsxs)("div", {
        className: j.contentSectionInnerClaim,
        children: [
            (0, r.jsx)(P.Z, {
                variant: "eyebrow",
                children: x.intl.string(D.default["4R3VzK"]),
            }),
            (0, r.jsx)(P.Z, {
                variant: "heading-lg/medium",
                className: j.claimSubtitle,
                children: x.intl.string(D.default["94azAy"]),
            }),
            null != e &&
                (0, r.jsx)(_.Z, {
                    user: e,
                    guildId: null,
                    avatarDecorationOverride: t,
                }),
            (0, r.jsx)(A.Z, { className: j.claimButton }),
            (0, r.jsx)(P.Z, {
                variant: "heading-sm/medium",
                children: x.intl.format(x.t.eZSTa5, {
                    date: new Date("2026-01-15").toLocaleDateString(x.intl.currentLocale, {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                        timeZone: "UTC",
                    }),
                }),
            }),
        ],
    });
}
function H(e) {
    let { primaryColor: t } = e,
        {
            messages: { numMessagesSent: n } = { numMessagesSent: 0 },
            voice: { totalVoiceMinutes: a } = { totalVoiceMinutes: 0 },
            emojis: { numEmojisSent: o, emojis: s } = {
                numEmojisSent: 0,
                emojis: [],
            },
            guilds: { guilds: d } = { guilds: [] },
            applications: { applications: _ } = { applications: [] },
        } = (0, c.e7)([v.Z], () => v.Z.getCheckpointData()),
        E = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        y = s.length > 0 ? s[0] : null,
        O = d.length > 0 ? d[0].guild : null,
        I = _.length > 0 ? _[0].game : null,
        { unit: T, duration: A } = (0, S.Bi)(a),
        C = (0, c.e7)([g.Z], () => g.Z.getGuild(null == O ? void 0 : O.id)),
        N =
            null != I && null != I.icon
                ? b.ZP.getApplicationIconURL({
                      id: I.id,
                      icon: I.icon,
                  })
                : null,
        w = (0, R.Sg)(),
        M = (0, i.useMemo)(
            () => [
                {
                    icon: l.kBi,
                    title: x.intl.string(D.default.wWKySP),
                    content: (0, r.jsx)(P.Z, {
                        variant: "heading-xxl/medium",
                        className: L.numeric,
                        children: n,
                    }),
                },
                {
                    icon: l.S6n,
                    title:
                        T === u.J6.HOURS
                            ? x.intl.formatToPlainString(D.default.Xu0QsX, { numHours: A })
                            : x.intl.string(D.default.RmVTph),
                    content: (0, r.jsx)(P.Z, {
                        variant: "heading-xxl/medium",
                        className: L.numeric,
                        children: A,
                    }),
                },
                {
                    icon: l.EO4,
                    title: x.intl.string(D.default.zcbFu1),
                    content: (0, r.jsx)(P.Z, {
                        variant: "heading-xxl/medium",
                        className: L.numeric,
                        children: o,
                    }),
                },
                {
                    icon: l.r7p,
                    title: x.intl.string(D.default["3sARW7"]),
                    content: (0, r.jsxs)("div", {
                        className: L.title,
                        children: [
                            null != y
                                ? (0, r.jsxs)("div", {
                                      className: L.title,
                                      children: [
                                          (0, r.jsx)(f.Z, {
                                              emojiName: null == y.id ? y.name : "",
                                              emojiId: y.id,
                                              animated: !E && y.animated,
                                              className: j.statIcon,
                                          }),
                                          (0, r.jsx)(P.Z, {
                                              variant: "text-md/medium",
                                              children:
                                                  null == y.id
                                                      ? m.ZP.convertSurrogateToName(y.name)
                                                      : ":".concat(y.name, ":"),
                                          }),
                                      ],
                                  })
                                : (0, r.jsx)(l.IMN, {
                                      color: t,
                                      size: "md",
                                      className: j.statIcon,
                                  }),
                            null == y &&
                                (0, r.jsx)(P.Z, {
                                    variant: "text-md/medium",
                                    children: x.intl.string(x.t.PoWNfe),
                                }),
                        ],
                    }),
                },
                {
                    icon: l.iWm,
                    title: x.intl.string(D.default.RbT4Zq),
                    content: (0, r.jsxs)("div", {
                        className: L.title,
                        children: [
                            null != N
                                ? (0, r.jsx)("img", {
                                      src: N,
                                      alt: "",
                                      className: j.statIcon,
                                  })
                                : (0, r.jsx)(l.IMN, {
                                      color: t,
                                      size: "md",
                                      className: j.statIcon,
                                  }),
                            (0, r.jsx)(P.Z, {
                                variant: "text-md/medium",
                                children: null != I ? I.name : x.intl.string(x.t.PoWNfe),
                            }),
                        ],
                    }),
                },
                {
                    icon: l.QTo,
                    title: x.intl.string(D.default["8XPMJj"]),
                    content: (0, r.jsxs)("div", {
                        className: L.title,
                        children: [
                            null != C
                                ? (0, r.jsx)(h.Z, {
                                      guild: C,
                                      className: j.statIcon,
                                  })
                                : (0, r.jsx)(l.IMN, {
                                      color: t,
                                      size: "md",
                                      className: j.statIcon,
                                  }),
                            (0, r.jsx)(P.Z, {
                                variant: "text-md/medium",
                                children: null != C ? C.name : x.intl.string(x.t.PoWNfe),
                            }),
                        ],
                    }),
                },
            ],
            [n, A, T, o, y, E, t, N, I, C],
        );
    return (0, r.jsx)(R.Qr.Provider, {
        value: w,
        children: (0, r.jsx)("div", {
            className: j.centerContent,
            children: (0, r.jsxs)("div", {
                className: j.contentSectionInner,
                children: [
                    (0, r.jsxs)("div", {
                        className: L.title,
                        children: [
                            (0, r.jsx)(l.d5i, {
                                size: "refresh_sm",
                                color: t,
                                colorClass: L.iconColor,
                                className: L.titleIcon,
                            }),
                            (0, r.jsx)(P.Z, {
                                variant: "eyebrow",
                                className: L.eyebrow,
                                children: x.intl.string(D.default.ir6nEQ),
                            }),
                        ],
                    }),
                    (0, r.jsx)(P.Z, {
                        variant: "display-lg",
                        className: j.display,
                        children: x.intl.string(D.default.y4M1na),
                    }),
                    (0, r.jsx)("div", {
                        className: j.stats,
                        children: M.map((e, t) => (0, r.jsx)(W, k({}, e), t)),
                    }),
                ],
            }),
        }),
    });
}
function Y(e) {
    let { step: t } = e,
        n = (0, i.useContext)(O.Q),
        a = (0, d.dQu)(n.primaryColor).hex(),
        o = (0, d.dQu)(n.backgroundOverlayColor).hex();
    return (0, r.jsx)("div", {
        className: t === w.ij.END_CLAIM ? j.contentSectionClaim : j.contentSectionSummary,
        style: { backgroundColor: o },
        children: (0, r.jsxs)(N.ZP, {
            activeSlide: t,
            children: [
                (0, r.jsx)(d.Mi4, {
                    id: w.ij.END_CLAIM,
                    children: (0, r.jsx)(V, {}),
                }),
                (0, r.jsx)(d.Mi4, {
                    id: w.ij.END_SUMMARY,
                    children: (0, r.jsx)(H, { primaryColor: a }),
                }),
            ],
        }),
    });
}
function W(e) {
    let { icon: t, title: n, content: a } = e,
        o = (0, i.useContext)(O.Q),
        s = (0, d.dQu)(o.primaryColor).hex(),
        l = (0, R.gl)(),
        c = (0, R.gl)();
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(R.QR, {
                spring: l,
                className: j.statTitle,
                children: (0, r.jsxs)("div", {
                    className: L.title,
                    children: [
                        (0, r.jsx)(t, {
                            size: "refresh_sm",
                            color: s,
                            colorClass: L.iconColor,
                            className: L.titleIcon,
                        }),
                        (0, r.jsx)(P.Z, {
                            variant: "eyebrow",
                            className: L.eyebrow,
                            children: n,
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(R.QR, {
                spring: c,
                children: a,
            }),
        ],
    });
}
function K(e) {
    let { step: t, onNext: n } = e;
    return (0, r.jsxs)(C.Z, {
        noPadding: !0,
        centered: !1,
        className: j.container,
        children: [
            (0, r.jsx)(F, {
                step: t,
                onNext: n,
            }),
            (0, r.jsx)(Y, { step: t }),
        ],
    });
}
