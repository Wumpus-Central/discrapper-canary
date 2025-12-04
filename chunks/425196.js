n.d(t, { Z: () => Q }), n(388685);
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
    _ = n(100527),
    m = n(204418),
    h = n(1585),
    g = n(633302),
    E = n(565138),
    b = n(430824),
    y = n(594174),
    O = n(580130),
    v = n(768581),
    S = n(302221),
    I = n(515970),
    T = n(324060),
    A = n(5888),
    C = n(26118),
    N = n(482617),
    P = n(639949),
    R = n(198358),
    w = n(225055),
    D = n(391876),
    x = n(883166),
    L = n(612776),
    j = n(140939),
    M = n(388032),
    k = n(417788),
    U = n(278607);
function G(e, t, n) {
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
function Z(e) {
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
                G(e, t, n[t]);
            });
    }
    return e;
}
let B = {
        [L._n.ZERO]: "Bonsai",
        [L._n.ONE]: "Donut",
        [L._n.TWO]: "Capybara",
        [L._n.THREE]: "Disco",
        [L._n.FOUR]: "Origami",
        [L._n.FIVE]: "Snail",
        [L._n.SIX]: "Duck",
        [L._n.SEVEN]: "Banana",
        [L._n.EIGHT]: "Cat",
        [L._n.NINE]: "Cassette",
    },
    F = {
        [L._n.ZERO]: "Bonsai Icon",
        [L._n.ONE]: "Donut Icon",
        [L._n.TWO]: "Capybara Icon",
        [L._n.THREE]: "Disco Icon",
        [L._n.FOUR]: "Origami Icon",
        [L._n.FIVE]: "Snail Icon",
        [L._n.SIX]: "Duck Icon",
        [L._n.SEVEN]: "Banana Icon",
        [L._n.EIGHT]: "Cat Icon",
        [L._n.NINE]: "Cassette Icon",
    },
    V = 429 / 462,
    H = 200;
