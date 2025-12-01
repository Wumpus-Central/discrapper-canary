t.d(n, { Z: () => v });
var a = t(54381),
    r = t(473749),
    i = t(319245),
    s = t(793030),
    o = t(681715),
    l = t(410030),
    c = t(617136),
    d = t(915750),
    u = t(49436),
    m = t(509212),
    p = t(475595),
    b = t(455357),
    f = t(477005),
    x = t(659302),
    h = t(324805),
    _ = t(231338),
    C = t(388032),
    g = t(985952);
function j(e) {
    let { quest: n, sourceQuestContent: t, onLoadComplete: j } = e,
        v = (0, l.ZP)(),
        y = (0, s.wjy)(v) ? _.BR.DARK : _.BR.LIGHT,
        N = (0, m.V_)(n),
        O = (0, d.aM)(),
        P = (0, m.vB)(n.config),
        T = r.useMemo(() => {
            var e;
            let t = null == (e = n.config.ctaConfig) ? void 0 : e.subtitle;
            return null != t
                ? t
                : (0, m.BI)(n.config) !== i.W.GAMEPLAY ||
                    n.config.features.includes(h.S7.NON_GAMING_PLAY_QUEST) ||
                    (0, m.Pb)(n)
                  ? C.intl.string(C.t.y8Xf3k)
                  : C.intl.string(C.t["wirwN+"]);
        }, [n]),
        { isLoading: S } = (0, b.kC)();
    r.useEffect(() => {
        S || j();
    }, [S, j]);
    let w = (0, x.yc)({
        isShareable: P,
        questId: n.id,
        trackingCtx: r.useMemo(
            () => ({
                content: u.jn.REWARD_MODAL,
                ctaContent: c.jZ.REWARD_MODAL_COPY_LINK,
                impressionId: O,
                sourceQuestContent: t,
            }),
            [O, t],
        ),
    });
    return (0, a.jsxs)("div", {
        className: g.container,
        children: [
            (0, a.jsx)(b.Fl, {
                id: "hero-display",
                children: (e) =>
                    (0, a.jsx)(f.Z, {
                        quest: n,
                        imageSize: {
                            width: 908,
                            height: 380,
                        },
                        containerClassName: g.heroDisplayContainer,
                        isInteracting: !0,
                        assetRef: e,
                    }),
            }),
            (0, a.jsx)("div", {
                className: g.partnerLogotypeContainer,
                children: (0, a.jsx)(b.Fl, {
                    id: "partner-logotype",
                    children: (e) =>
                        (0, a.jsx)("img", {
                            ref: e,
                            className: g.partnerLogotype,
                            alt: C.intl.formatToPlainString(C.t.rtm15P, { name: n.config.messages.gameTitle }),
                            src: (0, p.fh)(n, p.eC.LOGO_TYPE, y).url,
                        }),
                }),
            }),
            (0, a.jsxs)("div", {
                className: g.partnerContentContainer,
                children: [
                    (0, a.jsxs)("div", {
                        className: g.partnerCopyContainer,
                        children: [
                            (0, a.jsx)(s.X6q, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                className: g.partnerTitle,
                                children: C.intl.format(C.t.EAYZAr, { questName: n.config.messages.questName }),
                            }),
                            (0, a.jsx)(s.xvT, {
                                variant: "text-sm/medium",
                                color: "text-secondary",
                                children: T,
                            }),
                        ],
                    }),
                    (0, a.jsx)(b.Fl, {
                        id: "partner-game-tile",
                        children: (e) =>
                            (0, a.jsx)("img", {
                                ref: e,
                                className: g.partnerGameTile,
                                alt: C.intl.formatToPlainString(C.t.rtm15P, { name: n.config.messages.gameTitle }),
                                src: (0, p.fh)(n, p.eC.GAME_TILE, y).url,
                            }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: g.bottomContainer,
                children: (0, a.jsxs)(s.hE2, {
                    size: "sm",
                    direction: "horizontal",
                    fullWidth: !0,
                    fullWidthContainer: !0,
                    children: [
                        P &&
                            (0, a.jsx)(o.u, {
                                text: C.intl.string(C.t.WmfZHZ),
                                children: (0, a.jsx)(s.hU, {
                                    icon: s.xPt,
                                    onClick: w,
                                    "aria-label": C.intl.string(C.t.WmfZHZ),
                                    variant: "secondary",
                                }),
                            }),
                        (0, a.jsx)(s.zxk, {
                            variant: "primary",
                            text: N,
                            onClick: () => {
                                (0, m.nc)(n, {
                                    content: u.jn.REWARD_MODAL,
                                    ctaContent: c.jZ.OPEN_GAME_LINK,
                                    impressionId: O,
                                    sourceQuestContent: t,
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
function v(e) {
    let { quest: n, location: t } = e;
    return (0, a.jsx)(b.x8, {
        source: t,
        questId: n.id,
        isPreview: n.preview,
        children: (0, a.jsx)(
            j,
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
