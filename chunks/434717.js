n.d(t, { Z: () => y });
var r = n(951288),
    a = n(647438),
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
    x = n(566078),
    C = n(477005),
    g = n(78826),
    h = n(46140),
    _ = n(231338),
    j = n(388032),
    v = n(985952);
function N(e) {
    let { quest: t, sourceQuestContent: n, onLoadComplete: N } = e,
        y = (0, o.ZP)(),
        b = (0, s.wjy)(y) ? _.BR.DARK : _.BR.LIGHT,
        w = (0, m.ly)(t),
        T = (0, d.aM)(),
        P = a.useMemo(() => {
            var e;
            let n = null == (e = t.config.ctaConfig) ? void 0 : e.subtitle;
            if (null != n) return n;
            let r = x.r.build(t.config),
                a = r.defaultWatchVideoTask,
                s = null == a ? void 0 : a.messages.videoEndCtaSubtitle;
            return (0, l.Ew)(s)
                ? r.questType !== i.W.GAMEPLAY || t.config.features.includes(h.S7.NON_GAMING_PLAY_QUEST) || (0, u.Pb)(t)
                    ? j.intl.string(j.t.y8Xf3k)
                    : j.intl.string(j.t["wirwN+"])
                : s;
        }, [t]),
        { isLoading: A } = (0, g.d7)();
    return (
        a.useEffect(() => {
            A || N();
        }, [A, N]),
        (0, r.jsxs)("div", {
            className: v.container,
            children: [
                (0, r.jsx)(g.Fl, {
                    id: "hero-display",
                    children: (e) =>
                        (0, r.jsx)(C.Z, {
                            quest: t,
                            imageSize: {
                                width: 908,
                                height: 380,
                            },
                            containerClassName: v.heroDisplayContainer,
                            isInteracting: !0,
                            assetRef: e,
                        }),
                }),
                (0, r.jsx)("div", {
                    className: v.partnerLogotypeContainer,
                    children: (0, r.jsx)(g.Fl, {
                        id: "partner-logotype",
                        children: (e) =>
                            (0, r.jsx)("img", {
                                ref: e,
                                className: v.partnerLogotype,
                                alt: j.intl.formatToPlainString(j.t.rtm15P, { name: t.config.messages.gameTitle }),
                                src: (0, f.fh)(t, f.eC.LOGO_TYPE, b).url,
                            }),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: v.partnerContentContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: v.partnerCopyContainer,
                            children: [
                                (0, r.jsx)(s.X6q, {
                                    variant: "heading-md/semibold",
                                    color: "header-primary",
                                    className: v.partnerTitle,
                                    children: t.config.messages.questName,
                                }),
                                (0, r.jsx)(s.xvT, {
                                    variant: "text-sm/medium",
                                    color: "text-secondary",
                                    children: P,
                                }),
                            ],
                        }),
                        (0, r.jsx)(g.Fl, {
                            id: "partner-game-tile",
                            children: (e) =>
                                (0, r.jsx)("img", {
                                    ref: e,
                                    className: v.partnerGameTile,
                                    alt: j.intl.formatToPlainString(j.t.rtm15P, { name: t.config.messages.gameTitle }),
                                    src: (0, f.fh)(t, f.eC.GAME_TILE, b).url,
                                }),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: v.partnerCtaContainer,
                    children: (0, r.jsx)(s.zxk, {
                        variant: "primary",
                        size: "sm",
                        text: w,
                        onClick: () => {
                            (0, u.nc)(t, {
                                content: p.jn.REWARD_MODAL,
                                ctaContent: c.jZ.OPEN_GAME_LINK,
                                impressionId: T,
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
function y(e) {
    let { quest: t, location: n } = e;
    return (0, r.jsx)(g.p, {
        source: n,
        questId: t.id,
        isPreview: t.preview,
        children: (0, r.jsx)(
            N,
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
        ),
    });
}
