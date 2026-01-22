a.d(t, {
    A: () => C,
});
var s = a(627968),
    n = a(64700),
    i = a(731355),
    c = a(158954),
    r = a(435371),
    l = a(736653),
    d = a(216456),
    o = a(906822),
    u = a(341915),
    m = a(579473),
    f = a(651892),
    x = a(901406),
    b = a(814793),
    h = a(241124),
    j = a(918338),
    p = a(201805),
    g = a(654487),
    v = a(818348),
    y = a(985018),
    A = a(861616);

function _(e) {
    let { quest: t, sourceQuestContent: a, onLoadComplete: _ } = e,
        C = (0, l.Ay)(),
        N = (0, c.Mwr)(C) ? v.NJ.DARK : v.NJ.LIGHT,
        S = (0, f.wr)(t),
        E = (0, o.go)(),
        L = (0, b.E0)(t.config),
        O = n.useMemo(() => {
            var e;
            let a = null == (e = t.config.ctaConfig) ? void 0 : e.subtitle;
            return null != a
                ? a
                : (0, b.pv)(t.config) !== i.Z.GAMEPLAY ||
                    t.config.features.includes(g.Li.NON_GAMING_PLAY_QUEST) ||
                    (0, b.ui)(t)
                  ? y.intl.string(y.t.y8Xf3k)
                  : y.intl.string(y.t["wirwN+"]);
        }, [t]),
        { isLoading: R } = (0, h.Gk)();
    n.useEffect(() => {
        R || _();
    }, [R, _]);
    let w = (0, p.Lk)({
        isShareable: L,
        questId: t.id,
        trackingCtx: n.useMemo(
            () => ({
                content: u.uF.REWARD_MODAL,
                ctaContent: d.Cy.REWARD_MODAL_COPY_LINK,
                impressionId: E,
                sourceQuestContent: a,
            }),
            [E, a],
        ),
    });
    return (0, s.jsxs)("div", {
        className: A.kL,
        children: [
            (0, s.jsx)(h.Sn, {
                id: "hero-display",
                children: (e) =>
                    (0, s.jsx)(j.A, {
                        quest: t,
                        imageSize: {
                            width: 908,
                            height: 380,
                        },
                        containerClassName: A.WQ,
                        isInteracting: !0,
                        assetRef: e,
                    }),
            }),
            (0, s.jsx)("div", {
                className: A.Lt,
                children: (0, s.jsx)(h.Sn, {
                    id: "partner-logotype",
                    children: (e) =>
                        (0, s.jsx)("img", {
                            ref: e,
                            className: A.a$,
                            alt: y.intl.formatToPlainString(y.t.rtm15P, {
                                name: t.config.messages.gameTitle,
                            }),
                            src: (0, m.tW)(t, m.fY.LOGO_TYPE, N).url,
                        }),
                }),
            }),
            (0, s.jsxs)("div", {
                className: A.Th,
                children: [
                    (0, s.jsxs)("div", {
                        className: A.Ly,
                        children: [
                            (0, s.jsx)(c.DZT, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                className: A.fx,
                                children: y.intl.format(y.t.EAYZAr, {
                                    questName: t.config.messages.questName,
                                }),
                            }),
                            (0, s.jsx)(c.EYj, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: O,
                            }),
                        ],
                    }),
                    (0, s.jsx)(h.Sn, {
                        id: "partner-game-tile",
                        children: (e) =>
                            (0, s.jsx)("img", {
                                ref: e,
                                className: A.rw,
                                alt: y.intl.formatToPlainString(y.t.rtm15P, {
                                    name: t.config.messages.gameTitle,
                                }),
                                src: (0, m.tW)(t, m.fY.GAME_TILE, N).url,
                            }),
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: A.tu,
                children: (0, s.jsxs)(c.e2v, {
                    size: "sm",
                    direction: "horizontal",
                    fullWidth: !0,
                    fullWidthContainer: !0,
                    children: [
                        L &&
                            (0, s.jsx)(r.m_, {
                                text: y.intl.string(y.t.WmfZHZ),
                                children: (0, s.jsx)(c.K0, {
                                    icon: c.qYV,
                                    onClick: w,
                                    "aria-label": y.intl.string(y.t.WmfZHZ),
                                    variant: "secondary",
                                }),
                            }),
                        (0, s.jsx)(c.$nd, {
                            variant: "primary",
                            text: S,
                            onClick: () => {
                                (0, x.pu)(t, {
                                    content: u.uF.REWARD_MODAL,
                                    ctaContent: d.Cy.OPEN_GAME_LINK,
                                    impressionId: E,
                                    sourceQuestContent: a,
                                });
                            },
                            fullWidth: !0,
                            icon: c.We5,
                            iconPosition: "end",
                        }),
                    ],
                }),
            }),
        ],
    });
}

function C(e) {
    let { quest: t, location: a } = e;
    return (0, s.jsx)(h.jY, {
        source: a,
        questId: t.id,
        isPreview: t.preview,
        children: (0, s.jsx)(
            _,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {},
                        s = Object.keys(a);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (s = s.concat(
                            Object.getOwnPropertySymbols(a).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(a, e).enumerable;
                            }),
                        )),
                        s.forEach(function (t) {
                            var s;
                            (s = a[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: s,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = s);
                        });
                }
                return e;
            })({}, e),
        ),
    });
}
