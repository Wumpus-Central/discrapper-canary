n.d(t, { Z: () => b });
var r = n(54381),
    a = n(473749),
    i = n(319245),
    o = n(793030),
    s = n(681715),
    l = n(410030),
    c = n(617136),
    u = n(915750),
    d = n(49436),
    m = n(509212),
    p = n(475595),
    C = n(455357),
    f = n(477005),
    h = n(659302),
    j = n(324805),
    x = n(231338),
    y = n(388032),
    g = n(985952);
function v(e) {
    let { quest: t, sourceQuestContent: n, onLoadComplete: v } = e,
        b = (0, l.ZP)(),
        _ = (0, o.wjy)(b) ? x.BR.DARK : x.BR.LIGHT,
        w = (0, m.V_)(t.config),
        O = (0, u.aM)(),
        N = (0, m.vB)(t.config),
        P = a.useMemo(() => {
            var e;
            let n = null == (e = t.config.ctaConfig) ? void 0 : e.subtitle;
            return null != n
                ? n
                : (0, m.BI)(t.config) !== i.W.GAMEPLAY ||
                    t.config.features.includes(j.S7.NON_GAMING_PLAY_QUEST) ||
                    (0, m.Pb)(t)
                  ? y.intl.string(y.t.y8Xf3k)
                  : y.intl.string(y.t["wirwN+"]);
        }, [t]),
        { isLoading: E } = (0, C.kC)();
    a.useEffect(() => {
        E || v();
    }, [E, v]);
    let T = (0, h.yc)({
        isShareable: N,
        questId: t.id,
        trackingCtx: a.useMemo(
            () => ({
                content: d.jn.REWARD_MODAL,
                ctaContent: c.jZ.REWARD_MODAL_COPY_LINK,
                impressionId: O,
                sourceQuestContent: n,
            }),
            [O, n],
        ),
    });
    return (0, r.jsxs)("div", {
        className: g.container,
        children: [
            (0, r.jsx)(C.Fl, {
                id: "hero-display",
                children: (e) =>
                    (0, r.jsx)(f.Z, {
                        quest: t,
                        imageSize: {
                            width: 908,
                            height: 380,
                        },
                        containerClassName: g.heroDisplayContainer,
                        isInteracting: !0,
                        assetRef: e,
                    }),
            }),
            (0, r.jsx)("div", {
                className: g.partnerLogotypeContainer,
                children: (0, r.jsx)(C.Fl, {
                    id: "partner-logotype",
                    children: (e) =>
                        (0, r.jsx)("img", {
                            ref: e,
                            className: g.partnerLogotype,
                            alt: y.intl.formatToPlainString(y.t.rtm15P, { name: t.config.messages.gameTitle }),
                            src: (0, p.fh)(t, p.eC.LOGO_TYPE, _).url,
                        }),
                }),
            }),
            (0, r.jsxs)("div", {
                className: g.partnerContentContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: g.partnerCopyContainer,
                        children: [
                            (0, r.jsx)(o.X6q, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                className: g.partnerTitle,
                                children: y.intl.format(y.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            (0, r.jsx)(o.xvT, {
                                variant: "text-sm/medium",
                                color: "text-secondary",
                                children: P,
                            }),
                        ],
                    }),
                    (0, r.jsx)(C.Fl, {
                        id: "partner-game-tile",
                        children: (e) =>
                            (0, r.jsx)("img", {
                                ref: e,
                                className: g.partnerGameTile,
                                alt: y.intl.formatToPlainString(y.t.rtm15P, { name: t.config.messages.gameTitle }),
                                src: (0, p.fh)(t, p.eC.GAME_TILE, _).url,
                            }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: g.bottomContainer,
                children: (0, r.jsxs)(o.hE2, {
                    size: "sm",
                    direction: "horizontal",
                    fullWidth: !0,
                    fullWidthContainer: !0,
                    children: [
                        N &&
                            (0, r.jsx)(s.u, {
                                text: y.intl.string(y.t.WmfZHZ),
                                children: (0, r.jsx)(o.hU, {
                                    icon: o.xPt,
                                    onClick: T,
                                    "aria-label": y.intl.string(y.t.WmfZHZ),
                                    variant: "secondary",
                                }),
                            }),
                        (0, r.jsx)(o.zxk, {
                            variant: "primary",
                            text: w,
                            onClick: () => {
                                (0, m.nc)(t, {
                                    content: d.jn.REWARD_MODAL,
                                    ctaContent: c.jZ.OPEN_GAME_LINK,
                                    impressionId: O,
                                    sourceQuestContent: n,
                                });
                            },
                            fullWidth: !0,
                            icon: o.zFc,
                            iconPosition: "end",
                        }),
                    ],
                }),
            }),
        ],
    });
}
function b(e) {
    let { quest: t, location: n } = e;
    return (0, r.jsx)(C.x8, {
        source: n,
        questId: t.id,
        isPreview: t.preview,
        children: (0, r.jsx)(
            v,
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
