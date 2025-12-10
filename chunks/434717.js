n.d(t, { Z: () => N });
var a = n(54381),
    r = n(473749),
    i = n(319245),
    s = n(793030),
    o = n(681715),
    l = n(410030),
    c = n(617136),
    d = n(915750),
    u = n(49436),
    m = n(475595),
    b = n(304696),
    p = n(387745),
    f = n(283689),
    x = n(455357),
    h = n(477005),
    C = n(659302),
    _ = n(324805),
    j = n(231338),
    g = n(388032),
    y = n(985952);
function v(e) {
    let { quest: t, sourceQuestContent: n, onLoadComplete: v } = e,
        N = (0, l.ZP)(),
        O = (0, s.wjy)(N) ? j.BR.DARK : j.BR.LIGHT,
        T = (0, b.V_)(t),
        P = (0, d.aM)(),
        w = (0, f.VB)(t.config),
        L = r.useMemo(() => {
            var e;
            let n = null == (e = t.config.ctaConfig) ? void 0 : e.subtitle;
            return null != n
                ? n
                : (0, f.BI)(t.config) !== i.W.GAMEPLAY ||
                    t.config.features.includes(_.S7.NON_GAMING_PLAY_QUEST) ||
                    (0, f.Pb)(t)
                  ? g.intl.string(g.t.y8Xf3k)
                  : g.intl.string(g.t["wirwN+"]);
        }, [t]),
        { isLoading: S } = (0, x.kC)();
    r.useEffect(() => {
        S || v();
    }, [S, v]);
    let A = (0, C.yc)({
        isShareable: w,
        questId: t.id,
        trackingCtx: r.useMemo(
            () => ({
                content: u.jn.REWARD_MODAL,
                ctaContent: c.jZ.REWARD_MODAL_COPY_LINK,
                impressionId: P,
                sourceQuestContent: n,
            }),
            [P, n],
        ),
    });
    return (0, a.jsxs)("div", {
        className: y.container,
        children: [
            (0, a.jsx)(x.Fl, {
                id: "hero-display",
                children: (e) =>
                    (0, a.jsx)(h.Z, {
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
                children: (0, a.jsx)(x.Fl, {
                    id: "partner-logotype",
                    children: (e) =>
                        (0, a.jsx)("img", {
                            ref: e,
                            className: y.partnerLogotype,
                            alt: g.intl.formatToPlainString(g.t.rtm15P, { name: t.config.messages.gameTitle }),
                            src: (0, m.fh)(t, m.eC.LOGO_TYPE, O).url,
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
                                children: g.intl.format(g.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            (0, a.jsx)(s.xvT, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: L,
                            }),
                        ],
                    }),
                    (0, a.jsx)(x.Fl, {
                        id: "partner-game-tile",
                        children: (e) =>
                            (0, a.jsx)("img", {
                                ref: e,
                                className: y.partnerGameTile,
                                alt: g.intl.formatToPlainString(g.t.rtm15P, { name: t.config.messages.gameTitle }),
                                src: (0, m.fh)(t, m.eC.GAME_TILE, O).url,
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
                        w &&
                            (0, a.jsx)(o.u, {
                                text: g.intl.string(g.t.WmfZHZ),
                                children: (0, a.jsx)(s.hU, {
                                    icon: s.xPt,
                                    onClick: A,
                                    "aria-label": g.intl.string(g.t.WmfZHZ),
                                    variant: "secondary",
                                }),
                            }),
                        (0, a.jsx)(s.zxk, {
                            variant: "primary",
                            text: T,
                            onClick: () => {
                                (0, p.nc)(t, {
                                    content: u.jn.REWARD_MODAL,
                                    ctaContent: c.jZ.OPEN_GAME_LINK,
                                    impressionId: P,
                                    sourceQuestContent: n,
                                });
                            },
                            fullWidth: !0,
                            icon: s.zFc,
                            iconPosition: "end",
                        }),
                    ],
                }),
            }),
        ],
    });
}
function N(e) {
    let { quest: t, location: n } = e;
    return (0, a.jsx)(x.x8, {
        source: n,
        questId: t.id,
        isPreview: t.preview,
        children: (0, a.jsx)(
            v,
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
