n.d(t, { Z: () => v });
var a = n(951288),
    r = n(647438),
    i = n(319245),
    s = n(793030),
    o = n(410030),
    l = n(624138),
    c = n(617136),
    d = n(915750),
    u = n(509212),
    m = n(113434),
    p = n(497505),
    f = n(475595),
    C = n(566078),
    _ = n(477005),
    b = n(78826),
    h = n(46140),
    x = n(231338),
    g = n(388032),
    y = n(985952);
function j(e) {
    let { quest: t, sourceQuestContent: n, onLoadComplete: j } = e,
        v = (0, o.ZP)(),
        E = (0, s.wjy)(v) ? x.BR.DARK : x.BR.LIGHT,
        R = (0, m.ly)(t),
        N = (0, d.aM)(),
        A = r.useMemo(() => {
            var e;
            let n = null == (e = t.config.ctaConfig) ? void 0 : e.subtitle;
            if (null != n) return n;
            let a = C.r.build(t.config),
                r = a.defaultWatchVideoTask,
                s = null == r ? void 0 : r.messages.videoEndCtaSubtitle;
            return (0, l.Ew)(s)
                ? a.questType !== i.W.GAMEPLAY || t.config.features.includes(h.S7.NON_GAMING_PLAY_QUEST) || (0, u.Pb)(t)
                    ? g.intl.string(g.t.y8Xf3t)
                    : g.intl.string(g.t.wirwNz)
                : s;
        }, [t]),
        { isLoading: S } = (0, b.d7)();
    return (
        r.useEffect(() => {
            S || j();
        }, [S, j]),
        (0, a.jsxs)("div", {
            className: y.container,
            children: [
                (0, a.jsx)(b.Fl, {
                    id: "hero-display",
                    children: (e) =>
                        (0, a.jsx)(_.Z, {
                            quest: t,
                            imageSize: {
                                width: 908,
                                height: 380,
                            },
                            containerClassName: y.heroDisplayContainer,
                            isInteracting: !0,
                            assetRef: e,
                        }),
                }),
                (0, a.jsx)("div", {
                    className: y.partnerLogotypeContainer,
                    children: (0, a.jsx)(b.Fl, {
                        id: "partner-logotype",
                        children: (e) =>
                            (0, a.jsx)("img", {
                                ref: e,
                                className: y.partnerLogotype,
                                alt: g.intl.formatToPlainString(g.t.rtm15O, { name: t.config.messages.gameTitle }),
                                src: (0, f.fh)(t, f.eC.LOGO_TYPE, E).url,
                            }),
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: y.partnerContentContainer,
                    children: [
                        (0, a.jsxs)("div", {
                            className: y.partnerCopyContainer,
                            children: [
                                (0, a.jsx)(s.X6q, {
                                    variant: "heading-md/semibold",
                                    color: "header-primary",
                                    className: y.partnerTitle,
                                    children: t.config.messages.questName,
                                }),
                                (0, a.jsx)(s.xvT, {
                                    variant: "text-sm/medium",
                                    color: "text-secondary",
                                    children: A,
                                }),
                            ],
                        }),
                        (0, a.jsx)(b.Fl, {
                            id: "partner-game-tile",
                            children: (e) =>
                                (0, a.jsx)("img", {
                                    ref: e,
                                    className: y.partnerGameTile,
                                    alt: g.intl.formatToPlainString(g.t.rtm15O, { name: t.config.messages.gameTitle }),
                                    src: (0, f.fh)(t, f.eC.GAME_TILE, E).url,
                                }),
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: y.partnerCtaContainer,
                    children: (0, a.jsx)(s.zxk, {
                        variant: "primary",
                        size: "sm",
                        text: R,
                        onClick: () => {
                            (0, u.nc)(t, {
                                content: p.jn.REWARD_MODAL,
                                ctaContent: c.jZ.OPEN_GAME_LINK,
                                impressionId: N,
                                sourceQuestContent: n,
                            });
                        },
                        fullWidth: !0,
                        icon: s.zFc,
                        iconPosition: "end",
                    }),
                }),
            ],
        })
    );
}
function v(e) {
    let { quest: t, location: n } = e;
    return (0, a.jsx)(b.p, {
        source: n,
        questId: t.id,
        isPreview: t.preview,
        children: (0, a.jsx)(
            j,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (a = a.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        a.forEach(function (t) {
                            var a;
                            (a = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: a,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = a);
                        });
                }
                return e;
            })({}, e),
        ),
    });
}
