n.d(t, {
    A: () => W,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    a = n(735438),
    i = n.n(a),
    s = n(108531),
    o = n(158954),
    c = n(311907),
    u = n(499979),
    d = n(397927),
    m = n(565645),
    f = n(775602),
    p = n(291661),
    h = n(7584),
    b = n(263063),
    g = n(71393),
    x = n(287809),
    y = n(486020),
    v = n(998304),
    j = n(854987),
    C = n(719718),
    _ = n(57882),
    A = n(40333),
    O = n(612082),
    E = n(46192),
    S = n(573138),
    N = n(182417),
    I = n(877272),
    P = n(398225),
    w = n(532294),
    T = n(622865),
    R = n(985018),
    L = n(308021),
    D = n(597260);
let k = {
        [w.c8.ZERO]: "Bonsai",
        [w.c8.ONE]: "Donut",
        [w.c8.TWO]: "Capybara",
        [w.c8.THREE]: "Disco",
        [w.c8.FOUR]: "Origami",
        [w.c8.FIVE]: "Snail",
        [w.c8.SIX]: "Duck",
        [w.c8.SEVEN]: "Banana",
        [w.c8.EIGHT]: "Cat",
        [w.c8.NINE]: "Cassette",
    },
    M = {
        [w.c8.ZERO]: "Bonsai Icon",
        [w.c8.ONE]: "Donut Icon",
        [w.c8.TWO]: "Capybara Icon",
        [w.c8.THREE]: "Disco Icon",
        [w.c8.FOUR]: "Origami Icon",
        [w.c8.FIVE]: "Snail Icon",
        [w.c8.SIX]: "Duck Icon",
        [w.c8.SEVEN]: "Banana Icon",
        [w.c8.EIGHT]: "Cat Icon",
        [w.c8.NINE]: "Cassette Icon",
    },
    H = 429 / 462;

function U(e) {
    var t;
    let { step: n, onNext: a } = e,
        {
            powerLevel: u = 0,
            powerLevelPercentile: m = 0,
            cardId: p = 0,
        } = (0, c.bG)([C.A], () => C.A.getCheckpointData()),
        h = (0, c.bG)([x.default], () => x.default.getCurrentUser()),
        b = (0, l.useContext)(j.P),
        g = (0, A.A)((0, d.rdh)(b.primaryColor).hex()),
        y = (0, v.j5)(g),
        E = (0, c.bG)([f.A], () => f.A.useReducedMotion),
        S = (0, l.useRef)(null),
        [N, P] = (0, l.useState)(void 0),
        U = (0, l.useMemo)(() => (n <= w.Wf.END_REWARD ? 1 : n === w.Wf.END_CLAIM ? 2 : 3), [n]),
        F = (0, l.useMemo)(
            () =>
                i().throttle(() => {
                    null != S.current && P(S.current.clientWidth);
                }, 200),
            [],
        ),
        G = (0, l.useCallback)(() => (n <= w.Wf.END_REWARD ? "100%" : n === w.Wf.END_CLAIM ? "50%" : "30%"), [n]),
        V = (0, o.zhh)({
            onChange: F,
            to: {
                width: G(),
            },
        }),
        B = (0, o.zhh)({
            to: {
                width: n === w.Wf.END_SUMMARY ? "140%" : "100%",
                height: null != N ? N * H : void 0,
                left: n === w.Wf.END_SUMMARY ? "40px" : "0px",
            },
        }),
        W = (0, o.zhh)({
            to: {
                opacity: +(n !== w.Wf.END_SUMMARY),
                transform: n === w.Wf.END_SUMMARY ? "translate3d(0, -200px, 0)" : "translate3d(0, 0px, 0)",
            },
        });
    return (
        (0, l.useEffect)(
            () => (
                F(),
                window.addEventListener("resize", F),
                () => {
                    window.removeEventListener("resize", F), F.cancel();
                }
            ),
            [F],
        ),
        (0, r.jsxs)(s.animated.div, {
            className: D.UO,
            style: V,
            children: [
                (0, r.jsx)(s.animated.div, {
                    style: W,
                    children: (0, r.jsxs)("div", {
                        className: D.Qs,
                        children: [
                            (0, r.jsxs)("div", {
                                className: L.DD,
                                children: [
                                    (0, r.jsx)(o.MZT, {
                                        size: "refresh_sm",
                                        color: g,
                                        colorClass: L.d7,
                                        className: L.gr,
                                    }),
                                    (0, r.jsx)(I.A, {
                                        variant: "eyebrow",
                                        className: L.UP,
                                        children: R.intl.string(T.default.ir6nEQ),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(I.A, {
                                variant: "display-lg",
                                className: D.Vy,
                                children: "DECO",
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(s.animated.div, {
                    ref: S,
                    className: D.Zl,
                    style: B,
                    children: (0, r.jsx)(
                        o.hW8,
                        {
                            fit: "contain",
                            dataBinding: {
                                "id#": null != (t = null == h ? void 0 : h.id.substring(0, 4)) ? t : "0000",
                                LVL: "".concat(Math.round(u)),
                                Outof: "".concat(p, "/10"),
                                PersonaName: w.J4[p],
                                AnimationState: U,
                                FillColor: {
                                    r: y.r,
                                    g: y.g,
                                    b: y.b,
                                    a: 255 * y.a,
                                },
                                PowerMeter: (0, _._V)(m),
                                Icon: M[p],
                                Illustration: k[p],
                                reducedMotion: E,
                            },
                            withReducedMotion: "play",
                        },
                        "rive",
                    ),
                }),
                n <= w.Wf.END_REWARD &&
                    (0, r.jsx)("div", {
                        className: D.Qs,
                        children: (0, r.jsx)(O.A, {
                            onClick: a,
                            muteSound: !0,
                            children: (0, r.jsx)(I.A, {
                                variant: "eyebrow",
                                className: D.HL,
                                children: R.intl.string(R.t.dcztdU),
                            }),
                        }),
                    }),
            ],
        })
    );
}

function F() {
    let e = (0, c.bG)([x.default], () => x.default.getCurrentUser()),
        { avatarDecoration: t } = (0, c.bG)([C.A], () => C.A.getCheckpointData());
    return (0, r.jsxs)("div", {
        className: D.ZG,
        children: [
            (0, r.jsx)(I.A, {
                variant: "eyebrow",
                children: R.intl.string(T.default["4R3VzK"]),
            }),
            (0, r.jsx)(I.A, {
                variant: "heading-lg/medium",
                className: D.$2,
                children: R.intl.string(T.default["94azAy"]),
            }),
            null != e &&
                (0, r.jsx)(p.A, {
                    user: e,
                    guildId: null,
                    avatarDecorationOverride: t,
                }),
            (0, r.jsx)(E.A, {
                className: D.Hk,
            }),
            (0, r.jsx)(I.A, {
                variant: "heading-sm/medium",
                children: R.intl.format(R.t.eZSTa5, {
                    date: new Date("2026-01-15").toLocaleDateString(R.intl.currentLocale, {
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

function G(e) {
    let { primaryColor: t } = e,
        {
            messages: { numMessagesSent: n } = {
                numMessagesSent: 0,
            },
            voice: { totalVoiceMinutes: a } = {
                totalVoiceMinutes: 0,
            },
            emojis: { numEmojisSent: i, emojis: s } = {
                numEmojisSent: 0,
                emojis: [],
            },
            guilds: { guilds: d } = {
                guilds: [],
            },
            applications: { applications: p } = {
                applications: [],
            },
        } = (0, c.bG)([C.A], () => C.A.getCheckpointData()),
        x = (0, c.bG)([f.A], () => f.A.useReducedMotion),
        v = s.length > 0 ? s[0] : null,
        j = d.length > 0 ? d[0].guild : null,
        A = p.length > 0 ? p[0].game : null,
        { unit: O, duration: E } = (0, _.oO)(a),
        S = (0, c.bG)([g.A], () => g.A.getGuild(null == j ? void 0 : j.id)),
        N =
            null != A && null != A.icon
                ? y.Ay.getApplicationIconURL({
                      id: A.id,
                      icon: A.icon,
                  })
                : null,
        w = (0, P.HL)(),
        k = (0, l.useMemo)(
            () => [
                {
                    icon: o.oyn,
                    title: R.intl.string(T.default.wWKySP),
                    content: (0, r.jsx)(I.A, {
                        variant: "heading-xxl/medium",
                        className: L.sH,
                        children: n,
                    }),
                },
                {
                    icon: o.cNw,
                    title:
                        O === u.pJ.HOURS
                            ? R.intl.formatToPlainString(T.default.Xu0QsX, {
                                  numHours: E,
                              })
                            : R.intl.string(T.default.RmVTph),
                    content: (0, r.jsx)(I.A, {
                        variant: "heading-xxl/medium",
                        className: L.sH,
                        children: E,
                    }),
                },
                {
                    icon: o.nm2,
                    title: R.intl.string(T.default.zcbFu1),
                    content: (0, r.jsx)(I.A, {
                        variant: "heading-xxl/medium",
                        className: L.sH,
                        children: i,
                    }),
                },
                {
                    icon: o.Gg5,
                    title: R.intl.string(T.default["3sARW7"]),
                    content: (0, r.jsxs)("div", {
                        className: L.DD,
                        children: [
                            null != v
                                ? (0, r.jsxs)("div", {
                                      className: L.DD,
                                      children: [
                                          (0, r.jsx)(m.A, {
                                              emojiName: null == v.id ? v.name : "",
                                              emojiId: v.id,
                                              animated: !x && v.animated,
                                              className: D.Gl,
                                          }),
                                          (0, r.jsx)(I.A, {
                                              variant: "text-md/medium",
                                              children:
                                                  null == v.id
                                                      ? h.Ay.convertSurrogateToName(v.name)
                                                      : ":".concat(v.name, ":"),
                                          }),
                                      ],
                                  })
                                : (0, r.jsx)(o._7Z, {
                                      color: t,
                                      size: "md",
                                      className: D.Gl,
                                  }),
                            null == v &&
                                (0, r.jsx)(I.A, {
                                    variant: "text-md/medium",
                                    children: R.intl.string(R.t.PoWNfe),
                                }),
                        ],
                    }),
                },
                {
                    icon: o._xR,
                    title: R.intl.string(T.default.RbT4Zq),
                    content: (0, r.jsxs)("div", {
                        className: L.DD,
                        children: [
                            null != N
                                ? (0, r.jsx)("img", {
                                      src: N,
                                      alt: "",
                                      className: D.Gl,
                                  })
                                : (0, r.jsx)(o._7Z, {
                                      color: t,
                                      size: "md",
                                      className: D.Gl,
                                  }),
                            (0, r.jsx)(I.A, {
                                variant: "text-md/medium",
                                children: null != A ? A.name : R.intl.string(R.t.PoWNfe),
                            }),
                        ],
                    }),
                },
                {
                    icon: o.RR9,
                    title: R.intl.string(T.default["8XPMJj"]),
                    content: (0, r.jsxs)("div", {
                        className: L.DD,
                        children: [
                            null != S
                                ? (0, r.jsx)(b.A, {
                                      guild: S,
                                      className: D.Gl,
                                  })
                                : (0, r.jsx)(o._7Z, {
                                      color: t,
                                      size: "md",
                                      className: D.Gl,
                                  }),
                            (0, r.jsx)(I.A, {
                                variant: "text-md/medium",
                                children: null != S ? S.name : R.intl.string(R.t.PoWNfe),
                            }),
                        ],
                    }),
                },
            ],
            [n, E, O, i, v, x, t, N, A, S],
        );
    return (0, r.jsx)(P.gy.Provider, {
        value: w,
        children: (0, r.jsx)("div", {
            className: D.Fo,
            children: (0, r.jsxs)("div", {
                className: D.pv,
                children: [
                    (0, r.jsxs)("div", {
                        className: L.DD,
                        children: [
                            (0, r.jsx)(o.MZT, {
                                size: "refresh_sm",
                                color: t,
                                colorClass: L.d7,
                                className: L.gr,
                            }),
                            (0, r.jsx)(I.A, {
                                variant: "eyebrow",
                                className: L.UP,
                                children: R.intl.string(T.default.ir6nEQ),
                            }),
                        ],
                    }),
                    (0, r.jsx)(I.A, {
                        variant: "display-lg",
                        className: D.Vy,
                        children: R.intl.string(T.default.y4M1na),
                    }),
                    (0, r.jsx)("div", {
                        className: D.M1,
                        children: k.map((e, t) =>
                            (0, r.jsx)(
                                B,
                                (function (e) {
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
                                })({}, e),
                                t,
                            ),
                        ),
                    }),
                ],
            }),
        }),
    });
}

function V(e) {
    let { step: t } = e,
        n = (0, l.useContext)(j.P),
        a = (0, d.rdh)(n.primaryColor).hex(),
        i = (0, d.rdh)(n.backgroundOverlayColor).hex();
    return (0, r.jsx)("div", {
        className: t === w.Wf.END_CLAIM ? D.Ly : D.jK,
        style: {
            backgroundColor: i,
        },
        children: (0, r.jsxs)(N.Ay, {
            activeSlide: t,
            children: [
                (0, r.jsx)(d.q7S, {
                    id: w.Wf.END_CLAIM,
                    children: (0, r.jsx)(F, {}),
                }),
                (0, r.jsx)(d.q7S, {
                    id: w.Wf.END_SUMMARY,
                    children: (0, r.jsx)(G, {
                        primaryColor: a,
                    }),
                }),
            ],
        }),
    });
}

function B(e) {
    let { icon: t, title: n, content: a } = e,
        i = (0, l.useContext)(j.P),
        s = (0, d.rdh)(i.primaryColor).hex(),
        o = (0, P.vy)(),
        c = (0, P.vy)();
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(P.vw, {
                spring: o,
                className: D.NX,
                children: (0, r.jsxs)("div", {
                    className: L.DD,
                    children: [
                        (0, r.jsx)(t, {
                            size: "refresh_sm",
                            color: s,
                            colorClass: L.d7,
                            className: L.gr,
                        }),
                        (0, r.jsx)(I.A, {
                            variant: "eyebrow",
                            className: L.UP,
                            children: n,
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(P.vw, {
                spring: c,
                children: a,
            }),
        ],
    });
}

function W(e) {
    let { step: t, onNext: n } = e;
    return (0, r.jsxs)(S.A, {
        noPadding: !0,
        centered: !1,
        className: D.kL,
        children: [
            (0, r.jsx)(U, {
                step: t,
                onNext: n,
            }),
            (0, r.jsx)(V, {
                step: t,
            }),
        ],
    });
}
