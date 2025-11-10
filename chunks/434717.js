t.d(n, { Z: () => N });
var a = t(951288),
    r = t(647438),
    i = t(319245),
    s = t(793030),
    o = t(410030),
    l = t(624138),
    c = t(617136),
    d = t(915750),
    u = t(509212),
    m = t(113434),
    p = t(497505),
    b = t(475595),
    f = t(566078),
    h = t(477005),
    x = t(78826),
    C = t(667105),
    _ = t(46140),
    j = t(231338),
    g = t(388032),
    y = t(834586);
function v(e) {
    let { quest: n, sourceQuestContent: t, onLoadComplete: v } = e,
        N = (0, o.ZP)(),
        O = (0, s.wjy)(N) ? j.BR.DARK : j.BR.LIGHT,
        T = (0, m.ly)(n),
        w = (0, d.aM)(),
        P = (0, u.vB)(n.config),
        S = r.useMemo(() => {
            var e;
            let t = null == (e = n.config.ctaConfig) ? void 0 : e.subtitle;
            if (null != t) return t;
            let a = f.r.build(n.config),
                r = a.defaultWatchVideoTask,
                s = null == r ? void 0 : r.messages.videoEndCtaSubtitle;
            return (0, l.Ew)(s)
                ? a.questType !== i.W.GAMEPLAY || n.config.features.includes(_.S7.NON_GAMING_PLAY_QUEST) || (0, u.Pb)(n)
                    ? g.intl.string(g.t.y8Xf3k)
                    : g.intl.string(g.t["wirwN+"])
                : s;
        }, [n]),
        { isLoading: L } = (0, x.d7)();
    r.useEffect(() => {
        L || v();
    }, [L, v]);
    let E = (0, C.yc)({
        isShareable: P,
        questId: n.id,
        trackingCtx: r.useMemo(
            () => ({
                content: p.jn.REWARD_MODAL,
                ctaContent: c.jZ.REWARD_MODAL_COPY_LINK,
                impressionId: w,
                sourceQuestContent: t,
            }),
            [w, t],
        ),
    });
    return (0, a.jsxs)("div", {
        className: y.container,
        children: [
            (0, a.jsx)(x.Fl, {
                id: "hero-display",
                children: (e) =>
                    (0, a.jsx)(h.Z, {
                        quest: n,
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
                children: (0, a.jsx)(x.Fl, {
                    id: "partner-logotype",
                    children: (e) =>
                        (0, a.jsx)("img", {
                            ref: e,
                            className: y.partnerLogotype,
                            alt: g.intl.formatToPlainString(g.t.rtm15P, { name: n.config.messages.gameTitle }),
                            src: (0, b.fh)(n, b.eC.LOGO_TYPE, O).url,
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
                                children: n.config.messages.questName,
                            }),
                            (0, a.jsx)(s.xvT, {
                                variant: "text-sm/medium",
                                color: "text-secondary",
                                children: S,
                            }),
                        ],
                    }),
                    (0, a.jsx)(x.Fl, {
                        id: "partner-game-tile",
                        children: (e) =>
                            (0, a.jsx)("img", {
                                ref: e,
                                className: y.partnerGameTile,
                                alt: g.intl.formatToPlainString(g.t.rtm15P, { name: n.config.messages.gameTitle }),
                                src: (0, b.fh)(n, b.eC.GAME_TILE, O).url,
                            }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: y.bottomContainer,
                children: (0, a.jsxs)(s.hE2, {
                    size: "sm",
                    direction: "horizontal",
                    fullWidth: !0,
                    fullWidthContainer: !0,
                    children: [
                        (0, a.jsx)(s.zxk, {
                            variant: "primary",
                            text: T,
                            onClick: () => {
                                (0, u.nc)(n, {
                                    content: p.jn.REWARD_MODAL,
                                    ctaContent: c.jZ.OPEN_GAME_LINK,
                                    impressionId: w,
                                    sourceQuestContent: t,
                                });
                            },
                            fullWidth: !0,
                            icon: s.zFc,
                            iconPosition: "end",
                        }),
                        P &&
                            (0, a.jsx)(s.hU, {
                                icon: s.aAc,
                                onClick: E,
                                "aria-label": g.intl.string(g.t.RDE0Sc),
                                variant: "secondary",
                            }),
                    ],
                }),
            }),
        ],
    });
}
function N(e) {
    let { quest: n, location: t } = e;
    return (0, a.jsx)(x.p, {
        source: t,
        questId: n.id,
        isPreview: n.preview,
        children: (0, a.jsx)(
            v,
            (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        a = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (a = a.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            }),
                        )),
                        a.forEach(function (n) {
                            var a;
                            (a = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: a,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[n] = a);
                        });
                }
                return e;
            })({}, e),
        ),
    });
}
