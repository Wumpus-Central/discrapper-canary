n.d(t, {
    A: () => z,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(108531),
    l = n(158954),
    c = n(311907),
    u = n(499979),
    d = n(397927),
    f = n(565645),
    p = n(775602),
    _ = n(291661),
    h = n(7584),
    m = n(263063),
    g = n(71393),
    E = n(287809),
    b = n(486020),
    y = n(998304),
    O = n(854987),
    A = n(719718),
    v = n(57882),
    S = n(40333),
    I = n(612082),
    T = n(46192),
    C = n(573138),
    N = n(182417),
    R = n(877272),
    w = n(398225),
    P = n(532294),
    D = n(622865),
    x = n(985018),
    L = n(308021),
    j = n(597260);

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
        [P.c8.ZERO]: "Bonsai",
        [P.c8.ONE]: "Donut",
        [P.c8.TWO]: "Capybara",
        [P.c8.THREE]: "Disco",
        [P.c8.FOUR]: "Origami",
        [P.c8.FIVE]: "Snail",
        [P.c8.SIX]: "Duck",
        [P.c8.SEVEN]: "Banana",
        [P.c8.EIGHT]: "Cat",
        [P.c8.NINE]: "Cassette",
    },
    G = {
        [P.c8.ZERO]: "Bonsai Icon",
        [P.c8.ONE]: "Donut Icon",
        [P.c8.TWO]: "Capybara Icon",
        [P.c8.THREE]: "Disco Icon",
        [P.c8.FOUR]: "Origami Icon",
        [P.c8.FIVE]: "Snail Icon",
        [P.c8.SIX]: "Duck Icon",
        [P.c8.SEVEN]: "Banana Icon",
        [P.c8.EIGHT]: "Cat Icon",
        [P.c8.NINE]: "Cassette Icon",
    },
    V = 429 / 462,
    F = 200;

function B(e) {
    var t;
    let { step: n, onNext: a } = e,
        {
            powerLevel: u = 0,
            powerLevelPercentile: f = 0,
            cardId: _ = 0,
        } = (0, c.bG)([A.A], () => A.A.getCheckpointData()),
        h = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
        m = (0, i.useContext)(O.P),
        g = (0, S.A)((0, d.rdh)(m.primaryColor).hex()),
        b = (0, y.j5)(g),
        T = (0, c.bG)([p.A], () => p.A.useReducedMotion),
        C = (0, i.useRef)(null),
        [N, w] = (0, i.useState)(void 0),
        M = (0, i.useMemo)(() => (n <= P.Wf.END_REWARD ? 1 : n === P.Wf.END_CLAIM ? 2 : 3), [n]),
        k = (0, i.useMemo)(
            () =>
                s().throttle(() => {
                    null != C.current && w(C.current.clientWidth);
                }, F),
            [],
        ),
        B = (0, i.useCallback)(() => (n <= P.Wf.END_REWARD ? "100%" : n === P.Wf.END_CLAIM ? "50%" : "30%"), [n]),
        H = (0, l.zhh)({
            onChange: k,
            to: {
                width: B(),
            },
        }),
        Y = (0, l.zhh)({
            to: {
                width: n === P.Wf.END_SUMMARY ? "140%" : "100%",
                height: null != N ? N * V : void 0,
                left: n === P.Wf.END_SUMMARY ? "40px" : "0px",
            },
        }),
        W = (0, l.zhh)({
            to: {
                opacity: +(n !== P.Wf.END_SUMMARY),
                transform: n === P.Wf.END_SUMMARY ? "translate3d(0, -200px, 0)" : "translate3d(0, 0px, 0)",
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
        (0, r.jsxs)(o.animated.div, {
            className: j.UO,
            style: H,
            children: [
                (0, r.jsx)(o.animated.div, {
                    style: W,
                    children: (0, r.jsxs)("div", {
                        className: j.Qs,
                        children: [
                            (0, r.jsxs)("div", {
                                className: L.DD,
                                children: [
                                    (0, r.jsx)(l.MZT, {
                                        size: "refresh_sm",
                                        color: g,
                                        colorClass: L.d7,
                                        className: L.gr,
                                    }),
                                    (0, r.jsx)(R.A, {
                                        variant: "eyebrow",
                                        className: L.UP,
                                        children: x.intl.string(D.default.ir6nEQ),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(R.A, {
                                variant: "display-lg",
                                className: j.Vy,
                                children: "DECO",
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(o.animated.div, {
                    ref: C,
                    className: j.Zl,
                    style: Y,
                    children: (0, r.jsx)(
                        l.hW8,
                        {
                            fit: "contain",
                            dataBinding: {
                                "id#": null != (t = null == h ? void 0 : h.id.substring(0, 4)) ? t : "0000",
                                LVL: "".concat(Math.round(u)),
                                Outof: "".concat(_, "/10"),
                                PersonaName: P.J4[_],
                                AnimationState: M,
                                FillColor: {
                                    r: b.r,
                                    g: b.g,
                                    b: b.b,
                                    a: 255 * b.a,
                                },
                                PowerMeter: (0, v._V)(f),
                                Icon: G[_],
                                Illustration: U[_],
                                reducedMotion: T,
                            },
                            withReducedMotion: "play",
                        },
                        "rive",
                    ),
                }),
                n <= P.Wf.END_REWARD &&
                    (0, r.jsx)("div", {
                        className: j.Qs,
                        children: (0, r.jsx)(I.A, {
                            onClick: a,
                            muteSound: !0,
                            children: (0, r.jsx)(R.A, {
                                variant: "eyebrow",
                                className: j.HL,
                                children: x.intl.string(x.t.dcztdU),
                            }),
                        }),
                    }),
            ],
        })
    );
}

function H() {
    let e = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
        { avatarDecoration: t } = (0, c.bG)([A.A], () => A.A.getCheckpointData());
    return (0, r.jsxs)("div", {
        className: j.ZG,
        children: [
            (0, r.jsx)(R.A, {
                variant: "eyebrow",
                children: x.intl.string(D.default["4R3VzK"]),
            }),
            (0, r.jsx)(R.A, {
                variant: "heading-lg/medium",
                className: j.$2,
                children: x.intl.string(D.default["94azAy"]),
            }),
            null != e &&
                (0, r.jsx)(_.A, {
                    user: e,
                    guildId: null,
                    avatarDecorationOverride: t,
                }),
            (0, r.jsx)(T.A, {
                className: j.Hk,
            }),
            (0, r.jsx)(R.A, {
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

function Y(e) {
    let { primaryColor: t } = e,
        {
            messages: { numMessagesSent: n } = {
                numMessagesSent: 0,
            },
            voice: { totalVoiceMinutes: a } = {
                totalVoiceMinutes: 0,
            },
            emojis: { numEmojisSent: s, emojis: o } = {
                numEmojisSent: 0,
                emojis: [],
            },
            guilds: { guilds: d } = {
                guilds: [],
            },
            applications: { applications: _ } = {
                applications: [],
            },
        } = (0, c.bG)([A.A], () => A.A.getCheckpointData()),
        E = (0, c.bG)([p.A], () => p.A.useReducedMotion),
        y = o.length > 0 ? o[0] : null,
        O = d.length > 0 ? d[0].guild : null,
        S = _.length > 0 ? _[0].game : null,
        { unit: I, duration: T } = (0, v.oO)(a),
        C = (0, c.bG)([g.A], () => g.A.getGuild(null == O ? void 0 : O.id)),
        N =
            null != S && null != S.icon
                ? b.Ay.getApplicationIconURL({
                      id: S.id,
                      icon: S.icon,
                  })
                : null,
        P = (0, w.HL)(),
        M = (0, i.useMemo)(
            () => [
                {
                    icon: l.oyn,
                    title: x.intl.string(D.default.wWKySP),
                    content: (0, r.jsx)(R.A, {
                        variant: "heading-xxl/medium",
                        className: L.sH,
                        children: n,
                    }),
                },
                {
                    icon: l.cNw,
                    title:
                        I === u.pJ.HOURS
                            ? x.intl.formatToPlainString(D.default.Xu0QsX, {
                                  numHours: T,
                              })
                            : x.intl.string(D.default.RmVTph),
                    content: (0, r.jsx)(R.A, {
                        variant: "heading-xxl/medium",
                        className: L.sH,
                        children: T,
                    }),
                },
                {
                    icon: l.nm2,
                    title: x.intl.string(D.default.zcbFu1),
                    content: (0, r.jsx)(R.A, {
                        variant: "heading-xxl/medium",
                        className: L.sH,
                        children: s,
                    }),
                },
                {
                    icon: l.Gg5,
                    title: x.intl.string(D.default["3sARW7"]),
                    content: (0, r.jsxs)("div", {
                        className: L.DD,
                        children: [
                            null != y
                                ? (0, r.jsxs)("div", {
                                      className: L.DD,
                                      children: [
                                          (0, r.jsx)(f.A, {
                                              emojiName: null == y.id ? y.name : "",
                                              emojiId: y.id,
                                              animated: !E && y.animated,
                                              className: j.Gl,
                                          }),
                                          (0, r.jsx)(R.A, {
                                              variant: "text-md/medium",
                                              children:
                                                  null == y.id
                                                      ? h.Ay.convertSurrogateToName(y.name)
                                                      : ":".concat(y.name, ":"),
                                          }),
                                      ],
                                  })
                                : (0, r.jsx)(l._7Z, {
                                      color: t,
                                      size: "md",
                                      className: j.Gl,
                                  }),
                            null == y &&
                                (0, r.jsx)(R.A, {
                                    variant: "text-md/medium",
                                    children: x.intl.string(x.t.PoWNfe),
                                }),
                        ],
                    }),
                },
                {
                    icon: l._xR,
                    title: x.intl.string(D.default.RbT4Zq),
                    content: (0, r.jsxs)("div", {
                        className: L.DD,
                        children: [
                            null != N
                                ? (0, r.jsx)("img", {
                                      src: N,
                                      alt: "",
                                      className: j.Gl,
                                  })
                                : (0, r.jsx)(l._7Z, {
                                      color: t,
                                      size: "md",
                                      className: j.Gl,
                                  }),
                            (0, r.jsx)(R.A, {
                                variant: "text-md/medium",
                                children: null != S ? S.name : x.intl.string(x.t.PoWNfe),
                            }),
                        ],
                    }),
                },
                {
                    icon: l.RR9,
                    title: x.intl.string(D.default["8XPMJj"]),
                    content: (0, r.jsxs)("div", {
                        className: L.DD,
                        children: [
                            null != C
                                ? (0, r.jsx)(m.A, {
                                      guild: C,
                                      className: j.Gl,
                                  })
                                : (0, r.jsx)(l._7Z, {
                                      color: t,
                                      size: "md",
                                      className: j.Gl,
                                  }),
                            (0, r.jsx)(R.A, {
                                variant: "text-md/medium",
                                children: null != C ? C.name : x.intl.string(x.t.PoWNfe),
                            }),
                        ],
                    }),
                },
            ],
            [n, T, I, s, y, E, t, N, S, C],
        );
    return (0, r.jsx)(w.gy.Provider, {
        value: P,
        children: (0, r.jsx)("div", {
            className: j.Fo,
            children: (0, r.jsxs)("div", {
                className: j.pv,
                children: [
                    (0, r.jsxs)("div", {
                        className: L.DD,
                        children: [
                            (0, r.jsx)(l.MZT, {
                                size: "refresh_sm",
                                color: t,
                                colorClass: L.d7,
                                className: L.gr,
                            }),
                            (0, r.jsx)(R.A, {
                                variant: "eyebrow",
                                className: L.UP,
                                children: x.intl.string(D.default.ir6nEQ),
                            }),
                        ],
                    }),
                    (0, r.jsx)(R.A, {
                        variant: "display-lg",
                        className: j.Vy,
                        children: x.intl.string(D.default.y4M1na),
                    }),
                    (0, r.jsx)("div", {
                        className: j.M1,
                        children: M.map((e, t) => (0, r.jsx)(K, k({}, e), t)),
                    }),
                ],
            }),
        }),
    });
}

function W(e) {
    let { step: t } = e,
        n = (0, i.useContext)(O.P),
        a = (0, d.rdh)(n.primaryColor).hex(),
        s = (0, d.rdh)(n.backgroundOverlayColor).hex();
    return (0, r.jsx)("div", {
        className: t === P.Wf.END_CLAIM ? j.Ly : j.jK,
        style: {
            backgroundColor: s,
        },
        children: (0, r.jsxs)(N.Ay, {
            activeSlide: t,
            children: [
                (0, r.jsx)(d.q7S, {
                    id: P.Wf.END_CLAIM,
                    children: (0, r.jsx)(H, {}),
                }),
                (0, r.jsx)(d.q7S, {
                    id: P.Wf.END_SUMMARY,
                    children: (0, r.jsx)(Y, {
                        primaryColor: a,
                    }),
                }),
            ],
        }),
    });
}

function K(e) {
    let { icon: t, title: n, content: a } = e,
        s = (0, i.useContext)(O.P),
        o = (0, d.rdh)(s.primaryColor).hex(),
        l = (0, w.vy)(),
        c = (0, w.vy)();
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(w.vw, {
                spring: l,
                className: j.NX,
                children: (0, r.jsxs)("div", {
                    className: L.DD,
                    children: [
                        (0, r.jsx)(t, {
                            size: "refresh_sm",
                            color: o,
                            colorClass: L.d7,
                            className: L.gr,
                        }),
                        (0, r.jsx)(R.A, {
                            variant: "eyebrow",
                            className: L.UP,
                            children: n,
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(w.vw, {
                spring: c,
                children: a,
            }),
        ],
    });
}

function z(e) {
    let { step: t, onNext: n } = e;
    return (0, r.jsxs)(C.A, {
        noPadding: !0,
        centered: !1,
        className: j.kL,
        children: [
            (0, r.jsx)(B, {
                step: t,
                onNext: n,
            }),
            (0, r.jsx)(W, {
                step: t,
            }),
        ],
    });
}
