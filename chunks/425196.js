n.d(t, { Z: () => K }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(205120),
    o = n(793030),
    s = n(442837),
    l = n(379649),
    c = n(481060),
    u = n(596454),
    d = n(607070),
    f = n(100527),
    p = n(204418),
    _ = n(1585),
    m = n(633302),
    h = n(565138),
    g = n(430824),
    E = n(594174),
    b = n(580130),
    y = n(768581),
    O = n(302221),
    v = n(515970),
    S = n(324060),
    I = n(5888),
    T = n(26118),
    A = n(482617),
    C = n(639949),
    N = n(198358),
    P = n(225055),
    R = n(391876),
    w = n(883166),
    D = n(612776),
    x = n(140939),
    L = n(388032),
    j = n(417788),
    M = n(278607);
function k(e, t, n) {
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
function U(e) {
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
                k(e, t, n[t]);
            });
    }
    return e;
}
let G = {
        [D._n.ZERO]: "Bonsai",
        [D._n.ONE]: "Donut",
        [D._n.TWO]: "Capybara",
        [D._n.THREE]: "Disco",
        [D._n.FOUR]: "Origami",
        [D._n.FIVE]: "Snail",
        [D._n.SIX]: "Duck",
        [D._n.SEVEN]: "Banana",
        [D._n.EIGHT]: "Cat",
        [D._n.NINE]: "Cassette",
    },
    Z = {
        [D._n.ZERO]: "Bonsai Icon",
        [D._n.ONE]: "Donut Icon",
        [D._n.TWO]: "Capybara Icon",
        [D._n.THREE]: "Disco Icon",
        [D._n.FOUR]: "Origami Icon",
        [D._n.FIVE]: "Snail Icon",
        [D._n.SIX]: "Duck Icon",
        [D._n.SEVEN]: "Banana Icon",
        [D._n.EIGHT]: "Cat Icon",
        [D._n.NINE]: "Cassette Icon",
    },
    B = 429 / 462;