function Y(e) {
    var t;
    let { step: n, onNext: a } = e,
        {
            powerLevel: u = 0,
            powerLevelPercentile: f = 0,
            cardId: _ = 0,
        } = (0, c.e7)([A.Z], () => A.Z.getCheckpointData()),
        m = (0, c.e7)([y.default], () => y.default.getCurrentUser()),
        h = (0, i.useContext)(T.Q),
        g = (0, N.Z)((0, d.dQu)(h.primaryColor).hex()),
        E = (0, S.a7)(g),
        b = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        O = (0, i.useRef)(null),
        [v, I] = (0, i.useState)(void 0),
        R = (0, i.useMemo)(() => (n <= L.ij.END_REWARD ? 1 : n === L.ij.END_CLAIM ? 2 : 3), [n]),
        w = (0, i.useMemo)(
            () =>
                o().throttle(() => {
                    null != O.current && I(O.current.clientWidth);
                }, H),
            [],
        ),
        x = (0, i.useCallback)(() => (n <= L.ij.END_REWARD ? "100%" : n === L.ij.END_CLAIM ? "50%" : "30%"), [n]),
        G = (0, l.q_F)({
            onChange: w,
            to: { width: x() },
        }),
        Z = (0, l.q_F)({
            to: {
                width: n === L.ij.END_SUMMARY ? "140%" : "100%",
                height: null != v ? v * V : void 0,
                left: n === L.ij.END_SUMMARY ? "40px" : "0px",
            },
        }),
        Y = (0, l.q_F)({
            to: {
                opacity: +(n !== L.ij.END_SUMMARY),
                transform: n === L.ij.END_SUMMARY ? "translate3d(0, -200px, 0)" : "translate3d(0, 0px, 0)",
            },
        });
    return (
        (0, i.useEffect)(
            () => (
                w(),
                window.addEventListener("resize", w),
                () => {
                    window.removeEventListener("resize", w), w.cancel();
                }
            ),
            [w],
        ),
        (0, r.jsxs)(s.animated.div, {
            className: U.cardSection,
            style: G,
            children: [
                (0, r.jsx)(s.animated.div, {
                    style: Y,
                    children: (0, r.jsxs)("div", {
                        className: U.content,
                        children: [
                            (0, r.jsxs)("div", {
                                className: k.title,
                                children: [
                                    (0, r.jsx)(l.d5i, {
                                        size: "refresh_sm",
                                        color: g,
                                        colorClass: k.iconColor,
                                        className: k.titleIcon,
                                    }),
                                    (0, r.jsx)(D.Z, {
                                        variant: "eyebrow",
                                        className: k.eyebrow,
                                        children: M.intl.string(j.default.ir6nEQ),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(D.Z, {
                                variant: "display-lg",
                                className: U.display,
                                children: "DECO",
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(s.animated.div, {
                    ref: O,
                    className: U.cardAnimation,
                    style: Z,
                    children: (0, r.jsx)(
                        l.cAm,
                        {
                            fit: "contain",
                            dataBinding: {
                                "id#": null != (t = null == m ? void 0 : m.id.substring(0, 4)) ? t : "0000",
                                LVL: "".concat(Math.round(u)),
                                Outof: "".concat(_, "/10"),
                                PersonaName: L.IL[_],
                                AnimationState: R,
                                FillColor: {
                                    r: E.r,
                                    g: E.g,
                                    b: E.b,
                                    a: 255 * E.a,
                                },
                                PowerMeter: (0, C.QB)(f),
                                Icon: F[_],
                                Illustration: B[_],
                                reducedMotion: b,
                            },
                            withReducedMotion: "play",
                        },
                        "rive",
                    ),
                }),
                n <= L.ij.END_REWARD &&
                    (0, r.jsx)("div", {
                        className: U.content,
                        children: (0, r.jsx)(P.Z, {
                            onClick: a,
                            muteSound: !0,
                            children: (0, r.jsx)(D.Z, {
                                variant: "eyebrow",
                                className: U.buttonCTA,
                                children: M.intl.string(M.t.dcztdU),
                            }),
                        }),
                    }),
            ],
        })
    );
}
function W() {
    let e = (0, c.e7)([y.default], () => y.default.getCurrentUser()),
        { avatarDecoration: t } = (0, c.e7)([A.Z], () => A.Z.getCheckpointData()),
        n = (0, c.Wu)([O.Z], () => {
            if ((null == t ? void 0 : t.skuId) == null) return [];
            let e = O.Z.getForSku(null == t ? void 0 : t.skuId);
            return null != e ? [...e] : [];
        })[0],
        a = null != n,
        o = (0, i.useRef)(!1);
    (0, i.useEffect)(() => {
        null != n &&
            null != e &&
            o.current &&
            (0, h.ps)({
                analyticsLocations: [_.Z.CHECKPOINT],
                initialSelectedDecoration: t,
            });
    }, [n, e, t]);
    let s = () => {
        a || ((o.current = !0), (0, I._Z)());
    };
    return (0, r.jsxs)("div", {
        className: U.contentSectionInnerClaim,
        children: [
            (0, r.jsx)(D.Z, {
                variant: "eyebrow",
                children: M.intl.string(j.default["4R3VzK"]),
            }),
            (0, r.jsx)(D.Z, {
                variant: "heading-lg/medium",
                className: U.claimSubtitle,
                children: M.intl.string(j.default["94azAy"]),
            }),
            null != e &&
                (0, r.jsx)(m.Z, {
                    user: e,
                    guildId: null,
                    avatarDecorationOverride: t,
                }),
            (0, r.jsx)(P.Z, {
                disabled: a,
                onClick: s,
                className: U.claimButton,
                children: (0, r.jsx)(D.Z, {
                    variant: "eyebrow",
                    className: U.buttonCTA,
                    children: a ? M.intl.string(M.t.lIsIFo) : M.intl.string(j.default.mDxM7m),
                }),
            }),
            (0, r.jsx)(D.Z, {
                variant: "heading-sm/medium",
                children: M.intl.format(M.t.eZSTa5, {
                    date: new Date("2026-01-15").toLocaleDateString(M.intl.currentLocale, {
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
function K(e) {
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
        } = (0, c.e7)([A.Z], () => A.Z.getCheckpointData()),
        m = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        h = s.length > 0 ? s[0] : null,
        y = d.length > 0 ? d[0].guild : null,
        O = _.length > 0 ? _[0].game : null,
        { unit: S, duration: I } = (0, C.Bi)(a),
        T = (0, c.e7)([b.Z], () => b.Z.getGuild(null == y ? void 0 : y.id)),
        N =
            null != O && null != O.icon
                ? v.ZP.getApplicationIconURL({
                      id: O.id,
                      icon: O.icon,
                  })
                : null,
        P = (0, x.Sg)(),
        R = (0, i.useMemo)(
            () => [
                {
                    icon: l.kBi,
                    title: M.intl.string(j.default.wWKySP),
                    content: (0, r.jsx)(D.Z, {
                        variant: "heading-xxl/medium",
                        className: k.numeric,
                        children: n,
                    }),
                },
                {
                    icon: l.S6n,
                    title:
                        S === u.J6.HOURS
                            ? M.intl.formatToPlainString(j.default.Xu0QsX, { numHours: I })
                            : M.intl.string(j.default.RmVTph),
                    content: (0, r.jsx)(D.Z, {
                        variant: "heading-xxl/medium",
                        className: k.numeric,
                        children: I,
                    }),
                },
                {
                    icon: l.EO4,
                    title: M.intl.string(j.default.zcbFu1),
                    content: (0, r.jsx)(D.Z, {
                        variant: "heading-xxl/medium",
                        className: k.numeric,
                        children: o,
                    }),
                },
                {
                    icon: l.r7p,
                    title: M.intl.string(j.default["3sARW7"]),
                    content: (0, r.jsxs)("div", {
                        className: k.title,
                        children: [
                            null != h
                                ? (0, r.jsxs)("div", {
                                      className: k.title,
                                      children: [
                                          (0, r.jsx)(f.Z, {
                                              emojiName: null == h.id ? h.name : "",
                                              emojiId: h.id,
                                              animated: !m && h.animated,
                                              className: U.statIcon,
                                          }),
                                          (0, r.jsx)(D.Z, {
                                              variant: "text-md/medium",
                                              children:
                                                  null == h.id
                                                      ? g.ZP.convertSurrogateToName(h.name)
                                                      : ":".concat(h.name, ":"),
                                          }),
                                      ],
                                  })
                                : (0, r.jsx)(l.IMN, {
                                      color: t,
                                      size: "md",
                                      className: U.statIcon,
                                  }),
                            null == h &&
                                (0, r.jsx)(D.Z, {
                                    variant: "text-md/medium",
                                    children: M.intl.string(M.t.PoWNfe),
                                }),
                        ],
                    }),
                },
                {
                    icon: l.iWm,
                    title: M.intl.string(j.default.RbT4Zq),
                    content: (0, r.jsxs)("div", {
                        className: k.title,
                        children: [
                            null != N
                                ? (0, r.jsx)("img", {
                                      src: N,
                                      alt: "",
                                      className: U.statIcon,
                                  })
                                : (0, r.jsx)(l.IMN, {
                                      color: t,
                                      size: "md",
                                      className: U.statIcon,
                                  }),
                            (0, r.jsx)(D.Z, {
                                variant: "text-md/medium",
                                children: null != O ? O.name : M.intl.string(M.t.PoWNfe),
                            }),
                        ],
                    }),
                },
                {
                    icon: l.QTo,
                    title: M.intl.string(j.default["8XPMJj"]),
                    content: (0, r.jsxs)("div", {
                        className: k.title,
                        children: [
                            null != T
                                ? (0, r.jsx)(E.Z, {
                                      guild: T,
                                      className: U.statIcon,
                                  })
                                : (0, r.jsx)(l.IMN, {
                                      color: t,
                                      size: "md",
                                      className: U.statIcon,
                                  }),
                            (0, r.jsx)(D.Z, {
                                variant: "text-md/medium",
                                children: null != T ? T.name : M.intl.string(M.t.PoWNfe),
                            }),
                        ],
                    }),
                },
            ],
            [n, I, S, o, h, m, t, N, O, T],
        );
    return (0, r.jsx)(x.Qr.Provider, {
        value: P,
        children: (0, r.jsx)("div", {
            className: U.centerContent,
            children: (0, r.jsxs)("div", {
                className: U.contentSectionInner,
                children: [
                    (0, r.jsxs)("div", {
                        className: k.title,
                        children: [
                            (0, r.jsx)(l.d5i, {
                                size: "refresh_sm",
                                color: t,
                                colorClass: k.iconColor,
                                className: k.titleIcon,
                            }),
                            (0, r.jsx)(D.Z, {
                                variant: "eyebrow",
                                className: k.eyebrow,
                                children: M.intl.string(j.default.ir6nEQ),
                            }),
                        ],
                    }),
                    (0, r.jsx)(D.Z, {
                        variant: "display-lg",
                        className: U.display,
                        children: M.intl.string(j.default.y4M1na),
                    }),
                    (0, r.jsx)("div", {
                        className: U.stats,
                        children: R.map((e, t) => (0, r.jsx)(q, Z({}, e), t)),
                    }),
                ],
            }),
        }),
    });
}
function z(e) {
    let { step: t } = e,
        n = (0, i.useContext)(T.Q),
        a = (0, d.dQu)(n.primaryColor).hex(),
        o = (0, d.dQu)(n.backgroundOverlayColor).hex();
    return (0, r.jsx)("div", {
        className: t === L.ij.END_CLAIM ? U.contentSectionClaim : U.contentSectionSummary,
        style: { backgroundColor: o },
        children: (0, r.jsxs)(w.ZP, {
            activeSlide: t,
            children: [
                (0, r.jsx)(d.Mi4, {
                    id: L.ij.END_CLAIM,
                    children: (0, r.jsx)(W, {}),
                }),
                (0, r.jsx)(d.Mi4, {
                    id: L.ij.END_SUMMARY,
                    children: (0, r.jsx)(K, { primaryColor: a }),
                }),
            ],
        }),
    });
}
function q(e) {
    let { icon: t, title: n, content: a } = e,
        o = (0, i.useContext)(T.Q),
        s = (0, d.dQu)(o.primaryColor).hex(),
        l = (0, x.gl)(),
        c = (0, x.gl)();
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(x.QR, {
                spring: l,
                className: U.statTitle,
                children: (0, r.jsxs)("div", {
                    className: k.title,
                    children: [
                        (0, r.jsx)(t, {
                            size: "refresh_sm",
                            color: s,
                            colorClass: k.iconColor,
                            className: k.titleIcon,
                        }),
                        (0, r.jsx)(D.Z, {
                            variant: "eyebrow",
                            className: k.eyebrow,
                            children: n,
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(x.QR, {
                spring: c,
                children: a,
            }),
        ],
    });
}
function Q(e) {
    let { step: t, onNext: n } = e;
    return (0, r.jsxs)(R.Z, {
        noPadding: !0,
        centered: !1,
        className: U.container,
        children: [
            (0, r.jsx)(Y, {
                step: t,
                onNext: n,
            }),
            (0, r.jsx)(z, { step: t }),
        ],
    });
}
