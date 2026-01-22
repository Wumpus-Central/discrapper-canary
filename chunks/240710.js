n.d(t, { A: () => C });
var s = n(627968),
    i = n(64700),
    a = n(731355),
    r = n(158954),
    l = n(435371),
    c = n(736653),
    d = n(216456),
    o = n(906822),
    u = n(341915),
    m = n(579473),
    x = n(651892),
    f = n(901406),
    h = n(814793),
    j = n(241124),
    g = n(918338),
    v = n(201805),
    N = n(654487),
    b = n(818348),
    p = n(985018),
    _ = n(861616);
function y(e) {
    let { quest: t, sourceQuestContent: n, onLoadComplete: y } = e,
        C = (0, c.Ay)(),
        A = (0, r.Mwr)(C) ? b.NJ.DARK : b.NJ.LIGHT,
        E = (0, x.wr)(t),
        w = (0, o.go)(),
        L = (0, h.E0)(t.config),
        D = i.useMemo(() => {
            var e;
            let n = null == (e = t.config.ctaConfig) ? void 0 : e.subtitle;
            return null != n
                ? n
                : (0, h.pv)(t.config) !== a.Z.GAMEPLAY ||
                    t.config.features.includes(N.Li.NON_GAMING_PLAY_QUEST) ||
                    (0, h.ui)(t)
                  ? p.intl.string(p.t.y8Xf3k)
                  : p.intl.string(p.t["wirwN+"]);
        }, [t]),
        { isLoading: O } = (0, j.Gk)();
    i.useEffect(() => {
        O || y();
    }, [O, y]);
    let S = (0, v.Lk)({
        isShareable: L,
        questId: t.id,
        trackingCtx: i.useMemo(
            () => ({
                content: u.uF.REWARD_MODAL,
                ctaContent: d.Cy.REWARD_MODAL_COPY_LINK,
                impressionId: w,
                sourceQuestContent: n,
            }),
            [w, n],
        ),
    });
    return (0, s.jsxs)("div", {
        className: _.kL,
        children: [
            (0, s.jsx)(j.Sn, {
                id: "hero-display",
                children: (e) =>
                    (0, s.jsx)(g.A, {
                        quest: t,
                        imageSize: {
                            width: 908,
                            height: 380,
                        },
                        containerClassName: _.WQ,
                        isInteracting: !0,
                        assetRef: e,
                    }),
            }),
            (0, s.jsx)("div", {
                className: _.Lt,
                children: (0, s.jsx)(j.Sn, {
                    id: "partner-logotype",
                    children: (e) =>
                        (0, s.jsx)("img", {
                            ref: e,
                            className: _.a$,
                            alt: p.intl.formatToPlainString(p.t.rtm15P, { name: t.config.messages.gameTitle }),
                            src: (0, m.tW)(t, m.fY.LOGO_TYPE, A).url,
                        }),
                }),
            }),
            (0, s.jsxs)("div", {
                className: _.Th,
                children: [
                    (0, s.jsxs)("div", {
                        className: _.Ly,
                        children: [
                            (0, s.jsx)(r.DZT, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                className: _.fx,
                                children: p.intl.format(p.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            (0, s.jsx)(r.EYj, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: D,
                            }),
                        ],
                    }),
                    (0, s.jsx)(j.Sn, {
                        id: "partner-game-tile",
                        children: (e) =>
                            (0, s.jsx)("img", {
                                ref: e,
                                className: _.rw,
                                alt: p.intl.formatToPlainString(p.t.rtm15P, { name: t.config.messages.gameTitle }),
                                src: (0, m.tW)(t, m.fY.GAME_TILE, A).url,
                            }),
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: _.tu,
                children: (0, s.jsxs)(r.e2v, {
                    size: "sm",
                    direction: "horizontal",
                    fullWidth: !0,
                    fullWidthContainer: !0,
                    children: [
                        L &&
                            (0, s.jsx)(l.m_, {
                                text: p.intl.string(p.t.WmfZHZ),
                                children: (0, s.jsx)(r.K0, {
                                    icon: r.qYV,
                                    onClick: S,
                                    "aria-label": p.intl.string(p.t.WmfZHZ),
                                    variant: "secondary",
                                }),
                            }),
                        (0, s.jsx)(r.$nd, {
                            variant: "primary",
                            text: E,
                            onClick: () => {
                                (0, f.pu)(t, {
                                    content: u.uF.REWARD_MODAL,
                                    ctaContent: d.Cy.OPEN_GAME_LINK,
                                    impressionId: w,
                                    sourceQuestContent: n,
                                });
                            },
                            fullWidth: !0,
                            icon: r.We5,
                            iconPosition: "end",
                        }),
                    ],
                }),
            }),
        ],
    });
}
function C(e) {
    let { quest: t, location: n } = e;
    return (0, s.jsx)(j.jY, {
        source: n,
        questId: t.id,
        isPreview: t.preview,
        children: (0, s.jsx)(
            y,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        s = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (s = s.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        s.forEach(function (t) {
                            var s;
                            (s = n[t]),
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