function F(e) {
    var t;
    let { step: n, onNext: l } = e,
        {
            powerLevel: u = 0,
            powerLevelPercentile: f = 0,
            cardId: p = 0,
        } = (0, s.e7)([I.Z], () => I.Z.getCheckpointData()),
        _ = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
        m = (0, i.useContext)(S.Q),
        h = (0, A.Z)((0, c.dQu)(m.primaryColor).hex()),
        g = (0, O.a7)(h),
        b = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        y = (0, i.useRef)(null),
        v = (0, i.useMemo)(() => (n <= D.ij.END_REWARD ? 1 : n === D.ij.END_CLAIM ? 2 : 3), [n]),
        N = (0, i.useCallback)(() => (n <= D.ij.END_REWARD ? "100%" : n === D.ij.END_CLAIM ? "50%" : "30%"), [n]),
        P = (0, o.q_F)({ to: { width: N() } }),
        w = (0, o.q_F)({
            to: {
                width: n === D.ij.END_SUMMARY ? "140%" : "100%",
                left: n === D.ij.END_SUMMARY ? "40px" : "0px",
            },
        }),
        k = (0, o.q_F)({
            to: {
                opacity: +(n !== D.ij.END_SUMMARY),
                transform: n === D.ij.END_SUMMARY ? "translate3d(0, -200px, 0)" : "translate3d(0, 0px, 0)",
            },
        });
    return (
        (0, i.useEffect)(() => {
            let e = () => {
                null != y.current && (y.current.style.height = "".concat(y.current.clientWidth * B, "px"));
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, r.jsxs)(a.animated.div, {
            className: M.cardSection,
            style: P,
            children: [
                (0, r.jsx)(a.animated.div, {
                    style: k,
                    children: (0, r.jsxs)("div", {
                        className: M.content,
                        children: [
                            (0, r.jsxs)("div", {
                                className: j.title,
                                children: [
                                    (0, r.jsx)(o.d5i, {
                                        size: "refresh_sm",
                                        color: h,
                                        colorClass: j.iconColor,
                                        className: j.titleIcon,
                                    }),
                                    (0, r.jsx)(R.Z, {
                                        variant: "eyebrow",
                                        className: j.eyebrow,
                                        children: L.intl.string(x.default.ir6nEQ),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(R.Z, {
                                variant: "display-lg",
                                className: M.display,
                                children: "DECO",
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(a.animated.div, {
                    ref: y,
                    className: M.cardAnimation,
                    style: w,
                    children: (0, r.jsx)(o.cAm, {
                        fit: "contain",
                        dataBinding: {
                            "id#": null != (t = null == _ ? void 0 : _.id.substring(0, 4)) ? t : "0000",
                            LVL: "".concat(Math.round(u)),
                            Outof: "".concat(p, "/10"),
                            PersonaName: D.IL[p],
                            AnimationState: v,
                            FillColor: {
                                r: g.r,
                                g: g.g,
                                b: g.b,
                                a: 255 * g.a,
                            },
                            PowerMeter: (0, T.QB)(f),
                            Icon: Z[p],
                            Illustration: G[p],
                            reducedMotion: b,
                        },
                        withReducedMotion: "play",
                    }),
                }),
                n <= D.ij.END_REWARD &&
                    (0, r.jsx)("div", {
                        className: M.content,
                        children: (0, r.jsx)(C.Z, {
                            onClick: l,
                            muteSound: !0,
                            children: (0, r.jsx)(R.Z, {
                                variant: "eyebrow",
                                className: M.buttonCTA,
                                children: L.intl.string(L.t.dcztdU),
                            }),
                        }),
                    }),
            ],
        })
    );
}
function V() {
    let e = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
        { avatarDecoration: t } = (0, s.e7)([I.Z], () => I.Z.getCheckpointData()),
        n = (0, s.Wu)([b.Z], () => {
            if ((null == t ? void 0 : t.skuId) == null) return [];
            let e = b.Z.getForSku(null == t ? void 0 : t.skuId);
            return null != e ? [...e] : [];
        })[0],
        a = null != n,
        o = (0, i.useRef)(!1);
    (0, i.useEffect)(() => {
        null != n &&
            null != e &&
            o.current &&
            (0, _.ps)({
                analyticsLocations: [f.Z.CHECKPOINT],
                initialSelectedDecoration: t,
            });
    }, [n, e, t]);
    let l = () => {
        a || ((o.current = !0), (0, v._Z)());
    };
    return (0, r.jsxs)("div", {
        className: M.contentSectionInnerClaim,
        children: [
            (0, r.jsx)(R.Z, {
                variant: "eyebrow",
                children: L.intl.string(x.default["4R3VzK"]),
            }),
            (0, r.jsx)(R.Z, {
                variant: "heading-lg/medium",
                className: M.claimSubtitle,
                children: L.intl.string(x.default["94azAy"]),
            }),
            null != e &&
                (0, r.jsx)(p.Z, {
                    user: e,
                    guildId: null,
                    avatarDecorationOverride: t,
                }),
            (0, r.jsx)(C.Z, {
                disabled: a,
                onClick: l,
                className: M.claimButton,
                children: (0, r.jsx)(R.Z, {
                    variant: "eyebrow",
                    className: M.buttonCTA,
                    children: a ? L.intl.string(L.t.lIsIFo) : L.intl.string(x.default.mDxM7m),
                }),
            }),
            (0, r.jsx)(R.Z, {
                variant: "heading-sm/medium",
                children: L.intl.format(L.t.eZSTa5, {
                    date: new Date("2026-01-15").toLocaleDateString(L.intl.currentLocale, {
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
            emojis: { numEmojisSent: c, emojis: f } = {
                numEmojisSent: 0,
                emojis: [],
            },
            guilds: { guilds: p } = { guilds: [] },
            applications: { applications: _ } = { applications: [] },
        } = (0, s.e7)([I.Z], () => I.Z.getCheckpointData()),
        E = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        b = f.length > 0 ? f[0] : null,
        O = p.length > 0 ? p[0].guild : null,
        v = _.length > 0 ? _[0].game : null,
        { unit: S, duration: A } = (0, T.Bi)(a),
        C = (0, s.e7)([g.Z], () => g.Z.getGuild(null == O ? void 0 : O.id)),
        N =
            null != v && null != v.icon
                ? y.ZP.getApplicationIconURL({
                      id: v.id,
                      icon: v.icon,
                  })
                : null,
        P = (0, w.Sg)(),
        D = (0, i.useMemo)(
            () => [
                {
                    icon: o.kBi,
                    title: L.intl.string(x.default.wWKySP),
                    content: (0, r.jsx)(R.Z, {
                        variant: "heading-xxl/medium",
                        className: j.numeric,
                        children: n,
                    }),
                },
                {
                    icon: o.S6n,
                    title:
                        S === l.J6.HOURS
                            ? L.intl.formatToPlainString(x.default.Xu0QsX, { numHours: A })
                            : L.intl.string(x.default.RmVTph),
                    content: (0, r.jsx)(R.Z, {
                        variant: "heading-xxl/medium",
                        className: j.numeric,
                        children: A,
                    }),
                },
                {
                    icon: o.EO4,
                    title: L.intl.string(x.default.zcbFu1),
                    content: (0, r.jsx)(R.Z, {
                        variant: "heading-xxl/medium",
                        className: j.numeric,
                        children: c,
                    }),
                },
                {
                    icon: o.r7p,
                    title: L.intl.string(x.default["3sARW7"]),
                    content: (0, r.jsxs)("div", {
                        className: j.title,
                        children: [
                            null != b
                                ? (0, r.jsxs)("div", {
                                      className: j.title,
                                      children: [
                                          (0, r.jsx)(u.Z, {
                                              emojiName: null == b.id ? b.name : "",
                                              emojiId: b.id,
                                              animated: !E && b.animated,
                                              className: M.statIcon,
                                          }),
                                          (0, r.jsx)(R.Z, {
                                              variant: "text-md/medium",
                                              children:
                                                  null == b.id
                                                      ? m.ZP.convertSurrogateToName(b.name)
                                                      : ":".concat(b.name, ":"),
                                          }),
                                      ],
                                  })
                                : (0, r.jsx)(o.IMN, {
                                      color: t,
                                      size: "md",
                                      className: M.statIcon,
                                  }),
                            null == b &&
                                (0, r.jsx)(R.Z, {
                                    variant: "text-md/medium",
                                    children: L.intl.string(L.t.PoWNfe),
                                }),
                        ],
                    }),
                },
                {
                    icon: o.iWm,
                    title: L.intl.string(x.default.RbT4Zq),
                    content: (0, r.jsxs)("div", {
                        className: j.title,
                        children: [
                            null != N
                                ? (0, r.jsx)("img", {
                                      src: N,
                                      alt: "",
                                      className: M.statIcon,
                                  })
                                : (0, r.jsx)(o.IMN, {
                                      color: t,
                                      size: "md",
                                      className: M.statIcon,
                                  }),
                            (0, r.jsx)(R.Z, {
                                variant: "text-md/medium",
                                children: null != v ? v.name : L.intl.string(L.t.PoWNfe),
                            }),
                        ],
                    }),
                },
                {
                    icon: o.QTo,
                    title: L.intl.string(x.default["8XPMJj"]),
                    content: (0, r.jsxs)("div", {
                        className: j.title,
                        children: [
                            null != C
                                ? (0, r.jsx)(h.Z, {
                                      guild: C,
                                      className: M.statIcon,
                                  })
                                : (0, r.jsx)(o.IMN, {
                                      color: t,
                                      size: "md",
                                      className: M.statIcon,
                                  }),
                            (0, r.jsx)(R.Z, {
                                variant: "text-md/medium",
                                children: null != C ? C.name : L.intl.string(L.t.PoWNfe),
                            }),
                        ],
                    }),
                },
            ],
            [n, A, S, c, b, E, t, N, v, C],
        );
    return (0, r.jsx)(w.Qr.Provider, {
        value: P,
        children: (0, r.jsx)("div", {
            className: M.centerContent,
            children: (0, r.jsxs)("div", {
                className: M.contentSectionInner,
                children: [
                    (0, r.jsxs)("div", {
                        className: j.title,
                        children: [
                            (0, r.jsx)(o.d5i, {
                                size: "refresh_sm",
                                color: t,
                                colorClass: j.iconColor,
                                className: j.titleIcon,
                            }),
                            (0, r.jsx)(R.Z, {
                                variant: "eyebrow",
                                className: j.eyebrow,
                                children: L.intl.string(x.default.ir6nEQ),
                            }),
                        ],
                    }),
                    (0, r.jsx)(R.Z, {
                        variant: "display-lg",
                        className: M.display,
                        children: L.intl.string(x.default.y4M1na),
                    }),
                    (0, r.jsx)("div", {
                        className: M.stats,
                        children: D.map((e, t) => (0, r.jsx)(W, U({}, e), t)),
                    }),
                ],
            }),
        }),
    });
}
function Y(e) {
    let { step: t } = e,
        n = (0, i.useContext)(S.Q),
        a = (0, c.dQu)(n.primaryColor).hex(),
        o = (0, c.dQu)(n.backgroundOverlayColor).hex();
    return (0, r.jsx)("div", {
        className: t === D.ij.END_CLAIM ? M.contentSectionClaim : M.contentSectionSummary,
        style: { backgroundColor: o },
        children: (0, r.jsxs)(P.ZP, {
            activeSlide: t,
            children: [
                (0, r.jsx)(c.Mi4, {
                    id: D.ij.END_CLAIM,
                    children: (0, r.jsx)(V, {}),
                }),
                (0, r.jsx)(c.Mi4, {
                    id: D.ij.END_SUMMARY,
                    children: (0, r.jsx)(H, { primaryColor: a }),
                }),
            ],
        }),
    });
}
function W(e) {
    let { icon: t, title: n, content: a } = e,
        o = (0, i.useContext)(S.Q),
        s = (0, c.dQu)(o.primaryColor).hex(),
        l = (0, w.gl)(),
        u = (0, w.gl)();
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(w.QR, {
                spring: l,
                className: M.statTitle,
                children: (0, r.jsxs)("div", {
                    className: j.title,
                    children: [
                        (0, r.jsx)(t, {
                            size: "refresh_sm",
                            color: s,
                            colorClass: j.iconColor,
                            className: j.titleIcon,
                        }),
                        (0, r.jsx)(R.Z, {
                            variant: "eyebrow",
                            className: j.eyebrow,
                            children: n,
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(w.QR, {
                spring: u,
                children: a,
            }),
        ],
    });
}
function K(e) {
    let { step: t, onNext: n } = e;
    return (0, r.jsxs)(N.Z, {
        noPadding: !0,
        centered: !1,
        className: M.container,
        children: [
            (0, r.jsx)(F, {
                step: t,
                onNext: n,
            }),
            (0, r.jsx)(Y, { step: t }),
        ],
    });
}
