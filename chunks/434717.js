n.d(t, { Z: () => _ });
var r = n(54381),
    a = n(473749),
    i = n(319245),
    o = n(793030),
    s = n(681715),
    l = n(410030),
    c = n(617136),
    u = n(915750),
    d = n(313481),
    m = n(49436),
    p = n(509212),
    C = n(475595),
    f = n(455357),
    h = n(477005),
    j = n(659302),
    x = n(324805),
    y = n(231338),
    g = n(388032),
    v = n(985952);
function b(e) {
    let { quest: t, sourceQuestContent: n, onLoadComplete: b } = e,
        _ = (0, l.ZP)(),
        w = (0, o.wjy)(_) ? y.BR.DARK : y.BR.LIGHT,
        O = (0, d.ly)(t),
        N = (0, u.aM)(),
        P = (0, p.vB)(t.config),
        E = a.useMemo(() => {
            var e;
            let n = null == (e = t.config.ctaConfig) ? void 0 : e.subtitle;
            return null != n
                ? n
                : (0, p.BI)(t.config) !== i.W.GAMEPLAY ||
                    t.config.features.includes(x.S7.NON_GAMING_PLAY_QUEST) ||
                    (0, p.Pb)(t)
                  ? g.intl.string(g.t.y8Xf3k)
                  : g.intl.string(g.t["wirwN+"]);
        }, [t]),
        { isLoading: T } = (0, f.kC)();
    a.useEffect(() => {
        T || b();
    }, [T, b]);
    let A = (0, j.yc)({
        isShareable: P,
        questId: t.id,
        trackingCtx: a.useMemo(
            () => ({
                content: m.jn.REWARD_MODAL,
                ctaContent: c.jZ.REWARD_MODAL_COPY_LINK,
                impressionId: N,
                sourceQuestContent: n,
            }),
            [N, n],
        ),
    });
    return (0, r.jsxs)("div", {
        className: v.container,
        children: [
            (0, r.jsx)(f.Fl, {
                id: "hero-display",
                children: (e) =>
                    (0, r.jsx)(h.Z, {
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
                children: (0, r.jsx)(f.Fl, {
                    id: "partner-logotype",
                    children: (e) =>
                        (0, r.jsx)("img", {
                            ref: e,
                            className: v.partnerLogotype,
                            alt: g.intl.formatToPlainString(g.t.rtm15P, { name: t.config.messages.gameTitle }),
                            src: (0, C.fh)(t, C.eC.LOGO_TYPE, w).url,
                        }),
                }),
            }),
            (0, r.jsxs)("div", {
                className: v.partnerContentContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: v.partnerCopyContainer,
                        children: [
                            (0, r.jsx)(o.X6q, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                className: v.partnerTitle,
                                children: g.intl.format(g.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            (0, r.jsx)(o.xvT, {
                                variant: "text-sm/medium",
                                color: "text-secondary",
                                children: E,
                            }),
                        ],
                    }),
                    (0, r.jsx)(f.Fl, {
                        id: "partner-game-tile",
                        children: (e) =>
                            (0, r.jsx)("img", {
                                ref: e,
                                className: v.partnerGameTile,
                                alt: g.intl.formatToPlainString(g.t.rtm15P, { name: t.config.messages.gameTitle }),
                                src: (0, C.fh)(t, C.eC.GAME_TILE, w).url,
                            }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: v.bottomContainer,
                children: (0, r.jsxs)(o.hE2, {
                    size: "sm",
                    direction: "horizontal",
                    fullWidth: !0,
                    fullWidthContainer: !0,
                    children: [
                        P &&
                            (0, r.jsx)(s.u, {
                                text: g.intl.string(g.t.WmfZHZ),
                                children: (0, r.jsx)(o.hU, {
                                    icon: o.xPt,
                                    onClick: A,
                                    "aria-label": g.intl.string(g.t.WmfZHZ),
                                    variant: "secondary",
                                }),
                            }),
                        (0, r.jsx)(o.zxk, {
                            variant: "primary",
                            text: O,
                            onClick: () => {
                                (0, p.nc)(t, {
                                    content: m.jn.REWARD_MODAL,
                                    ctaContent: c.jZ.OPEN_GAME_LINK,
                                    impressionId: N,
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
function _(e) {
    let { quest: t, location: n } = e;
    return (0, r.jsx)(f.x8, {
        source: n,
        questId: t.id,
        isPreview: t.preview,
        children: (0, r.jsx)(
            b,
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
